// 生成式 Ambient 背景音：全部用 Web Audio 即時合成，不需要音檔、也不會重複循環。
// 聲部：
//   drone ：D 與 A 的低音長音，從頭到尾不停
//   pad   ：四個和弦輪流，每個和弦慢慢淡入淡出、互相交疊
//   bells ：D 大調五聲音階的隨機單音，經過 delay 與 reverb，像遠處的訊號聲
//   hiss  ：極小聲的濾波雜訊，當作無線電底噪
// 對外只有 start() / stop()。瀏覽器規定要在使用者點擊後才能出聲，所以 start() 必須由點擊觸發。

const CHORD_LEN = 14;   // 每個和弦停留秒數
const ATTACK = 5;       // 和弦淡入
const RELEASE = 8;      // 和弦淡出（與下一個和弦交疊）
const MASTER = 0.7;

// MIDI 音高。調性 D，偏 Lydian 的明亮懸浮感
const CHORDS = [
  [50, 57, 61, 64, 66], // Dmaj9
  [47, 54, 57, 62, 64], // Bm11
  [43, 50, 54, 57, 61], // Gmaj9
  [45, 52, 59, 62, 64], // Asus add9
];
const BELLS = [74, 76, 78, 81, 83, 86, 88, 90]; // D 大調五聲音階（D5 起）

const mtof = m => 440 * 2 ** ((m - 69) / 12);
const rand = (a, b) => a + Math.random() * (b - a);
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

// 用指數衰減的雜訊做殘響的 impulse response
function makeImpulse(ctx, seconds, decay) {
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** decay;
  }
  return buf;
}

function makeNoise(ctx, seconds) {
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  return buf;
}

function lfo(ctx, rate, depth, target) {
  const osc = ctx.createOscillator();
  const amt = ctx.createGain();
  osc.frequency.value = rate;
  amt.gain.value = depth;
  osc.connect(amt).connect(target);
  osc.start();
}

export function createAmbient() {
  let ctx = null;
  let master, padIn, bellIn;
  let chordTimer = 0, bellTimer = 0;
  let chordIndex = 0, nextChordAt = 0;
  let running = false;

  function build() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();

    // master → compressor → 喇叭
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 3;
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(comp).connect(ctx.destination);

    // 共用殘響
    const reverb = ctx.createConvolver();
    reverb.buffer = makeImpulse(ctx, 7, 2.6);
    const reverbOut = ctx.createGain();
    reverbOut.gain.value = 0.9;
    reverb.connect(reverbOut).connect(master);

    // pad：經過一顆慢慢開合的 lowpass
    const padFilter = ctx.createBiquadFilter();
    padFilter.type = 'lowpass';
    padFilter.frequency.value = 900;
    padFilter.Q.value = 0.6;
    lfo(ctx, 0.04, 450, padFilter.frequency);
    padIn = padFilter;
    const padDry = ctx.createGain();
    padDry.gain.value = 0.55;
    const padWet = ctx.createGain();
    padWet.gain.value = 0.8;
    padFilter.connect(padDry).connect(master);
    padFilter.connect(padWet).connect(reverb);

    // bells：乾聲少一點，大部分送進 delay 與殘響
    bellIn = ctx.createGain();
    const bellDry = ctx.createGain();
    bellDry.gain.value = 0.25;
    bellIn.connect(bellDry).connect(master);
    const delay = ctx.createDelay(2);
    delay.delayTime.value = 0.84;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.42;
    const delayTone = ctx.createBiquadFilter();
    delayTone.type = 'lowpass';
    delayTone.frequency.value = 2400;
    bellIn.connect(delay);
    delay.connect(delayTone).connect(feedback).connect(delay);
    delayTone.connect(reverb);
    const bellWet = ctx.createGain();
    bellWet.gain.value = 0.7;
    bellIn.connect(bellWet).connect(reverb);

    // drone：D2 + A2，振幅緩慢起伏
    [[38, 0.09], [45, 0.05]].forEach(([m, level]) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = mtof(m);
      const g = ctx.createGain();
      g.gain.value = level;
      lfo(ctx, rand(0.03, 0.07), level * 0.4, g.gain);
      osc.connect(g).connect(master);
      g.connect(reverb);
      osc.start();
    });

    // hiss：帶通雜訊，音量隨 LFO 漂動
    const noise = ctx.createBufferSource();
    noise.buffer = makeNoise(ctx, 4);
    noise.loop = true;
    const band = ctx.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.value = 700;
    band.Q.value = 0.8;
    lfo(ctx, 0.02, 300, band.frequency);
    const hiss = ctx.createGain();
    hiss.gain.value = 0.012;
    lfo(ctx, 0.05, 0.006, hiss.gain);
    noise.connect(band).connect(hiss).connect(master);
    noise.start();
  }

  function playChord(notes, t0) {
    const end = t0 + CHORD_LEN + RELEASE;
    notes.forEach(m => {
      const pan = ctx.createStereoPanner();
      pan.pan.value = rand(-0.6, 0.6);
      const env = ctx.createGain();
      const peak = 0.028;
      env.gain.setValueAtTime(0, t0);
      env.gain.linearRampToValueAtTime(peak, t0 + ATTACK);
      env.gain.setValueAtTime(peak, t0 + CHORD_LEN);
      env.gain.linearRampToValueAtTime(0, end);
      env.connect(pan).connect(padIn);
      // 兩顆微微走音的鋸齒波 → 合唱般的厚度
      [-7, 7].forEach(cents => {
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = mtof(m);
        osc.detune.value = cents + rand(-2, 2);
        osc.connect(env);
        osc.start(t0);
        osc.stop(end + 0.1);
      });
    });
  }

  function playBell(m, t0) {
    const f = mtof(m);
    const env = ctx.createGain();
    const peak = rand(0.04, 0.08);
    env.gain.setValueAtTime(0.0001, t0);
    env.gain.exponentialRampToValueAtTime(peak, t0 + 0.02);
    env.gain.exponentialRampToValueAtTime(0.0001, t0 + 4.5);
    const pan = ctx.createStereoPanner();
    pan.pan.value = rand(-0.8, 0.8);
    env.connect(pan).connect(bellIn);
    // 基音 + 一個不和諧泛音，聽起來像鐘或玻璃
    [[1, 1], [2.76, 0.18]].forEach(([ratio, level]) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = f * ratio;
      const g = ctx.createGain();
      g.gain.value = level;
      osc.connect(g).connect(env);
      osc.start(t0);
      osc.stop(t0 + 4.6);
    });
  }

  function scheduleChords() {
    const t = Math.max(ctx.currentTime + 0.1, nextChordAt);
    playChord(CHORDS[chordIndex % CHORDS.length], t);
    chordIndex++;
    nextChordAt = t + CHORD_LEN;
    chordTimer = setTimeout(scheduleChords, Math.max(0, (nextChordAt - ctx.currentTime - 1) * 1000));
  }

  function scheduleBells() {
    const t = ctx.currentTime + 0.05;
    // 偶爾連著彈 2～3 個音，像一句短短的旋律
    const count = Math.random() < 0.3 ? Math.ceil(rand(1, 3)) : 1;
    let note = pick(BELLS);
    for (let i = 0; i < count; i++) {
      playBell(note, t + i * rand(0.4, 0.9));
      const idx = BELLS.indexOf(note) + pick([-2, -1, 1, 2]);
      note = BELLS[Math.min(BELLS.length - 1, Math.max(0, idx))];
    }
    bellTimer = setTimeout(scheduleBells, rand(2.5, 8) * 1000);
  }

  async function start() {
    if (running) return;
    running = true;
    if (!ctx) build();
    await ctx.resume();
    if (!running) return;   // resume 期間又被按了停止
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(MASTER, now + 3);
    scheduleChords();
    bellTimer = setTimeout(scheduleBells, 4000);
  }

  function stop() {
    if (!running) return;
    running = false;
    clearTimeout(chordTimer);
    clearTimeout(bellTimer);
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(0, now + 1.5);
    // 淡出後暫停整個 AudioContext，省電；再次播放時時間軸從暫停處接續
    setTimeout(() => { if (!running) ctx.suspend(); }, 1600);
  }

  return { start, stop };
}

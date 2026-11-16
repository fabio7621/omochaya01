<script setup>
import { ref, onMounted } from 'vue';
import { useUi } from '@/composables/useUi.js';
import { layout } from '@/composables/useLayout.js';

/* 衛星鎖定框（桌機、可 hover 的裝置）：框住 3D 場景裡的太空站，點擊開啟本店紹介 */
const { aboutOpen, els, toggleAbout } = useUi();
const lockEl = ref(null), pathEl = ref(null), dotEl = ref(null);
onMounted(() => { els.lock = lockEl.value; });

// 由 MoonStage 每幀呼叫，rect 為太空站在畫面上的外框（px）
function update(rect) {
  const el = lockEl.value;
  if (!el) return;
  const pad = 12, w = rect.x1 - rect.x0 + pad * 2, h = (rect.y1 - rect.y0) * .78 + pad * 2;   // 圖片上下有留白，框收緊一點
  const lx = rect.x0 - pad, ly = (rect.y0 + rect.y1) / 2 - h / 2;
  el.style.transform = `translate(${lx.toFixed(1)}px, ${ly.toFixed(1)}px)`;
  el.style.width = `${w.toFixed(1)}px`; el.style.height = `${h.toFixed(1)}px`;
  // 側邊欄打開時，從面板邊緣拉一條虛線連到目標
  if (aboutOpen.value && layout.side && els.about) {
    const ax = els.about.getBoundingClientRect().right + 6, cy = ly + h / 2, ex = lx - 10;
    pathEl.value.setAttribute('d', `M${ax.toFixed(1)},${(cy + 26).toFixed(1)} L${(ax + 28).toFixed(1)},${cy.toFixed(1)} L${ex.toFixed(1)},${cy.toFixed(1)}`);
    dotEl.value.setAttribute('cx', ex.toFixed(1)); dotEl.value.setAttribute('cy', cy.toFixed(1));
  }
}
defineExpose({ update });
</script>

<template>
  <svg id="tether" aria-hidden="true"><path ref="pathEl" d="" /><circle ref="dotEl" r="3.5" cx="-10" cy="-10" /></svg>
  <button
    id="lock"
    ref="lockEl"
    type="button"
    :aria-label="aboutOpen ? '本店紹介を閉じる' : '本店紹介を開く'"
    :aria-expanded="aboutOpen"
    aria-controls="about"
    @click="toggleAbout"
  >
    <span class="frame"><i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i><i class="tk t"></i><i class="tk b"></i><i class="tk l"></i><i class="tk r"></i></span>
    <span class="ring"></span>
    <span class="lock-tag"><span class="off">TGT-02 ▸ <b>本店紹介</b></span><span class="on">LOCK ON ▸ <b>クリックで開く</b></span></span>
  </button>
</template>

<style scoped>
#lock{position:absolute;left:0;top:0;z-index:3;padding:0;border:0;background:none;cursor:pointer;color:var(--yellow);
  display:none;will-change:transform;-webkit-tap-highlight-color:transparent;transition:opacity .4s ease}
html.hoverable #lock{display:block}
html.menu-open #lock{opacity:0;pointer-events:none}

/* 四角框 + 刻度 */
#lock .frame{position:absolute;inset:0;animation:breathe 2.6s ease-in-out infinite;transition:transform .35s cubic-bezier(.2,.9,.25,1.3)}
@keyframes breathe{50%{transform:scale(1.07)}}
#lock .c{position:absolute;width:15px;height:15px;border:2px solid currentColor;transition:border-color .2s, transform .35s cubic-bezier(.2,.9,.25,1.3)}
#lock .tl{left:0;top:0;border-right:0;border-bottom:0}
#lock .tr{right:0;top:0;border-left:0;border-bottom:0}
#lock .bl{left:0;bottom:0;border-right:0;border-top:0}
#lock .br{right:0;bottom:0;border-left:0;border-top:0}
#lock .tk{position:absolute;background:currentColor;opacity:.75}
#lock .tk.t{left:50%;top:-7px;width:1.5px;height:9px}
#lock .tk.b{left:50%;bottom:-7px;width:1.5px;height:9px}
#lock .tk.l{top:50%;left:-7px;height:1.5px;width:9px}
#lock .tk.r{top:50%;right:-7px;height:1.5px;width:9px}
#lock .ring{position:absolute;left:50%;top:50%;width:72%;aspect-ratio:1;border:1px dashed currentColor;border-radius:50%;opacity:0;
  transform:translate(-50%,-50%) scale(1.5);transition:opacity .3s, transform .4s cubic-bezier(.2,.9,.25,1.2)}

/* 標籤。前四個屬性是原版與首屏 .tag 同名而連帶套用的樣式，為了外觀一致照樣保留 */
#lock .lock-tag{text-shadow:0 .2cqw .9cqw rgba(0,0,0,.85);margin-top:1.1cqw;opacity:.92;animation:fade 1s 1s both;
  position:absolute;left:-2px;top:calc(100% + 12px);white-space:nowrap;display:flex;align-items:center;gap:.5em;
  font:italic 700 11px/1 "Chakra Petch",sans-serif;letter-spacing:.14em;padding:5px 8px;border:1px solid currentColor;
  background:rgba(7,8,11,.55);transform:skewX(-10deg);transition:background .2s, color .2s}
#lock .lock-tag b{font:900 11px/1 "Zen Kaku Gothic New",sans-serif;letter-spacing:.12em}
#lock .lock-tag .on{display:none}

/* hover／focus：鎖定 */
#lock:hover .frame,#lock:focus-visible .frame{animation:none;transform:scale(.88)}
#lock:hover .c,#lock:focus-visible .c{border-color:var(--red)}
#lock:hover .ring,#lock:focus-visible .ring{opacity:.85;animation:spin 7s linear infinite}
@keyframes spin{from{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}
#lock:hover .lock-tag,#lock:focus-visible .lock-tag{background:var(--yellow);color:#0a0b0e;border-color:var(--yellow)}
#lock:hover .lock-tag .off,#lock:focus-visible .lock-tag .off{display:none}
#lock:hover .lock-tag .on,#lock:focus-visible .lock-tag .on{display:inline}
#lock:focus-visible{outline:none}

/* 本店紹介開啟中 */
html.about-open #lock .frame{animation:none;transform:scale(.88)}
html.about-open #lock .c{border-color:var(--red)}
html.about-open #lock .lock-tag{background:var(--red);color:var(--cream);border-color:var(--red)}

/* 連到側邊欄的虛線 */
#tether{position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none;overflow:visible;opacity:0;transition:opacity .4s ease}
html.side.about-open #tether{opacity:1;transition:opacity .5s .45s ease}
#tether path{fill:none;stroke:var(--yellow);stroke-width:1.3;stroke-dasharray:5 5;animation:dash 1.2s linear infinite}
#tether circle{fill:var(--yellow)}
@keyframes dash{to{stroke-dashoffset:-20}}
</style>

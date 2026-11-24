import { ref, readonly } from 'vue';
import { createAmbient } from '@/audio/createAmbient.js';

// 背景音樂開關。狀態放在模組層級，全站共用一份；音訊引擎第一次播放時才建立
const playing = ref(false);
let engine = null;

function toggleAmbient() {
  engine ??= createAmbient();
  playing.value = !playing.value;
  if (playing.value) engine.start();
  else engine.stop();
}

export function useAmbient() {
  return { playing: readonly(playing), toggleAmbient };
}

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeroTitle from './HeroTitle.vue';
import SatelliteLock from './SatelliteLock.vue';
import ScrollHint from './ScrollHint.vue';
import CategoryMenu from '@/components/menu/CategoryMenu.vue';
import { createMoonScene } from '@/three/createMoonScene.js';
import { layout, updateLayoutMode, updateSafeFrame, watchHoverCapability } from '@/composables/useLayout.js';
import { useUi } from '@/composables/useUi.js';
import { site } from '@/data/site.js';

/* 第一屏舞台：WebGL 畫布 + 疊在上面的 DOM（標題、選單、鎖定框） */
const { aboutOpen, setAbout } = useUi();
const stageEl = ref(null), canvasEl = ref(null), heroRef = ref(null), lockRef = ref(null);
const veilLifted = ref(false);        // 貼圖載完後掀開遮幕
const webglError = ref(false);

let scene = null, observer = null, veilTimer = 0, stopHoverWatch = null;

function onResize() {
  updateLayoutMode();                                          // 先決定 side／stack（會影響捲軸與舞台寬度）
  const w = Math.max(1, stageEl.value.clientWidth), h = Math.max(1, stageEl.value.clientHeight);
  updateSafeFrame(w, h);
  scene?.resize(w, h);
  if (!layout.side && aboutOpen.value) setAbout(false);        // 離開寬螢幕模式時收起抽屜
}

onMounted(() => {
  stopHoverWatch = watchHoverCapability();
  try {
    scene = createMoonScene(canvasEl.value, {
      onReady: () => { veilLifted.value = true; },
      wantSatRect: () => layout.hoverable,
      onFrame: ({ sx, sy, satRect }) => {
        heroRef.value?.setParallax(sx, sy);
        if (satRect) lockRef.value?.update(satRect);
      },
    });
  } catch (e) {
    webglError.value = true;
    console.error(e);
  }
  addEventListener('resize', onResize);
  onResize();
  scene?.start();
  // 第一屏離開畫面時暫停渲染
  observer = new IntersectionObserver(([entry]) => scene?.setVisible(entry.isIntersecting));
  observer.observe(stageEl.value);
  veilTimer = setTimeout(() => { veilLifted.value = true; }, 4000);   // 貼圖太慢也不要一直黑畫面
});

onBeforeUnmount(() => {
  removeEventListener('resize', onResize);
  clearTimeout(veilTimer);
  observer?.disconnect();
  stopHoverWatch?.();
  scene?.dispose();
});
</script>

<template>
  <div id="stage" ref="stageEl">
    <canvas id="gl" ref="canvasEl"></canvas>
    <HeroTitle ref="heroRef" />
    <CategoryMenu />
    <div class="credit">{{ site.credit.label }} <a :href="site.credit.url">{{ site.credit.name }}</a> {{ site.credit.license }}</div>
    <div id="veil" :class="{ lifted: veilLifted }"></div>
    <div v-if="webglError" id="err">這個瀏覽器無法啟用 WebGL，3D 場景無法顯示。</div>
    <SatelliteLock ref="lockRef" />
    <ScrollHint />
  </div>
</template>

<style scoped>
/* 場景鋪滿整個視窗；743:1005 是構圖的「安全框」，寬螢幕時左右自然延伸 */
#stage{position:relative;height:100vh;height:100svh;overflow:hidden;background:#07080b}
#gl{position:absolute;inset:0;width:100%;height:100%;display:block;cursor:grab;touch-action:none;transition:filter .6s ease}
#gl.drag{cursor:grabbing}
html.stack #gl{touch-action:pan-y}
html.menu-open #gl{filter:brightness(.5) saturate(.65)}

.credit{position:absolute;right:12px;bottom:8px;font:500 9px/1 "Chakra Petch",sans-serif;letter-spacing:.06em;opacity:.35;color:var(--cream)}
.credit a{color:inherit}
html.phone .credit{font-size:8px;bottom:calc(6px + env(safe-area-inset-bottom))}

#veil{z-index:10;position:absolute;inset:0;background:#07080b;pointer-events:none;transition:opacity 1.4s ease}
#veil.lifted{opacity:0}
#err{position:absolute;inset:0;z-index:11;display:grid;place-items:center;text-align:center;padding:24px;font-weight:700}
</style>

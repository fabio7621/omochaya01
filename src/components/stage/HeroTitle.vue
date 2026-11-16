<script setup>
import { ref } from 'vue';
import { site } from '@/data/site.js';

const headEl = ref(null);
const chars = [...site.title];          // 標題逐字落下

// 由 MoonStage 每幀呼叫：跟著滑鼠做輕微視差（直接改 style，不經過響應式）
function setParallax(sx, sy) {
  if (headEl.value) headEl.value.style.transform = `translate(${(-sx * 6).toFixed(2)}px, ${(-sy * 4).toFixed(2)}px)`;
}
defineExpose({ setParallax });
</script>

<template>
  <!-- #safe 是 743:1005 的構圖安全框，內部用 cqw 排版 -->
  <div id="safe">
    <div ref="headEl" class="head">
      <div class="hero">
        <div class="title-wrap">
          <span class="year">{{ site.year }}</span>
          <h1 class="title"><span v-for="(ch, i) in chars" :key="i" :style="{ '--i': i }">{{ ch }}</span><em :style="{ '--i': chars.length }">{{ site.titleNo }}</em></h1>
        </div>
        <div class="sub">{{ site.sub }}</div>
        <div class="tag">{{ site.tagline }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#safe{position:absolute;left:50%;top:50%;width:min(100vw, calc(100vh * 743 / 1005));aspect-ratio:743/1005;
  transform:translate(-50%,-50%);container-type:size;pointer-events:none;z-index:6}
html.phone #safe{width:100vw;height:100%;aspect-ratio:auto;left:0;top:0;transform:none}
.head{position:absolute;left:0;right:0;top:0;padding:13.1cqw 5cqw 0;pointer-events:none;will-change:transform}
html.phone .head{padding:calc(15.2cqw + env(safe-area-inset-top)) 5.5cqw 0}

.title-wrap{display:flex;align-items:center;gap:1.4cqw;margin-top:.8cqw}
.year{font:700 1.7cqw "Chakra Petch",sans-serif;letter-spacing:.08em}
.title{font-family:"Dela Gothic One","Zen Kaku Gothic New",sans-serif;font-weight:400;color:var(--red);
  font-size:11.4cqw;line-height:1.02;letter-spacing:-.03em;transform:skewX(-9deg);transform-origin:left bottom;white-space:nowrap}
.title span,.title em{display:inline-block;animation:drop .8s cubic-bezier(.2,.9,.25,1.25) both;animation-delay:calc(var(--i)*70ms + .2s)}
.title em{font-style:italic;font-family:"Chakra Petch",sans-serif;font-weight:700;letter-spacing:-.06em;margin-left:.04em}
@keyframes drop{from{opacity:0;transform:translateY(-.35em) scaleY(1.3)}to{opacity:1;transform:none}}
.sub{text-shadow:0 .3cqw 1.2cqw rgba(0,0,0,.75);font-weight:900;font-size:4.5cqw;letter-spacing:.04em;margin-top:.5cqw;animation:fade 1s .8s both}
.tag{text-shadow:0 .2cqw .9cqw rgba(0,0,0,.85);font-weight:500;font-size:2.3cqw;letter-spacing:.14em;margin-top:1.1cqw;opacity:.92;animation:fade 1s 1s both}

html.phone .year{font-size:2.6cqw}
html.phone .title{font-size:10.6cqw}
html.phone .sub{font-size:5.4cqw}
html.phone .tag{font-size:3.3cqw}

/* 選單開啟時標題淡出 */
.hero{transition:opacity .4s ease, transform .5s ease}
html.menu-open .hero{opacity:0;transform:translateX(-3cqw)}
</style>

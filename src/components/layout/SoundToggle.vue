<script setup>
import { useAmbient } from '@/composables/useAmbient.js';

const { playing, toggleAmbient } = useAmbient();
</script>

<template>
  <button
    class="sound-btn"
    :class="{ on: playing }"
    type="button"
    @click="toggleAmbient"
  >
    <span class="bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <span class="label">{{ playing ? '音楽を止める' : '音楽を流す' }}</span>
  </button>
</template>

<style scoped>
/* 四條空心音量柱：關閉時壓成一條線，播放時上下跳動 */
.sound-btn{pointer-events:auto;position:relative;display:flex;align-items:center;gap:max(calc(var(--u) * 1.1),7px);
  height:calc(var(--u) * 4.2);min-height:23px;background:none;border:0;padding:0;cursor:pointer;color:var(--yellow);
  transform:skewX(-12deg);-webkit-tap-highlight-color:transparent}
.sound-btn::before{content:"";position:absolute;inset:-12px}                 /* 擴大可點範圍 */
.bars{display:flex;align-items:flex-end;gap:max(calc(var(--u) * .45),3px);height:100%}
.label{font:700 max(calc(var(--u) * 1.5),11px)/1 "Zen Kaku Gothic New","Hiragino Sans","Noto Sans JP",sans-serif;
  letter-spacing:.12em;white-space:nowrap;color:var(--cream);transition:color .25s}
.sound-btn:hover .label,.sound-btn:focus-visible .label,.sound-btn.on .label{color:var(--yellow)}
html.phone .label{font-size:max(calc(var(--u) * 2.4),11px)}
.sound-btn i{width:max(calc(var(--u) * .7),5px);height:22%;border:max(calc(var(--u) * .24),1.5px) solid currentColor;
  transition:height .4s cubic-bezier(.7,0,.2,1)}
.sound-btn:hover i,.sound-btn:focus-visible i{height:38%}
.sound-btn.on i{animation:eq 1.6s ease-in-out infinite alternate}
.sound-btn.on i:nth-child(1){animation-delay:-.4s}
.sound-btn.on i:nth-child(2){animation-delay:-1.1s;animation-duration:2.1s}
.sound-btn.on i:nth-child(3){animation-delay:-.2s;animation-duration:1.3s}
.sound-btn.on i:nth-child(4){animation-delay:-.8s;animation-duration:1.9s}
@keyframes eq{0%{height:25%}50%{height:90%}100%{height:45%}}
.sound-btn:focus-visible{outline:none}
.sound-btn:focus-visible::after{content:"";position:absolute;inset:-7px;border:1px dashed var(--yellow)}
@media (prefers-reduced-motion: reduce){
  .sound-btn.on i{animation:none;height:70%}
  .sound-btn.on i:nth-child(2n){height:45%}
}
</style>

<script setup>
import { useUi } from '@/composables/useUi.js';

const { menuOpen, els, setMenu } = useUi();
</script>

<template>
  <button
    :ref="el => (els.menuBtn = el)"
    class="menu-btn"
    type="button"
    :aria-label="menuOpen ? 'メニューを閉じる' : 'メニューを開く'"
    :aria-expanded="menuOpen"
    aria-controls="menu"
    @click="setMenu(!menuOpen)"
  ><i></i><i></i><i></i></button>
</template>

<style scoped>
/* 線框漢堡：三條空心長條，不加底色 */
.menu-btn{pointer-events:auto;position:relative;width:calc(var(--u) * 5.6);height:calc(var(--u) * 4.2);min-width:30px;min-height:23px;
  background:none;border:0;padding:0;cursor:pointer;color:var(--yellow);transform:skewX(-12deg);-webkit-tap-highlight-color:transparent}
.menu-btn::before{content:"";position:absolute;inset:-12px}                 /* 擴大可點範圍 */
.menu-btn i{position:absolute;left:0;height:max(calc(var(--u) * .95),6px);border:max(calc(var(--u) * .24),1.5px) solid currentColor;background:transparent;
  transition:top .45s cubic-bezier(.7,0,.2,1),transform .45s cubic-bezier(.7,0,.2,1),width .35s ease,opacity .25s}
.menu-btn i:nth-child(1){top:0;width:100%}
.menu-btn i:nth-child(2){top:calc(50% - max(calc(var(--u) * .475),3px));width:62%}
.menu-btn i:nth-child(3){top:calc(100% - max(calc(var(--u) * .95),6px));width:84%}
.menu-btn:hover i:nth-child(2),.menu-btn:focus-visible i:nth-child(2){width:100%}
.menu-btn:hover i:nth-child(3),.menu-btn:focus-visible i:nth-child(3){width:100%}
.menu-btn:focus-visible{outline:none}
.menu-btn:focus-visible::after{content:"";position:absolute;inset:-7px;border:1px dashed var(--yellow)}
/* 開啟時變成 ✕ */
html.menu-open .menu-btn i:nth-child(1){top:calc(50% - max(calc(var(--u) * .475),3px));width:100%;transform:rotate(38deg)}
html.menu-open .menu-btn i:nth-child(2){opacity:0;transform:translateX(-40%)}
html.menu-open .menu-btn i:nth-child(3){top:calc(50% - max(calc(var(--u) * .475),3px));width:100%;transform:rotate(-38deg)}
@media (prefers-reduced-motion: reduce){ .menu-btn i{transition-duration:.01s !important} }
</style>

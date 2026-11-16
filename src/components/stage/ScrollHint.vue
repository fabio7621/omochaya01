<template>
  <!-- 窄螢幕才出現：提示往下捲有本店紹介 -->
  <div class="scroll-hint" aria-hidden="true">SCROLL<span>本店紹介 ↓</span></div>
</template>

<style scoped>
.scroll-hint{display:none}
html.stack .scroll-hint{display:flex;position:absolute;left:50%;bottom:calc(30px + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:2;
  flex-direction:column;align-items:center;gap:4px;font:italic 700 10px/1 "Chakra Petch",sans-serif;letter-spacing:.3em;color:var(--cream);opacity:.8;
  animation:bob 2.2s ease-in-out infinite;pointer-events:none}
html.menu-open .scroll-hint{opacity:0}
html.stack .scroll-hint span{font:900 11px/1 "Zen Kaku Gothic New",sans-serif;letter-spacing:.2em;color:var(--yellow)}
@keyframes bob{50%{transform:translate(-50%,6px)}}
</style>

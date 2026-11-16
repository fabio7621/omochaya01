<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import MenuButton from './MenuButton.vue';
import { site } from '@/data/site.js';

// 捲動後替導覽列加上底色
const scrolled = ref(false);
const onScroll = () => { scrolled.value = scrollY > 24; };
onMounted(() => addEventListener('scroll', onScroll, { passive: true }));
onBeforeUnmount(() => removeEventListener('scroll', onScroll));
</script>

<template>
  <header id="topnav" :class="{ scrolled }">
    <div class="bar">
      <div class="brand">
        <MenuButton />
        <div class="logo">{{ site.logo[0] }}<b>·</b>{{ site.logo[1] }}</div>
      </div>
      <div class="issue">{{ site.issue }}</div>
    </div>
    <div class="rule"><i></i><i></i><i></i></div>
  </header>
</template>

<style scoped>
#topnav{position:fixed;left:0;right:0;top:0;z-index:7;pointer-events:none;
  padding:calc(var(--u) * 4.2 + env(safe-area-inset-top)) var(--nav-x) calc(var(--u) * 1.2);transition:background .35s ease}
#topnav.scrolled{background:linear-gradient(#0a0b0e 72%, rgba(10,11,14,0))}
html.phone #topnav{padding-top:calc(var(--u) * 5.5 + env(safe-area-inset-top))}
.bar{display:flex;justify-content:space-between;align-items:flex-end}
.brand{display:flex;align-items:center;gap:calc(var(--u) * 2.4)}
.logo{font:italic 700 calc(var(--u) * 3.1)/1 "Chakra Petch",sans-serif;border:calc(var(--u) * .3) solid var(--cream);padding:calc(var(--u) * .6) calc(var(--u) * 1.8) calc(var(--u) * .9);transform:skewX(-12deg)}
.logo b{color:var(--red)}
.issue{font:italic 700 calc(var(--u) * 7.6)/.78 "Chakra Petch",sans-serif;color:transparent;-webkit-text-stroke:calc(var(--u) * .3) var(--cream)}
html.phone .logo{font-size:calc(var(--u) * 3.8)}
html.phone .issue{font-size:calc(var(--u) * 8.6)}
.rule{margin-top:calc(var(--u) * 1.5);height:calc(var(--u) * 1.5);position:relative}
.rule i{position:absolute;left:0;right:0;background:var(--cream)}
.rule i:nth-child(1){top:0;height:max(calc(var(--u) * .45),2px);clip-path:polygon(0 0,64% 0,63.6% 100%,0 100%)}
.rule i:nth-child(2){top:0;height:max(calc(var(--u) * .45),2px);clip-path:polygon(64.4% 0,100% 0,100% 100%,64% 100%)}
.rule i:nth-child(3){bottom:0;height:max(calc(var(--u) * .22),1px)}
</style>

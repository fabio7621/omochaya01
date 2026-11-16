<script setup>
import { useUi } from '@/composables/useUi.js';
import { shop } from '@/data/shop.js';
import shopMapUrl from '@/assets/images/shop-map.webp';

const { lightboxOpen, els, closeLightbox } = useUi();
</script>

<template>
  <!-- 地圖燈箱：點任何地方關閉 -->
  <div v-show="lightboxOpen" id="lightbox" @click="closeLightbox">
    <button :ref="el => (els.lightboxClose = el)" type="button" class="lb-close" aria-label="閉じる">×</button>
    <img :src="shopMapUrl" :alt="shop.map.alt">
  </div>
</template>

<style scoped>
#lightbox{position:fixed;inset:0;z-index:20;display:grid;place-items:center;padding:4vmin;cursor:zoom-out;
  background:radial-gradient(rgba(10,11,14,.6) 1.1px, transparent 1.5px) 0 0/5px 5px, rgba(7,8,11,.88)}
#lightbox img{max-width:100%;max-height:100%;border:3px solid var(--cream);box-shadow:8px 8px 0 var(--red)}
.lb-close{position:absolute;top:14px;right:18px;width:44px;height:44px;font:700 30px/1 "Chakra Petch",sans-serif;color:var(--yellow);background:none;border:2px solid var(--yellow);cursor:pointer;transform:skewX(-10deg)}
</style>

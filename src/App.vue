<script setup>
import TopNav from '@/components/layout/TopNav.vue';
import MoonStage from '@/components/stage/MoonStage.vue';
import AboutPanel from '@/components/about/AboutPanel.vue';
import { useGlobalKeys } from '@/composables/useGlobalKeys.js';

useGlobalKeys();
</script>

<template>
  <TopNav />
  <MoonStage />
  <AboutPanel />
</template>

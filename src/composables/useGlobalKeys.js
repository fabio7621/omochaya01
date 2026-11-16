import { onMounted, onBeforeUnmount } from 'vue';
import { useUi } from './useUi.js';

// 全域鍵盤操作：Esc 一次只關最上層；選單開啟時把 Tab 焦點留在選單內
export function useGlobalKeys() {
  const { menuOpen, aboutOpen, lightboxOpen, els, setMenu, closeAbout, closeLightbox } = useUi();

  function onKeydown(e) {
    if (e.key === 'Escape') {
      if (lightboxOpen.value) closeLightbox();
      else if (menuOpen.value) setMenu(false);
      else if (aboutOpen.value) closeAbout();
      return;
    }
    if (e.key === 'Tab' && menuOpen.value && els.menu) {
      const f = [els.menuBtn, ...els.menu.querySelectorAll('a')], i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  }

  onMounted(() => addEventListener('keydown', onKeydown));
  onBeforeUnmount(() => removeEventListener('keydown', onKeydown));
}

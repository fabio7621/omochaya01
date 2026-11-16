import { ref, readonly, watch } from 'vue';
import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '@/styles/fancybox-theme.css';
import { layout } from './useLayout.js';

// 全站 UI 狀態：漢堡選單、本店紹介抽屜、地圖燈箱。
// 狀態放在模組層級，所有元件共用同一份（不需要 Pinia）。
const root = document.documentElement;
const menuOpen = ref(false);
const aboutOpen = ref(false);
const lightboxOpen = ref(false);

// 需要互相搬移焦點的 DOM 節點，由各元件掛載時登記
const els = { menuBtn: null, menu: null, lock: null, about: null, aboutClose: null };

watch(menuOpen, v => root.classList.toggle('menu-open', v), { flush: 'sync' });
watch(aboutOpen, v => root.classList.toggle('about-open', v), { flush: 'sync' });

function setAbout(open) {
  aboutOpen.value = open;
  if (open) setTimeout(() => els.aboutClose?.focus({ preventScroll: true }), 300);
}
function closeAbout() {
  setAbout(false);
  els.lock?.focus({ preventScroll: true });
}
// 點衛星鎖定框：寬螢幕開關左側抽屜；窄螢幕捲到下方的本店紹介
function toggleAbout() {
  if (layout.side) setAbout(!aboutOpen.value);
  else els.about?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setMenu(open) {
  menuOpen.value = open;
  if (open && aboutOpen.value) setAbout(false);
  if (open) setTimeout(() => els.menu?.querySelector('.m-list a')?.focus({ preventScroll: true }), 420);
  else els.menuBtn?.focus({ preventScroll: true });
}

// 地圖燈箱交給 Fancybox：Esc 關閉、焦點鎖定、關閉後焦點回到觸發按鈕都由它處理。
// 這裡只記下開關狀態，讓全域 Esc 知道這一下歸 Fancybox，不要連抽屜一起關。
// triggerEl 內的 <img> 當作 thumbEl，開啟時會從縮圖位置放大出來。
function openLightbox({ src, alt, caption, triggerEl }) {
  lightboxOpen.value = true;
  Fancybox.show([{ src, type: 'image', alt, caption, triggerEl, thumbEl: triggerEl?.querySelector('img') ?? undefined }], {
    mainClass: 'map-lightbox',
    theme: 'dark',
    on: { destroy: () => { lightboxOpen.value = false; } },
  });
}

export function useUi() {
  return {
    menuOpen: readonly(menuOpen),
    aboutOpen: readonly(aboutOpen),
    lightboxOpen: readonly(lightboxOpen),
    els,
    setMenu, setAbout, closeAbout, toggleAbout, openLightbox,
  };
}

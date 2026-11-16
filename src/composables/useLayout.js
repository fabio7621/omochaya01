import { reactive, readonly } from 'vue';
import { POSTER_ASPECT, computeSafeFrame } from '@/config/poster.js';

// 版面模式。class 直接掛在 <html>（CSS 用 html.side / html.stack / html.phone / html.hoverable 判斷），
// 同時保留一份 reactive 狀態給元件邏輯用。
const root = document.documentElement;
const state = reactive({ side: false, phone: false, hoverable: false });

export const layout = readonly(state);

// 左側留白夠寬 → 本店紹介放左側（side）；否則放到第一屏下方（stack）
// 需同步執行：stack 模式會出現捲軸，之後量到的舞台寬度才正確
export function updateLayoutMode() {
  const vw = innerWidth, vh = innerHeight;
  state.side = vw / vh >= POSTER_ASPECT && (vw - vh * POSTER_ASPECT) / 2 >= 300 && vh >= 600;
  root.classList.toggle('side', state.side);
  root.classList.toggle('stack', !state.side);
}

// 依舞台尺寸寫入安全框的 CSS 變數（--u、cqw 等排版單位都靠它）
export function updateSafeFrame(stageW, stageH) {
  const frame = computeSafeFrame(stageW, stageH);
  state.phone = frame.phone;
  root.classList.toggle('phone', frame.phone);
  root.style.setProperty('--safe-w', frame.width + 'px');
  root.style.setProperty('--safe-l', ((stageW - frame.width) / 2) + 'px');
}

// 可 hover 的裝置（桌機滑鼠）才顯示衛星鎖定框。回傳取消監聽的函式。
export function watchHoverCapability() {
  const mq = matchMedia('(hover: hover) and (pointer: fine)');
  const sync = () => { state.hoverable = mq.matches; root.classList.toggle('hoverable', mq.matches); };
  sync();
  mq.addEventListener?.('change', sync);
  return () => mq.removeEventListener?.('change', sync);
}

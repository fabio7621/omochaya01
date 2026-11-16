// 海報構圖的「安全框」比例（743:1005）。版面與 3D 相機都以它為基準。
export const POSTER_ASPECT = 743 / 1005;

// 依視窗大小算出安全框：比海報寬 → 以高度為準；比海報窄（手機）→ 整個螢幕就是構圖框
export function computeSafeFrame(width, height) {
  const phone = width / height < POSTER_ASPECT;
  return {
    phone,
    width: phone ? width : height * POSTER_ASPECT,
    height,
  };
}

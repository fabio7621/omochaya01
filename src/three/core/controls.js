// 互動：滑鼠視差、拖曳微轉（幅度小，維持海報構圖）
export function createPointerControls(canvas) {
  const st = { mx: 0, my: 0, sx: 0, sy: 0, yaw: 0, yawT: 0, pit: 0, pitT: 0 };
  let drag = false, lx = 0, ly = 0;

  const onDown = e => {
    drag = true; lx = e.clientX; ly = e.clientY;
    canvas.classList.add('drag'); canvas.setPointerCapture(e.pointerId);
  };
  const onEnd = e => {
    drag = false; canvas.classList.remove('drag'); st.yawT = 0; st.pitT = 0;
    if (e && e.pointerType !== 'mouse') { st.mx = 0; st.my = 0; }
  };
  const onMove = e => {
    st.mx = e.clientX / innerWidth * 2 - 1; st.my = e.clientY / innerHeight * 2 - 1;
    if (!drag) return;
    st.yawT = Math.max(-.14, Math.min(.14, st.yawT - (e.clientX - lx) * .0012));
    st.pitT = Math.max(-.05, Math.min(.06, st.pitT + (e.clientY - ly) * .0006));
    lx = e.clientX; ly = e.clientY;
  };

  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointerup', onEnd);
  canvas.addEventListener('pointercancel', onEnd);
  addEventListener('pointermove', onMove);

  return {
    state: st,
    // 每幀把目標值平滑逼近
    update(dt) {
      const k = 1 - Math.exp(-dt * 3);
      st.sx += (st.mx - st.sx) * k; st.sy += (st.my - st.sy) * k;
      const kd = 1 - Math.exp(-dt * (drag ? 8 : 2));
      st.yaw += (st.yawT - st.yaw) * kd;
      st.pit += (st.pitT - st.pit) * kd;
    },
    dispose() {
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointerup', onEnd);
      canvas.removeEventListener('pointercancel', onEnd);
      removeEventListener('pointermove', onMove);
    },
  };
}

import * as THREE from 'three';

// 必須在建立任何 THREE.Color 之前關閉，顏色才會跟原版一樣（不做色彩空間轉換）
THREE.ColorManagement.enabled = false;

// 手機／平板：降低負載
export const LOW = matchMedia('(pointer: coarse)').matches || Math.min(screen.width, screen.height) < 600;
export const DPR = Math.min(window.devicePixelRatio || 1, LOW ? 1.6 : 2);

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.setPixelRatio(DPR);
  renderer.setClearColor(0x07080b, 1);
  return renderer;
}

// 所有材質共用的 uniform（同一個物件參照，改一次全部生效）
export function createSharedUniforms() {
  return {
    uLight: { value: new THREE.Vector3(-0.62, 0.5, 0.38).normalize() },   // 月面光源：左上偏後
    uDot: { value: Math.max(3.4, 4.2 * DPR) },
    uTime: { value: 0 },
  };
}

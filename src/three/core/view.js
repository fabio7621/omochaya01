import * as THREE from 'three';
import { POSTER_ASPECT } from '@/config/poster.js';
import { smooth } from './noise.js';

// 相機（構圖對齊參考圖：地平線約 63%、地球佔畫面寬 80%）
export const CAM = new THREE.Vector3(0, 1.5, 0);
const POSTER_FOV = 62, PHONE_FOV = 80;
const POSTER_PITCH = 8.9, PHONE_PITCH = 8.4;

export function createView() {
  return {
    camera: new THREE.PerspectiveCamera(POSTER_FOV, POSTER_ASPECT, 0.1, 8000),
    pitch: POSTER_PITCH * Math.PI / 180,
    safe: { w: 1, h: 1 },      // 安全框（px）
    size: { w: 1, h: 1 },      // 畫布（px）
    blend: 1,                  // 0 = 細長手機構圖，1 = 海報構圖
  };
}

// 視窗尺寸改變時，更新相機視角與安全框
export function resizeView(view, w, h) {
  const { camera } = view;
  const a = w / h;
  view.size.w = w; view.size.h = h;
  camera.aspect = a;
  if (a >= POSTER_ASPECT) {
    // 比海報寬：垂直視角固定，左右自然延伸
    view.safe.w = h * POSTER_ASPECT; view.safe.h = h;
    view.blend = 1;
  } else {
    // 比海報窄（手機）：以整個螢幕為構圖框，視角拉高讓地球放大、車子置中
    view.safe.w = w; view.safe.h = h;
    view.blend = smooth(.46, POSTER_ASPECT, a);
  }
  camera.fov = PHONE_FOV + (POSTER_FOV - PHONE_FOV) * view.blend;
  view.pitch = (PHONE_PITCH + (POSTER_PITCH - PHONE_PITCH) * view.blend) * Math.PI / 180;
  camera.updateProjectionMatrix();
}

// 把相機擺回基準位置（擺放物件前呼叫，避免受滑鼠視差影響）
export function resetCamera(view) {
  view.camera.position.copy(CAM);
  view.camera.rotation.set(view.pitch, 0, 0, 'YXZ');
  view.camera.updateMatrixWorld();
}

// 安全框內的比例座標（0~1，左上為原點）→ 從相機射出的方向
export function safeFrameRay(view, x, y) {
  const fx = view.safe.w / view.size.w, fy = view.safe.h / view.size.h;
  const p = new THREE.Vector3((x * 2 - 1) * fx, (1 - y * 2) * fy, .5).unproject(view.camera);
  return p.sub(CAM).normalize();
}

// 在指定深度下，「安全框寬度的一半」對應的世界長度
export function safeHalfWidthAt(view, depth) {
  const { camera } = view;
  return depth * Math.tan(camera.fov * Math.PI / 360) * camera.aspect * (view.safe.w / view.size.w);
}

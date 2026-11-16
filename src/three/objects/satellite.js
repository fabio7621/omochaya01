import * as THREE from 'three';
import { CAM, resetCamera, safeFrameRay, safeHalfWidthAt } from '../core/view.js';
import { spriteVertex, satelliteFragment } from '../shaders/sprite.js';

/* 太空站：去背圖，掛在地球右側的前方（比地球近，會有視差） */
const SAT_POS = {                                                   // 中心點與寬度，皆為安全框比例
  poster: { x: .855, y: .35, w: .13 },
  phone: { x: .83, y: .41, w: .18 },
};
const SAT_DIST = 380;                                               // 離相機的距離（地球在 1100）
const CORNERS = [[-.5, -.5], [.5, -.5], [.5, .5], [-.5, .5]];

export function createSatellite({ uniforms }) {
  const root = new THREE.Group();
  const anchor = new THREE.Vector3(), drift = new THREE.Vector3(), corner = new THREE.Vector3();
  const rect = { x0: 0, y0: 0, x1: 0, y1: 0 };
  let mesh = null, aspect = 1300 / 656, size = 1;

  return {
    root,
    get loaded() { return !!mesh; },

    place(view) {
      resetCamera(view);
      const m = view.blend, at = {};
      for (const k of ['x', 'y', 'w']) at[k] = m === 1 ? SAT_POS.poster[k] : SAT_POS.phone[k] + (SAT_POS.poster[k] - SAT_POS.phone[k]) * m;
      anchor.copy(CAM).addScaledVector(safeFrameRay(view, at.x, at.y), SAT_DIST);
      const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(view.camera.quaternion);
      const depth = anchor.clone().sub(CAM).dot(fwd);
      size = at.w * 2 * safeHalfWidthAt(view, depth);
      if (mesh) mesh.scale.set(size, size / aspect, 1);
    },

    setTexture(tex) {
      aspect = tex.image.width / tex.image.height;
      mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
        uniforms: Object.assign({}, uniforms, { map: { value: tex } }), transparent: true, depthWrite: false,
        vertexShader: spriteVertex,
        fragmentShader: satelliteFragment,
      }));
      mesh.renderOrder = 3;
      mesh.scale.set(size, size / aspect, 1);
      root.add(mesh);
    },

    // 面向鏡頭、緩慢漂移與微微翻滾
    update(t, camera) {
      if (!mesh) return;
      mesh.position.copy(anchor).add(drift.set(Math.sin(t * .05) * size * .12, Math.sin(t * .09 + 1) * size * .05, 0));
      mesh.quaternion.copy(camera.quaternion);
      mesh.rotateZ(Math.sin(t * .07) * .035);
    },

    // 太空站在畫面上的外框（px），給 DOM 的鎖定框用
    screenRect(view) {
      if (!mesh) return null;
      view.camera.updateMatrixWorld(); mesh.updateMatrixWorld();
      rect.x0 = rect.y0 = 1e9; rect.x1 = rect.y1 = -1e9;
      for (const [x, y] of CORNERS) {
        const v = corner.set(x, y, 0).applyMatrix4(mesh.matrixWorld).project(view.camera);
        const sx = (v.x + 1) / 2 * view.size.w, sy = (1 - v.y) / 2 * view.size.h;
        rect.x0 = Math.min(rect.x0, sx); rect.x1 = Math.max(rect.x1, sx);
        rect.y0 = Math.min(rect.y0, sy); rect.y1 = Math.max(rect.y1, sy);
      }
      return rect;
    },
  };
}

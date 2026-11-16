import * as THREE from 'three';
import { CAM, resetCamera, safeFrameRay, safeHalfWidthAt } from '../core/view.js';
import { spriteVertex, carFragment } from '../shaders/sprite.js';

/* 車子：去背圖，當成 2D 立牌站在 3D 月面上 */
const CAR_IMG_ASPECT = 740 / 417, CAR_BOTTOM_PAD = 6 / 417;
const CAR_POSTER = { cx: .615, bottom: .885, width: .79 };      // 海報構圖：在 743:1005 安全框中的位置（比例）
const CAR_PHONE = { cx: .5, bottom: .84, width: .9 };           // 手機直式：車子置中、完整露出

export function createCar({ uniforms, shadow }) {
  const card = new THREE.Group();
  const shadowMesh = new THREE.Mesh(shadow.geometry, shadow.material.clone());
  shadowMesh.material.uniforms = Object.assign({}, shadow.material.uniforms, { uCol: { value: new THREE.Color(0x10141a) } });
  const size = { w: 1, h: 1 };
  let mesh = null;

  return {
    card,
    shadow: shadowMesh,

    // 依構圖反推：從相機打一條射線到地面，找出車輪著地點
    place(view) {
      resetCamera(view);
      const m = view.blend, at = {};
      for (const k of ['cx', 'bottom', 'width']) at[k] = m === 1 ? CAR_POSTER[k] : CAR_PHONE[k] + (CAR_POSTER[k] - CAR_PHONE[k]) * m;
      const dir = safeFrameRay(view, at.cx, at.bottom);
      const hit = CAM.clone().addScaledVector(dir, -CAM.y / dir.y);
      const w = at.width * 2 * safeHalfWidthAt(view, -hit.z), h = w / CAR_IMG_ASPECT;
      size.w = w; size.h = h;
      card.position.set(hit.x, -h * CAR_BOTTOM_PAD, hit.z);
      if (mesh) mesh.scale.set(w, h, 1);
      const fwd = new THREE.Vector2(-.56, -.83).normalize();
      const c = new THREE.Vector2(hit.x, hit.z).addScaledVector(fwd, w * .2).addScaledVector(shadow.dir, w * .07);
      shadowMesh.position.set(c.x, .03, c.y);
      shadowMesh.rotation.y = Math.atan2(fwd.x, fwd.y);
      shadowMesh.scale.set(w * .5, 1, w * .92);
    },

    setTexture(tex) {
      mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).translate(0, .5, 0), new THREE.ShaderMaterial({
        uniforms: Object.assign({}, uniforms, { map: { value: tex } }), transparent: true,
        vertexShader: spriteVertex,
        fragmentShader: carFragment,
      }));
      mesh.renderOrder = 2;
      mesh.scale.set(size.w, size.h, 1);
      card.add(mesh);
    },

    // 立牌永遠面向相機
    faceCamera(camera) {
      card.rotation.y = Math.atan2(camera.position.x - card.position.x, camera.position.z - card.position.z);
    },
  };
}

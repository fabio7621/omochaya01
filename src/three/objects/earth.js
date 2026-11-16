import * as THREE from 'three';
import { CAM } from '../core/view.js';
import { earthVertex, earthFragment, atmosphereVertex, atmosphereFragment } from '../shaders/earth.js';

/* 地球：參考圖的「上半沒入黑暗、下半亮起的旋渦雲帶」 */
const E_DIST = 1100, E_ANG = 19.6 * Math.PI / 180, E_ELEV = 27.2 * Math.PI / 180;
const E_R = E_DIST * Math.sin(E_ANG);
const EARTH_LON = 22 * Math.PI / 180;                     // 正對鏡頭的經度（南部非洲＋南大洋雲帶）

// textures.brc：R = 高程、G = 陸地遮罩、B = 衛星雲圖；textures.day：地表顏色（用來分出沙漠／植被）
export function createEarth({ uniforms, textures }) {
  const earthPos = CAM.clone().add(new THREE.Vector3(.012, Math.sin(E_ELEV), -Math.cos(E_ELEV)).normalize().multiplyScalar(E_DIST));
  const toCam = CAM.clone().sub(earthPos).normalize();
  // 地球光源：從觀者方向再往下壓，讓上緣落入夜面
  const uLe = { value: toCam.clone().applyAxisAngle(new THREE.Vector3(1, 0, 0), 0.8).applyAxisAngle(new THREE.Vector3(0, 1, 0), -0.12).normalize() };

  const earth = new THREE.Mesh(new THREE.SphereGeometry(E_R, 256, 160), new THREE.ShaderMaterial({
    uniforms: Object.assign({}, uniforms, { uLe, tBRC: { value: textures.brc }, tDay: { value: textures.day }, uTex: { value: new THREE.Vector2(1 / 4096, 1 / 2048) } }),
    vertexShader: earthVertex,
    fragmentShader: earthFragment,
  }));
  earth.position.copy(earthPos);
  earth.rotation.set(0.08, -Math.PI / 2 - EARTH_LON, 0.12);
  earth.visible = false;

  const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(E_R * 1.025, 120, 80), new THREE.ShaderMaterial({
    uniforms: { uLe }, side: THREE.BackSide, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    vertexShader: atmosphereVertex,
    fragmentShader: atmosphereFragment,
  }));
  atmosphere.visible = false; atmosphere.position.copy(earthPos);

  return {
    earth,
    atmosphere,
    show() { earth.visible = atmosphere.visible = true; },      // 貼圖載完才顯示
    update(t) { earth.rotation.y = -Math.PI / 2 - EARTH_LON + t * .0012; },
  };
}

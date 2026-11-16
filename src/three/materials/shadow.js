import * as THREE from 'three';
import { shadowVertex, shadowFragment } from '../shaders/shadow.js';

// 地面投影（岩石與車子共用）：平躺的方片 + 網點邊緣
export function createShadowKit(uniforms) {
  const dir = new THREE.Vector2(-uniforms.uLight.value.x, -uniforms.uLight.value.z).normalize();   // 影子在地面上的方向
  const geometry = new THREE.PlaneGeometry(1, 1); geometry.rotateX(-Math.PI / 2);
  const material = new THREE.ShaderMaterial({
    uniforms: Object.assign({}, uniforms, { uCol: { value: new THREE.Color(0x141a22) } }),
    transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    vertexShader: shadowVertex,
    fragmentShader: shadowFragment,
  });
  return { dir, geometry, material };
}

import * as THREE from 'three';
import { outlineVertex, outlineFragment } from '../shaders/outline.js';

/* 描邊（反轉外殼，固定螢幕粗細）*/
export function makeOutline(thick) {
  return new THREE.ShaderMaterial({
    uniforms: { uThick: { value: thick } }, side: THREE.BackSide,
    vertexShader: outlineVertex,
    fragmentShader: outlineFragment,
  });
}

// 把同位置的頂點法線平均，描邊外殼才不會在硬邊裂開
export function smoothNormals(src) {
  const g = src.index ? src.toNonIndexed() : src.clone();
  const p = g.attributes.position, acc = new Map();
  const key = i => `${Math.round(p.getX(i) * 1e3)}_${Math.round(p.getY(i) * 1e3)}_${Math.round(p.getZ(i) * 1e3)}`;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  for (let i = 0; i < p.count; i += 3) {
    a.fromBufferAttribute(p, i); b.fromBufferAttribute(p, i + 1); c.fromBufferAttribute(p, i + 2);
    const n = b.clone().sub(a).cross(c.clone().sub(a));
    for (let k = 0; k < 3; k++) { const kk = key(i + k); if (!acc.has(kk)) acc.set(kk, new THREE.Vector3()); acc.get(kk).add(n); }
  }
  const arr = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) { const n = acc.get(key(i)).clone().normalize(); arr.set([n.x, n.y, n.z], i * 3); }
  g.setAttribute('normal', new THREE.BufferAttribute(arr, 3));
  return g;
}

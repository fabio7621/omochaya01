import * as THREE from 'three';
import { DPR } from '../core/setup.js';
import { starVertex, starFragment, dustVertex, dustFragment } from '../shaders/sky.js';

/* ---------- 星空 ---------- */
export function createStars({ uniforms, rand }) {
  const n = 8000, pos = new Float32Array(n * 3), sz = new Float32Array(n), ph = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const th = (rand() - .5) * 3.4, y = .02 + rand() * .9, r = Math.sqrt(1 - y * y);
    pos.set([Math.sin(th) * r * 3000, y * 3000, -Math.cos(th) * r * 3000], i * 3);
    sz[i] = Math.pow(rand(), 7) * 2.6 + .7; ph[i] = rand() * 6.28;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aS', new THREE.BufferAttribute(sz, 1)); g.setAttribute('aP', new THREE.BufferAttribute(ph, 1));
  return new THREE.Points(g, new THREE.ShaderMaterial({
    uniforms: { uTime: uniforms.uTime, uDPR: { value: DPR } }, transparent: true, depthWrite: false,
    vertexShader: starVertex,
    fragmentShader: starFragment,
  }));
}

/* ---------- 飄浮月塵 ---------- */
export function createDust({ uniforms, rand }) {
  const n = 260, pos = new Float32Array(n * 3), sd = new Float32Array(n);
  for (let i = 0; i < n; i++) { pos.set([(rand() - .5) * 16, rand() * 3.2, -3 - rand() * 22], i * 3); sd[i] = rand(); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aS', new THREE.BufferAttribute(sd, 1));
  return new THREE.Points(g, new THREE.ShaderMaterial({
    uniforms: { uTime: uniforms.uTime, uDPR: { value: DPR } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: dustVertex,
    fragmentShader: dustFragment,
  }));
}

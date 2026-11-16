import * as THREE from 'three';
import { LOW } from '../core/setup.js';
import { fbm, vnoise, smooth } from '../core/noise.js';
import { VERT } from '../shaders/common.js';
import { terrainFragment } from '../shaders/terrain.js';

/* 地形：平坦月海 + 遠方雪白山脈 */
export function heightAt(x, z) {
  const d = Math.hypot(x, z);
  let h = fbm(x * .02, z * .02, 4) * .9 + fbm(x * .11 + 7, z * .11 - 3, 3) * .12;
  h *= smooth(2, 40, d) * .9 + .1;
  // 山脈：右側較高、左側低緩
  const m = smooth(150, 230, -z);
  const side = .72 + .28 * smooth(-160, 220, x);
  const ridge = Math.pow(1 - Math.abs(vnoise(x * .016 + 3.1, z * .016)), 3.0);
  const ridge2 = Math.pow(1 - Math.abs(vnoise(x * .045 - 2, z * .045 + 5)), 2.0);
  h += m * side * (ridge * 21 + ridge2 * 6 + fbm(x * .03, z * .03, 4) * 4);
  // 右側一道較近的稜線
  h += smooth(120, 175, -z) * (1 - smooth(175, 215, -z)) * smooth(40, 150, x) * (Math.pow(ridge2, 1.5) * 9 + 2);
  return h;
}

export function createTerrain(uniforms) {
  const NX = LOW ? 300 : 420, NZ = LOW ? 260 : 360;
  const g = new THREE.PlaneGeometry(2, 1, NX, NZ); g.rotateX(-Math.PI / 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const u = p.getX(i), v = p.getZ(i) + .5;                 // u ∈ [-1,1]，v ∈ [0,1]（0 = 最遠）
    const x = Math.sign(u) * Math.pow(Math.abs(u), 1.7) * 520;
    const z = 12 - Math.pow(1 - v, 1.8) * 330;
    p.setXYZ(i, x, heightAt(x, z), z);
  }
  g.computeVertexNormals();
  const mat = new THREE.ShaderMaterial({
    uniforms: Object.assign({}, uniforms, {
      uNear: { value: new THREE.Color(0xcfc5ad) }, uFar: { value: new THREE.Color(0xddd6c3) },
      uShadeN: { value: new THREE.Color(0x1b222c) }, uShadeF: { value: new THREE.Color(0x6f7a87) },
      uSnow: { value: new THREE.Color(0xf3eee2) }, uHaze: { value: new THREE.Color(0xe2ddd0) },
    }),
    vertexShader: VERT,
    fragmentShader: terrainFragment,
  });
  return new THREE.Mesh(g, mat);
}

import * as THREE from 'three';
import { LOW } from '../core/setup.js';
import { vnoise3 } from '../core/noise.js';
import { VERT } from '../shaders/common.js';
import { rockFragment } from '../shaders/rock.js';
import { makeOutline, smoothNormals } from '../materials/outline.js';
import { heightAt } from './terrain.js';

/* 岩石：遠方碎石（大量 Instanced）+ 前景巨岩（高細節）+ 投影 */

// 前景巨岩 [x, z, 大小, 形狀]（對照參考圖左下、右下）
const BIG_ROCKS = [
  [-1.6, -4.5, .9, 0], [-2.75, -6.3, .62, 1], [-.55, -4.05, .3, 2], [-3.7, -8.8, .55, 3], [2.5, -4.15, .55, 1],
  [1.15, -3.85, .26, 2], [4.4, -11.5, .7, 0], [-5.2, -15.5, .95, 2], [7.5, -24, 1.05, 3], [-9.5, -30, 1.25, 1],
  [-1.8, -11, .32, 3], [3.4, -17, .4, 0], [-6.8, -10.5, .45, 1], [10, -38, 1.4, 2], [-15, -48, 1.6, 0],
  // 寬螢幕才看得到的兩側
  [-6.2, -5.2, 1.0, 3], [-8.8, -7.5, .7, 0], [-12, -13, 1.3, 2], [-19, -22, 1.6, 1], [-28, -40, 2.2, 3],
  [6.8, -5.0, .9, 2], [9.5, -8.5, .65, 3], [13, -14, 1.2, 0], [21, -26, 1.7, 1], [30, -44, 2.3, 2], [5.6, -3.6, .38, 1], [-4.8, -3.5, .42, 0],
];

function rockGeo(detail, seed, flat = .55) {
  const g = new THREE.IcosahedronGeometry(1, detail);
  const p = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const s = seed * 13.7;
    let k = 1 + .32 * vnoise3(v.x * 1.2 + s, v.y * 1.2, v.z * 1.2 - s) + .14 * vnoise3(v.x * 2.9, v.y * 2.9 + s, v.z * 2.9) + .05 * vnoise3(v.x * 7 - s, v.y * 7, v.z * 7);
    // 稜角：用量化做出切面
    k = k * .82 + Math.round(k * 4) / 4 * .18;
    v.multiplyScalar(k); v.y *= flat;
    if (v.y < -.18) v.y = -.18 + (v.y + .18) * .25;            // 平底，坐穩地面
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

function rockMat(uniforms) {
  return new THREE.ShaderMaterial({
    uniforms: Object.assign({}, uniforms, {
      uBase: { value: new THREE.Color(0xe6ddc8) }, uShade: { value: new THREE.Color(0x182029) },
      uFar: { value: new THREE.Color(0xddd6c3) },
    }),
    vertexShader: VERT,
    fragmentShader: rockFragment,
  });
}

// rand 是整個場景共用的亂數；呼叫順序會影響結果，請勿任意調動
export function createRocks({ uniforms, rand, shadow }) {
  const group = new THREE.Group();
  const rocks = BIG_ROCKS.map(r => ({ x: r[0], z: r[1], s: r[2], v: r[3], big: true }));

  // 平原上的碎石
  let guard = 0;
  while (rocks.length < (LOW ? 1300 : 2100) && guard++ < 30000) {
    const z = -4 - Math.pow(rand(), 0.9) * 260;
    const x = (rand() * 2 - 1) * (Math.abs(z) * 1.25 + 7);
    if (z > -8 && z < -3.5 && x > -1.3 && x < 3.4) continue;            // 讓出車子的位置
    const s = (.05 + Math.pow(rand(), 3.4) * .5) * (1 + Math.abs(z) / 90);
    rocks.push({ x, z, s, v: Math.floor(rand() * 4), big: false });
  }

  const m4 = new THREE.Matrix4(), q4 = new THREE.Quaternion(), e4 = new THREE.Euler();
  function rockMatrix(r) {
    e4.set((rand() - .5) * .25, rand() * 6.28, (rand() - .5) * .25); q4.setFromEuler(e4);
    const sc = new THREE.Vector3(r.s * (1 + rand() * .45), r.s * (.75 + rand() * .4), r.s * (.85 + rand() * .4));
    return m4.clone().compose(new THREE.Vector3(r.x, heightAt(r.x, r.z) - r.s * .1, r.z), q4, sc);
  }
  function addInstanced(geo, mat, outline, list) {
    const im = new THREE.InstancedMesh(geo, mat, list.length), om = new THREE.InstancedMesh(smoothNormals(geo), outline, list.length);
    list.forEach((r, i) => { const m = rockMatrix(r); im.setMatrixAt(i, m); om.setMatrixAt(i, m); });
    group.add(im, om);
  }

  // 高細節岩石（4 種形狀）
  const bigMat = rockMat(uniforms), bigOutline = makeOutline(.0021);
  [0, 1, 2, 3].map(i => rockGeo(3, i + 1, .58)).forEach((g, gi) => {
    const list = rocks.filter(r => r.big && r.v === gi);
    if (list.length) addInstanced(g, bigMat, bigOutline, list);
  });
  // 碎石（較低面數）
  addInstanced(rockGeo(1, 7, .5), rockMat(uniforms), makeOutline(.0015), rocks.filter(r => !r.big));

  // 岩石投影
  const shadows = new THREE.InstancedMesh(shadow.geometry, shadow.material, rocks.length);
  const shAng = Math.atan2(shadow.dir.x, shadow.dir.y);
  rocks.forEach((r, i) => {
    const len = r.s * 2.9, wid = r.s * 1.75;
    const cx = r.x + shadow.dir.x * r.s * .75, cz = r.z + shadow.dir.y * r.s * .75;
    q4.setFromAxisAngle(new THREE.Vector3(0, 1, 0), shAng);
    shadows.setMatrixAt(i, m4.clone().compose(new THREE.Vector3(cx, heightAt(cx, cz) + .02, cz), q4, new THREE.Vector3(wid, 1, len)));
  });
  group.add(shadows);

  return group;
}

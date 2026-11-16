import * as THREE from 'three';
import { createRenderer, createSharedUniforms } from './core/setup.js';   // 需最先載入（關閉色彩管理）
import { mulberry32 } from './core/noise.js';
import { CAM, createView, resizeView } from './core/view.js';
import { createPointerControls } from './core/controls.js';
import { createPost } from './core/post.js';
import { createShadowKit } from './materials/shadow.js';
import { createTerrain } from './objects/terrain.js';
import { createRocks } from './objects/rocks.js';
import { createEarth } from './objects/earth.js';
import { createStars, createDust } from './objects/sky.js';
import { createCar } from './objects/car.js';
import { createSatellite } from './objects/satellite.js';

import earthBrcUrl from '@/assets/textures/earth_brc.jpg';
import earthDayUrl from '@/assets/textures/earth_day.jpg';
import carUrl from '@/assets/textures/car.png';
import satelliteUrl from '@/assets/textures/satellite.webp';

const Y_AXIS = new THREE.Vector3(0, 1, 0);

/**
 * 建立月面場景。回傳的物件由 Vue 元件掌控生命週期。
 * @param {HTMLCanvasElement} canvas
 * @param {object} hooks
 * @param {() => void} hooks.onReady       主要貼圖載入完成（可以掀開遮幕）
 * @param {(f: {sx: number, sy: number, satRect: object|null}) => void} hooks.onFrame  每幀回報滑鼠視差與太空站外框
 * @param {() => boolean} hooks.wantSatRect  是否需要計算太空站外框
 */
export function createMoonScene(canvas, { onReady, onFrame, wantSatRect } = {}) {
  const renderer = createRenderer(canvas);          // WebGL 無法啟用時會在這裡丟出錯誤
  const uniforms = createSharedUniforms();
  const rand = mulberry32(743);                     // 全場景共用的亂數；物件建立順序會影響結果
  const scene = new THREE.Scene();
  const view = createView();
  const { camera } = view;

  /* ---------- 貼圖 ---------- */
  const texLoader = new THREE.TextureLoader();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  let loaded = 0, disposed = false;
  const ready = () => { if (++loaded >= 3 && !disposed) { earth.show(); onReady?.(); } };   // 地球兩張 + 車子
  const loadTex = url => texLoader.load(url, t => { t.anisotropy = maxAniso; ready(); }, undefined, ready);

  /* ---------- 場景物件（順序固定：地形 → 岩石 → 地球 → 星空 → 月塵 → 車 → 太空站） ---------- */
  const shadow = createShadowKit(uniforms);
  scene.add(createTerrain(uniforms));
  scene.add(createRocks({ uniforms, rand, shadow }));
  const earth = createEarth({ uniforms, textures: { brc: loadTex(earthBrcUrl), day: loadTex(earthDayUrl) } });
  scene.add(earth.earth, earth.atmosphere);
  scene.add(createStars({ uniforms, rand }));
  scene.add(createDust({ uniforms, rand }));

  const car = createCar({ uniforms, shadow });
  scene.add(car.card, car.shadow);
  texLoader.load(carUrl, tex => {
    tex.anisotropy = maxAniso; tex.minFilter = THREE.LinearMipmapLinearFilter;
    car.setTexture(tex); ready();
  }, undefined, ready);

  const satellite = createSatellite({ uniforms });
  scene.add(satellite.root);
  texLoader.load(satelliteUrl, tex => {
    tex.anisotropy = maxAniso; tex.minFilter = THREE.LinearMipmapLinearFilter;
    satellite.setTexture(tex);
  });

  const post = createPost(uniforms);
  const controls = createPointerControls(canvas);
  const st = controls.state;

  /* ---------- 尺寸 ---------- */
  function resize(w, h) {
    resizeView(view, w, h);
    car.place(view);
    satellite.place(view);
    renderer.setSize(w, h, false);
    post.setSize(w, h);
  }

  /* ---------- 每幀 ---------- */
  const clock = new THREE.Clock();
  const frameInfo = { sx: 0, sy: 0, satRect: null };
  let raf = 0, visible = true;
  function frame() {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), .05), t = clock.elapsedTime;
    uniforms.uTime.value = t;
    controls.update(dt);
    // 相機在原位附近微動
    camera.position.set(CAM.x + st.sx * .32 + Math.sin(t * .23) * .04, CAM.y - st.sy * .12 + Math.sin(t * .31) * .02, CAM.z);
    camera.position.applyAxisAngle(Y_AXIS, st.yaw * .6);
    camera.rotation.set(view.pitch + st.pit - st.sy * .006, st.yaw - st.sx * .012, 0, 'YXZ');
    satellite.update(t, camera);
    car.faceCamera(camera);
    earth.update(t);

    frameInfo.sx = st.sx; frameInfo.sy = st.sy;
    frameInfo.satRect = satellite.loaded && wantSatRect?.() ? satellite.screenRect(view) : null;
    onFrame?.(frameInfo);

    if (visible) post.render(renderer, scene, camera);
  }

  return {
    resize,
    start() { if (!raf) frame(); },
    setVisible(v) { visible = v; },                 // 第一屏離開畫面時暫停渲染
    dispose() {
      disposed = true;
      cancelAnimationFrame(raf); raf = 0;
      controls.dispose();
      scene.traverse(o => {
        o.geometry?.dispose();
        if (o.material) { for (const u of Object.values(o.material.uniforms ?? {})) u.value?.isTexture && u.value.dispose(); o.material.dispose(); }
      });
      post.dispose();
      renderer.dispose();
    },
  };
}

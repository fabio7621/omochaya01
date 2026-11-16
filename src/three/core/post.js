import * as THREE from 'three';
import { LOW, DPR } from './setup.js';
import { postVertex, postFragment } from '../shaders/post.js';

// 後製：先畫到 render target，再疊上錯版、顆粒、暗角
export function createPost(uniforms) {
  const rt = new THREE.WebGLRenderTarget(2, 2, { samples: LOW ? 2 : 4 });
  const scene = new THREE.Scene(), camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const material = new THREE.ShaderMaterial({
    uniforms: { tDiffuse: { value: rt.texture }, uRes: { value: new THREE.Vector2(1, 1) }, uTime: uniforms.uTime },
    vertexShader: postVertex,
    fragmentShader: postFragment,
    depthTest: false, depthWrite: false,
  });
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

  return {
    setSize(w, h) {
      rt.setSize(Math.floor(w * DPR), Math.floor(h * DPR));
      material.uniforms.uRes.value.set(w * DPR, h * DPR);
    },
    render(renderer, mainScene, mainCamera) {
      renderer.setRenderTarget(rt); renderer.render(mainScene, mainCamera);
      renderer.setRenderTarget(null); renderer.render(scene, camera);
    },
    dispose() { rt.dispose(); material.dispose(); },
  };
}

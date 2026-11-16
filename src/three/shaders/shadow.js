import { COMMON } from './common.js';

// 地面投影：中心實色、外圈網點
export const shadowVertex = /* glsl */`varying vec2 vUv; varying vec3 vW;
    void main(){ vUv = uv; vec4 lp = vec4(position,1.0);
      #ifdef USE_INSTANCING
        lp = instanceMatrix * lp;
      #endif
      vec4 wp = modelMatrix * lp; vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`;

export const shadowFragment = COMMON + /* glsl */`
    uniform vec3 uCol; varying vec2 vUv; varying vec3 vW;
    void main(){
      vec2 q = vUv * 2.0 - 1.0;
      float d = length(q);
      float core = 1.0 - smoothstep(0.55, 0.8, d);
      float soft = 1.0 - smoothstep(0.5, 1.0, d);
      float a = max(core, halftone(soft * 0.85, uDot, 0.7854));
      float far = smoothstep(25.0, 220.0, length(cameraPosition - vW));
      if (a < 0.01) discard;
      gl_FragColor = vec4(mix(uCol, vec3(0.42, 0.46, 0.5), far), a * mix(0.92, 0.55, far));
    }`;

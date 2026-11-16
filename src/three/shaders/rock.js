import { COMMON } from './common.js';

// 岩石：網點 + 排線陰影
export const rockFragment = COMMON + /* glsl */`
      uniform vec3 uBase, uShade, uFar;
      varying vec3 vN; varying vec3 vW; varying vec3 vL;
      void main(){
        vec3 N = normalize(vN);
        float ndl = dot(N, uLight);
        float lit = smoothstep(-0.05, 0.55, ndl);
        float tone = 1.0 - lit;
        tone += (vnoise(vL.xz * 9.0 + vL.y * 5.0) - 0.5) * 0.18;          // 表面斑駁
        tone = clamp(tone, 0.0, 1.0);
        float ink = max(halftone(tone, uDot, 0.7854), hatch(smoothstep(0.45, 1.0, tone), uDot * 0.75, 0.6));
        float dist = length(cameraPosition - vW);
        vec3 shade = mix(uShade, vec3(0.42, 0.47, 0.53), smoothstep(20.0, 220.0, dist));
        vec3 col = mix(mix(uBase, uFar, smoothstep(20.0, 200.0, dist)), shade, ink);
        gl_FragColor = vec4(col, 1.0);
      }`;

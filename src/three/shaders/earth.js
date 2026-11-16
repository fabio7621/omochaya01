import { COMMON } from './common.js';
import { NOISE3 } from './noise3.js';

// 地球：真實地表資料 + 版畫風雲層與網點晨昏線
export const earthVertex = /* glsl */`varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying vec3 vP;
    void main(){ vUv = uv; vP = normalize(position); vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * wp; }`;

export const earthFragment = COMMON + NOISE3 + /* glsl */`
    uniform vec3 uLe; uniform sampler2D tBRC; uniform sampler2D tDay; uniform vec2 uTex;
    varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying vec3 vP;
    void main(){
      vec2 uv = vUv;
      vec3 brc = texture2D(tBRC, uv).rgb;
      float elev = brc.r;
      float landM = smoothstep(0.35, 0.65, brc.g);
      vec3 day = texture2D(tDay, uv).rgb;

      // ---- 海：深藍，近岸稍亮（取周圍幾點陸地遮罩當距離）----
      float coast = 0.0;
      for (int i = 0; i < 8; i++){
        float a = float(i) * 0.785;
        coast += texture2D(tBRC, uv + vec2(cos(a), sin(a)) * uTex * 22.0).g;
      }
      coast = smoothstep(0.0, 3.0, coast) * (1.0 - landM);
      vec3 ocean = mix(vec3(0.02, 0.07, 0.115), vec3(0.06, 0.19, 0.26), smoothstep(-0.6, 0.6, snoise(vP * 7.0)) * 0.6);
      ocean = mix(ocean, vec3(0.12, 0.33, 0.4), coast * 0.65);

      // ---- 陸：依地表顏色分沙漠（亮黃）與植被（深橙），再用高程做山影 ----
      float lum = dot(day, vec3(0.3, 0.59, 0.11));
      float desert = smoothstep(0.22, 0.5, lum + (day.r - day.g) * 1.2);
      vec3 landC = mix(vec3(0.74, 0.38, 0.09), vec3(0.99, 0.79, 0.35), desert);
      float ex = texture2D(tBRC, uv + vec2(uTex.x * 3.0, 0.0)).r, ey = texture2D(tBRC, uv + vec2(0.0, uTex.y * 3.0)).r;
      float hill = clamp(0.5 + (elev - ex) * 18.0 - (elev - ey) * 18.0, 0.0, 1.0);
      landC *= mix(0.6, 1.12, hill);
      float speck = smoothstep(0.35, 0.5, snoise(vP * 140.0) * 0.6 + snoise(vP * 320.0) * 0.4);
      landC = mix(landC, vec3(0.33, 0.18, 0.06), speck * (0.5 - desert * 0.3));
      landC = mix(landC, vec3(0.93, 0.9, 0.84), smoothstep(0.55, 0.8, elev) * landM * step(abs(vP.y), 2.0) * smoothstep(0.75, 0.85, abs(vP.y)));   // 極地冰
      vec3 col = mix(ocean, landC, landM);

      // ---- 雲：衛星雲圖 + 細雜訊，切成三階硬邊，再刻等高線 ----
      vec2 flow = vec2(snoise(vec3(uv * 9.0, uTime * 0.03)), snoise(vec3(uv * 9.0 + 4.0, uTime * 0.03))) * uTex * 5.0;
      vec2 cuv = uv + vec2(uTime * 0.00025, 0.0) + flow;
      float cl = texture2D(tBRC, cuv, 1.6).b;
      float cd = cl + snoise(vP * 45.0) * 0.022 + snoise(vP * 130.0) * 0.01;
      // 雲影投在地表
      float shadowC = texture2D(tBRC, cuv + vec2(0.0015, -0.001), 2.0).b;
      col *= 1.0 - smoothstep(0.35, 0.7, shadowC) * 0.35;
      float thin  = smoothstep(0.17, 0.19, cd);
      float mid   = smoothstep(0.30, 0.32, cd);
      float thick = smoothstep(0.44, 0.46, cd);
      vec3 cThin = mix(col, vec3(0.5, 0.62, 0.66), 0.62);
      vec3 cMid  = vec3(0.86, 0.85, 0.78);
      vec3 cThick = vec3(0.99, 0.95, 0.85);
      col = mix(col, cThin, thin);
      col = mix(col, cMid, mid);
      col = mix(col, cThick, thick);
      // 版畫刻線：沿雲的濃度等高線
      float contour = 1.0 - smoothstep(0.0, 0.03, abs(fract(cd * 9.0) - 0.5) - 0.445);
      col = mix(col, vec3(0.1, 0.2, 0.27), contour * thin * (1.0 - thick) * 0.7);
      col = mix(col, vec3(0.42, 0.5, 0.52), contour * thick * 0.35);

      // ---- 光照：網點晨昏線、上緣沒入黑暗 ----
      vec3 N = normalize(vN);
      float lit = smoothstep(-0.06, 0.34, dot(N, uLe));
      col = mix(col, col * 0.1 + vec3(0.0, 0.008, 0.016), halftone(1.0 - lit, uDot * 0.9, 0.35));
      float topDark = smoothstep(-0.44, 0.04, N.y);
      col = mix(col, col * 0.08, halftone(topDark * 0.95, uDot * 0.9, 0.35));
      vec3 V = normalize(cameraPosition - vW);
      float mu = max(dot(N, V), 0.0);
      col *= mix(0.7, 1.0, smoothstep(0.0, 0.3, mu));
      col += vec3(0.12, 0.5, 0.95) * pow(1.0 - mu, 4.0) * smoothstep(-0.15, 0.45, dot(N, uLe)) * 1.8;
      gl_FragColor = vec4(col, 1.0);
    }`;

// 大氣層光暈
export const atmosphereVertex = /* glsl */`varying vec3 vNV; varying vec3 vNW; void main(){ vNV = normalize(normalMatrix * normal); vNW = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;

export const atmosphereFragment = /* glsl */`uniform vec3 uLe; varying vec3 vNV; varying vec3 vNW;
    void main(){ float i = pow(clamp(0.66 - dot(vNV, vec3(0.0,0.0,1.0)), 0.0, 1.0), 5.0) * 7.0;
      i *= smoothstep(-0.25, 0.5, dot(-vNW, uLe));
      gl_FragColor = vec4(vec3(0.16, 0.52, 0.98) * i, 1.0); }`;

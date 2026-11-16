import { COMMON } from './common.js';

// 月面地形：近景砂粒刷紋、遠景印刷顆粒、山脈雪面
export const terrainFragment = COMMON + /* glsl */`
      uniform vec3 uNear, uFar, uShadeN, uShadeF, uSnow, uHaze;
      varying vec3 vN; varying vec3 vW; varying vec3 vL;
      void main(){
        vec3 N = normalize(vN);
        float dist = length(cameraPosition - vW);
        float far = smoothstep(12.0, 200.0, dist);
        float ndl = dot(N, uLight);
        float mtn = smoothstep(2.5, 9.0, vW.y);
        float lit = smoothstep(0.08, 0.46, ndl);
        vec3 base = mix(uNear, uFar, far);
        // 山：迎光面是雪白
        base = mix(base, uSnow, mtn * smoothstep(0.3, 0.7, ndl));
        vec3 shade = mix(uShadeN, uShadeF, far);
        // 近景：世界座標的砂粒與橫向刷紋
        vec2 wp = vW.xz;
        float grit = vnoise(wp * 7.0) * 0.55 + vnoise(wp * 19.0) * 0.45;
        float streak = vnoise(vec2(wp.x * 0.45, wp.y * 5.5)) * 0.6 + vnoise(vec2(wp.x * 1.3, wp.y * 14.0)) * 0.4;
        float nearF = 1.0 - smoothstep(10.0, 45.0, dist);
        float speck = step(0.78, grit) * nearF * 0.9;
        // 遠景：改用螢幕空間的印刷顆粒
        float sp2 = step(0.9, hash12(floor(gl_FragCoord.xy / 1.6))) * step(0.45, vnoise(wp * 0.6)) * (1.0 - nearF) * (1.0 - mtn) * 0.7;
        float tone = 1.0 - lit;
        tone += smoothstep(0.55, 0.85, streak) * 0.22 * (1.0 - far * 0.6);
        tone = clamp(tone, 0.0, 1.0);
        float ink = halftone(tone, uDot, 0.7854);
        ink = max(ink, hatch(smoothstep(0.55, 1.0, tone) * 0.6, uDot * 0.7, -0.5) * (1.0 - far));
        vec3 col = mix(base, shade, ink);
        col = mix(col, shade, max(speck, sp2) * 0.55);
        // 遠方空氣感
        col = mix(col, uHaze, smoothstep(60.0, 320.0, dist) * 0.42);
        gl_FragColor = vec4(col, 1.0);
      }`;

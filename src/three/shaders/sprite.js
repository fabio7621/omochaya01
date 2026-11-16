import { COMMON } from './common.js';

// 去背圖立牌（車子、太空站）：在暗部疊一層網點
export const spriteVertex = /* glsl */`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

export const carFragment = COMMON + /* glsl */`uniform sampler2D map; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(map, vUv);
        if (c.a < 0.04) discard;
        float lum = dot(c.rgb, vec3(0.3, 0.59, 0.11));
        float ink = halftone(smoothstep(0.55, 0.12, lum) * 0.5, uDot, 0.7854);
        c.rgb = mix(c.rgb, c.rgb * 0.55, ink * 0.35);
        gl_FragColor = vec4(c.rgb, c.a);
      }`;

export const satelliteFragment = COMMON + /* glsl */`uniform sampler2D map; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(map, vUv);
        if (c.a < 0.03) discard;
        float lum = dot(c.rgb, vec3(0.3, 0.59, 0.11));
        float ink = halftone(smoothstep(0.55, 0.1, lum) * 0.5, uDot * 0.8, 0.7854);
        c.rgb = mix(c.rgb, c.rgb * 0.55, ink * 0.3);
        gl_FragColor = vec4(c.rgb, c.a);
      }`;

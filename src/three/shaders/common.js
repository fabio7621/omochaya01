// 共用 shader 片段：網點、排線、雜訊
export const COMMON = /* glsl */`
uniform vec3 uLight; uniform float uDot; uniform float uTime;
vec2 rot2(vec2 p, float a){ float c = cos(a), s = sin(a); return vec2(c*p.x - s*p.y, s*p.x + c*p.y); }
float halftone(float tone, float scale, float ang){
  vec2 g = fract(rot2(gl_FragCoord.xy, ang) / scale) - 0.5;
  float r = sqrt(clamp(tone, 0.0, 1.0)) * 0.74;
  return (1.0 - smoothstep(r - 0.085, r + 0.085, length(g))) * smoothstep(0.0, 0.06, tone);
}
// 版畫排線：tone 越高線越粗
float hatch(float tone, float scale, float ang){
  float l = abs(fract(rot2(gl_FragCoord.xy, ang).y / scale) - 0.5) * 2.0;
  return (1.0 - smoothstep(1.0 - tone - 0.12, 1.0 - tone + 0.12, l)) * smoothstep(0.05, 0.2, tone);
}
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i + vec2(1,0)), u.x), mix(hash12(i + vec2(0,1)), hash12(i + vec2(1,1)), u.x), u.y); }
`;

// 共用頂點著色器（支援 InstancedMesh）
export const VERT = /* glsl */`
varying vec3 vN; varying vec3 vW; varying vec3 vL;
void main(){
  vec4 lp = vec4(position, 1.0); vec3 n = normal;
  #ifdef USE_INSTANCING
    lp = instanceMatrix * lp; n = mat3(instanceMatrix) * n;
  #endif
  vec4 wp = modelMatrix * lp;
  vW = wp.xyz; vL = position; vN = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;

// 後製：錯版、顆粒、暗角
export const postVertex = /* glsl */`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

export const postFragment = /* glsl */`uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uTime; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec2 off = vec2(1.4 / uRes.x, 0.5 / uRes.y);
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      c.r = mix(c.r, texture2D(tDiffuse, vUv + off).r, 0.6);
      c.b = mix(c.b, texture2D(tDiffuse, vUv - off).b, 0.4);
      c += (hash(floor(gl_FragCoord.xy) + floor(uTime * 12.0) * 7.31) - 0.5) * 0.05;
      c = max(c, vec3(0.027, 0.03, 0.038) + hash(floor(gl_FragCoord.xy / 3.0) * 1.7) * 0.02);
      vec2 q = vUv - 0.5; c *= 1.0 - dot(q, q) * 0.75;
      gl_FragColor = vec4(c, 1.0);
    }`;

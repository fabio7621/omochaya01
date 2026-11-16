// 星空：閃爍的圓點
export const starVertex = /* glsl */`attribute float aS; attribute float aP; uniform float uTime; uniform float uDPR; varying float vA;
      void main(){ vA = 0.6 + 0.4 * sin(uTime * (0.7 + aP * 0.3) + aP * 10.0); gl_PointSize = aS * uDPR; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

export const starFragment = /* glsl */`varying float vA; void main(){ if (length(gl_PointCoord - 0.5) > 0.5) discard; gl_FragColor = vec4(vec3(0.95, 0.93, 0.86) * vA, 1.0); }`;

// 飄浮月塵：橫向循環飄移
export const dustVertex = /* glsl */`attribute float aS; uniform float uTime; uniform float uDPR; varying float vA;
      void main(){ vec3 p = position; p.x = mod(p.x + uTime * 0.12 * (0.3 + aS) + 8.0, 16.0) - 8.0; p.y += sin(uTime * 0.3 + aS * 30.0) * 0.15;
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = 0.18 + 0.3 * aS; gl_PointSize = (1.2 + aS * 2.0) * uDPR * (6.0 / -mv.z); gl_Position = projectionMatrix * mv; }`;

export const dustFragment = /* glsl */`varying float vA; void main(){ if (length(gl_PointCoord - 0.5) > 0.5) discard; gl_FragColor = vec4(vec3(0.95, 0.9, 0.78) * vA, 1.0); }`;

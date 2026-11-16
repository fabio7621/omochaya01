// 描邊（反轉外殼，固定螢幕粗細）
export const outlineVertex = /* glsl */`
      uniform float uThick;
      void main(){
        vec4 lp = vec4(position, 1.0); vec3 n = normal;
        #ifdef USE_INSTANCING
          lp = instanceMatrix * lp; n = mat3(instanceMatrix) * n;
        #endif
        vec4 wp = modelMatrix * lp;
        float d = length(cameraPosition - wp.xyz);
        wp.xyz += normalize(mat3(modelMatrix) * n) * uThick * min(d, 80.0);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`;

export const outlineFragment = /* glsl */`void main(){ gl_FragColor = vec4(0.05, 0.055, 0.07, 1.0); }`;

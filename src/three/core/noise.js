// CPU 端的亂數與雜訊（地形、岩石造型用）。結果是決定性的，場景每次長得一樣。

export function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

const fr = x => x - Math.floor(x);
const hash2 = (i, j) => fr(Math.sin(i * 127.1 + j * 311.7) * 43758.5453);
const hash3 = (i, j, k) => fr(Math.sin(i * 127.1 + j * 311.7 + k * 74.7) * 43758.5453);
const sm = t => t * t * (3 - 2 * t);

export function vnoise(x, y) {
  const i = Math.floor(x), j = Math.floor(y), u = sm(x - i), v = sm(y - j);
  const a = hash2(i, j), b = hash2(i + 1, j), c = hash2(i, j + 1), d = hash2(i + 1, j + 1);
  return (a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v) * 2 - 1;
}

export function vnoise3(x, y, z) {
  const i = Math.floor(x), j = Math.floor(y), k = Math.floor(z), u = sm(x - i), v = sm(y - j), w = sm(z - k);
  const L = (a, b, t) => a + (b - a) * t;
  const x0 = L(L(hash3(i, j, k), hash3(i + 1, j, k), u), L(hash3(i, j + 1, k), hash3(i + 1, j + 1, k), u), v);
  const x1 = L(L(hash3(i, j, k + 1), hash3(i + 1, j, k + 1), u), L(hash3(i, j + 1, k + 1), hash3(i + 1, j + 1, k + 1), u), v);
  return L(x0, x1, w) * 2 - 1;
}

export function fbm(x, y, o = 5) {
  let s = 0, a = .5, f = 1;
  for (let k = 0; k < o; k++) { s += a * vnoise(x * f, y * f); f *= 2.03; a *= .5; }
  return s;
}

export const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

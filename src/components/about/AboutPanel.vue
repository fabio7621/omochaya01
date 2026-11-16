<script setup>
import { useUi } from '@/composables/useUi.js';
import { shop } from '@/data/shop.js';
import shopMapUrl from '@/assets/images/shop-map.webp';

const { els, closeAbout, openLightbox } = useUi();
const pad2 = n => String(n).padStart(2, '0');
</script>

<template>
  <aside id="about" :ref="el => (els.about = el)" aria-labelledby="ab-title">
    <button :ref="el => (els.aboutClose = el)" type="button" class="ab-close" aria-label="本店紹介を閉じる" @click="closeAbout">× CLOSE</button>
    <div class="ab-inner">
      <div class="ab-kicker"><span>ABOUT THE SHOP</span><span>本店紹介</span></div>
      <h2 id="ab-title" class="ab-name">{{ shop.name }}<b>.</b></h2>
      <div class="ab-sub">{{ shop.nameEn }} — <em>{{ shop.established }}</em></div>
      <div class="ab-text">
        <p class="ab-lead">{{ shop.lead }}</p>
        <p>{{ shop.description }}</p>
        <ol class="ab-points">
          <li v-for="(point, i) in shop.points" :key="i"><span>{{ pad2(i + 1) }}</span>{{ point }}</li>
        </ol>
      </div>
      <div class="ab-card">
        <dl class="ab-info">
          <template v-for="row in shop.info" :key="row.label"><dt>{{ row.label }}</dt><dd>{{ row.value }}</dd></template>
        </dl>
        <figure class="ab-map">
          <button :ref="el => (els.mapBtn = el)" type="button" class="ab-zoom" aria-label="地図を拡大" @click="openLightbox">
            <img :src="shopMapUrl" :alt="shop.map.alt" loading="lazy" width="1500" height="778"><span>拡大 ⤢</span>
          </button>
          <figcaption><b>MAP</b> {{ shop.map.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </aside>
</template>

<style scoped>
#about{position:relative;z-index:4;color:var(--cream);font-size:15px;line-height:1.8}
.ab-inner{max-width:440px}
.ab-kicker{display:flex;justify-content:space-between;align-items:baseline;font:italic 700 .78em "Chakra Petch",sans-serif;letter-spacing:.16em;
  padding-bottom:.7em;border-bottom:1px solid rgba(239,228,203,.55);opacity:.9}
.ab-kicker span:last-child{font:900 1em "Zen Kaku Gothic New",sans-serif;letter-spacing:.3em;color:var(--yellow)}
.ab-name{font-family:"Dela Gothic One","Zen Kaku Gothic New",sans-serif;font-weight:400;font-size:2.65em;line-height:1.1;margin-top:.45em;
  transform:skewX(-9deg);transform-origin:left bottom;letter-spacing:.01em}
.ab-name b{color:var(--red)}
.ab-sub{font:italic 700 .8em "Chakra Petch",sans-serif;letter-spacing:.14em;margin-top:.35em;opacity:.85}
.ab-sub em{color:var(--yellow)}
.ab-lead{font-weight:900;font-size:1.12em;margin-top:1.1em;letter-spacing:.04em}
.ab-text p{margin-top:.55em}
.ab-text p:not(.ab-lead){opacity:.88}
.ab-points{list-style:none;margin-top:1em;border-top:1px dashed rgba(239,228,203,.35)}
.ab-points li{display:flex;align-items:center;gap:.8em;padding:.42em 0;border-bottom:1px dashed rgba(239,228,203,.35);font-weight:700}
.ab-points span{font:italic 700 1.35em/1 "Chakra Petch",sans-serif;color:transparent;-webkit-text-stroke:1.2px var(--yellow);min-width:1.6em}

/* 米色紙卡（呼應地圖插畫的紙面） */
.ab-card{margin-top:1.4em;color:#16171b;padding:1em 1.1em 1.1em;border:2px solid #0a0b0e;box-shadow:6px 6px 0 var(--red);
  background:radial-gradient(rgba(22,23,27,.07) 1px, transparent 1.4px) 0 0/5px 5px, #ece0c4}
.ab-info{display:grid;grid-template-columns:auto 1fr;gap:.25em .9em;font-size:.88em;line-height:1.6}
.ab-info dt{font-weight:900;color:#fff;background:var(--red);padding:0 .45em;align-self:start;transform:skewX(-10deg);font-size:.86em;letter-spacing:.12em;margin-top:.15em}
.ab-info dd{font-weight:700}
.ab-map{margin-top:.9em}
.ab-zoom{display:block;position:relative;width:100%;padding:0;border:2px solid #0a0b0e;background:#0a0b0e;cursor:zoom-in;overflow:hidden}
.ab-zoom img{display:block;width:100%;height:auto;transition:transform .5s cubic-bezier(.2,.9,.25,1)}
.ab-zoom span{position:absolute;right:.5em;bottom:.5em;font:900 .72em/1 "Zen Kaku Gothic New",sans-serif;letter-spacing:.1em;color:#0a0b0e;background:var(--yellow);
  padding:.45em .6em;transform:skewX(-10deg);border:1.5px solid #0a0b0e}
.ab-zoom:hover img,.ab-zoom:focus-visible img{transform:scale(1.04)}
.ab-zoom:focus-visible{outline:2px dashed var(--red);outline-offset:3px}
.ab-map figcaption{margin-top:.55em;font-size:.76em;font-weight:700;letter-spacing:.05em}
.ab-map figcaption b{font:italic 700 1em "Chakra Petch",sans-serif;color:var(--red);margin-right:.5em;letter-spacing:.14em}

/* 桌機寬螢幕（side）：放進安全框左側的留白，做成抽屜 */
html.side #about{position:fixed;left:0;top:0;bottom:0;width:clamp(380px, var(--safe-l), 560px);overflow-y:auto;scrollbar-width:none;
  padding:calc(var(--u) * 13.1 + 4.2vh) clamp(22px, 2.4vw, 42px) 28px var(--nav-x);font-size:clamp(12px, .86vw, 15px);
  background:radial-gradient(rgba(239,228,203,.06) 1px, transparent 1.4px) 0 0/6px 6px, linear-gradient(90deg, rgba(6,7,10,.95), rgba(8,9,12,.9));
  border-right:2px solid var(--cream);box-shadow:6px 0 0 var(--red), 6px 0 40px rgba(0,0,0,.5);
  transform:translateX(calc(-100% - 10px));visibility:hidden;
  transition:transform .55s cubic-bezier(.75,0,.15,1), visibility 0s .55s}
html.side.about-open #about{transform:none;visibility:visible;transition:transform .65s cubic-bezier(.2,.9,.2,1)}
html.side #about::-webkit-scrollbar{display:none}
html.side .ab-inner > *{opacity:0;transform:translateX(-14px);transition:opacity .3s ease, transform .3s ease}
html.side.about-open .ab-inner > *{opacity:1;transform:none;transition:opacity .5s ease, transform .6s cubic-bezier(.2,.9,.25,1.1)}
html.side.about-open .ab-inner > :nth-child(1){transition-delay:.18s}
html.side.about-open .ab-inner > :nth-child(2){transition-delay:.24s}
html.side.about-open .ab-inner > :nth-child(3){transition-delay:.3s}
html.side.about-open .ab-inner > :nth-child(4){transition-delay:.36s}
html.side.about-open .ab-inner > :nth-child(5){transition-delay:.44s}
.ab-close{display:none}
html.side .ab-kicker span:last-child{visibility:hidden}
html.side .ab-close{display:flex;align-items:center;gap:.5em;position:absolute;top:calc(var(--u) * 13.1 + 4.2vh - .45em - 8px);right:clamp(22px, 2.4vw, 42px);
  font:italic 700 .78em/1 "Chakra Petch",sans-serif;letter-spacing:.16em;color:var(--yellow);background:none;border:1.5px solid var(--yellow);
  padding:.55em .8em;cursor:pointer;transform:skewX(-10deg)}
html.side .ab-close:hover,html.side .ab-close:focus-visible{background:var(--yellow);color:#0a0b0e;outline:none}

/* 窄螢幕／手機（stack）：變成第一屏下方的 footer */
html.stack #about{padding:72px 6vw 88px;background:radial-gradient(rgba(239,228,203,.05) 1px, transparent 1.4px) 0 0/6px 6px, #0a0b0e;
  border-top:3px solid var(--cream);box-shadow:inset 0 5px 0 #0a0b0e, inset 0 6px 0 var(--cream)}
html.stack .ab-inner{max-width:1040px;margin:0 auto;display:grid;grid-template-columns:1fr 1.05fr;gap:0 52px;align-items:start}
html.stack .ab-kicker,html.stack .ab-name,html.stack .ab-sub{grid-column:1 / -1}
html.stack .ab-card{margin-top:1.4em}
html.phone #about{padding:56px 5.5vw calc(64px + env(safe-area-inset-bottom));font-size:15px}
html.phone .ab-inner{display:block}
html.phone .ab-name{font-size:2.4em}
html:not(.side):not(.stack) #about{display:none}
</style>

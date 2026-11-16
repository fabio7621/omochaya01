<script setup>
import { useUi } from '@/composables/useUi.js';
import { categories, menuLinks } from '@/data/categories.js';
import { site } from '@/data/site.js';
import { shop } from '@/data/shop.js';

const { menuOpen, els, setMenu } = useUi();

// 點背景或任何連結都關閉選單
function onClick(e) {
  if (e.target.closest('[data-close]') || e.target.closest('a')) setMenu(false);
}
</script>

<template>
  <nav id="menu" :ref="el => (els.menu = el)" aria-label="商品カテゴリー" :aria-hidden="!menuOpen" @click="onClick">
    <div class="m-backdrop" data-close></div>
    <div class="m-panel">
      <div class="m-kicker"><span>CATEGORY INDEX</span><span>おもちゃ屋 <b>No.{{ site.issue }}</b></span></div>
      <div class="m-title">商品カテゴリー<span>.</span></div>
      <div class="m-rule"></div>
      <ol class="m-list">
        <li v-for="(c, i) in categories" :key="c.id" :style="{ '--i': i }">
          <a :href="`#${c.id}`">
            <span class="n">{{ c.no }}</span>
            <span class="jp">{{ c.jp }}</span>
            <span class="en">{{ c.en }}<small>{{ c.note }}</small></span>
            <span class="ar">→</span>
            <span v-if="c.badge" class="tagx">{{ c.badge }}</span>
          </a>
        </li>
      </ol>
      <div class="m-foot">
        <div class="m-links"><a v-for="l in menuLinks" :key="l.id" :href="`#${l.id}`">{{ l.label }}</a></div>
        <div class="m-info">営業 <em>{{ shop.hours }}</em> ／ {{ shop.closed }}<br>{{ shop.slogan }}</div>
      </div>
      <div class="m-vert">{{ shop.branch }}</div>
    </div>
  </nav>
</template>

<style scoped>
#menu{position:fixed;inset:0;z-index:5;pointer-events:none;visibility:hidden;transition:visibility 0s .7s}
html.menu-open #menu{pointer-events:auto;visibility:visible;transition:none}
.m-backdrop{position:absolute;inset:0;opacity:0;transition:opacity .5s ease;
  background:radial-gradient(rgba(10,11,14,.55) 1.1px, transparent 1.5px) 0 0/5px 5px, rgba(7,8,11,.35)}
html.menu-open .m-backdrop{opacity:1}
.m-panel{position:absolute;left:0;top:0;bottom:0;width:clamp(470px, 46vw, 780px);
  transform:translateX(-104%);transition:transform .7s cubic-bezier(.75,0,.15,1);
  padding:calc(var(--u) * 19 + env(safe-area-inset-top)) calc(var(--u) * 15) calc(var(--u) * 5 + env(safe-area-inset-bottom)) var(--nav-x);
  display:flex;flex-direction:column;color:var(--cream)}
html.menu-open .m-panel{transform:none}
/* 斜切的紙面：紅色邊條 + 網點紙 */
.m-panel::before,.m-panel::after{content:"";position:absolute;inset:0;z-index:-1}
.m-panel::before{background:var(--red);clip-path:polygon(0 0,100% 0,calc(100% - var(--u) * 7) 100%,0 100%)}
.m-panel::after{background:radial-gradient(rgba(239,228,203,.075) 1px, transparent 1.4px) 0 0/6px 6px, linear-gradient(180deg,#0d0e12,#0a0b0e 60%,#0e0d0c);
  clip-path:polygon(0 0,calc(100% - var(--u) * 1.4) 0,calc(100% - var(--u) * 8.4) 100%,0 100%)}
.m-kicker{display:flex;justify-content:space-between;align-items:baseline;font:italic 700 calc(var(--u) * 1.9) "Chakra Petch",sans-serif;letter-spacing:.14em;opacity:.8}
.m-kicker b{color:var(--yellow);font-weight:700}
.m-title{font-family:"Dela Gothic One","Zen Kaku Gothic New",sans-serif;font-size:calc(var(--u) * 4.4);margin-top:calc(var(--u) * 1.2);
  transform:skewX(-9deg);transform-origin:left bottom;letter-spacing:.02em}
.m-title span{color:var(--red)}
.m-rule{height:calc(var(--u) * 1.2);position:relative;margin:calc(var(--u) * 1.6) 0 calc(var(--u) * .6)}
.m-rule::before,.m-rule::after{content:"";position:absolute;left:0;right:0;background:var(--cream)}
.m-rule::before{top:0;height:max(calc(var(--u) * .4),2px)}
.m-rule::after{bottom:0;height:1px}

/* 分類清單 */
.m-list{list-style:none;flex:1;display:flex;flex-direction:column;justify-content:center;min-height:0}
.m-list li{border-bottom:1px dashed rgba(239,228,203,.32);opacity:0;transform:translateX(-6%);
  transition:opacity .45s ease, transform .6s cubic-bezier(.2,.9,.25,1.1)}
html.menu-open .m-list li{opacity:1;transform:none;transition-delay:calc(.28s + var(--i) * 55ms)}
.m-list a{display:grid;grid-template-columns:calc(var(--u) * 8.6) auto 1fr auto;align-items:center;gap:calc(var(--u) * 1.6);
  padding:calc(var(--u) * 2.05) 0;color:inherit;text-decoration:none;position:relative;transition:transform .35s cubic-bezier(.2,.9,.25,1.2)}
.m-list a::before{content:"";position:absolute;left:calc(var(--u) * -2.2);top:22%;bottom:22%;width:calc(var(--u) * .9);background:var(--red);
  transform:skewX(-14deg) scaleY(0);transition:transform .3s ease}
.m-list .n{font:italic 700 calc(var(--u) * 5.2)/.8 "Chakra Petch",sans-serif;color:transparent;-webkit-text-stroke:max(calc(var(--u) * .2),1.2px) var(--cream);transition:color .3s, -webkit-text-stroke-color .3s}
.m-list .jp{font-family:"Dela Gothic One","Zen Kaku Gothic New",sans-serif;font-size:calc(var(--u) * 6.1);line-height:1.05;white-space:nowrap;
  transform:skewX(-9deg);transform-origin:left bottom;transition:color .25s, text-shadow .25s}
.m-list .en{justify-self:end;text-align:right;white-space:nowrap;font:italic 700 calc(var(--u) * 1.75)/1.25 "Chakra Petch",sans-serif;letter-spacing:.12em;opacity:.85}
.m-list .en small{display:block;font:500 calc(var(--u) * 1.65)/1.4 "Zen Kaku Gothic New",sans-serif;letter-spacing:.06em;opacity:.8;margin-top:.2em}
.m-list .ar{font:700 calc(var(--u) * 2.6) "Chakra Petch",sans-serif;color:var(--yellow);opacity:0;transform:translateX(-50%);transition:opacity .25s, transform .3s}
.m-list .tagx{position:absolute;left:calc(var(--u) * 8.6 + var(--u) * 1.6);top:calc(var(--u) * .35);font:900 calc(var(--u) * 1.45)/1 "Zen Kaku Gothic New",sans-serif;
  color:var(--ink,#0a0b0e);background:var(--yellow);padding:.35em .55em .4em;transform:skewX(-12deg) rotate(-3deg);letter-spacing:.08em}
.m-list a:hover,.m-list a:focus-visible{transform:translateX(calc(var(--u) * 1.6));outline:none}
.m-list a:hover::before,.m-list a:focus-visible::before{transform:skewX(-14deg) scaleY(1)}
.m-list a:hover .jp,.m-list a:focus-visible .jp{color:var(--yellow);text-shadow:.05em .035em 0 rgba(229,64,42,.9)}
.m-list a:hover .n,.m-list a:focus-visible .n{color:var(--red);-webkit-text-stroke-color:var(--red)}
.m-list a:hover .ar,.m-list a:focus-visible .ar{opacity:1;transform:none}

/* 底部資訊 */
.m-foot{margin-top:calc(var(--u) * 2.4);display:flex;justify-content:space-between;align-items:flex-end;gap:calc(var(--u) * 2);
  opacity:0;transition:opacity .5s ease}
html.menu-open .m-foot{opacity:1;transition-delay:.7s}
.m-links{white-space:nowrap;display:flex;gap:calc(var(--u) * 2.6);font-weight:900;font-size:calc(var(--u) * 2.1)}
.m-links a{color:inherit;text-decoration:none;border-bottom:1px solid rgba(239,228,203,.4);padding-bottom:2px}
.m-links a:hover,.m-links a:focus-visible{color:var(--yellow);border-color:var(--yellow);outline:none}
.m-info{white-space:nowrap;text-align:right;font-size:calc(var(--u) * 1.6);line-height:1.6;opacity:.75;letter-spacing:.06em}
.m-info em{font:italic 700 1em "Chakra Petch",sans-serif;font-style:italic}
.m-vert{position:absolute;right:calc(var(--u) * 6.2);top:calc(var(--u) * 21);writing-mode:vertical-rl;font-weight:900;font-size:calc(var(--u) * 1.55);
  letter-spacing:.55em;opacity:.55;display:flex;gap:1.2em;align-items:center}
.m-vert::before{content:"";width:1px;height:calc(var(--u) * 9);background:var(--cream)}

/* 手機：滿版面板 */
html.phone .m-panel{width:100%;padding-right:calc(var(--u) * 6)}
html.phone .m-panel::before{display:none}
html.phone .m-panel::after{clip-path:none}
html.phone .m-vert{display:none}
html.phone .m-list .jp{font-size:calc(var(--u) * 7.4)}
html.phone .m-list .n{font-size:calc(var(--u) * 6)}
html.phone .m-list a{grid-template-columns:calc(var(--u) * 10) auto 1fr auto;padding:calc(var(--u) * 3) 0}
html.phone .m-list .tagx{left:calc(var(--u) * 11.6);font-size:calc(var(--u) * 2.3)}
html.phone .m-list .en{font-size:calc(var(--u) * 2.5)}
html.phone .m-list .en small{font-size:calc(var(--u) * 2.5)}
html.phone .m-list .ar{display:none}
html.phone .m-kicker{font-size:calc(var(--u) * 2.8)}
html.phone .m-title{font-size:calc(var(--u) * 6)}
html.phone .m-foot{flex-direction:column;align-items:flex-start}
html.phone .m-links{font-size:calc(var(--u) * 3.6)}
html.phone .m-info{text-align:left;font-size:calc(var(--u) * 2.9)}
html.phone .m-panel{padding-top:calc(var(--u) * 25 + env(safe-area-inset-top))}
@media (prefers-reduced-motion: reduce){ .m-panel,.m-list li{transition-duration:.01s !important} }
</style>

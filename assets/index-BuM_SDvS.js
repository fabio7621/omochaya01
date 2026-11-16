(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const tt={},Ni=[],Dn=()=>{},Xu=()=>!1,Eo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),yo=n=>n.startsWith("onUpdate:"),yt=Object.assign,sl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},td=Object.prototype.hasOwnProperty,Ze=(n,e)=>td.call(n,e),Ie=Array.isArray,ui=n=>fs(n)==="[object Map]",ro=n=>fs(n)==="[object Set]",Il=n=>fs(n)==="[object Date]",ze=n=>typeof n=="function",ht=n=>typeof n=="string",Un=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",qu=n=>(et(n)||ze(n))&&ze(n.then)&&ze(n.catch),Yu=Object.prototype.toString,fs=n=>Yu.call(n),nd=n=>fs(n).slice(8,-1),$u=n=>fs(n)==="[object Object]",ol=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,kr=rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},id=/-\w/g,Mn=bo(n=>n.replace(id,e=>e.slice(1).toUpperCase())),rd=/\B([A-Z])/g,Wi=bo(n=>n.replace(rd,"-$1").toLowerCase()),ju=bo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ko=bo(n=>n?`on${ju(n)}`:""),Ln=(n,e)=>!Object.is(n,e),Wo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ku=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},sd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Nl;const To=()=>Nl||(Nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xr(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?cd(i):xr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ht(n)||et(n))return n}const od=/;(?![^(]*\))/g,ad=/:([^]+)/,ld=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function cd(n){const e={};return n.replace(ld,t=>t.startsWith("/*")?"":t).split(od).forEach(t=>{if(t){const i=t.split(ad);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function hs(n){let e="";if(ht(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=hs(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ud="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",fd=rl(ud);function Zu(n){return!!n||n===""}function hd(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=Ao(n[r],e[r],t);return i}function Fl(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let a=-1;for(let o=0;o<i.length;o++)if(!r[o]&&Ao(s,i[o],t)){a=o;break}if(a<0)return!1;r[a]=1}return!0}function dd(n,e,t){let i=ui(n),r=ui(e);if(i||r||(i=ro(n),r=ro(e),i||r))return i&&r?Fl(n,e,t):!1;const s=Object.keys(n).length,a=Object.keys(e).length;if(s!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Ao(n[o],e[o],t))return!1}return String(n)===String(e)}function Ol(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const a=i(n,e,t);return r.delete(n),s.delete(e),a}function Ao(n,e,t){if(n===e)return!0;let i=Il(n),r=Il(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=Un(n),r=Un(e),i||r?n===e:(i=Ie(n),r=Ie(e),i||r?i&&r?Ol(n,e,t,hd):!1:(i=et(n),r=et(e),i||r?!i||!r?!1:Ol(n,e,t,dd):String(n)===String(e))))}const Ju=n=>!!(n&&n.__v_isRef===!0),je=n=>ht(n)?n:n==null?"":Ie(n)||et(n)&&(n.toString===Yu||!ze(n.toString))?Ju(n)?je(n.value):JSON.stringify(n,Qu,2):String(n),Qu=(n,e)=>Ju(e)?Qu(n,e.value):ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Xo(i,s)+" =>"]=r,t),{})}:ro(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Xo(t))}:Un(e)?Xo(e):et(e)&&!Ie(e)&&!$u(e)?String(e):e,Xo=(n,e="")=>{var t;return Un(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class pd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Tt&&(Tt.active?(this.parent=Tt,this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Tt;try{return Tt=this,e()}finally{Tt=t}}}on(){++this._on===1&&(this.prevScope=Tt,Tt=this)}off(){if(this._on>0&&--this._on===0){if(Tt===this)Tt=this.prevScope;else{let e=Tt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function md(){return Tt}let st;const qo=new WeakSet;class ef{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&(Tt.active?Tt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qo.has(this)&&(qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bl(this),rf(this);const e=st,t=Sn;st=this,Sn=!0;try{return this.fn()}finally{sf(this),st=e,Sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cl(e);this.deps=this.depsTail=void 0,Bl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Na(this)&&this.run()}get dirty(){return Na(this)}}let tf=0,Wr,Xr;function nf(n,e=!1){if(n.flags|=8,e){n.next=Xr,Xr=n;return}n.next=Wr,Wr=n}function al(){tf++}function ll(){if(--tf>0)return;if(Xr){let e=Xr;for(Xr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Wr;){let e=Wr;for(Wr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function rf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),cl(i),gd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Na(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(of(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function of(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===es)||(n.globalVersion=es,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Na(n))))return;n.flags|=2;const e=n.dep,t=st,i=Sn;st=n,Sn=!0;try{rf(n);const r=n.fn(n._value);(e.version===0||Ln(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{st=t,Sn=i,sf(n),n.flags&=-3}}function cl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)cl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function gd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Sn=!0;const af=[];function In(){af.push(Sn),Sn=!1}function Nn(){const n=af.pop();Sn=n===void 0?!0:n}function Bl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=st;st=void 0;try{e()}finally{st=t}}}let es=0;class _d{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!st||!Sn||st===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==st)t=this.activeLink=new _d(st,this),st.deps?(t.prevDep=st.depsTail,st.depsTail.nextDep=t,st.depsTail=t):st.deps=st.depsTail=t,lf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=st.depsTail,t.nextDep=void 0,st.depsTail.nextDep=t,st.depsTail=t,st.deps===t&&(st.deps=i)}return t}trigger(e){this.version++,es++,this.notify(e)}notify(e){al();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ll()}}}function lf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)lf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Fa=new WeakMap,Oi=Symbol(""),Oa=Symbol(""),ts=Symbol("");function Ut(n,e,t){if(Sn&&st){let i=Fa.get(n);i||Fa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new ul),r.map=i,r.key=t),r.track()}}function $n(n,e,t,i,r,s){const a=Fa.get(n);if(!a){es++;return}const o=l=>{l&&l.trigger()};if(al(),e==="clear")a.forEach(o);else{const l=Ie(n),c=l&&ol(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===ts||!Un(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ts)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Oi)),ui(n)&&o(a.get(Oa)));break;case"delete":l||(o(a.get(Oi)),ui(n)&&o(a.get(Oa)));break;case"set":ui(n)&&o(a.get(Oi));break}}ll()}function Yi(n){const e=Je(n);return e===n||(Ut(e,"iterate",ts),un(n))?e:Fn(n)?fi(n)?e.map(t=>gi(fn(t))):e.map(gi):e.map(fn)}function wo(n){return Ut(n=Je(n),"iterate",ts),n}function wn(n,e){return Fn(n)?gi(fi(n)?fn(e):e):fn(e)}const vd={__proto__:null,[Symbol.iterator](){return Yo(this,Symbol.iterator,n=>wn(this,n))},concat(...n){return Yi(this).concat(...n.map(e=>Ie(e)?Yi(e):e))},entries(){return Yo(this,"entries",n=>(n[1]=wn(this,n[1]),n))},every(n,e){return zn(this,"every",n,e,void 0,arguments)},filter(n,e){return zn(this,"filter",n,e,t=>t.map(i=>wn(this,i)),arguments)},find(n,e){return zn(this,"find",n,e,t=>wn(this,t),arguments)},findIndex(n,e){return zn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return zn(this,"findLast",n,e,t=>wn(this,t),arguments)},findLastIndex(n,e){return zn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return zn(this,"forEach",n,e,void 0,arguments)},includes(...n){return $o(this,"includes",n)},indexOf(...n){return $o(this,"indexOf",n)},join(n){return Yi(this).join(n)},lastIndexOf(...n){return $o(this,"lastIndexOf",n)},map(n,e){return zn(this,"map",n,e,void 0,arguments)},pop(){return Lr(this,"pop")},push(...n){return Lr(this,"push",n)},reduce(n,...e){return Hl(this,"reduce",n,e)},reduceRight(n,...e){return Hl(this,"reduceRight",n,e)},shift(){return Lr(this,"shift")},some(n,e){return zn(this,"some",n,e,void 0,arguments)},splice(...n){return Lr(this,"splice",n)},toReversed(){return Yi(this).toReversed()},toSorted(n){return Yi(this).toSorted(n)},toSpliced(...n){return Yi(this).toSpliced(...n)},unshift(...n){return Lr(this,"unshift",n)},values(){return Yo(this,"values",n=>wn(this,n))}};function Yo(n,e,t){const i=wo(n),r=i[e],s=r.call(i);if(i!==n&&!un(n)){if(s[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(s));return a.next=()=>zl(s.next(),t),r!==cf[e]&&Object.defineProperties(a,{return:{get(){const o=s.return;return typeof o=="function"?o.bind(s):o}},throw:{get(){const o=s.throw;return typeof o=="function"?o.bind(s):o}}}),a}s._next=s.next,s.next=()=>zl(s._next(),t)}return s}function zl(n,e){return n.done||(n.value=e(n.value)),n}const cf=Array.prototype;function zn(n,e,t,i,r,s){const a=wo(n),o=a!==n&&!un(n),l=a[e];if(l!==cf[e]){const f=l.apply(n,s);return o?fn(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,wn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Hl(n,e,t,i){const r=wo(n),s=r!==n&&!un(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=wn(n,c)),t.call(this,c,wn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?wn(n,l):l}function $o(n,e,t){const i=Je(n);Ut(i,"iterate",ts);const r=i[e](...t);return(r===-1||r===!1)&&dl(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function Lr(n,e,t=[]){In(),al();const i=Je(n)[e].apply(n,t);return ll(),Nn(),i}const xd=rl("__proto__,__v_isRef,__isVue"),uf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Un));function Md(n){Un(n)||(n=String(n));const e=Je(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class ff{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Pd:mf:s?pf:df).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ie(e);if(!r){let l;if(a&&(l=vd[t]))return l;if(t==="hasOwnProperty")return Md}const o=Reflect.get(e,t,Nt(e)?e:i);if((Un(t)?uf.has(t):xd(t))||(r||Ut(e,"get",t),s))return o;if(Nt(o)){const l=a&&ol(t)?o:o.value;return r&&et(l)?Bi(l):l}return et(o)?r?Bi(o):Ro(o):o}}class hf extends ff{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Ie(e)&&ol(t);if(!this._isShallow){const c=Fn(s);if(!un(i)&&!Fn(i)&&(s=Je(s),i=Je(i)),!a&&Nt(s)&&!Nt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Ze(e,t),l=Reflect.set(e,t,i,Nt(e)?e:r);return e===Je(r)&&l&&(o?Ln(i,s)&&$n(e,"set",t,i):$n(e,"add",t,i)),l}deleteProperty(e,t){const i=Ze(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&$n(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Un(t)||!uf.has(t))&&Ut(e,"has",t),i}ownKeys(e){return Ut(e,"iterate",Ie(e)?"length":Oi),Reflect.ownKeys(e)}}class Sd extends ff{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ed=new hf,yd=new Sd,bd=new hf(!0);const Ba=n=>n,ys=n=>Reflect.getPrototypeOf(n);function Td(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),a=ui(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Ba:e?gi:fn;return!e&&Ut(s,"iterate",l?Oa:Oi),yt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function bs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ad(n,e){const t={get(r){const s=this.__v_raw,a=Je(s),o=Je(r);n||(Ln(r,o)&&Ut(a,"get",r),Ut(a,"get",o));const{has:l}=ys(a),c=e?Ba:n?gi:fn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ut(Je(r),"iterate",Oi),r.size},has(r){const s=this.__v_raw,a=Je(s),o=Je(r);return n||(Ln(r,o)&&Ut(a,"has",r),Ut(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Je(o),c=e?Ba:n?gi:fn;return!n&&Ut(l,"iterate",Oi),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return yt(t,n?{add:bs("add"),set:bs("set"),delete:bs("delete"),clear:bs("clear")}:{add(r){const s=Je(this),a=ys(s),o=Je(r),l=!e&&!un(r)&&!Fn(r)?o:r;return a.has.call(s,l)||Ln(r,l)&&a.has.call(s,r)||Ln(o,l)&&a.has.call(s,o)||(s.add(l),$n(s,"add",l,l)),this},set(r,s){!e&&!un(s)&&!Fn(s)&&(s=Je(s));const a=Je(this),{has:o,get:l}=ys(a);let c=o.call(a,r);c||(r=Je(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Ln(s,u)&&$n(a,"set",r,s):$n(a,"add",r,s),this},delete(r){const s=Je(this),{has:a,get:o}=ys(s);let l=a.call(s,r);l||(r=Je(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&$n(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,a=r.clear();return s&&$n(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Td(r,n,e)}),t}function fl(n,e){const t=Ad(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_isShallow"?e:r==="__v_raw"?i:Reflect.get(Ze(t,r)&&r in i?t:i,r,s)}const wd={get:fl(!1,!1)},Rd={get:fl(!1,!0)},Cd={get:fl(!0,!1)};const df=new WeakMap,pf=new WeakMap,mf=new WeakMap,Pd=new WeakMap;function Ld(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ro(n){return Fn(n)?n:hl(n,!1,Ed,wd,df)}function Dd(n){return hl(n,!1,bd,Rd,pf)}function Bi(n){return hl(n,!0,yd,Cd,mf)}function hl(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=Ld(nd(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function fi(n){return Fn(n)?fi(n.__v_raw):!!(n&&n.__v_isReactive)}function Fn(n){return!!(n&&n.__v_isReadonly)}function un(n){return!!(n&&n.__v_isShallow)}function dl(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function Ud(n){return!Ze(n,"__v_skip")&&Object.isExtensible(n)&&Ku(n,"__v_skip",!0),n}const fn=n=>et(n)?Ro(n):n,gi=n=>et(n)?Bi(n):n;function Nt(n){return n?n.__v_isRef===!0:!1}function Yt(n){return Id(n,!1)}function Id(n,e){return Nt(n)?n:new Nd(n,e)}class Nd{constructor(e,t){this.dep=new ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||un(e)||Fn(e);e=i?e:Je(e),Ln(e,t)&&(this._rawValue=e,this._value=i?e:fn(e),this.dep.trigger())}}function Ae(n){return Nt(n)?n.value:n}const Fd={get:(n,e,t)=>e==="__v_raw"?n:Ae(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Nt(r)&&!Nt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function gf(n){return fi(n)?n:new Proxy(n,Fd)}class Od{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&st!==this)return nf(this,!0),!0}get value(){const e=this.dep.track();return of(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bd(n,e,t=!1){let i,r;return ze(n)?i=n:(i=n.get,r=n.set),new Od(i,r,t)}const Ts={},so=new WeakMap;let Ci;function zd(n,e=!1,t=Ci){if(t){let i=so.get(t);i||so.set(t,i=[]),i.push(n)}}function Hd(n,e,t=tt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=T=>r?T:un(T)||r===!1||r===0?jn(T,1):jn(T);let u,f,d,m,v=!1,_=!1;if(Nt(n)?(f=()=>n.value,v=un(n)):fi(n)?(f=()=>c(n),v=!0):Ie(n)?(_=!0,v=n.some(T=>fi(T)||un(T)),f=()=>n.map(T=>{if(Nt(T))return T.value;if(fi(T))return c(T);if(ze(T))return l?l(T,2):T()})):ze(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){In();try{d()}finally{Nn()}}const T=Ci;Ci=u;try{return l?l(n,3,[m]):n(m)}finally{Ci=T}}:f=Dn,e&&r){const T=f,L=r===!0?1/0:r;f=()=>jn(T(),L)}const p=md(),h=()=>{u.stop(),p&&p.active&&sl(p.effects,u)};if(s&&e){const T=e;e=(...L)=>{try{return T(...L)}finally{h()}}}let E=_?new Array(n.length).fill(Ts):Ts;const x=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const L=u.run();if(T||r||v||(_?L.some((R,C)=>Ln(R,E[C])):Ln(L,E))){const R=Ci;In();try{d&&d(),Ci=u;const C=[L,E===Ts?void 0:_&&E[0]===Ts?[]:E,m];E=L,l?l(e,3,C):e(...C)}finally{Ci=R,Nn()}}}else u.run()};return o&&o(x),u=new ef(f),u.scheduler=a?()=>a(x,!1):x,m=T=>zd(T,!1,u),d=u.onStop=()=>{const T=so.get(u);if(T){if(l)l(T,4);else for(const L of T)L();so.delete(u)}},e?i?x(!0):E=u.run():a?a(x.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function jn(n,e=1/0,t){if(e<=0||!et(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Nt(n))jn(n.value,e,t);else if(Ie(n))for(let i=0;i<n.length;i++)jn(n[i],e,t);else if(ro(n)||ui(n))n.forEach(i=>{jn(i,e,t)});else if($u(n)){for(const i in n)jn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&jn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ds(n,e,t,i){try{return i?n(...i):n()}catch(r){Co(r,e,t)}}function yn(n,e,t,i){if(ze(n)){const r=ds(n,e,t,i);return r&&qu(r)&&r.catch(s=>{Co(s,e,t,void 0,!0)}),r}if(Ie(n)){const r=[];for(let s=0;s<n.length;s++)r.push(yn(n[s],e,t,i));return r}}function Co(n,e,t,i=!0,r=!1){const s=e?e.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||tt;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f&&!l.isUnmounted&&(!r||l.scope.active)){for(let d=0;d<f.length;d++)if(f[d](n,c,u)===!1)return}l=l.parent}if(a){In(),ds(a,null,10,[n,c,u]),Nn();return}}Gd(n,t,s,i,o)}function Gd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const kt=[];let gn=-1;const Rn=[];let oi=null,fr=0;const _f=Promise.resolve();let oo=null;function vf(n){const e=oo||_f;return n?e.then(this?n.bind(this):n):e}function Vd(n){let e=gn+1,t=kt.length;for(;e<t;){const i=e+t>>>1,r=kt[i],s=ns(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function pl(n){if(!(n.flags&1)){const e=ns(n),t=kt[kt.length-1];!t||!(n.flags&2)&&e>=ns(t)?kt.push(n):kt.splice(Vd(e),0,n),n.flags|=1,xf()}}function xf(){oo||(oo=_f.then(Ef))}function kd(n){if(!Ie(n))oi&&n.id===-1?oi.splice(fr+1,0,n):n.flags&1||(Rn.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Rn.push(n[e]);xf()}function Mf(n,e,t,i=gn+1){for(;i<kt.length;i++){const r=kt[i];if(r&&r.flags&2){if(n&&r.id!==n.uid||e!==void 0&&!(r.id>=e))continue;kt.splice(i,1),i=n?i-1:gn,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Sf(n,e,t=0){if(Rn.length){let i=Rn,r=0;if(e){i=[];for(let a=0;a<Rn.length;a++){const o=Rn[a];(o.i!==void 0?!o.i||o.i.uid<t:e.has(o))?Rn[r++]=o:i.push(o)}}const s=[...new Set(i)].sort((a,o)=>ns(a)-ns(o));if(Rn.length=r,oi){for(let a=0;a<s.length;a++)oi.push(s[a]);return}for(oi=s,fr=0;fr<oi.length;fr++){const a=oi[fr];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}oi=null,fr=0}}let jo=!1;function Wd(n,e){if(jo){n();return}const t=e===void 0?void 0:new Set(Rn);n(),jo=!0;try{Mf(void 0,e),Sf(void 0,t,e)}finally{jo=!1}}const ns=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ef(n){try{for(gn=0;gn<kt.length;gn++){const e=kt[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ds(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<kt.length;gn++){const e=kt[gn];e&&(e.flags&=-2)}gn=-1,kt.length=0,Sf(),oo=null,(kt.length||Rn.length)&&Ef()}}let cn=null,yf=null;function ao(n){const e=cn;return cn=n,yf=n&&n.type.__scopeId||null,e}function Xd(n,e=cn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Zl(-1);const s=ao(e),a=zi.length;let o;try{o=n(...r)}finally{for(let l=zi.length;l>a;l--)qf();ao(s),i._d&&Zl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function qd(n,e){if(cn===null)return n;const t=Io(cn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=tt]=e[r];s&&(ze(s)&&(s={mounted:s,updated:s}),s.deep&&jn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function yi(n,e,t,i){let r=n;if(i==="beforeMount")n._mount=n;else if(i==="beforeUpdate"){const o=e&&e._mount;o&&(o._latest=n,n._mount=o)}else if(i==="mounted"){const o=n._latest;n._mount=n._latest=void 0,o&&(r=o,o._mount=void 0)}const s=r.dirs,a=e&&e.dirs;for(let o=0;o<s.length;o++){let l=s[o];a?l.oldValue=a[o].value:i==="mounted"&&l.oldValue!==void 0&&(l=yt({},l,{oldValue:void 0}));let c=l.dir[i];c&&(In(),yn(c,t,8,[n.el,l,r,e]),Nn())}}function Yd(n,e){if(Wt){let t=Wt.provides;const i=Wt.parent&&Wt.parent.provides;i===t&&(t=Wt.provides=Object.create(i)),t[n]=e}}function eo(n,e,t=!1){const i=qp();if(i||pr){let r=pr?pr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ze(e)?e.call(i&&i.proxy):e}}const $d=Symbol.for("v-scx"),jd=()=>eo($d);function qr(n,e,t){return bf(n,e,t)}function bf(n,e,t=tt){const{immediate:i,deep:r,flush:s,once:a}=t,o=yt({},t),l=e&&i||!e&&s!=="post";let c;if(as){if(s==="sync"){const m=jd();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Dn,m.resume=Dn,m.pause=Dn,m}}const u=Wt;o.call=(m,v,_)=>yn(m,u,v,_);let f=!1;s==="post"?o.scheduler=m=>{m.i=u,Ht(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,v)=>{v?m():pl(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Hd(n,e,o);return as&&(c?c.push(d):l&&d()),d}function Kd(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?Tf(i,n):()=>i[n]:n.bind(i,i);let s;ze(e)?s=e:(s=e.handler,t=e);const a=ms(this),o=bf(r,s.bind(i),t);return a(),o}function Tf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Zd=Symbol("_vte"),Po=n=>n.__isTeleport,Ko=Symbol("_leaveCb");function Jd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==bn){e=t;break}}return e}function Af(n){if(!ml(n))return Po(n.type)&&n.children?Jd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ze(t.default))return t.default()}}function Yr(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Yr(Po(t.type)&&Af(t)||t,e)}else if(n.shapeFlag&128){const t=n.suspense;if(t){const i=t.isHydrating?t.pendingBranch:t.activeBranch;i&&Yr(i,e.clone(i))}else n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)}else if(n.transition=e,n.type===gt&&Ie(n.children)){const t=Uf(n.children,!1);t&&Yr(t,e)}}function za(n){if(n.component)return za(n.component.subTree);if(n.type===gt){const e=Ie(n.children)&&Uf(n.children,!1);return e?za(e):void 0}if(n.type!==bn)return n}function wf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Gl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const lo=new WeakMap;function $r(n,e,t,i,r=!1){if(Ie(n)){n.forEach((_,p)=>$r(_,e&&(Ie(e)?e[p]:e),t,i,r));return}if(jr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$r(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Io(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===tt?o.refs={}:o.refs,f=o.setupState,d=Je(f),m=f===tt?Xu:_=>Gl(u,_)?!1:Ze(d,_),v=(_,p)=>!(p&&Gl(u,p));if(c!=null&&c!==l){if(Vl(e),ht(c))u[c]=null,m(c)&&(f[c]=null);else if(Nt(c)){const _=e;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(ze(l))ds(l,o,12,[a,u]);else{const _=ht(l),p=Nt(l);if(_||p){const h=()=>{if(n.f){const E=_?m(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)Ie(E)&&sl(E,s);else if(Ie(E))E.includes(s)||E.push(s);else if(_)u[l]=[s],m(l)&&(f[l]=u[l]);else{const x=[s];v(l,n.k)&&(l.value=x),n.k&&(u[n.k]=x)}}else _?(u[l]=a,m(l)&&(f[l]=a)):p&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const E=()=>{h(),lo.delete(n)};E.id=-1,lo.set(n,E),Ht(E,t)}else Vl(n),h()}}}function Vl(n){const e=lo.get(n);e&&(e.flags|=8,lo.delete(n))}To().requestIdleCallback;To().cancelIdleCallback;const jr=n=>!!n.type.__asyncLoader,ml=n=>n.type.__isKeepAlive;function Qd(n,e){Rf(n,"a",e)}function ep(n,e){Rf(n,"da",e)}function Rf(n,e,t=Wt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(is(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ml(r.parent.vnode)&&tp(i,e,t,r),r=r.parent}}function tp(n,e,t,i){const r=is(e,n,i,!0),s=is("um",()=>sl(i[e],r),t);s.flags=16}function is(n,e,t=Wt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{In();const o=ms(t),l=yn(e,t,n,a);return o(),Nn(),l});return i?r.unshift(s):r.push(s),s}}const Jn=n=>(e,t=Wt)=>{(!as||n==="sp")&&is(n,(...i)=>e(...i),t)},np=Jn("bm"),ps=Jn("m"),ip=Jn("bu"),rp=Jn("u"),Lo=Jn("bum"),sp=Jn("um"),op=Jn("sp"),ap=Jn("rtg"),lp=Jn("rtc");function cp(n,e=Wt){is("ec",n,e)}const up=Symbol.for("v-ndc");function rs(n,e,t,i){let r;const s=t,a=Ie(n);if(a||ht(n)){const o=a&&fi(n);let l=!1,c=!1;o&&(l=!un(n),c=Fn(n),n=wo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?gi(fn(n[u])):fn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)r=[];else{r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(et(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Ha=n=>n?Zf(n)?Io(n):Ha(n.parent):null,Kr=yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ha(n.parent),$root:n=>Ha(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Pf(n),$forceUpdate:n=>n.f||(n.f=()=>{pl(n.update)}),$nextTick:n=>n.n||(n.n=vf.bind(n.proxy)),$watch:n=>Kd.bind(n)}),Zo=(n,e)=>n!==tt&&!n.__isScriptSetup&&Ze(n,e),fp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Zo(i,e))return a[e]=1,i[e];if(r!==tt&&Ze(r,e))return a[e]=2,r[e];if(Ze(s,e))return a[e]=3,s[e];if(t!==tt&&Ze(t,e))return a[e]=4,t[e];Ga&&(a[e]=0)}}const c=Kr[e];let u,f;if(c)return e==="$attrs"&&Ut(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==tt&&Ze(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Ze(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Zo(r,e)?(r[e]=t,!0):i!==tt&&Ze(i,e)?(i[e]=t,!0):Ze(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==tt&&o[0]!=="$"&&Ze(n,o)||Zo(e,o)||Ze(s,o)||Ze(i,o)||Ze(Kr,o)||Ze(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ze(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function kl(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ga=!0;function hp(n){const e=Pf(n),t=n.proxy,i=n.ctx;Ga=!1,e.beforeCreate&&Wl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:v,activated:_,deactivated:p,beforeDestroy:h,beforeUnmount:E,destroyed:x,unmounted:T,render:L,renderTracked:R,renderTriggered:C,errorCaptured:K,serverPrefetch:y,expose:w,inheritAttrs:W,components:te,directives:re,filters:U}=e;if(c&&dp(c,i,null),a)for(const J in a){const $=a[J];ze($)&&(i[J]=$.bind(t))}if(r){const J=r.call(t,t);et(J)&&(n.data=Ro(J))}if(Ga=!0,s)for(const J in s){const $=s[J],ee=ze($)?$.bind(t,t):ze($.get)?$.get.bind(t,t):Dn,ae=!ze($)&&ze($.set)?$.set.bind(t):Dn,le=Jp({get:ee,set:ae});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>le.value,set:pe=>le.value=pe})}if(o)for(const J in o)Cf(o[J],i,t,J);if(l){const J=ze(l)?l.call(t):l;Reflect.ownKeys(J).forEach($=>{Yd($,J[$])})}u&&Wl(u,n,"c");function j(J,$){Ie($)?$.forEach(ee=>J(ee.bind(t))):$&&J($.bind(t))}if(j(np,f),j(ps,d),j(ip,m),j(rp,v),j(Qd,_),j(ep,p),j(cp,K),j(lp,R),j(ap,C),j(Lo,E),j(sp,T),j(op,y),Ie(w))if(w.length){const J=n.exposed||(n.exposed={});w.forEach($=>{Object.defineProperty(J,$,{get:()=>t[$],set:ee=>t[$]=ee,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===Dn&&(n.render=L),W!=null&&(n.inheritAttrs=W),te&&(n.components=te),re&&(n.directives=re),y&&wf(n)}function dp(n,e,t=Dn){Ie(n)&&(n=Va(n));for(const i in n){const r=n[i];let s;et(r)?"default"in r?s=eo(r.from||i,r.default,!0):s=eo(r.from||i):s=eo(r),Nt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Wl(n,e,t){yn(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Cf(n,e,t,i){let r=i.includes(".")?Tf(t,i):()=>t[i];if(ht(n)){const s=e[n];ze(s)&&qr(r,s)}else if(ze(n))qr(r,n.bind(t));else if(et(n))if(Ie(n))n.forEach(s=>Cf(s,e,t,i));else{const s=ze(n.handler)?n.handler.bind(t):e[n.handler];ze(s)&&qr(r,s,n)}}function Pf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>co(l,c,a,!0)),co(l,e,a)),et(e)&&s.set(e,l),l}function co(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&co(n,s,t,!0),r&&r.forEach(a=>co(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=pp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const pp={data:Xl,props:ql,emits:ql,methods:Gr,computed:Gr,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:Gr,directives:Gr,watch:gp,provide:Xl,inject:mp};function Xl(n,e){return e?n?function(){return yt(ze(n)?n.call(this,this):n,ze(e)?e.call(this,this):e)}:e:n}function mp(n,e){return Gr(Va(n),Va(e))}function Va(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function zt(n,e){return n?[...new Set([].concat(n,e))]:e}function Gr(n,e){return n?yt(Object.create(null),n,e):e}function ql(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:yt(Object.create(null),kl(n),kl(e??{})):e}function gp(n,e){if(!n)return e;if(!e)return n;const t=yt(Object.create(null),n);for(const i in e)t[i]=zt(n[i],e[i]);return t}function Lf(){return{app:null,config:{isNativeTag:Xu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _p=0;function vp(n,e){return function(i,r=null){ze(i)||(i=yt({},i)),r!=null&&!et(r)&&(r=null);const s=Lf(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:_p++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Qp,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ze(u.install)?(a.add(u),u.install(c,...f)):ze(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||_t(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Io(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(yn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=pr;pr=c;try{return u()}finally{pr=f}}};return c}}let pr=null;const xp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Mn(e)}Modifiers`]||n[`${Wi(e)}Modifiers`];function Mp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||tt;let r=t;const s=e.startsWith("update:"),a=s&&xp(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>ht(u)?u.trim():u)),a.number&&(r=r.map(sd)));let o,l=i[o=ko(e)]||i[o=ko(Mn(e))];!l&&s&&(l=i[o=ko(Wi(e))]),l&&yn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,yn(c,n,6,r)}}const Sp=new WeakMap;function Df(n,e,t=!1){const i=t?Sp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ze(n)){const l=c=>{const u=Df(c,e,!0);u&&(o=!0,yt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(et(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>a[l]=null):yt(a,s),et(n)&&i.set(n,a),a)}function Do(n,e){return!n||!Eo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ze(n,e[0].toLowerCase()+e.slice(1))||Ze(n,Wi(e))||Ze(n,e))}function Yl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:v,inheritAttrs:_}=n,p=ao(n);let h,E;try{if(t.shapeFlag&4){const T=r||i,L=T;h=Cn(c.call(L,T,u,f,m,d,v)),E=o}else{const T=e;h=Cn(T.length>1?T(f,{attrs:o,slots:a,emit:l}):T(f,null)),E=e.props?o:Ep(o)}}catch(T){zi.length=0,Co(T,n,1),h=_t(bn)}let x=h;if(E&&_!==!1){const T=Object.keys(E),{shapeFlag:L}=x;T.length&&L&7&&(s&&T.some(yo)&&(E=yp(E,s)),x=Mr(x,E,!1,!0))}if(t.dirs&&(x=Mr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition){const T=Po(x.type)&&Af(x)||x;Yr(T,t.transition)}return h=x,ao(p),h}function Uf(n,e=!0){let t;for(let i=0;i<n.length;i++){const r=n[i];if(vl(r)){if(r.type!==bn||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Ep=n=>{let e;for(const t in n)(t==="class"||t==="style"||Eo(t))&&((e||(e={}))[t]=n[t]);return e},yp=(n,e)=>{const t={};for(const i in n)(!yo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function bp(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?$l(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(If(a,i,d)&&!Do(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?$l(i,a,c):!0:!!a;return!1}function $l(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(!Ze(n,s)||If(e,n,s)&&!Do(t,s))return!0}return!1}function If(n,e,t){const i=n[t],r=e[t];return t==="style"&&et(i)&&et(r)?!Ao(i,r):i!==r}function Tp({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Nf={},Ff=()=>Object.create(Nf),Of=n=>Object.getPrototypeOf(n)===Nf;function Ap(n,e,t,i=!1){const r={},s=Ff();n.propsDefaults=Object.create(null),Bf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Dd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function wp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Do(n.emitsOptions,d))continue;const m=e[d];if(l)if(Ze(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const v=Mn(d);r[v]=ka(l,o,v,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Bf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ze(e,f)&&((u=Wi(f))===f||!Ze(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ka(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ze(e,f))&&(delete s[f],c=!0)}c&&$n(n.attrs,"set","")}function Bf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(kr(l))continue;const c=e[l];let u;r&&Ze(r,u=Mn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Do(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Je(t),c=o||tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ka(r,l,f,c[f],n,!Ze(c,f))}}return a}function ka(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ze(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ze(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ms(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Wi(t))&&(i=!0))}return i}const Rp=new WeakMap;function zf(n,e,t=!1){const i=t?Rp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ze(n)){const u=f=>{l=!0;const[d,m]=zf(f,e,!0);yt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return et(n)&&i.set(n,Ni),Ni;if(Ie(s))for(let u=0;u<s.length;u++){const f=Mn(s[u]);jl(f)&&(a[f]=tt)}else if(s)for(const u in s){const f=Mn(u);if(jl(f)){const d=s[u],m=a[f]=Ie(d)||ze(d)?{type:d}:yt({},d),v=m.type;let _=!1,p=!0;if(Ie(v))for(let h=0;h<v.length;++h){const E=v[h],x=ze(E)&&E.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(p=!1)}else _=ze(v)&&v.name==="Boolean";m[0]=_,m[1]=p,(_||Ze(m,"default"))&&o.push(f)}}const c=[a,o];return et(n)&&i.set(n,c),c}function jl(n){return n[0]!=="$"&&!kr(n)}const gl=n=>n==="_"||n==="_ctx"||n==="$stable",_l=n=>Ie(n)?n.map(Cn):[Cn(n)],Cp=(n,e,t)=>{if(e._n)return e;const i=Xd((...r)=>_l(e(...r)),t);return i._c=!1,i},Hf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(gl(r))continue;const s=n[r];if(ze(s))e[r]=Cp(r,s,i);else if(s!=null){const a=_l(s);e[r]=()=>a}}},Gf=(n,e)=>{const t=_l(e);n.slots.default=()=>t},Vf=(n,e,t)=>{for(const i in e)(t||!gl(i))&&(n[i]=e[i])},Pp=(n,e,t)=>{const i=n.slots=Ff();if(n.vnode.shapeFlag&32){const r=e._;r?(Vf(i,e,t),t&&Ku(i,"_",r,!0)):Hf(e,i)}else e&&Gf(n,e)},Lp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=tt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Vf(r,e,t):(s=!e.$stable,Hf(e,r)),a=e}else e&&(Gf(n,e),a={default:1});if(s)for(const o in r)!gl(o)&&a[o]==null&&delete r[o]},Ht=Op;function Dp(n){return Up(n)}function Up(n,e){const t=To();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Dn,insertStaticContent:v}=n,_=(A,S,G,H=null,B=null,O=null,ie=void 0,Q=null,M=!!S.dynamicChildren)=>{if(A===S)return;A&&!Dr(A,S)&&(H=ye(A),pe(A,B,O,!0),A=null),S.patchFlag===-2&&(M=!1,S.dynamicChildren=null),S.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(S.dynamicChildren===Ni&&(S.dynamicChildren=[]),S.dynamicChildren.hasOnce=!0);const{type:g,ref:P,shapeFlag:N}=S;switch(g){case Uo:p(A,S,G,H);break;case bn:h(A,S,G,H);break;case to:A==null&&E(S,G,H,ie);break;case gt:te(A,S,G,H,B,O,ie,Q,M);break;default:N&1?L(A,S,G,H,B,O,ie,Q,M):N&6?re(A,S,G,H,B,O,ie,Q,M):(N&64||N&128)&&g.process(A,S,G,H,B,O,ie,Q,M,Le)}P!=null&&B?$r(P,A&&A.ref,O,S||A,!S):P==null&&A&&A.ref!=null&&$r(A.ref,null,O,A,!0)},p=(A,S,G,H)=>{if(A==null)i(S.el=o(S.children),G,H);else{const B=S.el=A.el;S.children!==A.children&&c(B,S.children)}},h=(A,S,G,H)=>{A==null?i(S.el=l(S.children||""),G,H):S.el=A.el},E=(A,S,G,H)=>{[A.el,A.anchor]=v(A.children,S,G,H,A.el,A.anchor)},x=({el:A,anchor:S},G,H)=>{let B;for(;A&&A!==S;)B=d(A),i(A,G,H),A=B;i(S,G,H)},T=({el:A,anchor:S})=>{let G;for(;A&&A!==S;)G=d(A),r(A),A=G;r(S)},L=(A,S,G,H,B,O,ie,Q,M)=>{if(S.type==="svg"?ie="svg":S.type==="math"&&(ie="mathml"),A==null)R(S,G,H,B,O,ie,Q,M);else{const g=A.el&&A.el._isVueCE?A.el:null;try{g&&g._beginPatch(),y(A,S,B,O,ie,Q,M)}finally{g&&g._endPatch()}}},R=(A,S,G,H,B,O,ie,Q)=>{let M,g;const{props:P,shapeFlag:N,transition:z,dirs:q}=A;if(M=A.el=a(A.type,O,P&&P.is,P),N&8?u(M,A.children):N&16&&K(A.children,M,null,H,B,Jo(A,O),ie,Q),q&&yi(A,null,H,"created"),C(M,A,A.scopeId,ie,H),P){for(const se in P)se!=="value"&&!kr(se)&&s(M,se,null,P[se],O,H);"value"in P&&s(M,"value",null,P.value,O),(g=P.onVnodeBeforeMount)&&An(g,H,A)}q&&yi(A,null,H,"beforeMount");const ue=Ip(B,z);ue?z.beforeEnter(M):z&&!z.persisted&&(M[Fp]=!0),i(M,S,G),((g=P&&P.onVnodeMounted)||ue||q)&&Ht(()=>{try{g&&An(g,H,A),ue&&z.enter(M),q&&yi(A,null,H,"mounted")}finally{}},B)},C=(A,S,G,H,B)=>{if(G&&m(A,G),H)for(let O=0;O<H.length;O++)m(A,H[O]);if(B){let O=B.subTree;if(S===O||Xf(O.type)&&(O.ssContent===S||O.ssFallback===S)){const ie=B.vnode;C(A,ie,ie.scopeId,ie.slotScopeIds,B.parent)}}},K=(A,S,G,H,B,O,ie,Q,M=0)=>{for(let g=M;g<A.length;g++){const P=A[g]=Q?Yn(A[g]):Cn(A[g]);_(null,P,S,G,H,B,O,ie,Q)}},y=(A,S,G,H,B,O,ie)=>{const Q=S.el=A.el;let{patchFlag:M,dynamicChildren:g,dirs:P}=S;M|=A.patchFlag&16;const N=A.props||tt,z=S.props||tt;let q;if(G&&bi(G,!1),(q=z.onVnodeBeforeUpdate)&&An(q,G,S,A),P&&yi(S,A,G,"beforeUpdate"),G&&bi(G,!0),g&&(!A.dynamicChildren||A.dynamicChildren.length!==g.length)&&(M=0,ie=!1,g=null),(N.innerHTML&&z.innerHTML==null||N.textContent&&z.textContent==null)&&u(Q,""),g?w(A.dynamicChildren,g,Q,G,H,Jo(S,B),O):ie||$(A,S,Q,null,G,H,Jo(S,B),O,!1),M>0){if(M&16)W(Q,N,z,G,B);else if(M&2&&N.class!==z.class&&s(Q,"class",null,z.class,B),M&4&&s(Q,"style",N.style,z.style,B),M&8){const ue=S.dynamicProps;for(let se=0;se<ue.length;se++){const ce=ue[se],xe=N[ce],be=z[ce];(be!==xe||ce==="value")&&s(Q,ce,xe,be,B,G)}}M&1&&A.children!==S.children&&u(Q,S.children)}else!ie&&g==null&&W(Q,N,z,G,B);((q=z.onVnodeUpdated)||P)&&Ht(()=>{q&&An(q,G,S,A),P&&yi(S,A,G,"updated")},H)},w=(A,S,G,H,B,O,ie)=>{for(let Q=0;Q<S.length;Q++){const M=A[Q],g=S[Q],P=M.el||Zr(M),N=P&&(M.type===gt||!Dr(M,g)||M.shapeFlag&198)?f(P):G;_(M,g,N,null,H,B,O,ie,!0)}},W=(A,S,G,H,B)=>{if(S!==G){if(S!==tt)for(const O in S)!kr(O)&&!(O in G)&&s(A,O,S[O],null,B,H);for(const O in G){if(kr(O))continue;const ie=G[O],Q=S[O];ie!==Q&&O!=="value"&&s(A,O,Q,ie,B,H)}"value"in G&&s(A,"value",S.value,G.value,B)}},te=(A,S,G,H,B,O,ie,Q,M)=>{const g=S.el=A?A.el:o(""),P=S.anchor=A?A.anchor:o("");let{patchFlag:N,dynamicChildren:z,slotScopeIds:q}=S;q&&(Q=Q?Q.concat(q):q),A==null?(i(g,G,H),i(P,G,H),K(S.children||[],G,P,B,O,ie,Q,M)):N>0&&N&64&&z&&A.dynamicChildren&&A.dynamicChildren.length===z.length?(w(A.dynamicChildren,z,G,B,O,ie,Q),(S.key!=null||B&&S===B.subTree)&&kf(A,S,!0)):$(A,S,G,P,B,O,ie,Q,M)},re=(A,S,G,H,B,O,ie,Q,M)=>{S.slotScopeIds=Q,A==null?S.shapeFlag&512?B.ctx.activate(S,G,H,ie,M):U(S,G,H,B,O,ie,M):V(A,S,M)},U=(A,S,G,H,B,O,ie)=>{const Q=A.component=Xp(A,H,B);if(ml(A)&&(Q.ctx.renderer=Le),Yp(Q,!1,ie),Q.asyncDep){if(B&&B.registerDep(Q,j,ie,O),!A.el){const M=Q.subTree=_t(bn);h(null,M,S,G),A.placeholder=M.el}}else j(Q,A,S,G,B,O,ie)},V=(A,S,G)=>{const H=S.component=A.component;if(bp(A,S,G))if(H.asyncDep&&!H.asyncResolved){S.el=A.el,S.placeholder=A.placeholder,J(H,S,G);return}else H.next=S,H.update();else S.el=A.el,S.placeholder=A.placeholder,H.vnode=S},j=(A,S,G,H,B,O,ie)=>{const Q=()=>{if(A.isMounted){let{next:N,bu:z,u:q,parent:ue,vnode:se}=A;{const ke=Wf(A);if(ke){N&&(N.el=se.el,J(A,N,ie)),ke.asyncDep.then(()=>{const Pe=()=>{A.job.flags&8||(B&&B.pendingBranch?Ht(Pe,B):g())};Pe.flags=48,Ht(Pe,B)});return}}let ce=N,xe;bi(A,!1),N?(N.el=se.el,J(A,N,ie)):N=se,z&&Wo(z),(xe=N.props&&N.props.onVnodeBeforeUpdate)&&An(xe,ue,N,se),bi(A,!0);const be=Yl(A),ne=A.subTree;A.subTree=be,_(ne,be,f(ne.el||Zr(ne)),ye(ne),A,B,O),N.el=be.el,ce===null&&Tp(A,be.el),q&&Ht(q,B),(xe=N.props&&N.props.onVnodeUpdated)&&Ht(()=>An(xe,ue,N,se),B)}else{let N;const{el:z,props:q}=S,{bm:ue,m:se,parent:ce,root:xe,type:be}=A,ne=jr(S);bi(A,!1),ue&&Wo(ue),!ne&&(N=q&&q.onVnodeBeforeMount)&&An(N,ce,S),bi(A,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(be,A.parent?A.parent.type:void 0);const ke=A.subTree=Yl(A);_(null,ke,G,H,A,B,O),S.el=ke.el}if(se&&Ht(se,B),!ne&&(N=q&&q.onVnodeMounted)){const ke=S;Ht(()=>An(N,ce,ke),B)}(S.shapeFlag&256||ce&&jr(ce.vnode)&&ce.vnode.shapeFlag&256)&&A.a&&Ht(A.a,B),A.isMounted=!0,S=G=H=null}};A.scope.on();const M=A.effect=new ef(Q);A.scope.off();const g=A.update=M.run.bind(M),P=A.job=M.runIfDirty.bind(M);P.i=A,P.id=A.uid,M.scheduler=()=>pl(P),bi(A,!0),g()},J=(A,S,G)=>{S.component=A;const H=A.vnode.props;A.vnode=S,A.next=null,wp(A,S.props,H,G),Lp(A,S.children,G),In(),Mf(A),Nn()},$=(A,S,G,H,B,O,ie,Q,M=!1)=>{const g=A&&A.children,P=A?A.shapeFlag:0,N=S.children,{patchFlag:z,shapeFlag:q}=S;if(z>0){if(z&128){ae(g,N,G,H,B,O,ie,Q,M);return}else if(z&256){ee(g,N,G,H,B,O,ie,Q,M);return}}q&8?(P&16&&Ee(g,B,O),N!==g&&u(G,N)):P&16?q&16?ae(g,N,G,H,B,O,ie,Q,M):Ee(g,B,O,!0):(P&8&&u(G,""),q&16&&K(N,G,H,B,O,ie,Q,M))},ee=(A,S,G,H,B,O,ie,Q,M)=>{A=A||Ni,S=S||Ni;const g=A.length,P=S.length,N=Math.min(g,P);let z;for(z=0;z<N;z++){const q=S[z]=M?Yn(S[z]):Cn(S[z]);_(A[z],q,G,null,B,O,ie,Q,M)}g>P?Ee(A,B,O,!0,!1,N):K(S,G,H,B,O,ie,Q,M,N)},ae=(A,S,G,H,B,O,ie,Q,M)=>{let g=0;const P=S.length;let N=A.length-1,z=P-1;for(;g<=N&&g<=z;){const q=A[g],ue=S[g]=M?Yn(S[g]):Cn(S[g]);if(Dr(q,ue))_(q,ue,G,null,B,O,ie,Q,M);else break;g++}for(;g<=N&&g<=z;){const q=A[N],ue=S[z]=M?Yn(S[z]):Cn(S[z]);if(Dr(q,ue))_(q,ue,G,null,B,O,ie,Q,M);else break;N--,z--}if(g>N){if(g<=z){const q=z+1,ue=q<P?S[q].el:H;for(;g<=z;)_(null,S[g]=M?Yn(S[g]):Cn(S[g]),G,ue,B,O,ie,Q,M),g++}}else if(g>z)for(;g<=N;)pe(A[g],B,O,!0),g++;else{const q=g,ue=g,se=new Map;for(g=ue;g<=z;g++){const Se=S[g]=M?Yn(S[g]):Cn(S[g]);Se.key!=null&&se.set(Se.key,g)}let ce,xe=0;const be=z-ue+1;let ne=!1,ke=0;const Pe=new Array(be);for(g=0;g<be;g++)Pe[g]=0;for(g=q;g<=N;g++){const Se=A[g];if(xe>=be){pe(Se,B,O,!0);continue}let _e;if(Se.key!=null)_e=se.get(Se.key);else for(ce=ue;ce<=z;ce++)if(Pe[ce-ue]===0&&Dr(Se,S[ce])){_e=ce;break}_e===void 0?pe(Se,B,O,!0):(Pe[_e-ue]=g+1,_e>=ke?ke=_e:ne=!0,_(Se,S[_e],G,null,B,O,ie,Q,M),xe++)}const De=ne?Np(Pe):Ni;for(ce=De.length-1,g=be-1;g>=0;g--){const Se=ue+g,_e=S[Se],Oe=S[Se+1],Ke=Se+1<P?Oe.el||Zr(Oe):H;Pe[g]===0?_(null,_e,G,Ke,B,O,ie,Q,M):ne&&(ce<0||g!==De[ce]?le(_e,G,Ke,2):ce--)}}},le=(A,S,G,H,B=null)=>{const{el:O,type:ie,transition:Q,children:M,shapeFlag:g}=A;if(g&6){le(A.component.subTree,S,G,H);return}if(g&128){A.suspense.move(S,G,H);return}if(g&64){ie.move(A,S,G,Le);return}if(ie===gt){i(O,S,G);for(let N=0;N<M.length;N++)le(M[N],S,G,H);i(A.anchor,S,G);return}if(ie===to){x(A,S,G);return}if(H!==2&&g&1&&Q)if(H===0)Q.persisted&&!O[Ko]?i(O,S,G):(Q.beforeEnter(O),i(O,S,G),Ht(()=>Q.enter(O),B));else{const{leave:N,delayLeave:z,afterLeave:q}=Q,ue=()=>{A.ctx.isUnmounted?r(O):i(O,S,G)},se=()=>{const ce=O._isLeaving||!!O[Ko];O._isLeaving&&O[Ko](!0),Q.persisted&&!ce?ue():N(O,()=>{ue(),q&&q()})};z?z(O,ue,se):se()}else i(O,S,G)},pe=(A,S,G,H=!1,B=!1)=>{const{type:O,props:ie,ref:Q,children:M,dynamicChildren:g,shapeFlag:P,patchFlag:N,dirs:z,cacheIndex:q,memo:ue}=A;if((N===-2||g&&g.hasOnce)&&(B=!1),Q!=null&&(In(),$r(Q,null,G,A,!0),Nn()),q!=null&&(!A.ctx||A.ctx===S)&&(S.renderCache[q]=void 0),P&256&&S.ctx.deactivate(A))return;const se=P&1&&z,ce=!jr(A);let xe;if(ce&&(xe=ie&&ie.onVnodeBeforeUnmount)&&An(xe,S,A),P&6)ve(A.component,G,H);else{if(P&128){A.suspense.unmount(G,H);return}se&&yi(A,null,S,"beforeUnmount"),P&64?A.type.remove(A,S,G,Le,H):g&&!g.hasOnce&&(O!==gt||N>0&&N&64)?Ee(g,S,G,!1,!0):(O===gt&&N&384||!B&&P&16)&&Ee(M,S,G),H&&Z(A)}const be=ue!=null&&q==null;(ce&&(xe=ie&&ie.onVnodeUnmounted)||se||be)&&Ht(()=>{xe&&An(xe,S,A),se&&yi(A,null,S,"unmounted"),be&&(A.el=null)},G)},Z=A=>{const{type:S,el:G,anchor:H,transition:B}=A,O=S===gt;if(O&&!B){oe(G,H);return}if(S===to){T(A),B&&!B.persisted&&B.afterLeave&&B.afterLeave();return}const ie=O?za(A):A,Q=()=>{O?f(G)&&oe(G,H):r(G),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(ie&&ie.shapeFlag&1&&B&&!B.persisted){const{leave:M,delayLeave:g}=B,P=ie.el,N=()=>M(P,Q);g?g(P,Q,N):N()}else Q()},oe=(A,S)=>{let G;for(;A!==S;)G=d(A),r(A),A=G;r(S)},ve=(A,S,G)=>{const{bum:H,scope:B,job:O,subTree:ie,um:Q,m:M,a:g}=A;Kl(M),Kl(g),H&&Wo(H),B.stop(),O?(O.flags|=8,pe(ie,A,S,G)):ie&&(ie.transition=A.vnode.transition,pe(ie,A,S,G)),Q&&Ht(Q,S);const P=()=>{A.isUnmounted=!0};P.flags=16,Ht(P,S)},Ee=(A,S,G,H=!1,B=!1,O=0)=>{for(let ie=O;ie<A.length;ie++)pe(A[ie],S,G,H,B)},ye=A=>{if(A.shapeFlag&6)return ye(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const S=d(A.anchor||A.el),G=S&&S[Zd];return G?d(G):S},Fe=(A,S,G)=>{const H=A&&S._vnode?void 0:A&&A.component?A.component.uid:Wp();Wd(()=>{A==null?S._vnode&&pe(S._vnode,null,null,!0):_(S._vnode||null,A,S,null,null,null,G),S._vnode=A},H)},Le={p:_,um:pe,m:le,r:Z,mt:U,mc:K,pc:$,pbc:w,n:ye,o:n};return{render:Fe,hydrate:void 0,createApp:vp(Fe)}}function Jo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function bi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ip(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function kf(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Yn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&kf(a,o)),o.type===Uo&&(o.patchFlag===-1&&(o=r[s]=Yn(o)),o.el=a.el),o.type===bn&&!o.el&&(o.el=a.el)}}function Np(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Wf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wf(e)}function Kl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Zr(n){if(n.placeholder)return n.placeholder;const e=n.component;if(e)return Zr(e.subTree);const t=n.suspense;return t&&t.activeBranch?Zr(t.activeBranch):null}const Xf=n=>n.__isSuspense,Fp=Symbol("_deferredEnter");function Op(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):kd(n)}const gt=Symbol.for("v-fgt"),Uo=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),to=Symbol.for("v-stc"),zi=[];let tn=null;function lt(n=!1){zi.push(tn=n?null:[])}function qf(){zi.pop(),tn=zi[zi.length-1]||null}let ss=1;function Zl(n,e=!1){ss+=n,n<0&&tn&&e&&(tn.hasOnce=!0)}function Yf(n){return n.dynamicChildren=ss>0?tn||Ni:null,qf(),ss>0&&tn&&tn.push(n),n}function ft(n,e,t,i,r,s){return Yf(de(n,e,t,i,r,s,!0))}function Bp(n,e,t,i,r){return Yf(_t(n,e,t,i,r,!0))}function vl(n){return n?n.__v_isVNode===!0:!1}function Dr(n,e){return n.type===e.type&&n.key===e.key}const $f=({key:n})=>n??null,no=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||Nt(n)||ze(n)?{i:cn,r:n,k:e,f:!!t}:n:null);function de(n,e=null,t=null,i=0,r=null,s=n===gt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&$f(e),ref:e&&no(e),scopeId:yf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:cn};return o?(uo(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),ss>0&&!a&&tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&tn.push(l),l}const _t=zp;function zp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===up)&&(n=bn),vl(n)){const o=Mr(n,e,!0);return t&&uo(o,t),ss>0&&!s&&tn&&(o.shapeFlag&6?tn[tn.indexOf(n)]=o:tn.push(o)),o.patchFlag=-2,o}if(Zp(n)&&(n=n.__vccOpts),e){e=Hp(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=hs(o)),et(l)&&(dl(l)&&!Ie(l)&&(l=yt({},l)),e.style=xr(l))}const a=ht(n)?1:Xf(n)?128:Po(n)?64:et(n)?4:ze(n)?2:0;return de(n,e,t,i,r,a,s,!0)}function Hp(n){return n?dl(n)?yt({},n):Of(n)?yt({},n[Qf]||n):n:null}function Mr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Vp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&$f(c),ref:e&&e.ref?t&&s?Ie(s)?s.concat(no(e)):[s,no(e)]:no(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==gt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Mr(n.ssContent),ssFallback:n.ssFallback&&Mr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Yr(u,l.clone(u)),u}function It(n=" ",e=0){return _t(Uo,null,n,e)}function Gp(n,e){const t=_t(to,null,n);return t.staticCount=e,t}function jf(n="",e=!1){return e?(lt(),Bp(bn,null,n)):_t(bn,null,n)}function Cn(n){return n==null||typeof n=="boolean"?_t(bn):Ie(n)?_t(gt,null,n.slice()):vl(n)?Yn(n):_t(Uo,null,String(n))}function Yn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Mr(n)}function uo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),uo(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Of(e)?e._ctx=cn:r===3&&cn&&(cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ze(e)){if(i&65){uo(n,{default:e});return}e={default:e,_ctx:cn},t=32}else e=String(e),i&64?(t=16,e=[It(e)]):t=8;n.children=e,n.shapeFlag|=t}function Vp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=hs([e.class,i.class]));else if(r==="style")e.style=xr([e.style,i.style]);else if(Eo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ie(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!yo(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function An(n,e,t,i=null){yn(n,e,7,[t,i])}const kp=Lf();let Kf=0;function Wp(){return Kf}function Xp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||kp,s={uid:Kf++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zf(i,r),emitsOptions:Df(i,r),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Mp.bind(null,s),n.ce&&n.ce(s),s}let Wt=null;const qp=()=>Wt||cn;let fo,os;{const n=To(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};fo=e("__VUE_INSTANCE_SETTERS__",t=>Wt=t),os=e("__VUE_SSR_SETTERS__",t=>as=t)}const ms=n=>{const e=Wt;return fo(n),n.scope.on(),()=>{n.scope.off(),fo(e)}},Jl=()=>{Wt&&Wt.scope.off(),fo(null)};function Zf(n){return n.vnode.shapeFlag&4}let as=!1;function Yp(n,e=!1,t=!1){e&&os(e);const{props:i,children:r}=n.vnode,s=Zf(n);Ap(n,i,s,e),Pp(n,r,t||e);const a=s?$p(n,e):void 0;return e&&os(!1),a}function $p(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,fp);const{setup:i}=t;if(i){In();const r=n.setupContext=i.length>1?Kp(n):null,s=ms(n),a=ds(i,n,0,[n.props,r]),o=qu(a);if(Nn(),s(),(o||n.sp)&&!jr(n)&&wf(n),o){if(a.then(Jl,Jl),e)return a.then(l=>{os(!0);try{Ql(n,l,e)}finally{os(!1)}}).catch(l=>{Co(l,n,0,void 0,!0),n.ssrRender=(c,u)=>u("<!---->")});n.asyncDep=a}else Ql(n,a)}else Jf(n)}function Ql(n,e,t){ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=gf(e)),Jf(n)}function Jf(n,e,t){const i=n.type;n.render||(n.render=i.render||Dn);{const r=ms(n);In();try{hp(n)}finally{Nn(),r()}}}const Qf=Symbol(),jp={get(n,e){return Ut(n,"get",""),e===Qf?n:n[e]}};function Kp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,jp),slots:n.slots,emit:n.emit,expose:e}}function Io(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(gf(Ud(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Kr)return Kr[t](n)},has(e,t){return t in e||t in Kr}})):n.proxy}function Zp(n){return ze(n)&&"__vccOpts"in n}const Jp=(n,e)=>Bd(n,e,as),Qp="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wa;const ec=typeof window<"u"&&window.trustedTypes;if(ec)try{Wa=ec.createPolicy("vue",{createHTML:n=>n})}catch{}const eh=Wa?n=>Wa.createHTML(n):n=>n,em="http://www.w3.org/2000/svg",tm="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,tc=qn&&qn.createElement("template"),nm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?qn.createElementNS(em,n):e==="mathml"?qn.createElementNS(tm,n):t?qn.createElement(n,{is:t}):qn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>qn.createTextNode(n),createComment:n=>qn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>qn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{tc.innerHTML=eh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=tc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},im=Symbol("_vtc");function rm(n,e,t){const i=n[im];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ho=Symbol("_vod"),th=Symbol("_vsh"),sm={name:"show",beforeMount(n,{value:e},{transition:t}){n[ho]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ur(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Ur(n,!0),i.enter(n)):i.leave(n,()=>{Ur(n,!1)}):Ur(n,e))},beforeUnmount(n,{value:e}){Ur(n,e)}};function Ur(n,e){n.style.display=e?n[ho]:"none",n[th]=!e}const om=Symbol(""),am=/(?:^|;)\s*display\s*:/;function lm(n,e,t){const i=n.style,r=ht(t);let s=!1;if(t&&!r){if(e)if(ht(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Vr(i,o,"")}else for(const a in e)t[a]==null&&Vr(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?um(n,a,!ht(e)&&e?e[a]:void 0,o)||Vr(i,a,o):Vr(i,a,"")}}else if(r){if(e!==t){const a=i[om];a&&(t+=";"+a),i.cssText=t,s=am.test(t)}}else e&&n.removeAttribute("style");ho in n&&((!r||e!==t)&&(n[ho]=s?i.display:""),n[th]&&(i.display="none"))}const As=/\s*!important$/;function Vr(n,e,t){if(Ie(t))t.forEach(i=>Vr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))As.test(t)?n.setProperty(e,t.replace(As,""),"important"):n.setProperty(e,t);else{const i=cm(n,e);As.test(t)?n.setProperty(Wi(i),t.replace(As,""),"important"):n[i]=t}}const nc=["Webkit","Moz","ms"],Qo={};function cm(n,e){const t=Qo[e];if(t)return t;let i=Mn(e);if(i!=="filter"&&i in n)return Qo[e]=i;i=ju(i);for(let r=0;r<nc.length;r++){const s=nc[r]+i;if(s in n)return Qo[e]=s}return e}function um(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ht(i)&&t===i}const ic="http://www.w3.org/1999/xlink";function rc(n,e,t,i,r,s=fd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ic,e.slice(6,e.length)):n.setAttributeNS(ic,e,t):t==null||s&&!Zu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Un(t)?String(t):t)}function sc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?eh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Zu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function fm(n,e,t,i){n.addEventListener(e,t,i)}function hm(n,e,t,i){n.removeEventListener(e,t,i)}const oc=Symbol("_vei");function dm(n,e,t,i,r=null){const s=n[oc]||(n[oc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=gm(e);if(i){const c=s[e]=xm(i,r);fm(n,o,c,l)}else a&&(hm(n,o,a,l),s[e]=void 0)}}const pm=/(Once|Passive|Capture)$/,mm=/^on:?(?:Once|Passive|Capture)$/;function gm(n){let e,t;for(;(t=n.match(pm))&&!mm.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Wi(n.slice(2)),e]}let ea=0;const _m=Promise.resolve(),vm=()=>ea||(_m.then(()=>ea=0),ea=Date.now());function xm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Ie(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&yn(c,e,5,o)}}else yn(r,e,5,[i])};return t.value=n,t.attached=vm(),t}const ac=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Mm=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?rm(n,i,a):e==="style"?lm(n,t,i):Eo(e)?yo(e)||dm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sm(n,e,i,a))?(sc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rc(n,e,i,a,s,e!=="value")):n._isVueCE&&(Em(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!ht(i)))?sc(n,Mn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),rc(n,e,i,a))};function Sm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ac(e)&&ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ac(e)&&ht(t)?!1:e in n}function Em(n,e){const t=n._def.props;if(!t)return!1;const i=Mn(e);return Array.isArray(t)?t.some(r=>Mn(r)===i):Object.keys(t).some(r=>Mn(r)===i)}const ym=yt({patchProp:Mm},nm);let lc;function bm(){return lc||(lc=Dp(ym))}const Tm=((...n)=>{const e=bm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=wm(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Am(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Am(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function wm(n){return ht(n)?document.querySelector(n):n}const hi=743/1005;function Rm(n,e){const t=n/e<hi;return{phone:t,width:t?n:e*hi,height:e}}const mr=document.documentElement,gr=Ro({side:!1,phone:!1,hoverable:!1}),po=Bi(gr);function Cm(){const n=innerWidth,e=innerHeight;gr.side=n/e>=hi&&(n-e*hi)/2>=300&&e>=600,mr.classList.toggle("side",gr.side),mr.classList.toggle("stack",!gr.side)}function Pm(n,e){const t=Rm(n,e);gr.phone=t.phone,mr.classList.toggle("phone",t.phone),mr.style.setProperty("--safe-w",t.width+"px"),mr.style.setProperty("--safe-l",(n-t.width)/2+"px")}function Lm(){var t;const n=matchMedia("(hover: hover) and (pointer: fine)"),e=()=>{gr.hoverable=n.matches,mr.classList.toggle("hoverable",n.matches)};return e(),(t=n.addEventListener)==null||t.call(n,"change",e),()=>{var i;return(i=n.removeEventListener)==null?void 0:i.call(n,"change",e)}}const nh=document.documentElement,xl=Yt(!1),gs=Yt(!1),Ml=Yt(!1),_i={menuBtn:null,menu:null,lock:null,about:null,aboutClose:null,mapBtn:null,lightboxClose:null};qr(xl,n=>nh.classList.toggle("menu-open",n),{flush:"sync"});qr(gs,n=>nh.classList.toggle("about-open",n),{flush:"sync"});function No(n){gs.value=n,n&&setTimeout(()=>{var e;return(e=_i.aboutClose)==null?void 0:e.focus({preventScroll:!0})},300)}function Dm(){var n;No(!1),(n=_i.lock)==null||n.focus({preventScroll:!0})}function Um(){var n;po.side?No(!gs.value):(n=_i.about)==null||n.scrollIntoView({behavior:"smooth",block:"start"})}function Im(n){var e;xl.value=n,n&&gs.value&&No(!1),n?setTimeout(()=>{var t,i;return(i=(t=_i.menu)==null?void 0:t.querySelector(".m-list a"))==null?void 0:i.focus({preventScroll:!0})},420):(e=_i.menuBtn)==null||e.focus({preventScroll:!0})}function Nm(){Ml.value=!0,vf(()=>{var n;return(n=_i.lightboxClose)==null?void 0:n.focus()})}function Fm(){var n;Ml.value=!1,(n=_i.mapBtn)==null||n.focus({preventScroll:!0})}function Xi(){return{menuOpen:Bi(xl),aboutOpen:Bi(gs),lightboxOpen:Bi(Ml),els:_i,setMenu:Im,setAbout:No,closeAbout:Dm,toggleAbout:Um,openLightbox:Nm,closeLightbox:Fm}}const Qn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Om=["aria-label","aria-expanded"],Bm={__name:"MenuButton",setup(n){const{menuOpen:e,els:t,setMenu:i}=Xi();return(r,s)=>(lt(),ft("button",{ref:a=>Ae(t).menuBtn=a,class:"menu-btn",type:"button","aria-label":Ae(e)?"メニューを閉じる":"メニューを開く","aria-expanded":Ae(e),"aria-controls":"menu",onClick:s[0]||(s[0]=a=>Ae(i)(!Ae(e)))},[...s[1]||(s[1]=[de("i",null,null,-1),de("i",null,null,-1),de("i",null,null,-1)])],8,Om))}},zm=Qn(Bm,[["__scopeId","data-v-f911dd4f"]]),en={logo:["lunar","drive"],issue:"002",year:"2031",title:"おもちゃ屋",titleNo:"01",sub:"月面ドライブ・ログ",tagline:"—— 静かの海を、ハイビームで。",credit:{label:"Earth data:",name:"Solar System Scope",url:"https://www.solarsystemscope.com/textures/",license:"(CC BY 4.0)"}},Hm={class:"bar"},Gm={class:"brand"},Vm={class:"logo"},km={class:"issue"},Wm={__name:"TopNav",setup(n){const e=Yt(!1),t=()=>{e.value=scrollY>24};return ps(()=>addEventListener("scroll",t,{passive:!0})),Lo(()=>removeEventListener("scroll",t)),(i,r)=>(lt(),ft("header",{id:"topnav",class:hs({scrolled:e.value})},[de("div",Hm,[de("div",Gm,[_t(zm),de("div",Vm,[It(je(Ae(en).logo[0]),1),r[0]||(r[0]=de("b",null,"·",-1)),It(je(Ae(en).logo[1]),1)])]),de("div",km,je(Ae(en).issue),1)]),r[1]||(r[1]=de("div",{class:"rule"},[de("i"),de("i"),de("i")],-1))],2))}},Xm=Qn(Wm,[["__scopeId","data-v-818dc532"]]),qm={id:"safe"},Ym={class:"hero"},$m={class:"title-wrap"},jm={class:"year"},Km={class:"title"},Zm={class:"sub"},Jm={class:"tag"},Qm={__name:"HeroTitle",setup(n,{expose:e}){const t=Yt(null),i=[...en.title];function r(s,a){t.value&&(t.value.style.transform=`translate(${(-s*6).toFixed(2)}px, ${(-a*4).toFixed(2)}px)`)}return e({setParallax:r}),(s,a)=>(lt(),ft("div",qm,[de("div",{ref_key:"headEl",ref:t,class:"head"},[de("div",Ym,[de("div",$m,[de("span",jm,je(Ae(en).year),1),de("h1",Km,[(lt(),ft(gt,null,rs(i,(o,l)=>de("span",{key:l,style:xr({"--i":l})},je(o),5)),64)),de("em",{style:xr({"--i":i.length})},je(Ae(en).titleNo),5)])]),de("div",Zm,je(Ae(en).sub),1),de("div",Jm,je(Ae(en).tagline),1)])],512)]))}},eg=Qn(Qm,[["__scopeId","data-v-899bd7f5"]]),tg={id:"tether","aria-hidden":"true"},ng=["aria-label","aria-expanded"],ig={__name:"SatelliteLock",setup(n,{expose:e}){const{aboutOpen:t,els:i,toggleAbout:r}=Xi(),s=Yt(null),a=Yt(null),o=Yt(null);ps(()=>{i.lock=s.value});function l(c){const u=s.value;if(!u)return;const f=12,d=c.x1-c.x0+f*2,m=(c.y1-c.y0)*.78+f*2,v=c.x0-f,_=(c.y0+c.y1)/2-m/2;if(u.style.transform=`translate(${v.toFixed(1)}px, ${_.toFixed(1)}px)`,u.style.width=`${d.toFixed(1)}px`,u.style.height=`${m.toFixed(1)}px`,t.value&&po.side&&i.about){const p=i.about.getBoundingClientRect().right+6,h=_+m/2,E=v-10;a.value.setAttribute("d",`M${p.toFixed(1)},${(h+26).toFixed(1)} L${(p+28).toFixed(1)},${h.toFixed(1)} L${E.toFixed(1)},${h.toFixed(1)}`),o.value.setAttribute("cx",E.toFixed(1)),o.value.setAttribute("cy",h.toFixed(1))}}return e({update:l}),(c,u)=>(lt(),ft(gt,null,[(lt(),ft("svg",tg,[de("path",{ref_key:"pathEl",ref:a,d:""},null,512),de("circle",{ref_key:"dotEl",ref:o,r:"3.5",cx:"-10",cy:"-10"},null,512)])),de("button",{id:"lock",ref_key:"lockEl",ref:s,type:"button","aria-label":Ae(t)?"本店紹介を閉じる":"本店紹介を開く","aria-expanded":Ae(t),"aria-controls":"about",onClick:u[0]||(u[0]=(...f)=>Ae(r)&&Ae(r)(...f))},[...u[1]||(u[1]=[Gp('<span class="frame" data-v-0460b294><i class="c tl" data-v-0460b294></i><i class="c tr" data-v-0460b294></i><i class="c bl" data-v-0460b294></i><i class="c br" data-v-0460b294></i><i class="tk t" data-v-0460b294></i><i class="tk b" data-v-0460b294></i><i class="tk l" data-v-0460b294></i><i class="tk r" data-v-0460b294></i></span><span class="ring" data-v-0460b294></span><span class="lock-tag" data-v-0460b294><span class="off" data-v-0460b294>TGT-02 ▸ <b data-v-0460b294>本店紹介</b></span><span class="on" data-v-0460b294>LOCK ON ▸ <b data-v-0460b294>クリックで開く</b></span></span>',3)])],8,ng)],64))}},rg=Qn(ig,[["__scopeId","data-v-0460b294"]]),sg={},og={class:"scroll-hint","aria-hidden":"true"};function ag(n,e){return lt(),ft("div",og,[...e[0]||(e[0]=[It("SCROLL",-1),de("span",null,"本店紹介 ↓",-1)])])}const lg=Qn(sg,[["render",ag],["__scopeId","data-v-ec57bc61"]]),cg=[{id:"gunpla",no:"01",jp:"ガンプラ",en:"GUNPLA",note:"組み立てプラモデル",badge:"新入荷"},{id:"sofubi",no:"02",jp:"ソフビ",en:"SOFT VINYL",note:"塩ビ・ゴム人形"},{id:"carded",no:"03",jp:"吊るし玩具",en:"CARDED TOYS",note:"台紙付き・吊りカード",badge:"昭和レトロ"},{id:"tin",no:"04",jp:"ブリキ",en:"TIN TOYS",note:"ぜんまい仕掛け"},{id:"capsule",no:"05",jp:"カプセルトイ",en:"CAPSULE TOYS",note:"回して、当てる。"},{id:"minicar",no:"06",jp:"ミニカー",en:"DIE-CAST",note:"1/64 コレクション"}],ug=[{id:"shop",label:"店舗案内"},{id:"access",label:"アクセス"},{id:"contact",label:"お問い合わせ"}],qt={name:"昭和模型店",nameEn:"SHOWA MOKEI-TEN",established:"EST. 1973",lead:"中央商店街のアーチをくぐって、三軒目。",description:"昭和48年、神ノ町の商店街で創業した小さな模型とおもちゃの店です。ガンプラの新作から、駄菓子屋の軒先に吊るされていたカード玩具、ぜんまいで走るブリキまで。二代目店主が「子どものころの宝箱」を合言葉に、ひとつずつ仕入れています。",points:["半世紀ぶんのデッドストック棚","工具無料の組み立てコーナー","第2・第4土曜は塗装ワークショップ"],info:[{label:"住所",value:"〒150-0820 東京都神ノ町 3-12-7"},{label:"営業",value:"10:00 〜 19:00"},{label:"定休",value:"月曜日"},{label:"電話",value:"03-4444-XXXX"}],map:{alt:"昭和模型店の外観と、神ノ町・中央商店街のイラスト地図",caption:"神ノ町・中央商店街 ／ 神ノ町駅から徒歩5分"},hours:"10:00 — 19:00",closed:"月曜定休",slogan:"—— 月面から、なつかしいおもちゃを。",branch:"おもちゃ屋・月面支店"},fg=["aria-hidden"],hg={class:"m-panel"},dg={class:"m-kicker"},pg={class:"m-list"},mg=["href"],gg={class:"n"},_g={class:"jp"},vg={class:"en"},xg={key:0,class:"tagx"},Mg={class:"m-foot"},Sg={class:"m-links"},Eg=["href"],yg={class:"m-info"},bg={class:"m-vert"},Tg={__name:"CategoryMenu",setup(n){const{menuOpen:e,els:t,setMenu:i}=Xi();function r(s){(s.target.closest("[data-close]")||s.target.closest("a"))&&i(!1)}return(s,a)=>(lt(),ft("nav",{id:"menu",ref:o=>Ae(t).menu=o,"aria-label":"商品カテゴリー","aria-hidden":!Ae(e),onClick:r},[a[7]||(a[7]=de("div",{class:"m-backdrop","data-close":""},null,-1)),de("div",hg,[de("div",dg,[a[1]||(a[1]=de("span",null,"CATEGORY INDEX",-1)),de("span",null,[a[0]||(a[0]=It("おもちゃ屋 ",-1)),de("b",null,"No."+je(Ae(en).issue),1)])]),a[5]||(a[5]=de("div",{class:"m-title"},[It("商品カテゴリー"),de("span",null,".")],-1)),a[6]||(a[6]=de("div",{class:"m-rule"},null,-1)),de("ol",pg,[(lt(!0),ft(gt,null,rs(Ae(cg),(o,l)=>(lt(),ft("li",{key:o.id,style:xr({"--i":l})},[de("a",{href:`#${o.id}`},[de("span",gg,je(o.no),1),de("span",_g,je(o.jp),1),de("span",vg,[It(je(o.en),1),de("small",null,je(o.note),1)]),a[2]||(a[2]=de("span",{class:"ar"},"→",-1)),o.badge?(lt(),ft("span",xg,je(o.badge),1)):jf("",!0)],8,mg)],4))),128))]),de("div",Mg,[de("div",Sg,[(lt(!0),ft(gt,null,rs(Ae(ug),o=>(lt(),ft("a",{key:o.id,href:`#${o.id}`},je(o.label),9,Eg))),128))]),de("div",yg,[a[3]||(a[3]=It("営業 ",-1)),de("em",null,je(Ae(qt).hours),1),It(" ／ "+je(Ae(qt).closed),1),a[4]||(a[4]=de("br",null,null,-1)),It(je(Ae(qt).slogan),1)])]),de("div",bg,je(Ae(qt).branch),1)])],8,fg))}},Ag=Qn(Tg,[["__scopeId","data-v-8187beba"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="160",wg=0,cc=1,Rg=2,ih=1,Cg=2,Xn=3,vi=0,Ft=1,Kn=2,di=0,_r=1,mo=2,uc=3,fc=4,Pg=5,Ui=100,Lg=101,Dg=102,hc=103,dc=104,Ug=200,Ig=201,Ng=202,Fg=203,Xa=204,qa=205,Og=206,Bg=207,zg=208,Hg=209,Gg=210,Vg=211,kg=212,Wg=213,Xg=214,qg=0,Yg=1,$g=2,go=3,jg=4,Kg=5,Zg=6,Jg=7,rh=0,Qg=1,e_=2,pi=0,t_=1,n_=2,i_=3,r_=4,s_=5,o_=6,sh=300,Sr=301,Er=302,Ya=303,$a=304,Fo=306,ja=1e3,vn=1001,Ka=1002,Vt=1003,pc=1004,ta=1005,on=1006,a_=1007,ki=1008,mi=1009,l_=1010,c_=1011,El=1012,oh=1013,ai=1014,li=1015,ls=1016,ah=1017,lh=1018,Hi=1020,u_=1021,xn=1023,f_=1024,h_=1025,Gi=1026,yr=1027,d_=1028,ch=1029,p_=1030,uh=1031,fh=1033,na=33776,ia=33777,ra=33778,sa=33779,mc=35840,gc=35841,_c=35842,vc=35843,hh=36196,xc=37492,Mc=37496,Sc=37808,Ec=37809,yc=37810,bc=37811,Tc=37812,Ac=37813,wc=37814,Rc=37815,Cc=37816,Pc=37817,Lc=37818,Dc=37819,Uc=37820,Ic=37821,oa=36492,Nc=36494,Fc=36495,m_=36283,Oc=36284,Bc=36285,zc=36286,dh=3e3,Vi=3001,g_=3200,__=3201,v_=0,x_=1,ln="",At="srgb",On="srgb-linear",yl="display-p3",Oo="display-p3-linear",_o="linear",ot="srgb",vo="rec709",xo="p3",$i=7680,Hc=519,M_=512,S_=513,E_=514,ph=515,y_=516,b_=517,T_=518,A_=519,Gc=35044,Vc="300 es",Za=1035,Zn=2e3,Mo=2001;class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],aa=Math.PI/180,Ja=180/Math.PI;function _s(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function w_(n,e){return(n%e+e)%e}function la(n,e,t){return(1-t)*n+t*e}function kc(n){return(n&n-1)===0&&n!==0}function Qa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],v=i[8],_=r[0],p=r[3],h=r[6],E=r[1],x=r[4],T=r[7],L=r[2],R=r[5],C=r[8];return s[0]=a*_+o*E+l*L,s[3]=a*p+o*x+l*R,s[6]=a*h+o*T+l*C,s[1]=c*_+u*E+f*L,s[4]=c*p+u*x+f*R,s[7]=c*h+u*T+f*C,s[2]=d*_+m*E+v*L,s[5]=d*p+m*x+v*R,s[8]=d*h+m*T+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,v=t*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new Ye;function mh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function R_(){const n=cs("canvas");return n.style.display="block",n}const Wc={};function Jr(n){n in Wc||(Wc[n]=!0,console.warn(n))}const Xc=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qc=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ws={[On]:{transfer:_o,primaries:vo,toReference:n=>n,fromReference:n=>n},[At]:{transfer:ot,primaries:vo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Oo]:{transfer:_o,primaries:xo,toReference:n=>n.applyMatrix3(qc),fromReference:n=>n.applyMatrix3(Xc)},[yl]:{transfer:ot,primaries:xo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(qc),fromReference:n=>n.applyMatrix3(Xc).convertLinearToSRGB()}},C_=new Set([On,Oo]),Qe={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!C_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ws[e].toReference,r=ws[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ws[n].primaries},getTransfer:function(n){return n===ln?_o:ws[n].transfer}};function vr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ua(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ji;class gh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=cs("canvas")),ji.width=e.width,ji.height=e.height;const i=ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vr(t[i]/255)*255):t[i]=vr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P_=0;class _h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=_s(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fa(r[a].image)):s.push(fa(r[a]))}else s=fa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let L_=0;class jt extends Tr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=vn,r=vn,s=on,a=ki,o=xn,l=mi,c=jt.DEFAULT_ANISOTROPY,u=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=_s(),this.name="",this.source=new _h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Vi?At:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Vi:dh}set encoding(e){Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vi?At:ln}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=sh;jt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],v=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,T=(m+1)/2,L=(h+1)/2,R=(u+d)/4,C=(f+_)/4,K=(v+p)/4;return x>T&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=C/i):T>L?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=R/r,s=K/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=C/s,r=K/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-v)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D_ extends Tr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vi?At:ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _h(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends D_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vh extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U_ extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(f!==_||l!==d||c!==m||u!==v){let p=1-o;const h=l*d+c*m+u*v+f*_,E=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const L=Math.sqrt(x),R=Math.atan2(L,h*E);p=Math.sin(p*R)/L,o=Math.sin(o*R)/L}const T=o*E;if(l=l*p+d*T,c=c*p+m*T,u=u*p+v*T,f=f*p+_*T,p===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*m-c*d,e[t+1]=l*v+u*d+c*f-o*m,e[t+2]=c*v+u*m+o*d-l*f,e[t+3]=u*v-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"YZX":this._x=d*u*f+c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f-d*m*v;break;case"XZY":this._x=d*u*f-c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new I,Yc=new Ar;class qi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rs.copy(i.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Cs.subVectors(this.max,Nr),Ki.subVectors(e.a,Nr),Zi.subVectors(e.b,Nr),Ji.subVectors(e.c,Nr),ei.subVectors(Zi,Ki),ti.subVectors(Ji,Zi),Ti.subVectors(Ki,Ji);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-Ti.z,Ti.y,ei.z,0,-ei.x,ti.z,0,-ti.x,Ti.z,0,-Ti.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-Ti.y,Ti.x,0];return!da(t,Ki,Zi,Ji,Cs)||(t=[1,0,0,0,1,0,0,0,1],!da(t,Ki,Zi,Ji,Cs))?!1:(Ps.crossVectors(ei,ti),t=[Ps.x,Ps.y,Ps.z],da(t,Ki,Zi,Ji,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new I,new I,new I,new I,new I,new I,new I,new I],dn=new I,Rs=new qi,Ki=new I,Zi=new I,Ji=new I,ei=new I,ti=new I,Ti=new I,Nr=new I,Cs=new I,Ps=new I,Ai=new I;function da(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ai.fromArray(n,s);const o=r.x*Math.abs(Ai.x)+r.y*Math.abs(Ai.y)+r.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),u=i.dot(Ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const I_=new qi,Fr=new I,pa=new I;class wr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):I_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(pa)),this.expandByPoint(Fr.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new I,ma=new I,Ls=new I,ni=new I,ga=new I,Ds=new I,_a=new I;class xh{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ma.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(ma);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ls),o=ni.dot(this.direction),l=-ni.dot(Ls),c=ni.lengthSq(),u=Math.abs(1-a*a);let f,d,m,v;if(u>0)if(f=a*l-o,d=a*o-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const _=1/u;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ma).addScaledVector(Ls,d),m}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),r=Gn.dot(Gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,r,s){ga.subVectors(t,e),Ds.subVectors(i,e),_a.crossVectors(ga,Ds);let a=this.direction.dot(_a),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);const l=o*this.direction.dot(Ds.crossVectors(ni,Ds));if(l<0)return null;const c=o*this.direction.dot(ga.cross(ni));if(c<0||l+c>a)return null;const u=-o*ni.dot(_a);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,v,_,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,v,_,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,v,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,v=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,v=c*u,_=c*f;t[0]=d+_*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,v=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,v=o*u,_=o*f;t[0]=l*u,t[4]=v*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=v*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+v,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N_,e,F_)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ii.crossVectors(i,Jt),ii.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ii.crossVectors(i,Jt)),ii.normalize(),Us.crossVectors(Jt,ii),r[0]=ii.x,r[4]=Us.x,r[8]=Jt.x,r[1]=ii.y,r[5]=Us.y,r[9]=Jt.y,r[2]=ii.z,r[6]=Us.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],v=i[2],_=i[6],p=i[10],h=i[14],E=i[3],x=i[7],T=i[11],L=i[15],R=r[0],C=r[4],K=r[8],y=r[12],w=r[1],W=r[5],te=r[9],re=r[13],U=r[2],V=r[6],j=r[10],J=r[14],$=r[3],ee=r[7],ae=r[11],le=r[15];return s[0]=a*R+o*w+l*U+c*$,s[4]=a*C+o*W+l*V+c*ee,s[8]=a*K+o*te+l*j+c*ae,s[12]=a*y+o*re+l*J+c*le,s[1]=u*R+f*w+d*U+m*$,s[5]=u*C+f*W+d*V+m*ee,s[9]=u*K+f*te+d*j+m*ae,s[13]=u*y+f*re+d*J+m*le,s[2]=v*R+_*w+p*U+h*$,s[6]=v*C+_*W+p*V+h*ee,s[10]=v*K+_*te+p*j+h*ae,s[14]=v*y+_*re+p*J+h*le,s[3]=E*R+x*w+T*U+L*$,s[7]=E*C+x*W+T*V+L*ee,s[11]=E*K+x*te+T*j+L*ae,s[15]=E*y+x*re+T*J+L*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],_=e[7],p=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+_*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],_=e[13],p=e[14],h=e[15],E=f*p*c-_*d*c+_*l*m-o*p*m-f*l*h+o*d*h,x=v*d*c-u*p*c-v*l*m+a*p*m+u*l*h-a*d*h,T=u*_*c-v*f*c+v*o*m-a*_*m-u*o*h+a*f*h,L=v*f*l-u*_*l-v*o*d+a*_*d+u*o*p-a*f*p,R=t*E+i*x+r*T+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=E*C,e[1]=(_*d*s-f*p*s-_*r*m+i*p*m+f*r*h-i*d*h)*C,e[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*h+i*l*h)*C,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*C,e[4]=x*C,e[5]=(u*p*s-v*d*s+v*r*m-t*p*m-u*r*h+t*d*h)*C,e[6]=(v*l*s-a*p*s-v*r*c+t*p*c+a*r*h-t*l*h)*C,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*C,e[8]=T*C,e[9]=(v*f*s-u*_*s-v*i*m+t*_*m+u*i*h-t*f*h)*C,e[10]=(a*_*s-v*o*s+v*i*c-t*_*c-a*i*h+t*o*h)*C,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*C,e[12]=L*C,e[13]=(u*_*r-v*f*r+v*i*d-t*_*d-u*i*p+t*f*p)*C,e[14]=(v*o*r-a*_*r-v*i*l+t*_*l+a*i*p-t*o*p)*C,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,v=s*f,_=a*u,p=a*f,h=o*f,E=l*c,x=l*u,T=l*f,L=i.x,R=i.y,C=i.z;return r[0]=(1-(_+h))*L,r[1]=(m+T)*L,r[2]=(v-x)*L,r[3]=0,r[4]=(m-T)*R,r[5]=(1-(d+h))*R,r[6]=(p+E)*R,r[7]=0,r[8]=(v+x)*C,r[9]=(p-E)*C,r[10]=(1-(d+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const a=Qi.set(r[4],r[5],r[6]).length(),o=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);const c=1/s,u=1/a,f=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,t.setFromRotationMatrix(pn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Zn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,v;if(o===Zn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Mo)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Zn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*u;let v,_;if(o===Zn)v=(a+s)*f,_=-2*f;else if(o===Mo)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qi=new I,pn=new dt,N_=new I(0,0,0),F_=new I(1,1,1),ii=new I,Us=new I,Jt=new I,$c=new dt,jc=new Ar;class vs{constructor(e=0,t=0,i=0,r=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class Mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O_=0;const Kc=new I,er=new Ar,Vn=new dt,Is=new I,Or=new I,B_=new I,z_=new Ar,Zc=new I(1,0,0),Jc=new I(0,1,0),Qc=new I(0,0,1),H_={type:"added"},G_={type:"removed"};class Kt extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new I,t=new vs,i=new Ar,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ye}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Qc,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Is.copy(e):Is.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Or,Is,this.up):Vn.lookAt(Is,Or,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),er.setFromRotationMatrix(Vn),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(H_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,B_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new I(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new I,kn=new I,va=new I,Wn=new I,tr=new I,nr=new I,eu=new I,xa=new I,Ma=new I,Sa=new I;let Ns=!1;class _n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),mn.subVectors(e,t),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){mn.subVectors(r,t),kn.subVectors(i,t),va.subVectors(e,t);const a=mn.dot(mn),o=mn.dot(kn),l=mn.dot(va),c=kn.dot(kn),u=kn.dot(va),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,t,i,r,s,a,o,l){return Ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ns=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static isFrontFacing(e,t,i,r){return mn.subVectors(i,t),kn.subVectors(e,t),mn.cross(kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),mn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ns=!0),_n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;tr.subVectors(r,i),nr.subVectors(s,i),xa.subVectors(e,i);const l=tr.dot(xa),c=nr.dot(xa);if(l<=0&&c<=0)return t.copy(i);Ma.subVectors(e,r);const u=tr.dot(Ma),f=nr.dot(Ma);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(tr,a);Sa.subVectors(e,s);const m=tr.dot(Sa),v=nr.dot(Sa);if(v>=0&&m<=v)return t.copy(s);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(nr,o);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return eu.subVectors(s,r),o=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(eu,o);const h=1/(p+_+d);return a=_*h,o=d*h,t.copy(i).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=w_(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ea(a,s,e+1/3),this.g=Ea(a,s,e),this.b=Ea(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=At){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const i=Sh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Qe.fromWorkingColorSpace(Dt.copy(this),e),Math.round($t(Dt.r*255,0,255))*65536+Math.round($t(Dt.g*255,0,255))*256+Math.round($t(Dt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=At){Qe.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Fs);const i=la(ri.h,Fs.h,t),r=la(ri.s,Fs.s,t),s=la(ri.l,Fs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ve;Ve.NAMES=Sh;let V_=0;class xs extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=_r,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xa&&(i.blendSrc=this.blendSrc),this.blendDst!==qa&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Eh extends xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new I,Os=new $e;class Ct{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}}class yh extends Ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bh extends Ct{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nn extends Ct{constructor(e,t,i){super(new Float32Array(e),t,i)}}let k_=0;const sn=new dt,ya=new Kt,ir=new I,Qt=new qi,Br=new qi,Et=new I;class hn extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mh(e)?bh:yh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Qt.min,Br.min),Qt.expandByPoint(Et),Et.addVectors(Qt.max,Br.max),Qt.expandByPoint(Et)):(Qt.expandByPoint(Br.min),Qt.expandByPoint(Br.max))}Qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(ir.fromBufferAttribute(e,c),Et.add(ir)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new I,u[w]=new I;const f=new I,d=new I,m=new I,v=new $e,_=new $e,p=new $e,h=new I,E=new I;function x(w,W,te){f.fromArray(r,w*3),d.fromArray(r,W*3),m.fromArray(r,te*3),v.fromArray(a,w*2),_.fromArray(a,W*2),p.fromArray(a,te*2),d.sub(f),m.sub(f),_.sub(v),p.sub(v);const re=1/(_.x*p.y-p.x*_.y);isFinite(re)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(re),E.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(re),c[w].add(h),c[W].add(h),c[te].add(h),u[w].add(E),u[W].add(E),u[te].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let w=0,W=T.length;w<W;++w){const te=T[w],re=te.start,U=te.count;for(let V=re,j=re+U;V<j;V+=3)x(i[V+0],i[V+1],i[V+2])}const L=new I,R=new I,C=new I,K=new I;function y(w){C.fromArray(s,w*3),K.copy(C);const W=c[w];L.copy(W),L.sub(C.multiplyScalar(C.dot(W))).normalize(),R.crossVectors(K,W);const re=R.dot(u[w])<0?-1:1;l[w*4]=L.x,l[w*4+1]=L.y,l[w*4+2]=L.z,l[w*4+3]=re}for(let w=0,W=T.length;w<W;++w){const te=T[w],re=te.start,U=te.count;for(let V=re,j=re+U;V<j;V+=3)y(i[V+0]),y(i[V+1]),y(i[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)d[v++]=c[m++]}return new Ct(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tu=new dt,wi=new xh,Bs=new wr,nu=new I,rr=new I,sr=new I,or=new I,ba=new I,zs=new I,Hs=new $e,Gs=new $e,Vs=new $e,iu=new I,ru=new I,su=new I,ks=new I,Ws=new I;class Rt extends Kt{constructor(e=new hn,t=new Eh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ba.fromBufferAttribute(f,e),a?zs.addScaledVector(ba,u):zs.addScaledVector(ba.sub(t),u))}t.add(zs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),wi.copy(e.ray).recast(e.near),!(Bs.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Bs,nu)===null||wi.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(s).invert(),wi.copy(e.ray).applyMatrix4(tu),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],h=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,L=x;T<L;T+=3){const R=o.getX(T),C=o.getX(T+1),K=o.getX(T+2);r=Xs(this,h,e,i,c,u,f,R,C,K),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=v,h=_;p<h;p+=3){const E=o.getX(p),x=o.getX(p+1),T=o.getX(p+2);r=Xs(this,a,e,i,c,u,f,E,x,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],h=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,L=x;T<L;T+=3){const R=T,C=T+1,K=T+2;r=Xs(this,h,e,i,c,u,f,R,C,K),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,h=_;p<h;p+=3){const E=p,x=p+1,T=p+2;r=Xs(this,a,e,i,c,u,f,E,x,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function W_(n,e,t,i,r,s,a,o){let l;if(e.side===Ft?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===vi,o),l===null)return null;Ws.copy(o),Ws.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ws);return c<t.near||c>t.far?null:{distance:c,point:Ws.clone(),object:n}}function Xs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,rr),n.getVertexPosition(l,sr),n.getVertexPosition(c,or);const u=W_(n,e,t,i,rr,sr,or,ks);if(u){r&&(Hs.fromBufferAttribute(r,o),Gs.fromBufferAttribute(r,l),Vs.fromBufferAttribute(r,c),u.uv=_n.getInterpolation(ks,rr,sr,or,Hs,Gs,Vs,new $e)),s&&(Hs.fromBufferAttribute(s,o),Gs.fromBufferAttribute(s,l),Vs.fromBufferAttribute(s,c),u.uv1=_n.getInterpolation(ks,rr,sr,or,Hs,Gs,Vs,new $e),u.uv2=u.uv1),a&&(iu.fromBufferAttribute(a,o),ru.fromBufferAttribute(a,l),su.fromBufferAttribute(a,c),u.normal=_n.getInterpolation(ks,rr,sr,or,iu,ru,su,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};_n.getNormal(rr,sr,or,f.normal),u.face=f}return u}class Ms extends hn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(f,2));function v(_,p,h,E,x,T,L,R,C,K,y){const w=T/C,W=L/K,te=T/2,re=L/2,U=R/2,V=C+1,j=K+1;let J=0,$=0;const ee=new I;for(let ae=0;ae<j;ae++){const le=ae*W-re;for(let pe=0;pe<V;pe++){const Z=pe*w-te;ee[_]=Z*E,ee[p]=le*x,ee[h]=U,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[p]=0,ee[h]=R>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(pe/C),f.push(1-ae/K),J+=1}}for(let ae=0;ae<K;ae++)for(let le=0;le<C;le++){const pe=d+le+V*ae,Z=d+le+V*(ae+1),oe=d+(le+1)+V*(ae+1),ve=d+(le+1)+V*ae;l.push(pe,Z,ve),l.push(Z,oe,ve),$+=6}o.addGroup(m,$,y),m+=$,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function br(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=br(n[t]);for(const r in i)e[r]=i[r]}return e}function X_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Th(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}const q_={clone:br,merge:Gt};var Y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=X_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ah extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends Ah{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,lr=1;class j_ extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(ar,lr,e,t);r.layers=this.layers,this.add(r);const s=new an(ar,lr,e,t);s.layers=this.layers,this.add(s);const a=new an(ar,lr,e,t);a.layers=this.layers,this.add(a);const o=new an(ar,lr,e,t);o.layers=this.layers,this.add(o);const l=new an(ar,lr,e,t);l.layers=this.layers,this.add(l);const c=new an(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class wh extends jt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K_ extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vi?At:ln),this.texture=new wh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ms(5,5,5),s=new bt({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:di});s.uniforms.tEquirect.value=t;const a=new Rt(r,s),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=on),new j_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ta=new I,Z_=new I,J_=new Ye;class Pi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ta.subVectors(i,t).cross(Z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ta),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||J_.getNormalMatrix(e),r=this.coplanarPoint(Ta).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new wr,qs=new I;class Rh{constructor(e=new Pi,t=new Pi,i=new Pi,r=new Pi,s=new Pi,a=new Pi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],_=r[10],p=r[11],h=r[12],E=r[13],x=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,p-m,T-h).normalize(),i[1].setComponents(l+s,d+c,p+m,T+h).normalize(),i[2].setComponents(l+a,d+u,p+v,T+E).normalize(),i[3].setComponents(l-a,d-u,p-v,T-E).normalize(),i[4].setComponents(l-o,d-f,p-_,T-x).normalize(),t===Zn)i[5].setComponents(l+o,d+f,p+_,T+x).normalize();else if(t===Mo)i[5].setComponents(o,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qs.x=r.normal.x>0?e.max.x:e.min.x,qs.y=r.normal.y>0?e.max.y:e.min.y,qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ch(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Q_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=f.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,f){const d=u.array,m=u._updateRange,v=u.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&v.length===0&&n.bufferSubData(f,0,d),v.length!==0){for(let _=0,p=v.length;_<p;_++){const h=v[_];t?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class Mi extends hn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],v=[],_=[],p=[];for(let h=0;h<u;h++){const E=h*d-a;for(let x=0;x<c;x++){const T=x*f-s;v.push(T,-E,0),_.push(0,0,1),p.push(x/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const x=E+c*h,T=E+c*(h+1),L=E+1+c*(h+1),R=E+1+c*h;m.push(x,T,R),m.push(T,L,R)}this.setIndex(m),this.setAttribute("position",new nn(v,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.widthSegments,e.heightSegments)}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ev=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ov=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ev=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$v=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ex=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ox=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ax=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:e0,alphahash_pars_fragment:t0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:r0,alphatest_pars_fragment:s0,aomap_fragment:o0,aomap_pars_fragment:a0,batching_pars_vertex:l0,batching_vertex:c0,begin_vertex:u0,beginnormal_vertex:f0,bsdfs:h0,iridescence_fragment:d0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:v0,color_fragment:x0,color_pars_fragment:M0,color_pars_vertex:S0,color_vertex:E0,common:y0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:T0,displacementmap_pars_vertex:A0,displacementmap_vertex:w0,emissivemap_fragment:R0,emissivemap_pars_fragment:C0,colorspace_fragment:P0,colorspace_pars_fragment:L0,envmap_fragment:D0,envmap_common_pars_fragment:U0,envmap_pars_fragment:I0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:Y0,envmap_vertex:F0,fog_vertex:O0,fog_pars_vertex:B0,fog_fragment:z0,fog_pars_fragment:H0,gradientmap_pars_fragment:G0,lightmap_fragment:V0,lightmap_pars_fragment:k0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:X0,lights_pars_begin:q0,lights_toon_fragment:$0,lights_toon_pars_fragment:j0,lights_phong_fragment:K0,lights_phong_pars_fragment:Z0,lights_physical_fragment:J0,lights_physical_pars_fragment:Q0,lights_fragment_begin:ev,lights_fragment_maps:tv,lights_fragment_end:nv,logdepthbuf_fragment:iv,logdepthbuf_pars_fragment:rv,logdepthbuf_pars_vertex:sv,logdepthbuf_vertex:ov,map_fragment:av,map_pars_fragment:lv,map_particle_fragment:cv,map_particle_pars_fragment:uv,metalnessmap_fragment:fv,metalnessmap_pars_fragment:hv,morphcolor_vertex:dv,morphnormal_vertex:pv,morphtarget_pars_vertex:mv,morphtarget_vertex:gv,normal_fragment_begin:_v,normal_fragment_maps:vv,normal_pars_fragment:xv,normal_pars_vertex:Mv,normal_vertex:Sv,normalmap_pars_fragment:Ev,clearcoat_normal_fragment_begin:yv,clearcoat_normal_fragment_maps:bv,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:Av,opaque_fragment:wv,packing:Rv,premultiplied_alpha_fragment:Cv,project_vertex:Pv,dithering_fragment:Lv,dithering_pars_fragment:Dv,roughnessmap_fragment:Uv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Nv,shadowmap_pars_vertex:Fv,shadowmap_vertex:Ov,shadowmask_pars_fragment:Bv,skinbase_vertex:zv,skinning_pars_vertex:Hv,skinning_vertex:Gv,skinnormal_vertex:Vv,specularmap_fragment:kv,specularmap_pars_fragment:Wv,tonemapping_fragment:Xv,tonemapping_pars_fragment:qv,transmission_fragment:Yv,transmission_pars_fragment:$v,uv_pars_fragment:jv,uv_pars_vertex:Kv,uv_vertex:Zv,worldpos_vertex:Jv,background_vert:Qv,background_frag:ex,backgroundCube_vert:tx,backgroundCube_frag:nx,cube_vert:ix,cube_frag:rx,depth_vert:sx,depth_frag:ox,distanceRGBA_vert:ax,distanceRGBA_frag:lx,equirect_vert:cx,equirect_frag:ux,linedashed_vert:fx,linedashed_frag:hx,meshbasic_vert:dx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:gx,meshmatcap_vert:_x,meshmatcap_frag:vx,meshnormal_vert:xx,meshnormal_frag:Mx,meshphong_vert:Sx,meshphong_frag:Ex,meshphysical_vert:yx,meshphysical_frag:bx,meshtoon_vert:Tx,meshtoon_frag:Ax,points_vert:wx,points_frag:Rx,shadow_vert:Cx,shadow_frag:Px,sprite_vert:Lx,sprite_frag:Dx},he={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Pn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Pn.physical={uniforms:Gt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ys={r:0,b:0,g:0};function Ux(n,e,t,i,r,s,a){const o=new Ve(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function v(p,h){let E=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),E=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Fo)?(u===void 0&&(u=new Rt(new Ms(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:br(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(x.colorSpace)!==ot,(f!==x||d!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Rt(new Mi(2,2),new bt({name:"BackgroundMaterial",uniforms:br(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB(Ys,Th(n)),i.buffers.color.setClear(Ys.r,Ys.g,Ys.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:v}}function Ix(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(U,V,j,J,$){let ee=!1;if(a){const ae=_(J,j,V);c!==ae&&(c=ae,m(c.object)),ee=h(U,J,j,$),ee&&E(U,J,j,$)}else{const ae=V.wireframe===!0;(c.geometry!==J.id||c.program!==j.id||c.wireframe!==ae)&&(c.geometry=J.id,c.program=j.id,c.wireframe=ae,ee=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,K(U,V,j,J),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function v(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,V,j){const J=j.wireframe===!0;let $=o[U.id];$===void 0&&($={},o[U.id]=$);let ee=$[V.id];ee===void 0&&(ee={},$[V.id]=ee);let ae=ee[J];return ae===void 0&&(ae=p(d()),ee[J]=ae),ae}function p(U){const V=[],j=[],J=[];for(let $=0;$<r;$++)V[$]=0,j[$]=0,J[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:J,object:U,attributes:{},index:null}}function h(U,V,j,J){const $=c.attributes,ee=V.attributes;let ae=0;const le=j.getAttributes();for(const pe in le)if(le[pe].location>=0){const oe=$[pe];let ve=ee[pe];if(ve===void 0&&(pe==="instanceMatrix"&&U.instanceMatrix&&(ve=U.instanceMatrix),pe==="instanceColor"&&U.instanceColor&&(ve=U.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;ae++}return c.attributesNum!==ae||c.index!==J}function E(U,V,j,J){const $={},ee=V.attributes;let ae=0;const le=j.getAttributes();for(const pe in le)if(le[pe].location>=0){let oe=ee[pe];oe===void 0&&(pe==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),pe==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor));const ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),$[pe]=ve,ae++}c.attributes=$,c.attributesNum=ae,c.index=J}function x(){const U=c.newAttributes;for(let V=0,j=U.length;V<j;V++)U[V]=0}function T(U){L(U,0)}function L(U,V){const j=c.newAttributes,J=c.enabledAttributes,$=c.attributeDivisors;j[U]=1,J[U]===0&&(n.enableVertexAttribArray(U),J[U]=1),$[U]!==V&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,V),$[U]=V)}function R(){const U=c.newAttributes,V=c.enabledAttributes;for(let j=0,J=V.length;j<J;j++)V[j]!==U[j]&&(n.disableVertexAttribArray(j),V[j]=0)}function C(U,V,j,J,$,ee,ae){ae===!0?n.vertexAttribIPointer(U,V,j,$,ee):n.vertexAttribPointer(U,V,j,J,$,ee)}function K(U,V,j,J){if(i.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const $=J.attributes,ee=j.getAttributes(),ae=V.defaultAttributeValues;for(const le in ee){const pe=ee[le];if(pe.location>=0){let Z=$[le];if(Z===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),Z!==void 0){const oe=Z.normalized,ve=Z.itemSize,Ee=t.get(Z);if(Ee===void 0)continue;const ye=Ee.buffer,Fe=Ee.type,Le=Ee.bytesPerElement,Ce=i.isWebGL2===!0&&(Fe===n.INT||Fe===n.UNSIGNED_INT||Z.gpuType===oh);if(Z.isInterleavedBufferAttribute){const A=Z.data,S=A.stride,G=Z.offset;if(A.isInstancedInterleavedBuffer){for(let H=0;H<pe.locationSize;H++)L(pe.location+H,A.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let H=0;H<pe.locationSize;H++)T(pe.location+H);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let H=0;H<pe.locationSize;H++)C(pe.location+H,ve/pe.locationSize,Fe,oe,S*Le,(G+ve/pe.locationSize*H)*Le,Ce)}else{if(Z.isInstancedBufferAttribute){for(let A=0;A<pe.locationSize;A++)L(pe.location+A,Z.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let A=0;A<pe.locationSize;A++)T(pe.location+A);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let A=0;A<pe.locationSize;A++)C(pe.location+A,ve/pe.locationSize,Fe,oe,ve*Le,ve/pe.locationSize*A*Le,Ce)}}else if(ae!==void 0){const oe=ae[le];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(pe.location,oe);break;case 3:n.vertexAttrib3fv(pe.location,oe);break;case 4:n.vertexAttrib4fv(pe.location,oe);break;default:n.vertexAttrib1fv(pe.location,oe)}}}}R()}function y(){te();for(const U in o){const V=o[U];for(const j in V){const J=V[j];for(const $ in J)v(J[$].object),delete J[$];delete V[j]}delete o[U]}}function w(U){if(o[U.id]===void 0)return;const V=o[U.id];for(const j in V){const J=V[j];for(const $ in J)v(J[$].object),delete J[$];delete V[j]}delete o[U.id]}function W(U){for(const V in o){const j=o[V];if(j[U.id]===void 0)continue;const J=j[U.id];for(const $ in J)v(J[$].object),delete J[$];delete j[U.id]}}function te(){re(),u=!0,c!==l&&(c=l,m(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:te,resetDefaultState:re,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:T,disableUnusedAttributes:R}}function Nx(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let m,v;if(r)m=n,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,u,f,d),t.update(f,s,d)}function c(u,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<d;v++)this.render(u[v],f[v]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=f[_];t.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Fx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,T=a||e.has("OES_texture_float"),L=x&&T,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:R}}function Ox(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Pi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const E=s?0:i,x=E*4;let T=h.clippingState||null;l.value=T,T=u(v,d,x,m);for(let L=0;L!==x;++L)T[L]=t[L];h.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const h=m+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let x=0,T=m;x!==_;++x,T+=4)a.copy(f[x]).applyMatrix4(E,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Bx(n){let e=new WeakMap;function t(a,o){return o===Ya?a.mapping=Sr:o===$a&&(a.mapping=Er),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===$a)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new K_(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ph extends Ah{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hr=4,ou=[.125,.215,.35,.446,.526,.582],Ii=20,Aa=new Ph,au=new Ve;let wa=null,Ra=0,Ca=0;const Li=(1+Math.sqrt(5))/2,cr=1/Li,lu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Li,cr),new I(0,Li,-cr),new I(cr,0,Li),new I(-cr,0,Li),new I(Li,cr,0),new I(-Li,cr,0)];class cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){wa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Ra,Ca),e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:ls,format:xn,colorSpace:On,depthBuffer:!1},r=uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zx(s)),this._blurMaterial=Hx(s,e,t)}return r}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,i,r){const o=new an(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(au),u.toneMapping=pi,u.autoClear=!1;const m=new Eh({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),v=new Rt(new Ms,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(au),_=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):E===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const x=this._cubeSize;$s(r,E*x,h>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Sr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Aa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lu[(r-1)%lu.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Rt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ii-1),_=s/v,p=isFinite(s)?1+Math.floor(u*_):Ii;p>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);const h=[];let E=0;for(let C=0;C<Ii;++C){const K=C/_,y=Math.exp(-K*K/2);h.push(y),C===0?E+=y:C<p&&(E+=2*y)}for(let C=0;C<h.length;C++)h[C]=h[C]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-i;const T=this._sizeLods[r],L=3*T*(r>x-hr?r-x+hr:0),R=4*(this._cubeSize-T);$s(t,L,R,3*T,2*T),l.setRenderTarget(t),l.render(f,Aa)}}function zx(n){const e=[],t=[],i=[];let r=n;const s=n-hr+1+ou.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-hr?l=ou[a-n+hr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,_=3,p=2,h=1,E=new Float32Array(_*v*m),x=new Float32Array(p*v*m),T=new Float32Array(h*v*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,K=R>2?0:-1,y=[C,K,0,C+2/3,K,0,C+2/3,K+1,0,C,K,0,C+2/3,K+1,0,C,K+1,0];E.set(y,_*v*R),x.set(d,p*v*R);const w=[R,R,R,R,R,R];T.set(w,h*v*R)}const L=new hn;L.setAttribute("position",new Ct(E,_)),L.setAttribute("uv",new Ct(x,p)),L.setAttribute("faceIndex",new Ct(T,h)),e.push(L),r>hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uu(n,e,t){const i=new xi(n,e,t);return i.texture.mapping=Fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $s(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Hx(n,e,t){const i=new Float32Array(Ii),r=new I(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function fu(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function hu(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ya||l===$a,u=l===Sr||l===Er;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new cu(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new cu(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Vx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kx(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const _=m[v];for(let p=0,h=_.length;p<h;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let x=0,T=E.length;x<T;x+=3){const L=E[x+0],R=E[x+1],C=E[x+2];d.push(L,R,R,C,C,L)}}else if(v!==void 0){const E=v.array;_=v.version;for(let x=0,T=E.length/3-1;x<T;x+=3){const L=x+0,R=x+1,C=x+2;d.push(L,R,R,C,C,L)}}else return;const p=new(mh(d)?bh:yh)(d,1);p.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Wx(n,e,t,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,v){n.drawElements(s,v,o,m*l),t.update(v,s,1)}function f(m,v,_){if(_===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,v,o,m*l,_),t.update(v,s,_)}function d(m,v,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<_;h++)this.render(m[h]/l,v[h]);else{p.multiDrawElementsWEBGL(s,v,0,o,m,0,_);let h=0;for(let E=0;E<_;E++)h+=v[E];t.update(h,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function Xx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function qx(n,e){return n[0]-e[0]}function Yx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function $x(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new wt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==v){let U=function(){te.dispose(),s.delete(u),u.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let K=0;E===!0&&(K=1),x===!0&&(K=2),T===!0&&(K=3);let y=u.attributes.position.count*K,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const W=new Float32Array(y*w*4*v),te=new vh(W,y,w,v);te.type=li,te.needsUpdate=!0;const re=K*4;for(let V=0;V<v;V++){const j=L[V],J=R[V],$=C[V],ee=y*w*4*V;for(let ae=0;ae<j.count;ae++){const le=ae*re;E===!0&&(a.fromBufferAttribute(j,ae),W[ee+le+0]=a.x,W[ee+le+1]=a.y,W[ee+le+2]=a.z,W[ee+le+3]=0),x===!0&&(a.fromBufferAttribute(J,ae),W[ee+le+4]=a.x,W[ee+le+5]=a.y,W[ee+le+6]=a.z,W[ee+le+7]=0),T===!0&&(a.fromBufferAttribute($,ae),W[ee+le+8]=a.x,W[ee+le+9]=a.y,W[ee+le+10]=a.z,W[ee+le+11]=$.itemSize===4?a.w:1)}}_={count:v,texture:te,size:new $e(y,w)},s.set(u,_),u.addEventListener("dispose",U)}let p=0;for(let E=0;E<d.length;E++)p+=d[E];const h=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",h),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==m){v=[];for(let x=0;x<m;x++)v[x]=[x,0];i[u.id]=v}for(let x=0;x<m;x++){const T=v[x];T[0]=x,T[1]=d[x]}v.sort(Yx);for(let x=0;x<8;x++)x<m&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(qx);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let x=0;x<8;x++){const T=o[x],L=T[0],R=T[1];L!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+x)!==_[L]&&u.setAttribute("morphTarget"+x,_[L]),p&&u.getAttribute("morphNormal"+x)!==p[L]&&u.setAttribute("morphNormal"+x,p[L]),r[x]=R,h+=R):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const E=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function jx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Lh extends jt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Gi,u!==Gi&&u!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gi&&(i=ai),i===void 0&&u===yr&&(i=Hi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dh=new jt,Uh=new Lh(1,1);Uh.compareFunction=ph;const Ih=new vh,Nh=new U_,Fh=new wh,du=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=du[r];if(s===void 0&&(s=new Float32Array(r),du[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bo(n,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function Qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function eM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;_u.set(i),n.uniformMatrix2fv(this.addr,!1,_u),xt(t,i)}}function tM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;gu.set(i),n.uniformMatrix3fv(this.addr,!1,gu),xt(t,i)}}function nM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;mu.set(i),n.uniformMatrix4fv(this.addr,!1,mu),xt(t,i)}}function iM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function aM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function fM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Uh:Dh;t.setTexture2D(e||s,r)}function hM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nh,r)}function dM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fh,r)}function pM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ih,r)}function mM(n){switch(n){case 5126:return Kx;case 35664:return Zx;case 35665:return Jx;case 35666:return Qx;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(n,e){n.uniform1fv(this.addr,e)}function _M(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function vM(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function xM(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function MM(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function SM(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function EM(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yM(n,e){n.uniform1iv(this.addr,e)}function bM(n,e){n.uniform2iv(this.addr,e)}function TM(n,e){n.uniform3iv(this.addr,e)}function AM(n,e){n.uniform4iv(this.addr,e)}function wM(n,e){n.uniform1uiv(this.addr,e)}function RM(n,e){n.uniform2uiv(this.addr,e)}function CM(n,e){n.uniform3uiv(this.addr,e)}function PM(n,e){n.uniform4uiv(this.addr,e)}function LM(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Dh,s[a])}function DM(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nh,s[a])}function UM(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Fh,s[a])}function IM(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ih,s[a])}function NM(n){switch(n){case 5126:return gM;case 35664:return _M;case 35665:return vM;case 35666:return xM;case 35674:return MM;case 35675:return SM;case 35676:return EM;case 5124:case 35670:return yM;case 35667:case 35671:return bM;case 35668:case 35672:return TM;case 35669:case 35673:return AM;case 5125:return wM;case 36294:return RM;case 36295:return CM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return IM}}class FM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mM(t.type)}}class OM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NM(t.type)}}class BM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function vu(n,e){n.seq.push(e),n.map[e.id]=e}function zM(n,e,t){const i=n.name,r=i.length;for(Pa.lastIndex=0;;){const s=Pa.exec(i),a=Pa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vu(t,c===void 0?new FM(o,n,e):new OM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new BM(o),vu(t,f)),t=f}}}class io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);zM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function xu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const HM=37297;let GM=0;function VM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function kM(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===xo&&t===vo?i="LinearDisplayP3ToLinearSRGB":e===vo&&t===xo&&(i="LinearSRGBToLinearDisplayP3"),n){case On:case Oo:return[i,"LinearTransferOETF"];case At:case yl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Mu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+VM(n.getShaderSource(e),a)}else return r}function WM(n,e){const t=kM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function XM(n,e){let t;switch(e){case t_:t="Linear";break;case n_:t="Reinhard";break;case i_:t="OptimizedCineon";break;case r_:t="ACESFilmic";break;case o_:t="AgX";break;case s_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function YM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(dr).join(`
`)}function $M(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function dr(n){return n!==""}function Su(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(n){return n.replace(KM,JM)}const ZM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function JM(n,e){let t=Ge[e];if(t===void 0){const i=ZM.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(n){return n.replace(QM,eS)}function eS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ih?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function nS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function rS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rh:e="ENVMAP_BLENDING_MULTIPLY";break;case Qg:e="ENVMAP_BLENDING_MIX";break;case e_:e="ENVMAP_BLENDING_ADD";break}return e}function sS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function oS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=tS(t),c=nS(t),u=iS(t),f=rS(t),d=sS(t),m=t.isWebGL2?"":qM(t),v=YM(t),_=$M(s),p=r.createProgram();let h,E,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(dr).join(`
`),h.length>0&&(h+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(dr).join(`
`),E.length>0&&(E+=`
`)):(h=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),E=[m,bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==pi?XM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,WM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=el(a),a=Su(a,t),a=Eu(a,t),o=el(o),o=Su(o,t),o=Eu(o,t),a=yu(a),o=yu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const T=x+h+a,L=x+E+o,R=xu(r,r.VERTEX_SHADER,T),C=xu(r,r.FRAGMENT_SHADER,L);r.attachShader(p,R),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function K(te){if(n.debug.checkShaderErrors){const re=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(R).trim(),V=r.getShaderInfoLog(C).trim();let j=!0,J=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,R,C);else{const $=Mu(r,R,"vertex"),ee=Mu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+$+`
`+ee)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(U===""||V==="")&&(J=!1);J&&(te.diagnostics={runnable:j,programLog:re,vertexShader:{log:U,prefix:h},fragmentShader:{log:V,prefix:E}})}r.deleteShader(R),r.deleteShader(C),y=new io(r,p),w=jM(r,p)}let y;this.getUniforms=function(){return y===void 0&&K(this),y};let w;this.getAttributes=function(){return w===void 0&&K(this),w};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(p,HM)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=C,this}let aS=0;class lS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cS(e),t.set(e,i)),i}}class cS{constructor(e){this.id=aS++,this.code=e,this.usedTimes=0}}function uS(n,e,t,i,r,s,a){const o=new Mh,l=new lS,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,w,W,te,re){const U=te.fog,V=re.geometry,j=y.isMeshStandardMaterial?te.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),$=J&&J.mapping===Fo?J.image.height:null,ee=v[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=ae!==void 0?ae.length:0;let pe=0;V.morphAttributes.position!==void 0&&(pe=1),V.morphAttributes.normal!==void 0&&(pe=2),V.morphAttributes.color!==void 0&&(pe=3);let Z,oe,ve,Ee;if(ee){const Ot=Pn[ee];Z=Ot.vertexShader,oe=Ot.fragmentShader}else Z=y.vertexShader,oe=y.fragmentShader,l.update(y),ve=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);const ye=n.getRenderTarget(),Fe=re.isInstancedMesh===!0,Le=re.isBatchedMesh===!0,Ce=!!y.map,A=!!y.matcap,S=!!J,G=!!y.aoMap,H=!!y.lightMap,B=!!y.bumpMap,O=!!y.normalMap,ie=!!y.displacementMap,Q=!!y.emissiveMap,M=!!y.metalnessMap,g=!!y.roughnessMap,P=y.anisotropy>0,N=y.clearcoat>0,z=y.iridescence>0,q=y.sheen>0,ue=y.transmission>0,se=P&&!!y.anisotropyMap,ce=N&&!!y.clearcoatMap,xe=N&&!!y.clearcoatNormalMap,be=N&&!!y.clearcoatRoughnessMap,ne=z&&!!y.iridescenceMap,ke=z&&!!y.iridescenceThicknessMap,Pe=q&&!!y.sheenColorMap,De=q&&!!y.sheenRoughnessMap,Se=!!y.specularMap,_e=!!y.specularColorMap,Oe=!!y.specularIntensityMap,Ke=ue&&!!y.transmissionMap,ct=ue&&!!y.thicknessMap,Xe=!!y.gradientMap,fe=!!y.alphaMap,D=y.alphaTest>0,me=!!y.alphaHash,ge=!!y.extensions,Ue=!!V.attributes.uv1,we=!!V.attributes.uv2,nt=!!V.attributes.uv3;let it=pi;return y.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(it=n.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:Z,fragmentShader:oe,defines:y.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Le,instancing:Fe,instancingColor:Fe&&re.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:On,map:Ce,matcap:A,envMap:S,envMapMode:S&&J.mapping,envMapCubeUVHeight:$,aoMap:G,lightMap:H,bumpMap:B,normalMap:O,displacementMap:d&&ie,emissiveMap:Q,normalMapObjectSpace:O&&y.normalMapType===x_,normalMapTangentSpace:O&&y.normalMapType===v_,metalnessMap:M,roughnessMap:g,anisotropy:P,anisotropyMap:se,clearcoat:N,clearcoatMap:ce,clearcoatNormalMap:xe,clearcoatRoughnessMap:be,iridescence:z,iridescenceMap:ne,iridescenceThicknessMap:ke,sheen:q,sheenColorMap:Pe,sheenRoughnessMap:De,specularMap:Se,specularColorMap:_e,specularIntensityMap:Oe,transmission:ue,transmissionMap:Ke,thicknessMap:ct,gradientMap:Xe,opaque:y.transparent===!1&&y.blending===_r,alphaMap:fe,alphaTest:D,alphaHash:me,combine:y.combine,mapUv:Ce&&_(y.map.channel),aoMapUv:G&&_(y.aoMap.channel),lightMapUv:H&&_(y.lightMap.channel),bumpMapUv:B&&_(y.bumpMap.channel),normalMapUv:O&&_(y.normalMap.channel),displacementMapUv:ie&&_(y.displacementMap.channel),emissiveMapUv:Q&&_(y.emissiveMap.channel),metalnessMapUv:M&&_(y.metalnessMap.channel),roughnessMapUv:g&&_(y.roughnessMap.channel),anisotropyMapUv:se&&_(y.anisotropyMap.channel),clearcoatMapUv:ce&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(y.sheenRoughnessMap.channel),specularMapUv:Se&&_(y.specularMap.channel),specularColorMapUv:_e&&_(y.specularColorMap.channel),specularIntensityMapUv:Oe&&_(y.specularIntensityMap.channel),transmissionMapUv:Ke&&_(y.transmissionMap.channel),thicknessMapUv:ct&&_(y.thicknessMap.channel),alphaMapUv:fe&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(O||P),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:we,vertexUv3s:nt,pointsUvs:re.isPoints===!0&&!!V.attributes.uv&&(Ce||fe),fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:pe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kn,flipSided:y.side===Ft,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ge&&y.extensions.derivatives===!0,extensionFragDepth:ge&&y.extensions.fragDepth===!0,extensionDrawBuffers:ge&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)w.push(W),w.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(E(w,y),x(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function E(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function T(y){const w=v[y.type];let W;if(w){const te=Pn[w];W=q_.clone(te.uniforms)}else W=y.uniforms;return W}function L(y,w){let W;for(let te=0,re=c.length;te<re;te++){const U=c[te];if(U.cacheKey===w){W=U,++W.usedTimes;break}}return W===void 0&&(W=new oS(n,w,y,s),c.push(W)),W}function R(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function K(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:K}}function fS(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function hS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Tu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Au(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,v,_,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function o(f,d,m,v,_,p){const h=a(f,d,m,v,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,v,_,p){const h=a(f,d,m,v,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||hS),i.length>1&&i.sort(d||Tu),r.length>1&&r.sort(d||Tu)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function dS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Au,n.set(i,[a])):r>=s.length?(a=new Au,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function pS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function mS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gS=0;function _S(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vS(n,e){const t=new pS,i=mS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,a=new dt,o=new dt;function l(u,f){let d=0,m=0,v=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let _=0,p=0,h=0,E=0,x=0,T=0,L=0,R=0,C=0,K=0,y=0;u.sort(_S);const w=f===!0?Math.PI:1;for(let te=0,re=u.length;te<re;te++){const U=u[te],V=U.color,j=U.intensity,J=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=V.r*j*w,m+=V.g*j*w,v+=V.b*j*w;else if(U.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(U.sh.coefficients[ee],j);y++}else if(U.isDirectionalLight){const ee=t.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const ae=U.shadow,le=i.get(U);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,r.directionalShadow[_]=le,r.directionalShadowMap[_]=$,r.directionalShadowMatrix[_]=U.shadow.matrix,T++}r.directional[_]=ee,_++}else if(U.isSpotLight){const ee=t.get(U);ee.position.setFromMatrixPosition(U.matrixWorld),ee.color.copy(V).multiplyScalar(j*w),ee.distance=J,ee.coneCos=Math.cos(U.angle),ee.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ee.decay=U.decay,r.spot[h]=ee;const ae=U.shadow;if(U.map&&(r.spotLightMap[C]=U.map,C++,ae.updateMatrices(U),U.castShadow&&K++),r.spotLightMatrix[h]=ae.matrix,U.castShadow){const le=i.get(U);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,r.spotShadow[h]=le,r.spotShadowMap[h]=$,R++}h++}else if(U.isRectAreaLight){const ee=t.get(U);ee.color.copy(V).multiplyScalar(j),ee.halfWidth.set(U.width*.5,0,0),ee.halfHeight.set(0,U.height*.5,0),r.rectArea[E]=ee,E++}else if(U.isPointLight){const ee=t.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity*w),ee.distance=U.distance,ee.decay=U.decay,U.castShadow){const ae=U.shadow,le=i.get(U);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,le.shadowCameraNear=ae.camera.near,le.shadowCameraFar=ae.camera.far,r.pointShadow[p]=le,r.pointShadowMap[p]=$,r.pointShadowMatrix[p]=U.shadow.matrix,L++}r.point[p]=ee,p++}else if(U.isHemisphereLight){const ee=t.get(U);ee.skyColor.copy(U.color).multiplyScalar(j*w),ee.groundColor.copy(U.groundColor).multiplyScalar(j*w),r.hemi[x]=ee,x++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==_||W.pointLength!==p||W.spotLength!==h||W.rectAreaLength!==E||W.hemiLength!==x||W.numDirectionalShadows!==T||W.numPointShadows!==L||W.numSpotShadows!==R||W.numSpotMaps!==C||W.numLightProbes!==y)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=E,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+C-K,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=K,r.numLightProbes=y,W.directionalLength=_,W.pointLength=p,W.spotLength=h,W.rectAreaLength=E,W.hemiLength=x,W.numDirectionalShadows=T,W.numPointShadows=L,W.numSpotShadows=R,W.numSpotMaps=C,W.numLightProbes=y,r.version=gS++)}function c(u,f){let d=0,m=0,v=0,_=0,p=0;const h=f.matrixWorldInverse;for(let E=0,x=u.length;E<x;E++){const T=u[E];if(T.isDirectionalLight){const L=r.directional[d];L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(h),d++}else if(T.isSpotLight){const L=r.spot[v];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(h),L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(h),v++}else if(T.isRectAreaLight){const L=r.rectArea[_];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(h),o.identity(),a.copy(T.matrixWorld),a.premultiply(h),o.extractRotation(a),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(h),m++}else if(T.isHemisphereLight){const L=r.hemi[p];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function wu(n,e){const t=new vS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function xS(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new wu(n,e),t.set(s,[l])):a>=o.length?(l=new wu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class MS extends xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SS extends xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ES=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bS(n,e,t){let i=new Rh;const r=new $e,s=new $e,a=new wt,o=new MS({depthPacking:__}),l=new SS,c={},u=t.maxTextureSize,f={[vi]:Ft,[Ft]:vi,[Kn]:Kn},d=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:ES,fragmentShader:yS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new hn;v.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let h=this.type;this.render=function(R,C,K){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),w=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),te=n.state;te.setBlending(di),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const re=h!==Xn&&this.type===Xn,U=h===Xn&&this.type!==Xn;for(let V=0,j=R.length;V<j;V++){const J=R[V],$=J.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ee=$.getFrameExtents();if(r.multiply(ee),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,$.mapSize.y=s.y)),$.map===null||re===!0||U===!0){const le=this.type!==Xn?{minFilter:Vt,magFilter:Vt}:{};$.map!==null&&$.map.dispose(),$.map=new xi(r.x,r.y,le),$.map.texture.name=J.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ae=$.getViewportCount();for(let le=0;le<ae;le++){const pe=$.getViewport(le);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),te.viewport(a),$.updateMatrices(J,le),i=$.getFrustum(),T(C,K,$.camera,J,this.type)}$.isPointLightShadow!==!0&&this.type===Xn&&E($,K),$.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(y,w,W)};function E(R,C){const K=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new xi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,K,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,K,m,_,null)}function x(R,C,K,y){let w=null;const W=K.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(W!==void 0)w=W;else if(w=K.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const te=w.uuid,re=C.uuid;let U=c[te];U===void 0&&(U={},c[te]=U);let V=U[re];V===void 0&&(V=w.clone(),U[re]=V,C.addEventListener("dispose",L)),w=V}if(w.visible=C.visible,w.wireframe=C.wireframe,y===Xn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:f[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const te=n.properties.get(w);te.light=K}return w}function T(R,C,K,y,w){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===Xn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld);const re=e.update(R),U=R.material;if(Array.isArray(U)){const V=re.groups;for(let j=0,J=V.length;j<J;j++){const $=V[j],ee=U[$.materialIndex];if(ee&&ee.visible){const ae=x(R,ee,y,w);R.onBeforeShadow(n,R,C,K,re,ae,$),n.renderBufferDirect(K,null,re,ae,R,$),R.onAfterShadow(n,R,C,K,re,ae,$)}}}else if(U.visible){const V=x(R,U,y,w);R.onBeforeShadow(n,R,C,K,re,V,null),n.renderBufferDirect(K,null,re,V,R,null),R.onAfterShadow(n,R,C,K,re,V,null)}}const te=R.children;for(let re=0,U=te.length;re<U;re++)T(te[re],C,K,y,w)}function L(R){R.target.removeEventListener("dispose",L);for(const K in c){const y=c[K],w=R.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function TS(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const me=new wt;let ge=null;const Ue=new wt(0,0,0,0);return{setMask:function(we){ge!==we&&!D&&(n.colorMask(we,we,we,we),ge=we)},setLocked:function(we){D=we},setClear:function(we,nt,it,Mt,Ot){Ot===!0&&(we*=Mt,nt*=Mt,it*=Mt),me.set(we,nt,it,Mt),Ue.equals(me)===!1&&(n.clearColor(we,nt,it,Mt),Ue.copy(me))},reset:function(){D=!1,ge=null,Ue.set(-1,0,0,0)}}}function s(){let D=!1,me=null,ge=null,Ue=null;return{setTest:function(we){we?Le(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(we){me!==we&&!D&&(n.depthMask(we),me=we)},setFunc:function(we){if(ge!==we){switch(we){case qg:n.depthFunc(n.NEVER);break;case Yg:n.depthFunc(n.ALWAYS);break;case $g:n.depthFunc(n.LESS);break;case go:n.depthFunc(n.LEQUAL);break;case jg:n.depthFunc(n.EQUAL);break;case Kg:n.depthFunc(n.GEQUAL);break;case Zg:n.depthFunc(n.GREATER);break;case Jg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=we}},setLocked:function(we){D=we},setClear:function(we){Ue!==we&&(n.clearDepth(we),Ue=we)},reset:function(){D=!1,me=null,ge=null,Ue=null}}}function a(){let D=!1,me=null,ge=null,Ue=null,we=null,nt=null,it=null,Mt=null,Ot=null;return{setTest:function(rt){D||(rt?Le(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(rt){me!==rt&&!D&&(n.stencilMask(rt),me=rt)},setFunc:function(rt,Bt,Tn){(ge!==rt||Ue!==Bt||we!==Tn)&&(n.stencilFunc(rt,Bt,Tn),ge=rt,Ue=Bt,we=Tn)},setOp:function(rt,Bt,Tn){(nt!==rt||it!==Bt||Mt!==Tn)&&(n.stencilOp(rt,Bt,Tn),nt=rt,it=Bt,Mt=Tn)},setLocked:function(rt){D=rt},setClear:function(rt){Ot!==rt&&(n.clearStencil(rt),Ot=rt)},reset:function(){D=!1,me=null,ge=null,Ue=null,we=null,nt=null,it=null,Mt=null,Ot=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,_=[],p=null,h=!1,E=null,x=null,T=null,L=null,R=null,C=null,K=null,y=new Ve(0,0,0),w=0,W=!1,te=null,re=null,U=null,V=null,j=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ee=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ae)[1]),$=ee>=1):ae.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),$=ee>=2);let le=null,pe={};const Z=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),ve=new wt().fromArray(Z),Ee=new wt().fromArray(oe);function ye(D,me,ge,Ue){const we=new Uint8Array(4),nt=n.createTexture();n.bindTexture(D,nt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<ge;it++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(me+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return nt}const Fe={};Fe[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Fe[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Fe[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Fe[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(n.DEPTH_TEST),l.setFunc(go),Q(!1),M(cc),Le(n.CULL_FACE),O(di);function Le(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function Ce(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function A(D,me){return m[D]!==me?(n.bindFramebuffer(D,me),m[D]=me,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=me),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function S(D,me){let ge=_,Ue=!1;if(D)if(ge=v.get(me),ge===void 0&&(ge=[],v.set(me,ge)),D.isWebGLMultipleRenderTargets){const we=D.texture;if(ge.length!==we.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,it=we.length;nt<it;nt++)ge[nt]=n.COLOR_ATTACHMENT0+nt;ge.length=we.length,Ue=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,Ue=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,Ue=!0);Ue&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function G(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const H={[Ui]:n.FUNC_ADD,[Lg]:n.FUNC_SUBTRACT,[Dg]:n.FUNC_REVERSE_SUBTRACT};if(i)H[hc]=n.MIN,H[dc]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(H[hc]=D.MIN_EXT,H[dc]=D.MAX_EXT)}const B={[Ug]:n.ZERO,[Ig]:n.ONE,[Ng]:n.SRC_COLOR,[Xa]:n.SRC_ALPHA,[Gg]:n.SRC_ALPHA_SATURATE,[zg]:n.DST_COLOR,[Og]:n.DST_ALPHA,[Fg]:n.ONE_MINUS_SRC_COLOR,[qa]:n.ONE_MINUS_SRC_ALPHA,[Hg]:n.ONE_MINUS_DST_COLOR,[Bg]:n.ONE_MINUS_DST_ALPHA,[Vg]:n.CONSTANT_COLOR,[kg]:n.ONE_MINUS_CONSTANT_COLOR,[Wg]:n.CONSTANT_ALPHA,[Xg]:n.ONE_MINUS_CONSTANT_ALPHA};function O(D,me,ge,Ue,we,nt,it,Mt,Ot,rt){if(D===di){h===!0&&(Ce(n.BLEND),h=!1);return}if(h===!1&&(Le(n.BLEND),h=!0),D!==Pg){if(D!==E||rt!==W){if((x!==Ui||R!==Ui)&&(n.blendEquation(n.FUNC_ADD),x=Ui,R=Ui),rt)switch(D){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFunc(n.ONE,n.ONE);break;case uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,L=null,C=null,K=null,y.set(0,0,0),w=0,E=D,W=rt}return}we=we||me,nt=nt||ge,it=it||Ue,(me!==x||we!==R)&&(n.blendEquationSeparate(H[me],H[we]),x=me,R=we),(ge!==T||Ue!==L||nt!==C||it!==K)&&(n.blendFuncSeparate(B[ge],B[Ue],B[nt],B[it]),T=ge,L=Ue,C=nt,K=it),(Mt.equals(y)===!1||Ot!==w)&&(n.blendColor(Mt.r,Mt.g,Mt.b,Ot),y.copy(Mt),w=Ot),E=D,W=!1}function ie(D,me){D.side===Kn?Ce(n.CULL_FACE):Le(n.CULL_FACE);let ge=D.side===Ft;me&&(ge=!ge),Q(ge),D.blending===_r&&D.transparent===!1?O(di):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ue=D.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),P(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Le(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(D){te!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),te=D)}function M(D){D!==wg?(Le(n.CULL_FACE),D!==re&&(D===cc?n.cullFace(n.BACK):D===Rg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),re=D}function g(D){D!==U&&($&&n.lineWidth(D),U=D)}function P(D,me,ge){D?(Le(n.POLYGON_OFFSET_FILL),(V!==me||j!==ge)&&(n.polygonOffset(me,ge),V=me,j=ge)):Ce(n.POLYGON_OFFSET_FILL)}function N(D){D?Le(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function z(D){D===void 0&&(D=n.TEXTURE0+J-1),le!==D&&(n.activeTexture(D),le=D)}function q(D,me,ge){ge===void 0&&(le===null?ge=n.TEXTURE0+J-1:ge=le);let Ue=pe[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},pe[ge]=Ue),(Ue.type!==D||Ue.texture!==me)&&(le!==ge&&(n.activeTexture(ge),le=ge),n.bindTexture(D,me||Fe[D]),Ue.type=D,Ue.texture=me)}function ue(){const D=pe[le];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(D){ve.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ve.copy(D))}function Ke(D){Ee.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ee.copy(D))}function ct(D,me){let ge=f.get(me);ge===void 0&&(ge=new WeakMap,f.set(me,ge));let Ue=ge.get(D);Ue===void 0&&(Ue=n.getUniformBlockIndex(me,D.name),ge.set(D,Ue))}function Xe(D,me){const Ue=f.get(me).get(D);u.get(me)!==Ue&&(n.uniformBlockBinding(me,Ue,D.__bindingPointIndex),u.set(me,Ue))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},le=null,pe={},m={},v=new WeakMap,_=[],p=null,h=!1,E=null,x=null,T=null,L=null,R=null,C=null,K=null,y=new Ve(0,0,0),w=0,W=!1,te=null,re=null,U=null,V=null,j=null,ve.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Le,disable:Ce,bindFramebuffer:A,drawBuffers:S,useProgram:G,setBlending:O,setMaterial:ie,setFlipSided:Q,setCullFace:M,setLineWidth:g,setPolygonOffset:P,setScissorTest:N,activeTexture:z,bindTexture:q,unbindTexture:ue,compressedTexImage2D:se,compressedTexImage3D:ce,texImage2D:Se,texImage3D:_e,updateUBOMapping:ct,uniformBlockBinding:Xe,texStorage2D:Pe,texStorage3D:De,texSubImage2D:xe,texSubImage3D:be,compressedTexSubImage2D:ne,compressedTexSubImage3D:ke,scissor:Oe,viewport:Ke,reset:fe}}function AS(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,g){return m?new OffscreenCanvas(M,g):cs("canvas")}function _(M,g,P,N){let z=1;if((M.width>N||M.height>N)&&(z=N/Math.max(M.width,M.height)),z<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const q=g?Qa:Math.floor,ue=q(z*M.width),se=q(z*M.height);f===void 0&&(f=v(ue,se));const ce=P?v(ue,se):f;return ce.width=ue,ce.height=se,ce.getContext("2d").drawImage(M,0,0,ue,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ue+"x"+se+")."),ce}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return kc(M.width)&&kc(M.height)}function h(M){return o?!1:M.wrapS!==vn||M.wrapT!==vn||M.minFilter!==Vt&&M.minFilter!==on}function E(M,g){return M.generateMipmaps&&g&&M.minFilter!==Vt&&M.minFilter!==on}function x(M){n.generateMipmap(M)}function T(M,g,P,N,z=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let q=g;if(g===n.RED&&(P===n.FLOAT&&(q=n.R32F),P===n.HALF_FLOAT&&(q=n.R16F),P===n.UNSIGNED_BYTE&&(q=n.R8)),g===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(q=n.R8UI),P===n.UNSIGNED_SHORT&&(q=n.R16UI),P===n.UNSIGNED_INT&&(q=n.R32UI),P===n.BYTE&&(q=n.R8I),P===n.SHORT&&(q=n.R16I),P===n.INT&&(q=n.R32I)),g===n.RG&&(P===n.FLOAT&&(q=n.RG32F),P===n.HALF_FLOAT&&(q=n.RG16F),P===n.UNSIGNED_BYTE&&(q=n.RG8)),g===n.RGBA){const ue=z?_o:Qe.getTransfer(N);P===n.FLOAT&&(q=n.RGBA32F),P===n.HALF_FLOAT&&(q=n.RGBA16F),P===n.UNSIGNED_BYTE&&(q=ue===ot?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function L(M,g,P){return E(M,P)===!0||M.isFramebufferTexture&&M.minFilter!==Vt&&M.minFilter!==on?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function R(M){return M===Vt||M===pc||M===ta?n.NEAREST:n.LINEAR}function C(M){const g=M.target;g.removeEventListener("dispose",C),y(g),g.isVideoTexture&&u.delete(g)}function K(M){const g=M.target;g.removeEventListener("dispose",K),W(g)}function y(M){const g=i.get(M);if(g.__webglInit===void 0)return;const P=M.source,N=d.get(P);if(N){const z=N[g.__cacheKey];z.usedTimes--,z.usedTimes===0&&w(M),Object.keys(N).length===0&&d.delete(P)}i.remove(M)}function w(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const P=M.source,N=d.get(P);delete N[g.__cacheKey],a.memory.textures--}function W(M){const g=M.texture,P=i.get(M),N=i.get(g);if(N.__webglTexture!==void 0&&(n.deleteTexture(N.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(P.__webglFramebuffer[z]))for(let q=0;q<P.__webglFramebuffer[z].length;q++)n.deleteFramebuffer(P.__webglFramebuffer[z][q]);else n.deleteFramebuffer(P.__webglFramebuffer[z]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[z])}else{if(Array.isArray(P.__webglFramebuffer))for(let z=0;z<P.__webglFramebuffer.length;z++)n.deleteFramebuffer(P.__webglFramebuffer[z]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let z=0;z<P.__webglColorRenderbuffer.length;z++)P.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[z]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let z=0,q=g.length;z<q;z++){const ue=i.get(g[z]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(g[z])}i.remove(g),i.remove(M)}let te=0;function re(){te=0}function U(){const M=te;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),te+=1,M}function V(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function j(M,g){const P=i.get(M);if(M.isVideoTexture&&ie(M),M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){const N=M.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(P,M,g);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+g)}function J(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){ve(P,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+g)}function $(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){ve(P,M,g);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+g)}function ee(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){Ee(P,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+g)}const ae={[ja]:n.REPEAT,[vn]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},le={[Vt]:n.NEAREST,[pc]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[a_]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},pe={[M_]:n.NEVER,[A_]:n.ALWAYS,[S_]:n.LESS,[ph]:n.LEQUAL,[E_]:n.EQUAL,[T_]:n.GEQUAL,[y_]:n.GREATER,[b_]:n.NOTEQUAL};function Z(M,g,P){if(P?(n.texParameteri(M,n.TEXTURE_WRAP_S,ae[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ae[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ae[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,le[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,le[g.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==vn||g.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,R(g.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,R(g.minFilter)),g.minFilter!==Vt&&g.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,pe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Vt||g.minFilter!==ta&&g.minFilter!==ki||g.type===li&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===ls&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function oe(M,g){let P=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",C));const N=g.source;let z=d.get(N);z===void 0&&(z={},d.set(N,z));const q=V(g);if(q!==M.__cacheKey){z[q]===void 0&&(z[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),z[q].usedTimes++;const ue=z[M.__cacheKey];ue!==void 0&&(z[M.__cacheKey].usedTimes--,ue.usedTimes===0&&w(g)),M.__cacheKey=q,M.__webglTexture=z[q].texture}return P}function ve(M,g,P){let N=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(N=n.TEXTURE_3D);const z=oe(M,g),q=g.source;t.bindTexture(N,M.__webglTexture,n.TEXTURE0+P);const ue=i.get(q);if(q.version!==ue.__version||z===!0){t.activeTexture(n.TEXTURE0+P);const se=Qe.getPrimaries(Qe.workingColorSpace),ce=g.colorSpace===ln?null:Qe.getPrimaries(g.colorSpace),xe=g.colorSpace===ln||se===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const be=h(g)&&p(g.image)===!1;let ne=_(g.image,be,!1,r.maxTextureSize);ne=Q(g,ne);const ke=p(ne)||o,Pe=s.convert(g.format,g.colorSpace);let De=s.convert(g.type),Se=T(g.internalFormat,Pe,De,g.colorSpace,g.isVideoTexture);Z(N,g,ke);let _e;const Oe=g.mipmaps,Ke=o&&g.isVideoTexture!==!0&&Se!==hh,ct=ue.__version===void 0||z===!0,Xe=L(g,ne,ke);if(g.isDepthTexture)Se=n.DEPTH_COMPONENT,o?g.type===li?Se=n.DEPTH_COMPONENT32F:g.type===ai?Se=n.DEPTH_COMPONENT24:g.type===Hi?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:g.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Gi&&Se===n.DEPTH_COMPONENT&&g.type!==El&&g.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ai,De=s.convert(g.type)),g.format===yr&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,g.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Hi,De=s.convert(g.type))),ct&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Se,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Se,ne.width,ne.height,0,Pe,De,null));else if(g.isDataTexture)if(Oe.length>0&&ke){Ke&&ct&&t.texStorage2D(n.TEXTURE_2D,Xe,Se,Oe[0].width,Oe[0].height);for(let fe=0,D=Oe.length;fe<D;fe++)_e=Oe[fe],Ke?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,_e.width,_e.height,Pe,De,_e.data):t.texImage2D(n.TEXTURE_2D,fe,Se,_e.width,_e.height,0,Pe,De,_e.data);g.generateMipmaps=!1}else Ke?(ct&&t.texStorage2D(n.TEXTURE_2D,Xe,Se,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,Pe,De,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Se,ne.width,ne.height,0,Pe,De,ne.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ke&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Se,Oe[0].width,Oe[0].height,ne.depth);for(let fe=0,D=Oe.length;fe<D;fe++)_e=Oe[fe],g.format!==xn?Pe!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,ne.depth,Pe,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Se,_e.width,_e.height,ne.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,ne.depth,Pe,De,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Se,_e.width,_e.height,ne.depth,0,Pe,De,_e.data)}else{Ke&&ct&&t.texStorage2D(n.TEXTURE_2D,Xe,Se,Oe[0].width,Oe[0].height);for(let fe=0,D=Oe.length;fe<D;fe++)_e=Oe[fe],g.format!==xn?Pe!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,_e.width,_e.height,Pe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Se,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,_e.width,_e.height,Pe,De,_e.data):t.texImage2D(n.TEXTURE_2D,fe,Se,_e.width,_e.height,0,Pe,De,_e.data)}else if(g.isDataArrayTexture)Ke?(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Se,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Pe,De,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,ne.width,ne.height,ne.depth,0,Pe,De,ne.data);else if(g.isData3DTexture)Ke?(ct&&t.texStorage3D(n.TEXTURE_3D,Xe,Se,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Pe,De,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Se,ne.width,ne.height,ne.depth,0,Pe,De,ne.data);else if(g.isFramebufferTexture){if(ct)if(Ke)t.texStorage2D(n.TEXTURE_2D,Xe,Se,ne.width,ne.height);else{let fe=ne.width,D=ne.height;for(let me=0;me<Xe;me++)t.texImage2D(n.TEXTURE_2D,me,Se,fe,D,0,Pe,De,null),fe>>=1,D>>=1}}else if(Oe.length>0&&ke){Ke&&ct&&t.texStorage2D(n.TEXTURE_2D,Xe,Se,Oe[0].width,Oe[0].height);for(let fe=0,D=Oe.length;fe<D;fe++)_e=Oe[fe],Ke?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Pe,De,_e):t.texImage2D(n.TEXTURE_2D,fe,Se,Pe,De,_e);g.generateMipmaps=!1}else Ke?(ct&&t.texStorage2D(n.TEXTURE_2D,Xe,Se,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,De,ne)):t.texImage2D(n.TEXTURE_2D,0,Se,Pe,De,ne);E(g,ke)&&x(N),ue.__version=q.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ee(M,g,P){if(g.image.length!==6)return;const N=oe(M,g),z=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+P);const q=i.get(z);if(z.version!==q.__version||N===!0){t.activeTexture(n.TEXTURE0+P);const ue=Qe.getPrimaries(Qe.workingColorSpace),se=g.colorSpace===ln?null:Qe.getPrimaries(g.colorSpace),ce=g.colorSpace===ln||ue===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,be=g.image[0]&&g.image[0].isDataTexture,ne=[];for(let fe=0;fe<6;fe++)!xe&&!be?ne[fe]=_(g.image[fe],!1,!0,r.maxCubemapSize):ne[fe]=be?g.image[fe].image:g.image[fe],ne[fe]=Q(g,ne[fe]);const ke=ne[0],Pe=p(ke)||o,De=s.convert(g.format,g.colorSpace),Se=s.convert(g.type),_e=T(g.internalFormat,De,Se,g.colorSpace),Oe=o&&g.isVideoTexture!==!0,Ke=q.__version===void 0||N===!0;let ct=L(g,ke,Pe);Z(n.TEXTURE_CUBE_MAP,g,Pe);let Xe;if(xe){Oe&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,_e,ke.width,ke.height);for(let fe=0;fe<6;fe++){Xe=ne[fe].mipmaps;for(let D=0;D<Xe.length;D++){const me=Xe[D];g.format!==xn?De!==null?Oe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,0,0,me.width,me.height,De,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,_e,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,0,0,me.width,me.height,De,Se,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,_e,me.width,me.height,0,De,Se,me.data)}}}else{Xe=g.mipmaps,Oe&&Ke&&(Xe.length>0&&ct++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,_e,ne[0].width,ne[0].height));for(let fe=0;fe<6;fe++)if(be){Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ne[fe].width,ne[fe].height,De,Se,ne[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,_e,ne[fe].width,ne[fe].height,0,De,Se,ne[fe].data);for(let D=0;D<Xe.length;D++){const ge=Xe[D].image[fe].image;Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,0,0,ge.width,ge.height,De,Se,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,_e,ge.width,ge.height,0,De,Se,ge.data)}}else{Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,De,Se,ne[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,_e,De,Se,ne[fe]);for(let D=0;D<Xe.length;D++){const me=Xe[D];Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,0,0,De,Se,me.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,_e,De,Se,me.image[fe])}}}E(g,Pe)&&x(n.TEXTURE_CUBE_MAP),q.__version=z.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ye(M,g,P,N,z,q){const ue=s.convert(P.format,P.colorSpace),se=s.convert(P.type),ce=T(P.internalFormat,ue,se,P.colorSpace);if(!i.get(g).__hasExternalTextures){const be=Math.max(1,g.width>>q),ne=Math.max(1,g.height>>q);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?t.texImage3D(z,q,ce,be,ne,g.depth,0,ue,se,null):t.texImage2D(z,q,ce,be,ne,0,ue,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),O(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,z,i.get(P).__webglTexture,0,B(g)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,z,i.get(P).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(M,g,P){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let N=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(P||O(g)){const z=g.depthTexture;z&&z.isDepthTexture&&(z.type===li?N=n.DEPTH_COMPONENT32F:z.type===ai&&(N=n.DEPTH_COMPONENT24));const q=B(g);O(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,N,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,q,N,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,N,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const N=B(g);P&&O(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,g.width,g.height):O(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const N=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let z=0;z<N.length;z++){const q=N[z],ue=s.convert(q.format,q.colorSpace),se=s.convert(q.type),ce=T(q.internalFormat,ue,se,q.colorSpace),xe=B(g);P&&O(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ce,g.width,g.height):O(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,ce,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ce,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);const N=i.get(g.depthTexture).__webglTexture,z=B(g);if(g.depthTexture.format===Gi)O(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(g.depthTexture.format===yr)O(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Ce(M){const g=i.get(M),P=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Le(g.__webglFramebuffer,M)}else if(P){g.__webglDepthbuffer=[];for(let N=0;N<6;N++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[N]),g.__webglDepthbuffer[N]=n.createRenderbuffer(),Fe(g.__webglDepthbuffer[N],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Fe(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(M,g,P){const N=i.get(M);g!==void 0&&ye(N.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Ce(M)}function S(M){const g=M.texture,P=i.get(M),N=i.get(g);M.addEventListener("dispose",K),M.isWebGLMultipleRenderTargets!==!0&&(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=g.version,a.memory.textures++);const z=M.isWebGLCubeRenderTarget===!0,q=M.isWebGLMultipleRenderTargets===!0,ue=p(M)||o;if(z){P.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[se]=[];for(let ce=0;ce<g.mipmaps.length;ce++)P.__webglFramebuffer[se][ce]=n.createFramebuffer()}else P.__webglFramebuffer[se]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)P.__webglFramebuffer[se]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(q)if(r.drawBuffers){const se=M.texture;for(let ce=0,xe=se.length;ce<xe;ce++){const be=i.get(se[ce]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&O(M)===!1){const se=q?g:[g];P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ce=0;ce<se.length;ce++){const xe=se[ce];P.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ce]);const be=s.convert(xe.format,xe.colorSpace),ne=s.convert(xe.type),ke=T(xe.internalFormat,be,ne,xe.colorSpace,M.isXRRenderTarget===!0),Pe=B(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ke,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,P.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(P.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),Z(n.TEXTURE_CUBE_MAP,g,ue);for(let se=0;se<6;se++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)ye(P.__webglFramebuffer[se][ce],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ce);else ye(P.__webglFramebuffer[se],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);E(g,ue)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){const se=M.texture;for(let ce=0,xe=se.length;ce<xe;ce++){const be=se[ce],ne=i.get(be);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),Z(n.TEXTURE_2D,be,ue),ye(P.__webglFramebuffer,M,be,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),E(be,ue)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?se=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,N.__webglTexture),Z(se,g,ue),o&&g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)ye(P.__webglFramebuffer[ce],M,g,n.COLOR_ATTACHMENT0,se,ce);else ye(P.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,se,0);E(g,ue)&&x(se),t.unbindTexture()}M.depthBuffer&&Ce(M)}function G(M){const g=p(M)||o,P=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let N=0,z=P.length;N<z;N++){const q=P[N];if(E(q,g)){const ue=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(q).__webglTexture;t.bindTexture(ue,se),x(ue),t.unbindTexture()}}}function H(M){if(o&&M.samples>0&&O(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],P=M.width,N=M.height;let z=n.COLOR_BUFFER_BIT;const q=[],ue=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(M),ce=M.isWebGLMultipleRenderTargets===!0;if(ce)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){q.push(n.COLOR_ATTACHMENT0+xe),M.depthBuffer&&q.push(ue);const be=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(be===!1&&(M.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[xe]),be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ue]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ue])),ce){const ne=i.get(g[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,P,N,0,0,P,N,z,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,se.__webglColorRenderbuffer[xe]);const be=i.get(g[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function B(M){return Math.min(r.maxSamples,M.samples)}function O(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ie(M){const g=a.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function Q(M,g){const P=M.colorSpace,N=M.format,z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Za||P!==On&&P!==ln&&(Qe.getTransfer(P)===ot?o===!1?e.has("EXT_sRGB")===!0&&N===xn?(M.format=Za,M.minFilter=on,M.generateMipmaps=!1):g=gh.sRGBToLinear(g):(N!==xn||z!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}this.allocateTextureUnit=U,this.resetTextureUnits=re,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=$,this.setTextureCube=ee,this.rebindTextures=A,this.setupRenderTarget=S,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=O}function wS(n,e,t){const i=t.isWebGL2;function r(s,a=ln){let o;const l=Qe.getTransfer(a);if(s===mi)return n.UNSIGNED_BYTE;if(s===ah)return n.UNSIGNED_SHORT_4_4_4_4;if(s===lh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===l_)return n.BYTE;if(s===c_)return n.SHORT;if(s===El)return n.UNSIGNED_SHORT;if(s===oh)return n.INT;if(s===ai)return n.UNSIGNED_INT;if(s===li)return n.FLOAT;if(s===ls)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===u_)return n.ALPHA;if(s===xn)return n.RGBA;if(s===f_)return n.LUMINANCE;if(s===h_)return n.LUMINANCE_ALPHA;if(s===Gi)return n.DEPTH_COMPONENT;if(s===yr)return n.DEPTH_STENCIL;if(s===Za)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===d_)return n.RED;if(s===ch)return n.RED_INTEGER;if(s===p_)return n.RG;if(s===uh)return n.RG_INTEGER;if(s===fh)return n.RGBA_INTEGER;if(s===na||s===ia||s===ra||s===sa)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===na)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===na)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ia)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ra)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===sa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mc||s===gc||s===_c||s===vc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===mc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_c)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xc||s===Mc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===xc)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Mc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sc||s===Ec||s===yc||s===bc||s===Tc||s===Ac||s===wc||s===Rc||s===Cc||s===Pc||s===Lc||s===Dc||s===Uc||s===Ic)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Sc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ec)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ac)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ic)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===oa||s===Nc||s===Fc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===oa)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===m_||s===Oc||s===Bc||s===zc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===oa)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Oc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class RS extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fi extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CS={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(CS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class PS extends Tr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,v=null;const _=t.getContextAttributes();let p=null,h=null;const E=[],x=[],T=new $e;let L=null;const R=new an;R.layers.enable(1),R.viewport=new wt;const C=new an;C.layers.enable(2),C.viewport=new wt;const K=[R,C],y=new RS;y.layers.enable(1),y.layers.enable(2);let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=E[Z];return oe===void 0&&(oe=new La,E[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=E[Z];return oe===void 0&&(oe=new La,E[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=E[Z];return oe===void 0&&(oe=new La,E[Z]=oe),oe.getHandSpace()};function te(Z){const oe=x.indexOf(Z.inputSource);if(oe===-1)return;const ve=E[oe];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function re(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",U);for(let Z=0;Z<E.length;Z++){const oe=x[Z];oe!==null&&(x[Z]=null,E[Z].disconnect(oe))}w=null,W=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",re),r.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new xi(m.framebufferWidth,m.framebufferHeight,{format:xn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let oe=null,ve=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?yr:Gi,ve=_.stencil?Hi:ai);const ye={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new xi(d.textureWidth,d.textureHeight,{format:xn,type:mi,depthTexture:new Lh(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Fe=e.properties.get(h);Fe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(Z){for(let oe=0;oe<Z.removed.length;oe++){const ve=Z.removed[oe],Ee=x.indexOf(ve);Ee>=0&&(x[Ee]=null,E[Ee].disconnect(ve))}for(let oe=0;oe<Z.added.length;oe++){const ve=Z.added[oe];let Ee=x.indexOf(ve);if(Ee===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=x.length){x.push(ve),Ee=Fe;break}else if(x[Fe]===null){x[Fe]=ve,Ee=Fe;break}if(Ee===-1)break}const ye=E[Ee];ye&&ye.connect(ve)}}const V=new I,j=new I;function J(Z,oe,ve){V.setFromMatrixPosition(oe.matrixWorld),j.setFromMatrixPosition(ve.matrixWorld);const Ee=V.distanceTo(j),ye=oe.projectionMatrix.elements,Fe=ve.projectionMatrix.elements,Le=ye[14]/(ye[10]-1),Ce=ye[14]/(ye[10]+1),A=(ye[9]+1)/ye[5],S=(ye[9]-1)/ye[5],G=(ye[8]-1)/ye[0],H=(Fe[8]+1)/Fe[0],B=Le*G,O=Le*H,ie=Ee/(-G+H),Q=ie*-G;oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Q),Z.translateZ(ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const M=Le+ie,g=Ce+ie,P=B-Q,N=O+(Ee-Q),z=A*Ce/g*M,q=S*Ce/g*M;Z.projectionMatrix.makePerspective(P,N,z,q,M,g),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function $(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;y.near=C.near=R.near=Z.near,y.far=C.far=R.far=Z.far,(w!==y.near||W!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,W=y.far);const oe=Z.parent,ve=y.cameras;$(y,oe);for(let Ee=0;Ee<ve.length;Ee++)$(ve[Ee],oe);ve.length===2?J(y,R,C):y.projectionMatrix.copy(R.projectionMatrix),ee(Z,y,oe)};function ee(Z,oe,ve){ve===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ja*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)};let ae=null;function le(Z,oe){if(u=oe.getViewerPose(c||a),v=oe,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let Ee=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,Ee=!0);for(let ye=0;ye<ve.length;ye++){const Fe=ve[ye];let Le=null;if(m!==null)Le=m.getViewport(Fe);else{const A=f.getViewSubImage(d,Fe);Le=A.viewport,ye===0&&(e.setRenderTargetTextures(h,A.colorTexture,d.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(h))}let Ce=K[ye];Ce===void 0&&(Ce=new an,Ce.layers.enable(ye),Ce.viewport=new wt,K[ye]=Ce),Ce.matrix.fromArray(Fe.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Fe.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Le.x,Le.y,Le.width,Le.height),ye===0&&(y.matrix.copy(Ce.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ee===!0&&y.cameras.push(Ce)}}for(let ve=0;ve<E.length;ve++){const Ee=x[ve],ye=E[ve];Ee!==null&&ye!==void 0&&ye.update(Ee,oe,c||a)}ae&&ae(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const pe=new Ch;pe.setAnimationLoop(le),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}}function LS(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Th(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,E,x,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,E,x):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ft&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ft&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,E,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=x*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ft&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const E=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DS(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const T=x.program;i.uniformBlockBinding(E,T)}function c(E,x){let T=r[E.id];T===void 0&&(v(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",p));const L=x.program;i.updateUBOMapping(E,L);const R=e.render.frame;s[E.id]!==R&&(d(E),s[E.id]=R)}function u(E){const x=f();E.__bindingPointIndex=x;const T=n.createBuffer(),L=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,T),T}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=r[E.id],T=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,C=T.length;R<C;R++){const K=Array.isArray(T[R])?T[R]:[T[R]];for(let y=0,w=K.length;y<w;y++){const W=K[y];if(m(W,R,y,L)===!0){const te=W.__offset,re=Array.isArray(W.value)?W.value:[W.value];let U=0;for(let V=0;V<re.length;V++){const j=re[V],J=_(j);typeof j=="number"||typeof j=="boolean"?(W.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,te+U,W.__data)):j.isMatrix3?(W.__data[0]=j.elements[0],W.__data[1]=j.elements[1],W.__data[2]=j.elements[2],W.__data[3]=0,W.__data[4]=j.elements[3],W.__data[5]=j.elements[4],W.__data[6]=j.elements[5],W.__data[7]=0,W.__data[8]=j.elements[6],W.__data[9]=j.elements[7],W.__data[10]=j.elements[8],W.__data[11]=0):(j.toArray(W.__data,U),U+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,te,W.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,x,T,L){const R=E.value,C=x+"_"+T;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const K=L[C];if(typeof R=="number"||typeof R=="boolean"){if(K!==R)return L[C]=R,!0}else if(K.equals(R)===!1)return K.copy(R),!0}return!1}function v(E){const x=E.uniforms;let T=0;const L=16;for(let C=0,K=x.length;C<K;C++){const y=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,W=y.length;w<W;w++){const te=y[w],re=Array.isArray(te.value)?te.value:[te.value];for(let U=0,V=re.length;U<V;U++){const j=re[U],J=_(j),$=T%L;$!==0&&L-$<J.boundary&&(T+=L-$),te.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=T,T+=J.storage}}}const R=T%L;return R>0&&(T+=L-R),E.__size=T,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Oh{constructor(e={}){const{canvas:t=R_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const x=this;let T=!1,L=0,R=0,C=null,K=-1,y=null;const w=new wt,W=new wt;let te=null;const re=new Ve(0);let U=0,V=t.width,j=t.height,J=1,$=null,ee=null;const ae=new wt(0,0,V,j),le=new wt(0,0,V,j);let pe=!1;const Z=new Rh;let oe=!1,ve=!1,Ee=null;const ye=new dt,Fe=new $e,Le=new I,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function A(){return C===null?J:1}let S=i;function G(b,F){for(let X=0;X<b.length;X++){const Y=b[X],k=t.getContext(Y,F);if(k!==null)return k}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sl}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",me,!1),S===null){const F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),S=G(F,b),S===null)throw G(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&S instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),S.getShaderPrecisionFormat===void 0&&(S.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let H,B,O,ie,Q,M,g,P,N,z,q,ue,se,ce,xe,be,ne,ke,Pe,De,Se,_e,Oe,Ke;function ct(){H=new Vx(S),B=new Fx(S,H,e),H.init(B),_e=new wS(S,H,B),O=new TS(S,H,B),ie=new Xx(S),Q=new fS,M=new AS(S,H,O,Q,B,_e,ie),g=new Bx(x),P=new Gx(x),N=new Q_(S,B),Oe=new Ix(S,H,N,B),z=new kx(S,N,ie,Oe),q=new jx(S,z,N,ie),Pe=new $x(S,B,M),be=new Ox(Q),ue=new uS(x,g,P,H,B,Oe,be),se=new LS(x,Q),ce=new dS,xe=new xS(H,B),ke=new Ux(x,g,P,O,q,d,l),ne=new bS(x,q,B),Ke=new DS(S,ie,B,O),De=new Nx(S,H,ie,B),Se=new Wx(S,H,ie,B),ie.programs=ue.programs,x.capabilities=B,x.extensions=H,x.properties=Q,x.renderLists=ce,x.shadowMap=ne,x.state=O,x.info=ie}ct();const Xe=new PS(x,S);this.xr=Xe,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const b=H.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=H.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(V,j,!1))},this.getSize=function(b){return b.set(V,j)},this.setSize=function(b,F,X=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,j=F,t.width=Math.floor(b*J),t.height=Math.floor(F*J),X===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(V*J,j*J).floor()},this.setDrawingBufferSize=function(b,F,X){V=b,j=F,J=X,t.width=Math.floor(b*X),t.height=Math.floor(F*X),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,F,X,Y){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,F,X,Y),O.viewport(w.copy(ae).multiplyScalar(J).floor())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,F,X,Y){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,F,X,Y),O.scissor(W.copy(le).multiplyScalar(J).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){O.setScissorTest(pe=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(b=!0,F=!0,X=!0){let Y=0;if(b){let k=!1;if(C!==null){const Me=C.texture.format;k=Me===fh||Me===uh||Me===ch}if(k){const Me=C.texture.type,Te=Me===mi||Me===ai||Me===El||Me===Hi||Me===ah||Me===lh,Re=ke.getClearColor(),Ne=ke.getClearAlpha(),We=Re.r,Be=Re.g,He=Re.b;Te?(m[0]=We,m[1]=Be,m[2]=He,m[3]=Ne,S.clearBufferuiv(S.COLOR,0,m)):(v[0]=We,v[1]=Be,v[2]=He,v[3]=Ne,S.clearBufferiv(S.COLOR,0,v))}else Y|=S.COLOR_BUFFER_BIT}F&&(Y|=S.DEPTH_BUFFER_BIT),X&&(Y|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ce.dispose(),xe.dispose(),Q.dispose(),g.dispose(),P.dispose(),q.dispose(),Oe.dispose(),Ke.dispose(),ue.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Ot),Xe.removeEventListener("sessionend",rt),Ee&&(Ee.dispose(),Ee=null),Bt.stop()};function fe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=ie.autoReset,F=ne.enabled,X=ne.autoUpdate,Y=ne.needsUpdate,k=ne.type;ct(),ie.autoReset=b,ne.enabled=F,ne.autoUpdate=X,ne.needsUpdate=Y,ne.type=k}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ge(b){const F=b.target;F.removeEventListener("dispose",ge),Ue(F)}function Ue(b){we(b),Q.remove(b)}function we(b){const F=Q.get(b).programs;F!==void 0&&(F.forEach(function(X){ue.releaseProgram(X)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,X,Y,k,Me){F===null&&(F=Ce);const Te=k.isMesh&&k.matrixWorld.determinant()<0,Re=Zh(b,F,X,Y,k);O.setMaterial(Y,Te);let Ne=X.index,We=1;if(Y.wireframe===!0){if(Ne=z.getWireframeAttribute(X),Ne===void 0)return;We=2}const Be=X.drawRange,He=X.attributes.position;let pt=Be.start*We,Zt=(Be.start+Be.count)*We;Me!==null&&(pt=Math.max(pt,Me.start*We),Zt=Math.min(Zt,(Me.start+Me.count)*We)),Ne!==null?(pt=Math.max(pt,0),Zt=Math.min(Zt,Ne.count)):He!=null&&(pt=Math.max(pt,0),Zt=Math.min(Zt,He.count));const St=Zt-pt;if(St<0||St===1/0)return;Oe.setup(k,Y,Re,X,Ne);let Bn,at=De;if(Ne!==null&&(Bn=N.get(Ne),at=Se,at.setIndex(Bn)),k.isMesh)Y.wireframe===!0?(O.setLineWidth(Y.wireframeLinewidth*A()),at.setMode(S.LINES)):at.setMode(S.TRIANGLES);else if(k.isLine){let qe=Y.linewidth;qe===void 0&&(qe=1),O.setLineWidth(qe*A()),k.isLineSegments?at.setMode(S.LINES):k.isLineLoop?at.setMode(S.LINE_LOOP):at.setMode(S.LINE_STRIP)}else k.isPoints?at.setMode(S.POINTS):k.isSprite&&at.setMode(S.TRIANGLES);if(k.isBatchedMesh)at.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)at.renderInstances(pt,St,k.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,zo=Math.min(X.instanceCount,qe);at.renderInstances(pt,St,zo)}else at.render(pt,St)};function nt(b,F,X){b.transparent===!0&&b.side===Kn&&b.forceSinglePass===!1?(b.side=Ft,b.needsUpdate=!0,Es(b,F,X),b.side=vi,b.needsUpdate=!0,Es(b,F,X),b.side=Kn):Es(b,F,X)}this.compile=function(b,F,X=null){X===null&&(X=b),p=xe.get(X),p.init(),E.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==X&&b.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(x._useLegacyLights);const Y=new Set;return b.traverse(function(k){const Me=k.material;if(Me)if(Array.isArray(Me))for(let Te=0;Te<Me.length;Te++){const Re=Me[Te];nt(Re,X,k),Y.add(Re)}else nt(Me,X,k),Y.add(Me)}),E.pop(),p=null,Y},this.compileAsync=function(b,F,X=null){const Y=this.compile(b,F,X);return new Promise(k=>{function Me(){if(Y.forEach(function(Te){Q.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){k(b);return}setTimeout(Me,10)}H.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let it=null;function Mt(b){it&&it(b)}function Ot(){Bt.stop()}function rt(){Bt.start()}const Bt=new Ch;Bt.setAnimationLoop(Mt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(b){it=b,Xe.setAnimationLoop(b),b===null?Bt.stop():Bt.start()},Xe.addEventListener("sessionstart",Ot),Xe.addEventListener("sessionend",rt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(F),F=Xe.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,F,C),p=xe.get(b,E.length),p.init(),E.push(p),ye.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(ye),ve=this.localClippingEnabled,oe=be.init(this.clippingPlanes,ve),_=ce.get(b,h.length),_.init(),h.push(_),Tn(b,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort($,ee),this.info.render.frame++,oe===!0&&be.beginShadows();const X=p.state.shadowsArray;if(ne.render(X,b,F),oe===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),ke.render(_,b),p.setupLights(x._useLegacyLights),F.isArrayCamera){const Y=F.cameras;for(let k=0,Me=Y.length;k<Me;k++){const Te=Y[k];Rl(_,b,Te,Te.viewport)}}else Rl(_,b,F);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,F),Oe.resetDefaultState(),K=-1,y=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Tn(b,F,X,Y){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){Y&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ye);const Te=q.update(b),Re=b.material;Re.visible&&_.push(b,Te,Re,X,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const Te=q.update(b),Re=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Le.copy(Te.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(ye)),Array.isArray(Re)){const Ne=Te.groups;for(let We=0,Be=Ne.length;We<Be;We++){const He=Ne[We],pt=Re[He.materialIndex];pt&&pt.visible&&_.push(b,Te,pt,X,Le.z,He)}}else Re.visible&&_.push(b,Te,Re,X,Le.z,null)}}const Me=b.children;for(let Te=0,Re=Me.length;Te<Re;Te++)Tn(Me[Te],F,X,Y)}function Rl(b,F,X,Y){const k=b.opaque,Me=b.transmissive,Te=b.transparent;p.setupLightsView(X),oe===!0&&be.setGlobalState(x.clippingPlanes,X),Me.length>0&&Kh(k,Me,F,X),Y&&O.viewport(w.copy(Y)),k.length>0&&Ss(k,F,X),Me.length>0&&Ss(Me,F,X),Te.length>0&&Ss(Te,F,X),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Kh(b,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Me=B.isWebGL2;Ee===null&&(Ee=new xi(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")?ls:mi,minFilter:ki,samples:Me?4:0})),x.getDrawingBufferSize(Fe),Me?Ee.setSize(Fe.x,Fe.y):Ee.setSize(Qa(Fe.x),Qa(Fe.y));const Te=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor(re),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=pi,Ss(b,X,Y),M.updateMultisampleRenderTarget(Ee),M.updateRenderTargetMipmap(Ee);let Ne=!1;for(let We=0,Be=F.length;We<Be;We++){const He=F[We],pt=He.object,Zt=He.geometry,St=He.material,Bn=He.group;if(St.side===Kn&&pt.layers.test(Y.layers)){const at=St.side;St.side=Ft,St.needsUpdate=!0,Cl(pt,X,Y,Zt,St,Bn),St.side=at,St.needsUpdate=!0,Ne=!0}}Ne===!0&&(M.updateMultisampleRenderTarget(Ee),M.updateRenderTargetMipmap(Ee)),x.setRenderTarget(Te),x.setClearColor(re,U),x.toneMapping=Re}function Ss(b,F,X){const Y=F.isScene===!0?F.overrideMaterial:null;for(let k=0,Me=b.length;k<Me;k++){const Te=b[k],Re=Te.object,Ne=Te.geometry,We=Y===null?Te.material:Y,Be=Te.group;Re.layers.test(X.layers)&&Cl(Re,F,X,Ne,We,Be)}}function Cl(b,F,X,Y,k,Me){b.onBeforeRender(x,F,X,Y,k,Me),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(x,F,X,Y,b,Me),k.transparent===!0&&k.side===Kn&&k.forceSinglePass===!1?(k.side=Ft,k.needsUpdate=!0,x.renderBufferDirect(X,F,Y,k,b,Me),k.side=vi,k.needsUpdate=!0,x.renderBufferDirect(X,F,Y,k,b,Me),k.side=Kn):x.renderBufferDirect(X,F,Y,k,b,Me),b.onAfterRender(x,F,X,Y,k,Me)}function Es(b,F,X){F.isScene!==!0&&(F=Ce);const Y=Q.get(b),k=p.state.lights,Me=p.state.shadowsArray,Te=k.state.version,Re=ue.getParameters(b,k.state,Me,F,X),Ne=ue.getProgramCacheKey(Re);let We=Y.programs;Y.environment=b.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(b.isMeshStandardMaterial?P:g).get(b.envMap||Y.environment),We===void 0&&(b.addEventListener("dispose",ge),We=new Map,Y.programs=We);let Be=We.get(Ne);if(Be!==void 0){if(Y.currentProgram===Be&&Y.lightsStateVersion===Te)return Ll(b,Re),Be}else Re.uniforms=ue.getUniforms(b),b.onBuild(X,Re,x),b.onBeforeCompile(Re,x),Be=ue.acquireProgram(Re,Ne),We.set(Ne,Be),Y.uniforms=Re.uniforms;const He=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=be.uniform),Ll(b,Re),Y.needsLights=Qh(b),Y.lightsStateVersion=Te,Y.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Be,Y.uniformsList=null,Be}function Pl(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=io.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Ll(b,F){const X=Q.get(b);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Zh(b,F,X,Y,k){F.isScene!==!0&&(F=Ce),M.resetTextureUnits();const Me=F.fog,Te=Y.isMeshStandardMaterial?F.environment:null,Re=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:On,Ne=(Y.isMeshStandardMaterial?P:g).get(Y.envMap||Te),We=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),He=!!X.morphAttributes.position,pt=!!X.morphAttributes.normal,Zt=!!X.morphAttributes.color;let St=pi;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(St=x.toneMapping);const Bn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,at=Bn!==void 0?Bn.length:0,qe=Q.get(Y),zo=p.state.lights;if(oe===!0&&(ve===!0||b!==y)){const rn=b===y&&Y.id===K;be.setState(Y,b,rn)}let ut=!1;Y.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zo.state.version||qe.outputColorSpace!==Re||k.isBatchedMesh&&qe.batching===!1||!k.isBatchedMesh&&qe.batching===!0||k.isInstancedMesh&&qe.instancing===!1||!k.isInstancedMesh&&qe.instancing===!0||k.isSkinnedMesh&&qe.skinning===!1||!k.isSkinnedMesh&&qe.skinning===!0||k.isInstancedMesh&&qe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&qe.instancingColor===!1&&k.instanceColor!==null||qe.envMap!==Ne||Y.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==be.numPlanes||qe.numIntersection!==be.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==Be||qe.morphTargets!==He||qe.morphNormals!==pt||qe.morphColors!==Zt||qe.toneMapping!==St||B.isWebGL2===!0&&qe.morphTargetsCount!==at)&&(ut=!0):(ut=!0,qe.__version=Y.version);let Si=qe.currentProgram;ut===!0&&(Si=Es(Y,F,k));let Dl=!1,Pr=!1,Ho=!1;const Pt=Si.getUniforms(),Ei=qe.uniforms;if(O.useProgram(Si.program)&&(Dl=!0,Pr=!0,Ho=!0),Y.id!==K&&(K=Y.id,Pr=!0),Dl||y!==b){Pt.setValue(S,"projectionMatrix",b.projectionMatrix),Pt.setValue(S,"viewMatrix",b.matrixWorldInverse);const rn=Pt.map.cameraPosition;rn!==void 0&&rn.setValue(S,Le.setFromMatrixPosition(b.matrixWorld)),B.logarithmicDepthBuffer&&Pt.setValue(S,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Pt.setValue(S,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Pr=!0,Ho=!0)}if(k.isSkinnedMesh){Pt.setOptional(S,k,"bindMatrix"),Pt.setOptional(S,k,"bindMatrixInverse");const rn=k.skeleton;rn&&(B.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Pt.setValue(S,"boneTexture",rn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Pt.setOptional(S,k,"batchingTexture"),Pt.setValue(S,"batchingTexture",k._matricesTexture,M));const Go=X.morphAttributes;if((Go.position!==void 0||Go.normal!==void 0||Go.color!==void 0&&B.isWebGL2===!0)&&Pe.update(k,X,Si),(Pr||qe.receiveShadow!==k.receiveShadow)&&(qe.receiveShadow=k.receiveShadow,Pt.setValue(S,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ei.envMap.value=Ne,Ei.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Pr&&(Pt.setValue(S,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Jh(Ei,Ho),Me&&Y.fog===!0&&se.refreshFogUniforms(Ei,Me),se.refreshMaterialUniforms(Ei,Y,J,j,Ee),io.upload(S,Pl(qe),Ei,M)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(io.upload(S,Pl(qe),Ei,M),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Pt.setValue(S,"center",k.center),Pt.setValue(S,"modelViewMatrix",k.modelViewMatrix),Pt.setValue(S,"normalMatrix",k.normalMatrix),Pt.setValue(S,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const rn=Y.uniformsGroups;for(let Vo=0,ed=rn.length;Vo<ed;Vo++)if(B.isWebGL2){const Ul=rn[Vo];Ke.update(Ul,Si),Ke.bind(Ul,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function Jh(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Qh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,F,X){Q.get(b.texture).__webglTexture=F,Q.get(b.depthTexture).__webglTexture=X;const Y=Q.get(b);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){const X=Q.get(b);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,X=0){C=b,L=F,R=X;let Y=!0,k=null,Me=!1,Te=!1;if(b){const Ne=Q.get(b);Ne.__useDefaultFramebuffer!==void 0?(O.bindFramebuffer(S.FRAMEBUFFER,null),Y=!1):Ne.__webglFramebuffer===void 0?M.setupRenderTarget(b):Ne.__hasExternalTextures&&M.rebindTextures(b,Q.get(b.texture).__webglTexture,Q.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Te=!0);const Be=Q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?k=Be[F][X]:k=Be[F],Me=!0):B.isWebGL2&&b.samples>0&&M.useMultisampledRTT(b)===!1?k=Q.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[X]:k=Be,w.copy(b.viewport),W.copy(b.scissor),te=b.scissorTest}else w.copy(ae).multiplyScalar(J).floor(),W.copy(le).multiplyScalar(J).floor(),te=pe;if(O.bindFramebuffer(S.FRAMEBUFFER,k)&&B.drawBuffers&&Y&&O.drawBuffers(b,k),O.viewport(w),O.scissor(W),O.setScissorTest(te),Me){const Ne=Q.get(b.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ne.__webglTexture,X)}else if(Te){const Ne=Q.get(b.texture),We=F||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ne.__webglTexture,X||0,We)}K=-1},this.readRenderTargetPixels=function(b,F,X,Y,k,Me,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){O.bindFramebuffer(S.FRAMEBUFFER,Re);try{const Ne=b.texture,We=Ne.format,Be=Ne.type;if(We!==xn&&_e.convert(We)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===ls&&(H.has("EXT_color_buffer_half_float")||B.isWebGL2&&H.has("EXT_color_buffer_float"));if(Be!==mi&&_e.convert(Be)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===li&&(B.isWebGL2||H.has("OES_texture_float")||H.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-Y&&X>=0&&X<=b.height-k&&S.readPixels(F,X,Y,k,_e.convert(We),_e.convert(Be),Me)}finally{const Ne=C!==null?Q.get(C).__webglFramebuffer:null;O.bindFramebuffer(S.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(b,F,X=0){const Y=Math.pow(2,-X),k=Math.floor(F.image.width*Y),Me=Math.floor(F.image.height*Y);M.setTexture2D(F,0),S.copyTexSubImage2D(S.TEXTURE_2D,X,0,0,b.x,b.y,k,Me),O.unbindTexture()},this.copyTextureToTexture=function(b,F,X,Y=0){const k=F.image.width,Me=F.image.height,Te=_e.convert(X.format),Re=_e.convert(X.type);M.setTexture2D(X,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,X.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,X.unpackAlignment),F.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Y,b.x,b.y,k,Me,Te,Re,F.image.data):F.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Y,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,Te,F.mipmaps[0].data):S.texSubImage2D(S.TEXTURE_2D,Y,b.x,b.y,Te,Re,F.image),Y===0&&X.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(b,F,X,Y,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=b.max.x-b.min.x+1,Te=b.max.y-b.min.y+1,Re=b.max.z-b.min.z+1,Ne=_e.convert(Y.format),We=_e.convert(Y.type);let Be;if(Y.isData3DTexture)M.setTexture3D(Y,0),Be=S.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)M.setTexture2DArray(Y,0),Be=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,Y.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,Y.unpackAlignment);const He=S.getParameter(S.UNPACK_ROW_LENGTH),pt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Zt=S.getParameter(S.UNPACK_SKIP_PIXELS),St=S.getParameter(S.UNPACK_SKIP_ROWS),Bn=S.getParameter(S.UNPACK_SKIP_IMAGES),at=X.isCompressedTexture?X.mipmaps[k]:X.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,at.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,at.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,b.min.x),S.pixelStorei(S.UNPACK_SKIP_ROWS,b.min.y),S.pixelStorei(S.UNPACK_SKIP_IMAGES,b.min.z),X.isDataTexture||X.isData3DTexture?S.texSubImage3D(Be,k,F.x,F.y,F.z,Me,Te,Re,Ne,We,at.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),S.compressedTexSubImage3D(Be,k,F.x,F.y,F.z,Me,Te,Re,Ne,at.data)):S.texSubImage3D(Be,k,F.x,F.y,F.z,Me,Te,Re,Ne,We,at),S.pixelStorei(S.UNPACK_ROW_LENGTH,He),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,pt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Zt),S.pixelStorei(S.UNPACK_SKIP_ROWS,St),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Bn),k===0&&Y.generateMipmaps&&S.generateMipmap(Be),O.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),O.unbindTexture()},this.resetState=function(){L=0,R=0,C=null,O.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yl?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Oo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Vi:dh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vi?At:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class US extends Oh{}US.prototype.isWebGL1Renderer=!0;class Bh extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ru extends Ct{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ur=new dt,Cu=new dt,js=[],Pu=new qi,IS=new dt,zr=new Rt,Hr=new wr;class Da extends Rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ru(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,IS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),Pu.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(Pu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),Hr.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(i),e.ray.intersectsSphere(Hr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ur),Cu.multiplyMatrices(i,ur),zr.matrixWorld=Cu,zr.raycast(e,js);for(let a=0,o=js.length;a<o;a++){const l=js[a];l.instanceId=s,l.object=this,t.push(l)}js.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ru(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class NS extends xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lu=new dt,tl=new xh,Ks=new wr,Zs=new I;class zh extends Kt{constructor(e=new hn,t=new NS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(r),Ks.radius+=s,e.ray.intersectsSphere(Ks)===!1)return;Lu.copy(r).invert(),tl.copy(e.ray).applyMatrix4(Lu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=d,_=m;v<_;v++){const p=c.getX(v);Zs.fromBufferAttribute(f,p),Du(Zs,p,l,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,_=m;v<_;v++)Zs.fromBufferAttribute(f,v),Du(Zs,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Du(n,e,t,i,r,s,a){const o=tl.distanceSqToPoint(n);if(o<t){const l=new I;tl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Tl extends hn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new nn(s,3)),this.setAttribute("normal",new nn(s.slice(),3)),this.setAttribute("uv",new nn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const x=new I,T=new I,L=new I;for(let R=0;R<t.length;R+=3)m(t[R+0],x),m(t[R+1],T),m(t[R+2],L),l(x,T,L,E)}function l(E,x,T,L){const R=L+1,C=[];for(let K=0;K<=R;K++){C[K]=[];const y=E.clone().lerp(T,K/R),w=x.clone().lerp(T,K/R),W=R-K;for(let te=0;te<=W;te++)te===0&&K===R?C[K][te]=y:C[K][te]=y.clone().lerp(w,te/W)}for(let K=0;K<R;K++)for(let y=0;y<2*(R-K)-1;y++){const w=Math.floor(y/2);y%2===0?(d(C[K][w+1]),d(C[K+1][w]),d(C[K][w])):(d(C[K][w+1]),d(C[K+1][w+1]),d(C[K+1][w]))}}function c(E){const x=new I;for(let T=0;T<s.length;T+=3)x.x=s[T+0],x.y=s[T+1],x.z=s[T+2],x.normalize().multiplyScalar(E),s[T+0]=x.x,s[T+1]=x.y,s[T+2]=x.z}function u(){const E=new I;for(let x=0;x<s.length;x+=3){E.x=s[x+0],E.y=s[x+1],E.z=s[x+2];const T=p(E)/2/Math.PI+.5,L=h(E)/Math.PI+.5;a.push(T,1-L)}v(),f()}function f(){for(let E=0;E<a.length;E+=6){const x=a[E+0],T=a[E+2],L=a[E+4],R=Math.max(x,T,L),C=Math.min(x,T,L);R>.9&&C<.1&&(x<.2&&(a[E+0]+=1),T<.2&&(a[E+2]+=1),L<.2&&(a[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function m(E,x){const T=E*3;x.x=e[T+0],x.y=e[T+1],x.z=e[T+2]}function v(){const E=new I,x=new I,T=new I,L=new I,R=new $e,C=new $e,K=new $e;for(let y=0,w=0;y<s.length;y+=9,w+=6){E.set(s[y+0],s[y+1],s[y+2]),x.set(s[y+3],s[y+4],s[y+5]),T.set(s[y+6],s[y+7],s[y+8]),R.set(a[w+0],a[w+1]),C.set(a[w+2],a[w+3]),K.set(a[w+4],a[w+5]),L.copy(E).add(x).add(T).divideScalar(3);const W=p(L);_(R,w+0,E,W),_(C,w+2,x,W),_(K,w+4,T,W)}}function _(E,x,T,L){L<0&&E.x===1&&(a[x]=E.x-1),T.x===0&&T.z===0&&(a[x]=L/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function h(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.vertices,e.indices,e.radius,e.details)}}class Al extends Tl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Al(e.radius,e.detail)}}class So extends hn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new I,d=new I,m=[],v=[],_=[],p=[];for(let h=0;h<=i;h++){const E=[],x=h/i;let T=0;h===0&&a===0?T=.5/t:h===i&&l===Math.PI&&(T=-.5/t);for(let L=0;L<=t;L++){const R=L/t;f.x=-e*Math.cos(r+R*s)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(r+R*s)*Math.sin(a+x*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(R+T,1-x),E.push(c++)}u.push(E)}for(let h=0;h<i;h++)for(let E=0;E<t;E++){const x=u[h][E+1],T=u[h][E],L=u[h+1][E],R=u[h+1][E+1];(h!==0||a>0)&&m.push(x,T,R),(h!==i-1||l<Math.PI)&&m.push(T,L,R)}this.setIndex(m),this.setAttribute("position",new nn(v,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Uu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class FS{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const OS=new FS;class wl{constructor(e){this.manager=e!==void 0?e:OS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wl.DEFAULT_MATERIAL_NAME="__DEFAULT";class BS extends wl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Uu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=cs("img");function l(){u(),Uu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class zS extends wl{constructor(e){super(e)}load(e,t,i,r){const s=new jt,a=new BS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class HS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Iu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Iu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Iu(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);Qe.enabled=!1;const us=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<600,ci=Math.min(window.devicePixelRatio||1,us?1.6:2);function GS(n){const e=new Oh({canvas:n,antialias:!1,powerPreference:"high-performance"});return e.outputColorSpace=On,e.setPixelRatio(ci),e.setClearColor(460811,1),e}function VS(){return{uLight:{value:new I(-.62,.5,.38).normalize()},uDot:{value:Math.max(3.4,4.2*ci)},uTime:{value:0}}}function kS(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Hh=n=>n-Math.floor(n),Js=(n,e)=>Hh(Math.sin(n*127.1+e*311.7)*43758.5453),si=(n,e,t)=>Hh(Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453),Qr=n=>n*n*(3-2*n);function nl(n,e){const t=Math.floor(n),i=Math.floor(e),r=Qr(n-t),s=Qr(e-i),a=Js(t,i),o=Js(t+1,i),l=Js(t,i+1),c=Js(t+1,i+1);return(a+(o-a)*r+(l-a)*s+(a-o-l+c)*r*s)*2-1}function Ua(n,e,t){const i=Math.floor(n),r=Math.floor(e),s=Math.floor(t),a=Qr(n-i),o=Qr(e-r),l=Qr(t-s),c=(d,m,v)=>d+(m-d)*v,u=c(c(si(i,r,s),si(i+1,r,s),a),c(si(i,r+1,s),si(i+1,r+1,s),a),o),f=c(c(si(i,r,s+1),si(i+1,r,s+1),a),c(si(i,r+1,s+1),si(i+1,r+1,s+1),a),o);return c(u,f,l)*2-1}function Ia(n,e,t=5){let i=0,r=.5,s=1;for(let a=0;a<t;a++)i+=r*nl(n*s,e*s),s*=2.03,r*=.5;return i}const Di=(n,e,t)=>{const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)},En=new I(0,1.5,0),Gh=62,Nu=80,Vh=8.9,Fu=8.4;function WS(){return{camera:new an(Gh,hi,.1,8e3),pitch:Vh*Math.PI/180,safe:{w:1,h:1},size:{w:1,h:1},blend:1}}function XS(n,e,t){const{camera:i}=n,r=e/t;n.size.w=e,n.size.h=t,i.aspect=r,r>=hi?(n.safe.w=t*hi,n.safe.h=t,n.blend=1):(n.safe.w=e,n.safe.h=t,n.blend=Di(.46,hi,r)),i.fov=Nu+(Gh-Nu)*n.blend,n.pitch=(Fu+(Vh-Fu)*n.blend)*Math.PI/180,i.updateProjectionMatrix()}function kh(n){n.camera.position.copy(En),n.camera.rotation.set(n.pitch,0,0,"YXZ"),n.camera.updateMatrixWorld()}function Wh(n,e,t){const i=n.safe.w/n.size.w,r=n.safe.h/n.size.h;return new I((e*2-1)*i,(1-t*2)*r,.5).unproject(n.camera).sub(En).normalize()}function Xh(n,e){const{camera:t}=n;return e*Math.tan(t.fov*Math.PI/360)*t.aspect*(n.safe.w/n.size.w)}function qS(n){const e={mx:0,my:0,sx:0,sy:0,yaw:0,yawT:0,pit:0,pitT:0};let t=!1,i=0,r=0;const s=l=>{t=!0,i=l.clientX,r=l.clientY,n.classList.add("drag"),n.setPointerCapture(l.pointerId)},a=l=>{t=!1,n.classList.remove("drag"),e.yawT=0,e.pitT=0,l&&l.pointerType!=="mouse"&&(e.mx=0,e.my=0)},o=l=>{e.mx=l.clientX/innerWidth*2-1,e.my=l.clientY/innerHeight*2-1,t&&(e.yawT=Math.max(-.14,Math.min(.14,e.yawT-(l.clientX-i)*.0012)),e.pitT=Math.max(-.05,Math.min(.06,e.pitT+(l.clientY-r)*6e-4)),i=l.clientX,r=l.clientY)};return n.addEventListener("pointerdown",s),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),addEventListener("pointermove",o),{state:e,update(l){const c=1-Math.exp(-l*3);e.sx+=(e.mx-e.sx)*c,e.sy+=(e.my-e.sy)*c;const u=1-Math.exp(-l*(t?8:2));e.yaw+=(e.yawT-e.yaw)*u,e.pit+=(e.pitT-e.pit)*u},dispose(){n.removeEventListener("pointerdown",s),n.removeEventListener("pointerup",a),n.removeEventListener("pointercancel",a),removeEventListener("pointermove",o)}}}const YS="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",$S=`uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uTime; varying vec2 vUv;
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
    }`;function jS(n){const e=new xi(2,2,{samples:us?2:4}),t=new Bh,i=new Ph(-1,1,1,-1,0,1),r=new bt({uniforms:{tDiffuse:{value:e.texture},uRes:{value:new $e(1,1)},uTime:n.uTime},vertexShader:YS,fragmentShader:$S,depthTest:!1,depthWrite:!1});return t.add(new Rt(new Mi(2,2),r)),{setSize(s,a){e.setSize(Math.floor(s*ci),Math.floor(a*ci)),r.uniforms.uRes.value.set(s*ci,a*ci)},render(s,a,o){s.setRenderTarget(e),s.render(a,o),s.setRenderTarget(null),s.render(t,i)},dispose(){e.dispose(),r.dispose()}}}const Cr=`
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
`,qh=`
varying vec3 vN; varying vec3 vW; varying vec3 vL;
void main(){
  vec4 lp = vec4(position, 1.0); vec3 n = normal;
  #ifdef USE_INSTANCING
    lp = instanceMatrix * lp; n = mat3(instanceMatrix) * n;
  #endif
  vec4 wp = modelMatrix * lp;
  vW = wp.xyz; vL = position; vN = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,KS=`varying vec2 vUv; varying vec3 vW;
    void main(){ vUv = uv; vec4 lp = vec4(position,1.0);
      #ifdef USE_INSTANCING
        lp = instanceMatrix * lp;
      #endif
      vec4 wp = modelMatrix * lp; vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,ZS=Cr+`
    uniform vec3 uCol; varying vec2 vUv; varying vec3 vW;
    void main(){
      vec2 q = vUv * 2.0 - 1.0;
      float d = length(q);
      float core = 1.0 - smoothstep(0.55, 0.8, d);
      float soft = 1.0 - smoothstep(0.5, 1.0, d);
      float a = max(core, halftone(soft * 0.85, uDot, 0.7854));
      float far = smoothstep(25.0, 220.0, length(cameraPosition - vW));
      if (a < 0.01) discard;
      gl_FragColor = vec4(mix(uCol, vec3(0.42, 0.46, 0.5), far), a * mix(0.92, 0.55, far));
    }`;function JS(n){const e=new $e(-n.uLight.value.x,-n.uLight.value.z).normalize(),t=new Mi(1,1);t.rotateX(-Math.PI/2);const i=new bt({uniforms:Object.assign({},n,{uCol:{value:new Ve(1317410)}}),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,vertexShader:KS,fragmentShader:ZS});return{dir:e,geometry:t,material:i}}const QS=Cr+`
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
      }`;function il(n,e){const t=Math.hypot(n,e);let i=Ia(n*.02,e*.02,4)*.9+Ia(n*.11+7,e*.11-3,3)*.12;i*=Di(2,40,t)*.9+.1;const r=Di(150,230,-e),s=.72+.28*Di(-160,220,n),a=Math.pow(1-Math.abs(nl(n*.016+3.1,e*.016)),3),o=Math.pow(1-Math.abs(nl(n*.045-2,e*.045+5)),2);return i+=r*s*(a*21+o*6+Ia(n*.03,e*.03,4)*4),i+=Di(120,175,-e)*(1-Di(175,215,-e))*Di(40,150,n)*(Math.pow(o,1.5)*9+2),i}function eE(n){const e=us?300:420,t=us?260:360,i=new Mi(2,1,e,t);i.rotateX(-Math.PI/2);const r=i.attributes.position;for(let a=0;a<r.count;a++){const o=r.getX(a),l=r.getZ(a)+.5,c=Math.sign(o)*Math.pow(Math.abs(o),1.7)*520,u=12-Math.pow(1-l,1.8)*330;r.setXYZ(a,c,il(c,u),u)}i.computeVertexNormals();const s=new bt({uniforms:Object.assign({},n,{uNear:{value:new Ve(13616557)},uFar:{value:new Ve(14538435)},uShadeN:{value:new Ve(1778220)},uShadeF:{value:new Ve(7305863)},uSnow:{value:new Ve(15986402)},uHaze:{value:new Ve(14867920)}}),vertexShader:qh,fragmentShader:QS});return new Rt(i,s)}const tE=Cr+`
      uniform vec3 uBase, uShade, uFar;
      varying vec3 vN; varying vec3 vW; varying vec3 vL;
      void main(){
        vec3 N = normalize(vN);
        float ndl = dot(N, uLight);
        float lit = smoothstep(-0.05, 0.55, ndl);
        float tone = 1.0 - lit;
        tone += (vnoise(vL.xz * 9.0 + vL.y * 5.0) - 0.5) * 0.18;          // 表面斑駁
        tone = clamp(tone, 0.0, 1.0);
        float ink = max(halftone(tone, uDot, 0.7854), hatch(smoothstep(0.45, 1.0, tone), uDot * 0.75, 0.6));
        float dist = length(cameraPosition - vW);
        vec3 shade = mix(uShade, vec3(0.42, 0.47, 0.53), smoothstep(20.0, 220.0, dist));
        vec3 col = mix(mix(uBase, uFar, smoothstep(20.0, 200.0, dist)), shade, ink);
        gl_FragColor = vec4(col, 1.0);
      }`,nE=`
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
      }`,iE="void main(){ gl_FragColor = vec4(0.05, 0.055, 0.07, 1.0); }";function Ou(n){return new bt({uniforms:{uThick:{value:n}},side:Ft,vertexShader:nE,fragmentShader:iE})}function rE(n){const e=n.index?n.toNonIndexed():n.clone(),t=e.attributes.position,i=new Map,r=c=>`${Math.round(t.getX(c)*1e3)}_${Math.round(t.getY(c)*1e3)}_${Math.round(t.getZ(c)*1e3)}`,s=new I,a=new I,o=new I;for(let c=0;c<t.count;c+=3){s.fromBufferAttribute(t,c),a.fromBufferAttribute(t,c+1),o.fromBufferAttribute(t,c+2);const u=a.clone().sub(s).cross(o.clone().sub(s));for(let f=0;f<3;f++){const d=r(c+f);i.has(d)||i.set(d,new I),i.get(d).add(u)}}const l=new Float32Array(t.count*3);for(let c=0;c<t.count;c++){const u=i.get(r(c)).clone().normalize();l.set([u.x,u.y,u.z],c*3)}return e.setAttribute("normal",new Ct(l,3)),e}const sE=[[-1.6,-4.5,.9,0],[-2.75,-6.3,.62,1],[-.55,-4.05,.3,2],[-3.7,-8.8,.55,3],[2.5,-4.15,.55,1],[1.15,-3.85,.26,2],[4.4,-11.5,.7,0],[-5.2,-15.5,.95,2],[7.5,-24,1.05,3],[-9.5,-30,1.25,1],[-1.8,-11,.32,3],[3.4,-17,.4,0],[-6.8,-10.5,.45,1],[10,-38,1.4,2],[-15,-48,1.6,0],[-6.2,-5.2,1,3],[-8.8,-7.5,.7,0],[-12,-13,1.3,2],[-19,-22,1.6,1],[-28,-40,2.2,3],[6.8,-5,.9,2],[9.5,-8.5,.65,3],[13,-14,1.2,0],[21,-26,1.7,1],[30,-44,2.3,2],[5.6,-3.6,.38,1],[-4.8,-3.5,.42,0]];function Bu(n,e,t=.55){const i=new Al(1,n),r=i.attributes.position,s=new I;for(let a=0;a<r.count;a++){s.fromBufferAttribute(r,a);const o=e*13.7;let l=1+.32*Ua(s.x*1.2+o,s.y*1.2,s.z*1.2-o)+.14*Ua(s.x*2.9,s.y*2.9+o,s.z*2.9)+.05*Ua(s.x*7-o,s.y*7,s.z*7);l=l*.82+Math.round(l*4)/4*.18,s.multiplyScalar(l),s.y*=t,s.y<-.18&&(s.y=-.18+(s.y+.18)*.25),r.setXYZ(a,s.x,s.y,s.z)}return i.computeVertexNormals(),i}function zu(n){return new bt({uniforms:Object.assign({},n,{uBase:{value:new Ve(15130056)},uShade:{value:new Ve(1581097)},uFar:{value:new Ve(14538435)}}),vertexShader:qh,fragmentShader:tE})}function oE({uniforms:n,rand:e,shadow:t}){const i=new Fi,r=sE.map(_=>({x:_[0],z:_[1],s:_[2],v:_[3],big:!0}));let s=0;for(;r.length<(us?1300:2100)&&s++<3e4;){const _=-4-Math.pow(e(),.9)*260,p=(e()*2-1)*(Math.abs(_)*1.25+7);if(_>-8&&_<-3.5&&p>-1.3&&p<3.4)continue;const h=(.05+Math.pow(e(),3.4)*.5)*(1+Math.abs(_)/90);r.push({x:p,z:_,s:h,v:Math.floor(e()*4),big:!1})}const a=new dt,o=new Ar,l=new vs;function c(_){l.set((e()-.5)*.25,e()*6.28,(e()-.5)*.25),o.setFromEuler(l);const p=new I(_.s*(1+e()*.45),_.s*(.75+e()*.4),_.s*(.85+e()*.4));return a.clone().compose(new I(_.x,il(_.x,_.z)-_.s*.1,_.z),o,p)}function u(_,p,h,E){const x=new Da(_,p,E.length),T=new Da(rE(_),h,E.length);E.forEach((L,R)=>{const C=c(L);x.setMatrixAt(R,C),T.setMatrixAt(R,C)}),i.add(x,T)}const f=zu(n),d=Ou(.0021);[0,1,2,3].map(_=>Bu(3,_+1,.58)).forEach((_,p)=>{const h=r.filter(E=>E.big&&E.v===p);h.length&&u(_,f,d,h)}),u(Bu(1,7,.5),zu(n),Ou(.0015),r.filter(_=>!_.big));const m=new Da(t.geometry,t.material,r.length),v=Math.atan2(t.dir.x,t.dir.y);return r.forEach((_,p)=>{const h=_.s*2.9,E=_.s*1.75,x=_.x+t.dir.x*_.s*.75,T=_.z+t.dir.y*_.s*.75;o.setFromAxisAngle(new I(0,1,0),v),m.setMatrixAt(p,a.clone().compose(new I(x,il(x,T)+.02,T),o,new I(E,1,h)))}),i.add(m),i}const aE=`
vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857; vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m*m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
vec3 rotAx(vec3 p, vec3 a, float t){ return p*cos(t) + cross(a, p)*sin(t) + a*dot(a, p)*(1.0 - cos(t)); }
vec3 swirl(vec3 p, vec3 c, float k, float r){ float d = acos(clamp(dot(p, c), -1.0, 1.0)); return rotAx(p, c, k * exp(-d*d/(r*r))); }
`,lE=`varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying vec3 vP;
    void main(){ vUv = uv; vP = normalize(position); vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * wp; }`,cE=Cr+aE+`
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
    }`,uE="varying vec3 vNV; varying vec3 vNW; void main(){ vNV = normalize(normalMatrix * normal); vNW = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fE=`uniform vec3 uLe; varying vec3 vNV; varying vec3 vNW;
    void main(){ float i = pow(clamp(0.66 - dot(vNV, vec3(0.0,0.0,1.0)), 0.0, 1.0), 5.0) * 7.0;
      i *= smoothstep(-0.25, 0.5, dot(-vNW, uLe));
      gl_FragColor = vec4(vec3(0.16, 0.52, 0.98) * i, 1.0); }`,Yh=1100,hE=19.6*Math.PI/180,Hu=27.2*Math.PI/180,Gu=Yh*Math.sin(hE),Vu=22*Math.PI/180;function dE({uniforms:n,textures:e}){const t=En.clone().add(new I(.012,Math.sin(Hu),-Math.cos(Hu)).normalize().multiplyScalar(Yh)),r={value:En.clone().sub(t).normalize().clone().applyAxisAngle(new I(1,0,0),.8).applyAxisAngle(new I(0,1,0),-.12).normalize()},s=new Rt(new So(Gu,256,160),new bt({uniforms:Object.assign({},n,{uLe:r,tBRC:{value:e.brc},tDay:{value:e.day},uTex:{value:new $e(1/4096,1/2048)}}),vertexShader:lE,fragmentShader:cE}));s.position.copy(t),s.rotation.set(.08,-Math.PI/2-Vu,.12),s.visible=!1;const a=new Rt(new So(Gu*1.025,120,80),new bt({uniforms:{uLe:r},side:Ft,transparent:!0,blending:mo,depthWrite:!1,vertexShader:uE,fragmentShader:fE}));return a.visible=!1,a.position.copy(t),{earth:s,atmosphere:a,show(){s.visible=a.visible=!0},update(o){s.rotation.y=-Math.PI/2-Vu+o*.0012}}}const pE=`attribute float aS; attribute float aP; uniform float uTime; uniform float uDPR; varying float vA;
      void main(){ vA = 0.6 + 0.4 * sin(uTime * (0.7 + aP * 0.3) + aP * 10.0); gl_PointSize = aS * uDPR; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,mE="varying float vA; void main(){ if (length(gl_PointCoord - 0.5) > 0.5) discard; gl_FragColor = vec4(vec3(0.95, 0.93, 0.86) * vA, 1.0); }",gE=`attribute float aS; uniform float uTime; uniform float uDPR; varying float vA;
      void main(){ vec3 p = position; p.x = mod(p.x + uTime * 0.12 * (0.3 + aS) + 8.0, 16.0) - 8.0; p.y += sin(uTime * 0.3 + aS * 30.0) * 0.15;
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = 0.18 + 0.3 * aS; gl_PointSize = (1.2 + aS * 2.0) * uDPR * (6.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,_E="varying float vA; void main(){ if (length(gl_PointCoord - 0.5) > 0.5) discard; gl_FragColor = vec4(vec3(0.95, 0.9, 0.78) * vA, 1.0); }";function vE({uniforms:n,rand:e}){const i=new Float32Array(24e3),r=new Float32Array(8e3),s=new Float32Array(8e3);for(let o=0;o<8e3;o++){const l=(e()-.5)*3.4,c=.02+e()*.9,u=Math.sqrt(1-c*c);i.set([Math.sin(l)*u*3e3,c*3e3,-Math.cos(l)*u*3e3],o*3),r[o]=Math.pow(e(),7)*2.6+.7,s[o]=e()*6.28}const a=new hn;return a.setAttribute("position",new Ct(i,3)),a.setAttribute("aS",new Ct(r,1)),a.setAttribute("aP",new Ct(s,1)),new zh(a,new bt({uniforms:{uTime:n.uTime,uDPR:{value:ci}},transparent:!0,depthWrite:!1,vertexShader:pE,fragmentShader:mE}))}function xE({uniforms:n,rand:e}){const i=new Float32Array(780),r=new Float32Array(260);for(let a=0;a<260;a++)i.set([(e()-.5)*16,e()*3.2,-3-e()*22],a*3),r[a]=e();const s=new hn;return s.setAttribute("position",new Ct(i,3)),s.setAttribute("aS",new Ct(r,1)),new zh(s,new bt({uniforms:{uTime:n.uTime,uDPR:{value:ci}},transparent:!0,depthWrite:!1,blending:mo,vertexShader:gE,fragmentShader:_E}))}const $h="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",ME=Cr+`uniform sampler2D map; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(map, vUv);
        if (c.a < 0.04) discard;
        float lum = dot(c.rgb, vec3(0.3, 0.59, 0.11));
        float ink = halftone(smoothstep(0.55, 0.12, lum) * 0.5, uDot, 0.7854);
        c.rgb = mix(c.rgb, c.rgb * 0.55, ink * 0.35);
        gl_FragColor = vec4(c.rgb, c.a);
      }`,SE=Cr+`uniform sampler2D map; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(map, vUv);
        if (c.a < 0.03) discard;
        float lum = dot(c.rgb, vec3(0.3, 0.59, 0.11));
        float ink = halftone(smoothstep(0.55, 0.1, lum) * 0.5, uDot * 0.8, 0.7854);
        c.rgb = mix(c.rgb, c.rgb * 0.55, ink * 0.3);
        gl_FragColor = vec4(c.rgb, c.a);
      }`,EE=740/417,yE=6/417,ku={cx:.615,bottom:.885,width:.79},Wu={cx:.5,bottom:.84,width:.9};function bE({uniforms:n,shadow:e}){const t=new Fi,i=new Rt(e.geometry,e.material.clone());i.material.uniforms=Object.assign({},e.material.uniforms,{uCol:{value:new Ve(1053722)}});const r={w:1,h:1};let s=null;return{card:t,shadow:i,place(a){kh(a);const o=a.blend,l={};for(const _ of["cx","bottom","width"])l[_]=o===1?ku[_]:Wu[_]+(ku[_]-Wu[_])*o;const c=Wh(a,l.cx,l.bottom),u=En.clone().addScaledVector(c,-En.y/c.y),f=l.width*2*Xh(a,-u.z),d=f/EE;r.w=f,r.h=d,t.position.set(u.x,-d*yE,u.z),s&&s.scale.set(f,d,1);const m=new $e(-.56,-.83).normalize(),v=new $e(u.x,u.z).addScaledVector(m,f*.2).addScaledVector(e.dir,f*.07);i.position.set(v.x,.03,v.y),i.rotation.y=Math.atan2(m.x,m.y),i.scale.set(f*.5,1,f*.92)},setTexture(a){s=new Rt(new Mi(1,1).translate(0,.5,0),new bt({uniforms:Object.assign({},n,{map:{value:a}}),transparent:!0,vertexShader:$h,fragmentShader:ME})),s.renderOrder=2,s.scale.set(r.w,r.h,1),t.add(s)},faceCamera(a){t.rotation.y=Math.atan2(a.position.x-t.position.x,a.position.z-t.position.z)}}}const Qs={poster:{x:.855,y:.35,w:.13},phone:{x:.83,y:.41,w:.18}},TE=380,AE=[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]];function wE({uniforms:n}){const e=new Fi,t=new I,i=new I,r=new I,s={x0:0,y0:0,x1:0,y1:0};let a=null,o=1300/656,l=1;return{root:e,get loaded(){return!!a},place(c){kh(c);const u=c.blend,f={};for(const v of["x","y","w"])f[v]=u===1?Qs.poster[v]:Qs.phone[v]+(Qs.poster[v]-Qs.phone[v])*u;t.copy(En).addScaledVector(Wh(c,f.x,f.y),TE);const d=new I(0,0,-1).applyQuaternion(c.camera.quaternion),m=t.clone().sub(En).dot(d);l=f.w*2*Xh(c,m),a&&a.scale.set(l,l/o,1)},setTexture(c){o=c.image.width/c.image.height,a=new Rt(new Mi(1,1),new bt({uniforms:Object.assign({},n,{map:{value:c}}),transparent:!0,depthWrite:!1,vertexShader:$h,fragmentShader:SE})),a.renderOrder=3,a.scale.set(l,l/o,1),e.add(a)},update(c,u){a&&(a.position.copy(t).add(i.set(Math.sin(c*.05)*l*.12,Math.sin(c*.09+1)*l*.05,0)),a.quaternion.copy(u.quaternion),a.rotateZ(Math.sin(c*.07)*.035))},screenRect(c){if(!a)return null;c.camera.updateMatrixWorld(),a.updateMatrixWorld(),s.x0=s.y0=1e9,s.x1=s.y1=-1e9;for(const[u,f]of AE){const d=r.set(u,f,0).applyMatrix4(a.matrixWorld).project(c.camera),m=(d.x+1)/2*c.size.w,v=(1-d.y)/2*c.size.h;s.x0=Math.min(s.x0,m),s.x1=Math.max(s.x1,m),s.y0=Math.min(s.y0,v),s.y1=Math.max(s.y1,v)}return s}}}const RE=""+new URL("earth_brc-BBkBGQvf.jpg",import.meta.url).href,CE=""+new URL("earth_day-DkcerPt2.jpg",import.meta.url).href,PE=""+new URL("car-rvOrZ8Ot.png",import.meta.url).href,LE=""+new URL("satellite-C2RYf-lH.webp",import.meta.url).href,DE=new I(0,1,0);function UE(n,{onReady:e,onFrame:t,wantSatRect:i}={}){const r=GS(n),s=VS(),a=kS(743),o=new Bh,l=WS(),{camera:c}=l,u=new zS,f=r.capabilities.getMaxAnisotropy();let d=0,m=!1;const v=()=>{++d>=3&&!m&&(h.show(),e==null||e())},_=re=>u.load(re,U=>{U.anisotropy=f,v()},void 0,v),p=JS(s);o.add(eE(s)),o.add(oE({uniforms:s,rand:a,shadow:p}));const h=dE({uniforms:s,textures:{brc:_(RE),day:_(CE)}});o.add(h.earth,h.atmosphere),o.add(vE({uniforms:s,rand:a})),o.add(xE({uniforms:s,rand:a}));const E=bE({uniforms:s,shadow:p});o.add(E.card,E.shadow),u.load(PE,re=>{re.anisotropy=f,re.minFilter=ki,E.setTexture(re),v()},void 0,v);const x=wE({uniforms:s});o.add(x.root),u.load(LE,re=>{re.anisotropy=f,re.minFilter=ki,x.setTexture(re)});const T=jS(s),L=qS(n),R=L.state;function C(re,U){XS(l,re,U),E.place(l),x.place(l),r.setSize(re,U,!1),T.setSize(re,U)}const K=new HS,y={sx:0,sy:0,satRect:null};let w=0,W=!0;function te(){w=requestAnimationFrame(te);const re=Math.min(K.getDelta(),.05),U=K.elapsedTime;s.uTime.value=U,L.update(re),c.position.set(En.x+R.sx*.32+Math.sin(U*.23)*.04,En.y-R.sy*.12+Math.sin(U*.31)*.02,En.z),c.position.applyAxisAngle(DE,R.yaw*.6),c.rotation.set(l.pitch+R.pit-R.sy*.006,R.yaw-R.sx*.012,0,"YXZ"),x.update(U,c),E.faceCamera(c),h.update(U),y.sx=R.sx,y.sy=R.sy,y.satRect=x.loaded&&(i!=null&&i())?x.screenRect(l):null,t==null||t(y),W&&T.render(r,o,c)}return{resize:C,start(){w||te()},setVisible(re){W=re},dispose(){m=!0,cancelAnimationFrame(w),w=0,L.dispose(),o.traverse(re=>{var U,V;if((U=re.geometry)==null||U.dispose(),re.material){for(const j of Object.values(re.material.uniforms??{}))(V=j.value)!=null&&V.isTexture&&j.value.dispose();re.material.dispose()}}),T.dispose(),r.dispose()}}}const IE={class:"credit"},NE=["href"],FE={key:0,id:"err"},OE={__name:"MoonStage",setup(n){const{aboutOpen:e,setAbout:t}=Xi(),i=Yt(null),r=Yt(null),s=Yt(null),a=Yt(null),o=Yt(!1),l=Yt(!1);let c=null,u=null,f=0,d=null;function m(){Cm();const v=Math.max(1,i.value.clientWidth),_=Math.max(1,i.value.clientHeight);Pm(v,_),c==null||c.resize(v,_),!po.side&&e.value&&t(!1)}return ps(()=>{d=Lm();try{c=UE(r.value,{onReady:()=>{o.value=!0},wantSatRect:()=>po.hoverable,onFrame:({sx:v,sy:_,satRect:p})=>{var h,E;(h=s.value)==null||h.setParallax(v,_),p&&((E=a.value)==null||E.update(p))}})}catch(v){l.value=!0,console.error(v)}addEventListener("resize",m),m(),c==null||c.start(),u=new IntersectionObserver(([v])=>c==null?void 0:c.setVisible(v.isIntersecting)),u.observe(i.value),f=setTimeout(()=>{o.value=!0},4e3)}),Lo(()=>{removeEventListener("resize",m),clearTimeout(f),u==null||u.disconnect(),d==null||d(),c==null||c.dispose()}),(v,_)=>(lt(),ft("div",{id:"stage",ref_key:"stageEl",ref:i},[de("canvas",{id:"gl",ref_key:"canvasEl",ref:r},null,512),_t(eg,{ref_key:"heroRef",ref:s},null,512),_t(Ag),de("div",IE,[It(je(Ae(en).credit.label)+" ",1),de("a",{href:Ae(en).credit.url},je(Ae(en).credit.name),9,NE),It(" "+je(Ae(en).credit.license),1)]),de("div",{id:"veil",class:hs({lifted:o.value})},null,2),l.value?(lt(),ft("div",FE,"這個瀏覽器無法啟用 WebGL，3D 場景無法顯示。")):jf("",!0),_t(rg,{ref_key:"lockRef",ref:a},null,512),_t(lg)],512))}},BE=Qn(OE,[["__scopeId","data-v-3b30bbdb"]]),jh=""+new URL("shop-map-Dh3NVWj1.webp",import.meta.url).href,zE={class:"ab-inner"},HE={id:"ab-title",class:"ab-name"},GE={class:"ab-sub"},VE={class:"ab-text"},kE={class:"ab-lead"},WE={class:"ab-points"},XE={class:"ab-card"},qE={class:"ab-info"},YE={class:"ab-map"},$E=["src","alt"],jE={__name:"AboutPanel",setup(n){const{els:e,closeAbout:t,openLightbox:i}=Xi(),r=s=>String(s).padStart(2,"0");return(s,a)=>(lt(),ft("aside",{id:"about",ref:o=>Ae(e).about=o,"aria-labelledby":"ab-title"},[de("button",{ref:o=>Ae(e).aboutClose=o,type:"button",class:"ab-close","aria-label":"本店紹介を閉じる",onClick:a[0]||(a[0]=(...o)=>Ae(t)&&Ae(t)(...o))},"× CLOSE",512),de("div",zE,[a[5]||(a[5]=de("div",{class:"ab-kicker"},[de("span",null,"ABOUT THE SHOP"),de("span",null,"本店紹介")],-1)),de("h2",HE,[It(je(Ae(qt).name),1),a[2]||(a[2]=de("b",null,".",-1))]),de("div",GE,[It(je(Ae(qt).nameEn)+" — ",1),de("em",null,je(Ae(qt).established),1)]),de("div",VE,[de("p",kE,je(Ae(qt).lead),1),de("p",null,je(Ae(qt).description),1),de("ol",WE,[(lt(!0),ft(gt,null,rs(Ae(qt).points,(o,l)=>(lt(),ft("li",{key:l},[de("span",null,je(r(l+1)),1),It(je(o),1)]))),128))])]),de("div",XE,[de("dl",qE,[(lt(!0),ft(gt,null,rs(Ae(qt).info,o=>(lt(),ft(gt,{key:o.label},[de("dt",null,je(o.label),1),de("dd",null,je(o.value),1)],64))),128))]),de("figure",YE,[de("button",{ref:o=>Ae(e).mapBtn=o,type:"button",class:"ab-zoom","aria-label":"地図を拡大",onClick:a[1]||(a[1]=(...o)=>Ae(i)&&Ae(i)(...o))},[de("img",{src:Ae(jh),alt:Ae(qt).map.alt,loading:"lazy",width:"1500",height:"778"},null,8,$E),a[3]||(a[3]=de("span",null,"拡大 ⤢",-1))],512),de("figcaption",null,[a[4]||(a[4]=de("b",null,"MAP",-1)),It(" "+je(Ae(qt).map.caption),1)])])])])],512))}},KE=Qn(jE,[["__scopeId","data-v-8d0a5f1e"]]),ZE=["src","alt"],JE={__name:"MapLightbox",setup(n){const{lightboxOpen:e,els:t,closeLightbox:i}=Xi();return(r,s)=>qd((lt(),ft("div",{id:"lightbox",onClick:s[0]||(s[0]=(...a)=>Ae(i)&&Ae(i)(...a))},[de("button",{ref:a=>Ae(t).lightboxClose=a,type:"button",class:"lb-close","aria-label":"閉じる"},"×",512),de("img",{src:Ae(jh),alt:Ae(qt).map.alt},null,8,ZE)],512)),[[sm,Ae(e)]])}},QE=Qn(JE,[["__scopeId","data-v-3599edd6"]]);function ey(){const{menuOpen:n,aboutOpen:e,lightboxOpen:t,els:i,setMenu:r,closeAbout:s,closeLightbox:a}=Xi();function o(l){if(l.key==="Escape"){t.value?a():n.value?r(!1):e.value&&s();return}if(l.key==="Tab"&&n.value&&i.menu){const c=[i.menuBtn,...i.menu.querySelectorAll("a")],u=c.indexOf(document.activeElement);l.shiftKey&&u<=0?(l.preventDefault(),c[c.length-1].focus()):!l.shiftKey&&u===c.length-1&&(l.preventDefault(),c[0].focus())}}ps(()=>addEventListener("keydown",o)),Lo(()=>removeEventListener("keydown",o))}const ty={__name:"App",setup(n){return ey(),(e,t)=>(lt(),ft(gt,null,[_t(Xm),_t(BE),_t(KE),_t(QE)],64))}};Tm(ty).mount("#app");

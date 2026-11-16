(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _c(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const gt={},cr=[],Qn=()=>{},$d=()=>!1,ya=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ma=t=>t.startsWith("onUpdate:"),Ft=Object.assign,vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rm=Object.prototype.hasOwnProperty,lt=(t,e)=>rm.call(t,e),qe=Array.isArray,Ni=t=>eo(t)==="[object Map]",ta=t=>eo(t)==="[object Set]",Yc=t=>eo(t)==="[object Date]",Je=t=>typeof t=="function",Et=t=>typeof t=="string",ei=t=>typeof t=="symbol",ht=t=>t!==null&&typeof t=="object",qd=t=>(ht(t)||Je(t))&&Je(t.then)&&Je(t.catch),Yd=Object.prototype.toString,eo=t=>Yd.call(t),sm=t=>eo(t).slice(8,-1),jd=t=>eo(t)==="[object Object]",xc=t=>Et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rs=_c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},om=/-\w/g,zn=Sa(t=>t.replace(om,e=>e.slice(1).toUpperCase())),am=/\B([A-Z])/g,yr=Sa(t=>t.replace(am,"-$1").toLowerCase()),Kd=Sa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Va=Sa(t=>t?`on${Kd(t)}`:""),Zn=(t,e)=>!Object.is(t,e),ka=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Zd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},lm=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jc;const Ea=()=>jc||(jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zr(t){if(qe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Et(i)?dm(i):Zr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(t)||ht(t))return t}const cm=/;(?![^(]*\))/g,um=/:([^]+)/,fm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function dm(t){const e={};return t.replace(fm,n=>n.startsWith("/*")?"":n).split(cm).forEach(n=>{if(n){const i=n.split(um);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function to(t){let e="";if(Et(t))e=t;else if(qe(t))for(let n=0;n<t.length;n++){const i=to(t[n]);i&&(e+=i+" ")}else if(ht(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hm="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",pm=_c(hm);function Jd(t){return!!t||t===""}function mm(t,e,n){if(t.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<t.length;r++)i=ba(t[r],e[r],n);return i}function Kc(t,e,n){if(t.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of t){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&ba(s,i[a],n)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function gm(t,e,n){let i=Ni(t),r=Ni(e);if(i||r||(i=ta(t),r=ta(e),i||r))return i&&r?Kc(t,e,n):!1;const s=Object.keys(t).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in t){const l=t.hasOwnProperty(a),u=e.hasOwnProperty(a);if(l&&!u||!l&&u||!ba(t[a],e[a],n))return!1}return String(t)===String(e)}function Zc(t,e,n,i){n||(n=[new Map,new Map]);const[r,s]=n;if(r.has(t)||s.has(e))return r.get(t)===e&&s.get(e)===t;r.set(t,e),s.set(e,t);const o=i(t,e,n);return r.delete(t),s.delete(e),o}function ba(t,e,n){if(t===e)return!0;let i=Yc(t),r=Yc(e);return i||r?i&&r?t.getTime()===e.getTime():!1:(i=ei(t),r=ei(e),i||r?t===e:(i=qe(t),r=qe(e),i||r?i&&r?Zc(t,e,n,mm):!1:(i=ht(t),r=ht(e),i||r?!i||!r?!1:Zc(t,e,n,gm):String(t)===String(e))))}const Qd=t=>!!(t&&t.__v_isRef===!0),at=t=>Et(t)?t:t==null?"":qe(t)||ht(t)&&(t.toString===Yd||!Je(t.toString))?Qd(t)?at(t.value):JSON.stringify(t,eh,2):String(t),eh=(t,e)=>Qd(e)?eh(t,e.value):Ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Wa(i,s)+" =>"]=r,n),{})}:ta(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wa(n))}:ei(e)?Wa(e):ht(e)&&!qe(e)&&!jd(e)?String(e):e,Wa=(t,e="")=>{var n;return ei(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class _m{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&zt&&(zt.active?(this.parent=zt,this.index=(zt.scopes||(zt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){++this._on===1&&(this.prevScope=zt,zt=this)}off(){if(this._on>0&&--this._on===0){if(zt===this)zt=this.prevScope;else{let e=zt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,i=r.length;n<i;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function vm(){return zt}let mt;const Xa=new WeakSet;class th{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&(zt.active?zt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xa.has(this)&&(Xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ih(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jc(this),rh(this);const e=mt,n=Hn;mt=this,Hn=!0;try{return this.fn()}finally{sh(this),mt=e,Hn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Sc(e);this.deps=this.depsTail=void 0,Jc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vl(this)&&this.run()}get dirty(){return Vl(this)}}let nh=0,Cs,Ls;function ih(t,e=!1){if(t.flags|=8,e){t.next=Ls,Ls=t;return}t.next=Cs,Cs=t}function yc(){nh++}function Mc(){if(--nh>0)return;if(Ls){let e=Ls;for(Ls=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Cs;){let e=Cs;for(Cs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function rh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sh(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Sc(i),xm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Vl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(oh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function oh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Gs)||(t.globalVersion=Gs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Vl(t))))return;t.flags|=2;const e=t.dep,n=mt,i=Hn;mt=t,Hn=!0;try{rh(t);const r=t.fn(t._value);(e.version===0||Zn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{mt=n,Hn=i,sh(t),t.flags&=-3}}function Sc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Sc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function xm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Hn=!0;const ah=[];function ti(){ah.push(Hn),Hn=!1}function ni(){const t=ah.pop();Hn=t===void 0?!0:t}function Jc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=mt;mt=void 0;try{e()}finally{mt=n}}}let Gs=0;class ym{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ec{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!mt||!Hn||mt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==mt)n=this.activeLink=new ym(mt,this),mt.deps?(n.prevDep=mt.depsTail,mt.depsTail.nextDep=n,mt.depsTail=n):mt.deps=mt.depsTail=n,lh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=mt.depsTail,n.nextDep=void 0,mt.depsTail.nextDep=n,mt.depsTail=n,mt.deps===n&&(mt.deps=i)}return n}trigger(e){this.version++,Gs++,this.notify(e)}notify(e){yc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Mc()}}}function lh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)lh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const kl=new WeakMap,dr=Symbol(""),Wl=Symbol(""),Vs=Symbol("");function jt(t,e,n){if(Hn&&mt){let i=kl.get(t);i||kl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Ec),r.map=i,r.key=n),r.track()}}function gi(t,e,n,i,r,s){const o=kl.get(t);if(!o){Gs++;return}const a=l=>{l&&l.trigger()};if(yc(),e==="clear")o.forEach(a);else{const l=qe(t),u=l&&xc(n);if(l&&n==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===Vs||!ei(h)&&h>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Vs)),e){case"add":l?u&&a(o.get("length")):(a(o.get(dr)),Ni(t)&&a(o.get(Wl)));break;case"delete":l||(a(o.get(dr)),Ni(t)&&a(o.get(Wl)));break;case"set":Ni(t)&&a(o.get(dr));break}}Mc()}function Sr(t){const e=ft(t);return e===t||(jt(e,"iterate",Vs),Rn(t))?e:ii(t)?Oi(t)?e.map(n=>Gi(Cn(n))):e.map(Gi):e.map(Cn)}function Ta(t){return jt(t=ft(t),"iterate",Vs),t}function qn(t,e){return ii(t)?Gi(Oi(t)?Cn(e):e):Cn(e)}const Mm={__proto__:null,[Symbol.iterator](){return $a(this,Symbol.iterator,t=>qn(this,t))},concat(...t){return Sr(this).concat(...t.map(e=>qe(e)?Sr(e):e))},entries(){return $a(this,"entries",t=>(t[1]=qn(this,t[1]),t))},every(t,e){return oi(this,"every",t,e,void 0,arguments)},filter(t,e){return oi(this,"filter",t,e,n=>n.map(i=>qn(this,i)),arguments)},find(t,e){return oi(this,"find",t,e,n=>qn(this,n),arguments)},findIndex(t,e){return oi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return oi(this,"findLast",t,e,n=>qn(this,n),arguments)},findLastIndex(t,e){return oi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return oi(this,"forEach",t,e,void 0,arguments)},includes(...t){return qa(this,"includes",t)},indexOf(...t){return qa(this,"indexOf",t)},join(t){return Sr(this).join(t)},lastIndexOf(...t){return qa(this,"lastIndexOf",t)},map(t,e){return oi(this,"map",t,e,void 0,arguments)},pop(){return ps(this,"pop")},push(...t){return ps(this,"push",t)},reduce(t,...e){return eu(this,"reduce",t,e)},reduceRight(t,...e){return eu(this,"reduceRight",t,e)},shift(){return ps(this,"shift")},some(t,e){return oi(this,"some",t,e,void 0,arguments)},splice(...t){return ps(this,"splice",t)},toReversed(){return Sr(this).toReversed()},toSorted(t){return Sr(this).toSorted(t)},toSpliced(...t){return Sr(this).toSpliced(...t)},unshift(...t){return ps(this,"unshift",t)},values(){return $a(this,"values",t=>qn(this,t))}};function $a(t,e,n){const i=Ta(t),r=i[e],s=r.call(i);if(i!==t&&!Rn(t)){if(s[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(s));return o.next=()=>Qc(s.next(),n),r!==ch[e]&&Object.defineProperties(o,{return:{get(){const a=s.return;return typeof a=="function"?a.bind(s):a}},throw:{get(){const a=s.throw;return typeof a=="function"?a.bind(s):a}}}),o}s._next=s.next,s.next=()=>Qc(s._next(),n)}return s}function Qc(t,e){return t.done||(t.value=e(t.value)),t}const ch=Array.prototype;function oi(t,e,n,i,r,s){const o=Ta(t),a=o!==t&&!Rn(t),l=o[e];if(l!==ch[e]){const f=l.apply(t,s);return a?Cn(f):f}let u=n;o!==t&&(a?u=function(f,h){return n.call(this,qn(t,f),h,t)}:n.length>2&&(u=function(f,h){return n.call(this,f,h,t)}));const c=l.call(o,u,i);return a&&r?r(c):c}function eu(t,e,n,i){const r=Ta(t),s=r!==t&&!Rn(t);let o=n,a=!1;r!==t&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=qn(t,u)),n.call(this,u,qn(t,c),f,t)}):n.length>3&&(o=function(u,c,f){return n.call(this,u,c,f,t)}));const l=r[e](o,...i);return a?qn(t,l):l}function qa(t,e,n){const i=ft(t);jt(i,"iterate",Vs);const r=i[e](...n);return(r===-1||r===!1)&&Ac(n[0])?(n[0]=ft(n[0]),i[e](...n)):r}function ps(t,e,n=[]){ti(),yc();const i=ft(t)[e].apply(t,n);return Mc(),ni(),i}const Sm=_c("__proto__,__v_isRef,__isVue"),uh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ei));function Em(t){ei(t)||(t=String(t));const e=ft(this);return jt(e,"has",t),e.hasOwnProperty(t)}class fh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Im:mh:s?ph:hh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!r){let l;if(o&&(l=Mm[n]))return l;if(n==="hasOwnProperty")return Em}const a=Reflect.get(e,n,Jt(e)?e:i);if((ei(n)?uh.has(n):Sm(n))||(r||jt(e,"get",n),s))return a;if(Jt(a)){const l=o&&xc(n)?a:a.value;return r&&ht(l)?hr(l):l}return ht(a)?r?hr(a):Aa(a):a}}class dh extends fh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=qe(e)&&xc(n);if(!this._isShallow){const u=ii(s);if(!Rn(i)&&!ii(i)&&(s=ft(s),i=ft(i)),!o&&Jt(s)&&!Jt(i))return u||(s.value=i),!0}const a=o?Number(n)<e.length:lt(e,n),l=Reflect.set(e,n,i,Jt(e)?e:r);return e===ft(r)&&l&&(a?Zn(i,s)&&gi(e,"set",n,i):gi(e,"add",n,i)),l}deleteProperty(e,n){const i=lt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&gi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!ei(n)||!uh.has(n))&&jt(e,"has",n),i}ownKeys(e){return jt(e,"iterate",qe(e)?"length":dr),Reflect.ownKeys(e)}}class bm extends fh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Tm=new dh,Am=new bm,wm=new dh(!0);const Xl=t=>t,fo=t=>Reflect.getPrototypeOf(t);function Rm(t,e,n){return function(...i){const r=this.__v_raw,s=ft(r),o=Ni(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...i),c=n?Xl:e?Gi:Cn;return!e&&jt(s,"iterate",l?Wl:dr),Ft(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function ho(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cm(t,e){const n={get(r){const s=this.__v_raw,o=ft(s),a=ft(r);t||(Zn(r,a)&&jt(o,"get",r),jt(o,"get",a));const{has:l}=fo(o),u=e?Xl:t?Gi:Cn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&jt(ft(r),"iterate",dr),r.size},has(r){const s=this.__v_raw,o=ft(s),a=ft(r);return t||(Zn(r,a)&&jt(o,"has",r),jt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ft(a),u=e?Xl:t?Gi:Cn;return!t&&jt(l,"iterate",dr),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Ft(n,t?{add:ho("add"),set:ho("set"),delete:ho("delete"),clear:ho("clear")}:{add(r){const s=ft(this),o=fo(s),a=ft(r),l=!e&&!Rn(r)&&!ii(r)?a:r;return o.has.call(s,l)||Zn(r,l)&&o.has.call(s,r)||Zn(a,l)&&o.has.call(s,a)||(s.add(l),gi(s,"add",l,l)),this},set(r,s){!e&&!Rn(s)&&!ii(s)&&(s=ft(s));const o=ft(this),{has:a,get:l}=fo(o);let u=a.call(o,r);u||(r=ft(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?Zn(s,c)&&gi(o,"set",r,s):gi(o,"add",r,s),this},delete(r){const s=ft(this),{has:o,get:a}=fo(s);let l=o.call(s,r);l||(r=ft(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&gi(s,"delete",r,void 0),u},clear(){const r=ft(this),s=r.size!==0,o=r.clear();return s&&gi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Rm(r,t,e)}),n}function bc(t,e){const n=Cm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_isShallow"?e:r==="__v_raw"?i:Reflect.get(lt(n,r)&&r in i?n:i,r,s)}const Lm={get:bc(!1,!1)},Pm={get:bc(!1,!0)},Dm={get:bc(!0,!1)};const hh=new WeakMap,ph=new WeakMap,mh=new WeakMap,Im=new WeakMap;function Um(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Aa(t){return ii(t)?t:Tc(t,!1,Tm,Lm,hh)}function Nm(t){return Tc(t,!1,wm,Pm,ph)}function hr(t){return Tc(t,!0,Am,Dm,mh)}function Tc(t,e,n,i,r){if(!ht(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const s=r.get(t);if(s)return s;const o=Um(sm(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Oi(t){return ii(t)?Oi(t.__v_raw):!!(t&&t.__v_isReactive)}function ii(t){return!!(t&&t.__v_isReadonly)}function Rn(t){return!!(t&&t.__v_isShallow)}function Ac(t){return t?!!t.__v_raw:!1}function ft(t){const e=t&&t.__v_raw;return e?ft(e):t}function Om(t){return!lt(t,"__v_skip")&&Object.isExtensible(t)&&Zd(t,"__v_skip",!0),t}const Cn=t=>ht(t)?Aa(t):t,Gi=t=>ht(t)?hr(t):t;function Jt(t){return t?t.__v_isRef===!0:!1}function fn(t){return Fm(t,!1)}function Fm(t,e){return Jt(t)?t:new Bm(t,e)}class Bm{constructor(e,n){this.dep=new Ec,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ft(e),this._value=n?e:Cn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Rn(e)||ii(e);e=i?e:ft(e),Zn(e,n)&&(this._rawValue=e,this._value=i?e:Cn(e),this.dep.trigger())}}function je(t){return Jt(t)?t.value:t}const zm={get:(t,e,n)=>e==="__v_raw"?t:je(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Jt(r)&&!Jt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function gh(t){return Oi(t)?t:new Proxy(t,zm)}class Hm{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ec(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&mt!==this)return ih(this,!0),!0}get value(){const e=this.dep.track();return oh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gm(t,e,n=!1){let i,r;return Je(t)?i=t:(i=t.get,r=t.set),new Hm(i,r,n)}const po={},na=new WeakMap;let ir;function Vm(t,e=!1,n=ir){if(n){let i=na.get(n);i||na.set(n,i=[]),i.push(t)}}function km(t,e,n=gt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,u=E=>r?E:Rn(E)||r===!1||r===0?Pi(E,1):Pi(E);let c,f,h,d,v=!1,_=!1;if(Jt(t)?(f=()=>t.value,v=Rn(t)):Oi(t)?(f=()=>u(t),v=!0):qe(t)?(_=!0,v=t.some(E=>Oi(E)||Rn(E)),f=()=>t.map(E=>{if(Jt(E))return E.value;if(Oi(E))return u(E);if(Je(E))return l?l(E,2):E()})):Je(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){ti();try{h()}finally{ni()}}const E=ir;ir=c;try{return l?l(t,3,[d]):t(d)}finally{ir=E}}:f=Qn,e&&r){const E=f,D=r===!0?1/0:r;f=()=>Pi(E(),D)}const g=vm(),p=()=>{c.stop(),g&&g.active&&vc(g.effects,c)};if(s&&e){const E=e;e=(...D)=>{try{return E(...D)}finally{p()}}}let M=_?new Array(t.length).fill(po):po;const x=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(e){const D=c.run();if(E||r||v||(_?D.some((P,R)=>Zn(P,M[R])):Zn(D,M))){const P=ir;ti();try{h&&h(),ir=c;const R=[D,M===po?void 0:_&&M[0]===po?[]:M,d];M=D,l?l(e,3,R):e(...R)}finally{ir=P,ni()}}}else c.run()};return a&&a(x),c=new th(f),c.scheduler=o?()=>o(x,!1):x,d=E=>Vm(E,!1,c),h=c.onStop=()=>{const E=na.get(c);if(E){if(l)l(E,4);else for(const D of E)D();na.delete(c)}},e?i?x(!0):M=c.run():o?o(x.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function Pi(t,e=1/0,n){if(e<=0||!ht(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Jt(t))Pi(t.value,e,n);else if(qe(t))for(let i=0;i<t.length;i++)Pi(t[i],e,n);else if(ta(t)||Ni(t))t.forEach(i=>{Pi(i,e,n)});else if(jd(t)){for(const i in t)Pi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Pi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(t,e,n,i){try{return i?t(...i):t()}catch(r){wa(r,e,n)}}function Vn(t,e,n,i){if(Je(t)){const r=no(t,e,n,i);return r&&qd(r)&&r.catch(s=>{wa(s,e,n,void 0,!0)}),r}if(qe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Vn(t[s],e,n,i));return r}}function wa(t,e,n,i=!0,r=!1){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||gt;if(e){let l=e.parent;const u=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f&&!l.isUnmounted&&(!r||l.scope.active)){for(let h=0;h<f.length;h++)if(f[h](t,u,c)===!1)return}l=l.parent}if(o){ti(),no(o,null,10,[t,u,c]),ni();return}}Wm(t,n,s,i,a)}function Wm(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const ln=[];let Nn=-1;const Yn=[];let Ci=null,Hr=0;const _h=Promise.resolve();let ia=null;function Xm(t){const e=ia||_h;return t?e.then(this?t.bind(this):t):e}function $m(t){let e=Nn+1,n=ln.length;for(;e<n;){const i=e+n>>>1,r=ln[i],s=ks(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function wc(t){if(!(t.flags&1)){const e=ks(t),n=ln[ln.length-1];!n||!(t.flags&2)&&e>=ks(n)?ln.push(t):ln.splice($m(e),0,t),t.flags|=1,vh()}}function vh(){ia||(ia=_h.then(Mh))}function qm(t){if(!qe(t))Ci&&t.id===-1?Ci.splice(Hr+1,0,t):t.flags&1||(Yn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Yn.push(t[e]);vh()}function xh(t,e,n,i=Nn+1){for(;i<ln.length;i++){const r=ln[i];if(r&&r.flags&2){if(t&&r.id!==t.uid||e!==void 0&&!(r.id>=e))continue;ln.splice(i,1),i=t?i-1:Nn,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function yh(t,e,n=0){if(Yn.length){let i=Yn,r=0;if(e){i=[];for(let o=0;o<Yn.length;o++){const a=Yn[o];(a.i!==void 0?!a.i||a.i.uid<n:e.has(a))?Yn[r++]=a:i.push(a)}}const s=[...new Set(i)].sort((o,a)=>ks(o)-ks(a));if(Yn.length=r,Ci){for(let o=0;o<s.length;o++)Ci.push(s[o]);return}for(Ci=s,Hr=0;Hr<Ci.length;Hr++){const o=Ci[Hr];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Ci=null,Hr=0}}let Ya=!1;function Ym(t,e){if(Ya){t();return}const n=e===void 0?void 0:new Set(Yn);t(),Ya=!0;try{xh(void 0,e),yh(void 0,n,e)}finally{Ya=!1}}const ks=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mh(t){try{for(Nn=0;Nn<ln.length;Nn++){const e=ln[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),no(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<ln.length;Nn++){const e=ln[Nn];e&&(e.flags&=-2)}Nn=-1,ln.length=0,yh(),ia=null,(ln.length||Yn.length)&&Mh()}}let Jn=null,Sh=null;function ra(t){const e=Jn;return Jn=t,Sh=t&&t.type.__scopeId||null,e}function jm(t,e=Jn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&fu(-1);const s=ra(e),o=pr.length;let a;try{a=t(...r)}finally{for(let l=pr.length;l>o;l--)Xh();ra(s),i._d&&fu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ji(t,e,n,i){let r=t;if(i==="beforeMount")t._mount=t;else if(i==="beforeUpdate"){const a=e&&e._mount;a&&(a._latest=t,t._mount=a)}else if(i==="mounted"){const a=t._latest;t._mount=t._latest=void 0,a&&(r=a,a._mount=void 0)}const s=r.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){let l=s[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=Ft({},l,{oldValue:void 0}));let u=l.dir[i];u&&(ti(),Vn(u,n,8,[t.el,l,r,e]),ni())}}function Km(t,e){if(cn){let n=cn.provides;const i=cn.parent&&cn.parent.provides;i===n&&(n=cn.provides=Object.create(i)),n[t]=e}}function Yo(t,e,n=!1){const i=jg();if(i||Xr){let r=Xr?Xr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Je(e)?e.call(i&&i.proxy):e}}const Zm=Symbol.for("v-scx"),Jm=()=>Yo(Zm);function Ps(t,e,n){return Eh(t,e,n)}function Eh(t,e,n=gt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Ft({},n),l=e&&i||!e&&s!=="post";let u;if(Ys){if(s==="sync"){const d=Jm();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Qn,d.resume=Qn,d.pause=Qn,d}}const c=cn;a.call=(d,v,_)=>Vn(d,c,v,_);let f=!1;s==="post"?a.scheduler=d=>{d.i=c,nn(d,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,v)=>{v?d():wc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=km(t,e,a);return Ys&&(u?u.push(h):l&&h()),h}function Qm(t,e,n){const i=this.proxy,r=Et(t)?t.includes(".")?bh(i,t):()=>i[t]:t.bind(i,i);let s;Je(e)?s=e:(s=e.handler,n=e);const o=ro(this),a=Eh(r,s.bind(i),n);return o(),a}function bh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const eg=Symbol("_vte"),Ra=t=>t.__isTeleport,ja=Symbol("_leaveCb");function tg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==kn){e=n;break}}return e}function Th(t){if(!Rc(t))return Ra(t.type)&&t.children?tg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Je(n.default))return n.default()}}function Ds(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Ds(Ra(n.type)&&Th(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const i=n.isHydrating?n.pendingBranch:n.activeBranch;i&&Ds(i,e.clone(i))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===Ct&&qe(t.children)){const n=Dh(t.children,!1);n&&Ds(n,e)}}function $l(t){if(t.component)return $l(t.component.subTree);if(t.type===Ct){const e=qe(t.children)&&Dh(t.children,!1);return e?$l(e):void 0}if(t.type!==kn)return t}function Ah(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function tu(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const sa=new WeakMap;function Is(t,e,n,i,r=!1){if(qe(t)){t.forEach((_,g)=>Is(_,e&&(qe(e)?e[g]:e),n,i,r));return}if(Us(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Is(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Dc(i.component):i.el,o=r?null:s,{i:a,r:l}=t,u=e&&e.r,c=a.refs===gt?a.refs={}:a.refs,f=a.setupState,h=ft(f),d=f===gt?$d:_=>tu(c,_)?!1:lt(h,_),v=(_,g)=>!(g&&tu(c,g));if(u!=null&&u!==l){if(nu(e),Et(u))c[u]=null,d(u)&&(f[u]=null);else if(Jt(u)){const _=e;v(u,_.k)&&(u.value=null),_.k&&(c[_.k]=null)}}if(Je(l))no(l,a,12,[o,c]);else{const _=Et(l),g=Jt(l);if(_||g){const p=()=>{if(t.f){const M=_?d(l)?f[l]:c[l]:v()||!t.k?l.value:c[t.k];if(r)qe(M)&&vc(M,s);else if(qe(M))M.includes(s)||M.push(s);else if(_)c[l]=[s],d(l)&&(f[l]=c[l]);else{const x=[s];v(l,t.k)&&(l.value=x),t.k&&(c[t.k]=x)}}else _?(c[l]=o,d(l)&&(f[l]=o)):g&&(v(l,t.k)&&(l.value=o),t.k&&(c[t.k]=o))};if(o){const M=()=>{p(),sa.delete(t)};M.id=-1,sa.set(t,M),nn(M,n)}else nu(t),p()}}}function nu(t){const e=sa.get(t);e&&(e.flags|=8,sa.delete(t))}Ea().requestIdleCallback;Ea().cancelIdleCallback;const Us=t=>!!t.type.__asyncLoader,Rc=t=>t.type.__isKeepAlive;function ng(t,e){wh(t,"a",e)}function ig(t,e){wh(t,"da",e)}function wh(t,e,n=cn){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ws(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Rc(r.parent.vnode)&&rg(i,e,n,r),r=r.parent}}function rg(t,e,n,i){const r=Ws(e,t,i,!0),s=Ws("um",()=>vc(i[e],r),n);s.flags=16}function Ws(t,e,n=cn,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{ti();const a=ro(n),l=Vn(e,n,t,o);return a(),ni(),l});return i?r.unshift(s):r.push(s),s}}const yi=t=>(e,n=cn)=>{(!Ys||t==="sp")&&Ws(t,(...i)=>e(...i),n)},sg=yi("bm"),io=yi("m"),og=yi("bu"),ag=yi("u"),Ca=yi("bum"),lg=yi("um"),cg=yi("sp"),ug=yi("rtg"),fg=yi("rtc");function dg(t,e=cn){Ws("ec",t,e)}const hg=Symbol.for("v-ndc");function Xs(t,e,n,i){let r;const s=n,o=qe(t);if(o||Et(t)){const a=o&&Oi(t);let l=!1,u=!1;a&&(l=!Rn(t),u=ii(t),t=Ta(t)),r=new Array(t.length);for(let c=0,f=t.length;c<f;c++)r[c]=e(l?u?Gi(Cn(t[c])):Cn(t[c]):t[c],c,void 0,s)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)r=[];else{r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,s)}}else r=[];return r}const ql=t=>t?Kh(t)?Dc(t):ql(t.parent):null,Ns=Ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ql(t.parent),$root:t=>ql(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ch(t),$forceUpdate:t=>t.f||(t.f=()=>{wc(t.update)}),$nextTick:t=>t.n||(t.n=Xm.bind(t.proxy)),$watch:t=>Qm.bind(t)}),Ka=(t,e)=>t!==gt&&!t.__isScriptSetup&&lt(t,e),pg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ka(i,e))return o[e]=1,i[e];if(r!==gt&&lt(r,e))return o[e]=2,r[e];if(lt(s,e))return o[e]=3,s[e];if(n!==gt&&lt(n,e))return o[e]=4,n[e];Yl&&(o[e]=0)}}const u=Ns[e];let c,f;if(u)return e==="$attrs"&&jt(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==gt&&lt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,lt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ka(r,e)?(r[e]=n,!0):i!==gt&&lt(i,e)?(i[e]=n,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==gt&&a[0]!=="$"&&lt(t,a)||Ka(e,a)||lt(s,a)||lt(i,a)||lt(Ns,a)||lt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:lt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function iu(t){return qe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yl=!0;function mg(t){const e=Ch(t),n=t.proxy,i=t.ctx;Yl=!1,e.beforeCreate&&ru(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:v,activated:_,deactivated:g,beforeDestroy:p,beforeUnmount:M,destroyed:x,unmounted:E,render:D,renderTracked:P,renderTriggered:R,errorCaptured:Q,serverPrefetch:A,expose:L,inheritAttrs:q,components:ae,directives:V,filters:I}=e;if(u&&gg(u,i,null),o)for(const $ in o){const Y=o[$];Je(Y)&&(i[$]=Y.bind(n))}if(r){const $=r.call(n,n);ht($)&&(t.data=Aa($))}if(Yl=!0,s)for(const $ in s){const Y=s[$],ne=Je(Y)?Y.bind(n,n):Je(Y.get)?Y.get.bind(n,n):Qn,ie=!Je(Y)&&Je(Y.set)?Y.set.bind(n):Qn,re=t_({get:ne,set:ie});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>re.value,set:xe=>re.value=xe})}if(a)for(const $ in a)Rh(a[$],i,n,$);if(l){const $=Je(l)?l.call(n):l;Reflect.ownKeys($).forEach(Y=>{Km(Y,$[Y])})}c&&ru(c,t,"c");function B($,Y){qe(Y)?Y.forEach(ne=>$(ne.bind(n))):Y&&$(Y.bind(n))}if(B(sg,f),B(io,h),B(og,d),B(ag,v),B(ng,_),B(ig,g),B(dg,Q),B(fg,P),B(ug,R),B(Ca,M),B(lg,E),B(cg,A),qe(L))if(L.length){const $=t.exposed||(t.exposed={});L.forEach(Y=>{Object.defineProperty($,Y,{get:()=>n[Y],set:ne=>n[Y]=ne,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===Qn&&(t.render=D),q!=null&&(t.inheritAttrs=q),ae&&(t.components=ae),V&&(t.directives=V),A&&Ah(t)}function gg(t,e,n=Qn){qe(t)&&(t=jl(t));for(const i in t){const r=t[i];let s;ht(r)?"default"in r?s=Yo(r.from||i,r.default,!0):s=Yo(r.from||i):s=Yo(r),Jt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function ru(t,e,n){Vn(qe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rh(t,e,n,i){let r=i.includes(".")?bh(n,i):()=>n[i];if(Et(t)){const s=e[t];Je(s)&&Ps(r,s)}else if(Je(t))Ps(r,t.bind(n));else if(ht(t))if(qe(t))t.forEach(s=>Rh(s,e,n,i));else{const s=Je(t.handler)?t.handler.bind(n):e[t.handler];Je(s)&&Ps(r,s,t)}}function Ch(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>oa(l,u,o,!0)),oa(l,e,o)),ht(e)&&s.set(e,l),l}function oa(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&oa(t,s,n,!0),r&&r.forEach(o=>oa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=_g[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const _g={data:su,props:ou,emits:ou,methods:Es,computed:Es,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Es,directives:Es,watch:xg,provide:su,inject:vg};function su(t,e){return e?t?function(){return Ft(Je(t)?t.call(this,this):t,Je(e)?e.call(this,this):e)}:e:t}function vg(t,e){return Es(jl(t),jl(e))}function jl(t){if(qe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function Es(t,e){return t?Ft(Object.create(null),t,e):e}function ou(t,e){return t?qe(t)&&qe(e)?[...new Set([...t,...e])]:Ft(Object.create(null),iu(t),iu(e??{})):e}function xg(t,e){if(!t)return e;if(!e)return t;const n=Ft(Object.create(null),t);for(const i in e)n[i]=tn(t[i],e[i]);return n}function Lh(){return{app:null,config:{isNativeTag:$d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yg=0;function Mg(t,e){return function(i,r=null){Je(i)||(i=Ft({},i)),r!=null&&!ht(r)&&(r=null);const s=Lh(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:yg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:n_,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Je(c.install)?(o.add(c),c.install(u,...f)):Je(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const d=u._ceVNode||Ot(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(d,c,h),l=!0,u._container=c,c.__vue_app__=u,Dc(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Vn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Xr;Xr=u;try{return c()}finally{Xr=f}}};return u}}let Xr=null;const Sg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zn(e)}Modifiers`]||t[`${yr(e)}Modifiers`];function Eg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||gt;let r=n;const s=e.startsWith("update:"),o=s&&Sg(i,e.slice(7));o&&(o.trim&&(r=n.map(c=>Et(c)?c.trim():c)),o.number&&(r=r.map(lm)));let a,l=i[a=Va(e)]||i[a=Va(zn(e))];!l&&s&&(l=i[a=Va(yr(e))]),l&&Vn(l,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vn(u,t,6,r)}}const bg=new WeakMap;function Ph(t,e,n=!1){const i=n?bg:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Je(t)){const l=u=>{const c=Ph(u,e,!0);c&&(a=!0,Ft(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ht(t)&&i.set(t,null),null):(qe(s)?s.forEach(l=>o[l]=null):Ft(o,s),ht(t)&&i.set(t,o),o)}function La(t,e){return!t||!ya(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,yr(e))||lt(t,e))}function au(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:v,inheritAttrs:_}=t,g=ra(t);let p,M;try{if(n.shapeFlag&4){const E=r||i,D=E;p=jn(u.call(D,E,c,f,d,h,v)),M=a}else{const E=e;p=jn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),M=e.props?a:Tg(a)}}catch(E){pr.length=0,wa(E,t,1),p=Ot(kn)}let x=p;if(M&&_!==!1){const E=Object.keys(M),{shapeFlag:D}=x;E.length&&D&7&&(s&&E.some(Ma)&&(M=Ag(M,s)),x=Jr(x,M,!1,!0))}if(n.dirs&&(x=Jr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition){const E=Ra(x.type)&&Th(x)||x;Ds(E,n.transition)}return p=x,ra(g),p}function Dh(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(Pc(r)){if(r.type!==kn||r.children==="v-if"){if(n)return;n=r}}else return}return n}const Tg=t=>{let e;for(const n in t)(n==="class"||n==="style"||ya(n))&&((e||(e={}))[n]=t[n]);return e},Ag=(t,e)=>{const n={};for(const i in t)(!Ma(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function wg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?lu(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(Ih(o,i,h)&&!La(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?lu(i,o,u):!0:!!o;return!1}function lu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(!lt(t,s)||Ih(e,t,s)&&!La(n,s))return!0}return!1}function Ih(t,e,n){const i=t[n],r=e[n];return n==="style"&&ht(i)&&ht(r)?!ba(i,r):i!==r}function Rg({vnode:t,parent:e,suspense:n},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Uh={},Nh=()=>Object.create(Uh),Oh=t=>Object.getPrototypeOf(t)===Uh;function Cg(t,e,n,i=!1){const r={},s=Nh();t.propsDefaults=Object.create(null),Fh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Nm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Lg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ft(r),[l]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(La(t.emitsOptions,h))continue;const d=e[h];if(l)if(lt(s,h))d!==s[h]&&(s[h]=d,u=!0);else{const v=zn(h);r[v]=Kl(l,a,v,d,t,!1)}else d!==s[h]&&(s[h]=d,u=!0)}}}else{Fh(t,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!lt(e,f)&&((c=yr(f))===f||!lt(e,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=Kl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!lt(e,f))&&(delete s[f],u=!0)}u&&gi(t.attrs,"set","")}function Fh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Rs(l))continue;const u=e[l];let c;r&&lt(r,c=zn(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:La(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=ft(n),u=a||gt;for(let c=0;c<s.length;c++){const f=s[c];n[f]=Kl(r,l,f,u[f],t,!lt(u,f))}}return o}function Kl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=ro(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===yr(n))&&(i=!0))}return i}const Pg=new WeakMap;function Bh(t,e,n=!1){const i=n?Pg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Je(t)){const c=f=>{l=!0;const[h,d]=Bh(f,e,!0);Ft(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return ht(t)&&i.set(t,cr),cr;if(qe(s))for(let c=0;c<s.length;c++){const f=zn(s[c]);cu(f)&&(o[f]=gt)}else if(s)for(const c in s){const f=zn(c);if(cu(f)){const h=s[c],d=o[f]=qe(h)||Je(h)?{type:h}:Ft({},h),v=d.type;let _=!1,g=!0;if(qe(v))for(let p=0;p<v.length;++p){const M=v[p],x=Je(M)&&M.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(g=!1)}else _=Je(v)&&v.name==="Boolean";d[0]=_,d[1]=g,(_||lt(d,"default"))&&a.push(f)}}const u=[o,a];return ht(t)&&i.set(t,u),u}function cu(t){return t[0]!=="$"&&!Rs(t)}const Cc=t=>t==="_"||t==="_ctx"||t==="$stable",Lc=t=>qe(t)?t.map(jn):[jn(t)],Dg=(t,e,n)=>{if(e._n)return e;const i=jm((...r)=>Lc(e(...r)),n);return i._c=!1,i},zh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Cc(r))continue;const s=t[r];if(Je(s))e[r]=Dg(r,s,i);else if(s!=null){const o=Lc(s);e[r]=()=>o}}},Hh=(t,e)=>{const n=Lc(e);t.slots.default=()=>n},Gh=(t,e,n)=>{for(const i in e)(n||!Cc(i))&&(t[i]=e[i])},Ig=(t,e,n)=>{const i=t.slots=Nh();if(t.vnode.shapeFlag&32){const r=e._;r?(Gh(i,e,n),n&&Zd(i,"_",r,!0)):zh(e,i)}else e&&Hh(t,e)},Ug=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=gt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Gh(r,e,n):(s=!e.$stable,zh(e,r)),o=e}else e&&(Hh(t,e),o={default:1});if(s)for(const a in r)!Cc(a)&&o[a]==null&&delete r[a]},nn=Hg;function Ng(t){return Og(t)}function Og(t,e){const n=Ea();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=Qn,insertStaticContent:v}=t,_=(N,T,se,te=null,le=null,J=null,ye=void 0,F=null,y=!!T.dynamicChildren)=>{if(N===T)return;N&&!ms(N,T)&&(te=De(N),xe(N,le,J,!0),N=null),T.patchFlag===-2&&(y=!1,T.dynamicChildren=null),T.dynamicChildren&&N&&N.dynamicChildren&&N.dynamicChildren.hasOnce&&(T.dynamicChildren===cr&&(T.dynamicChildren=[]),T.dynamicChildren.hasOnce=!0);const{type:m,ref:S,shapeFlag:w}=T;switch(m){case Pa:g(N,T,se,te);break;case kn:p(N,T,se,te);break;case jo:N==null&&M(T,se,te,ye);break;case Ct:ae(N,T,se,te,le,J,ye,F,y);break;default:w&1?D(N,T,se,te,le,J,ye,F,y):w&6?V(N,T,se,te,le,J,ye,F,y):(w&64||w&128)&&m.process(N,T,se,te,le,J,ye,F,y,He)}S!=null&&le?Is(S,N&&N.ref,J,T||N,!T):S==null&&N&&N.ref!=null&&Is(N.ref,null,J,N,!0)},g=(N,T,se,te)=>{if(N==null)i(T.el=a(T.children),se,te);else{const le=T.el=N.el;T.children!==N.children&&u(le,T.children)}},p=(N,T,se,te)=>{N==null?i(T.el=l(T.children||""),se,te):T.el=N.el},M=(N,T,se,te)=>{[N.el,N.anchor]=v(N.children,T,se,te,N.el,N.anchor)},x=({el:N,anchor:T},se,te)=>{let le;for(;N&&N!==T;)le=h(N),i(N,se,te),N=le;i(T,se,te)},E=({el:N,anchor:T})=>{let se;for(;N&&N!==T;)se=h(N),r(N),N=se;r(T)},D=(N,T,se,te,le,J,ye,F,y)=>{if(T.type==="svg"?ye="svg":T.type==="math"&&(ye="mathml"),N==null)P(T,se,te,le,J,ye,F,y);else{const m=N.el&&N.el._isVueCE?N.el:null;try{m&&m._beginPatch(),A(N,T,le,J,ye,F,y)}finally{m&&m._endPatch()}}},P=(N,T,se,te,le,J,ye,F)=>{let y,m;const{props:S,shapeFlag:w,transition:b,dirs:O}=N;if(y=N.el=o(N.type,J,S&&S.is,S),w&8?c(y,N.children):w&16&&Q(N.children,y,null,te,le,Za(N,J),ye,F),O&&ji(N,null,te,"created"),R(y,N,N.scopeId,ye,te),S){for(const j in S)j!=="value"&&!Rs(j)&&s(y,j,null,S[j],J,te);"value"in S&&s(y,"value",null,S.value,J),(m=S.onVnodeBeforeMount)&&Wn(m,te,N)}O&&ji(N,null,te,"beforeMount");const X=Fg(le,b);X?b.beforeEnter(y):b&&!b.persisted&&(y[zg]=!0),i(y,T,se),((m=S&&S.onVnodeMounted)||X||O)&&nn(()=>{try{m&&Wn(m,te,N),X&&b.enter(y),O&&ji(N,null,te,"mounted")}finally{}},le)},R=(N,T,se,te,le)=>{if(se&&d(N,se),te)for(let J=0;J<te.length;J++)d(N,te[J]);if(le){let J=le.subTree;if(T===J||Wh(J.type)&&(J.ssContent===T||J.ssFallback===T)){const ye=le.vnode;R(N,ye,ye.scopeId,ye.slotScopeIds,le.parent)}}},Q=(N,T,se,te,le,J,ye,F,y=0)=>{for(let m=y;m<N.length;m++){const S=N[m]=F?pi(N[m]):jn(N[m]);_(null,S,T,se,te,le,J,ye,F)}},A=(N,T,se,te,le,J,ye)=>{const F=T.el=N.el;let{patchFlag:y,dynamicChildren:m,dirs:S}=T;y|=N.patchFlag&16;const w=N.props||gt,b=T.props||gt;let O;if(se&&Ki(se,!1),(O=b.onVnodeBeforeUpdate)&&Wn(O,se,T,N),S&&ji(T,N,se,"beforeUpdate"),se&&Ki(se,!0),m&&(!N.dynamicChildren||N.dynamicChildren.length!==m.length)&&(y=0,ye=!1,m=null),(w.innerHTML&&b.innerHTML==null||w.textContent&&b.textContent==null)&&c(F,""),m?L(N.dynamicChildren,m,F,se,te,Za(T,le),J):ye||Y(N,T,F,null,se,te,Za(T,le),J,!1),y>0){if(y&16)q(F,w,b,se,le);else if(y&2&&w.class!==b.class&&s(F,"class",null,b.class,le),y&4&&s(F,"style",w.style,b.style,le),y&8){const X=T.dynamicProps;for(let j=0;j<X.length;j++){const K=X[j],he=w[K],_e=b[K];(_e!==he||K==="value")&&s(F,K,he,_e,le,se)}}y&1&&N.children!==T.children&&c(F,T.children)}else!ye&&m==null&&q(F,w,b,se,le);((O=b.onVnodeUpdated)||S)&&nn(()=>{O&&Wn(O,se,T,N),S&&ji(T,N,se,"updated")},te)},L=(N,T,se,te,le,J,ye)=>{for(let F=0;F<T.length;F++){const y=N[F],m=T[F],S=y.el||Os(y),w=S&&(y.type===Ct||!ms(y,m)||y.shapeFlag&198)?f(S):se;_(y,m,w,null,te,le,J,ye,!0)}},q=(N,T,se,te,le)=>{if(T!==se){if(T!==gt)for(const J in T)!Rs(J)&&!(J in se)&&s(N,J,T[J],null,le,te);for(const J in se){if(Rs(J))continue;const ye=se[J],F=T[J];ye!==F&&J!=="value"&&s(N,J,F,ye,le,te)}"value"in se&&s(N,"value",T.value,se.value,le)}},ae=(N,T,se,te,le,J,ye,F,y)=>{const m=T.el=N?N.el:a(""),S=T.anchor=N?N.anchor:a("");let{patchFlag:w,dynamicChildren:b,slotScopeIds:O}=T;O&&(F=F?F.concat(O):O),N==null?(i(m,se,te),i(S,se,te),Q(T.children||[],se,S,le,J,ye,F,y)):w>0&&w&64&&b&&N.dynamicChildren&&N.dynamicChildren.length===b.length?(L(N.dynamicChildren,b,se,le,J,ye,F),(T.key!=null||le&&T===le.subTree)&&Vh(N,T,!0)):Y(N,T,se,S,le,J,ye,F,y)},V=(N,T,se,te,le,J,ye,F,y)=>{T.slotScopeIds=F,N==null?T.shapeFlag&512?le.ctx.activate(T,se,te,ye,y):I(T,se,te,le,J,ye,y):G(N,T,y)},I=(N,T,se,te,le,J,ye)=>{const F=N.component=Yg(N,te,le);if(Rc(N)&&(F.ctx.renderer=He),Kg(F,!1,ye),F.asyncDep){if(le&&le.registerDep(F,B,ye,J),!N.el){const y=F.subTree=Ot(kn);p(null,y,T,se),N.placeholder=y.el}}else B(F,N,T,se,le,J,ye)},G=(N,T,se)=>{const te=T.component=N.component;if(wg(N,T,se))if(te.asyncDep&&!te.asyncResolved){T.el=N.el,T.placeholder=N.placeholder,$(te,T,se);return}else te.next=T,te.update();else T.el=N.el,T.placeholder=N.placeholder,te.vnode=T},B=(N,T,se,te,le,J,ye)=>{const F=()=>{if(N.isMounted){let{next:w,bu:b,u:O,parent:X,vnode:j}=N;{const Me=kh(N);if(Me){w&&(w.el=j.el,$(N,w,ye)),Me.asyncDep.then(()=>{const be=()=>{N.job.flags&8||(le&&le.pendingBranch?nn(be,le):m())};be.flags=48,nn(be,le)});return}}let K=w,he;Ki(N,!1),w?(w.el=j.el,$(N,w,ye)):w=j,b&&ka(b),(he=w.props&&w.props.onVnodeBeforeUpdate)&&Wn(he,X,w,j),Ki(N,!0);const _e=au(N),Z=N.subTree;N.subTree=_e,_(Z,_e,f(Z.el||Os(Z)),De(Z),N,le,J),w.el=_e.el,K===null&&Rg(N,_e.el),O&&nn(O,le),(he=w.props&&w.props.onVnodeUpdated)&&nn(()=>Wn(he,X,w,j),le)}else{let w;const{el:b,props:O}=T,{bm:X,m:j,parent:K,root:he,type:_e}=N,Z=Us(T);Ki(N,!1),X&&ka(X),!Z&&(w=O&&O.onVnodeBeforeMount)&&Wn(w,K,T),Ki(N,!0);{he.ce&&he.ce._hasShadowRoot()&&he.ce._injectChildStyle(_e,N.parent?N.parent.type:void 0);const Me=N.subTree=au(N);_(null,Me,se,te,N,le,J),T.el=Me.el}if(j&&nn(j,le),!Z&&(w=O&&O.onVnodeMounted)){const Me=T;nn(()=>Wn(w,K,Me),le)}(T.shapeFlag&256||K&&Us(K.vnode)&&K.vnode.shapeFlag&256)&&N.a&&nn(N.a,le),N.isMounted=!0,T=se=te=null}};N.scope.on();const y=N.effect=new th(F);N.scope.off();const m=N.update=y.run.bind(y),S=N.job=y.runIfDirty.bind(y);S.i=N,S.id=N.uid,y.scheduler=()=>wc(S),Ki(N,!0),m()},$=(N,T,se)=>{T.component=N;const te=N.vnode.props;N.vnode=T,N.next=null,Lg(N,T.props,te,se),Ug(N,T.children,se),ti(),xh(N),ni()},Y=(N,T,se,te,le,J,ye,F,y=!1)=>{const m=N&&N.children,S=N?N.shapeFlag:0,w=T.children,{patchFlag:b,shapeFlag:O}=T;if(b>0){if(b&128){ie(m,w,se,te,le,J,ye,F,y);return}else if(b&256){ne(m,w,se,te,le,J,ye,F,y);return}}O&8?(S&16&&Ce(m,le,J),w!==m&&c(se,w)):S&16?O&16?ie(m,w,se,te,le,J,ye,F,y):Ce(m,le,J,!0):(S&8&&c(se,""),O&16&&Q(w,se,te,le,J,ye,F,y))},ne=(N,T,se,te,le,J,ye,F,y)=>{N=N||cr,T=T||cr;const m=N.length,S=T.length,w=Math.min(m,S);let b;for(b=0;b<w;b++){const O=T[b]=y?pi(T[b]):jn(T[b]);_(N[b],O,se,null,le,J,ye,F,y)}m>S?Ce(N,le,J,!0,!1,w):Q(T,se,te,le,J,ye,F,y,w)},ie=(N,T,se,te,le,J,ye,F,y)=>{let m=0;const S=T.length;let w=N.length-1,b=S-1;for(;m<=w&&m<=b;){const O=N[m],X=T[m]=y?pi(T[m]):jn(T[m]);if(ms(O,X))_(O,X,se,null,le,J,ye,F,y);else break;m++}for(;m<=w&&m<=b;){const O=N[w],X=T[b]=y?pi(T[b]):jn(T[b]);if(ms(O,X))_(O,X,se,null,le,J,ye,F,y);else break;w--,b--}if(m>w){if(m<=b){const O=b+1,X=O<S?T[O].el:te;for(;m<=b;)_(null,T[m]=y?pi(T[m]):jn(T[m]),se,X,le,J,ye,F,y),m++}}else if(m>b)for(;m<=w;)xe(N[m],le,J,!0),m++;else{const O=m,X=m,j=new Map;for(m=X;m<=b;m++){const Te=T[m]=y?pi(T[m]):jn(T[m]);Te.key!=null&&j.set(Te.key,m)}let K,he=0;const _e=b-X+1;let Z=!1,Me=0;const be=new Array(_e);for(m=0;m<_e;m++)be[m]=0;for(m=O;m<=w;m++){const Te=N[m];if(he>=_e){xe(Te,le,J,!0);continue}let Se;if(Te.key!=null)Se=j.get(Te.key);else for(K=X;K<=b;K++)if(be[K-X]===0&&ms(Te,T[K])){Se=K;break}Se===void 0?xe(Te,le,J,!0):(be[Se-X]=m+1,Se>=Me?Me=Se:Z=!0,_(Te,T[Se],se,null,le,J,ye,F,y),he++)}const Re=Z?Bg(be):cr;for(K=Re.length-1,m=_e-1;m>=0;m--){const Te=X+m,Se=T[Te],Le=T[Te+1],Ie=Te+1<S?Le.el||Os(Le):te;be[m]===0?_(null,Se,se,Ie,le,J,ye,F,y):Z&&(K<0||m!==Re[K]?re(Se,se,Ie,2):K--)}}},re=(N,T,se,te,le=null)=>{const{el:J,type:ye,transition:F,children:y,shapeFlag:m}=N;if(m&6){re(N.component.subTree,T,se,te);return}if(m&128){N.suspense.move(T,se,te);return}if(m&64){ye.move(N,T,se,He);return}if(ye===Ct){i(J,T,se);for(let w=0;w<y.length;w++)re(y[w],T,se,te);i(N.anchor,T,se);return}if(ye===jo){x(N,T,se);return}if(te!==2&&m&1&&F)if(te===0)F.persisted&&!J[ja]?i(J,T,se):(F.beforeEnter(J),i(J,T,se),nn(()=>F.enter(J),le));else{const{leave:w,delayLeave:b,afterLeave:O}=F,X=()=>{N.ctx.isUnmounted?r(J):i(J,T,se)},j=()=>{const K=J._isLeaving||!!J[ja];J._isLeaving&&J[ja](!0),F.persisted&&!K?X():w(J,()=>{X(),O&&O()})};b?b(J,X,j):j()}else i(J,T,se)},xe=(N,T,se,te=!1,le=!1)=>{const{type:J,props:ye,ref:F,children:y,dynamicChildren:m,shapeFlag:S,patchFlag:w,dirs:b,cacheIndex:O,memo:X}=N;if((w===-2||m&&m.hasOnce)&&(le=!1),F!=null&&(ti(),Is(F,null,se,N,!0),ni()),O!=null&&(!N.ctx||N.ctx===T)&&(T.renderCache[O]=void 0),S&256&&T.ctx.deactivate(N))return;const j=S&1&&b,K=!Us(N);let he;if(K&&(he=ye&&ye.onVnodeBeforeUnmount)&&Wn(he,T,N),S&6)Ee(N.component,se,te);else{if(S&128){N.suspense.unmount(se,te);return}j&&ji(N,null,T,"beforeUnmount"),S&64?N.type.remove(N,T,se,He,te):m&&!m.hasOnce&&(J!==Ct||w>0&&w&64)?Ce(m,T,se,!1,!0):(J===Ct&&w&384||!le&&S&16)&&Ce(y,T,se),te&&k(N)}const _e=X!=null&&O==null;(K&&(he=ye&&ye.onVnodeUnmounted)||j||_e)&&nn(()=>{he&&Wn(he,T,N),j&&ji(N,null,T,"unmounted"),_e&&(N.el=null)},se)},k=N=>{const{type:T,el:se,anchor:te,transition:le}=N,J=T===Ct;if(J&&!le){de(se,te);return}if(T===jo){E(N),le&&!le.persisted&&le.afterLeave&&le.afterLeave();return}const ye=J?$l(N):N,F=()=>{J?f(se)&&de(se,te):r(se),le&&!le.persisted&&le.afterLeave&&le.afterLeave()};if(ye&&ye.shapeFlag&1&&le&&!le.persisted){const{leave:y,delayLeave:m}=le,S=ye.el,w=()=>y(S,F);m?m(S,F,w):w()}else F()},de=(N,T)=>{let se;for(;N!==T;)se=h(N),r(N),N=se;r(T)},Ee=(N,T,se)=>{const{bum:te,scope:le,job:J,subTree:ye,um:F,m:y,a:m}=N;uu(y),uu(m),te&&ka(te),le.stop(),J?(J.flags|=8,xe(ye,N,T,se)):ye&&(ye.transition=N.vnode.transition,xe(ye,N,T,se)),F&&nn(F,T);const S=()=>{N.isUnmounted=!0};S.flags=16,nn(S,T)},Ce=(N,T,se,te=!1,le=!1,J=0)=>{for(let ye=J;ye<N.length;ye++)xe(N[ye],T,se,te,le)},De=N=>{if(N.shapeFlag&6)return De(N.component.subTree);if(N.shapeFlag&128)return N.suspense.next();const T=h(N.anchor||N.el),se=T&&T[eg];return se?h(se):T},Ge=(N,T,se)=>{const te=N&&T._vnode?void 0:N&&N.component?N.component.uid:qg();Ym(()=>{N==null?T._vnode&&xe(T._vnode,null,null,!0):_(T._vnode||null,N,T,null,null,null,se),T._vnode=N},te)},He={p:_,um:xe,m:re,r:k,mt:I,mc:Q,pc:Y,pbc:L,n:De,o:t};return{render:Ge,hydrate:void 0,createApp:Mg(Ge)}}function Za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ki({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Fg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vh(t,e,n=!1){const i=t.children,r=e.children;if(qe(i)&&qe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=pi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Vh(o,a)),a.type===Pa&&(a.patchFlag===-1&&(a=r[s]=pi(a)),a.el=o.el),a.type===kn&&!a.el&&(a.el=o.el)}}function Bg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function kh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kh(e)}function uu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Os(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return Os(e.subTree);const n=t.suspense;return n&&n.activeBranch?Os(n.activeBranch):null}const Wh=t=>t.__isSuspense,zg=Symbol("_deferredEnter");function Hg(t,e){e&&e.pendingBranch?qe(t)?e.effects.push(...t):e.effects.push(t):qm(t)}const Ct=Symbol.for("v-fgt"),Pa=Symbol.for("v-txt"),kn=Symbol.for("v-cmt"),jo=Symbol.for("v-stc"),pr=[];let Mn=null;function St(t=!1){pr.push(Mn=t?null:[])}function Xh(){pr.pop(),Mn=pr[pr.length-1]||null}let $s=1;function fu(t,e=!1){$s+=t,t<0&&Mn&&e&&(Mn.hasOnce=!0)}function $h(t){return t.dynamicChildren=$s>0?Mn||cr:null,Xh(),$s>0&&Mn&&Mn.push(t),t}function At(t,e,n,i,r,s){return $h(Ue(t,e,n,i,r,s,!0))}function Gg(t,e,n,i,r){return $h(Ot(t,e,n,i,r,!0))}function Pc(t){return t?t.__v_isVNode===!0:!1}function ms(t,e){return t.type===e.type&&t.key===e.key}const qh=({key:t})=>t??null,Ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Et(t)||Jt(t)||Je(t)?{i:Jn,r:t,k:e,f:!!n}:t:null);function Ue(t,e=null,n=null,i=0,r=null,s=t===Ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qh(e),ref:e&&Ko(e),scopeId:Sh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Jn};return a?(aa(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Et(n)?8:16),$s>0&&!o&&Mn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Mn.push(l),l}const Ot=Vg;function Vg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===hg)&&(t=kn),Pc(t)){const a=Jr(t,e,!0);return n&&aa(a,n),$s>0&&!s&&Mn&&(a.shapeFlag&6?Mn[Mn.indexOf(t)]=a:Mn.push(a)),a.patchFlag=-2,a}if(e_(t)&&(t=t.__vccOpts),e){e=kg(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=to(a)),ht(l)&&(Ac(l)&&!qe(l)&&(l=Ft({},l)),e.style=Zr(l))}const o=Et(t)?1:Wh(t)?128:Ra(t)?64:ht(t)?4:Je(t)?2:0;return Ue(t,e,n,i,r,o,s,!0)}function kg(t){return t?Ac(t)?Ft({},t):Oh(t)?Ft({},t[Jh]||t):t:null}function Jr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,u=e?Xg(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&qh(u),ref:e&&e.ref?n&&s?qe(s)?s.concat(Ko(e)):[s,Ko(e)]:Ko(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jr(t.ssContent),ssFallback:t.ssFallback&&Jr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return l&&i&&Ds(c,l.clone(c)),c}function Kt(t=" ",e=0){return Ot(Pa,null,t,e)}function Wg(t,e){const n=Ot(jo,null,t);return n.staticCount=e,n}function Yh(t="",e=!1){return e?(St(),Gg(kn,null,t)):Ot(kn,null,t)}function jn(t){return t==null||typeof t=="boolean"?Ot(kn):qe(t)?Ot(Ct,null,t.slice()):Pc(t)?pi(t):Ot(Pa,null,String(t))}function pi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jr(t)}function aa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(qe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),aa(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Oh(e)?e._ctx=Jn:r===3&&Jn&&(Jn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(Je(e)){if(i&65){aa(t,{default:e});return}e={default:e,_ctx:Jn},n=32}else e=String(e),i&64?(n=16,e=[Kt(e)]):n=8;t.children=e,t.shapeFlag|=n}function Xg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=to([e.class,i.class]));else if(r==="style")e.style=Zr([e.style,i.style]);else if(ya(r)){const s=e[r],o=i[r];o&&s!==o&&!(qe(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Ma(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Wn(t,e,n,i=null){Vn(t,e,7,[n,i])}const $g=Lh();let jh=0;function qg(){return jh}function Yg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||$g,s={uid:jh++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _m(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bh(i,r),emitsOptions:Ph(i,r),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Eg.bind(null,s),t.ce&&t.ce(s),s}let cn=null;const jg=()=>cn||Jn;let la,qs;{const t=Ea(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};la=e("__VUE_INSTANCE_SETTERS__",n=>cn=n),qs=e("__VUE_SSR_SETTERS__",n=>Ys=n)}const ro=t=>{const e=cn;return la(t),t.scope.on(),()=>{t.scope.off(),la(e)}},du=()=>{cn&&cn.scope.off(),la(null)};function Kh(t){return t.vnode.shapeFlag&4}let Ys=!1;function Kg(t,e=!1,n=!1){e&&qs(e);const{props:i,children:r}=t.vnode,s=Kh(t);Cg(t,i,s,e),Ig(t,r,n||e);const o=s?Zg(t,e):void 0;return e&&qs(!1),o}function Zg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pg);const{setup:i}=n;if(i){ti();const r=t.setupContext=i.length>1?Qg(t):null,s=ro(t),o=no(i,t,0,[t.props,r]),a=qd(o);if(ni(),s(),(a||t.sp)&&!Us(t)&&Ah(t),a){if(o.then(du,du),e)return o.then(l=>{qs(!0);try{hu(t,l,e)}finally{qs(!1)}}).catch(l=>{wa(l,t,0,void 0,!0),t.ssrRender=(u,c)=>c("<!---->")});t.asyncDep=o}else hu(t,o)}else Zh(t)}function hu(t,e,n){Je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ht(e)&&(t.setupState=gh(e)),Zh(t)}function Zh(t,e,n){const i=t.type;t.render||(t.render=i.render||Qn);{const r=ro(t);ti();try{mg(t)}finally{ni(),r()}}}const Jh=Symbol(),Jg={get(t,e){return jt(t,"get",""),e===Jh?t:t[e]}};function Qg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Jg),slots:t.slots,emit:t.emit,expose:e}}function Dc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gh(Om(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ns)return Ns[n](t)},has(e,n){return n in e||n in Ns}})):t.proxy}function e_(t){return Je(t)&&"__vccOpts"in t}const t_=(t,e)=>Gm(t,e,Ys),n_="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zl;const pu=typeof window<"u"&&window.trustedTypes;if(pu)try{Zl=pu.createPolicy("vue",{createHTML:t=>t})}catch{}const Qh=Zl?t=>Zl.createHTML(t):t=>t,i_="http://www.w3.org/2000/svg",r_="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,mu=hi&&hi.createElement("template"),s_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?hi.createElementNS(i_,t):e==="mathml"?hi.createElementNS(r_,t):n?hi.createElement(t,{is:n}):hi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>hi.createTextNode(t),createComment:t=>hi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{mu.innerHTML=Qh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=mu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},o_=Symbol("_vtc");function a_(t,e,n){const i=t[o_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gu=Symbol("_vod"),l_=Symbol("_vsh"),c_=Symbol(""),u_=/(?:^|;)\s*display\s*:/;function f_(t,e,n){const i=t.style,r=Et(n);let s=!1;if(n&&!r){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&bs(i,a,"")}else for(const o in e)n[o]==null&&bs(i,o,"");for(const o in n){o==="display"&&(s=!0);const a=n[o];a!=null?h_(t,o,!Et(e)&&e?e[o]:void 0,a)||bs(i,o,a):bs(i,o,"")}}else if(r){if(e!==n){const o=i[c_];o&&(n+=";"+o),i.cssText=n,s=u_.test(n)}}else e&&t.removeAttribute("style");gu in t&&((!r||e!==n)&&(t[gu]=s?i.display:""),t[l_]&&(i.display="none"))}const mo=/\s*!important$/;function bs(t,e,n){if(qe(n))n.forEach(i=>bs(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))mo.test(n)?t.setProperty(e,n.replace(mo,""),"important"):t.setProperty(e,n);else{const i=d_(t,e);mo.test(n)?t.setProperty(yr(i),n.replace(mo,""),"important"):t[i]=n}}const _u=["Webkit","Moz","ms"],Ja={};function d_(t,e){const n=Ja[e];if(n)return n;let i=zn(e);if(i!=="filter"&&i in t)return Ja[e]=i;i=Kd(i);for(let r=0;r<_u.length;r++){const s=_u[r]+i;if(s in t)return Ja[e]=s}return e}function h_(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Et(i)&&n===i}const vu="http://www.w3.org/1999/xlink";function xu(t,e,n,i,r,s=pm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vu,e.slice(6,e.length)):t.setAttributeNS(vu,e,n):n==null||s&&!Jd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":ei(n)?String(n):n)}function yu(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Jd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function p_(t,e,n,i){t.addEventListener(e,n,i)}function m_(t,e,n,i){t.removeEventListener(e,n,i)}const Mu=Symbol("_vei");function g_(t,e,n,i,r=null){const s=t[Mu]||(t[Mu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=x_(e);if(i){const u=s[e]=S_(i,r);p_(t,a,u,l)}else o&&(m_(t,a,o,l),s[e]=void 0)}}const __=/(Once|Passive|Capture)$/,v_=/^on:?(?:Once|Passive|Capture)$/;function x_(t){let e,n;for(;(n=t.match(__))&&!v_.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):yr(t.slice(2)),e]}let Qa=0;const y_=Promise.resolve(),M_=()=>Qa||(y_.then(()=>Qa=0),Qa=Date.now());function S_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const r=n.value;if(qe(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const u=o[l];u&&Vn(u,e,5,a)}}else Vn(r,e,5,[i])};return n.value=t,n.attached=M_(),n}const Su=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,E_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?a_(t,i,o):e==="style"?f_(t,n,i):ya(e)?Ma(e)||g_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):b_(t,e,i,o))?(yu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xu(t,e,i,o,s,e!=="value")):t._isVueCE&&(T_(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Et(i)))?yu(t,zn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),xu(t,e,i,o))};function b_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Su(e)&&Je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Su(e)&&Et(n)?!1:e in t}function T_(t,e){const n=t._def.props;if(!n)return!1;const i=zn(e);return Array.isArray(n)?n.some(r=>zn(r)===i):Object.keys(n).some(r=>zn(r)===i)}const A_=Ft({patchProp:E_},s_);let Eu;function w_(){return Eu||(Eu=Ng(A_))}const R_=((...t)=>{const e=w_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=L_(i);if(!r)return;const s=e._component;!Je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,C_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function C_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function L_(t){return Et(t)?document.querySelector(t):t}/*! License details at fancyapps.com/license */const Lt=t=>typeof t=="object"&&t!==null&&t.constructor===Object&&Object.prototype.toString.call(t)==="[object Object]";/*! License details at fancyapps.com/license */const ut=t=>typeof t=="string";/*! License details at fancyapps.com/license */const Gr=t=>t&&t!==null&&t instanceof Element&&"nodeType"in t;/*! License details at fancyapps.com/license */const xi=function(t){var e=new DOMParser().parseFromString(t,"text/html").body;if(e.childElementCount>1){for(var n=document.createElement("div");e.firstChild;)n.appendChild(e.firstChild);return n}let i=e.firstChild;return!i||i instanceof HTMLElement?i:((n=document.createElement("div")).appendChild(i),n)};/*! License details at fancyapps.com/license */const P_=function(t){if(!(t&&t instanceof Element&&t.offsetParent))return!1;let e=!1,n=!1;if(t.scrollWidth>t.clientWidth){const i=window.getComputedStyle(t).overflowX,r=i.indexOf("hidden")!==-1,s=i.indexOf("clip")!==-1,o=i.indexOf("visible")!==-1;e=!r&&!s&&!o}if(t.scrollHeight>t.clientHeight){const i=window.getComputedStyle(t).overflowY,r=i.indexOf("hidden")!==-1,s=i.indexOf("clip")!==-1,o=i.indexOf("visible")!==-1;n=!r&&!s&&!o}return e||n},mr=function(t,e=void 0){return!t||t===document.body||e&&t===e?null:P_(t)?t:mr(t.parentElement,e)};/*! License details at fancyapps.com/license */const bu=(t=!0,e="--f-scrollbar-compensate",n="--f-body-margin",i="hide-scrollbar")=>{const r=document,s=r.body,o=r.documentElement;if(t){if(s.classList.contains(i))return;let a=window.innerWidth-o.getBoundingClientRect().width;a<0&&(a=0),o.style.setProperty(e,`${a}px`);const l=parseFloat(window.getComputedStyle(s).marginRight);l&&s.style.setProperty(n,`${l}px`),s.classList.add(i)}else s.classList.remove(i),s.style.setProperty(n,""),r.documentElement.style.setProperty(e,"")};/*! License details at fancyapps.com/license */const hn=(t,...e)=>{const n=e.length;for(let i=0;i<n;i++){const r=e[i]||{};Object.entries(r).forEach(([s,o])=>{const a=Array.isArray(o)?[]:{};t[s]||Object.assign(t,{[s]:a}),Lt(o)?Object.assign(t[s],hn(t[s],o)):Array.isArray(o)?Object.assign(t,{[s]:[...o]}):Object.assign(t,{[s]:o})})}return t};/*! License details at fancyapps.com/license */function Zo(){return!(typeof window>"u"||!window.document||!window.document.createElement)}/*! License details at fancyapps.com/license */const rt=function(t=0,e=0,n=0){return Math.max(Math.min(e,n),t)};/*! License details at fancyapps.com/license */const ca=function(t=0,e=0,n=0,i=0,r=0,s=!1){const o=(t-e)/(n-e)*(r-i)+i;return s?i<r?rt(i,o,r):rt(r,o,i):o};/*! License details at fancyapps.com/license */const Be=(t,e="")=>{t&&t.classList&&e.split(" ").forEach(n=>{n&&t.classList.add(n)})};/*! License details at fancyapps.com/license */const Rt=(t,e="")=>{t&&t.classList&&e.split(" ").forEach(n=>{n&&t.classList.remove(n)})};/*! License details at fancyapps.com/license */const Yt=(t,e="",n)=>{t&&t.classList&&e.split(" ").forEach(i=>{i&&t.classList.toggle(i,n||!1)})};/*! License details at fancyapps.com/license */function Tu(t){return Lt(t)||Array.isArray(t)}function js(t,e){const n=Object.keys(t),i=Object.keys(e);return n.length===i.length&&n.every(r=>{const s=t[r],o=e[r];return typeof s=="function"?`${s}`==`${o}`:Tu(s)&&Tu(o)?js(s,o):s===o})}/*! License details at fancyapps.com/license */const ep=function(t){for(const e of ua)e.getState()===sn.Running&&e.tick(el?t-el:0);el=t,$r=window.requestAnimationFrame(ep)};var sn,Li,Vr;(function(t){t[t.Initializing=0]="Initializing",t[t.Running=1]="Running",t[t.Paused=2]="Paused",t[t.Completed=3]="Completed",t[t.Destroyed=4]="Destroyed"})(sn||(sn={})),(function(t){t[t.Spring=0]="Spring",t[t.Ease=1]="Ease"})(Li||(Li={})),(function(t){t[t.Loop=0]="Loop",t[t.Reverse=1]="Reverse"})(Vr||(Vr={}));const ua=new Set;let $r=null,el=0;function Vi(){let t=sn.Initializing,e=Li.Ease,n=0,i=0,r=Vi.Easings.Linear,s=500,o=0,a=0,l=0,u=0,c=1/0,f=.01,h=.01,d=!1,v={},_=null,g={},p={},M={},x=0,E=0,D=Vr.Loop,P=Vi.Easings.Linear;const R=new Map;function Q(V,...I){for(const G of R.get(V)||[])G(...I)}function A(V){return i=0,V?_=setTimeout(()=>{L()},V):L(),ae}function L(){t=sn.Running,Q("start",g,p)}function q(){if(t=sn.Completed,M={},Q("end",g),t===sn.Completed)if(n<x){if(n++,D===Vr.Reverse){const V={...v};v={...p},p=V}A(E)}else n=0;return ae}const ae={getState:function(){return t},easing:function(V){return r=V,e=Li.Ease,M={},ae},duration:function(V){return s=V,ae},spring:function(V={}){e=Li.Spring;const I={velocity:0,mass:1,tension:170,friction:26,restDelta:.1,restSpeed:.1,maxSpeed:1/0,clamp:!0},{velocity:G,mass:B,tension:$,friction:Y,restDelta:ne,restSpeed:ie,maxSpeed:re,clamp:xe}={...I,...V};return o=G,a=B,l=$,u=Y,h=ne,f=ie,c=re,d=xe,M={},ae},isRunning:function(){return t===sn.Running},isSpring:function(){return e===Li.Spring},from:function(V){return g={...V},ae},to:function(V){return p=V,ae},repeat:function(V,I=0,G=Vr.Loop,B){return x=V,E=I,D=G,P=B||r,ae},on:function(V,I){var G,B;return G=V,B=I,R.set(G,[...R.get(G)||[],B]),ae},off:function(V,I){var G,B;return G=V,B=I,R.has(G)&&R.set(G,R.get(G).filter($=>$!==B)),ae},start:function(V){return js(g,p)||(t=sn.Initializing,v={...g},ua.add(this),$r||($r=window.requestAnimationFrame(ep)),A(V)),ae},pause:function(){return _&&(clearTimeout(_),_=null),t===sn.Running&&(t=sn.Paused,Q("pause",g)),ae},end:q,tick:function(V){V>50&&(V=50),i+=V;let I=0,G=!1;if(t!==sn.Running)return ae;if(e===Li.Ease){I=rt(0,i/s,1),G=I===1;const $=D===Vr.Reverse?P:r;for(const Y in g)g[Y]=v[Y]+(p[Y]-v[Y])*$(I)}if(e===Li.Spring){const $=.001*V;let Y=0;for(const ne in g){const ie=p[ne];let re=g[ne];if(typeof ie!="number"||isNaN(ie)||typeof re!="number"||isNaN(re))continue;if(Math.abs(ie-re)<=h){g[ne]=ie,M[ne]=0;continue}M[ne]||(typeof o=="object"&&typeof o[ne]=="number"?M[ne]=o[ne]:M[ne]=typeof o=="number"?o:0);let xe=M[ne];xe=rt(-1*Math.abs(c),xe,Math.abs(c));const k=xe*a*u;xe+=((re>ie?-1:1)*(Math.abs(ie-re)*l)-k)/a*$,re+=xe*$;const de=g[ne]>ie?re<ie:re>ie;let Ee=Math.abs(xe)<f&&Math.abs(ie-re)<=h;d&&de&&(Ee=!0),Ee?(re=ie,xe=0):Y++,g[ne]=re,M[ne]=xe}G=!Y}const B={...p};return Q("step",g,v,p,I),G&&t===sn.Running&&js(p,B)&&(t=sn.Completed,q()),ae},getStartValues:function(){return v},getCurrentValues:function(){return g},getCurrentVelocities:function(){return M},getEndValues:function(){return p},destroy:function(){t=sn.Destroyed,_&&(clearTimeout(_),_=null),v=g=p={},ua.delete(this)}};return ae}Vi.destroy=()=>{for(const t of ua)t.destroy();$r&&(cancelAnimationFrame($r),$r=null)},Vi.Easings={Linear:function(t){return t},EaseIn:function(t){return t===0?0:Math.pow(2,10*t-10)},EaseOut:function(t){return t===1?1:1-Math.pow(2,-10*t)},EaseInOut:function(t){return t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2}};/*! License details at fancyapps.com/license */function Fs(t){return typeof TouchEvent<"u"&&t instanceof TouchEvent}function Ic(t,e){const n=[],i=Fs(t)?t[e]:t instanceof MouseEvent&&(e==="changedTouches"||t.type!=="mouseup")?[t]:[];for(const r of i)n.push({x:r.clientX,y:r.clientY,ts:Date.now()});return n}function Au(t){return Ic(t,"touches")}function wu(t){return Ic(t,"targetTouches")}function tp(t){return Ic(t,"changedTouches")}function Ri(t){const e=t[0],n=t[1]||e;return{x:(e.x+n.x)/2,y:(e.y+n.y)/2,ts:n.ts}}function go(t){const e=t[0],n=t[1]||t[0];return e&&n?-1*Math.sqrt((n.x-e.x)*(n.x-e.x)+(n.y-e.y)*(n.y-e.y)):0}const Ru=t=>{t.cancelable&&t.preventDefault()},Mi={passive:!1},D_={panThreshold:5,swipeThreshold:3,ignore:["textarea","input","select","[contenteditable]","[data-selectable]","[data-draggable]"]};let _o=!1,Ts=!0;const Qr=(t,e)=>{let n,i,r,s,o,a={...D_,...e},l=!0,u=[],c=[],f=[],h=!1,d=!1,v=!1,_=!1,g=0,p=0,M=0,x=0,E=0,D=0,P=0,R=0,Q=0,A=[];const L=new Map;function q(re){const xe=go(c),k=go(f),de=xe&&k?xe/k:0,Ee=Math.abs(P)>Math.abs(R)?P:R,Ce={srcEvent:n,isPanRecognized:h,isSwipeRecognized:d,firstTouch:u,previousTouch:f,currentTouch:c,deltaX:M,deltaY:x,offsetX:E,offsetY:D,velocityX:P,velocityY:R,velocity:Ee,angle:Q,axis:r,scale:de,center:i};for(const De of L.get(re)||[])De(Ce)}function ae(re){const xe=re.target,k=re.composedPath()[0],de=a.ignore.join(","),Ee=Ce=>Ce&&Ce instanceof HTMLElement&&(Ce.matches(de)||Ce.closest(de));if(Ee(xe)||Ee(k))return!1}function V(re){const xe=Date.now();if(A=A.filter(k=>!k.ts||k.ts>xe-100),re&&A.push(re),P=0,R=0,A.length>3){const k=A[0],de=A[A.length-1];if(k&&de){const Ee=de.x-k.x,Ce=de.y-k.y,De=k.ts&&de.ts?de.ts-k.ts:0;De>0&&(P=Math.abs(Ee)>3?Ee/(De/30):0,R=Math.abs(Ce)>3?Ce/(De/30):0)}}}function I(re){if(!l||ae(re)===!1)return;if(typeof MouseEvent<"u"&&re instanceof MouseEvent){if(_o)return}else _o=!0;if(typeof MouseEvent<"u"&&re instanceof MouseEvent){if(!re.buttons||re.button!==0)return;Ru(re)}re instanceof MouseEvent&&(window.addEventListener("mousemove",G),window.addEventListener("mouseup",B)),window.addEventListener("blur",$),n=re,c=wu(re),u=[...c],f=[],p=c.length,i=Ri(c),p===1&&(h=!1,d=!1,v=!1),p&&V(Ri(c));const xe=Date.now(),k=xe-(g||xe);_=k>0&&k<=250&&p===1,g=xe,clearTimeout(s),q("start")}function G(re){var de;if(!u.length||re.defaultPrevented||ae(re)===!1)return;n=re,f=[...c],c=Au(re);const xe=Ri(f),k=Ri(Au(re));if(V(k),p=c.length,i=k,f.length===c.length?(M=k.x-xe.x,x=k.y-xe.y):(M=0,x=0),u.length){const Ee=Ri(u);E=k.x-Ee.x,D=k.y-Ee.y}if(c.length>1){const Ee=go(c),Ce=go(f);Math.abs(Ee-Ce)>=.1&&(v=!0,q("pinch"))}h||(h=Math.abs(E)>=a.panThreshold||Math.abs(D)>=a.panThreshold,h&&(Ts=!1,clearTimeout(o),o=void 0,Q=Math.abs(180*Math.atan2(D,E)/Math.PI),r=Q>45&&Q<135?"y":"x",u=[...c],f=[...c],E=0,D=0,M=0,x=0,(de=window.getSelection())==null||de.removeAllRanges(),q("panstart"))),h&&(M||x)&&q("pan"),q("move")}function B(re){if(n=re,!u.length)return;const xe=wu(re),k=tp(re);if(p=xe.length,i=Ri(k),k.length&&V(Ri(k)),f=[...c],c=[...xe],u=[...xe],p>0)q("end"),h=!1,d=!1,A=[];else{const de=a.swipeThreshold;(Math.abs(P)>de||Math.abs(R)>de)&&(d=!0),h&&q("panend"),d&&q("swipe"),h||d||v||(q("tap"),_?q("doubleTap"):s=setTimeout(function(){q("singleTap")},250)),q("end"),Y()}}function $(){clearTimeout(s),Y(),h&&q("panend"),q("end")}function Y(){_o=!1,h=!1,d=!1,_=!1,p=0,A=[],c=[],f=[],u=[],M=0,x=0,E=0,D=0,P=0,R=0,Q=0,r=void 0,window.removeEventListener("mousemove",G),window.removeEventListener("mouseup",B),window.removeEventListener("blur",$),Ts||o||(o=setTimeout(()=>{Ts=!0,o=void 0},100))}function ne(re){const xe=re.target;_o=!1,xe&&!re.defaultPrevented&&(Ts||(Ru(re),re.stopPropagation()))}const ie={init:function(){return t&&(t.addEventListener("click",ne,Mi),t.addEventListener("mousedown",I,Mi),t.addEventListener("touchstart",I,Mi),t.addEventListener("touchmove",G,Mi),t.addEventListener("touchend",B),t.addEventListener("touchcancel",B)),ie},on:function(re,xe){return(function(k,de){L.set(k,[...L.get(k)||[],de])})(re,xe),ie},off:function(re,xe){return L.has(re)&&L.set(re,L.get(re).filter(k=>k!==xe)),ie},enable:function(){return l=!0,ie},disable:function(){return l=!1,u.length&&(d=!1,P=0,R=0,M=0,x=0,q("end")),Y(),ie},isPointerDown:()=>p>0,destroy:function(){clearTimeout(s),clearTimeout(o),o=void 0,t&&(t.removeEventListener("click",ne,Mi),t.removeEventListener("mousedown",I,Mi),t.removeEventListener("touchstart",I,Mi),t.removeEventListener("touchmove",G,Mi),t.removeEventListener("touchend",B),t.removeEventListener("touchcancel",B)),t=null,Y()}};return ie};Qr.isClickAllowed=()=>Ts;/*! License details at fancyapps.com/license */const Uc={IMAGE_ERROR:"This image couldn't be loaded. <br /> Please try again later.",MOVE_UP:"Move up",MOVE_DOWN:"Move down",MOVE_LEFT:"Move left",MOVE_RIGHT:"Move right",ZOOM_IN:"Zoom in",ZOOM_OUT:"Zoom out",TOGGLE_FULL:"Toggle zoom level",TOGGLE_1TO1:"Toggle zoom level",ITERATE_ZOOM:"Toggle zoom level",ROTATE_CCW:"Rotate counterclockwise",ROTATE_CW:"Rotate clockwise",FLIP_X:"Flip horizontally",FLIP_Y:"Flip vertically",RESET:"Reset",TOGGLE_FS:"Toggle fullscreen"};/*! License details at fancyapps.com/license */const Zi=t=>{t.cancelable&&t.preventDefault()},en=(t,e=1e4)=>(t=parseFloat(t+"")||0,Math.round((t+Number.EPSILON)*e)/e),Xn=t=>t instanceof HTMLImageElement;var Oe,Cu;(function(t){t.Reset="reset",t.Zoom="zoom",t.ZoomIn="zoomIn",t.ZoomOut="zoomOut",t.ZoomTo="zoomTo",t.ToggleCover="toggleCover",t.ToggleFull="toggleFull",t.ToggleMax="toggleMax",t.IterateZoom="iterateZoom",t.Pan="pan",t.Swipe="swipe",t.Move="move",t.MoveLeft="moveLeft",t.MoveRight="moveRight",t.MoveUp="moveUp",t.MoveDown="moveDown",t.RotateCCW="rotateCCW",t.RotateCW="rotateCW",t.FlipX="flipX",t.FlipY="flipY",t.ToggleFS="toggleFS"})(Oe||(Oe={})),(function(t){t.Cover="cover",t.Full="full",t.Max="max"})(Cu||(Cu={}));const Un={x:0,y:0,scale:1,angle:0,flipX:1,flipY:1};var Lu;(function(t){t[t.Init=0]="Init",t[t.Loading=1]="Loading",t[t.Error=2]="Error",t[t.Ready=3]="Ready",t[t.Destroyed=4]="Destroyed"})(Lu||(Lu={}));const Jl={bounds:!0,classes:{container:"f-panzoom",wrapper:"f-panzoom__wrapper",content:"f-panzoom__content",viewport:"f-panzoom__viewport"},clickAction:Oe.ToggleFull,dblClickAction:!1,gestures:{},height:"auto",l10n:Uc,maxScale:4,minScale:1,mouseMoveFactor:1,panMode:"drag",protected:!1,singleClickAction:!1,spinnerTpl:'<div class="f-spinner"></div>',wheelAction:Oe.Zoom,width:"auto"};let vo,Pu=0,Du=0,xo=0;const Ql=(t,e={},n={})=>{let i,r,s,o,a,l,u,c,f=0,h={...Jl,...e},d={},v={...Un},_={...Un};const g=[];function p(m){let S=h[m];return S&&typeof S=="function"?S(y):S}function M(){return t&&t.parentElement&&i&&f===3}const x=new Map;function E(m,...S){const w=[...x.get(m)||[]];h.on&&w.push(h.on[m]);for(const b of w)b&&typeof b=="function"&&b(y,...S);m!=="*"&&E("*",m,...S)}function D(m){if(!M())return;const S=m.target;if(mr(S))return;const w=Date.now(),b=[-m.deltaX||0,-m.deltaY||0,-m.detail||0].reduce(function(he,_e){return Math.abs(_e)>Math.abs(he)?_e:he}),O=rt(-1,b,1);E("wheel",m,O);const X=p("wheelAction");if(!X||m.defaultPrevented)return;const j=_.scale;let K=j*(O>0?1.5:.5);if(X===Oe.Zoom){const he=Math.abs(m.deltaY)<100&&Math.abs(m.deltaX)<100;if(w-Du<(he?200:45))return void Zi(m);Du=w;const _e=$(),Z=ie();if(en(K)<en(_e)&&en(j)<=en(_e)?(xo+=Math.abs(O),K=_e):en(K)>en(Z)&&en(j)>=en(Z)?(xo+=Math.abs(O),K=Z):(xo=0,K=rt(_e,K,Z)),xo>7)return}switch(Zi(m),X){case Oe.Pan:de(X,{srcEvent:m,deltaX:2*-m.deltaX,deltaY:2*-m.deltaY});break;case Oe.Zoom:de(Oe.ZoomTo,{srcEvent:m,scale:K,center:{x:m.clientX,y:m.clientY}});break;default:de(X,{srcEvent:m})}}function P(m){var j,K;const S=m.composedPath()[0];if(!Qr.isClickAllowed()||!Gr(S)||m.defaultPrevented||!(t!=null&&t.contains(S))||S.hasAttribute("disabled")||S.hasAttribute("aria-disabled")||S.hasAttribute("data-carousel-go-prev")||S.hasAttribute("data-carousel-go-next"))return;const w=S.closest("[data-panzoom-action]"),b=(j=w==null?void 0:w.dataset)==null?void 0:j.panzoomAction,O=((K=w==null?void 0:w.dataset)==null?void 0:K.panzoomValue)||"";if(b){switch(Zi(m),b){case Oe.ZoomTo:case Oe.ZoomIn:case Oe.ZoomOut:de(b,{scale:parseFloat(O||"")||void 0});break;case Oe.MoveLeft:case Oe.MoveRight:de(b,{deltaX:parseFloat(O||"")||void 0});break;case Oe.MoveUp:case Oe.MoveDown:de(b,{deltaY:parseFloat(O||"")||void 0});break;case Oe.ToggleFS:ye();break;default:de(b)}return}if(!(i!=null&&i.contains(S)))return;const X={srcEvent:m};if(de(p("clickAction"),X),p("dblClickAction")){const he=Date.now(),_e=he-(Pu||he);Pu=he,_e>0&&_e<=250?(vo&&(clearTimeout(vo),vo=void 0),de(p("dblClickAction"),X)):vo=setTimeout(()=>{de(p("singleClickAction"),X)},250)}}function R(m){if(c=m,!M()||!I()||v.scale<=1||_.scale<=1||((i==null?void 0:i.dataset.animationName)||"").indexOf("zoom")>-1)return;const S=G(_.scale);if(!S)return;const{x:w,y:b}=S;de(Oe.Pan,{deltaX:w-_.x,deltaY:b-_.y})}function Q(){var m;t&&(Rt(t,"is-loading"),(m=t.querySelector(".f-spinner"))==null||m.remove())}function A(){if(!t||!r)return;if(Q(),Xn(r)&&(!r.complete||!r.naturalWidth))return f=2,i==null||i.classList.add("has-error"),void E("error");E("loaded");const{width:m,height:S}=ae();Xn(r)&&(r.setAttribute("width",m+""),r.setAttribute("height",S+"")),i&&(Rt(i,"has-error"),Xn(r)&&(i.setAttribute("width",m+""),i.setAttribute("height",S+""),i.style.aspectRatio=`${m/S||""}`)),l=Vi().on("start",(b,O)=>{O.angle!==void 0&&(O.angle=90*Math.round(O.angle/90)),O.flipX!==void 0&&(O.flipX=O.flipX>0?1:-1),O.flipY!==void 0&&(O.flipY=O.flipY>0?1:-1),_={...Un,...O},k(),E("animationStart")}).on("pause",b=>{_={...Un,...b}}).on("step",b=>{if(!M())return void(l==null?void 0:l.end());if(v={...Un,...b},I()||!p("bounds")||te()||_.scale>v.scale||_.scale<Y())return void Ee();const O=re(_.scale);let X=!1,j=!1,K=!1,he=!1;v.x<O.x[0]&&(X=!0),v.x>O.x[1]&&(j=!0),v.y<O.y[0]&&(he=!0),v.y>O.y[1]&&(K=!0);let _e=!1,Z=!1,Me=!1,be=!1;_.x<O.x[0]&&(_e=!0),_.x>O.x[1]&&(Z=!0),_.y<O.y[0]&&(be=!0),_.y>O.y[1]&&(Me=!0);let Re=!1;(j&&Z||X&&_e)&&(_.x=rt(O.x[0],_.x,O.x[1]),Re=!0),(K&&Me||he&&be)&&(_.y=rt(O.y[0],_.y,O.y[1]),Re=!0),Re&&l&&l.spring({tension:94,friction:17,maxSpeed:555*_.scale,restDelta:.1,restSpeed:.1,velocity:l.getCurrentVelocities()}).from(v).to(_).start(),Ee()}).on("end",()=>{a!=null&&a.isPointerDown()||xe(),l!=null&&l.isRunning()||(k(),E("animationEnd"))}),(function(){const b=p("gestures");if(!b||!o||!r)return;let O=!1;a=Qr(o,b).on("start",X=>{if(!p("gestures")||!l||!M()||I())return;const j=X.srcEvent;(v.scale>1||se(v.angle)||X.currentTouch.length>1)&&(j==null||j.stopPropagation(),l.pause(),O=!0),X.currentTouch.length===1&&E("touchStart")}).on("move",X=>{var j;O&&(_.scale!==1||se(_.angle)||X.currentTouch.length>1)&&(Zi(X.srcEvent),(j=X.srcEvent)==null||j.stopPropagation())}).on("pan",X=>{if(!O)return;const j=X.srcEvent;(_.scale!==1||se(_.angle)||X.currentTouch.length>1)&&(Zi(j),de(Oe.Pan,X))}).on("swipe",X=>{O&&(_.scale>1||se(_.angle))&&de(Oe.Swipe,X)}).on("tap",X=>{E("click",X)}).on("singleTap",X=>{E("singleClick",X)}).on("doubleTap",X=>{E("dblClick",X)}).on("pinch",X=>{O&&(X.scale>Y()?de(Oe.ZoomIn,X):X.scale<Y()?de(Oe.ZoomOut,X):de(Oe.Pan,X))}).on("end",X=>{O&&(X.currentTouch.length?(X.srcEvent.stopPropagation(),Zi(X.srcEvent),l==null||l.end()):(O=!1,k(),xe(),E("touchEnd")))}).init()})(),o&&(o.addEventListener("wheel",D,{passive:!1}),g.push(()=>{o==null||o.removeEventListener("wheel",D,{passive:!1})})),t==null||t.addEventListener("click",P),document==null||document.addEventListener("mousemove",R),g.push(()=>{t==null||t.removeEventListener("click",P),document==null||document.removeEventListener("mousemove",R)});const w=L();v={...w},_={...w},f=3,Ee(),k(),E("ready"),requestAnimationFrame(()=>{f===3&&(Q(),o&&(o.style.visibility=""))})}function L(){const m={...p("startPos")||{}};let S=m.scale,w=1;w=typeof S=="string"?B(S):typeof S=="number"?S:Y();const b={...Un,...m,scale:w},O=I()?G(w):void 0;if(O){const{x:X,y:j}=O;b.x=X,b.y=j}return b}function q(){const m={top:0,left:0,width:0,height:0};if(i){const S=i.getBoundingClientRect();se(_.angle)?(m.top=S.top+.5*S.height-.5*S.width,m.left=S.left+.5*S.width-.5*S.height,m.width=S.height,m.height=S.width):(m.top=S.top,m.left=S.left,m.width=S.width,m.height=S.height)}return m}function ae(){let m=p("width"),S=p("height");if(r&&m==="auto"){const w=r.getAttribute("width");m=w?parseFloat(w+""):r.dataset.width!==void 0?parseFloat(r.dataset.width+""):Xn(o)?o.naturalWidth:Xn(r)?r.naturalWidth:(i==null?void 0:i.getBoundingClientRect().width)||0}else m=ut(m)?parseFloat(m):m;if(r&&S==="auto"){const w=r.getAttribute("height");S=w?parseFloat(w+""):r.dataset.height!==void 0?parseFloat(r.dataset.height+""):Xn(o)?o.naturalHeight:Xn(r)?r.naturalHeight:(i==null?void 0:i.getBoundingClientRect().height)||0}else S=ut(S)?parseFloat(S):S;return{width:m,height:S}}function V(){const m=q();return{width:m.width,height:m.height}}function I(){return p("panMode")==="mousemove"&&matchMedia("(hover: hover)").matches}function G(m){const S=c||p("event"),w=i==null?void 0:i.getBoundingClientRect();if(!S||!w||m<=1)return{x:0,y:0};const b=(S.clientX||0)-w.left,O=(S.clientY||0)-w.top,{width:X,height:j}=V(),K=re(m);if(m>1){const be=p("mouseMoveFactor");be>1&&(m*=be)}let he=X*m,_e=j*m,Z=.5*(he-X)-b/X*100/100*(he-X),Me=.5*(_e-j)-O/j*100/100*(_e-j);return Z=rt(K.x[0],Z,K.x[1]),Me=rt(K.y[0],Me,K.y[1]),{x:Z,y:Me}}function B(m){if(!m)return _.scale;if(!t)return 1;const S=t.getBoundingClientRect(),w=q(),{width:b,height:O}=ae(),X=Z=>{if(typeof Z=="number")return Z;switch(Z){case"min":case"base":return 1;case"cover":return Math.max(S.height/w.height,S.width/w.width)||1;case"full":case"max":{const Me=se(_.angle)?O:b;return Me&&w.width?Me/w.width:1}}},j=p("minScale"),K=p("maxScale"),he=Math.min(X("full"),X(j)),_e=typeof K=="number"?X("full")*K:Math.min(X("full"),X(K));switch(m){case"min":return he;case"base":return rt(he,1,_e);case"cover":return X("cover");case"full":return Math.min(_e,X("full"));case"max":return _e}}function $(){return B("min")}function Y(){return B("base")}function ne(){return B("full")}function ie(){return B("max")}function re(m){const S={x:[0,0],y:[0,0]},w=t==null?void 0:t.getBoundingClientRect();if(!w)return S;const b=q(),O=w.width,X=w.height;let j=b.width,K=b.height,he=m=m===void 0?_.scale:m,_e=m;if(I()&&m>1){const Z=p("mouseMoveFactor");Z>1&&(j*m>O+.01&&(he*=Z),K*m>X+.01&&(_e*=Z))}if(j*=he,K*=_e,j>O){S.x[0]=.5*(O-j),S.x[1]=.5*(j-O);const Z=.5*(b.left-w.left),Me=.5*(b.left+b.width-w.right);S.x[0]-=Z+Me,S.x[1]-=Z+Me}if(K>X){S.y[0]=.5*(X-K),S.y[1]=.5*(K-X);const Z=.5*(b.top-w.top),Me=.5*(b.top+b.height-w.bottom);S.y[0]-=Z+Me,S.y[1]-=Z+Me}return S}function xe(){if(!M()||!p("bounds")||!l)return;const m=$(),S=ie(),w=rt(m,_.scale,S);if(_.scale<m-.01||_.scale>S+.01)return void de(Oe.ZoomTo,{scale:w});if(l.isRunning()||te())return;const b=re(w);_.x<b.x[0]||_.x>b.x[1]||_.y<b.y[0]||_.y>b.y[1]?(_.x=rt(b.x[0],_.x,b.x[1]),_.y=rt(b.y[0],_.y,b.y[1]),l.spring({tension:170,friction:17,restDelta:.001,restSpeed:.001,maxSpeed:1/0,velocity:l.getCurrentVelocities()}),l.from(v).to(_).start()):Ee()}function k(m){var Me;if(!M())return;const S=T(),w=te(),b=le(),O=J(),X=De(),j=Ge();Yt(i,"is-fullsize",O),Yt(i,"is-expanded",b),Yt(i,"is-dragging",w),Yt(i,"can-drag",S),Yt(i,"will-zoom-in",X),Yt(i,"will-zoom-out",j);const K=Ve(),he=N(),_e=He(),Z=!M();for(const be of((Me=m||t)==null?void 0:Me.querySelectorAll("[data-panzoom-action]"))||[]){const Re=be.dataset.panzoomAction;let Te=!1;if(Z)Te=!0;else switch(Re){case Oe.ZoomIn:K||(Te=!0);break;case Oe.ZoomOut:_e||(Te=!0);break;case Oe.ToggleFull:{he||_e||(Te=!0);const Se=be.querySelector("g");Se&&(Se.style.display=O&&!Te?"none":"");break}case Oe.IterateZoom:{K||_e||(Te=!0);const Se=be.querySelector("g");Se&&(Se.style.display=K||Te?"":"none");break}case Oe.ToggleCover:case Oe.ToggleMax:K||_e||(Te=!0)}Te?(be.setAttribute("aria-disabled",""),be.setAttribute("tabindex","-1")):(be.removeAttribute("aria-disabled"),be.removeAttribute("tabindex"))}}function de(m,S){var Te;if(!(m&&t&&r&&l&&M())||m===Oe.Swipe&&Math.abs(l.getCurrentVelocities().scale)>.01)return;const w={..._};let b={..._},O=re(I()?w.scale:v.scale);const X=l.getCurrentVelocities(),j=q();S=S||{};const K=(((Te=S.currentTouch)==null?void 0:Te.length)||0)>1,he=S.velocityX||0,_e=S.velocityY||0;let Z=S.center;S.srcEvent&&(Z=Ri(tp(S.srcEvent)));let Me=S.deltaX||0,be=S.deltaY||0;switch(m){case Oe.MoveRight:Me=S.deltaX||100;break;case Oe.MoveLeft:Me=S.deltaX||-100;break;case Oe.MoveUp:be=S.deltaY||-100;break;case Oe.MoveDown:be=S.deltaY||100}let Re=[];if(typeof m=="number")b.scale=m;else switch(m){case Oe.Reset:b={...Un},b.scale=Y();break;case Oe.ZoomTo:case Oe.ZoomIn:case Oe.ZoomOut:case Oe.ToggleCover:case Oe.ToggleFull:case Oe.ToggleMax:case Oe.IterateZoom:case Oe.Zoom:b.scale=Ce(m,S);break;case Oe.Pan:case Oe.Move:case Oe.MoveLeft:case Oe.MoveRight:case Oe.MoveUp:case Oe.MoveDown:if(te()){let Le=1,Ie=1;b.x<=O.x[0]&&he<=0&&(Le=Math.max(.01,1-Math.abs(1/j.width*Math.abs(b.x-O.x[0]))),Le*=.2),b.x>=O.x[1]&&he>=0&&(Le=Math.max(.01,1-Math.abs(1/j.width*Math.abs(b.x-O.x[1]))),Le*=.2),b.y<=O.y[0]&&_e<=0&&(Ie=Math.max(.01,1-Math.abs(1/j.height*Math.abs(b.y-O.y[0]))),Ie*=.2),b.y>=O.y[1]&&_e>=0&&(Ie=Math.max(.01,1-Math.abs(1/j.height*Math.abs(b.y-O.y[1]))),Ie*=.2),b.x+=Me*Le,b.y+=be*Ie}else b.x=rt(O.x[0],b.x+Me,O.x[1]),b.y=rt(O.y[0],b.y+be,O.y[1]);break;case Oe.Swipe:const Se=(Le=0)=>Math.sign(Le)*Math.pow(Math.abs(Le),1.5);b.x+=rt(-1e3,Se(he),1e3),b.y+=rt(-1e3,Se(_e),1e3),_e&&!he&&(b.x=rt(O.x[0],b.x,O.x[1])),!_e&&he&&(b.y=rt(O.y[0],b.y,O.y[1])),X.x=he,X.y=_e;break;case Oe.RotateCW:b.angle+=90;break;case Oe.RotateCCW:b.angle-=90;break;case Oe.FlipX:b.flipX*=-1;break;case Oe.FlipY:b.flipY*=-1}if(v.angle!==void 0&&Math.abs(v.angle)>=360&&(b.angle-=360*Math.floor(v.angle/360),v.angle-=360*Math.floor(v.angle/360)),Re.length){const Se=Re.findIndex(Le=>Le>b.scale+1e-4);b.scale=Re[Se]||Re[0]}if(K&&(b.scale=rt($()*(K?.8:1),b.scale,ie()*(K?1.6:1))),I()){const Se=G(b.scale);if(Se){const{x:Le,y:Ie}=Se;b.x=Le,b.y=Ie}}else if(Math.abs(b.scale-w.scale)>1e-4){let Se=0,Le=0;if(Z)Se=Z.x,Le=Z.y;else{const C=t.getBoundingClientRect();Se=C.x+.5*C.width,Le=C.y+.5*C.height}let Ie=Se-j.left,z=Le-j.top;Ie-=.5*j.width,z-=.5*j.height;const W=(Ie-w.x)/w.scale,H=(z-w.y)/w.scale;b.x=Ie-W*b.scale,b.y=z-H*b.scale,!K&&p("bounds")&&(O=re(b.scale),b.x=rt(O.x[0],b.x,O.x[1]),b.y=rt(O.y[0],b.y,O.y[1]))}if(m===Oe.Swipe){let Se=94,Le=17,Ie=500*b.scale,z=X;l.spring({tension:Se,friction:Le,maxSpeed:Ie,restDelta:.1,restSpeed:.1,velocity:z})}else m===Oe.Pan||K?l.spring({tension:900,friction:17,restDelta:.01,restSpeed:.01,maxSpeed:1}):l.spring({tension:170,friction:17,restDelta:.001,restSpeed:.001,maxSpeed:1/0,velocity:X});if(S.velocity===0||js(v,b))v={...b},_={...b},l.end(),Ee(),k();else{if(js(_,b))return;l.from(v).to(b).start()}E("action",m)}function Ee(){if(!r||!i||!o)return;const{width:m,height:S}=ae();Object.assign(i.style,{maxWidth:`min(${m}px, 100%)`,maxHeight:`min(${S}px, 100%)`});const w=(function(){const{width:be,height:Re}=ae(),{width:Te,height:Se}=V();if(!t)return{x:0,y:0,width:0,height:0,scale:0,flipX:0,flipY:0,angle:0,fitWidth:Te,fitHeight:Se,fullWidth:be,fullHeight:Re};let{x:Le,y:Ie,scale:z,angle:W,flipX:H,flipY:C}=v,ue=1/ne(),fe=be,oe=Re,pe=v.scale*ue,we=_.scale*ue;const Ae=Math.max(Te,Se),Ne=Math.min(Te,Se);be>Re?(fe=Ae,oe=Ne):(fe=Ne,oe=Ae),pe=be>Re?Ae*z/be||1:Ae*z/Re||1;let ke=fe?be*we:0,ze=oe?Re*we:0,Xe=fe&&oe?be*pe/ke:0;return Le=Le+.5*fe-.5*ke,Ie=Ie+.5*oe-.5*ze,{x:Le,y:Ie,width:ke,height:ze,scale:Xe,flipX:H,flipY:C,angle:W,fitWidth:Te,fitHeight:Se,fullWidth:be,fullHeight:Re}})(),{x:b,y:O,width:X,height:j,scale:K,angle:he,flipX:_e,flipY:Z}=w;let Me=`translate(${en(b,100)}px, ${en(O,100)}px)`;Me+=_e!==1||Z!==1?` scaleX(${en(K*_e)}) scaleY(${en(K*Z)})`:` scale(${en(K)})`,he!==0&&(Me+=` rotate(${he}deg)`),o.style.width=`${en(X)}px`,o.style.height=`${en(j)}px`,o.style.transform=`${Me}`,E("render")}function Ce(m=p("clickAction"),S={}){let w=_.scale,b=Y(),O=[];if(typeof m=="number")b=m;else if(m){switch(m){case Oe.ZoomTo:b=S.scale||1;break;case Oe.ZoomIn:b=w*(S.scale||2);break;case Oe.ZoomOut:b=w*(S.scale||.5);break;case Oe.ToggleCover:O=[Y(),B("cover")];break;case Oe.ToggleFull:O=[Y(),ne()];break;case Oe.ToggleMax:O=[Y(),ie()];break;case Oe.IterateZoom:O=[Y(),ne(),ie()];break;case Oe.Zoom:{const X=ne();b=w>=X-.05?Y():Math.min(X,w*(S.scale||2));break}}O.length&&(b=O.find(X=>X>w+1e-4)??Y())}return m!==Oe.ZoomTo&&(b=rt($(),b,ie())),b}function De(){return!!(M()&&Ce()>_.scale)}function Ge(){return!!(M()&&Ce()<_.scale)}function He(){return!!(M()&&_.scale>$())}function Ve(){return!!(M()&&_.scale<ie())}function N(){return!!(M()&&_.scale<ne())}function T(){return!(!M()||!le()&&!se(_.angle)||!a||I())}function se(m){return Math.abs(m%180)===90}function te(){return!(!M()||!(a!=null&&a.isPointerDown())||I())}function le(){return!!(M()&&_.scale>Y())}function J(){return!!(M()&&_.scale>=ne())}function ye(){const m="in-fullscreen",S="with-panzoom-in-fullscreen";t==null||t.classList.toggle(m);const w=t==null?void 0:t.classList.contains(m);w?(document.documentElement.classList.add(S),document.addEventListener("keydown",F,!0)):(document.documentElement.classList.remove(S),document.removeEventListener("keydown",F,!0)),Ee(),E(w?"enterFS":"exitFS")}function F(m){m.key!=="Escape"||m.defaultPrevented||ye()}const y={canDrag:T,canZoomIn:Ve,canZoomOut:He,canZoomToFull:N,destroy:function(){E("destroy");for(const m of Object.values(d))m==null||m.destroy(y);for(const m of g)m();return i&&(i.style.aspectRatio="",i.style.maxWidth="",i.style.maxHeight=""),o&&(o.style.width="",o.style.height="",o.style.transform=""),i=void 0,r=void 0,o=void 0,v={...Un},_={...Un},l==null||l.destroy(),l=void 0,a==null||a.destroy(),a=void 0,f=4,y},emit:E,execute:de,getBoundaries:re,getContainer:function(){return t},getContent:function(){return r},getFullDim:ae,getGestures:function(){return a},getMousemovePos:G,getOptions:function(){return h},getPlugins:function(){return d},getScale:B,getStartPosition:L,getState:function(){return f},getTransform:function(m){return m===!0?_:v},getTween:function(){return l},getViewport:function(){return o},getWrapper:function(){return i},init:function(){return f=0,E("init"),(function(){for(const[m,S]of Object.entries({...n,...h.plugins||{}}))if(m&&!d[m]&&S instanceof Function){const w=S();w.init(y),d[m]=w}E("initPlugins")})(),(function(){var O,X,j;const m={...Jl.classes,...p("classes")},S=(O=m.content)==null?void 0:O.split(" ").shift(),w=(X=m.wrapper)==null?void 0:X.split(" ").shift(),b=(j=m.viewport)==null?void 0:j.split(" ").shift();if(!(!S||!w||!b)&&t&&(Be(t,m.container),r=t.querySelector(`.${S}:not(.is-clone)`),!!r)){if(r.setAttribute("draggable","false"),i=t.querySelector(`.${w}`),i||(i=document.createElement("div"),Be(i,m.wrapper),r.insertAdjacentElement("beforebegin",i),i.insertAdjacentElement("afterbegin",r)),o=t.querySelector(`.${b}`),o||(o=document.createElement("div"),Be(o,m.viewport),i.insertAdjacentElement("beforeend",o)),o.contains(r)||o.insertAdjacentElement("afterbegin",r),s=t.querySelector(`.${S}.is-clone`),s||(s=r.cloneNode(!0),s.removeAttribute("id"),Be(s,"is-clone"),i.insertAdjacentElement("afterbegin",s)),r instanceof HTMLPictureElement&&(r=r.querySelector("img")),s instanceof HTMLPictureElement&&(s=s.querySelector("img")),o instanceof HTMLPictureElement&&(o=o.querySelector("img")),o&&(o.style.visibility="hidden",p("protected"))){o.addEventListener("contextmenu",he=>{Zi(he)});const K=document.createElement("div");Be(K,"f-panzoom__protected"),o.appendChild(K)}E("initLayout")}})(),(function(){if(t&&i&&!u){let m=null;u=new ResizeObserver(()=>{M()&&(m=m||requestAnimationFrame(()=>{M()&&(k(),xe(),E("refresh")),m=null}))}),u.observe(i),g.push(()=>{u==null||u.disconnect(),u=void 0,m&&(cancelAnimationFrame(m),m=null)})}})(),(function(){if(!t||!r)return;if(!Xn(r)||!Xn(s))return void A();const m=()=>{r&&Xn(r)&&r.decode().then(()=>{A()}).catch(()=>{A()})};if(f=1,t.classList.add("is-loading"),E("loading"),s.src&&s.complete)return void m();(function(){if(!t||(t==null?void 0:t.querySelector(".f-spinner")))return;const w=p("spinnerTpl"),b=xi(w);b&&(b.classList.add("f-spinner"),t.classList.add("is-loading"),i==null||i.insertAdjacentElement("afterbegin",b))})(),s.addEventListener("load",m,!1),s.addEventListener("error",m,!1),g.push(()=>{s==null||s.removeEventListener("load",m,!1),s==null||s.removeEventListener("error",m,!1)})})(),y},isDragging:te,isExpanded:le,isFullsize:J,isMousemoveMode:I,localize:function(m,S=[]){const w=p("l10n")||{};m=String(m).replace(/\{\{(\w+)\}\}/g,(b,O)=>w[O]||b);for(let b=0;b<S.length;b++)m=m.split(S[b][0]).join(S[b][1]);return m=m.replace(/\{\{(.*?)\}\}/g,(b,O)=>O)},off:function(m,S){for(const w of m instanceof Array?m:[m])x.has(w)&&x.set(w,x.get(w).filter(b=>b!==S));return y},on:function(m,S){for(const w of m instanceof Array?m:[m])x.set(w,[...x.get(w)||[],S]);return y},toggleFS:ye,updateControls:k,version:"6.1.15",willZoomIn:De,willZoomOut:Ge};return y};Ql.l10n={en_EN:Uc},Ql.getDefaults=()=>Jl;/*! License details at fancyapps.com/license */const tl=(t,e)=>{let n=[];return t.childNodes.forEach(i=>{i.nodeType!==Node.ELEMENT_NODE||e&&!i.matches(e)||n.push(i)}),n};/*! License details at fancyapps.com/license */const Nc={...Uc,ERROR:"Something went wrong. <br /> Please try again later.",NEXT:"Next page",PREV:"Previous page",GOTO:"Go to page #%d",DOWNLOAD:"Download",TOGGLE_FULLSCREEN:"Toggle full-screen mode",TOGGLE_EXPAND:"Toggle full-size mode",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_AUTOPLAY:"Toggle slideshow"};/*! License details at fancyapps.com/license */var Iu,Uu;(function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Destroyed=2]="Destroyed"})(Iu||(Iu={})),(function(t){t[t.Loading=0]="Loading",t[t.Loaded=1]="Loaded",t[t.Error=2]="Error"})(Uu||(Uu={}));/*! License details at fancyapps.com/license */const Ji=t=>{t.cancelable&&t.preventDefault()},As={adaptiveHeight:!1,center:!0,classes:{container:"f-carousel",isEnabled:"is-enabled",isLTR:"is-ltr",isRTL:"is-rtl",isHorizontal:"is-horizontal",isVertical:"is-vertical",hasAdaptiveHeight:"has-adaptive-height",viewport:"f-carousel__viewport",slide:"f-carousel__slide",isSelected:"is-selected"},dragFree:!1,enabled:!0,errorTpl:'<div class="f-html">{{ERROR}}</div>',fill:!0,infinite:!0,initialPage:0,l10n:Nc,rtl:!1,slides:[],slidesPerPage:"auto",spinnerTpl:'<div class="f-spinner"></div>',transition:"fade",tween:{clamp:!0,mass:1,tension:160,friction:25,restDelta:1,restSpeed:1,velocity:0},vertical:!1};let Nu,nl,Ou=0;const Fu=t=>document.getElementById(`${t.split("#").pop()}`),fa=(t,e={},n={})=>{Ou++;let i,r,s,o,a,l=0,u={...As},c={...As},f={},h=null,d=null,v=0,_=0,g=0,p=!1,M=!1,x=!1,E="height",D=0,P=!0,R=0,Q=0,A=0,L=0,q="*",ae=[],V=[];const I=new Set;let G=[],B=[],$=0,Y=0,ne=0;function ie(z,...W){let H=c[z];return H&&H instanceof Function?H(Ie,...W):H}function re(z,W=[]){const H=ie("l10n")||{};z=String(z).replace(/\{\{(\w+)\}\}/g,(C,ue)=>H[ue]||C);for(let C=0;C<W.length;C++)z=z.split(W[C][0]).join(W[C][1]);return z=z.replace(/\{\{(.*?)\}\}/g,(C,ue)=>ue)}const xe=new Map;function k(z,...W){const H=[...xe.get(z)||[]];c.on&&H.push(c.on[z]);for(const C of H)C&&C instanceof Function&&C(Ie,...W);z==="click"&&K(W[0]),z!=="*"&&k("*",z,...W)}function de(){var C,ue;const z=hn({},As,u);let W="";const H=u.breakpoints||{};for(const[fe,oe]of Object.entries(H))window.matchMedia(fe).matches&&(W+=fe,hn(z,oe));if(a===void 0||W!==a){if(a=W,l!==0){let fe=(ue=(C=B[R])==null?void 0:C.slides[0])==null?void 0:ue.index;fe===void 0&&(fe=c.initialSlide),z.initialSlide=fe,z.slides=[];for(const oe of ae)oe.isVirtual&&z.slides.push(oe)}Te(),c=z,ie("enabled")!==!1&&(l=0,k("init"),(function(){for(const[fe,oe]of Object.entries({...n,...c.plugins||{}}))if(fe&&!f[fe]&&oe instanceof Function){const pe=oe();pe.init(Ie,fa),f[fe]=pe}k("initPlugins")})(),(function(){if(!h)return;const fe=ie("classes")||{};Be(h,fe.container);const oe=ie("style");if(oe&&Lt(oe))for(const[pe,we]of Object.entries(oe))h.style.setProperty(pe,we);d=Array.from(h.querySelectorAll(`.${fe.viewport}`)).filter(pe=>pe.closest(`.${fe.container}`)===h).pop()||null,d||(d=document.createElement("div"),Be(d,fe.viewport),d.append(...tl(h,`.${fe.slide}`)),h.insertAdjacentElement("afterbegin",d)),h.carousel=Ie,k("initLayout")})(),(function(){if(!d)return;const fe=ie("classes")||{};ae=[],[...tl(d,`.${fe.slide}`)].forEach(oe=>{if(oe.parentElement){const pe=ye({el:oe,isVirtual:!1,...oe.dataset||{}});k("createSlide",pe),ae.push(pe)}}),S();for(const oe of ae)k("addSlide",oe);J(ie("slides"));for(const oe of ae){const pe=oe.el;(pe==null?void 0:pe.parentElement)===d&&(Be(pe,c.classes.slide),Be(pe,oe.class),Z(oe),k("attachSlideEl",oe))}k("initSlides")})(),w(),l=1,Be(h,(ie("classes")||{}).isEnabled||""),Re(),He(),r=Vi().on("start",()=>{i&&i.isPointerDown()||(Ge(),Re())}).on("step",fe=>{const oe=D;D=fe.pos,D!==oe&&(P=!1,Re())}).on("end",fe=>{i!=null&&i.isPointerDown()||(D=fe.pos,r&&!p&&(D<A||D>L)?r.spring({clamp:!0,mass:1,tension:200,friction:25,velocity:0,restDelta:1,restSpeed:1}).from({pos:D}).to({pos:rt(A,D,L)}).start():P||(P=!0,k("settle")))}),Ce(),(function(){if(!h||!d)return;h.addEventListener("click",j),document.addEventListener("mousemove",Ee),nl||(nl=function(oe){var Ne;const pe=oe.target;if(!(pe instanceof Element))return;const we=pe.closest("[data-carousel-target]"),Ae=(Ne=we==null?void 0:we.dataset)==null?void 0:Ne.carouselTarget;if(Ae){const ke=Fu(Ae),ze=ke==null?void 0:ke.carousel;ze==null||ze.emit("click",oe)}},document.addEventListener("click",nl));const fe=d.getBoundingClientRect();if($=fe.height,Y=fe.width,!s){let oe=null;s=new ResizeObserver(()=>{oe||(oe=requestAnimationFrame(()=>{(function(){if(l!==1||!d)return;const pe=B.length,we=d.getBoundingClientRect(),Ae=we.height,Ne=we.width;pe>1&&(x&&Math.abs(Ae-$)<.5||!x&&Math.abs(Ne-Y)<.5)||(w(),Ce(),$=Ae,Y=Ne,x&&!$||!x&&!Y||h&&d&&(pe===B.length&&(i!=null&&i.isPointerDown())||(ie("dragFree")&&(p||D>A&&D<L)?(Ge(),Re()):Me(R,{transition:!1}))))})(),oe=null}))}),s.observe(d)}})(),k("ready"))}}function Ee(z){Nu=z}function Ce(){ie("gestures")===!1?i&&(i.destroy(),i=void 0):i||(function(){const z=ie("gestures");!i&&z!==!1&&d&&(i=Qr(d,z).on("start",W=>{var fe,oe;if(!r||ie("gestures",W)===!1)return;const{srcEvent:H}=W;x&&Fs(H)&&!mr(H.target)&&Ji(H),r.pause(),r.getCurrentVelocities().pos=0;const C=(fe=B[R])==null?void 0:fe.slides[0],ue=C==null?void 0:C.el;C&&I.has(C.index)&&ue&&(D=C.offset||0,D+=((function(pe){const we=window.getComputedStyle(pe),Ae=new DOMMatrixReadOnly(we.transform);return{width:Ae.m41||0,height:Ae.m42||0}})(ue)[E]||0)*(M&&!x?1:-1)),O(),p||(D<A||D>L)&&r.spring({clamp:!0,mass:1,tension:500,friction:25,velocity:((oe=r.getCurrentVelocities())==null?void 0:oe.pos)||0,restDelta:1,restSpeed:1}).from({pos:D}).to({pos:rt(A,D,L)}).start()}).on("move",W=>{var Xe,ot;if(ie("gestures",W)===!1)return;const{srcEvent:H,axis:C,deltaX:ue,deltaY:fe}=W;if(Fs(H)&&((Xe=H.touches)==null?void 0:Xe.length)>1)return;const oe=H.target,pe=mr(oe),we=pe?pe.scrollHeight>pe.clientHeight?"y":"x":void 0;if(pe&&pe!==d&&(!C||C===we))return;if(!C)return Ji(H),H.stopPropagation(),void H.stopImmediatePropagation();if(C==="y"&&!x||C==="x"&&x||(Ji(H),H.stopPropagation(),!r))return;const Ae=M&&!x?1:-1,Ne=x?fe:ue;let ke=r!=null&&r.isRunning()?r.getEndValues().pos:D,ze=1;p||(ke<=A&&Ne*Ae<0?(ze=Math.max(.01,1-(Math.abs(1/se()*Math.abs(ke-A))||0)),ze*=.2):ke>=L&&Ne*Ae>0&&(ze=Math.max(.01,1-(Math.abs(1/se()*Math.abs(ke-L))||0)),ze*=.2)),ke+=Ne*ze*Ae,r.spring({clamp:!0,mass:1,tension:700,friction:25,velocity:((ot=r.getCurrentVelocities())==null?void 0:ot.pos)||0,restDelta:1,restSpeed:1}).from({pos:D}).to({pos:ke}).start()}).on("panstart",W=>{ie("gestures",W)!==!1&&(W==null?void 0:W.axis)===(x?"y":"x")&&Be(d,"is-dragging")}).on("panend",W=>{ie("gestures",W)!==!1&&Rt(d,"is-dragging")}).on("end",W=>{var gn,ct;if(ie("gestures",W)===!1)return;const{srcEvent:H,axis:C,velocityX:ue,velocityY:fe,currentTouch:oe}=W;if(oe.length>0||!r)return;const pe=H.target,we=mr(pe),Ae=we?we.scrollHeight>we.clientHeight?"y":"x":void 0,Ne=we&&(!C||C===Ae);x&&Fs(H)&&!C&&j(H);const ke=B.length,ze=ie("dragFree");if(!ke)return;let Xe=Ne?0:ie("vertical")?fe:ue;C!==(x?"y":"x")&&(Xe=0);let ot=r!=null&&r.isRunning()?r.getEndValues().pos:D;const It=M&&!x?1:-1;if(Ne||(ot+=Xe*(ze?5:1)*It),!p&&(Xe*It<=0&&ot<A||Xe*It>=0&&ot>L)){let pt=0;return Math.abs(Xe)>0&&(pt=2*Math.abs(Xe),pt=Math.min(.3*se(),pt)),ot=rt(A+-1*pt,ot,L+pt),void r.spring({clamp:!0,mass:1,tension:380,friction:25,velocity:-1*Xe,restDelta:1,restSpeed:1}).from({pos:D}).to({pos:ot}).start()}if(ze||(gn=f.Autoscroll)!=null&&gn.isEnabled())return void(Math.abs(Xe)>10?r.spring({clamp:!0,mass:1,tension:150,friction:25,velocity:-1*Xe,restDelta:1,restSpeed:1}).from({pos:D}).to({pos:ot}).start():r.isRunning()||P||(P=!0,k("settle")));if(!ze&&!((ct=f.Autoscroll)!=null&&ct.isEnabled())&&(!W.offsetX&&!W.offsetY||C==="y"&&!x||C==="x"&&x))return void Me(R,{transition:"tween"});let Wt=N(ot);Math.abs(Xe)>10&&Wt===R&&(Wt+=Xe>0?M&&!x?1:-1:M&&!x?-1:1),Me(Wt,{transition:"tween",tween:{velocity:-1*Xe}})}).init())})(),Yt(d,"is-draggable",!!i&&B.length>0)}function De(z="*"){var H;const W=[];for(const C of ae)(z==="*"||C.class&&C.class.includes(z)||C.el&&((H=C.el)!=null&&H.classList.contains(z)))&&W.push(C);o=void 0,q=z,V=[...W]}function Ge(){if(!r)return;const z=N(r!=null&&r.isRunning()?r.getEndValues().pos:D);z!==R&&(o=R,R=z,Z(),He(),Ve(),k("change",R,o))}function He(){var ue,fe;if(!h)return;for(const oe of h.querySelectorAll("[data-carousel-index]"))oe.innerHTML=R+"";for(const oe of h.querySelectorAll("[data-carousel-page]"))oe.innerHTML=R+1+"";for(const oe of h.querySelectorAll("[data-carousel-pages]"))oe.innerHTML=B.length+"";const z=ie("classes")||{},W=Array.from(h.querySelectorAll("[data-carousel-go-to]")).filter(oe=>oe.closest(`.${z.container}`)===h);for(const oe of W)parseInt(((ue=oe.dataset)==null?void 0:ue.carouselGoTo)||"-1",10)===R?oe.setAttribute("aria-current","true"):oe.removeAttribute("aria-current");for(const oe of h.querySelectorAll("[data-carousel-go-prev]"))oe.toggleAttribute("aria-disabled",!Se()),Se()?oe.removeAttribute("tabindex"):oe.setAttribute("tabindex","-1");for(const oe of h.querySelectorAll("[data-carousel-go-next]"))oe.toggleAttribute("aria-disabled",!Le()),Le()?oe.removeAttribute("tabindex"):oe.setAttribute("tabindex","-1");let H=!1;const C=(fe=B[R])==null?void 0:fe.slides[0];C&&(C.downloadSrc||C.type==="image"&&C.src)&&(H=!0);for(const oe of h.querySelectorAll("[data-carousel-download]"))oe.toggleAttribute("aria-disabled",!H)}function Ve(z){var H;z||(z=(H=B[R])==null?void 0:H.slides[0]);const W=z==null?void 0:z.el;if(W)for(const C of W.querySelectorAll("[data-slide-index]"))C.innerHTML=z.index+1+""}function N(z){var oe,pe,we;if(!B.length)return 0;const W=te();let H=z;p?H-=Math.floor((z-((oe=B[0])==null?void 0:oe.pos))/W)*W||0:H=rt((pe=B[0])==null?void 0:pe.pos,z,(we=B[B.length-1])==null?void 0:we.pos);const C=new Map;let ue=0;for(const Ae of B){const Ne=Math.abs(Ae.pos-H),ke=Math.abs(Ae.pos-H-W),ze=Math.abs(Ae.pos-H+W),Xe=Math.min(Ne,ke,ze);C.set(ue,Xe),ue++}const fe=C.size>0?[...C.entries()].reduce((Ae,Ne)=>Ne[1]<Ae[1]?Ne:Ae):[R,0];return parseInt(fe[0])}function T(){return ne}function se(){return v}function te(z=!0){return V.length?V.reduce((W,H)=>W+H.dim,0)+(V.length-(p&&z?0:1))*ne:0}function le(z){const W=te(),H=se();if(!W||!d||!H)return[];const C=[];z=z===void 0?D:z,p&&(z-=Math.floor(z/W)*W||0);let ue=0;for(let fe of V){const oe=(pe=0)=>{C.indexOf(fe)>-1||(fe.pos=ue-z+pe||0,fe.offset+pe>z-fe.dim-_+.51&&fe.offset+pe<z+H+g-.51&&C.push(fe))};fe.offset=ue,p&&(oe(W),oe(-1*W)),oe(),ue+=fe.dim+ne}return C}function J(z,W){const H=[];for(const C of Array.isArray(z)?z:[z]){const ue=ye({...C,isVirtual:!0});ue.el||(ue.el=document.createElement("div")),k("createSlide",ue),H.push(ue)}ae.splice(W===void 0?ae.length:W,0,...H),S();for(const C of H)k("addSlide",C),F(C);return De(q),H}function ye(z){return(ut(z)||z instanceof HTMLElement)&&(z={html:z}),{index:-1,el:void 0,class:"",isVirtual:!0,dim:0,pos:0,offset:0,html:"",src:"",...z}}function F(z){let W=z.el;if(!z||!W)return;const H=z.html?z.html instanceof HTMLElement?z.html:xi(z.html):void 0;H&&(Be(H,"f-html"),z.htmlEl=H,Be(W,"has-html"),W.append(H),k("contentReady",z))}function y(z){if(!d||!z)return;let W=z.el;if(W){if(W.setAttribute("index",z.index+""),W.parentElement!==d){let H;Be(W,c.classes.slide),Be(W,z.class),Z(z);for(const C of ae)if(C.index>z.index){H=C.el;break}d.insertBefore(W,H&&d.contains(H)?H:null),k("attachSlideEl",z)}return Ve(z),W}}function m(z){const W=z==null?void 0:z.el;W&&(W.remove(),b(W),k("detachSlideEl",z))}function S(){for(let z=0;z<ae.length;z++){const W=ae[z],H=W.el;H&&(W.index!==z&&b(H),H.setAttribute("index",`${z}`)),W.index=z}}function w(){var H,C,ue,fe,oe;if(!h||!d)return;M=ie("rtl"),x=ie("vertical"),E=x?"height":"width";const z=ie("classes");if(Yt(h,z.isLTR,!M),Yt(h,z.isRTL,M),Yt(h,z.isHorizontal,!x),Yt(h,z.isVertical,x),Yt(h,z.hasAdaptiveHeight,ie("adaptiveHeight")),v=0,_=0,g=0,ne=0,d){d.childElementCount||(d.style.display="grid");const pe=d.getBoundingClientRect();v=d.getBoundingClientRect()[E]||0;const we=window.getComputedStyle(d);ne=parseFloat(we.getPropertyValue("--f-carousel-gap"))||0,we.getPropertyValue("overflow-"+(x?"y":"x"))==="visible"&&(_=Math.abs(pe[x?"top":"left"]),g=Math.abs(window[x?"innerHeight":"innerWidth"]-pe[x?"bottom":"right"])),d.style.display=""}if(!v)return;const W=(function(){let pe=0;if(d){let we=document.createElement("div");we.style.display="block",Be(we,c.classes.slide),d.appendChild(we),pe=we.getBoundingClientRect()[E],we.remove(),we=void 0}return pe})();for(const pe of V){const we=pe.el;let Ae=0;if(!pe.isVirtual&&we&&Gr(we)){let Ne=!1;we.parentElement&&we.parentElement===d||(d.appendChild(we),Ne=!0),Ae=we.getBoundingClientRect()[E],Ne&&((H=we.parentElement)==null||H.removeChild(we))}else Ae=W;pe.dim=Ae}if(p=!1,ie("infinite")){p=!0;const pe=te();let we=v+_+g;for(let Ae=0;Ae<V.length;Ae++){const Ne=((C=V[Ae])==null?void 0:C.dim)+ne;if(pe-Ne<we&&pe-Ne-we<Ne){p=!1;break}}}(function(){var gn;if(!h)return;const pe=se(),we=te(!1);let Ae=ie("slidesPerPage");Ae=Ae==="auto"?1/0:parseFloat(Ae+""),B=[];let Ne=0,ke=0;for(const ct of V)(!B.length||Ne+ct.dim-pe>.05||ke>=Ae)&&(B.push({index:B.length,slides:[],dim:0,offset:0,pos:0}),Ne=0,ke=0),(gn=B[B.length-1])==null||gn.slides.push(ct),Ne+=ct.dim+ne,ke++;const ze=ie("center"),Xe=ie("fill");let ot=0;for(const ct of B){ct.dim=(ct.slides.length-1)*ne;for(const pt of ct.slides)ct.dim+=pt.dim;ct.offset=ot,ct.pos=ot,ze!==!1&&(ct.pos-=.5*(pe-ct.dim)),Xe&&!p&&we>pe&&(ct.pos=rt(0,ct.pos,we-pe)),ot+=ct.dim+ne}const It=[];let Wt;for(const ct of B){const pt={...ct};Wt&&Math.abs(pt.pos-Wt.pos)<.1?(Wt.dim+=pt.dim,Wt.slides=[...Wt.slides,...pt.slides]):(Wt=pt,pt.index=It.length,It.push(pt))}B=It,R=rt(0,R,B.length-1)})(),A=((ue=B[0])==null?void 0:ue.pos)||0,L=((fe=B[B.length-1])==null?void 0:fe.pos)||0,l===0?(function(){var we;o=void 0,R=ie("initialPage");const pe=ie("initialSlide")||void 0;pe!==void 0&&(R=Ie.getPageIndex(pe)||0),R=rt(0,R,B.length-1),D=((we=B[R])==null?void 0:we.pos)||0,Q=D})():Q=((oe=B[R||0])==null?void 0:oe.pos)||0,k("refresh"),He()}function b(z){if(!z||!Gr(z))return;const W=parseInt(z.getAttribute("index")||"-1");let H="";for(const ue of Array.from(z.classList)){const fe=ue.match(/^f-(\w+)(Out|In)$/);fe&&fe[1]&&(H=fe[1]+"")}if(!z||!H)return;const C=[`f-${H}Out`,`f-${H}In`,"to-prev","to-next","from-prev","from-next"];z.removeEventListener("animationend",X),Rt(z,C.join(" ")),I.delete(W)}function O(){if(!d)return;const z=I.size>0;for(const W of V)b(W.el);I.clear(),z&&Re()}function X(z){var W;((W=z.animationName)==null?void 0:W.substring(0,2))==="f-"&&(b(z.target),I.size||(Rt(h,"in-transition"),!P&&Math.abs(Ie.getPosition(!0)-Q)<.5&&(P=!0,k("settle"))),Re())}function j(z){K(z),k("click",z)}function K(z){var fe,oe;if(z.defaultPrevented)return;const W=z.composedPath()[0],H=W.closest("[data-carousel-target]"),C=(fe=H==null?void 0:H.dataset)==null?void 0:fe.carouselTarget;if(C&&Fu(C)!==h)return;if(W.closest("[data-carousel-go-prev]"))return Ji(z),void Ie.prev();if(W.closest("[data-carousel-go-next]"))return Ji(z),void Ie.next();const ue=W.closest("[data-carousel-go-to]");if(ue)return Ji(z),void Ie.goTo(parseFloat(ue.dataset.carouselGoTo||"")||0);if(W.closest("[data-carousel-download]")){Ji(z);const pe=(oe=B[R])==null?void 0:oe.slides[0];if(pe&&(pe.downloadSrc||pe.type==="image"&&pe.src)){const we=pe.downloadFilename,Ae=document.createElement("a"),Ne=pe.downloadSrc||pe.src||"";Ae.href=Ne,Ae.target="_blank",Ae.download=we||Ne,Ae.click()}return}}function he(z){var H;const W=z.el;W&&((H=W.querySelector(".f-spinner"))==null||H.remove())}function _e(z){var H;const W=z.el;W&&((H=W.querySelector(".f-html.is-error"))==null||H.remove(),Rt(W,"has-error"))}function Z(z){var oe;z||(z=(oe=B[R])==null?void 0:oe.slides[0]);const W=z==null?void 0:z.el;if(!W)return;let H=ie("formatCaption",z);H===void 0&&(H=z.caption),H=H||"";const C=ie("captionEl");if(C&&C instanceof HTMLElement){if(z.index!==R)return;if(ut(H)&&(C.innerHTML=re(H+"")),H instanceof HTMLElement){if(H.parentElement===C)return;C.innerHTML="",H.parentElement&&(H=H.cloneNode(!0)),C.append(H)}return}if(!H)return;let ue=z.captionEl||W.querySelector(".f-caption");!ue&&H instanceof HTMLElement&&H.classList.contains("f-caption")&&(ue=H),ue||(ue=document.createElement("div"),Be(ue,"f-caption"),ut(H)?ue.innerHTML=re(H+""):H instanceof HTMLElement&&(H.parentElement&&(H=H.cloneNode(!0)),ue.append(H)));const fe=`f-caption-${Ou}_${z.index}`;ue.setAttribute("id",fe),ue.dataset.selectable="true",Be(W,"has-caption"),W.setAttribute("aria-labelledby",fe),z.captionEl=ue,W.insertAdjacentElement("beforeend",ue)}function Me(z,W={}){var pe,we;let{transition:H,tween:C}={transition:c.transition,tween:c.tween,...W||{}};if(!h||!r)return;const ue=B.length;if(!ue||(function(Ae,Ne){var fs,ds,uo;if(!(h&&v&&r&&Ne&&ut(Ne)&&Ne!=="tween"))return!1;for(const Fa of G)if(v-Fa.dim>.5)return!1;if(_>.5||g>.5)return;const ke=B.length;let ze=Ae>R?1:-1;Ae=p?(Ae%ke+ke)%ke:rt(0,Ae,ke-1),M&&(ze*=-1);const Xe=(fs=B[R])==null?void 0:fs.slides[0],ot=Xe==null?void 0:Xe.index,It=(ds=B[Ae])==null?void 0:ds.slides[0],Wt=It==null?void 0:It.index,gn=(uo=B[Ae])==null?void 0:uo.pos;if(Wt===void 0||ot===void 0||ot===Wt||D===gn||Math.abs(v-((It==null?void 0:It.dim)||0))>1)return!1;P=!1,r.pause(),O(),Be(h,"in-transition"),D=Q=gn;const ct=y(Xe),pt=y(It);return Ge(),ct&&(I.add(ot),ct.style.transform="",ct.addEventListener("animationend",X),Rt(ct,c.classes.isSelected),ct.inert=!1,Be(ct,`f-${Ne}Out to-${ze>0?"next":"prev"}`)),pt&&(I.add(Wt),pt.style.transform="",pt.addEventListener("animationend",X),Be(pt,c.classes.isSelected),pt.inert=!1,Be(pt,`f-${Ne}In from-${ze>0?"prev":"next"}`)),Re(),!0})(z,H))return;z=p?(z%ue+ue)%ue:rt(0,z,ue-1),Q=((pe=B[z||0])==null?void 0:pe.pos)||0;const oe=r.isRunning()?r.getEndValues().pos:D;if(Math.abs(Q-oe)<1)return D=Q,R!==z&&(Z(),o=R,R=z,He(),Ve(),k("change",R,o)),Re(),void(P||(P=!0,k("settle")));if(r.pause(),O(),p){const Ae=te(),Ne=Math.floor((oe-((we=B[0])==null?void 0:we.pos))/Ae)||0,ke=Q+Ne*Ae;Q=[ke+Ae,ke,ke-Ae].reduce(function(ze,Xe){return Math.abs(Xe-oe)<Math.abs(ze-oe)?Xe:ze})}H!==!1&&Lt(C)?r.spring(hn({},c.tween,C)).from({pos:D}).to({pos:Q}).start():(D=Q,Ge(),Re(),P||(P=!0,k("settle")))}function be(z){var H;let W=D;if(p&&z!==!0){const C=te();W-=(Math.floor((D-((H=B[0])==null?void 0:H.pos)||0)/C)||0)*C}return W}function Re(){var fe;if(!h||!d)return;G=le();const z=new Set,W=[],H=B[R],C=c.setTransform;let ue;for(const oe of V){const pe=I.has(oe.index),we=G.indexOf(oe)>-1,Ae=((fe=H==null?void 0:H.slides)==null?void 0:fe.indexOf(oe))>-1;if(oe.isVirtual&&!pe&&!we)continue;let Ne=y(oe);if(Ne&&(W.push(oe),Ae&&z.add(Ne),ie("adaptiveHeight")&&Ae)){const ke=(Ne.lastElementChild||Ne).getBoundingClientRect().height;ue=ue==null?ke:Math.max(ue,ke)}}d&&ue&&(d.style.height=`${ue}px`),[...tl(d,`.${c.classes.slide}`)].forEach(oe=>{Yt(oe,c.classes.isSelected,z.has(oe));const pe=ae[parseInt(oe.getAttribute("index")||"-1")];if(!pe)return oe.remove(),void b(oe);const we=I.has(pe.index),Ae=G.indexOf(pe)>-1;if(pe.isVirtual&&!we&&!Ae)return void m(pe);if(oe.inert=!Ae,C===!1)return;let Ne=pe.pos?Math.round(1e4*pe.pos)/1e4:0,ke=0,ze=0,Xe=0,ot=0;we||(ke=x?0:M?-1*Ne:Ne,ze=x?Ne:0,Xe=ca(ke,0,pe.dim,0,100),ot=ca(ze,0,pe.dim,0,100)),C instanceof Function&&!we?C(Ie,pe,{x:ke,y:ze,xPercent:Xe,yPercent:ot}):oe.style.transform=ke||ze?`translate3d(${Xe}%, ${ot}%,0)`:""}),k("render",W)}function Te(){h==null||h.removeEventListener("click",j),document.removeEventListener("mousemove",Ee),I.clear(),s==null||s.disconnect(),s=void 0;for(const z of ae){let W=z.el;W&&Gr(W)&&(z.state=void 0,he(z),_e(z),z.isVirtual?(m(z),z.el=void 0):(b(W),W.style.transform="",d&&!d.contains(W)&&d.appendChild(W)))}for(const z of Object.values(f))z==null||z.destroy();f={},i==null||i.destroy(),i=void 0,r==null||r.destroy(),r=void 0;for(const[z,W]of Object.entries(c.classes||{}))z!=="container"&&Rt(h,W);Rt(d,"is-draggable")}function Se(){return p||R>0}function Le(){return p||R<B.length-1}const Ie={add:function(z,W){var pe;let H=D;const C=R,ue=te(),fe=r!=null&&r.isRunning()?r.getEndValues().pos:D,oe=ue&&Math.floor((fe-(((pe=B[0])==null?void 0:pe.pos)||0))/ue)||0;return J(z,W),De(q),w(),r&&ue&&(C===R&&(H-=oe*ue),H===Q?D=Q:r.spring({clamp:!0,mass:1,tension:300,friction:25,restDelta:1,restSpeed:1}).from({pos:H}).to({pos:Q}).start()),Re(),Ie},canGoPrev:Se,canGoNext:Le,destroy:function(){return k("destroy"),window.removeEventListener("resize",de),Te(),xe.clear(),h=null,B=[],ae=[],c={...As},f={},V=[],a=void 0,q="*",l=2,Ie},emit:k,filter:function(z="*"){return De(z),w(),D=rt(A,D,L),Re(),k("filter",z),Ie},getContainer:function(){return h},getGapDim:T,getGestures:function(){return i},getLastMouseMove:function(){return Nu},getOption:function(z){return ie(z)},getOptions:function(){return c},getPage:function(){return B[R]},getPageIndex:function(z){if(z!==void 0){for(const W of B||[])for(const H of W.slides)if(H.index===z)return W.index;return-1}return R},getPageIndexFromPosition:N,getPageProgress:function(z,W){var pe;z===void 0&&(z=R);const H=B[z];if(!H)return z>R?-1:1;const C=te(),ue=T();let fe=H.pos,oe=be();if(p&&W!==!0){const we=Math.floor((oe-((pe=B[0])==null?void 0:pe.pos))/C)||0;oe-=we*C,fe=[fe+C,fe,fe-C].reduce(function(Ae,Ne){return Math.abs(Ne-oe)<Math.abs(Ae-oe)?Ne:Ae})}return(oe-fe)/(H.dim+ue)||0},getPageVisibility:function(z){var fe;z===void 0&&(z=R);const W=B[z];if(!W)return z>R?-1:1;const H=be(),C=se();let ue=W.pos;if(p){const oe=te(),pe=ue+(Math.floor((H-((fe=B[0])==null?void 0:fe.pos))/oe)||0)*oe;ue=[pe+oe,pe,pe-oe].reduce(function(we,Ae){return Math.abs(Ae-H)<Math.abs(we-H)?Ae:we})}return ue>H&&ue+W.dim<H+C?1:ue<H?(ue+W.dim-H)/W.dim||0:ue+W.dim>H+C&&(H+C-ue)/W.dim||0},getPages:function(){return B},getPlugins:function(){return f},getPosition:be,getSlides:function(){return ae},getState:function(){return l},getTotalSlideDim:te,getTween:function(){return r},getViewport:function(){return d},getViewportDim:se,getVisibleSlides:function(z){return z===void 0?G:le(z)},goTo:Me,hasNavigated:function(){return o!==void 0},hideError:_e,hideLoading:he,init:function(){if(!t||!Gr(t))throw new Error("No Element found");return l!==0&&(Te(),l=0),h=t,u=e,window.removeEventListener("resize",de),u.breakpoints&&window.addEventListener("resize",de),de(),Ie},isInfinite:function(){return p},isInTransition:function(){return I.size>0},isRTL:function(){return M},isSettled:function(){return P},isVertical:function(){return x},localize:re,next:function(z={}){return Me(R+1,z),Ie},off:function(z,W){for(const H of z instanceof Array?z:[z])xe.has(H)&&xe.set(H,xe.get(H).filter(C=>C!==W));return Ie},on:function(z,W){for(const H of z instanceof Array?z:[z])xe.set(H,[...xe.get(H)||[],W]);return Ie},prev:function(z={}){return Me(R-1,z),Ie},reInit:function(z={},W){return Te(),l=0,a=void 0,q="*",e=z,u=z,Lt(W)&&(n=W),de(),Ie},remove:function(z){z===void 0&&(z=ae.length-1);const W=ae[z];return W&&(k("removeSlide",W),W.el&&(b(W.el),W.el.remove(),W.el=void 0),ae.splice(z,1),De(q),w(),D=rt(A,D,L),Re()),Ie},setPosition:function(z){D=z,Ge(),Re()},showError:function(z,W){if(l===1){he(z),_e(z);const H=z.el;if(H){const C=document.createElement("div");Be(C,"f-html"),Be(C,"is-error"),C.innerHTML=re(W||"<p>{{ERROR}}</p>"),z.htmlEl=C,Be(H,"has-html has-error"),H.insertAdjacentElement("afterbegin",C),k("contentReady",z)}}return Ie},showLoading:function(z){const W=z.el,H=W==null?void 0:W.querySelector(".f-spinner");if(!W||H)return Ie;const C=ie("spinnerTpl"),ue=xi(C);return ue&&(Be(ue,"f-spinner"),W.insertAdjacentElement("beforeend",ue)),Ie},version:"6.1.15"};return Ie};fa.l10n={en_EN:Nc},fa.getDefaults=()=>As;/*! License details at fancyapps.com/license */const ur=function(t="",e="",n=""){return t.split(e).join(n)};/*! License details at fancyapps.com/license */const Bu={tpl:t=>`<img class="f-panzoom__content" 
    ${t.srcset?'data-lazy-srcset="{{srcset}}"':""} 
    ${t.sizes?'data-lazy-sizes="{{sizes}}"':""} 
    data-lazy-src="{{src}}" alt="{{alt}}" />`},I_=()=>{let t;function e(c,f){const h=t==null?void 0:t.getOptions().Zoomable;let d=(Lt(h)?{...Bu,...h}:Bu)[c];return d&&typeof d=="function"&&f?d(f):d}function n(){t&&t.getOptions().Zoomable!==!1&&(t.on("addSlide",s),t.on("removeSlide",o),t.on("attachSlideEl",a),t.on("click",r),t.on("change",i),t.on("ready",i))}function i(){l();const c=(t==null?void 0:t.getVisibleSlides())||[];if(c.length>1||(t==null?void 0:t.getOption("transition"))==="slide")for(const f of c){const h=f.panzoomRef;h&&((t==null?void 0:t.getPage().slides)||[]).indexOf(f)<0&&h.execute(Oe.ZoomTo,{...h.getStartPosition()})}}function r(c,f){const h=f.target;h&&!f.defaultPrevented&&h.dataset.panzoomAction&&u(h.dataset.panzoomAction)}function s(c,f){const h=f.el;if(!t||!h||f.panzoomRef)return;const d=f.src||f.lazySrc||"",v=f.alt||f.caption||`Image #${f.index}`,_=f.srcset||f.lazySrcset||"",g=f.sizes||f.lazySizes||"";if(d&&ut(d)&&!f.html&&(!f.type||f.type==="image")){f.type="image",f.thumbSrc=f.thumbSrc||d;let D=e("tpl",f);D=ur(D,"{{src}}",d+""),D=ur(D,"{{srcset}}",_+""),D=ur(D,"{{sizes}}",g+""),h.insertAdjacentHTML("afterbegin",D)}const p=h.querySelector(".f-panzoom__content");if(!p)return;p.setAttribute("alt",v+"");const M=f.width&&f.width!=="auto"?parseFloat(f.width+""):"auto",x=f.height&&f.height!=="auto"?parseFloat(f.height+""):"auto",E=Ql(h,{width:M,height:x,classes:{container:"f-zoomable"},event:()=>t==null?void 0:t.getLastMouseMove(),spinnerTpl:()=>(t==null?void 0:t.getOption("spinnerTpl"))||"",...e("Panzoom")});E.on("*",(D,P,...R)=>{t&&(P==="loading"&&(f.state=0),P==="loaded"&&(f.state=1),P==="error"&&(f.state=2,t==null||t.showError(f,"{{IMAGE_ERROR}}")),t.emit(`panzoom:${P}`,f,...R),P==="loading"&&t.emit("contentLoading",f),P==="ready"&&t.emit("contentReady",f),f.index===(t==null?void 0:t.getPageIndex())&&l())}),f.panzoomRef=E}function o(c,f){f.panzoomRef&&(f.panzoomRef.destroy(),f.panzoomRef=void 0)}function a(c,f){const h=f.panzoomRef;if(h)switch(h.getState()){case 0:h.init();break;case 3:h.execute(Oe.ZoomTo,{...h.getStartPosition(),velocity:0})}}function l(){var h,d;const c=(t==null?void 0:t.getContainer())||void 0,f=(d=(h=t==null?void 0:t.getPage())==null?void 0:h.slides[0])==null?void 0:d.panzoomRef;if(c)if(f)f.updateControls(c);else for(const v of c.querySelectorAll("[data-panzoom-action]")||[])v.setAttribute("aria-disabled",""),v.setAttribute("tabindex","-1")}function u(c,...f){var h;(h=t==null?void 0:t.getPage().slides[0].panzoomRef)==null||h.execute(c,...f)}return{init:function(c){t=c,t.on("initPlugins",n)},destroy:function(){if(t){t.off("initPlugins",n),t.off("addSlide",s),t.off("removeSlide",o),t.off("attachSlideEl",a),t.off("click",r),t.off("change",i),t.off("ready",i);for(const c of t.getSlides())o(0,c)}t=void 0},execute:u}};/*! License details at fancyapps.com/license */const zu={syncOnChange:!1,syncOnClick:!0,syncOnHover:!1},np=()=>{let t,e;function n(){const d=t==null?void 0:t.getOptions().Sync;return Lt(d)?{...zu,...d}:zu}function i(d){var v,_,g;t&&d&&(e=d,t.getOptions().classes={...t.getOptions().classes,isSelected:""},t.getOptions().initialSlide=((_=(v=e.getPage())==null?void 0:v.slides[0])==null?void 0:_.index)||0,n().syncOnChange&&t.on("change",o),n().syncOnClick&&t.on("click",l),n().syncOnHover&&((g=t.getViewport())==null||g.addEventListener("mouseover",u)),(function(){!t||!e||(t.on("ready",s),t.on("refresh",c),e.on("change",a),e.on("filter",f))})())}function r(){const d=n().target;t&&d&&i(d)}function s(){h()}function o(){var d;if(t&&e){const v=((d=t.getPage())==null?void 0:d.slides)||[],_=e.getPageIndex(v[0].index||0);_>-1&&e.goTo(_,t.hasNavigated()?void 0:{tween:!1,transition:!1}),h()}}function a(){var d;if(t&&e){const v=t.getPageIndex(((d=e.getPage())==null?void 0:d.slides[0].index)||0);v>-1&&t.goTo(v,e.hasNavigated()?void 0:{tween:!1,transition:!1}),h()}}function l(d,v){var p;if(!t||!e||(p=t.getTween())!=null&&p.isRunning())return;const _=t==null?void 0:t.getOptions().classes.slide;if(!_)return;const g=v.target.closest(`.${_}`);if(g){const M=parseInt(g.getAttribute("index")||"")||0,x=e.getPageIndex(M);e.goTo(x)}}function u(d){t&&l(0,d)}function c(){var d;if(t&&e){const v=t.getPageIndex(((d=e.getPage())==null?void 0:d.slides[0].index)||0);v>-1&&t.goTo(v,{tween:!1,transition:!1}),h()}}function f(d,v){t&&e&&(t.filter(v),a())}function h(){var v,_,g;if(!e)return;const d=((_=(v=e.getPage())==null?void 0:v.slides[0])==null?void 0:_.index)||0;for(const p of(t==null?void 0:t.getSlides())||[])(g=p.el)==null||g.classList.toggle("is-selected",p.index===d)}return{init:function(d){t=d,t.on("initSlides",r)},destroy:function(){var d;t==null||t.off("ready",s),t==null||t.off("refresh",c),t==null||t.off("change",o),t==null||t.off("click",l),(d=t==null?void 0:t.getViewport())==null||d.removeEventListener("mouseover",u),e==null||e.off("change",a),e==null||e.off("filter",f),e=void 0,t==null||t.off("initSlides",r),t=void 0},getTarget:function(){return e}}};/*! License details at fancyapps.com/license */const Hu={showLoading:!0,preload:1},yo="is-lazyloading",Gu="is-lazyloaded",Vu="has-lazyerror",ip=()=>{let t;function e(){const r=t==null?void 0:t.getOptions().Lazyload;return Lt(r)?{...Hu,...r}:Hu}function n(r){var u;const s=r.el;if(!s)return;const o=e(),a="[data-lazy-src],[data-lazy-srcset],[data-lazy-bg]",l=Array.from(s.querySelectorAll(a));s.matches(a)&&l.push(s);for(const c of l){const f=c.dataset.lazySrc,h=c.dataset.lazySrcset,d=c.dataset.lazySizes,v=c.dataset.lazyBg,_=(c instanceof HTMLImageElement||c instanceof HTMLSourceElement)&&(f||h),g=!!v;if(!_&&!g)continue;const p=f||h||v;if(p){if(_){const M=(u=c.parentElement)==null?void 0:u.classList.contains("f-panzoom__wrapper");o.showLoading&&(t==null||t.showLoading(r)),c.addEventListener("load",()=>{t==null||t.hideLoading(r),Rt(c,Vu),c instanceof HTMLImageElement?c.decode().finally(()=>{Rt(c,yo),Be(c,Gu)}).catch(()=>{}):(Rt(c,yo),Be(c,Gu)),M||(t==null||t.emit("lazyLoad:loaded",r,c,p))}),c.addEventListener("error",()=>{t==null||t.hideLoading(r),Rt(c,yo),Be(c,Vu),M||(t==null||t.emit("lazyLoad:error",r,c,p))}),c.classList.add("f-lazyload"),c.classList.add(yo),M||(t==null||t.emit("lazyLoad:load",r,c,p)),f&&(c.src=f),h&&(c.srcset=h),d&&(c.sizes=d)}else g&&(c.style.backgroundImage=`url('${v}')`);delete c.dataset.lazySrc,delete c.dataset.lazySrcset,delete c.dataset.lazySizes,delete c.dataset.lazyBg}}}function i(){if(!t)return;const r=[...t.getVisibleSlides()],s=e().preload;if(s>0){const o=t.getPosition(),a=t.getViewportDim();r.push(...t.getVisibleSlides(o+a*s),...t.getVisibleSlides(o-a*s))}for(const o of r)n(o)}return{init:function(r){t=r,t.on("render",i)},destroy:function(){t==null||t.off("render",i),t=void 0}}};/*! License details at fancyapps.com/license */const ku='<svg width="24" height="24" viewBox="0 0 24 24" tabindex="-1">',Wu="</svg>",Xu={prevTpl:ku+'<path d="M15 3l-9 9 9 9"></path>'+Wu,nextTpl:ku+'<path d="M9 3l9 9-9 9"></path>'+Wu},U_=()=>{let t,e,n;function i(o){const a=(function(){const c=t==null?void 0:t.getOptions().Arrows;return Lt(c)?{...Xu,...c}:Xu})(),l=`<button data-carousel-go-${o} tabindex="0" class="f-button is-arrow is-${o}" title="{{${o.toUpperCase()}}}">`+a[`${o}Tpl`]+"</button>",u=xi(t.localize(l))||void 0;return u&&Be(u,a[`${o}Class`]),u}function r(){var o;e==null||e.remove(),e=void 0,n==null||n.remove(),n=void 0,(o=t==null?void 0:t.getContainer())==null||o.classList.remove("has-arrows")}function s(){t&&t.getOptions().Arrows!==!1&&t.getPages().length>1?((function(){if(!t)return;const o=t.getViewport();o&&(e||(e=i("prev"),e&&o.insertAdjacentElement("beforebegin",e)),n||(n=i("next"),n&&o.insertAdjacentElement("afterend",n)),Yt(t.getContainer(),"has-arrows",!0))})(),t&&(e==null||e.toggleAttribute("aria-disabled",!t.canGoPrev()),n==null||n.toggleAttribute("aria-disabled",!t.canGoNext()))):r()}return{init:function(o){t=o.on(["change","refresh"],s)},destroy:function(){r(),t==null||t.off(["change","refresh"],s),t=void 0}}};/*! License details at fancyapps.com/license */const rp='<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/>',il='<g><line x1="11" y1="8" x2="11" y2="14"></line></g>'+rp,$u={moveLeft:["moveLeft","MOVE_LEFT",'<path d="M5 12h14M5 12l6 6M5 12l6-6"/>'],moveRight:["moveRight","MOVE_RIGHT",'<path d="M5 12h14M13 18l6-6M13 6l6 6"/>'],moveUp:["moveUp","MOVE_UP",'<path d="M12 5v14M18 11l-6-6M6 11l6-6"/>'],moveDown:["moveDown","MOVE_DOWN",'<path d="M12 5v14M18 13l-6 6M6 13l6 6"/>'],zoomOut:["zoomOut","ZOOM_OUT",rp],zoomIn:["zoomIn","ZOOM_IN",il],toggleFull:["toggleFull","TOGGLE_FULL",il],iterateZoom:["iterateZoom","ITERATE_ZOOM",il],toggle1to1:["toggleFull","TOGGLE_FULL",'<path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/>'],rotateCCW:["rotateCCW","ROTATE_CCW",'<path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/>'],rotateCW:["rotateCW","ROTATE_CW",'<path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/>'],flipX:["flipX","FLIP_X",'<path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/>'],flipY:["flipY","FLIP_Y",'<path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/>'],reset:["reset","RESET",'<path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>'],toggleFS:["toggleFS","TOGGLE_FS",'<g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g>']},Oc={};for(const t of Object.keys($u)){const e=$u[t];Oc[t]={tpl:`<button data-panzoom-action="${e[0]}" class="f-button" title="{{${e[1]}}}"><svg>${e[2]}</svg></button>`}}/*! License details at fancyapps.com/license */var qu;(function(t){t.Left="left",t.middle="middle",t.right="right"})(qu||(qu={}));const Yu={counter:{tpl:'<div class="f-counter"><span data-carousel-page></span>/<span data-carousel-pages></span></div>'},download:{tpl:'<button data-carousel-download class="f-button" title="{{DOWNLOAD}}"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></button>'},autoplay:{tpl:'<button data-autoplay-action="toggle" class="f-button" title="{{TOGGLE_AUTOPLAY}}"><svg><g><path d="M5 3.5 19 12 5 20.5Z"/></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'},thumbs:{tpl:'<button data-thumbs-action="toggle" class="f-button" title="{{TOGGLE_THUMBS}}"><svg><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1M9 21h1M14 21h1M19 21h1"/></svg></button>'},...Oc},ju={absolute:!1,display:{left:[],middle:["zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY","reset"],right:[]},enabled:"auto",items:{}},sp=()=>{let t,e;function n(r){const s=t==null?void 0:t.getOptions().Toolbar;let o=(Lt(s)?{...ju,...s}:ju)[r];return o&&typeof o=="function"&&t?o(t):o}function i(){var _;if(!t||e||(t==null?void 0:t.getOptions().Toolbar)===!1)return;const r=t.getContainer();if(!r)return;let s=n("enabled");if(!s)return;const o=n("absolute"),a=t.getSlides().length>1;let l=!1,u=!1;for(const g of t.getSlides())g.panzoomRef&&(l=!0),(g.downloadSrc||g.type==="image"&&g.src)&&(u=!0);const c=((_=t.getPlugins().Thumbs)==null?void 0:_.isEnabled())||!1,f=a&&t.getPlugins().Autoplay||!1,h=t.getPlugins().Fullscreen&&(document.fullscreenEnabled||document.webkitFullscreenEnabled);if(s==="auto"&&(s=l),!s)return;e=r.querySelector(".f-carousel__toolbar")||void 0,e||(e=document.createElement("div"),Be(e,"f-carousel__toolbar"));const d=n("display"),v=hn({},Yu,n("items"));for(const g of["left","middle","right"]){const p=d[g]||[],M=document.createElement("div");Be(M,`f-carousel__toolbar__column is-${g}`);for(const x of p){let E;if(ut(x)){if(x==="counter"&&!a||x==="autoplay"&&!f||Object.prototype.hasOwnProperty.call(Oc,x)&&!l||x==="fullscreen"&&!h||x==="thumbs"&&!c||x==="download"&&!u)continue;E=v[x]}if(Lt(x)&&(E=x),E&&E.tpl){let D=t.localize(E.tpl);D=D.split("<svg>").join('<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24">');const P=xi(D);P&&(typeof E.click=="function"&&t&&P.addEventListener("click",R=>{R.preventDefault(),R.stopPropagation(),typeof E.click=="function"&&t&&E.click(t,R)}),M.append(P))}}e.append(M)}if(e.childElementCount){if(o&&Be(e,"is-absolute"),!e.parentElement){const g=n("parentEl");g?g.insertAdjacentElement("afterbegin",e):r.insertAdjacentElement("afterbegin",e)}r.contains(e)&&(Be(r,"has-toolbar"),o&&Be(r,"has-absolute-toolbar"))}}return{init:function(r){t=r,t==null||t.on("initSlides",i)},destroy:function(){t==null||t.off("initSlides",i),Rt(t==null?void 0:t.getContainer(),"has-toolbar has-absolute-toolbar"),e==null||e.remove(),e=void 0},add:function(r,s){Yu[r]=s},isEnabled:function(){return!!e}}};/*! License details at fancyapps.com/license */const Ku={autoStart:!0,pauseOnHover:!0,showProgressbar:!0,timeout:2e3},N_=()=>{let t,e,n=!1,i=!1,r=!1,s=null;function o(D){const P=t==null?void 0:t.getOptions().Autoplay;let R=(Lt(P)?{...Ku,...P}:Ku)[D];return R&&typeof R=="function"&&t?R(t):R}function a(){clearTimeout(e),e=void 0}function l(){if(!t||!n||r||i||e||!t.isSettled()||(function(){var R;const P=((R=t==null?void 0:t.getPage())==null?void 0:R.slides)||[];for(const Q of P)if(Q.state===0)return!0;return!1})())return;(function(){var Q,A,L,q;if(!t||(f(),!o("showProgressbar")))return;let P=o("progressbarParentEl");if(!P&&((Q=t.getPlugins().Toolbar)!=null&&Q.isEnabled())&&(P=t.getContainer()),!P&&((A=t.getPlugins().Toolbar)==null?void 0:A.isEnabled())!==!0){const ae=((L=t.getPages()[0])==null?void 0:L.slides)||[],V=((q=t.getPage())==null?void 0:q.slides)||[];ae.length===1&&V.length===1&&(P=V[0].el)}if(P||(P=t.getViewport()),!P)return;s=document.createElement("div"),Be(s,"f-progressbar"),P.prepend(s);const R=o("timeout")||1e3;s.style.animationDuration=`${R}ms`})();const D=o("timeout");e=setTimeout(()=>{t&&n&&!i&&(t.isInfinite()||t.getPageIndex()!==t.getPages().length-1?t.next():t.goTo(0))},D)}function u(){var P;if(!t||t.getPages().length<2||t.getOptions().Autoplay===!1||n)return;n=!0,t.emit("autoplay:start",o("timeout")),Be(t.getContainer(),"has-autoplay"),(P=t.getTween())==null||P.on("start",p);const D=t==null?void 0:t.getContainer();D&&o("pauseOnHover")&&matchMedia("(hover: hover)").matches&&(D.addEventListener("mouseenter",M,!1),D.addEventListener("mouseleave",x,!1)),t.on("change",_),t.on("settle",g),t.on("contentReady",d),t.on("panzoom:touchStart",c),t.on("panzoom:wheel",c),t.isSettled()&&l()}function c(){var D;if(a(),f(),t){if(n){t.emit("autoplay:end"),(D=t.getTween())==null||D.off("start",p);const P=t.getContainer();P&&(P.classList.remove("has-autoplay"),P.removeEventListener("mouseenter",M,!1),P.removeEventListener("mouseleave",x,!1))}t.off("change",_),t.off("settle",g),t.off("contentReady",d),t.off("panzoom:touchStart",c),t.off("panzoom:wheel",c)}n=!1,i=!1}function f(){s&&(s.remove(),s=null)}function h(){t&&t.getPages().length>1&&o("autoStart")&&u()}function d(){l()}function v(D,P){const R=P.target;R&&!P.defaultPrevented&&R.dataset.autoplayAction==="toggle"&&E.toggle()}function _(){!t||!(t!=null&&t.isInfinite())&&t.getPageIndex()===t.getPages().length-1?c():(a(),f())}function g(){l()}function p(){a(),f()}function M(){r=!0,n&&(a(),f())}function x(){r=!1,n&&!i&&(t!=null&&t.isSettled())&&l()}const E={init:function(D){t=D,t.on("ready",h),t.on("click",v)},destroy:function(){c(),t==null||t.off("ready",h),t==null||t.off("click",v),t=void 0},isEnabled:()=>n,pause:function(){i=!0,a(),f()},resume:function(){i=!1,n&&!r&&l()},start(){u()},stop(){c()},toggle(){n?c():u()}};return E};/*! License details at fancyapps.com/license */const rl={Carousel:{Lazyload:{showLoading:!1}},minCount:2,showOnStart:!0,thumbTpl:'<button aria-label="Slide to #{{page}}"><img draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>',type:"modern"};let sl;const O_=()=>{let t,e,n,i,r,s=0,o=0,a=!0;function l(V){const I=t==null?void 0:t.getOptions().Thumbs;let G=(Lt(I)?{...rl,...I}:rl)[V];return G&&typeof G=="function"&&t?G(t):G}function u(){if(!t||(t==null?void 0:t.getOptions().Thumbs)===!1)return!1;let V=0;for(const I of t.getSlides())I.thumbSrc&&V++;return V>=l("minCount")}function c(){return l("type")==="modern"}function f(){return l("type")==="scrollable"}function h(){const V=[],I=(t==null?void 0:t.getSlides())||[];for(const G of I)V.push({index:G.index,class:G.thumbClass,html:d(G)});return V}function d(V){const I=V.thumb?V.thumb instanceof HTMLImageElement?V.thumb.src:V.thumb:V.thumbSrc||void 0,G=V.thumbAlt===void 0?`Thumbnail #${(V.index||0)+1}`:V.thumbAlt+"";let B=l("thumbTpl");return B=ur(B,"{{alt}}",G),B=ur(B,"{{src}}",I+""),B=ur(B,"{{index}}",`${V.index||0}`),B=ur(B,"{{page}}",`${(V.index||0)+1}`),B}function v(V){return`<div index="${V.index||0}" class="f-thumbs__slide ${V.class||""}">${V.html||""}</div>`}function _(V=!1){var B;const I=t==null?void 0:t.getContainer();if(!t||!I||n||!u())return;const G=((B=l("Carousel"))==null?void 0:B.classes)||{};if(G.container=G.container||"f-thumbs",!n){const $=I.nextElementSibling;$!=null&&$.classList.contains(G.container)&&(n=$)}if(!n){n=document.createElement("div");const $=l("parentEl");$?$.insertAdjacentElement("beforeend",n):I.insertAdjacentElement("afterend",n)}Be(n,G.container),Be(n,"f-thumbs"),Be(n,`is-${l("type")}`),V&&Be(n,"is-hidden")}function g(){if(!n||!f())return;i=document.createElement("div"),Be(i,"f-thumbs__viewport");let V="";for(const I of h())typeof(I.html||"")=="string"&&(V+=v(I));i.innerHTML=V,n.append(i),n.addEventListener("click",I=>{I.preventDefault();const G=I.target.closest("[index]"),B=parseInt((G==null?void 0:G.getAttribute("index"))||"-1");t&&B>-1&&t.goTo(B)}),r=new IntersectionObserver(I=>{I.forEach(G=>{G.isIntersecting&&G.target instanceof HTMLImageElement&&(G.target.src=G.target.getAttribute("data-lazy-src")+"",G.target.removeAttribute("data-lazy-src"),r==null||r.unobserve(G.target))})},{root:i,rootMargin:"100px"}),n.querySelectorAll("[data-lazy-src]").forEach(I=>{r==null||r.observe(I)}),t==null||t.emit("thumbs:ready")}function p(){var G;if(!sl||!t||!n||f()||e)return;const V=h();if(!V.length)return;const I=hn({},{Sync:{target:t},Lazyload:{preload:1},slides:V,classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",slide:"f-thumbs__slide"},center:!0,fill:!c(),infinite:!1,dragFree:!0,rtl:t.getOptions().rtl||!1,slidesPerPage:B=>{let $=0;return c()&&((function(){if(!c()||!n)return;const Y=ne=>n&&parseFloat(getComputedStyle(n).getPropertyValue("--f-thumb-"+ne))||0;s=Y("width"),o=Y("clip-width")})(),$=4*(s-o)),B&&B.getTotalSlideDim()<=B.getViewportDim()-$?1/0:1}},rl.Carousel||{},l("Carousel")||{});e=sl(n,I,{Sync:np,Lazyload:ip}),e.on("ready",()=>{Be(n,"is-syncing"),t==null||t.emit("thumbs:ready"),c()&&(t==null||t.on("render",D))}),e.on("destroy",()=>{t==null||t.emit("thumbs:destroy")}),e.init(),(G=e.getGestures())==null||G.on("start",()=>{a=!1}),e.on("click",(B,$)=>{const Y=$.target;if(Y){const ne=Y.matches("button")?Y:Y.firstElementChild;ne&&ne.matches("button")&&($.preventDefault(),ne.focus({preventScroll:!0}))}}),Be(t.getContainer(),"has-thumbs"),ae()}function M(){u()&&l("showOnStart")&&(_(),g())}function x(){var V;u()&&(p(),t==null||t.on("addSlide",R),t==null||t.on("removeSlide",Q),t==null||t.on("click",A),t==null||t.on("refresh",L),(V=t==null?void 0:t.getGestures())==null||V.on("start",E),q(!0))}function E(){var I,G;a=!0,((I=document.activeElement)==null?void 0:I.closest(".f-thumbs"))&&((G=document.activeElement)==null||G.blur())}function D(){var V,I;n==null||n.classList.toggle("is-syncing",(t==null?void 0:t.hasNavigated())===!1||((V=t==null?void 0:t.getTween())==null?void 0:V.isRunning())),ae(),(I=t==null?void 0:t.getGestures())!=null&&I.isPointerDown()&&(function(){if(!c()||!t||!e||!a)return;const G=e.getTween(),B=e.getPages(),$=t.getPageIndex()||0,Y=t.getPageProgress()||0;if(!(t&&B&&B[$]&&G))return;const ne=G.isRunning()?G.getCurrentValues().pos:e.getPosition();if(ne===void 0)return;let ie=B[$].pos+Y*(s-o);ie=rt(B[0].pos,ie,B[B.length-1].pos),G.from({pos:ne}).to({pos:ie}).start()})()}function P(){a=!0,q()}function R(V,I){const G={html:d(I)};if(e)e.add(G,I.index);else if(i){const B=xi(v(G));if(B){i.append(B);const $=B.querySelector("img");$&&(r==null||r.observe($))}}}function Q(V,I){var G;e?e.remove(I.index):i&&((G=i.querySelector(`[index="${I.index}"]`))==null||G.remove())}function A(V,I){var B;const G=I.target;I.defaultPrevented||((B=G==null?void 0:G.dataset)==null?void 0:B.thumbsAction)!=="toggle"||(n||(_(!0),g(),p()),n&&n.classList.toggle("is-hidden"))}function L(){q()}function q(V=!1){if(!t||!i||!f())return;const I=t.getPageIndex();i.querySelectorAll(".is-selected").forEach(B=>{B.classList.remove("is-selected")});const G=i.querySelector(`[index="${I}"]`);if(G){G.classList.add("is-selected");const B=i.getBoundingClientRect(),$=G.getBoundingClientRect(),Y=G.offsetTop-i.offsetTop-.5*B.height+.5*$.height,ne=G.scrollLeft-i.scrollLeft-.5*B.width+.5*$.width;i.scrollTo({top:Y,left:ne,behavior:V?"instant":"smooth"})}}function ae(){if(!c()||!t||!e)return;const V=(e==null?void 0:e.getSlides())||[];let I=-.5*s;for(const G of V){const B=G.el;if(!B)continue;let $=t.getPageProgress(G.index)||0;$=Math.max(-1,Math.min(1,$)),$>-1&&$<1&&(I+=.5*s*(1-Math.abs($))),$=Math.round(1e4*$)/1e4,I=Math.round(1e4*I)/1e4,B.style.setProperty("--progress",`${Math.abs($)}`),B.style.setProperty("--shift",`${t!=null&&t.isRTL()?-1*I:I}px`),$>-1&&$<1&&(I+=.5*s*(1-Math.abs($)))}}return{init:function(V,I){sl=I,t=V,t.on("ready",x),t.on("initSlides",M),t.on("change",P)},destroy:function(){var V,I;f()&&(t==null||t.emit("thumbs:destroy")),t==null||t.off("ready",x),t==null||t.off("initSlides",M),t==null||t.off("change",P),t==null||t.off("render",D),t==null||t.off("addSlide",R),t==null||t.off("click",A),t==null||t.off("refresh",L),(V=t==null?void 0:t.getGestures())==null||V.off("start",E),(I=t==null?void 0:t.getContainer())==null||I.classList.remove("has-thumbs"),t=void 0,e==null||e.destroy(),e=void 0,n==null||n.remove(),n=void 0},getCarousel:function(){return e},getContainer:function(){return n},getType:function(){return l("type")},isEnabled:u}};/*! License details at fancyapps.com/license */const Zu={autosize:!1,iframeAttr:{allow:"autoplay; fullscreen",scrolling:"auto"},preload:!1},F_=()=>{let t;function e(){const d=t==null?void 0:t.getOptions().Html;return Lt(d)?hn({},Zu,d):Zu}function n(){return(t==null?void 0:t.getOptions().Html)!==!1}function i(d){return d.type==="iframe"||d.type==="pdf"||d.type==="gmap"}function r(d){const v=`${d}`;return v.match(/^\d+$/)?`${v}px`:v}function s(d){if(d===void 0||d==="")return;const v=`${d}`.trim();if(!v.match(/^\d+(\.\d+)?(px)?$/))return;const _=parseFloat(v);return Number.isFinite(_)?_:void 0}function o(d,v){const _=d[v]??e()[v];return _==="true"||_!=="false"&&_}function a(d,v){if(!n())return;let _=v.type,g=v.src;if(!_&&ut(g)){if(g.charAt(0)==="#"?_="inline":g.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.((a)?png|avif|gif|jp(g|eg)|pjp(eg)?|jfif|svg|webp|bmp|ico|tif(f)?)((\?|#).*)?$)/i)?_="image":g.match(/\.(pdf)((\?|#).*)?$/i)?_="pdf":g.match(/\.(html|php)((\?|#).*)?$/i)&&(_="iframe"),!_){const p=g.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+\.?\d+?)z))|(?:\?ll=))(.*)?/i);p&&(g=`https://maps.google.${p[1]}/?ll=${(p[2]?p[2]+"&z="+Math.floor(parseFloat(p[3]))+(p[4]?p[4].replace(/^\//,"&"):""):p[4]+"").replace(/\?/,"&")}&output=${p[4]&&p[4].indexOf("layer=c")>0?"svembed":"embed"}`,_="gmap")}if(!_){const p=g.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i);p&&(g=`https://maps.google.${p[1]}/maps?q=${p[2].replace("query=","q=").replace("api=1","")}&output=embed`,_="gmap")}_&&(v.src=g,v.type=_)}}function l(d,v){n()&&i(v)&&(function(_){const g=_.el,p=_.src;if(!t||!g||!p)return;const M=document.createElement("iframe");Be(M,"f-iframe");for(const[P,R]of Object.entries(e().iframeAttr||{}))M.setAttribute(P,R);M.onerror=()=>{_.state=2,t==null||t.showError(_,"{{IFRAME_ERROR}}")};const x=document.createElement("div");Be(x,"f-html"),x.append(M),_.htmlEl=x,_.contentEl=M,Be(g,`has-html has-iframe has-${_.type}`),g.prepend(x),f(_);const E=o(_,"preload"),D=o(_,"autosize");_.type==="iframe"&&(E||D)?(_.state=0,t.showLoading(_),Be(g,"is-loading"),M.onload=()=>{if(!t||t.getState()===2||!M.src.length||_.contentEl!==M||!M.isConnected)return;_.state=1;const P=M.dataset.ready!=="true";M.dataset.ready="true",h(_),t.hideLoading(_),P&&t.emit("contentReady",_),Rt(g,"is-loading")},M.src=`${p}`):(M.src=`${p}`,t.emit("contentReady",_))})(v)}function u(d,v){var _,g;if(i(v)){const p=v.el;t==null||t.hideError(v),(_=v.contentEl)==null||_.remove(),v.contentEl=void 0,(g=v.htmlEl)==null||g.remove(),v.htmlEl=void 0,p&&(Rt(p,"has-html has-iframe has-pdf has-gmap"),Rt(p,"is-loading"))}}function c(){for(const d of(t==null?void 0:t.getSlides())||[])i(d)&&(f(d),d.state===1&&h(d))}function f(d){const v=d.htmlEl;if(v&&i(d)&&(v.style.aspectRatio="",v.style.width="",v.style.height="",v.style.maxWidth="",v.style.maxHeight="",d.width&&(v.style.maxWidth=r(d.width)),d.height&&(v.style.maxHeight=r(d.height)),d.aspectRatio)){const _=d.aspectRatio.split("/"),g=parseFloat(_[0].trim()),p=_[1]?parseFloat(_[1].trim()):0,M=g&&p?g/p:g;v.offsetHeight;const x=v.getBoundingClientRect(),E=M<(x.width||1)/(x.height||1);v.style.aspectRatio=`${d.aspectRatio}`,v.style.width=E?"auto":"",v.style.height=E?"":"auto"}}function h(d){const v=d.contentEl,_=v==null?void 0:v.parentElement,g=_==null?void 0:_.style;let p=o(d,"autosize"),M=s(d.width)||0,x=s(d.height)||0;if(M&&x&&(p=!1),v&&_&&g&&p){try{const E=window.getComputedStyle(_),D=parseFloat(E.paddingLeft)+parseFloat(E.paddingRight),P=parseFloat(E.paddingTop)+parseFloat(E.paddingBottom),R=v.contentWindow;if(R){const Q=R.document,A=Q.getElementsByTagName("html")[0],L=Q.body;g.width="";const q=window.getComputedStyle(L),ae=parseFloat(q.marginLeft)+parseFloat(q.marginRight),V=L.style.overflow||"";L.style.overflow="hidden",M=M||L.scrollWidth+ae+D,g.flex="0 0 auto",g.width=`${M}px`,g.height=`${L.scrollHeight}px`,L.style.overflow=V,x=Math.max(A.scrollHeight,Math.ceil(A.getBoundingClientRect().height))+P}}catch{}(M||x)&&Object.assign(g,{flex:"0 1 auto",width:M?`${M}px`:"",height:x?`${x}px`:""})}}return{init:function(d){t=d,t.on("addSlide",a),t.on("attachSlideEl",l),t.on("detachSlideEl",u),t.on("refresh",c)},destroy:function(){t==null||t.off("addSlide",a),t==null||t.off("attachSlideEl",l),t==null||t.off("detachSlideEl",u),t==null||t.off("refresh",c),t=void 0}}};/*! License details at fancyapps.com/license */const Ju=(t,e={})=>{const n=new URL(t),i=new URLSearchParams(n.search),r=new URLSearchParams;for(const[a,l]of[...i,...Object.entries(e)]){let u=l+"";if(a==="t"){let c=u.match(/((\d*)m)?(\d*)s?/);c&&r.set("start",60*parseInt(c[2]||"0")+parseInt(c[3]||"0")+"")}else r.set(a,u)}let s=r+"",o=t.match(/#t=((.*)?\d+s)/);return o&&(s+=`#t=${o[1]}`),s},Qu={autoplay:!1,html5videoTpl:`<video class="f-html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
    <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,iframeAttr:{allow:"autoplay; fullscreen",scrolling:"no",referrerPolicy:"strict-origin-when-cross-origin",credentialless:""},vimeo:{byline:1,color:"00adef",controls:1,dnt:1,muted:0},youtube:{controls:1,enablejsapi:1,nocookie:1,rel:0,fs:1}},B_=()=>{let t,e=!1;function n(){const h=t==null?void 0:t.getOptions().Video;return Lt(h)?{...Qu,...h}:Qu}function i(){var h;return(h=t==null?void 0:t.getPage())==null?void 0:h.slides[0]}const r=h=>{var d;try{let v=JSON.parse(h.data);if(h.origin==="https://player.vimeo.com"){if(v.event==="ready")for(let _ of Array.from(((d=t==null?void 0:t.getContainer())==null?void 0:d.getElementsByClassName("f-iframe"))||[]))_ instanceof HTMLIFrameElement&&_.contentWindow===h.source&&(_.dataset.ready="true")}else if(h.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/)&&v.event==="onReady"){const _=document.getElementById(v.id);_&&(_.dataset.ready="true")}}catch{}};function s(h,d){const v=d.src;if(!ut(v))return;let _=d.type;if(!_||_==="html5video"){const g=v.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i);g&&(_="html5video",d.html5videoFormat=d.html5videoFormat||"video/"+(g[1]==="ogv"?"ogg":g[1]))}if(!_||_==="youtube"){const g=v.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i);if(g){const p={...n().youtube,...d.youtube||{}},M=`www.youtube${p.nocookie?"-nocookie":""}.com`,x=Ju(v,p),E=encodeURIComponent(g[2]);d.videoId=E,d.src=`https://${M}/embed/${E}?${x}`,d.thumb=d.thumb||`https://i.ytimg.com/vi/${E}/mqdefault.jpg`,_="youtube"}}if(!_||_==="vimeo"){const g=v.match(/^.+vimeo.com\/(?:\/)?(video\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/);if(g){const p={...n().vimeo,...d.vimeo||{}},M=Ju(v,p),x=encodeURIComponent(g[2]),E=g[5]||"";d.videoId=x,d.src=`https://player.vimeo.com/video/${x}?${E?`h=${E}${M?"&":""}`:""}${M}`,_="vimeo"}}d.type=_}function o(h,d){d.type==="html5video"&&(function(v){const _=v.el,g=v.src;if(!t||!_||!g)return;const p=v.html5videoTpl||n().html5videoTpl,M=v.html5videoFormat||n().html5videoFormat;if(!p)return;const x=v.poster||(v.thumb&&ut(v.thumb)?v.thumb:""),E=xi(p.replace(/\{\{src\}\}/gi,g+"").replace(/\{\{format\}\}/gi,M||"").replace(/\{\{poster\}\}/gi,x+""));if(!E)return;const D=document.createElement("div");Be(D,"f-html"),D.append(E),v.contentEl=E,v.htmlEl=D,Be(_,`has-${v.type}`),_.prepend(D),c(v),t.emit("contentReady",v)})(d),d.type!=="youtube"&&d.type!=="vimeo"||(function(v){const _=v.el,g=v.src;if(!t||!_||!g)return;const p=document.createElement("iframe");Be(p,"f-iframe"),p.setAttribute("id",`f-iframe_${v.videoId}`);for(const[x,E]of Object.entries(n().iframeAttr||{}))p.setAttribute(x,E);v.type==="youtube"&&(p.onload=()=>{var x;(t==null?void 0:t.getState())===1&&((x=p.contentWindow)==null||x.postMessage(JSON.stringify({event:"listening",id:p.getAttribute("id")}),"*"))}),p.onerror=()=>{t==null||t.showError(v,"{{IFRAME_ERROR}}")};const M=document.createElement("div");Be(M,"f-html"),M.append(p),v.contentEl=p,v.htmlEl=M,Be(_,`has-html has-iframe has-${v.type}`),p.src=`${v.src}`,_.prepend(M),c(v),t.emit("contentReady",v)})(d)}function a(h,d){var v,_;d.type!=="html5video"&&d.type!=="youtube"&&d.type!=="vimeo"||((v=d.contentEl)==null||v.remove(),d.contentEl=void 0,(_=d.htmlEl)==null||_.remove(),d.htmlEl=void 0),d.poller&&clearTimeout(d.poller)}function l(){e=!1}function u(){if(e)return;e=!0;const h=i();(h&&h.autoplay!==void 0?h.autoplay:n().autoplay)&&((function(){var g;const d=i(),v=d==null?void 0:d.el;if(v&&(d==null?void 0:d.type)==="html5video")try{const p=v.querySelector("video");if(p){const M=p.play();M!==void 0&&M.then(()=>{}).catch(x=>{p.muted=!0,p.play()})}}catch{}const _=d==null?void 0:d.htmlEl;_ instanceof HTMLIFrameElement&&((g=_.contentWindow)==null||g.postMessage('{"event":"command","func":"stopVideo","args":""}',"*"))})(),(function(){const d=i(),v=d==null?void 0:d.type;if(!(d==null?void 0:d.el)||v!=="youtube"&&v!=="vimeo")return;const g=()=>{if(d.contentEl&&d.contentEl instanceof HTMLIFrameElement&&d.contentEl.contentWindow){let p;if(d.contentEl.dataset.ready==="true")return p=d.type==="youtube"?{event:"command",func:"playVideo"}:{method:"play",value:"true"},p&&d.contentEl.contentWindow.postMessage(JSON.stringify(p),"*"),void(d.poller=void 0);d.type==="youtube"&&(p={event:"listening",id:d.contentEl.getAttribute("id")},d.contentEl.contentWindow.postMessage(JSON.stringify(p),"*"))}d.poller=setTimeout(g,250)};g()})())}function c(h){const d=h==null?void 0:h.htmlEl;if(h&&d&&(h.type==="html5video"||h.type==="youtube"||h.type==="vimeo")){if(d.style.aspectRatio="",d.style.width="",d.style.height="",d.style.maxWidth="",d.style.maxHeight="",h.width){let v=`${h.width}`;v.match(/^\d+$/)&&(v+="px"),d.style.maxWidth=`${v}`}if(h.height){let v=`${h.height}`;v.match(/^\d+$/)&&(v+="px"),d.style.maxHeight=`${v}`}if(h.aspectRatio){const v=h.aspectRatio.split("/"),_=parseFloat(v[0].trim()),g=v[1]?parseFloat(v[1].trim()):0,p=_&&g?_/g:_;d.offsetHeight;const M=d.getBoundingClientRect(),x=p<(M.width||1)/(M.height||1);d.style.aspectRatio=`${h.aspectRatio}`,d.style.width=x?"auto":"",d.style.height=x?"":"auto"}}}function f(){c(i())}return{init:function(h){t=h,t.on("addSlide",s),t.on("attachSlideEl",o),t.on("detachSlideEl",a),t.on("ready",u),t.on("change",l),t.on("settle",u),t.on("refresh",f),window.addEventListener("message",r)},destroy:function(){t==null||t.off("addSlide",s),t==null||t.off("attachSlideEl",o),t==null||t.off("detachSlideEl",a),t==null||t.off("ready",u),t==null||t.off("change",l),t==null||t.off("settle",u),t==null||t.off("refresh",f),window.removeEventListener("message",r),t=void 0}}};/*! License details at fancyapps.com/license */const ef={autoStart:!1,btnTpl:'<button data-fullscreen-action="toggle" class="f-button" title="{{TOGGLE_FULLSCREEN}}"><svg><g><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'},tf="in-fullscreen-mode",z_=()=>{let t;function e(c){const f=t==null?void 0:t.getOptions().Fullscreen;let h=(Lt(f)?{...ef,...f}:ef)[c];return h&&typeof h=="function"&&t?h(t):h}function n(){var c;(c=t==null?void 0:t.getPlugins().Toolbar)==null||c.add("fullscreen",{tpl:e("btnTpl")})}function i(){if(e("autoStart")){const c=s();c&&a(c)}}function r(c,f){const h=f.target;h&&!f.defaultPrevented&&h.dataset.fullscreenAction==="toggle"&&u()}function s(){return e("el")||(t==null?void 0:t.getContainer())||void 0}function o(){const c=document;return c.fullscreenEnabled?!!c.fullscreenElement:!!c.webkitFullscreenEnabled&&!!c.webkitFullscreenElement}function a(c){const f=document;let h;return c||(c=f.documentElement),f.fullscreenEnabled?h=c.requestFullscreen():f.webkitFullscreenEnabled&&(h=c.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)),h&&h.then(()=>{c.classList.add(tf)}),h}function l(){const c=document;let f;return c.fullscreenEnabled?f=c.fullscreenElement&&c.exitFullscreen():c.webkitFullscreenEnabled&&(f=c.webkitFullscreenElement&&c.webkitExitFullscreen()),f&&f.then(()=>{var h;(h=s())==null||h.classList.remove(tf)}),f}function u(){if(o())l();else{const c=s();c&&a(c)}}return{init:function(c){t=c,t.on("initPlugins",n),t.on("ready",i),t.on("click",r)},destroy:function(){t==null||t.off("initPlugins",n),t==null||t.off("ready",i),t==null||t.off("click",r)},exit:l,inFullscreen:o,request:a,toggle:u}};/*! License details at fancyapps.com/license */let Zt,op,ec=!1,tc=!1,ws=!1,nc=!1;const Da=()=>{const t=new URL(document.URL).hash,e=t.slice(1).split("-"),n=e[e.length-1],i=n&&/^\+?\d+$/.test(n)&&parseInt(e.pop()||"1",10)||1;return{urlHash:t,urlSlug:e.join("-"),urlIndex:i}},ol=()=>{const t=Zt==null?void 0:Zt.getInstance(),e=t==null?void 0:t.getState();return!(!t||e!==0&&e!==1)},Fc=()=>{if(!Zt||ol())return;const{urlSlug:t,urlIndex:e}=Da();if(!t)return;let n=document.querySelector(`[data-slug="${t}"]`);n&&Zt.fromTriggerEl(n),ol()||(n=document.querySelectorAll(`[data-fancybox="${t}"]`)[e-1],n&&Zt.fromTriggerEl(n,{startIndex:e-1})),ol()&&n&&!n.closest("[inert]")&&n.scrollIntoView({behavior:"instant",block:"center",inline:"center"})},Jo=t=>{const e=t.getOptions().Hash,n=t.getSlide();return n&&(n.slug||n.fancybox||(Lt(e)?e.slug:""))||""},nf=t=>{var s,o;const e=Jo(t),n=t.getSlide();if(!n||!e)return"";let i=parseInt(n.index+"",10)+1,r=n.slug?`#${n.slug}`:`#${e}-${i}`;return(((o=(s=t.getCarousel())==null?void 0:s.getPages())==null?void 0:o.length)||0)<2&&(r=`#${e}`),r},H_=()=>{if(!Zt||ws)return;const t=Zt==null?void 0:Zt.getInstance(),e=t==null?void 0:t.getCarousel(),{urlSlug:n,urlIndex:i}=Da(),r=t==null?void 0:t.getOptions().Hash;if(r!==!1){if(t&&t.getState()===1&&e){const s=e.getSlides();for(const o of s||[])if(o.slug===n||(o.fancybox===n||Lt(r)&&r.slug===n)&&o.index===i-1)return tc=!1,void e.goTo(o.index);nc=!0,t.close(),nc=!1}Fc()}},rf=()=>{Zt&&(op=setTimeout(()=>{ec=!0,Fc(),ec=!1},300),window.addEventListener("hashchange",H_,!1))};let Bs;function al(){history.scrollRestoration&&Bs&&(history.scrollRestoration=Bs,Bs=void 0)}const Qo=()=>{let t,e="";function n(){var f;if(!t||!t.isTopMost()||t.getOptions().Hash===!1)return;if(ec){const h=t.getOptions().sync;h&&h.goTo(((f=t==null?void 0:t.getCarousel())==null?void 0:f.getPageIndex())||0,{transition:!1,tween:!1})}const s=t.getCarousel();if(!s||!t.getSlide())return;const o=Jo(t);if(!o)return;const{urlHash:a,urlSlug:l}=Da(),u=nf(t);a!==u&&(e=a),history.scrollRestoration&&!Bs&&(Bs=history.scrollRestoration,history.scrollRestoration="manual",window.addEventListener("beforeunload",al)),s.on("change",i);const c=o!==l;try{window.history[c?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+u),c&&(tc=!0)}catch{}}function i(){if(!t||!t.isTopMost()||t.getOptions().Hash===!1||!t.getSlide()||!Jo(t))return;const s=nf(t);ws=!0;try{window.history.replaceState({},document.title,window.location.pathname+window.location.search+s)}catch{}ws=!1}function r(){var s;if(!(!t||!t.isTopMost()||t.getOptions().Hash===!1||nc)&&Jo(t)){ws=!0;try{tc&&!(function(){if(window.parent===window)return!1;try{var o=window.frameElement}catch{o=null}return o===null?location.protocol==="data:":o.hasAttribute("sandbox")})()&&((s=document.activeElement)==null?void 0:s.nodeName)!=="IFRAME"?window.history.back():window.history.replaceState({},document.title,window.location.pathname+window.location.search+e)}catch{}ws=!1}}return{init:function(s){clearTimeout(op),t=s,t.on("ready",n),t.on("close",r)},destroy:function(){t==null||t.off("ready",n),t==null||t.off("close",r);const s=t==null?void 0:t.getCarousel();s&&s.off("change",i),t=void 0,Zt!=null&&Zt.getInstance()||(al(),window.removeEventListener("beforeunload",al))}}};Qo.getInfoFromURL=Da,Qo.startFromUrl=Fc,Qo.setup=function(t){Zt||(Zt=t,Zo()&&(/complete|interactive|loaded/.test(document.readyState)?rf():document.addEventListener("DOMContentLoaded",rf)))};/*! License details at fancyapps.com/license */const G_={...Nc,CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ELEMENT_NOT_FOUND:"HTML Element Not Found",IFRAME_ERROR:"Error Loading Page",NO_CAPTION:"No Caption",TOGGLE_SIDEBAR:"Toggle sidebar"};/*! License details at fancyapps.com/license */const ap='<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path d="M19.286 4.714 4.714 19.286M4.714 4.714l14.572 14.572" /></svg></button>';sp().add("close",{tpl:ap});const $n=t=>{t.cancelable&&t.preventDefault()},sf=(t=null,e="",n)=>{if(!t||!t.parentElement||!e)return void(n&&n());lp(t);const i=r=>{r.target===t&&t.dataset.animationName&&(t.removeEventListener("animationend",i),delete t.dataset.animationName,n&&n(),t.classList.remove(e))};t.dataset.animationName=e,t.addEventListener("animationend",i),Be(t,e)},lp=t=>{t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!1,cancelable:!0,currentTarget:t}))};var Mt;(function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Closing=2]="Closing",t[t.Destroyed=3]="Destroyed"})(Mt||(Mt={}));const Ks={ajax:null,backdropClick:"close",Carousel:{},closeButton:"auto",closeButtonTpl:ap,closeExisting:!1,delegateEl:void 0,dragToClose:!0,fadeEffect:!0,groupAll:!1,groupAttr:"data-fancybox",hideClass:"f-fadeOut",hideScrollbar:!0,id:void 0,idle:!1,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"prev",ArrowDown:"next",ArrowRight:"next",ArrowLeft:"prev"},l10n:G_,mainClass:"",mainStyle:{},mainTpl:`<dialog class="fancybox__dialog">
    <div class="fancybox__container" tabindex="0" aria-label="{{MODAL}}">
      <div class="fancybox__backdrop"></div>
      <div class="fancybox__carousel"></div>
    </div>
  </dialog>`,modal:!0,on:{},parentEl:void 0,placeFocusBack:!0,showClass:"f-zoomInUp",startIndex:0,sync:void 0,theme:"dark",triggerEl:void 0,triggerEvent:void 0,zoomEffect:!0},mi=new Map;let V_=0;const of="with-fancybox",k_=()=>{let t,e,n,i,r,s,o,a,l=Mt.Init,u={...Ks},c=-1,f={},h=[],d=!1,v=!0,_=0;function g(F,...y){let m=u[F];return m&&typeof m=="function"?m(ye,...y):m}function p(F,y=[]){const m=g("l10n")||{};F=String(F).replace(/\{\{(\w+)\}\}/g,(S,w)=>m[w]||S);for(let S=0;S<y.length;S++)F=F.split(y[S][0]).join(y[S][1]);return F=F.replace(/\{\{(.*?)\}\}/g,(S,w)=>w)}const M=new Map;function x(F,...y){const m=[...M.get(F)||[]];for(const[S,w]of Object.entries(u.on||{}))(S===F||S.split(" ").indexOf(F)>-1)&&m.push(w);for(const S of m)S&&typeof S=="function"&&S(ye,...y);F!=="*"&&x("*",F,...y)}function E(){Rt(e,"is-revealing");try{document.activeElement===t&&((e==null?void 0:e.querySelector("[autofocus]"))||e).focus()}catch{}}function D(F,y){var m;re(y),I(),(m=y.el)==null||m.addEventListener("click",R),y.type!=="inline"&&y.type!=="clone"||(function(S){if(!i||!S||!S.el)return;let w=null;if(ut(S.src)){const b=S.src.split("#",2).pop();w=b?document.getElementById(b):null}if(w){if(Be(w,"f-html"),S.type==="clone"||w.closest(".fancybox__carousel")){w=w.cloneNode(!0);const b=w.dataset.animationName;b&&(w.classList.remove(b),delete w.dataset.animationName);let O=w.getAttribute("id");O=O?`${O}--clone`:`clone-${c}-${S.index}`,w.setAttribute("id",O)}else if(w.parentNode){const b=document.createElement("div");b.inert=!0,w.parentNode.insertBefore(b,w),S.placeholderEl=b}S.htmlEl=w,Be(S.el,"has-html"),S.el.prepend(w),w.classList.remove("hidden"),w.style.display==="none"&&(w.style.display=""),getComputedStyle(w).getPropertyValue("display")==="none"&&(w.style.display=w.dataset.display||"flex"),i==null||i.emit("contentReady",S)}else i==null||i.showError(S,"{{ELEMENT_NOT_FOUND}}")})(y),y.type==="ajax"&&(function(S){const w=S.el;if(!w||S.htmlEl||S.xhr)return;i==null||i.showLoading(S),S.state=0;const b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===XMLHttpRequest.DONE&&l===Mt.Ready)if(i==null||i.hideLoading(S),S.state=1,b.status===200){let X=b.responseText+"",j=null,K=null;if(S.filter){const he=document.createElement("div");he.innerHTML=X,K=he.querySelector(S.filter+"")}K&&K instanceof HTMLElement?j=K:(j=document.createElement("div"),j.innerHTML=X),j.classList.add("f-html"),S.htmlEl=j,w.classList.add("has-html"),w.classList.add("has-ajax"),w.prepend(j),i==null||i.emit("contentReady",S)}else i==null||i.showError(S)};const O=g("ajax")||null;b.open(O?"POST":"GET",S.src+""),b.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),b.setRequestHeader("X-Requested-With","XMLHttpRequest"),b.send(O),S.xhr=b})(y)}function P(F,y){var m;xe(y),(m=y.el)==null||m.removeEventListener("click",R),y.type!=="inline"&&y.type!=="clone"||(function(S){const w=S.htmlEl,b=S.placeholderEl;w&&(getComputedStyle(w).getPropertyValue("display")!=="none"&&(w.style.display="none"),w.offsetHeight),b&&(w&&b.parentNode&&b.parentNode.insertBefore(w,b),b.remove()),S.htmlEl=void 0,S.placeholderEl=void 0})(y),y.xhr&&(y.xhr.abort(),y.xhr=void 0)}function R(F){if(!de())return;if(l!==Mt.Ready)return $n(F),void F.stopPropagation();if(F.defaultPrevented||!Qr.isClickAllowed())return;const y=F.composedPath()[0];y.closest(".fancybox__carousel")&&y.classList.contains("fancybox__slide")&&B(F)}function Q(){v=!1,e&&i&&e.classList.remove("is-revealing"),I();const F=g("sync");if(i&&F){const y=F.getPageIndex(i.getPageIndex())||0;F.goTo(y,{transition:!1,tween:!1})}}function A(){var y;(function(){const m=i==null?void 0:i.getViewport();if(!i||!m||(r=Qr(m).init(),!r))return;ie();let S=!1,w=0,b=0,O={},X=1;function j(){var Z,Me;s==null||s.spring({clamp:!0,mass:1,tension:b===0?140:960,friction:17,restDelta:.1,restSpeed:.1,maxSpeed:1/0}).from({y:w}).to({y:b}).start();const he=((Z=i==null?void 0:i.getViewport())==null?void 0:Z.getBoundingClientRect().height)||0,_e=(Me=Ee())==null?void 0:Me.panzoomRef;if(he&&_e)if(b===0)_e.execute(Oe.Reset);else{const be=ca(Math.abs(w),0,.33*he,X,.77*X,!1);_e.execute(Oe.ZoomTo,{scale:be})}}const K=he=>{var Me;const _e=he.srcEvent,Z=_e.target;return g("dragToClose")&&i&&!(Fs(_e)&&((Me=_e.touches)==null?void 0:Me.length)>1)&&Z&&!mr(Z)};s=Vi().on("step",he=>{if(e&&m&&l===Mt.Ready){const _e=m.getBoundingClientRect().height;w=Math.min(_e,Math.max(-1*_e,he.y));const Z=ca(Math.abs(w),0,.65*_e,1,.2,!0);e.style.setProperty("--f-drag-opacity",Z+""),e.style.setProperty("--f-drag-offset",w+"px")}}),r.on("start",function(){S||(s==null||s.pause(),b=w)}).on("panstart",he=>{var _e,Z;if(!S&&K(he)&&he.axis==="y"){$n(he.srcEvent),S=!0,se(),(_e=i==null?void 0:i.getViewport())==null||_e.classList.add("is-dragging");const Me=(Z=Ee())==null?void 0:Z.panzoomRef;if(Me){X=Me.getTransform().scale||1;const be=Me.getOptions();O={...be},be.bounds=!1,be.gestures=!1}}else S=!1}).on("pan",function(he){S&&K(he)&&($n(he.srcEvent),he.srcEvent.stopPropagation(),he.axis==="y"&&(b+=he.deltaY,j()))}).on("end",he=>{var _e,Z,Me;if((_e=i==null?void 0:i.getViewport())==null||_e.classList.remove("is-dragging"),S){const be=(Z=Ee())==null?void 0:Z.panzoomRef;if(be){(Me=be.getTween())==null||Me.end();const Re=be.getOptions();Re.bounds=O.bounds||!1,Re.gestures=O.gestures||!1}K(he)&&he.axis==="y"&&(Math.abs(he.velocityY)>5||Math.abs(w)>50)&&te(he.srcEvent,"f-throwOut"+(he.velocityY>0?"Down":"Up"))}S=!1,l===Mt.Ready&&w!==0&&(b=0,j())})})(),document.body.addEventListener("click",ne),document.body.addEventListener("pointerdown",G,{capture:!0}),document.body.addEventListener("keydown",Y,{passive:!1,capture:!0}),I(),He();const F=g("sync");i&&F&&((y=F.getTween())==null||y.start()),k(Ee())}function L(){i!=null&&i.canGoNext()?He():T()}function q(F,y){re(y)}function ae(F,y){re(y),k(y)}function V(){var y;const F=i==null?void 0:i.getPlugins().Thumbs;Yt(e,"has-thumbs",(F==null?void 0:F.isEnabled())||!1),Yt(e,"has-vertical-thumbs",!!F&&(F.getType()==="scrollable"||((y=F.getCarousel())==null?void 0:y.isVertical())===!0))}function I(){if(!e)return;const F=(i==null?void 0:i.getPages().length)||0,y=(i==null?void 0:i.getPageIndex())||0,m=e.querySelectorAll("[data-fancybox-index],[data-fancybox-page],[data-fancybox-pages]");for(const S of m)S.hasAttribute("data-fancybox-index")?S.textContent=String(y):S.hasAttribute("data-fancybox-page")?S.textContent=String(y+1):S.textContent=String(F)}function G(F){ie(),a={x:F.clientX,y:F.clientY}}function B(F){if(F.composedPath()[0].closest("[data-fancybox-close]"))return void te(F);(function(y){if(!a)return!1;const m="clientX"in y?y:y.changedTouches[0];return!!m&&(Math.abs(m.clientX-a.x)>10||Math.abs(m.clientY-a.y)>10)})(F)||(x("backdropClick",F),!F.defaultPrevented&&g("backdropClick")&&te(F))}function $(){N()}function Y(F){if(!de()||l!==Mt.Ready)return;const y=F.key,m=g("keyboard");if(!m||F.ctrlKey||F.altKey||F.shiftKey)return;const S=F.composedPath()[0];if(!Gr(S)||y!=="Escape"&&(b=>{const O=["input","textarea","select","option","video","iframe","[contenteditable]","[data-selectable]","[data-draggable]"].join(",");return b.matches(O)||b.closest(O)})(S)||(x("keydown",F),F.defaultPrevented))return;const w=m[y];if(w)switch(w){case"close":te(F);break;case"next":$n(F),i==null||i.next();break;case"prev":$n(F),i==null||i.prev()}}function ne(F){if(!de()||l!==Mt.Ready||(N(),F.defaultPrevented))return;const y=F.composedPath()[0],m=!!y.closest("[data-fancybox-close]"),S=y.classList.contains("fancybox__backdrop");(m||S)&&B(F)}function ie(){r&&(g("dragToClose")?r.enable():r.disable())}function re(F){var X;const{el:y,htmlEl:m,panzoomRef:S,closeButtonEl:w}=F,b=S?S.getWrapper():m;if(!y||!y.parentElement||!b)return;let O=g("closeButton");if(O==="auto"&&(O=((X=i==null?void 0:i.getPlugins().Toolbar)==null?void 0:X.isEnabled())!==!0),O){if(!w){const j=xi(p(g("closeButtonTpl")));j&&(Be(j,"is-close-button"),F.closeButtonEl=b.insertAdjacentElement("afterbegin",j),Be(y,"has-close-btn"))}}else xe(F)}function xe(F){F.closeButtonEl&&(F.closeButtonEl.remove(),F.closeButtonEl=void 0),Rt(F.el,"has-close-btn")}function k(F){if(!(v&&i&&i.getState()===1&&F&&F.index===i.getOptions().initialPage&&F.el&&F.el.parentElement)||F.state!==void 0&&F.state!==1)return;v=!1;const y=F.panzoomRef,m=y==null?void 0:y.getTween(),S=g("zoomEffect")&&m?De(F):void 0;if(y&&m&&S){const{x:b,y:O,scale:X}=y.getStartPosition();return void m.spring({tension:215,friction:25,restDelta:.001,restSpeed:.001,maxSpeed:1/0}).from(S).to({x:b,y:O,scale:X}).start()}const w=(y==null?void 0:y.getContent())||F.htmlEl;w&&sf(w,g("showClass",F))}function de(){var F;return((F=vt.getInstance())==null?void 0:F.getId())===c}function Ee(){var F;return(F=i==null?void 0:i.getPage())==null?void 0:F.slides[0]}function Ce(){const F=Ee();return F?F.triggerEl||g("triggerEl"):void 0}function De(F){var he,_e;const y=F.thumbEl;if(!y||!(Z=>{const Me=Z.getBoundingClientRect(),be=Z.closest("[style]"),Re=be==null?void 0:be.parentElement;if(be&&be.style.transform&&Re){const Le=Re.getBoundingClientRect();if(Me.left<Le.left||Me.left>Le.left+Le.width-Me.width||Me.top<Le.top||Me.top>Le.top+Le.height-Me.height)return!1}const Te=Math.max(document.documentElement.clientHeight,window.innerHeight),Se=Math.max(document.documentElement.clientWidth,window.innerWidth);return!(Me.bottom<0||Me.top-Te>=0||Me.right<0||Me.left-Se>=0)})(y))return;const m=(_e=(he=F.panzoomRef)==null?void 0:he.getWrapper())==null?void 0:_e.getBoundingClientRect(),S=m==null?void 0:m.width,w=m==null?void 0:m.height;if(!S||!w)return;const b=y.getBoundingClientRect();let O=b.width,X=b.height,j=b.left,K=b.top;if(!(!b||!O||!X)){if(y instanceof HTMLImageElement){const Z=window.getComputedStyle(y).getPropertyValue("object-fit");if(Z==="contain"||Z==="scale-down"){const{width:Me,height:be}=((Re,Te,Se,Le,Ie="contain")=>{if(Ie==="contain"||Re>Se||Te>Le){const z=Se/Re,W=Le/Te,H=Math.min(z,W);Re*=H,Te*=H}return{width:Re,height:Te}})(y.naturalWidth,y.naturalHeight,O,X,Z);j+=.5*(O-Me),K+=.5*(X-be),O=Me,X=be}}if(!(Math.abs(S/w-O/X)>.1))return{x:j+.5*O-(m.left+.5*S),y:K+.5*X-(m.top+.5*w),scale:O/S}}}function Ge(){o&&clearTimeout(o),o=void 0,document.removeEventListener("mousemove",$)}function He(){if(d||o)return;const F=g("idle");F&&(o=setTimeout(Ve,F))}function Ve(){e&&(Ge(),Be(e,"is-idle"),document.addEventListener("mousemove",$),d=!0)}function N(){d&&(T(),He())}function T(){Ge(),e==null||e.classList.remove("is-idle"),d=!1}function se(){const F=Ce();var y;!F||(y=F.getBoundingClientRect()).bottom>0&&y.right>0&&y.left<(window.innerWidth||document.documentElement.clientWidth)&&y.top<(window.innerHeight||document.documentElement.clientHeight)||F.closest("[inert]")||F.scrollIntoView({behavior:"instant",block:"center",inline:"center"})}function te(F,y){var b,O,X,j,K;if(l===Mt.Closing||l===Mt.Destroyed)return;const m=new Event("shouldClose",{bubbles:!0,cancelable:!0});if(x("shouldClose",m,F),m.defaultPrevented)return;if(Ge(),F){if(F.defaultPrevented)return;$n(F),F.stopPropagation(),F.stopImmediatePropagation()}if(l=Mt.Closing,s==null||s.pause(),r==null||r.destroy(),i){(b=i.getGestures())==null||b.destroy(),(O=i.getTween())==null||O.pause();for(const he of i.getSlides()){const _e=he.panzoomRef;_e&&(hn(_e.getOptions(),{clickAction:!1,dblClickAction:!1,wheelAction:!1,bounds:!1,minScale:0,maxScale:1/0}),(X=_e.getGestures())==null||X.destroy(),(j=_e.getTween())==null||j.pause())}}const S=i==null?void 0:i.getPlugins();(K=S==null?void 0:S.Autoplay)==null||K.stop();const w=S==null?void 0:S.Fullscreen;w&&w.inFullscreen()?Promise.resolve(w.exit()).then(()=>{setTimeout(()=>{le(F,y)},150)}):le(F,y)}function le(F,y){var _e,Z;if(l!==Mt.Closing)return;x("close",F),v=!1,document.body.removeEventListener("click",ne),document.body.removeEventListener("pointerdown",G,{capture:!0}),document.body.removeEventListener("keydown",Y,{passive:!1,capture:!0}),a=void 0,g("placeFocusBack")&&se();const m=document.activeElement;m&&(t!=null&&t.contains(m))&&m.blur(),g("fadeEffect")&&(e==null||e.classList.remove("is-ready"),e==null||e.classList.add("is-hiding")),e==null||e.classList.add("is-closing");const S=Ee(),w=S==null?void 0:S.el,b=S==null?void 0:S.panzoomRef,O=(_e=S==null?void 0:S.panzoomRef)==null?void 0:_e.getTween(),X=y||g("hideClass");let j=!1,K=!1;if(i&&S&&w&&b&&O){let Me;if(g("zoomEffect")&&S.state===1&&(Me=De(S)),Me){j=!0;const be=()=>{Me=De(S),Me?O.to({...Un,...Me}):J()};b.on("refresh",()=>{be()}),O.easing(Vi.Easings.EaseOut).duration(350).from({...b.getTransform()}).to({...Un,...Me}).start(),w!=null&&w.getAnimations()&&(w.style.animationPlayState="paused",requestAnimationFrame(()=>{be()}))}}const he=(S==null?void 0:S.htmlEl)||((Z=S==null?void 0:S.panzoomRef)==null?void 0:Z.getWrapper());he&&lp(he),!j&&X&&he&&(K=!0,sf(he,X,()=>{J()})),j||K?setTimeout(()=>{J()},350):J()}function J(){var y,m,S,w,b;if(l===Mt.Destroyed)return;l=Mt.Destroyed;const F=Ce();x("destroy"),(m=(y=g("sync"))==null?void 0:y.getPlugins().Autoplay)==null||m.resume(),(w=(S=g("sync"))==null?void 0:S.getPlugins().Autoscroll)==null||w.resume(),t instanceof HTMLDialogElement&&t.close(),(b=i==null?void 0:i.getContainer())==null||b.classList.remove("is-idle"),i==null||i.destroy();for(const O of Object.values(f))O==null||O.destroy();if(f={},t==null||t.remove(),t=void 0,e=void 0,i=void 0,mi.delete(c),!mi.size&&(bu(!1),document.documentElement.classList.remove(of),g("placeFocusBack")&&F&&!F.closest("[inert]")))try{F==null||F.focus({preventScroll:!0})}catch{}}const ye={close:te,destroy:J,getCarousel:function(){return i},getContainer:function(){return e},getId:function(){return c},getOptions:function(){return u},getPlugins:function(){return f},getSlide:function(){return Ee()},getState:function(){return l},init:function(F=[],y={}){l!==Mt.Init&&(ye.destroy(),l=Mt.Init),u=hn({},Ks,y),c=g("id")||"fancybox-"+ ++V_;const m=mi.get(c);if(m&&m.destroy(),mi.set(c,ye),x("init"),(function(){for(const[S,w]of Object.entries({...vt.Plugins,...u.plugins||{}}))if(S&&!f[S]&&w instanceof Function){const b=w();b.init(ye),f[S]=b}x("initPlugins")})(),(function(S=[]){x("initSlides",S),h=[...S]})(F),(function(){const S=g("parentEl")||document.body;if(!(S&&S instanceof HTMLElement))return;const w=p(g("mainTpl")||"");if(t=xi(w)||void 0,!t||(e=t.querySelector(".fancybox__container"),!(e&&e instanceof HTMLElement)))return;const b=g("mainClass");b&&Be(e,b);const O=g("mainStyle");if(O&&Lt(O))for(const[K,he]of Object.entries(O))e.style.setProperty(K,he);const X=g("theme"),j=X==="auto"?window.matchMedia("(prefers-color-scheme:light)").matches:X==="light";e.setAttribute("theme",j?"light":"dark"),t.setAttribute("id",`${c}`),t.addEventListener("keydown",K=>{K.key==="Escape"&&$n(K)}),t.addEventListener("wheel",K=>{const he=K.target;let _e=g("wheel",K);he.closest(".f-thumbs")&&(_e="slide");const Z=_e==="slide",Me=[-K.deltaX||0,-K.deltaY||0,-K.detail||0].reduce(function(Te,Se){return Math.abs(Se)>Math.abs(Te)?Se:Te}),be=Math.max(-1,Math.min(1,Me)),Re=Date.now();_&&Re-_<300?Z&&$n(K):(_=Re,x("wheel",K,be),K.defaultPrevented||(_e==="close"?te(K):_e==="slide"&&i&&!mr(he)&&($n(K),i[be>0?"prev":"next"]())))},{capture:!0,passive:!1}),t.addEventListener("cancel",K=>{te(K)}),S.append(t),mi.size===1&&(g("hideScrollbar")&&bu(!0),document.documentElement.classList.add(of)),x("initLayout"),t instanceof HTMLDialogElement&&(g("modal")?t.showModal():t.show())})(),(function(){if(n=(t==null?void 0:t.querySelector(".fancybox__carousel"))||void 0,!n)return;n.fancybox=ye;const S=hn({},{Autoplay:{autoStart:!1,pauseOnHover:!1,progressbarParentEl:w=>{const b=w.getContainer();return(b==null?void 0:b.querySelector(".f-carousel__toolbar [data-autoplay-action]"))||b}},Fullscreen:{el:e},Toolbar:{absolute:!0,items:{counter:{tpl:'<div class="f-counter"><span data-fancybox-page></span>/<span data-fancybox-pages></span></div>'}},display:{left:["counter"],right:["toggleFull","autoplay","fullscreen","thumbs","close"]}},Video:{autoplay:!0},Thumbs:{minCount:2,Carousel:{classes:{container:"fancybox__thumbs"}}},classes:{container:"fancybox__carousel",viewport:"fancybox__viewport",slide:"fancybox__slide"},spinnerTpl:'<div class="f-spinner" data-fancybox-close></div>',dragFree:!1,slidesPerPage:1,plugins:{Sync:np,Arrows:U_,Lazyload:ip,Zoomable:I_,Html:F_,Video:B_,Autoplay:N_,Fullscreen:z_,Thumbs:O_,Toolbar:sp}},g("Carousel")||{},{slides:h,enabled:!0,initialPage:g("startIndex")||0,l10n:g("l10n")});i=fa(n,S),x("initCarousel",i),i.on("*",(w,b,...O)=>{x(`Carousel.${b}`,w,...O)}),i.on("attachSlideEl",D),i.on("detachSlideEl",P),i.on("contentLoading",q),i.on("contentReady",ae),i.on("ready",A),i.on("change",Q),i.on("settle",L),i.on("thumbs:ready",V),i.on("thumbs:destroy",V),i.init()})(),t&&e){if(g("closeExisting"))for(const[S,w]of mi.entries())S!==c&&w.close();g("fadeEffect")?(setTimeout(()=>{E()},500),Be(e,"is-revealing")):E(),e.classList.add("is-ready"),l=Mt.Ready,x("ready")}},isCurrentSlide:function(F){const y=Ee();return!(!F||!y)&&y.index===F.index},isTopMost:function(){return de()},localize:p,off:function(F,y){return M.has(F)&&M.set(F,M.get(F).filter(m=>m!==y)),ye},on:function(F,y){return M.set(F,[...M.get(F)||[],y]),ye},toggleIdle(F){(d||F===!0)&&Ve(),d&&F!==!1||T()}};return ye};function af(){for(const t of Object.values(vt.Plugins)){const e=t.setup;typeof e=="function"&&e(vt)}}function lf(t,e={}){var d,v,_;if(!(t&&t instanceof Element))return;let n,i,r,s,o={};for(const[g,p]of vt.openers)if(g.contains(t))for(const[M,x]of p){let E;if(M){for(const D of g.querySelectorAll(M))if(D.contains(t)){E=D;break}if(!E)continue}for(const[D,P]of x){let R=null;try{R=t.closest(D)}catch{}R&&(i=g,r=E,n=R,s=D,hn(o,P||{}))}}if(!i||!s||!n)return;const a=hn({},Ks,e,o,{triggerEl:n});let l=[].slice.call((r||i).querySelectorAll(s));const u=n.closest(".f-carousel"),c=u==null?void 0:u.carousel;if(c&&(!r||!u.contains(r))){const g=[];for(const p of c==null?void 0:c.getSlides()){const M=p.el;M&&(M.matches(s)?g.push(M):g.push(...[].slice.call(M.querySelectorAll(s))))}g.length&&(l=[...g],(d=c.getPlugins().Autoplay)==null||d.pause(),(v=c.getPlugins().Autoscroll)==null||v.pause(),a.sync=c)}if(a.groupAll===!1){const g=a.groupAttr,p=g&&n?n.getAttribute(`${g}`):"";l=g&&p&&p!=="true"?l.filter(M=>M.getAttribute(`${g}`)===p):[n]}if(!l.length)return;(_=a.triggerEvent)==null||_.preventDefault();const f=vt.getInstance(),h=f==null?void 0:f.getState();if(f&&(h===Mt.Init||h===Mt.Ready)){const g=f.getOptions().triggerEl;if(g&&l.indexOf(g)>-1)return}return{...a.Carousel||{}}.rtl&&(l=l.reverse()),n&&e.startIndex===void 0&&(a.startIndex=l.indexOf(n)),vt.fromNodes(l,a)}const vt={Plugins:{Hash:Qo},version:"6.1.15",openers:new Map,bind:function(t,e,n,i){if(!Zo())return;let r=document.body,s=null,o="[data-fancybox]",a={};t instanceof Element&&(r=t),ut(t)&&ut(e)?(s=t,o=e):ut(e)&&ut(n)?(s=e,o=n):ut(e)?o=e:ut(t)&&(o=t),typeof e=="object"&&(a=e||{}),typeof n=="object"&&(a=n||{}),typeof i=="object"&&(a=i||{}),(function(l,u,c,f={}){if(!(l&&l instanceof Element&&c))return;const h=vt.openers.get(l)||new Map,d=h.get(u)||new Map;d.set(c,f),h.set(u,d),vt.openers.set(l,h),h.size===1&&l.addEventListener("click",vt.fromEvent),af()})(r,s,o,a)},close:function(t=!0,...e){if(t)for(const n of mi.values())n.close(...e);else{const n=vt.getInstance();n&&n.close(...e)}},destroy:function(){let t;for(;t=vt.getInstance();)t.destroy();for(const e of vt.openers.keys())e.removeEventListener("click",vt.fromEvent);vt.openers.clear()},fromEvent:function(t){if(t.defaultPrevented||t.button&&t.button!==0||t.ctrlKey||t.metaKey||t.shiftKey)return;let e=t.composedPath()[0];const n={triggerEvent:t};if(e.closest(".fancybox__container.is-hiding"))return $n(t),void t.stopPropagation();const i=e.closest("[data-fancybox-delegate]")||void 0;if(i){const r=i.dataset.fancyboxDelegate||"",s=document.querySelectorAll(`[data-fancybox="${r}"]`),o=parseInt(i.dataset.fancyboxIndex||"",10)||0;e=s[o]||s[0],hn(n,{delegateEl:i,startIndex:o})}return lf(e,n)},fromNodes:function(t,e){e=hn({},Ks,e||{});const n=[],i=r=>r instanceof HTMLImageElement?r:r instanceof HTMLElement?r.querySelector("img:not([aria-hidden])"):void 0;for(const r of t){const s=r.dataset||{},o=e.delegateEl&&t.indexOf(r)===e.startIndex?e.delegateEl:void 0,a=i(r),l=i(o)||a||void 0,u=s.src||r.getAttribute("href")||r.getAttribute("currentSrc")||r.getAttribute("src")||void 0,c=s.thumb||s.thumbSrc||(l==null?void 0:l.getAttribute("currentSrc"))||(l==null?void 0:l.getAttribute("src"))||(l==null?void 0:l.dataset.lazySrc)||void 0,f={src:u,alt:s.alt||(a==null?void 0:a.getAttribute("alt"))||(l==null?void 0:l.getAttribute("alt"))||void 0,thumbSrc:c,thumbEl:l,triggerEl:r,delegateEl:o};for(const h in s){let d=s[h]+"";f[h]=d==="true"?h!=="fancybox"||"":d!=="false"&&d}n.push(f)}return vt.show(n,e)},fromSelector:function(t,e,n,i){if(!Zo())return;let r=document.body,s=null,o="[data-fancybox]",a={};t instanceof Element&&(r=t),ut(t)&&ut(e)?(s=t,o=e):ut(e)&&ut(n)?(s=e,o=n):ut(e)?o=e:ut(t)&&(o=t),typeof e=="object"&&(a=e||{}),typeof n=="object"&&(a=n||{}),typeof i=="object"&&(a=i||{});for(const[l,u]of vt.openers)for(const[c,f]of u)for(const[h,d]of f)if(l===r&&c===s){const v=r.querySelector((c?`${c} `:"")+o);if(v&&v.matches(h))return vt.fromTriggerEl(v,a)}},fromTriggerEl:lf,getCarousel:function(){var t;return((t=vt.getInstance())==null?void 0:t.getCarousel())||void 0},getDefaults:function(){return Ks},getInstance:function(t){if(t){const e=mi.get(t);return e&&e.getState()!==Mt.Destroyed?e:void 0}return Array.from(mi.values()).reverse().find(e=>{if(e.getState()!==Mt.Destroyed)return e})||void 0},getSlide:function(){var t;return((t=vt.getInstance())==null?void 0:t.getSlide())||void 0},show:function(t=[],e={}){return af(),k_().init(t,e)},unbind:function(t,e,n){if(!Zo())return;let i=document.body,r=null,s="[data-fancybox]";t instanceof Element&&(i=t),ut(t)&&ut(e)?(r=t,s=e):ut(e)&&ut(n)?(r=e,s=n):ut(e)?s=e:ut(t)&&(s=t),(function(o,a,l){if(!(o&&o instanceof Element&&l))return;const u=vt.openers.get(o)||new Map,c=u.get(a)||new Map;c&&l&&c.delete(l),c.size&&l||u.delete(a),u.size||(vt.openers.delete(o),o.removeEventListener("click",vt.fromEvent))})(i,r,s)}},Fi=743/1005;function W_(t,e){const n=t/e<Fi;return{phone:n,width:n?t:e*Fi,height:e}}const qr=document.documentElement,Yr=Aa({side:!1,phone:!1,hoverable:!1}),da=hr(Yr);function X_(){const t=innerWidth,e=innerHeight;Yr.side=t/e>=Fi&&(t-e*Fi)/2>=300&&e>=600,qr.classList.toggle("side",Yr.side),qr.classList.toggle("stack",!Yr.side)}function $_(t,e){const n=W_(t,e);Yr.phone=n.phone,qr.classList.toggle("phone",n.phone),qr.style.setProperty("--safe-w",n.width+"px"),qr.style.setProperty("--safe-l",(t-n.width)/2+"px")}function q_(){var n;const t=matchMedia("(hover: hover) and (pointer: fine)"),e=()=>{Yr.hoverable=t.matches,qr.classList.toggle("hoverable",t.matches)};return e(),(n=t.addEventListener)==null||n.call(t,"change",e),()=>{var i;return(i=t.removeEventListener)==null?void 0:i.call(t,"change",e)}}const cp=document.documentElement,Bc=fn(!1),so=fn(!1),ic=fn(!1),es={menuBtn:null,menu:null,lock:null,about:null,aboutClose:null};Ps(Bc,t=>cp.classList.toggle("menu-open",t),{flush:"sync"});Ps(so,t=>cp.classList.toggle("about-open",t),{flush:"sync"});function Ia(t){so.value=t,t&&setTimeout(()=>{var e;return(e=es.aboutClose)==null?void 0:e.focus({preventScroll:!0})},300)}function Y_(){var t;Ia(!1),(t=es.lock)==null||t.focus({preventScroll:!0})}function j_(){var t;da.side?Ia(!so.value):(t=es.about)==null||t.scrollIntoView({behavior:"smooth",block:"start"})}function K_(t){var e;Bc.value=t,t&&so.value&&Ia(!1),t?setTimeout(()=>{var n,i;return(i=(n=es.menu)==null?void 0:n.querySelector(".m-list a"))==null?void 0:i.focus({preventScroll:!0})},420):(e=es.menuBtn)==null||e.focus({preventScroll:!0})}function Z_({src:t,alt:e,caption:n,triggerEl:i}){ic.value=!0,vt.show([{src:t,type:"image",alt:e,caption:n,triggerEl:i,thumbEl:(i==null?void 0:i.querySelector("img"))??void 0}],{mainClass:"map-lightbox",theme:"dark",on:{destroy:()=>{ic.value=!1}}})}function ss(){return{menuOpen:hr(Bc),aboutOpen:hr(so),lightboxOpen:hr(ic),els:es,setMenu:K_,setAbout:Ia,closeAbout:Y_,toggleAbout:j_,openLightbox:Z_}}const Xi=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},J_=["aria-label","aria-expanded"],Q_={__name:"MenuButton",setup(t){const{menuOpen:e,els:n,setMenu:i}=ss();return(r,s)=>(St(),At("button",{ref:o=>je(n).menuBtn=o,class:"menu-btn",type:"button","aria-label":je(e)?"メニューを閉じる":"メニューを開く","aria-expanded":je(e),"aria-controls":"menu",onClick:s[0]||(s[0]=o=>je(i)(!je(e)))},[...s[1]||(s[1]=[Ue("i",null,null,-1),Ue("i",null,null,-1),Ue("i",null,null,-1)])],8,J_))}},e0=Xi(Q_,[["__scopeId","data-v-f911dd4f"]]),yn={logo:["lunar","drive"],issue:"002",year:"2031",title:"おもちゃ屋",titleNo:"01",sub:"月面ドライブ・ログ",tagline:"—— 静かの海を、ハイビームで。",credit:{label:"Earth data:",name:"Solar System Scope",url:"https://www.solarsystemscope.com/textures/",license:"(CC BY 4.0)"}},t0={class:"bar"},n0={class:"brand"},i0={class:"logo"},r0={class:"issue"},s0={__name:"TopNav",setup(t){const e=fn(!1),n=()=>{e.value=scrollY>24};return io(()=>addEventListener("scroll",n,{passive:!0})),Ca(()=>removeEventListener("scroll",n)),(i,r)=>(St(),At("header",{id:"topnav",class:to({scrolled:e.value})},[Ue("div",t0,[Ue("div",n0,[Ot(e0),Ue("div",i0,[Kt(at(je(yn).logo[0]),1),r[0]||(r[0]=Ue("b",null,"·",-1)),Kt(at(je(yn).logo[1]),1)])]),Ue("div",r0,at(je(yn).issue),1)]),r[1]||(r[1]=Ue("div",{class:"rule"},[Ue("i"),Ue("i"),Ue("i")],-1))],2))}},o0=Xi(s0,[["__scopeId","data-v-818dc532"]]),a0={id:"safe"},l0={class:"hero"},c0={class:"title-wrap"},u0={class:"year"},f0={class:"title"},d0={class:"sub"},h0={class:"tag"},p0={__name:"HeroTitle",setup(t,{expose:e}){const n=fn(null),i=[...yn.title];function r(s,o){n.value&&(n.value.style.transform=`translate(${(-s*6).toFixed(2)}px, ${(-o*4).toFixed(2)}px)`)}return e({setParallax:r}),(s,o)=>(St(),At("div",a0,[Ue("div",{ref_key:"headEl",ref:n,class:"head"},[Ue("div",l0,[Ue("div",c0,[Ue("span",u0,at(je(yn).year),1),Ue("h1",f0,[(St(),At(Ct,null,Xs(i,(a,l)=>Ue("span",{key:l,style:Zr({"--i":l})},at(a),5)),64)),Ue("em",{style:Zr({"--i":i.length})},at(je(yn).titleNo),5)])]),Ue("div",d0,at(je(yn).sub),1),Ue("div",h0,at(je(yn).tagline),1)])],512)]))}},m0=Xi(p0,[["__scopeId","data-v-899bd7f5"]]),g0={id:"tether","aria-hidden":"true"},_0=["aria-label","aria-expanded"],v0={__name:"SatelliteLock",setup(t,{expose:e}){const{aboutOpen:n,els:i,toggleAbout:r}=ss(),s=fn(null),o=fn(null),a=fn(null);io(()=>{i.lock=s.value});function l(u){const c=s.value;if(!c)return;const f=12,h=u.x1-u.x0+f*2,d=(u.y1-u.y0)*.78+f*2,v=u.x0-f,_=(u.y0+u.y1)/2-d/2;if(c.style.transform=`translate(${v.toFixed(1)}px, ${_.toFixed(1)}px)`,c.style.width=`${h.toFixed(1)}px`,c.style.height=`${d.toFixed(1)}px`,n.value&&da.side&&i.about){const g=i.about.getBoundingClientRect().right+6,p=_+d/2,M=v-10;o.value.setAttribute("d",`M${g.toFixed(1)},${(p+26).toFixed(1)} L${(g+28).toFixed(1)},${p.toFixed(1)} L${M.toFixed(1)},${p.toFixed(1)}`),a.value.setAttribute("cx",M.toFixed(1)),a.value.setAttribute("cy",p.toFixed(1))}}return e({update:l}),(u,c)=>(St(),At(Ct,null,[(St(),At("svg",g0,[Ue("path",{ref_key:"pathEl",ref:o,d:""},null,512),Ue("circle",{ref_key:"dotEl",ref:a,r:"3.5",cx:"-10",cy:"-10"},null,512)])),Ue("button",{id:"lock",ref_key:"lockEl",ref:s,type:"button","aria-label":je(n)?"本店紹介を閉じる":"本店紹介を開く","aria-expanded":je(n),"aria-controls":"about",onClick:c[0]||(c[0]=(...f)=>je(r)&&je(r)(...f))},[...c[1]||(c[1]=[Wg('<span class="frame" data-v-0460b294><i class="c tl" data-v-0460b294></i><i class="c tr" data-v-0460b294></i><i class="c bl" data-v-0460b294></i><i class="c br" data-v-0460b294></i><i class="tk t" data-v-0460b294></i><i class="tk b" data-v-0460b294></i><i class="tk l" data-v-0460b294></i><i class="tk r" data-v-0460b294></i></span><span class="ring" data-v-0460b294></span><span class="lock-tag" data-v-0460b294><span class="off" data-v-0460b294>TGT-02 ▸ <b data-v-0460b294>本店紹介</b></span><span class="on" data-v-0460b294>LOCK ON ▸ <b data-v-0460b294>クリックで開く</b></span></span>',3)])],8,_0)],64))}},x0=Xi(v0,[["__scopeId","data-v-0460b294"]]),y0={},M0={class:"scroll-hint","aria-hidden":"true"};function S0(t,e){return St(),At("div",M0,[...e[0]||(e[0]=[Kt("SCROLL",-1),Ue("span",null,"本店紹介 ↓",-1)])])}const E0=Xi(y0,[["render",S0],["__scopeId","data-v-ec57bc61"]]),b0=[{id:"gunpla",no:"01",jp:"ガンプラ",en:"GUNPLA",note:"組み立てプラモデル",badge:"新入荷"},{id:"sofubi",no:"02",jp:"ソフビ",en:"SOFT VINYL",note:"塩ビ・ゴム人形"},{id:"carded",no:"03",jp:"吊るし玩具",en:"CARDED TOYS",note:"台紙付き・吊りカード",badge:"昭和レトロ"},{id:"tin",no:"04",jp:"ブリキ",en:"TIN TOYS",note:"ぜんまい仕掛け"},{id:"capsule",no:"05",jp:"カプセルトイ",en:"CAPSULE TOYS",note:"回して、当てる。"},{id:"minicar",no:"06",jp:"ミニカー",en:"DIE-CAST",note:"1/64 コレクション"}],T0=[{id:"shop",label:"店舗案内"},{id:"access",label:"アクセス"},{id:"contact",label:"お問い合わせ"}],on={name:"昭和模型店",nameEn:"SHOWA MOKEI-TEN",established:"EST. 1973",lead:"中央商店街のアーチをくぐって、三軒目。",description:"昭和48年、神ノ町の商店街で創業した小さな模型とおもちゃの店です。ガンプラの新作から、駄菓子屋の軒先に吊るされていたカード玩具、ぜんまいで走るブリキまで。二代目店主が「子どものころの宝箱」を合言葉に、ひとつずつ仕入れています。",points:["半世紀ぶんのデッドストック棚","工具無料の組み立てコーナー","第2・第4土曜は塗装ワークショップ"],info:[{label:"住所",value:"〒150-0820 東京都神ノ町 3-12-7"},{label:"営業",value:"10:00 〜 19:00"},{label:"定休",value:"月曜日"},{label:"電話",value:"03-4444-XXXX"}],map:{alt:"昭和模型店の外観と、神ノ町・中央商店街のイラスト地図",caption:"神ノ町・中央商店街 ／ 神ノ町駅から徒歩5分"},hours:"10:00 — 19:00",closed:"月曜定休",slogan:"—— 月面から、なつかしいおもちゃを。",branch:"おもちゃ屋・月面支店"},A0=["aria-hidden"],w0={class:"m-panel"},R0={class:"m-kicker"},C0={class:"m-list"},L0=["href"],P0={class:"n"},D0={class:"jp"},I0={class:"en"},U0={key:0,class:"tagx"},N0={class:"m-foot"},O0={class:"m-links"},F0=["href"],B0={class:"m-info"},z0={class:"m-vert"},H0={__name:"CategoryMenu",setup(t){const{menuOpen:e,els:n,setMenu:i}=ss();function r(s){(s.target.closest("[data-close]")||s.target.closest("a"))&&i(!1)}return(s,o)=>(St(),At("nav",{id:"menu",ref:a=>je(n).menu=a,"aria-label":"商品カテゴリー","aria-hidden":!je(e),onClick:r},[o[7]||(o[7]=Ue("div",{class:"m-backdrop","data-close":""},null,-1)),Ue("div",w0,[Ue("div",R0,[o[1]||(o[1]=Ue("span",null,"CATEGORY INDEX",-1)),Ue("span",null,[o[0]||(o[0]=Kt("おもちゃ屋 ",-1)),Ue("b",null,"No."+at(je(yn).issue),1)])]),o[5]||(o[5]=Ue("div",{class:"m-title"},[Kt("商品カテゴリー"),Ue("span",null,".")],-1)),o[6]||(o[6]=Ue("div",{class:"m-rule"},null,-1)),Ue("ol",C0,[(St(!0),At(Ct,null,Xs(je(b0),(a,l)=>(St(),At("li",{key:a.id,style:Zr({"--i":l})},[Ue("a",{href:`#${a.id}`},[Ue("span",P0,at(a.no),1),Ue("span",D0,at(a.jp),1),Ue("span",I0,[Kt(at(a.en),1),Ue("small",null,at(a.note),1)]),o[2]||(o[2]=Ue("span",{class:"ar"},"→",-1)),a.badge?(St(),At("span",U0,at(a.badge),1)):Yh("",!0)],8,L0)],4))),128))]),Ue("div",N0,[Ue("div",O0,[(St(!0),At(Ct,null,Xs(je(T0),a=>(St(),At("a",{key:a.id,href:`#${a.id}`},at(a.label),9,F0))),128))]),Ue("div",B0,[o[3]||(o[3]=Kt("営業 ",-1)),Ue("em",null,at(je(on).hours),1),Kt(" ／ "+at(je(on).closed),1),o[4]||(o[4]=Ue("br",null,null,-1)),Kt(at(je(on).slogan),1)])]),Ue("div",z0,at(je(on).branch),1)])],8,A0))}},G0=Xi(H0,[["__scopeId","data-v-8187beba"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="160",V0=0,cf=1,k0=2,up=1,W0=2,di=3,ki=0,Qt=1,_i=2,Bi=0,jr=1,ha=2,uf=3,ff=4,X0=5,ar=100,$0=101,q0=102,df=103,hf=104,Y0=200,j0=201,K0=202,Z0=203,rc=204,sc=205,J0=206,Q0=207,ev=208,tv=209,nv=210,iv=211,rv=212,sv=213,ov=214,av=0,lv=1,cv=2,pa=3,uv=4,fv=5,dv=6,hv=7,fp=0,pv=1,mv=2,zi=0,gv=1,_v=2,vv=3,xv=4,yv=5,Mv=6,dp=300,ts=301,ns=302,oc=303,ac=304,Ua=306,lc=1e3,Fn=1001,cc=1002,an=1003,pf=1004,ll=1005,Tn=1006,Sv=1007,xr=1008,Hi=1009,Ev=1010,bv=1011,Hc=1012,hp=1013,Di=1014,Ii=1015,Zs=1016,pp=1017,mp=1018,gr=1020,Tv=1021,Bn=1023,Av=1024,wv=1025,_r=1026,is=1027,Rv=1028,gp=1029,Cv=1030,_p=1031,vp=1033,cl=33776,ul=33777,fl=33778,dl=33779,mf=35840,gf=35841,_f=35842,vf=35843,xp=36196,xf=37492,yf=37496,Mf=37808,Sf=37809,Ef=37810,bf=37811,Tf=37812,Af=37813,wf=37814,Rf=37815,Cf=37816,Lf=37817,Pf=37818,Df=37819,If=37820,Uf=37821,hl=36492,Nf=36494,Of=36495,Lv=36283,Ff=36284,Bf=36285,zf=36286,yp=3e3,vr=3001,Pv=3200,Dv=3201,Iv=0,Uv=1,wn="",Ht="srgb",ri="srgb-linear",Gc="display-p3",Na="display-p3-linear",ma="linear",_t="srgb",ga="rec709",_a="p3",Er=7680,Hf=519,Nv=512,Ov=513,Fv=514,Mp=515,Bv=516,zv=517,Hv=518,Gv=519,Gf=35044,Vf="300 es",uc=1035,vi=2e3,va=2001;class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,fc=180/Math.PI;function oo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function dn(t,e,n){return Math.max(e,Math.min(n,t))}function Vv(t,e){return(t%e+e)%e}function ml(t,e,n){return(1-n)*t+n*e}function kf(t){return(t&t-1)===0&&t!==0}function dc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,n,i,r,s,o,a,l,u){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],v=i[8],_=r[0],g=r[3],p=r[6],M=r[1],x=r[4],E=r[7],D=r[2],P=r[5],R=r[8];return s[0]=o*_+a*M+l*D,s[3]=o*g+a*x+l*P,s[6]=o*p+a*E+l*R,s[1]=u*_+c*M+f*D,s[4]=u*g+c*x+f*P,s[7]=u*p+c*E+f*R,s[2]=h*_+d*M+v*D,s[5]=h*g+d*x+v*P,s[8]=h*p+d*E+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,d=u*s-o*l,v=n*f+i*h+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=d*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gl.makeScale(e,n)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,n){return this.premultiply(gl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new it;function Sp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Js(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kv(){const t=Js("canvas");return t.style.display="block",t}const Wf={};function zs(t){t in Wf||(Wf[t]=!0,console.warn(t))}const Xf=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$f=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mo={[ri]:{transfer:ma,primaries:ga,toReference:t=>t,fromReference:t=>t},[Ht]:{transfer:_t,primaries:ga,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Na]:{transfer:ma,primaries:_a,toReference:t=>t.applyMatrix3($f),fromReference:t=>t.applyMatrix3(Xf)},[Gc]:{transfer:_t,primaries:_a,toReference:t=>t.convertSRGBToLinear().applyMatrix3($f),fromReference:t=>t.applyMatrix3(Xf).convertLinearToSRGB()}},Wv=new Set([ri,Na]),dt={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Wv.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Mo[e].toReference,r=Mo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Mo[t].primaries},getTransfer:function(t){return t===wn?ma:Mo[t].transfer}};function Kr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _l(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class Ep{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=Js("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Js("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Kr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Kr(n[i]/255)*255):n[i]=Kr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xv=0;class bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=oo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vl(r[o].image)):s.push(vl(r[o]))}else s=vl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ep.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $v=0;class pn extends os{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Fn,r=Fn,s=Tn,o=xr,a=Bn,l=Hi,u=pn.DEFAULT_ANISOTROPY,c=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=oo(),this.name="",this.source=new bp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===vr?Ht:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lc:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lc:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?vr:yp}set encoding(e){zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vr?Ht:wn}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=dp;pn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],v=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+g)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,E=(d+1)/2,D=(p+1)/2,P=(c+h)/4,R=(f+_)/4,Q=(v+g)/4;return x>E&&x>D?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=R/i):E>D?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=Q/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=R/s,r=Q/s),this.set(i,r,s,n),this}let M=Math.sqrt((g-v)*(g-v)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(M)<.001&&(M=1),this.x=(g-v)/M,this.y=(f-_)/M,this.z=(h-c)/M,this.w=Math.acos((u+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qv extends os{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vr?Ht:wn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new bp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends qv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Tp extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yv extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=v,e[n+3]=_;return}if(f!==_||l!==h||u!==d||c!==v){let g=1-a;const p=l*h+u*d+c*v+f*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const D=Math.sqrt(x),P=Math.atan2(D,p*M);g=Math.sin(g*P)/D,a=Math.sin(a*P)/D}const E=a*M;if(l=l*g+h*E,u=u*g+d*E,c=c*g+v*E,f=f*g+_*E,g===1-a){const D=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=D,u*=D,c*=D,f*=D}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],d=s[o+2],v=s[o+3];return e[n]=a*v+c*f+l*d-u*h,e[n+1]=l*v+c*h+u*f-a*d,e[n+2]=u*v+c*d+a*h-l*f,e[n+3]=c*v-a*f-l*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*d*v,this._y=u*d*f-h*c*v,this._z=u*c*v+h*d*f,this._w=u*c*f-h*d*v;break;case"YXZ":this._x=h*c*f+u*d*v,this._y=u*d*f-h*c*v,this._z=u*c*v-h*d*f,this._w=u*c*f+h*d*v;break;case"ZXY":this._x=h*c*f-u*d*v,this._y=u*d*f+h*c*v,this._z=u*c*v+h*d*f,this._w=u*c*f-h*d*v;break;case"ZYX":this._x=h*c*f-u*d*v,this._y=u*d*f+h*c*v,this._z=u*c*v-h*d*f,this._w=u*c*f+h*d*v;break;case"YZX":this._x=h*c*f+u*d*v,this._y=u*d*f+h*c*v,this._z=u*c*v-h*d*f,this._w=u*c*f-h*d*v;break;case"XZY":this._x=h*c*f-u*d*v,this._y=u*d*f-h*c*v,this._z=u*c*v+h*d*f,this._w=u*c*f+h*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xl=new ee,qf=new as;class Mr{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),Eo.subVectors(this.max,_s),Tr.subVectors(e.a,_s),Ar.subVectors(e.b,_s),wr.subVectors(e.c,_s),Si.subVectors(Ar,Tr),Ei.subVectors(wr,Ar),Qi.subVectors(Tr,wr);let n=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Qi.z,Qi.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Qi.z,0,-Qi.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Qi.y,Qi.x,0];return!yl(n,Tr,Ar,wr,Eo)||(n=[1,0,0,0,1,0,0,0,1],!yl(n,Tr,Ar,wr,Eo))?!1:(bo.crossVectors(Si,Ei),n=[bo.x,bo.y,bo.z],yl(n,Tr,Ar,wr,Eo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Pn=new ee,So=new Mr,Tr=new ee,Ar=new ee,wr=new ee,Si=new ee,Ei=new ee,Qi=new ee,_s=new ee,Eo=new ee,bo=new ee,er=new ee;function yl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){er.fromArray(t,s);const a=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),u=n.dot(er),c=i.dot(er);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const jv=new Mr,vs=new ee,Ml=new ee;class ls{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const n=vs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(vs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Ml)),this.expandByPoint(vs.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new ee,Sl=new ee,To=new ee,bi=new ee,El=new ee,Ao=new ee,bl=new ee;class Ap{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Sl.copy(e).add(n).multiplyScalar(.5),To.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(Sl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(To),a=bi.dot(this.direction),l=-bi.dot(To),u=bi.lengthSq(),c=Math.abs(1-o*o);let f,h,d,v;if(c>0)if(f=o*l-a,h=o*a-l,v=s*c,f>=0)if(h>=-v)if(h<=v){const _=1/c;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Sl).addScaledVector(To,h),d}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){El.subVectors(n,e),Ao.subVectors(i,e),bl.crossVectors(El,Ao);let o=this.direction.dot(bl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(Ao.crossVectors(bi,Ao));if(l<0)return null;const u=a*this.direction.dot(El.cross(bi));if(u<0||l+u>o)return null;const c=-a*bi.dot(bl);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,r,s,o,a,l,u,c,f,h,d,v,_,g){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,h,d,v,_,g)}set(e,n,i,r,s,o,a,l,u,c,f,h,d,v,_,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=d,p[7]=v,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,d=o*f,v=a*c,_=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=d+v*u,n[5]=h-_*u,n[9]=-a*l,n[2]=_-h*u,n[6]=v+d*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,d=l*f,v=u*c,_=u*f;n[0]=h+_*a,n[4]=v*a-d,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=d*a-v,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,d=l*f,v=u*c,_=u*f;n[0]=h-_*a,n[4]=-o*f,n[8]=v+d*a,n[1]=d+v*a,n[5]=o*c,n[9]=_-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,d=o*f,v=a*c,_=a*f;n[0]=l*c,n[4]=v*u-d,n[8]=h*u+_,n[1]=l*f,n[5]=_*u+h,n[9]=d*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*u,v=a*l,_=a*u;n[0]=l*c,n[4]=_-h*f,n[8]=v*f+d,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=d*f+v,n[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*u,v=a*l,_=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+_,n[5]=o*c,n[9]=d*f-v,n[2]=v*f-d,n[6]=a*c,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kv,e,Zv)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ti.crossVectors(i,vn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ti.crossVectors(i,vn)),Ti.normalize(),wo.crossVectors(vn,Ti),r[0]=Ti.x,r[4]=wo.x,r[8]=vn.x,r[1]=Ti.y,r[5]=wo.y,r[9]=vn.y,r[2]=Ti.z,r[6]=wo.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],v=i[2],_=i[6],g=i[10],p=i[14],M=i[3],x=i[7],E=i[11],D=i[15],P=r[0],R=r[4],Q=r[8],A=r[12],L=r[1],q=r[5],ae=r[9],V=r[13],I=r[2],G=r[6],B=r[10],$=r[14],Y=r[3],ne=r[7],ie=r[11],re=r[15];return s[0]=o*P+a*L+l*I+u*Y,s[4]=o*R+a*q+l*G+u*ne,s[8]=o*Q+a*ae+l*B+u*ie,s[12]=o*A+a*V+l*$+u*re,s[1]=c*P+f*L+h*I+d*Y,s[5]=c*R+f*q+h*G+d*ne,s[9]=c*Q+f*ae+h*B+d*ie,s[13]=c*A+f*V+h*$+d*re,s[2]=v*P+_*L+g*I+p*Y,s[6]=v*R+_*q+g*G+p*ne,s[10]=v*Q+_*ae+g*B+p*ie,s[14]=v*A+_*V+g*$+p*re,s[3]=M*P+x*L+E*I+D*Y,s[7]=M*R+x*q+E*G+D*ne,s[11]=M*Q+x*ae+E*B+D*ie,s[15]=M*A+x*V+E*$+D*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],d=e[14],v=e[3],_=e[7],g=e[11],p=e[15];return v*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*d-i*l*d)+_*(+n*l*d-n*u*h+s*o*h-r*o*d+r*u*c-s*l*c)+g*(+n*u*f-n*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-n*l*f+n*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],d=e[11],v=e[12],_=e[13],g=e[14],p=e[15],M=f*g*u-_*h*u+_*l*d-a*g*d-f*l*p+a*h*p,x=v*h*u-c*g*u-v*l*d+o*g*d+c*l*p-o*h*p,E=c*_*u-v*f*u+v*a*d-o*_*d-c*a*p+o*f*p,D=v*f*l-c*_*l-v*a*h+o*_*h+c*a*g-o*f*g,P=n*M+i*x+r*E+s*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=M*R,e[1]=(_*h*s-f*g*s-_*r*d+i*g*d+f*r*p-i*h*p)*R,e[2]=(a*g*s-_*l*s+_*r*u-i*g*u-a*r*p+i*l*p)*R,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*d-i*l*d)*R,e[4]=x*R,e[5]=(c*g*s-v*h*s+v*r*d-n*g*d-c*r*p+n*h*p)*R,e[6]=(v*l*s-o*g*s-v*r*u+n*g*u+o*r*p-n*l*p)*R,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*d+n*l*d)*R,e[8]=E*R,e[9]=(v*f*s-c*_*s-v*i*d+n*_*d+c*i*p-n*f*p)*R,e[10]=(o*_*s-v*a*s+v*i*u-n*_*u-o*i*p+n*a*p)*R,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*d-n*a*d)*R,e[12]=D*R,e[13]=(c*_*r-v*f*r+v*i*h-n*_*h-c*i*g+n*f*g)*R,e[14]=(v*a*r-o*_*r-v*i*l+n*_*l+o*i*g-n*a*g)*R,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,h=s*u,d=s*c,v=s*f,_=o*c,g=o*f,p=a*f,M=l*u,x=l*c,E=l*f,D=i.x,P=i.y,R=i.z;return r[0]=(1-(_+p))*D,r[1]=(d+E)*D,r[2]=(v-x)*D,r[3]=0,r[4]=(d-E)*P,r[5]=(1-(h+p))*P,r[6]=(g+M)*P,r[7]=0,r[8]=(v+x)*R,r[9]=(g-M)*R,r[10]=(1-(h+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const u=1/s,c=1/o,f=1/a;return Dn.elements[0]*=u,Dn.elements[1]*=u,Dn.elements[2]*=u,Dn.elements[4]*=c,Dn.elements[5]*=c,Dn.elements[6]*=c,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,n.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=vi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let d,v;if(a===vi)d=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===va)d=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),h=(n+e)*u,d=(i+r)*c;let v,_;if(a===vi)v=(o+s)*f,_=-2*f;else if(a===va)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rr=new ee,Dn=new bt,Kv=new ee(0,0,0),Zv=new ee(1,1,1),Ti=new ee,wo=new ee,vn=new ee,Yf=new bt,jf=new as;class ao{constructor(e=0,n=0,i=0,r=ao.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jf.setFromEuler(this),this.setFromQuaternion(jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ao.DEFAULT_ORDER="XYZ";class wp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jv=0;const Kf=new ee,Cr=new as,ci=new bt,Ro=new ee,xs=new ee,Qv=new ee,ex=new as,Zf=new ee(1,0,0),Jf=new ee(0,1,0),Qf=new ee(0,0,1),tx={type:"added"},nx={type:"removed"};class mn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new ee,n=new ao,i=new as,r=new ee(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new it}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis(Jf,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,n){return Kf.copy(e).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis(Jf,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ro.copy(e):Ro.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(xs,Ro,this.up):ci.lookAt(Ro,xs,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(ci),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,Qv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new ee(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new ee,ui=new ee,Tl=new ee,fi=new ee,Lr=new ee,Pr=new ee,ed=new ee,Al=new ee,wl=new ee,Rl=new ee;let Co=!1;class On{constructor(e=new ee,n=new ee,i=new ee){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ui.subVectors(i,n),Tl.subVectors(e,n);const o=In.dot(In),a=In.dot(ui),l=In.dot(Tl),u=ui.dot(ui),c=ui.dot(Tl),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-d-v,v,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ui.subVectors(e,n),In.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),In.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),Pr.subVectors(s,i),Al.subVectors(e,i);const l=Lr.dot(Al),u=Pr.dot(Al);if(l<=0&&u<=0)return n.copy(i);wl.subVectors(e,r);const c=Lr.dot(wl),f=Pr.dot(wl);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Lr,o);Rl.subVectors(e,s);const d=Lr.dot(Rl),v=Pr.dot(Rl);if(v>=0&&d<=v)return n.copy(s);const _=d*u-l*v;if(_<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Pr,a);const g=c*v-d*f;if(g<=0&&f-c>=0&&d-v>=0)return ed.subVectors(s,r),a=(f-c)/(f-c+(d-v)),n.copy(r).addScaledVector(ed,a);const p=1/(g+_+h);return o=_*p,a=h*p,n.copy(i).addScaledVector(Lr,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Cl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,dt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=dt.workingColorSpace){if(e=Vv(e,1),n=dn(n,0,1),i=dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cl(o,s,e+1/3),this.g=Cl(o,s,e),this.b=Cl(o,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,n=Ht){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ht){const i=Rp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=_l(e.r),this.g=_l(e.g),this.b=_l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return dt.fromWorkingColorSpace(qt.copy(this),e),Math.round(dn(qt.r*255,0,255))*65536+Math.round(dn(qt.g*255,0,255))*256+Math.round(dn(qt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dt.workingColorSpace){dt.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=dt.workingColorSpace){return dt.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Ht){dt.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Ht?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(Lo);const i=ml(Ai.h,Lo.h,n),r=ml(Ai.s,Lo.s,n),s=ml(Ai.l,Lo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new et;et.NAMES=Rp;let ix=0;class lo extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=jr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=sc,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rc&&(i.blendSrc=this.blendSrc),this.blendDst!==sc&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cp extends lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new ee,Po=new st;class kt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Po.fromBufferAttribute(this,n),Po.applyMatrix3(e),this.setXY(n,Po.x,Po.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=gs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gf&&(e.usage=this.usage),e}}class Lp extends kt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Pp extends kt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sn extends kt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let rx=0;const bn=new bt,Ll=new mn,Dr=new ee,xn=new Mr,ys=new Mr,Nt=new ee;class Ln extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?Pp:Lp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(xn.min,ys.min),xn.expandByPoint(Nt),Nt.addVectors(xn.max,ys.max),xn.expandByPoint(Nt)):(xn.expandByPoint(ys.min),xn.expandByPoint(ys.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Nt.fromBufferAttribute(a,u),l&&(Dr.fromBufferAttribute(e,u),Nt.add(Dr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<a;L++)u[L]=new ee,c[L]=new ee;const f=new ee,h=new ee,d=new ee,v=new st,_=new st,g=new st,p=new ee,M=new ee;function x(L,q,ae){f.fromArray(r,L*3),h.fromArray(r,q*3),d.fromArray(r,ae*3),v.fromArray(o,L*2),_.fromArray(o,q*2),g.fromArray(o,ae*2),h.sub(f),d.sub(f),_.sub(v),g.sub(v);const V=1/(_.x*g.y-g.x*_.y);isFinite(V)&&(p.copy(h).multiplyScalar(g.y).addScaledVector(d,-_.y).multiplyScalar(V),M.copy(d).multiplyScalar(_.x).addScaledVector(h,-g.x).multiplyScalar(V),u[L].add(p),u[q].add(p),u[ae].add(p),c[L].add(M),c[q].add(M),c[ae].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let L=0,q=E.length;L<q;++L){const ae=E[L],V=ae.start,I=ae.count;for(let G=V,B=V+I;G<B;G+=3)x(i[G+0],i[G+1],i[G+2])}const D=new ee,P=new ee,R=new ee,Q=new ee;function A(L){R.fromArray(s,L*3),Q.copy(R);const q=u[L];D.copy(q),D.sub(R.multiplyScalar(R.dot(q))).normalize(),P.crossVectors(Q,q);const V=P.dot(c[L])<0?-1:1;l[L*4]=D.x,l[L*4+1]=D.y,l[L*4+2]=D.z,l[L*4+3]=V}for(let L=0,q=E.length;L<q;++L){const ae=E[L],V=ae.start,I=ae.count;for(let G=V,B=V+I;G<B;G+=3)A(i[G+0]),A(i[G+1]),A(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new ee,s=new ee,o=new ee,a=new ee,l=new ee,u=new ee,c=new ee,f=new ee;if(e)for(let h=0,d=e.count;h<d;h+=3){const v=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,d=n.count;h<d;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let d=0,v=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)h[v++]=u[d++]}return new kt(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new bt,tr=new Ap,Do=new ls,nd=new ee,Ir=new ee,Ur=new ee,Nr=new ee,Pl=new ee,Io=new ee,Uo=new st,No=new st,Oo=new st,id=new ee,rd=new ee,sd=new ee,Fo=new ee,Bo=new ee;class Vt extends mn{constructor(e=new Ln,n=new Cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Io.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Pl.fromBufferAttribute(f,e),o?Io.addScaledVector(Pl,c):Io.addScaledVector(Pl.sub(n),c))}n.add(Io)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(Do.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Do,nd)===null||tr.origin.distanceToSquared(nd)>(e.far-e.near)**2))&&(td.copy(s).invert(),tr.copy(e.ray).applyMatrix4(td),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const g=h[v],p=o[g.materialIndex],M=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let E=M,D=x;E<D;E+=3){const P=a.getX(E),R=a.getX(E+1),Q=a.getX(E+2);r=zo(this,p,e,i,u,c,f,P,R,Q),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=v,p=_;g<p;g+=3){const M=a.getX(g),x=a.getX(g+1),E=a.getX(g+2);r=zo(this,o,e,i,u,c,f,M,x,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const g=h[v],p=o[g.materialIndex],M=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let E=M,D=x;E<D;E+=3){const P=E,R=E+1,Q=E+2;r=zo(this,p,e,i,u,c,f,P,R,Q),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=v,p=_;g<p;g+=3){const M=g,x=g+1,E=g+2;r=zo(this,o,e,i,u,c,f,M,x,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function sx(t,e,n,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ki,a),l===null)return null;Bo.copy(a),Bo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Bo);return u<n.near||u>n.far?null:{distance:u,point:Bo.clone(),object:t}}function zo(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ir),t.getVertexPosition(l,Ur),t.getVertexPosition(u,Nr);const c=sx(t,e,n,i,Ir,Ur,Nr,Fo);if(c){r&&(Uo.fromBufferAttribute(r,a),No.fromBufferAttribute(r,l),Oo.fromBufferAttribute(r,u),c.uv=On.getInterpolation(Fo,Ir,Ur,Nr,Uo,No,Oo,new st)),s&&(Uo.fromBufferAttribute(s,a),No.fromBufferAttribute(s,l),Oo.fromBufferAttribute(s,u),c.uv1=On.getInterpolation(Fo,Ir,Ur,Nr,Uo,No,Oo,new st),c.uv2=c.uv1),o&&(id.fromBufferAttribute(o,a),rd.fromBufferAttribute(o,l),sd.fromBufferAttribute(o,u),c.normal=On.getInterpolation(Fo,Ir,Ur,Nr,id,rd,sd,new ee),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new ee,materialIndex:0};On.getNormal(Ir,Ur,Nr,f.normal),c.face=f}return c}class co extends Ln{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,d=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(u,3)),this.setAttribute("normal",new Sn(c,3)),this.setAttribute("uv",new Sn(f,2));function v(_,g,p,M,x,E,D,P,R,Q,A){const L=E/R,q=D/Q,ae=E/2,V=D/2,I=P/2,G=R+1,B=Q+1;let $=0,Y=0;const ne=new ee;for(let ie=0;ie<B;ie++){const re=ie*q-V;for(let xe=0;xe<G;xe++){const k=xe*L-ae;ne[_]=k*M,ne[g]=re*x,ne[p]=I,u.push(ne.x,ne.y,ne.z),ne[_]=0,ne[g]=0,ne[p]=P>0?1:-1,c.push(ne.x,ne.y,ne.z),f.push(xe/R),f.push(1-ie/Q),$+=1}}for(let ie=0;ie<Q;ie++)for(let re=0;re<R;re++){const xe=h+re+G*ie,k=h+re+G*(ie+1),de=h+(re+1)+G*(ie+1),Ee=h+(re+1)+G*ie;l.push(xe,k,Ee),l.push(k,de,Ee),Y+=6}a.addGroup(d,Y,A),d+=Y,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=rs(t[n]);for(const r in i)e[r]=i[r]}return e}function ox(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dp(t){return t.getRenderTarget()===null?t.outputColorSpace:dt.workingColorSpace}const ax={clone:rs,merge:rn};var lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ip extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends Ip{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fc*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Or=-90,Fr=1;class ux extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Or,Fr,e,n);r.layers=this.layers,this.add(r);const s=new An(Or,Fr,e,n);s.layers=this.layers,this.add(s);const o=new An(Or,Fr,e,n);o.layers=this.layers,this.add(o);const a=new An(Or,Fr,e,n);a.layers=this.layers,this.add(a);const l=new An(Or,Fr,e,n);l.layers=this.layers,this.add(l);const u=new An(Or,Fr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Up extends pn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ts,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fx extends Wi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vr?Ht:wn),this.texture=new Up(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new co(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Bi});s.uniforms.tEquirect.value=n;const o=new Vt(r,s),a=n.minFilter;return n.minFilter===xr&&(n.minFilter=Tn),new ux(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Dl=new ee,dx=new ee,hx=new it;class rr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Dl.subVectors(i,n).cross(dx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Dl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||hx.getNormalMatrix(e),r=this.coplanarPoint(Dl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new ls,Ho=new ee;class Np{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,o=new rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],d=r[8],v=r[9],_=r[10],g=r[11],p=r[12],M=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,h-u,g-d,E-p).normalize(),i[1].setComponents(l+s,h+u,g+d,E+p).normalize(),i[2].setComponents(l+o,h+c,g+v,E+M).normalize(),i[3].setComponents(l-o,h-c,g-v,E-M).normalize(),i[4].setComponents(l-a,h-f,g-_,E-x).normalize(),n===vi)i[5].setComponents(l+a,h+f,g+_,E+x).normalize();else if(n===va)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Op(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function px(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,d=f.byteLength,v=t.createBuffer();t.bindBuffer(c,v),t.bufferData(c,f,h),u.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:d}}function s(u,c,f){const h=c.array,d=c._updateRange,v=c.updateRanges;if(t.bindBuffer(f,u),d.count===-1&&v.length===0&&t.bufferSubData(f,0,h),v.length!==0){for(let _=0,g=v.length;_<g;_++){const p=v[_];n?t.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):t.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}c.clearUpdateRanges()}d.count!==-1&&(n?t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class $i extends Ln{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,d=[],v=[],_=[],g=[];for(let p=0;p<c;p++){const M=p*h-o;for(let x=0;x<u;x++){const E=x*f-s;v.push(E,-M,0),_.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+u*p,E=M+u*(p+1),D=M+1+u*(p+1),P=M+1+u*p;d.push(x,E,P),d.push(E,D,P)}this.setIndex(d),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.widthSegments,e.heightSegments)}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
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
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ex=`#ifdef USE_BATCHING
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
#endif`,bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,zx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hx=`vec3 transformedNormal = objectNormal;
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
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`
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
}`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ty=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ny=`#ifdef USE_GRADIENTMAP
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
}`,iy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
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
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
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
#endif`,py=`struct PhysicalMaterial {
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
}`,my=`
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
#endif`,gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,_y=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,by=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ty=`#if defined( USE_POINTS_UV )
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
#endif`,Ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ry=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
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
#endif`,Ly=`#ifdef USE_MORPHTARGETS
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
#endif`,Py=`#ifdef USE_MORPHTARGETS
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
#endif`,Dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fy=`#ifdef USE_NORMALMAP
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
#endif`,By=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qy=`float getShadowMask() {
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
}`,eM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tM=`#ifdef USE_SKINNING
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
#endif`,nM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iM=`#ifdef USE_SKINNING
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
#endif`,rM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lM=`#ifdef USE_TRANSMISSION
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
#endif`,cM=`#ifdef USE_TRANSMISSION
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mM=`uniform sampler2D t2D;
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`#include <common>
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
}`,MM=`#if DEPTH_PACKING == 3200
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
}`,SM=`#define DISTANCE
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
}`,EM=`#define DISTANCE
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`uniform float scale;
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
}`,wM=`uniform vec3 diffuse;
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
}`,RM=`#include <common>
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
}`,CM=`uniform vec3 diffuse;
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
}`,LM=`#define LAMBERT
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
}`,PM=`#define LAMBERT
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
}`,DM=`#define MATCAP
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
}`,IM=`#define MATCAP
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
}`,UM=`#define NORMAL
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
}`,NM=`#define NORMAL
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
}`,OM=`#define PHONG
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
}`,FM=`#define PHONG
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
}`,BM=`#define STANDARD
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
}`,zM=`#define STANDARD
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
}`,HM=`#define TOON
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
}`,GM=`#define TOON
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
}`,VM=`uniform float size;
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
}`,kM=`uniform vec3 diffuse;
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
}`,WM=`#include <common>
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
}`,XM=`uniform vec3 color;
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
}`,$M=`uniform float rotation;
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
}`,qM=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:_x,alphamap_pars_fragment:vx,alphatest_fragment:xx,alphatest_pars_fragment:yx,aomap_fragment:Mx,aomap_pars_fragment:Sx,batching_pars_vertex:Ex,batching_vertex:bx,begin_vertex:Tx,beginnormal_vertex:Ax,bsdfs:wx,iridescence_fragment:Rx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Lx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Ix,color_fragment:Ux,color_pars_fragment:Nx,color_pars_vertex:Ox,color_vertex:Fx,common:Bx,cube_uv_reflection_fragment:zx,defaultnormal_vertex:Hx,displacementmap_pars_vertex:Gx,displacementmap_vertex:Vx,emissivemap_fragment:kx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:$x,envmap_fragment:qx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:jx,envmap_pars_vertex:Kx,envmap_physical_pars_fragment:ly,envmap_vertex:Zx,fog_vertex:Jx,fog_pars_vertex:Qx,fog_fragment:ey,fog_pars_fragment:ty,gradientmap_pars_fragment:ny,lightmap_fragment:iy,lightmap_pars_fragment:ry,lights_lambert_fragment:sy,lights_lambert_pars_fragment:oy,lights_pars_begin:ay,lights_toon_fragment:cy,lights_toon_pars_fragment:uy,lights_phong_fragment:fy,lights_phong_pars_fragment:dy,lights_physical_fragment:hy,lights_physical_pars_fragment:py,lights_fragment_begin:my,lights_fragment_maps:gy,lights_fragment_end:_y,logdepthbuf_fragment:vy,logdepthbuf_pars_fragment:xy,logdepthbuf_pars_vertex:yy,logdepthbuf_vertex:My,map_fragment:Sy,map_pars_fragment:Ey,map_particle_fragment:by,map_particle_pars_fragment:Ty,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:wy,morphcolor_vertex:Ry,morphnormal_vertex:Cy,morphtarget_pars_vertex:Ly,morphtarget_vertex:Py,normal_fragment_begin:Dy,normal_fragment_maps:Iy,normal_pars_fragment:Uy,normal_pars_vertex:Ny,normal_vertex:Oy,normalmap_pars_fragment:Fy,clearcoat_normal_fragment_begin:By,clearcoat_normal_fragment_maps:zy,clearcoat_pars_fragment:Hy,iridescence_pars_fragment:Gy,opaque_fragment:Vy,packing:ky,premultiplied_alpha_fragment:Wy,project_vertex:Xy,dithering_fragment:$y,dithering_pars_fragment:qy,roughnessmap_fragment:Yy,roughnessmap_pars_fragment:jy,shadowmap_pars_fragment:Ky,shadowmap_pars_vertex:Zy,shadowmap_vertex:Jy,shadowmask_pars_fragment:Qy,skinbase_vertex:eM,skinning_pars_vertex:tM,skinning_vertex:nM,skinnormal_vertex:iM,specularmap_fragment:rM,specularmap_pars_fragment:sM,tonemapping_fragment:oM,tonemapping_pars_fragment:aM,transmission_fragment:lM,transmission_pars_fragment:cM,uv_pars_fragment:uM,uv_pars_vertex:fM,uv_vertex:dM,worldpos_vertex:hM,background_vert:pM,background_frag:mM,backgroundCube_vert:gM,backgroundCube_frag:_M,cube_vert:vM,cube_frag:xM,depth_vert:yM,depth_frag:MM,distanceRGBA_vert:SM,distanceRGBA_frag:EM,equirect_vert:bM,equirect_frag:TM,linedashed_vert:AM,linedashed_frag:wM,meshbasic_vert:RM,meshbasic_frag:CM,meshlambert_vert:LM,meshlambert_frag:PM,meshmatcap_vert:DM,meshmatcap_frag:IM,meshnormal_vert:UM,meshnormal_frag:NM,meshphong_vert:OM,meshphong_frag:FM,meshphysical_vert:BM,meshphysical_frag:zM,meshtoon_vert:HM,meshtoon_frag:GM,points_vert:VM,points_frag:kM,shadow_vert:WM,shadow_frag:XM,sprite_vert:$M,sprite_frag:qM},Pe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Kn={basic:{uniforms:rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:rn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:rn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:rn([Pe.points,Pe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:rn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:rn([Pe.common,Pe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:rn([Pe.sprite,Pe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:rn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:rn([Pe.lights,Pe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Kn.physical={uniforms:rn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Go={r:0,b:0,g:0};function YM(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,c,f=null,h=0,d=null;function v(g,p){let M=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?n:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ua)?(c===void 0&&(c=new Vt(new co(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:rs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==_t,(f!==x||h!==x.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Vt(new $i(2,2),new Bt({name:"BackgroundMaterial",uniforms:rs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=dt.getTransfer(x.colorSpace)!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function _(g,p){g.getRGB(Go,Dp(t)),i.buffers.color.setClear(Go.r,Go.g,Go.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:v}}function jM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let u=l,c=!1;function f(I,G,B,$,Y){let ne=!1;if(o){const ie=_($,B,G);u!==ie&&(u=ie,d(u.object)),ne=p(I,$,B,Y),ne&&M(I,$,B,Y)}else{const ie=G.wireframe===!0;(u.geometry!==$.id||u.program!==B.id||u.wireframe!==ie)&&(u.geometry=$.id,u.program=B.id,u.wireframe=ie,ne=!0)}Y!==null&&n.update(Y,t.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,Q(I,G,B,$),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function d(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function v(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,G,B){const $=B.wireframe===!0;let Y=a[I.id];Y===void 0&&(Y={},a[I.id]=Y);let ne=Y[G.id];ne===void 0&&(ne={},Y[G.id]=ne);let ie=ne[$];return ie===void 0&&(ie=g(h()),ne[$]=ie),ie}function g(I){const G=[],B=[],$=[];for(let Y=0;Y<r;Y++)G[Y]=0,B[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:B,attributeDivisors:$,object:I,attributes:{},index:null}}function p(I,G,B,$){const Y=u.attributes,ne=G.attributes;let ie=0;const re=B.getAttributes();for(const xe in re)if(re[xe].location>=0){const de=Y[xe];let Ee=ne[xe];if(Ee===void 0&&(xe==="instanceMatrix"&&I.instanceMatrix&&(Ee=I.instanceMatrix),xe==="instanceColor"&&I.instanceColor&&(Ee=I.instanceColor)),de===void 0||de.attribute!==Ee||Ee&&de.data!==Ee.data)return!0;ie++}return u.attributesNum!==ie||u.index!==$}function M(I,G,B,$){const Y={},ne=G.attributes;let ie=0;const re=B.getAttributes();for(const xe in re)if(re[xe].location>=0){let de=ne[xe];de===void 0&&(xe==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),xe==="instanceColor"&&I.instanceColor&&(de=I.instanceColor));const Ee={};Ee.attribute=de,de&&de.data&&(Ee.data=de.data),Y[xe]=Ee,ie++}u.attributes=Y,u.attributesNum=ie,u.index=$}function x(){const I=u.newAttributes;for(let G=0,B=I.length;G<B;G++)I[G]=0}function E(I){D(I,0)}function D(I,G){const B=u.newAttributes,$=u.enabledAttributes,Y=u.attributeDivisors;B[I]=1,$[I]===0&&(t.enableVertexAttribArray(I),$[I]=1),Y[I]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),Y[I]=G)}function P(){const I=u.newAttributes,G=u.enabledAttributes;for(let B=0,$=G.length;B<$;B++)G[B]!==I[B]&&(t.disableVertexAttribArray(B),G[B]=0)}function R(I,G,B,$,Y,ne,ie){ie===!0?t.vertexAttribIPointer(I,G,B,Y,ne):t.vertexAttribPointer(I,G,B,$,Y,ne)}function Q(I,G,B,$){if(i.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Y=$.attributes,ne=B.getAttributes(),ie=G.defaultAttributeValues;for(const re in ne){const xe=ne[re];if(xe.location>=0){let k=Y[re];if(k===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){const de=k.normalized,Ee=k.itemSize,Ce=n.get(k);if(Ce===void 0)continue;const De=Ce.buffer,Ge=Ce.type,He=Ce.bytesPerElement,Ve=i.isWebGL2===!0&&(Ge===t.INT||Ge===t.UNSIGNED_INT||k.gpuType===hp);if(k.isInterleavedBufferAttribute){const N=k.data,T=N.stride,se=k.offset;if(N.isInstancedInterleavedBuffer){for(let te=0;te<xe.locationSize;te++)D(xe.location+te,N.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let te=0;te<xe.locationSize;te++)E(xe.location+te);t.bindBuffer(t.ARRAY_BUFFER,De);for(let te=0;te<xe.locationSize;te++)R(xe.location+te,Ee/xe.locationSize,Ge,de,T*He,(se+Ee/xe.locationSize*te)*He,Ve)}else{if(k.isInstancedBufferAttribute){for(let N=0;N<xe.locationSize;N++)D(xe.location+N,k.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let N=0;N<xe.locationSize;N++)E(xe.location+N);t.bindBuffer(t.ARRAY_BUFFER,De);for(let N=0;N<xe.locationSize;N++)R(xe.location+N,Ee/xe.locationSize,Ge,de,Ee*He,Ee/xe.locationSize*N*He,Ve)}}else if(ie!==void 0){const de=ie[re];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(xe.location,de);break;case 3:t.vertexAttrib3fv(xe.location,de);break;case 4:t.vertexAttrib4fv(xe.location,de);break;default:t.vertexAttrib1fv(xe.location,de)}}}}P()}function A(){ae();for(const I in a){const G=a[I];for(const B in G){const $=G[B];for(const Y in $)v($[Y].object),delete $[Y];delete G[B]}delete a[I]}}function L(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const B in G){const $=G[B];for(const Y in $)v($[Y].object),delete $[Y];delete G[B]}delete a[I.id]}function q(I){for(const G in a){const B=a[G];if(B[I.id]===void 0)continue;const $=B[I.id];for(const Y in $)v($[Y].object),delete $[Y];delete B[I.id]}}function ae(){V(),c=!0,u!==l&&(u=l,d(u.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ae,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:q,initAttributes:x,enableAttribute:E,disableUnusedAttributes:P}}function KM(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){t.drawArrays(s,c,f),n.update(f,s,1)}function l(c,f,h){if(h===0)return;let d,v;if(r)d=t,v="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[v](s,c,f,h),n.update(f,s,h)}function u(c,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<h;v++)this.render(c[v],f[v]);else{d.multiDrawArraysWEBGL(s,c,0,f,0,h);let v=0;for(let _=0;_<h;_++)v+=f[_];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function ZM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,E=o||e.has("OES_texture_float"),D=x&&E,P=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:D,maxSamples:P}}function JM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new rr,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,d){const v=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?c(null):u();else{const M=s?0:i,x=M*4;let E=p.clippingState||null;l.value=E,E=c(v,h,x,d);for(let D=0;D!==x;++D)E[D]=n[D];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,d,v){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const p=d+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,E=d;x!==_;++x,E+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function QM(t){let e=new WeakMap;function n(o,a){return a===oc?o.mapping=ts:a===ac&&(o.mapping=ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===oc||a===ac)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new fx(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Fp extends Ip{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const kr=4,od=[.125,.215,.35,.446,.526,.582],lr=20,Il=new Fp,ad=new et;let Ul=null,Nl=0,Ol=0;const sr=(1+Math.sqrt(5))/2,Br=1/sr,ld=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,sr,Br),new ee(0,sr,-Br),new ee(Br,0,sr),new ee(-Br,0,sr),new ee(sr,Br,0),new ee(-sr,Br,0)];class cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Nl,Ol),e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Zs,format:Bn,colorSpace:ri,depthBuffer:!1},r=ud(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eS(s)),this._blurMaterial=tS(s,e,n)}return r}_compileMaterial(e){const n=new Vt(this._lodPlanes[0],e);this._renderer.compile(n,Il)}_sceneToCubeUV(e,n,i,r){const a=new An(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(ad),c.toneMapping=zi,c.autoClear=!1;const d=new Cp({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new Vt(new co,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(ad),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const x=this._cubeSize;Vo(r,M*x,p>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ts||e.mapping===ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Il)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ld[(r-1)%ld.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Vt(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*lr-1),_=s/v,g=isFinite(s)?1+Math.floor(c*_):lr;g>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${lr}`);const p=[];let M=0;for(let R=0;R<lr;++R){const Q=R/_,A=Math.exp(-Q*Q/2);p.push(A),R===0?M+=A:R<g&&(M+=2*A)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const E=this._sizeLods[r],D=3*E*(r>x-kr?r-x+kr:0),P=4*(this._cubeSize-E);Vo(n,D,P,3*E,2*E),l.setRenderTarget(n),l.render(f,Il)}}function eS(t){const e=[],n=[],i=[];let r=t;const s=t-kr+1+od.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-kr?l=od[o-t+kr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,v=6,_=3,g=2,p=1,M=new Float32Array(_*v*d),x=new Float32Array(g*v*d),E=new Float32Array(p*v*d);for(let P=0;P<d;P++){const R=P%3*2/3-1,Q=P>2?0:-1,A=[R,Q,0,R+2/3,Q,0,R+2/3,Q+1,0,R,Q,0,R+2/3,Q+1,0,R,Q+1,0];M.set(A,_*v*P),x.set(h,g*v*P);const L=[P,P,P,P,P,P];E.set(L,p*v*P)}const D=new Ln;D.setAttribute("position",new kt(M,_)),D.setAttribute("uv",new kt(x,g)),D.setAttribute("faceIndex",new kt(E,p)),e.push(D),r>kr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ud(t,e,n){const i=new Wi(t,e,n);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function tS(t,e,n){const i=new Float32Array(lr),r=new ee(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function fd(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function dd(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function nS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===oc||l===ac,c=l===ts||l===ns;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new cd(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new cd(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function iS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rS(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const d=f.morphAttributes;for(const v in d){const _=d[v];for(let g=0,p=_.length;g<p;g++)e.update(_[g],t.ARRAY_BUFFER)}}function u(f){const h=[],d=f.index,v=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,E=M.length;x<E;x+=3){const D=M[x+0],P=M[x+1],R=M[x+2];h.push(D,P,P,R,R,D)}}else if(v!==void 0){const M=v.array;_=v.version;for(let x=0,E=M.length/3-1;x<E;x+=3){const D=x+0,P=x+1,R=x+2;h.push(D,P,P,R,R,D)}}else return;const g=new(Sp(h)?Pp:Lp)(h,1);g.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function c(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function sS(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,v){t.drawElements(s,v,a,d*l),n.update(v,s,1)}function f(d,v,_){if(_===0)return;let g,p;if(r)g=t,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,v,a,d*l,_),n.update(v,s,_)}function h(d,v,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(d[p]/l,v[p]);else{g.multiDrawElementsWEBGL(s,v,0,a,d,0,_);let p=0;for(let M=0;M<_;M++)p+=v[M];n.update(p,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function oS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function aS(t,e){return t[0]-e[0]}function lS(t,e){return Math.abs(e[1])-Math.abs(t[1])}function cS(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Gt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=d!==void 0?d.length:0;let _=s.get(c);if(_===void 0||_.count!==v){let I=function(){ae.dispose(),s.delete(c),c.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();const M=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,D=c.morphAttributes.position||[],P=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let Q=0;M===!0&&(Q=1),x===!0&&(Q=2),E===!0&&(Q=3);let A=c.attributes.position.count*Q,L=1;A>e.maxTextureSize&&(L=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const q=new Float32Array(A*L*4*v),ae=new Tp(q,A,L,v);ae.type=Ii,ae.needsUpdate=!0;const V=Q*4;for(let G=0;G<v;G++){const B=D[G],$=P[G],Y=R[G],ne=A*L*4*G;for(let ie=0;ie<B.count;ie++){const re=ie*V;M===!0&&(o.fromBufferAttribute(B,ie),q[ne+re+0]=o.x,q[ne+re+1]=o.y,q[ne+re+2]=o.z,q[ne+re+3]=0),x===!0&&(o.fromBufferAttribute($,ie),q[ne+re+4]=o.x,q[ne+re+5]=o.y,q[ne+re+6]=o.z,q[ne+re+7]=0),E===!0&&(o.fromBufferAttribute(Y,ie),q[ne+re+8]=o.x,q[ne+re+9]=o.y,q[ne+re+10]=o.z,q[ne+re+11]=Y.itemSize===4?o.w:1)}}_={count:v,texture:ae,size:new st(A,L)},s.set(c,_),c.addEventListener("dispose",I)}let g=0;for(let M=0;M<h.length;M++)g+=h[M];const p=c.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",p),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",_.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",_.size)}else{const d=h===void 0?0:h.length;let v=i[c.id];if(v===void 0||v.length!==d){v=[];for(let x=0;x<d;x++)v[x]=[x,0];i[c.id]=v}for(let x=0;x<d;x++){const E=v[x];E[0]=x,E[1]=h[x]}v.sort(lS);for(let x=0;x<8;x++)x<d&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(aS);const _=c.morphAttributes.position,g=c.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const E=a[x],D=E[0],P=E[1];D!==Number.MAX_SAFE_INTEGER&&P?(_&&c.getAttribute("morphTarget"+x)!==_[D]&&c.setAttribute("morphTarget"+x,_[D]),g&&c.getAttribute("morphNormal"+x)!==g[D]&&c.setAttribute("morphNormal"+x,g[D]),r[x]=P,p+=P):(_&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),g&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const M=c.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",M),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function uS(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Bp extends pn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:_r,c!==_r&&c!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===_r&&(i=Di),i===void 0&&c===is&&(i=gr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const zp=new pn,Hp=new Bp(1,1);Hp.compareFunction=Mp;const Gp=new Tp,Vp=new Yv,kp=new Up,hd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function cs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hd[r];if(s===void 0&&(s=new Float32Array(r),hd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Oa(t,e){let n=pd[e];n===void 0&&(n=new Int32Array(e),pd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function fS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function hS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function pS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function mS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Pt(n,i))return;_d.set(i),t.uniformMatrix2fv(this.addr,!1,_d),Dt(n,i)}}function gS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Pt(n,i))return;gd.set(i),t.uniformMatrix3fv(this.addr,!1,gd),Dt(n,i)}}function _S(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Pt(n,i))return;md.set(i),t.uniformMatrix4fv(this.addr,!1,md),Dt(n,i)}}function vS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function yS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function MS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function SS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ES(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function bS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function TS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function AS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Hp:zp;n.setTexture2D(e||s,r)}function wS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vp,r)}function RS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kp,r)}function CS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Gp,r)}function LS(t){switch(t){case 5126:return fS;case 35664:return dS;case 35665:return hS;case 35666:return pS;case 35674:return mS;case 35675:return gS;case 35676:return _S;case 5124:case 35670:return vS;case 35667:case 35671:return xS;case 35668:case 35672:return yS;case 35669:case 35673:return MS;case 5125:return SS;case 36294:return ES;case 36295:return bS;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return CS}}function PS(t,e){t.uniform1fv(this.addr,e)}function DS(t,e){const n=cs(e,this.size,2);t.uniform2fv(this.addr,n)}function IS(t,e){const n=cs(e,this.size,3);t.uniform3fv(this.addr,n)}function US(t,e){const n=cs(e,this.size,4);t.uniform4fv(this.addr,n)}function NS(t,e){const n=cs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function OS(t,e){const n=cs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function FS(t,e){const n=cs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function BS(t,e){t.uniform1iv(this.addr,e)}function zS(t,e){t.uniform2iv(this.addr,e)}function HS(t,e){t.uniform3iv(this.addr,e)}function GS(t,e){t.uniform4iv(this.addr,e)}function VS(t,e){t.uniform1uiv(this.addr,e)}function kS(t,e){t.uniform2uiv(this.addr,e)}function WS(t,e){t.uniform3uiv(this.addr,e)}function XS(t,e){t.uniform4uiv(this.addr,e)}function $S(t,e,n){const i=this.cache,r=e.length,s=Oa(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||zp,s[o])}function qS(t,e,n){const i=this.cache,r=e.length,s=Oa(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Vp,s[o])}function YS(t,e,n){const i=this.cache,r=e.length,s=Oa(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||kp,s[o])}function jS(t,e,n){const i=this.cache,r=e.length,s=Oa(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Gp,s[o])}function KS(t){switch(t){case 5126:return PS;case 35664:return DS;case 35665:return IS;case 35666:return US;case 35674:return NS;case 35675:return OS;case 35676:return FS;case 5124:case 35670:return BS;case 35667:case 35671:return zS;case 35668:case 35672:return HS;case 35669:case 35673:return GS;case 5125:return VS;case 36294:return kS;case 36295:return WS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return jS}}class ZS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LS(n.type)}}class JS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KS(n.type)}}class QS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function vd(t,e){t.seq.push(e),t.map[e.id]=e}function eE(t,e,n){const i=t.name,r=i.length;for(Fl.lastIndex=0;;){const s=Fl.exec(i),o=Fl.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){vd(n,u===void 0?new ZS(a,t,e):new JS(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new QS(a),vd(n,f)),n=f}}}class ea{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);eE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function xd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tE=37297;let nE=0;function iE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function rE(t){const e=dt.getPrimaries(dt.workingColorSpace),n=dt.getPrimaries(t);let i;switch(e===n?i="":e===_a&&n===ga?i="LinearDisplayP3ToLinearSRGB":e===ga&&n===_a&&(i="LinearSRGBToLinearDisplayP3"),t){case ri:case Na:return[i,"LinearTransferOETF"];case Ht:case Gc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function yd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+iE(t.getShaderSource(e),o)}else return r}function sE(t,e){const n=rE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function oE(t,e){let n;switch(e){case gv:n="Linear";break;case _v:n="Reinhard";break;case vv:n="OptimizedCineon";break;case xv:n="ACESFilmic";break;case Mv:n="AgX";break;case yv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function aE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wr).join(`
`)}function lE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Wr).join(`
`)}function cE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Wr(t){return t!==""}function Md(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fE=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(t){return t.replace(fE,hE)}const dE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hE(t,e){let n=Qe[e];if(n===void 0){const i=dE.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hc(n)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(t){return t.replace(pE,mE)}function mE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bd(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===up?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===W0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function _E(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case Ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ns:e="ENVMAP_MODE_REFRACTION";break}return e}function xE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fp:e="ENVMAP_BLENDING_MULTIPLY";break;case pv:e="ENVMAP_BLENDING_MIX";break;case mv:e="ENVMAP_BLENDING_ADD";break}return e}function yE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function ME(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=gE(n),u=_E(n),c=vE(n),f=xE(n),h=yE(n),d=n.isWebGL2?"":aE(n),v=lE(n),_=cE(s),g=r.createProgram();let p,M,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Wr).join(`
`),p.length>0&&(p+=`
`),M=[d,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Wr).join(`
`),M.length>0&&(M+=`
`)):(p=[bd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),M=[d,bd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?Qe.tonemapping_pars_fragment:"",n.toneMapping!==zi?oE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,sE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wr).join(`
`)),o=hc(o),o=Md(o,n),o=Sd(o,n),a=hc(a),a=Md(a,n),a=Sd(a,n),o=Ed(o),a=Ed(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const E=x+p+o,D=x+M+a,P=xd(r,r.VERTEX_SHADER,E),R=xd(r,r.FRAGMENT_SHADER,D);r.attachShader(g,P),r.attachShader(g,R),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function Q(ae){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(g).trim(),I=r.getShaderInfoLog(P).trim(),G=r.getShaderInfoLog(R).trim();let B=!0,$=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,P,R);else{const Y=yd(r,P,"vertex"),ne=yd(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+Y+`
`+ne)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(I===""||G==="")&&($=!1);$&&(ae.diagnostics={runnable:B,programLog:V,vertexShader:{log:I,prefix:p},fragmentShader:{log:G,prefix:M}})}r.deleteShader(P),r.deleteShader(R),A=new ea(r,g),L=uE(r,g)}let A;this.getUniforms=function(){return A===void 0&&Q(this),A};let L;this.getAttributes=function(){return L===void 0&&Q(this),L};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(g,tE)),q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=R,this}let SE=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bE(e),n.set(e,i)),i}}class bE{constructor(e){this.id=SE++,this.code=e,this.usedTimes=0}}function TE(t,e,n,i,r,s,o){const a=new wp,l=new EE,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return A===0?"uv":`uv${A}`}function g(A,L,q,ae,V){const I=ae.fog,G=V.geometry,B=A.isMeshStandardMaterial?ae.environment:null,$=(A.isMeshStandardMaterial?n:e).get(A.envMap||B),Y=$&&$.mapping===Ua?$.image.height:null,ne=v[A.type];A.precision!==null&&(d=r.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=ie!==void 0?ie.length:0;let xe=0;G.morphAttributes.position!==void 0&&(xe=1),G.morphAttributes.normal!==void 0&&(xe=2),G.morphAttributes.color!==void 0&&(xe=3);let k,de,Ee,Ce;if(ne){const ke=Kn[ne];k=ke.vertexShader,de=ke.fragmentShader}else k=A.vertexShader,de=A.fragmentShader,l.update(A),Ee=l.getVertexShaderID(A),Ce=l.getFragmentShaderID(A);const De=t.getRenderTarget(),Ge=V.isInstancedMesh===!0,He=V.isBatchedMesh===!0,Ve=!!A.map,N=!!A.matcap,T=!!$,se=!!A.aoMap,te=!!A.lightMap,le=!!A.bumpMap,J=!!A.normalMap,ye=!!A.displacementMap,F=!!A.emissiveMap,y=!!A.metalnessMap,m=!!A.roughnessMap,S=A.anisotropy>0,w=A.clearcoat>0,b=A.iridescence>0,O=A.sheen>0,X=A.transmission>0,j=S&&!!A.anisotropyMap,K=w&&!!A.clearcoatMap,he=w&&!!A.clearcoatNormalMap,_e=w&&!!A.clearcoatRoughnessMap,Z=b&&!!A.iridescenceMap,Me=b&&!!A.iridescenceThicknessMap,be=O&&!!A.sheenColorMap,Re=O&&!!A.sheenRoughnessMap,Te=!!A.specularMap,Se=!!A.specularColorMap,Le=!!A.specularIntensityMap,Ie=X&&!!A.transmissionMap,z=X&&!!A.thicknessMap,W=!!A.gradientMap,H=!!A.alphaMap,C=A.alphaTest>0,ue=!!A.alphaHash,fe=!!A.extensions,oe=!!G.attributes.uv1,pe=!!G.attributes.uv2,we=!!G.attributes.uv3;let Ae=zi;return A.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Ae=t.toneMapping),{isWebGL2:c,shaderID:ne,shaderType:A.type,shaderName:A.name,vertexShader:k,fragmentShader:de,defines:A.defines,customVertexShaderID:Ee,customFragmentShaderID:Ce,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:He,instancing:Ge,instancingColor:Ge&&V.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:De===null?t.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:ri,map:Ve,matcap:N,envMap:T,envMapMode:T&&$.mapping,envMapCubeUVHeight:Y,aoMap:se,lightMap:te,bumpMap:le,normalMap:J,displacementMap:h&&ye,emissiveMap:F,normalMapObjectSpace:J&&A.normalMapType===Uv,normalMapTangentSpace:J&&A.normalMapType===Iv,metalnessMap:y,roughnessMap:m,anisotropy:S,anisotropyMap:j,clearcoat:w,clearcoatMap:K,clearcoatNormalMap:he,clearcoatRoughnessMap:_e,iridescence:b,iridescenceMap:Z,iridescenceThicknessMap:Me,sheen:O,sheenColorMap:be,sheenRoughnessMap:Re,specularMap:Te,specularColorMap:Se,specularIntensityMap:Le,transmission:X,transmissionMap:Ie,thicknessMap:z,gradientMap:W,opaque:A.transparent===!1&&A.blending===jr,alphaMap:H,alphaTest:C,alphaHash:ue,combine:A.combine,mapUv:Ve&&_(A.map.channel),aoMapUv:se&&_(A.aoMap.channel),lightMapUv:te&&_(A.lightMap.channel),bumpMapUv:le&&_(A.bumpMap.channel),normalMapUv:J&&_(A.normalMap.channel),displacementMapUv:ye&&_(A.displacementMap.channel),emissiveMapUv:F&&_(A.emissiveMap.channel),metalnessMapUv:y&&_(A.metalnessMap.channel),roughnessMapUv:m&&_(A.roughnessMap.channel),anisotropyMapUv:j&&_(A.anisotropyMap.channel),clearcoatMapUv:K&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(A.sheenRoughnessMap.channel),specularMapUv:Te&&_(A.specularMap.channel),specularColorMapUv:Se&&_(A.specularColorMap.channel),specularIntensityMapUv:Le&&_(A.specularIntensityMap.channel),transmissionMapUv:Ie&&_(A.transmissionMap.channel),thicknessMapUv:z&&_(A.thicknessMap.channel),alphaMapUv:H&&_(A.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(J||S),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:pe,vertexUv3s:we,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Ve||H),fog:!!I,useFog:A.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ae,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ve&&A.map.isVideoTexture===!0&&dt.getTransfer(A.map.colorSpace)===_t,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===_i,flipSided:A.side===Qt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:fe&&A.extensions.derivatives===!0,extensionFragDepth:fe&&A.extensions.fragDepth===!0,extensionDrawBuffers:fe&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&A.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function p(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const q in A.defines)L.push(q),L.push(A.defines[q]);return A.isRawShaderMaterial===!1&&(M(L,A),x(L,A),L.push(t.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function M(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function x(A,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUv1s&&a.enable(13),L.vertexUv2s&&a.enable(14),L.vertexUv3s&&a.enable(15),L.vertexTangents&&a.enable(16),L.anisotropy&&a.enable(17),L.alphaHash&&a.enable(18),L.batching&&a.enable(19),A.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.useLegacyLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),A.push(a.mask)}function E(A){const L=v[A.type];let q;if(L){const ae=Kn[L];q=ax.clone(ae.uniforms)}else q=A.uniforms;return q}function D(A,L){let q;for(let ae=0,V=u.length;ae<V;ae++){const I=u[ae];if(I.cacheKey===L){q=I,++q.usedTimes;break}}return q===void 0&&(q=new ME(t,L,A,s),u.push(q)),q}function P(A){if(--A.usedTimes===0){const L=u.indexOf(A);u[L]=u[u.length-1],u.pop(),A.destroy()}}function R(A){l.remove(A)}function Q(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:D,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:Q}}function AE(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function wE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Td(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ad(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,d,v,_,g){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:v,renderOrder:f.renderOrder,z:_,group:g},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=_,p.group=g),e++,p}function a(f,h,d,v,_,g){const p=o(f,h,d,v,_,g);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):n.push(p)}function l(f,h,d,v,_,g){const p=o(f,h,d,v,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):n.unshift(p)}function u(f,h){n.length>1&&n.sort(f||wE),i.length>1&&i.sort(h||Td),r.length>1&&r.sort(h||Td)}function c(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function RE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ad,t.set(i,[o])):r>=s.length?(o=new Ad,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function CE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new et};break;case"SpotLight":n={position:new ee,direction:new ee,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return t[e.id]=n,n}}}function LE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PE=0;function DE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function IE(t,e){const n=new CE,i=LE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new ee);const s=new ee,o=new bt,a=new bt;function l(c,f){let h=0,d=0,v=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let _=0,g=0,p=0,M=0,x=0,E=0,D=0,P=0,R=0,Q=0,A=0;c.sort(DE);const L=f===!0?Math.PI:1;for(let ae=0,V=c.length;ae<V;ae++){const I=c[ae],G=I.color,B=I.intensity,$=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=G.r*B*L,d+=G.g*B*L,v+=G.b*B*L;else if(I.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(I.sh.coefficients[ne],B);A++}else if(I.isDirectionalLight){const ne=n.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*L),I.castShadow){const ie=I.shadow,re=i.get(I);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,r.directionalShadow[_]=re,r.directionalShadowMap[_]=Y,r.directionalShadowMatrix[_]=I.shadow.matrix,E++}r.directional[_]=ne,_++}else if(I.isSpotLight){const ne=n.get(I);ne.position.setFromMatrixPosition(I.matrixWorld),ne.color.copy(G).multiplyScalar(B*L),ne.distance=$,ne.coneCos=Math.cos(I.angle),ne.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ne.decay=I.decay,r.spot[p]=ne;const ie=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,ie.updateMatrices(I),I.castShadow&&Q++),r.spotLightMatrix[p]=ie.matrix,I.castShadow){const re=i.get(I);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,r.spotShadow[p]=re,r.spotShadowMap[p]=Y,P++}p++}else if(I.isRectAreaLight){const ne=n.get(I);ne.color.copy(G).multiplyScalar(B),ne.halfWidth.set(I.width*.5,0,0),ne.halfHeight.set(0,I.height*.5,0),r.rectArea[M]=ne,M++}else if(I.isPointLight){const ne=n.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*L),ne.distance=I.distance,ne.decay=I.decay,I.castShadow){const ie=I.shadow,re=i.get(I);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,re.shadowCameraNear=ie.camera.near,re.shadowCameraFar=ie.camera.far,r.pointShadow[g]=re,r.pointShadowMap[g]=Y,r.pointShadowMatrix[g]=I.shadow.matrix,D++}r.point[g]=ne,g++}else if(I.isHemisphereLight){const ne=n.get(I);ne.skyColor.copy(I.color).multiplyScalar(B*L),ne.groundColor.copy(I.groundColor).multiplyScalar(B*L),r.hemi[x]=ne,x++}}M>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=v;const q=r.hash;(q.directionalLength!==_||q.pointLength!==g||q.spotLength!==p||q.rectAreaLength!==M||q.hemiLength!==x||q.numDirectionalShadows!==E||q.numPointShadows!==D||q.numSpotShadows!==P||q.numSpotMaps!==R||q.numLightProbes!==A)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=M,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+R-Q,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=Q,r.numLightProbes=A,q.directionalLength=_,q.pointLength=g,q.spotLength=p,q.rectAreaLength=M,q.hemiLength=x,q.numDirectionalShadows=E,q.numPointShadows=D,q.numSpotShadows=P,q.numSpotMaps=R,q.numLightProbes=A,r.version=PE++)}function u(c,f){let h=0,d=0,v=0,_=0,g=0;const p=f.matrixWorldInverse;for(let M=0,x=c.length;M<x;M++){const E=c[M];if(E.isDirectionalLight){const D=r.directional[h];D.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(p),h++}else if(E.isSpotLight){const D=r.spot[v];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(p),v++}else if(E.isRectAreaLight){const D=r.rectArea[_];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),D.halfWidth.set(E.width*.5,0,0),D.halfHeight.set(0,E.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const D=r.point[d];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const D=r.hemi[g];D.direction.setFromMatrixPosition(E.matrixWorld),D.direction.transformDirection(p),g++}}}return{setup:l,setupView:u,state:r}}function wd(t,e){const n=new IE(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function UE(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new wd(t,e),n.set(s,[l])):o>=a.length?(l=new wd(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class NE extends lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OE extends lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BE=`uniform sampler2D shadow_pass;
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
}`;function zE(t,e,n){let i=new Np;const r=new st,s=new st,o=new Gt,a=new NE({depthPacking:Dv}),l=new OE,u={},c=n.maxTextureSize,f={[ki]:Qt,[Qt]:ki,[_i]:_i},h=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:FE,fragmentShader:BE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const v=new Ln;v.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let p=this.type;this.render=function(P,R,Q){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const A=t.getRenderTarget(),L=t.getActiveCubeFace(),q=t.getActiveMipmapLevel(),ae=t.state;ae.setBlending(Bi),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const V=p!==di&&this.type===di,I=p===di&&this.type!==di;for(let G=0,B=P.length;G<B;G++){const $=P[G],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const ne=Y.getFrameExtents();if(r.multiply(ne),s.copy(Y.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ne.x),r.x=s.x*ne.x,Y.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ne.y),r.y=s.y*ne.y,Y.mapSize.y=s.y)),Y.map===null||V===!0||I===!0){const re=this.type!==di?{minFilter:an,magFilter:an}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Wi(r.x,r.y,re),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const ie=Y.getViewportCount();for(let re=0;re<ie;re++){const xe=Y.getViewport(re);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),ae.viewport(o),Y.updateMatrices($,re),i=Y.getFrustum(),E(R,Q,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===di&&M(Y,Q),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(A,L,q)};function M(P,R){const Q=e.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Wi(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(R,null,Q,h,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(R,null,Q,d,_,null)}function x(P,R,Q,A){let L=null;const q=Q.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(q!==void 0)L=q;else if(L=Q.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const ae=L.uuid,V=R.uuid;let I=u[ae];I===void 0&&(I={},u[ae]=I);let G=I[V];G===void 0&&(G=L.clone(),I[V]=G,R.addEventListener("dispose",D)),L=G}if(L.visible=R.visible,L.wireframe=R.wireframe,A===di?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:f[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,Q.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ae=t.properties.get(L);ae.light=Q}return L}function E(P,R,Q,A,L){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&L===di)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld);const V=e.update(P),I=P.material;if(Array.isArray(I)){const G=V.groups;for(let B=0,$=G.length;B<$;B++){const Y=G[B],ne=I[Y.materialIndex];if(ne&&ne.visible){const ie=x(P,ne,A,L);P.onBeforeShadow(t,P,R,Q,V,ie,Y),t.renderBufferDirect(Q,null,V,ie,P,Y),P.onAfterShadow(t,P,R,Q,V,ie,Y)}}}else if(I.visible){const G=x(P,I,A,L);P.onBeforeShadow(t,P,R,Q,V,G,null),t.renderBufferDirect(Q,null,V,G,P,null),P.onAfterShadow(t,P,R,Q,V,G,null)}}const ae=P.children;for(let V=0,I=ae.length;V<I;V++)E(ae[V],R,Q,A,L)}function D(P){P.target.removeEventListener("dispose",D);for(const Q in u){const A=u[Q],L=P.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function HE(t,e,n){const i=n.isWebGL2;function r(){let C=!1;const ue=new Gt;let fe=null;const oe=new Gt(0,0,0,0);return{setMask:function(pe){fe!==pe&&!C&&(t.colorMask(pe,pe,pe,pe),fe=pe)},setLocked:function(pe){C=pe},setClear:function(pe,we,Ae,Ne,ke){ke===!0&&(pe*=Ne,we*=Ne,Ae*=Ne),ue.set(pe,we,Ae,Ne),oe.equals(ue)===!1&&(t.clearColor(pe,we,Ae,Ne),oe.copy(ue))},reset:function(){C=!1,fe=null,oe.set(-1,0,0,0)}}}function s(){let C=!1,ue=null,fe=null,oe=null;return{setTest:function(pe){pe?He(t.DEPTH_TEST):Ve(t.DEPTH_TEST)},setMask:function(pe){ue!==pe&&!C&&(t.depthMask(pe),ue=pe)},setFunc:function(pe){if(fe!==pe){switch(pe){case av:t.depthFunc(t.NEVER);break;case lv:t.depthFunc(t.ALWAYS);break;case cv:t.depthFunc(t.LESS);break;case pa:t.depthFunc(t.LEQUAL);break;case uv:t.depthFunc(t.EQUAL);break;case fv:t.depthFunc(t.GEQUAL);break;case dv:t.depthFunc(t.GREATER);break;case hv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=pe}},setLocked:function(pe){C=pe},setClear:function(pe){oe!==pe&&(t.clearDepth(pe),oe=pe)},reset:function(){C=!1,ue=null,fe=null,oe=null}}}function o(){let C=!1,ue=null,fe=null,oe=null,pe=null,we=null,Ae=null,Ne=null,ke=null;return{setTest:function(ze){C||(ze?He(t.STENCIL_TEST):Ve(t.STENCIL_TEST))},setMask:function(ze){ue!==ze&&!C&&(t.stencilMask(ze),ue=ze)},setFunc:function(ze,Xe,ot){(fe!==ze||oe!==Xe||pe!==ot)&&(t.stencilFunc(ze,Xe,ot),fe=ze,oe=Xe,pe=ot)},setOp:function(ze,Xe,ot){(we!==ze||Ae!==Xe||Ne!==ot)&&(t.stencilOp(ze,Xe,ot),we=ze,Ae=Xe,Ne=ot)},setLocked:function(ze){C=ze},setClear:function(ze){ke!==ze&&(t.clearStencil(ze),ke=ze)},reset:function(){C=!1,ue=null,fe=null,oe=null,pe=null,we=null,Ae=null,Ne=null,ke=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},d={},v=new WeakMap,_=[],g=null,p=!1,M=null,x=null,E=null,D=null,P=null,R=null,Q=null,A=new et(0,0,0),L=0,q=!1,ae=null,V=null,I=null,G=null,B=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ne=0;const ie=t.getParameter(t.VERSION);ie.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Y=ne>=1):ie.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Y=ne>=2);let re=null,xe={};const k=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),Ee=new Gt().fromArray(k),Ce=new Gt().fromArray(de);function De(C,ue,fe,oe){const pe=new Uint8Array(4),we=t.createTexture();t.bindTexture(C,we),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<fe;Ae++)i&&(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ue+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return we}const Ge={};Ge[t.TEXTURE_2D]=De(t.TEXTURE_2D,t.TEXTURE_2D,1),Ge[t.TEXTURE_CUBE_MAP]=De(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ge[t.TEXTURE_2D_ARRAY]=De(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ge[t.TEXTURE_3D]=De(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),He(t.DEPTH_TEST),l.setFunc(pa),F(!1),y(cf),He(t.CULL_FACE),J(Bi);function He(C){h[C]!==!0&&(t.enable(C),h[C]=!0)}function Ve(C){h[C]!==!1&&(t.disable(C),h[C]=!1)}function N(C,ue){return d[C]!==ue?(t.bindFramebuffer(C,ue),d[C]=ue,i&&(C===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),C===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function T(C,ue){let fe=_,oe=!1;if(C)if(fe=v.get(ue),fe===void 0&&(fe=[],v.set(ue,fe)),C.isWebGLMultipleRenderTargets){const pe=C.texture;if(fe.length!==pe.length||fe[0]!==t.COLOR_ATTACHMENT0){for(let we=0,Ae=pe.length;we<Ae;we++)fe[we]=t.COLOR_ATTACHMENT0+we;fe.length=pe.length,oe=!0}}else fe[0]!==t.COLOR_ATTACHMENT0&&(fe[0]=t.COLOR_ATTACHMENT0,oe=!0);else fe[0]!==t.BACK&&(fe[0]=t.BACK,oe=!0);oe&&(n.isWebGL2?t.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function se(C){return g!==C?(t.useProgram(C),g=C,!0):!1}const te={[ar]:t.FUNC_ADD,[$0]:t.FUNC_SUBTRACT,[q0]:t.FUNC_REVERSE_SUBTRACT};if(i)te[df]=t.MIN,te[hf]=t.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(te[df]=C.MIN_EXT,te[hf]=C.MAX_EXT)}const le={[Y0]:t.ZERO,[j0]:t.ONE,[K0]:t.SRC_COLOR,[rc]:t.SRC_ALPHA,[nv]:t.SRC_ALPHA_SATURATE,[ev]:t.DST_COLOR,[J0]:t.DST_ALPHA,[Z0]:t.ONE_MINUS_SRC_COLOR,[sc]:t.ONE_MINUS_SRC_ALPHA,[tv]:t.ONE_MINUS_DST_COLOR,[Q0]:t.ONE_MINUS_DST_ALPHA,[iv]:t.CONSTANT_COLOR,[rv]:t.ONE_MINUS_CONSTANT_COLOR,[sv]:t.CONSTANT_ALPHA,[ov]:t.ONE_MINUS_CONSTANT_ALPHA};function J(C,ue,fe,oe,pe,we,Ae,Ne,ke,ze){if(C===Bi){p===!0&&(Ve(t.BLEND),p=!1);return}if(p===!1&&(He(t.BLEND),p=!0),C!==X0){if(C!==M||ze!==q){if((x!==ar||P!==ar)&&(t.blendEquation(t.FUNC_ADD),x=ar,P=ar),ze)switch(C){case jr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ha:t.blendFunc(t.ONE,t.ONE);break;case uf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ff:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case jr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ha:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case uf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ff:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,D=null,R=null,Q=null,A.set(0,0,0),L=0,M=C,q=ze}return}pe=pe||ue,we=we||fe,Ae=Ae||oe,(ue!==x||pe!==P)&&(t.blendEquationSeparate(te[ue],te[pe]),x=ue,P=pe),(fe!==E||oe!==D||we!==R||Ae!==Q)&&(t.blendFuncSeparate(le[fe],le[oe],le[we],le[Ae]),E=fe,D=oe,R=we,Q=Ae),(Ne.equals(A)===!1||ke!==L)&&(t.blendColor(Ne.r,Ne.g,Ne.b,ke),A.copy(Ne),L=ke),M=C,q=!1}function ye(C,ue){C.side===_i?Ve(t.CULL_FACE):He(t.CULL_FACE);let fe=C.side===Qt;ue&&(fe=!fe),F(fe),C.blending===jr&&C.transparent===!1?J(Bi):J(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const oe=C.stencilWrite;u.setTest(oe),oe&&(u.setMask(C.stencilWriteMask),u.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),u.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),S(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?He(t.SAMPLE_ALPHA_TO_COVERAGE):Ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function F(C){ae!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),ae=C)}function y(C){C!==V0?(He(t.CULL_FACE),C!==V&&(C===cf?t.cullFace(t.BACK):C===k0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ve(t.CULL_FACE),V=C}function m(C){C!==I&&(Y&&t.lineWidth(C),I=C)}function S(C,ue,fe){C?(He(t.POLYGON_OFFSET_FILL),(G!==ue||B!==fe)&&(t.polygonOffset(ue,fe),G=ue,B=fe)):Ve(t.POLYGON_OFFSET_FILL)}function w(C){C?He(t.SCISSOR_TEST):Ve(t.SCISSOR_TEST)}function b(C){C===void 0&&(C=t.TEXTURE0+$-1),re!==C&&(t.activeTexture(C),re=C)}function O(C,ue,fe){fe===void 0&&(re===null?fe=t.TEXTURE0+$-1:fe=re);let oe=xe[fe];oe===void 0&&(oe={type:void 0,texture:void 0},xe[fe]=oe),(oe.type!==C||oe.texture!==ue)&&(re!==fe&&(t.activeTexture(fe),re=fe),t.bindTexture(C,ue||Ge[C]),oe.type=C,oe.texture=ue)}function X(){const C=xe[re];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(C){Ee.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),Ee.copy(C))}function Ie(C){Ce.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),Ce.copy(C))}function z(C,ue){let fe=f.get(ue);fe===void 0&&(fe=new WeakMap,f.set(ue,fe));let oe=fe.get(C);oe===void 0&&(oe=t.getUniformBlockIndex(ue,C.name),fe.set(C,oe))}function W(C,ue){const oe=f.get(ue).get(C);c.get(ue)!==oe&&(t.uniformBlockBinding(ue,oe,C.__bindingPointIndex),c.set(ue,oe))}function H(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},re=null,xe={},d={},v=new WeakMap,_=[],g=null,p=!1,M=null,x=null,E=null,D=null,P=null,R=null,Q=null,A=new et(0,0,0),L=0,q=!1,ae=null,V=null,I=null,G=null,B=null,Ee.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:He,disable:Ve,bindFramebuffer:N,drawBuffers:T,useProgram:se,setBlending:J,setMaterial:ye,setFlipSided:F,setCullFace:y,setLineWidth:m,setPolygonOffset:S,setScissorTest:w,activeTexture:b,bindTexture:O,unbindTexture:X,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:Te,texImage3D:Se,updateUBOMapping:z,uniformBlockBinding:W,texStorage2D:be,texStorage3D:Re,texSubImage2D:he,texSubImage3D:_e,compressedTexSubImage2D:Z,compressedTexSubImage3D:Me,scissor:Le,viewport:Ie,reset:H}}function GE(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,m){return d?new OffscreenCanvas(y,m):Js("canvas")}function _(y,m,S,w){let b=1;if((y.width>w||y.height>w)&&(b=w/Math.max(y.width,y.height)),b<1||m===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const O=m?dc:Math.floor,X=O(b*y.width),j=O(b*y.height);f===void 0&&(f=v(X,j));const K=S?v(X,j):f;return K.width=X,K.height=j,K.getContext("2d").drawImage(y,0,0,X,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+X+"x"+j+")."),K}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function g(y){return kf(y.width)&&kf(y.height)}function p(y){return a?!1:y.wrapS!==Fn||y.wrapT!==Fn||y.minFilter!==an&&y.minFilter!==Tn}function M(y,m){return y.generateMipmaps&&m&&y.minFilter!==an&&y.minFilter!==Tn}function x(y){t.generateMipmap(y)}function E(y,m,S,w,b=!1){if(a===!1)return m;if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let O=m;if(m===t.RED&&(S===t.FLOAT&&(O=t.R32F),S===t.HALF_FLOAT&&(O=t.R16F),S===t.UNSIGNED_BYTE&&(O=t.R8)),m===t.RED_INTEGER&&(S===t.UNSIGNED_BYTE&&(O=t.R8UI),S===t.UNSIGNED_SHORT&&(O=t.R16UI),S===t.UNSIGNED_INT&&(O=t.R32UI),S===t.BYTE&&(O=t.R8I),S===t.SHORT&&(O=t.R16I),S===t.INT&&(O=t.R32I)),m===t.RG&&(S===t.FLOAT&&(O=t.RG32F),S===t.HALF_FLOAT&&(O=t.RG16F),S===t.UNSIGNED_BYTE&&(O=t.RG8)),m===t.RGBA){const X=b?ma:dt.getTransfer(w);S===t.FLOAT&&(O=t.RGBA32F),S===t.HALF_FLOAT&&(O=t.RGBA16F),S===t.UNSIGNED_BYTE&&(O=X===_t?t.SRGB8_ALPHA8:t.RGBA8),S===t.UNSIGNED_SHORT_4_4_4_4&&(O=t.RGBA4),S===t.UNSIGNED_SHORT_5_5_5_1&&(O=t.RGB5_A1)}return(O===t.R16F||O===t.R32F||O===t.RG16F||O===t.RG32F||O===t.RGBA16F||O===t.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function D(y,m,S){return M(y,S)===!0||y.isFramebufferTexture&&y.minFilter!==an&&y.minFilter!==Tn?Math.log2(Math.max(m.width,m.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?m.mipmaps.length:1}function P(y){return y===an||y===pf||y===ll?t.NEAREST:t.LINEAR}function R(y){const m=y.target;m.removeEventListener("dispose",R),A(m),m.isVideoTexture&&c.delete(m)}function Q(y){const m=y.target;m.removeEventListener("dispose",Q),q(m)}function A(y){const m=i.get(y);if(m.__webglInit===void 0)return;const S=y.source,w=h.get(S);if(w){const b=w[m.__cacheKey];b.usedTimes--,b.usedTimes===0&&L(y),Object.keys(w).length===0&&h.delete(S)}i.remove(y)}function L(y){const m=i.get(y);t.deleteTexture(m.__webglTexture);const S=y.source,w=h.get(S);delete w[m.__cacheKey],o.memory.textures--}function q(y){const m=y.texture,S=i.get(y),w=i.get(m);if(w.__webglTexture!==void 0&&(t.deleteTexture(w.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let b=0;b<6;b++){if(Array.isArray(S.__webglFramebuffer[b]))for(let O=0;O<S.__webglFramebuffer[b].length;O++)t.deleteFramebuffer(S.__webglFramebuffer[b][O]);else t.deleteFramebuffer(S.__webglFramebuffer[b]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[b])}else{if(Array.isArray(S.__webglFramebuffer))for(let b=0;b<S.__webglFramebuffer.length;b++)t.deleteFramebuffer(S.__webglFramebuffer[b]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let b=0;b<S.__webglColorRenderbuffer.length;b++)S.__webglColorRenderbuffer[b]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[b]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let b=0,O=m.length;b<O;b++){const X=i.get(m[b]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(m[b])}i.remove(m),i.remove(y)}let ae=0;function V(){ae=0}function I(){const y=ae;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),ae+=1,y}function G(y){const m=[];return m.push(y.wrapS),m.push(y.wrapT),m.push(y.wrapR||0),m.push(y.magFilter),m.push(y.minFilter),m.push(y.anisotropy),m.push(y.internalFormat),m.push(y.format),m.push(y.type),m.push(y.generateMipmaps),m.push(y.premultiplyAlpha),m.push(y.flipY),m.push(y.unpackAlignment),m.push(y.colorSpace),m.join()}function B(y,m){const S=i.get(y);if(y.isVideoTexture&&ye(y),y.isRenderTargetTexture===!1&&y.version>0&&S.__version!==y.version){const w=y.image;if(w===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(w.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(S,y,m);return}}n.bindTexture(t.TEXTURE_2D,S.__webglTexture,t.TEXTURE0+m)}function $(y,m){const S=i.get(y);if(y.version>0&&S.__version!==y.version){Ee(S,y,m);return}n.bindTexture(t.TEXTURE_2D_ARRAY,S.__webglTexture,t.TEXTURE0+m)}function Y(y,m){const S=i.get(y);if(y.version>0&&S.__version!==y.version){Ee(S,y,m);return}n.bindTexture(t.TEXTURE_3D,S.__webglTexture,t.TEXTURE0+m)}function ne(y,m){const S=i.get(y);if(y.version>0&&S.__version!==y.version){Ce(S,y,m);return}n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+m)}const ie={[lc]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[cc]:t.MIRRORED_REPEAT},re={[an]:t.NEAREST,[pf]:t.NEAREST_MIPMAP_NEAREST,[ll]:t.NEAREST_MIPMAP_LINEAR,[Tn]:t.LINEAR,[Sv]:t.LINEAR_MIPMAP_NEAREST,[xr]:t.LINEAR_MIPMAP_LINEAR},xe={[Nv]:t.NEVER,[Gv]:t.ALWAYS,[Ov]:t.LESS,[Mp]:t.LEQUAL,[Fv]:t.EQUAL,[Hv]:t.GEQUAL,[Bv]:t.GREATER,[zv]:t.NOTEQUAL};function k(y,m,S){if(S?(t.texParameteri(y,t.TEXTURE_WRAP_S,ie[m.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,ie[m.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,ie[m.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,re[m.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,re[m.minFilter])):(t.texParameteri(y,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(y,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(m.wrapS!==Fn||m.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(y,t.TEXTURE_MAG_FILTER,P(m.magFilter)),t.texParameteri(y,t.TEXTURE_MIN_FILTER,P(m.minFilter)),m.minFilter!==an&&m.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),m.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,xe[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");if(m.magFilter===an||m.minFilter!==ll&&m.minFilter!==xr||m.type===Ii&&e.has("OES_texture_float_linear")===!1||a===!1&&m.type===Zs&&e.has("OES_texture_half_float_linear")===!1)return;(m.anisotropy>1||i.get(m).__currentAnisotropy)&&(t.texParameterf(y,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy)}}function de(y,m){let S=!1;y.__webglInit===void 0&&(y.__webglInit=!0,m.addEventListener("dispose",R));const w=m.source;let b=h.get(w);b===void 0&&(b={},h.set(w,b));const O=G(m);if(O!==y.__cacheKey){b[O]===void 0&&(b[O]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,S=!0),b[O].usedTimes++;const X=b[y.__cacheKey];X!==void 0&&(b[y.__cacheKey].usedTimes--,X.usedTimes===0&&L(m)),y.__cacheKey=O,y.__webglTexture=b[O].texture}return S}function Ee(y,m,S){let w=t.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(w=t.TEXTURE_2D_ARRAY),m.isData3DTexture&&(w=t.TEXTURE_3D);const b=de(y,m),O=m.source;n.bindTexture(w,y.__webglTexture,t.TEXTURE0+S);const X=i.get(O);if(O.version!==X.__version||b===!0){n.activeTexture(t.TEXTURE0+S);const j=dt.getPrimaries(dt.workingColorSpace),K=m.colorSpace===wn?null:dt.getPrimaries(m.colorSpace),he=m.colorSpace===wn||j===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const _e=p(m)&&g(m.image)===!1;let Z=_(m.image,_e,!1,r.maxTextureSize);Z=F(m,Z);const Me=g(Z)||a,be=s.convert(m.format,m.colorSpace);let Re=s.convert(m.type),Te=E(m.internalFormat,be,Re,m.colorSpace,m.isVideoTexture);k(w,m,Me);let Se;const Le=m.mipmaps,Ie=a&&m.isVideoTexture!==!0&&Te!==xp,z=X.__version===void 0||b===!0,W=D(m,Z,Me);if(m.isDepthTexture)Te=t.DEPTH_COMPONENT,a?m.type===Ii?Te=t.DEPTH_COMPONENT32F:m.type===Di?Te=t.DEPTH_COMPONENT24:m.type===gr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:m.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),m.format===_r&&Te===t.DEPTH_COMPONENT&&m.type!==Hc&&m.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),m.type=Di,Re=s.convert(m.type)),m.format===is&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,m.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),m.type=gr,Re=s.convert(m.type))),z&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,Te,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,Te,Z.width,Z.height,0,be,Re,null));else if(m.isDataTexture)if(Le.length>0&&Me){Ie&&z&&n.texStorage2D(t.TEXTURE_2D,W,Te,Le[0].width,Le[0].height);for(let H=0,C=Le.length;H<C;H++)Se=Le[H],Ie?n.texSubImage2D(t.TEXTURE_2D,H,0,0,Se.width,Se.height,be,Re,Se.data):n.texImage2D(t.TEXTURE_2D,H,Te,Se.width,Se.height,0,be,Re,Se.data);m.generateMipmaps=!1}else Ie?(z&&n.texStorage2D(t.TEXTURE_2D,W,Te,Z.width,Z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Z.width,Z.height,be,Re,Z.data)):n.texImage2D(t.TEXTURE_2D,0,Te,Z.width,Z.height,0,be,Re,Z.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ie&&z&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,Te,Le[0].width,Le[0].height,Z.depth);for(let H=0,C=Le.length;H<C;H++)Se=Le[H],m.format!==Bn?be!==null?Ie?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,Se.width,Se.height,Z.depth,be,Se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,Te,Se.width,Se.height,Z.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,Se.width,Se.height,Z.depth,be,Re,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,Te,Se.width,Se.height,Z.depth,0,be,Re,Se.data)}else{Ie&&z&&n.texStorage2D(t.TEXTURE_2D,W,Te,Le[0].width,Le[0].height);for(let H=0,C=Le.length;H<C;H++)Se=Le[H],m.format!==Bn?be!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,Se.width,Se.height,be,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,H,Te,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?n.texSubImage2D(t.TEXTURE_2D,H,0,0,Se.width,Se.height,be,Re,Se.data):n.texImage2D(t.TEXTURE_2D,H,Te,Se.width,Se.height,0,be,Re,Se.data)}else if(m.isDataArrayTexture)Ie?(z&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,Te,Z.width,Z.height,Z.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,be,Re,Z.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,Z.width,Z.height,Z.depth,0,be,Re,Z.data);else if(m.isData3DTexture)Ie?(z&&n.texStorage3D(t.TEXTURE_3D,W,Te,Z.width,Z.height,Z.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,be,Re,Z.data)):n.texImage3D(t.TEXTURE_3D,0,Te,Z.width,Z.height,Z.depth,0,be,Re,Z.data);else if(m.isFramebufferTexture){if(z)if(Ie)n.texStorage2D(t.TEXTURE_2D,W,Te,Z.width,Z.height);else{let H=Z.width,C=Z.height;for(let ue=0;ue<W;ue++)n.texImage2D(t.TEXTURE_2D,ue,Te,H,C,0,be,Re,null),H>>=1,C>>=1}}else if(Le.length>0&&Me){Ie&&z&&n.texStorage2D(t.TEXTURE_2D,W,Te,Le[0].width,Le[0].height);for(let H=0,C=Le.length;H<C;H++)Se=Le[H],Ie?n.texSubImage2D(t.TEXTURE_2D,H,0,0,be,Re,Se):n.texImage2D(t.TEXTURE_2D,H,Te,be,Re,Se);m.generateMipmaps=!1}else Ie?(z&&n.texStorage2D(t.TEXTURE_2D,W,Te,Z.width,Z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,Re,Z)):n.texImage2D(t.TEXTURE_2D,0,Te,be,Re,Z);M(m,Me)&&x(w),X.__version=O.version,m.onUpdate&&m.onUpdate(m)}y.__version=m.version}function Ce(y,m,S){if(m.image.length!==6)return;const w=de(y,m),b=m.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+S);const O=i.get(b);if(b.version!==O.__version||w===!0){n.activeTexture(t.TEXTURE0+S);const X=dt.getPrimaries(dt.workingColorSpace),j=m.colorSpace===wn?null:dt.getPrimaries(m.colorSpace),K=m.colorSpace===wn||X===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const he=m.isCompressedTexture||m.image[0].isCompressedTexture,_e=m.image[0]&&m.image[0].isDataTexture,Z=[];for(let H=0;H<6;H++)!he&&!_e?Z[H]=_(m.image[H],!1,!0,r.maxCubemapSize):Z[H]=_e?m.image[H].image:m.image[H],Z[H]=F(m,Z[H]);const Me=Z[0],be=g(Me)||a,Re=s.convert(m.format,m.colorSpace),Te=s.convert(m.type),Se=E(m.internalFormat,Re,Te,m.colorSpace),Le=a&&m.isVideoTexture!==!0,Ie=O.__version===void 0||w===!0;let z=D(m,Me,be);k(t.TEXTURE_CUBE_MAP,m,be);let W;if(he){Le&&Ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,z,Se,Me.width,Me.height);for(let H=0;H<6;H++){W=Z[H].mipmaps;for(let C=0;C<W.length;C++){const ue=W[C];m.format!==Bn?Re!==null?Le?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,C,0,0,ue.width,ue.height,Re,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,C,Se,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,C,0,0,ue.width,ue.height,Re,Te,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,C,Se,ue.width,ue.height,0,Re,Te,ue.data)}}}else{W=m.mipmaps,Le&&Ie&&(W.length>0&&z++,n.texStorage2D(t.TEXTURE_CUBE_MAP,z,Se,Z[0].width,Z[0].height));for(let H=0;H<6;H++)if(_e){Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Z[H].width,Z[H].height,Re,Te,Z[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Se,Z[H].width,Z[H].height,0,Re,Te,Z[H].data);for(let C=0;C<W.length;C++){const fe=W[C].image[H].image;Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,C+1,0,0,fe.width,fe.height,Re,Te,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,C+1,Se,fe.width,fe.height,0,Re,Te,fe.data)}}else{Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Re,Te,Z[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Se,Re,Te,Z[H]);for(let C=0;C<W.length;C++){const ue=W[C];Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,C+1,0,0,Re,Te,ue.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,C+1,Se,Re,Te,ue.image[H])}}}M(m,be)&&x(t.TEXTURE_CUBE_MAP),O.__version=b.version,m.onUpdate&&m.onUpdate(m)}y.__version=m.version}function De(y,m,S,w,b,O){const X=s.convert(S.format,S.colorSpace),j=s.convert(S.type),K=E(S.internalFormat,X,j,S.colorSpace);if(!i.get(m).__hasExternalTextures){const _e=Math.max(1,m.width>>O),Z=Math.max(1,m.height>>O);b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY?n.texImage3D(b,O,K,_e,Z,m.depth,0,X,j,null):n.texImage2D(b,O,K,_e,Z,0,X,j,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),J(m)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,w,b,i.get(S).__webglTexture,0,le(m)):(b===t.TEXTURE_2D||b>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&b<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,w,b,i.get(S).__webglTexture,O),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(y,m,S){if(t.bindRenderbuffer(t.RENDERBUFFER,y),m.depthBuffer&&!m.stencilBuffer){let w=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(S||J(m)){const b=m.depthTexture;b&&b.isDepthTexture&&(b.type===Ii?w=t.DEPTH_COMPONENT32F:b.type===Di&&(w=t.DEPTH_COMPONENT24));const O=le(m);J(m)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,O,w,m.width,m.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,O,w,m.width,m.height)}else t.renderbufferStorage(t.RENDERBUFFER,w,m.width,m.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,y)}else if(m.depthBuffer&&m.stencilBuffer){const w=le(m);S&&J(m)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,w,t.DEPTH24_STENCIL8,m.width,m.height):J(m)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,w,t.DEPTH24_STENCIL8,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,y)}else{const w=m.isWebGLMultipleRenderTargets===!0?m.texture:[m.texture];for(let b=0;b<w.length;b++){const O=w[b],X=s.convert(O.format,O.colorSpace),j=s.convert(O.type),K=E(O.internalFormat,X,j,O.colorSpace),he=le(m);S&&J(m)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,K,m.width,m.height):J(m)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,K,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,K,m.width,m.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(y,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(m.depthTexture).__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),B(m.depthTexture,0);const w=i.get(m.depthTexture).__webglTexture,b=le(m);if(m.depthTexture.format===_r)J(m)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,w,0,b):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,w,0);else if(m.depthTexture.format===is)J(m)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,w,0,b):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,w,0);else throw new Error("Unknown depthTexture format")}function Ve(y){const m=i.get(y),S=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!m.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");He(m.__webglFramebuffer,y)}else if(S){m.__webglDepthbuffer=[];for(let w=0;w<6;w++)n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[w]),m.__webglDepthbuffer[w]=t.createRenderbuffer(),Ge(m.__webglDepthbuffer[w],y,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer=t.createRenderbuffer(),Ge(m.__webglDepthbuffer,y,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(y,m,S){const w=i.get(y);m!==void 0&&De(w.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),S!==void 0&&Ve(y)}function T(y){const m=y.texture,S=i.get(y),w=i.get(m);y.addEventListener("dispose",Q),y.isWebGLMultipleRenderTargets!==!0&&(w.__webglTexture===void 0&&(w.__webglTexture=t.createTexture()),w.__version=m.version,o.memory.textures++);const b=y.isWebGLCubeRenderTarget===!0,O=y.isWebGLMultipleRenderTargets===!0,X=g(y)||a;if(b){S.__webglFramebuffer=[];for(let j=0;j<6;j++)if(a&&m.mipmaps&&m.mipmaps.length>0){S.__webglFramebuffer[j]=[];for(let K=0;K<m.mipmaps.length;K++)S.__webglFramebuffer[j][K]=t.createFramebuffer()}else S.__webglFramebuffer[j]=t.createFramebuffer()}else{if(a&&m.mipmaps&&m.mipmaps.length>0){S.__webglFramebuffer=[];for(let j=0;j<m.mipmaps.length;j++)S.__webglFramebuffer[j]=t.createFramebuffer()}else S.__webglFramebuffer=t.createFramebuffer();if(O)if(r.drawBuffers){const j=y.texture;for(let K=0,he=j.length;K<he;K++){const _e=i.get(j[K]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&J(y)===!1){const j=O?m:[m];S.__webglMultisampledFramebuffer=t.createFramebuffer(),S.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){const he=j[K];S.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,S.__webglColorRenderbuffer[K]);const _e=s.convert(he.format,he.colorSpace),Z=s.convert(he.type),Me=E(he.internalFormat,_e,Z,he.colorSpace,y.isXRRenderTarget===!0),be=le(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,Me,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,S.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(S.__webglDepthRenderbuffer=t.createRenderbuffer(),Ge(S.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(b){n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture),k(t.TEXTURE_CUBE_MAP,m,X);for(let j=0;j<6;j++)if(a&&m.mipmaps&&m.mipmaps.length>0)for(let K=0;K<m.mipmaps.length;K++)De(S.__webglFramebuffer[j][K],y,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,K);else De(S.__webglFramebuffer[j],y,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);M(m,X)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(O){const j=y.texture;for(let K=0,he=j.length;K<he;K++){const _e=j[K],Z=i.get(_e);n.bindTexture(t.TEXTURE_2D,Z.__webglTexture),k(t.TEXTURE_2D,_e,X),De(S.__webglFramebuffer,y,_e,t.COLOR_ATTACHMENT0+K,t.TEXTURE_2D,0),M(_e,X)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let j=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?j=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(j,w.__webglTexture),k(j,m,X),a&&m.mipmaps&&m.mipmaps.length>0)for(let K=0;K<m.mipmaps.length;K++)De(S.__webglFramebuffer[K],y,m,t.COLOR_ATTACHMENT0,j,K);else De(S.__webglFramebuffer,y,m,t.COLOR_ATTACHMENT0,j,0);M(m,X)&&x(j),n.unbindTexture()}y.depthBuffer&&Ve(y)}function se(y){const m=g(y)||a,S=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let w=0,b=S.length;w<b;w++){const O=S[w];if(M(O,m)){const X=y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,j=i.get(O).__webglTexture;n.bindTexture(X,j),x(X),n.unbindTexture()}}}function te(y){if(a&&y.samples>0&&J(y)===!1){const m=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],S=y.width,w=y.height;let b=t.COLOR_BUFFER_BIT;const O=[],X=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=i.get(y),K=y.isWebGLMultipleRenderTargets===!0;if(K)for(let he=0;he<m.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,j.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let he=0;he<m.length;he++){O.push(t.COLOR_ATTACHMENT0+he),y.depthBuffer&&O.push(X);const _e=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(_e===!1&&(y.depthBuffer&&(b|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&(b|=t.STENCIL_BUFFER_BIT)),K&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,j.__webglColorRenderbuffer[he]),_e===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[X]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[X])),K){const Z=i.get(m[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Z,0)}t.blitFramebuffer(0,0,S,w,0,0,S,w,b,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,O)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let he=0;he<m.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,j.__webglColorRenderbuffer[he]);const _e=i.get(m[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,j.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}}function le(y){return Math.min(r.maxSamples,y.samples)}function J(y){const m=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ye(y){const m=o.render.frame;c.get(y)!==m&&(c.set(y,m),y.update())}function F(y,m){const S=y.colorSpace,w=y.format,b=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===uc||S!==ri&&S!==wn&&(dt.getTransfer(S)===_t?a===!1?e.has("EXT_sRGB")===!0&&w===Bn?(y.format=uc,y.minFilter=Tn,y.generateMipmaps=!1):m=Ep.sRGBToLinear(m):(w!==Bn||b!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",S)),m}this.allocateTextureUnit=I,this.resetTextureUnits=V,this.setTexture2D=B,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=ne,this.rebindTextures=N,this.setupRenderTarget=T,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=De,this.useMultisampledRTT=J}function VE(t,e,n){const i=n.isWebGL2;function r(s,o=wn){let a;const l=dt.getTransfer(o);if(s===Hi)return t.UNSIGNED_BYTE;if(s===pp)return t.UNSIGNED_SHORT_4_4_4_4;if(s===mp)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Ev)return t.BYTE;if(s===bv)return t.SHORT;if(s===Hc)return t.UNSIGNED_SHORT;if(s===hp)return t.INT;if(s===Di)return t.UNSIGNED_INT;if(s===Ii)return t.FLOAT;if(s===Zs)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Tv)return t.ALPHA;if(s===Bn)return t.RGBA;if(s===Av)return t.LUMINANCE;if(s===wv)return t.LUMINANCE_ALPHA;if(s===_r)return t.DEPTH_COMPONENT;if(s===is)return t.DEPTH_STENCIL;if(s===uc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Rv)return t.RED;if(s===gp)return t.RED_INTEGER;if(s===Cv)return t.RG;if(s===_p)return t.RG_INTEGER;if(s===vp)return t.RGBA_INTEGER;if(s===cl||s===ul||s===fl||s===dl)if(l===_t)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===cl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ul)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===dl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===cl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ul)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===dl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mf||s===gf||s===_f||s===vf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===mf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_f)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xf||s===yf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xf)return l===_t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===yf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Mf||s===Sf||s===Ef||s===bf||s===Tf||s===Af||s===wf||s===Rf||s===Cf||s===Lf||s===Pf||s===Df||s===If||s===Uf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Mf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ef)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Af)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Lf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Df)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===If)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hl||s===Nf||s===Of)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===hl)return l===_t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Of)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lv||s===Ff||s===Bf||s===zf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===hl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ff)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class kE extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fr extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),p=this._getHandJoint(u,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,v=.005;u.inputState.pinching&&h>d+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class XE extends os{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,v=null;const _=n.getContextAttributes();let g=null,p=null;const M=[],x=[],E=new st;let D=null;const P=new An;P.layers.enable(1),P.viewport=new Gt;const R=new An;R.layers.enable(2),R.viewport=new Gt;const Q=[P,R],A=new kE;A.layers.enable(1),A.layers.enable(2);let L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let de=M[k];return de===void 0&&(de=new Bl,M[k]=de),de.getTargetRaySpace()},this.getControllerGrip=function(k){let de=M[k];return de===void 0&&(de=new Bl,M[k]=de),de.getGripSpace()},this.getHand=function(k){let de=M[k];return de===void 0&&(de=new Bl,M[k]=de),de.getHandSpace()};function ae(k){const de=x.indexOf(k.inputSource);if(de===-1)return;const Ee=M[de];Ee!==void 0&&(Ee.update(k.inputSource,k.frame,u||o),Ee.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",I);for(let k=0;k<M.length;k++){const de=x[k];de!==null&&(x[k]=null,M[k].disconnect(de))}L=null,q=null,e.setRenderTarget(g),d=null,h=null,f=null,r=null,p=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",V),r.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Wi(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let de=null,Ee=null,Ce=null;_.depth&&(Ce=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=_.stencil?is:_r,Ee=_.stencil?gr:Di);const De={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new Wi(h.textureWidth,h.textureHeight,{format:Bn,type:Hi,depthTexture:new Bp(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ge=e.properties.get(p);Ge.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(k){for(let de=0;de<k.removed.length;de++){const Ee=k.removed[de],Ce=x.indexOf(Ee);Ce>=0&&(x[Ce]=null,M[Ce].disconnect(Ee))}for(let de=0;de<k.added.length;de++){const Ee=k.added[de];let Ce=x.indexOf(Ee);if(Ce===-1){for(let Ge=0;Ge<M.length;Ge++)if(Ge>=x.length){x.push(Ee),Ce=Ge;break}else if(x[Ge]===null){x[Ge]=Ee,Ce=Ge;break}if(Ce===-1)break}const De=M[Ce];De&&De.connect(Ee)}}const G=new ee,B=new ee;function $(k,de,Ee){G.setFromMatrixPosition(de.matrixWorld),B.setFromMatrixPosition(Ee.matrixWorld);const Ce=G.distanceTo(B),De=de.projectionMatrix.elements,Ge=Ee.projectionMatrix.elements,He=De[14]/(De[10]-1),Ve=De[14]/(De[10]+1),N=(De[9]+1)/De[5],T=(De[9]-1)/De[5],se=(De[8]-1)/De[0],te=(Ge[8]+1)/Ge[0],le=He*se,J=He*te,ye=Ce/(-se+te),F=ye*-se;de.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(F),k.translateZ(ye),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const y=He+ye,m=Ve+ye,S=le-F,w=J+(Ce-F),b=N*Ve/m*y,O=T*Ve/m*y;k.projectionMatrix.makePerspective(S,w,b,O,y,m),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Y(k,de){de===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(de.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;A.near=R.near=P.near=k.near,A.far=R.far=P.far=k.far,(L!==A.near||q!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,q=A.far);const de=k.parent,Ee=A.cameras;Y(A,de);for(let Ce=0;Ce<Ee.length;Ce++)Y(Ee[Ce],de);Ee.length===2?$(A,P,R):A.projectionMatrix.copy(P.projectionMatrix),ne(k,A,de)};function ne(k,de,Ee){Ee===null?k.matrix.copy(de.matrixWorld):(k.matrix.copy(Ee.matrixWorld),k.matrix.invert(),k.matrix.multiply(de.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(de.projectionMatrix),k.projectionMatrixInverse.copy(de.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=fc*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let ie=null;function re(k,de){if(c=de.getViewerPose(u||o),v=de,c!==null){const Ee=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Ce=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,Ce=!0);for(let De=0;De<Ee.length;De++){const Ge=Ee[De];let He=null;if(d!==null)He=d.getViewport(Ge);else{const N=f.getViewSubImage(h,Ge);He=N.viewport,De===0&&(e.setRenderTargetTextures(p,N.colorTexture,h.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(p))}let Ve=Q[De];Ve===void 0&&(Ve=new An,Ve.layers.enable(De),Ve.viewport=new Gt,Q[De]=Ve),Ve.matrix.fromArray(Ge.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ge.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(He.x,He.y,He.width,He.height),De===0&&(A.matrix.copy(Ve.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ce===!0&&A.cameras.push(Ve)}}for(let Ee=0;Ee<M.length;Ee++){const Ce=x[Ee],De=M[Ee];Ce!==null&&De!==void 0&&De.update(Ce,de,u||o)}ie&&ie(k,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const xe=new Op;xe.setAnimationLoop(re),this.setAnimationLoop=function(k){ie=k},this.dispose=function(){}}}function $E(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Dp(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,M,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),c(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,E)):p.isMeshMatcapMaterial?(s(g,p),v(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,x):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,n(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=x*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qE(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const E=x.program;i.uniformBlockBinding(M,E)}function u(M,x){let E=r[M.id];E===void 0&&(v(M),E=c(M),r[M.id]=E,M.addEventListener("dispose",g));const D=x.program;i.updateUBOMapping(M,D);const P=e.render.frame;s[M.id]!==P&&(h(M),s[M.id]=P)}function c(M){const x=f();M.__bindingPointIndex=x;const E=t.createBuffer(),D=M.__size,P=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,D,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,E),E}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const x=r[M.id],E=M.uniforms,D=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let P=0,R=E.length;P<R;P++){const Q=Array.isArray(E[P])?E[P]:[E[P]];for(let A=0,L=Q.length;A<L;A++){const q=Q[A];if(d(q,P,A,D)===!0){const ae=q.__offset,V=Array.isArray(q.value)?q.value:[q.value];let I=0;for(let G=0;G<V.length;G++){const B=V[G],$=_(B);typeof B=="number"||typeof B=="boolean"?(q.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,ae+I,q.__data)):B.isMatrix3?(q.__data[0]=B.elements[0],q.__data[1]=B.elements[1],q.__data[2]=B.elements[2],q.__data[3]=0,q.__data[4]=B.elements[3],q.__data[5]=B.elements[4],q.__data[6]=B.elements[5],q.__data[7]=0,q.__data[8]=B.elements[6],q.__data[9]=B.elements[7],q.__data[10]=B.elements[8],q.__data[11]=0):(B.toArray(q.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ae,q.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(M,x,E,D){const P=M.value,R=x+"_"+E;if(D[R]===void 0)return typeof P=="number"||typeof P=="boolean"?D[R]=P:D[R]=P.clone(),!0;{const Q=D[R];if(typeof P=="number"||typeof P=="boolean"){if(Q!==P)return D[R]=P,!0}else if(Q.equals(P)===!1)return Q.copy(P),!0}return!1}function v(M){const x=M.uniforms;let E=0;const D=16;for(let R=0,Q=x.length;R<Q;R++){const A=Array.isArray(x[R])?x[R]:[x[R]];for(let L=0,q=A.length;L<q;L++){const ae=A[L],V=Array.isArray(ae.value)?ae.value:[ae.value];for(let I=0,G=V.length;I<G;I++){const B=V[I],$=_(B),Y=E%D;Y!==0&&D-Y<$.boundary&&(E+=D-Y),ae.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=E,E+=$.storage}}}const P=E%D;return P>0&&(E+=D-P),M.__size=E,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class Wp{constructor(e={}){const{canvas:n=kv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),v=new Int32Array(4);let _=null,g=null;const p=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const x=this;let E=!1,D=0,P=0,R=null,Q=-1,A=null;const L=new Gt,q=new Gt;let ae=null;const V=new et(0);let I=0,G=n.width,B=n.height,$=1,Y=null,ne=null;const ie=new Gt(0,0,G,B),re=new Gt(0,0,G,B);let xe=!1;const k=new Np;let de=!1,Ee=!1,Ce=null;const De=new bt,Ge=new st,He=new ee,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return R===null?$:1}let T=i;function se(U,ce){for(let ge=0;ge<U.length;ge++){const ve=U[ge],me=n.getContext(ve,ce);if(me!==null)return me}return null}try{const U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zc}`),n.addEventListener("webglcontextlost",H,!1),n.addEventListener("webglcontextrestored",C,!1),n.addEventListener("webglcontextcreationerror",ue,!1),T===null){const ce=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&ce.shift(),T=se(ce,U),T===null)throw se(ce)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&T instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),T.getShaderPrecisionFormat===void 0&&(T.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let te,le,J,ye,F,y,m,S,w,b,O,X,j,K,he,_e,Z,Me,be,Re,Te,Se,Le,Ie;function z(){te=new iS(T),le=new ZM(T,te,e),te.init(le),Se=new VE(T,te,le),J=new HE(T,te,le),ye=new oS(T),F=new AE,y=new GE(T,te,J,F,le,Se,ye),m=new QM(x),S=new nS(x),w=new px(T,le),Le=new jM(T,te,w,le),b=new rS(T,w,ye,Le),O=new uS(T,b,w,ye),be=new cS(T,le,y),_e=new JM(F),X=new TE(x,m,S,te,le,Le,_e),j=new $E(x,F),K=new RE,he=new UE(te,le),Me=new YM(x,m,S,J,O,h,l),Z=new zE(x,O,le),Ie=new qE(T,ye,le,J),Re=new KM(T,te,ye,le),Te=new sS(T,te,ye,le),ye.programs=X.programs,x.capabilities=le,x.extensions=te,x.properties=F,x.renderLists=K,x.shadowMap=Z,x.state=J,x.info=ye}z();const W=new XE(x,T);this.xr=W,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const U=te.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=te.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(U){U!==void 0&&($=U,this.setSize(G,B,!1))},this.getSize=function(U){return U.set(G,B)},this.setSize=function(U,ce,ge=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=U,B=ce,n.width=Math.floor(U*$),n.height=Math.floor(ce*$),ge===!0&&(n.style.width=U+"px",n.style.height=ce+"px"),this.setViewport(0,0,U,ce)},this.getDrawingBufferSize=function(U){return U.set(G*$,B*$).floor()},this.setDrawingBufferSize=function(U,ce,ge){G=U,B=ce,$=ge,n.width=Math.floor(U*ge),n.height=Math.floor(ce*ge),this.setViewport(0,0,U,ce)},this.getCurrentViewport=function(U){return U.copy(L)},this.getViewport=function(U){return U.copy(ie)},this.setViewport=function(U,ce,ge,ve){U.isVector4?ie.set(U.x,U.y,U.z,U.w):ie.set(U,ce,ge,ve),J.viewport(L.copy(ie).multiplyScalar($).floor())},this.getScissor=function(U){return U.copy(re)},this.setScissor=function(U,ce,ge,ve){U.isVector4?re.set(U.x,U.y,U.z,U.w):re.set(U,ce,ge,ve),J.scissor(q.copy(re).multiplyScalar($).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(U){J.setScissorTest(xe=U)},this.setOpaqueSort=function(U){Y=U},this.setTransparentSort=function(U){ne=U},this.getClearColor=function(U){return U.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(U=!0,ce=!0,ge=!0){let ve=0;if(U){let me=!1;if(R!==null){const Fe=R.texture.format;me=Fe===vp||Fe===_p||Fe===gp}if(me){const Fe=R.texture.type,We=Fe===Hi||Fe===Di||Fe===Hc||Fe===gr||Fe===pp||Fe===mp,$e=Me.getClearColor(),Ye=Me.getClearAlpha(),tt=$e.r,Ke=$e.g,Ze=$e.b;We?(d[0]=tt,d[1]=Ke,d[2]=Ze,d[3]=Ye,T.clearBufferuiv(T.COLOR,0,d)):(v[0]=tt,v[1]=Ke,v[2]=Ze,v[3]=Ye,T.clearBufferiv(T.COLOR,0,v))}else ve|=T.COLOR_BUFFER_BIT}ce&&(ve|=T.DEPTH_BUFFER_BIT),ge&&(ve|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",H,!1),n.removeEventListener("webglcontextrestored",C,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),K.dispose(),he.dispose(),F.dispose(),m.dispose(),S.dispose(),O.dispose(),Le.dispose(),Ie.dispose(),X.dispose(),W.dispose(),W.removeEventListener("sessionstart",ke),W.removeEventListener("sessionend",ze),Ce&&(Ce.dispose(),Ce=null),Xe.stop()};function H(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const U=ye.autoReset,ce=Z.enabled,ge=Z.autoUpdate,ve=Z.needsUpdate,me=Z.type;z(),ye.autoReset=U,Z.enabled=ce,Z.autoUpdate=ge,Z.needsUpdate=ve,Z.type=me}function ue(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function fe(U){const ce=U.target;ce.removeEventListener("dispose",fe),oe(ce)}function oe(U){pe(U),F.remove(U)}function pe(U){const ce=F.get(U).programs;ce!==void 0&&(ce.forEach(function(ge){X.releaseProgram(ge)}),U.isShaderMaterial&&X.releaseShaderCache(U))}this.renderBufferDirect=function(U,ce,ge,ve,me,Fe){ce===null&&(ce=Ve);const We=me.isMesh&&me.matrixWorld.determinant()<0,$e=uo(U,ce,ge,ve,me);J.setMaterial(ve,We);let Ye=ge.index,tt=1;if(ve.wireframe===!0){if(Ye=b.getWireframeAttribute(ge),Ye===void 0)return;tt=2}const Ke=ge.drawRange,Ze=ge.attributes.position;let Tt=Ke.start*tt,_n=(Ke.start+Ke.count)*tt;Fe!==null&&(Tt=Math.max(Tt,Fe.start*tt),_n=Math.min(_n,(Fe.start+Fe.count)*tt)),Ye!==null?(Tt=Math.max(Tt,0),_n=Math.min(_n,Ye.count)):Ze!=null&&(Tt=Math.max(Tt,0),_n=Math.min(_n,Ze.count));const Ut=_n-Tt;if(Ut<0||Ut===1/0)return;Le.setup(me,ve,$e,ge,Ye);let si,xt=Re;if(Ye!==null&&(si=w.get(Ye),xt=Te,xt.setIndex(si)),me.isMesh)ve.wireframe===!0?(J.setLineWidth(ve.wireframeLinewidth*N()),xt.setMode(T.LINES)):xt.setMode(T.TRIANGLES);else if(me.isLine){let nt=ve.linewidth;nt===void 0&&(nt=1),J.setLineWidth(nt*N()),me.isLineSegments?xt.setMode(T.LINES):me.isLineLoop?xt.setMode(T.LINE_LOOP):xt.setMode(T.LINE_STRIP)}else me.isPoints?xt.setMode(T.POINTS):me.isSprite&&xt.setMode(T.TRIANGLES);if(me.isBatchedMesh)xt.renderMultiDraw(me._multiDrawStarts,me._multiDrawCounts,me._multiDrawCount);else if(me.isInstancedMesh)xt.renderInstances(Tt,Ut,me.count);else if(ge.isInstancedBufferGeometry){const nt=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,Ba=Math.min(ge.instanceCount,nt);xt.renderInstances(Tt,Ut,Ba)}else xt.render(Tt,Ut)};function we(U,ce,ge){U.transparent===!0&&U.side===_i&&U.forceSinglePass===!1?(U.side=Qt,U.needsUpdate=!0,pt(U,ce,ge),U.side=ki,U.needsUpdate=!0,pt(U,ce,ge),U.side=_i):pt(U,ce,ge)}this.compile=function(U,ce,ge=null){ge===null&&(ge=U),g=he.get(ge),g.init(),M.push(g),ge.traverseVisible(function(me){me.isLight&&me.layers.test(ce.layers)&&(g.pushLight(me),me.castShadow&&g.pushShadow(me))}),U!==ge&&U.traverseVisible(function(me){me.isLight&&me.layers.test(ce.layers)&&(g.pushLight(me),me.castShadow&&g.pushShadow(me))}),g.setupLights(x._useLegacyLights);const ve=new Set;return U.traverse(function(me){const Fe=me.material;if(Fe)if(Array.isArray(Fe))for(let We=0;We<Fe.length;We++){const $e=Fe[We];we($e,ge,me),ve.add($e)}else we(Fe,ge,me),ve.add(Fe)}),M.pop(),g=null,ve},this.compileAsync=function(U,ce,ge=null){const ve=this.compile(U,ce,ge);return new Promise(me=>{function Fe(){if(ve.forEach(function(We){F.get(We).currentProgram.isReady()&&ve.delete(We)}),ve.size===0){me(U);return}setTimeout(Fe,10)}te.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Ae=null;function Ne(U){Ae&&Ae(U)}function ke(){Xe.stop()}function ze(){Xe.start()}const Xe=new Op;Xe.setAnimationLoop(Ne),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(U){Ae=U,W.setAnimationLoop(U),U===null?Xe.stop():Xe.start()},W.addEventListener("sessionstart",ke),W.addEventListener("sessionend",ze),this.render=function(U,ce){if(ce!==void 0&&ce.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.parent===null&&ce.matrixWorldAutoUpdate===!0&&ce.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(ce),ce=W.getCamera()),U.isScene===!0&&U.onBeforeRender(x,U,ce,R),g=he.get(U,M.length),g.init(),M.push(g),De.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),k.setFromProjectionMatrix(De),Ee=this.localClippingEnabled,de=_e.init(this.clippingPlanes,Ee),_=K.get(U,p.length),_.init(),p.push(_),ot(U,ce,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Y,ne),this.info.render.frame++,de===!0&&_e.beginShadows();const ge=g.state.shadowsArray;if(Z.render(ge,U,ce),de===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),Me.render(_,U),g.setupLights(x._useLegacyLights),ce.isArrayCamera){const ve=ce.cameras;for(let me=0,Fe=ve.length;me<Fe;me++){const We=ve[me];It(_,U,We,We.viewport)}}else It(_,U,ce);R!==null&&(y.updateMultisampleRenderTarget(R),y.updateRenderTargetMipmap(R)),U.isScene===!0&&U.onAfterRender(x,U,ce),Le.resetDefaultState(),Q=-1,A=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ot(U,ce,ge,ve){if(U.visible===!1)return;if(U.layers.test(ce.layers)){if(U.isGroup)ge=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ce);else if(U.isLight)g.pushLight(U),U.castShadow&&g.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||k.intersectsSprite(U)){ve&&He.setFromMatrixPosition(U.matrixWorld).applyMatrix4(De);const We=O.update(U),$e=U.material;$e.visible&&_.push(U,We,$e,ge,He.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||k.intersectsObject(U))){const We=O.update(U),$e=U.material;if(ve&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),He.copy(U.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),He.copy(We.boundingSphere.center)),He.applyMatrix4(U.matrixWorld).applyMatrix4(De)),Array.isArray($e)){const Ye=We.groups;for(let tt=0,Ke=Ye.length;tt<Ke;tt++){const Ze=Ye[tt],Tt=$e[Ze.materialIndex];Tt&&Tt.visible&&_.push(U,We,Tt,ge,He.z,Ze)}}else $e.visible&&_.push(U,We,$e,ge,He.z,null)}}const Fe=U.children;for(let We=0,$e=Fe.length;We<$e;We++)ot(Fe[We],ce,ge,ve)}function It(U,ce,ge,ve){const me=U.opaque,Fe=U.transmissive,We=U.transparent;g.setupLightsView(ge),de===!0&&_e.setGlobalState(x.clippingPlanes,ge),Fe.length>0&&Wt(me,Fe,ce,ge),ve&&J.viewport(L.copy(ve)),me.length>0&&gn(me,ce,ge),Fe.length>0&&gn(Fe,ce,ge),We.length>0&&gn(We,ce,ge),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Wt(U,ce,ge,ve){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;const Fe=le.isWebGL2;Ce===null&&(Ce=new Wi(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?Zs:Hi,minFilter:xr,samples:Fe?4:0})),x.getDrawingBufferSize(Ge),Fe?Ce.setSize(Ge.x,Ge.y):Ce.setSize(dc(Ge.x),dc(Ge.y));const We=x.getRenderTarget();x.setRenderTarget(Ce),x.getClearColor(V),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const $e=x.toneMapping;x.toneMapping=zi,gn(U,ge,ve),y.updateMultisampleRenderTarget(Ce),y.updateRenderTargetMipmap(Ce);let Ye=!1;for(let tt=0,Ke=ce.length;tt<Ke;tt++){const Ze=ce[tt],Tt=Ze.object,_n=Ze.geometry,Ut=Ze.material,si=Ze.group;if(Ut.side===_i&&Tt.layers.test(ve.layers)){const xt=Ut.side;Ut.side=Qt,Ut.needsUpdate=!0,ct(Tt,ge,ve,_n,Ut,si),Ut.side=xt,Ut.needsUpdate=!0,Ye=!0}}Ye===!0&&(y.updateMultisampleRenderTarget(Ce),y.updateRenderTargetMipmap(Ce)),x.setRenderTarget(We),x.setClearColor(V,I),x.toneMapping=$e}function gn(U,ce,ge){const ve=ce.isScene===!0?ce.overrideMaterial:null;for(let me=0,Fe=U.length;me<Fe;me++){const We=U[me],$e=We.object,Ye=We.geometry,tt=ve===null?We.material:ve,Ke=We.group;$e.layers.test(ge.layers)&&ct($e,ce,ge,Ye,tt,Ke)}}function ct(U,ce,ge,ve,me,Fe){U.onBeforeRender(x,ce,ge,ve,me,Fe),U.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),me.onBeforeRender(x,ce,ge,ve,U,Fe),me.transparent===!0&&me.side===_i&&me.forceSinglePass===!1?(me.side=Qt,me.needsUpdate=!0,x.renderBufferDirect(ge,ce,ve,me,U,Fe),me.side=ki,me.needsUpdate=!0,x.renderBufferDirect(ge,ce,ve,me,U,Fe),me.side=_i):x.renderBufferDirect(ge,ce,ve,me,U,Fe),U.onAfterRender(x,ce,ge,ve,me,Fe)}function pt(U,ce,ge){ce.isScene!==!0&&(ce=Ve);const ve=F.get(U),me=g.state.lights,Fe=g.state.shadowsArray,We=me.state.version,$e=X.getParameters(U,me.state,Fe,ce,ge),Ye=X.getProgramCacheKey($e);let tt=ve.programs;ve.environment=U.isMeshStandardMaterial?ce.environment:null,ve.fog=ce.fog,ve.envMap=(U.isMeshStandardMaterial?S:m).get(U.envMap||ve.environment),tt===void 0&&(U.addEventListener("dispose",fe),tt=new Map,ve.programs=tt);let Ke=tt.get(Ye);if(Ke!==void 0){if(ve.currentProgram===Ke&&ve.lightsStateVersion===We)return ds(U,$e),Ke}else $e.uniforms=X.getUniforms(U),U.onBuild(ge,$e,x),U.onBeforeCompile($e,x),Ke=X.acquireProgram($e,Ye),tt.set(Ye,Ke),ve.uniforms=$e.uniforms;const Ze=ve.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ze.clippingPlanes=_e.uniform),ds(U,$e),ve.needsLights=nm(U),ve.lightsStateVersion=We,ve.needsLights&&(Ze.ambientLightColor.value=me.state.ambient,Ze.lightProbe.value=me.state.probe,Ze.directionalLights.value=me.state.directional,Ze.directionalLightShadows.value=me.state.directionalShadow,Ze.spotLights.value=me.state.spot,Ze.spotLightShadows.value=me.state.spotShadow,Ze.rectAreaLights.value=me.state.rectArea,Ze.ltc_1.value=me.state.rectAreaLTC1,Ze.ltc_2.value=me.state.rectAreaLTC2,Ze.pointLights.value=me.state.point,Ze.pointLightShadows.value=me.state.pointShadow,Ze.hemisphereLights.value=me.state.hemi,Ze.directionalShadowMap.value=me.state.directionalShadowMap,Ze.directionalShadowMatrix.value=me.state.directionalShadowMatrix,Ze.spotShadowMap.value=me.state.spotShadowMap,Ze.spotLightMatrix.value=me.state.spotLightMatrix,Ze.spotLightMap.value=me.state.spotLightMap,Ze.pointShadowMap.value=me.state.pointShadowMap,Ze.pointShadowMatrix.value=me.state.pointShadowMatrix),ve.currentProgram=Ke,ve.uniformsList=null,Ke}function fs(U){if(U.uniformsList===null){const ce=U.currentProgram.getUniforms();U.uniformsList=ea.seqWithValue(ce.seq,U.uniforms)}return U.uniformsList}function ds(U,ce){const ge=F.get(U);ge.outputColorSpace=ce.outputColorSpace,ge.batching=ce.batching,ge.instancing=ce.instancing,ge.instancingColor=ce.instancingColor,ge.skinning=ce.skinning,ge.morphTargets=ce.morphTargets,ge.morphNormals=ce.morphNormals,ge.morphColors=ce.morphColors,ge.morphTargetsCount=ce.morphTargetsCount,ge.numClippingPlanes=ce.numClippingPlanes,ge.numIntersection=ce.numClipIntersection,ge.vertexAlphas=ce.vertexAlphas,ge.vertexTangents=ce.vertexTangents,ge.toneMapping=ce.toneMapping}function uo(U,ce,ge,ve,me){ce.isScene!==!0&&(ce=Ve),y.resetTextureUnits();const Fe=ce.fog,We=ve.isMeshStandardMaterial?ce.environment:null,$e=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ri,Ye=(ve.isMeshStandardMaterial?S:m).get(ve.envMap||We),tt=ve.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,Ke=!!ge.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),Ze=!!ge.morphAttributes.position,Tt=!!ge.morphAttributes.normal,_n=!!ge.morphAttributes.color;let Ut=zi;ve.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ut=x.toneMapping);const si=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,xt=si!==void 0?si.length:0,nt=F.get(ve),Ba=g.state.lights;if(de===!0&&(Ee===!0||U!==A)){const En=U===A&&ve.id===Q;_e.setState(ve,U,En)}let yt=!1;ve.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ba.state.version||nt.outputColorSpace!==$e||me.isBatchedMesh&&nt.batching===!1||!me.isBatchedMesh&&nt.batching===!0||me.isInstancedMesh&&nt.instancing===!1||!me.isInstancedMesh&&nt.instancing===!0||me.isSkinnedMesh&&nt.skinning===!1||!me.isSkinnedMesh&&nt.skinning===!0||me.isInstancedMesh&&nt.instancingColor===!0&&me.instanceColor===null||me.isInstancedMesh&&nt.instancingColor===!1&&me.instanceColor!==null||nt.envMap!==Ye||ve.fog===!0&&nt.fog!==Fe||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==_e.numPlanes||nt.numIntersection!==_e.numIntersection)||nt.vertexAlphas!==tt||nt.vertexTangents!==Ke||nt.morphTargets!==Ze||nt.morphNormals!==Tt||nt.morphColors!==_n||nt.toneMapping!==Ut||le.isWebGL2===!0&&nt.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,nt.__version=ve.version);let qi=nt.currentProgram;yt===!0&&(qi=pt(ve,ce,me));let $c=!1,hs=!1,za=!1;const Xt=qi.getUniforms(),Yi=nt.uniforms;if(J.useProgram(qi.program)&&($c=!0,hs=!0,za=!0),ve.id!==Q&&(Q=ve.id,hs=!0),$c||A!==U){Xt.setValue(T,"projectionMatrix",U.projectionMatrix),Xt.setValue(T,"viewMatrix",U.matrixWorldInverse);const En=Xt.map.cameraPosition;En!==void 0&&En.setValue(T,He.setFromMatrixPosition(U.matrixWorld)),le.logarithmicDepthBuffer&&Xt.setValue(T,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&Xt.setValue(T,"isOrthographic",U.isOrthographicCamera===!0),A!==U&&(A=U,hs=!0,za=!0)}if(me.isSkinnedMesh){Xt.setOptional(T,me,"bindMatrix"),Xt.setOptional(T,me,"bindMatrixInverse");const En=me.skeleton;En&&(le.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),Xt.setValue(T,"boneTexture",En.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}me.isBatchedMesh&&(Xt.setOptional(T,me,"batchingTexture"),Xt.setValue(T,"batchingTexture",me._matricesTexture,y));const Ha=ge.morphAttributes;if((Ha.position!==void 0||Ha.normal!==void 0||Ha.color!==void 0&&le.isWebGL2===!0)&&be.update(me,ge,qi),(hs||nt.receiveShadow!==me.receiveShadow)&&(nt.receiveShadow=me.receiveShadow,Xt.setValue(T,"receiveShadow",me.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(Yi.envMap.value=Ye,Yi.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),hs&&(Xt.setValue(T,"toneMappingExposure",x.toneMappingExposure),nt.needsLights&&Fa(Yi,za),Fe&&ve.fog===!0&&j.refreshFogUniforms(Yi,Fe),j.refreshMaterialUniforms(Yi,ve,$,B,Ce),ea.upload(T,fs(nt),Yi,y)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(ea.upload(T,fs(nt),Yi,y),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&Xt.setValue(T,"center",me.center),Xt.setValue(T,"modelViewMatrix",me.modelViewMatrix),Xt.setValue(T,"normalMatrix",me.normalMatrix),Xt.setValue(T,"modelMatrix",me.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){const En=ve.uniformsGroups;for(let Ga=0,im=En.length;Ga<im;Ga++)if(le.isWebGL2){const qc=En[Ga];Ie.update(qc,qi),Ie.bind(qc,qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qi}function Fa(U,ce){U.ambientLightColor.needsUpdate=ce,U.lightProbe.needsUpdate=ce,U.directionalLights.needsUpdate=ce,U.directionalLightShadows.needsUpdate=ce,U.pointLights.needsUpdate=ce,U.pointLightShadows.needsUpdate=ce,U.spotLights.needsUpdate=ce,U.spotLightShadows.needsUpdate=ce,U.rectAreaLights.needsUpdate=ce,U.hemisphereLights.needsUpdate=ce}function nm(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(U,ce,ge){F.get(U.texture).__webglTexture=ce,F.get(U.depthTexture).__webglTexture=ge;const ve=F.get(U);ve.__hasExternalTextures=!0,ve.__hasExternalTextures&&(ve.__autoAllocateDepthBuffer=ge===void 0,ve.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ve.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,ce){const ge=F.get(U);ge.__webglFramebuffer=ce,ge.__useDefaultFramebuffer=ce===void 0},this.setRenderTarget=function(U,ce=0,ge=0){R=U,D=ce,P=ge;let ve=!0,me=null,Fe=!1,We=!1;if(U){const Ye=F.get(U);Ye.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(T.FRAMEBUFFER,null),ve=!1):Ye.__webglFramebuffer===void 0?y.setupRenderTarget(U):Ye.__hasExternalTextures&&y.rebindTextures(U,F.get(U.texture).__webglTexture,F.get(U.depthTexture).__webglTexture);const tt=U.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(We=!0);const Ke=F.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ke[ce])?me=Ke[ce][ge]:me=Ke[ce],Fe=!0):le.isWebGL2&&U.samples>0&&y.useMultisampledRTT(U)===!1?me=F.get(U).__webglMultisampledFramebuffer:Array.isArray(Ke)?me=Ke[ge]:me=Ke,L.copy(U.viewport),q.copy(U.scissor),ae=U.scissorTest}else L.copy(ie).multiplyScalar($).floor(),q.copy(re).multiplyScalar($).floor(),ae=xe;if(J.bindFramebuffer(T.FRAMEBUFFER,me)&&le.drawBuffers&&ve&&J.drawBuffers(U,me),J.viewport(L),J.scissor(q),J.setScissorTest(ae),Fe){const Ye=F.get(U.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye.__webglTexture,ge)}else if(We){const Ye=F.get(U.texture),tt=ce||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ye.__webglTexture,ge||0,tt)}Q=-1},this.readRenderTargetPixels=function(U,ce,ge,ve,me,Fe,We){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=F.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e){J.bindFramebuffer(T.FRAMEBUFFER,$e);try{const Ye=U.texture,tt=Ye.format,Ke=Ye.type;if(tt!==Bn&&Se.convert(tt)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ke===Zs&&(te.has("EXT_color_buffer_half_float")||le.isWebGL2&&te.has("EXT_color_buffer_float"));if(Ke!==Hi&&Se.convert(Ke)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===Ii&&(le.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ce>=0&&ce<=U.width-ve&&ge>=0&&ge<=U.height-me&&T.readPixels(ce,ge,ve,me,Se.convert(tt),Se.convert(Ke),Fe)}finally{const Ye=R!==null?F.get(R).__webglFramebuffer:null;J.bindFramebuffer(T.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(U,ce,ge=0){const ve=Math.pow(2,-ge),me=Math.floor(ce.image.width*ve),Fe=Math.floor(ce.image.height*ve);y.setTexture2D(ce,0),T.copyTexSubImage2D(T.TEXTURE_2D,ge,0,0,U.x,U.y,me,Fe),J.unbindTexture()},this.copyTextureToTexture=function(U,ce,ge,ve=0){const me=ce.image.width,Fe=ce.image.height,We=Se.convert(ge.format),$e=Se.convert(ge.type);y.setTexture2D(ge,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,ge.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ge.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,ge.unpackAlignment),ce.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ve,U.x,U.y,me,Fe,We,$e,ce.image.data):ce.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ve,U.x,U.y,ce.mipmaps[0].width,ce.mipmaps[0].height,We,ce.mipmaps[0].data):T.texSubImage2D(T.TEXTURE_2D,ve,U.x,U.y,We,$e,ce.image),ve===0&&ge.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(U,ce,ge,ve,me=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=U.max.x-U.min.x+1,We=U.max.y-U.min.y+1,$e=U.max.z-U.min.z+1,Ye=Se.convert(ve.format),tt=Se.convert(ve.type);let Ke;if(ve.isData3DTexture)y.setTexture3D(ve,0),Ke=T.TEXTURE_3D;else if(ve.isDataArrayTexture||ve.isCompressedArrayTexture)y.setTexture2DArray(ve,0),Ke=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,ve.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ve.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,ve.unpackAlignment);const Ze=T.getParameter(T.UNPACK_ROW_LENGTH),Tt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),_n=T.getParameter(T.UNPACK_SKIP_PIXELS),Ut=T.getParameter(T.UNPACK_SKIP_ROWS),si=T.getParameter(T.UNPACK_SKIP_IMAGES),xt=ge.isCompressedTexture?ge.mipmaps[me]:ge.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,xt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,xt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,U.min.x),T.pixelStorei(T.UNPACK_SKIP_ROWS,U.min.y),T.pixelStorei(T.UNPACK_SKIP_IMAGES,U.min.z),ge.isDataTexture||ge.isData3DTexture?T.texSubImage3D(Ke,me,ce.x,ce.y,ce.z,Fe,We,$e,Ye,tt,xt.data):ge.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),T.compressedTexSubImage3D(Ke,me,ce.x,ce.y,ce.z,Fe,We,$e,Ye,xt.data)):T.texSubImage3D(Ke,me,ce.x,ce.y,ce.z,Fe,We,$e,Ye,tt,xt),T.pixelStorei(T.UNPACK_ROW_LENGTH,Ze),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Tt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,_n),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ut),T.pixelStorei(T.UNPACK_SKIP_IMAGES,si),me===0&&ve.generateMipmaps&&T.generateMipmap(Ke),J.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?y.setTextureCube(U,0):U.isData3DTexture?y.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?y.setTexture2DArray(U,0):y.setTexture2D(U,0),J.unbindTexture()},this.resetState=function(){D=0,P=0,R=null,J.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gc?"display-p3":"srgb",n.unpackColorSpace=dt.workingColorSpace===Na?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?vr:yp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vr?Ht:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class YE extends Wp{}YE.prototype.isWebGL1Renderer=!0;class Xp extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Rd extends kt{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zr=new bt,Cd=new bt,ko=[],Ld=new Mr,jE=new bt,Ms=new Vt,Ss=new ls;class zl extends Vt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Rd(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,jE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Mr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,zr),Ld.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Ld)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,zr),Ss.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Ss)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(i),e.ray.intersectsSphere(Ss)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,zr),Cd.multiplyMatrices(i,zr),Ms.matrixWorld=Cd,Ms.raycast(e,ko);for(let o=0,a=ko.length;o<a;o++){const l=ko[o];l.instanceId=s,l.object=this,n.push(l)}ko.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Rd(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class KE extends lo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pd=new bt,pc=new Ap,Wo=new ls,Xo=new ee;class $p extends mn{constructor(e=new Ln,n=new KE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,e.ray.intersectsSphere(Wo)===!1)return;Pd.copy(r).invert(),pc.copy(e.ray).applyMatrix4(Pd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let v=h,_=d;v<_;v++){const g=u.getX(v);Xo.fromBufferAttribute(f,g),Dd(Xo,g,l,r,e,n,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let v=h,_=d;v<_;v++)Xo.fromBufferAttribute(f,v),Dd(Xo,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Dd(t,e,n,i,r,s,o){const a=pc.distanceSqToPoint(t);if(a<n){const l=new ee;pc.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class kc extends Ln{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Sn(s,3)),this.setAttribute("normal",new Sn(s.slice(),3)),this.setAttribute("uv",new Sn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new ee,E=new ee,D=new ee;for(let P=0;P<n.length;P+=3)d(n[P+0],x),d(n[P+1],E),d(n[P+2],D),l(x,E,D,M)}function l(M,x,E,D){const P=D+1,R=[];for(let Q=0;Q<=P;Q++){R[Q]=[];const A=M.clone().lerp(E,Q/P),L=x.clone().lerp(E,Q/P),q=P-Q;for(let ae=0;ae<=q;ae++)ae===0&&Q===P?R[Q][ae]=A:R[Q][ae]=A.clone().lerp(L,ae/q)}for(let Q=0;Q<P;Q++)for(let A=0;A<2*(P-Q)-1;A++){const L=Math.floor(A/2);A%2===0?(h(R[Q][L+1]),h(R[Q+1][L]),h(R[Q][L])):(h(R[Q][L+1]),h(R[Q+1][L+1]),h(R[Q+1][L]))}}function u(M){const x=new ee;for(let E=0;E<s.length;E+=3)x.x=s[E+0],x.y=s[E+1],x.z=s[E+2],x.normalize().multiplyScalar(M),s[E+0]=x.x,s[E+1]=x.y,s[E+2]=x.z}function c(){const M=new ee;for(let x=0;x<s.length;x+=3){M.x=s[x+0],M.y=s[x+1],M.z=s[x+2];const E=g(M)/2/Math.PI+.5,D=p(M)/Math.PI+.5;o.push(E,1-D)}v(),f()}function f(){for(let M=0;M<o.length;M+=6){const x=o[M+0],E=o[M+2],D=o[M+4],P=Math.max(x,E,D),R=Math.min(x,E,D);P>.9&&R<.1&&(x<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),D<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function d(M,x){const E=M*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function v(){const M=new ee,x=new ee,E=new ee,D=new ee,P=new st,R=new st,Q=new st;for(let A=0,L=0;A<s.length;A+=9,L+=6){M.set(s[A+0],s[A+1],s[A+2]),x.set(s[A+3],s[A+4],s[A+5]),E.set(s[A+6],s[A+7],s[A+8]),P.set(o[L+0],o[L+1]),R.set(o[L+2],o[L+3]),Q.set(o[L+4],o[L+5]),D.copy(M).add(x).add(E).divideScalar(3);const q=g(D);_(P,L+0,M,q),_(R,L+2,x,q),_(Q,L+4,E,q)}}function _(M,x,E,D){D<0&&M.x===1&&(o[x]=M.x-1),E.x===0&&E.z===0&&(o[x]=D/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.vertices,e.indices,e.radius,e.details)}}class Wc extends kc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Wc(e.radius,e.detail)}}class xa extends Ln{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new ee,h=new ee,d=[],v=[],_=[],g=[];for(let p=0;p<=i;p++){const M=[],x=p/i;let E=0;p===0&&o===0?E=.5/n:p===i&&l===Math.PI&&(E=-.5/n);for(let D=0;D<=n;D++){const P=D/n;f.x=-e*Math.cos(r+P*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+P*s)*Math.sin(o+x*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),g.push(P+E,1-x),M.push(u++)}c.push(M)}for(let p=0;p<i;p++)for(let M=0;M<n;M++){const x=c[p][M+1],E=c[p][M],D=c[p+1][M],P=c[p+1][M+1];(p!==0||o>0)&&d.push(x,E,P),(p!==i-1||l<Math.PI)&&d.push(E,D,P)}this.setIndex(d),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Id={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class ZE{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const d=u[f],v=u[f+1];if(d.global&&(d.lastIndex=0),d.test(c))return v}return null}}}const JE=new ZE;class Xc{constructor(e){this.manager=e!==void 0?e:JE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xc.DEFAULT_MATERIAL_NAME="__DEFAULT";class QE extends Xc{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Id.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Js("img");function l(){c(),Id.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class eb extends Xc{constructor(e){super(e)}load(e,n,i,r){const s=new pn,o=new QE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class tb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ud(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Ud();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ud(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);dt.enabled=!1;const Qs=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<600,Ui=Math.min(window.devicePixelRatio||1,Qs?1.6:2);function nb(t){const e=new Wp({canvas:t,antialias:!1,powerPreference:"high-performance"});return e.outputColorSpace=ri,e.setPixelRatio(Ui),e.setClearColor(460811,1),e}function ib(){return{uLight:{value:new ee(-.62,.5,.38).normalize()},uDot:{value:Math.max(3.4,4.2*Ui)},uTime:{value:0}}}function rb(t){return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const qp=t=>t-Math.floor(t),$o=(t,e)=>qp(Math.sin(t*127.1+e*311.7)*43758.5453),wi=(t,e,n)=>qp(Math.sin(t*127.1+e*311.7+n*74.7)*43758.5453),Hs=t=>t*t*(3-2*t);function mc(t,e){const n=Math.floor(t),i=Math.floor(e),r=Hs(t-n),s=Hs(e-i),o=$o(n,i),a=$o(n+1,i),l=$o(n,i+1),u=$o(n+1,i+1);return(o+(a-o)*r+(l-o)*s+(o-a-l+u)*r*s)*2-1}function Hl(t,e,n){const i=Math.floor(t),r=Math.floor(e),s=Math.floor(n),o=Hs(t-i),a=Hs(e-r),l=Hs(n-s),u=(h,d,v)=>h+(d-h)*v,c=u(u(wi(i,r,s),wi(i+1,r,s),o),u(wi(i,r+1,s),wi(i+1,r+1,s),o),a),f=u(u(wi(i,r,s+1),wi(i+1,r,s+1),o),u(wi(i,r+1,s+1),wi(i+1,r+1,s+1),o),a);return u(c,f,l)*2-1}function Gl(t,e,n=5){let i=0,r=.5,s=1;for(let o=0;o<n;o++)i+=r*mc(t*s,e*s),s*=2.03,r*=.5;return i}const or=(t,e,n)=>{const i=Math.min(1,Math.max(0,(n-t)/(e-t)));return i*i*(3-2*i)},Gn=new ee(0,1.5,0),Yp=62,Nd=80,jp=8.9,Od=8.4;function sb(){return{camera:new An(Yp,Fi,.1,8e3),pitch:jp*Math.PI/180,safe:{w:1,h:1},size:{w:1,h:1},blend:1}}function ob(t,e,n){const{camera:i}=t,r=e/n;t.size.w=e,t.size.h=n,i.aspect=r,r>=Fi?(t.safe.w=n*Fi,t.safe.h=n,t.blend=1):(t.safe.w=e,t.safe.h=n,t.blend=or(.46,Fi,r)),i.fov=Nd+(Yp-Nd)*t.blend,t.pitch=(Od+(jp-Od)*t.blend)*Math.PI/180,i.updateProjectionMatrix()}function Kp(t){t.camera.position.copy(Gn),t.camera.rotation.set(t.pitch,0,0,"YXZ"),t.camera.updateMatrixWorld()}function Zp(t,e,n){const i=t.safe.w/t.size.w,r=t.safe.h/t.size.h;return new ee((e*2-1)*i,(1-n*2)*r,.5).unproject(t.camera).sub(Gn).normalize()}function Jp(t,e){const{camera:n}=t;return e*Math.tan(n.fov*Math.PI/360)*n.aspect*(t.safe.w/t.size.w)}function ab(t){const e={mx:0,my:0,sx:0,sy:0,yaw:0,yawT:0,pit:0,pitT:0};let n=!1,i=0,r=0;const s=l=>{n=!0,i=l.clientX,r=l.clientY,t.classList.add("drag"),t.setPointerCapture(l.pointerId)},o=l=>{n=!1,t.classList.remove("drag"),e.yawT=0,e.pitT=0,l&&l.pointerType!=="mouse"&&(e.mx=0,e.my=0)},a=l=>{e.mx=l.clientX/innerWidth*2-1,e.my=l.clientY/innerHeight*2-1,n&&(e.yawT=Math.max(-.14,Math.min(.14,e.yawT-(l.clientX-i)*.0012)),e.pitT=Math.max(-.05,Math.min(.06,e.pitT+(l.clientY-r)*6e-4)),i=l.clientX,r=l.clientY)};return t.addEventListener("pointerdown",s),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),addEventListener("pointermove",a),{state:e,update(l){const u=1-Math.exp(-l*3);e.sx+=(e.mx-e.sx)*u,e.sy+=(e.my-e.sy)*u;const c=1-Math.exp(-l*(n?8:2));e.yaw+=(e.yawT-e.yaw)*c,e.pit+=(e.pitT-e.pit)*c},dispose(){t.removeEventListener("pointerdown",s),t.removeEventListener("pointerup",o),t.removeEventListener("pointercancel",o),removeEventListener("pointermove",a)}}}const lb="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",cb=`uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uTime; varying vec2 vUv;
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
    }`;function ub(t){const e=new Wi(2,2,{samples:Qs?2:4}),n=new Xp,i=new Fp(-1,1,1,-1,0,1),r=new Bt({uniforms:{tDiffuse:{value:e.texture},uRes:{value:new st(1,1)},uTime:t.uTime},vertexShader:lb,fragmentShader:cb,depthTest:!1,depthWrite:!1});return n.add(new Vt(new $i(2,2),r)),{setSize(s,o){e.setSize(Math.floor(s*Ui),Math.floor(o*Ui)),r.uniforms.uRes.value.set(s*Ui,o*Ui)},render(s,o,a){s.setRenderTarget(e),s.render(o,a),s.setRenderTarget(null),s.render(n,i)},dispose(){e.dispose(),r.dispose()}}}const us=`
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
`,Qp=`
varying vec3 vN; varying vec3 vW; varying vec3 vL;
void main(){
  vec4 lp = vec4(position, 1.0); vec3 n = normal;
  #ifdef USE_INSTANCING
    lp = instanceMatrix * lp; n = mat3(instanceMatrix) * n;
  #endif
  vec4 wp = modelMatrix * lp;
  vW = wp.xyz; vL = position; vN = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,fb=`varying vec2 vUv; varying vec3 vW;
    void main(){ vUv = uv; vec4 lp = vec4(position,1.0);
      #ifdef USE_INSTANCING
        lp = instanceMatrix * lp;
      #endif
      vec4 wp = modelMatrix * lp; vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,db=us+`
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
    }`;function hb(t){const e=new st(-t.uLight.value.x,-t.uLight.value.z).normalize(),n=new $i(1,1);n.rotateX(-Math.PI/2);const i=new Bt({uniforms:Object.assign({},t,{uCol:{value:new et(1317410)}}),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,vertexShader:fb,fragmentShader:db});return{dir:e,geometry:n,material:i}}const pb=us+`
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
      }`;function gc(t,e){const n=Math.hypot(t,e);let i=Gl(t*.02,e*.02,4)*.9+Gl(t*.11+7,e*.11-3,3)*.12;i*=or(2,40,n)*.9+.1;const r=or(150,230,-e),s=.72+.28*or(-160,220,t),o=Math.pow(1-Math.abs(mc(t*.016+3.1,e*.016)),3),a=Math.pow(1-Math.abs(mc(t*.045-2,e*.045+5)),2);return i+=r*s*(o*21+a*6+Gl(t*.03,e*.03,4)*4),i+=or(120,175,-e)*(1-or(175,215,-e))*or(40,150,t)*(Math.pow(a,1.5)*9+2),i}function mb(t){const e=Qs?300:420,n=Qs?260:360,i=new $i(2,1,e,n);i.rotateX(-Math.PI/2);const r=i.attributes.position;for(let o=0;o<r.count;o++){const a=r.getX(o),l=r.getZ(o)+.5,u=Math.sign(a)*Math.pow(Math.abs(a),1.7)*520,c=12-Math.pow(1-l,1.8)*330;r.setXYZ(o,u,gc(u,c),c)}i.computeVertexNormals();const s=new Bt({uniforms:Object.assign({},t,{uNear:{value:new et(13616557)},uFar:{value:new et(14538435)},uShadeN:{value:new et(1778220)},uShadeF:{value:new et(7305863)},uSnow:{value:new et(15986402)},uHaze:{value:new et(14867920)}}),vertexShader:Qp,fragmentShader:pb});return new Vt(i,s)}const gb=us+`
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
      }`,_b=`
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
      }`,vb="void main(){ gl_FragColor = vec4(0.05, 0.055, 0.07, 1.0); }";function Fd(t){return new Bt({uniforms:{uThick:{value:t}},side:Qt,vertexShader:_b,fragmentShader:vb})}function xb(t){const e=t.index?t.toNonIndexed():t.clone(),n=e.attributes.position,i=new Map,r=u=>`${Math.round(n.getX(u)*1e3)}_${Math.round(n.getY(u)*1e3)}_${Math.round(n.getZ(u)*1e3)}`,s=new ee,o=new ee,a=new ee;for(let u=0;u<n.count;u+=3){s.fromBufferAttribute(n,u),o.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2);const c=o.clone().sub(s).cross(a.clone().sub(s));for(let f=0;f<3;f++){const h=r(u+f);i.has(h)||i.set(h,new ee),i.get(h).add(c)}}const l=new Float32Array(n.count*3);for(let u=0;u<n.count;u++){const c=i.get(r(u)).clone().normalize();l.set([c.x,c.y,c.z],u*3)}return e.setAttribute("normal",new kt(l,3)),e}const yb=[[-1.6,-4.5,.9,0],[-2.75,-6.3,.62,1],[-.55,-4.05,.3,2],[-3.7,-8.8,.55,3],[2.5,-4.15,.55,1],[1.15,-3.85,.26,2],[4.4,-11.5,.7,0],[-5.2,-15.5,.95,2],[7.5,-24,1.05,3],[-9.5,-30,1.25,1],[-1.8,-11,.32,3],[3.4,-17,.4,0],[-6.8,-10.5,.45,1],[10,-38,1.4,2],[-15,-48,1.6,0],[-6.2,-5.2,1,3],[-8.8,-7.5,.7,0],[-12,-13,1.3,2],[-19,-22,1.6,1],[-28,-40,2.2,3],[6.8,-5,.9,2],[9.5,-8.5,.65,3],[13,-14,1.2,0],[21,-26,1.7,1],[30,-44,2.3,2],[5.6,-3.6,.38,1],[-4.8,-3.5,.42,0]];function Bd(t,e,n=.55){const i=new Wc(1,t),r=i.attributes.position,s=new ee;for(let o=0;o<r.count;o++){s.fromBufferAttribute(r,o);const a=e*13.7;let l=1+.32*Hl(s.x*1.2+a,s.y*1.2,s.z*1.2-a)+.14*Hl(s.x*2.9,s.y*2.9+a,s.z*2.9)+.05*Hl(s.x*7-a,s.y*7,s.z*7);l=l*.82+Math.round(l*4)/4*.18,s.multiplyScalar(l),s.y*=n,s.y<-.18&&(s.y=-.18+(s.y+.18)*.25),r.setXYZ(o,s.x,s.y,s.z)}return i.computeVertexNormals(),i}function zd(t){return new Bt({uniforms:Object.assign({},t,{uBase:{value:new et(15130056)},uShade:{value:new et(1581097)},uFar:{value:new et(14538435)}}),vertexShader:Qp,fragmentShader:gb})}function Mb({uniforms:t,rand:e,shadow:n}){const i=new fr,r=yb.map(_=>({x:_[0],z:_[1],s:_[2],v:_[3],big:!0}));let s=0;for(;r.length<(Qs?1300:2100)&&s++<3e4;){const _=-4-Math.pow(e(),.9)*260,g=(e()*2-1)*(Math.abs(_)*1.25+7);if(_>-8&&_<-3.5&&g>-1.3&&g<3.4)continue;const p=(.05+Math.pow(e(),3.4)*.5)*(1+Math.abs(_)/90);r.push({x:g,z:_,s:p,v:Math.floor(e()*4),big:!1})}const o=new bt,a=new as,l=new ao;function u(_){l.set((e()-.5)*.25,e()*6.28,(e()-.5)*.25),a.setFromEuler(l);const g=new ee(_.s*(1+e()*.45),_.s*(.75+e()*.4),_.s*(.85+e()*.4));return o.clone().compose(new ee(_.x,gc(_.x,_.z)-_.s*.1,_.z),a,g)}function c(_,g,p,M){const x=new zl(_,g,M.length),E=new zl(xb(_),p,M.length);M.forEach((D,P)=>{const R=u(D);x.setMatrixAt(P,R),E.setMatrixAt(P,R)}),i.add(x,E)}const f=zd(t),h=Fd(.0021);[0,1,2,3].map(_=>Bd(3,_+1,.58)).forEach((_,g)=>{const p=r.filter(M=>M.big&&M.v===g);p.length&&c(_,f,h,p)}),c(Bd(1,7,.5),zd(t),Fd(.0015),r.filter(_=>!_.big));const d=new zl(n.geometry,n.material,r.length),v=Math.atan2(n.dir.x,n.dir.y);return r.forEach((_,g)=>{const p=_.s*2.9,M=_.s*1.75,x=_.x+n.dir.x*_.s*.75,E=_.z+n.dir.y*_.s*.75;a.setFromAxisAngle(new ee(0,1,0),v),d.setMatrixAt(g,o.clone().compose(new ee(x,gc(x,E)+.02,E),a,new ee(M,1,p)))}),i.add(d),i}const Sb=`
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
`,Eb=`varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying vec3 vP;
    void main(){ vUv = uv; vP = normalize(position); vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * wp; }`,bb=us+Sb+`
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
    }`,Tb="varying vec3 vNV; varying vec3 vNW; void main(){ vNV = normalize(normalMatrix * normal); vNW = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",Ab=`uniform vec3 uLe; varying vec3 vNV; varying vec3 vNW;
    void main(){ float i = pow(clamp(0.66 - dot(vNV, vec3(0.0,0.0,1.0)), 0.0, 1.0), 5.0) * 7.0;
      i *= smoothstep(-0.25, 0.5, dot(-vNW, uLe));
      gl_FragColor = vec4(vec3(0.16, 0.52, 0.98) * i, 1.0); }`,em=1100,wb=19.6*Math.PI/180,Hd=27.2*Math.PI/180,Gd=em*Math.sin(wb),Vd=22*Math.PI/180;function Rb({uniforms:t,textures:e}){const n=Gn.clone().add(new ee(.012,Math.sin(Hd),-Math.cos(Hd)).normalize().multiplyScalar(em)),r={value:Gn.clone().sub(n).normalize().clone().applyAxisAngle(new ee(1,0,0),.8).applyAxisAngle(new ee(0,1,0),-.12).normalize()},s=new Vt(new xa(Gd,256,160),new Bt({uniforms:Object.assign({},t,{uLe:r,tBRC:{value:e.brc},tDay:{value:e.day},uTex:{value:new st(1/4096,1/2048)}}),vertexShader:Eb,fragmentShader:bb}));s.position.copy(n),s.rotation.set(.08,-Math.PI/2-Vd,.12),s.visible=!1;const o=new Vt(new xa(Gd*1.025,120,80),new Bt({uniforms:{uLe:r},side:Qt,transparent:!0,blending:ha,depthWrite:!1,vertexShader:Tb,fragmentShader:Ab}));return o.visible=!1,o.position.copy(n),{earth:s,atmosphere:o,show(){s.visible=o.visible=!0},update(a){s.rotation.y=-Math.PI/2-Vd+a*.0012}}}const Cb=`attribute float aS; attribute float aP; uniform float uTime; uniform float uDPR; varying float vA;
      void main(){ vA = 0.6 + 0.4 * sin(uTime * (0.7 + aP * 0.3) + aP * 10.0); gl_PointSize = aS * uDPR; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Lb="varying float vA; void main(){ if (length(gl_PointCoord - 0.5) > 0.5) discard; gl_FragColor = vec4(vec3(0.95, 0.93, 0.86) * vA, 1.0); }",Pb=`attribute float aS; uniform float uTime; uniform float uDPR; varying float vA;
      void main(){ vec3 p = position; p.x = mod(p.x + uTime * 0.12 * (0.3 + aS) + 8.0, 16.0) - 8.0; p.y += sin(uTime * 0.3 + aS * 30.0) * 0.15;
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = 0.18 + 0.3 * aS; gl_PointSize = (1.2 + aS * 2.0) * uDPR * (6.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,Db="varying float vA; void main(){ if (length(gl_PointCoord - 0.5) > 0.5) discard; gl_FragColor = vec4(vec3(0.95, 0.9, 0.78) * vA, 1.0); }";function Ib({uniforms:t,rand:e}){const i=new Float32Array(24e3),r=new Float32Array(8e3),s=new Float32Array(8e3);for(let a=0;a<8e3;a++){const l=(e()-.5)*3.4,u=.02+e()*.9,c=Math.sqrt(1-u*u);i.set([Math.sin(l)*c*3e3,u*3e3,-Math.cos(l)*c*3e3],a*3),r[a]=Math.pow(e(),7)*2.6+.7,s[a]=e()*6.28}const o=new Ln;return o.setAttribute("position",new kt(i,3)),o.setAttribute("aS",new kt(r,1)),o.setAttribute("aP",new kt(s,1)),new $p(o,new Bt({uniforms:{uTime:t.uTime,uDPR:{value:Ui}},transparent:!0,depthWrite:!1,vertexShader:Cb,fragmentShader:Lb}))}function Ub({uniforms:t,rand:e}){const i=new Float32Array(780),r=new Float32Array(260);for(let o=0;o<260;o++)i.set([(e()-.5)*16,e()*3.2,-3-e()*22],o*3),r[o]=e();const s=new Ln;return s.setAttribute("position",new kt(i,3)),s.setAttribute("aS",new kt(r,1)),new $p(s,new Bt({uniforms:{uTime:t.uTime,uDPR:{value:Ui}},transparent:!0,depthWrite:!1,blending:ha,vertexShader:Pb,fragmentShader:Db}))}const tm="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Nb=us+`uniform sampler2D map; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(map, vUv);
        if (c.a < 0.04) discard;
        float lum = dot(c.rgb, vec3(0.3, 0.59, 0.11));
        float ink = halftone(smoothstep(0.55, 0.12, lum) * 0.5, uDot, 0.7854);
        c.rgb = mix(c.rgb, c.rgb * 0.55, ink * 0.35);
        gl_FragColor = vec4(c.rgb, c.a);
      }`,Ob=us+`uniform sampler2D map; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(map, vUv);
        if (c.a < 0.03) discard;
        float lum = dot(c.rgb, vec3(0.3, 0.59, 0.11));
        float ink = halftone(smoothstep(0.55, 0.1, lum) * 0.5, uDot * 0.8, 0.7854);
        c.rgb = mix(c.rgb, c.rgb * 0.55, ink * 0.3);
        gl_FragColor = vec4(c.rgb, c.a);
      }`,Fb=740/417,Bb=6/417,kd={cx:.615,bottom:.885,width:.79},Wd={cx:.5,bottom:.84,width:.9};function zb({uniforms:t,shadow:e}){const n=new fr,i=new Vt(e.geometry,e.material.clone());i.material.uniforms=Object.assign({},e.material.uniforms,{uCol:{value:new et(1053722)}});const r={w:1,h:1};let s=null;return{card:n,shadow:i,place(o){Kp(o);const a=o.blend,l={};for(const _ of["cx","bottom","width"])l[_]=a===1?kd[_]:Wd[_]+(kd[_]-Wd[_])*a;const u=Zp(o,l.cx,l.bottom),c=Gn.clone().addScaledVector(u,-Gn.y/u.y),f=l.width*2*Jp(o,-c.z),h=f/Fb;r.w=f,r.h=h,n.position.set(c.x,-h*Bb,c.z),s&&s.scale.set(f,h,1);const d=new st(-.56,-.83).normalize(),v=new st(c.x,c.z).addScaledVector(d,f*.2).addScaledVector(e.dir,f*.07);i.position.set(v.x,.03,v.y),i.rotation.y=Math.atan2(d.x,d.y),i.scale.set(f*.5,1,f*.92)},setTexture(o){s=new Vt(new $i(1,1).translate(0,.5,0),new Bt({uniforms:Object.assign({},t,{map:{value:o}}),transparent:!0,vertexShader:tm,fragmentShader:Nb})),s.renderOrder=2,s.scale.set(r.w,r.h,1),n.add(s)},faceCamera(o){n.rotation.y=Math.atan2(o.position.x-n.position.x,o.position.z-n.position.z)}}}const qo={poster:{x:.855,y:.35,w:.13},phone:{x:.83,y:.41,w:.18}},Hb=380,Gb=[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]];function Vb({uniforms:t}){const e=new fr,n=new ee,i=new ee,r=new ee,s={x0:0,y0:0,x1:0,y1:0};let o=null,a=1300/656,l=1;return{root:e,get loaded(){return!!o},place(u){Kp(u);const c=u.blend,f={};for(const v of["x","y","w"])f[v]=c===1?qo.poster[v]:qo.phone[v]+(qo.poster[v]-qo.phone[v])*c;n.copy(Gn).addScaledVector(Zp(u,f.x,f.y),Hb);const h=new ee(0,0,-1).applyQuaternion(u.camera.quaternion),d=n.clone().sub(Gn).dot(h);l=f.w*2*Jp(u,d),o&&o.scale.set(l,l/a,1)},setTexture(u){a=u.image.width/u.image.height,o=new Vt(new $i(1,1),new Bt({uniforms:Object.assign({},t,{map:{value:u}}),transparent:!0,depthWrite:!1,vertexShader:tm,fragmentShader:Ob})),o.renderOrder=3,o.scale.set(l,l/a,1),e.add(o)},update(u,c){o&&(o.position.copy(n).add(i.set(Math.sin(u*.05)*l*.12,Math.sin(u*.09+1)*l*.05,0)),o.quaternion.copy(c.quaternion),o.rotateZ(Math.sin(u*.07)*.035))},screenRect(u){if(!o)return null;u.camera.updateMatrixWorld(),o.updateMatrixWorld(),s.x0=s.y0=1e9,s.x1=s.y1=-1e9;for(const[c,f]of Gb){const h=r.set(c,f,0).applyMatrix4(o.matrixWorld).project(u.camera),d=(h.x+1)/2*u.size.w,v=(1-h.y)/2*u.size.h;s.x0=Math.min(s.x0,d),s.x1=Math.max(s.x1,d),s.y0=Math.min(s.y0,v),s.y1=Math.max(s.y1,v)}return s}}}const kb=""+new URL("earth_brc-BBkBGQvf.jpg",import.meta.url).href,Wb=""+new URL("earth_day-DkcerPt2.jpg",import.meta.url).href,Xb=""+new URL("car-rvOrZ8Ot.png",import.meta.url).href,$b=""+new URL("satellite-C2RYf-lH.webp",import.meta.url).href,qb=new ee(0,1,0);function Yb(t,{onReady:e,onFrame:n,wantSatRect:i}={}){const r=nb(t),s=ib(),o=rb(743),a=new Xp,l=sb(),{camera:u}=l,c=new eb,f=r.capabilities.getMaxAnisotropy();let h=0,d=!1;const v=()=>{++h>=3&&!d&&(p.show(),e==null||e())},_=V=>c.load(V,I=>{I.anisotropy=f,v()},void 0,v),g=hb(s);a.add(mb(s)),a.add(Mb({uniforms:s,rand:o,shadow:g}));const p=Rb({uniforms:s,textures:{brc:_(kb),day:_(Wb)}});a.add(p.earth,p.atmosphere),a.add(Ib({uniforms:s,rand:o})),a.add(Ub({uniforms:s,rand:o}));const M=zb({uniforms:s,shadow:g});a.add(M.card,M.shadow),c.load(Xb,V=>{V.anisotropy=f,V.minFilter=xr,M.setTexture(V),v()},void 0,v);const x=Vb({uniforms:s});a.add(x.root),c.load($b,V=>{V.anisotropy=f,V.minFilter=xr,x.setTexture(V)});const E=ub(s),D=ab(t),P=D.state;function R(V,I){ob(l,V,I),M.place(l),x.place(l),r.setSize(V,I,!1),E.setSize(V,I)}const Q=new tb,A={sx:0,sy:0,satRect:null};let L=0,q=!0;function ae(){L=requestAnimationFrame(ae);const V=Math.min(Q.getDelta(),.05),I=Q.elapsedTime;s.uTime.value=I,D.update(V),u.position.set(Gn.x+P.sx*.32+Math.sin(I*.23)*.04,Gn.y-P.sy*.12+Math.sin(I*.31)*.02,Gn.z),u.position.applyAxisAngle(qb,P.yaw*.6),u.rotation.set(l.pitch+P.pit-P.sy*.006,P.yaw-P.sx*.012,0,"YXZ"),x.update(I,u),M.faceCamera(u),p.update(I),A.sx=P.sx,A.sy=P.sy,A.satRect=x.loaded&&(i!=null&&i())?x.screenRect(l):null,n==null||n(A),q&&E.render(r,a,u)}return{resize:R,start(){L||ae()},setVisible(V){q=V},dispose(){d=!0,cancelAnimationFrame(L),L=0,D.dispose(),a.traverse(V=>{var I,G;if((I=V.geometry)==null||I.dispose(),V.material){for(const B of Object.values(V.material.uniforms??{}))(G=B.value)!=null&&G.isTexture&&B.value.dispose();V.material.dispose()}}),E.dispose(),r.dispose()}}}const jb={class:"credit"},Kb=["href"],Zb={key:0,id:"err"},Jb={__name:"MoonStage",setup(t){const{aboutOpen:e,setAbout:n}=ss(),i=fn(null),r=fn(null),s=fn(null),o=fn(null),a=fn(!1),l=fn(!1);let u=null,c=null,f=0,h=null;function d(){X_();const v=Math.max(1,i.value.clientWidth),_=Math.max(1,i.value.clientHeight);$_(v,_),u==null||u.resize(v,_),!da.side&&e.value&&n(!1)}return io(()=>{h=q_();try{u=Yb(r.value,{onReady:()=>{a.value=!0},wantSatRect:()=>da.hoverable,onFrame:({sx:v,sy:_,satRect:g})=>{var p,M;(p=s.value)==null||p.setParallax(v,_),g&&((M=o.value)==null||M.update(g))}})}catch(v){l.value=!0,console.error(v)}addEventListener("resize",d),d(),u==null||u.start(),c=new IntersectionObserver(([v])=>u==null?void 0:u.setVisible(v.isIntersecting)),c.observe(i.value),f=setTimeout(()=>{a.value=!0},4e3)}),Ca(()=>{removeEventListener("resize",d),clearTimeout(f),c==null||c.disconnect(),h==null||h(),u==null||u.dispose()}),(v,_)=>(St(),At("div",{id:"stage",ref_key:"stageEl",ref:i},[Ue("canvas",{id:"gl",ref_key:"canvasEl",ref:r},null,512),Ot(m0,{ref_key:"heroRef",ref:s},null,512),Ot(G0),Ue("div",jb,[Kt(at(je(yn).credit.label)+" ",1),Ue("a",{href:je(yn).credit.url},at(je(yn).credit.name),9,Kb),Kt(" "+at(je(yn).credit.license),1)]),Ue("div",{id:"veil",class:to({lifted:a.value})},null,2),l.value?(St(),At("div",Zb,"這個瀏覽器無法啟用 WebGL，3D 場景無法顯示。")):Yh("",!0),Ot(x0,{ref_key:"lockRef",ref:o},null,512),Ot(E0)],512))}},Qb=Xi(Jb,[["__scopeId","data-v-3b30bbdb"]]),Xd=""+new URL("shop-map-Dh3NVWj1.webp",import.meta.url).href,eT={class:"ab-inner"},tT={id:"ab-title",class:"ab-name"},nT={class:"ab-sub"},iT={class:"ab-text"},rT={class:"ab-lead"},sT={class:"ab-points"},oT={class:"ab-card"},aT={class:"ab-info"},lT={class:"ab-map"},cT=["src","alt"],uT={__name:"AboutPanel",setup(t){const{els:e,closeAbout:n,openLightbox:i}=ss(),r=o=>String(o).padStart(2,"0");function s(o){i({src:Xd,alt:on.map.alt,caption:`<b>MAP</b>${on.map.caption}`,triggerEl:o.currentTarget})}return(o,a)=>(St(),At("aside",{id:"about",ref:l=>je(e).about=l,"aria-labelledby":"ab-title"},[Ue("button",{ref:l=>je(e).aboutClose=l,type:"button",class:"ab-close","aria-label":"本店紹介を閉じる",onClick:a[0]||(a[0]=(...l)=>je(n)&&je(n)(...l))},"× CLOSE",512),Ue("div",eT,[a[4]||(a[4]=Ue("div",{class:"ab-kicker"},[Ue("span",null,"ABOUT THE SHOP"),Ue("span",null,"本店紹介")],-1)),Ue("h2",tT,[Kt(at(je(on).name),1),a[1]||(a[1]=Ue("b",null,".",-1))]),Ue("div",nT,[Kt(at(je(on).nameEn)+" — ",1),Ue("em",null,at(je(on).established),1)]),Ue("div",iT,[Ue("p",rT,at(je(on).lead),1),Ue("p",null,at(je(on).description),1),Ue("ol",sT,[(St(!0),At(Ct,null,Xs(je(on).points,(l,u)=>(St(),At("li",{key:u},[Ue("span",null,at(r(u+1)),1),Kt(at(l),1)]))),128))])]),Ue("div",oT,[Ue("dl",aT,[(St(!0),At(Ct,null,Xs(je(on).info,l=>(St(),At(Ct,{key:l.label},[Ue("dt",null,at(l.label),1),Ue("dd",null,at(l.value),1)],64))),128))]),Ue("figure",lT,[Ue("button",{type:"button",class:"ab-zoom","aria-label":"地図を拡大",onClick:s},[Ue("img",{src:je(Xd),alt:je(on).map.alt,loading:"lazy",width:"1500",height:"778"},null,8,cT),a[2]||(a[2]=Ue("span",null,"拡大 ⤢",-1))]),Ue("figcaption",null,[a[3]||(a[3]=Ue("b",null,"MAP",-1)),Kt(" "+at(je(on).map.caption),1)])])])])],512))}},fT=Xi(uT,[["__scopeId","data-v-a9533f27"]]);function dT(){const{menuOpen:t,aboutOpen:e,lightboxOpen:n,els:i,setMenu:r,closeAbout:s}=ss();function o(a){if(!n.value){if(a.key==="Escape"){t.value?r(!1):e.value&&s();return}if(a.key==="Tab"&&t.value&&i.menu){const l=[i.menuBtn,...i.menu.querySelectorAll("a")],u=l.indexOf(document.activeElement);a.shiftKey&&u<=0?(a.preventDefault(),l[l.length-1].focus()):!a.shiftKey&&u===l.length-1&&(a.preventDefault(),l[0].focus())}}}io(()=>addEventListener("keydown",o)),Ca(()=>removeEventListener("keydown",o))}const hT={__name:"App",setup(t){return dT(),(e,n)=>(St(),At(Ct,null,[Ot(o0),Ot(Qb),Ot(fT)],64))}};R_(hT).mount("#app");

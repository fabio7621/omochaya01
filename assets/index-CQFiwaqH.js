(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const gt={},fr=[],Qn=()=>{},th=()=>!1,ba=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ta=t=>t.startsWith("onUpdate:"),Ft=Object.assign,Tc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hm=Object.prototype.hasOwnProperty,lt=(t,e)=>hm.call(t,e),Ye=Array.isArray,Fi=t=>no(t)==="[object Map]",sa=t=>no(t)==="[object Set]",tu=t=>no(t)==="[object Date]",Je=t=>typeof t=="function",bt=t=>typeof t=="string",ei=t=>typeof t=="symbol",ht=t=>t!==null&&typeof t=="object",nh=t=>(ht(t)||Je(t))&&Je(t.then)&&Je(t.catch),ih=Object.prototype.toString,no=t=>ih.call(t),pm=t=>no(t).slice(8,-1),rh=t=>no(t)==="[object Object]",Ac=t=>bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ls=bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},mm=/-\w/g,zn=Aa(t=>t.replace(mm,e=>e.slice(1).toUpperCase())),gm=/\B([A-Z])/g,Mr=Aa(t=>t.replace(gm,"-$1").toLowerCase()),sh=Aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),$a=Aa(t=>t?`on${sh(t)}`:""),Zn=(t,e)=>!Object.is(t,e),qa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},oh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},_m=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nu;const wa=()=>nu||(nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=bt(i)?Mm(i):Jr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(bt(t)||ht(t))return t}const vm=/;(?![^(]*\))/g,xm=/:([^]+)/,ym=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Mm(t){const e={};return t.replace(ym,n=>n.startsWith("/*")?"":n).split(vm).forEach(n=>{if(n){const i=n.split(xm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function os(t){let e="";if(bt(t))e=t;else if(Ye(t))for(let n=0;n<t.length;n++){const i=os(t[n]);i&&(e+=i+" ")}else if(ht(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sm="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Em=bc(Sm);function ah(t){return!!t||t===""}function bm(t,e,n){if(t.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<t.length;r++)i=Ra(t[r],e[r],n);return i}function iu(t,e,n){if(t.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of t){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&Ra(s,i[a],n)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function Tm(t,e,n){let i=Fi(t),r=Fi(e);if(i||r||(i=sa(t),r=sa(e),i||r))return i&&r?iu(t,e,n):!1;const s=Object.keys(t).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in t){const l=t.hasOwnProperty(a),u=e.hasOwnProperty(a);if(l&&!u||!l&&u||!Ra(t[a],e[a],n))return!1}return String(t)===String(e)}function ru(t,e,n,i){n||(n=[new Map,new Map]);const[r,s]=n;if(r.has(t)||s.has(e))return r.get(t)===e&&s.get(e)===t;r.set(t,e),s.set(e,t);const o=i(t,e,n);return r.delete(t),s.delete(e),o}function Ra(t,e,n){if(t===e)return!0;let i=tu(t),r=tu(e);return i||r?i&&r?t.getTime()===e.getTime():!1:(i=ei(t),r=ei(e),i||r?t===e:(i=Ye(t),r=Ye(e),i||r?i&&r?ru(t,e,n,bm):!1:(i=ht(t),r=ht(e),i||r?!i||!r?!1:ru(t,e,n,Tm):String(t)===String(e))))}const lh=t=>!!(t&&t.__v_isRef===!0),at=t=>bt(t)?t:t==null?"":Ye(t)||ht(t)&&(t.toString===ih||!Je(t.toString))?lh(t)?at(t.value):JSON.stringify(t,ch,2):String(t),ch=(t,e)=>lh(e)?ch(t,e.value):Fi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ya(i,s)+" =>"]=r,n),{})}:sa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ya(n))}:ei(e)?Ya(e):ht(e)&&!Ye(e)&&!rh(e)?String(e):e,Ya=(t,e="")=>{var n;return ei(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class Am{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&zt&&(zt.active?(this.parent=zt,this.index=(zt.scopes||(zt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){++this._on===1&&(this.prevScope=zt,zt=this)}off(){if(this._on>0&&--this._on===0){if(zt===this)zt=this.prevScope;else{let e=zt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,i=r.length;n<i;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function wm(){return zt}let mt;const ja=new WeakSet;class uh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&(zt.active?zt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ja.has(this)&&(ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,su(this),hh(this);const e=mt,n=Hn;mt=this,Hn=!0;try{return this.fn()}finally{ph(this),mt=e,Hn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cc(e);this.deps=this.depsTail=void 0,su(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jl(this)&&this.run()}get dirty(){return jl(this)}}let fh=0,Ps,Ds;function dh(t,e=!1){if(t.flags|=8,e){t.next=Ds,Ds=t;return}t.next=Ps,Ps=t}function wc(){fh++}function Rc(){if(--fh>0)return;if(Ds){let e=Ds;for(Ds=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ps;){let e=Ps;for(Ps=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function hh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ph(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Cc(i),Rm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function jl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ks)||(t.globalVersion=ks,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!jl(t))))return;t.flags|=2;const e=t.dep,n=mt,i=Hn;mt=t,Hn=!0;try{hh(t);const r=t.fn(t._value);(e.version===0||Zn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{mt=n,Hn=i,ph(t),t.flags&=-3}}function Cc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Cc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Rm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Hn=!0;const gh=[];function ti(){gh.push(Hn),Hn=!1}function ni(){const t=gh.pop();Hn=t===void 0?!0:t}function su(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=mt;mt=void 0;try{e()}finally{mt=n}}}let ks=0;class Cm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!mt||!Hn||mt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==mt)n=this.activeLink=new Cm(mt,this),mt.deps?(n.prevDep=mt.depsTail,mt.depsTail.nextDep=n,mt.depsTail=n):mt.deps=mt.depsTail=n,_h(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=mt.depsTail,n.nextDep=void 0,mt.depsTail.nextDep=n,mt.depsTail=n,mt.deps===n&&(mt.deps=i)}return n}trigger(e){this.version++,ks++,this.notify(e)}notify(e){wc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rc()}}}function _h(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)_h(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Kl=new WeakMap,pr=Symbol(""),Zl=Symbol(""),Ws=Symbol("");function jt(t,e,n){if(Hn&&mt){let i=Kl.get(t);i||Kl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Lc),r.map=i,r.key=n),r.track()}}function gi(t,e,n,i,r,s){const o=Kl.get(t);if(!o){ks++;return}const a=l=>{l&&l.trigger()};if(wc(),e==="clear")o.forEach(a);else{const l=Ye(t),u=l&&Ac(n);if(l&&n==="length"){const c=Number(i);o.forEach((f,p)=>{(p==="length"||p===Ws||!ei(p)&&p>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Ws)),e){case"add":l?u&&a(o.get("length")):(a(o.get(pr)),Fi(t)&&a(o.get(Zl)));break;case"delete":l||(a(o.get(pr)),Fi(t)&&a(o.get(Zl)));break;case"set":Fi(t)&&a(o.get(pr));break}}Rc()}function Er(t){const e=ft(t);return e===t||(jt(e,"iterate",Ws),Rn(t))?e:ii(t)?zi(t)?e.map(n=>Wi(Cn(n))):e.map(Wi):e.map(Cn)}function Ca(t){return jt(t=ft(t),"iterate",Ws),t}function qn(t,e){return ii(t)?Wi(zi(t)?Cn(e):e):Cn(e)}const Lm={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,t=>qn(this,t))},concat(...t){return Er(this).concat(...t.map(e=>Ye(e)?Er(e):e))},entries(){return Ka(this,"entries",t=>(t[1]=qn(this,t[1]),t))},every(t,e){return oi(this,"every",t,e,void 0,arguments)},filter(t,e){return oi(this,"filter",t,e,n=>n.map(i=>qn(this,i)),arguments)},find(t,e){return oi(this,"find",t,e,n=>qn(this,n),arguments)},findIndex(t,e){return oi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return oi(this,"findLast",t,e,n=>qn(this,n),arguments)},findLastIndex(t,e){return oi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return oi(this,"forEach",t,e,void 0,arguments)},includes(...t){return Za(this,"includes",t)},indexOf(...t){return Za(this,"indexOf",t)},join(t){return Er(this).join(t)},lastIndexOf(...t){return Za(this,"lastIndexOf",t)},map(t,e){return oi(this,"map",t,e,void 0,arguments)},pop(){return gs(this,"pop")},push(...t){return gs(this,"push",t)},reduce(t,...e){return au(this,"reduce",t,e)},reduceRight(t,...e){return au(this,"reduceRight",t,e)},shift(){return gs(this,"shift")},some(t,e){return oi(this,"some",t,e,void 0,arguments)},splice(...t){return gs(this,"splice",t)},toReversed(){return Er(this).toReversed()},toSorted(t){return Er(this).toSorted(t)},toSpliced(...t){return Er(this).toSpliced(...t)},unshift(...t){return gs(this,"unshift",t)},values(){return Ka(this,"values",t=>qn(this,t))}};function Ka(t,e,n){const i=Ca(t),r=i[e],s=r.call(i);if(i!==t&&!Rn(t)){if(s[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(s));return o.next=()=>ou(s.next(),n),r!==vh[e]&&Object.defineProperties(o,{return:{get(){const a=s.return;return typeof a=="function"?a.bind(s):a}},throw:{get(){const a=s.throw;return typeof a=="function"?a.bind(s):a}}}),o}s._next=s.next,s.next=()=>ou(s._next(),n)}return s}function ou(t,e){return t.done||(t.value=e(t.value)),t}const vh=Array.prototype;function oi(t,e,n,i,r,s){const o=Ca(t),a=o!==t&&!Rn(t),l=o[e];if(l!==vh[e]){const f=l.apply(t,s);return a?Cn(f):f}let u=n;o!==t&&(a?u=function(f,p){return n.call(this,qn(t,f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const c=l.call(o,u,i);return a&&r?r(c):c}function au(t,e,n,i){const r=Ca(t),s=r!==t&&!Rn(t);let o=n,a=!1;r!==t&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=qn(t,u)),n.call(this,u,qn(t,c),f,t)}):n.length>3&&(o=function(u,c,f){return n.call(this,u,c,f,t)}));const l=r[e](o,...i);return a?qn(t,l):l}function Za(t,e,n){const i=ft(t);jt(i,"iterate",Ws);const r=i[e](...n);return(r===-1||r===!1)&&Ic(n[0])?(n[0]=ft(n[0]),i[e](...n)):r}function gs(t,e,n=[]){ti(),wc();const i=ft(t)[e].apply(t,n);return Rc(),ni(),i}const Pm=bc("__proto__,__v_isRef,__isVue"),xh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ei));function Dm(t){ei(t)||(t=String(t));const e=ft(this);return jt(e,"has",t),e.hasOwnProperty(t)}class yh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Vm:bh:s?Eh:Sh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!r){let l;if(o&&(l=Lm[n]))return l;if(n==="hasOwnProperty")return Dm}const a=Reflect.get(e,n,Jt(e)?e:i);if((ei(n)?xh.has(n):Pm(n))||(r||jt(e,"get",n),s))return a;if(Jt(a)){const l=o&&Ac(n)?a:a.value;return r&&ht(l)?Bi(l):l}return ht(a)?r?Bi(a):La(a):a}}class Mh extends yh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=Ye(e)&&Ac(n);if(!this._isShallow){const u=ii(s);if(!Rn(i)&&!ii(i)&&(s=ft(s),i=ft(i)),!o&&Jt(s)&&!Jt(i))return u||(s.value=i),!0}const a=o?Number(n)<e.length:lt(e,n),l=Reflect.set(e,n,i,Jt(e)?e:r);return e===ft(r)&&l&&(a?Zn(i,s)&&gi(e,"set",n,i):gi(e,"add",n,i)),l}deleteProperty(e,n){const i=lt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&gi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!ei(n)||!xh.has(n))&&jt(e,"has",n),i}ownKeys(e){return jt(e,"iterate",Ye(e)?"length":pr),Reflect.ownKeys(e)}}class Im extends yh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Um=new Mh,Nm=new Im,Om=new Mh(!0);const Jl=t=>t,ho=t=>Reflect.getPrototypeOf(t);function Fm(t,e,n){return function(...i){const r=this.__v_raw,s=ft(r),o=Fi(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...i),c=n?Jl:e?Wi:Cn;return!e&&jt(s,"iterate",l?Zl:pr),Ft(Object.create(u),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[c(f[0]),c(f[1])]:c(f),done:p}}})}}function po(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bm(t,e){const n={get(r){const s=this.__v_raw,o=ft(s),a=ft(r);t||(Zn(r,a)&&jt(o,"get",r),jt(o,"get",a));const{has:l}=ho(o),u=e?Jl:t?Wi:Cn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&jt(ft(r),"iterate",pr),r.size},has(r){const s=this.__v_raw,o=ft(s),a=ft(r);return t||(Zn(r,a)&&jt(o,"has",r),jt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ft(a),u=e?Jl:t?Wi:Cn;return!t&&jt(l,"iterate",pr),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Ft(n,t?{add:po("add"),set:po("set"),delete:po("delete"),clear:po("clear")}:{add(r){const s=ft(this),o=ho(s),a=ft(r),l=!e&&!Rn(r)&&!ii(r)?a:r;return o.has.call(s,l)||Zn(r,l)&&o.has.call(s,r)||Zn(a,l)&&o.has.call(s,a)||(s.add(l),gi(s,"add",l,l)),this},set(r,s){!e&&!Rn(s)&&!ii(s)&&(s=ft(s));const o=ft(this),{has:a,get:l}=ho(o);let u=a.call(o,r);u||(r=ft(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?Zn(s,c)&&gi(o,"set",r,s):gi(o,"add",r,s),this},delete(r){const s=ft(this),{has:o,get:a}=ho(s);let l=o.call(s,r);l||(r=ft(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&gi(s,"delete",r,void 0),u},clear(){const r=ft(this),s=r.size!==0,o=r.clear();return s&&gi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Fm(r,t,e)}),n}function Pc(t,e){const n=Bm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_isShallow"?e:r==="__v_raw"?i:Reflect.get(lt(n,r)&&r in i?n:i,r,s)}const zm={get:Pc(!1,!1)},Hm={get:Pc(!1,!0)},Gm={get:Pc(!0,!1)};const Sh=new WeakMap,Eh=new WeakMap,bh=new WeakMap,Vm=new WeakMap;function km(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function La(t){return ii(t)?t:Dc(t,!1,Um,zm,Sh)}function Wm(t){return Dc(t,!1,Om,Hm,Eh)}function Bi(t){return Dc(t,!0,Nm,Gm,bh)}function Dc(t,e,n,i,r){if(!ht(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const s=r.get(t);if(s)return s;const o=km(pm(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function zi(t){return ii(t)?zi(t.__v_raw):!!(t&&t.__v_isReactive)}function ii(t){return!!(t&&t.__v_isReadonly)}function Rn(t){return!!(t&&t.__v_isShallow)}function Ic(t){return t?!!t.__v_raw:!1}function ft(t){const e=t&&t.__v_raw;return e?ft(e):t}function Xm(t){return!lt(t,"__v_skip")&&Object.isExtensible(t)&&oh(t,"__v_skip",!0),t}const Cn=t=>ht(t)?La(t):t,Wi=t=>ht(t)?Bi(t):t;function Jt(t){return t?t.__v_isRef===!0:!1}function ln(t){return $m(t,!1)}function $m(t,e){return Jt(t)?t:new qm(t,e)}class qm{constructor(e,n){this.dep=new Lc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ft(e),this._value=n?e:Cn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Rn(e)||ii(e);e=i?e:ft(e),Zn(e,n)&&(this._rawValue=e,this._value=i?e:Cn(e),this.dep.trigger())}}function qe(t){return Jt(t)?t.value:t}const Ym={get:(t,e,n)=>e==="__v_raw"?t:qe(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Jt(r)&&!Jt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Th(t){return zi(t)?t:new Proxy(t,Ym)}class jm{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Lc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&mt!==this)return dh(this,!0),!0}get value(){const e=this.dep.track();return mh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Km(t,e,n=!1){let i,r;return Je(t)?i=t:(i=t.get,r=t.set),new jm(i,r,n)}const mo={},oa=new WeakMap;let sr;function Zm(t,e=!1,n=sr){if(n){let i=oa.get(n);i||oa.set(n,i=[]),i.push(t)}}function Jm(t,e,n=gt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,u=E=>r?E:Rn(E)||r===!1||r===0?Ii(E,1):Ii(E);let c,f,p,h,v=!1,_=!1;if(Jt(t)?(f=()=>t.value,v=Rn(t)):zi(t)?(f=()=>u(t),v=!0):Ye(t)?(_=!0,v=t.some(E=>zi(E)||Rn(E)),f=()=>t.map(E=>{if(Jt(E))return E.value;if(zi(E))return u(E);if(Je(E))return l?l(E,2):E()})):Je(t)?e?f=l?()=>l(t,2):t:f=()=>{if(p){ti();try{p()}finally{ni()}}const E=sr;sr=c;try{return l?l(t,3,[h]):t(h)}finally{sr=E}}:f=Qn,e&&r){const E=f,P=r===!0?1/0:r;f=()=>Ii(E(),P)}const m=wm(),d=()=>{c.stop(),m&&m.active&&Tc(m.effects,c)};if(s&&e){const E=e;e=(...P)=>{try{return E(...P)}finally{d()}}}let y=_?new Array(t.length).fill(mo):mo;const x=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(e){const P=c.run();if(E||r||v||(_?P.some((C,R)=>Zn(C,y[R])):Zn(P,y))){const C=sr;ti();try{p&&p(),sr=c;const R=[P,y===mo?void 0:_&&y[0]===mo?[]:y,h];y=P,l?l(e,3,R):e(...R)}finally{sr=C,ni()}}}else c.run()};return a&&a(x),c=new uh(f),c.scheduler=o?()=>o(x,!1):x,h=E=>Zm(E,!1,c),p=c.onStop=()=>{const E=oa.get(c);if(E){if(l)l(E,4);else for(const P of E)P();oa.delete(c)}},e?i?x(!0):y=c.run():o?o(x.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function Ii(t,e=1/0,n){if(e<=0||!ht(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Jt(t))Ii(t.value,e,n);else if(Ye(t))for(let i=0;i<t.length;i++)Ii(t[i],e,n);else if(sa(t)||Fi(t))t.forEach(i=>{Ii(i,e,n)});else if(rh(t)){for(const i in t)Ii(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ii(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function io(t,e,n,i){try{return i?t(...i):t()}catch(r){Pa(r,e,n)}}function Vn(t,e,n,i){if(Je(t)){const r=io(t,e,n,i);return r&&nh(r)&&r.catch(s=>{Pa(s,e,n,void 0,!0)}),r}if(Ye(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Vn(t[s],e,n,i));return r}}function Pa(t,e,n,i=!0,r=!1){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||gt;if(e){let l=e.parent;const u=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f&&!l.isUnmounted&&(!r||l.scope.active)){for(let p=0;p<f.length;p++)if(f[p](t,u,c)===!1)return}l=l.parent}if(o){ti(),io(o,null,10,[t,u,c]),ni();return}}Qm(t,n,s,i,a)}function Qm(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const cn=[];let Nn=-1;const Yn=[];let Pi=null,Gr=0;const Ah=Promise.resolve();let aa=null;function eg(t){const e=aa||Ah;return t?e.then(this?t.bind(this):t):e}function tg(t){let e=Nn+1,n=cn.length;for(;e<n;){const i=e+n>>>1,r=cn[i],s=Xs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Uc(t){if(!(t.flags&1)){const e=Xs(t),n=cn[cn.length-1];!n||!(t.flags&2)&&e>=Xs(n)?cn.push(t):cn.splice(tg(e),0,t),t.flags|=1,wh()}}function wh(){aa||(aa=Ah.then(Lh))}function ng(t){if(!Ye(t))Pi&&t.id===-1?Pi.splice(Gr+1,0,t):t.flags&1||(Yn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Yn.push(t[e]);wh()}function Rh(t,e,n,i=Nn+1){for(;i<cn.length;i++){const r=cn[i];if(r&&r.flags&2){if(t&&r.id!==t.uid||e!==void 0&&!(r.id>=e))continue;cn.splice(i,1),i=t?i-1:Nn,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ch(t,e,n=0){if(Yn.length){let i=Yn,r=0;if(e){i=[];for(let o=0;o<Yn.length;o++){const a=Yn[o];(a.i!==void 0?!a.i||a.i.uid<n:e.has(a))?Yn[r++]=a:i.push(a)}}const s=[...new Set(i)].sort((o,a)=>Xs(o)-Xs(a));if(Yn.length=r,Pi){for(let o=0;o<s.length;o++)Pi.push(s[o]);return}for(Pi=s,Gr=0;Gr<Pi.length;Gr++){const o=Pi[Gr];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Pi=null,Gr=0}}let Ja=!1;function ig(t,e){if(Ja){t();return}const n=e===void 0?void 0:new Set(Yn);t(),Ja=!0;try{Rh(void 0,e),Ch(void 0,n,e)}finally{Ja=!1}}const Xs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Lh(t){try{for(Nn=0;Nn<cn.length;Nn++){const e=cn[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<cn.length;Nn++){const e=cn[Nn];e&&(e.flags&=-2)}Nn=-1,cn.length=0,Ch(),aa=null,(cn.length||Yn.length)&&Lh()}}let Jn=null,Ph=null;function la(t){const e=Jn;return Jn=t,Ph=t&&t.type.__scopeId||null,e}function rg(t,e=Jn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&vu(-1);const s=la(e),o=mr.length;let a;try{a=t(...r)}finally{for(let l=mr.length;l>o;l--)ep();la(s),i._d&&vu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Zi(t,e,n,i){let r=t;if(i==="beforeMount")t._mount=t;else if(i==="beforeUpdate"){const a=e&&e._mount;a&&(a._latest=t,t._mount=a)}else if(i==="mounted"){const a=t._latest;t._mount=t._latest=void 0,a&&(r=a,a._mount=void 0)}const s=r.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){let l=s[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=Ft({},l,{oldValue:void 0}));let u=l.dir[i];u&&(ti(),Vn(u,n,8,[t.el,l,r,e]),ni())}}function sg(t,e){if(un){let n=un.provides;const i=un.parent&&un.parent.provides;i===n&&(n=un.provides=Object.create(i)),n[t]=e}}function Zo(t,e,n=!1){const i=r0();if(i||$r){let r=$r?$r._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Je(e)?e.call(i&&i.proxy):e}}const og=Symbol.for("v-scx"),ag=()=>Zo(og);function Is(t,e,n){return Dh(t,e,n)}function Dh(t,e,n=gt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Ft({},n),l=e&&i||!e&&s!=="post";let u;if(Ks){if(s==="sync"){const h=ag();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Qn,h.resume=Qn,h.pause=Qn,h}}const c=un;a.call=(h,v,_)=>Vn(h,c,v,_);let f=!1;s==="post"?a.scheduler=h=>{h.i=c,nn(h,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,v)=>{v?h():Uc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const p=Jm(t,e,a);return Ks&&(u?u.push(p):l&&p()),p}function lg(t,e,n){const i=this.proxy,r=bt(t)?t.includes(".")?Ih(i,t):()=>i[t]:t.bind(i,i);let s;Je(e)?s=e:(s=e.handler,n=e);const o=so(this),a=Dh(r,s.bind(i),n);return o(),a}function Ih(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const cg=Symbol("_vte"),Da=t=>t.__isTeleport,Qa=Symbol("_leaveCb");function ug(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==kn){e=n;break}}return e}function Uh(t){if(!Nc(t))return Da(t.type)&&t.children?ug(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Je(n.default))return n.default()}}function Us(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Us(Da(n.type)&&Uh(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const i=n.isHydrating?n.pendingBranch:n.activeBranch;i&&Us(i,e.clone(i))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===Ct&&Ye(t.children)){const n=Gh(t.children,!1);n&&Us(n,e)}}function Ql(t){if(t.component)return Ql(t.component.subTree);if(t.type===Ct){const e=Ye(t.children)&&Gh(t.children,!1);return e?Ql(e):void 0}if(t.type!==kn)return t}function Nh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function lu(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ca=new WeakMap;function Ns(t,e,n,i,r=!1){if(Ye(t)){t.forEach((_,m)=>Ns(_,e&&(Ye(e)?e[m]:e),n,i,r));return}if(Os(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ns(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?zc(i.component):i.el,o=r?null:s,{i:a,r:l}=t,u=e&&e.r,c=a.refs===gt?a.refs={}:a.refs,f=a.setupState,p=ft(f),h=f===gt?th:_=>lu(c,_)?!1:lt(p,_),v=(_,m)=>!(m&&lu(c,m));if(u!=null&&u!==l){if(cu(e),bt(u))c[u]=null,h(u)&&(f[u]=null);else if(Jt(u)){const _=e;v(u,_.k)&&(u.value=null),_.k&&(c[_.k]=null)}}if(Je(l))io(l,a,12,[o,c]);else{const _=bt(l),m=Jt(l);if(_||m){const d=()=>{if(t.f){const y=_?h(l)?f[l]:c[l]:v()||!t.k?l.value:c[t.k];if(r)Ye(y)&&Tc(y,s);else if(Ye(y))y.includes(s)||y.push(s);else if(_)c[l]=[s],h(l)&&(f[l]=c[l]);else{const x=[s];v(l,t.k)&&(l.value=x),t.k&&(c[t.k]=x)}}else _?(c[l]=o,h(l)&&(f[l]=o)):m&&(v(l,t.k)&&(l.value=o),t.k&&(c[t.k]=o))};if(o){const y=()=>{d(),ca.delete(t)};y.id=-1,ca.set(t,y),nn(y,n)}else cu(t),d()}}}function cu(t){const e=ca.get(t);e&&(e.flags|=8,ca.delete(t))}wa().requestIdleCallback;wa().cancelIdleCallback;const Os=t=>!!t.type.__asyncLoader,Nc=t=>t.type.__isKeepAlive;function fg(t,e){Oh(t,"a",e)}function dg(t,e){Oh(t,"da",e)}function Oh(t,e,n=un){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($s(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Nc(r.parent.vnode)&&hg(i,e,n,r),r=r.parent}}function hg(t,e,n,i){const r=$s(e,t,i,!0),s=$s("um",()=>Tc(i[e],r),n);s.flags=16}function $s(t,e,n=un,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{ti();const a=so(n),l=Vn(e,n,t,o);return a(),ni(),l});return i?r.unshift(s):r.push(s),s}}const yi=t=>(e,n=un)=>{(!Ks||t==="sp")&&$s(t,(...i)=>e(...i),n)},pg=yi("bm"),ro=yi("m"),mg=yi("bu"),gg=yi("u"),Ia=yi("bum"),_g=yi("um"),vg=yi("sp"),xg=yi("rtg"),yg=yi("rtc");function Mg(t,e=un){$s("ec",t,e)}const Sg=Symbol.for("v-ndc");function qs(t,e,n,i){let r;const s=n,o=Ye(t);if(o||bt(t)){const a=o&&zi(t);let l=!1,u=!1;a&&(l=!Rn(t),u=ii(t),t=Ca(t)),r=new Array(t.length);for(let c=0,f=t.length;c<f;c++)r[c]=e(l?u?Wi(Cn(t[c])):Cn(t[c]):t[c],c,void 0,s)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)r=[];else{r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,s)}}else r=[];return r}const ec=t=>t?sp(t)?zc(t):ec(t.parent):null,Fs=Ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ec(t.parent),$root:t=>ec(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Bh(t),$forceUpdate:t=>t.f||(t.f=()=>{Uc(t.update)}),$nextTick:t=>t.n||(t.n=eg.bind(t.proxy)),$watch:t=>lg.bind(t)}),el=(t,e)=>t!==gt&&!t.__isScriptSetup&&lt(t,e),Eg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(el(i,e))return o[e]=1,i[e];if(r!==gt&&lt(r,e))return o[e]=2,r[e];if(lt(s,e))return o[e]=3,s[e];if(n!==gt&&lt(n,e))return o[e]=4,n[e];tc&&(o[e]=0)}}const u=Fs[e];let c,f;if(u)return e==="$attrs"&&jt(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==gt&&lt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,lt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return el(r,e)?(r[e]=n,!0):i!==gt&&lt(i,e)?(i[e]=n,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==gt&&a[0]!=="$"&&lt(t,a)||el(e,a)||lt(s,a)||lt(i,a)||lt(Fs,a)||lt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:lt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function uu(t){return Ye(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let tc=!0;function bg(t){const e=Bh(t),n=t.proxy,i=t.ctx;tc=!1,e.beforeCreate&&fu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:p,beforeUpdate:h,updated:v,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:y,destroyed:x,unmounted:E,render:P,renderTracked:C,renderTriggered:R,errorCaptured:q,serverPrefetch:T,expose:D,inheritAttrs:Y,components:ie,directives:V,filters:I}=e;if(u&&Tg(u,i,null),o)for(const $ in o){const j=o[$];Je(j)&&(i[$]=j.bind(n))}if(r){const $=r.call(n,n);ht($)&&(t.data=La($))}if(tc=!0,s)for(const $ in s){const j=s[$],ne=Je(j)?j.bind(n,n):Je(j.get)?j.get.bind(n,n):Qn,re=!Je(j)&&Je(j.set)?j.set.bind(n):Qn,se=u0({get:ne,set:re});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>se.value,set:xe=>se.value=xe})}if(a)for(const $ in a)Fh(a[$],i,n,$);if(l){const $=Je(l)?l.call(n):l;Reflect.ownKeys($).forEach(j=>{sg(j,$[j])})}c&&fu(c,t,"c");function B($,j){Ye(j)?j.forEach(ne=>$(ne.bind(n))):j&&$(j.bind(n))}if(B(pg,f),B(ro,p),B(mg,h),B(gg,v),B(fg,_),B(dg,m),B(Mg,q),B(yg,C),B(xg,R),B(Ia,y),B(_g,E),B(vg,T),Ye(D))if(D.length){const $=t.exposed||(t.exposed={});D.forEach(j=>{Object.defineProperty($,j,{get:()=>n[j],set:ne=>n[j]=ne,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===Qn&&(t.render=P),Y!=null&&(t.inheritAttrs=Y),ie&&(t.components=ie),V&&(t.directives=V),T&&Nh(t)}function Tg(t,e,n=Qn){Ye(t)&&(t=nc(t));for(const i in t){const r=t[i];let s;ht(r)?"default"in r?s=Zo(r.from||i,r.default,!0):s=Zo(r.from||i):s=Zo(r),Jt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function fu(t,e,n){Vn(Ye(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fh(t,e,n,i){let r=i.includes(".")?Ih(n,i):()=>n[i];if(bt(t)){const s=e[t];Je(s)&&Is(r,s)}else if(Je(t))Is(r,t.bind(n));else if(ht(t))if(Ye(t))t.forEach(s=>Fh(s,e,n,i));else{const s=Je(t.handler)?t.handler.bind(n):e[t.handler];Je(s)&&Is(r,s,t)}}function Bh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>ua(l,u,o,!0)),ua(l,e,o)),ht(e)&&s.set(e,l),l}function ua(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ua(t,s,n,!0),r&&r.forEach(o=>ua(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ag[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ag={data:du,props:hu,emits:hu,methods:Ts,computed:Ts,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Ts,directives:Ts,watch:Rg,provide:du,inject:wg};function du(t,e){return e?t?function(){return Ft(Je(t)?t.call(this,this):t,Je(e)?e.call(this,this):e)}:e:t}function wg(t,e){return Ts(nc(t),nc(e))}function nc(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function Ts(t,e){return t?Ft(Object.create(null),t,e):e}function hu(t,e){return t?Ye(t)&&Ye(e)?[...new Set([...t,...e])]:Ft(Object.create(null),uu(t),uu(e??{})):e}function Rg(t,e){if(!t)return e;if(!e)return t;const n=Ft(Object.create(null),t);for(const i in e)n[i]=tn(t[i],e[i]);return n}function zh(){return{app:null,config:{isNativeTag:th,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cg=0;function Lg(t,e){return function(i,r=null){Je(i)||(i=Ft({},i)),r!=null&&!ht(r)&&(r=null);const s=zh(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Cg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:f0,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Je(c.install)?(o.add(c),c.install(u,...f)):Je(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,p){if(!l){const h=u._ceVNode||Lt(i,r);return h.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),t(h,c,p),l=!0,u._container=c,c.__vue_app__=u,zc(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Vn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=$r;$r=u;try{return c()}finally{$r=f}}};return u}}let $r=null;const Pg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zn(e)}Modifiers`]||t[`${Mr(e)}Modifiers`];function Dg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||gt;let r=n;const s=e.startsWith("update:"),o=s&&Pg(i,e.slice(7));o&&(o.trim&&(r=n.map(c=>bt(c)?c.trim():c)),o.number&&(r=r.map(_m)));let a,l=i[a=$a(e)]||i[a=$a(zn(e))];!l&&s&&(l=i[a=$a(Mr(e))]),l&&Vn(l,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vn(u,t,6,r)}}const Ig=new WeakMap;function Hh(t,e,n=!1){const i=n?Ig:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Je(t)){const l=u=>{const c=Hh(u,e,!0);c&&(a=!0,Ft(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ht(t)&&i.set(t,null),null):(Ye(s)?s.forEach(l=>o[l]=null):Ft(o,s),ht(t)&&i.set(t,o),o)}function Ua(t,e){return!t||!ba(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,Mr(e))||lt(t,e))}function pu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:p,setupState:h,ctx:v,inheritAttrs:_}=t,m=la(t);let d,y;try{if(n.shapeFlag&4){const E=r||i,P=E;d=jn(u.call(P,E,c,f,h,p,v)),y=a}else{const E=e;d=jn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),y=e.props?a:Ug(a)}}catch(E){mr.length=0,Pa(E,t,1),d=Lt(kn)}let x=d;if(y&&_!==!1){const E=Object.keys(y),{shapeFlag:P}=x;E.length&&P&7&&(s&&E.some(Ta)&&(y=Ng(y,s)),x=Qr(x,y,!1,!0))}if(n.dirs&&(x=Qr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition){const E=Da(x.type)&&Uh(x)||x;Us(E,n.transition)}return d=x,la(m),d}function Gh(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(Bc(r)){if(r.type!==kn||r.children==="v-if"){if(n)return;n=r}}else return}return n}const Ug=t=>{let e;for(const n in t)(n==="class"||n==="style"||ba(n))&&((e||(e={}))[n]=t[n]);return e},Ng=(t,e)=>{const n={};for(const i in t)(!Ta(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Og(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?mu(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const p=c[f];if(Vh(o,i,p)&&!Ua(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?mu(i,o,u):!0:!!o;return!1}function mu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(!lt(t,s)||Vh(e,t,s)&&!Ua(n,s))return!0}return!1}function Vh(t,e,n){const i=t[n],r=e[n];return n==="style"&&ht(i)&&ht(r)?!Ra(i,r):i!==r}function Fg({vnode:t,parent:e,suspense:n},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const kh={},Wh=()=>Object.create(kh),Xh=t=>Object.getPrototypeOf(t)===kh;function Bg(t,e,n,i=!1){const r={},s=Wh();t.propsDefaults=Object.create(null),$h(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Wm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function zg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ft(r),[l]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let p=c[f];if(Ua(t.emitsOptions,p))continue;const h=e[p];if(l)if(lt(s,p))h!==s[p]&&(s[p]=h,u=!0);else{const v=zn(p);r[v]=ic(l,a,v,h,t,!1)}else h!==s[p]&&(s[p]=h,u=!0)}}}else{$h(t,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!lt(e,f)&&((c=Mr(f))===f||!lt(e,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=ic(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!lt(e,f))&&(delete s[f],u=!0)}u&&gi(t.attrs,"set","")}function $h(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ls(l))continue;const u=e[l];let c;r&&lt(r,c=zn(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:Ua(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=ft(n),u=a||gt;for(let c=0;c<s.length;c++){const f=s[c];n[f]=ic(r,l,f,u[f],t,!lt(u,f))}}return o}function ic(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=so(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Mr(n))&&(i=!0))}return i}const Hg=new WeakMap;function qh(t,e,n=!1){const i=n?Hg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Je(t)){const c=f=>{l=!0;const[p,h]=qh(f,e,!0);Ft(o,p),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return ht(t)&&i.set(t,fr),fr;if(Ye(s))for(let c=0;c<s.length;c++){const f=zn(s[c]);gu(f)&&(o[f]=gt)}else if(s)for(const c in s){const f=zn(c);if(gu(f)){const p=s[c],h=o[f]=Ye(p)||Je(p)?{type:p}:Ft({},p),v=h.type;let _=!1,m=!0;if(Ye(v))for(let d=0;d<v.length;++d){const y=v[d],x=Je(y)&&y.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(m=!1)}else _=Je(v)&&v.name==="Boolean";h[0]=_,h[1]=m,(_||lt(h,"default"))&&a.push(f)}}const u=[o,a];return ht(t)&&i.set(t,u),u}function gu(t){return t[0]!=="$"&&!Ls(t)}const Oc=t=>t==="_"||t==="_ctx"||t==="$stable",Fc=t=>Ye(t)?t.map(jn):[jn(t)],Gg=(t,e,n)=>{if(e._n)return e;const i=rg((...r)=>Fc(e(...r)),n);return i._c=!1,i},Yh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Oc(r))continue;const s=t[r];if(Je(s))e[r]=Gg(r,s,i);else if(s!=null){const o=Fc(s);e[r]=()=>o}}},jh=(t,e)=>{const n=Fc(e);t.slots.default=()=>n},Kh=(t,e,n)=>{for(const i in e)(n||!Oc(i))&&(t[i]=e[i])},Vg=(t,e,n)=>{const i=t.slots=Wh();if(t.vnode.shapeFlag&32){const r=e._;r?(Kh(i,e,n),n&&oh(i,"_",r,!0)):Yh(e,i)}else e&&jh(t,e)},kg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=gt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Kh(r,e,n):(s=!e.$stable,Yh(e,r)),o=e}else e&&(jh(t,e),o={default:1});if(s)for(const a in r)!Oc(a)&&o[a]==null&&delete r[a]},nn=jg;function Wg(t){return Xg(t)}function Xg(t,e){const n=wa();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:p,setScopeId:h=Qn,insertStaticContent:v}=t,_=(N,A,oe,te=null,le=null,Q=null,ye=void 0,F=null,M=!!A.dynamicChildren)=>{if(N===A)return;N&&!_s(N,A)&&(te=Ie(N),xe(N,le,Q,!0),N=null),A.patchFlag===-2&&(M=!1,A.dynamicChildren=null),A.dynamicChildren&&N&&N.dynamicChildren&&N.dynamicChildren.hasOnce&&(A.dynamicChildren===fr&&(A.dynamicChildren=[]),A.dynamicChildren.hasOnce=!0);const{type:g,ref:S,shapeFlag:w}=A;switch(g){case Na:m(N,A,oe,te);break;case kn:d(N,A,oe,te);break;case Jo:N==null&&y(A,oe,te,ye);break;case Ct:ie(N,A,oe,te,le,Q,ye,F,M);break;default:w&1?P(N,A,oe,te,le,Q,ye,F,M):w&6?V(N,A,oe,te,le,Q,ye,F,M):(w&64||w&128)&&g.process(N,A,oe,te,le,Q,ye,F,M,He)}S!=null&&le?Ns(S,N&&N.ref,Q,A||N,!A):S==null&&N&&N.ref!=null&&Ns(N.ref,null,Q,N,!0)},m=(N,A,oe,te)=>{if(N==null)i(A.el=a(A.children),oe,te);else{const le=A.el=N.el;A.children!==N.children&&u(le,A.children)}},d=(N,A,oe,te)=>{N==null?i(A.el=l(A.children||""),oe,te):A.el=N.el},y=(N,A,oe,te)=>{[N.el,N.anchor]=v(N.children,A,oe,te,N.el,N.anchor)},x=({el:N,anchor:A},oe,te)=>{let le;for(;N&&N!==A;)le=p(N),i(N,oe,te),N=le;i(A,oe,te)},E=({el:N,anchor:A})=>{let oe;for(;N&&N!==A;)oe=p(N),r(N),N=oe;r(A)},P=(N,A,oe,te,le,Q,ye,F,M)=>{if(A.type==="svg"?ye="svg":A.type==="math"&&(ye="mathml"),N==null)C(A,oe,te,le,Q,ye,F,M);else{const g=N.el&&N.el._isVueCE?N.el:null;try{g&&g._beginPatch(),T(N,A,le,Q,ye,F,M)}finally{g&&g._endPatch()}}},C=(N,A,oe,te,le,Q,ye,F)=>{let M,g;const{props:S,shapeFlag:w,transition:b,dirs:O}=N;if(M=N.el=o(N.type,Q,S&&S.is,S),w&8?c(M,N.children):w&16&&q(N.children,M,null,te,le,tl(N,Q),ye,F),O&&Zi(N,null,te,"created"),R(M,N,N.scopeId,ye,te),S){for(const K in S)K!=="value"&&!Ls(K)&&s(M,K,null,S[K],Q,te);"value"in S&&s(M,"value",null,S.value,Q),(g=S.onVnodeBeforeMount)&&Wn(g,te,N)}O&&Zi(N,null,te,"beforeMount");const X=$g(le,b);X?b.beforeEnter(M):b&&!b.persisted&&(M[Yg]=!0),i(M,A,oe),((g=S&&S.onVnodeMounted)||X||O)&&nn(()=>{try{g&&Wn(g,te,N),X&&b.enter(M),O&&Zi(N,null,te,"mounted")}finally{}},le)},R=(N,A,oe,te,le)=>{if(oe&&h(N,oe),te)for(let Q=0;Q<te.length;Q++)h(N,te[Q]);if(le){let Q=le.subTree;if(A===Q||Qh(Q.type)&&(Q.ssContent===A||Q.ssFallback===A)){const ye=le.vnode;R(N,ye,ye.scopeId,ye.slotScopeIds,le.parent)}}},q=(N,A,oe,te,le,Q,ye,F,M=0)=>{for(let g=M;g<N.length;g++){const S=N[g]=F?pi(N[g]):jn(N[g]);_(null,S,A,oe,te,le,Q,ye,F)}},T=(N,A,oe,te,le,Q,ye)=>{const F=A.el=N.el;let{patchFlag:M,dynamicChildren:g,dirs:S}=A;M|=N.patchFlag&16;const w=N.props||gt,b=A.props||gt;let O;if(oe&&Ji(oe,!1),(O=b.onVnodeBeforeUpdate)&&Wn(O,oe,A,N),S&&Zi(A,N,oe,"beforeUpdate"),oe&&Ji(oe,!0),g&&(!N.dynamicChildren||N.dynamicChildren.length!==g.length)&&(M=0,ye=!1,g=null),(w.innerHTML&&b.innerHTML==null||w.textContent&&b.textContent==null)&&c(F,""),g?D(N.dynamicChildren,g,F,oe,te,tl(A,le),Q):ye||j(N,A,F,null,oe,te,tl(A,le),Q,!1),M>0){if(M&16)Y(F,w,b,oe,le);else if(M&2&&w.class!==b.class&&s(F,"class",null,b.class,le),M&4&&s(F,"style",w.style,b.style,le),M&8){const X=A.dynamicProps;for(let K=0;K<X.length;K++){const Z=X[K],he=w[Z],_e=b[Z];(_e!==he||Z==="value")&&s(F,Z,he,_e,le,oe)}}M&1&&N.children!==A.children&&c(F,A.children)}else!ye&&g==null&&Y(F,w,b,oe,le);((O=b.onVnodeUpdated)||S)&&nn(()=>{O&&Wn(O,oe,A,N),S&&Zi(A,N,oe,"updated")},te)},D=(N,A,oe,te,le,Q,ye)=>{for(let F=0;F<A.length;F++){const M=N[F],g=A[F],S=M.el||Bs(M),w=S&&(M.type===Ct||!_s(M,g)||M.shapeFlag&198)?f(S):oe;_(M,g,w,null,te,le,Q,ye,!0)}},Y=(N,A,oe,te,le)=>{if(A!==oe){if(A!==gt)for(const Q in A)!Ls(Q)&&!(Q in oe)&&s(N,Q,A[Q],null,le,te);for(const Q in oe){if(Ls(Q))continue;const ye=oe[Q],F=A[Q];ye!==F&&Q!=="value"&&s(N,Q,F,ye,le,te)}"value"in oe&&s(N,"value",A.value,oe.value,le)}},ie=(N,A,oe,te,le,Q,ye,F,M)=>{const g=A.el=N?N.el:a(""),S=A.anchor=N?N.anchor:a("");let{patchFlag:w,dynamicChildren:b,slotScopeIds:O}=A;O&&(F=F?F.concat(O):O),N==null?(i(g,oe,te),i(S,oe,te),q(A.children||[],oe,S,le,Q,ye,F,M)):w>0&&w&64&&b&&N.dynamicChildren&&N.dynamicChildren.length===b.length?(D(N.dynamicChildren,b,oe,le,Q,ye,F),(A.key!=null||le&&A===le.subTree)&&Zh(N,A,!0)):j(N,A,oe,S,le,Q,ye,F,M)},V=(N,A,oe,te,le,Q,ye,F,M)=>{A.slotScopeIds=F,N==null?A.shapeFlag&512?le.ctx.activate(A,oe,te,ye,M):I(A,oe,te,le,Q,ye,M):H(N,A,M)},I=(N,A,oe,te,le,Q,ye)=>{const F=N.component=i0(N,te,le);if(Nc(N)&&(F.ctx.renderer=He),s0(F,!1,ye),F.asyncDep){if(le&&le.registerDep(F,B,ye,Q),!N.el){const M=F.subTree=Lt(kn);d(null,M,A,oe),N.placeholder=M.el}}else B(F,N,A,oe,le,Q,ye)},H=(N,A,oe)=>{const te=A.component=N.component;if(Og(N,A,oe))if(te.asyncDep&&!te.asyncResolved){A.el=N.el,A.placeholder=N.placeholder,$(te,A,oe);return}else te.next=A,te.update();else A.el=N.el,A.placeholder=N.placeholder,te.vnode=A},B=(N,A,oe,te,le,Q,ye)=>{const F=()=>{if(N.isMounted){let{next:w,bu:b,u:O,parent:X,vnode:K}=N;{const Me=Jh(N);if(Me){w&&(w.el=K.el,$(N,w,ye)),Me.asyncDep.then(()=>{const be=()=>{N.job.flags&8||(le&&le.pendingBranch?nn(be,le):g())};be.flags=48,nn(be,le)});return}}let Z=w,he;Ji(N,!1),w?(w.el=K.el,$(N,w,ye)):w=K,b&&qa(b),(he=w.props&&w.props.onVnodeBeforeUpdate)&&Wn(he,X,w,K),Ji(N,!0);const _e=pu(N),J=N.subTree;N.subTree=_e,_(J,_e,f(J.el||Bs(J)),Ie(J),N,le,Q),w.el=_e.el,Z===null&&Fg(N,_e.el),O&&nn(O,le),(he=w.props&&w.props.onVnodeUpdated)&&nn(()=>Wn(he,X,w,K),le)}else{let w;const{el:b,props:O}=A,{bm:X,m:K,parent:Z,root:he,type:_e}=N,J=Os(A);Ji(N,!1),X&&qa(X),!J&&(w=O&&O.onVnodeBeforeMount)&&Wn(w,Z,A),Ji(N,!0);{he.ce&&he.ce._hasShadowRoot()&&he.ce._injectChildStyle(_e,N.parent?N.parent.type:void 0);const Me=N.subTree=pu(N);_(null,Me,oe,te,N,le,Q),A.el=Me.el}if(K&&nn(K,le),!J&&(w=O&&O.onVnodeMounted)){const Me=A;nn(()=>Wn(w,Z,Me),le)}(A.shapeFlag&256||Z&&Os(Z.vnode)&&Z.vnode.shapeFlag&256)&&N.a&&nn(N.a,le),N.isMounted=!0,A=oe=te=null}};N.scope.on();const M=N.effect=new uh(F);N.scope.off();const g=N.update=M.run.bind(M),S=N.job=M.runIfDirty.bind(M);S.i=N,S.id=N.uid,M.scheduler=()=>Uc(S),Ji(N,!0),g()},$=(N,A,oe)=>{A.component=N;const te=N.vnode.props;N.vnode=A,N.next=null,zg(N,A.props,te,oe),kg(N,A.children,oe),ti(),Rh(N),ni()},j=(N,A,oe,te,le,Q,ye,F,M=!1)=>{const g=N&&N.children,S=N?N.shapeFlag:0,w=A.children,{patchFlag:b,shapeFlag:O}=A;if(b>0){if(b&128){re(g,w,oe,te,le,Q,ye,F,M);return}else if(b&256){ne(g,w,oe,te,le,Q,ye,F,M);return}}O&8?(S&16&&Le(g,le,Q),w!==g&&c(oe,w)):S&16?O&16?re(g,w,oe,te,le,Q,ye,F,M):Le(g,le,Q,!0):(S&8&&c(oe,""),O&16&&q(w,oe,te,le,Q,ye,F,M))},ne=(N,A,oe,te,le,Q,ye,F,M)=>{N=N||fr,A=A||fr;const g=N.length,S=A.length,w=Math.min(g,S);let b;for(b=0;b<w;b++){const O=A[b]=M?pi(A[b]):jn(A[b]);_(N[b],O,oe,null,le,Q,ye,F,M)}g>S?Le(N,le,Q,!0,!1,w):q(A,oe,te,le,Q,ye,F,M,w)},re=(N,A,oe,te,le,Q,ye,F,M)=>{let g=0;const S=A.length;let w=N.length-1,b=S-1;for(;g<=w&&g<=b;){const O=N[g],X=A[g]=M?pi(A[g]):jn(A[g]);if(_s(O,X))_(O,X,oe,null,le,Q,ye,F,M);else break;g++}for(;g<=w&&g<=b;){const O=N[w],X=A[b]=M?pi(A[b]):jn(A[b]);if(_s(O,X))_(O,X,oe,null,le,Q,ye,F,M);else break;w--,b--}if(g>w){if(g<=b){const O=b+1,X=O<S?A[O].el:te;for(;g<=b;)_(null,A[g]=M?pi(A[g]):jn(A[g]),oe,X,le,Q,ye,F,M),g++}}else if(g>b)for(;g<=w;)xe(N[g],le,Q,!0),g++;else{const O=g,X=g,K=new Map;for(g=X;g<=b;g++){const Te=A[g]=M?pi(A[g]):jn(A[g]);Te.key!=null&&K.set(Te.key,g)}let Z,he=0;const _e=b-X+1;let J=!1,Me=0;const be=new Array(_e);for(g=0;g<_e;g++)be[g]=0;for(g=O;g<=w;g++){const Te=N[g];if(he>=_e){xe(Te,le,Q,!0);continue}let Se;if(Te.key!=null)Se=K.get(Te.key);else for(Z=X;Z<=b;Z++)if(be[Z-X]===0&&_s(Te,A[Z])){Se=Z;break}Se===void 0?xe(Te,le,Q,!0):(be[Se-X]=g+1,Se>=Me?Me=Se:J=!0,_(Te,A[Se],oe,null,le,Q,ye,F,M),he++)}const Re=J?qg(be):fr;for(Z=Re.length-1,g=_e-1;g>=0;g--){const Te=X+g,Se=A[Te],Pe=A[Te+1],Ue=Te+1<S?Pe.el||Bs(Pe):te;be[g]===0?_(null,Se,oe,Ue,le,Q,ye,F,M):J&&(Z<0||g!==Re[Z]?se(Se,oe,Ue,2):Z--)}}},se=(N,A,oe,te,le=null)=>{const{el:Q,type:ye,transition:F,children:M,shapeFlag:g}=N;if(g&6){se(N.component.subTree,A,oe,te);return}if(g&128){N.suspense.move(A,oe,te);return}if(g&64){ye.move(N,A,oe,He);return}if(ye===Ct){i(Q,A,oe);for(let w=0;w<M.length;w++)se(M[w],A,oe,te);i(N.anchor,A,oe);return}if(ye===Jo){x(N,A,oe);return}if(te!==2&&g&1&&F)if(te===0)F.persisted&&!Q[Qa]?i(Q,A,oe):(F.beforeEnter(Q),i(Q,A,oe),nn(()=>F.enter(Q),le));else{const{leave:w,delayLeave:b,afterLeave:O}=F,X=()=>{N.ctx.isUnmounted?r(Q):i(Q,A,oe)},K=()=>{const Z=Q._isLeaving||!!Q[Qa];Q._isLeaving&&Q[Qa](!0),F.persisted&&!Z?X():w(Q,()=>{X(),O&&O()})};b?b(Q,X,K):K()}else i(Q,A,oe)},xe=(N,A,oe,te=!1,le=!1)=>{const{type:Q,props:ye,ref:F,children:M,dynamicChildren:g,shapeFlag:S,patchFlag:w,dirs:b,cacheIndex:O,memo:X}=N;if((w===-2||g&&g.hasOnce)&&(le=!1),F!=null&&(ti(),Ns(F,null,oe,N,!0),ni()),O!=null&&(!N.ctx||N.ctx===A)&&(A.renderCache[O]=void 0),S&256&&A.ctx.deactivate(N))return;const K=S&1&&b,Z=!Os(N);let he;if(Z&&(he=ye&&ye.onVnodeBeforeUnmount)&&Wn(he,A,N),S&6)Ee(N.component,oe,te);else{if(S&128){N.suspense.unmount(oe,te);return}K&&Zi(N,null,A,"beforeUnmount"),S&64?N.type.remove(N,A,oe,He,te):g&&!g.hasOnce&&(Q!==Ct||w>0&&w&64)?Le(g,A,oe,!1,!0):(Q===Ct&&w&384||!le&&S&16)&&Le(M,A,oe),te&&k(N)}const _e=X!=null&&O==null;(Z&&(he=ye&&ye.onVnodeUnmounted)||K||_e)&&nn(()=>{he&&Wn(he,A,N),K&&Zi(N,null,A,"unmounted"),_e&&(N.el=null)},oe)},k=N=>{const{type:A,el:oe,anchor:te,transition:le}=N,Q=A===Ct;if(Q&&!le){de(oe,te);return}if(A===Jo){E(N),le&&!le.persisted&&le.afterLeave&&le.afterLeave();return}const ye=Q?Ql(N):N,F=()=>{Q?f(oe)&&de(oe,te):r(oe),le&&!le.persisted&&le.afterLeave&&le.afterLeave()};if(ye&&ye.shapeFlag&1&&le&&!le.persisted){const{leave:M,delayLeave:g}=le,S=ye.el,w=()=>M(S,F);g?g(S,F,w):w()}else F()},de=(N,A)=>{let oe;for(;N!==A;)oe=p(N),r(N),N=oe;r(A)},Ee=(N,A,oe)=>{const{bum:te,scope:le,job:Q,subTree:ye,um:F,m:M,a:g}=N;_u(M),_u(g),te&&qa(te),le.stop(),Q?(Q.flags|=8,xe(ye,N,A,oe)):ye&&(ye.transition=N.vnode.transition,xe(ye,N,A,oe)),F&&nn(F,A);const S=()=>{N.isUnmounted=!0};S.flags=16,nn(S,A)},Le=(N,A,oe,te=!1,le=!1,Q=0)=>{for(let ye=Q;ye<N.length;ye++)xe(N[ye],A,oe,te,le)},Ie=N=>{if(N.shapeFlag&6)return Ie(N.component.subTree);if(N.shapeFlag&128)return N.suspense.next();const A=p(N.anchor||N.el),oe=A&&A[cg];return oe?p(oe):A},Ge=(N,A,oe)=>{const te=N&&A._vnode?void 0:N&&N.component?N.component.uid:n0();ig(()=>{N==null?A._vnode&&xe(A._vnode,null,null,!0):_(A._vnode||null,N,A,null,null,null,oe),A._vnode=N},te)},He={p:_,um:xe,m:se,r:k,mt:I,mc:q,pc:j,pbc:D,n:Ie,o:t};return{render:Ge,hydrate:void 0,createApp:Lg(Ge)}}function tl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ji({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $g(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zh(t,e,n=!1){const i=t.children,r=e.children;if(Ye(i)&&Ye(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=pi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Zh(o,a)),a.type===Na&&(a.patchFlag===-1&&(a=r[s]=pi(a)),a.el=o.el),a.type===kn&&!a.el&&(a.el=o.el)}}function qg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Jh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jh(e)}function _u(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Bs(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return Bs(e.subTree);const n=t.suspense;return n&&n.activeBranch?Bs(n.activeBranch):null}const Qh=t=>t.__isSuspense,Yg=Symbol("_deferredEnter");function jg(t,e){e&&e.pendingBranch?Ye(t)?e.effects.push(...t):e.effects.push(t):ng(t)}const Ct=Symbol.for("v-fgt"),Na=Symbol.for("v-txt"),kn=Symbol.for("v-cmt"),Jo=Symbol.for("v-stc"),mr=[];let Mn=null;function yt(t=!1){mr.push(Mn=t?null:[])}function ep(){mr.pop(),Mn=mr[mr.length-1]||null}let Ys=1;function vu(t,e=!1){Ys+=t,t<0&&Mn&&e&&(Mn.hasOnce=!0)}function tp(t){return t.dynamicChildren=Ys>0?Mn||fr:null,ep(),Ys>0&&Mn&&Mn.push(t),t}function Et(t,e,n,i,r,s){return tp(Ce(t,e,n,i,r,s,!0))}function Kg(t,e,n,i,r){return tp(Lt(t,e,n,i,r,!0))}function Bc(t){return t?t.__v_isVNode===!0:!1}function _s(t,e){return t.type===e.type&&t.key===e.key}const np=({key:t})=>t??null,Qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?bt(t)||Jt(t)||Je(t)?{i:Jn,r:t,k:e,f:!!n}:t:null);function Ce(t,e=null,n=null,i=0,r=null,s=t===Ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&np(e),ref:e&&Qo(e),scopeId:Ph,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Jn};return a?(fa(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=bt(n)?8:16),Ys>0&&!o&&Mn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Mn.push(l),l}const Lt=Zg;function Zg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Sg)&&(t=kn),Bc(t)){const a=Qr(t,e,!0);return n&&fa(a,n),Ys>0&&!s&&Mn&&(a.shapeFlag&6?Mn[Mn.indexOf(t)]=a:Mn.push(a)),a.patchFlag=-2,a}if(c0(t)&&(t=t.__vccOpts),e){e=Jg(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=os(a)),ht(l)&&(Ic(l)&&!Ye(l)&&(l=Ft({},l)),e.style=Jr(l))}const o=bt(t)?1:Qh(t)?128:Da(t)?64:ht(t)?4:Je(t)?2:0;return Ce(t,e,n,i,r,o,s,!0)}function Jg(t){return t?Ic(t)?Ft({},t):Xh(t)?Ft({},t[ap]||t):t:null}function Qr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,u=e?e0(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&np(u),ref:e&&e.ref?n&&s?Ye(s)?s.concat(Qo(e)):[s,Qo(e)]:Qo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qr(t.ssContent),ssFallback:t.ssFallback&&Qr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return l&&i&&Us(c,l.clone(c)),c}function Kt(t=" ",e=0){return Lt(Na,null,t,e)}function Qg(t,e){const n=Lt(Jo,null,t);return n.staticCount=e,n}function ip(t="",e=!1){return e?(yt(),Kg(kn,null,t)):Lt(kn,null,t)}function jn(t){return t==null||typeof t=="boolean"?Lt(kn):Ye(t)?Lt(Ct,null,t.slice()):Bc(t)?pi(t):Lt(Na,null,String(t))}function pi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qr(t)}function fa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ye(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),fa(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Xh(e)?e._ctx=Jn:r===3&&Jn&&(Jn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(Je(e)){if(i&65){fa(t,{default:e});return}e={default:e,_ctx:Jn},n=32}else e=String(e),i&64?(n=16,e=[Kt(e)]):n=8;t.children=e,t.shapeFlag|=n}function e0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=os([e.class,i.class]));else if(r==="style")e.style=Jr([e.style,i.style]);else if(ba(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ye(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Ta(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Wn(t,e,n,i=null){Vn(t,e,7,[n,i])}const t0=zh();let rp=0;function n0(){return rp}function i0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||t0,s={uid:rp++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Am(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qh(i,r),emitsOptions:Hh(i,r),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Dg.bind(null,s),t.ce&&t.ce(s),s}let un=null;const r0=()=>un||Jn;let da,js;{const t=wa(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};da=e("__VUE_INSTANCE_SETTERS__",n=>un=n),js=e("__VUE_SSR_SETTERS__",n=>Ks=n)}const so=t=>{const e=un;return da(t),t.scope.on(),()=>{t.scope.off(),da(e)}},xu=()=>{un&&un.scope.off(),da(null)};function sp(t){return t.vnode.shapeFlag&4}let Ks=!1;function s0(t,e=!1,n=!1){e&&js(e);const{props:i,children:r}=t.vnode,s=sp(t);Bg(t,i,s,e),Vg(t,r,n||e);const o=s?o0(t,e):void 0;return e&&js(!1),o}function o0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Eg);const{setup:i}=n;if(i){ti();const r=t.setupContext=i.length>1?l0(t):null,s=so(t),o=io(i,t,0,[t.props,r]),a=nh(o);if(ni(),s(),(a||t.sp)&&!Os(t)&&Nh(t),a){if(o.then(xu,xu),e)return o.then(l=>{js(!0);try{yu(t,l,e)}finally{js(!1)}}).catch(l=>{Pa(l,t,0,void 0,!0),t.ssrRender=(u,c)=>c("<!---->")});t.asyncDep=o}else yu(t,o)}else op(t)}function yu(t,e,n){Je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ht(e)&&(t.setupState=Th(e)),op(t)}function op(t,e,n){const i=t.type;t.render||(t.render=i.render||Qn);{const r=so(t);ti();try{bg(t)}finally{ni(),r()}}}const ap=Symbol(),a0={get(t,e){return jt(t,"get",""),e===ap?t:t[e]}};function l0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,a0),slots:t.slots,emit:t.emit,expose:e}}function zc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Th(Xm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fs)return Fs[n](t)},has(e,n){return n in e||n in Fs}})):t.proxy}function c0(t){return Je(t)&&"__vccOpts"in t}const u0=(t,e)=>Km(t,e,Ks),f0="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rc;const Mu=typeof window<"u"&&window.trustedTypes;if(Mu)try{rc=Mu.createPolicy("vue",{createHTML:t=>t})}catch{}const lp=rc?t=>rc.createHTML(t):t=>t,d0="http://www.w3.org/2000/svg",h0="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,Su=hi&&hi.createElement("template"),p0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?hi.createElementNS(d0,t):e==="mathml"?hi.createElementNS(h0,t):n?hi.createElement(t,{is:n}):hi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>hi.createTextNode(t),createComment:t=>hi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Su.innerHTML=lp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Su.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},m0=Symbol("_vtc");function g0(t,e,n){const i=t[m0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Eu=Symbol("_vod"),_0=Symbol("_vsh"),v0=Symbol(""),x0=/(?:^|;)\s*display\s*:/;function y0(t,e,n){const i=t.style,r=bt(n);let s=!1;if(n&&!r){if(e)if(bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&As(i,a,"")}else for(const o in e)n[o]==null&&As(i,o,"");for(const o in n){o==="display"&&(s=!0);const a=n[o];a!=null?S0(t,o,!bt(e)&&e?e[o]:void 0,a)||As(i,o,a):As(i,o,"")}}else if(r){if(e!==n){const o=i[v0];o&&(n+=";"+o),i.cssText=n,s=x0.test(n)}}else e&&t.removeAttribute("style");Eu in t&&((!r||e!==n)&&(t[Eu]=s?i.display:""),t[_0]&&(i.display="none"))}const go=/\s*!important$/;function As(t,e,n){if(Ye(n))n.forEach(i=>As(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))go.test(n)?t.setProperty(e,n.replace(go,""),"important"):t.setProperty(e,n);else{const i=M0(t,e);go.test(n)?t.setProperty(Mr(i),n.replace(go,""),"important"):t[i]=n}}const bu=["Webkit","Moz","ms"],nl={};function M0(t,e){const n=nl[e];if(n)return n;let i=zn(e);if(i!=="filter"&&i in t)return nl[e]=i;i=sh(i);for(let r=0;r<bu.length;r++){const s=bu[r]+i;if(s in t)return nl[e]=s}return e}function S0(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&bt(i)&&n===i}const Tu="http://www.w3.org/1999/xlink";function Au(t,e,n,i,r,s=Em(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tu,e.slice(6,e.length)):t.setAttributeNS(Tu,e,n):n==null||s&&!ah(n)?t.removeAttribute(e):t.setAttribute(e,s?"":ei(n)?String(n):n)}function wu(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?lp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ah(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function E0(t,e,n,i){t.addEventListener(e,n,i)}function b0(t,e,n,i){t.removeEventListener(e,n,i)}const Ru=Symbol("_vei");function T0(t,e,n,i,r=null){const s=t[Ru]||(t[Ru]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=R0(e);if(i){const u=s[e]=P0(i,r);E0(t,a,u,l)}else o&&(b0(t,a,o,l),s[e]=void 0)}}const A0=/(Once|Passive|Capture)$/,w0=/^on:?(?:Once|Passive|Capture)$/;function R0(t){let e,n;for(;(n=t.match(A0))&&!w0.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Mr(t.slice(2)),e]}let il=0;const C0=Promise.resolve(),L0=()=>il||(C0.then(()=>il=0),il=Date.now());function P0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const r=n.value;if(Ye(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const u=o[l];u&&Vn(u,e,5,a)}}else Vn(r,e,5,[i])};return n.value=t,n.attached=L0(),n}const Cu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,D0=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?g0(t,i,o):e==="style"?y0(t,n,i):ba(e)?Ta(e)||T0(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):I0(t,e,i,o))?(wu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Au(t,e,i,o,s,e!=="value")):t._isVueCE&&(U0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!bt(i)))?wu(t,zn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Au(t,e,i,o))};function I0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Cu(e)&&Je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Cu(e)&&bt(n)?!1:e in t}function U0(t,e){const n=t._def.props;if(!n)return!1;const i=zn(e);return Array.isArray(n)?n.some(r=>zn(r)===i):Object.keys(n).some(r=>zn(r)===i)}const N0=Ft({patchProp:D0},p0);let Lu;function O0(){return Lu||(Lu=Wg(N0))}const F0=((...t)=>{const e=O0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=z0(i);if(!r)return;const s=e._component;!Je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,B0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function B0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function z0(t){return bt(t)?document.querySelector(t):t}/*! License details at fancyapps.com/license */const Pt=t=>typeof t=="object"&&t!==null&&t.constructor===Object&&Object.prototype.toString.call(t)==="[object Object]";/*! License details at fancyapps.com/license */const ut=t=>typeof t=="string";/*! License details at fancyapps.com/license */const Vr=t=>t&&t!==null&&t instanceof Element&&"nodeType"in t;/*! License details at fancyapps.com/license */const xi=function(t){var e=new DOMParser().parseFromString(t,"text/html").body;if(e.childElementCount>1){for(var n=document.createElement("div");e.firstChild;)n.appendChild(e.firstChild);return n}let i=e.firstChild;return!i||i instanceof HTMLElement?i:((n=document.createElement("div")).appendChild(i),n)};/*! License details at fancyapps.com/license */const H0=function(t){if(!(t&&t instanceof Element&&t.offsetParent))return!1;let e=!1,n=!1;if(t.scrollWidth>t.clientWidth){const i=window.getComputedStyle(t).overflowX,r=i.indexOf("hidden")!==-1,s=i.indexOf("clip")!==-1,o=i.indexOf("visible")!==-1;e=!r&&!s&&!o}if(t.scrollHeight>t.clientHeight){const i=window.getComputedStyle(t).overflowY,r=i.indexOf("hidden")!==-1,s=i.indexOf("clip")!==-1,o=i.indexOf("visible")!==-1;n=!r&&!s&&!o}return e||n},gr=function(t,e=void 0){return!t||t===document.body||e&&t===e?null:H0(t)?t:gr(t.parentElement,e)};/*! License details at fancyapps.com/license */const Pu=(t=!0,e="--f-scrollbar-compensate",n="--f-body-margin",i="hide-scrollbar")=>{const r=document,s=r.body,o=r.documentElement;if(t){if(s.classList.contains(i))return;let a=window.innerWidth-o.getBoundingClientRect().width;a<0&&(a=0),o.style.setProperty(e,`${a}px`);const l=parseFloat(window.getComputedStyle(s).marginRight);l&&s.style.setProperty(n,`${l}px`),s.classList.add(i)}else s.classList.remove(i),s.style.setProperty(n,""),r.documentElement.style.setProperty(e,"")};/*! License details at fancyapps.com/license */const hn=(t,...e)=>{const n=e.length;for(let i=0;i<n;i++){const r=e[i]||{};Object.entries(r).forEach(([s,o])=>{const a=Array.isArray(o)?[]:{};t[s]||Object.assign(t,{[s]:a}),Pt(o)?Object.assign(t[s],hn(t[s],o)):Array.isArray(o)?Object.assign(t,{[s]:[...o]}):Object.assign(t,{[s]:o})})}return t};/*! License details at fancyapps.com/license */function ea(){return!(typeof window>"u"||!window.document||!window.document.createElement)}/*! License details at fancyapps.com/license */const rt=function(t=0,e=0,n=0){return Math.max(Math.min(e,n),t)};/*! License details at fancyapps.com/license */const ha=function(t=0,e=0,n=0,i=0,r=0,s=!1){const o=(t-e)/(n-e)*(r-i)+i;return s?i<r?rt(i,o,r):rt(r,o,i):o};/*! License details at fancyapps.com/license */const Be=(t,e="")=>{t&&t.classList&&e.split(" ").forEach(n=>{n&&t.classList.add(n)})};/*! License details at fancyapps.com/license */const Rt=(t,e="")=>{t&&t.classList&&e.split(" ").forEach(n=>{n&&t.classList.remove(n)})};/*! License details at fancyapps.com/license */const Yt=(t,e="",n)=>{t&&t.classList&&e.split(" ").forEach(i=>{i&&t.classList.toggle(i,n||!1)})};/*! License details at fancyapps.com/license */function Du(t){return Pt(t)||Array.isArray(t)}function Zs(t,e){const n=Object.keys(t),i=Object.keys(e);return n.length===i.length&&n.every(r=>{const s=t[r],o=e[r];return typeof s=="function"?`${s}`==`${o}`:Du(s)&&Du(o)?Zs(s,o):s===o})}/*! License details at fancyapps.com/license */const cp=function(t){for(const e of pa)e.getState()===sn.Running&&e.tick(rl?t-rl:0);rl=t,qr=window.requestAnimationFrame(cp)};var sn,Di,kr;(function(t){t[t.Initializing=0]="Initializing",t[t.Running=1]="Running",t[t.Paused=2]="Paused",t[t.Completed=3]="Completed",t[t.Destroyed=4]="Destroyed"})(sn||(sn={})),(function(t){t[t.Spring=0]="Spring",t[t.Ease=1]="Ease"})(Di||(Di={})),(function(t){t[t.Loop=0]="Loop",t[t.Reverse=1]="Reverse"})(kr||(kr={}));const pa=new Set;let qr=null,rl=0;function Xi(){let t=sn.Initializing,e=Di.Ease,n=0,i=0,r=Xi.Easings.Linear,s=500,o=0,a=0,l=0,u=0,c=1/0,f=.01,p=.01,h=!1,v={},_=null,m={},d={},y={},x=0,E=0,P=kr.Loop,C=Xi.Easings.Linear;const R=new Map;function q(V,...I){for(const H of R.get(V)||[])H(...I)}function T(V){return i=0,V?_=setTimeout(()=>{D()},V):D(),ie}function D(){t=sn.Running,q("start",m,d)}function Y(){if(t=sn.Completed,y={},q("end",m),t===sn.Completed)if(n<x){if(n++,P===kr.Reverse){const V={...v};v={...d},d=V}T(E)}else n=0;return ie}const ie={getState:function(){return t},easing:function(V){return r=V,e=Di.Ease,y={},ie},duration:function(V){return s=V,ie},spring:function(V={}){e=Di.Spring;const I={velocity:0,mass:1,tension:170,friction:26,restDelta:.1,restSpeed:.1,maxSpeed:1/0,clamp:!0},{velocity:H,mass:B,tension:$,friction:j,restDelta:ne,restSpeed:re,maxSpeed:se,clamp:xe}={...I,...V};return o=H,a=B,l=$,u=j,p=ne,f=re,c=se,h=xe,y={},ie},isRunning:function(){return t===sn.Running},isSpring:function(){return e===Di.Spring},from:function(V){return m={...V},ie},to:function(V){return d=V,ie},repeat:function(V,I=0,H=kr.Loop,B){return x=V,E=I,P=H,C=B||r,ie},on:function(V,I){var H,B;return H=V,B=I,R.set(H,[...R.get(H)||[],B]),ie},off:function(V,I){var H,B;return H=V,B=I,R.has(H)&&R.set(H,R.get(H).filter($=>$!==B)),ie},start:function(V){return Zs(m,d)||(t=sn.Initializing,v={...m},pa.add(this),qr||(qr=window.requestAnimationFrame(cp)),T(V)),ie},pause:function(){return _&&(clearTimeout(_),_=null),t===sn.Running&&(t=sn.Paused,q("pause",m)),ie},end:Y,tick:function(V){V>50&&(V=50),i+=V;let I=0,H=!1;if(t!==sn.Running)return ie;if(e===Di.Ease){I=rt(0,i/s,1),H=I===1;const $=P===kr.Reverse?C:r;for(const j in m)m[j]=v[j]+(d[j]-v[j])*$(I)}if(e===Di.Spring){const $=.001*V;let j=0;for(const ne in m){const re=d[ne];let se=m[ne];if(typeof re!="number"||isNaN(re)||typeof se!="number"||isNaN(se))continue;if(Math.abs(re-se)<=p){m[ne]=re,y[ne]=0;continue}y[ne]||(typeof o=="object"&&typeof o[ne]=="number"?y[ne]=o[ne]:y[ne]=typeof o=="number"?o:0);let xe=y[ne];xe=rt(-1*Math.abs(c),xe,Math.abs(c));const k=xe*a*u;xe+=((se>re?-1:1)*(Math.abs(re-se)*l)-k)/a*$,se+=xe*$;const de=m[ne]>re?se<re:se>re;let Ee=Math.abs(xe)<f&&Math.abs(re-se)<=p;h&&de&&(Ee=!0),Ee?(se=re,xe=0):j++,m[ne]=se,y[ne]=xe}H=!j}const B={...d};return q("step",m,v,d,I),H&&t===sn.Running&&Zs(d,B)&&(t=sn.Completed,Y()),ie},getStartValues:function(){return v},getCurrentValues:function(){return m},getCurrentVelocities:function(){return y},getEndValues:function(){return d},destroy:function(){t=sn.Destroyed,_&&(clearTimeout(_),_=null),v=m=d={},pa.delete(this)}};return ie}Xi.destroy=()=>{for(const t of pa)t.destroy();qr&&(cancelAnimationFrame(qr),qr=null)},Xi.Easings={Linear:function(t){return t},EaseIn:function(t){return t===0?0:Math.pow(2,10*t-10)},EaseOut:function(t){return t===1?1:1-Math.pow(2,-10*t)},EaseInOut:function(t){return t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2}};/*! License details at fancyapps.com/license */function zs(t){return typeof TouchEvent<"u"&&t instanceof TouchEvent}function Hc(t,e){const n=[],i=zs(t)?t[e]:t instanceof MouseEvent&&(e==="changedTouches"||t.type!=="mouseup")?[t]:[];for(const r of i)n.push({x:r.clientX,y:r.clientY,ts:Date.now()});return n}function Iu(t){return Hc(t,"touches")}function Uu(t){return Hc(t,"targetTouches")}function up(t){return Hc(t,"changedTouches")}function Li(t){const e=t[0],n=t[1]||e;return{x:(e.x+n.x)/2,y:(e.y+n.y)/2,ts:n.ts}}function _o(t){const e=t[0],n=t[1]||t[0];return e&&n?-1*Math.sqrt((n.x-e.x)*(n.x-e.x)+(n.y-e.y)*(n.y-e.y)):0}const Nu=t=>{t.cancelable&&t.preventDefault()},Si={passive:!1},G0={panThreshold:5,swipeThreshold:3,ignore:["textarea","input","select","[contenteditable]","[data-selectable]","[data-draggable]"]};let vo=!1,ws=!0;const es=(t,e)=>{let n,i,r,s,o,a={...G0,...e},l=!0,u=[],c=[],f=[],p=!1,h=!1,v=!1,_=!1,m=0,d=0,y=0,x=0,E=0,P=0,C=0,R=0,q=0,T=[];const D=new Map;function Y(se){const xe=_o(c),k=_o(f),de=xe&&k?xe/k:0,Ee=Math.abs(C)>Math.abs(R)?C:R,Le={srcEvent:n,isPanRecognized:p,isSwipeRecognized:h,firstTouch:u,previousTouch:f,currentTouch:c,deltaX:y,deltaY:x,offsetX:E,offsetY:P,velocityX:C,velocityY:R,velocity:Ee,angle:q,axis:r,scale:de,center:i};for(const Ie of D.get(se)||[])Ie(Le)}function ie(se){const xe=se.target,k=se.composedPath()[0],de=a.ignore.join(","),Ee=Le=>Le&&Le instanceof HTMLElement&&(Le.matches(de)||Le.closest(de));if(Ee(xe)||Ee(k))return!1}function V(se){const xe=Date.now();if(T=T.filter(k=>!k.ts||k.ts>xe-100),se&&T.push(se),C=0,R=0,T.length>3){const k=T[0],de=T[T.length-1];if(k&&de){const Ee=de.x-k.x,Le=de.y-k.y,Ie=k.ts&&de.ts?de.ts-k.ts:0;Ie>0&&(C=Math.abs(Ee)>3?Ee/(Ie/30):0,R=Math.abs(Le)>3?Le/(Ie/30):0)}}}function I(se){if(!l||ie(se)===!1)return;if(typeof MouseEvent<"u"&&se instanceof MouseEvent){if(vo)return}else vo=!0;if(typeof MouseEvent<"u"&&se instanceof MouseEvent){if(!se.buttons||se.button!==0)return;Nu(se)}se instanceof MouseEvent&&(window.addEventListener("mousemove",H),window.addEventListener("mouseup",B)),window.addEventListener("blur",$),n=se,c=Uu(se),u=[...c],f=[],d=c.length,i=Li(c),d===1&&(p=!1,h=!1,v=!1),d&&V(Li(c));const xe=Date.now(),k=xe-(m||xe);_=k>0&&k<=250&&d===1,m=xe,clearTimeout(s),Y("start")}function H(se){var de;if(!u.length||se.defaultPrevented||ie(se)===!1)return;n=se,f=[...c],c=Iu(se);const xe=Li(f),k=Li(Iu(se));if(V(k),d=c.length,i=k,f.length===c.length?(y=k.x-xe.x,x=k.y-xe.y):(y=0,x=0),u.length){const Ee=Li(u);E=k.x-Ee.x,P=k.y-Ee.y}if(c.length>1){const Ee=_o(c),Le=_o(f);Math.abs(Ee-Le)>=.1&&(v=!0,Y("pinch"))}p||(p=Math.abs(E)>=a.panThreshold||Math.abs(P)>=a.panThreshold,p&&(ws=!1,clearTimeout(o),o=void 0,q=Math.abs(180*Math.atan2(P,E)/Math.PI),r=q>45&&q<135?"y":"x",u=[...c],f=[...c],E=0,P=0,y=0,x=0,(de=window.getSelection())==null||de.removeAllRanges(),Y("panstart"))),p&&(y||x)&&Y("pan"),Y("move")}function B(se){if(n=se,!u.length)return;const xe=Uu(se),k=up(se);if(d=xe.length,i=Li(k),k.length&&V(Li(k)),f=[...c],c=[...xe],u=[...xe],d>0)Y("end"),p=!1,h=!1,T=[];else{const de=a.swipeThreshold;(Math.abs(C)>de||Math.abs(R)>de)&&(h=!0),p&&Y("panend"),h&&Y("swipe"),p||h||v||(Y("tap"),_?Y("doubleTap"):s=setTimeout(function(){Y("singleTap")},250)),Y("end"),j()}}function $(){clearTimeout(s),j(),p&&Y("panend"),Y("end")}function j(){vo=!1,p=!1,h=!1,_=!1,d=0,T=[],c=[],f=[],u=[],y=0,x=0,E=0,P=0,C=0,R=0,q=0,r=void 0,window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",B),window.removeEventListener("blur",$),ws||o||(o=setTimeout(()=>{ws=!0,o=void 0},100))}function ne(se){const xe=se.target;vo=!1,xe&&!se.defaultPrevented&&(ws||(Nu(se),se.stopPropagation()))}const re={init:function(){return t&&(t.addEventListener("click",ne,Si),t.addEventListener("mousedown",I,Si),t.addEventListener("touchstart",I,Si),t.addEventListener("touchmove",H,Si),t.addEventListener("touchend",B),t.addEventListener("touchcancel",B)),re},on:function(se,xe){return(function(k,de){D.set(k,[...D.get(k)||[],de])})(se,xe),re},off:function(se,xe){return D.has(se)&&D.set(se,D.get(se).filter(k=>k!==xe)),re},enable:function(){return l=!0,re},disable:function(){return l=!1,u.length&&(h=!1,C=0,R=0,y=0,x=0,Y("end")),j(),re},isPointerDown:()=>d>0,destroy:function(){clearTimeout(s),clearTimeout(o),o=void 0,t&&(t.removeEventListener("click",ne,Si),t.removeEventListener("mousedown",I,Si),t.removeEventListener("touchstart",I,Si),t.removeEventListener("touchmove",H,Si),t.removeEventListener("touchend",B),t.removeEventListener("touchcancel",B)),t=null,j()}};return re};es.isClickAllowed=()=>ws;/*! License details at fancyapps.com/license */const Gc={IMAGE_ERROR:"This image couldn't be loaded. <br /> Please try again later.",MOVE_UP:"Move up",MOVE_DOWN:"Move down",MOVE_LEFT:"Move left",MOVE_RIGHT:"Move right",ZOOM_IN:"Zoom in",ZOOM_OUT:"Zoom out",TOGGLE_FULL:"Toggle zoom level",TOGGLE_1TO1:"Toggle zoom level",ITERATE_ZOOM:"Toggle zoom level",ROTATE_CCW:"Rotate counterclockwise",ROTATE_CW:"Rotate clockwise",FLIP_X:"Flip horizontally",FLIP_Y:"Flip vertically",RESET:"Reset",TOGGLE_FS:"Toggle fullscreen"};/*! License details at fancyapps.com/license */const Qi=t=>{t.cancelable&&t.preventDefault()},en=(t,e=1e4)=>(t=parseFloat(t+"")||0,Math.round((t+Number.EPSILON)*e)/e),Xn=t=>t instanceof HTMLImageElement;var Oe,Ou;(function(t){t.Reset="reset",t.Zoom="zoom",t.ZoomIn="zoomIn",t.ZoomOut="zoomOut",t.ZoomTo="zoomTo",t.ToggleCover="toggleCover",t.ToggleFull="toggleFull",t.ToggleMax="toggleMax",t.IterateZoom="iterateZoom",t.Pan="pan",t.Swipe="swipe",t.Move="move",t.MoveLeft="moveLeft",t.MoveRight="moveRight",t.MoveUp="moveUp",t.MoveDown="moveDown",t.RotateCCW="rotateCCW",t.RotateCW="rotateCW",t.FlipX="flipX",t.FlipY="flipY",t.ToggleFS="toggleFS"})(Oe||(Oe={})),(function(t){t.Cover="cover",t.Full="full",t.Max="max"})(Ou||(Ou={}));const Un={x:0,y:0,scale:1,angle:0,flipX:1,flipY:1};var Fu;(function(t){t[t.Init=0]="Init",t[t.Loading=1]="Loading",t[t.Error=2]="Error",t[t.Ready=3]="Ready",t[t.Destroyed=4]="Destroyed"})(Fu||(Fu={}));const sc={bounds:!0,classes:{container:"f-panzoom",wrapper:"f-panzoom__wrapper",content:"f-panzoom__content",viewport:"f-panzoom__viewport"},clickAction:Oe.ToggleFull,dblClickAction:!1,gestures:{},height:"auto",l10n:Gc,maxScale:4,minScale:1,mouseMoveFactor:1,panMode:"drag",protected:!1,singleClickAction:!1,spinnerTpl:'<div class="f-spinner"></div>',wheelAction:Oe.Zoom,width:"auto"};let xo,Bu=0,zu=0,yo=0;const oc=(t,e={},n={})=>{let i,r,s,o,a,l,u,c,f=0,p={...sc,...e},h={},v={...Un},_={...Un};const m=[];function d(g){let S=p[g];return S&&typeof S=="function"?S(M):S}function y(){return t&&t.parentElement&&i&&f===3}const x=new Map;function E(g,...S){const w=[...x.get(g)||[]];p.on&&w.push(p.on[g]);for(const b of w)b&&typeof b=="function"&&b(M,...S);g!=="*"&&E("*",g,...S)}function P(g){if(!y())return;const S=g.target;if(gr(S))return;const w=Date.now(),b=[-g.deltaX||0,-g.deltaY||0,-g.detail||0].reduce(function(he,_e){return Math.abs(_e)>Math.abs(he)?_e:he}),O=rt(-1,b,1);E("wheel",g,O);const X=d("wheelAction");if(!X||g.defaultPrevented)return;const K=_.scale;let Z=K*(O>0?1.5:.5);if(X===Oe.Zoom){const he=Math.abs(g.deltaY)<100&&Math.abs(g.deltaX)<100;if(w-zu<(he?200:45))return void Qi(g);zu=w;const _e=$(),J=re();if(en(Z)<en(_e)&&en(K)<=en(_e)?(yo+=Math.abs(O),Z=_e):en(Z)>en(J)&&en(K)>=en(J)?(yo+=Math.abs(O),Z=J):(yo=0,Z=rt(_e,Z,J)),yo>7)return}switch(Qi(g),X){case Oe.Pan:de(X,{srcEvent:g,deltaX:2*-g.deltaX,deltaY:2*-g.deltaY});break;case Oe.Zoom:de(Oe.ZoomTo,{srcEvent:g,scale:Z,center:{x:g.clientX,y:g.clientY}});break;default:de(X,{srcEvent:g})}}function C(g){var K,Z;const S=g.composedPath()[0];if(!es.isClickAllowed()||!Vr(S)||g.defaultPrevented||!(t!=null&&t.contains(S))||S.hasAttribute("disabled")||S.hasAttribute("aria-disabled")||S.hasAttribute("data-carousel-go-prev")||S.hasAttribute("data-carousel-go-next"))return;const w=S.closest("[data-panzoom-action]"),b=(K=w==null?void 0:w.dataset)==null?void 0:K.panzoomAction,O=((Z=w==null?void 0:w.dataset)==null?void 0:Z.panzoomValue)||"";if(b){switch(Qi(g),b){case Oe.ZoomTo:case Oe.ZoomIn:case Oe.ZoomOut:de(b,{scale:parseFloat(O||"")||void 0});break;case Oe.MoveLeft:case Oe.MoveRight:de(b,{deltaX:parseFloat(O||"")||void 0});break;case Oe.MoveUp:case Oe.MoveDown:de(b,{deltaY:parseFloat(O||"")||void 0});break;case Oe.ToggleFS:ye();break;default:de(b)}return}if(!(i!=null&&i.contains(S)))return;const X={srcEvent:g};if(de(d("clickAction"),X),d("dblClickAction")){const he=Date.now(),_e=he-(Bu||he);Bu=he,_e>0&&_e<=250?(xo&&(clearTimeout(xo),xo=void 0),de(d("dblClickAction"),X)):xo=setTimeout(()=>{de(d("singleClickAction"),X)},250)}}function R(g){if(c=g,!y()||!I()||v.scale<=1||_.scale<=1||((i==null?void 0:i.dataset.animationName)||"").indexOf("zoom")>-1)return;const S=H(_.scale);if(!S)return;const{x:w,y:b}=S;de(Oe.Pan,{deltaX:w-_.x,deltaY:b-_.y})}function q(){var g;t&&(Rt(t,"is-loading"),(g=t.querySelector(".f-spinner"))==null||g.remove())}function T(){if(!t||!r)return;if(q(),Xn(r)&&(!r.complete||!r.naturalWidth))return f=2,i==null||i.classList.add("has-error"),void E("error");E("loaded");const{width:g,height:S}=ie();Xn(r)&&(r.setAttribute("width",g+""),r.setAttribute("height",S+"")),i&&(Rt(i,"has-error"),Xn(r)&&(i.setAttribute("width",g+""),i.setAttribute("height",S+""),i.style.aspectRatio=`${g/S||""}`)),l=Xi().on("start",(b,O)=>{O.angle!==void 0&&(O.angle=90*Math.round(O.angle/90)),O.flipX!==void 0&&(O.flipX=O.flipX>0?1:-1),O.flipY!==void 0&&(O.flipY=O.flipY>0?1:-1),_={...Un,...O},k(),E("animationStart")}).on("pause",b=>{_={...Un,...b}}).on("step",b=>{if(!y())return void(l==null?void 0:l.end());if(v={...Un,...b},I()||!d("bounds")||te()||_.scale>v.scale||_.scale<j())return void Ee();const O=se(_.scale);let X=!1,K=!1,Z=!1,he=!1;v.x<O.x[0]&&(X=!0),v.x>O.x[1]&&(K=!0),v.y<O.y[0]&&(he=!0),v.y>O.y[1]&&(Z=!0);let _e=!1,J=!1,Me=!1,be=!1;_.x<O.x[0]&&(_e=!0),_.x>O.x[1]&&(J=!0),_.y<O.y[0]&&(be=!0),_.y>O.y[1]&&(Me=!0);let Re=!1;(K&&J||X&&_e)&&(_.x=rt(O.x[0],_.x,O.x[1]),Re=!0),(Z&&Me||he&&be)&&(_.y=rt(O.y[0],_.y,O.y[1]),Re=!0),Re&&l&&l.spring({tension:94,friction:17,maxSpeed:555*_.scale,restDelta:.1,restSpeed:.1,velocity:l.getCurrentVelocities()}).from(v).to(_).start(),Ee()}).on("end",()=>{a!=null&&a.isPointerDown()||xe(),l!=null&&l.isRunning()||(k(),E("animationEnd"))}),(function(){const b=d("gestures");if(!b||!o||!r)return;let O=!1;a=es(o,b).on("start",X=>{if(!d("gestures")||!l||!y()||I())return;const K=X.srcEvent;(v.scale>1||oe(v.angle)||X.currentTouch.length>1)&&(K==null||K.stopPropagation(),l.pause(),O=!0),X.currentTouch.length===1&&E("touchStart")}).on("move",X=>{var K;O&&(_.scale!==1||oe(_.angle)||X.currentTouch.length>1)&&(Qi(X.srcEvent),(K=X.srcEvent)==null||K.stopPropagation())}).on("pan",X=>{if(!O)return;const K=X.srcEvent;(_.scale!==1||oe(_.angle)||X.currentTouch.length>1)&&(Qi(K),de(Oe.Pan,X))}).on("swipe",X=>{O&&(_.scale>1||oe(_.angle))&&de(Oe.Swipe,X)}).on("tap",X=>{E("click",X)}).on("singleTap",X=>{E("singleClick",X)}).on("doubleTap",X=>{E("dblClick",X)}).on("pinch",X=>{O&&(X.scale>j()?de(Oe.ZoomIn,X):X.scale<j()?de(Oe.ZoomOut,X):de(Oe.Pan,X))}).on("end",X=>{O&&(X.currentTouch.length?(X.srcEvent.stopPropagation(),Qi(X.srcEvent),l==null||l.end()):(O=!1,k(),xe(),E("touchEnd")))}).init()})(),o&&(o.addEventListener("wheel",P,{passive:!1}),m.push(()=>{o==null||o.removeEventListener("wheel",P,{passive:!1})})),t==null||t.addEventListener("click",C),document==null||document.addEventListener("mousemove",R),m.push(()=>{t==null||t.removeEventListener("click",C),document==null||document.removeEventListener("mousemove",R)});const w=D();v={...w},_={...w},f=3,Ee(),k(),E("ready"),requestAnimationFrame(()=>{f===3&&(q(),o&&(o.style.visibility=""))})}function D(){const g={...d("startPos")||{}};let S=g.scale,w=1;w=typeof S=="string"?B(S):typeof S=="number"?S:j();const b={...Un,...g,scale:w},O=I()?H(w):void 0;if(O){const{x:X,y:K}=O;b.x=X,b.y=K}return b}function Y(){const g={top:0,left:0,width:0,height:0};if(i){const S=i.getBoundingClientRect();oe(_.angle)?(g.top=S.top+.5*S.height-.5*S.width,g.left=S.left+.5*S.width-.5*S.height,g.width=S.height,g.height=S.width):(g.top=S.top,g.left=S.left,g.width=S.width,g.height=S.height)}return g}function ie(){let g=d("width"),S=d("height");if(r&&g==="auto"){const w=r.getAttribute("width");g=w?parseFloat(w+""):r.dataset.width!==void 0?parseFloat(r.dataset.width+""):Xn(o)?o.naturalWidth:Xn(r)?r.naturalWidth:(i==null?void 0:i.getBoundingClientRect().width)||0}else g=ut(g)?parseFloat(g):g;if(r&&S==="auto"){const w=r.getAttribute("height");S=w?parseFloat(w+""):r.dataset.height!==void 0?parseFloat(r.dataset.height+""):Xn(o)?o.naturalHeight:Xn(r)?r.naturalHeight:(i==null?void 0:i.getBoundingClientRect().height)||0}else S=ut(S)?parseFloat(S):S;return{width:g,height:S}}function V(){const g=Y();return{width:g.width,height:g.height}}function I(){return d("panMode")==="mousemove"&&matchMedia("(hover: hover)").matches}function H(g){const S=c||d("event"),w=i==null?void 0:i.getBoundingClientRect();if(!S||!w||g<=1)return{x:0,y:0};const b=(S.clientX||0)-w.left,O=(S.clientY||0)-w.top,{width:X,height:K}=V(),Z=se(g);if(g>1){const be=d("mouseMoveFactor");be>1&&(g*=be)}let he=X*g,_e=K*g,J=.5*(he-X)-b/X*100/100*(he-X),Me=.5*(_e-K)-O/K*100/100*(_e-K);return J=rt(Z.x[0],J,Z.x[1]),Me=rt(Z.y[0],Me,Z.y[1]),{x:J,y:Me}}function B(g){if(!g)return _.scale;if(!t)return 1;const S=t.getBoundingClientRect(),w=Y(),{width:b,height:O}=ie(),X=J=>{if(typeof J=="number")return J;switch(J){case"min":case"base":return 1;case"cover":return Math.max(S.height/w.height,S.width/w.width)||1;case"full":case"max":{const Me=oe(_.angle)?O:b;return Me&&w.width?Me/w.width:1}}},K=d("minScale"),Z=d("maxScale"),he=Math.min(X("full"),X(K)),_e=typeof Z=="number"?X("full")*Z:Math.min(X("full"),X(Z));switch(g){case"min":return he;case"base":return rt(he,1,_e);case"cover":return X("cover");case"full":return Math.min(_e,X("full"));case"max":return _e}}function $(){return B("min")}function j(){return B("base")}function ne(){return B("full")}function re(){return B("max")}function se(g){const S={x:[0,0],y:[0,0]},w=t==null?void 0:t.getBoundingClientRect();if(!w)return S;const b=Y(),O=w.width,X=w.height;let K=b.width,Z=b.height,he=g=g===void 0?_.scale:g,_e=g;if(I()&&g>1){const J=d("mouseMoveFactor");J>1&&(K*g>O+.01&&(he*=J),Z*g>X+.01&&(_e*=J))}if(K*=he,Z*=_e,K>O){S.x[0]=.5*(O-K),S.x[1]=.5*(K-O);const J=.5*(b.left-w.left),Me=.5*(b.left+b.width-w.right);S.x[0]-=J+Me,S.x[1]-=J+Me}if(Z>X){S.y[0]=.5*(X-Z),S.y[1]=.5*(Z-X);const J=.5*(b.top-w.top),Me=.5*(b.top+b.height-w.bottom);S.y[0]-=J+Me,S.y[1]-=J+Me}return S}function xe(){if(!y()||!d("bounds")||!l)return;const g=$(),S=re(),w=rt(g,_.scale,S);if(_.scale<g-.01||_.scale>S+.01)return void de(Oe.ZoomTo,{scale:w});if(l.isRunning()||te())return;const b=se(w);_.x<b.x[0]||_.x>b.x[1]||_.y<b.y[0]||_.y>b.y[1]?(_.x=rt(b.x[0],_.x,b.x[1]),_.y=rt(b.y[0],_.y,b.y[1]),l.spring({tension:170,friction:17,restDelta:.001,restSpeed:.001,maxSpeed:1/0,velocity:l.getCurrentVelocities()}),l.from(v).to(_).start()):Ee()}function k(g){var Me;if(!y())return;const S=A(),w=te(),b=le(),O=Q(),X=Ie(),K=Ge();Yt(i,"is-fullsize",O),Yt(i,"is-expanded",b),Yt(i,"is-dragging",w),Yt(i,"can-drag",S),Yt(i,"will-zoom-in",X),Yt(i,"will-zoom-out",K);const Z=Ve(),he=N(),_e=He(),J=!y();for(const be of((Me=g||t)==null?void 0:Me.querySelectorAll("[data-panzoom-action]"))||[]){const Re=be.dataset.panzoomAction;let Te=!1;if(J)Te=!0;else switch(Re){case Oe.ZoomIn:Z||(Te=!0);break;case Oe.ZoomOut:_e||(Te=!0);break;case Oe.ToggleFull:{he||_e||(Te=!0);const Se=be.querySelector("g");Se&&(Se.style.display=O&&!Te?"none":"");break}case Oe.IterateZoom:{Z||_e||(Te=!0);const Se=be.querySelector("g");Se&&(Se.style.display=Z||Te?"":"none");break}case Oe.ToggleCover:case Oe.ToggleMax:Z||_e||(Te=!0)}Te?(be.setAttribute("aria-disabled",""),be.setAttribute("tabindex","-1")):(be.removeAttribute("aria-disabled"),be.removeAttribute("tabindex"))}}function de(g,S){var Te;if(!(g&&t&&r&&l&&y())||g===Oe.Swipe&&Math.abs(l.getCurrentVelocities().scale)>.01)return;const w={..._};let b={..._},O=se(I()?w.scale:v.scale);const X=l.getCurrentVelocities(),K=Y();S=S||{};const Z=(((Te=S.currentTouch)==null?void 0:Te.length)||0)>1,he=S.velocityX||0,_e=S.velocityY||0;let J=S.center;S.srcEvent&&(J=Li(up(S.srcEvent)));let Me=S.deltaX||0,be=S.deltaY||0;switch(g){case Oe.MoveRight:Me=S.deltaX||100;break;case Oe.MoveLeft:Me=S.deltaX||-100;break;case Oe.MoveUp:be=S.deltaY||-100;break;case Oe.MoveDown:be=S.deltaY||100}let Re=[];if(typeof g=="number")b.scale=g;else switch(g){case Oe.Reset:b={...Un},b.scale=j();break;case Oe.ZoomTo:case Oe.ZoomIn:case Oe.ZoomOut:case Oe.ToggleCover:case Oe.ToggleFull:case Oe.ToggleMax:case Oe.IterateZoom:case Oe.Zoom:b.scale=Le(g,S);break;case Oe.Pan:case Oe.Move:case Oe.MoveLeft:case Oe.MoveRight:case Oe.MoveUp:case Oe.MoveDown:if(te()){let Pe=1,Ue=1;b.x<=O.x[0]&&he<=0&&(Pe=Math.max(.01,1-Math.abs(1/K.width*Math.abs(b.x-O.x[0]))),Pe*=.2),b.x>=O.x[1]&&he>=0&&(Pe=Math.max(.01,1-Math.abs(1/K.width*Math.abs(b.x-O.x[1]))),Pe*=.2),b.y<=O.y[0]&&_e<=0&&(Ue=Math.max(.01,1-Math.abs(1/K.height*Math.abs(b.y-O.y[0]))),Ue*=.2),b.y>=O.y[1]&&_e>=0&&(Ue=Math.max(.01,1-Math.abs(1/K.height*Math.abs(b.y-O.y[1]))),Ue*=.2),b.x+=Me*Pe,b.y+=be*Ue}else b.x=rt(O.x[0],b.x+Me,O.x[1]),b.y=rt(O.y[0],b.y+be,O.y[1]);break;case Oe.Swipe:const Se=(Pe=0)=>Math.sign(Pe)*Math.pow(Math.abs(Pe),1.5);b.x+=rt(-1e3,Se(he),1e3),b.y+=rt(-1e3,Se(_e),1e3),_e&&!he&&(b.x=rt(O.x[0],b.x,O.x[1])),!_e&&he&&(b.y=rt(O.y[0],b.y,O.y[1])),X.x=he,X.y=_e;break;case Oe.RotateCW:b.angle+=90;break;case Oe.RotateCCW:b.angle-=90;break;case Oe.FlipX:b.flipX*=-1;break;case Oe.FlipY:b.flipY*=-1}if(v.angle!==void 0&&Math.abs(v.angle)>=360&&(b.angle-=360*Math.floor(v.angle/360),v.angle-=360*Math.floor(v.angle/360)),Re.length){const Se=Re.findIndex(Pe=>Pe>b.scale+1e-4);b.scale=Re[Se]||Re[0]}if(Z&&(b.scale=rt($()*(Z?.8:1),b.scale,re()*(Z?1.6:1))),I()){const Se=H(b.scale);if(Se){const{x:Pe,y:Ue}=Se;b.x=Pe,b.y=Ue}}else if(Math.abs(b.scale-w.scale)>1e-4){let Se=0,Pe=0;if(J)Se=J.x,Pe=J.y;else{const L=t.getBoundingClientRect();Se=L.x+.5*L.width,Pe=L.y+.5*L.height}let Ue=Se-K.left,z=Pe-K.top;Ue-=.5*K.width,z-=.5*K.height;const W=(Ue-w.x)/w.scale,G=(z-w.y)/w.scale;b.x=Ue-W*b.scale,b.y=z-G*b.scale,!Z&&d("bounds")&&(O=se(b.scale),b.x=rt(O.x[0],b.x,O.x[1]),b.y=rt(O.y[0],b.y,O.y[1]))}if(g===Oe.Swipe){let Se=94,Pe=17,Ue=500*b.scale,z=X;l.spring({tension:Se,friction:Pe,maxSpeed:Ue,restDelta:.1,restSpeed:.1,velocity:z})}else g===Oe.Pan||Z?l.spring({tension:900,friction:17,restDelta:.01,restSpeed:.01,maxSpeed:1}):l.spring({tension:170,friction:17,restDelta:.001,restSpeed:.001,maxSpeed:1/0,velocity:X});if(S.velocity===0||Zs(v,b))v={...b},_={...b},l.end(),Ee(),k();else{if(Zs(_,b))return;l.from(v).to(b).start()}E("action",g)}function Ee(){if(!r||!i||!o)return;const{width:g,height:S}=ie();Object.assign(i.style,{maxWidth:`min(${g}px, 100%)`,maxHeight:`min(${S}px, 100%)`});const w=(function(){const{width:be,height:Re}=ie(),{width:Te,height:Se}=V();if(!t)return{x:0,y:0,width:0,height:0,scale:0,flipX:0,flipY:0,angle:0,fitWidth:Te,fitHeight:Se,fullWidth:be,fullHeight:Re};let{x:Pe,y:Ue,scale:z,angle:W,flipX:G,flipY:L}=v,ue=1/ne(),fe=be,ae=Re,pe=v.scale*ue,we=_.scale*ue;const Ae=Math.max(Te,Se),Ne=Math.min(Te,Se);be>Re?(fe=Ae,ae=Ne):(fe=Ne,ae=Ae),pe=be>Re?Ae*z/be||1:Ae*z/Re||1;let ke=fe?be*we:0,ze=ae?Re*we:0,Xe=fe&&ae?be*pe/ke:0;return Pe=Pe+.5*fe-.5*ke,Ue=Ue+.5*ae-.5*ze,{x:Pe,y:Ue,width:ke,height:ze,scale:Xe,flipX:G,flipY:L,angle:W,fitWidth:Te,fitHeight:Se,fullWidth:be,fullHeight:Re}})(),{x:b,y:O,width:X,height:K,scale:Z,angle:he,flipX:_e,flipY:J}=w;let Me=`translate(${en(b,100)}px, ${en(O,100)}px)`;Me+=_e!==1||J!==1?` scaleX(${en(Z*_e)}) scaleY(${en(Z*J)})`:` scale(${en(Z)})`,he!==0&&(Me+=` rotate(${he}deg)`),o.style.width=`${en(X)}px`,o.style.height=`${en(K)}px`,o.style.transform=`${Me}`,E("render")}function Le(g=d("clickAction"),S={}){let w=_.scale,b=j(),O=[];if(typeof g=="number")b=g;else if(g){switch(g){case Oe.ZoomTo:b=S.scale||1;break;case Oe.ZoomIn:b=w*(S.scale||2);break;case Oe.ZoomOut:b=w*(S.scale||.5);break;case Oe.ToggleCover:O=[j(),B("cover")];break;case Oe.ToggleFull:O=[j(),ne()];break;case Oe.ToggleMax:O=[j(),re()];break;case Oe.IterateZoom:O=[j(),ne(),re()];break;case Oe.Zoom:{const X=ne();b=w>=X-.05?j():Math.min(X,w*(S.scale||2));break}}O.length&&(b=O.find(X=>X>w+1e-4)??j())}return g!==Oe.ZoomTo&&(b=rt($(),b,re())),b}function Ie(){return!!(y()&&Le()>_.scale)}function Ge(){return!!(y()&&Le()<_.scale)}function He(){return!!(y()&&_.scale>$())}function Ve(){return!!(y()&&_.scale<re())}function N(){return!!(y()&&_.scale<ne())}function A(){return!(!y()||!le()&&!oe(_.angle)||!a||I())}function oe(g){return Math.abs(g%180)===90}function te(){return!(!y()||!(a!=null&&a.isPointerDown())||I())}function le(){return!!(y()&&_.scale>j())}function Q(){return!!(y()&&_.scale>=ne())}function ye(){const g="in-fullscreen",S="with-panzoom-in-fullscreen";t==null||t.classList.toggle(g);const w=t==null?void 0:t.classList.contains(g);w?(document.documentElement.classList.add(S),document.addEventListener("keydown",F,!0)):(document.documentElement.classList.remove(S),document.removeEventListener("keydown",F,!0)),Ee(),E(w?"enterFS":"exitFS")}function F(g){g.key!=="Escape"||g.defaultPrevented||ye()}const M={canDrag:A,canZoomIn:Ve,canZoomOut:He,canZoomToFull:N,destroy:function(){E("destroy");for(const g of Object.values(h))g==null||g.destroy(M);for(const g of m)g();return i&&(i.style.aspectRatio="",i.style.maxWidth="",i.style.maxHeight=""),o&&(o.style.width="",o.style.height="",o.style.transform=""),i=void 0,r=void 0,o=void 0,v={...Un},_={...Un},l==null||l.destroy(),l=void 0,a==null||a.destroy(),a=void 0,f=4,M},emit:E,execute:de,getBoundaries:se,getContainer:function(){return t},getContent:function(){return r},getFullDim:ie,getGestures:function(){return a},getMousemovePos:H,getOptions:function(){return p},getPlugins:function(){return h},getScale:B,getStartPosition:D,getState:function(){return f},getTransform:function(g){return g===!0?_:v},getTween:function(){return l},getViewport:function(){return o},getWrapper:function(){return i},init:function(){return f=0,E("init"),(function(){for(const[g,S]of Object.entries({...n,...p.plugins||{}}))if(g&&!h[g]&&S instanceof Function){const w=S();w.init(M),h[g]=w}E("initPlugins")})(),(function(){var O,X,K;const g={...sc.classes,...d("classes")},S=(O=g.content)==null?void 0:O.split(" ").shift(),w=(X=g.wrapper)==null?void 0:X.split(" ").shift(),b=(K=g.viewport)==null?void 0:K.split(" ").shift();if(!(!S||!w||!b)&&t&&(Be(t,g.container),r=t.querySelector(`.${S}:not(.is-clone)`),!!r)){if(r.setAttribute("draggable","false"),i=t.querySelector(`.${w}`),i||(i=document.createElement("div"),Be(i,g.wrapper),r.insertAdjacentElement("beforebegin",i),i.insertAdjacentElement("afterbegin",r)),o=t.querySelector(`.${b}`),o||(o=document.createElement("div"),Be(o,g.viewport),i.insertAdjacentElement("beforeend",o)),o.contains(r)||o.insertAdjacentElement("afterbegin",r),s=t.querySelector(`.${S}.is-clone`),s||(s=r.cloneNode(!0),s.removeAttribute("id"),Be(s,"is-clone"),i.insertAdjacentElement("afterbegin",s)),r instanceof HTMLPictureElement&&(r=r.querySelector("img")),s instanceof HTMLPictureElement&&(s=s.querySelector("img")),o instanceof HTMLPictureElement&&(o=o.querySelector("img")),o&&(o.style.visibility="hidden",d("protected"))){o.addEventListener("contextmenu",he=>{Qi(he)});const Z=document.createElement("div");Be(Z,"f-panzoom__protected"),o.appendChild(Z)}E("initLayout")}})(),(function(){if(t&&i&&!u){let g=null;u=new ResizeObserver(()=>{y()&&(g=g||requestAnimationFrame(()=>{y()&&(k(),xe(),E("refresh")),g=null}))}),u.observe(i),m.push(()=>{u==null||u.disconnect(),u=void 0,g&&(cancelAnimationFrame(g),g=null)})}})(),(function(){if(!t||!r)return;if(!Xn(r)||!Xn(s))return void T();const g=()=>{r&&Xn(r)&&r.decode().then(()=>{T()}).catch(()=>{T()})};if(f=1,t.classList.add("is-loading"),E("loading"),s.src&&s.complete)return void g();(function(){if(!t||(t==null?void 0:t.querySelector(".f-spinner")))return;const w=d("spinnerTpl"),b=xi(w);b&&(b.classList.add("f-spinner"),t.classList.add("is-loading"),i==null||i.insertAdjacentElement("afterbegin",b))})(),s.addEventListener("load",g,!1),s.addEventListener("error",g,!1),m.push(()=>{s==null||s.removeEventListener("load",g,!1),s==null||s.removeEventListener("error",g,!1)})})(),M},isDragging:te,isExpanded:le,isFullsize:Q,isMousemoveMode:I,localize:function(g,S=[]){const w=d("l10n")||{};g=String(g).replace(/\{\{(\w+)\}\}/g,(b,O)=>w[O]||b);for(let b=0;b<S.length;b++)g=g.split(S[b][0]).join(S[b][1]);return g=g.replace(/\{\{(.*?)\}\}/g,(b,O)=>O)},off:function(g,S){for(const w of g instanceof Array?g:[g])x.has(w)&&x.set(w,x.get(w).filter(b=>b!==S));return M},on:function(g,S){for(const w of g instanceof Array?g:[g])x.set(w,[...x.get(w)||[],S]);return M},toggleFS:ye,updateControls:k,version:"6.1.15",willZoomIn:Ie,willZoomOut:Ge};return M};oc.l10n={en_EN:Gc},oc.getDefaults=()=>sc;/*! License details at fancyapps.com/license */const sl=(t,e)=>{let n=[];return t.childNodes.forEach(i=>{i.nodeType!==Node.ELEMENT_NODE||e&&!i.matches(e)||n.push(i)}),n};/*! License details at fancyapps.com/license */const Vc={...Gc,ERROR:"Something went wrong. <br /> Please try again later.",NEXT:"Next page",PREV:"Previous page",GOTO:"Go to page #%d",DOWNLOAD:"Download",TOGGLE_FULLSCREEN:"Toggle full-screen mode",TOGGLE_EXPAND:"Toggle full-size mode",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_AUTOPLAY:"Toggle slideshow"};/*! License details at fancyapps.com/license */var Hu,Gu;(function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Destroyed=2]="Destroyed"})(Hu||(Hu={})),(function(t){t[t.Loading=0]="Loading",t[t.Loaded=1]="Loaded",t[t.Error=2]="Error"})(Gu||(Gu={}));/*! License details at fancyapps.com/license */const er=t=>{t.cancelable&&t.preventDefault()},Rs={adaptiveHeight:!1,center:!0,classes:{container:"f-carousel",isEnabled:"is-enabled",isLTR:"is-ltr",isRTL:"is-rtl",isHorizontal:"is-horizontal",isVertical:"is-vertical",hasAdaptiveHeight:"has-adaptive-height",viewport:"f-carousel__viewport",slide:"f-carousel__slide",isSelected:"is-selected"},dragFree:!1,enabled:!0,errorTpl:'<div class="f-html">{{ERROR}}</div>',fill:!0,infinite:!0,initialPage:0,l10n:Vc,rtl:!1,slides:[],slidesPerPage:"auto",spinnerTpl:'<div class="f-spinner"></div>',transition:"fade",tween:{clamp:!0,mass:1,tension:160,friction:25,restDelta:1,restSpeed:1,velocity:0},vertical:!1};let Vu,ol,ku=0;const Wu=t=>document.getElementById(`${t.split("#").pop()}`),ma=(t,e={},n={})=>{ku++;let i,r,s,o,a,l=0,u={...Rs},c={...Rs},f={},p=null,h=null,v=0,_=0,m=0,d=!1,y=!1,x=!1,E="height",P=0,C=!0,R=0,q=0,T=0,D=0,Y="*",ie=[],V=[];const I=new Set;let H=[],B=[],$=0,j=0,ne=0;function re(z,...W){let G=c[z];return G&&G instanceof Function?G(Ue,...W):G}function se(z,W=[]){const G=re("l10n")||{};z=String(z).replace(/\{\{(\w+)\}\}/g,(L,ue)=>G[ue]||L);for(let L=0;L<W.length;L++)z=z.split(W[L][0]).join(W[L][1]);return z=z.replace(/\{\{(.*?)\}\}/g,(L,ue)=>ue)}const xe=new Map;function k(z,...W){const G=[...xe.get(z)||[]];c.on&&G.push(c.on[z]);for(const L of G)L&&L instanceof Function&&L(Ue,...W);z==="click"&&Z(W[0]),z!=="*"&&k("*",z,...W)}function de(){var L,ue;const z=hn({},Rs,u);let W="";const G=u.breakpoints||{};for(const[fe,ae]of Object.entries(G))window.matchMedia(fe).matches&&(W+=fe,hn(z,ae));if(a===void 0||W!==a){if(a=W,l!==0){let fe=(ue=(L=B[R])==null?void 0:L.slides[0])==null?void 0:ue.index;fe===void 0&&(fe=c.initialSlide),z.initialSlide=fe,z.slides=[];for(const ae of ie)ae.isVirtual&&z.slides.push(ae)}Te(),c=z,re("enabled")!==!1&&(l=0,k("init"),(function(){for(const[fe,ae]of Object.entries({...n,...c.plugins||{}}))if(fe&&!f[fe]&&ae instanceof Function){const pe=ae();pe.init(Ue,ma),f[fe]=pe}k("initPlugins")})(),(function(){if(!p)return;const fe=re("classes")||{};Be(p,fe.container);const ae=re("style");if(ae&&Pt(ae))for(const[pe,we]of Object.entries(ae))p.style.setProperty(pe,we);h=Array.from(p.querySelectorAll(`.${fe.viewport}`)).filter(pe=>pe.closest(`.${fe.container}`)===p).pop()||null,h||(h=document.createElement("div"),Be(h,fe.viewport),h.append(...sl(p,`.${fe.slide}`)),p.insertAdjacentElement("afterbegin",h)),p.carousel=Ue,k("initLayout")})(),(function(){if(!h)return;const fe=re("classes")||{};ie=[],[...sl(h,`.${fe.slide}`)].forEach(ae=>{if(ae.parentElement){const pe=ye({el:ae,isVirtual:!1,...ae.dataset||{}});k("createSlide",pe),ie.push(pe)}}),S();for(const ae of ie)k("addSlide",ae);Q(re("slides"));for(const ae of ie){const pe=ae.el;(pe==null?void 0:pe.parentElement)===h&&(Be(pe,c.classes.slide),Be(pe,ae.class),J(ae),k("attachSlideEl",ae))}k("initSlides")})(),w(),l=1,Be(p,(re("classes")||{}).isEnabled||""),Re(),He(),r=Xi().on("start",()=>{i&&i.isPointerDown()||(Ge(),Re())}).on("step",fe=>{const ae=P;P=fe.pos,P!==ae&&(C=!1,Re())}).on("end",fe=>{i!=null&&i.isPointerDown()||(P=fe.pos,r&&!d&&(P<T||P>D)?r.spring({clamp:!0,mass:1,tension:200,friction:25,velocity:0,restDelta:1,restSpeed:1}).from({pos:P}).to({pos:rt(T,P,D)}).start():C||(C=!0,k("settle")))}),Le(),(function(){if(!p||!h)return;p.addEventListener("click",K),document.addEventListener("mousemove",Ee),ol||(ol=function(ae){var Ne;const pe=ae.target;if(!(pe instanceof Element))return;const we=pe.closest("[data-carousel-target]"),Ae=(Ne=we==null?void 0:we.dataset)==null?void 0:Ne.carouselTarget;if(Ae){const ke=Wu(Ae),ze=ke==null?void 0:ke.carousel;ze==null||ze.emit("click",ae)}},document.addEventListener("click",ol));const fe=h.getBoundingClientRect();if($=fe.height,j=fe.width,!s){let ae=null;s=new ResizeObserver(()=>{ae||(ae=requestAnimationFrame(()=>{(function(){if(l!==1||!h)return;const pe=B.length,we=h.getBoundingClientRect(),Ae=we.height,Ne=we.width;pe>1&&(x&&Math.abs(Ae-$)<.5||!x&&Math.abs(Ne-j)<.5)||(w(),Le(),$=Ae,j=Ne,x&&!$||!x&&!j||p&&h&&(pe===B.length&&(i!=null&&i.isPointerDown())||(re("dragFree")&&(d||P>T&&P<D)?(Ge(),Re()):Me(R,{transition:!1}))))})(),ae=null}))}),s.observe(h)}})(),k("ready"))}}function Ee(z){Vu=z}function Le(){re("gestures")===!1?i&&(i.destroy(),i=void 0):i||(function(){const z=re("gestures");!i&&z!==!1&&h&&(i=es(h,z).on("start",W=>{var fe,ae;if(!r||re("gestures",W)===!1)return;const{srcEvent:G}=W;x&&zs(G)&&!gr(G.target)&&er(G),r.pause(),r.getCurrentVelocities().pos=0;const L=(fe=B[R])==null?void 0:fe.slides[0],ue=L==null?void 0:L.el;L&&I.has(L.index)&&ue&&(P=L.offset||0,P+=((function(pe){const we=window.getComputedStyle(pe),Ae=new DOMMatrixReadOnly(we.transform);return{width:Ae.m41||0,height:Ae.m42||0}})(ue)[E]||0)*(y&&!x?1:-1)),O(),d||(P<T||P>D)&&r.spring({clamp:!0,mass:1,tension:500,friction:25,velocity:((ae=r.getCurrentVelocities())==null?void 0:ae.pos)||0,restDelta:1,restSpeed:1}).from({pos:P}).to({pos:rt(T,P,D)}).start()}).on("move",W=>{var Xe,ot;if(re("gestures",W)===!1)return;const{srcEvent:G,axis:L,deltaX:ue,deltaY:fe}=W;if(zs(G)&&((Xe=G.touches)==null?void 0:Xe.length)>1)return;const ae=G.target,pe=gr(ae),we=pe?pe.scrollHeight>pe.clientHeight?"y":"x":void 0;if(pe&&pe!==h&&(!L||L===we))return;if(!L)return er(G),G.stopPropagation(),void G.stopImmediatePropagation();if(L==="y"&&!x||L==="x"&&x||(er(G),G.stopPropagation(),!r))return;const Ae=y&&!x?1:-1,Ne=x?fe:ue;let ke=r!=null&&r.isRunning()?r.getEndValues().pos:P,ze=1;d||(ke<=T&&Ne*Ae<0?(ze=Math.max(.01,1-(Math.abs(1/oe()*Math.abs(ke-T))||0)),ze*=.2):ke>=D&&Ne*Ae>0&&(ze=Math.max(.01,1-(Math.abs(1/oe()*Math.abs(ke-D))||0)),ze*=.2)),ke+=Ne*ze*Ae,r.spring({clamp:!0,mass:1,tension:700,friction:25,velocity:((ot=r.getCurrentVelocities())==null?void 0:ot.pos)||0,restDelta:1,restSpeed:1}).from({pos:P}).to({pos:ke}).start()}).on("panstart",W=>{re("gestures",W)!==!1&&(W==null?void 0:W.axis)===(x?"y":"x")&&Be(h,"is-dragging")}).on("panend",W=>{re("gestures",W)!==!1&&Rt(h,"is-dragging")}).on("end",W=>{var gn,ct;if(re("gestures",W)===!1)return;const{srcEvent:G,axis:L,velocityX:ue,velocityY:fe,currentTouch:ae}=W;if(ae.length>0||!r)return;const pe=G.target,we=gr(pe),Ae=we?we.scrollHeight>we.clientHeight?"y":"x":void 0,Ne=we&&(!L||L===Ae);x&&zs(G)&&!L&&K(G);const ke=B.length,ze=re("dragFree");if(!ke)return;let Xe=Ne?0:re("vertical")?fe:ue;L!==(x?"y":"x")&&(Xe=0);let ot=r!=null&&r.isRunning()?r.getEndValues().pos:P;const Ut=y&&!x?1:-1;if(Ne||(ot+=Xe*(ze?5:1)*Ut),!d&&(Xe*Ut<=0&&ot<T||Xe*Ut>=0&&ot>D)){let pt=0;return Math.abs(Xe)>0&&(pt=2*Math.abs(Xe),pt=Math.min(.3*oe(),pt)),ot=rt(T+-1*pt,ot,D+pt),void r.spring({clamp:!0,mass:1,tension:380,friction:25,velocity:-1*Xe,restDelta:1,restSpeed:1}).from({pos:P}).to({pos:ot}).start()}if(ze||(gn=f.Autoscroll)!=null&&gn.isEnabled())return void(Math.abs(Xe)>10?r.spring({clamp:!0,mass:1,tension:150,friction:25,velocity:-1*Xe,restDelta:1,restSpeed:1}).from({pos:P}).to({pos:ot}).start():r.isRunning()||C||(C=!0,k("settle")));if(!ze&&!((ct=f.Autoscroll)!=null&&ct.isEnabled())&&(!W.offsetX&&!W.offsetY||L==="y"&&!x||L==="x"&&x))return void Me(R,{transition:"tween"});let Wt=N(ot);Math.abs(Xe)>10&&Wt===R&&(Wt+=Xe>0?y&&!x?1:-1:y&&!x?-1:1),Me(Wt,{transition:"tween",tween:{velocity:-1*Xe}})}).init())})(),Yt(h,"is-draggable",!!i&&B.length>0)}function Ie(z="*"){var G;const W=[];for(const L of ie)(z==="*"||L.class&&L.class.includes(z)||L.el&&((G=L.el)!=null&&G.classList.contains(z)))&&W.push(L);o=void 0,Y=z,V=[...W]}function Ge(){if(!r)return;const z=N(r!=null&&r.isRunning()?r.getEndValues().pos:P);z!==R&&(o=R,R=z,J(),He(),Ve(),k("change",R,o))}function He(){var ue,fe;if(!p)return;for(const ae of p.querySelectorAll("[data-carousel-index]"))ae.innerHTML=R+"";for(const ae of p.querySelectorAll("[data-carousel-page]"))ae.innerHTML=R+1+"";for(const ae of p.querySelectorAll("[data-carousel-pages]"))ae.innerHTML=B.length+"";const z=re("classes")||{},W=Array.from(p.querySelectorAll("[data-carousel-go-to]")).filter(ae=>ae.closest(`.${z.container}`)===p);for(const ae of W)parseInt(((ue=ae.dataset)==null?void 0:ue.carouselGoTo)||"-1",10)===R?ae.setAttribute("aria-current","true"):ae.removeAttribute("aria-current");for(const ae of p.querySelectorAll("[data-carousel-go-prev]"))ae.toggleAttribute("aria-disabled",!Se()),Se()?ae.removeAttribute("tabindex"):ae.setAttribute("tabindex","-1");for(const ae of p.querySelectorAll("[data-carousel-go-next]"))ae.toggleAttribute("aria-disabled",!Pe()),Pe()?ae.removeAttribute("tabindex"):ae.setAttribute("tabindex","-1");let G=!1;const L=(fe=B[R])==null?void 0:fe.slides[0];L&&(L.downloadSrc||L.type==="image"&&L.src)&&(G=!0);for(const ae of p.querySelectorAll("[data-carousel-download]"))ae.toggleAttribute("aria-disabled",!G)}function Ve(z){var G;z||(z=(G=B[R])==null?void 0:G.slides[0]);const W=z==null?void 0:z.el;if(W)for(const L of W.querySelectorAll("[data-slide-index]"))L.innerHTML=z.index+1+""}function N(z){var ae,pe,we;if(!B.length)return 0;const W=te();let G=z;d?G-=Math.floor((z-((ae=B[0])==null?void 0:ae.pos))/W)*W||0:G=rt((pe=B[0])==null?void 0:pe.pos,z,(we=B[B.length-1])==null?void 0:we.pos);const L=new Map;let ue=0;for(const Ae of B){const Ne=Math.abs(Ae.pos-G),ke=Math.abs(Ae.pos-G-W),ze=Math.abs(Ae.pos-G+W),Xe=Math.min(Ne,ke,ze);L.set(ue,Xe),ue++}const fe=L.size>0?[...L.entries()].reduce((Ae,Ne)=>Ne[1]<Ae[1]?Ne:Ae):[R,0];return parseInt(fe[0])}function A(){return ne}function oe(){return v}function te(z=!0){return V.length?V.reduce((W,G)=>W+G.dim,0)+(V.length-(d&&z?0:1))*ne:0}function le(z){const W=te(),G=oe();if(!W||!h||!G)return[];const L=[];z=z===void 0?P:z,d&&(z-=Math.floor(z/W)*W||0);let ue=0;for(let fe of V){const ae=(pe=0)=>{L.indexOf(fe)>-1||(fe.pos=ue-z+pe||0,fe.offset+pe>z-fe.dim-_+.51&&fe.offset+pe<z+G+m-.51&&L.push(fe))};fe.offset=ue,d&&(ae(W),ae(-1*W)),ae(),ue+=fe.dim+ne}return L}function Q(z,W){const G=[];for(const L of Array.isArray(z)?z:[z]){const ue=ye({...L,isVirtual:!0});ue.el||(ue.el=document.createElement("div")),k("createSlide",ue),G.push(ue)}ie.splice(W===void 0?ie.length:W,0,...G),S();for(const L of G)k("addSlide",L),F(L);return Ie(Y),G}function ye(z){return(ut(z)||z instanceof HTMLElement)&&(z={html:z}),{index:-1,el:void 0,class:"",isVirtual:!0,dim:0,pos:0,offset:0,html:"",src:"",...z}}function F(z){let W=z.el;if(!z||!W)return;const G=z.html?z.html instanceof HTMLElement?z.html:xi(z.html):void 0;G&&(Be(G,"f-html"),z.htmlEl=G,Be(W,"has-html"),W.append(G),k("contentReady",z))}function M(z){if(!h||!z)return;let W=z.el;if(W){if(W.setAttribute("index",z.index+""),W.parentElement!==h){let G;Be(W,c.classes.slide),Be(W,z.class),J(z);for(const L of ie)if(L.index>z.index){G=L.el;break}h.insertBefore(W,G&&h.contains(G)?G:null),k("attachSlideEl",z)}return Ve(z),W}}function g(z){const W=z==null?void 0:z.el;W&&(W.remove(),b(W),k("detachSlideEl",z))}function S(){for(let z=0;z<ie.length;z++){const W=ie[z],G=W.el;G&&(W.index!==z&&b(G),G.setAttribute("index",`${z}`)),W.index=z}}function w(){var G,L,ue,fe,ae;if(!p||!h)return;y=re("rtl"),x=re("vertical"),E=x?"height":"width";const z=re("classes");if(Yt(p,z.isLTR,!y),Yt(p,z.isRTL,y),Yt(p,z.isHorizontal,!x),Yt(p,z.isVertical,x),Yt(p,z.hasAdaptiveHeight,re("adaptiveHeight")),v=0,_=0,m=0,ne=0,h){h.childElementCount||(h.style.display="grid");const pe=h.getBoundingClientRect();v=h.getBoundingClientRect()[E]||0;const we=window.getComputedStyle(h);ne=parseFloat(we.getPropertyValue("--f-carousel-gap"))||0,we.getPropertyValue("overflow-"+(x?"y":"x"))==="visible"&&(_=Math.abs(pe[x?"top":"left"]),m=Math.abs(window[x?"innerHeight":"innerWidth"]-pe[x?"bottom":"right"])),h.style.display=""}if(!v)return;const W=(function(){let pe=0;if(h){let we=document.createElement("div");we.style.display="block",Be(we,c.classes.slide),h.appendChild(we),pe=we.getBoundingClientRect()[E],we.remove(),we=void 0}return pe})();for(const pe of V){const we=pe.el;let Ae=0;if(!pe.isVirtual&&we&&Vr(we)){let Ne=!1;we.parentElement&&we.parentElement===h||(h.appendChild(we),Ne=!0),Ae=we.getBoundingClientRect()[E],Ne&&((G=we.parentElement)==null||G.removeChild(we))}else Ae=W;pe.dim=Ae}if(d=!1,re("infinite")){d=!0;const pe=te();let we=v+_+m;for(let Ae=0;Ae<V.length;Ae++){const Ne=((L=V[Ae])==null?void 0:L.dim)+ne;if(pe-Ne<we&&pe-Ne-we<Ne){d=!1;break}}}(function(){var gn;if(!p)return;const pe=oe(),we=te(!1);let Ae=re("slidesPerPage");Ae=Ae==="auto"?1/0:parseFloat(Ae+""),B=[];let Ne=0,ke=0;for(const ct of V)(!B.length||Ne+ct.dim-pe>.05||ke>=Ae)&&(B.push({index:B.length,slides:[],dim:0,offset:0,pos:0}),Ne=0,ke=0),(gn=B[B.length-1])==null||gn.slides.push(ct),Ne+=ct.dim+ne,ke++;const ze=re("center"),Xe=re("fill");let ot=0;for(const ct of B){ct.dim=(ct.slides.length-1)*ne;for(const pt of ct.slides)ct.dim+=pt.dim;ct.offset=ot,ct.pos=ot,ze!==!1&&(ct.pos-=.5*(pe-ct.dim)),Xe&&!d&&we>pe&&(ct.pos=rt(0,ct.pos,we-pe)),ot+=ct.dim+ne}const Ut=[];let Wt;for(const ct of B){const pt={...ct};Wt&&Math.abs(pt.pos-Wt.pos)<.1?(Wt.dim+=pt.dim,Wt.slides=[...Wt.slides,...pt.slides]):(Wt=pt,pt.index=Ut.length,Ut.push(pt))}B=Ut,R=rt(0,R,B.length-1)})(),T=((ue=B[0])==null?void 0:ue.pos)||0,D=((fe=B[B.length-1])==null?void 0:fe.pos)||0,l===0?(function(){var we;o=void 0,R=re("initialPage");const pe=re("initialSlide")||void 0;pe!==void 0&&(R=Ue.getPageIndex(pe)||0),R=rt(0,R,B.length-1),P=((we=B[R])==null?void 0:we.pos)||0,q=P})():q=((ae=B[R||0])==null?void 0:ae.pos)||0,k("refresh"),He()}function b(z){if(!z||!Vr(z))return;const W=parseInt(z.getAttribute("index")||"-1");let G="";for(const ue of Array.from(z.classList)){const fe=ue.match(/^f-(\w+)(Out|In)$/);fe&&fe[1]&&(G=fe[1]+"")}if(!z||!G)return;const L=[`f-${G}Out`,`f-${G}In`,"to-prev","to-next","from-prev","from-next"];z.removeEventListener("animationend",X),Rt(z,L.join(" ")),I.delete(W)}function O(){if(!h)return;const z=I.size>0;for(const W of V)b(W.el);I.clear(),z&&Re()}function X(z){var W;((W=z.animationName)==null?void 0:W.substring(0,2))==="f-"&&(b(z.target),I.size||(Rt(p,"in-transition"),!C&&Math.abs(Ue.getPosition(!0)-q)<.5&&(C=!0,k("settle"))),Re())}function K(z){Z(z),k("click",z)}function Z(z){var fe,ae;if(z.defaultPrevented)return;const W=z.composedPath()[0],G=W.closest("[data-carousel-target]"),L=(fe=G==null?void 0:G.dataset)==null?void 0:fe.carouselTarget;if(L&&Wu(L)!==p)return;if(W.closest("[data-carousel-go-prev]"))return er(z),void Ue.prev();if(W.closest("[data-carousel-go-next]"))return er(z),void Ue.next();const ue=W.closest("[data-carousel-go-to]");if(ue)return er(z),void Ue.goTo(parseFloat(ue.dataset.carouselGoTo||"")||0);if(W.closest("[data-carousel-download]")){er(z);const pe=(ae=B[R])==null?void 0:ae.slides[0];if(pe&&(pe.downloadSrc||pe.type==="image"&&pe.src)){const we=pe.downloadFilename,Ae=document.createElement("a"),Ne=pe.downloadSrc||pe.src||"";Ae.href=Ne,Ae.target="_blank",Ae.download=we||Ne,Ae.click()}return}}function he(z){var G;const W=z.el;W&&((G=W.querySelector(".f-spinner"))==null||G.remove())}function _e(z){var G;const W=z.el;W&&((G=W.querySelector(".f-html.is-error"))==null||G.remove(),Rt(W,"has-error"))}function J(z){var ae;z||(z=(ae=B[R])==null?void 0:ae.slides[0]);const W=z==null?void 0:z.el;if(!W)return;let G=re("formatCaption",z);G===void 0&&(G=z.caption),G=G||"";const L=re("captionEl");if(L&&L instanceof HTMLElement){if(z.index!==R)return;if(ut(G)&&(L.innerHTML=se(G+"")),G instanceof HTMLElement){if(G.parentElement===L)return;L.innerHTML="",G.parentElement&&(G=G.cloneNode(!0)),L.append(G)}return}if(!G)return;let ue=z.captionEl||W.querySelector(".f-caption");!ue&&G instanceof HTMLElement&&G.classList.contains("f-caption")&&(ue=G),ue||(ue=document.createElement("div"),Be(ue,"f-caption"),ut(G)?ue.innerHTML=se(G+""):G instanceof HTMLElement&&(G.parentElement&&(G=G.cloneNode(!0)),ue.append(G)));const fe=`f-caption-${ku}_${z.index}`;ue.setAttribute("id",fe),ue.dataset.selectable="true",Be(W,"has-caption"),W.setAttribute("aria-labelledby",fe),z.captionEl=ue,W.insertAdjacentElement("beforeend",ue)}function Me(z,W={}){var pe,we;let{transition:G,tween:L}={transition:c.transition,tween:c.tween,...W||{}};if(!p||!r)return;const ue=B.length;if(!ue||(function(Ae,Ne){var hs,ps,fo;if(!(p&&v&&r&&Ne&&ut(Ne)&&Ne!=="tween"))return!1;for(const Ga of H)if(v-Ga.dim>.5)return!1;if(_>.5||m>.5)return;const ke=B.length;let ze=Ae>R?1:-1;Ae=d?(Ae%ke+ke)%ke:rt(0,Ae,ke-1),y&&(ze*=-1);const Xe=(hs=B[R])==null?void 0:hs.slides[0],ot=Xe==null?void 0:Xe.index,Ut=(ps=B[Ae])==null?void 0:ps.slides[0],Wt=Ut==null?void 0:Ut.index,gn=(fo=B[Ae])==null?void 0:fo.pos;if(Wt===void 0||ot===void 0||ot===Wt||P===gn||Math.abs(v-((Ut==null?void 0:Ut.dim)||0))>1)return!1;C=!1,r.pause(),O(),Be(p,"in-transition"),P=q=gn;const ct=M(Xe),pt=M(Ut);return Ge(),ct&&(I.add(ot),ct.style.transform="",ct.addEventListener("animationend",X),Rt(ct,c.classes.isSelected),ct.inert=!1,Be(ct,`f-${Ne}Out to-${ze>0?"next":"prev"}`)),pt&&(I.add(Wt),pt.style.transform="",pt.addEventListener("animationend",X),Be(pt,c.classes.isSelected),pt.inert=!1,Be(pt,`f-${Ne}In from-${ze>0?"prev":"next"}`)),Re(),!0})(z,G))return;z=d?(z%ue+ue)%ue:rt(0,z,ue-1),q=((pe=B[z||0])==null?void 0:pe.pos)||0;const ae=r.isRunning()?r.getEndValues().pos:P;if(Math.abs(q-ae)<1)return P=q,R!==z&&(J(),o=R,R=z,He(),Ve(),k("change",R,o)),Re(),void(C||(C=!0,k("settle")));if(r.pause(),O(),d){const Ae=te(),Ne=Math.floor((ae-((we=B[0])==null?void 0:we.pos))/Ae)||0,ke=q+Ne*Ae;q=[ke+Ae,ke,ke-Ae].reduce(function(ze,Xe){return Math.abs(Xe-ae)<Math.abs(ze-ae)?Xe:ze})}G!==!1&&Pt(L)?r.spring(hn({},c.tween,L)).from({pos:P}).to({pos:q}).start():(P=q,Ge(),Re(),C||(C=!0,k("settle")))}function be(z){var G;let W=P;if(d&&z!==!0){const L=te();W-=(Math.floor((P-((G=B[0])==null?void 0:G.pos)||0)/L)||0)*L}return W}function Re(){var fe;if(!p||!h)return;H=le();const z=new Set,W=[],G=B[R],L=c.setTransform;let ue;for(const ae of V){const pe=I.has(ae.index),we=H.indexOf(ae)>-1,Ae=((fe=G==null?void 0:G.slides)==null?void 0:fe.indexOf(ae))>-1;if(ae.isVirtual&&!pe&&!we)continue;let Ne=M(ae);if(Ne&&(W.push(ae),Ae&&z.add(Ne),re("adaptiveHeight")&&Ae)){const ke=(Ne.lastElementChild||Ne).getBoundingClientRect().height;ue=ue==null?ke:Math.max(ue,ke)}}h&&ue&&(h.style.height=`${ue}px`),[...sl(h,`.${c.classes.slide}`)].forEach(ae=>{Yt(ae,c.classes.isSelected,z.has(ae));const pe=ie[parseInt(ae.getAttribute("index")||"-1")];if(!pe)return ae.remove(),void b(ae);const we=I.has(pe.index),Ae=H.indexOf(pe)>-1;if(pe.isVirtual&&!we&&!Ae)return void g(pe);if(ae.inert=!Ae,L===!1)return;let Ne=pe.pos?Math.round(1e4*pe.pos)/1e4:0,ke=0,ze=0,Xe=0,ot=0;we||(ke=x?0:y?-1*Ne:Ne,ze=x?Ne:0,Xe=ha(ke,0,pe.dim,0,100),ot=ha(ze,0,pe.dim,0,100)),L instanceof Function&&!we?L(Ue,pe,{x:ke,y:ze,xPercent:Xe,yPercent:ot}):ae.style.transform=ke||ze?`translate3d(${Xe}%, ${ot}%,0)`:""}),k("render",W)}function Te(){p==null||p.removeEventListener("click",K),document.removeEventListener("mousemove",Ee),I.clear(),s==null||s.disconnect(),s=void 0;for(const z of ie){let W=z.el;W&&Vr(W)&&(z.state=void 0,he(z),_e(z),z.isVirtual?(g(z),z.el=void 0):(b(W),W.style.transform="",h&&!h.contains(W)&&h.appendChild(W)))}for(const z of Object.values(f))z==null||z.destroy();f={},i==null||i.destroy(),i=void 0,r==null||r.destroy(),r=void 0;for(const[z,W]of Object.entries(c.classes||{}))z!=="container"&&Rt(p,W);Rt(h,"is-draggable")}function Se(){return d||R>0}function Pe(){return d||R<B.length-1}const Ue={add:function(z,W){var pe;let G=P;const L=R,ue=te(),fe=r!=null&&r.isRunning()?r.getEndValues().pos:P,ae=ue&&Math.floor((fe-(((pe=B[0])==null?void 0:pe.pos)||0))/ue)||0;return Q(z,W),Ie(Y),w(),r&&ue&&(L===R&&(G-=ae*ue),G===q?P=q:r.spring({clamp:!0,mass:1,tension:300,friction:25,restDelta:1,restSpeed:1}).from({pos:G}).to({pos:q}).start()),Re(),Ue},canGoPrev:Se,canGoNext:Pe,destroy:function(){return k("destroy"),window.removeEventListener("resize",de),Te(),xe.clear(),p=null,B=[],ie=[],c={...Rs},f={},V=[],a=void 0,Y="*",l=2,Ue},emit:k,filter:function(z="*"){return Ie(z),w(),P=rt(T,P,D),Re(),k("filter",z),Ue},getContainer:function(){return p},getGapDim:A,getGestures:function(){return i},getLastMouseMove:function(){return Vu},getOption:function(z){return re(z)},getOptions:function(){return c},getPage:function(){return B[R]},getPageIndex:function(z){if(z!==void 0){for(const W of B||[])for(const G of W.slides)if(G.index===z)return W.index;return-1}return R},getPageIndexFromPosition:N,getPageProgress:function(z,W){var pe;z===void 0&&(z=R);const G=B[z];if(!G)return z>R?-1:1;const L=te(),ue=A();let fe=G.pos,ae=be();if(d&&W!==!0){const we=Math.floor((ae-((pe=B[0])==null?void 0:pe.pos))/L)||0;ae-=we*L,fe=[fe+L,fe,fe-L].reduce(function(Ae,Ne){return Math.abs(Ne-ae)<Math.abs(Ae-ae)?Ne:Ae})}return(ae-fe)/(G.dim+ue)||0},getPageVisibility:function(z){var fe;z===void 0&&(z=R);const W=B[z];if(!W)return z>R?-1:1;const G=be(),L=oe();let ue=W.pos;if(d){const ae=te(),pe=ue+(Math.floor((G-((fe=B[0])==null?void 0:fe.pos))/ae)||0)*ae;ue=[pe+ae,pe,pe-ae].reduce(function(we,Ae){return Math.abs(Ae-G)<Math.abs(we-G)?Ae:we})}return ue>G&&ue+W.dim<G+L?1:ue<G?(ue+W.dim-G)/W.dim||0:ue+W.dim>G+L&&(G+L-ue)/W.dim||0},getPages:function(){return B},getPlugins:function(){return f},getPosition:be,getSlides:function(){return ie},getState:function(){return l},getTotalSlideDim:te,getTween:function(){return r},getViewport:function(){return h},getViewportDim:oe,getVisibleSlides:function(z){return z===void 0?H:le(z)},goTo:Me,hasNavigated:function(){return o!==void 0},hideError:_e,hideLoading:he,init:function(){if(!t||!Vr(t))throw new Error("No Element found");return l!==0&&(Te(),l=0),p=t,u=e,window.removeEventListener("resize",de),u.breakpoints&&window.addEventListener("resize",de),de(),Ue},isInfinite:function(){return d},isInTransition:function(){return I.size>0},isRTL:function(){return y},isSettled:function(){return C},isVertical:function(){return x},localize:se,next:function(z={}){return Me(R+1,z),Ue},off:function(z,W){for(const G of z instanceof Array?z:[z])xe.has(G)&&xe.set(G,xe.get(G).filter(L=>L!==W));return Ue},on:function(z,W){for(const G of z instanceof Array?z:[z])xe.set(G,[...xe.get(G)||[],W]);return Ue},prev:function(z={}){return Me(R-1,z),Ue},reInit:function(z={},W){return Te(),l=0,a=void 0,Y="*",e=z,u=z,Pt(W)&&(n=W),de(),Ue},remove:function(z){z===void 0&&(z=ie.length-1);const W=ie[z];return W&&(k("removeSlide",W),W.el&&(b(W.el),W.el.remove(),W.el=void 0),ie.splice(z,1),Ie(Y),w(),P=rt(T,P,D),Re()),Ue},setPosition:function(z){P=z,Ge(),Re()},showError:function(z,W){if(l===1){he(z),_e(z);const G=z.el;if(G){const L=document.createElement("div");Be(L,"f-html"),Be(L,"is-error"),L.innerHTML=se(W||"<p>{{ERROR}}</p>"),z.htmlEl=L,Be(G,"has-html has-error"),G.insertAdjacentElement("afterbegin",L),k("contentReady",z)}}return Ue},showLoading:function(z){const W=z.el,G=W==null?void 0:W.querySelector(".f-spinner");if(!W||G)return Ue;const L=re("spinnerTpl"),ue=xi(L);return ue&&(Be(ue,"f-spinner"),W.insertAdjacentElement("beforeend",ue)),Ue},version:"6.1.15"};return Ue};ma.l10n={en_EN:Vc},ma.getDefaults=()=>Rs;/*! License details at fancyapps.com/license */const dr=function(t="",e="",n=""){return t.split(e).join(n)};/*! License details at fancyapps.com/license */const Xu={tpl:t=>`<img class="f-panzoom__content" 
    ${t.srcset?'data-lazy-srcset="{{srcset}}"':""} 
    ${t.sizes?'data-lazy-sizes="{{sizes}}"':""} 
    data-lazy-src="{{src}}" alt="{{alt}}" />`},V0=()=>{let t;function e(c,f){const p=t==null?void 0:t.getOptions().Zoomable;let h=(Pt(p)?{...Xu,...p}:Xu)[c];return h&&typeof h=="function"&&f?h(f):h}function n(){t&&t.getOptions().Zoomable!==!1&&(t.on("addSlide",s),t.on("removeSlide",o),t.on("attachSlideEl",a),t.on("click",r),t.on("change",i),t.on("ready",i))}function i(){l();const c=(t==null?void 0:t.getVisibleSlides())||[];if(c.length>1||(t==null?void 0:t.getOption("transition"))==="slide")for(const f of c){const p=f.panzoomRef;p&&((t==null?void 0:t.getPage().slides)||[]).indexOf(f)<0&&p.execute(Oe.ZoomTo,{...p.getStartPosition()})}}function r(c,f){const p=f.target;p&&!f.defaultPrevented&&p.dataset.panzoomAction&&u(p.dataset.panzoomAction)}function s(c,f){const p=f.el;if(!t||!p||f.panzoomRef)return;const h=f.src||f.lazySrc||"",v=f.alt||f.caption||`Image #${f.index}`,_=f.srcset||f.lazySrcset||"",m=f.sizes||f.lazySizes||"";if(h&&ut(h)&&!f.html&&(!f.type||f.type==="image")){f.type="image",f.thumbSrc=f.thumbSrc||h;let P=e("tpl",f);P=dr(P,"{{src}}",h+""),P=dr(P,"{{srcset}}",_+""),P=dr(P,"{{sizes}}",m+""),p.insertAdjacentHTML("afterbegin",P)}const d=p.querySelector(".f-panzoom__content");if(!d)return;d.setAttribute("alt",v+"");const y=f.width&&f.width!=="auto"?parseFloat(f.width+""):"auto",x=f.height&&f.height!=="auto"?parseFloat(f.height+""):"auto",E=oc(p,{width:y,height:x,classes:{container:"f-zoomable"},event:()=>t==null?void 0:t.getLastMouseMove(),spinnerTpl:()=>(t==null?void 0:t.getOption("spinnerTpl"))||"",...e("Panzoom")});E.on("*",(P,C,...R)=>{t&&(C==="loading"&&(f.state=0),C==="loaded"&&(f.state=1),C==="error"&&(f.state=2,t==null||t.showError(f,"{{IMAGE_ERROR}}")),t.emit(`panzoom:${C}`,f,...R),C==="loading"&&t.emit("contentLoading",f),C==="ready"&&t.emit("contentReady",f),f.index===(t==null?void 0:t.getPageIndex())&&l())}),f.panzoomRef=E}function o(c,f){f.panzoomRef&&(f.panzoomRef.destroy(),f.panzoomRef=void 0)}function a(c,f){const p=f.panzoomRef;if(p)switch(p.getState()){case 0:p.init();break;case 3:p.execute(Oe.ZoomTo,{...p.getStartPosition(),velocity:0})}}function l(){var p,h;const c=(t==null?void 0:t.getContainer())||void 0,f=(h=(p=t==null?void 0:t.getPage())==null?void 0:p.slides[0])==null?void 0:h.panzoomRef;if(c)if(f)f.updateControls(c);else for(const v of c.querySelectorAll("[data-panzoom-action]")||[])v.setAttribute("aria-disabled",""),v.setAttribute("tabindex","-1")}function u(c,...f){var p;(p=t==null?void 0:t.getPage().slides[0].panzoomRef)==null||p.execute(c,...f)}return{init:function(c){t=c,t.on("initPlugins",n)},destroy:function(){if(t){t.off("initPlugins",n),t.off("addSlide",s),t.off("removeSlide",o),t.off("attachSlideEl",a),t.off("click",r),t.off("change",i),t.off("ready",i);for(const c of t.getSlides())o(0,c)}t=void 0},execute:u}};/*! License details at fancyapps.com/license */const $u={syncOnChange:!1,syncOnClick:!0,syncOnHover:!1},fp=()=>{let t,e;function n(){const h=t==null?void 0:t.getOptions().Sync;return Pt(h)?{...$u,...h}:$u}function i(h){var v,_,m;t&&h&&(e=h,t.getOptions().classes={...t.getOptions().classes,isSelected:""},t.getOptions().initialSlide=((_=(v=e.getPage())==null?void 0:v.slides[0])==null?void 0:_.index)||0,n().syncOnChange&&t.on("change",o),n().syncOnClick&&t.on("click",l),n().syncOnHover&&((m=t.getViewport())==null||m.addEventListener("mouseover",u)),(function(){!t||!e||(t.on("ready",s),t.on("refresh",c),e.on("change",a),e.on("filter",f))})())}function r(){const h=n().target;t&&h&&i(h)}function s(){p()}function o(){var h;if(t&&e){const v=((h=t.getPage())==null?void 0:h.slides)||[],_=e.getPageIndex(v[0].index||0);_>-1&&e.goTo(_,t.hasNavigated()?void 0:{tween:!1,transition:!1}),p()}}function a(){var h;if(t&&e){const v=t.getPageIndex(((h=e.getPage())==null?void 0:h.slides[0].index)||0);v>-1&&t.goTo(v,e.hasNavigated()?void 0:{tween:!1,transition:!1}),p()}}function l(h,v){var d;if(!t||!e||(d=t.getTween())!=null&&d.isRunning())return;const _=t==null?void 0:t.getOptions().classes.slide;if(!_)return;const m=v.target.closest(`.${_}`);if(m){const y=parseInt(m.getAttribute("index")||"")||0,x=e.getPageIndex(y);e.goTo(x)}}function u(h){t&&l(0,h)}function c(){var h;if(t&&e){const v=t.getPageIndex(((h=e.getPage())==null?void 0:h.slides[0].index)||0);v>-1&&t.goTo(v,{tween:!1,transition:!1}),p()}}function f(h,v){t&&e&&(t.filter(v),a())}function p(){var v,_,m;if(!e)return;const h=((_=(v=e.getPage())==null?void 0:v.slides[0])==null?void 0:_.index)||0;for(const d of(t==null?void 0:t.getSlides())||[])(m=d.el)==null||m.classList.toggle("is-selected",d.index===h)}return{init:function(h){t=h,t.on("initSlides",r)},destroy:function(){var h;t==null||t.off("ready",s),t==null||t.off("refresh",c),t==null||t.off("change",o),t==null||t.off("click",l),(h=t==null?void 0:t.getViewport())==null||h.removeEventListener("mouseover",u),e==null||e.off("change",a),e==null||e.off("filter",f),e=void 0,t==null||t.off("initSlides",r),t=void 0},getTarget:function(){return e}}};/*! License details at fancyapps.com/license */const qu={showLoading:!0,preload:1},Mo="is-lazyloading",Yu="is-lazyloaded",ju="has-lazyerror",dp=()=>{let t;function e(){const r=t==null?void 0:t.getOptions().Lazyload;return Pt(r)?{...qu,...r}:qu}function n(r){var u;const s=r.el;if(!s)return;const o=e(),a="[data-lazy-src],[data-lazy-srcset],[data-lazy-bg]",l=Array.from(s.querySelectorAll(a));s.matches(a)&&l.push(s);for(const c of l){const f=c.dataset.lazySrc,p=c.dataset.lazySrcset,h=c.dataset.lazySizes,v=c.dataset.lazyBg,_=(c instanceof HTMLImageElement||c instanceof HTMLSourceElement)&&(f||p),m=!!v;if(!_&&!m)continue;const d=f||p||v;if(d){if(_){const y=(u=c.parentElement)==null?void 0:u.classList.contains("f-panzoom__wrapper");o.showLoading&&(t==null||t.showLoading(r)),c.addEventListener("load",()=>{t==null||t.hideLoading(r),Rt(c,ju),c instanceof HTMLImageElement?c.decode().finally(()=>{Rt(c,Mo),Be(c,Yu)}).catch(()=>{}):(Rt(c,Mo),Be(c,Yu)),y||(t==null||t.emit("lazyLoad:loaded",r,c,d))}),c.addEventListener("error",()=>{t==null||t.hideLoading(r),Rt(c,Mo),Be(c,ju),y||(t==null||t.emit("lazyLoad:error",r,c,d))}),c.classList.add("f-lazyload"),c.classList.add(Mo),y||(t==null||t.emit("lazyLoad:load",r,c,d)),f&&(c.src=f),p&&(c.srcset=p),h&&(c.sizes=h)}else m&&(c.style.backgroundImage=`url('${v}')`);delete c.dataset.lazySrc,delete c.dataset.lazySrcset,delete c.dataset.lazySizes,delete c.dataset.lazyBg}}}function i(){if(!t)return;const r=[...t.getVisibleSlides()],s=e().preload;if(s>0){const o=t.getPosition(),a=t.getViewportDim();r.push(...t.getVisibleSlides(o+a*s),...t.getVisibleSlides(o-a*s))}for(const o of r)n(o)}return{init:function(r){t=r,t.on("render",i)},destroy:function(){t==null||t.off("render",i),t=void 0}}};/*! License details at fancyapps.com/license */const Ku='<svg width="24" height="24" viewBox="0 0 24 24" tabindex="-1">',Zu="</svg>",Ju={prevTpl:Ku+'<path d="M15 3l-9 9 9 9"></path>'+Zu,nextTpl:Ku+'<path d="M9 3l9 9-9 9"></path>'+Zu},k0=()=>{let t,e,n;function i(o){const a=(function(){const c=t==null?void 0:t.getOptions().Arrows;return Pt(c)?{...Ju,...c}:Ju})(),l=`<button data-carousel-go-${o} tabindex="0" class="f-button is-arrow is-${o}" title="{{${o.toUpperCase()}}}">`+a[`${o}Tpl`]+"</button>",u=xi(t.localize(l))||void 0;return u&&Be(u,a[`${o}Class`]),u}function r(){var o;e==null||e.remove(),e=void 0,n==null||n.remove(),n=void 0,(o=t==null?void 0:t.getContainer())==null||o.classList.remove("has-arrows")}function s(){t&&t.getOptions().Arrows!==!1&&t.getPages().length>1?((function(){if(!t)return;const o=t.getViewport();o&&(e||(e=i("prev"),e&&o.insertAdjacentElement("beforebegin",e)),n||(n=i("next"),n&&o.insertAdjacentElement("afterend",n)),Yt(t.getContainer(),"has-arrows",!0))})(),t&&(e==null||e.toggleAttribute("aria-disabled",!t.canGoPrev()),n==null||n.toggleAttribute("aria-disabled",!t.canGoNext()))):r()}return{init:function(o){t=o.on(["change","refresh"],s)},destroy:function(){r(),t==null||t.off(["change","refresh"],s),t=void 0}}};/*! License details at fancyapps.com/license */const hp='<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/>',al='<g><line x1="11" y1="8" x2="11" y2="14"></line></g>'+hp,Qu={moveLeft:["moveLeft","MOVE_LEFT",'<path d="M5 12h14M5 12l6 6M5 12l6-6"/>'],moveRight:["moveRight","MOVE_RIGHT",'<path d="M5 12h14M13 18l6-6M13 6l6 6"/>'],moveUp:["moveUp","MOVE_UP",'<path d="M12 5v14M18 11l-6-6M6 11l6-6"/>'],moveDown:["moveDown","MOVE_DOWN",'<path d="M12 5v14M18 13l-6 6M6 13l6 6"/>'],zoomOut:["zoomOut","ZOOM_OUT",hp],zoomIn:["zoomIn","ZOOM_IN",al],toggleFull:["toggleFull","TOGGLE_FULL",al],iterateZoom:["iterateZoom","ITERATE_ZOOM",al],toggle1to1:["toggleFull","TOGGLE_FULL",'<path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/>'],rotateCCW:["rotateCCW","ROTATE_CCW",'<path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/>'],rotateCW:["rotateCW","ROTATE_CW",'<path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/>'],flipX:["flipX","FLIP_X",'<path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/>'],flipY:["flipY","FLIP_Y",'<path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/>'],reset:["reset","RESET",'<path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>'],toggleFS:["toggleFS","TOGGLE_FS",'<g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g>']},kc={};for(const t of Object.keys(Qu)){const e=Qu[t];kc[t]={tpl:`<button data-panzoom-action="${e[0]}" class="f-button" title="{{${e[1]}}}"><svg>${e[2]}</svg></button>`}}/*! License details at fancyapps.com/license */var ef;(function(t){t.Left="left",t.middle="middle",t.right="right"})(ef||(ef={}));const tf={counter:{tpl:'<div class="f-counter"><span data-carousel-page></span>/<span data-carousel-pages></span></div>'},download:{tpl:'<button data-carousel-download class="f-button" title="{{DOWNLOAD}}"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></button>'},autoplay:{tpl:'<button data-autoplay-action="toggle" class="f-button" title="{{TOGGLE_AUTOPLAY}}"><svg><g><path d="M5 3.5 19 12 5 20.5Z"/></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'},thumbs:{tpl:'<button data-thumbs-action="toggle" class="f-button" title="{{TOGGLE_THUMBS}}"><svg><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1M9 21h1M14 21h1M19 21h1"/></svg></button>'},...kc},nf={absolute:!1,display:{left:[],middle:["zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY","reset"],right:[]},enabled:"auto",items:{}},pp=()=>{let t,e;function n(r){const s=t==null?void 0:t.getOptions().Toolbar;let o=(Pt(s)?{...nf,...s}:nf)[r];return o&&typeof o=="function"&&t?o(t):o}function i(){var _;if(!t||e||(t==null?void 0:t.getOptions().Toolbar)===!1)return;const r=t.getContainer();if(!r)return;let s=n("enabled");if(!s)return;const o=n("absolute"),a=t.getSlides().length>1;let l=!1,u=!1;for(const m of t.getSlides())m.panzoomRef&&(l=!0),(m.downloadSrc||m.type==="image"&&m.src)&&(u=!0);const c=((_=t.getPlugins().Thumbs)==null?void 0:_.isEnabled())||!1,f=a&&t.getPlugins().Autoplay||!1,p=t.getPlugins().Fullscreen&&(document.fullscreenEnabled||document.webkitFullscreenEnabled);if(s==="auto"&&(s=l),!s)return;e=r.querySelector(".f-carousel__toolbar")||void 0,e||(e=document.createElement("div"),Be(e,"f-carousel__toolbar"));const h=n("display"),v=hn({},tf,n("items"));for(const m of["left","middle","right"]){const d=h[m]||[],y=document.createElement("div");Be(y,`f-carousel__toolbar__column is-${m}`);for(const x of d){let E;if(ut(x)){if(x==="counter"&&!a||x==="autoplay"&&!f||Object.prototype.hasOwnProperty.call(kc,x)&&!l||x==="fullscreen"&&!p||x==="thumbs"&&!c||x==="download"&&!u)continue;E=v[x]}if(Pt(x)&&(E=x),E&&E.tpl){let P=t.localize(E.tpl);P=P.split("<svg>").join('<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24">');const C=xi(P);C&&(typeof E.click=="function"&&t&&C.addEventListener("click",R=>{R.preventDefault(),R.stopPropagation(),typeof E.click=="function"&&t&&E.click(t,R)}),y.append(C))}}e.append(y)}if(e.childElementCount){if(o&&Be(e,"is-absolute"),!e.parentElement){const m=n("parentEl");m?m.insertAdjacentElement("afterbegin",e):r.insertAdjacentElement("afterbegin",e)}r.contains(e)&&(Be(r,"has-toolbar"),o&&Be(r,"has-absolute-toolbar"))}}return{init:function(r){t=r,t==null||t.on("initSlides",i)},destroy:function(){t==null||t.off("initSlides",i),Rt(t==null?void 0:t.getContainer(),"has-toolbar has-absolute-toolbar"),e==null||e.remove(),e=void 0},add:function(r,s){tf[r]=s},isEnabled:function(){return!!e}}};/*! License details at fancyapps.com/license */const rf={autoStart:!0,pauseOnHover:!0,showProgressbar:!0,timeout:2e3},W0=()=>{let t,e,n=!1,i=!1,r=!1,s=null;function o(P){const C=t==null?void 0:t.getOptions().Autoplay;let R=(Pt(C)?{...rf,...C}:rf)[P];return R&&typeof R=="function"&&t?R(t):R}function a(){clearTimeout(e),e=void 0}function l(){if(!t||!n||r||i||e||!t.isSettled()||(function(){var R;const C=((R=t==null?void 0:t.getPage())==null?void 0:R.slides)||[];for(const q of C)if(q.state===0)return!0;return!1})())return;(function(){var q,T,D,Y;if(!t||(f(),!o("showProgressbar")))return;let C=o("progressbarParentEl");if(!C&&((q=t.getPlugins().Toolbar)!=null&&q.isEnabled())&&(C=t.getContainer()),!C&&((T=t.getPlugins().Toolbar)==null?void 0:T.isEnabled())!==!0){const ie=((D=t.getPages()[0])==null?void 0:D.slides)||[],V=((Y=t.getPage())==null?void 0:Y.slides)||[];ie.length===1&&V.length===1&&(C=V[0].el)}if(C||(C=t.getViewport()),!C)return;s=document.createElement("div"),Be(s,"f-progressbar"),C.prepend(s);const R=o("timeout")||1e3;s.style.animationDuration=`${R}ms`})();const P=o("timeout");e=setTimeout(()=>{t&&n&&!i&&(t.isInfinite()||t.getPageIndex()!==t.getPages().length-1?t.next():t.goTo(0))},P)}function u(){var C;if(!t||t.getPages().length<2||t.getOptions().Autoplay===!1||n)return;n=!0,t.emit("autoplay:start",o("timeout")),Be(t.getContainer(),"has-autoplay"),(C=t.getTween())==null||C.on("start",d);const P=t==null?void 0:t.getContainer();P&&o("pauseOnHover")&&matchMedia("(hover: hover)").matches&&(P.addEventListener("mouseenter",y,!1),P.addEventListener("mouseleave",x,!1)),t.on("change",_),t.on("settle",m),t.on("contentReady",h),t.on("panzoom:touchStart",c),t.on("panzoom:wheel",c),t.isSettled()&&l()}function c(){var P;if(a(),f(),t){if(n){t.emit("autoplay:end"),(P=t.getTween())==null||P.off("start",d);const C=t.getContainer();C&&(C.classList.remove("has-autoplay"),C.removeEventListener("mouseenter",y,!1),C.removeEventListener("mouseleave",x,!1))}t.off("change",_),t.off("settle",m),t.off("contentReady",h),t.off("panzoom:touchStart",c),t.off("panzoom:wheel",c)}n=!1,i=!1}function f(){s&&(s.remove(),s=null)}function p(){t&&t.getPages().length>1&&o("autoStart")&&u()}function h(){l()}function v(P,C){const R=C.target;R&&!C.defaultPrevented&&R.dataset.autoplayAction==="toggle"&&E.toggle()}function _(){!t||!(t!=null&&t.isInfinite())&&t.getPageIndex()===t.getPages().length-1?c():(a(),f())}function m(){l()}function d(){a(),f()}function y(){r=!0,n&&(a(),f())}function x(){r=!1,n&&!i&&(t!=null&&t.isSettled())&&l()}const E={init:function(P){t=P,t.on("ready",p),t.on("click",v)},destroy:function(){c(),t==null||t.off("ready",p),t==null||t.off("click",v),t=void 0},isEnabled:()=>n,pause:function(){i=!0,a(),f()},resume:function(){i=!1,n&&!r&&l()},start(){u()},stop(){c()},toggle(){n?c():u()}};return E};/*! License details at fancyapps.com/license */const ll={Carousel:{Lazyload:{showLoading:!1}},minCount:2,showOnStart:!0,thumbTpl:'<button aria-label="Slide to #{{page}}"><img draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>',type:"modern"};let cl;const X0=()=>{let t,e,n,i,r,s=0,o=0,a=!0;function l(V){const I=t==null?void 0:t.getOptions().Thumbs;let H=(Pt(I)?{...ll,...I}:ll)[V];return H&&typeof H=="function"&&t?H(t):H}function u(){if(!t||(t==null?void 0:t.getOptions().Thumbs)===!1)return!1;let V=0;for(const I of t.getSlides())I.thumbSrc&&V++;return V>=l("minCount")}function c(){return l("type")==="modern"}function f(){return l("type")==="scrollable"}function p(){const V=[],I=(t==null?void 0:t.getSlides())||[];for(const H of I)V.push({index:H.index,class:H.thumbClass,html:h(H)});return V}function h(V){const I=V.thumb?V.thumb instanceof HTMLImageElement?V.thumb.src:V.thumb:V.thumbSrc||void 0,H=V.thumbAlt===void 0?`Thumbnail #${(V.index||0)+1}`:V.thumbAlt+"";let B=l("thumbTpl");return B=dr(B,"{{alt}}",H),B=dr(B,"{{src}}",I+""),B=dr(B,"{{index}}",`${V.index||0}`),B=dr(B,"{{page}}",`${(V.index||0)+1}`),B}function v(V){return`<div index="${V.index||0}" class="f-thumbs__slide ${V.class||""}">${V.html||""}</div>`}function _(V=!1){var B;const I=t==null?void 0:t.getContainer();if(!t||!I||n||!u())return;const H=((B=l("Carousel"))==null?void 0:B.classes)||{};if(H.container=H.container||"f-thumbs",!n){const $=I.nextElementSibling;$!=null&&$.classList.contains(H.container)&&(n=$)}if(!n){n=document.createElement("div");const $=l("parentEl");$?$.insertAdjacentElement("beforeend",n):I.insertAdjacentElement("afterend",n)}Be(n,H.container),Be(n,"f-thumbs"),Be(n,`is-${l("type")}`),V&&Be(n,"is-hidden")}function m(){if(!n||!f())return;i=document.createElement("div"),Be(i,"f-thumbs__viewport");let V="";for(const I of p())typeof(I.html||"")=="string"&&(V+=v(I));i.innerHTML=V,n.append(i),n.addEventListener("click",I=>{I.preventDefault();const H=I.target.closest("[index]"),B=parseInt((H==null?void 0:H.getAttribute("index"))||"-1");t&&B>-1&&t.goTo(B)}),r=new IntersectionObserver(I=>{I.forEach(H=>{H.isIntersecting&&H.target instanceof HTMLImageElement&&(H.target.src=H.target.getAttribute("data-lazy-src")+"",H.target.removeAttribute("data-lazy-src"),r==null||r.unobserve(H.target))})},{root:i,rootMargin:"100px"}),n.querySelectorAll("[data-lazy-src]").forEach(I=>{r==null||r.observe(I)}),t==null||t.emit("thumbs:ready")}function d(){var H;if(!cl||!t||!n||f()||e)return;const V=p();if(!V.length)return;const I=hn({},{Sync:{target:t},Lazyload:{preload:1},slides:V,classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",slide:"f-thumbs__slide"},center:!0,fill:!c(),infinite:!1,dragFree:!0,rtl:t.getOptions().rtl||!1,slidesPerPage:B=>{let $=0;return c()&&((function(){if(!c()||!n)return;const j=ne=>n&&parseFloat(getComputedStyle(n).getPropertyValue("--f-thumb-"+ne))||0;s=j("width"),o=j("clip-width")})(),$=4*(s-o)),B&&B.getTotalSlideDim()<=B.getViewportDim()-$?1/0:1}},ll.Carousel||{},l("Carousel")||{});e=cl(n,I,{Sync:fp,Lazyload:dp}),e.on("ready",()=>{Be(n,"is-syncing"),t==null||t.emit("thumbs:ready"),c()&&(t==null||t.on("render",P))}),e.on("destroy",()=>{t==null||t.emit("thumbs:destroy")}),e.init(),(H=e.getGestures())==null||H.on("start",()=>{a=!1}),e.on("click",(B,$)=>{const j=$.target;if(j){const ne=j.matches("button")?j:j.firstElementChild;ne&&ne.matches("button")&&($.preventDefault(),ne.focus({preventScroll:!0}))}}),Be(t.getContainer(),"has-thumbs"),ie()}function y(){u()&&l("showOnStart")&&(_(),m())}function x(){var V;u()&&(d(),t==null||t.on("addSlide",R),t==null||t.on("removeSlide",q),t==null||t.on("click",T),t==null||t.on("refresh",D),(V=t==null?void 0:t.getGestures())==null||V.on("start",E),Y(!0))}function E(){var I,H;a=!0,((I=document.activeElement)==null?void 0:I.closest(".f-thumbs"))&&((H=document.activeElement)==null||H.blur())}function P(){var V,I;n==null||n.classList.toggle("is-syncing",(t==null?void 0:t.hasNavigated())===!1||((V=t==null?void 0:t.getTween())==null?void 0:V.isRunning())),ie(),(I=t==null?void 0:t.getGestures())!=null&&I.isPointerDown()&&(function(){if(!c()||!t||!e||!a)return;const H=e.getTween(),B=e.getPages(),$=t.getPageIndex()||0,j=t.getPageProgress()||0;if(!(t&&B&&B[$]&&H))return;const ne=H.isRunning()?H.getCurrentValues().pos:e.getPosition();if(ne===void 0)return;let re=B[$].pos+j*(s-o);re=rt(B[0].pos,re,B[B.length-1].pos),H.from({pos:ne}).to({pos:re}).start()})()}function C(){a=!0,Y()}function R(V,I){const H={html:h(I)};if(e)e.add(H,I.index);else if(i){const B=xi(v(H));if(B){i.append(B);const $=B.querySelector("img");$&&(r==null||r.observe($))}}}function q(V,I){var H;e?e.remove(I.index):i&&((H=i.querySelector(`[index="${I.index}"]`))==null||H.remove())}function T(V,I){var B;const H=I.target;I.defaultPrevented||((B=H==null?void 0:H.dataset)==null?void 0:B.thumbsAction)!=="toggle"||(n||(_(!0),m(),d()),n&&n.classList.toggle("is-hidden"))}function D(){Y()}function Y(V=!1){if(!t||!i||!f())return;const I=t.getPageIndex();i.querySelectorAll(".is-selected").forEach(B=>{B.classList.remove("is-selected")});const H=i.querySelector(`[index="${I}"]`);if(H){H.classList.add("is-selected");const B=i.getBoundingClientRect(),$=H.getBoundingClientRect(),j=H.offsetTop-i.offsetTop-.5*B.height+.5*$.height,ne=H.scrollLeft-i.scrollLeft-.5*B.width+.5*$.width;i.scrollTo({top:j,left:ne,behavior:V?"instant":"smooth"})}}function ie(){if(!c()||!t||!e)return;const V=(e==null?void 0:e.getSlides())||[];let I=-.5*s;for(const H of V){const B=H.el;if(!B)continue;let $=t.getPageProgress(H.index)||0;$=Math.max(-1,Math.min(1,$)),$>-1&&$<1&&(I+=.5*s*(1-Math.abs($))),$=Math.round(1e4*$)/1e4,I=Math.round(1e4*I)/1e4,B.style.setProperty("--progress",`${Math.abs($)}`),B.style.setProperty("--shift",`${t!=null&&t.isRTL()?-1*I:I}px`),$>-1&&$<1&&(I+=.5*s*(1-Math.abs($)))}}return{init:function(V,I){cl=I,t=V,t.on("ready",x),t.on("initSlides",y),t.on("change",C)},destroy:function(){var V,I;f()&&(t==null||t.emit("thumbs:destroy")),t==null||t.off("ready",x),t==null||t.off("initSlides",y),t==null||t.off("change",C),t==null||t.off("render",P),t==null||t.off("addSlide",R),t==null||t.off("click",T),t==null||t.off("refresh",D),(V=t==null?void 0:t.getGestures())==null||V.off("start",E),(I=t==null?void 0:t.getContainer())==null||I.classList.remove("has-thumbs"),t=void 0,e==null||e.destroy(),e=void 0,n==null||n.remove(),n=void 0},getCarousel:function(){return e},getContainer:function(){return n},getType:function(){return l("type")},isEnabled:u}};/*! License details at fancyapps.com/license */const sf={autosize:!1,iframeAttr:{allow:"autoplay; fullscreen",scrolling:"auto"},preload:!1},$0=()=>{let t;function e(){const h=t==null?void 0:t.getOptions().Html;return Pt(h)?hn({},sf,h):sf}function n(){return(t==null?void 0:t.getOptions().Html)!==!1}function i(h){return h.type==="iframe"||h.type==="pdf"||h.type==="gmap"}function r(h){const v=`${h}`;return v.match(/^\d+$/)?`${v}px`:v}function s(h){if(h===void 0||h==="")return;const v=`${h}`.trim();if(!v.match(/^\d+(\.\d+)?(px)?$/))return;const _=parseFloat(v);return Number.isFinite(_)?_:void 0}function o(h,v){const _=h[v]??e()[v];return _==="true"||_!=="false"&&_}function a(h,v){if(!n())return;let _=v.type,m=v.src;if(!_&&ut(m)){if(m.charAt(0)==="#"?_="inline":m.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.((a)?png|avif|gif|jp(g|eg)|pjp(eg)?|jfif|svg|webp|bmp|ico|tif(f)?)((\?|#).*)?$)/i)?_="image":m.match(/\.(pdf)((\?|#).*)?$/i)?_="pdf":m.match(/\.(html|php)((\?|#).*)?$/i)&&(_="iframe"),!_){const d=m.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+\.?\d+?)z))|(?:\?ll=))(.*)?/i);d&&(m=`https://maps.google.${d[1]}/?ll=${(d[2]?d[2]+"&z="+Math.floor(parseFloat(d[3]))+(d[4]?d[4].replace(/^\//,"&"):""):d[4]+"").replace(/\?/,"&")}&output=${d[4]&&d[4].indexOf("layer=c")>0?"svembed":"embed"}`,_="gmap")}if(!_){const d=m.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i);d&&(m=`https://maps.google.${d[1]}/maps?q=${d[2].replace("query=","q=").replace("api=1","")}&output=embed`,_="gmap")}_&&(v.src=m,v.type=_)}}function l(h,v){n()&&i(v)&&(function(_){const m=_.el,d=_.src;if(!t||!m||!d)return;const y=document.createElement("iframe");Be(y,"f-iframe");for(const[C,R]of Object.entries(e().iframeAttr||{}))y.setAttribute(C,R);y.onerror=()=>{_.state=2,t==null||t.showError(_,"{{IFRAME_ERROR}}")};const x=document.createElement("div");Be(x,"f-html"),x.append(y),_.htmlEl=x,_.contentEl=y,Be(m,`has-html has-iframe has-${_.type}`),m.prepend(x),f(_);const E=o(_,"preload"),P=o(_,"autosize");_.type==="iframe"&&(E||P)?(_.state=0,t.showLoading(_),Be(m,"is-loading"),y.onload=()=>{if(!t||t.getState()===2||!y.src.length||_.contentEl!==y||!y.isConnected)return;_.state=1;const C=y.dataset.ready!=="true";y.dataset.ready="true",p(_),t.hideLoading(_),C&&t.emit("contentReady",_),Rt(m,"is-loading")},y.src=`${d}`):(y.src=`${d}`,t.emit("contentReady",_))})(v)}function u(h,v){var _,m;if(i(v)){const d=v.el;t==null||t.hideError(v),(_=v.contentEl)==null||_.remove(),v.contentEl=void 0,(m=v.htmlEl)==null||m.remove(),v.htmlEl=void 0,d&&(Rt(d,"has-html has-iframe has-pdf has-gmap"),Rt(d,"is-loading"))}}function c(){for(const h of(t==null?void 0:t.getSlides())||[])i(h)&&(f(h),h.state===1&&p(h))}function f(h){const v=h.htmlEl;if(v&&i(h)&&(v.style.aspectRatio="",v.style.width="",v.style.height="",v.style.maxWidth="",v.style.maxHeight="",h.width&&(v.style.maxWidth=r(h.width)),h.height&&(v.style.maxHeight=r(h.height)),h.aspectRatio)){const _=h.aspectRatio.split("/"),m=parseFloat(_[0].trim()),d=_[1]?parseFloat(_[1].trim()):0,y=m&&d?m/d:m;v.offsetHeight;const x=v.getBoundingClientRect(),E=y<(x.width||1)/(x.height||1);v.style.aspectRatio=`${h.aspectRatio}`,v.style.width=E?"auto":"",v.style.height=E?"":"auto"}}function p(h){const v=h.contentEl,_=v==null?void 0:v.parentElement,m=_==null?void 0:_.style;let d=o(h,"autosize"),y=s(h.width)||0,x=s(h.height)||0;if(y&&x&&(d=!1),v&&_&&m&&d){try{const E=window.getComputedStyle(_),P=parseFloat(E.paddingLeft)+parseFloat(E.paddingRight),C=parseFloat(E.paddingTop)+parseFloat(E.paddingBottom),R=v.contentWindow;if(R){const q=R.document,T=q.getElementsByTagName("html")[0],D=q.body;m.width="";const Y=window.getComputedStyle(D),ie=parseFloat(Y.marginLeft)+parseFloat(Y.marginRight),V=D.style.overflow||"";D.style.overflow="hidden",y=y||D.scrollWidth+ie+P,m.flex="0 0 auto",m.width=`${y}px`,m.height=`${D.scrollHeight}px`,D.style.overflow=V,x=Math.max(T.scrollHeight,Math.ceil(T.getBoundingClientRect().height))+C}}catch{}(y||x)&&Object.assign(m,{flex:"0 1 auto",width:y?`${y}px`:"",height:x?`${x}px`:""})}}return{init:function(h){t=h,t.on("addSlide",a),t.on("attachSlideEl",l),t.on("detachSlideEl",u),t.on("refresh",c)},destroy:function(){t==null||t.off("addSlide",a),t==null||t.off("attachSlideEl",l),t==null||t.off("detachSlideEl",u),t==null||t.off("refresh",c),t=void 0}}};/*! License details at fancyapps.com/license */const of=(t,e={})=>{const n=new URL(t),i=new URLSearchParams(n.search),r=new URLSearchParams;for(const[a,l]of[...i,...Object.entries(e)]){let u=l+"";if(a==="t"){let c=u.match(/((\d*)m)?(\d*)s?/);c&&r.set("start",60*parseInt(c[2]||"0")+parseInt(c[3]||"0")+"")}else r.set(a,u)}let s=r+"",o=t.match(/#t=((.*)?\d+s)/);return o&&(s+=`#t=${o[1]}`),s},af={autoplay:!1,html5videoTpl:`<video class="f-html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
    <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,iframeAttr:{allow:"autoplay; fullscreen",scrolling:"no",referrerPolicy:"strict-origin-when-cross-origin",credentialless:""},vimeo:{byline:1,color:"00adef",controls:1,dnt:1,muted:0},youtube:{controls:1,enablejsapi:1,nocookie:1,rel:0,fs:1}},q0=()=>{let t,e=!1;function n(){const p=t==null?void 0:t.getOptions().Video;return Pt(p)?{...af,...p}:af}function i(){var p;return(p=t==null?void 0:t.getPage())==null?void 0:p.slides[0]}const r=p=>{var h;try{let v=JSON.parse(p.data);if(p.origin==="https://player.vimeo.com"){if(v.event==="ready")for(let _ of Array.from(((h=t==null?void 0:t.getContainer())==null?void 0:h.getElementsByClassName("f-iframe"))||[]))_ instanceof HTMLIFrameElement&&_.contentWindow===p.source&&(_.dataset.ready="true")}else if(p.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/)&&v.event==="onReady"){const _=document.getElementById(v.id);_&&(_.dataset.ready="true")}}catch{}};function s(p,h){const v=h.src;if(!ut(v))return;let _=h.type;if(!_||_==="html5video"){const m=v.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i);m&&(_="html5video",h.html5videoFormat=h.html5videoFormat||"video/"+(m[1]==="ogv"?"ogg":m[1]))}if(!_||_==="youtube"){const m=v.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i);if(m){const d={...n().youtube,...h.youtube||{}},y=`www.youtube${d.nocookie?"-nocookie":""}.com`,x=of(v,d),E=encodeURIComponent(m[2]);h.videoId=E,h.src=`https://${y}/embed/${E}?${x}`,h.thumb=h.thumb||`https://i.ytimg.com/vi/${E}/mqdefault.jpg`,_="youtube"}}if(!_||_==="vimeo"){const m=v.match(/^.+vimeo.com\/(?:\/)?(video\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/);if(m){const d={...n().vimeo,...h.vimeo||{}},y=of(v,d),x=encodeURIComponent(m[2]),E=m[5]||"";h.videoId=x,h.src=`https://player.vimeo.com/video/${x}?${E?`h=${E}${y?"&":""}`:""}${y}`,_="vimeo"}}h.type=_}function o(p,h){h.type==="html5video"&&(function(v){const _=v.el,m=v.src;if(!t||!_||!m)return;const d=v.html5videoTpl||n().html5videoTpl,y=v.html5videoFormat||n().html5videoFormat;if(!d)return;const x=v.poster||(v.thumb&&ut(v.thumb)?v.thumb:""),E=xi(d.replace(/\{\{src\}\}/gi,m+"").replace(/\{\{format\}\}/gi,y||"").replace(/\{\{poster\}\}/gi,x+""));if(!E)return;const P=document.createElement("div");Be(P,"f-html"),P.append(E),v.contentEl=E,v.htmlEl=P,Be(_,`has-${v.type}`),_.prepend(P),c(v),t.emit("contentReady",v)})(h),h.type!=="youtube"&&h.type!=="vimeo"||(function(v){const _=v.el,m=v.src;if(!t||!_||!m)return;const d=document.createElement("iframe");Be(d,"f-iframe"),d.setAttribute("id",`f-iframe_${v.videoId}`);for(const[x,E]of Object.entries(n().iframeAttr||{}))d.setAttribute(x,E);v.type==="youtube"&&(d.onload=()=>{var x;(t==null?void 0:t.getState())===1&&((x=d.contentWindow)==null||x.postMessage(JSON.stringify({event:"listening",id:d.getAttribute("id")}),"*"))}),d.onerror=()=>{t==null||t.showError(v,"{{IFRAME_ERROR}}")};const y=document.createElement("div");Be(y,"f-html"),y.append(d),v.contentEl=d,v.htmlEl=y,Be(_,`has-html has-iframe has-${v.type}`),d.src=`${v.src}`,_.prepend(y),c(v),t.emit("contentReady",v)})(h)}function a(p,h){var v,_;h.type!=="html5video"&&h.type!=="youtube"&&h.type!=="vimeo"||((v=h.contentEl)==null||v.remove(),h.contentEl=void 0,(_=h.htmlEl)==null||_.remove(),h.htmlEl=void 0),h.poller&&clearTimeout(h.poller)}function l(){e=!1}function u(){if(e)return;e=!0;const p=i();(p&&p.autoplay!==void 0?p.autoplay:n().autoplay)&&((function(){var m;const h=i(),v=h==null?void 0:h.el;if(v&&(h==null?void 0:h.type)==="html5video")try{const d=v.querySelector("video");if(d){const y=d.play();y!==void 0&&y.then(()=>{}).catch(x=>{d.muted=!0,d.play()})}}catch{}const _=h==null?void 0:h.htmlEl;_ instanceof HTMLIFrameElement&&((m=_.contentWindow)==null||m.postMessage('{"event":"command","func":"stopVideo","args":""}',"*"))})(),(function(){const h=i(),v=h==null?void 0:h.type;if(!(h==null?void 0:h.el)||v!=="youtube"&&v!=="vimeo")return;const m=()=>{if(h.contentEl&&h.contentEl instanceof HTMLIFrameElement&&h.contentEl.contentWindow){let d;if(h.contentEl.dataset.ready==="true")return d=h.type==="youtube"?{event:"command",func:"playVideo"}:{method:"play",value:"true"},d&&h.contentEl.contentWindow.postMessage(JSON.stringify(d),"*"),void(h.poller=void 0);h.type==="youtube"&&(d={event:"listening",id:h.contentEl.getAttribute("id")},h.contentEl.contentWindow.postMessage(JSON.stringify(d),"*"))}h.poller=setTimeout(m,250)};m()})())}function c(p){const h=p==null?void 0:p.htmlEl;if(p&&h&&(p.type==="html5video"||p.type==="youtube"||p.type==="vimeo")){if(h.style.aspectRatio="",h.style.width="",h.style.height="",h.style.maxWidth="",h.style.maxHeight="",p.width){let v=`${p.width}`;v.match(/^\d+$/)&&(v+="px"),h.style.maxWidth=`${v}`}if(p.height){let v=`${p.height}`;v.match(/^\d+$/)&&(v+="px"),h.style.maxHeight=`${v}`}if(p.aspectRatio){const v=p.aspectRatio.split("/"),_=parseFloat(v[0].trim()),m=v[1]?parseFloat(v[1].trim()):0,d=_&&m?_/m:_;h.offsetHeight;const y=h.getBoundingClientRect(),x=d<(y.width||1)/(y.height||1);h.style.aspectRatio=`${p.aspectRatio}`,h.style.width=x?"auto":"",h.style.height=x?"":"auto"}}}function f(){c(i())}return{init:function(p){t=p,t.on("addSlide",s),t.on("attachSlideEl",o),t.on("detachSlideEl",a),t.on("ready",u),t.on("change",l),t.on("settle",u),t.on("refresh",f),window.addEventListener("message",r)},destroy:function(){t==null||t.off("addSlide",s),t==null||t.off("attachSlideEl",o),t==null||t.off("detachSlideEl",a),t==null||t.off("ready",u),t==null||t.off("change",l),t==null||t.off("settle",u),t==null||t.off("refresh",f),window.removeEventListener("message",r),t=void 0}}};/*! License details at fancyapps.com/license */const lf={autoStart:!1,btnTpl:'<button data-fullscreen-action="toggle" class="f-button" title="{{TOGGLE_FULLSCREEN}}"><svg><g><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'},cf="in-fullscreen-mode",Y0=()=>{let t;function e(c){const f=t==null?void 0:t.getOptions().Fullscreen;let p=(Pt(f)?{...lf,...f}:lf)[c];return p&&typeof p=="function"&&t?p(t):p}function n(){var c;(c=t==null?void 0:t.getPlugins().Toolbar)==null||c.add("fullscreen",{tpl:e("btnTpl")})}function i(){if(e("autoStart")){const c=s();c&&a(c)}}function r(c,f){const p=f.target;p&&!f.defaultPrevented&&p.dataset.fullscreenAction==="toggle"&&u()}function s(){return e("el")||(t==null?void 0:t.getContainer())||void 0}function o(){const c=document;return c.fullscreenEnabled?!!c.fullscreenElement:!!c.webkitFullscreenEnabled&&!!c.webkitFullscreenElement}function a(c){const f=document;let p;return c||(c=f.documentElement),f.fullscreenEnabled?p=c.requestFullscreen():f.webkitFullscreenEnabled&&(p=c.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)),p&&p.then(()=>{c.classList.add(cf)}),p}function l(){const c=document;let f;return c.fullscreenEnabled?f=c.fullscreenElement&&c.exitFullscreen():c.webkitFullscreenEnabled&&(f=c.webkitFullscreenElement&&c.webkitExitFullscreen()),f&&f.then(()=>{var p;(p=s())==null||p.classList.remove(cf)}),f}function u(){if(o())l();else{const c=s();c&&a(c)}}return{init:function(c){t=c,t.on("initPlugins",n),t.on("ready",i),t.on("click",r)},destroy:function(){t==null||t.off("initPlugins",n),t==null||t.off("ready",i),t==null||t.off("click",r)},exit:l,inFullscreen:o,request:a,toggle:u}};/*! License details at fancyapps.com/license */let Zt,mp,ac=!1,lc=!1,Cs=!1,cc=!1;const Oa=()=>{const t=new URL(document.URL).hash,e=t.slice(1).split("-"),n=e[e.length-1],i=n&&/^\+?\d+$/.test(n)&&parseInt(e.pop()||"1",10)||1;return{urlHash:t,urlSlug:e.join("-"),urlIndex:i}},ul=()=>{const t=Zt==null?void 0:Zt.getInstance(),e=t==null?void 0:t.getState();return!(!t||e!==0&&e!==1)},Wc=()=>{if(!Zt||ul())return;const{urlSlug:t,urlIndex:e}=Oa();if(!t)return;let n=document.querySelector(`[data-slug="${t}"]`);n&&Zt.fromTriggerEl(n),ul()||(n=document.querySelectorAll(`[data-fancybox="${t}"]`)[e-1],n&&Zt.fromTriggerEl(n,{startIndex:e-1})),ul()&&n&&!n.closest("[inert]")&&n.scrollIntoView({behavior:"instant",block:"center",inline:"center"})},ta=t=>{const e=t.getOptions().Hash,n=t.getSlide();return n&&(n.slug||n.fancybox||(Pt(e)?e.slug:""))||""},uf=t=>{var s,o;const e=ta(t),n=t.getSlide();if(!n||!e)return"";let i=parseInt(n.index+"",10)+1,r=n.slug?`#${n.slug}`:`#${e}-${i}`;return(((o=(s=t.getCarousel())==null?void 0:s.getPages())==null?void 0:o.length)||0)<2&&(r=`#${e}`),r},j0=()=>{if(!Zt||Cs)return;const t=Zt==null?void 0:Zt.getInstance(),e=t==null?void 0:t.getCarousel(),{urlSlug:n,urlIndex:i}=Oa(),r=t==null?void 0:t.getOptions().Hash;if(r!==!1){if(t&&t.getState()===1&&e){const s=e.getSlides();for(const o of s||[])if(o.slug===n||(o.fancybox===n||Pt(r)&&r.slug===n)&&o.index===i-1)return lc=!1,void e.goTo(o.index);cc=!0,t.close(),cc=!1}Wc()}},ff=()=>{Zt&&(mp=setTimeout(()=>{ac=!0,Wc(),ac=!1},300),window.addEventListener("hashchange",j0,!1))};let Hs;function fl(){history.scrollRestoration&&Hs&&(history.scrollRestoration=Hs,Hs=void 0)}const na=()=>{let t,e="";function n(){var f;if(!t||!t.isTopMost()||t.getOptions().Hash===!1)return;if(ac){const p=t.getOptions().sync;p&&p.goTo(((f=t==null?void 0:t.getCarousel())==null?void 0:f.getPageIndex())||0,{transition:!1,tween:!1})}const s=t.getCarousel();if(!s||!t.getSlide())return;const o=ta(t);if(!o)return;const{urlHash:a,urlSlug:l}=Oa(),u=uf(t);a!==u&&(e=a),history.scrollRestoration&&!Hs&&(Hs=history.scrollRestoration,history.scrollRestoration="manual",window.addEventListener("beforeunload",fl)),s.on("change",i);const c=o!==l;try{window.history[c?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+u),c&&(lc=!0)}catch{}}function i(){if(!t||!t.isTopMost()||t.getOptions().Hash===!1||!t.getSlide()||!ta(t))return;const s=uf(t);Cs=!0;try{window.history.replaceState({},document.title,window.location.pathname+window.location.search+s)}catch{}Cs=!1}function r(){var s;if(!(!t||!t.isTopMost()||t.getOptions().Hash===!1||cc)&&ta(t)){Cs=!0;try{lc&&!(function(){if(window.parent===window)return!1;try{var o=window.frameElement}catch{o=null}return o===null?location.protocol==="data:":o.hasAttribute("sandbox")})()&&((s=document.activeElement)==null?void 0:s.nodeName)!=="IFRAME"?window.history.back():window.history.replaceState({},document.title,window.location.pathname+window.location.search+e)}catch{}Cs=!1}}return{init:function(s){clearTimeout(mp),t=s,t.on("ready",n),t.on("close",r)},destroy:function(){t==null||t.off("ready",n),t==null||t.off("close",r);const s=t==null?void 0:t.getCarousel();s&&s.off("change",i),t=void 0,Zt!=null&&Zt.getInstance()||(fl(),window.removeEventListener("beforeunload",fl))}}};na.getInfoFromURL=Oa,na.startFromUrl=Wc,na.setup=function(t){Zt||(Zt=t,ea()&&(/complete|interactive|loaded/.test(document.readyState)?ff():document.addEventListener("DOMContentLoaded",ff)))};/*! License details at fancyapps.com/license */const K0={...Vc,CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ELEMENT_NOT_FOUND:"HTML Element Not Found",IFRAME_ERROR:"Error Loading Page",NO_CAPTION:"No Caption",TOGGLE_SIDEBAR:"Toggle sidebar"};/*! License details at fancyapps.com/license */const gp='<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path d="M19.286 4.714 4.714 19.286M4.714 4.714l14.572 14.572" /></svg></button>';pp().add("close",{tpl:gp});const $n=t=>{t.cancelable&&t.preventDefault()},df=(t=null,e="",n)=>{if(!t||!t.parentElement||!e)return void(n&&n());_p(t);const i=r=>{r.target===t&&t.dataset.animationName&&(t.removeEventListener("animationend",i),delete t.dataset.animationName,n&&n(),t.classList.remove(e))};t.dataset.animationName=e,t.addEventListener("animationend",i),Be(t,e)},_p=t=>{t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!1,cancelable:!0,currentTarget:t}))};var St;(function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Closing=2]="Closing",t[t.Destroyed=3]="Destroyed"})(St||(St={}));const Js={ajax:null,backdropClick:"close",Carousel:{},closeButton:"auto",closeButtonTpl:gp,closeExisting:!1,delegateEl:void 0,dragToClose:!0,fadeEffect:!0,groupAll:!1,groupAttr:"data-fancybox",hideClass:"f-fadeOut",hideScrollbar:!0,id:void 0,idle:!1,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"prev",ArrowDown:"next",ArrowRight:"next",ArrowLeft:"prev"},l10n:K0,mainClass:"",mainStyle:{},mainTpl:`<dialog class="fancybox__dialog">
    <div class="fancybox__container" tabindex="0" aria-label="{{MODAL}}">
      <div class="fancybox__backdrop"></div>
      <div class="fancybox__carousel"></div>
    </div>
  </dialog>`,modal:!0,on:{},parentEl:void 0,placeFocusBack:!0,showClass:"f-zoomInUp",startIndex:0,sync:void 0,theme:"dark",triggerEl:void 0,triggerEvent:void 0,zoomEffect:!0},mi=new Map;let Z0=0;const hf="with-fancybox",J0=()=>{let t,e,n,i,r,s,o,a,l=St.Init,u={...Js},c=-1,f={},p=[],h=!1,v=!0,_=0;function m(F,...M){let g=u[F];return g&&typeof g=="function"?g(ye,...M):g}function d(F,M=[]){const g=m("l10n")||{};F=String(F).replace(/\{\{(\w+)\}\}/g,(S,w)=>g[w]||S);for(let S=0;S<M.length;S++)F=F.split(M[S][0]).join(M[S][1]);return F=F.replace(/\{\{(.*?)\}\}/g,(S,w)=>w)}const y=new Map;function x(F,...M){const g=[...y.get(F)||[]];for(const[S,w]of Object.entries(u.on||{}))(S===F||S.split(" ").indexOf(F)>-1)&&g.push(w);for(const S of g)S&&typeof S=="function"&&S(ye,...M);F!=="*"&&x("*",F,...M)}function E(){Rt(e,"is-revealing");try{document.activeElement===t&&((e==null?void 0:e.querySelector("[autofocus]"))||e).focus()}catch{}}function P(F,M){var g;se(M),I(),(g=M.el)==null||g.addEventListener("click",R),M.type!=="inline"&&M.type!=="clone"||(function(S){if(!i||!S||!S.el)return;let w=null;if(ut(S.src)){const b=S.src.split("#",2).pop();w=b?document.getElementById(b):null}if(w){if(Be(w,"f-html"),S.type==="clone"||w.closest(".fancybox__carousel")){w=w.cloneNode(!0);const b=w.dataset.animationName;b&&(w.classList.remove(b),delete w.dataset.animationName);let O=w.getAttribute("id");O=O?`${O}--clone`:`clone-${c}-${S.index}`,w.setAttribute("id",O)}else if(w.parentNode){const b=document.createElement("div");b.inert=!0,w.parentNode.insertBefore(b,w),S.placeholderEl=b}S.htmlEl=w,Be(S.el,"has-html"),S.el.prepend(w),w.classList.remove("hidden"),w.style.display==="none"&&(w.style.display=""),getComputedStyle(w).getPropertyValue("display")==="none"&&(w.style.display=w.dataset.display||"flex"),i==null||i.emit("contentReady",S)}else i==null||i.showError(S,"{{ELEMENT_NOT_FOUND}}")})(M),M.type==="ajax"&&(function(S){const w=S.el;if(!w||S.htmlEl||S.xhr)return;i==null||i.showLoading(S),S.state=0;const b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===XMLHttpRequest.DONE&&l===St.Ready)if(i==null||i.hideLoading(S),S.state=1,b.status===200){let X=b.responseText+"",K=null,Z=null;if(S.filter){const he=document.createElement("div");he.innerHTML=X,Z=he.querySelector(S.filter+"")}Z&&Z instanceof HTMLElement?K=Z:(K=document.createElement("div"),K.innerHTML=X),K.classList.add("f-html"),S.htmlEl=K,w.classList.add("has-html"),w.classList.add("has-ajax"),w.prepend(K),i==null||i.emit("contentReady",S)}else i==null||i.showError(S)};const O=m("ajax")||null;b.open(O?"POST":"GET",S.src+""),b.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),b.setRequestHeader("X-Requested-With","XMLHttpRequest"),b.send(O),S.xhr=b})(M)}function C(F,M){var g;xe(M),(g=M.el)==null||g.removeEventListener("click",R),M.type!=="inline"&&M.type!=="clone"||(function(S){const w=S.htmlEl,b=S.placeholderEl;w&&(getComputedStyle(w).getPropertyValue("display")!=="none"&&(w.style.display="none"),w.offsetHeight),b&&(w&&b.parentNode&&b.parentNode.insertBefore(w,b),b.remove()),S.htmlEl=void 0,S.placeholderEl=void 0})(M),M.xhr&&(M.xhr.abort(),M.xhr=void 0)}function R(F){if(!de())return;if(l!==St.Ready)return $n(F),void F.stopPropagation();if(F.defaultPrevented||!es.isClickAllowed())return;const M=F.composedPath()[0];M.closest(".fancybox__carousel")&&M.classList.contains("fancybox__slide")&&B(F)}function q(){v=!1,e&&i&&e.classList.remove("is-revealing"),I();const F=m("sync");if(i&&F){const M=F.getPageIndex(i.getPageIndex())||0;F.goTo(M,{transition:!1,tween:!1})}}function T(){var M;(function(){const g=i==null?void 0:i.getViewport();if(!i||!g||(r=es(g).init(),!r))return;re();let S=!1,w=0,b=0,O={},X=1;function K(){var J,Me;s==null||s.spring({clamp:!0,mass:1,tension:b===0?140:960,friction:17,restDelta:.1,restSpeed:.1,maxSpeed:1/0}).from({y:w}).to({y:b}).start();const he=((J=i==null?void 0:i.getViewport())==null?void 0:J.getBoundingClientRect().height)||0,_e=(Me=Ee())==null?void 0:Me.panzoomRef;if(he&&_e)if(b===0)_e.execute(Oe.Reset);else{const be=ha(Math.abs(w),0,.33*he,X,.77*X,!1);_e.execute(Oe.ZoomTo,{scale:be})}}const Z=he=>{var Me;const _e=he.srcEvent,J=_e.target;return m("dragToClose")&&i&&!(zs(_e)&&((Me=_e.touches)==null?void 0:Me.length)>1)&&J&&!gr(J)};s=Xi().on("step",he=>{if(e&&g&&l===St.Ready){const _e=g.getBoundingClientRect().height;w=Math.min(_e,Math.max(-1*_e,he.y));const J=ha(Math.abs(w),0,.65*_e,1,.2,!0);e.style.setProperty("--f-drag-opacity",J+""),e.style.setProperty("--f-drag-offset",w+"px")}}),r.on("start",function(){S||(s==null||s.pause(),b=w)}).on("panstart",he=>{var _e,J;if(!S&&Z(he)&&he.axis==="y"){$n(he.srcEvent),S=!0,oe(),(_e=i==null?void 0:i.getViewport())==null||_e.classList.add("is-dragging");const Me=(J=Ee())==null?void 0:J.panzoomRef;if(Me){X=Me.getTransform().scale||1;const be=Me.getOptions();O={...be},be.bounds=!1,be.gestures=!1}}else S=!1}).on("pan",function(he){S&&Z(he)&&($n(he.srcEvent),he.srcEvent.stopPropagation(),he.axis==="y"&&(b+=he.deltaY,K()))}).on("end",he=>{var _e,J,Me;if((_e=i==null?void 0:i.getViewport())==null||_e.classList.remove("is-dragging"),S){const be=(J=Ee())==null?void 0:J.panzoomRef;if(be){(Me=be.getTween())==null||Me.end();const Re=be.getOptions();Re.bounds=O.bounds||!1,Re.gestures=O.gestures||!1}Z(he)&&he.axis==="y"&&(Math.abs(he.velocityY)>5||Math.abs(w)>50)&&te(he.srcEvent,"f-throwOut"+(he.velocityY>0?"Down":"Up"))}S=!1,l===St.Ready&&w!==0&&(b=0,K())})})(),document.body.addEventListener("click",ne),document.body.addEventListener("pointerdown",H,{capture:!0}),document.body.addEventListener("keydown",j,{passive:!1,capture:!0}),I(),He();const F=m("sync");i&&F&&((M=F.getTween())==null||M.start()),k(Ee())}function D(){i!=null&&i.canGoNext()?He():A()}function Y(F,M){se(M)}function ie(F,M){se(M),k(M)}function V(){var M;const F=i==null?void 0:i.getPlugins().Thumbs;Yt(e,"has-thumbs",(F==null?void 0:F.isEnabled())||!1),Yt(e,"has-vertical-thumbs",!!F&&(F.getType()==="scrollable"||((M=F.getCarousel())==null?void 0:M.isVertical())===!0))}function I(){if(!e)return;const F=(i==null?void 0:i.getPages().length)||0,M=(i==null?void 0:i.getPageIndex())||0,g=e.querySelectorAll("[data-fancybox-index],[data-fancybox-page],[data-fancybox-pages]");for(const S of g)S.hasAttribute("data-fancybox-index")?S.textContent=String(M):S.hasAttribute("data-fancybox-page")?S.textContent=String(M+1):S.textContent=String(F)}function H(F){re(),a={x:F.clientX,y:F.clientY}}function B(F){if(F.composedPath()[0].closest("[data-fancybox-close]"))return void te(F);(function(M){if(!a)return!1;const g="clientX"in M?M:M.changedTouches[0];return!!g&&(Math.abs(g.clientX-a.x)>10||Math.abs(g.clientY-a.y)>10)})(F)||(x("backdropClick",F),!F.defaultPrevented&&m("backdropClick")&&te(F))}function $(){N()}function j(F){if(!de()||l!==St.Ready)return;const M=F.key,g=m("keyboard");if(!g||F.ctrlKey||F.altKey||F.shiftKey)return;const S=F.composedPath()[0];if(!Vr(S)||M!=="Escape"&&(b=>{const O=["input","textarea","select","option","video","iframe","[contenteditable]","[data-selectable]","[data-draggable]"].join(",");return b.matches(O)||b.closest(O)})(S)||(x("keydown",F),F.defaultPrevented))return;const w=g[M];if(w)switch(w){case"close":te(F);break;case"next":$n(F),i==null||i.next();break;case"prev":$n(F),i==null||i.prev()}}function ne(F){if(!de()||l!==St.Ready||(N(),F.defaultPrevented))return;const M=F.composedPath()[0],g=!!M.closest("[data-fancybox-close]"),S=M.classList.contains("fancybox__backdrop");(g||S)&&B(F)}function re(){r&&(m("dragToClose")?r.enable():r.disable())}function se(F){var X;const{el:M,htmlEl:g,panzoomRef:S,closeButtonEl:w}=F,b=S?S.getWrapper():g;if(!M||!M.parentElement||!b)return;let O=m("closeButton");if(O==="auto"&&(O=((X=i==null?void 0:i.getPlugins().Toolbar)==null?void 0:X.isEnabled())!==!0),O){if(!w){const K=xi(d(m("closeButtonTpl")));K&&(Be(K,"is-close-button"),F.closeButtonEl=b.insertAdjacentElement("afterbegin",K),Be(M,"has-close-btn"))}}else xe(F)}function xe(F){F.closeButtonEl&&(F.closeButtonEl.remove(),F.closeButtonEl=void 0),Rt(F.el,"has-close-btn")}function k(F){if(!(v&&i&&i.getState()===1&&F&&F.index===i.getOptions().initialPage&&F.el&&F.el.parentElement)||F.state!==void 0&&F.state!==1)return;v=!1;const M=F.panzoomRef,g=M==null?void 0:M.getTween(),S=m("zoomEffect")&&g?Ie(F):void 0;if(M&&g&&S){const{x:b,y:O,scale:X}=M.getStartPosition();return void g.spring({tension:215,friction:25,restDelta:.001,restSpeed:.001,maxSpeed:1/0}).from(S).to({x:b,y:O,scale:X}).start()}const w=(M==null?void 0:M.getContent())||F.htmlEl;w&&df(w,m("showClass",F))}function de(){var F;return((F=vt.getInstance())==null?void 0:F.getId())===c}function Ee(){var F;return(F=i==null?void 0:i.getPage())==null?void 0:F.slides[0]}function Le(){const F=Ee();return F?F.triggerEl||m("triggerEl"):void 0}function Ie(F){var he,_e;const M=F.thumbEl;if(!M||!(J=>{const Me=J.getBoundingClientRect(),be=J.closest("[style]"),Re=be==null?void 0:be.parentElement;if(be&&be.style.transform&&Re){const Pe=Re.getBoundingClientRect();if(Me.left<Pe.left||Me.left>Pe.left+Pe.width-Me.width||Me.top<Pe.top||Me.top>Pe.top+Pe.height-Me.height)return!1}const Te=Math.max(document.documentElement.clientHeight,window.innerHeight),Se=Math.max(document.documentElement.clientWidth,window.innerWidth);return!(Me.bottom<0||Me.top-Te>=0||Me.right<0||Me.left-Se>=0)})(M))return;const g=(_e=(he=F.panzoomRef)==null?void 0:he.getWrapper())==null?void 0:_e.getBoundingClientRect(),S=g==null?void 0:g.width,w=g==null?void 0:g.height;if(!S||!w)return;const b=M.getBoundingClientRect();let O=b.width,X=b.height,K=b.left,Z=b.top;if(!(!b||!O||!X)){if(M instanceof HTMLImageElement){const J=window.getComputedStyle(M).getPropertyValue("object-fit");if(J==="contain"||J==="scale-down"){const{width:Me,height:be}=((Re,Te,Se,Pe,Ue="contain")=>{if(Ue==="contain"||Re>Se||Te>Pe){const z=Se/Re,W=Pe/Te,G=Math.min(z,W);Re*=G,Te*=G}return{width:Re,height:Te}})(M.naturalWidth,M.naturalHeight,O,X,J);K+=.5*(O-Me),Z+=.5*(X-be),O=Me,X=be}}if(!(Math.abs(S/w-O/X)>.1))return{x:K+.5*O-(g.left+.5*S),y:Z+.5*X-(g.top+.5*w),scale:O/S}}}function Ge(){o&&clearTimeout(o),o=void 0,document.removeEventListener("mousemove",$)}function He(){if(h||o)return;const F=m("idle");F&&(o=setTimeout(Ve,F))}function Ve(){e&&(Ge(),Be(e,"is-idle"),document.addEventListener("mousemove",$),h=!0)}function N(){h&&(A(),He())}function A(){Ge(),e==null||e.classList.remove("is-idle"),h=!1}function oe(){const F=Le();var M;!F||(M=F.getBoundingClientRect()).bottom>0&&M.right>0&&M.left<(window.innerWidth||document.documentElement.clientWidth)&&M.top<(window.innerHeight||document.documentElement.clientHeight)||F.closest("[inert]")||F.scrollIntoView({behavior:"instant",block:"center",inline:"center"})}function te(F,M){var b,O,X,K,Z;if(l===St.Closing||l===St.Destroyed)return;const g=new Event("shouldClose",{bubbles:!0,cancelable:!0});if(x("shouldClose",g,F),g.defaultPrevented)return;if(Ge(),F){if(F.defaultPrevented)return;$n(F),F.stopPropagation(),F.stopImmediatePropagation()}if(l=St.Closing,s==null||s.pause(),r==null||r.destroy(),i){(b=i.getGestures())==null||b.destroy(),(O=i.getTween())==null||O.pause();for(const he of i.getSlides()){const _e=he.panzoomRef;_e&&(hn(_e.getOptions(),{clickAction:!1,dblClickAction:!1,wheelAction:!1,bounds:!1,minScale:0,maxScale:1/0}),(X=_e.getGestures())==null||X.destroy(),(K=_e.getTween())==null||K.pause())}}const S=i==null?void 0:i.getPlugins();(Z=S==null?void 0:S.Autoplay)==null||Z.stop();const w=S==null?void 0:S.Fullscreen;w&&w.inFullscreen()?Promise.resolve(w.exit()).then(()=>{setTimeout(()=>{le(F,M)},150)}):le(F,M)}function le(F,M){var _e,J;if(l!==St.Closing)return;x("close",F),v=!1,document.body.removeEventListener("click",ne),document.body.removeEventListener("pointerdown",H,{capture:!0}),document.body.removeEventListener("keydown",j,{passive:!1,capture:!0}),a=void 0,m("placeFocusBack")&&oe();const g=document.activeElement;g&&(t!=null&&t.contains(g))&&g.blur(),m("fadeEffect")&&(e==null||e.classList.remove("is-ready"),e==null||e.classList.add("is-hiding")),e==null||e.classList.add("is-closing");const S=Ee(),w=S==null?void 0:S.el,b=S==null?void 0:S.panzoomRef,O=(_e=S==null?void 0:S.panzoomRef)==null?void 0:_e.getTween(),X=M||m("hideClass");let K=!1,Z=!1;if(i&&S&&w&&b&&O){let Me;if(m("zoomEffect")&&S.state===1&&(Me=Ie(S)),Me){K=!0;const be=()=>{Me=Ie(S),Me?O.to({...Un,...Me}):Q()};b.on("refresh",()=>{be()}),O.easing(Xi.Easings.EaseOut).duration(350).from({...b.getTransform()}).to({...Un,...Me}).start(),w!=null&&w.getAnimations()&&(w.style.animationPlayState="paused",requestAnimationFrame(()=>{be()}))}}const he=(S==null?void 0:S.htmlEl)||((J=S==null?void 0:S.panzoomRef)==null?void 0:J.getWrapper());he&&_p(he),!K&&X&&he&&(Z=!0,df(he,X,()=>{Q()})),K||Z?setTimeout(()=>{Q()},350):Q()}function Q(){var M,g,S,w,b;if(l===St.Destroyed)return;l=St.Destroyed;const F=Le();x("destroy"),(g=(M=m("sync"))==null?void 0:M.getPlugins().Autoplay)==null||g.resume(),(w=(S=m("sync"))==null?void 0:S.getPlugins().Autoscroll)==null||w.resume(),t instanceof HTMLDialogElement&&t.close(),(b=i==null?void 0:i.getContainer())==null||b.classList.remove("is-idle"),i==null||i.destroy();for(const O of Object.values(f))O==null||O.destroy();if(f={},t==null||t.remove(),t=void 0,e=void 0,i=void 0,mi.delete(c),!mi.size&&(Pu(!1),document.documentElement.classList.remove(hf),m("placeFocusBack")&&F&&!F.closest("[inert]")))try{F==null||F.focus({preventScroll:!0})}catch{}}const ye={close:te,destroy:Q,getCarousel:function(){return i},getContainer:function(){return e},getId:function(){return c},getOptions:function(){return u},getPlugins:function(){return f},getSlide:function(){return Ee()},getState:function(){return l},init:function(F=[],M={}){l!==St.Init&&(ye.destroy(),l=St.Init),u=hn({},Js,M),c=m("id")||"fancybox-"+ ++Z0;const g=mi.get(c);if(g&&g.destroy(),mi.set(c,ye),x("init"),(function(){for(const[S,w]of Object.entries({...vt.Plugins,...u.plugins||{}}))if(S&&!f[S]&&w instanceof Function){const b=w();b.init(ye),f[S]=b}x("initPlugins")})(),(function(S=[]){x("initSlides",S),p=[...S]})(F),(function(){const S=m("parentEl")||document.body;if(!(S&&S instanceof HTMLElement))return;const w=d(m("mainTpl")||"");if(t=xi(w)||void 0,!t||(e=t.querySelector(".fancybox__container"),!(e&&e instanceof HTMLElement)))return;const b=m("mainClass");b&&Be(e,b);const O=m("mainStyle");if(O&&Pt(O))for(const[Z,he]of Object.entries(O))e.style.setProperty(Z,he);const X=m("theme"),K=X==="auto"?window.matchMedia("(prefers-color-scheme:light)").matches:X==="light";e.setAttribute("theme",K?"light":"dark"),t.setAttribute("id",`${c}`),t.addEventListener("keydown",Z=>{Z.key==="Escape"&&$n(Z)}),t.addEventListener("wheel",Z=>{const he=Z.target;let _e=m("wheel",Z);he.closest(".f-thumbs")&&(_e="slide");const J=_e==="slide",Me=[-Z.deltaX||0,-Z.deltaY||0,-Z.detail||0].reduce(function(Te,Se){return Math.abs(Se)>Math.abs(Te)?Se:Te}),be=Math.max(-1,Math.min(1,Me)),Re=Date.now();_&&Re-_<300?J&&$n(Z):(_=Re,x("wheel",Z,be),Z.defaultPrevented||(_e==="close"?te(Z):_e==="slide"&&i&&!gr(he)&&($n(Z),i[be>0?"prev":"next"]())))},{capture:!0,passive:!1}),t.addEventListener("cancel",Z=>{te(Z)}),S.append(t),mi.size===1&&(m("hideScrollbar")&&Pu(!0),document.documentElement.classList.add(hf)),x("initLayout"),t instanceof HTMLDialogElement&&(m("modal")?t.showModal():t.show())})(),(function(){if(n=(t==null?void 0:t.querySelector(".fancybox__carousel"))||void 0,!n)return;n.fancybox=ye;const S=hn({},{Autoplay:{autoStart:!1,pauseOnHover:!1,progressbarParentEl:w=>{const b=w.getContainer();return(b==null?void 0:b.querySelector(".f-carousel__toolbar [data-autoplay-action]"))||b}},Fullscreen:{el:e},Toolbar:{absolute:!0,items:{counter:{tpl:'<div class="f-counter"><span data-fancybox-page></span>/<span data-fancybox-pages></span></div>'}},display:{left:["counter"],right:["toggleFull","autoplay","fullscreen","thumbs","close"]}},Video:{autoplay:!0},Thumbs:{minCount:2,Carousel:{classes:{container:"fancybox__thumbs"}}},classes:{container:"fancybox__carousel",viewport:"fancybox__viewport",slide:"fancybox__slide"},spinnerTpl:'<div class="f-spinner" data-fancybox-close></div>',dragFree:!1,slidesPerPage:1,plugins:{Sync:fp,Arrows:k0,Lazyload:dp,Zoomable:V0,Html:$0,Video:q0,Autoplay:W0,Fullscreen:Y0,Thumbs:X0,Toolbar:pp}},m("Carousel")||{},{slides:p,enabled:!0,initialPage:m("startIndex")||0,l10n:m("l10n")});i=ma(n,S),x("initCarousel",i),i.on("*",(w,b,...O)=>{x(`Carousel.${b}`,w,...O)}),i.on("attachSlideEl",P),i.on("detachSlideEl",C),i.on("contentLoading",Y),i.on("contentReady",ie),i.on("ready",T),i.on("change",q),i.on("settle",D),i.on("thumbs:ready",V),i.on("thumbs:destroy",V),i.init()})(),t&&e){if(m("closeExisting"))for(const[S,w]of mi.entries())S!==c&&w.close();m("fadeEffect")?(setTimeout(()=>{E()},500),Be(e,"is-revealing")):E(),e.classList.add("is-ready"),l=St.Ready,x("ready")}},isCurrentSlide:function(F){const M=Ee();return!(!F||!M)&&M.index===F.index},isTopMost:function(){return de()},localize:d,off:function(F,M){return y.has(F)&&y.set(F,y.get(F).filter(g=>g!==M)),ye},on:function(F,M){return y.set(F,[...y.get(F)||[],M]),ye},toggleIdle(F){(h||F===!0)&&Ve(),h&&F!==!1||A()}};return ye};function pf(){for(const t of Object.values(vt.Plugins)){const e=t.setup;typeof e=="function"&&e(vt)}}function mf(t,e={}){var h,v,_;if(!(t&&t instanceof Element))return;let n,i,r,s,o={};for(const[m,d]of vt.openers)if(m.contains(t))for(const[y,x]of d){let E;if(y){for(const P of m.querySelectorAll(y))if(P.contains(t)){E=P;break}if(!E)continue}for(const[P,C]of x){let R=null;try{R=t.closest(P)}catch{}R&&(i=m,r=E,n=R,s=P,hn(o,C||{}))}}if(!i||!s||!n)return;const a=hn({},Js,e,o,{triggerEl:n});let l=[].slice.call((r||i).querySelectorAll(s));const u=n.closest(".f-carousel"),c=u==null?void 0:u.carousel;if(c&&(!r||!u.contains(r))){const m=[];for(const d of c==null?void 0:c.getSlides()){const y=d.el;y&&(y.matches(s)?m.push(y):m.push(...[].slice.call(y.querySelectorAll(s))))}m.length&&(l=[...m],(h=c.getPlugins().Autoplay)==null||h.pause(),(v=c.getPlugins().Autoscroll)==null||v.pause(),a.sync=c)}if(a.groupAll===!1){const m=a.groupAttr,d=m&&n?n.getAttribute(`${m}`):"";l=m&&d&&d!=="true"?l.filter(y=>y.getAttribute(`${m}`)===d):[n]}if(!l.length)return;(_=a.triggerEvent)==null||_.preventDefault();const f=vt.getInstance(),p=f==null?void 0:f.getState();if(f&&(p===St.Init||p===St.Ready)){const m=f.getOptions().triggerEl;if(m&&l.indexOf(m)>-1)return}return{...a.Carousel||{}}.rtl&&(l=l.reverse()),n&&e.startIndex===void 0&&(a.startIndex=l.indexOf(n)),vt.fromNodes(l,a)}const vt={Plugins:{Hash:na},version:"6.1.15",openers:new Map,bind:function(t,e,n,i){if(!ea())return;let r=document.body,s=null,o="[data-fancybox]",a={};t instanceof Element&&(r=t),ut(t)&&ut(e)?(s=t,o=e):ut(e)&&ut(n)?(s=e,o=n):ut(e)?o=e:ut(t)&&(o=t),typeof e=="object"&&(a=e||{}),typeof n=="object"&&(a=n||{}),typeof i=="object"&&(a=i||{}),(function(l,u,c,f={}){if(!(l&&l instanceof Element&&c))return;const p=vt.openers.get(l)||new Map,h=p.get(u)||new Map;h.set(c,f),p.set(u,h),vt.openers.set(l,p),p.size===1&&l.addEventListener("click",vt.fromEvent),pf()})(r,s,o,a)},close:function(t=!0,...e){if(t)for(const n of mi.values())n.close(...e);else{const n=vt.getInstance();n&&n.close(...e)}},destroy:function(){let t;for(;t=vt.getInstance();)t.destroy();for(const e of vt.openers.keys())e.removeEventListener("click",vt.fromEvent);vt.openers.clear()},fromEvent:function(t){if(t.defaultPrevented||t.button&&t.button!==0||t.ctrlKey||t.metaKey||t.shiftKey)return;let e=t.composedPath()[0];const n={triggerEvent:t};if(e.closest(".fancybox__container.is-hiding"))return $n(t),void t.stopPropagation();const i=e.closest("[data-fancybox-delegate]")||void 0;if(i){const r=i.dataset.fancyboxDelegate||"",s=document.querySelectorAll(`[data-fancybox="${r}"]`),o=parseInt(i.dataset.fancyboxIndex||"",10)||0;e=s[o]||s[0],hn(n,{delegateEl:i,startIndex:o})}return mf(e,n)},fromNodes:function(t,e){e=hn({},Js,e||{});const n=[],i=r=>r instanceof HTMLImageElement?r:r instanceof HTMLElement?r.querySelector("img:not([aria-hidden])"):void 0;for(const r of t){const s=r.dataset||{},o=e.delegateEl&&t.indexOf(r)===e.startIndex?e.delegateEl:void 0,a=i(r),l=i(o)||a||void 0,u=s.src||r.getAttribute("href")||r.getAttribute("currentSrc")||r.getAttribute("src")||void 0,c=s.thumb||s.thumbSrc||(l==null?void 0:l.getAttribute("currentSrc"))||(l==null?void 0:l.getAttribute("src"))||(l==null?void 0:l.dataset.lazySrc)||void 0,f={src:u,alt:s.alt||(a==null?void 0:a.getAttribute("alt"))||(l==null?void 0:l.getAttribute("alt"))||void 0,thumbSrc:c,thumbEl:l,triggerEl:r,delegateEl:o};for(const p in s){let h=s[p]+"";f[p]=h==="true"?p!=="fancybox"||"":h!=="false"&&h}n.push(f)}return vt.show(n,e)},fromSelector:function(t,e,n,i){if(!ea())return;let r=document.body,s=null,o="[data-fancybox]",a={};t instanceof Element&&(r=t),ut(t)&&ut(e)?(s=t,o=e):ut(e)&&ut(n)?(s=e,o=n):ut(e)?o=e:ut(t)&&(o=t),typeof e=="object"&&(a=e||{}),typeof n=="object"&&(a=n||{}),typeof i=="object"&&(a=i||{});for(const[l,u]of vt.openers)for(const[c,f]of u)for(const[p,h]of f)if(l===r&&c===s){const v=r.querySelector((c?`${c} `:"")+o);if(v&&v.matches(p))return vt.fromTriggerEl(v,a)}},fromTriggerEl:mf,getCarousel:function(){var t;return((t=vt.getInstance())==null?void 0:t.getCarousel())||void 0},getDefaults:function(){return Js},getInstance:function(t){if(t){const e=mi.get(t);return e&&e.getState()!==St.Destroyed?e:void 0}return Array.from(mi.values()).reverse().find(e=>{if(e.getState()!==St.Destroyed)return e})||void 0},getSlide:function(){var t;return((t=vt.getInstance())==null?void 0:t.getSlide())||void 0},show:function(t=[],e={}){return pf(),J0().init(t,e)},unbind:function(t,e,n){if(!ea())return;let i=document.body,r=null,s="[data-fancybox]";t instanceof Element&&(i=t),ut(t)&&ut(e)?(r=t,s=e):ut(e)&&ut(n)?(r=e,s=n):ut(e)?s=e:ut(t)&&(s=t),(function(o,a,l){if(!(o&&o instanceof Element&&l))return;const u=vt.openers.get(o)||new Map,c=u.get(a)||new Map;c&&l&&c.delete(l),c.size&&l||u.delete(a),u.size||(vt.openers.delete(o),o.removeEventListener("click",vt.fromEvent))})(i,r,s)}},Hi=743/1005;function Q0(t,e){const n=t/e<Hi;return{phone:n,width:n?t:e*Hi,height:e}}const Yr=document.documentElement,jr=La({side:!1,phone:!1,hoverable:!1}),ga=Bi(jr);function e_(){const t=innerWidth,e=innerHeight;jr.side=t/e>=Hi&&(t-e*Hi)/2>=300&&e>=600,Yr.classList.toggle("side",jr.side),Yr.classList.toggle("stack",!jr.side)}function t_(t,e){const n=Q0(t,e);jr.phone=n.phone,Yr.classList.toggle("phone",n.phone),Yr.style.setProperty("--safe-w",n.width+"px"),Yr.style.setProperty("--safe-l",(t-n.width)/2+"px")}function n_(){var n;const t=matchMedia("(hover: hover) and (pointer: fine)"),e=()=>{jr.hoverable=t.matches,Yr.classList.toggle("hoverable",t.matches)};return e(),(n=t.addEventListener)==null||n.call(t,"change",e),()=>{var i;return(i=t.removeEventListener)==null?void 0:i.call(t,"change",e)}}const vp=document.documentElement,Xc=ln(!1),oo=ln(!1),uc=ln(!1),ts={menuBtn:null,menu:null,lock:null,about:null,aboutClose:null};Is(Xc,t=>vp.classList.toggle("menu-open",t),{flush:"sync"});Is(oo,t=>vp.classList.toggle("about-open",t),{flush:"sync"});function Fa(t){oo.value=t,t&&setTimeout(()=>{var e;return(e=ts.aboutClose)==null?void 0:e.focus({preventScroll:!0})},300)}function i_(){var t;Fa(!1),(t=ts.lock)==null||t.focus({preventScroll:!0})}function r_(){var t;ga.side?Fa(!oo.value):(t=ts.about)==null||t.scrollIntoView({behavior:"smooth",block:"start"})}function s_(t){var e;Xc.value=t,t&&oo.value&&Fa(!1),t?setTimeout(()=>{var n,i;return(i=(n=ts.menu)==null?void 0:n.querySelector(".m-list a"))==null?void 0:i.focus({preventScroll:!0})},420):(e=ts.menuBtn)==null||e.focus({preventScroll:!0})}function o_({src:t,alt:e,caption:n,triggerEl:i}){uc.value=!0,vt.show([{src:t,type:"image",alt:e,caption:n,triggerEl:i,thumbEl:(i==null?void 0:i.querySelector("img"))??void 0}],{mainClass:"map-lightbox",theme:"dark",on:{destroy:()=>{uc.value=!1}}})}function as(){return{menuOpen:Bi(Xc),aboutOpen:Bi(oo),lightboxOpen:Bi(uc),els:ts,setMenu:s_,setAbout:Fa,closeAbout:i_,toggleAbout:r_,openLightbox:o_}}const Mi=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},a_=["aria-label","aria-expanded"],l_={__name:"MenuButton",setup(t){const{menuOpen:e,els:n,setMenu:i}=as();return(r,s)=>(yt(),Et("button",{ref:o=>qe(n).menuBtn=o,class:"menu-btn",type:"button","aria-label":qe(e)?"メニューを閉じる":"メニューを開く","aria-expanded":qe(e),"aria-controls":"menu",onClick:s[0]||(s[0]=o=>qe(i)(!qe(e)))},[...s[1]||(s[1]=[Ce("i",null,null,-1),Ce("i",null,null,-1),Ce("i",null,null,-1)])],8,a_))}},c_=Mi(l_,[["__scopeId","data-v-f911dd4f"]]),dl=14,u_=5,f_=8,d_=.7,gf=[[50,57,61,64,66],[47,54,57,62,64],[43,50,54,57,61],[45,52,59,62,64]],So=[74,76,78,81,83,86,88,90],hl=t=>440*2**((t-69)/12),Ei=(t,e)=>t+Math.random()*(e-t),_f=t=>t[Math.floor(Math.random()*t.length)];function h_(t,e,n){const i=Math.floor(t.sampleRate*e),r=t.createBuffer(2,i,t.sampleRate);for(let s=0;s<2;s++){const o=r.getChannelData(s);for(let a=0;a<i;a++)o[a]=(Math.random()*2-1)*(1-a/i)**n}return r}function p_(t,e){const n=Math.floor(t.sampleRate*e),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let s=0;s<n;s++)r[s]=Math.random()*2-1;return i}function Eo(t,e,n,i){const r=t.createOscillator(),s=t.createGain();r.frequency.value=e,s.gain.value=n,r.connect(s).connect(i),r.start()}function m_(){let t=null,e,n,i,r=0,s=0,o=0,a=0,l=!1;function u(){t=new(window.AudioContext||window.webkitAudioContext);const m=t.createDynamicsCompressor();m.threshold.value=-18,m.ratio.value=3,e=t.createGain(),e.gain.value=0,e.connect(m).connect(t.destination);const d=t.createConvolver();d.buffer=h_(t,7,2.6);const y=t.createGain();y.gain.value=.9,d.connect(y).connect(e);const x=t.createBiquadFilter();x.type="lowpass",x.frequency.value=900,x.Q.value=.6,Eo(t,.04,450,x.frequency),n=x;const E=t.createGain();E.gain.value=.55;const P=t.createGain();P.gain.value=.8,x.connect(E).connect(e),x.connect(P).connect(d),i=t.createGain();const C=t.createGain();C.gain.value=.25,i.connect(C).connect(e);const R=t.createDelay(2);R.delayTime.value=.84;const q=t.createGain();q.gain.value=.42;const T=t.createBiquadFilter();T.type="lowpass",T.frequency.value=2400,i.connect(R),R.connect(T).connect(q).connect(R),T.connect(d);const D=t.createGain();D.gain.value=.7,i.connect(D).connect(d),[[38,.09],[45,.05]].forEach(([I,H])=>{const B=t.createOscillator();B.type="sine",B.frequency.value=hl(I);const $=t.createGain();$.gain.value=H,Eo(t,Ei(.03,.07),H*.4,$.gain),B.connect($).connect(e),$.connect(d),B.start()});const Y=t.createBufferSource();Y.buffer=p_(t,4),Y.loop=!0;const ie=t.createBiquadFilter();ie.type="bandpass",ie.frequency.value=700,ie.Q.value=.8,Eo(t,.02,300,ie.frequency);const V=t.createGain();V.gain.value=.012,Eo(t,.05,.006,V.gain),Y.connect(ie).connect(V).connect(e),Y.start()}function c(m,d){const y=d+dl+f_;m.forEach(x=>{const E=t.createStereoPanner();E.pan.value=Ei(-.6,.6);const P=t.createGain(),C=.028;P.gain.setValueAtTime(0,d),P.gain.linearRampToValueAtTime(C,d+u_),P.gain.setValueAtTime(C,d+dl),P.gain.linearRampToValueAtTime(0,y),P.connect(E).connect(n),[-7,7].forEach(R=>{const q=t.createOscillator();q.type="sawtooth",q.frequency.value=hl(x),q.detune.value=R+Ei(-2,2),q.connect(P),q.start(d),q.stop(y+.1)})})}function f(m,d){const y=hl(m),x=t.createGain(),E=Ei(.04,.08);x.gain.setValueAtTime(1e-4,d),x.gain.exponentialRampToValueAtTime(E,d+.02),x.gain.exponentialRampToValueAtTime(1e-4,d+4.5);const P=t.createStereoPanner();P.pan.value=Ei(-.8,.8),x.connect(P).connect(i),[[1,1],[2.76,.18]].forEach(([C,R])=>{const q=t.createOscillator();q.type="sine",q.frequency.value=y*C;const T=t.createGain();T.gain.value=R,q.connect(T).connect(x),q.start(d),q.stop(d+4.6)})}function p(){const m=Math.max(t.currentTime+.1,a);c(gf[o%gf.length],m),o++,a=m+dl,r=setTimeout(p,Math.max(0,(a-t.currentTime-1)*1e3))}function h(){const m=t.currentTime+.05,d=Math.random()<.3?Math.ceil(Ei(1,3)):1;let y=_f(So);for(let x=0;x<d;x++){f(y,m+x*Ei(.4,.9));const E=So.indexOf(y)+_f([-2,-1,1,2]);y=So[Math.min(So.length-1,Math.max(0,E))]}s=setTimeout(h,Ei(2.5,8)*1e3)}async function v(){if(l||(l=!0,t||u(),await t.resume(),!l))return;const m=t.currentTime;e.gain.cancelScheduledValues(m),e.gain.setValueAtTime(e.gain.value,m),e.gain.linearRampToValueAtTime(d_,m+3),p(),s=setTimeout(h,4e3)}function _(){if(!l)return;l=!1,clearTimeout(r),clearTimeout(s);const m=t.currentTime;e.gain.cancelScheduledValues(m),e.gain.setValueAtTime(e.gain.value,m),e.gain.linearRampToValueAtTime(0,m+1.5),setTimeout(()=>{l||t.suspend()},1600)}return{start:v,stop:_}}const ia=ln(!1);let pl=null;function g_(){pl??(pl=m_()),ia.value=!ia.value,ia.value?pl.start():pl.stop()}function __(){return{playing:Bi(ia),toggleAmbient:g_}}const v_={class:"label"},x_={__name:"SoundToggle",setup(t){const{playing:e,toggleAmbient:n}=__();return(i,r)=>(yt(),Et("button",{class:os(["sound-btn",{on:qe(e)}]),type:"button",onClick:r[0]||(r[0]=(...s)=>qe(n)&&qe(n)(...s))},[r[1]||(r[1]=Ce("span",{class:"bars","aria-hidden":"true"},[Ce("i"),Ce("i"),Ce("i"),Ce("i")],-1)),Ce("span",v_,at(qe(e)?"音楽を止める":"音楽を流す"),1)],2))}},y_=Mi(x_,[["__scopeId","data-v-456571d8"]]),yn={logo:["lunar","drive"],issue:"002",year:"2031",title:"おもちゃ屋",titleNo:"01",sub:"月面ドライブ・ログ",tagline:"—— 静かの海を、ハイビームで。",credit:{label:"Earth data:",name:"Solar System Scope",url:"https://www.solarsystemscope.com/textures/",license:"(CC BY 4.0)"}},M_={class:"bar"},S_={class:"brand"},E_={class:"logo"},b_={class:"issue"},T_={__name:"TopNav",setup(t){const e=ln(!1),n=()=>{e.value=scrollY>24};return ro(()=>addEventListener("scroll",n,{passive:!0})),Ia(()=>removeEventListener("scroll",n)),(i,r)=>(yt(),Et("header",{id:"topnav",class:os({scrolled:e.value})},[Ce("div",M_,[Ce("div",S_,[Lt(c_),Ce("div",E_,[Kt(at(qe(yn).logo[0]),1),r[0]||(r[0]=Ce("b",null,"·",-1)),Kt(at(qe(yn).logo[1]),1)]),Lt(y_)]),Ce("div",b_,at(qe(yn).issue),1)]),r[1]||(r[1]=Ce("div",{class:"rule"},[Ce("i"),Ce("i"),Ce("i")],-1))],2))}},A_=Mi(T_,[["__scopeId","data-v-1fab3892"]]),w_={id:"safe"},R_={class:"hero"},C_={class:"title-wrap"},L_={class:"year"},P_={class:"title"},D_={class:"sub"},I_={class:"tag"},U_={__name:"HeroTitle",setup(t,{expose:e}){const n=ln(null),i=[...yn.title];function r(s,o){n.value&&(n.value.style.transform=`translate(${(-s*6).toFixed(2)}px, ${(-o*4).toFixed(2)}px)`)}return e({setParallax:r}),(s,o)=>(yt(),Et("div",w_,[Ce("div",{ref_key:"headEl",ref:n,class:"head"},[Ce("div",R_,[Ce("div",C_,[Ce("span",L_,at(qe(yn).year),1),Ce("h1",P_,[(yt(),Et(Ct,null,qs(i,(a,l)=>Ce("span",{key:l,style:Jr({"--i":l})},at(a),5)),64)),Ce("em",{style:Jr({"--i":i.length})},at(qe(yn).titleNo),5)])]),Ce("div",D_,at(qe(yn).sub),1),Ce("div",I_,at(qe(yn).tagline),1)])],512)]))}},N_=Mi(U_,[["__scopeId","data-v-899bd7f5"]]),O_={id:"tether","aria-hidden":"true"},F_=["aria-label","aria-expanded"],B_={__name:"SatelliteLock",setup(t,{expose:e}){const{aboutOpen:n,els:i,toggleAbout:r}=as(),s=ln(null),o=ln(null),a=ln(null);ro(()=>{i.lock=s.value});function l(u){const c=s.value;if(!c)return;const f=12,p=u.x1-u.x0+f*2,h=(u.y1-u.y0)*.78+f*2,v=u.x0-f,_=(u.y0+u.y1)/2-h/2;if(c.style.transform=`translate(${v.toFixed(1)}px, ${_.toFixed(1)}px)`,c.style.width=`${p.toFixed(1)}px`,c.style.height=`${h.toFixed(1)}px`,n.value&&ga.side&&i.about){const m=i.about.getBoundingClientRect().right+6,d=_+h/2,y=v-10;o.value.setAttribute("d",`M${m.toFixed(1)},${(d+26).toFixed(1)} L${(m+28).toFixed(1)},${d.toFixed(1)} L${y.toFixed(1)},${d.toFixed(1)}`),a.value.setAttribute("cx",y.toFixed(1)),a.value.setAttribute("cy",d.toFixed(1))}}return e({update:l}),(u,c)=>(yt(),Et(Ct,null,[(yt(),Et("svg",O_,[Ce("path",{ref_key:"pathEl",ref:o,d:""},null,512),Ce("circle",{ref_key:"dotEl",ref:a,r:"3.5",cx:"-10",cy:"-10"},null,512)])),Ce("button",{id:"lock",ref_key:"lockEl",ref:s,type:"button","aria-label":qe(n)?"本店紹介を閉じる":"本店紹介を開く","aria-expanded":qe(n),"aria-controls":"about",onClick:c[0]||(c[0]=(...f)=>qe(r)&&qe(r)(...f))},[...c[1]||(c[1]=[Qg('<span class="frame" data-v-0460b294><i class="c tl" data-v-0460b294></i><i class="c tr" data-v-0460b294></i><i class="c bl" data-v-0460b294></i><i class="c br" data-v-0460b294></i><i class="tk t" data-v-0460b294></i><i class="tk b" data-v-0460b294></i><i class="tk l" data-v-0460b294></i><i class="tk r" data-v-0460b294></i></span><span class="ring" data-v-0460b294></span><span class="lock-tag" data-v-0460b294><span class="off" data-v-0460b294>TGT-02 ▸ <b data-v-0460b294>本店紹介</b></span><span class="on" data-v-0460b294>LOCK ON ▸ <b data-v-0460b294>クリックで開く</b></span></span>',3)])],8,F_)],64))}},z_=Mi(B_,[["__scopeId","data-v-0460b294"]]),H_={},G_={class:"scroll-hint","aria-hidden":"true"};function V_(t,e){return yt(),Et("div",G_,[...e[0]||(e[0]=[Kt("SCROLL",-1),Ce("span",null,"本店紹介 ↓",-1)])])}const k_=Mi(H_,[["render",V_],["__scopeId","data-v-ec57bc61"]]),W_=[{id:"gunpla",no:"01",jp:"ガンプラ",en:"GUNPLA",note:"組み立てプラモデル",badge:"新入荷"},{id:"sofubi",no:"02",jp:"ソフビ",en:"SOFT VINYL",note:"塩ビ・ゴム人形"},{id:"carded",no:"03",jp:"吊るし玩具",en:"CARDED TOYS",note:"台紙付き・吊りカード",badge:"昭和レトロ"},{id:"tin",no:"04",jp:"ブリキ",en:"TIN TOYS",note:"ぜんまい仕掛け"},{id:"capsule",no:"05",jp:"カプセルトイ",en:"CAPSULE TOYS",note:"回して、当てる。"},{id:"minicar",no:"06",jp:"ミニカー",en:"DIE-CAST",note:"1/64 コレクション"}],X_=[{id:"shop",label:"店舗案内"},{id:"access",label:"アクセス"},{id:"contact",label:"お問い合わせ"}],on={name:"昭和模型店",nameEn:"SHOWA MOKEI-TEN",established:"EST. 1973",lead:"中央商店街のアーチをくぐって、三軒目。",description:"昭和48年、神ノ町の商店街で創業した小さな模型とおもちゃの店です。ガンプラの新作から、駄菓子屋の軒先に吊るされていたカード玩具、ぜんまいで走るブリキまで。二代目店主が「子どものころの宝箱」を合言葉に、ひとつずつ仕入れています。",points:["半世紀ぶんのデッドストック棚","工具無料の組み立てコーナー","第2・第4土曜は塗装ワークショップ"],info:[{label:"住所",value:"〒150-0820 東京都神ノ町 3-12-7"},{label:"営業",value:"10:00 〜 19:00"},{label:"定休",value:"月曜日"},{label:"電話",value:"03-4444-XXXX"}],map:{alt:"昭和模型店の外観と、神ノ町・中央商店街のイラスト地図",caption:"神ノ町・中央商店街 ／ 神ノ町駅から徒歩5分"},hours:"10:00 — 19:00",closed:"月曜定休",slogan:"—— 月面から、なつかしいおもちゃを。",branch:"おもちゃ屋・月面支店"},$_=["aria-hidden"],q_={class:"m-panel"},Y_={class:"m-kicker"},j_={class:"m-list"},K_=["href"],Z_={class:"n"},J_={class:"jp"},Q_={class:"en"},ev={key:0,class:"tagx"},tv={class:"m-foot"},nv={class:"m-links"},iv=["href"],rv={class:"m-info"},sv={class:"m-vert"},ov={__name:"CategoryMenu",setup(t){const{menuOpen:e,els:n,setMenu:i}=as();function r(s){(s.target.closest("[data-close]")||s.target.closest("a"))&&i(!1)}return(s,o)=>(yt(),Et("nav",{id:"menu",ref:a=>qe(n).menu=a,"aria-label":"商品カテゴリー","aria-hidden":!qe(e),onClick:r},[o[7]||(o[7]=Ce("div",{class:"m-backdrop","data-close":""},null,-1)),Ce("div",q_,[Ce("div",Y_,[o[1]||(o[1]=Ce("span",null,"CATEGORY INDEX",-1)),Ce("span",null,[o[0]||(o[0]=Kt("おもちゃ屋 ",-1)),Ce("b",null,"No."+at(qe(yn).issue),1)])]),o[5]||(o[5]=Ce("div",{class:"m-title"},[Kt("商品カテゴリー"),Ce("span",null,".")],-1)),o[6]||(o[6]=Ce("div",{class:"m-rule"},null,-1)),Ce("ol",j_,[(yt(!0),Et(Ct,null,qs(qe(W_),(a,l)=>(yt(),Et("li",{key:a.id,style:Jr({"--i":l})},[Ce("a",{href:`#${a.id}`},[Ce("span",Z_,at(a.no),1),Ce("span",J_,at(a.jp),1),Ce("span",Q_,[Kt(at(a.en),1),Ce("small",null,at(a.note),1)]),o[2]||(o[2]=Ce("span",{class:"ar"},"→",-1)),a.badge?(yt(),Et("span",ev,at(a.badge),1)):ip("",!0)],8,K_)],4))),128))]),Ce("div",tv,[Ce("div",nv,[(yt(!0),Et(Ct,null,qs(qe(X_),a=>(yt(),Et("a",{key:a.id,href:`#${a.id}`},at(a.label),9,iv))),128))]),Ce("div",rv,[o[3]||(o[3]=Kt("営業 ",-1)),Ce("em",null,at(qe(on).hours),1),Kt(" ／ "+at(qe(on).closed),1),o[4]||(o[4]=Ce("br",null,null,-1)),Kt(at(qe(on).slogan),1)])]),Ce("div",sv,at(qe(on).branch),1)])],8,$_))}},av=Mi(ov,[["__scopeId","data-v-8187beba"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="160",lv=0,vf=1,cv=2,xp=1,uv=2,di=3,$i=0,Qt=1,_i=2,Gi=0,Kr=1,_a=2,xf=3,yf=4,fv=5,cr=100,dv=101,hv=102,Mf=103,Sf=104,pv=200,mv=201,gv=202,_v=203,fc=204,dc=205,vv=206,xv=207,yv=208,Mv=209,Sv=210,Ev=211,bv=212,Tv=213,Av=214,wv=0,Rv=1,Cv=2,va=3,Lv=4,Pv=5,Dv=6,Iv=7,yp=0,Uv=1,Nv=2,Vi=0,Ov=1,Fv=2,Bv=3,zv=4,Hv=5,Gv=6,Mp=300,ns=301,is=302,hc=303,pc=304,Ba=306,mc=1e3,Fn=1001,gc=1002,an=1003,Ef=1004,ml=1005,Tn=1006,Vv=1007,yr=1008,ki=1009,kv=1010,Wv=1011,qc=1012,Sp=1013,Ui=1014,Ni=1015,Qs=1016,Ep=1017,bp=1018,_r=1020,Xv=1021,Bn=1023,$v=1024,qv=1025,vr=1026,rs=1027,Yv=1028,Tp=1029,jv=1030,Ap=1031,wp=1033,gl=33776,_l=33777,vl=33778,xl=33779,bf=35840,Tf=35841,Af=35842,wf=35843,Rp=36196,Rf=37492,Cf=37496,Lf=37808,Pf=37809,Df=37810,If=37811,Uf=37812,Nf=37813,Of=37814,Ff=37815,Bf=37816,zf=37817,Hf=37818,Gf=37819,Vf=37820,kf=37821,yl=36492,Wf=36494,Xf=36495,Kv=36283,$f=36284,qf=36285,Yf=36286,Cp=3e3,xr=3001,Zv=3200,Jv=3201,Qv=0,ex=1,wn="",Ht="srgb",ri="srgb-linear",Yc="display-p3",za="display-p3-linear",xa="linear",_t="srgb",ya="rec709",Ma="p3",br=7680,jf=519,tx=512,nx=513,ix=514,Lp=515,rx=516,sx=517,ox=518,ax=519,Kf=35044,Zf="300 es",_c=1035,vi=2e3,Sa=2001;class ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ml=Math.PI/180,vc=180/Math.PI;function ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function dn(t,e,n){return Math.max(e,Math.min(n,t))}function lx(t,e){return(t%e+e)%e}function Sl(t,e,n){return(1-n)*t+n*e}function Jf(t){return(t&t-1)===0&&t!==0}function xc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,n,i,r,s,o,a,l,u){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],p=i[2],h=i[5],v=i[8],_=r[0],m=r[3],d=r[6],y=r[1],x=r[4],E=r[7],P=r[2],C=r[5],R=r[8];return s[0]=o*_+a*y+l*P,s[3]=o*m+a*x+l*C,s[6]=o*d+a*E+l*R,s[1]=u*_+c*y+f*P,s[4]=u*m+c*x+f*C,s[7]=u*d+c*E+f*R,s[2]=p*_+h*y+v*P,s[5]=p*m+h*x+v*C,s[8]=p*d+h*E+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,p=a*l-c*s,h=u*s-o*l,v=n*f+i*p+r*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=p*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=h*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(El.makeScale(e,n)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,n){return this.premultiply(El.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const El=new it;function Pp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function eo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cx(){const t=eo("canvas");return t.style.display="block",t}const Qf={};function Gs(t){t in Qf||(Qf[t]=!0,console.warn(t))}const ed=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),td=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[ri]:{transfer:xa,primaries:ya,toReference:t=>t,fromReference:t=>t},[Ht]:{transfer:_t,primaries:ya,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[za]:{transfer:xa,primaries:Ma,toReference:t=>t.applyMatrix3(td),fromReference:t=>t.applyMatrix3(ed)},[Yc]:{transfer:_t,primaries:Ma,toReference:t=>t.convertSRGBToLinear().applyMatrix3(td),fromReference:t=>t.applyMatrix3(ed).convertLinearToSRGB()}},ux=new Set([ri,za]),dt={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ux.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=bo[e].toReference,r=bo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return bo[t].primaries},getTransfer:function(t){return t===wn?xa:bo[t].transfer}};function Zr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Tr;class Dp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=eo("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Tr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=eo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zr(n[i]/255)*255):n[i]=Zr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fx=0;class Ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=ao(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tl(r[o].image)):s.push(Tl(r[o]))}else s=Tl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Tl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Dp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dx=0;class pn extends ls{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Fn,r=Fn,s=Tn,o=yr,a=Bn,l=ki,u=pn.DEFAULT_ANISOTROPY,c=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=ao(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===xr?Ht:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?xr:Cp}set encoding(e){Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?Ht:wn}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Mp;pn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],p=l[1],h=l[5],v=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-p)<.01&&Math.abs(f-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+p)<.1&&Math.abs(f+_)<.1&&Math.abs(v+m)<.1&&Math.abs(u+h+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,E=(h+1)/2,P=(d+1)/2,C=(c+p)/4,R=(f+_)/4,q=(v+m)/4;return x>E&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=R/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=q/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=q/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-v)*(m-v)+(f-_)*(f-_)+(p-c)*(p-c));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(f-_)/y,this.z=(p-c)/y,this.w=Math.acos((u+h+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hx extends ls{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Gs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xr?Ht:wn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ip(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends hx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Up extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class px extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const p=s[o+0],h=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=p,e[n+1]=h,e[n+2]=v,e[n+3]=_;return}if(f!==_||l!==p||u!==h||c!==v){let m=1-a;const d=l*p+u*h+c*v+f*_,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const P=Math.sqrt(x),C=Math.atan2(P,d*y);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const E=a*y;if(l=l*m+p*E,u=u*m+h*E,c=c*m+v*E,f=f*m+_*E,m===1-a){const P=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=P,u*=P,c*=P,f*=P}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],p=s[o+1],h=s[o+2],v=s[o+3];return e[n]=a*v+c*f+l*h-u*p,e[n+1]=l*v+c*p+u*f-a*h,e[n+2]=u*v+c*h+a*p-l*f,e[n+3]=c*v-a*f-l*p-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),p=l(i/2),h=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=p*c*f+u*h*v,this._y=u*h*f-p*c*v,this._z=u*c*v+p*h*f,this._w=u*c*f-p*h*v;break;case"YXZ":this._x=p*c*f+u*h*v,this._y=u*h*f-p*c*v,this._z=u*c*v-p*h*f,this._w=u*c*f+p*h*v;break;case"ZXY":this._x=p*c*f-u*h*v,this._y=u*h*f+p*c*v,this._z=u*c*v+p*h*f,this._w=u*c*f-p*h*v;break;case"ZYX":this._x=p*c*f-u*h*v,this._y=u*h*f+p*c*v,this._z=u*c*v-p*h*f,this._w=u*c*f+p*h*v;break;case"YZX":this._x=p*c*f+u*h*v,this._y=u*h*f+p*c*v,this._z=u*c*v-p*h*f,this._w=u*c*f-p*h*v;break;case"XZY":this._x=p*c*f-u*h*v,this._y=u*h*f-p*c*v,this._z=u*c*v+p*h*f,this._w=u*c*f+p*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],p=i+a+f;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,p=Math.sin(n*c)/u;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new ee,nd=new cs;class Sr{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),Ao.subVectors(this.max,xs),Ar.subVectors(e.a,xs),wr.subVectors(e.b,xs),Rr.subVectors(e.c,xs),bi.subVectors(wr,Ar),Ti.subVectors(Rr,wr),tr.subVectors(Ar,Rr);let n=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-tr.z,tr.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,tr.z,0,-tr.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-tr.y,tr.x,0];return!wl(n,Ar,wr,Rr,Ao)||(n=[1,0,0,0,1,0,0,0,1],!wl(n,Ar,wr,Rr,Ao))?!1:(wo.crossVectors(bi,Ti),n=[wo.x,wo.y,wo.z],wl(n,Ar,wr,Rr,Ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Pn=new ee,To=new Sr,Ar=new ee,wr=new ee,Rr=new ee,bi=new ee,Ti=new ee,tr=new ee,xs=new ee,Ao=new ee,wo=new ee,nr=new ee;function wl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){nr.fromArray(t,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),u=n.dot(nr),c=i.dot(nr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const mx=new Sr,ys=new ee,Rl=new ee;class us{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const n=ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(Rl)),this.expandByPoint(ys.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new ee,Cl=new ee,Ro=new ee,Ai=new ee,Ll=new ee,Co=new ee,Pl=new ee;class Np{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cl.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),Ai.copy(this.origin).sub(Cl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ro),a=Ai.dot(this.direction),l=-Ai.dot(Ro),u=Ai.lengthSq(),c=Math.abs(1-o*o);let f,p,h,v;if(c>0)if(f=o*l-a,p=o*a-l,v=s*c,f>=0)if(p>=-v)if(p<=v){const _=1/c;f*=_,p*=_,h=f*(f+o*p+2*a)+p*(o*f+p+2*l)+u}else p=s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+u;else p=-s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+u;else p<=-v?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+p*(p+2*l)+u):p<=v?(f=0,p=Math.min(Math.max(-s,-l),s),h=p*(p+2*l)+u):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+p*(p+2*l)+u);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Cl).addScaledVector(Ro,p),h}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),c>=0?(s=(e.min.y-p.y)*c,o=(e.max.y-p.y)*c):(s=(e.max.y-p.y)*c,o=(e.min.y-p.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){Ll.subVectors(n,e),Co.subVectors(i,e),Pl.crossVectors(Ll,Co);let o=this.direction.dot(Pl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(Co.crossVectors(Ai,Co));if(l<0)return null;const u=a*this.direction.dot(Ll.cross(Ai));if(u<0||l+u>o)return null;const c=-a*Ai.dot(Pl);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,u,c,f,p,h,v,_,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,p,h,v,_,m)}set(e,n,i,r,s,o,a,l,u,c,f,p,h,v,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=p,d[3]=h,d[7]=v,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=o*c,h=o*f,v=a*c,_=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=h+v*u,n[5]=p-_*u,n[9]=-a*l,n[2]=_-p*u,n[6]=v+h*u,n[10]=o*l}else if(e.order==="YXZ"){const p=l*c,h=l*f,v=u*c,_=u*f;n[0]=p+_*a,n[4]=v*a-h,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=h*a-v,n[6]=_+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*c,h=l*f,v=u*c,_=u*f;n[0]=p-_*a,n[4]=-o*f,n[8]=v+h*a,n[1]=h+v*a,n[5]=o*c,n[9]=_-p*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*c,h=o*f,v=a*c,_=a*f;n[0]=l*c,n[4]=v*u-h,n[8]=p*u+_,n[1]=l*f,n[5]=_*u+p,n[9]=h*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,h=o*u,v=a*l,_=a*u;n[0]=l*c,n[4]=_-p*f,n[8]=v*f+h,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=h*f+v,n[10]=p-_*f}else if(e.order==="XZY"){const p=o*l,h=o*u,v=a*l,_=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=p*f+_,n[5]=o*c,n[9]=h*f-v,n[2]=v*f-h,n[6]=a*c,n[10]=_*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gx,e,_x)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),wi.crossVectors(i,vn),wi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),wi.crossVectors(i,vn)),wi.normalize(),Lo.crossVectors(vn,wi),r[0]=wi.x,r[4]=Lo.x,r[8]=vn.x,r[1]=wi.y,r[5]=Lo.y,r[9]=vn.y,r[2]=wi.z,r[6]=Lo.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],p=i[9],h=i[13],v=i[2],_=i[6],m=i[10],d=i[14],y=i[3],x=i[7],E=i[11],P=i[15],C=r[0],R=r[4],q=r[8],T=r[12],D=r[1],Y=r[5],ie=r[9],V=r[13],I=r[2],H=r[6],B=r[10],$=r[14],j=r[3],ne=r[7],re=r[11],se=r[15];return s[0]=o*C+a*D+l*I+u*j,s[4]=o*R+a*Y+l*H+u*ne,s[8]=o*q+a*ie+l*B+u*re,s[12]=o*T+a*V+l*$+u*se,s[1]=c*C+f*D+p*I+h*j,s[5]=c*R+f*Y+p*H+h*ne,s[9]=c*q+f*ie+p*B+h*re,s[13]=c*T+f*V+p*$+h*se,s[2]=v*C+_*D+m*I+d*j,s[6]=v*R+_*Y+m*H+d*ne,s[10]=v*q+_*ie+m*B+d*re,s[14]=v*T+_*V+m*$+d*se,s[3]=y*C+x*D+E*I+P*j,s[7]=y*R+x*Y+E*H+P*ne,s[11]=y*q+x*ie+E*B+P*re,s[15]=y*T+x*V+E*$+P*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],p=e[10],h=e[14],v=e[3],_=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*u*f-s*a*p+i*u*p+r*a*h-i*l*h)+_*(+n*l*h-n*u*p+s*o*p-r*o*h+r*u*c-s*l*c)+m*(+n*u*f-n*a*h-s*o*f+i*o*h+s*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*p+r*o*f-i*o*p+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],p=e[10],h=e[11],v=e[12],_=e[13],m=e[14],d=e[15],y=f*m*u-_*p*u+_*l*h-a*m*h-f*l*d+a*p*d,x=v*p*u-c*m*u-v*l*h+o*m*h+c*l*d-o*p*d,E=c*_*u-v*f*u+v*a*h-o*_*h-c*a*d+o*f*d,P=v*f*l-c*_*l-v*a*p+o*_*p+c*a*m-o*f*m,C=n*y+i*x+r*E+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=y*R,e[1]=(_*p*s-f*m*s-_*r*h+i*m*h+f*r*d-i*p*d)*R,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*R,e[3]=(f*l*s-a*p*s-f*r*u+i*p*u+a*r*h-i*l*h)*R,e[4]=x*R,e[5]=(c*m*s-v*p*s+v*r*h-n*m*h-c*r*d+n*p*d)*R,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*d-n*l*d)*R,e[7]=(o*p*s-c*l*s+c*r*u-n*p*u-o*r*h+n*l*h)*R,e[8]=E*R,e[9]=(v*f*s-c*_*s-v*i*h+n*_*h+c*i*d-n*f*d)*R,e[10]=(o*_*s-v*a*s+v*i*u-n*_*u-o*i*d+n*a*d)*R,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*h-n*a*h)*R,e[12]=P*R,e[13]=(c*_*r-v*f*r+v*i*p-n*_*p-c*i*m+n*f*m)*R,e[14]=(v*a*r-o*_*r-v*i*l+n*_*l+o*i*m-n*a*m)*R,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*p+n*a*p)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,p=s*u,h=s*c,v=s*f,_=o*c,m=o*f,d=a*f,y=l*u,x=l*c,E=l*f,P=i.x,C=i.y,R=i.z;return r[0]=(1-(_+d))*P,r[1]=(h+E)*P,r[2]=(v-x)*P,r[3]=0,r[4]=(h-E)*C,r[5]=(1-(p+d))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(v+x)*R,r[9]=(m-y)*R,r[10]=(1-(p+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Cr.set(r[0],r[1],r[2]).length();const o=Cr.set(r[4],r[5],r[6]).length(),a=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const u=1/s,c=1/o,f=1/a;return Dn.elements[0]*=u,Dn.elements[1]*=u,Dn.elements[2]*=u,Dn.elements[4]*=c,Dn.elements[5]*=c,Dn.elements[6]*=c,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,n.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=vi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let h,v;if(a===vi)h=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Sa)h=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),p=(n+e)*u,h=(i+r)*c;let v,_;if(a===vi)v=(o+s)*f,_=-2*f;else if(a===Sa)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Cr=new ee,Dn=new Tt,gx=new ee(0,0,0),_x=new ee(1,1,1),wi=new ee,Lo=new ee,vn=new ee,id=new Tt,rd=new cs;class lo{constructor(e=0,n=0,i=0,r=lo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],p=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lo.DEFAULT_ORDER="XYZ";class Op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vx=0;const sd=new ee,Lr=new cs,ci=new Tt,Po=new ee,Ms=new ee,xx=new ee,yx=new cs,od=new ee(1,0,0),ad=new ee(0,1,0),ld=new ee(0,0,1),Mx={type:"added"},Sx={type:"removed"};class mn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new ee,n=new lo,i=new cs,r=new ee(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new it}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(ad,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,n){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(ad,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Po.copy(e):Po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Ms,Po,this.up):ci.lookAt(Po,Ms,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(ci),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Sx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),p=o(e.skeletons),h=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new ee(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new ee,ui=new ee,Dl=new ee,fi=new ee,Pr=new ee,Dr=new ee,cd=new ee,Il=new ee,Ul=new ee,Nl=new ee;let Do=!1;class On{constructor(e=new ee,n=new ee,i=new ee){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ui.subVectors(i,n),Dl.subVectors(e,n);const o=In.dot(In),a=In.dot(ui),l=In.dot(Dl),u=ui.dot(ui),c=ui.dot(Dl),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,h=(u*l-a*c)*p,v=(o*c-a*l)*p;return s.set(1-h-v,v,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Do===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Do=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ui.subVectors(e,n),In.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),In.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Do===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Do=!0),On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Pr.subVectors(r,i),Dr.subVectors(s,i),Il.subVectors(e,i);const l=Pr.dot(Il),u=Dr.dot(Il);if(l<=0&&u<=0)return n.copy(i);Ul.subVectors(e,r);const c=Pr.dot(Ul),f=Dr.dot(Ul);if(c>=0&&f<=c)return n.copy(r);const p=l*f-c*u;if(p<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Pr,o);Nl.subVectors(e,s);const h=Pr.dot(Nl),v=Dr.dot(Nl);if(v>=0&&h<=v)return n.copy(s);const _=h*u-l*v;if(_<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Dr,a);const m=c*v-h*f;if(m<=0&&f-c>=0&&h-v>=0)return cd.subVectors(s,r),a=(f-c)/(f-c+(h-v)),n.copy(r).addScaledVector(cd,a);const d=1/(m+_+p);return o=_*d,a=p*d,n.copy(i).addScaledVector(Pr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Ol(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,dt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=dt.workingColorSpace){if(e=lx(e,1),n=dn(n,0,1),i=dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ol(o,s,e+1/3),this.g=Ol(o,s,e),this.b=Ol(o,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,n=Ht){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ht){const i=Fp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}copyLinearToSRGB(e){return this.r=bl(e.r),this.g=bl(e.g),this.b=bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return dt.fromWorkingColorSpace(qt.copy(this),e),Math.round(dn(qt.r*255,0,255))*65536+Math.round(dn(qt.g*255,0,255))*256+Math.round(dn(qt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dt.workingColorSpace){dt.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=dt.workingColorSpace){return dt.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Ht){dt.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Ht?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+n,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ri),e.getHSL(Io);const i=Sl(Ri.h,Io.h,n),r=Sl(Ri.s,Io.s,n),s=Sl(Ri.l,Io.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new et;et.NAMES=Fp;let Ex=0;class co extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Kr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=dc,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bp extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new ee,Uo=new st;class kt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Kf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uo.fromBufferAttribute(this,n),Uo.applyMatrix3(e),this.setXY(n,Uo.x,Uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kf&&(e.usage=this.usage),e}}class zp extends kt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Hp extends kt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sn extends kt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let bx=0;const bn=new Tt,Fl=new mn,Ir=new ee,xn=new Sr,Ss=new Sr,Ot=new ee;class Ln extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pp(e)?Hp:zp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Fl.lookAt(e),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(xn.min,Ss.min),xn.expandByPoint(Ot),Ot.addVectors(xn.max,Ss.max),xn.expandByPoint(Ot)):(xn.expandByPoint(Ss.min),xn.expandByPoint(Ss.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ot.fromBufferAttribute(a,u),l&&(Ir.fromBufferAttribute(e,u),Ot.add(Ir)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let D=0;D<a;D++)u[D]=new ee,c[D]=new ee;const f=new ee,p=new ee,h=new ee,v=new st,_=new st,m=new st,d=new ee,y=new ee;function x(D,Y,ie){f.fromArray(r,D*3),p.fromArray(r,Y*3),h.fromArray(r,ie*3),v.fromArray(o,D*2),_.fromArray(o,Y*2),m.fromArray(o,ie*2),p.sub(f),h.sub(f),_.sub(v),m.sub(v);const V=1/(_.x*m.y-m.x*_.y);isFinite(V)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(h,-_.y).multiplyScalar(V),y.copy(h).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(V),u[D].add(d),u[Y].add(d),u[ie].add(d),c[D].add(y),c[Y].add(y),c[ie].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let D=0,Y=E.length;D<Y;++D){const ie=E[D],V=ie.start,I=ie.count;for(let H=V,B=V+I;H<B;H+=3)x(i[H+0],i[H+1],i[H+2])}const P=new ee,C=new ee,R=new ee,q=new ee;function T(D){R.fromArray(s,D*3),q.copy(R);const Y=u[D];P.copy(Y),P.sub(R.multiplyScalar(R.dot(Y))).normalize(),C.crossVectors(q,Y);const V=C.dot(c[D])<0?-1:1;l[D*4]=P.x,l[D*4+1]=P.y,l[D*4+2]=P.z,l[D*4+3]=V}for(let D=0,Y=E.length;D<Y;++D){const ie=E[D],V=ie.start,I=ie.count;for(let H=V,B=V+I;H<B;H+=3)T(i[H+0]),T(i[H+1]),T(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,h=i.count;p<h;p++)i.setXYZ(p,0,0,0);const r=new ee,s=new ee,o=new ee,a=new ee,l=new ee,u=new ee,c=new ee,f=new ee;if(e)for(let p=0,h=e.count;p<h;p+=3){const v=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,h=n.count;p<h;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(p+0,c.x,c.y,c.z),i.setXYZ(p+1,c.x,c.y,c.z),i.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,p=new u.constructor(l.length*c);let h=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*c;for(let d=0;d<c;d++)p[v++]=u[h++]}return new kt(p,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const p=u[c],h=e(p,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,p=u.length;f<p;f++){const h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let p=0,h=f.length;p<h;p++)c.push(f[p].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ud=new Tt,ir=new Np,No=new us,fd=new ee,Ur=new ee,Nr=new ee,Or=new ee,Bl=new ee,Oo=new ee,Fo=new st,Bo=new st,zo=new st,dd=new ee,hd=new ee,pd=new ee,Ho=new ee,Go=new ee;class Vt extends mn{constructor(e=new Ln,n=new Bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Oo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Bl.fromBufferAttribute(f,e),o?Oo.addScaledVector(Bl,c):Oo.addScaledVector(Bl.sub(n),c))}n.add(Oo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(No.containsPoint(ir.origin)===!1&&(ir.intersectSphere(No,fd)===null||ir.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(ud.copy(s).invert(),ir.copy(e.ray).applyMatrix4(ud),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,p=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=p.length;v<_;v++){const m=p[v],d=o[m.materialIndex],y=Math.max(m.start,h.start),x=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let E=y,P=x;E<P;E+=3){const C=a.getX(E),R=a.getX(E+1),q=a.getX(E+2);r=Vo(this,d,e,i,u,c,f,C,R,q),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=v,d=_;m<d;m+=3){const y=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);r=Vo(this,o,e,i,u,c,f,y,x,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=p.length;v<_;v++){const m=p[v],d=o[m.materialIndex],y=Math.max(m.start,h.start),x=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let E=y,P=x;E<P;E+=3){const C=E,R=E+1,q=E+2;r=Vo(this,d,e,i,u,c,f,C,R,q),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=v,d=_;m<d;m+=3){const y=m,x=m+1,E=m+2;r=Vo(this,o,e,i,u,c,f,y,x,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Tx(t,e,n,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$i,a),l===null)return null;Go.copy(a),Go.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Go);return u<n.near||u>n.far?null:{distance:u,point:Go.clone(),object:t}}function Vo(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ur),t.getVertexPosition(l,Nr),t.getVertexPosition(u,Or);const c=Tx(t,e,n,i,Ur,Nr,Or,Ho);if(c){r&&(Fo.fromBufferAttribute(r,a),Bo.fromBufferAttribute(r,l),zo.fromBufferAttribute(r,u),c.uv=On.getInterpolation(Ho,Ur,Nr,Or,Fo,Bo,zo,new st)),s&&(Fo.fromBufferAttribute(s,a),Bo.fromBufferAttribute(s,l),zo.fromBufferAttribute(s,u),c.uv1=On.getInterpolation(Ho,Ur,Nr,Or,Fo,Bo,zo,new st),c.uv2=c.uv1),o&&(dd.fromBufferAttribute(o,a),hd.fromBufferAttribute(o,l),pd.fromBufferAttribute(o,u),c.normal=On.getInterpolation(Ho,Ur,Nr,Or,dd,hd,pd,new ee),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new ee,materialIndex:0};On.getNormal(Ur,Nr,Or,f.normal),c.face=f}return c}class uo extends Ln{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let p=0,h=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(u,3)),this.setAttribute("normal",new Sn(c,3)),this.setAttribute("uv",new Sn(f,2));function v(_,m,d,y,x,E,P,C,R,q,T){const D=E/R,Y=P/q,ie=E/2,V=P/2,I=C/2,H=R+1,B=q+1;let $=0,j=0;const ne=new ee;for(let re=0;re<B;re++){const se=re*Y-V;for(let xe=0;xe<H;xe++){const k=xe*D-ie;ne[_]=k*y,ne[m]=se*x,ne[d]=I,u.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[d]=C>0?1:-1,c.push(ne.x,ne.y,ne.z),f.push(xe/R),f.push(1-re/q),$+=1}}for(let re=0;re<q;re++)for(let se=0;se<R;se++){const xe=p+se+H*re,k=p+se+H*(re+1),de=p+(se+1)+H*(re+1),Ee=p+(se+1)+H*re;l.push(xe,k,Ee),l.push(k,de,Ee),j+=6}a.addGroup(h,j,T),h+=j,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=ss(t[n]);for(const r in i)e[r]=i[r]}return e}function Ax(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gp(t){return t.getRenderTarget()===null?t.outputColorSpace:dt.workingColorSpace}const wx={clone:ss,merge:rn};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Vp extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends Vp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vc*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ml*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,Br=1;class Lx extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Fr,Br,e,n);r.layers=this.layers,this.add(r);const s=new An(Fr,Br,e,n);s.layers=this.layers,this.add(s);const o=new An(Fr,Br,e,n);o.layers=this.layers,this.add(o);const a=new An(Fr,Br,e,n);a.layers=this.layers,this.add(a);const l=new An(Fr,Br,e,n);l.layers=this.layers,this.add(l);const u=new An(Fr,Br,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,p,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class kp extends pn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ns,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Px extends qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Gs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xr?Ht:wn),this.texture=new kp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new uo(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Gi});s.uniforms.tEquirect.value=n;const o=new Vt(r,s),a=n.minFilter;return n.minFilter===yr&&(n.minFilter=Tn),new Lx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const zl=new ee,Dx=new ee,Ix=new it;class or{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zl.subVectors(i,n).cross(Dx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ix.getNormalMatrix(e),r=this.coplanarPoint(zl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new us,ko=new ee;class Wp{constructor(e=new or,n=new or,i=new or,r=new or,s=new or,o=new or){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],p=r[7],h=r[8],v=r[9],_=r[10],m=r[11],d=r[12],y=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,p-u,m-h,E-d).normalize(),i[1].setComponents(l+s,p+u,m+h,E+d).normalize(),i[2].setComponents(l+o,p+c,m+v,E+y).normalize(),i[3].setComponents(l-o,p-c,m-v,E-y).normalize(),i[4].setComponents(l-a,p-f,m-_,E-x).normalize(),n===vi)i[5].setComponents(l+a,p+f,m+_,E+x).normalize();else if(n===Sa)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ko.x=r.normal.x>0?e.max.x:e.min.x,ko.y=r.normal.y>0?e.max.y:e.min.y,ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ux(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,p=u.usage,h=f.byteLength,v=t.createBuffer();t.bindBuffer(c,v),t.bufferData(c,f,p),u.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:h}}function s(u,c,f){const p=c.array,h=c._updateRange,v=c.updateRanges;if(t.bindBuffer(f,u),h.count===-1&&v.length===0&&t.bufferSubData(f,0,p),v.length!==0){for(let _=0,m=v.length;_<m;_++){const d=v[_];n?t.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):t.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}h.count!==-1&&(n?t.bufferSubData(f,h.offset*p.BYTES_PER_ELEMENT,p,h.offset,h.count):t.bufferSubData(f,h.offset*p.BYTES_PER_ELEMENT,p.subarray(h.offset,h.offset+h.count)),h.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class Yi extends Ln{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,p=n/l,h=[],v=[],_=[],m=[];for(let d=0;d<c;d++){const y=d*p-o;for(let x=0;x<u;x++){const E=x*f-s;v.push(E,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const x=y+u*d,E=y+u*(d+1),P=y+1+u*(d+1),C=y+1+u*d;h.push(x,E,C),h.push(E,P,C)}this.setIndex(h),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ox=`#ifdef USE_ALPHAHASH
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
#endif`,Fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gx=`#ifdef USE_AOMAP
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
#endif`,Vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kx=`#ifdef USE_BATCHING
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
#endif`,Wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yx=`#ifdef USE_IRIDESCENCE
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
#endif`,jx=`#ifdef USE_BUMPMAP
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
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ry=`#define PI 3.141592653589793
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
} // validated`,sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oy=`vec3 transformedNormal = objectNormal;
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
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",dy=`
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
}`,hy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
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
#endif`,vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,My=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sy=`#ifdef USE_GRADIENTMAP
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
}`,Ey=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,by=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wy=`uniform bool receiveShadow;
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
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iy=`PhysicalMaterial material;
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
#endif`,Uy=`struct PhysicalMaterial {
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
}`,Ny=`
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
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,By=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xy=`#if defined( USE_POINTS_UV )
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
#endif`,$y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jy=`#ifdef USE_MORPHNORMALS
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
#endif`,Ky=`#ifdef USE_MORPHTARGETS
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
#endif`,Zy=`#ifdef USE_MORPHTARGETS
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
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iM=`#ifdef USE_NORMALMAP
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
#endif`,rM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xM=`float getShadowMask() {
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
}`,yM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MM=`#ifdef USE_SKINNING
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
#endif`,SM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EM=`#ifdef USE_SKINNING
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
#endif`,bM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RM=`#ifdef USE_TRANSMISSION
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
#endif`,CM=`#ifdef USE_TRANSMISSION
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
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NM=`uniform sampler2D t2D;
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
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`#include <common>
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
}`,GM=`#if DEPTH_PACKING == 3200
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
}`,VM=`#define DISTANCE
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
}`,kM=`#define DISTANCE
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
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`uniform float scale;
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
}`,qM=`uniform vec3 diffuse;
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
}`,YM=`#include <common>
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
}`,jM=`uniform vec3 diffuse;
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
}`,KM=`#define LAMBERT
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
}`,ZM=`#define LAMBERT
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
}`,JM=`#define MATCAP
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
}`,QM=`#define MATCAP
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
}`,eS=`#define NORMAL
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
}`,tS=`#define NORMAL
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
}`,nS=`#define PHONG
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
}`,iS=`#define PHONG
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
}`,rS=`#define STANDARD
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
}`,sS=`#define STANDARD
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
}`,oS=`#define TOON
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
}`,aS=`#define TOON
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
}`,lS=`uniform float size;
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
}`,cS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,fS=`uniform vec3 color;
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
}`,dS=`uniform float rotation;
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
}`,hS=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Nx,alphahash_pars_fragment:Ox,alphamap_fragment:Fx,alphamap_pars_fragment:Bx,alphatest_fragment:zx,alphatest_pars_fragment:Hx,aomap_fragment:Gx,aomap_pars_fragment:Vx,batching_pars_vertex:kx,batching_vertex:Wx,begin_vertex:Xx,beginnormal_vertex:$x,bsdfs:qx,iridescence_fragment:Yx,bumpmap_pars_fragment:jx,clipping_planes_fragment:Kx,clipping_planes_pars_fragment:Zx,clipping_planes_pars_vertex:Jx,clipping_planes_vertex:Qx,color_fragment:ey,color_pars_fragment:ty,color_pars_vertex:ny,color_vertex:iy,common:ry,cube_uv_reflection_fragment:sy,defaultnormal_vertex:oy,displacementmap_pars_vertex:ay,displacementmap_vertex:ly,emissivemap_fragment:cy,emissivemap_pars_fragment:uy,colorspace_fragment:fy,colorspace_pars_fragment:dy,envmap_fragment:hy,envmap_common_pars_fragment:py,envmap_pars_fragment:my,envmap_pars_vertex:gy,envmap_physical_pars_fragment:Ry,envmap_vertex:_y,fog_vertex:vy,fog_pars_vertex:xy,fog_fragment:yy,fog_pars_fragment:My,gradientmap_pars_fragment:Sy,lightmap_fragment:Ey,lightmap_pars_fragment:by,lights_lambert_fragment:Ty,lights_lambert_pars_fragment:Ay,lights_pars_begin:wy,lights_toon_fragment:Cy,lights_toon_pars_fragment:Ly,lights_phong_fragment:Py,lights_phong_pars_fragment:Dy,lights_physical_fragment:Iy,lights_physical_pars_fragment:Uy,lights_fragment_begin:Ny,lights_fragment_maps:Oy,lights_fragment_end:Fy,logdepthbuf_fragment:By,logdepthbuf_pars_fragment:zy,logdepthbuf_pars_vertex:Hy,logdepthbuf_vertex:Gy,map_fragment:Vy,map_pars_fragment:ky,map_particle_fragment:Wy,map_particle_pars_fragment:Xy,metalnessmap_fragment:$y,metalnessmap_pars_fragment:qy,morphcolor_vertex:Yy,morphnormal_vertex:jy,morphtarget_pars_vertex:Ky,morphtarget_vertex:Zy,normal_fragment_begin:Jy,normal_fragment_maps:Qy,normal_pars_fragment:eM,normal_pars_vertex:tM,normal_vertex:nM,normalmap_pars_fragment:iM,clearcoat_normal_fragment_begin:rM,clearcoat_normal_fragment_maps:sM,clearcoat_pars_fragment:oM,iridescence_pars_fragment:aM,opaque_fragment:lM,packing:cM,premultiplied_alpha_fragment:uM,project_vertex:fM,dithering_fragment:dM,dithering_pars_fragment:hM,roughnessmap_fragment:pM,roughnessmap_pars_fragment:mM,shadowmap_pars_fragment:gM,shadowmap_pars_vertex:_M,shadowmap_vertex:vM,shadowmask_pars_fragment:xM,skinbase_vertex:yM,skinning_pars_vertex:MM,skinning_vertex:SM,skinnormal_vertex:EM,specularmap_fragment:bM,specularmap_pars_fragment:TM,tonemapping_fragment:AM,tonemapping_pars_fragment:wM,transmission_fragment:RM,transmission_pars_fragment:CM,uv_pars_fragment:LM,uv_pars_vertex:PM,uv_vertex:DM,worldpos_vertex:IM,background_vert:UM,background_frag:NM,backgroundCube_vert:OM,backgroundCube_frag:FM,cube_vert:BM,cube_frag:zM,depth_vert:HM,depth_frag:GM,distanceRGBA_vert:VM,distanceRGBA_frag:kM,equirect_vert:WM,equirect_frag:XM,linedashed_vert:$M,linedashed_frag:qM,meshbasic_vert:YM,meshbasic_frag:jM,meshlambert_vert:KM,meshlambert_frag:ZM,meshmatcap_vert:JM,meshmatcap_frag:QM,meshnormal_vert:eS,meshnormal_frag:tS,meshphong_vert:nS,meshphong_frag:iS,meshphysical_vert:rS,meshphysical_frag:sS,meshtoon_vert:oS,meshtoon_frag:aS,points_vert:lS,points_frag:cS,shadow_vert:uS,shadow_frag:fS,sprite_vert:dS,sprite_frag:hS},De={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Kn={basic:{uniforms:rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:rn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:rn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:rn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:rn([De.points,De.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:rn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:rn([De.common,De.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:rn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:rn([De.sprite,De.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:rn([De.common,De.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:rn([De.lights,De.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Kn.physical={uniforms:rn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Wo={r:0,b:0,g:0};function pS(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,c,f=null,p=0,h=null;function v(m,d){let y=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ba)?(c===void 0&&(c=new Vt(new uo(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:ss(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==_t,(f!==x||p!==x.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,p=x.version,h=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Vt(new Yi(2,2),new Bt({name:"BackgroundMaterial",uniforms:ss(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=dt.getTransfer(x.colorSpace)!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,p=x.version,h=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,d){m.getRGB(Wo,Gp(t)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:v}}function mS(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(I,H,B,$,j){let ne=!1;if(o){const re=_($,B,H);u!==re&&(u=re,h(u.object)),ne=d(I,$,B,j),ne&&y(I,$,B,j)}else{const re=H.wireframe===!0;(u.geometry!==$.id||u.program!==B.id||u.wireframe!==re)&&(u.geometry=$.id,u.program=B.id,u.wireframe=re,ne=!0)}j!==null&&n.update(j,t.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,q(I,H,B,$),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(j).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function h(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function v(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,H,B){const $=B.wireframe===!0;let j=a[I.id];j===void 0&&(j={},a[I.id]=j);let ne=j[H.id];ne===void 0&&(ne={},j[H.id]=ne);let re=ne[$];return re===void 0&&(re=m(p()),ne[$]=re),re}function m(I){const H=[],B=[],$=[];for(let j=0;j<r;j++)H[j]=0,B[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:$,object:I,attributes:{},index:null}}function d(I,H,B,$){const j=u.attributes,ne=H.attributes;let re=0;const se=B.getAttributes();for(const xe in se)if(se[xe].location>=0){const de=j[xe];let Ee=ne[xe];if(Ee===void 0&&(xe==="instanceMatrix"&&I.instanceMatrix&&(Ee=I.instanceMatrix),xe==="instanceColor"&&I.instanceColor&&(Ee=I.instanceColor)),de===void 0||de.attribute!==Ee||Ee&&de.data!==Ee.data)return!0;re++}return u.attributesNum!==re||u.index!==$}function y(I,H,B,$){const j={},ne=H.attributes;let re=0;const se=B.getAttributes();for(const xe in se)if(se[xe].location>=0){let de=ne[xe];de===void 0&&(xe==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),xe==="instanceColor"&&I.instanceColor&&(de=I.instanceColor));const Ee={};Ee.attribute=de,de&&de.data&&(Ee.data=de.data),j[xe]=Ee,re++}u.attributes=j,u.attributesNum=re,u.index=$}function x(){const I=u.newAttributes;for(let H=0,B=I.length;H<B;H++)I[H]=0}function E(I){P(I,0)}function P(I,H){const B=u.newAttributes,$=u.enabledAttributes,j=u.attributeDivisors;B[I]=1,$[I]===0&&(t.enableVertexAttribArray(I),$[I]=1),j[I]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),j[I]=H)}function C(){const I=u.newAttributes,H=u.enabledAttributes;for(let B=0,$=H.length;B<$;B++)H[B]!==I[B]&&(t.disableVertexAttribArray(B),H[B]=0)}function R(I,H,B,$,j,ne,re){re===!0?t.vertexAttribIPointer(I,H,B,j,ne):t.vertexAttribPointer(I,H,B,$,j,ne)}function q(I,H,B,$){if(i.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=$.attributes,ne=B.getAttributes(),re=H.defaultAttributeValues;for(const se in ne){const xe=ne[se];if(xe.location>=0){let k=j[se];if(k===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){const de=k.normalized,Ee=k.itemSize,Le=n.get(k);if(Le===void 0)continue;const Ie=Le.buffer,Ge=Le.type,He=Le.bytesPerElement,Ve=i.isWebGL2===!0&&(Ge===t.INT||Ge===t.UNSIGNED_INT||k.gpuType===Sp);if(k.isInterleavedBufferAttribute){const N=k.data,A=N.stride,oe=k.offset;if(N.isInstancedInterleavedBuffer){for(let te=0;te<xe.locationSize;te++)P(xe.location+te,N.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let te=0;te<xe.locationSize;te++)E(xe.location+te);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let te=0;te<xe.locationSize;te++)R(xe.location+te,Ee/xe.locationSize,Ge,de,A*He,(oe+Ee/xe.locationSize*te)*He,Ve)}else{if(k.isInstancedBufferAttribute){for(let N=0;N<xe.locationSize;N++)P(xe.location+N,k.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let N=0;N<xe.locationSize;N++)E(xe.location+N);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let N=0;N<xe.locationSize;N++)R(xe.location+N,Ee/xe.locationSize,Ge,de,Ee*He,Ee/xe.locationSize*N*He,Ve)}}else if(re!==void 0){const de=re[se];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(xe.location,de);break;case 3:t.vertexAttrib3fv(xe.location,de);break;case 4:t.vertexAttrib4fv(xe.location,de);break;default:t.vertexAttrib1fv(xe.location,de)}}}}C()}function T(){ie();for(const I in a){const H=a[I];for(const B in H){const $=H[B];for(const j in $)v($[j].object),delete $[j];delete H[B]}delete a[I]}}function D(I){if(a[I.id]===void 0)return;const H=a[I.id];for(const B in H){const $=H[B];for(const j in $)v($[j].object),delete $[j];delete H[B]}delete a[I.id]}function Y(I){for(const H in a){const B=a[H];if(B[I.id]===void 0)continue;const $=B[I.id];for(const j in $)v($[j].object),delete $[j];delete B[I.id]}}function ie(){V(),c=!0,u!==l&&(u=l,h(u.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ie,resetDefaultState:V,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:Y,initAttributes:x,enableAttribute:E,disableUnusedAttributes:C}}function gS(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){t.drawArrays(s,c,f),n.update(f,s,1)}function l(c,f,p){if(p===0)return;let h,v;if(r)h=t,v="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[v](s,c,f,p),n.update(f,s,p)}function u(c,f,p){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<p;v++)this.render(c[v],f[v]);else{h.multiDrawArraysWEBGL(s,c,0,f,0,p);let v=0;for(let _=0;_<p;_++)v+=f[_];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function _S(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,E=o||e.has("OES_texture_float"),P=x&&E,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:p,maxTextureSize:h,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:C}}function vS(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new or,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const h=f.length!==0||p||i!==0||r;return r=p,i=f.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=c(f,p,0)},this.setState=function(f,p,h){const v=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const y=s?0:i,x=y*4;let E=d.clippingState||null;l.value=E,E=c(v,p,x,h);for(let P=0;P!==x;++P)E[P]=n[P];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,p,h,v){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const d=h+_*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,E=h;x!==_;++x,E+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function xS(t){let e=new WeakMap;function n(o,a){return a===hc?o.mapping=ns:a===pc&&(o.mapping=is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hc||a===pc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Px(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $p extends Vp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Wr=4,md=[.125,.215,.35,.446,.526,.582],ur=20,Hl=new $p,gd=new et;let Gl=null,Vl=0,kl=0;const ar=(1+Math.sqrt(5))/2,zr=1/ar,_d=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,ar,zr),new ee(0,ar,-zr),new ee(zr,0,ar),new ee(-zr,0,ar),new ee(ar,zr,0),new ee(-ar,zr,0)];class vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Gl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gl,Vl,kl),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Qs,format:Bn,colorSpace:ri,depthBuffer:!1},r=xd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yS(s)),this._blurMaterial=MS(s,e,n)}return r}_compileMaterial(e){const n=new Vt(this._lodPlanes[0],e);this._renderer.compile(n,Hl)}_sceneToCubeUV(e,n,i,r){const a=new An(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,p=c.toneMapping;c.getClearColor(gd),c.toneMapping=Vi,c.autoClear=!1;const h=new Bp({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new Vt(new uo,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(gd),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;Xo(r,y*x,d>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=p,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ns||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Hl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_d[(r-1)%_d.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Vt(this._lodPlanes[r],u),p=u.uniforms,h=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ur-1),_=s/v,m=isFinite(s)?1+Math.floor(c*_):ur;m>ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ur}`);const d=[];let y=0;for(let R=0;R<ur;++R){const q=R/_,T=Math.exp(-q*q/2);d.push(T),R===0?y+=T:R<m&&(y+=2*T)}for(let R=0;R<d.length;R++)d[R]=d[R]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=v,p.mipInt.value=x-i;const E=this._sizeLods[r],P=3*E*(r>x-Wr?r-x+Wr:0),C=4*(this._cubeSize-E);Xo(n,P,C,3*E,2*E),l.setRenderTarget(n),l.render(f,Hl)}}function yS(t){const e=[],n=[],i=[];let r=t;const s=t-Wr+1+md.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Wr?l=md[o-t+Wr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,p=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,v=6,_=3,m=2,d=1,y=new Float32Array(_*v*h),x=new Float32Array(m*v*h),E=new Float32Array(d*v*h);for(let C=0;C<h;C++){const R=C%3*2/3-1,q=C>2?0:-1,T=[R,q,0,R+2/3,q,0,R+2/3,q+1,0,R,q,0,R+2/3,q+1,0,R,q+1,0];y.set(T,_*v*C),x.set(p,m*v*C);const D=[C,C,C,C,C,C];E.set(D,d*v*C)}const P=new Ln;P.setAttribute("position",new kt(y,_)),P.setAttribute("uv",new kt(x,m)),P.setAttribute("faceIndex",new kt(E,d)),e.push(P),r>Wr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xd(t,e,n){const i=new qi(t,e,n);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function MS(t,e,n){const i=new Float32Array(ur),r=new ee(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function yd(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Md(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function SS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hc||l===pc,c=l===ns||l===is;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new vd(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new vd(t));const p=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ES(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bS(t,e,n,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const _=p.morphAttributes[v];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}p.removeEventListener("dispose",o),delete r[p.id];const h=s.get(p);h&&(e.remove(h),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const v in p)e.update(p[v],t.ARRAY_BUFFER);const h=f.morphAttributes;for(const v in h){const _=h[v];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(f){const p=[],h=f.index,v=f.attributes.position;let _=0;if(h!==null){const y=h.array;_=h.version;for(let x=0,E=y.length;x<E;x+=3){const P=y[x+0],C=y[x+1],R=y[x+2];p.push(P,C,C,R,R,P)}}else if(v!==void 0){const y=v.array;_=v.version;for(let x=0,E=y.length/3-1;x<E;x+=3){const P=x+0,C=x+1,R=x+2;p.push(P,C,C,R,R,P)}}else return;const m=new(Pp(p)?Hp:zp)(p,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const p=s.get(f);if(p){const h=f.index;h!==null&&p.version<h.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function TS(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,v){t.drawElements(s,v,a,h*l),n.update(v,s,1)}function f(h,v,_){if(_===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,v,a,h*l,_),n.update(v,s,_)}function p(h,v,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(h[d]/l,v[d]);else{m.multiDrawElementsWEBGL(s,v,0,a,h,0,_);let d=0;for(let y=0;y<_;y++)d+=v[y];n.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function AS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function wS(t,e){return t[0]-e[0]}function RS(t,e){return Math.abs(e[1])-Math.abs(t[1])}function CS(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Gt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=h!==void 0?h.length:0;let _=s.get(c);if(_===void 0||_.count!==v){let I=function(){ie.dispose(),s.delete(c),c.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();const y=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let q=0;y===!0&&(q=1),x===!0&&(q=2),E===!0&&(q=3);let T=c.attributes.position.count*q,D=1;T>e.maxTextureSize&&(D=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Y=new Float32Array(T*D*4*v),ie=new Up(Y,T,D,v);ie.type=Ni,ie.needsUpdate=!0;const V=q*4;for(let H=0;H<v;H++){const B=P[H],$=C[H],j=R[H],ne=T*D*4*H;for(let re=0;re<B.count;re++){const se=re*V;y===!0&&(o.fromBufferAttribute(B,re),Y[ne+se+0]=o.x,Y[ne+se+1]=o.y,Y[ne+se+2]=o.z,Y[ne+se+3]=0),x===!0&&(o.fromBufferAttribute($,re),Y[ne+se+4]=o.x,Y[ne+se+5]=o.y,Y[ne+se+6]=o.z,Y[ne+se+7]=0),E===!0&&(o.fromBufferAttribute(j,re),Y[ne+se+8]=o.x,Y[ne+se+9]=o.y,Y[ne+se+10]=o.z,Y[ne+se+11]=j.itemSize===4?o.w:1)}}_={count:v,texture:ie,size:new st(T,D)},s.set(c,_),c.addEventListener("dispose",I)}let m=0;for(let y=0;y<p.length;y++)m+=p[y];const d=c.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",d),f.getUniforms().setValue(t,"morphTargetInfluences",p),f.getUniforms().setValue(t,"morphTargetsTexture",_.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",_.size)}else{const h=p===void 0?0:p.length;let v=i[c.id];if(v===void 0||v.length!==h){v=[];for(let x=0;x<h;x++)v[x]=[x,0];i[c.id]=v}for(let x=0;x<h;x++){const E=v[x];E[0]=x,E[1]=p[x]}v.sort(RS);for(let x=0;x<8;x++)x<h&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(wS);const _=c.morphAttributes.position,m=c.morphAttributes.normal;let d=0;for(let x=0;x<8;x++){const E=a[x],P=E[0],C=E[1];P!==Number.MAX_SAFE_INTEGER&&C?(_&&c.getAttribute("morphTarget"+x)!==_[P]&&c.setAttribute("morphTarget"+x,_[P]),m&&c.getAttribute("morphNormal"+x)!==m[P]&&c.setAttribute("morphNormal"+x,m[P]),r[x]=C,d+=C):(_&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),m&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const y=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",y),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function LS(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class qp extends pn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:vr,c!==vr&&c!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===vr&&(i=Ui),i===void 0&&c===rs&&(i=_r),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Yp=new pn,jp=new qp(1,1);jp.compareFunction=Lp;const Kp=new Up,Zp=new px,Jp=new kp,Sd=[],Ed=[],bd=new Float32Array(16),Td=new Float32Array(9),Ad=new Float32Array(4);function fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sd[r];if(s===void 0&&(s=new Float32Array(r),Sd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ha(t,e){let n=Ed[e];n===void 0&&(n=new Int32Array(e),Ed[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function IS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function US(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function NS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Ad.set(i),t.uniformMatrix2fv(this.addr,!1,Ad),It(n,i)}}function OS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Td.set(i),t.uniformMatrix3fv(this.addr,!1,Td),It(n,i)}}function FS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;bd.set(i),t.uniformMatrix4fv(this.addr,!1,bd),It(n,i)}}function BS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function HS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function GS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function VS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function WS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function XS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function $S(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?jp:Yp;n.setTexture2D(e||s,r)}function qS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Zp,r)}function YS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Jp,r)}function jS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Kp,r)}function KS(t){switch(t){case 5126:return PS;case 35664:return DS;case 35665:return IS;case 35666:return US;case 35674:return NS;case 35675:return OS;case 35676:return FS;case 5124:case 35670:return BS;case 35667:case 35671:return zS;case 35668:case 35672:return HS;case 35669:case 35673:return GS;case 5125:return VS;case 36294:return kS;case 36295:return WS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return jS}}function ZS(t,e){t.uniform1fv(this.addr,e)}function JS(t,e){const n=fs(e,this.size,2);t.uniform2fv(this.addr,n)}function QS(t,e){const n=fs(e,this.size,3);t.uniform3fv(this.addr,n)}function eE(t,e){const n=fs(e,this.size,4);t.uniform4fv(this.addr,n)}function tE(t,e){const n=fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function nE(t,e){const n=fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function iE(t,e){const n=fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function rE(t,e){t.uniform1iv(this.addr,e)}function sE(t,e){t.uniform2iv(this.addr,e)}function oE(t,e){t.uniform3iv(this.addr,e)}function aE(t,e){t.uniform4iv(this.addr,e)}function lE(t,e){t.uniform1uiv(this.addr,e)}function cE(t,e){t.uniform2uiv(this.addr,e)}function uE(t,e){t.uniform3uiv(this.addr,e)}function fE(t,e){t.uniform4uiv(this.addr,e)}function dE(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Yp,s[o])}function hE(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Zp,s[o])}function pE(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Jp,s[o])}function mE(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Kp,s[o])}function gE(t){switch(t){case 5126:return ZS;case 35664:return JS;case 35665:return QS;case 35666:return eE;case 35674:return tE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return rE;case 35667:case 35671:return sE;case 35668:case 35672:return oE;case 35669:case 35673:return aE;case 5125:return lE;case 36294:return cE;case 36295:return uE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return dE;case 35679:case 36299:case 36307:return hE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}class _E{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=KS(n.type)}}class vE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gE(n.type)}}class xE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Wl=/(\w+)(\])?(\[|\.)?/g;function wd(t,e){t.seq.push(e),t.map[e.id]=e}function yE(t,e,n){const i=t.name,r=i.length;for(Wl.lastIndex=0;;){const s=Wl.exec(i),o=Wl.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){wd(n,u===void 0?new _E(a,t,e):new vE(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new xE(a),wd(n,f)),n=f}}}class ra{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);yE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Rd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ME=37297;let SE=0;function EE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function bE(t){const e=dt.getPrimaries(dt.workingColorSpace),n=dt.getPrimaries(t);let i;switch(e===n?i="":e===Ma&&n===ya?i="LinearDisplayP3ToLinearSRGB":e===ya&&n===Ma&&(i="LinearSRGBToLinearDisplayP3"),t){case ri:case za:return[i,"LinearTransferOETF"];case Ht:case Yc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Cd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+EE(t.getShaderSource(e),o)}else return r}function TE(t,e){const n=bE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function AE(t,e){let n;switch(e){case Ov:n="Linear";break;case Fv:n="Reinhard";break;case Bv:n="OptimizedCineon";break;case zv:n="ACESFilmic";break;case Gv:n="AgX";break;case Hv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function wE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xr).join(`
`)}function RE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xr).join(`
`)}function CE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function LE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xr(t){return t!==""}function Ld(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PE=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(t){return t.replace(PE,IE)}const DE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function IE(t,e){let n=Qe[e];if(n===void 0){const i=DE.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yc(n)}const UE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dd(t){return t.replace(UE,NE)}function NE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Id(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function FE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function zE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yp:e="ENVMAP_BLENDING_MULTIPLY";break;case Uv:e="ENVMAP_BLENDING_MIX";break;case Nv:e="ENVMAP_BLENDING_ADD";break}return e}function HE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function GE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=OE(n),u=FE(n),c=BE(n),f=zE(n),p=HE(n),h=n.isWebGL2?"":wE(n),v=RE(n),_=CE(s),m=r.createProgram();let d,y,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xr).join(`
`),d.length>0&&(d+=`
`),y=[h,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xr).join(`
`),y.length>0&&(y+=`
`)):(d=[Id(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),y=[h,Id(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?Qe.tonemapping_pars_fragment:"",n.toneMapping!==Vi?AE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,TE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xr).join(`
`)),o=yc(o),o=Ld(o,n),o=Pd(o,n),a=yc(a),a=Ld(a,n),a=Pd(a,n),o=Dd(o),a=Dd(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=x+d+o,P=x+y+a,C=Rd(r,r.VERTEX_SHADER,E),R=Rd(r,r.FRAGMENT_SHADER,P);r.attachShader(m,C),r.attachShader(m,R),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function q(ie){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(C).trim(),H=r.getShaderInfoLog(R).trim();let B=!0,$=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,R);else{const j=Cd(r,C,"vertex"),ne=Cd(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+j+`
`+ne)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(I===""||H==="")&&($=!1);$&&(ie.diagnostics={runnable:B,programLog:V,vertexShader:{log:I,prefix:d},fragmentShader:{log:H,prefix:y}})}r.deleteShader(C),r.deleteShader(R),T=new ra(r,m),D=LE(r,m)}let T;this.getUniforms=function(){return T===void 0&&q(this),T};let D;this.getAttributes=function(){return D===void 0&&q(this),D};let Y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=r.getProgramParameter(m,ME)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=R,this}let VE=0;class kE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new WE(e),n.set(e,i)),i}}class WE{constructor(e){this.id=VE++,this.code=e,this.usedTimes=0}}function XE(t,e,n,i,r,s,o){const a=new Op,l=new kE,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let h=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return T===0?"uv":`uv${T}`}function m(T,D,Y,ie,V){const I=ie.fog,H=V.geometry,B=T.isMeshStandardMaterial?ie.environment:null,$=(T.isMeshStandardMaterial?n:e).get(T.envMap||B),j=$&&$.mapping===Ba?$.image.height:null,ne=v[T.type];T.precision!==null&&(h=r.getMaxPrecision(T.precision),h!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));const re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=re!==void 0?re.length:0;let xe=0;H.morphAttributes.position!==void 0&&(xe=1),H.morphAttributes.normal!==void 0&&(xe=2),H.morphAttributes.color!==void 0&&(xe=3);let k,de,Ee,Le;if(ne){const ke=Kn[ne];k=ke.vertexShader,de=ke.fragmentShader}else k=T.vertexShader,de=T.fragmentShader,l.update(T),Ee=l.getVertexShaderID(T),Le=l.getFragmentShaderID(T);const Ie=t.getRenderTarget(),Ge=V.isInstancedMesh===!0,He=V.isBatchedMesh===!0,Ve=!!T.map,N=!!T.matcap,A=!!$,oe=!!T.aoMap,te=!!T.lightMap,le=!!T.bumpMap,Q=!!T.normalMap,ye=!!T.displacementMap,F=!!T.emissiveMap,M=!!T.metalnessMap,g=!!T.roughnessMap,S=T.anisotropy>0,w=T.clearcoat>0,b=T.iridescence>0,O=T.sheen>0,X=T.transmission>0,K=S&&!!T.anisotropyMap,Z=w&&!!T.clearcoatMap,he=w&&!!T.clearcoatNormalMap,_e=w&&!!T.clearcoatRoughnessMap,J=b&&!!T.iridescenceMap,Me=b&&!!T.iridescenceThicknessMap,be=O&&!!T.sheenColorMap,Re=O&&!!T.sheenRoughnessMap,Te=!!T.specularMap,Se=!!T.specularColorMap,Pe=!!T.specularIntensityMap,Ue=X&&!!T.transmissionMap,z=X&&!!T.thicknessMap,W=!!T.gradientMap,G=!!T.alphaMap,L=T.alphaTest>0,ue=!!T.alphaHash,fe=!!T.extensions,ae=!!H.attributes.uv1,pe=!!H.attributes.uv2,we=!!H.attributes.uv3;let Ae=Vi;return T.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Ae=t.toneMapping),{isWebGL2:c,shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:k,fragmentShader:de,defines:T.defines,customVertexShaderID:Ee,customFragmentShaderID:Le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:He,instancing:Ge,instancingColor:Ge&&V.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ie===null?t.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:ri,map:Ve,matcap:N,envMap:A,envMapMode:A&&$.mapping,envMapCubeUVHeight:j,aoMap:oe,lightMap:te,bumpMap:le,normalMap:Q,displacementMap:p&&ye,emissiveMap:F,normalMapObjectSpace:Q&&T.normalMapType===ex,normalMapTangentSpace:Q&&T.normalMapType===Qv,metalnessMap:M,roughnessMap:g,anisotropy:S,anisotropyMap:K,clearcoat:w,clearcoatMap:Z,clearcoatNormalMap:he,clearcoatRoughnessMap:_e,iridescence:b,iridescenceMap:J,iridescenceThicknessMap:Me,sheen:O,sheenColorMap:be,sheenRoughnessMap:Re,specularMap:Te,specularColorMap:Se,specularIntensityMap:Pe,transmission:X,transmissionMap:Ue,thicknessMap:z,gradientMap:W,opaque:T.transparent===!1&&T.blending===Kr,alphaMap:G,alphaTest:L,alphaHash:ue,combine:T.combine,mapUv:Ve&&_(T.map.channel),aoMapUv:oe&&_(T.aoMap.channel),lightMapUv:te&&_(T.lightMap.channel),bumpMapUv:le&&_(T.bumpMap.channel),normalMapUv:Q&&_(T.normalMap.channel),displacementMapUv:ye&&_(T.displacementMap.channel),emissiveMapUv:F&&_(T.emissiveMap.channel),metalnessMapUv:M&&_(T.metalnessMap.channel),roughnessMapUv:g&&_(T.roughnessMap.channel),anisotropyMapUv:K&&_(T.anisotropyMap.channel),clearcoatMapUv:Z&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(T.sheenRoughnessMap.channel),specularMapUv:Te&&_(T.specularMap.channel),specularColorMapUv:Se&&_(T.specularColorMap.channel),specularIntensityMapUv:Pe&&_(T.specularIntensityMap.channel),transmissionMapUv:Ue&&_(T.transmissionMap.channel),thicknessMapUv:z&&_(T.thicknessMap.channel),alphaMapUv:G&&_(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Q||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:pe,vertexUv3s:we,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(Ve||G),fog:!!I,useFog:T.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:xe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&Y.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ae,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ve&&T.map.isVideoTexture===!0&&dt.getTransfer(T.map.colorSpace)===_t,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_i,flipSided:T.side===Qt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:fe&&T.extensions.derivatives===!0,extensionFragDepth:fe&&T.extensions.fragDepth===!0,extensionDrawBuffers:fe&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&T.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function d(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)D.push(Y),D.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(y(D,T),x(D,T),D.push(t.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function y(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function x(T,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.matcap&&a.enable(4),D.envMap&&a.enable(5),D.normalMapObjectSpace&&a.enable(6),D.normalMapTangentSpace&&a.enable(7),D.clearcoat&&a.enable(8),D.iridescence&&a.enable(9),D.alphaTest&&a.enable(10),D.vertexColors&&a.enable(11),D.vertexAlphas&&a.enable(12),D.vertexUv1s&&a.enable(13),D.vertexUv2s&&a.enable(14),D.vertexUv3s&&a.enable(15),D.vertexTangents&&a.enable(16),D.anisotropy&&a.enable(17),D.alphaHash&&a.enable(18),D.batching&&a.enable(19),T.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.skinning&&a.enable(4),D.morphTargets&&a.enable(5),D.morphNormals&&a.enable(6),D.morphColors&&a.enable(7),D.premultipliedAlpha&&a.enable(8),D.shadowMapEnabled&&a.enable(9),D.useLegacyLights&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),T.push(a.mask)}function E(T){const D=v[T.type];let Y;if(D){const ie=Kn[D];Y=wx.clone(ie.uniforms)}else Y=T.uniforms;return Y}function P(T,D){let Y;for(let ie=0,V=u.length;ie<V;ie++){const I=u[ie];if(I.cacheKey===D){Y=I,++Y.usedTimes;break}}return Y===void 0&&(Y=new GE(t,D,T,s),u.push(Y)),Y}function C(T){if(--T.usedTimes===0){const D=u.indexOf(T);u[D]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function q(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:P,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:q}}function $E(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function qE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ud(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,p,h,v,_,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:h,groupOrder:v,renderOrder:f.renderOrder,z:_,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=h,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,p,h,v,_,m){const d=o(f,p,h,v,_,m);h.transmission>0?i.push(d):h.transparent===!0?r.push(d):n.push(d)}function l(f,p,h,v,_,m){const d=o(f,p,h,v,_,m);h.transmission>0?i.unshift(d):h.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,p){n.length>1&&n.sort(f||qE),i.length>1&&i.sort(p||Ud),r.length>1&&r.sort(p||Ud)}function c(){for(let f=e,p=t.length;f<p;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function YE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Nd,t.set(i,[o])):r>=s.length?(o=new Nd,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function jE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new et};break;case"SpotLight":n={position:new ee,direction:new ee,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return t[e.id]=n,n}}}function KE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ZE=0;function JE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function QE(t,e){const n=new jE,i=KE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new ee);const s=new ee,o=new Tt,a=new Tt;function l(c,f){let p=0,h=0,v=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let _=0,m=0,d=0,y=0,x=0,E=0,P=0,C=0,R=0,q=0,T=0;c.sort(JE);const D=f===!0?Math.PI:1;for(let ie=0,V=c.length;ie<V;ie++){const I=c[ie],H=I.color,B=I.intensity,$=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)p+=H.r*B*D,h+=H.g*B*D,v+=H.b*B*D;else if(I.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(I.sh.coefficients[ne],B);T++}else if(I.isDirectionalLight){const ne=n.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*D),I.castShadow){const re=I.shadow,se=i.get(I);se.shadowBias=re.bias,se.shadowNormalBias=re.normalBias,se.shadowRadius=re.radius,se.shadowMapSize=re.mapSize,r.directionalShadow[_]=se,r.directionalShadowMap[_]=j,r.directionalShadowMatrix[_]=I.shadow.matrix,E++}r.directional[_]=ne,_++}else if(I.isSpotLight){const ne=n.get(I);ne.position.setFromMatrixPosition(I.matrixWorld),ne.color.copy(H).multiplyScalar(B*D),ne.distance=$,ne.coneCos=Math.cos(I.angle),ne.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ne.decay=I.decay,r.spot[d]=ne;const re=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,re.updateMatrices(I),I.castShadow&&q++),r.spotLightMatrix[d]=re.matrix,I.castShadow){const se=i.get(I);se.shadowBias=re.bias,se.shadowNormalBias=re.normalBias,se.shadowRadius=re.radius,se.shadowMapSize=re.mapSize,r.spotShadow[d]=se,r.spotShadowMap[d]=j,C++}d++}else if(I.isRectAreaLight){const ne=n.get(I);ne.color.copy(H).multiplyScalar(B),ne.halfWidth.set(I.width*.5,0,0),ne.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=ne,y++}else if(I.isPointLight){const ne=n.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*D),ne.distance=I.distance,ne.decay=I.decay,I.castShadow){const re=I.shadow,se=i.get(I);se.shadowBias=re.bias,se.shadowNormalBias=re.normalBias,se.shadowRadius=re.radius,se.shadowMapSize=re.mapSize,se.shadowCameraNear=re.camera.near,se.shadowCameraFar=re.camera.far,r.pointShadow[m]=se,r.pointShadowMap[m]=j,r.pointShadowMatrix[m]=I.shadow.matrix,P++}r.point[m]=ne,m++}else if(I.isHemisphereLight){const ne=n.get(I);ne.skyColor.copy(I.color).multiplyScalar(B*D),ne.groundColor.copy(I.groundColor).multiplyScalar(B*D),r.hemi[x]=ne,x++}}y>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=h,r.ambient[2]=v;const Y=r.hash;(Y.directionalLength!==_||Y.pointLength!==m||Y.spotLength!==d||Y.rectAreaLength!==y||Y.hemiLength!==x||Y.numDirectionalShadows!==E||Y.numPointShadows!==P||Y.numSpotShadows!==C||Y.numSpotMaps!==R||Y.numLightProbes!==T)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=y,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+R-q,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=T,Y.directionalLength=_,Y.pointLength=m,Y.spotLength=d,Y.rectAreaLength=y,Y.hemiLength=x,Y.numDirectionalShadows=E,Y.numPointShadows=P,Y.numSpotShadows=C,Y.numSpotMaps=R,Y.numLightProbes=T,r.version=ZE++)}function u(c,f){let p=0,h=0,v=0,_=0,m=0;const d=f.matrixWorldInverse;for(let y=0,x=c.length;y<x;y++){const E=c[y];if(E.isDirectionalLight){const P=r.directional[p];P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),p++}else if(E.isSpotLight){const P=r.spot[v];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),v++}else if(E.isRectAreaLight){const P=r.rectArea[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const P=r.point[h];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),h++}else if(E.isHemisphereLight){const P=r.hemi[m];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function Od(t,e){const n=new QE(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function eb(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Od(t,e),n.set(s,[l])):o>=a.length?(l=new Od(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class tb extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nb extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rb=`uniform sampler2D shadow_pass;
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
}`;function sb(t,e,n){let i=new Wp;const r=new st,s=new st,o=new Gt,a=new tb({depthPacking:Jv}),l=new nb,u={},c=n.maxTextureSize,f={[$i]:Qt,[Qt]:$i,[_i]:_i},p=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:ib,fragmentShader:rb}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const v=new Ln;v.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xp;let d=this.type;this.render=function(C,R,q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),D=t.getActiveCubeFace(),Y=t.getActiveMipmapLevel(),ie=t.state;ie.setBlending(Gi),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const V=d!==di&&this.type===di,I=d===di&&this.type!==di;for(let H=0,B=C.length;H<B;H++){const $=C[H],j=$.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ne=j.getFrameExtents();if(r.multiply(ne),s.copy(j.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ne.x),r.x=s.x*ne.x,j.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ne.y),r.y=s.y*ne.y,j.mapSize.y=s.y)),j.map===null||V===!0||I===!0){const se=this.type!==di?{minFilter:an,magFilter:an}:{};j.map!==null&&j.map.dispose(),j.map=new qi(r.x,r.y,se),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const re=j.getViewportCount();for(let se=0;se<re;se++){const xe=j.getViewport(se);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),ie.viewport(o),j.updateMatrices($,se),i=j.getFrustum(),E(R,q,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===di&&y(j,q),j.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(T,D,Y)};function y(C,R){const q=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qi(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,q,p,_,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,q,h,_,null)}function x(C,R,q,T){let D=null;const Y=q.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(Y!==void 0)D=Y;else if(D=q.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const ie=D.uuid,V=R.uuid;let I=u[ie];I===void 0&&(I={},u[ie]=I);let H=I[V];H===void 0&&(H=D.clone(),I[V]=H,R.addEventListener("dispose",P)),D=H}if(D.visible=R.visible,D.wireframe=R.wireframe,T===di?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:f[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ie=t.properties.get(D);ie.light=q}return D}function E(C,R,q,T,D){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&D===di)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld);const V=e.update(C),I=C.material;if(Array.isArray(I)){const H=V.groups;for(let B=0,$=H.length;B<$;B++){const j=H[B],ne=I[j.materialIndex];if(ne&&ne.visible){const re=x(C,ne,T,D);C.onBeforeShadow(t,C,R,q,V,re,j),t.renderBufferDirect(q,null,V,re,C,j),C.onAfterShadow(t,C,R,q,V,re,j)}}}else if(I.visible){const H=x(C,I,T,D);C.onBeforeShadow(t,C,R,q,V,H,null),t.renderBufferDirect(q,null,V,H,C,null),C.onAfterShadow(t,C,R,q,V,H,null)}}const ie=C.children;for(let V=0,I=ie.length;V<I;V++)E(ie[V],R,q,T,D)}function P(C){C.target.removeEventListener("dispose",P);for(const q in u){const T=u[q],D=C.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function ob(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ue=new Gt;let fe=null;const ae=new Gt(0,0,0,0);return{setMask:function(pe){fe!==pe&&!L&&(t.colorMask(pe,pe,pe,pe),fe=pe)},setLocked:function(pe){L=pe},setClear:function(pe,we,Ae,Ne,ke){ke===!0&&(pe*=Ne,we*=Ne,Ae*=Ne),ue.set(pe,we,Ae,Ne),ae.equals(ue)===!1&&(t.clearColor(pe,we,Ae,Ne),ae.copy(ue))},reset:function(){L=!1,fe=null,ae.set(-1,0,0,0)}}}function s(){let L=!1,ue=null,fe=null,ae=null;return{setTest:function(pe){pe?He(t.DEPTH_TEST):Ve(t.DEPTH_TEST)},setMask:function(pe){ue!==pe&&!L&&(t.depthMask(pe),ue=pe)},setFunc:function(pe){if(fe!==pe){switch(pe){case wv:t.depthFunc(t.NEVER);break;case Rv:t.depthFunc(t.ALWAYS);break;case Cv:t.depthFunc(t.LESS);break;case va:t.depthFunc(t.LEQUAL);break;case Lv:t.depthFunc(t.EQUAL);break;case Pv:t.depthFunc(t.GEQUAL);break;case Dv:t.depthFunc(t.GREATER);break;case Iv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=pe}},setLocked:function(pe){L=pe},setClear:function(pe){ae!==pe&&(t.clearDepth(pe),ae=pe)},reset:function(){L=!1,ue=null,fe=null,ae=null}}}function o(){let L=!1,ue=null,fe=null,ae=null,pe=null,we=null,Ae=null,Ne=null,ke=null;return{setTest:function(ze){L||(ze?He(t.STENCIL_TEST):Ve(t.STENCIL_TEST))},setMask:function(ze){ue!==ze&&!L&&(t.stencilMask(ze),ue=ze)},setFunc:function(ze,Xe,ot){(fe!==ze||ae!==Xe||pe!==ot)&&(t.stencilFunc(ze,Xe,ot),fe=ze,ae=Xe,pe=ot)},setOp:function(ze,Xe,ot){(we!==ze||Ae!==Xe||Ne!==ot)&&(t.stencilOp(ze,Xe,ot),we=ze,Ae=Xe,Ne=ot)},setLocked:function(ze){L=ze},setClear:function(ze){ke!==ze&&(t.clearStencil(ze),ke=ze)},reset:function(){L=!1,ue=null,fe=null,ae=null,pe=null,we=null,Ae=null,Ne=null,ke=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let p={},h={},v=new WeakMap,_=[],m=null,d=!1,y=null,x=null,E=null,P=null,C=null,R=null,q=null,T=new et(0,0,0),D=0,Y=!1,ie=null,V=null,I=null,H=null,B=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ne=0;const re=t.getParameter(t.VERSION);re.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=ne>=1):re.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=ne>=2);let se=null,xe={};const k=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),Ee=new Gt().fromArray(k),Le=new Gt().fromArray(de);function Ie(L,ue,fe,ae){const pe=new Uint8Array(4),we=t.createTexture();t.bindTexture(L,we),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<fe;Ae++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ue+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return we}const Ge={};Ge[t.TEXTURE_2D]=Ie(t.TEXTURE_2D,t.TEXTURE_2D,1),Ge[t.TEXTURE_CUBE_MAP]=Ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ge[t.TEXTURE_2D_ARRAY]=Ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ge[t.TEXTURE_3D]=Ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),He(t.DEPTH_TEST),l.setFunc(va),F(!1),M(vf),He(t.CULL_FACE),Q(Gi);function He(L){p[L]!==!0&&(t.enable(L),p[L]=!0)}function Ve(L){p[L]!==!1&&(t.disable(L),p[L]=!1)}function N(L,ue){return h[L]!==ue?(t.bindFramebuffer(L,ue),h[L]=ue,i&&(L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ue),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function A(L,ue){let fe=_,ae=!1;if(L)if(fe=v.get(ue),fe===void 0&&(fe=[],v.set(ue,fe)),L.isWebGLMultipleRenderTargets){const pe=L.texture;if(fe.length!==pe.length||fe[0]!==t.COLOR_ATTACHMENT0){for(let we=0,Ae=pe.length;we<Ae;we++)fe[we]=t.COLOR_ATTACHMENT0+we;fe.length=pe.length,ae=!0}}else fe[0]!==t.COLOR_ATTACHMENT0&&(fe[0]=t.COLOR_ATTACHMENT0,ae=!0);else fe[0]!==t.BACK&&(fe[0]=t.BACK,ae=!0);ae&&(n.isWebGL2?t.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function oe(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const te={[cr]:t.FUNC_ADD,[dv]:t.FUNC_SUBTRACT,[hv]:t.FUNC_REVERSE_SUBTRACT};if(i)te[Mf]=t.MIN,te[Sf]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(te[Mf]=L.MIN_EXT,te[Sf]=L.MAX_EXT)}const le={[pv]:t.ZERO,[mv]:t.ONE,[gv]:t.SRC_COLOR,[fc]:t.SRC_ALPHA,[Sv]:t.SRC_ALPHA_SATURATE,[yv]:t.DST_COLOR,[vv]:t.DST_ALPHA,[_v]:t.ONE_MINUS_SRC_COLOR,[dc]:t.ONE_MINUS_SRC_ALPHA,[Mv]:t.ONE_MINUS_DST_COLOR,[xv]:t.ONE_MINUS_DST_ALPHA,[Ev]:t.CONSTANT_COLOR,[bv]:t.ONE_MINUS_CONSTANT_COLOR,[Tv]:t.CONSTANT_ALPHA,[Av]:t.ONE_MINUS_CONSTANT_ALPHA};function Q(L,ue,fe,ae,pe,we,Ae,Ne,ke,ze){if(L===Gi){d===!0&&(Ve(t.BLEND),d=!1);return}if(d===!1&&(He(t.BLEND),d=!0),L!==fv){if(L!==y||ze!==Y){if((x!==cr||C!==cr)&&(t.blendEquation(t.FUNC_ADD),x=cr,C=cr),ze)switch(L){case Kr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _a:t.blendFunc(t.ONE,t.ONE);break;case xf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Kr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _a:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case xf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,P=null,R=null,q=null,T.set(0,0,0),D=0,y=L,Y=ze}return}pe=pe||ue,we=we||fe,Ae=Ae||ae,(ue!==x||pe!==C)&&(t.blendEquationSeparate(te[ue],te[pe]),x=ue,C=pe),(fe!==E||ae!==P||we!==R||Ae!==q)&&(t.blendFuncSeparate(le[fe],le[ae],le[we],le[Ae]),E=fe,P=ae,R=we,q=Ae),(Ne.equals(T)===!1||ke!==D)&&(t.blendColor(Ne.r,Ne.g,Ne.b,ke),T.copy(Ne),D=ke),y=L,Y=!1}function ye(L,ue){L.side===_i?Ve(t.CULL_FACE):He(t.CULL_FACE);let fe=L.side===Qt;ue&&(fe=!fe),F(fe),L.blending===Kr&&L.transparent===!1?Q(Gi):Q(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ae=L.stencilWrite;u.setTest(ae),ae&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),S(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?He(t.SAMPLE_ALPHA_TO_COVERAGE):Ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function F(L){ie!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),ie=L)}function M(L){L!==lv?(He(t.CULL_FACE),L!==V&&(L===vf?t.cullFace(t.BACK):L===cv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ve(t.CULL_FACE),V=L}function g(L){L!==I&&(j&&t.lineWidth(L),I=L)}function S(L,ue,fe){L?(He(t.POLYGON_OFFSET_FILL),(H!==ue||B!==fe)&&(t.polygonOffset(ue,fe),H=ue,B=fe)):Ve(t.POLYGON_OFFSET_FILL)}function w(L){L?He(t.SCISSOR_TEST):Ve(t.SCISSOR_TEST)}function b(L){L===void 0&&(L=t.TEXTURE0+$-1),se!==L&&(t.activeTexture(L),se=L)}function O(L,ue,fe){fe===void 0&&(se===null?fe=t.TEXTURE0+$-1:fe=se);let ae=xe[fe];ae===void 0&&(ae={type:void 0,texture:void 0},xe[fe]=ae),(ae.type!==L||ae.texture!==ue)&&(se!==fe&&(t.activeTexture(fe),se=fe),t.bindTexture(L,ue||Ge[L]),ae.type=L,ae.texture=ue)}function X(){const L=xe[se];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(L){Ee.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Ee.copy(L))}function Ue(L){Le.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Le.copy(L))}function z(L,ue){let fe=f.get(ue);fe===void 0&&(fe=new WeakMap,f.set(ue,fe));let ae=fe.get(L);ae===void 0&&(ae=t.getUniformBlockIndex(ue,L.name),fe.set(L,ae))}function W(L,ue){const ae=f.get(ue).get(L);c.get(ue)!==ae&&(t.uniformBlockBinding(ue,ae,L.__bindingPointIndex),c.set(ue,ae))}function G(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},se=null,xe={},h={},v=new WeakMap,_=[],m=null,d=!1,y=null,x=null,E=null,P=null,C=null,R=null,q=null,T=new et(0,0,0),D=0,Y=!1,ie=null,V=null,I=null,H=null,B=null,Ee.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:He,disable:Ve,bindFramebuffer:N,drawBuffers:A,useProgram:oe,setBlending:Q,setMaterial:ye,setFlipSided:F,setCullFace:M,setLineWidth:g,setPolygonOffset:S,setScissorTest:w,activeTexture:b,bindTexture:O,unbindTexture:X,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:Te,texImage3D:Se,updateUBOMapping:z,uniformBlockBinding:W,texStorage2D:be,texStorage3D:Re,texSubImage2D:he,texSubImage3D:_e,compressedTexSubImage2D:J,compressedTexSubImage3D:Me,scissor:Pe,viewport:Ue,reset:G}}function ab(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,g){return h?new OffscreenCanvas(M,g):eo("canvas")}function _(M,g,S,w){let b=1;if((M.width>w||M.height>w)&&(b=w/Math.max(M.width,M.height)),b<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const O=g?xc:Math.floor,X=O(b*M.width),K=O(b*M.height);f===void 0&&(f=v(X,K));const Z=S?v(X,K):f;return Z.width=X,Z.height=K,Z.getContext("2d").drawImage(M,0,0,X,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+X+"x"+K+")."),Z}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return Jf(M.width)&&Jf(M.height)}function d(M){return a?!1:M.wrapS!==Fn||M.wrapT!==Fn||M.minFilter!==an&&M.minFilter!==Tn}function y(M,g){return M.generateMipmaps&&g&&M.minFilter!==an&&M.minFilter!==Tn}function x(M){t.generateMipmap(M)}function E(M,g,S,w,b=!1){if(a===!1)return g;if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let O=g;if(g===t.RED&&(S===t.FLOAT&&(O=t.R32F),S===t.HALF_FLOAT&&(O=t.R16F),S===t.UNSIGNED_BYTE&&(O=t.R8)),g===t.RED_INTEGER&&(S===t.UNSIGNED_BYTE&&(O=t.R8UI),S===t.UNSIGNED_SHORT&&(O=t.R16UI),S===t.UNSIGNED_INT&&(O=t.R32UI),S===t.BYTE&&(O=t.R8I),S===t.SHORT&&(O=t.R16I),S===t.INT&&(O=t.R32I)),g===t.RG&&(S===t.FLOAT&&(O=t.RG32F),S===t.HALF_FLOAT&&(O=t.RG16F),S===t.UNSIGNED_BYTE&&(O=t.RG8)),g===t.RGBA){const X=b?xa:dt.getTransfer(w);S===t.FLOAT&&(O=t.RGBA32F),S===t.HALF_FLOAT&&(O=t.RGBA16F),S===t.UNSIGNED_BYTE&&(O=X===_t?t.SRGB8_ALPHA8:t.RGBA8),S===t.UNSIGNED_SHORT_4_4_4_4&&(O=t.RGBA4),S===t.UNSIGNED_SHORT_5_5_5_1&&(O=t.RGB5_A1)}return(O===t.R16F||O===t.R32F||O===t.RG16F||O===t.RG32F||O===t.RGBA16F||O===t.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function P(M,g,S){return y(M,S)===!0||M.isFramebufferTexture&&M.minFilter!==an&&M.minFilter!==Tn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function C(M){return M===an||M===Ef||M===ml?t.NEAREST:t.LINEAR}function R(M){const g=M.target;g.removeEventListener("dispose",R),T(g),g.isVideoTexture&&c.delete(g)}function q(M){const g=M.target;g.removeEventListener("dispose",q),Y(g)}function T(M){const g=i.get(M);if(g.__webglInit===void 0)return;const S=M.source,w=p.get(S);if(w){const b=w[g.__cacheKey];b.usedTimes--,b.usedTimes===0&&D(M),Object.keys(w).length===0&&p.delete(S)}i.remove(M)}function D(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const S=M.source,w=p.get(S);delete w[g.__cacheKey],o.memory.textures--}function Y(M){const g=M.texture,S=i.get(M),w=i.get(g);if(w.__webglTexture!==void 0&&(t.deleteTexture(w.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let b=0;b<6;b++){if(Array.isArray(S.__webglFramebuffer[b]))for(let O=0;O<S.__webglFramebuffer[b].length;O++)t.deleteFramebuffer(S.__webglFramebuffer[b][O]);else t.deleteFramebuffer(S.__webglFramebuffer[b]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[b])}else{if(Array.isArray(S.__webglFramebuffer))for(let b=0;b<S.__webglFramebuffer.length;b++)t.deleteFramebuffer(S.__webglFramebuffer[b]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let b=0;b<S.__webglColorRenderbuffer.length;b++)S.__webglColorRenderbuffer[b]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[b]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let b=0,O=g.length;b<O;b++){const X=i.get(g[b]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(g[b])}i.remove(g),i.remove(M)}let ie=0;function V(){ie=0}function I(){const M=ie;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),ie+=1,M}function H(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function B(M,g){const S=i.get(M);if(M.isVideoTexture&&ye(M),M.isRenderTargetTexture===!1&&M.version>0&&S.__version!==M.version){const w=M.image;if(w===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(w.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(S,M,g);return}}n.bindTexture(t.TEXTURE_2D,S.__webglTexture,t.TEXTURE0+g)}function $(M,g){const S=i.get(M);if(M.version>0&&S.__version!==M.version){Ee(S,M,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,S.__webglTexture,t.TEXTURE0+g)}function j(M,g){const S=i.get(M);if(M.version>0&&S.__version!==M.version){Ee(S,M,g);return}n.bindTexture(t.TEXTURE_3D,S.__webglTexture,t.TEXTURE0+g)}function ne(M,g){const S=i.get(M);if(M.version>0&&S.__version!==M.version){Le(S,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+g)}const re={[mc]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[gc]:t.MIRRORED_REPEAT},se={[an]:t.NEAREST,[Ef]:t.NEAREST_MIPMAP_NEAREST,[ml]:t.NEAREST_MIPMAP_LINEAR,[Tn]:t.LINEAR,[Vv]:t.LINEAR_MIPMAP_NEAREST,[yr]:t.LINEAR_MIPMAP_LINEAR},xe={[tx]:t.NEVER,[ax]:t.ALWAYS,[nx]:t.LESS,[Lp]:t.LEQUAL,[ix]:t.EQUAL,[ox]:t.GEQUAL,[rx]:t.GREATER,[sx]:t.NOTEQUAL};function k(M,g,S){if(S?(t.texParameteri(M,t.TEXTURE_WRAP_S,re[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,re[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,re[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,se[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,se[g.minFilter])):(t.texParameteri(M,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(M,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(g.wrapS!==Fn||g.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(M,t.TEXTURE_MAG_FILTER,C(g.magFilter)),t.texParameteri(M,t.TEXTURE_MIN_FILTER,C(g.minFilter)),g.minFilter!==an&&g.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,xe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===an||g.minFilter!==ml&&g.minFilter!==yr||g.type===Ni&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===Qs&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(t.texParameterf(M,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function de(M,g){let S=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",R));const w=g.source;let b=p.get(w);b===void 0&&(b={},p.set(w,b));const O=H(g);if(O!==M.__cacheKey){b[O]===void 0&&(b[O]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,S=!0),b[O].usedTimes++;const X=b[M.__cacheKey];X!==void 0&&(b[M.__cacheKey].usedTimes--,X.usedTimes===0&&D(g)),M.__cacheKey=O,M.__webglTexture=b[O].texture}return S}function Ee(M,g,S){let w=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(w=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(w=t.TEXTURE_3D);const b=de(M,g),O=g.source;n.bindTexture(w,M.__webglTexture,t.TEXTURE0+S);const X=i.get(O);if(O.version!==X.__version||b===!0){n.activeTexture(t.TEXTURE0+S);const K=dt.getPrimaries(dt.workingColorSpace),Z=g.colorSpace===wn?null:dt.getPrimaries(g.colorSpace),he=g.colorSpace===wn||K===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const _e=d(g)&&m(g.image)===!1;let J=_(g.image,_e,!1,r.maxTextureSize);J=F(g,J);const Me=m(J)||a,be=s.convert(g.format,g.colorSpace);let Re=s.convert(g.type),Te=E(g.internalFormat,be,Re,g.colorSpace,g.isVideoTexture);k(w,g,Me);let Se;const Pe=g.mipmaps,Ue=a&&g.isVideoTexture!==!0&&Te!==Rp,z=X.__version===void 0||b===!0,W=P(g,J,Me);if(g.isDepthTexture)Te=t.DEPTH_COMPONENT,a?g.type===Ni?Te=t.DEPTH_COMPONENT32F:g.type===Ui?Te=t.DEPTH_COMPONENT24:g.type===_r?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:g.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===vr&&Te===t.DEPTH_COMPONENT&&g.type!==qc&&g.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Ui,Re=s.convert(g.type)),g.format===rs&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,g.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=_r,Re=s.convert(g.type))),z&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,Te,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Te,J.width,J.height,0,be,Re,null));else if(g.isDataTexture)if(Pe.length>0&&Me){Ue&&z&&n.texStorage2D(t.TEXTURE_2D,W,Te,Pe[0].width,Pe[0].height);for(let G=0,L=Pe.length;G<L;G++)Se=Pe[G],Ue?n.texSubImage2D(t.TEXTURE_2D,G,0,0,Se.width,Se.height,be,Re,Se.data):n.texImage2D(t.TEXTURE_2D,G,Te,Se.width,Se.height,0,be,Re,Se.data);g.generateMipmaps=!1}else Ue?(z&&n.texStorage2D(t.TEXTURE_2D,W,Te,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,be,Re,J.data)):n.texImage2D(t.TEXTURE_2D,0,Te,J.width,J.height,0,be,Re,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ue&&z&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,Te,Pe[0].width,Pe[0].height,J.depth);for(let G=0,L=Pe.length;G<L;G++)Se=Pe[G],g.format!==Bn?be!==null?Ue?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,Se.width,Se.height,J.depth,be,Se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Te,Se.width,Se.height,J.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,Se.width,Se.height,J.depth,be,Re,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Te,Se.width,Se.height,J.depth,0,be,Re,Se.data)}else{Ue&&z&&n.texStorage2D(t.TEXTURE_2D,W,Te,Pe[0].width,Pe[0].height);for(let G=0,L=Pe.length;G<L;G++)Se=Pe[G],g.format!==Bn?be!==null?Ue?n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,Se.width,Se.height,be,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Te,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?n.texSubImage2D(t.TEXTURE_2D,G,0,0,Se.width,Se.height,be,Re,Se.data):n.texImage2D(t.TEXTURE_2D,G,Te,Se.width,Se.height,0,be,Re,Se.data)}else if(g.isDataArrayTexture)Ue?(z&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,Te,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,be,Re,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,be,Re,J.data);else if(g.isData3DTexture)Ue?(z&&n.texStorage3D(t.TEXTURE_3D,W,Te,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,be,Re,J.data)):n.texImage3D(t.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,be,Re,J.data);else if(g.isFramebufferTexture){if(z)if(Ue)n.texStorage2D(t.TEXTURE_2D,W,Te,J.width,J.height);else{let G=J.width,L=J.height;for(let ue=0;ue<W;ue++)n.texImage2D(t.TEXTURE_2D,ue,Te,G,L,0,be,Re,null),G>>=1,L>>=1}}else if(Pe.length>0&&Me){Ue&&z&&n.texStorage2D(t.TEXTURE_2D,W,Te,Pe[0].width,Pe[0].height);for(let G=0,L=Pe.length;G<L;G++)Se=Pe[G],Ue?n.texSubImage2D(t.TEXTURE_2D,G,0,0,be,Re,Se):n.texImage2D(t.TEXTURE_2D,G,Te,be,Re,Se);g.generateMipmaps=!1}else Ue?(z&&n.texStorage2D(t.TEXTURE_2D,W,Te,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,Re,J)):n.texImage2D(t.TEXTURE_2D,0,Te,be,Re,J);y(g,Me)&&x(w),X.__version=O.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Le(M,g,S){if(g.image.length!==6)return;const w=de(M,g),b=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+S);const O=i.get(b);if(b.version!==O.__version||w===!0){n.activeTexture(t.TEXTURE0+S);const X=dt.getPrimaries(dt.workingColorSpace),K=g.colorSpace===wn?null:dt.getPrimaries(g.colorSpace),Z=g.colorSpace===wn||X===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const he=g.isCompressedTexture||g.image[0].isCompressedTexture,_e=g.image[0]&&g.image[0].isDataTexture,J=[];for(let G=0;G<6;G++)!he&&!_e?J[G]=_(g.image[G],!1,!0,r.maxCubemapSize):J[G]=_e?g.image[G].image:g.image[G],J[G]=F(g,J[G]);const Me=J[0],be=m(Me)||a,Re=s.convert(g.format,g.colorSpace),Te=s.convert(g.type),Se=E(g.internalFormat,Re,Te,g.colorSpace),Pe=a&&g.isVideoTexture!==!0,Ue=O.__version===void 0||w===!0;let z=P(g,Me,be);k(t.TEXTURE_CUBE_MAP,g,be);let W;if(he){Pe&&Ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,z,Se,Me.width,Me.height);for(let G=0;G<6;G++){W=J[G].mipmaps;for(let L=0;L<W.length;L++){const ue=W[L];g.format!==Bn?Re!==null?Pe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,L,0,0,ue.width,ue.height,Re,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,L,Se,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,L,0,0,ue.width,ue.height,Re,Te,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,L,Se,ue.width,ue.height,0,Re,Te,ue.data)}}}else{W=g.mipmaps,Pe&&Ue&&(W.length>0&&z++,n.texStorage2D(t.TEXTURE_CUBE_MAP,z,Se,J[0].width,J[0].height));for(let G=0;G<6;G++)if(_e){Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,J[G].width,J[G].height,Re,Te,J[G].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Se,J[G].width,J[G].height,0,Re,Te,J[G].data);for(let L=0;L<W.length;L++){const fe=W[L].image[G].image;Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,L+1,0,0,fe.width,fe.height,Re,Te,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,L+1,Se,fe.width,fe.height,0,Re,Te,fe.data)}}else{Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Re,Te,J[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Se,Re,Te,J[G]);for(let L=0;L<W.length;L++){const ue=W[L];Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,L+1,0,0,Re,Te,ue.image[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,L+1,Se,Re,Te,ue.image[G])}}}y(g,be)&&x(t.TEXTURE_CUBE_MAP),O.__version=b.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ie(M,g,S,w,b,O){const X=s.convert(S.format,S.colorSpace),K=s.convert(S.type),Z=E(S.internalFormat,X,K,S.colorSpace);if(!i.get(g).__hasExternalTextures){const _e=Math.max(1,g.width>>O),J=Math.max(1,g.height>>O);b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY?n.texImage3D(b,O,Z,_e,J,g.depth,0,X,K,null):n.texImage2D(b,O,Z,_e,J,0,X,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),Q(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,w,b,i.get(S).__webglTexture,0,le(g)):(b===t.TEXTURE_2D||b>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&b<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,w,b,i.get(S).__webglTexture,O),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(M,g,S){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let w=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(S||Q(g)){const b=g.depthTexture;b&&b.isDepthTexture&&(b.type===Ni?w=t.DEPTH_COMPONENT32F:b.type===Ui&&(w=t.DEPTH_COMPONENT24));const O=le(g);Q(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,O,w,g.width,g.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,O,w,g.width,g.height)}else t.renderbufferStorage(t.RENDERBUFFER,w,g.width,g.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const w=le(g);S&&Q(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,w,t.DEPTH24_STENCIL8,g.width,g.height):Q(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,w,t.DEPTH24_STENCIL8,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,M)}else{const w=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let b=0;b<w.length;b++){const O=w[b],X=s.convert(O.format,O.colorSpace),K=s.convert(O.type),Z=E(O.internalFormat,X,K,O.colorSpace),he=le(g);S&&Q(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,Z,g.width,g.height):Q(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,Z,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Z,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),B(g.depthTexture,0);const w=i.get(g.depthTexture).__webglTexture,b=le(g);if(g.depthTexture.format===vr)Q(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,w,0,b):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,w,0);else if(g.depthTexture.format===rs)Q(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,w,0,b):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,w,0);else throw new Error("Unknown depthTexture format")}function Ve(M){const g=i.get(M),S=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");He(g.__webglFramebuffer,M)}else if(S){g.__webglDepthbuffer=[];for(let w=0;w<6;w++)n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[w]),g.__webglDepthbuffer[w]=t.createRenderbuffer(),Ge(g.__webglDepthbuffer[w],M,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=t.createRenderbuffer(),Ge(g.__webglDepthbuffer,M,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(M,g,S){const w=i.get(M);g!==void 0&&Ie(w.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),S!==void 0&&Ve(M)}function A(M){const g=M.texture,S=i.get(M),w=i.get(g);M.addEventListener("dispose",q),M.isWebGLMultipleRenderTargets!==!0&&(w.__webglTexture===void 0&&(w.__webglTexture=t.createTexture()),w.__version=g.version,o.memory.textures++);const b=M.isWebGLCubeRenderTarget===!0,O=M.isWebGLMultipleRenderTargets===!0,X=m(M)||a;if(b){S.__webglFramebuffer=[];for(let K=0;K<6;K++)if(a&&g.mipmaps&&g.mipmaps.length>0){S.__webglFramebuffer[K]=[];for(let Z=0;Z<g.mipmaps.length;Z++)S.__webglFramebuffer[K][Z]=t.createFramebuffer()}else S.__webglFramebuffer[K]=t.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){S.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)S.__webglFramebuffer[K]=t.createFramebuffer()}else S.__webglFramebuffer=t.createFramebuffer();if(O)if(r.drawBuffers){const K=M.texture;for(let Z=0,he=K.length;Z<he;Z++){const _e=i.get(K[Z]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&Q(M)===!1){const K=O?g:[g];S.__webglMultisampledFramebuffer=t.createFramebuffer(),S.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const he=K[Z];S.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,S.__webglColorRenderbuffer[Z]);const _e=s.convert(he.format,he.colorSpace),J=s.convert(he.type),Me=E(he.internalFormat,_e,J,he.colorSpace,M.isXRRenderTarget===!0),be=le(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,Me,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,S.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(S.__webglDepthRenderbuffer=t.createRenderbuffer(),Ge(S.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(b){n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture),k(t.TEXTURE_CUBE_MAP,g,X);for(let K=0;K<6;K++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)Ie(S.__webglFramebuffer[K][Z],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else Ie(S.__webglFramebuffer[K],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(g,X)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(O){const K=M.texture;for(let Z=0,he=K.length;Z<he;Z++){const _e=K[Z],J=i.get(_e);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),k(t.TEXTURE_2D,_e,X),Ie(S.__webglFramebuffer,M,_e,t.COLOR_ATTACHMENT0+Z,t.TEXTURE_2D,0),y(_e,X)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?K=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(K,w.__webglTexture),k(K,g,X),a&&g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)Ie(S.__webglFramebuffer[Z],M,g,t.COLOR_ATTACHMENT0,K,Z);else Ie(S.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,K,0);y(g,X)&&x(K),n.unbindTexture()}M.depthBuffer&&Ve(M)}function oe(M){const g=m(M)||a,S=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let w=0,b=S.length;w<b;w++){const O=S[w];if(y(O,g)){const X=M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,K=i.get(O).__webglTexture;n.bindTexture(X,K),x(X),n.unbindTexture()}}}function te(M){if(a&&M.samples>0&&Q(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],S=M.width,w=M.height;let b=t.COLOR_BUFFER_BIT;const O=[],X=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=i.get(M),Z=M.isWebGLMultipleRenderTargets===!0;if(Z)for(let he=0;he<g.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,K.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let he=0;he<g.length;he++){O.push(t.COLOR_ATTACHMENT0+he),M.depthBuffer&&O.push(X);const _e=K.__ignoreDepthValues!==void 0?K.__ignoreDepthValues:!1;if(_e===!1&&(M.depthBuffer&&(b|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&(b|=t.STENCIL_BUFFER_BIT)),Z&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,K.__webglColorRenderbuffer[he]),_e===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[X]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[X])),Z){const J=i.get(g[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,S,w,0,0,S,w,b,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,O)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let he=0;he<g.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,K.__webglColorRenderbuffer[he]);const _e=i.get(g[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,K.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}}function le(M){return Math.min(r.maxSamples,M.samples)}function Q(M){const g=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ye(M){const g=o.render.frame;c.get(M)!==g&&(c.set(M,g),M.update())}function F(M,g){const S=M.colorSpace,w=M.format,b=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===_c||S!==ri&&S!==wn&&(dt.getTransfer(S)===_t?a===!1?e.has("EXT_sRGB")===!0&&w===Bn?(M.format=_c,M.minFilter=Tn,M.generateMipmaps=!1):g=Dp.sRGBToLinear(g):(w!==Bn||b!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",S)),g}this.allocateTextureUnit=I,this.resetTextureUnits=V,this.setTexture2D=B,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=ne,this.rebindTextures=N,this.setupRenderTarget=A,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Q}function lb(t,e,n){const i=n.isWebGL2;function r(s,o=wn){let a;const l=dt.getTransfer(o);if(s===ki)return t.UNSIGNED_BYTE;if(s===Ep)return t.UNSIGNED_SHORT_4_4_4_4;if(s===bp)return t.UNSIGNED_SHORT_5_5_5_1;if(s===kv)return t.BYTE;if(s===Wv)return t.SHORT;if(s===qc)return t.UNSIGNED_SHORT;if(s===Sp)return t.INT;if(s===Ui)return t.UNSIGNED_INT;if(s===Ni)return t.FLOAT;if(s===Qs)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Xv)return t.ALPHA;if(s===Bn)return t.RGBA;if(s===$v)return t.LUMINANCE;if(s===qv)return t.LUMINANCE_ALPHA;if(s===vr)return t.DEPTH_COMPONENT;if(s===rs)return t.DEPTH_STENCIL;if(s===_c)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Yv)return t.RED;if(s===Tp)return t.RED_INTEGER;if(s===jv)return t.RG;if(s===Ap)return t.RG_INTEGER;if(s===wp)return t.RGBA_INTEGER;if(s===gl||s===_l||s===vl||s===xl)if(l===_t)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===gl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===gl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_l)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bf||s===Tf||s===Af||s===wf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===bf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Af)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rf||s===Cf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Rf)return l===_t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Cf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Lf||s===Pf||s===Df||s===If||s===Uf||s===Nf||s===Of||s===Ff||s===Bf||s===zf||s===Hf||s===Gf||s===Vf||s===kf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Lf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Df)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===If)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Uf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Of)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ff)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kf)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yl||s===Wf||s===Xf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===yl)return l===_t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kv||s===$f||s===qf||s===Yf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===yl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===$f)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_r?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class cb extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hr extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ub={type:"move"};class Xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=c.position.distanceTo(f.position),h=.02,v=.005;u.inputState.pinching&&p>h+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=h-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ub)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class fb extends ls{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,p=null,h=null,v=null;const _=n.getContextAttributes();let m=null,d=null;const y=[],x=[],E=new st;let P=null;const C=new An;C.layers.enable(1),C.viewport=new Gt;const R=new An;R.layers.enable(2),R.viewport=new Gt;const q=[C,R],T=new cb;T.layers.enable(1),T.layers.enable(2);let D=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let de=y[k];return de===void 0&&(de=new Xl,y[k]=de),de.getTargetRaySpace()},this.getControllerGrip=function(k){let de=y[k];return de===void 0&&(de=new Xl,y[k]=de),de.getGripSpace()},this.getHand=function(k){let de=y[k];return de===void 0&&(de=new Xl,y[k]=de),de.getHandSpace()};function ie(k){const de=x.indexOf(k.inputSource);if(de===-1)return;const Ee=y[de];Ee!==void 0&&(Ee.update(k.inputSource,k.frame,u||o),Ee.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",I);for(let k=0;k<y.length;k++){const de=x[k];de!==null&&(x[k]=null,y[k].disconnect(de))}D=null,Y=null,e.setRenderTarget(m),h=null,p=null,f=null,r=null,d=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",V),r.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),d=new qi(h.framebufferWidth,h.framebufferHeight,{format:Bn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let de=null,Ee=null,Le=null;_.depth&&(Le=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=_.stencil?rs:vr,Ee=_.stencil?_r:Ui);const Ie={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(Ie),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new qi(p.textureWidth,p.textureHeight,{format:Bn,type:ki,depthTexture:new qp(p.textureWidth,p.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ge=e.properties.get(d);Ge.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(k){for(let de=0;de<k.removed.length;de++){const Ee=k.removed[de],Le=x.indexOf(Ee);Le>=0&&(x[Le]=null,y[Le].disconnect(Ee))}for(let de=0;de<k.added.length;de++){const Ee=k.added[de];let Le=x.indexOf(Ee);if(Le===-1){for(let Ge=0;Ge<y.length;Ge++)if(Ge>=x.length){x.push(Ee),Le=Ge;break}else if(x[Ge]===null){x[Ge]=Ee,Le=Ge;break}if(Le===-1)break}const Ie=y[Le];Ie&&Ie.connect(Ee)}}const H=new ee,B=new ee;function $(k,de,Ee){H.setFromMatrixPosition(de.matrixWorld),B.setFromMatrixPosition(Ee.matrixWorld);const Le=H.distanceTo(B),Ie=de.projectionMatrix.elements,Ge=Ee.projectionMatrix.elements,He=Ie[14]/(Ie[10]-1),Ve=Ie[14]/(Ie[10]+1),N=(Ie[9]+1)/Ie[5],A=(Ie[9]-1)/Ie[5],oe=(Ie[8]-1)/Ie[0],te=(Ge[8]+1)/Ge[0],le=He*oe,Q=He*te,ye=Le/(-oe+te),F=ye*-oe;de.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(F),k.translateZ(ye),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const M=He+ye,g=Ve+ye,S=le-F,w=Q+(Le-F),b=N*Ve/g*M,O=A*Ve/g*M;k.projectionMatrix.makePerspective(S,w,b,O,M,g),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function j(k,de){de===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(de.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;T.near=R.near=C.near=k.near,T.far=R.far=C.far=k.far,(D!==T.near||Y!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,Y=T.far);const de=k.parent,Ee=T.cameras;j(T,de);for(let Le=0;Le<Ee.length;Le++)j(Ee[Le],de);Ee.length===2?$(T,C,R):T.projectionMatrix.copy(C.projectionMatrix),ne(k,T,de)};function ne(k,de,Ee){Ee===null?k.matrix.copy(de.matrixWorld):(k.matrix.copy(Ee.matrixWorld),k.matrix.invert(),k.matrix.multiply(de.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(de.projectionMatrix),k.projectionMatrixInverse.copy(de.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=vc*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function(k){l=k,p!==null&&(p.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)};let re=null;function se(k,de){if(c=de.getViewerPose(u||o),v=de,c!==null){const Ee=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let Le=!1;Ee.length!==T.cameras.length&&(T.cameras.length=0,Le=!0);for(let Ie=0;Ie<Ee.length;Ie++){const Ge=Ee[Ie];let He=null;if(h!==null)He=h.getViewport(Ge);else{const N=f.getViewSubImage(p,Ge);He=N.viewport,Ie===0&&(e.setRenderTargetTextures(d,N.colorTexture,p.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(d))}let Ve=q[Ie];Ve===void 0&&(Ve=new An,Ve.layers.enable(Ie),Ve.viewport=new Gt,q[Ie]=Ve),Ve.matrix.fromArray(Ge.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ge.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(He.x,He.y,He.width,He.height),Ie===0&&(T.matrix.copy(Ve.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Le===!0&&T.cameras.push(Ve)}}for(let Ee=0;Ee<y.length;Ee++){const Le=x[Ee],Ie=y[Ee];Le!==null&&Ie!==void 0&&Ie.update(Le,de,u||o)}re&&re(k,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const xe=new Xp;xe.setAnimationLoop(se),this.setAnimationLoop=function(k){re=k},this.dispose=function(){}}}function db(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Gp(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&h(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Qt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Qt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const E=x.program;i.uniformBlockBinding(y,E)}function u(y,x){let E=r[y.id];E===void 0&&(v(y),E=c(y),r[y.id]=E,y.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(y,P);const C=e.render.frame;s[y.id]!==C&&(p(y),s[y.id]=C)}function c(y){const x=f();y.__bindingPointIndex=x;const E=t.createBuffer(),P=y.__size,C=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,E),E}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const x=r[y.id],E=y.uniforms,P=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,R=E.length;C<R;C++){const q=Array.isArray(E[C])?E[C]:[E[C]];for(let T=0,D=q.length;T<D;T++){const Y=q[T];if(h(Y,C,T,P)===!0){const ie=Y.__offset,V=Array.isArray(Y.value)?Y.value:[Y.value];let I=0;for(let H=0;H<V.length;H++){const B=V[H],$=_(B);typeof B=="number"||typeof B=="boolean"?(Y.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,ie+I,Y.__data)):B.isMatrix3?(Y.__data[0]=B.elements[0],Y.__data[1]=B.elements[1],Y.__data[2]=B.elements[2],Y.__data[3]=0,Y.__data[4]=B.elements[3],Y.__data[5]=B.elements[4],Y.__data[6]=B.elements[5],Y.__data[7]=0,Y.__data[8]=B.elements[6],Y.__data[9]=B.elements[7],Y.__data[10]=B.elements[8],Y.__data[11]=0):(B.toArray(Y.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ie,Y.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(y,x,E,P){const C=y.value,R=x+"_"+E;if(P[R]===void 0)return typeof C=="number"||typeof C=="boolean"?P[R]=C:P[R]=C.clone(),!0;{const q=P[R];if(typeof C=="number"||typeof C=="boolean"){if(q!==C)return P[R]=C,!0}else if(q.equals(C)===!1)return q.copy(C),!0}return!1}function v(y){const x=y.uniforms;let E=0;const P=16;for(let R=0,q=x.length;R<q;R++){const T=Array.isArray(x[R])?x[R]:[x[R]];for(let D=0,Y=T.length;D<Y;D++){const ie=T[D],V=Array.isArray(ie.value)?ie.value:[ie.value];for(let I=0,H=V.length;I<H;I++){const B=V[I],$=_(B),j=E%P;j!==0&&P-j<$.boundary&&(E+=P-j),ie.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=E,E+=$.storage}}}const C=E%P;return C>0&&(E+=P-C),y.__size=E,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Qp{constructor(e={}){const{canvas:n=cx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const h=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const d=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;const x=this;let E=!1,P=0,C=0,R=null,q=-1,T=null;const D=new Gt,Y=new Gt;let ie=null;const V=new et(0);let I=0,H=n.width,B=n.height,$=1,j=null,ne=null;const re=new Gt(0,0,H,B),se=new Gt(0,0,H,B);let xe=!1;const k=new Wp;let de=!1,Ee=!1,Le=null;const Ie=new Tt,Ge=new st,He=new ee,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return R===null?$:1}let A=i;function oe(U,ce){for(let ge=0;ge<U.length;ge++){const ve=U[ge],me=n.getContext(ve,ce);if(me!==null)return me}return null}try{const U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$c}`),n.addEventListener("webglcontextlost",G,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ue,!1),A===null){const ce=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&ce.shift(),A=oe(ce,U),A===null)throw oe(ce)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let te,le,Q,ye,F,M,g,S,w,b,O,X,K,Z,he,_e,J,Me,be,Re,Te,Se,Pe,Ue;function z(){te=new ES(A),le=new _S(A,te,e),te.init(le),Se=new lb(A,te,le),Q=new ob(A,te,le),ye=new AS(A),F=new $E,M=new ab(A,te,Q,F,le,Se,ye),g=new xS(x),S=new SS(x),w=new Ux(A,le),Pe=new mS(A,te,w,le),b=new bS(A,w,ye,Pe),O=new LS(A,b,w,ye),be=new CS(A,le,M),_e=new vS(F),X=new XE(x,g,S,te,le,Pe,_e),K=new db(x,F),Z=new YE,he=new eb(te,le),Me=new pS(x,g,S,Q,O,p,l),J=new sb(x,O,le),Ue=new hb(A,ye,le,Q),Re=new gS(A,te,ye,le),Te=new TS(A,te,ye,le),ye.programs=X.programs,x.capabilities=le,x.extensions=te,x.properties=F,x.renderLists=Z,x.shadowMap=J,x.state=Q,x.info=ye}z();const W=new fb(x,A);this.xr=W,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const U=te.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=te.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(U){U!==void 0&&($=U,this.setSize(H,B,!1))},this.getSize=function(U){return U.set(H,B)},this.setSize=function(U,ce,ge=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=U,B=ce,n.width=Math.floor(U*$),n.height=Math.floor(ce*$),ge===!0&&(n.style.width=U+"px",n.style.height=ce+"px"),this.setViewport(0,0,U,ce)},this.getDrawingBufferSize=function(U){return U.set(H*$,B*$).floor()},this.setDrawingBufferSize=function(U,ce,ge){H=U,B=ce,$=ge,n.width=Math.floor(U*ge),n.height=Math.floor(ce*ge),this.setViewport(0,0,U,ce)},this.getCurrentViewport=function(U){return U.copy(D)},this.getViewport=function(U){return U.copy(re)},this.setViewport=function(U,ce,ge,ve){U.isVector4?re.set(U.x,U.y,U.z,U.w):re.set(U,ce,ge,ve),Q.viewport(D.copy(re).multiplyScalar($).floor())},this.getScissor=function(U){return U.copy(se)},this.setScissor=function(U,ce,ge,ve){U.isVector4?se.set(U.x,U.y,U.z,U.w):se.set(U,ce,ge,ve),Q.scissor(Y.copy(se).multiplyScalar($).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(U){Q.setScissorTest(xe=U)},this.setOpaqueSort=function(U){j=U},this.setTransparentSort=function(U){ne=U},this.getClearColor=function(U){return U.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(U=!0,ce=!0,ge=!0){let ve=0;if(U){let me=!1;if(R!==null){const Fe=R.texture.format;me=Fe===wp||Fe===Ap||Fe===Tp}if(me){const Fe=R.texture.type,We=Fe===ki||Fe===Ui||Fe===qc||Fe===_r||Fe===Ep||Fe===bp,$e=Me.getClearColor(),je=Me.getClearAlpha(),tt=$e.r,Ke=$e.g,Ze=$e.b;We?(h[0]=tt,h[1]=Ke,h[2]=Ze,h[3]=je,A.clearBufferuiv(A.COLOR,0,h)):(v[0]=tt,v[1]=Ke,v[2]=Ze,v[3]=je,A.clearBufferiv(A.COLOR,0,v))}else ve|=A.COLOR_BUFFER_BIT}ce&&(ve|=A.DEPTH_BUFFER_BIT),ge&&(ve|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",G,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),Z.dispose(),he.dispose(),F.dispose(),g.dispose(),S.dispose(),O.dispose(),Pe.dispose(),Ue.dispose(),X.dispose(),W.dispose(),W.removeEventListener("sessionstart",ke),W.removeEventListener("sessionend",ze),Le&&(Le.dispose(),Le=null),Xe.stop()};function G(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const U=ye.autoReset,ce=J.enabled,ge=J.autoUpdate,ve=J.needsUpdate,me=J.type;z(),ye.autoReset=U,J.enabled=ce,J.autoUpdate=ge,J.needsUpdate=ve,J.type=me}function ue(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function fe(U){const ce=U.target;ce.removeEventListener("dispose",fe),ae(ce)}function ae(U){pe(U),F.remove(U)}function pe(U){const ce=F.get(U).programs;ce!==void 0&&(ce.forEach(function(ge){X.releaseProgram(ge)}),U.isShaderMaterial&&X.releaseShaderCache(U))}this.renderBufferDirect=function(U,ce,ge,ve,me,Fe){ce===null&&(ce=Ve);const We=me.isMesh&&me.matrixWorld.determinant()<0,$e=fo(U,ce,ge,ve,me);Q.setMaterial(ve,We);let je=ge.index,tt=1;if(ve.wireframe===!0){if(je=b.getWireframeAttribute(ge),je===void 0)return;tt=2}const Ke=ge.drawRange,Ze=ge.attributes.position;let At=Ke.start*tt,_n=(Ke.start+Ke.count)*tt;Fe!==null&&(At=Math.max(At,Fe.start*tt),_n=Math.min(_n,(Fe.start+Fe.count)*tt)),je!==null?(At=Math.max(At,0),_n=Math.min(_n,je.count)):Ze!=null&&(At=Math.max(At,0),_n=Math.min(_n,Ze.count));const Nt=_n-At;if(Nt<0||Nt===1/0)return;Pe.setup(me,ve,$e,ge,je);let si,xt=Re;if(je!==null&&(si=w.get(je),xt=Te,xt.setIndex(si)),me.isMesh)ve.wireframe===!0?(Q.setLineWidth(ve.wireframeLinewidth*N()),xt.setMode(A.LINES)):xt.setMode(A.TRIANGLES);else if(me.isLine){let nt=ve.linewidth;nt===void 0&&(nt=1),Q.setLineWidth(nt*N()),me.isLineSegments?xt.setMode(A.LINES):me.isLineLoop?xt.setMode(A.LINE_LOOP):xt.setMode(A.LINE_STRIP)}else me.isPoints?xt.setMode(A.POINTS):me.isSprite&&xt.setMode(A.TRIANGLES);if(me.isBatchedMesh)xt.renderMultiDraw(me._multiDrawStarts,me._multiDrawCounts,me._multiDrawCount);else if(me.isInstancedMesh)xt.renderInstances(At,Nt,me.count);else if(ge.isInstancedBufferGeometry){const nt=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,Va=Math.min(ge.instanceCount,nt);xt.renderInstances(At,Nt,Va)}else xt.render(At,Nt)};function we(U,ce,ge){U.transparent===!0&&U.side===_i&&U.forceSinglePass===!1?(U.side=Qt,U.needsUpdate=!0,pt(U,ce,ge),U.side=$i,U.needsUpdate=!0,pt(U,ce,ge),U.side=_i):pt(U,ce,ge)}this.compile=function(U,ce,ge=null){ge===null&&(ge=U),m=he.get(ge),m.init(),y.push(m),ge.traverseVisible(function(me){me.isLight&&me.layers.test(ce.layers)&&(m.pushLight(me),me.castShadow&&m.pushShadow(me))}),U!==ge&&U.traverseVisible(function(me){me.isLight&&me.layers.test(ce.layers)&&(m.pushLight(me),me.castShadow&&m.pushShadow(me))}),m.setupLights(x._useLegacyLights);const ve=new Set;return U.traverse(function(me){const Fe=me.material;if(Fe)if(Array.isArray(Fe))for(let We=0;We<Fe.length;We++){const $e=Fe[We];we($e,ge,me),ve.add($e)}else we(Fe,ge,me),ve.add(Fe)}),y.pop(),m=null,ve},this.compileAsync=function(U,ce,ge=null){const ve=this.compile(U,ce,ge);return new Promise(me=>{function Fe(){if(ve.forEach(function(We){F.get(We).currentProgram.isReady()&&ve.delete(We)}),ve.size===0){me(U);return}setTimeout(Fe,10)}te.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Ae=null;function Ne(U){Ae&&Ae(U)}function ke(){Xe.stop()}function ze(){Xe.start()}const Xe=new Xp;Xe.setAnimationLoop(Ne),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(U){Ae=U,W.setAnimationLoop(U),U===null?Xe.stop():Xe.start()},W.addEventListener("sessionstart",ke),W.addEventListener("sessionend",ze),this.render=function(U,ce){if(ce!==void 0&&ce.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.parent===null&&ce.matrixWorldAutoUpdate===!0&&ce.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(ce),ce=W.getCamera()),U.isScene===!0&&U.onBeforeRender(x,U,ce,R),m=he.get(U,y.length),m.init(),y.push(m),Ie.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),k.setFromProjectionMatrix(Ie),Ee=this.localClippingEnabled,de=_e.init(this.clippingPlanes,Ee),_=Z.get(U,d.length),_.init(),d.push(_),ot(U,ce,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(j,ne),this.info.render.frame++,de===!0&&_e.beginShadows();const ge=m.state.shadowsArray;if(J.render(ge,U,ce),de===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),Me.render(_,U),m.setupLights(x._useLegacyLights),ce.isArrayCamera){const ve=ce.cameras;for(let me=0,Fe=ve.length;me<Fe;me++){const We=ve[me];Ut(_,U,We,We.viewport)}}else Ut(_,U,ce);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),U.isScene===!0&&U.onAfterRender(x,U,ce),Pe.resetDefaultState(),q=-1,T=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function ot(U,ce,ge,ve){if(U.visible===!1)return;if(U.layers.test(ce.layers)){if(U.isGroup)ge=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ce);else if(U.isLight)m.pushLight(U),U.castShadow&&m.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||k.intersectsSprite(U)){ve&&He.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Ie);const We=O.update(U),$e=U.material;$e.visible&&_.push(U,We,$e,ge,He.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||k.intersectsObject(U))){const We=O.update(U),$e=U.material;if(ve&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),He.copy(U.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),He.copy(We.boundingSphere.center)),He.applyMatrix4(U.matrixWorld).applyMatrix4(Ie)),Array.isArray($e)){const je=We.groups;for(let tt=0,Ke=je.length;tt<Ke;tt++){const Ze=je[tt],At=$e[Ze.materialIndex];At&&At.visible&&_.push(U,We,At,ge,He.z,Ze)}}else $e.visible&&_.push(U,We,$e,ge,He.z,null)}}const Fe=U.children;for(let We=0,$e=Fe.length;We<$e;We++)ot(Fe[We],ce,ge,ve)}function Ut(U,ce,ge,ve){const me=U.opaque,Fe=U.transmissive,We=U.transparent;m.setupLightsView(ge),de===!0&&_e.setGlobalState(x.clippingPlanes,ge),Fe.length>0&&Wt(me,Fe,ce,ge),ve&&Q.viewport(D.copy(ve)),me.length>0&&gn(me,ce,ge),Fe.length>0&&gn(Fe,ce,ge),We.length>0&&gn(We,ce,ge),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Wt(U,ce,ge,ve){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;const Fe=le.isWebGL2;Le===null&&(Le=new qi(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?Qs:ki,minFilter:yr,samples:Fe?4:0})),x.getDrawingBufferSize(Ge),Fe?Le.setSize(Ge.x,Ge.y):Le.setSize(xc(Ge.x),xc(Ge.y));const We=x.getRenderTarget();x.setRenderTarget(Le),x.getClearColor(V),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const $e=x.toneMapping;x.toneMapping=Vi,gn(U,ge,ve),M.updateMultisampleRenderTarget(Le),M.updateRenderTargetMipmap(Le);let je=!1;for(let tt=0,Ke=ce.length;tt<Ke;tt++){const Ze=ce[tt],At=Ze.object,_n=Ze.geometry,Nt=Ze.material,si=Ze.group;if(Nt.side===_i&&At.layers.test(ve.layers)){const xt=Nt.side;Nt.side=Qt,Nt.needsUpdate=!0,ct(At,ge,ve,_n,Nt,si),Nt.side=xt,Nt.needsUpdate=!0,je=!0}}je===!0&&(M.updateMultisampleRenderTarget(Le),M.updateRenderTargetMipmap(Le)),x.setRenderTarget(We),x.setClearColor(V,I),x.toneMapping=$e}function gn(U,ce,ge){const ve=ce.isScene===!0?ce.overrideMaterial:null;for(let me=0,Fe=U.length;me<Fe;me++){const We=U[me],$e=We.object,je=We.geometry,tt=ve===null?We.material:ve,Ke=We.group;$e.layers.test(ge.layers)&&ct($e,ce,ge,je,tt,Ke)}}function ct(U,ce,ge,ve,me,Fe){U.onBeforeRender(x,ce,ge,ve,me,Fe),U.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),me.onBeforeRender(x,ce,ge,ve,U,Fe),me.transparent===!0&&me.side===_i&&me.forceSinglePass===!1?(me.side=Qt,me.needsUpdate=!0,x.renderBufferDirect(ge,ce,ve,me,U,Fe),me.side=$i,me.needsUpdate=!0,x.renderBufferDirect(ge,ce,ve,me,U,Fe),me.side=_i):x.renderBufferDirect(ge,ce,ve,me,U,Fe),U.onAfterRender(x,ce,ge,ve,me,Fe)}function pt(U,ce,ge){ce.isScene!==!0&&(ce=Ve);const ve=F.get(U),me=m.state.lights,Fe=m.state.shadowsArray,We=me.state.version,$e=X.getParameters(U,me.state,Fe,ce,ge),je=X.getProgramCacheKey($e);let tt=ve.programs;ve.environment=U.isMeshStandardMaterial?ce.environment:null,ve.fog=ce.fog,ve.envMap=(U.isMeshStandardMaterial?S:g).get(U.envMap||ve.environment),tt===void 0&&(U.addEventListener("dispose",fe),tt=new Map,ve.programs=tt);let Ke=tt.get(je);if(Ke!==void 0){if(ve.currentProgram===Ke&&ve.lightsStateVersion===We)return ps(U,$e),Ke}else $e.uniforms=X.getUniforms(U),U.onBuild(ge,$e,x),U.onBeforeCompile($e,x),Ke=X.acquireProgram($e,je),tt.set(je,Ke),ve.uniforms=$e.uniforms;const Ze=ve.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ze.clippingPlanes=_e.uniform),ps(U,$e),ve.needsLights=fm(U),ve.lightsStateVersion=We,ve.needsLights&&(Ze.ambientLightColor.value=me.state.ambient,Ze.lightProbe.value=me.state.probe,Ze.directionalLights.value=me.state.directional,Ze.directionalLightShadows.value=me.state.directionalShadow,Ze.spotLights.value=me.state.spot,Ze.spotLightShadows.value=me.state.spotShadow,Ze.rectAreaLights.value=me.state.rectArea,Ze.ltc_1.value=me.state.rectAreaLTC1,Ze.ltc_2.value=me.state.rectAreaLTC2,Ze.pointLights.value=me.state.point,Ze.pointLightShadows.value=me.state.pointShadow,Ze.hemisphereLights.value=me.state.hemi,Ze.directionalShadowMap.value=me.state.directionalShadowMap,Ze.directionalShadowMatrix.value=me.state.directionalShadowMatrix,Ze.spotShadowMap.value=me.state.spotShadowMap,Ze.spotLightMatrix.value=me.state.spotLightMatrix,Ze.spotLightMap.value=me.state.spotLightMap,Ze.pointShadowMap.value=me.state.pointShadowMap,Ze.pointShadowMatrix.value=me.state.pointShadowMatrix),ve.currentProgram=Ke,ve.uniformsList=null,Ke}function hs(U){if(U.uniformsList===null){const ce=U.currentProgram.getUniforms();U.uniformsList=ra.seqWithValue(ce.seq,U.uniforms)}return U.uniformsList}function ps(U,ce){const ge=F.get(U);ge.outputColorSpace=ce.outputColorSpace,ge.batching=ce.batching,ge.instancing=ce.instancing,ge.instancingColor=ce.instancingColor,ge.skinning=ce.skinning,ge.morphTargets=ce.morphTargets,ge.morphNormals=ce.morphNormals,ge.morphColors=ce.morphColors,ge.morphTargetsCount=ce.morphTargetsCount,ge.numClippingPlanes=ce.numClippingPlanes,ge.numIntersection=ce.numClipIntersection,ge.vertexAlphas=ce.vertexAlphas,ge.vertexTangents=ce.vertexTangents,ge.toneMapping=ce.toneMapping}function fo(U,ce,ge,ve,me){ce.isScene!==!0&&(ce=Ve),M.resetTextureUnits();const Fe=ce.fog,We=ve.isMeshStandardMaterial?ce.environment:null,$e=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ri,je=(ve.isMeshStandardMaterial?S:g).get(ve.envMap||We),tt=ve.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,Ke=!!ge.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),Ze=!!ge.morphAttributes.position,At=!!ge.morphAttributes.normal,_n=!!ge.morphAttributes.color;let Nt=Vi;ve.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Nt=x.toneMapping);const si=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,xt=si!==void 0?si.length:0,nt=F.get(ve),Va=m.state.lights;if(de===!0&&(Ee===!0||U!==T)){const En=U===T&&ve.id===q;_e.setState(ve,U,En)}let Mt=!1;ve.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Va.state.version||nt.outputColorSpace!==$e||me.isBatchedMesh&&nt.batching===!1||!me.isBatchedMesh&&nt.batching===!0||me.isInstancedMesh&&nt.instancing===!1||!me.isInstancedMesh&&nt.instancing===!0||me.isSkinnedMesh&&nt.skinning===!1||!me.isSkinnedMesh&&nt.skinning===!0||me.isInstancedMesh&&nt.instancingColor===!0&&me.instanceColor===null||me.isInstancedMesh&&nt.instancingColor===!1&&me.instanceColor!==null||nt.envMap!==je||ve.fog===!0&&nt.fog!==Fe||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==_e.numPlanes||nt.numIntersection!==_e.numIntersection)||nt.vertexAlphas!==tt||nt.vertexTangents!==Ke||nt.morphTargets!==Ze||nt.morphNormals!==At||nt.morphColors!==_n||nt.toneMapping!==Nt||le.isWebGL2===!0&&nt.morphTargetsCount!==xt)&&(Mt=!0):(Mt=!0,nt.__version=ve.version);let ji=nt.currentProgram;Mt===!0&&(ji=pt(ve,ce,me));let Qc=!1,ms=!1,ka=!1;const Xt=ji.getUniforms(),Ki=nt.uniforms;if(Q.useProgram(ji.program)&&(Qc=!0,ms=!0,ka=!0),ve.id!==q&&(q=ve.id,ms=!0),Qc||T!==U){Xt.setValue(A,"projectionMatrix",U.projectionMatrix),Xt.setValue(A,"viewMatrix",U.matrixWorldInverse);const En=Xt.map.cameraPosition;En!==void 0&&En.setValue(A,He.setFromMatrixPosition(U.matrixWorld)),le.logarithmicDepthBuffer&&Xt.setValue(A,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&Xt.setValue(A,"isOrthographic",U.isOrthographicCamera===!0),T!==U&&(T=U,ms=!0,ka=!0)}if(me.isSkinnedMesh){Xt.setOptional(A,me,"bindMatrix"),Xt.setOptional(A,me,"bindMatrixInverse");const En=me.skeleton;En&&(le.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),Xt.setValue(A,"boneTexture",En.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}me.isBatchedMesh&&(Xt.setOptional(A,me,"batchingTexture"),Xt.setValue(A,"batchingTexture",me._matricesTexture,M));const Wa=ge.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0&&le.isWebGL2===!0)&&be.update(me,ge,ji),(ms||nt.receiveShadow!==me.receiveShadow)&&(nt.receiveShadow=me.receiveShadow,Xt.setValue(A,"receiveShadow",me.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(Ki.envMap.value=je,Ki.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ms&&(Xt.setValue(A,"toneMappingExposure",x.toneMappingExposure),nt.needsLights&&Ga(Ki,ka),Fe&&ve.fog===!0&&K.refreshFogUniforms(Ki,Fe),K.refreshMaterialUniforms(Ki,ve,$,B,Le),ra.upload(A,hs(nt),Ki,M)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(ra.upload(A,hs(nt),Ki,M),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&Xt.setValue(A,"center",me.center),Xt.setValue(A,"modelViewMatrix",me.modelViewMatrix),Xt.setValue(A,"normalMatrix",me.normalMatrix),Xt.setValue(A,"modelMatrix",me.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){const En=ve.uniformsGroups;for(let Xa=0,dm=En.length;Xa<dm;Xa++)if(le.isWebGL2){const eu=En[Xa];Ue.update(eu,ji),Ue.bind(eu,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}function Ga(U,ce){U.ambientLightColor.needsUpdate=ce,U.lightProbe.needsUpdate=ce,U.directionalLights.needsUpdate=ce,U.directionalLightShadows.needsUpdate=ce,U.pointLights.needsUpdate=ce,U.pointLightShadows.needsUpdate=ce,U.spotLights.needsUpdate=ce,U.spotLightShadows.needsUpdate=ce,U.rectAreaLights.needsUpdate=ce,U.hemisphereLights.needsUpdate=ce}function fm(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(U,ce,ge){F.get(U.texture).__webglTexture=ce,F.get(U.depthTexture).__webglTexture=ge;const ve=F.get(U);ve.__hasExternalTextures=!0,ve.__hasExternalTextures&&(ve.__autoAllocateDepthBuffer=ge===void 0,ve.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ve.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,ce){const ge=F.get(U);ge.__webglFramebuffer=ce,ge.__useDefaultFramebuffer=ce===void 0},this.setRenderTarget=function(U,ce=0,ge=0){R=U,P=ce,C=ge;let ve=!0,me=null,Fe=!1,We=!1;if(U){const je=F.get(U);je.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(A.FRAMEBUFFER,null),ve=!1):je.__webglFramebuffer===void 0?M.setupRenderTarget(U):je.__hasExternalTextures&&M.rebindTextures(U,F.get(U.texture).__webglTexture,F.get(U.depthTexture).__webglTexture);const tt=U.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(We=!0);const Ke=F.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ke[ce])?me=Ke[ce][ge]:me=Ke[ce],Fe=!0):le.isWebGL2&&U.samples>0&&M.useMultisampledRTT(U)===!1?me=F.get(U).__webglMultisampledFramebuffer:Array.isArray(Ke)?me=Ke[ge]:me=Ke,D.copy(U.viewport),Y.copy(U.scissor),ie=U.scissorTest}else D.copy(re).multiplyScalar($).floor(),Y.copy(se).multiplyScalar($).floor(),ie=xe;if(Q.bindFramebuffer(A.FRAMEBUFFER,me)&&le.drawBuffers&&ve&&Q.drawBuffers(U,me),Q.viewport(D),Q.scissor(Y),Q.setScissorTest(ie),Fe){const je=F.get(U.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+ce,je.__webglTexture,ge)}else if(We){const je=F.get(U.texture),tt=ce||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,je.__webglTexture,ge||0,tt)}q=-1},this.readRenderTargetPixels=function(U,ce,ge,ve,me,Fe,We){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=F.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e){Q.bindFramebuffer(A.FRAMEBUFFER,$e);try{const je=U.texture,tt=je.format,Ke=je.type;if(tt!==Bn&&Se.convert(tt)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ke===Qs&&(te.has("EXT_color_buffer_half_float")||le.isWebGL2&&te.has("EXT_color_buffer_float"));if(Ke!==ki&&Se.convert(Ke)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===Ni&&(le.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ce>=0&&ce<=U.width-ve&&ge>=0&&ge<=U.height-me&&A.readPixels(ce,ge,ve,me,Se.convert(tt),Se.convert(Ke),Fe)}finally{const je=R!==null?F.get(R).__webglFramebuffer:null;Q.bindFramebuffer(A.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(U,ce,ge=0){const ve=Math.pow(2,-ge),me=Math.floor(ce.image.width*ve),Fe=Math.floor(ce.image.height*ve);M.setTexture2D(ce,0),A.copyTexSubImage2D(A.TEXTURE_2D,ge,0,0,U.x,U.y,me,Fe),Q.unbindTexture()},this.copyTextureToTexture=function(U,ce,ge,ve=0){const me=ce.image.width,Fe=ce.image.height,We=Se.convert(ge.format),$e=Se.convert(ge.type);M.setTexture2D(ge,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,ge.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ge.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,ge.unpackAlignment),ce.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ve,U.x,U.y,me,Fe,We,$e,ce.image.data):ce.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ve,U.x,U.y,ce.mipmaps[0].width,ce.mipmaps[0].height,We,ce.mipmaps[0].data):A.texSubImage2D(A.TEXTURE_2D,ve,U.x,U.y,We,$e,ce.image),ve===0&&ge.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(U,ce,ge,ve,me=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=U.max.x-U.min.x+1,We=U.max.y-U.min.y+1,$e=U.max.z-U.min.z+1,je=Se.convert(ve.format),tt=Se.convert(ve.type);let Ke;if(ve.isData3DTexture)M.setTexture3D(ve,0),Ke=A.TEXTURE_3D;else if(ve.isDataArrayTexture||ve.isCompressedArrayTexture)M.setTexture2DArray(ve,0),Ke=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,ve.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ve.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,ve.unpackAlignment);const Ze=A.getParameter(A.UNPACK_ROW_LENGTH),At=A.getParameter(A.UNPACK_IMAGE_HEIGHT),_n=A.getParameter(A.UNPACK_SKIP_PIXELS),Nt=A.getParameter(A.UNPACK_SKIP_ROWS),si=A.getParameter(A.UNPACK_SKIP_IMAGES),xt=ge.isCompressedTexture?ge.mipmaps[me]:ge.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,xt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,xt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,U.min.x),A.pixelStorei(A.UNPACK_SKIP_ROWS,U.min.y),A.pixelStorei(A.UNPACK_SKIP_IMAGES,U.min.z),ge.isDataTexture||ge.isData3DTexture?A.texSubImage3D(Ke,me,ce.x,ce.y,ce.z,Fe,We,$e,je,tt,xt.data):ge.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(Ke,me,ce.x,ce.y,ce.z,Fe,We,$e,je,xt.data)):A.texSubImage3D(Ke,me,ce.x,ce.y,ce.z,Fe,We,$e,je,tt,xt),A.pixelStorei(A.UNPACK_ROW_LENGTH,Ze),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,At),A.pixelStorei(A.UNPACK_SKIP_PIXELS,_n),A.pixelStorei(A.UNPACK_SKIP_ROWS,Nt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,si),me===0&&ve.generateMipmaps&&A.generateMipmap(Ke),Q.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?M.setTextureCube(U,0):U.isData3DTexture?M.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?M.setTexture2DArray(U,0):M.setTexture2D(U,0),Q.unbindTexture()},this.resetState=function(){P=0,C=0,R=null,Q.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Yc?"display-p3":"srgb",n.unpackColorSpace=dt.workingColorSpace===za?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?xr:Cp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?Ht:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pb extends Qp{}pb.prototype.isWebGL1Renderer=!0;class em extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Fd extends kt{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hr=new Tt,Bd=new Tt,$o=[],zd=new Sr,mb=new Tt,Es=new Vt,bs=new us;class $l extends Vt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Fd(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,mb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Hr),zd.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(zd)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Hr),bs.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(bs)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(i),e.ray.intersectsSphere(bs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Hr),Bd.multiplyMatrices(i,Hr),Es.matrixWorld=Bd,Es.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){const l=$o[o];l.instanceId=s,l.object=this,n.push(l)}$o.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Fd(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class gb extends co{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hd=new Tt,Mc=new Np,qo=new us,Yo=new ee;class tm extends mn{constructor(e=new Ln,n=new gb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(r),qo.radius+=s,e.ray.intersectsSphere(qo)===!1)return;Hd.copy(r).invert(),Mc.copy(e.ray).applyMatrix4(Hd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),h=Math.min(u.count,o.start+o.count);for(let v=p,_=h;v<_;v++){const m=u.getX(v);Yo.fromBufferAttribute(f,m),Gd(Yo,m,l,r,e,n,this)}}else{const p=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let v=p,_=h;v<_;v++)Yo.fromBufferAttribute(f,v),Gd(Yo,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gd(t,e,n,i,r,s,o){const a=Mc.distanceSqToPoint(t);if(a<n){const l=new ee;Mc.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Kc extends Ln{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Sn(s,3)),this.setAttribute("normal",new Sn(s.slice(),3)),this.setAttribute("uv",new Sn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new ee,E=new ee,P=new ee;for(let C=0;C<n.length;C+=3)h(n[C+0],x),h(n[C+1],E),h(n[C+2],P),l(x,E,P,y)}function l(y,x,E,P){const C=P+1,R=[];for(let q=0;q<=C;q++){R[q]=[];const T=y.clone().lerp(E,q/C),D=x.clone().lerp(E,q/C),Y=C-q;for(let ie=0;ie<=Y;ie++)ie===0&&q===C?R[q][ie]=T:R[q][ie]=T.clone().lerp(D,ie/Y)}for(let q=0;q<C;q++)for(let T=0;T<2*(C-q)-1;T++){const D=Math.floor(T/2);T%2===0?(p(R[q][D+1]),p(R[q+1][D]),p(R[q][D])):(p(R[q][D+1]),p(R[q+1][D+1]),p(R[q+1][D]))}}function u(y){const x=new ee;for(let E=0;E<s.length;E+=3)x.x=s[E+0],x.y=s[E+1],x.z=s[E+2],x.normalize().multiplyScalar(y),s[E+0]=x.x,s[E+1]=x.y,s[E+2]=x.z}function c(){const y=new ee;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const E=m(y)/2/Math.PI+.5,P=d(y)/Math.PI+.5;o.push(E,1-P)}v(),f()}function f(){for(let y=0;y<o.length;y+=6){const x=o[y+0],E=o[y+2],P=o[y+4],C=Math.max(x,E,P),R=Math.min(x,E,P);C>.9&&R<.1&&(x<.2&&(o[y+0]+=1),E<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function p(y){s.push(y.x,y.y,y.z)}function h(y,x){const E=y*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function v(){const y=new ee,x=new ee,E=new ee,P=new ee,C=new st,R=new st,q=new st;for(let T=0,D=0;T<s.length;T+=9,D+=6){y.set(s[T+0],s[T+1],s[T+2]),x.set(s[T+3],s[T+4],s[T+5]),E.set(s[T+6],s[T+7],s[T+8]),C.set(o[D+0],o[D+1]),R.set(o[D+2],o[D+3]),q.set(o[D+4],o[D+5]),P.copy(y).add(x).add(E).divideScalar(3);const Y=m(P);_(C,D+0,y,Y),_(R,D+2,x,Y),_(q,D+4,E,Y)}}function _(y,x,E,P){P<0&&y.x===1&&(o[x]=y.x-1),E.x===0&&E.z===0&&(o[x]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.vertices,e.indices,e.radius,e.details)}}class Zc extends Kc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zc(e.radius,e.detail)}}class Ea extends Ln{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new ee,p=new ee,h=[],v=[],_=[],m=[];for(let d=0;d<=i;d++){const y=[],x=d/i;let E=0;d===0&&o===0?E=.5/n:d===i&&l===Math.PI&&(E=-.5/n);for(let P=0;P<=n;P++){const C=P/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),v.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),m.push(C+E,1-x),y.push(u++)}c.push(y)}for(let d=0;d<i;d++)for(let y=0;y<n;y++){const x=c[d][y+1],E=c[d][y],P=c[d+1][y],C=c[d+1][y+1];(d!==0||o>0)&&h.push(x,E,C),(d!==i-1||l<Math.PI)&&h.push(E,P,C)}this.setIndex(h),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Vd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class _b{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,p=u.length;f<p;f+=2){const h=u[f],v=u[f+1];if(h.global&&(h.lastIndex=0),h.test(c))return v}return null}}}const vb=new _b;class Jc{constructor(e){this.manager=e!==void 0?e:vb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";class xb extends Jc{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vd.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=eo("img");function l(){c(),Vd.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class yb extends Jc{constructor(e){super(e)}load(e,n,i,r){const s=new pn,o=new xb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Mb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=kd();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function kd(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);dt.enabled=!1;const to=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<600,Oi=Math.min(window.devicePixelRatio||1,to?1.6:2);function Sb(t){const e=new Qp({canvas:t,antialias:!1,powerPreference:"high-performance"});return e.outputColorSpace=ri,e.setPixelRatio(Oi),e.setClearColor(460811,1),e}function Eb(){return{uLight:{value:new ee(-.62,.5,.38).normalize()},uDot:{value:Math.max(3.4,4.2*Oi)},uTime:{value:0}}}function bb(t){return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const nm=t=>t-Math.floor(t),jo=(t,e)=>nm(Math.sin(t*127.1+e*311.7)*43758.5453),Ci=(t,e,n)=>nm(Math.sin(t*127.1+e*311.7+n*74.7)*43758.5453),Vs=t=>t*t*(3-2*t);function Sc(t,e){const n=Math.floor(t),i=Math.floor(e),r=Vs(t-n),s=Vs(e-i),o=jo(n,i),a=jo(n+1,i),l=jo(n,i+1),u=jo(n+1,i+1);return(o+(a-o)*r+(l-o)*s+(o-a-l+u)*r*s)*2-1}function ql(t,e,n){const i=Math.floor(t),r=Math.floor(e),s=Math.floor(n),o=Vs(t-i),a=Vs(e-r),l=Vs(n-s),u=(p,h,v)=>p+(h-p)*v,c=u(u(Ci(i,r,s),Ci(i+1,r,s),o),u(Ci(i,r+1,s),Ci(i+1,r+1,s),o),a),f=u(u(Ci(i,r,s+1),Ci(i+1,r,s+1),o),u(Ci(i,r+1,s+1),Ci(i+1,r+1,s+1),o),a);return u(c,f,l)*2-1}function Yl(t,e,n=5){let i=0,r=.5,s=1;for(let o=0;o<n;o++)i+=r*Sc(t*s,e*s),s*=2.03,r*=.5;return i}const lr=(t,e,n)=>{const i=Math.min(1,Math.max(0,(n-t)/(e-t)));return i*i*(3-2*i)},Gn=new ee(0,1.5,0),im=62,Wd=80,rm=8.9,Xd=8.4;function Tb(){return{camera:new An(im,Hi,.1,8e3),pitch:rm*Math.PI/180,safe:{w:1,h:1},size:{w:1,h:1},blend:1}}function Ab(t,e,n){const{camera:i}=t,r=e/n;t.size.w=e,t.size.h=n,i.aspect=r,r>=Hi?(t.safe.w=n*Hi,t.safe.h=n,t.blend=1):(t.safe.w=e,t.safe.h=n,t.blend=lr(.46,Hi,r)),i.fov=Wd+(im-Wd)*t.blend,t.pitch=(Xd+(rm-Xd)*t.blend)*Math.PI/180,i.updateProjectionMatrix()}function sm(t){t.camera.position.copy(Gn),t.camera.rotation.set(t.pitch,0,0,"YXZ"),t.camera.updateMatrixWorld()}function om(t,e,n){const i=t.safe.w/t.size.w,r=t.safe.h/t.size.h;return new ee((e*2-1)*i,(1-n*2)*r,.5).unproject(t.camera).sub(Gn).normalize()}function am(t,e){const{camera:n}=t;return e*Math.tan(n.fov*Math.PI/360)*n.aspect*(t.safe.w/t.size.w)}function wb(t){const e={mx:0,my:0,sx:0,sy:0,yaw:0,yawT:0,pit:0,pitT:0};let n=!1,i=0,r=0;const s=l=>{n=!0,i=l.clientX,r=l.clientY,t.classList.add("drag"),t.setPointerCapture(l.pointerId)},o=l=>{n=!1,t.classList.remove("drag"),e.yawT=0,e.pitT=0,l&&l.pointerType!=="mouse"&&(e.mx=0,e.my=0)},a=l=>{e.mx=l.clientX/innerWidth*2-1,e.my=l.clientY/innerHeight*2-1,n&&(e.yawT=Math.max(-.14,Math.min(.14,e.yawT-(l.clientX-i)*.0012)),e.pitT=Math.max(-.05,Math.min(.06,e.pitT+(l.clientY-r)*6e-4)),i=l.clientX,r=l.clientY)};return t.addEventListener("pointerdown",s),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),addEventListener("pointermove",a),{state:e,update(l){const u=1-Math.exp(-l*3);e.sx+=(e.mx-e.sx)*u,e.sy+=(e.my-e.sy)*u;const c=1-Math.exp(-l*(n?8:2));e.yaw+=(e.yawT-e.yaw)*c,e.pit+=(e.pitT-e.pit)*c},dispose(){t.removeEventListener("pointerdown",s),t.removeEventListener("pointerup",o),t.removeEventListener("pointercancel",o),removeEventListener("pointermove",a)}}}const Rb="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Cb=`uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uTime; varying vec2 vUv;
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
    }`;function Lb(t){const e=new qi(2,2,{samples:to?2:4}),n=new em,i=new $p(-1,1,1,-1,0,1),r=new Bt({uniforms:{tDiffuse:{value:e.texture},uRes:{value:new st(1,1)},uTime:t.uTime},vertexShader:Rb,fragmentShader:Cb,depthTest:!1,depthWrite:!1});return n.add(new Vt(new Yi(2,2),r)),{setSize(s,o){e.setSize(Math.floor(s*Oi),Math.floor(o*Oi)),r.uniforms.uRes.value.set(s*Oi,o*Oi)},render(s,o,a){s.setRenderTarget(e),s.render(o,a),s.setRenderTarget(null),s.render(n,i)},dispose(){e.dispose(),r.dispose()}}}const ds=`
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
`,lm=`
varying vec3 vN; varying vec3 vW; varying vec3 vL;
void main(){
  vec4 lp = vec4(position, 1.0); vec3 n = normal;
  #ifdef USE_INSTANCING
    lp = instanceMatrix * lp; n = mat3(instanceMatrix) * n;
  #endif
  vec4 wp = modelMatrix * lp;
  vW = wp.xyz; vL = position; vN = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,Pb=`varying vec2 vUv; varying vec3 vW;
    void main(){ vUv = uv; vec4 lp = vec4(position,1.0);
      #ifdef USE_INSTANCING
        lp = instanceMatrix * lp;
      #endif
      vec4 wp = modelMatrix * lp; vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,Db=ds+`
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
    }`;function Ib(t){const e=new st(-t.uLight.value.x,-t.uLight.value.z).normalize(),n=new Yi(1,1);n.rotateX(-Math.PI/2);const i=new Bt({uniforms:Object.assign({},t,{uCol:{value:new et(1317410)}}),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,vertexShader:Pb,fragmentShader:Db});return{dir:e,geometry:n,material:i}}const Ub=ds+`
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
      }`;function Ec(t,e){const n=Math.hypot(t,e);let i=Yl(t*.02,e*.02,4)*.9+Yl(t*.11+7,e*.11-3,3)*.12;i*=lr(2,40,n)*.9+.1;const r=lr(150,230,-e),s=.72+.28*lr(-160,220,t),o=Math.pow(1-Math.abs(Sc(t*.016+3.1,e*.016)),3),a=Math.pow(1-Math.abs(Sc(t*.045-2,e*.045+5)),2);return i+=r*s*(o*21+a*6+Yl(t*.03,e*.03,4)*4),i+=lr(120,175,-e)*(1-lr(175,215,-e))*lr(40,150,t)*(Math.pow(a,1.5)*9+2),i}function Nb(t){const e=to?300:420,n=to?260:360,i=new Yi(2,1,e,n);i.rotateX(-Math.PI/2);const r=i.attributes.position;for(let o=0;o<r.count;o++){const a=r.getX(o),l=r.getZ(o)+.5,u=Math.sign(a)*Math.pow(Math.abs(a),1.7)*520,c=12-Math.pow(1-l,1.8)*330;r.setXYZ(o,u,Ec(u,c),c)}i.computeVertexNormals();const s=new Bt({uniforms:Object.assign({},t,{uNear:{value:new et(13616557)},uFar:{value:new et(14538435)},uShadeN:{value:new et(1778220)},uShadeF:{value:new et(7305863)},uSnow:{value:new et(15986402)},uHaze:{value:new et(14867920)}}),vertexShader:lm,fragmentShader:Ub});return new Vt(i,s)}const Ob=ds+`
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
      }`,Fb=`
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
      }`,Bb="void main(){ gl_FragColor = vec4(0.05, 0.055, 0.07, 1.0); }";function $d(t){return new Bt({uniforms:{uThick:{value:t}},side:Qt,vertexShader:Fb,fragmentShader:Bb})}function zb(t){const e=t.index?t.toNonIndexed():t.clone(),n=e.attributes.position,i=new Map,r=u=>`${Math.round(n.getX(u)*1e3)}_${Math.round(n.getY(u)*1e3)}_${Math.round(n.getZ(u)*1e3)}`,s=new ee,o=new ee,a=new ee;for(let u=0;u<n.count;u+=3){s.fromBufferAttribute(n,u),o.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2);const c=o.clone().sub(s).cross(a.clone().sub(s));for(let f=0;f<3;f++){const p=r(u+f);i.has(p)||i.set(p,new ee),i.get(p).add(c)}}const l=new Float32Array(n.count*3);for(let u=0;u<n.count;u++){const c=i.get(r(u)).clone().normalize();l.set([c.x,c.y,c.z],u*3)}return e.setAttribute("normal",new kt(l,3)),e}const Hb=[[-1.6,-4.5,.9,0],[-2.75,-6.3,.62,1],[-.55,-4.05,.3,2],[-3.7,-8.8,.55,3],[2.5,-4.15,.55,1],[1.15,-3.85,.26,2],[4.4,-11.5,.7,0],[-5.2,-15.5,.95,2],[7.5,-24,1.05,3],[-9.5,-30,1.25,1],[-1.8,-11,.32,3],[3.4,-17,.4,0],[-6.8,-10.5,.45,1],[10,-38,1.4,2],[-15,-48,1.6,0],[-6.2,-5.2,1,3],[-8.8,-7.5,.7,0],[-12,-13,1.3,2],[-19,-22,1.6,1],[-28,-40,2.2,3],[6.8,-5,.9,2],[9.5,-8.5,.65,3],[13,-14,1.2,0],[21,-26,1.7,1],[30,-44,2.3,2],[5.6,-3.6,.38,1],[-4.8,-3.5,.42,0]];function qd(t,e,n=.55){const i=new Zc(1,t),r=i.attributes.position,s=new ee;for(let o=0;o<r.count;o++){s.fromBufferAttribute(r,o);const a=e*13.7;let l=1+.32*ql(s.x*1.2+a,s.y*1.2,s.z*1.2-a)+.14*ql(s.x*2.9,s.y*2.9+a,s.z*2.9)+.05*ql(s.x*7-a,s.y*7,s.z*7);l=l*.82+Math.round(l*4)/4*.18,s.multiplyScalar(l),s.y*=n,s.y<-.18&&(s.y=-.18+(s.y+.18)*.25),r.setXYZ(o,s.x,s.y,s.z)}return i.computeVertexNormals(),i}function Yd(t){return new Bt({uniforms:Object.assign({},t,{uBase:{value:new et(15130056)},uShade:{value:new et(1581097)},uFar:{value:new et(14538435)}}),vertexShader:lm,fragmentShader:Ob})}function Gb({uniforms:t,rand:e,shadow:n}){const i=new hr,r=Hb.map(_=>({x:_[0],z:_[1],s:_[2],v:_[3],big:!0}));let s=0;for(;r.length<(to?1300:2100)&&s++<3e4;){const _=-4-Math.pow(e(),.9)*260,m=(e()*2-1)*(Math.abs(_)*1.25+7);if(_>-8&&_<-3.5&&m>-1.3&&m<3.4)continue;const d=(.05+Math.pow(e(),3.4)*.5)*(1+Math.abs(_)/90);r.push({x:m,z:_,s:d,v:Math.floor(e()*4),big:!1})}const o=new Tt,a=new cs,l=new lo;function u(_){l.set((e()-.5)*.25,e()*6.28,(e()-.5)*.25),a.setFromEuler(l);const m=new ee(_.s*(1+e()*.45),_.s*(.75+e()*.4),_.s*(.85+e()*.4));return o.clone().compose(new ee(_.x,Ec(_.x,_.z)-_.s*.1,_.z),a,m)}function c(_,m,d,y){const x=new $l(_,m,y.length),E=new $l(zb(_),d,y.length);y.forEach((P,C)=>{const R=u(P);x.setMatrixAt(C,R),E.setMatrixAt(C,R)}),i.add(x,E)}const f=Yd(t),p=$d(.0021);[0,1,2,3].map(_=>qd(3,_+1,.58)).forEach((_,m)=>{const d=r.filter(y=>y.big&&y.v===m);d.length&&c(_,f,p,d)}),c(qd(1,7,.5),Yd(t),$d(.0015),r.filter(_=>!_.big));const h=new $l(n.geometry,n.material,r.length),v=Math.atan2(n.dir.x,n.dir.y);return r.forEach((_,m)=>{const d=_.s*2.9,y=_.s*1.75,x=_.x+n.dir.x*_.s*.75,E=_.z+n.dir.y*_.s*.75;a.setFromAxisAngle(new ee(0,1,0),v),h.setMatrixAt(m,o.clone().compose(new ee(x,Ec(x,E)+.02,E),a,new ee(y,1,d)))}),i.add(h),i}const Vb=`
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
`,kb=`varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying vec3 vP;
    void main(){ vUv = uv; vP = normalize(position); vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * wp; }`,Wb=ds+Vb+`
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
    }`,Xb="varying vec3 vNV; varying vec3 vNW; void main(){ vNV = normalize(normalMatrix * normal); vNW = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",$b=`uniform vec3 uLe; varying vec3 vNV; varying vec3 vNW;
    void main(){ float i = pow(clamp(0.66 - dot(vNV, vec3(0.0,0.0,1.0)), 0.0, 1.0), 5.0) * 7.0;
      i *= smoothstep(-0.25, 0.5, dot(-vNW, uLe));
      gl_FragColor = vec4(vec3(0.16, 0.52, 0.98) * i, 1.0); }`,cm=1100,qb=19.6*Math.PI/180,jd=27.2*Math.PI/180,Kd=cm*Math.sin(qb),Zd=22*Math.PI/180;function Yb({uniforms:t,textures:e}){const n=Gn.clone().add(new ee(.012,Math.sin(jd),-Math.cos(jd)).normalize().multiplyScalar(cm)),r={value:Gn.clone().sub(n).normalize().clone().applyAxisAngle(new ee(1,0,0),.8).applyAxisAngle(new ee(0,1,0),-.12).normalize()},s=new Vt(new Ea(Kd,256,160),new Bt({uniforms:Object.assign({},t,{uLe:r,tBRC:{value:e.brc},tDay:{value:e.day},uTex:{value:new st(1/4096,1/2048)}}),vertexShader:kb,fragmentShader:Wb}));s.position.copy(n),s.rotation.set(.08,-Math.PI/2-Zd,.12),s.visible=!1;const o=new Vt(new Ea(Kd*1.025,120,80),new Bt({uniforms:{uLe:r},side:Qt,transparent:!0,blending:_a,depthWrite:!1,vertexShader:Xb,fragmentShader:$b}));return o.visible=!1,o.position.copy(n),{earth:s,atmosphere:o,show(){s.visible=o.visible=!0},update(a){s.rotation.y=-Math.PI/2-Zd+a*.0012}}}const jb=`attribute float aS; attribute float aP; uniform float uTime; uniform float uDPR; varying float vA;
      void main(){ vA = 0.6 + 0.4 * sin(uTime * (0.7 + aP * 0.3) + aP * 10.0); gl_PointSize = aS * uDPR; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Kb="varying float vA; void main(){ if (length(gl_PointCoord - 0.5) > 0.5) discard; gl_FragColor = vec4(vec3(0.95, 0.93, 0.86) * vA, 1.0); }",Zb=`attribute float aS; uniform float uTime; uniform float uDPR; varying float vA;
      void main(){ vec3 p = position; p.x = mod(p.x + uTime * 0.12 * (0.3 + aS) + 8.0, 16.0) - 8.0; p.y += sin(uTime * 0.3 + aS * 30.0) * 0.15;
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = 0.18 + 0.3 * aS; gl_PointSize = (1.2 + aS * 2.0) * uDPR * (6.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,Jb="varying float vA; void main(){ if (length(gl_PointCoord - 0.5) > 0.5) discard; gl_FragColor = vec4(vec3(0.95, 0.9, 0.78) * vA, 1.0); }";function Qb({uniforms:t,rand:e}){const i=new Float32Array(24e3),r=new Float32Array(8e3),s=new Float32Array(8e3);for(let a=0;a<8e3;a++){const l=(e()-.5)*3.4,u=.02+e()*.9,c=Math.sqrt(1-u*u);i.set([Math.sin(l)*c*3e3,u*3e3,-Math.cos(l)*c*3e3],a*3),r[a]=Math.pow(e(),7)*2.6+.7,s[a]=e()*6.28}const o=new Ln;return o.setAttribute("position",new kt(i,3)),o.setAttribute("aS",new kt(r,1)),o.setAttribute("aP",new kt(s,1)),new tm(o,new Bt({uniforms:{uTime:t.uTime,uDPR:{value:Oi}},transparent:!0,depthWrite:!1,vertexShader:jb,fragmentShader:Kb}))}function eT({uniforms:t,rand:e}){const i=new Float32Array(780),r=new Float32Array(260);for(let o=0;o<260;o++)i.set([(e()-.5)*16,e()*3.2,-3-e()*22],o*3),r[o]=e();const s=new Ln;return s.setAttribute("position",new kt(i,3)),s.setAttribute("aS",new kt(r,1)),new tm(s,new Bt({uniforms:{uTime:t.uTime,uDPR:{value:Oi}},transparent:!0,depthWrite:!1,blending:_a,vertexShader:Zb,fragmentShader:Jb}))}const um="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",tT=ds+`uniform sampler2D map; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(map, vUv);
        if (c.a < 0.04) discard;
        float lum = dot(c.rgb, vec3(0.3, 0.59, 0.11));
        float ink = halftone(smoothstep(0.55, 0.12, lum) * 0.5, uDot, 0.7854);
        c.rgb = mix(c.rgb, c.rgb * 0.55, ink * 0.35);
        gl_FragColor = vec4(c.rgb, c.a);
      }`,nT=ds+`uniform sampler2D map; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(map, vUv);
        if (c.a < 0.03) discard;
        float lum = dot(c.rgb, vec3(0.3, 0.59, 0.11));
        float ink = halftone(smoothstep(0.55, 0.1, lum) * 0.5, uDot * 0.8, 0.7854);
        c.rgb = mix(c.rgb, c.rgb * 0.55, ink * 0.3);
        gl_FragColor = vec4(c.rgb, c.a);
      }`,iT=740/417,rT=6/417,Jd={cx:.615,bottom:.885,width:.79},Qd={cx:.5,bottom:.84,width:.9};function sT({uniforms:t,shadow:e}){const n=new hr,i=new Vt(e.geometry,e.material.clone());i.material.uniforms=Object.assign({},e.material.uniforms,{uCol:{value:new et(1053722)}});const r={w:1,h:1};let s=null;return{card:n,shadow:i,place(o){sm(o);const a=o.blend,l={};for(const _ of["cx","bottom","width"])l[_]=a===1?Jd[_]:Qd[_]+(Jd[_]-Qd[_])*a;const u=om(o,l.cx,l.bottom),c=Gn.clone().addScaledVector(u,-Gn.y/u.y),f=l.width*2*am(o,-c.z),p=f/iT;r.w=f,r.h=p,n.position.set(c.x,-p*rT,c.z),s&&s.scale.set(f,p,1);const h=new st(-.56,-.83).normalize(),v=new st(c.x,c.z).addScaledVector(h,f*.2).addScaledVector(e.dir,f*.07);i.position.set(v.x,.03,v.y),i.rotation.y=Math.atan2(h.x,h.y),i.scale.set(f*.5,1,f*.92)},setTexture(o){s=new Vt(new Yi(1,1).translate(0,.5,0),new Bt({uniforms:Object.assign({},t,{map:{value:o}}),transparent:!0,vertexShader:um,fragmentShader:tT})),s.renderOrder=2,s.scale.set(r.w,r.h,1),n.add(s)},faceCamera(o){n.rotation.y=Math.atan2(o.position.x-n.position.x,o.position.z-n.position.z)}}}const Ko={poster:{x:.855,y:.35,w:.13},phone:{x:.83,y:.41,w:.18}},oT=380,aT=[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]];function lT({uniforms:t}){const e=new hr,n=new ee,i=new ee,r=new ee,s={x0:0,y0:0,x1:0,y1:0};let o=null,a=1300/656,l=1;return{root:e,get loaded(){return!!o},place(u){sm(u);const c=u.blend,f={};for(const v of["x","y","w"])f[v]=c===1?Ko.poster[v]:Ko.phone[v]+(Ko.poster[v]-Ko.phone[v])*c;n.copy(Gn).addScaledVector(om(u,f.x,f.y),oT);const p=new ee(0,0,-1).applyQuaternion(u.camera.quaternion),h=n.clone().sub(Gn).dot(p);l=f.w*2*am(u,h),o&&o.scale.set(l,l/a,1)},setTexture(u){a=u.image.width/u.image.height,o=new Vt(new Yi(1,1),new Bt({uniforms:Object.assign({},t,{map:{value:u}}),transparent:!0,depthWrite:!1,vertexShader:um,fragmentShader:nT})),o.renderOrder=3,o.scale.set(l,l/a,1),e.add(o)},update(u,c){o&&(o.position.copy(n).add(i.set(Math.sin(u*.05)*l*.12,Math.sin(u*.09+1)*l*.05,0)),o.quaternion.copy(c.quaternion),o.rotateZ(Math.sin(u*.07)*.035))},screenRect(u){if(!o)return null;u.camera.updateMatrixWorld(),o.updateMatrixWorld(),s.x0=s.y0=1e9,s.x1=s.y1=-1e9;for(const[c,f]of aT){const p=r.set(c,f,0).applyMatrix4(o.matrixWorld).project(u.camera),h=(p.x+1)/2*u.size.w,v=(1-p.y)/2*u.size.h;s.x0=Math.min(s.x0,h),s.x1=Math.max(s.x1,h),s.y0=Math.min(s.y0,v),s.y1=Math.max(s.y1,v)}return s}}}const cT=""+new URL("earth_brc-BBkBGQvf.jpg",import.meta.url).href,uT=""+new URL("earth_day-DkcerPt2.jpg",import.meta.url).href,fT=""+new URL("car-rvOrZ8Ot.png",import.meta.url).href,dT=""+new URL("satellite-C2RYf-lH.webp",import.meta.url).href,hT=new ee(0,1,0);function pT(t,{onReady:e,onFrame:n,wantSatRect:i}={}){const r=Sb(t),s=Eb(),o=bb(743),a=new em,l=Tb(),{camera:u}=l,c=new yb,f=r.capabilities.getMaxAnisotropy();let p=0,h=!1;const v=()=>{++p>=3&&!h&&(d.show(),e==null||e())},_=V=>c.load(V,I=>{I.anisotropy=f,v()},void 0,v),m=Ib(s);a.add(Nb(s)),a.add(Gb({uniforms:s,rand:o,shadow:m}));const d=Yb({uniforms:s,textures:{brc:_(cT),day:_(uT)}});a.add(d.earth,d.atmosphere),a.add(Qb({uniforms:s,rand:o})),a.add(eT({uniforms:s,rand:o}));const y=sT({uniforms:s,shadow:m});a.add(y.card,y.shadow),c.load(fT,V=>{V.anisotropy=f,V.minFilter=yr,y.setTexture(V),v()},void 0,v);const x=lT({uniforms:s});a.add(x.root),c.load(dT,V=>{V.anisotropy=f,V.minFilter=yr,x.setTexture(V)});const E=Lb(s),P=wb(t),C=P.state;function R(V,I){Ab(l,V,I),y.place(l),x.place(l),r.setSize(V,I,!1),E.setSize(V,I)}const q=new Mb,T={sx:0,sy:0,satRect:null};let D=0,Y=!0;function ie(){D=requestAnimationFrame(ie);const V=Math.min(q.getDelta(),.05),I=q.elapsedTime;s.uTime.value=I,P.update(V),u.position.set(Gn.x+C.sx*.32+Math.sin(I*.23)*.04,Gn.y-C.sy*.12+Math.sin(I*.31)*.02,Gn.z),u.position.applyAxisAngle(hT,C.yaw*.6),u.rotation.set(l.pitch+C.pit-C.sy*.006,C.yaw-C.sx*.012,0,"YXZ"),x.update(I,u),y.faceCamera(u),d.update(I),T.sx=C.sx,T.sy=C.sy,T.satRect=x.loaded&&(i!=null&&i())?x.screenRect(l):null,n==null||n(T),Y&&E.render(r,a,u)}return{resize:R,start(){D||ie()},setVisible(V){Y=V},dispose(){h=!0,cancelAnimationFrame(D),D=0,P.dispose(),a.traverse(V=>{var I,H;if((I=V.geometry)==null||I.dispose(),V.material){for(const B of Object.values(V.material.uniforms??{}))(H=B.value)!=null&&H.isTexture&&B.value.dispose();V.material.dispose()}}),E.dispose(),r.dispose()}}}const mT={class:"credit"},gT=["href"],_T={key:0,id:"err"},vT={__name:"MoonStage",setup(t){const{aboutOpen:e,setAbout:n}=as(),i=ln(null),r=ln(null),s=ln(null),o=ln(null),a=ln(!1),l=ln(!1);let u=null,c=null,f=0,p=null;function h(){e_();const v=Math.max(1,i.value.clientWidth),_=Math.max(1,i.value.clientHeight);t_(v,_),u==null||u.resize(v,_),!ga.side&&e.value&&n(!1)}return ro(()=>{p=n_();try{u=pT(r.value,{onReady:()=>{a.value=!0},wantSatRect:()=>ga.hoverable,onFrame:({sx:v,sy:_,satRect:m})=>{var d,y;(d=s.value)==null||d.setParallax(v,_),m&&((y=o.value)==null||y.update(m))}})}catch(v){l.value=!0,console.error(v)}addEventListener("resize",h),h(),u==null||u.start(),c=new IntersectionObserver(([v])=>u==null?void 0:u.setVisible(v.isIntersecting)),c.observe(i.value),f=setTimeout(()=>{a.value=!0},4e3)}),Ia(()=>{removeEventListener("resize",h),clearTimeout(f),c==null||c.disconnect(),p==null||p(),u==null||u.dispose()}),(v,_)=>(yt(),Et("div",{id:"stage",ref_key:"stageEl",ref:i},[Ce("canvas",{id:"gl",ref_key:"canvasEl",ref:r},null,512),Lt(N_,{ref_key:"heroRef",ref:s},null,512),Lt(av),Ce("div",mT,[Kt(at(qe(yn).credit.label)+" ",1),Ce("a",{href:qe(yn).credit.url},at(qe(yn).credit.name),9,gT),Kt(" "+at(qe(yn).credit.license),1)]),Ce("div",{id:"veil",class:os({lifted:a.value})},null,2),l.value?(yt(),Et("div",_T,"這個瀏覽器無法啟用 WebGL，3D 場景無法顯示。")):ip("",!0),Lt(z_,{ref_key:"lockRef",ref:o},null,512),Lt(k_)],512))}},xT=Mi(vT,[["__scopeId","data-v-3b30bbdb"]]),eh=""+new URL("shop-map-Dh3NVWj1.webp",import.meta.url).href,yT={class:"ab-inner"},MT={id:"ab-title",class:"ab-name"},ST={class:"ab-sub"},ET={class:"ab-text"},bT={class:"ab-lead"},TT={class:"ab-points"},AT={class:"ab-card"},wT={class:"ab-info"},RT={class:"ab-map"},CT=["src","alt"],LT={__name:"AboutPanel",setup(t){const{els:e,closeAbout:n,openLightbox:i}=as(),r=o=>String(o).padStart(2,"0");function s(o){i({src:eh,alt:on.map.alt,caption:`<b>MAP</b>${on.map.caption}`,triggerEl:o.currentTarget})}return(o,a)=>(yt(),Et("aside",{id:"about",ref:l=>qe(e).about=l,"aria-labelledby":"ab-title"},[Ce("button",{ref:l=>qe(e).aboutClose=l,type:"button",class:"ab-close","aria-label":"本店紹介を閉じる",onClick:a[0]||(a[0]=(...l)=>qe(n)&&qe(n)(...l))},"× CLOSE",512),Ce("div",yT,[a[4]||(a[4]=Ce("div",{class:"ab-kicker"},[Ce("span",null,"ABOUT THE SHOP"),Ce("span",null,"本店紹介")],-1)),Ce("h2",MT,[Kt(at(qe(on).name),1),a[1]||(a[1]=Ce("b",null,".",-1))]),Ce("div",ST,[Kt(at(qe(on).nameEn)+" — ",1),Ce("em",null,at(qe(on).established),1)]),Ce("div",ET,[Ce("p",bT,at(qe(on).lead),1),Ce("p",null,at(qe(on).description),1),Ce("ol",TT,[(yt(!0),Et(Ct,null,qs(qe(on).points,(l,u)=>(yt(),Et("li",{key:u},[Ce("span",null,at(r(u+1)),1),Kt(at(l),1)]))),128))])]),Ce("div",AT,[Ce("dl",wT,[(yt(!0),Et(Ct,null,qs(qe(on).info,l=>(yt(),Et(Ct,{key:l.label},[Ce("dt",null,at(l.label),1),Ce("dd",null,at(l.value),1)],64))),128))]),Ce("figure",RT,[Ce("button",{type:"button",class:"ab-zoom","aria-label":"地図を拡大",onClick:s},[Ce("img",{src:qe(eh),alt:qe(on).map.alt,loading:"lazy",width:"1500",height:"778"},null,8,CT),a[2]||(a[2]=Ce("span",null,"拡大 ⤢",-1))]),Ce("figcaption",null,[a[3]||(a[3]=Ce("b",null,"MAP",-1)),Kt(" "+at(qe(on).map.caption),1)])])])])],512))}},PT=Mi(LT,[["__scopeId","data-v-a9533f27"]]);function DT(){const{menuOpen:t,aboutOpen:e,lightboxOpen:n,els:i,setMenu:r,closeAbout:s}=as();function o(a){if(!n.value){if(a.key==="Escape"){t.value?r(!1):e.value&&s();return}if(a.key==="Tab"&&t.value&&i.menu){const l=[i.menuBtn,...i.menu.querySelectorAll("a")],u=l.indexOf(document.activeElement);a.shiftKey&&u<=0?(a.preventDefault(),l[l.length-1].focus()):!a.shiftKey&&u===l.length-1&&(a.preventDefault(),l[0].focus())}}}ro(()=>addEventListener("keydown",o)),Ia(()=>removeEventListener("keydown",o))}const IT={__name:"App",setup(t){return DT(),(e,n)=>(yt(),Et(Ct,null,[Lt(A_),Lt(xT),Lt(PT)],64))}};F0(IT).mount("#app");

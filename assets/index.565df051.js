import{s as _s,u as hn,c as M,r as U,n as bu,d as N,i as Fe,h as Re,p as Ie,a as A,w as vt,b as f,e as l,f as c,g as p,j as G,k as _,o as d,l as h,m as ge,q as ve,t as Hn,F as k,v as jn,x as Q,y as je,z as j,A as L,B as ie,C as W,D as w,E as ke,T as rn,G as Un,H as Wn,I as J,J as Gn,K as hs,L as Te,M as gs,N as yu,O as vs,P as bn,Q as $n,R as Ue,S as Es,U as bs,V as ys}from"./@element-plus/icons-vue.e5590bfa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))t(u);new MutationObserver(u=>{for(const s of u)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function r(u){const s={};return u.integrity&&(s.integrity=u.integrity),u.referrerpolicy&&(s.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?s.credentials="include":u.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(u){if(u.ep)return;u.ep=!0;const s=r(u);fetch(u.href,s)}})();/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Je=typeof window<"u";function Cs(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ue=Object.assign;function nt(e,n){const r={};for(const t in n){const u=n[t];r[t]=De(u)?u.map(e):e(u)}return r}const gn=()=>{},De=Array.isArray,$s=/\/$/,Fs=e=>e.replace($s,"");function tt(e,n,r="/"){let t,u={},s="",o="";const a=n.indexOf("#");let i=n.indexOf("?");return a<i&&a>=0&&(i=-1),i>-1&&(t=n.slice(0,i),s=n.slice(i+1,a>-1?a:n.length),u=e(s)),a>-1&&(t=t||n.slice(0,a),o=n.slice(a,n.length)),t=As(t!=null?t:n,r),{fullPath:t+(s&&"?")+s+o,path:t,query:u,hash:o}}function ks(e,n){const r=n.query?e(n.query):"";return n.path+(r&&"?")+r+(n.hash||"")}function qt(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Bs(e,n,r){const t=n.matched.length-1,u=r.matched.length-1;return t>-1&&t===u&&nn(n.matched[t],r.matched[u])&&Cu(n.params,r.params)&&e(n.query)===e(r.query)&&n.hash===r.hash}function nn(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Cu(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const r in e)if(!Ds(e[r],n[r]))return!1;return!0}function Ds(e,n){return De(e)?wt(e,n):De(n)?wt(n,e):e===n}function wt(e,n){return De(n)?e.length===n.length&&e.every((r,t)=>r===n[t]):e.length===1&&e[0]===n}function As(e,n){if(e.startsWith("/"))return e;if(!e)return n;const r=n.split("/"),t=e.split("/");let u=r.length-1,s,o;for(s=0;s<t.length;s++)if(o=t[s],o!==".")if(o==="..")u>1&&u--;else break;return r.slice(0,u).join("/")+"/"+t.slice(s-(s===t.length?1:0)).join("/")}var yn;(function(e){e.pop="pop",e.push="push"})(yn||(yn={}));var vn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(vn||(vn={}));function xs(e){if(!e)if(Je){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Fs(e)}const qs=/^[^#]+#/;function ws(e,n){return e.replace(qs,"#")+n}function Is(e,n){const r=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:n.behavior,left:t.left-r.left-(n.left||0),top:t.top-r.top-(n.top||0)}}const Qn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ts(e){let n;if("el"in e){const r=e.el,t=typeof r=="string"&&r.startsWith("#"),u=typeof r=="string"?t?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!u)return;n=Is(u,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function It(e,n){return(history.state?history.state.position-n:-1)+e}const it=new Map;function Ms(e,n){it.set(e,n)}function Ss(e){const n=it.get(e);return it.delete(e),n}let Vs=()=>location.protocol+"//"+location.host;function $u(e,n){const{pathname:r,search:t,hash:u}=n,s=e.indexOf("#");if(s>-1){let a=u.includes(e.slice(s))?e.slice(s).length:1,i=u.slice(a);return i[0]!=="/"&&(i="/"+i),qt(i,"")}return qt(r,e)+t+u}function Rs(e,n,r,t){let u=[],s=[],o=null;const a=({state:y})=>{const $=$u(e,location),I=r.value,q=n.value;let C=0;if(y){if(r.value=$,n.value=y,o&&o===I){o=null;return}C=q?y.position-q.position:0}else t($);u.forEach(E=>{E(r.value,I,{delta:C,type:yn.pop,direction:C?C>0?vn.forward:vn.back:vn.unknown})})};function i(){o=r.value}function g(y){u.push(y);const $=()=>{const I=u.indexOf(y);I>-1&&u.splice(I,1)};return s.push($),$}function m(){const{history:y}=window;!y.state||y.replaceState(ue({},y.state,{scroll:Qn()}),"")}function b(){for(const y of s)y();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",m)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",m),{pauseListeners:i,listen:g,destroy:b}}function Tt(e,n,r,t=!1,u=!1){return{back:e,current:n,forward:r,replaced:t,position:window.history.length,scroll:u?Qn():null}}function Ps(e){const{history:n,location:r}=window,t={value:$u(e,r)},u={value:n.state};u.value||s(t.value,{back:null,current:t.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function s(i,g,m){const b=e.indexOf("#"),y=b>-1?(r.host&&document.querySelector("base")?e:e.slice(b))+i:Vs()+e+i;try{n[m?"replaceState":"pushState"](g,"",y),u.value=g}catch($){console.error($),r[m?"replace":"assign"](y)}}function o(i,g){const m=ue({},n.state,Tt(u.value.back,i,u.value.forward,!0),g,{position:u.value.position});s(i,m,!0),t.value=i}function a(i,g){const m=ue({},u.value,n.state,{forward:i,scroll:Qn()});s(m.current,m,!0);const b=ue({},Tt(t.value,i,null),{position:m.position+1},g);s(i,b,!1),t.value=i}return{location:t,state:u,push:a,replace:o}}function Ls(e){e=xs(e);const n=Ps(e),r=Rs(e,n.state,n.location,n.replace);function t(s,o=!0){o||r.pauseListeners(),history.go(s)}const u=ue({location:"",base:e,go:t,createHref:ws.bind(null,e)},n,r);return Object.defineProperty(u,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(u,"state",{enumerable:!0,get:()=>n.state.value}),u}function Os(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Ls(e)}function Gs(e){return typeof e=="string"||e&&typeof e=="object"}function Fu(e){return typeof e=="string"||typeof e=="symbol"}const Pe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ku=Symbol("");var Mt;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Mt||(Mt={}));function tn(e,n){return ue(new Error,{type:e,[ku]:!0},n)}function Ve(e,n){return e instanceof Error&&ku in e&&(n==null||!!(e.type&n))}const St="[^/]+?",Ns={sensitive:!1,strict:!1,start:!0,end:!0},zs=/[.+*?^${}()[\]/\\]/g;function Hs(e,n){const r=ue({},Ns,n),t=[];let u=r.start?"^":"";const s=[];for(const g of e){const m=g.length?[]:[90];r.strict&&!g.length&&(u+="/");for(let b=0;b<g.length;b++){const y=g[b];let $=40+(r.sensitive?.25:0);if(y.type===0)b||(u+="/"),u+=y.value.replace(zs,"\\$&"),$+=40;else if(y.type===1){const{value:I,repeatable:q,optional:C,regexp:E}=y;s.push({name:I,repeatable:q,optional:C});const D=E||St;if(D!==St){$+=10;try{new RegExp(`(${D})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${I}" (${D}): `+x.message)}}let F=q?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;b||(F=C&&g.length<2?`(?:/${F})`:"/"+F),C&&(F+="?"),u+=F,$+=20,C&&($+=-8),q&&($+=-20),D===".*"&&($+=-50)}m.push($)}t.push(m)}if(r.strict&&r.end){const g=t.length-1;t[g][t[g].length-1]+=.7000000000000001}r.strict||(u+="/?"),r.end?u+="$":r.strict&&(u+="(?:/|$)");const o=new RegExp(u,r.sensitive?"":"i");function a(g){const m=g.match(o),b={};if(!m)return null;for(let y=1;y<m.length;y++){const $=m[y]||"",I=s[y-1];b[I.name]=$&&I.repeatable?$.split("/"):$}return b}function i(g){let m="",b=!1;for(const y of e){(!b||!m.endsWith("/"))&&(m+="/"),b=!1;for(const $ of y)if($.type===0)m+=$.value;else if($.type===1){const{value:I,repeatable:q,optional:C}=$,E=I in g?g[I]:"";if(De(E)&&!q)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const D=De(E)?E.join("/"):E;if(!D)if(C)y.length<2&&(m.endsWith("/")?m=m.slice(0,-1):b=!0);else throw new Error(`Missing required param "${I}"`);m+=D}}return m||"/"}return{re:o,score:t,keys:s,parse:a,stringify:i}}function js(e,n){let r=0;for(;r<e.length&&r<n.length;){const t=n[r]-e[r];if(t)return t;r++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Us(e,n){let r=0;const t=e.score,u=n.score;for(;r<t.length&&r<u.length;){const s=js(t[r],u[r]);if(s)return s;r++}if(Math.abs(u.length-t.length)===1){if(Vt(t))return 1;if(Vt(u))return-1}return u.length-t.length}function Vt(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Ws={type:0,value:""},Qs=/[a-zA-Z0-9_]/;function Ks(e){if(!e)return[[]];if(e==="/")return[[Ws]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n($){throw new Error(`ERR (${r})/"${g}": ${$}`)}let r=0,t=r;const u=[];let s;function o(){s&&u.push(s),s=[]}let a=0,i,g="",m="";function b(){!g||(r===0?s.push({type:0,value:g}):r===1||r===2||r===3?(s.length>1&&(i==="*"||i==="+")&&n(`A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:g,regexp:m,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):n("Invalid state to consume buffer"),g="")}function y(){g+=i}for(;a<e.length;){if(i=e[a++],i==="\\"&&r!==2){t=r,r=4;continue}switch(r){case 0:i==="/"?(g&&b(),o()):i===":"?(b(),r=1):y();break;case 4:y(),r=t;break;case 1:i==="("?r=2:Qs.test(i)?y():(b(),r=0,i!=="*"&&i!=="?"&&i!=="+"&&a--);break;case 2:i===")"?m[m.length-1]=="\\"?m=m.slice(0,-1)+i:r=3:m+=i;break;case 3:b(),r=0,i!=="*"&&i!=="?"&&i!=="+"&&a--,m="";break;default:n("Unknown state");break}}return r===2&&n(`Unfinished custom RegExp for param "${g}"`),b(),o(),u}function Zs(e,n,r){const t=Hs(Ks(e.path),r),u=ue(t,{record:e,parent:n,children:[],alias:[]});return n&&!u.record.aliasOf==!n.record.aliasOf&&n.children.push(u),u}function Ys(e,n){const r=[],t=new Map;n=Lt({strict:!1,end:!0,sensitive:!1},n);function u(m){return t.get(m)}function s(m,b,y){const $=!y,I=Xs(m);I.aliasOf=y&&y.record;const q=Lt(n,m),C=[I];if("alias"in m){const F=typeof m.alias=="string"?[m.alias]:m.alias;for(const x of F)C.push(ue({},I,{components:y?y.record.components:I.components,path:x,aliasOf:y?y.record:I}))}let E,D;for(const F of C){const{path:x}=F;if(b&&x[0]!=="/"){const R=b.record.path,O=R[R.length-1]==="/"?"":"/";F.path=b.record.path+(x&&O+x)}if(E=Zs(F,b,q),y?y.alias.push(E):(D=D||E,D!==E&&D.alias.push(E),$&&m.name&&!Pt(E)&&o(m.name)),I.children){const R=I.children;for(let O=0;O<R.length;O++)s(R[O],E,y&&y.children[O])}y=y||E,i(E)}return D?()=>{o(D)}:gn}function o(m){if(Fu(m)){const b=t.get(m);b&&(t.delete(m),r.splice(r.indexOf(b),1),b.children.forEach(o),b.alias.forEach(o))}else{const b=r.indexOf(m);b>-1&&(r.splice(b,1),m.record.name&&t.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function a(){return r}function i(m){let b=0;for(;b<r.length&&Us(m,r[b])>=0&&(m.record.path!==r[b].record.path||!Bu(m,r[b]));)b++;r.splice(b,0,m),m.record.name&&!Pt(m)&&t.set(m.record.name,m)}function g(m,b){let y,$={},I,q;if("name"in m&&m.name){if(y=t.get(m.name),!y)throw tn(1,{location:m});q=y.record.name,$=ue(Rt(b.params,y.keys.filter(D=>!D.optional).map(D=>D.name)),m.params&&Rt(m.params,y.keys.map(D=>D.name))),I=y.stringify($)}else if("path"in m)I=m.path,y=r.find(D=>D.re.test(I)),y&&($=y.parse(I),q=y.record.name);else{if(y=b.name?t.get(b.name):r.find(D=>D.re.test(b.path)),!y)throw tn(1,{location:m,currentLocation:b});q=y.record.name,$=ue({},b.params,m.params),I=y.stringify($)}const C=[];let E=y;for(;E;)C.unshift(E.record),E=E.parent;return{name:q,path:I,params:$,matched:C,meta:ei(C)}}return e.forEach(m=>s(m)),{addRoute:s,resolve:g,removeRoute:o,getRoutes:a,getRecordMatcher:u}}function Rt(e,n){const r={};for(const t of n)t in e&&(r[t]=e[t]);return r}function Xs(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Js(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Js(e){const n={},r=e.props||!1;if("component"in e)n.default=r;else for(const t in e.components)n[t]=typeof r=="boolean"?r:r[t];return n}function Pt(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ei(e){return e.reduce((n,r)=>ue(n,r.meta),{})}function Lt(e,n){const r={};for(const t in e)r[t]=t in n?n[t]:e[t];return r}function Bu(e,n){return n.children.some(r=>r===e||Bu(e,r))}const Du=/#/g,ni=/&/g,ti=/\//g,oi=/=/g,ri=/\?/g,Au=/\+/g,ui=/%5B/g,ai=/%5D/g,xu=/%5E/g,li=/%60/g,qu=/%7B/g,si=/%7C/g,wu=/%7D/g,ii=/%20/g;function Et(e){return encodeURI(""+e).replace(si,"|").replace(ui,"[").replace(ai,"]")}function ci(e){return Et(e).replace(qu,"{").replace(wu,"}").replace(xu,"^")}function ct(e){return Et(e).replace(Au,"%2B").replace(ii,"+").replace(Du,"%23").replace(ni,"%26").replace(li,"`").replace(qu,"{").replace(wu,"}").replace(xu,"^")}function di(e){return ct(e).replace(oi,"%3D")}function pi(e){return Et(e).replace(Du,"%23").replace(ri,"%3F")}function mi(e){return e==null?"":pi(e).replace(ti,"%2F")}function Nn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function fi(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let u=0;u<t.length;++u){const s=t[u].replace(Au," "),o=s.indexOf("="),a=Nn(o<0?s:s.slice(0,o)),i=o<0?null:Nn(s.slice(o+1));if(a in n){let g=n[a];De(g)||(g=n[a]=[g]),g.push(i)}else n[a]=i}return n}function Ot(e){let n="";for(let r in e){const t=e[r];if(r=di(r),t==null){t!==void 0&&(n+=(n.length?"&":"")+r);continue}(De(t)?t.map(s=>s&&ct(s)):[t&&ct(t)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+r,s!=null&&(n+="="+s))})}return n}function _i(e){const n={};for(const r in e){const t=e[r];t!==void 0&&(n[r]=De(t)?t.map(u=>u==null?null:""+u):t==null?t:""+t)}return n}const hi=Symbol(""),Gt=Symbol(""),bt=Symbol(""),Iu=Symbol(""),dt=Symbol("");function pn(){let e=[];function n(t){return e.push(t),()=>{const u=e.indexOf(t);u>-1&&e.splice(u,1)}}function r(){e=[]}return{add:n,list:()=>e,reset:r}}function Le(e,n,r,t,u){const s=t&&(t.enterCallbacks[u]=t.enterCallbacks[u]||[]);return()=>new Promise((o,a)=>{const i=b=>{b===!1?a(tn(4,{from:r,to:n})):b instanceof Error?a(b):Gs(b)?a(tn(2,{from:n,to:b})):(s&&t.enterCallbacks[u]===s&&typeof b=="function"&&s.push(b),o())},g=e.call(t&&t.instances[u],n,r,i);let m=Promise.resolve(g);e.length<3&&(m=m.then(i)),m.catch(b=>a(b))})}function ot(e,n,r,t){const u=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(n!=="beforeRouteEnter"&&!s.instances[o]))if(gi(a)){const g=(a.__vccOpts||a)[n];g&&u.push(Le(g,r,t,s,o))}else{let i=a();u.push(()=>i.then(g=>{if(!g)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const m=Cs(g)?g.default:g;s.components[o]=m;const y=(m.__vccOpts||m)[n];return y&&Le(y,r,t,s,o)()}))}}return u}function gi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Nt(e){const n=Fe(bt),r=Fe(Iu),t=M(()=>n.resolve(hn(e.to))),u=M(()=>{const{matched:i}=t.value,{length:g}=i,m=i[g-1],b=r.matched;if(!m||!b.length)return-1;const y=b.findIndex(nn.bind(null,m));if(y>-1)return y;const $=zt(i[g-2]);return g>1&&zt(m)===$&&b[b.length-1].path!==$?b.findIndex(nn.bind(null,i[g-2])):y}),s=M(()=>u.value>-1&&yi(r.params,t.value.params)),o=M(()=>u.value>-1&&u.value===r.matched.length-1&&Cu(r.params,t.value.params));function a(i={}){return bi(i)?n[hn(e.replace)?"replace":"push"](hn(e.to)).catch(gn):Promise.resolve()}return{route:t,href:M(()=>t.value.href),isActive:s,isExactActive:o,navigate:a}}const vi=N({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nt,setup(e,{slots:n}){const r=U(Nt(e)),{options:t}=Fe(bt),u=M(()=>({[Ht(e.activeClass,t.linkActiveClass,"router-link-active")]:r.isActive,[Ht(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const s=n.default&&n.default(r);return e.custom?s:Re("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:u.value},s)}}}),Ei=vi;function bi(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function yi(e,n){for(const r in n){const t=n[r],u=e[r];if(typeof t=="string"){if(t!==u)return!1}else if(!De(u)||u.length!==t.length||t.some((s,o)=>s!==u[o]))return!1}return!0}function zt(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ht=(e,n,r)=>e!=null?e:n!=null?n:r,Ci=N({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:r}){const t=Fe(dt),u=M(()=>e.route||t.value),s=Fe(Gt,0),o=M(()=>{let g=hn(s);const{matched:m}=u.value;let b;for(;(b=m[g])&&!b.components;)g++;return g}),a=M(()=>u.value.matched[o.value]);Ie(Gt,M(()=>o.value+1)),Ie(hi,a),Ie(dt,u);const i=A();return vt(()=>[i.value,a.value,e.name],([g,m,b],[y,$,I])=>{m&&(m.instances[b]=g,$&&$!==m&&g&&g===y&&(m.leaveGuards.size||(m.leaveGuards=$.leaveGuards),m.updateGuards.size||(m.updateGuards=$.updateGuards))),g&&m&&(!$||!nn(m,$)||!y)&&(m.enterCallbacks[b]||[]).forEach(q=>q(g))},{flush:"post"}),()=>{const g=u.value,m=e.name,b=a.value,y=b&&b.components[m];if(!y)return jt(r.default,{Component:y,route:g});const $=b.props[m],I=$?$===!0?g.params:typeof $=="function"?$(g):$:null,C=Re(y,ue({},I,n,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(b.instances[m]=null)},ref:i}));return jt(r.default,{Component:C,route:g})||C}}});function jt(e,n){if(!e)return null;const r=e(n);return r.length===1?r[0]:r}const $i=Ci;function Fi(e){const n=Ys(e.routes,e),r=e.parseQuery||fi,t=e.stringifyQuery||Ot,u=e.history,s=pn(),o=pn(),a=pn(),i=_s(Pe);let g=Pe;Je&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=nt.bind(null,B=>""+B),b=nt.bind(null,mi),y=nt.bind(null,Nn);function $(B,S){let T,H;return Fu(B)?(T=n.getRecordMatcher(B),H=S):H=B,n.addRoute(H,T)}function I(B){const S=n.getRecordMatcher(B);S&&n.removeRoute(S)}function q(){return n.getRoutes().map(B=>B.record)}function C(B){return!!n.getRecordMatcher(B)}function E(B,S){if(S=ue({},S||i.value),typeof B=="string"){const Z=tt(r,B,S.path),pe=n.resolve({path:Z.path},S),dn=u.createHref(Z.fullPath);return ue(Z,pe,{params:y(pe.params),hash:Nn(Z.hash),redirectedFrom:void 0,href:dn})}let T;if("path"in B)T=ue({},B,{path:tt(r,B.path,S.path).path});else{const Z=ue({},B.params);for(const pe in Z)Z[pe]==null&&delete Z[pe];T=ue({},B,{params:b(B.params)}),S.params=b(S.params)}const H=n.resolve(T,S),re=B.hash||"";H.params=m(y(H.params));const se=ks(t,ue({},B,{hash:ci(re),path:H.path})),Y=u.createHref(se);return ue({fullPath:se,hash:re,query:t===Ot?_i(B.query):B.query||{}},H,{redirectedFrom:void 0,href:Y})}function D(B){return typeof B=="string"?tt(r,B,i.value.path):ue({},B)}function F(B,S){if(g!==B)return tn(8,{from:S,to:B})}function x(B){return V(B)}function R(B){return x(ue(D(B),{replace:!0}))}function O(B){const S=B.matched[B.matched.length-1];if(S&&S.redirect){const{redirect:T}=S;let H=typeof T=="function"?T(B):T;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=D(H):{path:H},H.params={}),ue({query:B.query,hash:B.hash,params:"path"in H?{}:B.params},H)}}function V(B,S){const T=g=E(B),H=i.value,re=B.state,se=B.force,Y=B.replace===!0,Z=O(T);if(Z)return V(ue(D(Z),{state:typeof Z=="object"?ue({},re,Z.state):re,force:se,replace:Y}),S||T);const pe=T;pe.redirectedFrom=S;let dn;return!se&&Bs(t,H,T)&&(dn=tn(16,{to:pe,from:H}),Se(H,H,!0,!1)),(dn?Promise.resolve(dn):ae(pe,H)).catch(Ee=>Ve(Ee)?Ve(Ee,2)?Ee:$e(Ee):le(Ee,pe,H)).then(Ee=>{if(Ee){if(Ve(Ee,2))return V(ue({replace:Y},D(Ee.to),{state:typeof Ee.to=="object"?ue({},re,Ee.to.state):re,force:se}),S||pe)}else Ee=qe(pe,H,!0,Y,re);return he(pe,H,Ee),Ee})}function oe(B,S){const T=F(B,S);return T?Promise.reject(T):Promise.resolve()}function ae(B,S){let T;const[H,re,se]=ki(B,S);T=ot(H.reverse(),"beforeRouteLeave",B,S);for(const Z of H)Z.leaveGuards.forEach(pe=>{T.push(Le(pe,B,S))});const Y=oe.bind(null,B,S);return T.push(Y),Ze(T).then(()=>{T=[];for(const Z of s.list())T.push(Le(Z,B,S));return T.push(Y),Ze(T)}).then(()=>{T=ot(re,"beforeRouteUpdate",B,S);for(const Z of re)Z.updateGuards.forEach(pe=>{T.push(Le(pe,B,S))});return T.push(Y),Ze(T)}).then(()=>{T=[];for(const Z of B.matched)if(Z.beforeEnter&&!S.matched.includes(Z))if(De(Z.beforeEnter))for(const pe of Z.beforeEnter)T.push(Le(pe,B,S));else T.push(Le(Z.beforeEnter,B,S));return T.push(Y),Ze(T)}).then(()=>(B.matched.forEach(Z=>Z.enterCallbacks={}),T=ot(se,"beforeRouteEnter",B,S),T.push(Y),Ze(T))).then(()=>{T=[];for(const Z of o.list())T.push(Le(Z,B,S));return T.push(Y),Ze(T)}).catch(Z=>Ve(Z,8)?Z:Promise.reject(Z))}function he(B,S,T){for(const H of a.list())H(B,S,T)}function qe(B,S,T,H,re){const se=F(B,S);if(se)return se;const Y=S===Pe,Z=Je?history.state:{};T&&(H||Y?u.replace(B.fullPath,ue({scroll:Y&&Z&&Z.scroll},re)):u.push(B.fullPath,re)),i.value=B,Se(B,S,T,Y),$e()}let ce;function fe(){ce||(ce=u.listen((B,S,T)=>{if(!K.listening)return;const H=E(B),re=O(H);if(re){V(ue(re,{replace:!0}),H).catch(gn);return}g=H;const se=i.value;Je&&Ms(It(se.fullPath,T.delta),Qn()),ae(H,se).catch(Y=>Ve(Y,12)?Y:Ve(Y,2)?(V(Y.to,H).then(Z=>{Ve(Z,20)&&!T.delta&&T.type===yn.pop&&u.go(-1,!1)}).catch(gn),Promise.reject()):(T.delta&&u.go(-T.delta,!1),le(Y,H,se))).then(Y=>{Y=Y||qe(H,se,!1),Y&&(T.delta&&!Ve(Y,8)?u.go(-T.delta,!1):T.type===yn.pop&&Ve(Y,20)&&u.go(-1,!1)),he(H,se,Y)}).catch(gn)}))}let we=pn(),Ke=pn(),Ce;function le(B,S,T){$e(B);const H=Ke.list();return H.length?H.forEach(re=>re(B,S,T)):console.error(B),Promise.reject(B)}function _e(){return Ce&&i.value!==Pe?Promise.resolve():new Promise((B,S)=>{we.add([B,S])})}function $e(B){return Ce||(Ce=!B,fe(),we.list().forEach(([S,T])=>B?T(B):S()),we.reset()),B}function Se(B,S,T,H){const{scrollBehavior:re}=e;if(!Je||!re)return Promise.resolve();const se=!T&&Ss(It(B.fullPath,0))||(H||!T)&&history.state&&history.state.scroll||null;return bu().then(()=>re(B,S,se)).then(Y=>Y&&Ts(Y)).catch(Y=>le(Y,B,S))}const de=B=>u.go(B);let P;const z=new Set,K={currentRoute:i,listening:!0,addRoute:$,removeRoute:I,hasRoute:C,getRoutes:q,resolve:E,options:e,push:x,replace:R,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Ke.add,isReady:_e,install(B){const S=this;B.component("RouterLink",Ei),B.component("RouterView",$i),B.config.globalProperties.$router=S,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>hn(i)}),Je&&!P&&i.value===Pe&&(P=!0,x(u.location).catch(re=>{}));const T={};for(const re in Pe)T[re]=M(()=>i.value[re]);B.provide(bt,S),B.provide(Iu,U(T)),B.provide(dt,i);const H=B.unmount;z.add(B),B.unmount=function(){z.delete(B),z.size<1&&(g=Pe,ce&&ce(),ce=null,i.value=Pe,P=!1,Ce=!1),H()}}};return K}function Ze(e){return e.reduce((n,r)=>n.then(()=>r()),Promise.resolve())}function ki(e,n){const r=[],t=[],u=[],s=Math.max(n.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=n.matched[o];a&&(e.matched.find(g=>nn(g,a))?t.push(a):r.push(a));const i=e.matched[o];i&&(n.matched.find(g=>nn(g,i))||u.push(i))}return[r,t,u]}const Bi={name:"topNav",props:{toggleMenuButtonVisible:{type:Boolean,default:!1}},setup(){const e=Fe("menuVisible");return{toggleMenu:()=>{e.value=!e.value}}}};const v=(e,n)=>{const r=e.__vccOpts||e;for(const[t,u]of n)r[t]=u;return r},Tu=e=>(ge("data-v-49e73100"),e=e(),ve(),e),Di={class:"topNav"},Ai=Tu(()=>p("svg",{class:"icon"},[p("use",{"xlink:href":"#icon-wangguan"})],-1)),xi={class:"menu"},qi=h("\u6587\u6863"),wi=Tu(()=>p("use",{"xlink:href":"#icon-more-v"},null,-1)),Ii=[wi];function Ti(e,n,r,t,u,s){const o=_("router-link");return d(),f("div",Di,[l(o,{to:"/",class:"logo"},{default:c(()=>[Ai]),_:1}),p("ul",xi,[p("li",null,[l(o,{to:"/doc"},{default:c(()=>[qi]),_:1})])]),r.toggleMenuButtonVisible?(d(),f("svg",{key:0,class:"toggleAside",onClick:n[0]||(n[0]=(...a)=>t.toggleMenu&&t.toggleMenu(...a))},Ii)):G("",!0)])}const Mu=v(Bi,[["render",Ti],["__scopeId","data-v-49e73100"]]);function Mi(e,n){let r=Date.now();return function(){Date.now()-r>=n&&(e.call(this,...arguments),r=Date.now())}}function Si(){let e=document.querySelector("#canvas"),n=e.getContext("2d"),r=[];function t(){e.width=window.innerWidth,e.height=window.innerHeight}t(),window.onresize=t,e.addEventListener("mousemove",Mi(function(a){a.offsetX&&r.push(new s(a.offsetX,a.offsetY))},30));function u(a,i){return Math.floor((i-a)*Math.random()+a)}class s{constructor(i,g){this.x=i,this.y=g,this.vx=(Math.random()-.5)*3,this.vy=(Math.random()-.5)*3,this.color="rgb("+u(0,256)+","+u(0,256)+","+u(0,256)+")",this.a=1,this.draw()}draw(){n&&(n.beginPath(),n.fillStyle=this.color,n.globalCompositeOperation="lighter",n.globalAlpha=this.a,n.arc(this.x,this.y,10,0,Math.PI*2,!1),n.fill(),this.updata())}updata(){this.x+=this.vx,this.y+=this.vy,this.a*=.98}}function o(){n.clearRect(0,0,e.width,e.height),r.forEach((a,i)=>{a.draw(),a.a<.05&&r.splice(i,1)}),requestAnimationFrame(o)}o()}const Vi={name:"Home",components:{topNav:Mu},setup(){const e=document.querySelector("#app"),n=document.createElement("canvas");n.id="canvas",e.appendChild(n),Si(),Hn(()=>{e.removeChild(n)})}};const yt=e=>(ge("data-v-962b3a2c"),e=e(),ve(),e),Ri={class:"topNavAndBanner"},Pi={class:"banner"},Li=yt(()=>p("h1",null,"Mq-UI",-1)),Oi=yt(()=>p("h2",null,"\u57FA\u4E8EVUE3\u7684UI\u6846\u67B6",-1)),Gi={class:"actions"},Ni=yt(()=>p("a",{href:"https://github.com/tgbf2674/vue3-ui"},"GitHub",-1)),zi=h("\u5F00\u59CB"),Hi=jn('<div class="features" data-v-962b3a2c><ul data-v-962b3a2c><li data-v-962b3a2c><svg class="icon" data-v-962b3a2c><use xlink:href="#icon-Vue" data-v-962b3a2c></use></svg><h3 data-v-962b3a2c>\u57FA\u4E8E Vue 3</h3><p data-v-962b3a2c>\u90FD\u5DF2\u7ECF2022\u5E74\u4E86\uFF0C\u73A9\u73A9vue3\u5427\uFF0C\u6C42\u6C42\u4E86\uFF0C\u518D\u4E0D\u73A9vue4\u90FD\u51FA\u4E86</p></li><li data-v-962b3a2c><svg class="icon" data-v-962b3a2c><use xlink:href="#icon-ts" data-v-962b3a2c></use></svg><h3 data-v-962b3a2c>\u57FA\u4E8E TypeScript </h3><p data-v-962b3a2c>\u7C7B\u578B\u660E\u786E\u65F6\u4EE3\u7801\u662FTypeScript,\u4E0D\u660E\u786E\u7684\u65F6\u5019\u5C31\u662FAnyScript</p></li><li data-v-962b3a2c><svg class="icon" data-v-962b3a2c><use xlink:href="#icon-LC_icon_light_line" data-v-962b3a2c></use></svg><h3 data-v-962b3a2c>\u4EE3\u7801\u6613\u61C2</h3><p data-v-962b3a2c>\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u90FD\u662F\u65B0\u624B\u7684\u80E1\u601D\u4E71\u60F3\uFF0C\u6240\u4EE5\u65B0\u624B\u4E5F\u80FD\u660E\u767D\u4EBA\u5728\u5E72\u561B</p></li></ul></div>',1);function ji(e,n,r,t,u,s){const o=_("topNav"),a=_("router-link");return d(),f(k,null,[p("div",Ri,[l(o),p("div",Pi,[Li,Oi,p("p",Gi,[Ni,l(a,{to:"/doc"},{default:c(()=>[zi]),_:1})])])]),Hi],64)}const Ui=v(Vi,[["render",ji],["__scopeId","data-v-962b3a2c"]]),Wi={name:"Doc",components:{topNav:Mu},setup(){return{menuVisible:Fe("menuVisible")}}};const Oe=e=>(ge("data-v-ee010843"),e=e(),ve(),e),Qi={class:"layout"},Ki={class:"content"},Zi={key:0},Yi=Oe(()=>p("h2",null,"\u6587\u6863",-1)),Xi=h("\u4ECB\u7ECD"),Ji=h("\u5B89\u88C5"),ec=h("\u5F00\u59CB\u4F7F\u7528"),nc=Oe(()=>p("h2",null,"\u7EC4\u4EF6\u5217\u8868",-1)),tc=Oe(()=>p("span",null,"\u57FA\u7840",-1)),oc=h("container \u7EC4\u4EF6"),rc=h("grid \u7EC4\u4EF6"),uc=h("icon \u7EC4\u4EF6"),ac=h("Button \u7EC4\u4EF6"),lc=h("link \u7EC4\u4EF6"),sc=Oe(()=>p("span",null,"\u8868\u5355",-1)),ic=h("radio \u7EC4\u4EF6"),cc=h("checkbox \u7EC4\u4EF6"),dc=h("Select \u7EC4\u4EF6"),pc=h("input \u7EC4\u4EF6"),mc=h("inputNumber \u7EC4\u4EF6"),fc=h("dropdown \u7EC4\u4EF6"),_c=h("Switch \u7EC4\u4EF6"),hc=h("Form \u7EC4\u4EF6"),gc=Oe(()=>p("span",null,"\u6570\u636E",-1)),vc=h("tag \u7EC4\u4EF6"),Ec=h("badge \u7EC4\u4EF6"),bc=h("empty \u7EC4\u4EF6"),yc=h("result \u7EC4\u4EF6"),Cc=h("skeleton \u7EC4\u4EF6"),$c=h("table \u7EC4\u4EF6"),Fc=Oe(()=>p("span",null,"\u63D0\u793A",-1)),kc=h("loading \u7EC4\u4EF6"),Bc=h("Alert \u7EC4\u4EF6"),Dc=h("message \u7EC4\u4EF6"),Ac=Oe(()=>p("span",null,"\u5BFC\u822A",-1)),xc=h("Tabs \u7EC4\u4EF6"),qc=h("backTop \u7EC4\u4EF6"),wc=h("sticky \u7EC4\u4EF6"),Ic=h("breadcrumb \u7EC4\u4EF6"),Tc=Oe(()=>p("span",null,"\u5176\u4ED6",-1)),Mc=h("Dialog \u7EC4\u4EF6"),Sc=h("card \u7EC4\u4EF6"),Vc=h("pagination \u7EC4\u4EF6"),Rc=h("collapse \u7EC4\u4EF6"),Pc=h("spread \u7EC4\u4EF6"),Lc=h("tooltip \u7EC4\u4EF6"),Oc=h("swiper \u7EC4\u4EF6"),Gc=h("image \u7EC4\u4EF6");function Nc(e,n,r,t,u,s){const o=_("topNav"),a=_("router-link"),i=_("router-view");return d(),f("div",Qi,[l(o,{toggleMenuButtonVisible:!0,class:"nav"}),p("div",Ki,[t.menuVisible?(d(),f("aside",Zi,[Yi,p("ol",null,[p("li",null,[l(a,{to:"/doc/intro"},{default:c(()=>[Xi]),_:1})]),p("li",null,[l(a,{to:"/doc/install"},{default:c(()=>[Ji]),_:1})]),p("li",null,[l(a,{to:"/doc/get-started"},{default:c(()=>[ec]),_:1})])]),nc,p("ol",null,[tc,p("li",null,[l(a,{to:"/doc/container"},{default:c(()=>[oc]),_:1})]),p("li",null,[l(a,{to:"/doc/grid"},{default:c(()=>[rc]),_:1})]),p("li",null,[l(a,{to:"/doc/icon"},{default:c(()=>[uc]),_:1})]),p("li",null,[l(a,{to:"/doc/button"},{default:c(()=>[ac]),_:1})]),p("li",null,[l(a,{to:"/doc/link"},{default:c(()=>[lc]),_:1})]),sc,p("li",null,[l(a,{to:"/doc/radio"},{default:c(()=>[ic]),_:1})]),p("li",null,[l(a,{to:"/doc/checkbox"},{default:c(()=>[cc]),_:1})]),p("li",null,[l(a,{to:"/doc/select"},{default:c(()=>[dc]),_:1})]),p("li",null,[l(a,{to:"/doc/input"},{default:c(()=>[pc]),_:1})]),p("li",null,[l(a,{to:"/doc/inputNumber"},{default:c(()=>[mc]),_:1})]),p("li",null,[l(a,{to:"/doc/dropdown"},{default:c(()=>[fc]),_:1})]),p("li",null,[l(a,{to:"/doc/switch"},{default:c(()=>[_c]),_:1})]),p("li",null,[l(a,{to:"/doc/form"},{default:c(()=>[hc]),_:1})]),gc,p("li",null,[l(a,{to:"/doc/tag"},{default:c(()=>[vc]),_:1})]),p("li",null,[l(a,{to:"/doc/badge"},{default:c(()=>[Ec]),_:1})]),p("li",null,[l(a,{to:"/doc/empty"},{default:c(()=>[bc]),_:1})]),p("li",null,[l(a,{to:"/doc/result"},{default:c(()=>[yc]),_:1})]),p("li",null,[l(a,{to:"/doc/skeleton"},{default:c(()=>[Cc]),_:1})]),p("li",null,[l(a,{to:"/doc/table"},{default:c(()=>[$c]),_:1})]),Fc,p("li",null,[l(a,{to:"/doc/loading"},{default:c(()=>[kc]),_:1})]),p("li",null,[l(a,{to:"/doc/alert"},{default:c(()=>[Bc]),_:1})]),p("li",null,[l(a,{to:"/doc/message"},{default:c(()=>[Dc]),_:1})]),Ac,p("li",null,[l(a,{to:"/doc/tabs"},{default:c(()=>[xc]),_:1})]),p("li",null,[l(a,{to:"/doc/backTop"},{default:c(()=>[qc]),_:1})]),p("li",null,[l(a,{to:"/doc/sticky"},{default:c(()=>[wc]),_:1})]),p("li",null,[l(a,{to:"/doc/breadcrumb"},{default:c(()=>[Ic]),_:1})]),Tc,p("li",null,[l(a,{to:"/doc/dialog"},{default:c(()=>[Mc]),_:1})]),p("li",null,[l(a,{to:"/doc/card"},{default:c(()=>[Sc]),_:1})]),p("li",null,[l(a,{to:"/doc/pagination"},{default:c(()=>[Vc]),_:1})]),p("li",null,[l(a,{to:"/doc/collapse"},{default:c(()=>[Rc]),_:1})]),p("li",null,[l(a,{to:"/doc/spread"},{default:c(()=>[Pc]),_:1})]),p("li",null,[l(a,{to:"/doc/tooltip"},{default:c(()=>[Lc]),_:1})]),p("li",null,[l(a,{to:"/doc/swiper"},{default:c(()=>[Oc]),_:1})]),p("li",null,[l(a,{to:"/doc/image"},{default:c(()=>[Gc]),_:1})])])])):G("",!0),p("main",null,[l(i)])])])}const zc=v(Wi,[["render",Nc],["__scopeId","data-v-ee010843"]]),Hc=N({name:"MqSwitch",props:{modelValue:{required:!0,type:[Boolean,String,Number],default:!1},openValue:{type:[Boolean,String,Number],default:!0},closeValue:{type:[Boolean,String,Number],default:!1},openColor:{type:String,default:"#40a9ff"},closeColor:{type:String,default:"#d9d9d9"},disabled:{type:Boolean,default:!1},openText:{type:String,default:""},closeText:{type:String,default:""},inlinePrompt:{type:Boolean,default:!1}},setup(e,n){const r=A(e.modelValue),t=A("mmq-switch-close"),u=M(()=>r.value!==e.openValue?"mmq-switch-text-selected":""),s=M(()=>r.value===e.openValue?"mmq-switch-text-selected":""),o=M(()=>r.value===e.openValue?{background:e.openColor,borderColor:"1px solid #"+e.openColor}:{background:e.closeColor,borderColor:"1px solid #"+e.closeColor}),a=A(""),i=g=>{e.disabled||(r.value===e.openValue?r.value=e.closeValue:r.value=e.openValue,n.emit("update:modelValue",r.value),n.emit("change",r.value))};return Q(()=>{e.modelValue?r.value=e.openValue:r.value=e.closeValue}),je(()=>{r.value=e.modelValue,r.value===e.openValue?(t.value="mmq-switch-open",a.value=e.openText):(t.value="mmq-switch-close",a.value=e.closeText)}),{switchStatusClass:t,switchStatusText:a,changeSwitchStatus:i,checkedValue:r,selectOpenTextClass:u,selectCloseTextClass:s,selectStatusStyle:o}}});const jc={class:"mmq-switch-text-wrapper"},Uc={class:"mmq-switch-text"};function Wc(e,n,r,t,u,s){return d(),f("div",jc,[e.inlinePrompt?G("",!0):(d(),f("div",{key:0,class:j(e.selectOpenTextClass)},L(e.closeText),3)),p("div",{class:j(["mmq-switch-wrapper",e.disabled?"mmq-switch-disabled":""])},[p("div",{class:j(["mmq-switch-status",e.switchStatusClass]),style:ie(e.selectStatusStyle),onClick:n[0]||(n[0]=(...o)=>e.changeSwitchStatus&&e.changeSwitchStatus(...o))},[p("span",Uc,L(e.inlinePrompt?e.switchStatusText:""),1)],6)],2),e.inlinePrompt?G("",!0):(d(),f("div",{key:1,class:j(e.selectCloseTextClass)},L(e.openText),3))])}const un=v(Hc,[["render",Wc],["__scopeId","data-v-ee1def3b"]]),Su={components:{MqSwitch:un},setup(){return{bool:A(!1)}}};function Ut(e){e.__sourceCode=`<template>\r
  <h5>\u7ED1\u5B9A v-model \u5230\u4E00\u4E2A Boolean \u7C7B\u578B\u7684\u53D8\u91CF\u3002\u53EF\u4EE5\u901A\u8FC7closeColor \u548CopenColor\u6765\u63A7\u5236\u5F00\u5173\u80CC\u666F\u8272</h5>\r
  <MqSwitch v-model="bool" />\r
  <MqSwitch open-color="#13ce66" close-color="#ff4949" v-model="bool" />\r
</template>\r
<script lang="ts">\r
import MqSwitch from '../../../lib/MqSwitch.vue';\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  components: {\r
    MqSwitch,\r
  },\r
  setup() {\r
    const bool = ref(false)\r
    return {\r
      bool\r
    }\r
  }\r
}\r
<\/script>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const Qc=p("h5",null,"\u7ED1\u5B9A v-model \u5230\u4E00\u4E2A Boolean \u7C7B\u578B\u7684\u53D8\u91CF\u3002\u53EF\u4EE5\u901A\u8FC7closeColor \u548CopenColor\u6765\u63A7\u5236\u5F00\u5173\u80CC\u666F\u8272",-1);function Kc(e,n,r,t,u,s){const o=_("MqSwitch");return d(),f(k,null,[Qc,l(o,{modelValue:t.bool,"onUpdate:modelValue":n[0]||(n[0]=a=>t.bool=a)},null,8,["modelValue"]),l(o,{"open-color":"#13ce66","close-color":"#ff4949",modelValue:t.bool,"onUpdate:modelValue":n[1]||(n[1]=a=>t.bool=a)},null,8,["modelValue"])],64)}typeof Ut=="function"&&Ut(Su);const Zc=v(Su,[["render",Kc]]),Vu={components:{MqSwitch:un},setup(){return{bool:A(!1)}}};function Wt(e){e.__sourceCode=`<template>\r
  <h5>\u8BBE\u7F6Edisabled\u5C5E\u6027\uFF0C\u63A5\u53D7\u4E00\u4E2ABoolean\uFF0C\u8BBE\u7F6Etrue\u5373\u53EF\u7981\u7528\u3002</h5>\r
  <MqSwitch v-model="bool" disabled />\r
</template>\r
<script lang="ts">\r
import MqSwitch from '../../../lib/MqSwitch.vue';\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  components: {\r
    MqSwitch,\r
  },\r
  setup() {\r
    const bool = ref(false)\r
    return {\r
      bool\r
    }\r
  }\r
}\r
<\/script>`,e.__sourceCodeTitle=" \u652F\u6301\u7981\u7528 "}const Yc=p("h5",null,"\u8BBE\u7F6Edisabled\u5C5E\u6027\uFF0C\u63A5\u53D7\u4E00\u4E2ABoolean\uFF0C\u8BBE\u7F6Etrue\u5373\u53EF\u7981\u7528\u3002",-1);function Xc(e,n,r,t,u,s){const o=_("MqSwitch");return d(),f(k,null,[Yc,l(o,{modelValue:t.bool,"onUpdate:modelValue":n[0]||(n[0]=a=>t.bool=a),disabled:""},null,8,["modelValue"])],64)}typeof Wt=="function"&&Wt(Vu);const Jc=v(Vu,[["render",Xc]]),Ru={components:{MqSwitch:un},setup(){return{bool:A(!1)}}};function Qt(e){e.__sourceCode=`<template>\r
  <h5>\u4F7F\u7528open-text\u5C5E\u6027\u4E0Eclose-text\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u6587\u5B57\u63CF\u8FF0\u3002 \u4F7F\u7528 inline-prompt \u5C5E\u6027\u6765\u63A7\u5236\u6587\u672C\u662F\u5426\u663E\u793A\u5728\u70B9\u5185\u3002\r
\r
    \u4F7F\u7528open-text\u5C5E\u6027\u4E0Eclose-text\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u6587\u5B57\u63CF\u8FF0\u3002</h5>\r
  <MqSwitch v-model="bool" open-text="open" close-text="close" />\r
  <MqSwitch inline-prompt v-model="bool" open-text="open" close-text="close" />\r
</template>\r
<script lang="ts">\r
import MqSwitch from '../../../lib/MqSwitch.vue';\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  components: {\r
    MqSwitch,\r
  },\r
  setup() {\r
    const bool = ref(false)\r
    return {\r
      bool\r
    }\r
  }\r
}\r
<\/script>`,e.__sourceCodeTitle=" \u6587\u5B57\u63CF\u8FF0\uFF0C\u53EF\u9009\u62E9\u662F\u5426\u5728\u6309\u94AE\u5185\uFF0C\u6309\u626D\u5916 "}const ed=p("h5",null,"\u4F7F\u7528open-text\u5C5E\u6027\u4E0Eclose-text\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u6587\u5B57\u63CF\u8FF0\u3002 \u4F7F\u7528 inline-prompt \u5C5E\u6027\u6765\u63A7\u5236\u6587\u672C\u662F\u5426\u663E\u793A\u5728\u70B9\u5185\u3002 \u4F7F\u7528open-text\u5C5E\u6027\u4E0Eclose-text\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u6587\u5B57\u63CF\u8FF0\u3002",-1);function nd(e,n,r,t,u,s){const o=_("MqSwitch");return d(),f(k,null,[ed,l(o,{modelValue:t.bool,"onUpdate:modelValue":n[0]||(n[0]=a=>t.bool=a),"open-text":"open","close-text":"close"},null,8,["modelValue"]),l(o,{"inline-prompt":"",modelValue:t.bool,"onUpdate:modelValue":n[1]||(n[1]=a=>t.bool=a),"open-text":"open","close-text":"close"},null,8,["modelValue"])],64)}typeof Qt=="function"&&Qt(Ru);const td=v(Ru,[["render",nd]]),Pu={components:{MqSwitch:un},setup(){return{value:A(100)}}};function Kt(e){e.__sourceCode=`<template>\r
  <h5>\u4F60\u53EF\u4EE5\u8BBE\u7F6E open-value \u548C close-value \u5C5E\u6027\uFF0C \u5B83\u4EEC\u63A5\u53D7 Boolean\u3001String \u6216 Number \u7C7B\u578B\u7684\u503C\u3002</h5>\r
  <MqSwitch open-color="#13ce66" close-color="#ff4949" :close-value="1" :open-value="100" v-model="value" />\r
  {{ value }}\r
</template>\r
<script lang="ts">\r
import MqSwitch from '../../../lib/MqSwitch.vue';\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  components: {\r
    MqSwitch,\r
  },\r
  setup() {\r
    const value = ref(100)\r
    return {\r
      value\r
    }\r
  }\r
}\r
<\/script>`,e.__sourceCodeTitle=" \u6269\u5C55value\u7684\u7C7B\u578B "}const od=p("h5",null,"\u4F60\u53EF\u4EE5\u8BBE\u7F6E open-value \u548C close-value \u5C5E\u6027\uFF0C \u5B83\u4EEC\u63A5\u53D7 Boolean\u3001String \u6216 Number \u7C7B\u578B\u7684\u503C\u3002",-1);function rd(e,n,r,t,u,s){const o=_("MqSwitch");return d(),f(k,null,[od,l(o,{"open-color":"#13ce66","close-color":"#ff4949","close-value":1,"open-value":100,modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=a=>t.value=a)},null,8,["modelValue"]),h(" "+L(t.value),1)],64)}typeof Kt=="function"&&Kt(Pu);const ud=v(Pu,[["render",rd]]);var Zt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ad={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(t){var u=/\blang(?:uage)?-([\w-]+)\b/i,s=0,o={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function C(E){return E instanceof a?new a(E.type,C(E.content),E.alias):Array.isArray(E)?E.map(C):E.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(C){return Object.prototype.toString.call(C).slice(8,-1)},objId:function(C){return C.__id||Object.defineProperty(C,"__id",{value:++s}),C.__id},clone:function C(E,D){D=D||{};var F,x;switch(o.util.type(E)){case"Object":if(x=o.util.objId(E),D[x])return D[x];F={},D[x]=F;for(var R in E)E.hasOwnProperty(R)&&(F[R]=C(E[R],D));return F;case"Array":return x=o.util.objId(E),D[x]?D[x]:(F=[],D[x]=F,E.forEach(function(O,V){F[V]=C(O,D)}),F);default:return E}},getLanguage:function(C){for(;C&&!u.test(C.className);)C=C.parentElement;return C?(C.className.match(u)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(F){var C=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(F.stack)||[])[1];if(C){var E=document.getElementsByTagName("script");for(var D in E)if(E[D].src==C)return E[D]}return null}},isActive:function(C,E,D){for(var F="no-"+E;C;){var x=C.classList;if(x.contains(E))return!0;if(x.contains(F))return!1;C=C.parentElement}return!!D}},languages:{extend:function(C,E){var D=o.util.clone(o.languages[C]);for(var F in E)D[F]=E[F];return D},insertBefore:function(C,E,D,F){F=F||o.languages;var x=F[C],R={};for(var O in x)if(x.hasOwnProperty(O)){if(O==E)for(var V in D)D.hasOwnProperty(V)&&(R[V]=D[V]);D.hasOwnProperty(O)||(R[O]=x[O])}var oe=F[C];return F[C]=R,o.languages.DFS(o.languages,function(ae,he){he===oe&&ae!=C&&(this[ae]=R)}),R},DFS:function C(E,D,F,x){x=x||{};var R=o.util.objId;for(var O in E)if(E.hasOwnProperty(O)){D.call(E,O,E[O],F||O);var V=E[O],oe=o.util.type(V);oe==="Object"&&!x[R(V)]?(x[R(V)]=!0,C(V,D,null,x)):oe==="Array"&&!x[R(V)]&&(x[R(V)]=!0,C(V,D,O,x))}}},plugins:{},highlightAll:function(C,E){o.highlightAllUnder(document,C,E)},highlightAllUnder:function(C,E,D){var F={callback:D,container:C,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",F),F.elements=Array.prototype.slice.apply(F.container.querySelectorAll(F.selector)),o.hooks.run("before-all-elements-highlight",F);for(var x=0,R;R=F.elements[x++];)o.highlightElement(R,E===!0,F.callback)},highlightElement:function(C,E,D){var F=o.util.getLanguage(C),x=o.languages[F];C.className=C.className.replace(u,"").replace(/\s+/g," ")+" language-"+F;var R=C.parentElement;R&&R.nodeName.toLowerCase()==="pre"&&(R.className=R.className.replace(u,"").replace(/\s+/g," ")+" language-"+F);var O=C.textContent,V={element:C,language:F,grammar:x,code:O};function oe(he){V.highlightedCode=he,o.hooks.run("before-insert",V),V.element.innerHTML=V.highlightedCode,o.hooks.run("after-highlight",V),o.hooks.run("complete",V),D&&D.call(V.element)}if(o.hooks.run("before-sanity-check",V),!V.code){o.hooks.run("complete",V),D&&D.call(V.element);return}if(o.hooks.run("before-highlight",V),!V.grammar){oe(o.util.encode(V.code));return}if(E&&t.Worker){var ae=new Worker(o.filename);ae.onmessage=function(he){oe(he.data)},ae.postMessage(JSON.stringify({language:V.language,code:V.code,immediateClose:!0}))}else oe(o.highlight(V.code,V.grammar,V.language))},highlight:function(C,E,D){var F={code:C,grammar:E,language:D};return o.hooks.run("before-tokenize",F),F.tokens=o.tokenize(F.code,F.grammar),o.hooks.run("after-tokenize",F),a.stringify(o.util.encode(F.tokens),F.language)},tokenize:function(C,E){var D=E.rest;if(D){for(var F in D)E[F]=D[F];delete E.rest}var x=new g;return m(x,x.head,C),i(C,x,E,x.head,0),y(x)},hooks:{all:{},add:function(C,E){var D=o.hooks.all;D[C]=D[C]||[],D[C].push(E)},run:function(C,E){var D=o.hooks.all[C];if(!(!D||!D.length))for(var F=0,x;x=D[F++];)x(E)}},Token:a};t.Prism=o;function a(C,E,D,F){this.type=C,this.content=E,this.alias=D,this.length=(F||"").length|0}a.stringify=function C(E,D){if(typeof E=="string")return E;if(Array.isArray(E)){var F="";return E.forEach(function(oe){F+=C(oe,D)}),F}var x={type:E.type,content:C(E.content,D),tag:"span",classes:["token",E.type],attributes:{},language:D},R=E.alias;R&&(Array.isArray(R)?Array.prototype.push.apply(x.classes,R):x.classes.push(R)),o.hooks.run("wrap",x);var O="";for(var V in x.attributes)O+=" "+V+'="'+(x.attributes[V]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+O+">"+x.content+"</"+x.tag+">"};function i(C,E,D,F,x,R){for(var O in D)if(!(!D.hasOwnProperty(O)||!D[O])){var V=D[O];V=Array.isArray(V)?V:[V];for(var oe=0;oe<V.length;++oe){if(R&&R.cause==O+","+oe)return;var ae=V[oe],he=ae.inside,qe=!!ae.lookbehind,ce=!!ae.greedy,fe=0,we=ae.alias;if(ce&&!ae.pattern.global){var Ke=ae.pattern.toString().match(/[imsuy]*$/)[0];ae.pattern=RegExp(ae.pattern.source,Ke+"g")}for(var Ce=ae.pattern||ae,le=F.next,_e=x;le!==E.tail&&!(R&&_e>=R.reach);_e+=le.value.length,le=le.next){var $e=le.value;if(E.length>C.length)return;if(!($e instanceof a)){var Se=1;if(ce&&le!=E.tail.prev){Ce.lastIndex=_e;var de=Ce.exec(C);if(!de)break;var K=de.index+(qe&&de[1]?de[1].length:0),S=de.index+de[0].length,P=_e;for(P+=le.value.length;K>=P;)le=le.next,P+=le.value.length;if(P-=le.value.length,_e=P,le.value instanceof a)continue;for(var z=le;z!==E.tail&&(P<S||typeof z.value=="string");z=z.next)Se++,P+=z.value.length;Se--,$e=C.slice(_e,P),de.index-=_e}else{Ce.lastIndex=0;var de=Ce.exec($e)}if(!!de){qe&&(fe=de[1]?de[1].length:0);var K=de.index+fe,B=de[0].slice(fe),S=K+B.length,T=$e.slice(0,K),H=$e.slice(S),re=_e+$e.length;R&&re>R.reach&&(R.reach=re);var se=le.prev;T&&(se=m(E,se,T),_e+=T.length),b(E,se,Se);var Y=new a(O,he?o.tokenize(B,he):B,we,B);le=m(E,se,Y),H&&m(E,le,H),Se>1&&i(C,E,D,le.prev,_e,{cause:O+","+oe,reach:re})}}}}}}function g(){var C={value:null,prev:null,next:null},E={value:null,prev:C,next:null};C.next=E,this.head=C,this.tail=E,this.length=0}function m(C,E,D){var F=E.next,x={value:D,prev:E,next:F};return E.next=x,F.prev=x,C.length++,x}function b(C,E,D){for(var F=E.next,x=0;x<D&&F!==C.tail;x++)F=F.next;E.next=F,F.prev=E,C.length-=x}function y(C){for(var E=[],D=C.head.next;D!==C.tail;)E.push(D.value),D=D.next;return E}if(!t.document)return t.addEventListener&&(o.disableWorkerMessageHandler||t.addEventListener("message",function(C){var E=JSON.parse(C.data),D=E.language,F=E.code,x=E.immediateClose;t.postMessage(o.highlight(F,o.languages[D],D)),x&&t.close()},!1)),o;var $=o.util.currentScript();$&&(o.filename=$.src,$.hasAttribute("data-manual")&&(o.manual=!0));function I(){o.manual||o.highlightAll()}if(!o.manual){var q=document.readyState;q==="loading"||q==="interactive"&&$&&$.defer?document.addEventListener("DOMContentLoaded",I):window.requestAnimationFrame?window.requestAnimationFrame(I):window.setTimeout(I,16)}return o}(n);e.exports&&(e.exports=r),typeof Zt<"u"&&(Zt.Prism=r),r.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(u,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:r.languages[s]};var i={};i[u]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:a},r.languages.insertBefore("markup","cdata",i)}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(t){var u=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:RegExp(`[^{}\\s](?:[^{};"']|`+u.source+")*?(?=\\s*\\{)"),string:{pattern:u,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var s=t.languages.markup;s&&(s.tag.addInlined("style","css"),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:s.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},s.tag))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}}}),r.languages.markup&&r.languages.markup.tag.addInlined("script","javascript"),r.languages.js=r.languages.javascript,function(){if(typeof self>"u"||!self.Prism||!self.document)return;var t=window.Prism,u="Loading\u2026",s=function(C,E){return"\u2716 Error "+C+" while fetching file: "+E},o="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",g="loading",m="loaded",b="failed",y="pre[data-src]:not(["+i+'="'+m+'"]):not(['+i+'="'+g+'"])',$=/\blang(?:uage)?-([\w-]+)\b/i;function I(C,E){var D=C.className;D=D.replace($," ")+" language-"+E,C.className=D.replace(/\s+/g," ").trim()}t.hooks.add("before-highlightall",function(C){C.selector+=", "+y}),t.hooks.add("before-sanity-check",function(C){var E=C.element;if(E.matches(y)){C.code="",E.setAttribute(i,g);var D=E.appendChild(document.createElement("CODE"));D.textContent=u;var F=E.getAttribute("data-src"),x=C.language;if(x==="none"){var R=(/\.(\w+)$/.exec(F)||[,"none"])[1];x=a[R]||R}I(D,x),I(E,x);var O=t.plugins.autoloader;O&&O.loadLanguages(x);var V=new XMLHttpRequest;V.open("GET",F,!0),V.onreadystatechange=function(){V.readyState==4&&(V.status<400&&V.responseText?(E.setAttribute(i,m),D.textContent=V.responseText,t.highlightElement(D)):(E.setAttribute(i,b),V.status>=400?D.textContent=s(V.status,V.statusText):D.textContent=o))},V.send(null)}}),t.plugins.fileHighlight={highlight:function(E){for(var D=(E||document).querySelectorAll(y),F=0,x;x=D[F++];)t.highlightElement(x)}};var q=!1;t.fileHighlight=function(){q||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),q=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ad);const ld=N({name:"MqButton",props:{theme:{type:String,default:"button"},size:{type:String,default:""},level:{type:String,default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},round:{type:Boolean,default:!1}},setup(e){const{theme:n,size:r,level:t,circle:u,round:s}=e,o=Fe("buttonGroupContext",{size:"normal",level:"normal"}),a=M(()=>r||o.size),i=M(()=>t||o.level),g=M(()=>u?"isCircle":""),m=M(()=>s?"isRound":"");return{classes:M(()=>({[`mmq-theme-${n}`]:n,[`mmq-size-${a.value}`]:a.value,[`mmq-level-${i.value}`]:i.value,[`${g.value}`]:g.value,[`${m.value}`]:m.value}))}}});const sd=["disabled"],id={key:0,class:"mmq-loadingIndicator"};function cd(e,n,r,t,u,s){return d(),f("button",{class:j(["mmq-button",e.classes]),disabled:e.disabled},[e.loading?(d(),f("span",id)):G("",!0),W(e.$slots,"default",{},void 0,!0)],10,sd)}const ee=v(ld,[["render",cd],["__scopeId","data-v-8729431f"]]),rt=window.Prism,dd=N({name:"Demo",components:{Button:ee},props:{component:Object},setup(e){const n=M(()=>rt.highlight(e.component.__sourceCode,rt.languages.html,"html")),r=A(!1);return{Prism:rt,html:n,codeVisible:r,toggleCode:()=>{r.value=!r.value}}}});const pd={class:"demo"},md={class:"demo-component"},fd={class:"demo-actions"},_d=h("\u9690\u85CF\u4EE3\u7801"),hd=h("\u67E5\u770B\u4EE3\u7801"),gd=["innerHTML"];function vd(e,n,r,t,u,s){const o=_("Button");return d(),f("div",pd,[p("h2",null,L(e.component.__sourceCodeTitle),1),p("div",md,[(d(),w(ke(e.component)))]),p("div",fd,[e.codeVisible?(d(),w(o,{key:0,onClick:e.toggleCode},{default:c(()=>[_d]),_:1},8,["onClick"])):(d(),w(o,{key:1,onClick:e.toggleCode},{default:c(()=>[hd]),_:1},8,["onClick"]))]),l(rn,{name:"fade"},{default:c(()=>[e.codeVisible?(d(),f("pre",{key:0,class:"language-css",innerHTML:e.html},null,8,gd)):G("",!0)]),_:1})])}const ne=v(dd,[["render",vd],["__scopeId","data-v-ea4f27f6"]]);function te(){const e=document.querySelectorAll(".demo"),n=document.querySelector("main"),r=document.createElement("div"),t=document.createElement("div");r.className="anchorWrapper",t.className="anchorWrapperLayout",n.appendChild(r),r.appendChild(t),n.insertBefore(r,e[0]),e.forEach((u,s)=>{const o=document.createElement("a");u instanceof HTMLElement&&(u.id=`demo${s}`,o.innerText=u.innerText.split(`
`)[0]),t.appendChild(o),o.addEventListener("click",()=>{document.documentElement.scrollTo({top:e[s].offsetTop-74,behavior:"smooth"})})})}const Ed={name:"switchDemo",components:{Demo:ne},setup(){Q(()=>{te()});const e=U([{key:"1",attr:"change",describe:"switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",params:"val\uFF0C\u65B0\u72B6\u6001\u7684\u503C"}]),n=U([{title:"\u53C2\u6570",dataIndex:"attr",key:"attr"},{title:"\u8BF4\u660E",dataIndex:"describe",key:"describe"},{title:"\u53C2\u6570",dataIndex:"params",key:"params"}]);return{Switch1Demo:Zc,Switch2Demo:Jc,Switch3Demo:td,Switch4Demo:ud,data:e,columns:n}}};const Lu=e=>(ge("data-v-fcb99f7a"),e=e(),ve(),e),bd=Lu(()=>p("h1",null,"Switch \u7EC4\u4EF6\u793A\u4F8B ",-1)),yd=Lu(()=>p("h2",null,"\u4E8B\u4EF6",-1));function Cd(e,n,r,t,u,s){const o=_("Demo"),a=_("MqTable");return d(),f("div",null,[bd,l(o,{component:t.Switch1Demo},null,8,["component"]),l(o,{component:t.Switch2Demo},null,8,["component"]),l(o,{component:t.Switch3Demo},null,8,["component"]),l(o,{component:t.Switch4Demo},null,8,["component"]),l(a,{columns:t.columns,"data-source":t.data,bordered:""},{title:c(()=>[yd]),_:1},8,["columns","data-source"])])}const $d=v(Ed,[["render",Cd],["__scopeId","data-v-fcb99f7a"]]),Ou={components:{Button:ee}};function Yt(e){e.__sourceCode=`<template>\r
  <div>\r
    <Button>\u4F60\u597D</Button>\r
    <Button theme="link">\u4F60\u597D</Button>\r
    <Button theme="text">\u4F60\u597D</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../../../lib/Button.vue";\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>`,e.__sourceCodeTitle=" \u5E38\u89C4\u4F7F\u7528 "}const Fd=h("\u4F60\u597D"),kd=h("\u4F60\u597D"),Bd=h("\u4F60\u597D");function Dd(e,n,r,t,u,s){const o=_("Button");return d(),f("div",null,[l(o,null,{default:c(()=>[Fd]),_:1}),l(o,{theme:"link"},{default:c(()=>[kd]),_:1}),l(o,{theme:"text"},{default:c(()=>[Bd]),_:1})])}typeof Yt=="function"&&Yt(Ou);const Ad=v(Ou,[["render",Dd]]),Gu={components:{Button:ee}};function Xt(e){e.__sourceCode=`<template>\r
  <div>\r
    <div>\r
      <Button size="big">\u5927\u5927\u5927</Button>\r
      <Button>\u666E\u666E\u901A</Button>\r
      <Button size="small">\u5C0F\u5C0F\u5C0F</Button>\r
    </div>\r
    <div>\r
      <Button theme="link" size="big">\u5927\u5927\u5927</Button>\r
      <Button theme="link">\u666E\u666E\u901A</Button>\r
      <Button size="small" theme="link">\u5C0F\u5C0F\u5C0F</Button>\r
    </div>\r
    <div>\r
      <Button size="big" theme="text">\u5927\u5927\u5927</Button>\r
      <Button theme="text">\u666E\u666E\u901A</Button>\r
      <Button size="small" theme="text">\u5C0F\u5C0F\u5C0F</Button>\r
    </div>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../../../lib/Button.vue";\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>`,e.__sourceCodeTitle=" \u652F\u6301 size "}const xd=h("\u5927\u5927\u5927"),qd=h("\u666E\u666E\u901A"),wd=h("\u5C0F\u5C0F\u5C0F"),Id=h("\u5927\u5927\u5927"),Td=h("\u666E\u666E\u901A"),Md=h("\u5C0F\u5C0F\u5C0F"),Sd=h("\u5927\u5927\u5927"),Vd=h("\u666E\u666E\u901A"),Rd=h("\u5C0F\u5C0F\u5C0F");function Pd(e,n,r,t,u,s){const o=_("Button");return d(),f("div",null,[p("div",null,[l(o,{size:"big"},{default:c(()=>[xd]),_:1}),l(o,null,{default:c(()=>[qd]),_:1}),l(o,{size:"small"},{default:c(()=>[wd]),_:1})]),p("div",null,[l(o,{theme:"link",size:"big"},{default:c(()=>[Id]),_:1}),l(o,{theme:"link"},{default:c(()=>[Td]),_:1}),l(o,{size:"small",theme:"link"},{default:c(()=>[Md]),_:1})]),p("div",null,[l(o,{size:"big",theme:"text"},{default:c(()=>[Sd]),_:1}),l(o,{theme:"text"},{default:c(()=>[Vd]),_:1}),l(o,{size:"small",theme:"text"},{default:c(()=>[Rd]),_:1})])])}typeof Xt=="function"&&Xt(Gu);const Ld=v(Gu,[["render",Pd]]),Nu={components:{Button:ee}};function Jt(e){e.__sourceCode=`<template>\r
  <div>\r
    <div>\r
      <Button level="main">\u4E3B\u8981\u6309\u94AE</Button>\r
      <Button>\u666E\u901A\u6309\u94AE</Button>\r
      <Button level="danger">\u5371\u9669\u6309\u94AE</Button>\r
    </div>\r
    <div>\r
      <Button theme="link" level="main">\u4E3B\u8981\u94FE\u63A5\u6309\u94AE</Button>\r
      <Button theme="link">\u666E\u901A\u94FE\u63A5\u6309\u94AE</Button>\r
      <Button theme="link" level="danger">\u5371\u9669\u94FE\u63A5\u6309\u94AE</Button>\r
    </div>\r
    <div>\r
      <Button theme="text" level="main">\u4E3B\u8981\u6587\u5B57\u6309\u94AE</Button>\r
      <Button theme="text">\u666E\u901A\u6587\u5B57\u6309\u94AE</Button>\r
      <Button theme="text" level="danger">\u5371\u9669\u6587\u5B57\u6309\u94AE</Button>\r
    </div>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../../../lib/Button.vue";\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u793A\u4F8B3 "}const Od=h("\u4E3B\u8981\u6309\u94AE"),Gd=h("\u666E\u901A\u6309\u94AE"),Nd=h("\u5371\u9669\u6309\u94AE"),zd=h("\u4E3B\u8981\u94FE\u63A5\u6309\u94AE"),Hd=h("\u666E\u901A\u94FE\u63A5\u6309\u94AE"),jd=h("\u5371\u9669\u94FE\u63A5\u6309\u94AE"),Ud=h("\u4E3B\u8981\u6587\u5B57\u6309\u94AE"),Wd=h("\u666E\u901A\u6587\u5B57\u6309\u94AE"),Qd=h("\u5371\u9669\u6587\u5B57\u6309\u94AE");function Kd(e,n,r,t,u,s){const o=_("Button");return d(),f("div",null,[p("div",null,[l(o,{level:"main"},{default:c(()=>[Od]),_:1}),l(o,null,{default:c(()=>[Gd]),_:1}),l(o,{level:"danger"},{default:c(()=>[Nd]),_:1})]),p("div",null,[l(o,{theme:"link",level:"main"},{default:c(()=>[zd]),_:1}),l(o,{theme:"link"},{default:c(()=>[Hd]),_:1}),l(o,{theme:"link",level:"danger"},{default:c(()=>[jd]),_:1})]),p("div",null,[l(o,{theme:"text",level:"main"},{default:c(()=>[Ud]),_:1}),l(o,{theme:"text"},{default:c(()=>[Wd]),_:1}),l(o,{theme:"text",level:"danger"},{default:c(()=>[Qd]),_:1})])])}typeof Jt=="function"&&Jt(Nu);const Zd=v(Nu,[["render",Kd]]),zu={components:{Button:ee}};function eo(e){e.__sourceCode=`<template>\r
  <div>\r
    <Button disabled>\u7981\u7528\u6309\u94AE</Button>\r
    <Button theme="link" disabled>\u7981\u7528\u94FE\u63A5\u6309\u94AE</Button>\r
    <Button theme="text" disabled>\u7981\u7528\u6309\u94AE</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../../../lib/Button.vue";\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle="\u793A\u4F8B4"}const Yd=h("\u7981\u7528\u6309\u94AE"),Xd=h("\u7981\u7528\u94FE\u63A5\u6309\u94AE"),Jd=h("\u7981\u7528\u6309\u94AE");function ep(e,n,r,t,u,s){const o=_("Button");return d(),f("div",null,[l(o,{disabled:""},{default:c(()=>[Yd]),_:1}),l(o,{theme:"link",disabled:""},{default:c(()=>[Xd]),_:1}),l(o,{theme:"text",disabled:""},{default:c(()=>[Jd]),_:1})])}typeof eo=="function"&&eo(zu);const np=v(zu,[["render",ep]]),Hu={components:{Button:ee}};function no(e){e.__sourceCode=`<template>\r
  <div>\r
    <Button loading>\u52A0\u8F7D\u4E2D</Button>\r
    <Button>\u52A0\u8F7D\u5B8C\u6210</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../../../lib/Button.vue";\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle="\u793A\u4F8B5"}const tp=h("\u52A0\u8F7D\u4E2D"),op=h("\u52A0\u8F7D\u5B8C\u6210");function rp(e,n,r,t,u,s){const o=_("Button");return d(),f("div",null,[l(o,{loading:""},{default:c(()=>[tp]),_:1}),l(o,null,{default:c(()=>[op]),_:1})])}typeof no=="function"&&no(Hu);const up=v(Hu,[["render",rp]]),ap=N({name:"MqButtonGroup",props:{size:{type:String},level:{type:String}},setup(e){return Ie("buttonGroupContext",{size:e.size,level:e.level}),{}}});const lp={class:"mmq-buttonGroup"};function sp(e,n,r,t,u,s){return d(),f("div",lp,[W(e.$slots,"default")])}const ju=v(ap,[["render",sp]]),Uu={components:{Button:ee,ButtonGroup:ju}};function to(e){e.__sourceCode=`<template>
  <div>
    <ButtonGroup size="big" level="danger">
      <Button> \u2190 \u5750</Button>
      <Button> \u2192 \u53F3</Button>
    </ButtonGroup>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
import ButtonGroup from "../../../lib/ButtonGroup.vue"
export default {
  components: {
    Button, ButtonGroup
  }
}
<\/script>

<style scoped>

</style>`,e.__sourceCodeTitle="\u793A\u4F8B6"}const ip=h(" \u2190 \u5750"),cp=h(" \u2192 \u53F3");function dp(e,n,r,t,u,s){const o=_("Button"),a=_("ButtonGroup");return d(),f("div",null,[l(a,{size:"big",level:"danger"},{default:c(()=>[l(o,null,{default:c(()=>[ip]),_:1}),l(o,null,{default:c(()=>[cp]),_:1})]),_:1})])}typeof to=="function"&&to(Uu);const pp=v(Uu,[["render",dp]]),Wu={components:{Button:ee}};function oo(e){e.__sourceCode=`<template>
  <div>
    <Button circle>1</Button>
    <Button size="big" round>\u5927\u5927\u5927</Button>
    <Button round>\u4E2D\u4E2D\u4E2D</Button>
    <Button size="small" round>\u5C0F\u5C0F\u5C0F</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
export default {
  components: {
    Button
  }
}
<\/script>

<style scoped>

</style>`,e.__sourceCodeTitle="\u793A\u4F8B7: \u539F\u578B\u548C\u5706\u89D2\u6309\u94AE"}const mp=h("1"),fp=h("\u5927\u5927\u5927"),_p=h("\u4E2D\u4E2D\u4E2D"),hp=h("\u5C0F\u5C0F\u5C0F");function gp(e,n,r,t,u,s){const o=_("Button");return d(),f("div",null,[l(o,{circle:""},{default:c(()=>[mp]),_:1}),l(o,{size:"big",round:""},{default:c(()=>[fp]),_:1}),l(o,{round:""},{default:c(()=>[_p]),_:1}),l(o,{size:"small",round:""},{default:c(()=>[hp]),_:1})])}typeof oo=="function"&&oo(Wu);const vp=v(Wu,[["render",gp]]),Ep={name:"buttonDemo",components:{Button:ee,Demo:ne},setup(){return Q(()=>{te()}),{Button1Demo:Ad,Button2Demo:Ld,Button3Demo:Zd,Button4Demo:np,Button5Demo:up,Button6Demo:pp,Button7Demo:vp}}},bp=p("div",null,"Button \u793A\u4F8B",-1);function yp(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[bp,l(o,{component:t.Button1Demo},null,8,["component"]),l(o,{component:t.Button2Demo},null,8,["component"]),l(o,{component:t.Button3Demo},null,8,["component"]),l(o,{component:t.Button4Demo},null,8,["component"]),l(o,{component:t.Button5Demo},null,8,["component"]),l(o,{component:t.Button6Demo},null,8,["component"]),l(o,{component:t.Button7Demo},null,8,["component"])],64)}const Cp=v(Ep,[["render",yp]]),$p=N({name:"MqDialog",props:{visible:{type:Boolean,default:!1},title:{type:String,default:"\u8BF7\u8F93\u5165\u6807\u9898"},closeOnClickOverlay:{type:Boolean,default:!0},ok:{type:Function},cancel:{type:Function},draggable:{type:Boolean,default:!1}},components:{Button:ee},setup(e,n){const r=A(!1),t=()=>{n.emit("update:visible",!1)},u=()=>{e.closeOnClickOverlay&&t()},s=()=>{e.ok?(r.value=!0,e.ok().then(b=>{b&&(t(),r.value=!1)})):t()},o=()=>{e.cancel&&e.cancel(),t()},a=A(null),i=A(null);return{close:t,onClickOverlay:u,ok:s,cancel:o,isLoading:r,end:b=>{const{x:y,y:$}=b,{offsetTop:I,offsetLeft:q}=b.target;b.target.style.top=I-(i.value-$)+"px",b.target.style.left=q-(a.value-y)+"px"},start:b=>{const{x:y,y:$}=b;console.log(b),a.value=y,i.value=$}}}});const Fp=["draggable"],kp={class:"mmq-dialog"},Bp=h("OK"),Dp=h("Cancel");function Ap(e,n,r,t,u,s){const o=_("Button");return d(),w(Un,{to:"body"},[e.visible?(d(),f(k,{key:0},[p("div",{onClick:n[0]||(n[0]=(...a)=>e.onClickOverlay&&e.onClickOverlay(...a)),class:"mmq-dialog-overlay"}),p("div",{class:"mmq-dialog-wrapper",draggable:e.draggable,onDragend:n[2]||(n[2]=(...a)=>e.end&&e.end(...a)),onDragstart:n[3]||(n[3]=(...a)=>e.start&&e.start(...a))},[p("div",kp,[p("header",null,[W(e.$slots,"title"),p("span",{onClick:n[1]||(n[1]=(...a)=>e.close&&e.close(...a)),class:"mmq-dialog-close"})]),p("main",null,[W(e.$slots,"content")]),p("footer",null,[l(o,{onClick:e.ok,level:"main",loading:e.isLoading},{default:c(()=>[Bp]),_:1},8,["onClick","loading"]),l(o,{onClick:e.cancel},{default:c(()=>[Dp]),_:1},8,["onClick"])])])],40,Fp)],64)):G("",!0)])}const Fn=v($p,[["render",Ap]]),xp=N({components:{Dialog:Fn,Button:ee},setup(){const e=A(!1);return{open:e,toggle:()=>{e.value=!e.value},okCallback:()=>new Promise(u=>{setTimeout(()=>{u(!0)},1e3)}),f2:()=>{window.alert("\u5173\u95ED\u63D0\u9192")}}}}),qp=h("\u5E38\u89C4\u4F7F\u7528"),wp=p("strong",null,"hi",-1),Ip=p("div",null,"hi2",-1),Tp=p("strong",null,"\u52A0\u7C97\u7684\u6807\u9898",-1);function Mp(e,n,r,t,u,s){const o=_("Button"),a=_("Dialog");return d(),f("div",null,[l(o,{onClick:e.toggle},{default:c(()=>[qp]),_:1},8,["onClick"]),l(a,{visible:e.open,"onUpdate:visible":n[0]||(n[0]=i=>e.open=i),closeOnClickOverlay:!0,ok:e.okCallback,cancel:e.f2},{content:c(()=>[wp,Ip]),title:c(()=>[Tp]),_:1},8,["visible","ok","cancel"])])}const Sp=v(xp,[["render",Mp]]),Qu=e=>{const{title:n,content:r,ok:t,cancel:u,closeOnClickOverlay:s}=e,o=document.createElement("div");document.body.append(o);const a=()=>{i.unmount(),o.remove()},i=Wn({render(){return Re(Fn,{visible:!0,"onUpdate:visible":g=>{g===!1&&a()},ok:t,cancel:u,closeOnClickOverlay:s},{title(){return Re("h2",n)},content(){return Re("p",{style:{color:"#443456"}},r)}})}});i.mount(o)},Vp=N({components:{Button:ee},setup(){return{showDialog:()=>{Qu({title:Re("strong",{},"\u6807\u9898"),content:"\u4F60\u597D",ok:()=>new Promise(n=>{setTimeout(()=>{n(!0)},1e3)}),cancel(){console.log("cancel")},closeOnClickOverlay:!0})}}}}),Rp=h("\u51FD\u6570\u5F0F\u8C03\u7528");function Pp(e,n,r,t,u,s){const o=_("Button");return d(),f("div",null,[l(o,{onClick:e.showDialog},{default:c(()=>[Rp]),_:1},8,["onClick"])])}const Lp=v(Vp,[["render",Pp]]),Ku=N({components:{Dialog:Fn,Button:ee},setup(){const e=A(!1);return{open:e,toggle:()=>{e.value=!e.value},okCallback:()=>new Promise(u=>{setTimeout(()=>{u(!0)},1e3)}),f2:()=>{window.alert("\u8FD9\u662F\u4E00\u4E2A\u5173\u95ED\u63D0\u9192")}}}});function ro(e){e.__sourceCode=`<template>\r
  <div>\r
    <Button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>\r
    <Dialog v-model:visible="open" draggable :closeOnClickOverlay="false" :ok="okCallback" :cancel="f2">\r
      <template v-slot:title>\r
        <strong>\u52A0\u7C97\u7684\u6807\u9898</strong>\r
      </template>\r
      <template v-slot:content>\r
        <strong>Hello World</strong>\r
        <div>Hello World</div>\r
      </template>\r
    </Dialog>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Dialog from '../../../lib/Dialog.vue';\r
import Button from '../../../lib/Button.vue';\r
import {ref, defineComponent} from 'vue';\r
export default defineComponent({\r
  components: {Dialog, Button},\r
  setup() {\r
    const open = ref(false);\r
    const toggle = () => {\r
      open.value = !open.value;\r
    };\r
    const okCallback = () => {\r
      return new Promise((resolve) => {\r
        setTimeout(() => {\r
          resolve(true);\r
        }, 1000);\r
      });\r
    };\r
    const f2 = () => {\r
      window.alert('\u8FD9\u662F\u4E00\u4E2A\u5173\u95ED\u63D0\u9192');\r
    };\r
    return {open, toggle, okCallback, f2};\r
  }\r
});\r
<\/script>`,e.__sourceCodeTitle=" \u652F\u6301\u62D6\u62FD "}const Op=h("\u6253\u5F00\u5BF9\u8BDD\u6846"),Gp=p("strong",null,"\u52A0\u7C97\u7684\u6807\u9898",-1),Np=p("strong",null,"Hello World",-1),zp=p("div",null,"Hello World",-1);function Hp(e,n,r,t,u,s){const o=_("Button"),a=_("Dialog");return d(),f("div",null,[l(o,{onClick:e.toggle},{default:c(()=>[Op]),_:1},8,["onClick"]),l(a,{visible:e.open,"onUpdate:visible":n[0]||(n[0]=i=>e.open=i),draggable:"",closeOnClickOverlay:!1,ok:e.okCallback,cancel:e.f2},{title:c(()=>[Gp]),content:c(()=>[Np,zp]),_:1},8,["visible","ok","cancel"])])}typeof ro=="function"&&ro(Ku);const jp=v(Ku,[["render",Hp]]),Up={name:"dialogDemo",components:{Dialog:Fn,Button:ee,Demo:ne},setup(){Q(()=>{te()});const e=A(!1);return{x:e,toggle:()=>{e.value=!e.value},f1:()=>!1,f2:()=>{},showDialog:()=>{Qu({title:"\u6807\u9898",content:"\u4F60\u597D",ok(){console.log("ok")},cancel(){console.log("cancel")},closeOnClickOverlay:!1})},Dialog3Demo:jp,Dialog5Demo:Lp,Dialog4Demo:Sp}}};function Wp(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[l(o,{component:t.Dialog4Demo},null,8,["component"]),l(o,{component:t.Dialog5Demo},null,8,["component"]),l(o,{component:t.Dialog3Demo},null,8,["component"])],64)}const Qp=v(Up,[["render",Wp]]),Kp={name:"MqTab"};function Zp(e,n,r,t,u,s){return d(),f("div",null,[W(e.$slots,"default")])}const an=v(Kp,[["render",Zp]]),Yp=N({name:"MqTabs",props:{modelValue:{type:String},type:{type:String}},setup(e,n){const r=n.slots.default(),t=A(),u=A(),s=A();je(()=>{if(t.value&&u.value){const{width:m}=t.value.getBoundingClientRect(),{left:b}=s.value.getBoundingClientRect(),{left:y}=t.value.getBoundingClientRect(),$=y-b;u.value.style.left=$+"px",u.value.style.width=m+"px"}}),r.forEach(m=>{if(m.type.name!==an.name)throw new Error("Tabs \u5B50\u6807\u7B7E\u5FC5\u987B\u662FTab")});const o=M(()=>{if(e.type==="border-card")return"mmq-tabs-nav-border-wrapper"}),a=M(()=>r.find(m=>m.props.title===e.modelValue)),i=r.map(m=>m.props.title);return{defaults:r,titles:i,current:a,select:m=>{n.emit("update:modelValue",m)},selectedItem:t,indicator:u,container:s,borderCardClass:o}}});const Xp={class:"mmq-tabs"},Jp=["onClick"],em={key:0,class:"mmq-tabs-nav-indicator",ref:"indicator"},nm={class:"mmq-tabs-content"};function tm(e,n,r,t,u,s){return d(),f("div",Xp,[p("div",{class:j(["mmq-tabs-nav",e.borderCardClass]),ref:"container"},[(d(!0),f(k,null,J(e.titles,(o,a)=>(d(),f("div",{class:j(["mmq-tabs-nav-item",{selected:o===e.modelValue},e.type?`mmq-tabs-nav-type-${e.type}`:null]),onClick:i=>e.select(o),ref_for:!0,ref:i=>{o===e.modelValue&&(e.selectedItem=i)},key:a},L(o),11,Jp))),128)),e.type?G("",!0):(d(),f("div",em,null,512))],2),p("div",nm,[(d(),w(ke(e.current),{class:"mmq-tabs-content-item",key:e.current.props.title}))])])}const kn=v(Yp,[["render",tm],["__scopeId","data-v-81481ec1"]]),Zu={components:{Tabs:kn,Tab:an},setup(){return{x:A("\u5BFC\u822A2")}}};function uo(e){e.__sourceCode=`<template>\r
  <Tabs v-model="x">\r
    <Tab title="\u5BFC\u822A1">\u5185\u5BB91</Tab>\r
    <Tab title="\u5BFC\u822A2">\u5185\u5BB92</Tab>\r
  </Tabs>\r
</template>\r
\r
<script lang="ts">\r
import Tabs from '../../../lib/Tabs.vue'\r
import Tab from '../../../lib/Tab.vue'\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  components: {\r
    Tabs,\r
    Tab\r
  },\r
  setup() {\r
    const x = ref('\u5BFC\u822A2')\r
    return {\r
      x\r
    }\r
  }\r
}\r
<\/script>`,e.__sourceCodeTitle=" \u5E38\u89C4\u4F7F\u7528 "}const om=h("\u5185\u5BB91"),rm=h("\u5185\u5BB92");function um(e,n,r,t,u,s){const o=_("Tab"),a=_("Tabs");return d(),w(a,{modelValue:t.x,"onUpdate:modelValue":n[0]||(n[0]=i=>t.x=i)},{default:c(()=>[l(o,{title:"\u5BFC\u822A1"},{default:c(()=>[om]),_:1}),l(o,{title:"\u5BFC\u822A2"},{default:c(()=>[rm]),_:1})]),_:1},8,["modelValue"])}typeof uo=="function"&&uo(Zu);const am=v(Zu,[["render",um]]),Yu={components:{Tabs:kn,Tab:an},setup(){return{x:A("\u5BFC\u822A2")}}};function ao(e){e.__sourceCode=`<template>\r
  <Tabs type="card" v-model="x">\r
    <Tab title="\u5BFC\u822A1">\u5185\u5BB91</Tab>\r
    <Tab title="\u5BFC\u822A2">\u5185\u5BB92</Tab>\r
  </Tabs>\r
</template>\r
\r
<script lang="ts">\r
import Tabs from '../../../lib/Tabs.vue'\r
import Tab from '../../../lib/Tab.vue'\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  components: {\r
    Tabs,\r
    Tab\r
  },\r
  setup() {\r
    const x = ref('\u5BFC\u822A2')\r
    return {\r
      x\r
    }\r
  }\r
}\r
<\/script>`,e.__sourceCodeTitle=" \u5361\u7247\u98CE\u683C\u7684\u6807\u7B7E "}const lm=h("\u5185\u5BB91"),sm=h("\u5185\u5BB92");function im(e,n,r,t,u,s){const o=_("Tab"),a=_("Tabs");return d(),w(a,{type:"card",modelValue:t.x,"onUpdate:modelValue":n[0]||(n[0]=i=>t.x=i)},{default:c(()=>[l(o,{title:"\u5BFC\u822A1"},{default:c(()=>[lm]),_:1}),l(o,{title:"\u5BFC\u822A2"},{default:c(()=>[sm]),_:1})]),_:1},8,["modelValue"])}typeof ao=="function"&&ao(Yu);const cm=v(Yu,[["render",im]]),Xu={components:{Tabs:kn,Tab:an},setup(){return{x:A("\u5BFC\u822A2")}}};function lo(e){e.__sourceCode=`<template>\r
  <Tabs type="border-card" v-model="x">\r
    <Tab title="\u5BFC\u822A1">\u5185\u5BB91</Tab>\r
    <Tab title="\u5BFC\u822A2">\u5185\u5BB92</Tab>\r
  </Tabs>\r
</template>\r
\r
<script lang="ts">\r
import Tabs from '../../../lib/Tabs.vue'\r
import Tab from '../../../lib/Tab.vue'\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  components: {\r
    Tabs,\r
    Tab\r
  },\r
  setup() {\r
    const x = ref('\u5BFC\u822A2')\r
    return {\r
      x\r
    }\r
  }\r
}\r
<\/script>`,e.__sourceCodeTitle=" \u5E26\u6709\u8FB9\u6846\u7684\u5361\u7247\u98CE\u683C "}const dm=h("\u5185\u5BB91"),pm=h("\u5185\u5BB92");function mm(e,n,r,t,u,s){const o=_("Tab"),a=_("Tabs");return d(),w(a,{type:"border-card",modelValue:t.x,"onUpdate:modelValue":n[0]||(n[0]=i=>t.x=i)},{default:c(()=>[l(o,{title:"\u5BFC\u822A1"},{default:c(()=>[dm]),_:1}),l(o,{title:"\u5BFC\u822A2"},{default:c(()=>[pm]),_:1})]),_:1},8,["modelValue"])}typeof lo=="function"&&lo(Xu);const fm=v(Xu,[["render",mm]]),_m={name:"tabsDemo",components:{Tab:an,Tabs:kn,Demo:ne},setup(){return Q(()=>{te()}),{Tabs1Demo:am,Tabs2Demo:cm,Tabs3Demo:fm}}},hm=p("h1",null,"Tabs \u793A\u4F8B",-1);function gm(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[hm,l(o,{component:t.Tabs1Demo},null,8,["component"]),l(o,{component:t.Tabs2Demo},null,8,["component"]),l(o,{component:t.Tabs3Demo},null,8,["component"])],64)}const vm=v(_m,[["render",gm]]),Em=N({name:"MqCard",props:{listData:Array,shadow:{type:String,default:"always"}},setup(){return{}}});const bm={class:"mmq-card-header"},ym=h("\u5361\u7247\u6807\u9898"),Cm={class:"mmq-card-body"};function $m(e,n,r,t,u,s){return d(),f("div",{class:j(["mmq-card-content",`mmq-card-shadow-${e.shadow}`])},[p("header",bm,[W(e.$slots,"title",{},()=>[ym])]),p("div",Cm,[(d(!0),f(k,null,J(e.listData,(o,a)=>(d(),f("div",{class:"mmq-card-item",key:a},L(o),1))),128))])],2)}const Kn=v(Em,[["render",$m]]),Ju={components:{Card:Kn},setup(){}};function so(e){e.__sourceCode=`<template>\r
  <Card :list-data="[1,2,3,4]">\r
    <template #title>\r
      <span>\u6211\u662F\u6807\u9898</span>\r
    </template>\r
  </Card>\r
</template>\r
\r
<script lang="ts">\r
import Card from "../../../lib/Card.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {Card},\r
  setup() {\r
\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const Fm=p("span",null,"\u6211\u662F\u6807\u9898",-1);function km(e,n,r,t,u,s){const o=_("Card");return d(),w(o,{"list-data":[1,2,3,4]},{title:c(()=>[Fm]),_:1})}typeof so=="function"&&so(Ju);const Bm=v(Ju,[["render",km]]),ea={components:{Card:Kn},setup(){}};function io(e){e.__sourceCode=`<template>\r
  <main>\r
    <div class="cardWrapper">\r
      <Card :list-data="[1,2]">\r
        <template #title>\r
          <span>\u603B\u662F\u663E\u793A</span>\r
        </template>\r
      </Card>\r
    </div>\r
    <div class="cardWrapper">\r
      <Card shadow="hover" :list-data="[1,2]">\r
        <template #title>\r
          <span>\u60AC\u6D6E\u663E\u793A</span>\r
        </template>\r
      </Card>\r
    </div>\r
    <div class="cardWrapper">\r
      <Card shadow="never" :list-data="[1,2]">\r
        <template #title>\r
          <span>\u4ECE\u4E0D\u663E\u793A</span>\r
        </template>\r
      </Card>\r
    </div>\r
  </main>\r
</template>\r
\r
<script lang="ts">\r
import Card from "../../../lib/Card.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {Card},\r
  setup() {\r
  }\r
};\r
<\/script>\r
\r
<style lang="scss" scoped>\r
main {\r
  display: flex;\r
  justify-content: space-between;\r
  .cardWrapper {\r
    width: 32%;\r
  }\r
}\r
</style>`,e.__sourceCodeTitle=" \u5361\u7247\u9634\u5F71 "}const Ct=e=>(ge("data-v-0bdf48dd"),e=e(),ve(),e),Dm={class:"cardWrapper"},Am=Ct(()=>p("span",null,"\u603B\u662F\u663E\u793A",-1)),xm={class:"cardWrapper"},qm=Ct(()=>p("span",null,"\u60AC\u6D6E\u663E\u793A",-1)),wm={class:"cardWrapper"},Im=Ct(()=>p("span",null,"\u4ECE\u4E0D\u663E\u793A",-1));function Tm(e,n,r,t,u,s){const o=_("Card");return d(),f("main",null,[p("div",Dm,[l(o,{"list-data":[1,2]},{title:c(()=>[Am]),_:1})]),p("div",xm,[l(o,{shadow:"hover","list-data":[1,2]},{title:c(()=>[qm]),_:1})]),p("div",wm,[l(o,{shadow:"never","list-data":[1,2]},{title:c(()=>[Im]),_:1})])])}typeof io=="function"&&io(ea);const Mm=v(ea,[["render",Tm],["__scopeId","data-v-0bdf48dd"]]),Sm=N({name:"CardDemo",components:{Demo:ne},setup(){Q(()=>{te()});const e=U([{key:"1",attr:"v-model:activeName",describe:"\u5F53\u524D\u6FC0\u6D3B\u7684\u9762\u677F(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u7ED1\u5B9A\u503C\u7C7B\u578B\u9700\u8981\u4E3Astring\uFF0C\u5426\u5219\u4E3Aarray)",type:"string (accordion mode) / array (non-accordion mode)",default:"-"},{key:"2",attr:"accordion",describe:"\u662F\u5426\u624B\u98CE\u7434\u6A21\u5F0F",type:"boolean",default:"false"}]),n=U([{title:"\u53C2\u6570",dataIndex:"attr",key:"attr"},{title:"\u8BF4\u660E",dataIndex:"describe",key:"describe"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",dataIndex:"default",key:"default"}]);return{Card1Demo:Bm,Card2Demo:Mm,columns1:n,data1:e}}}),Vm=p("h1",null,"Card\u793A\u4F8B",-1),Rm=p("h2",null,"\u5C5E\u6027",-1);function Pm(e,n,r,t,u,s){const o=_("Demo"),a=_("MqTable");return d(),f(k,null,[Vm,l(o,{component:e.Card1Demo},null,8,["component"]),l(o,{component:e.Card2Demo},null,8,["component"]),l(a,{columns:e.columns1,"data-source":e.data1,bordered:""},{title:c(()=>[Rm]),_:1},8,["columns","data-source"])],64)}const Lm=v(Sm,[["render",Pm]]),Om=N({name:"MqIcon",props:{color:{type:String,default:""},fontSize:{type:[Number,String],default:14}}});function Gm(e,n,r,t,u,s){return d(),f("i",{class:"mmq-icon-wrapper",style:ie({color:e.color,"font-size":e.fontSize+"px"}),"aria-hidden":"true"},[W(e.$slots,"default",{},void 0,!0)],4)}const ln=v(Om,[["render",Gm],["__scopeId","data-v-4560a290"]]),Nm={components:{MqIcon:ln},setup(){}};const zm={style:{margin:"24px 0"}},Hm=jn(`<h3 data-v-67ad0689>1.\u5B89\u88C5\u56FE\u6807\u5E93</h3><div class="InstallWrapper" data-v-67ad0689><pre data-v-67ad0689>        <code data-v-67ad0689>\r
      <span data-v-67ad0689># NPM</span>\r
      <span data-v-67ad0689>$ npm install @element-plus/icons-vue</span>\r
      <span data-v-67ad0689># Yarn</span>\r
      <span data-v-67ad0689>$ yarn add @element-plus/icons-vue</span>\r
      <span data-v-67ad0689># pnpm</span>\r
      <span data-v-67ad0689>$ pnpm install @element-plus/icons-vue</span>\r
          </code>\r
      </pre></div><h3 data-v-67ad0689>2.\u6CE8\u518C\u6240\u6709\u56FE\u6807</h3><div class="InstallWrapper" data-v-67ad0689><pre data-v-67ad0689>        <code data-v-67ad0689>\r
          <strong data-v-67ad0689>\u5728main.ts\u4E2D\u52A0\u5165\u4E0B\u9762\u7684\u4EE3\u7801,\u5373\u53EF\u76F4\u63A5\u4F7F\u7528</strong>\r
\r
          <span data-v-67ad0689>import * as ElementPlusIconsVue from &#39;@element-plus/icons-vue&#39;</span>\r
\r
          <span data-v-67ad0689>const app = createApp(App)</span>\r
          <span data-v-67ad0689>for (const [key, component] of Object.entries(ElementPlusIconsVue)) {</span>\r
            <span data-v-67ad0689>app.component(key, component)</span>\r
          <span data-v-67ad0689>}</span>\r
        </code>\r
      </pre></div>`,4),jm=[Hm];function Um(e,n,r,t,u,s){return d(),f("div",zm,jm)}const Wm=v(Nm,[["render",Um],["__scopeId","data-v-67ad0689"]]),na={components:{MqIcon:ln},setup(){}};function co(e){e.__sourceCode=`<template>\r
  <MqIcon>\r
    <Edit />\r
  </MqIcon>\r
</template>\r
\r
<script lang="ts">\r
import MqIcon from '../../../lib/MqIcon.vue';\r
export default {\r
  components: {MqIcon},\r
  setup() {\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u57FA\u7840\u4F7F\u7528 "}function Qm(e,n,r,t,u,s){const o=_("Edit"),a=_("MqIcon");return d(),w(a,null,{default:c(()=>[l(o)]),_:1})}typeof co=="function"&&co(na);const Km=v(na,[["render",Qm]]),ta={setup(){}};function po(e){e.__sourceCode=`<template>\r
  <MqIcon font-size="30" color="#f92672">\r
    <Edit />\r
  </MqIcon>\r
</template>\r
\r
<script lang="ts">\r
export default {\r
  setup() {\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u53EF\u63A7\u5236\u56FE\u6807\u5927\u5C0F\uFF0C\u989C\u8272 "}function Zm(e,n,r,t,u,s){const o=_("Edit"),a=_("MqIcon");return d(),w(a,{"font-size":"30",color:"#f92672"},{default:c(()=>[l(o)]),_:1})}typeof po=="function"&&po(ta);const Ym=v(ta,[["render",Zm]]);const Xm={components:{...Gn},name:"Naruto-Icon.vue",setup(){const n=U({icons:(()=>{let r=[];for(const t in Gn)r.push(t);return r})()});return{...hs(n)}}},Jm={class:"mmqIconList"},ef={class:"name"};function nf(e,n,r,t,u,s){return d(),f("div",Jm,[(d(!0),f(k,null,J(e.icons,(o,a)=>(d(),f("div",{class:"mmqIconListWrapper",key:a},[(d(),w(ke(o),{class:"icon",index:a},null,8,["index"])),p("div",ef,L(o),1)]))),128))])}const tf=v(Xm,[["render",nf],["__scopeId","data-v-92ff33c2"]]),oa={components:{MqIconList:tf},setup(){}};function mo(e){e.__sourceCode=`<template>\r
  <MqIconList></MqIconList>\r
</template>\r
\r
<script lang="ts">\r
import MqIconList from './MqIconList.vue';\r
export default {\r
  components: {MqIconList},\r
  setup() {\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u56FE\u6807\u5408\u96C6(\u590D\u5236\u56FE\u6807\u4E0B\u7684\u6807\u9898\u5373\u53EF\u4F7F\u7528) "}function of(e,n,r,t,u,s){const o=_("MqIconList");return d(),w(o)}typeof mo=="function"&&mo(oa);const rf=v(oa,[["render",of]]),uf={components:{Demo:ne,quickUse:Wm},setup(){return Q(()=>{te()}),{Icon1Demo:Km,Icon2Demo:Ym,IconList:rf}}},af=p("h1",null,"Icon\u56FE\u6807",-1);function lf(e,n,r,t,u,s){const o=_("quickUse"),a=_("Demo");return d(),f(k,null,[af,l(o),l(a,{component:t.Icon1Demo},null,8,["component"]),l(a,{component:t.Icon2Demo},null,8,["component"]),l(a,{component:t.IconList},null,8,["component"])],64)}const sf=v(uf,[["render",lf]]),cf=N({name:"MqInput",components:{MqIcon:ln},inheritAttrs:!1,props:{placeholder:{type:String,default:"\u8BF7\u8F93\u5165\u5185\u5BB9"},inputValue:{type:[String,Number],default:""},size:{type:String,default:"normal"},type:{type:String,default:"text"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},maxlength:{type:Number},prefixIcon:{type:String},suffixIcon:{type:String},rows:{type:Number,default:2}},emits:["input","change","focus","blur","mouseleave","mouseenter","keydown","update:inputValue"],setup(e,n){const r=A(),t=()=>{r.value.style.borderColor="#409eff"},u=()=>{r.value.style.borderColor="#dcdfe6"},s=()=>{n.emit("input",$.value),n.emit("update:inputValue",$.value)},o=()=>{$.value="",n.emit("update:inputValue","")},a=M(()=>`mmq-size-${e.size}`),i=M(()=>e.size==="large"?18:e.size==="normal"?16:14),g=()=>{I.value=I.value==="text"?"password":"text"},m=M(()=>$.value.length||0),b=()=>{n.emit("change",$.value)},y=q=>{q.keyCode===13&&n.emit("keydown",q)},$=A();je(()=>{$.value=e.inputValue});const I=A(e.type);return je(()=>{m.value>Number(e.maxlength)&&($.value=$.value.slice(0,Number(e.maxlength)))}),{inputChange:s,childInputValue:$,clearInputValue:o,childInputType:I,changeInputType:g,countNum:m,onkeydownHandle:y,onChangHandle:b,classSize:a,IconSize:i,inputRef:r,handleFocus:t,handleBlur:u}}});const df={key:0,class:"mmq-input-icon-prefix"},pf=["type","disabled","placeholder"],mf={key:1,class:"mmq-input-icon-wrapper"},ff={key:2,class:"mmq-input-icon-wrapper"},_f={key:3,class:"mmq-input-count-wrapper"},hf={key:4,class:"mmq-input-icon-suffix"},gf={key:1,class:"mmq-textarea"},vf=["rows","disabled","placeholder"],Ef={key:0,class:"mmq-textarea-count-wrapper"};function bf(e,n,r,t,u,s){const o=_("MqIcon"),a=_("CircleClose"),i=_("Hide");return e.type!=="textarea"?(d(),f("div",yu({key:0},e.$attrs,{ref:"inputRef",class:[e.disabled?"is-disabled":"",e.classSize,"mmq-input"]}),[e.prefixIcon?(d(),f("span",df,[l(o,null,{default:c(()=>[(d(),w(ke(e.prefixIcon),{color:"#999999"}))]),_:1})])):G("",!0),Te(p("input",{onFocus:n[0]||(n[0]=(...g)=>e.handleFocus&&e.handleFocus(...g)),onBlur:n[1]||(n[1]=(...g)=>e.handleBlur&&e.handleBlur(...g)),"onUpdate:modelValue":n[2]||(n[2]=g=>e.childInputValue=g),type:e.childInputType,class:j(["mmq-input-inner"]),onChange:n[3]||(n[3]=(...g)=>e.onChangHandle&&e.onChangHandle(...g)),onKeydown:n[4]||(n[4]=(...g)=>e.onkeydownHandle&&e.onkeydownHandle(...g)),onInput:n[5]||(n[5]=(...g)=>e.inputChange&&e.inputChange(...g)),disabled:e.disabled,placeholder:e.placeholder},null,40,pf),[[gs,e.childInputValue]]),e.clearable&&e.childInputValue?(d(),f("span",mf,[l(o,{onClick:e.clearInputValue,"font-size":e.IconSize,color:"#d2d0d0"},{default:c(()=>[l(a)]),_:1},8,["onClick","font-size"])])):G("",!0),e.type==="password"&&e.childInputValue?(d(),f("span",ff,[l(o,{onClick:e.changeInputType,"font-size":e.IconSize,color:"#d2d0d0"},{default:c(()=>[l(i)]),_:1},8,["onClick","font-size"])])):G("",!0),e.maxlength?(d(),f("span",_f,L(e.countNum)+"/"+L(e.maxlength),1)):G("",!0),e.suffixIcon?(d(),f("span",hf,[l(o,null,{default:c(()=>[(d(),w(ke(e.suffixIcon),{color:"#999999"}))]),_:1})])):G("",!0)],16)):(d(),f("div",gf,[Te(p("textarea",{onFocus:n[6]||(n[6]=(...g)=>e.handleFocus&&e.handleFocus(...g)),onBlur:n[7]||(n[7]=(...g)=>e.handleBlur&&e.handleBlur(...g)),"onUpdate:modelValue":n[8]||(n[8]=g=>e.childInputValue=g),class:"mmq-textarea-inner",rows:e.rows,onChange:n[9]||(n[9]=(...g)=>e.onChangHandle&&e.onChangHandle(...g)),onKeydown:n[10]||(n[10]=(...g)=>e.onkeydownHandle&&e.onkeydownHandle(...g)),onInput:n[11]||(n[11]=(...g)=>e.inputChange&&e.inputChange(...g)),disabled:e.disabled,placeholder:e.placeholder},null,40,vf),[[vs,e.childInputValue]]),e.maxlength?(d(),f("span",Ef,L(e.countNum)+"/"+L(e.maxlength),1)):G("",!0)]))}const Be=v(cf,[["render",bf],["__scopeId","data-v-d87457d6"]]),ra={components:{Input:Be},setup(){return{inputValue:A("\u674E\u56DB")}}};function fo(e){e.__sourceCode=`<template>\r
  <div>\r
    <Input placeholder="\u8BF7\u8F93\u5165\u59D3\u540D" v-model:input-value="inputValue"/>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Input from '../../../lib/Input.vue';\r
import {ref} from 'vue';\r
\r
export default {\r
  components: {Input},\r
  setup() {\r
    const inputValue = ref('\u674E\u56DB');\r
    return {inputValue};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}function yf(e,n,r,t,u,s){const o=_("Input");return d(),f("div",null,[l(o,{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D","input-value":t.inputValue,"onUpdate:input-value":n[0]||(n[0]=a=>t.inputValue=a)},null,8,["input-value"])])}typeof fo=="function"&&fo(ra);const Cf=v(ra,[["render",yf]]),ua={components:{MqInput:Be},setup(){return{inputValue:A("")}}};function _o(e){e.__sourceCode=`<template>\r
  <div style="display: flex;align-items: center">\r
  <MqInput size="large" clearable v-model="inputValue"/>\r
  <MqInput style="margin: 0 20px;" clearable v-model="inputValue"/>\r
  <MqInput size="small" clearable v-model="inputValue"/>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import MqInput from "../../../lib/Input.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {MqInput},\r
  setup() {\r
    const inputValue = ref('');\r
    return { inputValue};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u652F\u6301\u6E05\u7A7A "}const $f={style:{display:"flex","align-items":"center"}};function Ff(e,n,r,t,u,s){const o=_("MqInput");return d(),f("div",$f,[l(o,{size:"large",clearable:"",modelValue:t.inputValue,"onUpdate:modelValue":n[0]||(n[0]=a=>t.inputValue=a)},null,8,["modelValue"]),l(o,{style:{margin:"0 20px"},clearable:"",modelValue:t.inputValue,"onUpdate:modelValue":n[1]||(n[1]=a=>t.inputValue=a)},null,8,["modelValue"]),l(o,{size:"small",clearable:"",modelValue:t.inputValue,"onUpdate:modelValue":n[2]||(n[2]=a=>t.inputValue=a)},null,8,["modelValue"])])}typeof _o=="function"&&_o(ua);const kf=v(ua,[["render",Ff]]),aa={components:{Input:Be},setup(){return{inputValue:A("")}}};function ho(e){e.__sourceCode=`<template>\r
  <Input disabled v-model="inputValue"/>\r
</template>\r
\r
<script lang="ts">\r
import Input from "../../../lib/Input.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {Input},\r
  setup() {\r
    const inputValue = ref('');\r
    return {inputValue};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u652F\u6301\u7981\u7528 "}function Bf(e,n,r,t,u,s){const o=_("Input");return d(),w(o,{disabled:"",modelValue:t.inputValue,"onUpdate:modelValue":n[0]||(n[0]=a=>t.inputValue=a)},null,8,["modelValue"])}typeof ho=="function"&&ho(aa);const Df=v(aa,[["render",Bf]]),la={components:{Input:Be},setup(){return{inputValue:A("")}}};function go(e){e.__sourceCode=`<template>\r
  <Input type="password" v-model="inputValue"/>\r
</template>\r
\r
<script lang="ts">\r
import Input from "../../../lib/Input.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {Input},\r
  setup() {\r
    const inputValue = ref('');\r
    return {inputValue};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u5BC6\u7801\u6846 "}function Af(e,n,r,t,u,s){const o=_("Input");return d(),w(o,{type:"password",modelValue:t.inputValue,"onUpdate:modelValue":n[0]||(n[0]=a=>t.inputValue=a)},null,8,["modelValue"])}typeof go=="function"&&go(la);const xf=v(la,[["render",Af]]),sa={components:{MqInput:Be},setup(){return{inputValue:A("")}}};function vo(e){e.__sourceCode=`<template>\r
  <div style="display: flex;align-items: center">\r
    <MqInput :maxlength="10" size="large" v-model="inputValue"/>\r
    <MqInput :maxlength="10" style="margin: 0 20px;" clearable v-model="inputValue"/>\r
    <MqInput :maxlength="10" size="small" v-model="inputValue"/>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import MqInput from "../../../lib/Input.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {MqInput},\r
  setup() {\r
    const inputValue = ref('');\r
    return {inputValue};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u957F\u5EA6\u9650\u5236 "}const qf={style:{display:"flex","align-items":"center"}};function wf(e,n,r,t,u,s){const o=_("MqInput");return d(),f("div",qf,[l(o,{maxlength:10,size:"large",modelValue:t.inputValue,"onUpdate:modelValue":n[0]||(n[0]=a=>t.inputValue=a)},null,8,["modelValue"]),l(o,{maxlength:10,style:{margin:"0 20px"},clearable:"",modelValue:t.inputValue,"onUpdate:modelValue":n[1]||(n[1]=a=>t.inputValue=a)},null,8,["modelValue"]),l(o,{maxlength:10,size:"small",modelValue:t.inputValue,"onUpdate:modelValue":n[2]||(n[2]=a=>t.inputValue=a)},null,8,["modelValue"])])}typeof vo=="function"&&vo(sa);const If=v(sa,[["render",wf]]),ia={components:{Input:Be},setup(){return{inputValue:A("")}}};function Eo(e){e.__sourceCode=`<template>\r
  <div style="display: flex; align-items: center">\r
  <Input style="width: 200px; margin-right: 20px;" prefixIcon="edit" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" v-model="inputValue"/>\r
  <Input style="width: 200px" suffixIcon="search" placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6" v-model="inputValue"/>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Input from "../../../lib/Input.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {Input},\r
  setup() {\r
    const inputValue = ref('');\r
    return {inputValue};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u652F\u6301\u56FE\u6807 "}const Tf={style:{display:"flex","align-items":"center"}};function Mf(e,n,r,t,u,s){const o=_("Input");return d(),f("div",Tf,[l(o,{style:{width:"200px","margin-right":"20px"},prefixIcon:"edit",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",modelValue:t.inputValue,"onUpdate:modelValue":n[0]||(n[0]=a=>t.inputValue=a)},null,8,["modelValue"]),l(o,{style:{width:"200px"},suffixIcon:"search",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6",modelValue:t.inputValue,"onUpdate:modelValue":n[1]||(n[1]=a=>t.inputValue=a)},null,8,["modelValue"])])}typeof Eo=="function"&&Eo(ia);const Sf=v(ia,[["render",Mf]]),ca={components:{Input:Be},setup(){return{inputValue:A("")}}};function bo(e){e.__sourceCode=`<template>\r
  <div style="display: flex;align-items: center;">\r
  <Input placeholder="\u8BF7\u8F93\u5165\u59D3\u540D" size="large" v-model:input-value="inputValue"/>\r
  <Input style="margin: 0 20px" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D" v-model:input-value="inputValue"/>\r
  <Input placeholder="\u8BF7\u8F93\u5165\u59D3\u540D" size="small" v-model:input-value="inputValue"/>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Input from "../../../lib/Input.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {Input},\r
  setup() {\r
    const inputValue = ref('');\r
    return {inputValue};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u8F93\u5165\u6846\u5C3A\u5BF8 "}const Vf={style:{display:"flex","align-items":"center"}};function Rf(e,n,r,t,u,s){const o=_("Input");return d(),f("div",Vf,[l(o,{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",size:"large","input-value":t.inputValue,"onUpdate:input-value":n[0]||(n[0]=a=>t.inputValue=a)},null,8,["input-value"]),l(o,{style:{margin:"0 20px"},placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D","input-value":t.inputValue,"onUpdate:input-value":n[1]||(n[1]=a=>t.inputValue=a)},null,8,["input-value"]),l(o,{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",size:"small","input-value":t.inputValue,"onUpdate:input-value":n[2]||(n[2]=a=>t.inputValue=a)},null,8,["input-value"])])}typeof bo=="function"&&bo(ca);const Pf=v(ca,[["render",Rf]]),da={components:{Input:Be},setup(){return{inputValue:A("")}}};function yo(e){e.__sourceCode=`<template>\r
  <div>\r
    \u7528\u4E8E\u8F93\u5165\u591A\u884C\u6587\u672C\u4FE1\u606F\u53EF\u7F29\u653E\u7684\u8F93\u5165\u6846\u3002 \u6DFB\u52A0 type="textarea" \u5C5E\u6027\u6765\u5C06 input \u5143\u7D20\u8F6C\u6362\u4E3A\u539F\u751F\u7684 textarea \u5143\u7D20\u3002\r
\r
    \u6587\u672C\u57DF\u9AD8\u5EA6\u53EF\u901A\u8FC7 rows \u5C5E\u6027\u63A7\u5236\r
    <Input :maxlength="10" type="textarea" :rows="4" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D" size="large" v-model:input-value="inputValue"/>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Input from "../../../lib/Input.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {Input},\r
  setup() {\r
    const inputValue = ref('');\r
    return {inputValue};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u6587\u672C\u57DF "}const Lf=h(' \u7528\u4E8E\u8F93\u5165\u591A\u884C\u6587\u672C\u4FE1\u606F\u53EF\u7F29\u653E\u7684\u8F93\u5165\u6846\u3002 \u6DFB\u52A0 type="textarea" \u5C5E\u6027\u6765\u5C06 input \u5143\u7D20\u8F6C\u6362\u4E3A\u539F\u751F\u7684 textarea \u5143\u7D20\u3002 \u6587\u672C\u57DF\u9AD8\u5EA6\u53EF\u901A\u8FC7 rows \u5C5E\u6027\u63A7\u5236 ');function Of(e,n,r,t,u,s){const o=_("Input");return d(),f("div",null,[Lf,l(o,{maxlength:10,type:"textarea",rows:4,placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",size:"large","input-value":t.inputValue,"onUpdate:input-value":n[0]||(n[0]=a=>t.inputValue=a)},null,8,["input-value"])])}typeof yo=="function"&&yo(da);const Gf=v(da,[["render",Of]]),Nf={components:{Demo:ne},setup(){return Q(()=>{te()}),{Input1Demo:Cf,Input2Demo:kf,Input3Demo:Df,Input4Demo:xf,Input5Demo:If,Input6Demo:Sf,Input7Demo:Pf,Input8Demo:Gf}}},zf=p("h1",null,"Input\u793A\u4F8B",-1);function Hf(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[zf,l(o,{component:t.Input1Demo},null,8,["component"]),l(o,{component:t.Input2Demo},null,8,["component"]),l(o,{component:t.Input3Demo},null,8,["component"]),l(o,{component:t.Input4Demo},null,8,["component"]),l(o,{component:t.Input5Demo},null,8,["component"]),l(o,{component:t.Input6Demo},null,8,["component"]),l(o,{component:t.Input7Demo},null,8,["component"]),l(o,{component:t.Input8Demo},null,8,["component"])],64)}const jf=v(Nf,[["render",Hf]]),Uf=e=>e===void 0;function ut(e,n){return e=e.__proto__.constructor,n?new e(n):new e}function Rn(e,n){return n?pa(e,n):e}function pa(e,n){if(e)switch(Object.prototype.toString.call(e)){case"[object Object]":var r=Object.create(e.__proto__);for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=Rn(e[t],n));return r;case"[object Date]":case"[object Function]":case"[object RegExp]":return ut(e,e.valueOf());case"[object Array]":case"[object Arguments]":{const t=[];return e.forEach(u=>{t.push(Rn(u,n))}),t}case"[object Set]":{const t=ut(e);return t.forEach(u=>{t.add(Rn(u,n))}),t}case"[object Map]":{const t=ut(e);return t.forEach(u=>{t.set(Rn(u,n))}),t}}return e}function pt(e,n){return e&&pa(e,n)}function Wf(e,n=1e3){let r=0;return(...t)=>{var u=Date.now();u-r>=n&&(e.apply(t),r=u)}}function Bn(e){return"(\\d{"+e+"})"}const Ye=Bn(2),mn=Bn("1,2"),Qf=Bn("1,7"),Kf=Bn("3,4"),Zf="(([zZ])|([-+]\\d{2}:?\\d{2}))",Co=[["yyyy",Kf],["yy",Ye],["MM",Ye],["M",mn],["dd",Ye],["d",mn],["HH",Ye],["H",mn],["mm",Ye],["m",mn],["ss",Ye],["s",mn],["SSS",Bn(3)],["S",Qf],["Z",Zf]],Yf={},Xf=["\\[([^\\]]+)\\]"];for(let e=0;e<Co.length;e++){const n=Co[e];Yf[n[0]]=n[1]+"?",Xf.push(n[0])}function Pn(e,n){return e.repeat?e.repeat(n):(n=isNaN(n)?[]:new Array(parseInt(n))).join(e)+(0<n.length?e:"")}function at(e,n){return e.substring(0,n)+"."+e.substring(n,e.length)}function on(e){var n,r,t,u,s,o,a,i=e.toString(),g=i.match(/^([-+]?)((\d+)|((\d+)?[.](\d+)?))e([-+]{1})([0-9]+)$/);return g?(e=e<0?"-":"",n=g[3]||"",r=g[5]||"",t=g[6]||"",u=g[7],g=g[8],s=Number(g)-t.length,o=Number(g)-n.length,a=Number(g)-r.length,u==="+"?n?e+n+Pn("0",s):0<s?e+r+t+Pn("0",s):e+r+at(t,Number(g)):n?0<o?e+"0."+Pn("0",Math.abs(o))+n:e+at(n,o):0<a?e+"0."+Pn("0",Math.abs(a))+r+t:e+at(r,a)+t):i}function $o(e){return typeof e=="number"?e:isNaN(parseFloat(e))?0:parseFloat(e)}function Jf(e,n){return e=on(e),n=on(n),parseInt(e.replace(".",""))*parseInt(n.replace(".",""))/Math.pow(10,(e.split(".")[1]||"").length+(n.split(".")[1]||"").length)}function zn(e,n){return Jf($o(e),$o(n))}function e5(e,n){var t=on(e),r=on(n),t=Math.pow(10,Math.max((t.split(".")[1]||"").length,(r.split(".")[1]||"").length));return(zn(e,t)+zn(n,t))/t}function n5(e,n){var t=on(e),r=on(n),t=Math.pow(10,Math.max((t.split(".")[1]||"").length,(r.split(".")[1]||"").length));return(zn(e,t)-zn(n,t))/t}const t5=N({name:"InputNumber",components:{Input:Be},props:{modelValue:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},min:{type:Number,default:-1/0},max:{type:Number,default:1/0},step:{type:Number,default:1},precision:{type:Number,default:void 0}},setup(e,n){const r=A(),t=A(),u=()=>!e.disabled&&r.value>e.min,s=()=>!e.disabled&&r.value<e.max,o=M(()=>{if(!u())return{cursor:"not-Allowed"}}),a=M(()=>{if(!u())return{pointerEvents:"none"}}),i=M(()=>{if(!s())return{cursor:"not-Allowed"}}),g=M(()=>{if(!s())return{pointerEvents:"none"}});return je(()=>{r.value=e.modelValue,e.precision&&(r.value=Number(e.modelValue).toFixed(e.precision))}),{handleButtonAdd:()=>{const $=e5(e.modelValue,e.step);$>e.max?n.emit("update:modelValue",e.max):n.emit("update:modelValue",$)},handleButtonMinus:()=>{const $=n5(e.modelValue,e.step);$<e.min?n.emit("update:modelValue",e.min):n.emit("update:modelValue",$)},handleChange:$=>{/^-?\d*\.?\d+$/.test($)?$=Number($):$=0,$?n.emit("update:modelValue",$):n.emit("update:modelValue",0)},inputValue:r,inputNumberRef:t,canMinusClick:u,canIncreaseClick:s,MinusNotAllowedStyle:o,MinusPointerNoneStyle:a,IncreaseNotAllowedStyle:i,IncreasePointerNoneStyle:g}}});function o5(e,n,r,t,u,s){const o=_("Plus"),a=_("MqIcon"),i=_("Input"),g=_("Minus");return d(),f("div",{ref:"inputNumberRef",class:j(["mmq-inputNumber",e.disabled&&"disabled"])},[p("div",{style:ie(e.MinusNotAllowedStyle)},[p("div",{style:ie(e.MinusPointerNoneStyle),class:j(["mmq-inputNumber-decrease"]),onClick:n[0]||(n[0]=bn((...m)=>e.handleButtonMinus&&e.handleButtonMinus(...m),["prevent"]))},[l(a,null,{default:c(()=>[l(o)]),_:1})],4)],4),l(i,{disabled:e.disabled,placeholder:"","input-value":e.inputValue,"onUpdate:input-value":n[1]||(n[1]=m=>e.inputValue=m),onChange:e.handleChange},null,8,["disabled","input-value","onChange"]),p("div",{style:ie(e.IncreaseNotAllowedStyle)},[p("div",{style:ie(e.IncreasePointerNoneStyle),class:"mmq-inputNumber-increase",onClick:n[2]||(n[2]=bn((...m)=>e.handleButtonAdd&&e.handleButtonAdd(...m),["stop"]))},[l(a,null,{default:c(()=>[l(g)]),_:1})],4)],4)],2)}const sn=v(t5,[["render",o5],["__scopeId","data-v-a6170758"]]),ma={components:{InputNumber:sn},setup(){return{num:A(1)}}};function Fo(e){e.__sourceCode=`<template>\r
  <h5>\u8981\u4F7F\u7528\u5B83\uFF0C\u53EA\u9700\u8981\u5728\u5143\u7D20\u4E2D\u4F7F\u7528 v-model \u7ED1\u5B9A\u53D8\u91CF\u5373\u53EF\uFF0C\u53D8\u91CF\u7684\u521D\u59CB\u503C\u5373\u4E3A\u9ED8\u8BA4\u503C</h5>\r
  <InputNumber v-model="num"/>\r
</template>\r
\r
<script lang="ts">\r
import InputNumber from "../../../lib/InputNumber.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {InputNumber},\r
  setup() {\r
    const num = ref(1);\r
    return {num};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const r5=p("h5",null,"\u8981\u4F7F\u7528\u5B83\uFF0C\u53EA\u9700\u8981\u5728\u5143\u7D20\u4E2D\u4F7F\u7528 v-model \u7ED1\u5B9A\u53D8\u91CF\u5373\u53EF\uFF0C\u53D8\u91CF\u7684\u521D\u59CB\u503C\u5373\u4E3A\u9ED8\u8BA4\u503C",-1);function u5(e,n,r,t,u,s){const o=_("InputNumber");return d(),f(k,null,[r5,l(o,{modelValue:t.num,"onUpdate:modelValue":n[0]||(n[0]=a=>t.num=a)},null,8,["modelValue"])],64)}typeof Fo=="function"&&Fo(ma);const a5=v(ma,[["render",u5]]),fa={components:{InputNumber:sn},setup(){return{num:A(1)}}};function ko(e){e.__sourceCode=`<template>\r
  <h5>disabled\u5C5E\u6027\u63A5\u53D7\u4E00\u4E2A Boolean\uFF0C\u8BBE\u7F6E\u4E3Atrue\u5373\u53EF\u7981\u7528\u6574\u4E2A\u7EC4\u4EF6\u3002</h5>\r
  <InputNumber disabled v-model="num"/>\r
</template>\r
\r
<script lang="ts">\r
import InputNumber from "../../../lib/InputNumber.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {InputNumber},\r
  setup() {\r
    const num = ref(1);\r
    return {num};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u7981\u7528\u72B6\u6001 "}const l5=p("h5",null,"disabled\u5C5E\u6027\u63A5\u53D7\u4E00\u4E2A Boolean\uFF0C\u8BBE\u7F6E\u4E3Atrue\u5373\u53EF\u7981\u7528\u6574\u4E2A\u7EC4\u4EF6\u3002",-1);function s5(e,n,r,t,u,s){const o=_("InputNumber");return d(),f(k,null,[l5,l(o,{disabled:"",modelValue:t.num,"onUpdate:modelValue":n[0]||(n[0]=a=>t.num=a)},null,8,["modelValue"])],64)}typeof ko=="function"&&ko(fa);const i5=v(fa,[["render",s5]]),_a={components:{InputNumber:sn},setup(){return{num:A(1)}}};function Bo(e){e.__sourceCode=`<template>\r
  <h5>max,min\u5C5E\u6027\u63A5\u53D7\u4E00\u4E2A Number\uFF0C\u8BBE\u5B9A\u503C\u7684\u8303\u56F4\u3002</h5>\r
  <InputNumber :min="0" :max="10" v-model="num"/>\r
</template>\r
\r
<script lang="ts">\r
import InputNumber from "../../../lib/InputNumber.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {InputNumber},\r
  setup() {\r
    const num = ref(1);\r
    return {num};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u6700\u5927\u503C\u6700\u5C0F\u503C\u9650\u5236 "}const c5=p("h5",null,"max,min\u5C5E\u6027\u63A5\u53D7\u4E00\u4E2A Number\uFF0C\u8BBE\u5B9A\u503C\u7684\u8303\u56F4\u3002",-1);function d5(e,n,r,t,u,s){const o=_("InputNumber");return d(),f(k,null,[c5,l(o,{min:0,max:10,modelValue:t.num,"onUpdate:modelValue":n[0]||(n[0]=a=>t.num=a)},null,8,["modelValue"])],64)}typeof Bo=="function"&&Bo(_a);const p5=v(_a,[["render",d5]]),ha={components:{InputNumber:sn},setup(){return{num:A(1)}}};function Do(e){e.__sourceCode=`<template>\r
  <h5>\u5141\u8BB8\u5B9A\u4E49\u9012\u589E\u9012\u51CF\u7684\u6B65\u8FDB\u63A7\u5236\uFF0C\u8BBE\u7F6E step \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6B65\u957F\u3002</h5>\r
  <InputNumber :step="0.1" :min="0" :max="10" v-model="num"/>\r
</template>\r
\r
<script lang="ts">\r
import InputNumber from "../../../lib/InputNumber.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {InputNumber},\r
  setup() {\r
    const num = ref(1);\r
    return {num};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u6B65\u8FDB "}const m5=p("h5",null,"\u5141\u8BB8\u5B9A\u4E49\u9012\u589E\u9012\u51CF\u7684\u6B65\u8FDB\u63A7\u5236\uFF0C\u8BBE\u7F6E step \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6B65\u957F\u3002",-1);function f5(e,n,r,t,u,s){const o=_("InputNumber");return d(),f(k,null,[m5,l(o,{step:.1,min:0,max:10,modelValue:t.num,"onUpdate:modelValue":n[0]||(n[0]=a=>t.num=a)},null,8,["step","modelValue"])],64)}typeof Do=="function"&&Do(ha);const _5=v(ha,[["render",f5]]),ga={components:{InputNumber:sn},setup(){return{num:A(1)}}};function Ao(e){e.__sourceCode=`<template>\r
  <h5>\u8BBE\u7F6E precision \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6570\u503C\u7CBE\u5EA6\uFF0C\u63A5\u6536\u4E00\u4E2A Number\u3002<span class="tipWarning">(TIP:precision \u7684\u503C\u5FC5\u987B\u662F\u4E00\u4E2A\u975E\u8D1F\u6574\u6570\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5C0F\u4E8E step \u7684\u5C0F\u6570\u4F4D\u6570\u3002)</span></h5>\r
  <InputNumber :precision="2" :step="0.1" :min="0" :max="10" v-model="num"/>\r
</template>\r
\r
<script lang="ts">\r
import InputNumber from "../../../lib/InputNumber.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {InputNumber},\r
  setup() {\r
    const num = ref(1);\r
    return {num};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u7CBE\u5EA6 "}const h5=p("h5",null,[h("\u8BBE\u7F6E precision \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6570\u503C\u7CBE\u5EA6\uFF0C\u63A5\u6536\u4E00\u4E2A Number\u3002"),p("span",{class:"tipWarning"},"(TIP:precision \u7684\u503C\u5FC5\u987B\u662F\u4E00\u4E2A\u975E\u8D1F\u6574\u6570\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5C0F\u4E8E step \u7684\u5C0F\u6570\u4F4D\u6570\u3002)")],-1);function g5(e,n,r,t,u,s){const o=_("InputNumber");return d(),f(k,null,[h5,l(o,{precision:2,step:.1,min:0,max:10,modelValue:t.num,"onUpdate:modelValue":n[0]||(n[0]=a=>t.num=a)},null,8,["step","modelValue"])],64)}typeof Ao=="function"&&Ao(ga);const v5=v(ga,[["render",g5]]),E5={components:{Demo:ne},setup(){return Q(()=>{te()}),{InputNumber1:a5,InputNumber2:i5,InputNumber3:p5,InputNumber4:_5,InputNumber5:v5}}},b5=p("h1",null,"InputNumber\u793A\u4F8B",-1);function y5(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[b5,l(o,{component:t.InputNumber1},null,8,["component"]),l(o,{component:t.InputNumber2},null,8,["component"]),l(o,{component:t.InputNumber3},null,8,["component"]),l(o,{component:t.InputNumber4},null,8,["component"]),l(o,{component:t.InputNumber5},null,8,["component"])],64)}const C5=v(E5,[["render",y5]]),$5={name:"MqLoading",props:{loading:{type:Boolean,default:!1},text:{type:String},background:{type:String,default:"hsla(0,0%,100%,.9)"}},setup(){}};const F5=e=>(ge("data-v-a3939b9d"),e=e(),ve(),e),k5={key:0,class:"mmq-loading-wrapper",style:{"'background-color'":"background"}},B5=F5(()=>p("div",{class:"sk-chase"},[p("div",{class:"sk-chase-dot"}),p("div",{class:"sk-chase-dot"}),p("div",{class:"sk-chase-dot"}),p("div",{class:"sk-chase-dot"}),p("div",{class:"sk-chase-dot"}),p("div",{class:"sk-chase-dot"})],-1)),D5={key:0,class:"textWrapper"};function A5(e,n,r,t,u,s){return d(),w(Un,{to:"body"},[r.loading?(d(),f("div",k5,[B5,r.text?(d(),f("div",D5,[p("span",null,L(r.text),1)])):G("",!0)])):G("",!0)])}const $t=v($5,[["render",A5],["__scopeId","data-v-a3939b9d"]]);function xo(e){e.__sourceCode=`<template>\r
  <Loading :loading="loading" text="\u6B63\u5728\u52A0\u8F7D..."></Loading>\r
  <Button @click="openLoading">\u6253\u5F00Loading</Button>\r
</template>\r
\r
<script>\r
import Loading from '../../../lib/Loading.vue'\r
import Button from '../../../lib/Button.vue'\r
import {ref} from 'vue'\r
export default {\r
  name: 'Loading1.demo',\r
  components: {Button,Loading},\r
  setup(){\r
    const loading = ref(false)\r
    const openLoading = ()=>{\r
      loading.value = true\r
      setTimeout(()=>{\r
        loading.value = false\r
      },15000)\r
    }\r
    return {\r
      openLoading,loading\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u7EC4\u4EF6\u8C03\u7528\u65B9\u5F0F "}const va={name:"Loading1.demo",components:{Button:ee,Loading:$t},setup(){const e=A(!1);return{openLoading:()=>{e.value=!0,setTimeout(()=>{e.value=!1},15e3)},loading:e}}},x5=h("\u6253\u5F00Loading");function q5(e,n,r,t,u,s){const o=_("Loading"),a=_("Button");return d(),f(k,null,[l(o,{loading:t.loading,text:"\u6B63\u5728\u52A0\u8F7D..."},null,8,["loading"]),l(a,{onClick:t.openLoading},{default:c(()=>[x5]),_:1},8,["onClick"])],64)}typeof xo=="function"&&xo(va);const w5=v(va,[["render",q5]]),I5=e=>{const{text:n,background:r}=e,t=document.createElement("div");document.body.appendChild(t);const u=()=>{s.unmount(),t.remove()},s=Wn({render(){return Re($t,{loading:!0,text:n,background:r})}});return s.mount(t),Object.assign(s,{$close:u}),s},Ea={name:"Loading2.demo",components:{Button:ee},setup(){const e=A();return{open:()=>{e.value=I5({text:"\u52A0\u8F7D\u4E2D",background:"rgba(0,0,0,0.8)"}),setTimeout(()=>{e.value.$close()},1500)}}}};function qo(e){e.__sourceCode=`<template>\r
  <Button @click="open">\u6253\u5F00Loading</Button>\r
</template>\r
\r
<script lang="ts">\r
import Button from '../../../lib/Button.vue'\r
import {openLoading} from '../../../lib/openLoading'\r
import {ref} from 'vue';\r
export default {\r
  name: 'Loading2.demo',\r
  components: {Button},\r
  setup(){\r
    const loadingInstance = ref()\r
    const open = ()=>{\r
      loadingInstance.value = openLoading({text: '\u52A0\u8F7D\u4E2D',background: 'rgba(0,0,0,0.8)'})\r
      setTimeout(()=>{\r
        loadingInstance.value.$close()\r
      },1500)\r
    }\r
    return {\r
      open\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u51FD\u6570\u8C03\u7528\u65B9\u5F0F "}const T5=h("\u6253\u5F00Loading");function M5(e,n,r,t,u,s){const o=_("Button");return d(),w(o,{onClick:t.open},{default:c(()=>[T5]),_:1},8,["onClick"])}typeof qo=="function"&&qo(Ea);const S5=v(Ea,[["render",M5]]),V5={name:"LoadingDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Loading1Demo:w5,Loading2Demo:S5}}},R5=p("h1",null,"Loading \u793A\u4F8B",-1);function P5(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[R5,l(o,{component:t.Loading1Demo},null,8,["component"]),l(o,{component:t.Loading2Demo},null,8,["component"])],64)}const L5=v(V5,[["render",P5]]),O5=N({name:"MqMessage",components:{MqIcon:ln},props:{close:{type:Function},message:{type:String,required:!0},canClose:{type:Boolean,default:!0},type:{type:String,default:"SuccessFilled",validator(e){return["SuccessFilled","CircleCloseFilled","WarningFilled","InfoFilled"].indexOf(e)>=0}},top:{type:Number},displayTime:{type:Number,default:3}},setup(e){const n=document.querySelector(".mmq-messageWrapper");n&&n.remove()}});const G5={class:"mmq-message"};function N5(e,n,r,t,u,s){const o=_("MqIcon");return d(),w(Un,{to:"body"},[p("div",{style:ie({top:e.top+"%"}),class:j(["mmq-messageWrapper",`mmq-messageWrapper-${e.type}`])},[l(o,{fontSize:"24"},{default:c(()=>[(d(),w(ke(e.type)))]),_:1}),p("span",G5,L(e.message),1),e.canClose?(d(),f("span",{key:0,class:"close",onClick:n[0]||(n[0]=(...a)=>e.close&&e.close(...a))},"\u2573")):G("",!0)],6)])}const ba=v(O5,[["render",N5]]),fn=e=>{const{message:n,type:r,canClose:t,displayTime:u=3,top:s=10}=e,o=document.createElement("div");document.body.appendChild(o);const a=()=>{o&&(i.unmount(),o.remove())},i=Wn({render(){return Re(ba,{message:n,type:r,canClose:t,close:a,top:s})}});for(const[g,m]of Object.entries(Gn))i.component(g,m);setTimeout(()=>{a()},u*1e3),i.mount(o)},ya={name:"Message1.demo",components:{Button:ee},setup(){return{open:()=>{fn({message:"\u6211\u662F\u901A\u8FC7\u51FD\u6570\u8C03\u7528\u7684message",canClose:!0,displayTime:3})}}}};function wo(e){e.__sourceCode=`<template>\r
  <Button @click="open">\u6253\u5F00Message</Button>\r
</template>\r
\r
<script lang="ts">\r
import Button from '../../../lib/Button.vue'\r
import {openMessage} from '../../../lib/openMessage'\r
export default {\r
  name: 'Message1.demo',\r
  components: {Button},\r
  setup(){\r
    const open = ()=>{\r
      openMessage({\r
        message: '\u6211\u662F\u901A\u8FC7\u51FD\u6570\u8C03\u7528\u7684message',\r
        canClose: true,\r
        displayTime:3\r
      })\r
    }\r
    return {open}\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const z5=h("\u6253\u5F00Message");function H5(e,n,r,t,u,s){const o=_("Button");return d(),w(o,{onClick:t.open},{default:c(()=>[z5]),_:1},8,["onClick"])}typeof wo=="function"&&wo(ya);const j5=v(ya,[["render",H5]]),Ca={components:{Button:ee},setup(){return{openSuccess:()=>{fn({message:"\u8FD9\u662F\u4E00\u6761\u6210\u529F\u63D0\u793A\u6D88\u606F",type:"SuccessFilled",displayTime:100})},openError:()=>{fn({message:"\u8FD9\u662F\u4E00\u6761\u5931\u8D25\u63D0\u793A\u6D88\u606F",type:"CircleCloseFilled",displayTime:100})},openWarning:()=>{fn({message:"\u8FD9\u662F\u4E00\u6761\u63D0\u9192\u6D88\u606F",type:"WarningFilled",displayTime:100})},openInfo:()=>{fn({message:"\u8FD9\u662F\u4E00\u6761\u666E\u901A\u6D88\u606F",type:"InfoFilled",canClose:!1,displayTime:100})}}}};function Io(e){e.__sourceCode=`<template>\r
  <Button @click="openSuccess">\u6210\u529F\u6D88\u606F</Button>\r
  <Button @click="openError">\u5931\u8D25\u6D88\u606F</Button>\r
  <Button @click="openWarning">\u63D0\u9192\u6D88\u606F</Button>\r
  <Button @click="openInfo">\u666E\u901A\u6D88\u606F</Button>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../../../lib/Button.vue";\r
import {openMessage} from '../../../lib/openMessage';\r
export default {\r
  components: {Button},\r
  setup() {\r
    const openSuccess = () => {\r
      openMessage({\r
        message: '\u8FD9\u662F\u4E00\u6761\u6210\u529F\u63D0\u793A\u6D88\u606F',\r
        type: 'SuccessFilled',\r
        displayTime:100,\r
      });\r
    };\r
    const openError = () => {\r
      openMessage({\r
        message: '\u8FD9\u662F\u4E00\u6761\u5931\u8D25\u63D0\u793A\u6D88\u606F',\r
        type: 'CircleCloseFilled',\r
        displayTime:100,\r
      });\r
    };\r
    const openWarning = () => {\r
      openMessage({\r
        message: '\u8FD9\u662F\u4E00\u6761\u63D0\u9192\u6D88\u606F',\r
        type: 'WarningFilled',\r
        displayTime:100,\r
      });\r
    };\r
    const openInfo = () => {\r
      openMessage({\r
        message: '\u8FD9\u662F\u4E00\u6761\u666E\u901A\u6D88\u606F',\r
        type: 'InfoFilled',\r
        canClose: false,\r
        displayTime:100,\r
      });\r
    };\r
    return {openSuccess, openError,openWarning,openInfo};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u4E0D\u540C\u7C7B\u578B "}const U5=h("\u6210\u529F\u6D88\u606F"),W5=h("\u5931\u8D25\u6D88\u606F"),Q5=h("\u63D0\u9192\u6D88\u606F"),K5=h("\u666E\u901A\u6D88\u606F");function Z5(e,n,r,t,u,s){const o=_("Button");return d(),f(k,null,[l(o,{onClick:t.openSuccess},{default:c(()=>[U5]),_:1},8,["onClick"]),l(o,{onClick:t.openError},{default:c(()=>[W5]),_:1},8,["onClick"]),l(o,{onClick:t.openWarning},{default:c(()=>[Q5]),_:1},8,["onClick"]),l(o,{onClick:t.openInfo},{default:c(()=>[K5]),_:1},8,["onClick"])],64)}typeof Io=="function"&&Io(Ca);const Y5=v(Ca,[["render",Z5]]),X5={name:"MessageDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Message1Demo:j5,Message2Demo:Y5}}},J5=p("h1",null,"Message \u793A\u4F8B",-1);function e1(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[J5,l(o,{component:t.Message1Demo},null,8,["component"]),l(o,{component:t.Message2Demo},null,8,["component"])],64)}const n1=v(X5,[["render",e1]]);function Ft(e){return{all:e=e||new Map,on:function(n,r){var t=e.get(n);t?t.push(r):e.set(n,[r])},off:function(n,r){var t=e.get(n);t&&(r?t.splice(t.indexOf(r)>>>0,1):e.set(n,[]))},emit:function(n,r){var t=e.get(n);t&&t.slice().map(function(u){u(r)}),(t=e.get("*"))&&t.slice().map(function(u){u(n,r)})}}}const $a=Ft(),t1=N({name:"MqCollapse",props:{activeName:{type:Array,default:()=>[]},accordion:{type:Boolean,default:!1}},setup(e,n){const r=$n();return $a.on("itemClick",t=>{const{newActiveName:u,uid:s}=t;if(r.uid!==s)return;const o=e.activeName.findIndex(i=>i===u),a=Array.from(e.activeName);e.accordion?o>-1?n.emit("update:activeName",[]):n.emit("update:activeName",[u]):o>-1?(a.splice(o,1),n.emit("update:activeName",a)):n.emit("update:activeName",[...a,u])}),Ie("collapse",e),{}}});const o1={class:"mmq-collapse"};function r1(e,n,r,t,u,s){return d(),f("div",o1,[W(e.$slots,"default",{},void 0,!0)])}const Zn=v(t1,[["render",r1],["__scopeId","data-v-594d2c45"]]),u1=N({name:"MqSpread",props:{visible:{type:Boolean,required:!0},horizontal:{type:Boolean,default:!1},duration:{type:[Number,String],default:300}},setup(e){const n=A({oldPaddingTop:"",oldPaddingBottom:"",oldPaddingLeft:"",oldPaddingRight:"",oldOverflow:""}),r=M(()=>`${e.duration}ms height ease-in-out, ${e.duration}ms padding-top ease-in-out, ${e.duration}ms padding-bottom ease-in-out`),t=M(()=>`${e.duration}ms width ease-in-out, ${e.duration}ms padding-left ease-in-out, ${e.duration}ms padding-right ease-in-out`);return{verticalTransition:r,horizontalTransition:t,dataset:n,beforeEnter:m=>{e.horizontal?(m.style.transition=t.value,n.value.oldPaddingLeft=m.style.paddingLeft,n.value.oldPaddingRight=m.style.paddingRight,m.style.width=String(0),m.style.paddingLeft=String(0),m.style.paddingRight=String(0)):(m.style.transition=r.value,n.value.oldPaddingTop=m.style.paddingTop,n.value.oldPaddingBottom=m.style.paddingBottom,m.style.height=String(0),m.style.paddingTop=String(0),m.style.paddingBottom=String(0))},enter:m=>{n.value.oldOverflow=m.style.overflow,e.horizontal?(m.scrollWidth!==0?m.style.width=m.scrollWidth+"px":m.style.width="",m.style.paddingLeft=n.value.oldPaddingLeft,m.style.paddingRight=n.value.oldPaddingRight):(m.scrollHeight!==0?m.style.height=m.scrollHeight+"px":m.style.height="",m.style.paddingTop=n.value.oldPaddingTop,m.style.paddingBottom=n.value.oldPaddingBottom),m.style.overflow="hidden"},afterEnter:m=>{m.style.transition="",m.style.overflow=n.value.oldOverflow,e.horizontal?m.style.width="":m.style.height=""},beforeLeave:m=>{n.value.oldOverflow=m.style.overflow,e.horizontal?(n.value.oldPaddingLeft=m.style.paddingLeft,n.value.oldPaddingRight=m.style.paddingRight,m.style.width=m.scrollWidth+"px"):(n.value.oldPaddingTop=m.style.paddingTop,n.value.oldPaddingBottom=m.style.paddingBottom,m.style.height=m.scrollHeight+"px"),m.style.overflow="hidden"},leave:m=>{e.horizontal?m.scrollWidth!==0&&(m.style.transition=t.value,m.style.width=String(0),m.style.paddingLeft=String(0),m.style.paddingRight=String(0)):m.scrollHeight!==0&&(m.style.transition=r.value,m.style.height=String(0),m.style.paddingTop=String(0),m.style.paddingBottom=String(0))},afterLeave:m=>{m.style.transition="",m.style.overflow=n.value.oldOverflow,e.horizontal?(m.style.width="",m.style.paddingLeft=n.value.oldPaddingLeft,m.style.paddingRight=n.value.oldPaddingRight):(m.style.height="",m.style.paddingTop=n.value.oldPaddingTop,m.style.paddingBottom=n.value.oldPaddingBottom)}}}}),a1={class:"spread"};function l1(e,n,r,t,u,s){return d(),w(rn,{onBeforeEnter:e.beforeEnter,onEnter:e.enter,onAfterEnter:e.afterEnter,onBeforeLeave:e.beforeLeave,onLeave:e.leave,onAfterLeave:e.afterLeave},{default:c(()=>[Te(p("div",a1,[W(e.$slots,"default")],512),[[Ue,e.visible]])]),_:3},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])}const Yn=v(u1,[["render",l1]]),s1=N({name:"MqCollapseItem",components:{Spread:Yn},props:{name:{type:String,required:!0},title:{type:String},disabled:{type:Boolean,required:!1}},setup(e){const n=$n();return{isActive:M(()=>Fe("collapse").activeName.findIndex(u=>u===e.name)>=0),handleHeaderClick:()=>{e.disabled||$a.emit("itemClick",{newActiveName:e.name,uid:n.parent.uid})}}}});const i1={class:"header-wrapper"},c1={class:"mmq-collapse-item-body"};function d1(e,n,r,t,u,s){const o=_("ArrowRight"),a=_("MqIcon"),i=_("Spread");return d(),f("div",{class:j(["mmq-collapse-item",{isActive:e.isActive}])},[p("div",{class:j(["mmq-collapse-item-header",{disabled:e.disabled}]),onClick:n[0]||(n[0]=(...g)=>e.handleHeaderClick&&e.handleHeaderClick(...g))},[p("div",i1,[W(e.$slots,"header",{},()=>[h(L(e.title),1)],!0)]),l(a,{fontSize:"20"},{default:c(()=>[l(o)]),_:1})],2),l(i,{visible:e.isActive},{default:c(()=>[p("div",c1,[W(e.$slots,"body",{},void 0,!0)])]),_:3},8,["visible"])],2)}const Xn=v(s1,[["render",d1],["__scopeId","data-v-22c84d95"]]),Fa={name:"Collapse1.demo",components:{Collapse:Zn,CollapseItem:Xn},setup(){return{activeName:A(["1"])}}};function To(e){e.__sourceCode=`<template>\r
  <div>\r
    <Collapse v-model:activeName="activeName">\r
      <CollapseItem title="\u6807\u98981" name="1">\r
        <template #body>\u5185\u5BB91</template>\r
      </CollapseItem>\r
      <CollapseItem name="2" disabled>\r
        <template #header>\u6807\u98982</template>\r
        <template #body>\u5185\u5BB92</template>\r
      </CollapseItem>\r
      <CollapseItem name="3">\r
        <template #header>\u6807\u98983</template>\r
        <template #body>\u5185\u5BB93</template>\r
      </CollapseItem>\r
    </Collapse>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Collapse from '../../../lib/Collapse.vue'\r
import CollapseItem from '../../../lib/CollapseItem.vue'\r
import {ref} from 'vue';\r
export default {\r
name: "Collapse1.demo",\r
  components: {Collapse,CollapseItem},\r
  setup(){\r
  const activeName = ref(['1'])\r
    return {\r
    activeName\r
    }\r
  }\r
}\r
<\/script>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const p1=h("\u5185\u5BB91"),m1=h("\u6807\u98982"),f1=h("\u5185\u5BB92"),_1=h("\u6807\u98983"),h1=h("\u5185\u5BB93");function g1(e,n,r,t,u,s){const o=_("CollapseItem"),a=_("Collapse");return d(),f("div",null,[l(a,{activeName:t.activeName,"onUpdate:activeName":n[0]||(n[0]=i=>t.activeName=i)},{default:c(()=>[l(o,{title:"\u6807\u98981",name:"1"},{body:c(()=>[p1]),_:1}),l(o,{name:"2",disabled:""},{header:c(()=>[m1]),body:c(()=>[f1]),_:1}),l(o,{name:"3"},{header:c(()=>[_1]),body:c(()=>[h1]),_:1})]),_:1},8,["activeName"])])}typeof To=="function"&&To(Fa);const v1=v(Fa,[["render",g1]]),ka={components:{Collapse:Zn,CollapseItem:Xn},setup(){return{activeName:A(["2"])}}};function Mo(e){e.__sourceCode=`<template>\r
  <div>\r
    <Collapse v-model:activeName="activeName" accordion>\r
      <CollapseItem title="\u72C2\u4EBA\u65E5\u8BB0" name="1">\r
        <template #body>\u6211\u672A\u5FC5\u65E0\u610F\u4E4B\u4E2D\uFF0C\u4E0D\u5403\u4E86\u6211\u59B9\u5B50\u7684\u51E0\u7247\u8089\uFF0C\u73B0\u5728\u4E5F\u8F6E\u5230\u6211\u81EA\u5DF1\uFF0C\u2026\u2026\u6709\u4E86\u56DB\u5343\u5E74\u5403\u4EBA\u5C65\u5386\u7684\u6211\uFF0C\u5F53\u521D\u867D\u7136\u4E0D\u77E5\u9053\uFF0C\u73B0\u5728\u660E\u767D\uFF0C\u96BE\u89C1\u771F\u7684\u4EBA</template>\r
      </CollapseItem>\r
      <CollapseItem name="2">\r
        <template #header>\u963FQ\u6B63\u4F20</template>\r
        <template #body>\r
          <div>\u963FQ\u6B63\u4F20\u300B\u662F\u4E00\u7BC7\u8BBD\u523A\u5C0F\u8BF4\u3002\u8BBD\u523A\u662F\u7406\u667A\u7684\u6587\u5B66\u7684\u4E00\u652F\uFF0C\u662F\u53E4\u5178\u7684\u5199\u5B9E\u4F5C\u54C1\u3002</div>\r
          <div>\u5728\u7ED3\u6784\u4E0A\uFF0C\u9C81\u8FC5\u7684\u300A\u963FQ\u6B63\u4F20\u300B\u901A\u8FC7\u7CBE\u786E\u63CF\u5199\u548C\u4F5C\u8005\u672C\u4EBA\u622A\u7136\u4E0D\u540C\u7684\u963FQ\u8FD9\u4E00\u4EBA\u7269\u5F62\u8C61\uFF0C\u4F7F\u5F97\u9C81\u8FC5\u672C\u8EAB\u7684\u75DB\u82E6\u548C\u60B2\u54C0\u6D6E\u73B0\u51FA\u6765\u3002</div>\r
        </template>\r
      </CollapseItem>\r
      <CollapseItem name="3">\r
        <template #header>\u5B54\u4E59\u5DF1</template>\r
        <template #body>\r
          <div>\u5C0F\u8BF4\u63CF\u5199\u4E86\u5B54\u4E59\u5DF1\u5728\u5C01\u5EFA\u8150\u673D\u601D\u60F3\u548C\u79D1\u4E3E\u5236\u5EA6\u6BD2\u5BB3\u4E0B\uFF0C\u7CBE\u795E\u4E0A\u8FC2\u8150\u4E0D\u582A\u3001\u9EBB\u6728\u4E0D\u4EC1\uFF0C\u751F\u6D3B\u4E0A\u56DB\u4F53\u4E0D\u52E4\u3001\u7A77\u56F0\u6F66\u5012\uFF0C\u5728\u4EBA\u4EEC\u7684\u5632\u7B11\u620F\u8C11\u4E2D\u6DF7\u5EA6\u65F6\u65E5\uFF0C\u6700\u540E\u88AB\u5C01\u5EFA\u5730\u4E3B\u9636\u7EA7\u6240\u541E\u566C\u7684\u60B2\u60E8\u5F62\u8C61\u3002</div>\r
        </template>\r
      </CollapseItem>\r
    </Collapse>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Collapse from "../../../lib/Collapse.vue";\r
import CollapseItem from "../../../lib/CollapseItem.vue";\r
import {ref} from "vue";\r
export default {\r
  components: {Collapse, CollapseItem},\r
  setup() {\r
    const activeName = ref(['2']);\r
    return {activeName};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u624B\u98CE\u7434\u6A21\u5F0F "}const E1=h("\u6211\u672A\u5FC5\u65E0\u610F\u4E4B\u4E2D\uFF0C\u4E0D\u5403\u4E86\u6211\u59B9\u5B50\u7684\u51E0\u7247\u8089\uFF0C\u73B0\u5728\u4E5F\u8F6E\u5230\u6211\u81EA\u5DF1\uFF0C\u2026\u2026\u6709\u4E86\u56DB\u5343\u5E74\u5403\u4EBA\u5C65\u5386\u7684\u6211\uFF0C\u5F53\u521D\u867D\u7136\u4E0D\u77E5\u9053\uFF0C\u73B0\u5728\u660E\u767D\uFF0C\u96BE\u89C1\u771F\u7684\u4EBA"),b1=h("\u963FQ\u6B63\u4F20"),y1=p("div",null,"\u963FQ\u6B63\u4F20\u300B\u662F\u4E00\u7BC7\u8BBD\u523A\u5C0F\u8BF4\u3002\u8BBD\u523A\u662F\u7406\u667A\u7684\u6587\u5B66\u7684\u4E00\u652F\uFF0C\u662F\u53E4\u5178\u7684\u5199\u5B9E\u4F5C\u54C1\u3002",-1),C1=p("div",null,"\u5728\u7ED3\u6784\u4E0A\uFF0C\u9C81\u8FC5\u7684\u300A\u963FQ\u6B63\u4F20\u300B\u901A\u8FC7\u7CBE\u786E\u63CF\u5199\u548C\u4F5C\u8005\u672C\u4EBA\u622A\u7136\u4E0D\u540C\u7684\u963FQ\u8FD9\u4E00\u4EBA\u7269\u5F62\u8C61\uFF0C\u4F7F\u5F97\u9C81\u8FC5\u672C\u8EAB\u7684\u75DB\u82E6\u548C\u60B2\u54C0\u6D6E\u73B0\u51FA\u6765\u3002",-1),$1=h("\u5B54\u4E59\u5DF1"),F1=p("div",null,"\u5C0F\u8BF4\u63CF\u5199\u4E86\u5B54\u4E59\u5DF1\u5728\u5C01\u5EFA\u8150\u673D\u601D\u60F3\u548C\u79D1\u4E3E\u5236\u5EA6\u6BD2\u5BB3\u4E0B\uFF0C\u7CBE\u795E\u4E0A\u8FC2\u8150\u4E0D\u582A\u3001\u9EBB\u6728\u4E0D\u4EC1\uFF0C\u751F\u6D3B\u4E0A\u56DB\u4F53\u4E0D\u52E4\u3001\u7A77\u56F0\u6F66\u5012\uFF0C\u5728\u4EBA\u4EEC\u7684\u5632\u7B11\u620F\u8C11\u4E2D\u6DF7\u5EA6\u65F6\u65E5\uFF0C\u6700\u540E\u88AB\u5C01\u5EFA\u5730\u4E3B\u9636\u7EA7\u6240\u541E\u566C\u7684\u60B2\u60E8\u5F62\u8C61\u3002",-1);function k1(e,n,r,t,u,s){const o=_("CollapseItem"),a=_("Collapse");return d(),f("div",null,[l(a,{activeName:t.activeName,"onUpdate:activeName":n[0]||(n[0]=i=>t.activeName=i),accordion:""},{default:c(()=>[l(o,{title:"\u72C2\u4EBA\u65E5\u8BB0",name:"1"},{body:c(()=>[E1]),_:1}),l(o,{name:"2"},{header:c(()=>[b1]),body:c(()=>[y1,C1]),_:1}),l(o,{name:"3"},{header:c(()=>[$1]),body:c(()=>[F1]),_:1})]),_:1},8,["activeName"])])}typeof Mo=="function"&&Mo(ka);const B1=v(ka,[["render",k1]]),Ba={components:{Collapse:Zn,CollapseItem:Xn},setup(){return{activeName:A(["2"])}}};function So(e){e.__sourceCode=`<template>\r
  <div>\r
    <Collapse v-model:activeName="activeName" accordion>\r
      <CollapseItem name="1">\r
        <template #header>\u72C2\u4EBA\u65E5\u8BB0\r
          <MqIcon color="rgb(24,144,255)" font-size="20">\r
            <Document />\r
          </MqIcon>\r
        </template>\r
        <template #body>\u6211\u672A\u5FC5\u65E0\u610F\u4E4B\u4E2D\uFF0C\u4E0D\u5403\u4E86\u6211\u59B9\u5B50\u7684\u51E0\u7247\u8089\uFF0C\u73B0\u5728\u4E5F\u8F6E\u5230\u6211\u81EA\u5DF1\uFF0C\u2026\u2026\u6709\u4E86\u56DB\u5343\u5E74\u5403\u4EBA\u5C65\u5386\u7684\u6211\uFF0C\u5F53\u521D\u867D\u7136\u4E0D\u77E5\u9053\uFF0C\u73B0\u5728\u660E\u767D\uFF0C\u96BE\u89C1\u771F\u7684\u4EBA</template>\r
      </CollapseItem>\r
      <CollapseItem name="2">\r
        <template #header>\u963FQ\u6B63\u4F20</template>\r
        <template #body>\r
          <div>\u963FQ\u6B63\u4F20\u300B\u662F\u4E00\u7BC7\u8BBD\u523A\u5C0F\u8BF4\u3002\u8BBD\u523A\u662F\u7406\u667A\u7684\u6587\u5B66\u7684\u4E00\u652F\uFF0C\u662F\u53E4\u5178\u7684\u5199\u5B9E\u4F5C\u54C1\u3002</div>\r
          <div>\u5728\u7ED3\u6784\u4E0A\uFF0C\u9C81\u8FC5\u7684\u300A\u963FQ\u6B63\u4F20\u300B\u901A\u8FC7\u7CBE\u786E\u63CF\u5199\u548C\u4F5C\u8005\u672C\u4EBA\u622A\u7136\u4E0D\u540C\u7684\u963FQ\u8FD9\u4E00\u4EBA\u7269\u5F62\u8C61\uFF0C\u4F7F\u5F97\u9C81\u8FC5\u672C\u8EAB\u7684\u75DB\u82E6\u548C\u60B2\u54C0\u6D6E\u73B0\u51FA\u6765\u3002</div>\r
        </template>\r
      </CollapseItem>\r
      <CollapseItem name="3">\r
        <template #header>\u5B54\u4E59\u5DF1</template>\r
        <template #body>\r
          <div>\u5C0F\u8BF4\u63CF\u5199\u4E86\u5B54\u4E59\u5DF1\u5728\u5C01\u5EFA\u8150\u673D\u601D\u60F3\u548C\u79D1\u4E3E\u5236\u5EA6\u6BD2\u5BB3\u4E0B\uFF0C\u7CBE\u795E\u4E0A\u8FC2\u8150\u4E0D\u582A\u3001\u9EBB\u6728\u4E0D\u4EC1\uFF0C\u751F\u6D3B\u4E0A\u56DB\u4F53\u4E0D\u52E4\u3001\u7A77\u56F0\u6F66\u5012\uFF0C\u5728\u4EBA\u4EEC\u7684\u5632\u7B11\u620F\u8C11\u4E2D\u6DF7\u5EA6\u65F6\u65E5\uFF0C\u6700\u540E\u88AB\u5C01\u5EFA\u5730\u4E3B\u9636\u7EA7\u6240\u541E\u566C\u7684\u60B2\u60E8\u5F62\u8C61\u3002</div>\r
        </template>\r
      </CollapseItem>\r
    </Collapse>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Collapse from "../../../lib/Collapse.vue";\r
import CollapseItem from "../../../lib/CollapseItem.vue";\r
import {ref} from "vue";\r
export default {\r
  components: {Collapse, CollapseItem},\r
  setup() {\r
    const activeName = ref(['2']);\r
    return {activeName};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u9762\u677F\u6807\u9898 "}const D1=h("\u72C2\u4EBA\u65E5\u8BB0 "),A1=h("\u6211\u672A\u5FC5\u65E0\u610F\u4E4B\u4E2D\uFF0C\u4E0D\u5403\u4E86\u6211\u59B9\u5B50\u7684\u51E0\u7247\u8089\uFF0C\u73B0\u5728\u4E5F\u8F6E\u5230\u6211\u81EA\u5DF1\uFF0C\u2026\u2026\u6709\u4E86\u56DB\u5343\u5E74\u5403\u4EBA\u5C65\u5386\u7684\u6211\uFF0C\u5F53\u521D\u867D\u7136\u4E0D\u77E5\u9053\uFF0C\u73B0\u5728\u660E\u767D\uFF0C\u96BE\u89C1\u771F\u7684\u4EBA"),x1=h("\u963FQ\u6B63\u4F20"),q1=p("div",null,"\u963FQ\u6B63\u4F20\u300B\u662F\u4E00\u7BC7\u8BBD\u523A\u5C0F\u8BF4\u3002\u8BBD\u523A\u662F\u7406\u667A\u7684\u6587\u5B66\u7684\u4E00\u652F\uFF0C\u662F\u53E4\u5178\u7684\u5199\u5B9E\u4F5C\u54C1\u3002",-1),w1=p("div",null,"\u5728\u7ED3\u6784\u4E0A\uFF0C\u9C81\u8FC5\u7684\u300A\u963FQ\u6B63\u4F20\u300B\u901A\u8FC7\u7CBE\u786E\u63CF\u5199\u548C\u4F5C\u8005\u672C\u4EBA\u622A\u7136\u4E0D\u540C\u7684\u963FQ\u8FD9\u4E00\u4EBA\u7269\u5F62\u8C61\uFF0C\u4F7F\u5F97\u9C81\u8FC5\u672C\u8EAB\u7684\u75DB\u82E6\u548C\u60B2\u54C0\u6D6E\u73B0\u51FA\u6765\u3002",-1),I1=h("\u5B54\u4E59\u5DF1"),T1=p("div",null,"\u5C0F\u8BF4\u63CF\u5199\u4E86\u5B54\u4E59\u5DF1\u5728\u5C01\u5EFA\u8150\u673D\u601D\u60F3\u548C\u79D1\u4E3E\u5236\u5EA6\u6BD2\u5BB3\u4E0B\uFF0C\u7CBE\u795E\u4E0A\u8FC2\u8150\u4E0D\u582A\u3001\u9EBB\u6728\u4E0D\u4EC1\uFF0C\u751F\u6D3B\u4E0A\u56DB\u4F53\u4E0D\u52E4\u3001\u7A77\u56F0\u6F66\u5012\uFF0C\u5728\u4EBA\u4EEC\u7684\u5632\u7B11\u620F\u8C11\u4E2D\u6DF7\u5EA6\u65F6\u65E5\uFF0C\u6700\u540E\u88AB\u5C01\u5EFA\u5730\u4E3B\u9636\u7EA7\u6240\u541E\u566C\u7684\u60B2\u60E8\u5F62\u8C61\u3002",-1);function M1(e,n,r,t,u,s){const o=_("Document"),a=_("MqIcon"),i=_("CollapseItem"),g=_("Collapse");return d(),f("div",null,[l(g,{activeName:t.activeName,"onUpdate:activeName":n[0]||(n[0]=m=>t.activeName=m),accordion:""},{default:c(()=>[l(i,{name:"1"},{header:c(()=>[D1,l(a,{color:"rgb(24,144,255)","font-size":"20"},{default:c(()=>[l(o)]),_:1})]),body:c(()=>[A1]),_:1}),l(i,{name:"2"},{header:c(()=>[x1]),body:c(()=>[q1,w1]),_:1}),l(i,{name:"3"},{header:c(()=>[I1]),body:c(()=>[T1]),_:1})]),_:1},8,["activeName"])])}typeof So=="function"&&So(Ba);const S1=v(Ba,[["render",M1]]),V1={name:"CollapseDemo",components:{Demo:ne},setup(){Q(()=>{te()});const e=U([{key:"1",attr:"change",describe:"\u5F53\u524D\u6FC0\u6D3B\u9762\u677F\u6539\u53D8\u65F6\u89E6\u53D1(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u53C2\u6570 activeNames \u7C7B\u578B\u4E3Astring\uFF0C\u5426\u5219\u4E3Aarray)",params:"\u65B0\u5F53\u524D\u9875"}]),n=U([{title:"\u53C2\u6570",dataIndex:"attr",key:"attr"},{title:"\u8BF4\u660E",dataIndex:"describe",key:"describe"},{title:"\u53C2\u6570",dataIndex:"params",key:"params"}]),r=U([{key:"1",attr:"v-model:activeName",describe:"\u5F53\u524D\u6FC0\u6D3B\u7684\u9762\u677F(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u7ED1\u5B9A\u503C\u7C7B\u578B\u9700\u8981\u4E3Astring\uFF0C\u5426\u5219\u4E3Aarray)",type:"string (accordion mode) / array (non-accordion mode)",default:"-"},{key:"2",attr:"accordion",describe:"\u662F\u5426\u624B\u98CE\u7434\u6A21\u5F0F",type:"boolean",default:"false"}]),t=U([{title:"\u53C2\u6570",dataIndex:"attr",key:"attr"},{title:"\u8BF4\u660E",dataIndex:"describe",key:"describe"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",dataIndex:"default",key:"default"}]),u=U([{key:"1",attr:"name",describe:"\u552F\u4E00\u6807\u5FD7\u7B26",type:"string/number",default:"-"},{key:"2",attr:"title",describe:"\u9762\u677F\u6807\u9898",type:"string",default:"-"},{key:"2",attr:"disabled",describe:"\u662F\u5426\u7981\u7528",type:"boolean",default:"-"}]),s=U([{title:"\u53C2\u6570",dataIndex:"attr",key:"attr"},{title:"\u8BF4\u660E",dataIndex:"describe",key:"describe"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",dataIndex:"default",key:"default"}]);return{Collapse1Demo:v1,Collapse2Demo:B1,Collapse3Demo:S1,data:e,columns:n,columns1:t,data1:r,columns2:s,data2:u}}},R1=p("h1",null,"Collapse \u793A\u4F8B",-1),P1=p("h2",null,"Collapse \u4E8B\u4EF6",-1),L1=p("h2",null,"Collapse \u5C5E\u6027",-1),O1=p("h2",null,"Collapse Item\u5C5E\u6027",-1);function G1(e,n,r,t,u,s){const o=_("Demo"),a=_("MqTable");return d(),f(k,null,[R1,l(o,{component:t.Collapse1Demo},null,8,["component"]),l(o,{component:t.Collapse2Demo},null,8,["component"]),l(o,{component:t.Collapse3Demo},null,8,["component"]),l(a,{columns:t.columns,"data-source":t.data,bordered:""},{title:c(()=>[P1]),_:1},8,["columns","data-source"]),l(a,{columns:t.columns1,"data-source":t.data1,bordered:""},{title:c(()=>[L1]),_:1},8,["columns","data-source"]),l(a,{columns:t.columns1,"data-source":t.data1,bordered:""},{title:c(()=>[O1]),_:1},8,["columns","data-source"])],64)}const N1=v(V1,[["render",G1]]),Da={components:{Button:ee,Spread:Yn},setup(){return{visible:A(!0)}}};function Vo(e){e.__sourceCode=`<template>\r
  <Button @click="visible=!visible">\u7EB5\u5411\u6253\u5F00/\u6536\u8D77</Button>\r
  <Spread :visible="visible">\r
    <div class="spread-content"></div>\r
  </Spread>\r
</template>\r
\r
<script lang="ts">\r
import Spread from "../../../lib/Spread.vue";\r
import Button from "../../../lib/Button.vue";\r
import {ref} from "vue";\r
export default {\r
  components: {Button, Spread},\r
  setup() {\r
    const visible = ref(true);\r
    return {visible};\r
  }\r
};\r
<\/script>\r
\r
<style lang="scss">\r
.spread-content {\r
  height: 200px;\r
  width: 200px;\r
  background: #2b85e4;\r
  margin-top: 20px;\r
}\r
</style>`,e.__sourceCodeTitle=" \u7EB5\u5411\u5C55\u793A "}const z1=h("\u7EB5\u5411\u6253\u5F00/\u6536\u8D77"),H1=p("div",{class:"spread-content"},null,-1);function j1(e,n,r,t,u,s){const o=_("Button"),a=_("Spread");return d(),f(k,null,[l(o,{onClick:n[0]||(n[0]=i=>t.visible=!t.visible)},{default:c(()=>[z1]),_:1}),l(a,{visible:t.visible},{default:c(()=>[H1]),_:1},8,["visible"])],64)}typeof Vo=="function"&&Vo(Da);const U1=v(Da,[["render",j1]]),Aa={components:{Button:ee,Spread:Yn},setup(){return{visible:A(!0)}}};function Ro(e){e.__sourceCode=`<template>\r
  <Button @click="visible=!visible">\u6A2A\u5411\u6253\u5F00/\u6536\u8D77</Button>\r
  <Spread :visible="visible" horizontal>\r
    <div class="spread-content"></div>\r
  </Spread>\r
</template>\r
\r
<script lang="ts">\r
import Spread from "../../../lib/Spread.vue";\r
import Button from "../../../lib/Button.vue";\r
import {ref} from "vue";\r
export default {\r
  components: {Button, Spread},\r
  setup() {\r
    const visible = ref(true);\r
    return {visible};\r
  }\r
};\r
<\/script>\r
\r
<style lang="scss">\r
.spread-content {\r
  height: 200px;\r
  width: 200px;\r
  background: #2b85e4;\r
  margin-top: 20px;\r
}\r
</style>`,e.__sourceCodeTitle=" \u6A2A\u5411\u5C55\u793A "}const W1=h("\u6A2A\u5411\u6253\u5F00/\u6536\u8D77"),Q1=p("div",{class:"spread-content"},null,-1);function K1(e,n,r,t,u,s){const o=_("Button"),a=_("Spread");return d(),f(k,null,[l(o,{onClick:n[0]||(n[0]=i=>t.visible=!t.visible)},{default:c(()=>[W1]),_:1}),l(a,{visible:t.visible,horizontal:""},{default:c(()=>[Q1]),_:1},8,["visible"])],64)}typeof Ro=="function"&&Ro(Aa);const Z1=v(Aa,[["render",K1]]),Y1={name:"SpreadDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Spread1Demo:U1,Spread2Demo:Z1}}},X1=p("h1",null,"Spread\u793A\u4F8B",-1);function J1(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[X1,l(o,{component:t.Spread1Demo},null,8,["component"]),l(o,{component:t.Spread2Demo},null,8,["component"])],64)}const e6=v(Y1,[["render",J1]]),n6=N({name:"MqRadio",props:{options:{type:Array,required:!0},modelValue:{type:String,required:!0},vertical:{type:Boolean,default:!1},canCancel:{type:Boolean,default:!1}},setup(e,n){const r=A(e.modelValue);return{select:u=>{r.value=u,r.value===e.modelValue&&e.canCancel&&(r.value=""),n.emit("update:modelValue",r.value)},value:r}}});const t6={class:"mmq-radio"},o6={class:"mmq-radio-input"},r6=["onClick","value"];function u6(e,n,r,t,u,s){return d(!0),f(k,null,J(e.options,o=>(d(),f("span",{class:j(["mmq-radio-wrapper",{vertical:e.vertical}]),key:o.value},[p("label",t6,[p("span",o6,[p("span",{class:j(["mmq-radio-inner",{"is-checked":o.value===e.modelValue}])},null,2),p("input",{type:"radio",onClick:a=>e.select(o.value),value:e.value,class:"mmq-radio-original"},null,8,r6)]),p("span",{class:j(["mmq-radio-label",{"is-checked":o.value===e.modelValue}])},L(o.label),3)])],2))),128)}const Jn=v(n6,[["render",u6],["__scopeId","data-v-c065e217"]]),xa={name:"Radio1.demo",components:{Radio:Jn},setup(){const e=A([{label:"\u82F9\u679C",value:"Apple"},{label:"\u68A8",value:"Pear"},{label:"\u897F\u74DC",value:"watermelon"}]);return{selectedValue:A("watermelon"),options:e}}};function Po(e){e.__sourceCode=`<template>\r
  <Radio v-model="selectedValue" :options="options"></Radio>\r
</template>\r
\r
<script lang="ts">\r
import Radio from '../../../lib/Radio.vue'\r
import {ref} from 'vue';\r
export default {\r
name: "Radio1.demo",\r
  components: {Radio},\r
  setup(){\r
  const options = ref([\r
    {label: '\u82F9\u679C',value: 'Apple'},\r
    {label: '\u68A8',value: 'Pear'},\r
    {label: '\u897F\u74DC',value: 'watermelon'},\r
  ])\r
  const selectedValue = ref('watermelon')\r
    return {selectedValue,options}\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}function a6(e,n,r,t,u,s){const o=_("Radio");return d(),w(o,{modelValue:t.selectedValue,"onUpdate:modelValue":n[0]||(n[0]=a=>t.selectedValue=a),options:t.options},null,8,["modelValue","options"])}typeof Po=="function"&&Po(xa);const l6=v(xa,[["render",a6]]),qa={components:{Radio:Jn},setup(){const e=A("Apple"),n=A([{label:"\u82F9\u679C",value:"Apple"},{label:"\u68A8",value:"Pear"},{label:"\u6A58\u5B50",value:"Orange"}]);return{selectedValue:e,options:n}}};function Lo(e){e.__sourceCode=`<template>\r
  <Radio v-model="selectedValue" :options="options" vertical/>\r
</template>\r
\r
<script lang="ts">\r
import Radio from "../../../lib/Radio.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {Radio},\r
  setup() {\r
    const selectedValue = ref('Apple');\r
    const options = ref([\r
      {label: '\u82F9\u679C', value: 'Apple'},\r
      {label: '\u68A8', value: 'Pear'},\r
      {label: '\u6A58\u5B50', value: 'Orange'}\r
    ]);\r
    return {selectedValue, options};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u5782\u76F4\u6392\u5217 "}function s6(e,n,r,t,u,s){const o=_("Radio");return d(),w(o,{modelValue:t.selectedValue,"onUpdate:modelValue":n[0]||(n[0]=a=>t.selectedValue=a),options:t.options,vertical:""},null,8,["modelValue","options"])}typeof Lo=="function"&&Lo(qa);const i6=v(qa,[["render",s6]]),wa={components:{Radio:Jn},setup(){const e=A("Apple"),n=A([{label:"\u82F9\u679C",value:"Apple"},{label:"\u68A8",value:"Pear"},{label:"\u6A58\u5B50",value:"Orange"}]);return{selectedValue:e,options:n}}};function Oo(e){e.__sourceCode=`<template>\r
  <Radio v-model="selectedValue" :options="options" can-cancel vertical/>\r
</template>\r
\r
<script lang="ts">\r
import Radio from "../../../lib/Radio.vue";\r
import {ref} from 'vue';\r
export default {\r
  components: {Radio},\r
  setup() {\r
    const selectedValue = ref('Apple');\r
    const options = ref([\r
      {label: '\u82F9\u679C', value: 'Apple'},\r
      {label: '\u68A8', value: 'Pear'},\r
      {label: '\u6A58\u5B50', value: 'Orange'}\r
    ]);\r
    return {selectedValue, options};\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u652F\u6301\u53D6\u6D88\u9009\u62E9 "}function c6(e,n,r,t,u,s){const o=_("Radio");return d(),w(o,{modelValue:t.selectedValue,"onUpdate:modelValue":n[0]||(n[0]=a=>t.selectedValue=a),options:t.options,"can-cancel":"",vertical:""},null,8,["modelValue","options"])}typeof Oo=="function"&&Oo(wa);const d6=v(wa,[["render",c6]]),p6={name:"RadioDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Radio1Demo:l6,Radio2Demo:i6,Radio3Demo:d6}}},m6=p("h1",null,"Radio\u793A\u4F8B",-1);function f6(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[m6,l(o,{component:t.Radio1Demo},null,8,["component"]),l(o,{component:t.Radio2Demo},null,8,["component"]),l(o,{component:t.Radio3Demo},null,8,["component"])],64)}const _6=v(p6,[["render",f6]]),h6=N({name:"MqCheckbox",props:{label:{type:String,default:""},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},checked:{type:Boolean,default:!1}},setup(e,n){const r=Fe("CheckboxGroupContext",{}),t=r.name==="CheckboxGroupContext",u=M(()=>{var m;return r?(m=r.modelValue)==null?void 0:m.value:e.modelValue}),s=M({get(){return t?u.value:e.modelValue},set(m){if(t)return r.changeEvent(m);n.emit("update:modelValue",m)}}),o=M(()=>{const m=r.max,b=r.min;return Array.isArray(s.value)&&(b||m)?m&&s.value.length>=m&&!i.value||b&&b!==0&&s.value.length<=b&&i.value:e.disabled}),a=M(()=>r.disabled||o.value),i=M(()=>{const m=s.value;return Array.isArray(m)?m.includes(e.label):m});return{select:m=>{const b=m.target;n.emit("update:modelValue",b.checked)},model:s,isChecked:i,isDisabled:a}}});const g6=e=>(ge("data-v-06046fe8"),e=e(),ve(),e),v6=["disabled","value","checked","indeterminate"],E6=g6(()=>p("span",{class:"mmq-checkbox-inner"},null,-1)),b6={class:"mmq-checkbox-label"};function y6(e,n,r,t,u,s){return d(),f("label",{class:j([{isChecked:e.isChecked},"mmq-checkbox"])},[Te(p("input",{disabled:e.isDisabled,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),value:e.label,checked:e.isChecked,indeterminate:e.indeterminate,type:"checkbox",class:"mmq-checkbox-input",onChange:n[1]||(n[1]=(...o)=>e.select&&e.select(...o))},null,40,v6),[[Es,e.model]]),E6,p("span",b6,[W(e.$slots,"default",{},()=>[h(L(e.label),1)],!0)])],2)}const We=v(h6,[["render",y6],["__scopeId","data-v-06046fe8"]]),Ia={name:"Checkbox1.demo",components:{checkbox:We},setup(){const e=A(!1),n=A(!0),r=A(!1),t=A(!1);return{value:e,value1:n,value2:r,value3:t,changeHandle:s=>{console.log(s)}}}};function Go(e){e.__sourceCode=`<template>\r
  <checkbox v-model="value" @change="changeHandle" label="\u897F\u74DC"></checkbox>\r
  <checkbox v-model="value1" label="\u8461\u8404"></checkbox>\r
  <checkbox v-model="value2" label="\u8F66\u5398\u5B50"></checkbox>\r
  <checkbox v-model="value3" label="\u83E0\u841D" disabled></checkbox>\r
</template>\r
\r
<script lang="ts">\r
import checkbox from '../../../lib/Checkbox.vue';\r
import {ref} from 'vue';\r
export default {\r
  name: 'Checkbox1.demo',\r
  components: {checkbox},\r
  setup() {\r
    const value = ref(false)\r
    const value1 = ref(true)\r
    const value2 = ref(false)\r
    const value3 = ref(false)\r
    const changeHandle = (val: any) => {\r
      console.log(val)\r
    }\r
    return {\r
      value, value1, value2, value3, changeHandle\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}function C6(e,n,r,t,u,s){const o=_("checkbox");return d(),f(k,null,[l(o,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=a=>t.value=a),onChange:t.changeHandle,label:"\u897F\u74DC"},null,8,["modelValue","onChange"]),l(o,{modelValue:t.value1,"onUpdate:modelValue":n[1]||(n[1]=a=>t.value1=a),label:"\u8461\u8404"},null,8,["modelValue"]),l(o,{modelValue:t.value2,"onUpdate:modelValue":n[2]||(n[2]=a=>t.value2=a),label:"\u8F66\u5398\u5B50"},null,8,["modelValue"]),l(o,{modelValue:t.value3,"onUpdate:modelValue":n[3]||(n[3]=a=>t.value3=a),label:"\u83E0\u841D",disabled:""},null,8,["modelValue"])],64)}typeof Go=="function"&&Go(Ia);const $6=v(Ia,[["render",C6]]),Ta={name:"Checkbox1.demo",components:{checkbox:We},setup(){return{value:A(!1)}}};function No(e){e.__sourceCode=`<template>\r
  <checkbox v-model="value" label="\u83E0\u841D" disabled></checkbox>\r
  <checkbox v-model="value" label="\u897F\u74DC" disabled></checkbox>\r
</template>\r
\r
<script lang="ts">\r
import checkbox from '../../../lib/Checkbox.vue';\r
import {ref} from 'vue';\r
export default {\r
  name: 'Checkbox1.demo',\r
  components: {checkbox},\r
  setup() {\r
    const value = ref(false)\r
    return {\r
      value\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u7981\u7528\u72B6\u6001 "}function F6(e,n,r,t,u,s){const o=_("checkbox");return d(),f(k,null,[l(o,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=a=>t.value=a),label:"\u83E0\u841D",disabled:""},null,8,["modelValue"]),l(o,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=a=>t.value=a),label:"\u897F\u74DC",disabled:""},null,8,["modelValue"])],64)}typeof No=="function"&&No(Ta);const k6=v(Ta,[["render",F6]]),B6=N({name:"MqCheckoutGroup",props:{modelValue:{type:Array,required:!0,default:()=>{}},disabled:{type:Boolean,default:!1},max:{type:Number},min:{type:Number}},emits:["change","update:modelValue"],setup(e,n){const r=M(()=>e.modelValue);Ie("CheckboxGroupContext",{name:"CheckboxGroupContext",disabled:e.disabled,modelValue:r,max:e.max,min:e.min,changeEvent:t=>{n.emit("update:modelValue",t),n.emit("change",t)}})}}),D6={class:"mmq-checkboxGroup"};function A6(e,n,r,t,u,s){return d(),f("div",D6,[W(e.$slots,"default")])}const Dn=v(B6,[["render",A6]]),Ma={name:"Checkbox1.demo",components:{checkbox:We,CheckboxGroup:Dn},setup(){return{value:A(["haha","xixi"]),checkboxChange:r=>{console.log(r)}}}};function zo(e){e.__sourceCode=`<template>\r
  <CheckboxGroup v-model="value" @change="checkboxChange">\r
    <checkbox label="haha"></checkbox>\r
    <checkbox label="xixi"></checkbox>\r
    <checkbox label="heihei"></checkbox>\r
    <checkbox label="wuhu"></checkbox>\r
  </CheckboxGroup>\r
  {{ value }}\r
</template>\r
\r
<script lang="ts">\r
import checkbox from '../../../lib/Checkbox.vue';\r
import CheckboxGroup from '../../../lib/CheckboxGroup.vue';\r
import {ref} from 'vue';\r
export default {\r
  name: 'Checkbox1.demo',\r
  components: {checkbox, CheckboxGroup},\r
  setup() {\r
    const value = ref(['haha', 'xixi'])\r
    const checkboxChange = (val: any) => {\r
      console.log(val)\r
    }\r
    return {\r
      value, checkboxChange\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u7981\u7528\u72B6\u6001 "}function x6(e,n,r,t,u,s){const o=_("checkbox"),a=_("CheckboxGroup");return d(),f(k,null,[l(a,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=i=>t.value=i),onChange:t.checkboxChange},{default:c(()=>[l(o,{label:"haha"}),l(o,{label:"xixi"}),l(o,{label:"heihei"}),l(o,{label:"wuhu"})]),_:1},8,["modelValue","onChange"]),h(" "+L(t.value),1)],64)}typeof zo=="function"&&zo(Ma);const q6=v(Ma,[["render",x6]]),Sa={name:"Checkbox1.demo",components:{checkbox:We,CheckboxGroup:Dn},setup(){const e=A(!1),n=A(!0),r=A(["Shanghai","Beijing"]),t=["Shanghai","Beijing","Guangzhou","Shenzhen"];return{checkedCities:r,checkAll:e,isIndeterminate:n,handleCheckedCitiesChange:o=>{const a=o.length;e.value=a===t.length,n.value=a>0&&t.length>a},handleCheckAllChange:o=>{if(o.target.checked)t.forEach(i=>{r.value.includes(i)||r.value.push(i)});else for(;r.value.length;)r.value.pop();n.value=!1},cities:t}}};function Ho(e){e.__sourceCode=`<template>\r
  <checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange"></checkbox>\r
  <CheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">\r
    <checkbox v-for="city in cities" :key="city" :label="city"></checkbox>\r
  </CheckboxGroup>\r
</template>\r
\r
<script lang="ts">\r
import checkbox from '../../../lib/Checkbox.vue';\r
import CheckboxGroup from '../../../lib/CheckboxGroup.vue';\r
import {ref} from 'vue';\r
export default {\r
  name: 'Checkbox1.demo',\r
  components: {checkbox, CheckboxGroup},\r
  setup() {\r
    const checkAll = ref(false)\r
    const isIndeterminate = ref(true)\r
    const checkedCities = ref(['Shanghai', 'Beijing'])\r
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\r
\r
    const handleCheckAllChange = (e: InputEvent) => {\r
      const target = e.target as HTMLInputElement\r
      if (target.checked) {\r
        cities.forEach(item => {\r
          if (!checkedCities.value.includes(item)) checkedCities.value.push(item)\r
        })\r
      } else {\r
        while (checkedCities.value.length) {\r
          checkedCities.value.pop()\r
        }\r
      }\r
      isIndeterminate.value = false\r
    }\r
    const handleCheckedCitiesChange = (value: string[]) => {\r
      const checkedCount = value.length\r
      checkAll.value = checkedCount === cities.length\r
      isIndeterminate.value = checkedCount > 0 && cities.length > checkedCount\r
    }\r
    return {\r
      checkedCities, checkAll, isIndeterminate, handleCheckedCitiesChange, handleCheckAllChange, cities\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" indeterminate \u72B6\u6001(\u534A\u9009\u72B6\u6001) "}function w6(e,n,r,t,u,s){const o=_("checkbox"),a=_("CheckboxGroup");return d(),f(k,null,[l(o,{modelValue:t.checkAll,"onUpdate:modelValue":n[0]||(n[0]=i=>t.checkAll=i),indeterminate:t.isIndeterminate,onChange:t.handleCheckAllChange},null,8,["modelValue","indeterminate","onChange"]),l(a,{modelValue:t.checkedCities,"onUpdate:modelValue":n[1]||(n[1]=i=>t.checkedCities=i),onChange:t.handleCheckedCitiesChange},{default:c(()=>[(d(!0),f(k,null,J(t.cities,i=>(d(),w(o,{key:i,label:i},null,8,["label"]))),128))]),_:1},8,["modelValue","onChange"])],64)}typeof Ho=="function"&&Ho(Sa);const I6=v(Sa,[["render",w6]]),Va={name:"Checkbox1.demo",components:{checkbox:We,CheckboxGroup:Dn},setup(){return{checkedCities:A(["Shanghai","Beijing"]),cities:["Shanghai","Beijing","Guangzhou","Shenzhen"]}}};function jo(e){e.__sourceCode=`<template>\r
  <CheckboxGroup v-model="checkedCities" :min="1" :max="2">\r
    <checkbox v-for="city in cities" :key="city" :label="city"></checkbox>\r
  </CheckboxGroup>\r
</template>\r
\r
<script lang="ts">\r
import checkbox from '../../../lib/Checkbox.vue';\r
import CheckboxGroup from '../../../lib/CheckboxGroup.vue';\r
import {ref} from 'vue';\r
export default {\r
  name: 'Checkbox1.demo',\r
  components: {checkbox, CheckboxGroup},\r
  setup() {\r
    const checkedCities = ref(['Shanghai', 'Beijing'])\r
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\r
    return {\r
      checkedCities, cities\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236 "}function T6(e,n,r,t,u,s){const o=_("checkbox"),a=_("CheckboxGroup");return d(),w(a,{modelValue:t.checkedCities,"onUpdate:modelValue":n[0]||(n[0]=i=>t.checkedCities=i),min:1,max:2},{default:c(()=>[(d(!0),f(k,null,J(t.cities,i=>(d(),w(o,{key:i,label:i},null,8,["label"]))),128))]),_:1},8,["modelValue"])}typeof jo=="function"&&jo(Va);const M6=v(Va,[["render",T6]]),S6={name:"Checkbox",components:{Demo:ne},setup(){return Q(()=>{te()}),{checkboxDemo1:$6,checkboxDemo2:k6,checkboxDemo3:q6,checkboxDemo4:I6,checkboxDemo5:M6}}},V6=p("h1",null,"Checkbox\u793A\u4F8B",-1);function R6(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[V6,l(o,{component:t.checkboxDemo1},null,8,["component"]),l(o,{component:t.checkboxDemo2},null,8,["component"]),l(o,{component:t.checkboxDemo3},null,8,["component"]),l(o,{component:t.checkboxDemo4},null,8,["component"]),l(o,{component:t.checkboxDemo5},null,8,["component"])],64)}const P6=v(S6,[["render",R6]]),L6={name:"MqDropdown",setup(e,{slots:n}){const r=A("\u8BF7\u9009\u62E9"),t=n.dropdown().map(i=>i.children),u=A(!1);return{dropdowns:t,dropdownItemVisible:u,showDropdownItem:()=>u.value=!0,hiddenDropdownItem:()=>u.value=!1,selectedItem:i=>{r.value=i.target.innerText},selected:r}}};const O6={class:"mmq-dropdown"};function G6(e,n,r,t,u,s){return d(),f(k,null,[p("div",O6,[p("div",{class:"mmq-dropdown-link",onMouseenter:n[1]||(n[1]=(...o)=>t.showDropdownItem&&t.showDropdownItem(...o)),onMouseleave:n[2]||(n[2]=(...o)=>t.hiddenDropdownItem&&t.hiddenDropdownItem(...o))},[W(e.$slots,"default",{},void 0,!0),G("",!0),Te(p("ul",null,[(d(!0),f(k,null,J(t.dropdowns,o=>(d(),f("li",{onClick:n[0]||(n[0]=(...a)=>t.selectedItem&&t.selectedItem(...a)),key:o,class:"dropdown-item"},L(o),1))),128))],512),[[Ue,t.dropdownItemVisible]])],32)]),h(" "+L(t.selected),1)],64)}const Ra=v(L6,[["render",G6],["__scopeId","data-v-e19ae1e7"]]),Pa={name:"Dropdown1.demo",components:{Dropdown:Ra}};function Uo(e){e.__sourceCode=`<template>\r
  <Dropdown>\r
    <span>\u4E0B\u62C9\u83DC\u5355\r
      <MqIcon color="rgb(64,158,255)">\r
        <ArrowDown />\r
      </MqIcon>\r
    </span>\r
    <template #dropdown>\r
      <span>\u897F\u6E38\u8BB0</span>\r
      <span>\u4E09\u56FD\u6F14\u4E49</span>\r
      <span>\u7EA2\u697C\u68A6</span>\r
      <span>\u6C34\u6D52\u4F20</span>\r
    </template>\r
  </Dropdown>\r
</template>\r
\r
<script lang="ts">\r
import Dropdown from '../../../lib/Dropdown.vue';\r
export default {\r
name: "Dropdown1.demo",\r
  components: {Dropdown},\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const N6=h("\u4E0B\u62C9\u83DC\u5355 "),z6=p("span",null,"\u897F\u6E38\u8BB0",-1),H6=p("span",null,"\u4E09\u56FD\u6F14\u4E49",-1),j6=p("span",null,"\u7EA2\u697C\u68A6",-1),U6=p("span",null,"\u6C34\u6D52\u4F20",-1);function W6(e,n,r,t,u,s){const o=_("ArrowDown"),a=_("MqIcon"),i=_("Dropdown");return d(),w(i,null,{dropdown:c(()=>[z6,H6,j6,U6]),default:c(()=>[p("span",null,[N6,l(a,{color:"rgb(64,158,255)"},{default:c(()=>[l(o)]),_:1})])]),_:1})}typeof Uo=="function"&&Uo(Pa);const Q6=v(Pa,[["render",W6]]),K6={name:"DropDownDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Dropdown1Demo:Q6}}},Z6=p("h1",null,"Dropdown \u793A\u4F8B",-1);function Y6(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[Z6,l(o,{component:t.Dropdown1Demo},null,8,["component"])],64)}const X6=v(K6,[["render",Y6]]),J6=N({name:"MqTooltip",props:{content:{type:String},direction:{type:String,default:"right"},effect:{type:String,default:"dark"},visible:{type:Boolean,default:void 0},transition:{type:Boolean,default:!0}},setup(e,n){const r=M(()=>e.effect==="light"?{background:"#fff",color:"#606266"}:{background:"#555",color:"#fff"}),t=A(!1);Q(()=>{t.value=e.visible!==void 0,e.transition&&(s.value.style.transition="all .3s")});const u=M(()=>e.visible?"visible":"hidden"),s=A();return{computedEffect:r,handleEnter:()=>{t.value||(s.value.style.visibility="visible",s.value.style.opacity="1")},handleLeave:()=>{t.value||(s.value.style.visibility="hidden",s.value.style.opacity="0")},tooltipRef:s,isControl:t,computedVisible:u}}});function e_(e,n,r,t,u,s){return d(),f("div",{onMouseenter:n[0]||(n[0]=(...o)=>e.handleEnter&&e.handleEnter(...o)),onMouseleave:n[1]||(n[1]=(...o)=>e.handleLeave&&e.handleLeave(...o)),class:"tooltip"},[W(e.$slots,"default"),p("div",{ref:"tooltipRef",class:j(["tooltipText",e.direction,e.isControl&&e.computedVisible]),style:ie(e.computedEffect)},[W(e.$slots,"content",{},()=>[h(L(e.content),1)])],6)],32)}const cn=v(J6,[["render",e_]]),La={name:"Popover1Demo",components:{Button:ee,Tooltip:cn},setup(){}};function Wo(e){e.__sourceCode=`<template>\r
  <Tooltip content="\u6211\u662F\u51FA\u73B0\u5728\u53F3\u8FB9\u7684\u6587\u5B57" direction="right">\r
    <Button>\u53F3\u8FB9</Button>\r
  </Tooltip>\r
  <Tooltip content="\u6211\u662F\u51FA\u73B0\u5728\u4E0A\u8FB9\u7684\u6587\u5B57" direction="top">\r
    <Button>\u4E0A\u8FB9</Button>\r
  </Tooltip>\r
  <Tooltip content="\u6211\u662F\u51FA\u73B0\u5728\u4E0B\u8FB9\u7684\u6587\u5B57" direction="bottom">\r
    <Button>\u4E0B\u8FB9</Button>\r
  </Tooltip>\r
  <Tooltip content="\u6211\u662F\u51FA\u73B0\u5728\u5DE6\u8FB9\u7684\u6587\u5B57" direction="left">\r
    <Button>\u5DE6\u8FB9</Button>\r
  </Tooltip>\r
</template>\r
\r
<script lang="ts">\r
import Tooltip from "../../../lib/Tooltip.vue";\r
import Button from "../../../lib/Button.vue";\r
export default {\r
  name: 'Popover1Demo',\r
  components: {Button, Tooltip},\r
  setup() {\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const n_=h("\u53F3\u8FB9"),t_=h("\u4E0A\u8FB9"),o_=h("\u4E0B\u8FB9"),r_=h("\u5DE6\u8FB9");function u_(e,n,r,t,u,s){const o=_("Button"),a=_("Tooltip");return d(),f(k,null,[l(a,{content:"\u6211\u662F\u51FA\u73B0\u5728\u53F3\u8FB9\u7684\u6587\u5B57",direction:"right"},{default:c(()=>[l(o,null,{default:c(()=>[n_]),_:1})]),_:1}),l(a,{content:"\u6211\u662F\u51FA\u73B0\u5728\u4E0A\u8FB9\u7684\u6587\u5B57",direction:"top"},{default:c(()=>[l(o,null,{default:c(()=>[t_]),_:1})]),_:1}),l(a,{content:"\u6211\u662F\u51FA\u73B0\u5728\u4E0B\u8FB9\u7684\u6587\u5B57",direction:"bottom"},{default:c(()=>[l(o,null,{default:c(()=>[o_]),_:1})]),_:1}),l(a,{content:"\u6211\u662F\u51FA\u73B0\u5728\u5DE6\u8FB9\u7684\u6587\u5B57",direction:"left"},{default:c(()=>[l(o,null,{default:c(()=>[r_]),_:1})]),_:1})],64)}typeof Wo=="function"&&Wo(La);const a_=v(La,[["render",u_]]),Oa={name:"Popover1Demo",components:{Button:ee,Tooltip:cn},setup(){}};function Qo(e){e.__sourceCode=`<template>\r
  <Tooltip content="\u6211\u662F\u51FA\u73B0\u5728\u53F3\u8FB9\u7684\u6587\u5B57" effect="light" direction="right">\r
    <Button>\u53F3\u8FB9</Button>\r
  </Tooltip>\r
  <Tooltip content="\u6211\u662F\u51FA\u73B0\u5728\u4E0A\u8FB9\u7684\u6587\u5B57" effect="light" direction="top">\r
    <Button>\u4E0A\u8FB9</Button>\r
  </Tooltip>\r
  <Tooltip content="\u6211\u662F\u51FA\u73B0\u5728\u4E0B\u8FB9\u7684\u6587\u5B57" effect="light" direction="bottom">\r
    <Button>\u4E0B\u8FB9</Button>\r
  </Tooltip>\r
  <Tooltip content="\u6211\u662F\u51FA\u73B0\u5728\u5DE6\u8FB9\u7684\u6587\u5B57" effect="light" direction="left">\r
    <Button>\u5DE6\u8FB9</Button>\r
  </Tooltip>\r
</template>\r
\r
<script lang="ts">\r
import Tooltip from "../../../lib/Tooltip.vue";\r
import Button from "../../../lib/Button.vue";\r
export default {\r
  name: 'Popover1Demo',\r
  components: {Button, Tooltip},\r
  setup() {\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u5207\u6362\u4E3B\u9898 "}const l_=h("\u53F3\u8FB9"),s_=h("\u4E0A\u8FB9"),i_=h("\u4E0B\u8FB9"),c_=h("\u5DE6\u8FB9");function d_(e,n,r,t,u,s){const o=_("Button"),a=_("Tooltip");return d(),f(k,null,[l(a,{content:"\u6211\u662F\u51FA\u73B0\u5728\u53F3\u8FB9\u7684\u6587\u5B57",effect:"light",direction:"right"},{default:c(()=>[l(o,null,{default:c(()=>[l_]),_:1})]),_:1}),l(a,{content:"\u6211\u662F\u51FA\u73B0\u5728\u4E0A\u8FB9\u7684\u6587\u5B57",effect:"light",direction:"top"},{default:c(()=>[l(o,null,{default:c(()=>[s_]),_:1})]),_:1}),l(a,{content:"\u6211\u662F\u51FA\u73B0\u5728\u4E0B\u8FB9\u7684\u6587\u5B57",effect:"light",direction:"bottom"},{default:c(()=>[l(o,null,{default:c(()=>[i_]),_:1})]),_:1}),l(a,{content:"\u6211\u662F\u51FA\u73B0\u5728\u5DE6\u8FB9\u7684\u6587\u5B57",effect:"light",direction:"left"},{default:c(()=>[l(o,null,{default:c(()=>[c_]),_:1})]),_:1})],64)}typeof Qo=="function"&&Qo(Oa);const p_=v(Oa,[["render",d_]]),Ga={name:"Popover1Demo",components:{Button:ee,Tooltip:cn},setup(){}};function Ko(e){e.__sourceCode=`<template>\r
  <Tooltip direction="right">\r
    <template #content> multiple lines<br />second line </template>\r
    <Button>\u53F3\u8FB9</Button>\r
  </Tooltip>\r
  <Tooltip direction="top">\r
    <template #content> multiple lines<br />second line </template>\r
    <Button>\u4E0A\u8FB9</Button>\r
  </Tooltip>\r
  <Tooltip direction="bottom">\r
    <template #content> multiple lines<br />second line </template>\r
    <Button>\u4E0B\u8FB9</Button>\r
  </Tooltip>\r
  <Tooltip direction="left">\r
    <template #content> multiple lines<br />second line </template>\r
    <Button>\u5DE6\u8FB9</Button>\r
  </Tooltip>\r
</template>\r
\r
<script lang="ts">\r
import Tooltip from "../../../lib/Tooltip.vue";\r
import Button from "../../../lib/Button.vue";\r
export default {\r
  name: 'Popover1Demo',\r
  components: {Button, Tooltip},\r
  setup() {\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u5185\u5BB9 "}const m_=h(" multiple lines"),f_=p("br",null,null,-1),__=h("second line "),h_=h("\u53F3\u8FB9"),g_=h(" multiple lines"),v_=p("br",null,null,-1),E_=h("second line "),b_=h("\u4E0A\u8FB9"),y_=h(" multiple lines"),C_=p("br",null,null,-1),$_=h("second line "),F_=h("\u4E0B\u8FB9"),k_=h(" multiple lines"),B_=p("br",null,null,-1),D_=h("second line "),A_=h("\u5DE6\u8FB9");function x_(e,n,r,t,u,s){const o=_("Button"),a=_("Tooltip");return d(),f(k,null,[l(a,{direction:"right"},{content:c(()=>[m_,f_,__]),default:c(()=>[l(o,null,{default:c(()=>[h_]),_:1})]),_:1}),l(a,{direction:"top"},{content:c(()=>[g_,v_,E_]),default:c(()=>[l(o,null,{default:c(()=>[b_]),_:1})]),_:1}),l(a,{direction:"bottom"},{content:c(()=>[y_,C_,$_]),default:c(()=>[l(o,null,{default:c(()=>[F_]),_:1})]),_:1}),l(a,{direction:"left"},{content:c(()=>[k_,B_,D_]),default:c(()=>[l(o,null,{default:c(()=>[A_]),_:1})]),_:1})],64)}typeof Ko=="function"&&Ko(Ga);const q_=v(Ga,[["render",x_]]),Na={name:"Popover1Demo",components:{Button:ee,Tooltip:cn},setup(){return{visible:A(!1)}}};function Zo(e){e.__sourceCode=`<template>\r
  <Tooltip v-model:visible="visible" content="\u6211\u662F\u51FA\u73B0\u5728\u4E0A\u8FB9\u7684\u6587\u5B57" direction="top">\r
    <Button @click="visible = !visible">\u4E0A\u8FB9</Button>\r
  </Tooltip>\r
</template>\r
\r
<script lang="ts">\r
import Tooltip from "../../../lib/Tooltip.vue";\r
import Button from "../../../lib/Button.vue";\r
import {ref} from 'vue';\r
export default {\r
  name: 'Popover1Demo',\r
  components: {Button, Tooltip},\r
  setup() {\r
    const visible = ref(false)\r
    return {\r
      visible\r
    }\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u53D7\u63A7\u6A21\u5F0F(\u652F\u6301v-model) "}const w_=h("\u4E0A\u8FB9");function I_(e,n,r,t,u,s){const o=_("Button"),a=_("Tooltip");return d(),w(a,{visible:t.visible,"onUpdate:visible":n[1]||(n[1]=i=>t.visible=i),content:"\u6211\u662F\u51FA\u73B0\u5728\u4E0A\u8FB9\u7684\u6587\u5B57",direction:"top"},{default:c(()=>[l(o,{onClick:n[0]||(n[0]=i=>t.visible=!t.visible)},{default:c(()=>[w_]),_:1})]),_:1},8,["visible"])}typeof Zo=="function"&&Zo(Na);const T_=v(Na,[["render",I_]]),za={name:"Popover4Demo",components:{Button:ee,Tooltip:cn},setup(){return{visible:A(!1)}}};function Yo(e){e.__sourceCode=`<template>\r
  <Tooltip :transition="false" v-model:visible="visible" content="\u6211\u662F\u51FA\u73B0\u5728\u4E0A\u8FB9\u7684\u6587\u5B57" direction="top">\r
    <Button @click="visible = !visible">\u4E0A\u8FB9</Button>\r
  </Tooltip>\r
</template>\r
\r
<script lang="ts">\r
import Tooltip from "../../../lib/Tooltip.vue";\r
import Button from "../../../lib/Button.vue";\r
import {ref} from 'vue';\r
export default {\r
  name: 'Popover4Demo',\r
  components: {Button, Tooltip},\r
  setup() {\r
    const visible = ref(false)\r
    return {\r
      visible\r
    }\r
  }\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u52A8\u753B\u6548\u679C\u53EF\u5173\u95ED\uFF08\u9ED8\u8BA4\u5F00\u542F\uFF09 "}const M_=h("\u4E0A\u8FB9");function S_(e,n,r,t,u,s){const o=_("Button"),a=_("Tooltip");return d(),w(a,{transition:!1,visible:t.visible,"onUpdate:visible":n[1]||(n[1]=i=>t.visible=i),content:"\u6211\u662F\u51FA\u73B0\u5728\u4E0A\u8FB9\u7684\u6587\u5B57",direction:"top"},{default:c(()=>[l(o,{onClick:n[0]||(n[0]=i=>t.visible=!t.visible)},{default:c(()=>[M_]),_:1})]),_:1},8,["visible"])}typeof Yo=="function"&&Yo(za);const V_=v(za,[["render",S_]]),R_={name:"TooltipDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Tooltip1Demo:a_,Tooltip2Demo:p_,Tooltip3Demo:q_,Tooltip4Demo:T_,Tooltip5Demo:V_}}},P_=p("h1",null,"Tooltip \u793A\u4F8B",-1);function L_(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[P_,l(o,{component:t.Tooltip1Demo},null,8,["component"]),l(o,{component:t.Tooltip2Demo},null,8,["component"]),l(o,{component:t.Tooltip3Demo},null,8,["component"]),l(o,{component:t.Tooltip4Demo},null,8,["component"]),l(o,{component:t.Tooltip5Demo},null,8,["component"])],64)}const O_=v(R_,[["render",L_]]),G_=N({name:"MqSwiper",props:{auto:{type:Boolean,default:!1}},setup(e,{slots:n}){const r=n.default(),t=A(0),u=A(),s=A(0),o=b=>{t.value=b,u.value.children[t.value].className+=" current"},a=b=>b===t.value?"current":"",i=()=>{t.value===r.length-1?t.value=0:t.value+=1},g=()=>{t.value===0?t.value=r.length-1:t.value-=1},m=()=>{t.value===r.length-1?t.value=0:t.value+=1};return Q(()=>{e.auto&&(s.value=setInterval(()=>{m()},3e3))}),Hn(()=>{e.auto&&clearInterval(s.value)}),{defaults:r,active:t,currentSwiper:o,addActive:i,reduceActive:g,getClass:a,dotRef:u}}});const N_=e=>(ge("data-v-a4754ec0"),e=e(),ve(),e),z_={class:"mmq-swiper-container"},H_={class:"fade"},j_={class:"dotWrapper",ref:"dotRef"},U_=["onClick"],W_=N_(()=>p("br",null,null,-1));function Q_(e,n,r,t,u,s){return d(),f(k,null,[p("div",z_,[(d(!0),f(k,null,J(e.defaults,(o,a)=>(d(),f("div",{class:j(["mmq-swiper",e.getClass(a)]),key:a},[p("div",H_,[Te((d(),w(ke(o),null,null,512)),[[Ue,a===e.active]])])],2))),128)),p("div",j_,[(d(!0),f(k,null,J(e.defaults,(o,a)=>(d(),f("span",{key:a,class:"dot",onClick:i=>e.currentSwiper(a)},null,8,U_))),128))],512),p("a",{class:"prev",onClick:n[0]||(n[0]=(...o)=>e.reduceActive&&e.reduceActive(...o))},"\u276E"),p("a",{class:"next",onClick:n[1]||(n[1]=(...o)=>e.addActive&&e.addActive(...o))},"\u276F")]),W_,G("",!0)],64)}const kt=v(G_,[["render",Q_],["__scopeId","data-v-a4754ec0"]]),Ha={name:"Swiper1.demo",components:{Swiper:kt}};function Xo(e){e.__sourceCode=`<template>\r
  <Swiper>\r
    <div style="height: 300px;width: 100%;background: #3f51b5"></div>\r
    <div style="height: 300px;width: 100%;background: #2b85e4"></div>\r
    <div style="height: 300px;width: 100%;background: #303133"></div>\r
    <div style="height: 300px;width: 100%;background: #19be6b"></div>\r
  </Swiper>\r
</template>\r
\r
<script lang="ts">\r
import Swiper from '../../../lib/Swiper.vue';\r
export default {\r
  name: 'Swiper1.demo',\r
  components:{Swiper}\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const K_=p("div",{style:{height:"300px",width:"100%",background:"#3f51b5"}},null,-1),Z_=p("div",{style:{height:"300px",width:"100%",background:"#2b85e4"}},null,-1),Y_=p("div",{style:{height:"300px",width:"100%",background:"#303133"}},null,-1),X_=p("div",{style:{height:"300px",width:"100%",background:"#19be6b"}},null,-1);function J_(e,n,r,t,u,s){const o=_("Swiper");return d(),w(o,null,{default:c(()=>[K_,Z_,Y_,X_]),_:1})}typeof Xo=="function"&&Xo(Ha);const eh=v(Ha,[["render",J_]]);function Jo(e){e.__sourceCode=`<template>\r
  <Swiper auto>\r
    <div style="height: 300px;width: 100%;background: #3f51b5"></div>\r
    <div style="height: 300px;width: 100%;background: #2b85e4"></div>\r
    <div style="height: 300px;width: 100%;background: #303133"></div>\r
    <div style="height: 300px;width: 100%;background: #19be6b"></div>\r
  </Swiper>\r
</template>\r
\r
<script>\r
import Swiper from '../../../lib/Swiper.vue'\r
export default {\r
name: "Swiper2.demo",\r
  components: {Swiper}\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u52A8\u8F6E\u64AD "}const ja={name:"Swiper2.demo",components:{Swiper:kt}},nh=p("div",{style:{height:"300px",width:"100%",background:"#3f51b5"}},null,-1),th=p("div",{style:{height:"300px",width:"100%",background:"#2b85e4"}},null,-1),oh=p("div",{style:{height:"300px",width:"100%",background:"#303133"}},null,-1),rh=p("div",{style:{height:"300px",width:"100%",background:"#19be6b"}},null,-1);function uh(e,n,r,t,u,s){const o=_("Swiper");return d(),w(o,{auto:""},{default:c(()=>[nh,th,oh,rh]),_:1})}typeof Jo=="function"&&Jo(ja);const ah=v(ja,[["render",uh]]),lh={name:"Swiper",components:{Demo:ne},setup(){return Q(()=>{te()}),{Swiper1Demo:eh,Swiper2Demo:ah}}},sh=p("h1",null,"Swiper\u793A\u4F8B",-1);function ih(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[sh,l(o,{component:t.Swiper1Demo},null,8,["component"]),l(o,{component:t.Swiper2Demo},null,8,["component"])],64)}const ch=v(lh,[["render",ih]]),dh=N({name:"MqSticky",props:{distance:{type:Number,default:0}},setup(e){const n=A(!1),r=A(0),t=A(),u=()=>{if(window.scrollY>r.value-e.distance){let{width:s,height:o,left:a}=t.value.getBoundingClientRect();t.value.style.width=s+"px",t.value.style.height=o+"px",t.value.style.top=e.distance+"px",t.value.style.left=a+"px",n.value=!0}else n.value=!1};return Q(()=>{r.value=t.value.getBoundingClientRect().top,window.addEventListener("scroll",u)}),Hn(()=>{window.removeEventListener("scroll",u)}),{sticky:n,top:r,stickyRef:t}}});const ph={class:"mmq-sticky-wrapper"};function mh(e,n,r,t,u,s){return d(),f("div",ph,[p("div",{class:j(["mmq-sticky",{sticky:e.sticky}]),ref:"stickyRef"},[W(e.$slots,"default",{},void 0,!0)],2)])}const Ua=v(dh,[["render",mh],["__scopeId","data-v-225c16e4"]]),fh={name:"Sticky1.demo",components:{Sticky:Ua}},_h=p("div",{style:{width:"100%",height:"100px",background:"#409eff"}},null,-1),hh=jn("<div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div>",48);function gh(e,n,r,t,u,s){const o=_("Sticky");return d(),f("div",null,[l(o,{distance:70},{default:c(()=>[_h]),_:1}),hh])}const vh=v(fh,[["render",gh]]),Eh={name:"StickyDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Sticky1Demo:vh}}},bh=p("h1",null,"Sticky \u793A\u4F8B",-1);function yh(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[bh,l(o,{component:t.Sticky1Demo},null,8,["component"])],64)}const Ch=v(Eh,[["render",yh]]),$h={name:"MqGrid",props:{gutter:{type:Number,default:0}},setup(e){const n=A();return Q(()=>{je(()=>{e.gutter&&Array.from(n.value.children).forEach(r=>{(r.nextSibling.className==="mmq-grid-col"||r.nextSibling&&!r.previousElementSibling)&&(r.style.paddingRight=e.gutter+"px")})})}),{gutterRef:n}}};function Fh(e,n,r,t,u,s){return d(),f("div",{ref:"gutterRef",class:j(["mmq-grid-wrapper",{gutter:r.gutter}])},[W(e.$slots,"default",{},void 0,!0)],2)}const An=v($h,[["render",Fh],["__scopeId","data-v-f09a7f4c"]]),kh={name:"MqGridCol",props:{span:{type:Number,required:!0},offset:{type:Number,default:0}},setup({span:e,offset:n}){const r=A(),t=M(()=>Number(e/24*100).toFixed(2)+"%");return Q(()=>{if(n){const u=r.value.offsetWidth;r.value.style.transform=`translateX(${Number(n/e*u)}px)`}}),{widthRef:t,colRef:r}}};function Bh(e,n,r,t,u,s){return d(),f("div",{ref:"colRef",class:"mmq-grid-col",style:ie({width:t.widthRef})},[W(e.$slots,"default",{},void 0,!0)],4)}const xn=v(kh,[["render",Bh],["__scopeId","data-v-8540cb39"]]),Wa={name:"Grid1.demo",components:{Grid:An,GridCol:xn}};function er(e){e.__sourceCode=`<template>\r
  <Grid>\r
    <GridCol :span="24">\r
      <div class="demo1"></div>\r
    </GridCol>\r
  </Grid>\r
  <Grid>\r
    <GridCol :span="16">\r
      <div class="demo1"></div>\r
    </GridCol>\r
    <GridCol :span="8">\r
      <div class="demo2"></div>\r
    </GridCol>\r
    <GridCol :span="4">\r
      <div class="demo3"></div>\r
    </GridCol>\r
  </Grid>\r
  <Grid>\r
    <GridCol :span="6">\r
      <div class="demo1"></div>\r
    </GridCol>\r
    <GridCol :span="6">\r
      <div class="demo2"></div>\r
    </GridCol>\r
    <GridCol :span="6">\r
      <div class="demo1"></div>\r
    </GridCol>\r
    <GridCol :span="6">\r
      <div class="demo2"></div>\r
    </GridCol>\r
  </Grid>\r
</template>\r
\r
<script lang="ts">\r
import Grid from '../../../lib/Grid.vue'\r
import GridCol from '../../../lib/GridCol.vue'\r
export default {\r
name: "Grid1.demo",\r
  components: {Grid, GridCol}\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
$bg: #2b85e4;\r
@mixin col-style($bgLevel:0) {\r
  display: -moz-box;\r
  border-radius: 5px;\r
  height: 30px;\r
  margin-bottom: 20px;\r
  background: lighten($bg, $bgLevel);;\r
}\r
.demo1 {\r
  @include col-style()\r
}\r
.demo2 {\r
  @include col-style(20)\r
}\r
.demo3 {\r
  @include col-style(30)\r
}\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const Ge=e=>(ge("data-v-2525b23f"),e=e(),ve(),e),Dh=Ge(()=>p("div",{class:"demo1"},null,-1)),Ah=Ge(()=>p("div",{class:"demo1"},null,-1)),xh=Ge(()=>p("div",{class:"demo2"},null,-1)),qh=Ge(()=>p("div",{class:"demo3"},null,-1)),wh=Ge(()=>p("div",{class:"demo1"},null,-1)),Ih=Ge(()=>p("div",{class:"demo2"},null,-1)),Th=Ge(()=>p("div",{class:"demo1"},null,-1)),Mh=Ge(()=>p("div",{class:"demo2"},null,-1));function Sh(e,n,r,t,u,s){const o=_("GridCol"),a=_("Grid");return d(),f(k,null,[l(a,null,{default:c(()=>[l(o,{span:24},{default:c(()=>[Dh]),_:1})]),_:1}),l(a,null,{default:c(()=>[l(o,{span:16},{default:c(()=>[Ah]),_:1}),l(o,{span:8},{default:c(()=>[xh]),_:1}),l(o,{span:4},{default:c(()=>[qh]),_:1})]),_:1}),l(a,null,{default:c(()=>[l(o,{span:6},{default:c(()=>[wh]),_:1}),l(o,{span:6},{default:c(()=>[Ih]),_:1}),l(o,{span:6},{default:c(()=>[Th]),_:1}),l(o,{span:6},{default:c(()=>[Mh]),_:1})]),_:1})],64)}typeof er=="function"&&er(Wa);const Vh=v(Wa,[["render",Sh],["__scopeId","data-v-2525b23f"]]),Qa={name:"Grid2.demo",components:{Grid:An,GridCol:xn}};function nr(e){e.__sourceCode=`<template>\r
  <Grid :gutter="10">\r
    <GridCol :span="16">\r
      <div class="demo1"></div>\r
    </GridCol>\r
    <GridCol :span="8">\r
      <div class="demo2"></div>\r
    </GridCol>\r
    <GridCol :span="4">\r
      <div class="demo3"></div>\r
    </GridCol>\r
  </Grid>\r
  <Grid :gutter="20">\r
    <GridCol :span="6">\r
      <div class="demo1"></div>\r
    </GridCol>\r
    <GridCol :span="2">\r
      <div class="demo2"></div>\r
    </GridCol>\r
    <GridCol :span="6">\r
      <div class="demo1"></div>\r
    </GridCol>\r
    <GridCol :span="6">\r
      <div class="demo2"></div>\r
    </GridCol>\r
    <GridCol :span="4">\r
      <div class="demo2"></div>\r
    </GridCol>\r
  </Grid>\r
</template>\r
\r
<script lang="ts">\r
import Grid from '../../../lib/Grid.vue'\r
import GridCol from '../../../lib/GridCol.vue';\r
export default {\r
name: "Grid2.demo",\r
  components: {Grid,GridCol}\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
$bg: #2b85e4;\r
@mixin col-style($bgLevel:0) {\r
  display: -moz-box;\r
  border-radius: 5px;\r
  height: 30px;\r
  margin-bottom: 20px;\r
  background: lighten($bg, $bgLevel);;\r
}\r
.demo1 {\r
  @include col-style()\r
}\r
.demo2 {\r
  @include col-style(20)\r
}\r
.demo3 {\r
  @include col-style(30)\r
}\r
</style>`,e.__sourceCodeTitle=" \u652F\u6301\u95F4\u9694 "}const Ne=e=>(ge("data-v-af690c1d"),e=e(),ve(),e),Rh=Ne(()=>p("div",{class:"demo1"},null,-1)),Ph=Ne(()=>p("div",{class:"demo2"},null,-1)),Lh=Ne(()=>p("div",{class:"demo3"},null,-1)),Oh=Ne(()=>p("div",{class:"demo1"},null,-1)),Gh=Ne(()=>p("div",{class:"demo2"},null,-1)),Nh=Ne(()=>p("div",{class:"demo1"},null,-1)),zh=Ne(()=>p("div",{class:"demo2"},null,-1)),Hh=Ne(()=>p("div",{class:"demo2"},null,-1));function jh(e,n,r,t,u,s){const o=_("GridCol"),a=_("Grid");return d(),f(k,null,[l(a,{gutter:10},{default:c(()=>[l(o,{span:16},{default:c(()=>[Rh]),_:1}),l(o,{span:8},{default:c(()=>[Ph]),_:1}),l(o,{span:4},{default:c(()=>[Lh]),_:1})]),_:1}),l(a,{gutter:20},{default:c(()=>[l(o,{span:6},{default:c(()=>[Oh]),_:1}),l(o,{span:2},{default:c(()=>[Gh]),_:1}),l(o,{span:6},{default:c(()=>[Nh]),_:1}),l(o,{span:6},{default:c(()=>[zh]),_:1}),l(o,{span:4},{default:c(()=>[Hh]),_:1})]),_:1})],64)}typeof nr=="function"&&nr(Qa);const Uh=v(Qa,[["render",jh],["__scopeId","data-v-af690c1d"]]),Ka={components:{Grid:An,GridCol:xn},setup(){}};function tr(e){e.__sourceCode=`<template>\r
  <Grid :gutter="20">\r
    <GridCol :span="6">\r
      <div class="demo1"></div>\r
    </GridCol>\r
    <GridCol :span="6">\r
      <div class="demo2"></div>\r
    </GridCol>\r
    <GridCol :span="6">\r
      <div class="demo1"></div>\r
    </GridCol>\r
    <GridCol :span="6">\r
      <div class="demo2"></div>\r
    </GridCol>\r
  </Grid>\r
  <Grid :gutter="20">\r
    <GridCol :span="6" :offset="4">\r
      <div class="demo1"></div>\r
    </GridCol>\r
    <GridCol :span="6" :offset="8">\r
      <div class="demo2"></div>\r
    </GridCol>\r
  </Grid>\r
  <Grid :gutter="20">\r
    <GridCol :span="12" :offset="6">\r
      <div class="demo1"></div>\r
    </GridCol>\r
  </Grid>\r
  <Grid :gutter="20">\r
    <GridCol :span="6">\r
      <div class="demo1"></div>\r
    </GridCol>\r
    <GridCol :span="2">\r
      <div class="demo2"></div>\r
    </GridCol>\r
    <GridCol :span="3" :offset="7">\r
      <div class="demo1"></div>\r
    </GridCol>\r
    <GridCol :span="4" :offset="7">\r
      <div class="demo2"></div>\r
    </GridCol>\r
  </Grid>\r
</template>\r
\r
<script lang="ts">\r
import Grid from "../../../lib/Grid.vue";\r
import GridCol from "../../../lib/GridCol.vue";\r
export default {\r
  components: {Grid, GridCol},\r
  setup() {\r
  }\r
};\r
<\/script>\r
\r
<style lang="scss" scoped>\r
$bg: #2b85e4;\r
@mixin col-style($bgLevel:0) {\r
  display: -moz-box;\r
  border-radius: 5px;\r
  height: 30px;\r
  margin-bottom: 20px;\r
  background: lighten($bg, $bgLevel);;\r
}\r
.demo1 {\r
  @include col-style()\r
}\r
.demo2 {\r
  @include col-style(20)\r
}\r
.demo3 {\r
  @include col-style(30)\r
}\r
</style>`,e.__sourceCodeTitle=" \u652F\u6301\u504F\u79FB "}const Ae=e=>(ge("data-v-b038112e"),e=e(),ve(),e),Wh=Ae(()=>p("div",{class:"demo1"},null,-1)),Qh=Ae(()=>p("div",{class:"demo2"},null,-1)),Kh=Ae(()=>p("div",{class:"demo1"},null,-1)),Zh=Ae(()=>p("div",{class:"demo2"},null,-1)),Yh=Ae(()=>p("div",{class:"demo1"},null,-1)),Xh=Ae(()=>p("div",{class:"demo2"},null,-1)),Jh=Ae(()=>p("div",{class:"demo1"},null,-1)),e0=Ae(()=>p("div",{class:"demo1"},null,-1)),n0=Ae(()=>p("div",{class:"demo2"},null,-1)),t0=Ae(()=>p("div",{class:"demo1"},null,-1)),o0=Ae(()=>p("div",{class:"demo2"},null,-1));function r0(e,n,r,t,u,s){const o=_("GridCol"),a=_("Grid");return d(),f(k,null,[l(a,{gutter:20},{default:c(()=>[l(o,{span:6},{default:c(()=>[Wh]),_:1}),l(o,{span:6},{default:c(()=>[Qh]),_:1}),l(o,{span:6},{default:c(()=>[Kh]),_:1}),l(o,{span:6},{default:c(()=>[Zh]),_:1})]),_:1}),l(a,{gutter:20},{default:c(()=>[l(o,{span:6,offset:4},{default:c(()=>[Yh]),_:1}),l(o,{span:6,offset:8},{default:c(()=>[Xh]),_:1})]),_:1}),l(a,{gutter:20},{default:c(()=>[l(o,{span:12,offset:6},{default:c(()=>[Jh]),_:1})]),_:1}),l(a,{gutter:20},{default:c(()=>[l(o,{span:6},{default:c(()=>[e0]),_:1}),l(o,{span:2},{default:c(()=>[n0]),_:1}),l(o,{span:3,offset:7},{default:c(()=>[t0]),_:1}),l(o,{span:4,offset:7},{default:c(()=>[o0]),_:1})]),_:1})],64)}typeof tr=="function"&&tr(Ka);const u0=v(Ka,[["render",r0],["__scopeId","data-v-b038112e"]]),a0=N({name:"CardDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Grid1Demo:Vh,Grid2Demo:Uh,Grid3Demo:u0}}}),l0=p("h1",null,"Grid\u793A\u4F8B",-1);function s0(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[l0,l(o,{component:e.Grid1Demo},null,8,["component"]),l(o,{component:e.Grid2Demo},null,8,["component"]),l(o,{component:e.Grid3Demo},null,8,["component"])],64)}const i0=v(a0,[["render",s0]]),c0=N({name:"Image",props:{src:{type:String,default:""},preview:{type:Boolean,default:!1},fit:{type:String}},setup(e){const n=A(),r=A(),t=M(()=>e.preview?"preview":""),u=M(()=>({"object-fit":e.fit}));return{modelRef:n,modelImgRef:r,imgClick:a=>{n.value&&(n.value.style.display="flex",r.value.src=e.src||a.target.src)},closeModel:()=>{n.value&&(n.value.style.display="none")},isPreview:t,fitStyle:u}}});const d0={class:"mmq-imageModel-wrapper"},p0=["src"],m0={ref:"closeRef",class:"mmq-imageModel-close"},f0={ref:"modelImgRef",class:"model-content",src:"",alt:""};function _0(e,n,r,t,u,s){return d(),f("div",d0,[p("div",{class:j(["myImg",e.isPreview]),onClick:n[0]||(n[0]=(...o)=>e.imgClick&&e.imgClick(...o))},[W(e.$slots,"default",{},()=>[p("img",{src:e.src,style:ie(e.fitStyle),alt:""},null,12,p0)],!0)],2),e.preview?(d(),w(Un,{key:0,to:"body"},[p("div",{onClick:n[1]||(n[1]=(...o)=>e.closeModel&&e.closeModel(...o)),ref:"modelRef",class:"model"},[p("span",m0,"\xD7",512),p("img",f0,null,512)],512)])):G("",!0)])}const Bt=v(c0,[["render",_0],["__scopeId","data-v-e1e10170"]]),Za={components:{ImageModel:Bt},setup(){return{fits:["fill","contain","cover","none","scale-down"]}}};function or(e){e.__sourceCode=`<template>\r
  <div class="demo-image">\r
    <div v-for="fit in fits" :key="fit" class="block">\r
      <span class="demonstration">{{ fit }}</span>\r
      <ImageModel style="width: 100px; height: 100px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :fit="fit" />\r
    </div>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import ImageModel from "../../../lib/ImageModel.vue";\r
export default {\r
  components: {ImageModel},\r
  setup() {\r
    const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']\r
    return {\r
      fits\r
    };\r
  }\r
};\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.demo-image .block {\r
  padding: 30px 0;\r
  text-align: center;\r
  display: inline-flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  border-right: 1px solid #dcdfe6;\r
  width: 20%;\r
  box-sizing: border-box;\r
  vertical-align: top;\r
}\r
.demo-image .block:last-child {\r
  border-right: none;\r
}\r
.demo-image .demonstration {\r
  display: block;\r
  font-size: 14px;\r
  margin-bottom: 20px;\r
}\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const h0={class:"demo-image"},g0={class:"demonstration"};function v0(e,n,r,t,u,s){const o=_("ImageModel");return d(),f("div",h0,[(d(!0),f(k,null,J(t.fits,a=>(d(),f("div",{key:a,class:"block"},[p("span",g0,L(a),1),l(o,{style:{width:"100px",height:"100px"},src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",fit:a},null,8,["fit"])]))),128))])}typeof or=="function"&&or(Za);const E0=v(Za,[["render",v0],["__scopeId","data-v-e0026a17"]]),Ya={components:{ImageModel:Bt},setup(){return{}}};function rr(e){e.__sourceCode=`<template>\r
  <ImageModel preview src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">\r
    <img width="300px" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt=""/>\r
  </ImageModel>\r
</template>\r
\r
<script lang="ts">\r
import ImageModel from "../../../lib/ImageModel.vue";\r
export default {\r
  components: {ImageModel},\r
  setup() {\r
    return {};\r
  }\r
};\r
<\/script>\r
\r
<style lang="scss" scoped>\r
img {\r
  width: 100%;\r
  max-width: 300px;\r
}\r
</style>`,e.__sourceCodeTitle=" \u9884\u89C8 "}const b0=e=>(ge("data-v-dbf80455"),e=e(),ve(),e),y0=b0(()=>p("img",{width:"300px",src:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",alt:""},null,-1));function C0(e,n,r,t,u,s){const o=_("ImageModel");return d(),w(o,{preview:"",src:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"},{default:c(()=>[y0]),_:1})}typeof rr=="function"&&rr(Ya);const $0=v(Ya,[["render",C0],["__scopeId","data-v-dbf80455"]]),F0={name:"ImageDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Image1Demo:E0,Image2Demo:$0}}},k0=p("h1",null,"Image \u793A\u4F8B",-1);function B0(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[k0,l(o,{component:t.Image1Demo},null,8,["component"]),l(o,{component:t.Image2Demo},null,8,["component"])],64)}const D0=v(F0,[["render",B0]]),A0=N({name:"MqContainer",props:{direction:{type:String,default:"vertical"}},setup(e,{slots:n}){return{isVertical:M(()=>{if(e.direction==="vertical")return!0;if(e.direction==="horizontal")return!1})}}});function x0(e,n,r,t,u,s){return d(),f("section",{class:j(["mmq-container",{"is-vertical":e.isVertical}])},[W(e.$slots,"default",{},void 0,!0)],2)}const Xa=v(A0,[["render",x0],["__scopeId","data-v-476e5ba8"]]),q0=N({name:"MqHeader",props:{height:{type:[Number,String],default:60}},setup(e){return{style:M(()=>({height:`${e.height}px`}))}}});function w0(e,n,r,t,u,s){return d(),f("header",{class:"mmq-header",style:ie(e.style)},[W(e.$slots,"default",{},void 0,!0)],4)}const Ja=v(q0,[["render",w0],["__scopeId","data-v-86bf18f3"]]),I0=N({name:"MqMain"});const T0={class:"mmq-main"};function M0(e,n,r,t,u,s){return d(),f("main",T0,[W(e.$slots,"default",{},void 0,!0)])}const el=v(I0,[["render",M0],["__scopeId","data-v-905283e7"]]),S0=N({name:"MqFooter",props:{height:{type:[Number,String],default:60}},setup(e){return{style:M(()=>({height:e.height+"px"}))}}});function V0(e,n,r,t,u,s){return d(),f("footer",{class:"mmq-footer",style:ie(e.style)},[W(e.$slots,"default",{},void 0,!0)],4)}const nl=v(S0,[["render",V0],["__scopeId","data-v-69f13074"]]),R0=N({name:"MqAside",props:{width:{type:[Number,String],default:300}},setup(e){return{style:M(()=>({width:`${e.width}px`}))}}});function P0(e,n,r,t,u,s){return d(),f("aside",{class:"mmq-aside",style:ie(e.style)},[W(e.$slots,"default",{},void 0,!0)],4)}const tl=v(R0,[["render",P0],["__scopeId","data-v-4a868c97"]]),ol={name:"Container1.demo",components:{Container:Xa,Header:Ja,Main:el,Footer:nl,Aside:tl}};function ur(e){e.__sourceCode=`<template>\r
  <div class="wrapper">\r
  <Container>\r
    <Header class="header">Header</Header>\r
    <Main class="main">Main</Main>\r
  </Container>\r
\r
  <Container>\r
    <Header class="header">Header</Header>\r
    <Main class="main">Main</Main>\r
    <Footer class="footer">Footer</Footer>\r
  </Container>\r
\r
  <Container direction="horizontal">\r
    <Aside class="aside" width="200px">Aside</Aside>\r
    <Main class="main">Main</Main>\r
  </Container>\r
\r
    <Container>\r
      <Header class="header">Header</Header>\r
      <Container direction="horizontal">\r
        <Aside class="aside" width="200px">Aside</Aside>\r
        <Main class="main">Main</Main>\r
      </Container>\r
    </Container>\r
\r
    <Container>\r
      <Header class="header">header</Header>\r
      <Container direction="horizontal">\r
        <Aside width="200px" class="aside">aside</Aside>\r
        <container>\r
          <Main class="main">main</Main>\r
          <Footer class="footer">footer</Footer>\r
        </container>\r
      </Container>\r
    </Container>\r
\r
    <Container direction="horizontal">\r
      <Aside class="aside" width="200px">Aside</Aside>\r
      <Container>\r
        <Header class="header">header</Header>\r
        <Main class="main">Main</Main>\r
      </Container>\r
    </Container>\r
\r
    <Container direction="horizontal">\r
      <Aside class="aside" width="200px">aside</Aside>\r
      <container>\r
        <Header class="header">header</Header>\r
        <Main class="main">main</Main>\r
        <Footer class="footer">Footer</Footer>\r
      </container>\r
    </Container>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Container from '../../../lib/Container/Container.vue'\r
import Header from '../../../lib/Container/Header.vue'\r
import Main from '../../../lib/Container/Main.vue'\r
import Footer from '../../../lib/Container/Footer.vue'\r
import Aside from '../../../lib/Container/Aside.vue';\r
export default {\r
  name: 'Container1.demo',\r
  components: {Container, Header, Main,Footer,Aside}\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
@import "../../../style/theme";\r
.wrapper {\r
  >*{\r
    margin-bottom: 40px;\r
  }\r
  .header, .footer {\r
    background-color: $mmq-container-header;\r
    text-align: center;\r
    line-height: 60px;\r
  }\r
\r
  .aside {\r
    background-color: $mmq-container-aside;\r
    text-align: center;\r
    line-height: 160px;\r
  }\r
\r
  .main {\r
    background-color: $mmq-container-main;\r
    line-height: 160px;\r
    text-align: center;\r
  }\r
  .mmq-container:nth-child(5){\r
    .aside{\r
      line-height: 220px;\r
    }\r
  }\r
  .mmq-container:nth-child(6){\r
    .aside{\r
      line-height: 220px;\r
    }\r
  }\r
  .mmq-container:nth-child(7){\r
    .aside{\r
      line-height: 280px;\r
    }\r
  }\r
}\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C1\u7684\u5404\u79CD\u5E03\u5C40 "}const L0={class:"wrapper"},O0=h("Header"),G0=h("Main"),N0=h("Header"),z0=h("Main"),H0=h("Footer"),j0=h("Aside"),U0=h("Main"),W0=h("Header"),Q0=h("Aside"),K0=h("Main"),Z0=h("header"),Y0=h("aside"),X0=h("main"),J0=h("footer"),eg=h("Aside"),ng=h("header"),tg=h("Main"),og=h("aside"),rg=h("header"),ug=h("main"),ag=h("Footer");function lg(e,n,r,t,u,s){const o=_("Header"),a=_("Main"),i=_("Container"),g=_("Footer"),m=_("Aside"),b=_("container");return d(),f("div",L0,[l(i,null,{default:c(()=>[l(o,{class:"header"},{default:c(()=>[O0]),_:1}),l(a,{class:"main"},{default:c(()=>[G0]),_:1})]),_:1}),l(i,null,{default:c(()=>[l(o,{class:"header"},{default:c(()=>[N0]),_:1}),l(a,{class:"main"},{default:c(()=>[z0]),_:1}),l(g,{class:"footer"},{default:c(()=>[H0]),_:1})]),_:1}),l(i,{direction:"horizontal"},{default:c(()=>[l(m,{class:"aside",width:"200px"},{default:c(()=>[j0]),_:1}),l(a,{class:"main"},{default:c(()=>[U0]),_:1})]),_:1}),l(i,null,{default:c(()=>[l(o,{class:"header"},{default:c(()=>[W0]),_:1}),l(i,{direction:"horizontal"},{default:c(()=>[l(m,{class:"aside",width:"200px"},{default:c(()=>[Q0]),_:1}),l(a,{class:"main"},{default:c(()=>[K0]),_:1})]),_:1})]),_:1}),l(i,null,{default:c(()=>[l(o,{class:"header"},{default:c(()=>[Z0]),_:1}),l(i,{direction:"horizontal"},{default:c(()=>[l(m,{width:"200px",class:"aside"},{default:c(()=>[Y0]),_:1}),l(b,null,{default:c(()=>[l(a,{class:"main"},{default:c(()=>[X0]),_:1}),l(g,{class:"footer"},{default:c(()=>[J0]),_:1})]),_:1})]),_:1})]),_:1}),l(i,{direction:"horizontal"},{default:c(()=>[l(m,{class:"aside",width:"200px"},{default:c(()=>[eg]),_:1}),l(i,null,{default:c(()=>[l(o,{class:"header"},{default:c(()=>[ng]),_:1}),l(a,{class:"main"},{default:c(()=>[tg]),_:1})]),_:1})]),_:1}),l(i,{direction:"horizontal"},{default:c(()=>[l(m,{class:"aside",width:"200px"},{default:c(()=>[og]),_:1}),l(b,null,{default:c(()=>[l(o,{class:"header"},{default:c(()=>[rg]),_:1}),l(a,{class:"main"},{default:c(()=>[ug]),_:1}),l(g,{class:"footer"},{default:c(()=>[ag]),_:1})]),_:1})]),_:1})])}typeof ur=="function"&&ur(ol);const sg=v(ol,[["render",lg],["__scopeId","data-v-e133123a"]]),ig={name:"ContainerDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Container1Demo:sg}}},cg=p("h1",null,"\u4F7F\u7528\u5B9E\u4F8B",-1);function dg(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[cg,l(o,{component:t.Container1Demo},null,8,["component"])],64)}const pg=v(ig,[["render",dg]]),mg=N({name:"MqLink",props:{type:{type:String,default:"default",validator:e=>["default","primary","success","warning","info","danger"].includes(e)},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:String,default:""}},emits:["click"],setup(e,{emit:n}){const r=A(e.type),t=U({default:"#909399",primary:"#409eff",success:"#67c23a",warning:"#e6a23c",danger:"#f56c6c",info:"#909399"}),u=M(()=>{for(let o in t)if(t.hasOwnProperty(o)&&r.value===o)return t[o]});return{handleClick:o=>{e.disabled||n("click",o)},IconColor:u}}});const fg=["href"],_g={key:1,class:"mmq-link-inner"};function hg(e,n,r,t,u,s){const o=_("MqIcon");return d(),f("a",{class:j(["mmq-link",e.type?`mmq-link-${e.type}`:"",e.disabled&&"is-disabled",e.underline&&!e.disabled&&"is-underline"]),href:e.disabled||!e.href?null:e.href,onClick:n[0]||(n[0]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.icon?(d(),w(o,{key:0,color:e.IconColor},{default:c(()=>[(d(),w(ke(e.icon)))]),_:1},8,["color"])):G("",!0),e.$slots.default?(d(),f("span",_g,[W(e.$slots,"default",{},void 0,!0)])):G("",!0),e.$slots.icon?W(e.$slots,"icon",{key:2},void 0,!0):G("",!0)],10,fg)}const qn=v(mg,[["render",hg],["__scopeId","data-v-668d1713"]]),rl={name:"GuluLink1.demo",components:{"mmq-link":qn},setup(){return{clicked:n=>{console.log(n.target.innerText)}}}};function ar(e){e.__sourceCode=`<template>\r
  <div>\r
    <mmq-link href="https://4399.com" target="_blank">\u9ED8\u8BA4\u94FE\u63A5</mmq-link>\r
    <mmq-link @click="clicked" type="primary">\u4E3B\u8981\u94FE\u63A5</mmq-link>\r
    <mmq-link type="success">\u6210\u529F\u94FE\u63A5</mmq-link>\r
    <mmq-link type="warning">\u8B66\u544A\u94FE\u63A5</mmq-link>\r
    <mmq-link type="danger">\u5371\u9669\u94FE\u63A5</mmq-link>\r
    <mmq-link type="info">\u4FE1\u606F\u94FE\u63A5</mmq-link>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import GuluLink from '../../../lib/MqLink.vue'\r
export default {\r
  name: 'GuluLink1.demo',\r
  components:{\r
    'mmq-link': GuluLink\r
  },\r
  setup(){\r
    const clicked = (event:any)=>{\r
      console.log(event.target.innerText)\r
    }\r
    return {\r
      clicked\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const gg=h("\u9ED8\u8BA4\u94FE\u63A5"),vg=h("\u4E3B\u8981\u94FE\u63A5"),Eg=h("\u6210\u529F\u94FE\u63A5"),bg=h("\u8B66\u544A\u94FE\u63A5"),yg=h("\u5371\u9669\u94FE\u63A5"),Cg=h("\u4FE1\u606F\u94FE\u63A5");function $g(e,n,r,t,u,s){const o=_("mmq-link");return d(),f("div",null,[l(o,{href:"https://4399.com",target:"_blank"},{default:c(()=>[gg]),_:1}),l(o,{onClick:t.clicked,type:"primary"},{default:c(()=>[vg]),_:1},8,["onClick"]),l(o,{type:"success"},{default:c(()=>[Eg]),_:1}),l(o,{type:"warning"},{default:c(()=>[bg]),_:1}),l(o,{type:"danger"},{default:c(()=>[yg]),_:1}),l(o,{type:"info"},{default:c(()=>[Cg]),_:1})])}typeof ar=="function"&&ar(rl);const Fg=v(rl,[["render",$g]]),ul={name:"GuluLink1.demo",components:{"mmq-link":qn}};function lr(e){e.__sourceCode=`<template>\r
  <div>\r
    <mmq-link disabled>\u9ED8\u8BA4\u94FE\u63A5</mmq-link>\r
    <mmq-link type="primary" disabled>\u4E3B\u8981\u94FE\u63A5</mmq-link>\r
    <mmq-link type="success" disabled>\u6210\u529F\u94FE\u63A5</mmq-link>\r
    <mmq-link type="warning" disabled>\u8B66\u544A\u94FE\u63A5</mmq-link>\r
    <mmq-link type="danger" disabled>\u5371\u9669\u94FE\u63A5</mmq-link>\r
    <mmq-link type="info" disabled>\u4FE1\u606F\u94FE\u63A5</mmq-link>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import GuluLink from '../../../lib/MqLink.vue'\r
export default {\r
  name: 'GuluLink1.demo',\r
  components:{\r
    'mmq-link': GuluLink\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u7981\u7528\u72B6\u6001 "}const kg=h("\u9ED8\u8BA4\u94FE\u63A5"),Bg=h("\u4E3B\u8981\u94FE\u63A5"),Dg=h("\u6210\u529F\u94FE\u63A5"),Ag=h("\u8B66\u544A\u94FE\u63A5"),xg=h("\u5371\u9669\u94FE\u63A5"),qg=h("\u4FE1\u606F\u94FE\u63A5");function wg(e,n,r,t,u,s){const o=_("mmq-link");return d(),f("div",null,[l(o,{disabled:""},{default:c(()=>[kg]),_:1}),l(o,{type:"primary",disabled:""},{default:c(()=>[Bg]),_:1}),l(o,{type:"success",disabled:""},{default:c(()=>[Dg]),_:1}),l(o,{type:"warning",disabled:""},{default:c(()=>[Ag]),_:1}),l(o,{type:"danger",disabled:""},{default:c(()=>[xg]),_:1}),l(o,{type:"info",disabled:""},{default:c(()=>[qg]),_:1})])}typeof lr=="function"&&lr(ul);const Ig=v(ul,[["render",wg]]),al={name:"GuluLink1.demo",components:{"mmq-link":qn}};function sr(e){e.__sourceCode=`<template>\r
  <div>\r
    <mmq-link :underline="false">\u6CA1\u6709\u4E0B\u5212\u7EBF</mmq-link>\r
    <mmq-link :underline="true">\u6709\u4E0B\u5212\u7EBF</mmq-link>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import GuluLink from '../../../lib/MqLink.vue'\r
export default {\r
  name: 'GuluLink1.demo',\r
  components:{\r
    'mmq-link': GuluLink\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u4E0B\u5212\u7EBF "}const Tg=h("\u6CA1\u6709\u4E0B\u5212\u7EBF"),Mg=h("\u6709\u4E0B\u5212\u7EBF");function Sg(e,n,r,t,u,s){const o=_("mmq-link");return d(),f("div",null,[l(o,{underline:!1},{default:c(()=>[Tg]),_:1}),l(o,{underline:!0},{default:c(()=>[Mg]),_:1})])}typeof sr=="function"&&sr(al);const Vg=v(al,[["render",Sg]]),ll={name:"GuluLink1.demo",components:{"mmq-link":qn}};function ir(e){e.__sourceCode=`<template>\r
  <div>\r
    <mmq-link type="danger" icon="Delete">\u5220\u9664</mmq-link>\r
    <mmq-link type="warning">\u7528\u6237<MqIcon color="#e6a23c">\r
      <Document />\r
    </MqIcon></mmq-link>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import GuluLink from '../../../lib/MqLink.vue'\r
export default {\r
  name: 'GuluLink1.demo',\r
  components:{\r
    'mmq-link': GuluLink\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u53EF\u53BBIcon\u7EC4\u4EF6\u5904\u6311\u9009 "}const Rg=h("\u5220\u9664"),Pg=h("\u7528\u6237");function Lg(e,n,r,t,u,s){const o=_("mmq-link"),a=_("Document"),i=_("MqIcon");return d(),f("div",null,[l(o,{type:"danger",icon:"Delete"},{default:c(()=>[Rg]),_:1}),l(o,{type:"warning"},{default:c(()=>[Pg,l(i,{color:"#e6a23c"},{default:c(()=>[l(a)]),_:1})]),_:1})])}typeof ir=="function"&&ir(ll);const Og=v(ll,[["render",Lg]]),Gg={name:"LinkDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{GuluLink1Demo:Fg,GuluLink2Demo:Ig,GuluLink3Demo:Vg,GuluLink4Demo:Og}}},Ng=p("h1",null,"\u4F7F\u7528\u793A\u4F8B",-1);function zg(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[Ng,l(o,{component:t.GuluLink1Demo},null,8,["component"]),l(o,{component:t.GuluLink2Demo},null,8,["component"]),l(o,{component:t.GuluLink3Demo},null,8,["component"]),l(o,{component:t.GuluLink4Demo},null,8,["component"])],64)}const Hg=v(Gg,[["render",zg]]),sl={name:"Tag1.demo"};function cr(e){e.__sourceCode=`<template>\r
  <div>\r
    <MqTag>\u6807\u7B7E\u4E00</MqTag>\r
    <MqTag type="success">\u6807\u7B7E\u4E8C</MqTag>\r
    <MqTag type="info">\u6807\u7B7E\u4E09</MqTag>\r
    <MqTag type="warning">\u6807\u7B7E\u56DB</MqTag>\r
    <MqTag type="danger">\u6807\u7B7E\u4E94</MqTag>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
\r
export default {\r
  name: 'Tag1.demo'\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u57FA\u7840\u7528\u6CD5 "}const jg=h("\u6807\u7B7E\u4E00"),Ug=h("\u6807\u7B7E\u4E8C"),Wg=h("\u6807\u7B7E\u4E09"),Qg=h("\u6807\u7B7E\u56DB"),Kg=h("\u6807\u7B7E\u4E94");function Zg(e,n,r,t,u,s){const o=_("MqTag");return d(),f("div",null,[l(o,null,{default:c(()=>[jg]),_:1}),l(o,{type:"success"},{default:c(()=>[Ug]),_:1}),l(o,{type:"info"},{default:c(()=>[Wg]),_:1}),l(o,{type:"warning"},{default:c(()=>[Qg]),_:1}),l(o,{type:"danger"},{default:c(()=>[Kg]),_:1})])}typeof cr=="function"&&cr(sl);const Yg=v(sl,[["render",Zg]]),Xg=N({name:"MqTag",props:{canClose:{type:Boolean},type:{type:String,default:"success"},color:{type:String,default:""},size:{type:String,validator:e=>["","large","medium","small","mini"].includes(e)},effect:{type:String,default:"light",validator:e=>["dark","light","plain"].indexOf(e)!==-1}},emits:["close","click"],setup(e,n){const r=M(()=>e.size),t=M(()=>{const{type:o,effect:a}=e;return["mmq-tag",`mmq-tag-${o}`,r.value?`mmq-tag-${r.value}`:"",`mmq-tag-${a}`]});return{tagSize:r,classes:t,handleClose:o=>{o.stopPropagation(),n.emit("close",o)},handleClick:o=>{n.emit("click",o)}}}});function Jg(e,n,r,t,u,s){return d(),f("span",{class:j(e.classes),style:ie({background:e.color}),onClick:n[1]||(n[1]=(...o)=>e.handleClick&&e.handleClick(...o))},[W(e.$slots,"default",{},void 0,!0),e.canClose?(d(),f("span",{key:0,class:"close",onClick:n[0]||(n[0]=(...o)=>e.handleClose&&e.handleClose(...o))},"\xD7 ")):G("",!0)],6)}const wn=v(Xg,[["render",Jg],["__scopeId","data-v-81ada477"]]),il={name:"Tag1.demo",components:{Tag:wn},setup(){return{tags:U([{name:"\u6807\u7B7E\u4E00",type:""},{name:"\u6807\u7B7E\u4E8C",type:"success"},{name:"\u6807\u7B7E\u4E09",type:"info"},{name:"\u6807\u7B7E\u56DB",type:"warning"},{name:"\u6807\u7B7E\u4E94",type:"danger"}])}}};function dr(e){e.__sourceCode=`<template>\r
  <Tag v-for="tag in tags" :key="tag.name" canClose :type="tag.type">{{tag.name}}</Tag>\r
</template>\r
<script lang="ts">\r
import Tag from '../../../lib/Tag.vue';\r
import {reactive, ref} from 'vue';\r
\r
export default {\r
  name: 'Tag1.demo',\r
  components: {Tag},\r
  setup(){\r
    const tags = reactive([\r
      { name: '\u6807\u7B7E\u4E00', type: '' },\r
      { name: '\u6807\u7B7E\u4E8C', type: 'success' },\r
      { name: '\u6807\u7B7E\u4E09', type: 'info' },\r
      { name: '\u6807\u7B7E\u56DB', type: 'warning' },\r
      { name: '\u6807\u7B7E\u4E94', type: 'danger' }\r
    ])\r
    return {\r
      tags\r
    }\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u53EF\u79FB\u9664\u6807\u7B7E "}function ev(e,n,r,t,u,s){const o=_("Tag");return d(!0),f(k,null,J(t.tags,a=>(d(),w(o,{key:a.name,canClose:"",type:a.type},{default:c(()=>[h(L(a.name),1)]),_:2},1032,["type"]))),128)}typeof dr=="function"&&dr(il);const nv=v(il,[["render",ev]]),cl={name:"Tag3.demo",components:{Tag:wn,Input:Be,Button:ee},setup(){let e=U(["\u6807\u7B7E\u4E00","\u6807\u7B7E\u4E8C","\u6807\u7B7E\u4E09"]);const n=A(!1),r=s=>{e.splice(e.indexOf(s),1)},t=A("");return{dynamicTags:e,closeTag:r,isEdit:n,enterClick:s=>{e.push(t.value),n.value=!1},value:t}}};function pr(e){e.__sourceCode=`<template>\r
  <Tag :key="tag"\r
       v-for="tag in dynamicTags"\r
       canClose\r
       @close="closeTag">\r
    {{ tag }}\r
  </Tag>\r
  <span style="margin-left: 20px">\r
    <Button @click="isEdit = true" v-if="!isEdit">+ tag</Button>\r
    <Input v-if="isEdit" v-model="value" @change="enterClick" @keydown.enter="enterClick"/>\r
  </span>\r
</template>\r
\r
<script lang="ts">\r
import Tag from '../../../lib/Tag.vue';\r
import Input from '../../../lib/Input.vue';\r
import Button from '../../../lib/Button.vue';\r
import {reactive, ref} from 'vue';\r
\r
export default {\r
  name: 'Tag3.demo',\r
  components: {Tag, Input, Button},\r
  setup() {\r
    let dynamicTags = reactive(['\u6807\u7B7E\u4E00', '\u6807\u7B7E\u4E8C', '\u6807\u7B7E\u4E09']);\r
    const isEdit = ref(false);\r
    const closeTag = (name: string) => {\r
      dynamicTags.splice(dynamicTags.indexOf(name), 1);\r
    };\r
    const value = ref('');\r
    const enterClick = (e: KeyboardEvent) => {\r
      dynamicTags.push(value.value);\r
      isEdit.value = false;\r
    };\r
    return {\r
      dynamicTags, closeTag, isEdit, enterClick, value\r
    };\r
  }\r
};\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.button-new-tag {\r
  margin-left: 10px;\r
  height: 32px;\r
  line-height: 30px;\r
  padding-top: 0;\r
  padding-bottom: 0;\r
}\r
\r
.input-new-tag {\r
  width: 90px;\r
  margin-left: 10px;\r
  vertical-align: bottom;\r
}\r
</style>`,e.__sourceCodeTitle=" \u52A8\u6001\u7F16\u8F91\u6807\u7B7E "}const tv={style:{"margin-left":"20px"}},ov=h("+ tag");function rv(e,n,r,t,u,s){const o=_("Tag"),a=_("Button"),i=_("Input");return d(),f(k,null,[(d(!0),f(k,null,J(t.dynamicTags,g=>(d(),w(o,{key:g,canClose:"",onClose:t.closeTag},{default:c(()=>[h(L(g),1)]),_:2},1032,["onClose"]))),128)),p("span",tv,[t.isEdit?G("",!0):(d(),w(a,{key:0,onClick:n[0]||(n[0]=g=>t.isEdit=!0)},{default:c(()=>[ov]),_:1})),t.isEdit?(d(),w(i,{key:1,modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=g=>t.value=g),onChange:t.enterClick,onKeydown:bs(t.enterClick,["enter"])},null,8,["modelValue","onChange","onKeydown"])):G("",!0)])],64)}typeof pr=="function"&&pr(cl);const uv=v(cl,[["render",rv],["__scopeId","data-v-7d75a9bb"]]),dl={name:"Tag1.demo",components:{Tag:wn}};function mr(e){e.__sourceCode=`<template>\r
  <Tag canClose>\u9ED8\u8BA4\u6807\u7B7E</Tag>\r
  <Tag size="medium" canClose>\u4E2D\u7B49\u6807\u7B7E</Tag>\r
  <Tag size="small" canClose>\u5C0F\u578B\u6807\u7B7E</Tag>\r
  <Tag size="mini" canClose>\u8D85\u5C0F\u6807\u7B7E</Tag>\r
</template>\r
<script lang="ts">\r
import Tag from '../../../lib/Tag.vue';\r
\r
export default {\r
  name: 'Tag1.demo',\r
  components: {Tag},\r
\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u4E0D\u540C\u5C3A\u5BF8 "}const av=h("\u9ED8\u8BA4\u6807\u7B7E"),lv=h("\u4E2D\u7B49\u6807\u7B7E"),sv=h("\u5C0F\u578B\u6807\u7B7E"),iv=h("\u8D85\u5C0F\u6807\u7B7E");function cv(e,n,r,t,u,s){const o=_("Tag");return d(),f(k,null,[l(o,{canClose:""},{default:c(()=>[av]),_:1}),l(o,{size:"medium",canClose:""},{default:c(()=>[lv]),_:1}),l(o,{size:"small",canClose:""},{default:c(()=>[sv]),_:1}),l(o,{size:"mini",canClose:""},{default:c(()=>[iv]),_:1})],64)}typeof mr=="function"&&mr(dl);const dv=v(dl,[["render",cv]]),pl={name:"Tag1.demo",components:{Tag:wn},setup(){return{items:U([{type:"",label:"\u6807\u7B7E\u4E00"},{type:"success",label:"\u6807\u7B7E\u4E8C"},{type:"info",label:"\u6807\u7B7E\u4E09"},{type:"danger",label:"\u6807\u7B7E\u56DB"},{type:"warning",label:"\u6807\u7B7E\u4E94"}])}}};function fr(e){e.__sourceCode=`<template>\r
  <div>\r
    <span>Dark</span>\r
    <Tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">{{ item.label }}</Tag>\r
  </div>\r
  <div>\r
    <span>Plain</span>\r
    <Tag v-for="item in items" :key="item.label" :type="item.type" effect="plain">{{ item.label }}</Tag>\r
  </div>\r
</template>\r
<script lang="ts">\r
import Tag from '../../../lib/Tag.vue';\r
import {reactive} from 'vue';\r
\r
export default {\r
  name: 'Tag1.demo',\r
  components: {Tag},\r
  setup() {\r
    const items = reactive([\r
      {type: '', label: '\u6807\u7B7E\u4E00'},\r
      {type: 'success', label: '\u6807\u7B7E\u4E8C'},\r
      {type: 'info', label: '\u6807\u7B7E\u4E09'},\r
      {type: 'danger', label: '\u6807\u7B7E\u56DB'},\r
      {type: 'warning', label: '\u6807\u7B7E\u4E94'}]);\r
    return {items};\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u4E0D\u540C\u6A21\u5F0F "}const pv=p("span",null,"Dark",-1),mv=p("span",null,"Plain",-1);function fv(e,n,r,t,u,s){const o=_("Tag");return d(),f(k,null,[p("div",null,[pv,(d(!0),f(k,null,J(t.items,a=>(d(),w(o,{key:a.label,type:a.type,effect:"dark"},{default:c(()=>[h(L(a.label),1)]),_:2},1032,["type"]))),128))]),p("div",null,[mv,(d(!0),f(k,null,J(t.items,a=>(d(),w(o,{key:a.label,type:a.type,effect:"plain"},{default:c(()=>[h(L(a.label),1)]),_:2},1032,["type"]))),128))])],64)}typeof fr=="function"&&fr(pl);const _v=v(pl,[["render",fv]]),hv={name:"TagDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Tag1Demo:Yg,Tag2Demo:nv,Tag3Demo:uv,Tag4Demo:dv,Tag5Demo:_v}}},gv=p("h1",null,"\u4F7F\u7528\u793A\u4F8B",-1);function vv(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[gv,l(o,{component:t.Tag1Demo},null,8,["component"]),l(o,{component:t.Tag2Demo},null,8,["component"]),l(o,{component:t.Tag3Demo},null,8,["component"]),l(o,{component:t.Tag4Demo},null,8,["component"]),l(o,{component:t.Tag5Demo},null,8,["component"])],64)}const Ev=v(hv,[["render",vv]]),bv=N({name:"MqBadge",props:{value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:{type:Boolean},hidden:Boolean,type:{type:String,default:"primary",validator:e=>["primary","success","warning","info","danger"].includes(e)}},setup(e){return{content:M(()=>{if(!e.isDot)return typeof e.value=="number"&&typeof e.max=="number"&&e.max<e.value?`${e.max}+`:e.value})}}});const yv={class:"mmq-badge"},Cv=["textContent"];function $v(e,n,r,t,u,s){return d(),f("div",yv,[W(e.$slots,"default",{},void 0,!0),p("div",null,[Te(p("div",{class:j(["mmq-badge-content",[e.isDot?"is-dot":"mmq-badge-content-"+e.type,"is-fixed"]]),textContent:L(e.content)},null,10,Cv),[[Ue,!e.hidden&&(e.content||e.content===0||e.isDot)]])])])}const In=v(bv,[["render",$v],["__scopeId","data-v-281a6fa5"]]),ml={name:"Badge1.demo",components:{Badge:In,Button:ee}};function _r(e){e.__sourceCode=`<template>\r
  <Badge :value="12" class="item">\r
    <Button size="big">\u8BC4\u8BBA</Button>\r
  </Badge>\r
  <Badge :value="12" class="item">\r
    <Button size="big">\u56DE\u590D</Button>\r
  </Badge>\r
  <Badge :value="1" class="item" type="primary">\r
    <Button size="big">\u8BC4\u8BBA</Button>\r
  </Badge>\r
  <Badge :value="2" class="item" type="danger">\r
    <Button size="big">\u56DE\u590D</Button>\r
  </Badge>\r
</template>\r
\r
<script lang="ts">\r
import Badge from '../../../lib/Badge.vue'\r
import Button from '../../../lib/Button.vue'\r
export default {\r
  name: 'Badge1.demo',\r
  components: {Badge,Button}\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.item {\r
  margin-top: 10px;\r
  margin-right: 40px;\r
}\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u4F7F\u7528 "}const Fv=h("\u8BC4\u8BBA"),kv=h("\u56DE\u590D"),Bv=h("\u8BC4\u8BBA"),Dv=h("\u56DE\u590D");function Av(e,n,r,t,u,s){const o=_("Button"),a=_("Badge");return d(),f(k,null,[l(a,{value:12,class:"item"},{default:c(()=>[l(o,{size:"big"},{default:c(()=>[Fv]),_:1})]),_:1}),l(a,{value:12,class:"item"},{default:c(()=>[l(o,{size:"big"},{default:c(()=>[kv]),_:1})]),_:1}),l(a,{value:1,class:"item",type:"primary"},{default:c(()=>[l(o,{size:"big"},{default:c(()=>[Bv]),_:1})]),_:1}),l(a,{value:2,class:"item",type:"danger"},{default:c(()=>[l(o,{size:"big"},{default:c(()=>[Dv]),_:1})]),_:1})],64)}typeof _r=="function"&&_r(ml);const xv=v(ml,[["render",Av],["__scopeId","data-v-fd70282a"]]),fl={name:"Badge1.demo",components:{Badge:In,Button:ee}};function hr(e){e.__sourceCode=`<template>\r
  <Badge :value="200" :max="99" class="item">\r
    <Button size="big">\u8BC4\u8BBA</Button>\r
  </Badge>\r
  <Badge :value="100" :max="10" class="item">\r
    <Button size="big">\u56DE\u590D</Button>\r
  </Badge>\r
</template>\r
\r
<script lang="ts">\r
import Badge from '../../../lib/Badge.vue'\r
import Button from '../../../lib/Button.vue'\r
export default {\r
  name: 'Badge1.demo',\r
  components: {Badge,Button}\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.item {\r
  margin-top: 10px;\r
  margin-right: 40px;\r
}\r
</style>`,e.__sourceCodeTitle=" \u6700\u5927\u503C "}const qv=h("\u8BC4\u8BBA"),wv=h("\u56DE\u590D");function Iv(e,n,r,t,u,s){const o=_("Button"),a=_("Badge");return d(),f(k,null,[l(a,{value:200,max:99,class:"item"},{default:c(()=>[l(o,{size:"big"},{default:c(()=>[qv]),_:1})]),_:1}),l(a,{value:100,max:10,class:"item"},{default:c(()=>[l(o,{size:"big"},{default:c(()=>[wv]),_:1})]),_:1})],64)}typeof hr=="function"&&hr(fl);const Tv=v(fl,[["render",Iv],["__scopeId","data-v-6ef31fb6"]]),_l={name:"Badge1.demo",components:{Badge:In,Button:ee}};function gr(e){e.__sourceCode=`<template>\r
  <Badge value="new" :max="99" class="item">\r
    <Button size="big">\u8BC4\u8BBA</Button>\r
  </Badge>\r
  <Badge value="hot" type="danger" :max="10" class="item">\r
    <Button size="big">\u56DE\u590D</Button>\r
  </Badge>\r
</template>\r
\r
<script lang="ts">\r
import Badge from '../../../lib/Badge.vue'\r
import Button from '../../../lib/Button.vue'\r
export default {\r
  name: 'Badge1.demo',\r
  components: {Badge,Button}\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.item {\r
  margin-top: 10px;\r
  margin-right: 40px;\r
}\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u5185\u5BB9 "}const Mv=h("\u8BC4\u8BBA"),Sv=h("\u56DE\u590D");function Vv(e,n,r,t,u,s){const o=_("Button"),a=_("Badge");return d(),f(k,null,[l(a,{value:"new",max:99,class:"item"},{default:c(()=>[l(o,{size:"big"},{default:c(()=>[Mv]),_:1})]),_:1}),l(a,{value:"hot",type:"danger",max:10,class:"item"},{default:c(()=>[l(o,{size:"big"},{default:c(()=>[Sv]),_:1})]),_:1})],64)}typeof gr=="function"&&gr(_l);const Rv=v(_l,[["render",Vv],["__scopeId","data-v-24426bda"]]),hl={name:"Badge1.demo",components:{Badge:In,Button:ee}};function vr(e){e.__sourceCode=`<template>\r
  <Badge is-dot class="item">\r
    \u6570\u636E\u67E5\u8BE2\r
  </Badge>\r
  <Badge is-dot :max="10" class="item">\r
    <Button size="big">\u56DE\u590D</Button>\r
  </Badge>\r
</template>\r
\r
<script lang="ts">\r
import Badge from '../../../lib/Badge.vue';\r
import Button from '../../../lib/Button.vue';\r
\r
export default {\r
  name: 'Badge1.demo',\r
  components: {Badge, Button}\r
};\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.item {\r
  margin-top: 10px;\r
  margin-right: 40px;\r
}\r
</style>`,e.__sourceCodeTitle=" \u5C0F\u7EA2\u70B9 "}const Pv=h(" \u6570\u636E\u67E5\u8BE2 "),Lv=h("\u56DE\u590D");function Ov(e,n,r,t,u,s){const o=_("Badge"),a=_("Button");return d(),f(k,null,[l(o,{"is-dot":"",class:"item"},{default:c(()=>[Pv]),_:1}),l(o,{"is-dot":"",max:10,class:"item"},{default:c(()=>[l(a,{size:"big"},{default:c(()=>[Lv]),_:1})]),_:1})],64)}typeof vr=="function"&&vr(hl);const Gv=v(hl,[["render",Ov],["__scopeId","data-v-51503c18"]]),Nv={name:"BadgeDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Badge1Demo:xv,Badge2Demo:Tv,Badge3Demo:Rv,Badge4Demo:Gv}}},zv=p("h1",null,"\u4F7F\u7528\u793A\u4F8B",-1);function Hv(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[zv,l(o,{component:t.Badge1Demo},null,8,["component"]),l(o,{component:t.Badge2Demo},null,8,["component"]),l(o,{component:t.Badge3Demo},null,8,["component"]),l(o,{component:t.Badge4Demo},null,8,["component"])],64)}const jv=v(Nv,[["render",Hv]]);let Uv=0;const Wv=N({name:"ImgEmpty",setup(){return{id:++Uv}}}),Qv={viewBox:"0 0 79 86",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},Kv=["id"],Zv=p("stop",{"stop-color":"#FCFCFD",offset:"0%"},null,-1),Yv=p("stop",{"stop-color":"#EEEFF3",offset:"100%"},null,-1),Xv=[Zv,Yv],Jv=["id"],e3=p("stop",{"stop-color":"#FCFCFD",offset:"0%"},null,-1),n3=p("stop",{"stop-color":"#E9EBEF",offset:"100%"},null,-1),t3=[e3,n3],o3=["id"],r3={id:"Illustrations",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},u3={id:"B-type",transform:"translate(-1268.000000, -535.000000)"},a3={id:"Group-2",transform:"translate(1268.000000, 535.000000)"},l3=p("path",{id:"Oval-Copy-2",d:"M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",fill:"#F7F8FC"},null,-1),s3=p("polygon",{id:"Rectangle-Copy-14",fill:"#E5E7E9",transform:"translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",points:"13 58 53 58 42 45 2 45"},null,-1),i3={id:"Group-Copy",transform:"translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"},c3=p("polygon",{id:"Rectangle-Copy-10",fill:"#E5E7E9",transform:"translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",points:"2.84078316e-14 3 18 3 23 7 5 7"},null,-1),d3=p("polygon",{id:"Rectangle-Copy-11",fill:"#EDEEF2",points:"-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"},null,-1),p3=["fill"],m3=p("polygon",{id:"Rectangle-Copy-13",fill:"#F8F9FB",transform:"translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",points:"24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"},null,-1),f3=["fill"],_3={id:"Rectangle-Copy-17",transform:"translate(53.000000, 45.000000)"},h3=["id"],g3=["xlink:href"],v3=["xlink:href"],E3=["mask"],b3=p("polygon",{id:"Rectangle-Copy-18",fill:"#F8F9FB",transform:"translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",points:"62 45 79 45 70 58 53 58"},null,-1);function y3(e,n,r,t,u,s){return d(),f("svg",Qv,[p("defs",null,[p("linearGradient",{id:`linearGradient-1-${e.id}`,x1:"38.8503086%",y1:"0%",x2:"61.1496914%",y2:"100%"},Xv,8,Kv),p("linearGradient",{id:`linearGradient-2-${e.id}`,x1:"0%",y1:"9.5%",x2:"100%",y2:"90.5%"},t3,8,Jv),p("rect",{id:`path-3-${e.id}`,x:"0",y:"0",width:"17",height:"36"},null,8,o3)]),p("g",r3,[p("g",u3,[p("g",a3,[l3,s3,p("g",i3,[c3,d3,p("rect",{id:"Rectangle-Copy-12",fill:`url(#linearGradient-1-${e.id})`,transform:"translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",x:"38",y:"7",width:"17",height:"36"},null,8,p3),m3]),p("rect",{id:"Rectangle-Copy-15",fill:`url(#linearGradient-2-${e.id})`,x:"13",y:"45",width:"40",height:"36"},null,8,f3),p("g",_3,[p("mask",{id:`mask-4-${e.id}`,fill:"white"},[p("use",{"xlink:href":`#path-3-${e.id}`},null,8,g3)],8,h3),p("use",{id:"Mask",fill:"#E0E3E9",transform:"translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ","xlink:href":`#path-3-${e.id}`},null,8,v3),p("polygon",{id:"Rectangle-Copy",fill:"#D5D7DE",mask:`url(#mask-4-${e.id})`,transform:"translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",points:"7 0 24 0 20 18 -1.70530257e-13 16"},null,8,E3)]),b3])])])])}const C3=v(Wv,[["render",y3]]),$3=N({name:"MqEmpty",components:{"img-empty":C3},props:{image:{type:String,default:""},imageSize:{type:Number},description:{type:String,default:"\u6682\u65E0\u6570\u636E"}},setup({description:e,imageSize:n}){const r=M(()=>e),t=M(()=>({width:n?`${n}px`:""}));return{emptyDescription:r,imageStyle:t}}});const F3={class:"mmq-empty"},k3=["src"],B3={class:"mmq-empty-description"},D3={key:1},A3={key:0,class:"mmq-empty-bottom"};function x3(e,n,r,t,u,s){const o=_("img-empty");return d(),f("div",F3,[p("div",{class:"mmq-empty-image",style:ie(e.imageStyle)},[e.image?(d(),f("img",{key:0,src:e.image},null,8,k3)):W(e.$slots,"image",{key:1},()=>[l(o)])],4),p("div",B3,[e.$slots.description?W(e.$slots,"description",{key:0}):(d(),f("p",D3,L(e.emptyDescription),1))]),e.$slots.default?(d(),f("div",A3,[W(e.$slots,"default")])):G("",!0)])}const Tn=v($3,[["render",x3]]),gl={name:"Empty1.demo",components:{Empty:Tn}};function Er(e){e.__sourceCode=`<template>\r
  <Empty description="\u63CF\u8FF0\u6587\u5B57"></Empty>\r
</template>\r
\r
<script lang="ts">\r
import Empty from '../../../lib/Empty.vue';\r
export default {\r
name: "Empty1.demo",\r
  components:{\r
  Empty\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u57FA\u7840\u7528\u6CD5 "}function q3(e,n,r,t,u,s){const o=_("Empty");return d(),w(o,{description:"\u63CF\u8FF0\u6587\u5B57"})}typeof Er=="function"&&Er(gl);const w3=v(gl,[["render",q3]]),vl={name:"Empty1.demo",components:{Empty:Tn}};function br(e){e.__sourceCode=`<template>\r
  <Empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"       ></Empty>\r
</template>\r
\r
<script lang="ts">\r
import Empty from '../../../lib/Empty.vue';\r
export default {\r
name: "Empty1.demo",\r
  components:{\r
  Empty\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u56FE\u7247 "}function I3(e,n,r,t,u,s){const o=_("Empty");return d(),w(o,{image:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"})}typeof br=="function"&&br(vl);const T3=v(vl,[["render",I3]]),El={name:"Empty1.demo",components:{Empty:Tn}};function yr(e){e.__sourceCode=`<template>\r
  <Empty imageSize="200"></Empty>\r
</template>\r
\r
<script lang="ts">\r
import Empty from '../../../lib/Empty.vue';\r
export default {\r
name: "Empty1.demo",\r
  components:{\r
  Empty\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u5927\u5C0F "}function M3(e,n,r,t,u,s){const o=_("Empty");return d(),w(o,{imageSize:"200"})}typeof yr=="function"&&yr(El);const S3=v(El,[["render",M3]]),bl={name:"Empty1.demo",components:{Empty:Tn,Button:ee}};function Cr(e){e.__sourceCode=`<template>\r
  <Empty imageSize="200">\r
    <Button level="main">\u6309\u94AE</Button>\r
  </Empty>\r
</template>\r
\r
<script lang="ts">\r
import Empty from '../../../lib/Empty.vue';\r
import Button from '../../../lib/Button.vue'\r
export default {\r
name: "Empty1.demo",\r
  components:{\r
  Empty,Button\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E95\u90E8\u5185\u5BB9 "}const V3=h("\u6309\u94AE");function R3(e,n,r,t,u,s){const o=_("Button"),a=_("Empty");return d(),w(a,{imageSize:"200"},{default:c(()=>[l(o,{level:"main"},{default:c(()=>[V3]),_:1})]),_:1})}typeof Cr=="function"&&Cr(bl);const P3=v(bl,[["render",R3]]),L3={name:"EmptyDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Empty1Demo:w3,Empty2Demo:T3,Empty3Demo:S3,Empty4Demo:P3}}},O3=p("h1",null,"\u4F7F\u7528\u793A\u4F8B",-1);function G3(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[O3,l(o,{component:t.Empty1Demo},null,8,["component"]),l(o,{component:t.Empty2Demo},null,8,["component"]),l(o,{component:t.Empty3Demo},null,8,["component"]),l(o,{component:t.Empty4Demo},null,8,["component"])],64)}const N3=v(L3,[["render",G3]]),z3=N({name:"IconSuccess"}),H3={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},j3=p("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M34.5548098,16.4485711 C33.9612228,15.8504763 32.9988282,15.8504763 32.4052412,16.4485711 L32.4052412,16.4485711 L21.413757,27.5805811 L21.413757,27.5805811 L21.4034642,27.590855 C21.0097542,27.9781674 20.3766105,27.9729811 19.9892981,27.5792711 L19.9892981,27.5792711 L15.5947588,23.1121428 C15.0011718,22.514048 14.0387772,22.514048 13.4451902,23.1121428 C12.8516033,23.7102376 12.8516033,24.6799409 13.4451902,25.2780357 L13.4451902,25.2780357 L19.6260786,31.5514289 C20.2196656,32.1495237 21.1820602,32.1495237 21.7756472,31.5514289 L21.7756472,31.5514289 L34.5548098,18.614464 C35.1483967,18.0163692 35.1483967,17.0466659 34.5548098,16.4485711 Z"},null,-1),U3=[j3];function W3(e,n,r,t,u,s){return d(),f("svg",H3,U3)}const $r=v(z3,[["render",W3]]),Q3=N({name:"IconError"}),K3={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Z3=p("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.57818,15.42182 C32.0157534,14.8593933 31.1038797,14.8593933 30.541453,15.42182 L30.541453,15.42182 L24.0006789,21.9625941 L17.458547,15.42182 C16.8961203,14.8593933 15.9842466,14.8593933 15.42182,15.42182 C14.8593933,15.9842466 14.8593933,16.8961203 15.42182,17.458547 L15.42182,17.458547 L21.9639519,23.9993211 L15.42182,30.541453 C14.8593933,31.1038797 14.8593933,32.0157534 15.42182,32.57818 C15.9842466,33.1406067 16.8961203,33.1406067 17.458547,32.57818 L17.458547,32.57818 L24.0006789,26.0360481 L30.541453,32.57818 C31.1038797,33.1406067 32.0157534,33.1406067 32.57818,32.57818 C33.1406067,32.0157534 33.1406067,31.1038797 32.57818,30.541453 L32.57818,30.541453 L26.0374059,23.9993211 L32.57818,17.458547 C33.1406067,16.8961203 33.1406067,15.9842466 32.57818,15.42182 Z"},null,-1),Y3=[Z3];function X3(e,n,r,t,u,s){return d(),f("svg",K3,Y3)}const Fr=v(Q3,[["render",X3]]),J3=N({name:"IconWarning"}),e2={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},n2=p("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M24,31 C22.8954305,31 22,31.8954305 22,33 C22,34.1045695 22.8954305,35 24,35 C25.1045695,35 26,34.1045695 26,33 C26,31.8954305 25.1045695,31 24,31 Z M24,14 C23.1715729,14 22.5,14.6715729 22.5,15.5 L22.5,15.5 L22.5,27.5 C22.5,28.3284271 23.1715729,29 24,29 C24.8284271,29 25.5,28.3284271 25.5,27.5 L25.5,27.5 L25.5,15.5 C25.5,14.6715729 24.8284271,14 24,14 Z"},null,-1),t2=[n2];function o2(e,n,r,t,u,s){return d(),f("svg",e2,t2)}const kr=v(J3,[["render",o2]]),r2=N({name:"IconInfo"}),u2={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},a2=p("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M24,19 L21,19 C20.1715729,19 19.5,19.6715729 19.5,20.5 C19.5,21.3284271 20.1715729,22 21,22 L21,22 L22.5,22 L22.5,31 L21,31 C20.1715729,31 19.5,31.6715729 19.5,32.5 C19.5,33.3284271 20.1715729,34 21,34 L21,34 L27,34 C27.8284271,34 28.5,33.3284271 28.5,32.5 C28.5,31.6715729 27.8284271,31 27,31 L27,31 L25.5,31 L25.5,20.5 C25.5,19.6715729 24.8284271,19 24,19 L24,19 Z M24,13 C22.8954305,13 22,13.8954305 22,15 C22,16.1045695 22.8954305,17 24,17 C25.1045695,17 26,16.1045695 26,15 C26,13.8954305 25.1045695,13 24,13 Z"},null,-1),l2=[a2];function s2(e,n,r,t,u,s){return d(),f("svg",u2,l2)}const Br=v(r2,[["render",s2]]),i2={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},c2=N({name:"MqResult",components:{[$r.name]:$r,[Fr.name]:Fr,[kr.name]:kr,[Br.name]:Br},props:{title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,default:"info"}},setup(e){return{iconElement:M(()=>{const r=e.icon;return i2[r]})}}});const d2={class:"mmq-result"},p2={class:"mmq-result-icon"},m2={key:0,class:"mmq-result-title"},f2={key:1,class:"mmq-result-subTitle"},_2={key:2,class:"mmq-result-extra"};function h2(e,n,r,t,u,s){return d(),f("div",d2,[p("div",p2,[W(e.$slots,"icon",{},()=>[(d(),w(ke(e.iconElement),{class:j(e.iconElement)},null,8,["class"]))],!0)]),e.title||e.$slots.title?(d(),f("div",m2,[W(e.$slots,"title",{},()=>[p("p",null,L(e.title),1)],!0)])):G("",!0),e.subTitle||e.$slots.subTitle?(d(),f("div",f2,[W(e.$slots,"subTitle",{},()=>[p("p",null,L(e.subTitle),1)],!0)])):G("",!0),e.$slots.extra?(d(),f("div",_2,[W(e.$slots,"extra",{},void 0,!0)])):G("",!0)])}const Dt=v(c2,[["render",h2],["__scopeId","data-v-65d4d0ad"]]),yl={name:"Result1.demo",components:{Result:Dt,Grid:An,GridCol:xn,Button:ee}};function Dr(e){e.__sourceCode=`<template>\r
  <Grid>\r
    <GridCol :span="12" >\r
      <Result icon="success" title="\u6210\u529F\u63D0\u793A" subTitle="\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C">\r
        <template #extra>\r
          <Button level="main">\u8FD4\u56DE</Button>\r
        </template>\r
      </Result>\r
    </GridCol>\r
    <GridCol :span="12" >\r
      <Result icon="warning" title="\u8B66\u544A\u63D0\u793A" subTitle="\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C">\r
        <template #extra>\r
          <Button level="main">\u8FD4\u56DE</Button>\r
        </template>\r
      </Result>\r
    </GridCol>\r
    <GridCol :span="12" >\r
      <Result icon="error" title="\u9519\u8BEF\u63D0\u793A" subTitle="\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C">\r
        <template #extra>\r
          <Button level="main">\u8FD4\u56DE</Button>\r
        </template>\r
      </Result>\r
    </GridCol>\r
    <GridCol :span="12">\r
      <Result icon="info" title="\u4FE1\u606F\u63D0\u793A" subTitle="\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C">\r
        <template #extra>\r
          <Button level="main">\u8FD4\u56DE</Button>\r
        </template>\r
      </Result>\r
    </GridCol>\r
  </Grid>\r
</template>\r
\r
<script lang="ts">\r
import Result from '../../../lib/Result/Result.vue'\r
import Grid from '../../../lib/Grid.vue'\r
import GridCol from '../../../lib/GridCol.vue'\r
import Button from '../../../lib/Button.vue'\r
export default {\r
  name: 'Result1.demo',\r
  components: {Result,Grid,GridCol,Button}\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const g2=h("\u8FD4\u56DE"),v2=h("\u8FD4\u56DE"),E2=h("\u8FD4\u56DE"),b2=h("\u8FD4\u56DE");function y2(e,n,r,t,u,s){const o=_("Button"),a=_("Result"),i=_("GridCol"),g=_("Grid");return d(),w(g,null,{default:c(()=>[l(i,{span:12},{default:c(()=>[l(a,{icon:"success",title:"\u6210\u529F\u63D0\u793A",subTitle:"\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C"},{extra:c(()=>[l(o,{level:"main"},{default:c(()=>[g2]),_:1})]),_:1})]),_:1}),l(i,{span:12},{default:c(()=>[l(a,{icon:"warning",title:"\u8B66\u544A\u63D0\u793A",subTitle:"\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C"},{extra:c(()=>[l(o,{level:"main"},{default:c(()=>[v2]),_:1})]),_:1})]),_:1}),l(i,{span:12},{default:c(()=>[l(a,{icon:"error",title:"\u9519\u8BEF\u63D0\u793A",subTitle:"\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C"},{extra:c(()=>[l(o,{level:"main"},{default:c(()=>[E2]),_:1})]),_:1})]),_:1}),l(i,{span:12},{default:c(()=>[l(a,{icon:"info",title:"\u4FE1\u606F\u63D0\u793A",subTitle:"\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C"},{extra:c(()=>[l(o,{level:"main"},{default:c(()=>[b2]),_:1})]),_:1})]),_:1})]),_:1})}typeof Dr=="function"&&Dr(yl);const C2=v(yl,[["render",y2]]),Cl={name:"Result1.demo",components:{Result:Dt,ImageModel:Bt,Button:ee}};function Ar(e){e.__sourceCode=`<template>\r
  <Result title="404" subTitle="\u62B1\u6B49\uFF0C\u8BF7\u6C42\u9519\u8BEF">\r
    <template #icon>\r
      <ImageModel>\r
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="" />\r
      </ImageModel>\r
    </template>\r
    <template #extra>\r
      <Button level="main">\u8FD4\u56DE</Button>\r
    </template>\r
  </Result>\r
</template>\r
\r
<script lang="ts">\r
import Result from '../../../lib/Result/Result.vue';\r
import ImageModel from '../../../lib/ImageModel.vue';\r
import Button from '../../../lib/Button.vue';\r
export default {\r
  name: 'Result1.demo',\r
  components: {Result, ImageModel,Button}\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u5185\u5BB9 "}const $2=p("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",alt:""},null,-1),F2=h("\u8FD4\u56DE");function k2(e,n,r,t,u,s){const o=_("ImageModel"),a=_("Button"),i=_("Result");return d(),w(i,{title:"404",subTitle:"\u62B1\u6B49\uFF0C\u8BF7\u6C42\u9519\u8BEF"},{icon:c(()=>[l(o,null,{default:c(()=>[$2]),_:1})]),extra:c(()=>[l(a,{level:"main"},{default:c(()=>[F2]),_:1})]),_:1})}typeof Ar=="function"&&Ar(Cl);const B2=v(Cl,[["render",k2]]),D2={name:"ResultDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Result1Demo:C2,Result2Demo:B2}}},A2=p("h1",null,"\u5E38\u89C4\u7528\u6CD5",-1);function x2(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[A2,l(o,{component:t.Result1Demo},null,8,["component"]),l(o,{component:t.Result2Demo},null,8,["component"])],64)}const q2=v(D2,[["render",x2]]),w2=N({name:"MqBreadcrumb",props:{separator:{type:String,default:"/"},separatorCustom:{type:String,default:""}},setup(e){const n=A(null);return Ie("breadcrumb",e),Q(()=>{const r=n.value.querySelectorAll(".mmq-breadcrumb-item");r.length&&r[r.length-1].setAttribute("aria-current","page")}),{breadcrumb:n}}});const I2={ref:"breadcrumb",class:"mmq-breadcrumb","aria-label":"Breadcrumb",role:"navigation"};function T2(e,n,r,t,u,s){return d(),f("div",I2,[W(e.$slots,"default",{},void 0,!0)],512)}const At=v(w2,[["render",T2],["__scopeId","data-v-a0bba1a8"]]),M2={name:"MqBreadcrumbItem",props:{to:{type:[String,Object],default:""},replace:{type:Boolean,default:!1}},setup(e){const n=A(null),r=Fe("breadcrumb"),u=$n().appContext.config.globalProperties.$router;return Q(()=>{n.value.setAttribute("role","link"),n.value.addEventListener("click",()=>{!e.to||!u||(e.replace?u.replace(e.to):u.push(e.to))})}),{link:n,separator:r.separator,separatorCustom:r.separatorCustom}}};const S2={class:"mmq-breadcrumb-item"},V2={key:1,class:"mmq-breadcrumb-separator",role:"presentation"};function R2(e,n,r,t,u,s){const o=_("MqIcon");return d(),f("span",S2,[p("span",{ref:"link",class:j(["mmq-breadcrumb-inner",r.to?"is-link":""]),role:"link"},[W(e.$slots,"default")],2),t.separatorCustom?(d(),w(o,{key:0,color:"#c0c4cc",class:"mmq-breadcrumb-separator"},{default:c(()=>[(d(),w(ke(t.separatorCustom)))]),_:1})):(d(),f("span",V2,L(t.separator),1))])}const xt=v(M2,[["render",R2]]),$l={name:"Breadcrumb1.demo",components:{Breadcrumb:At,BreadcrumbItem:xt}};function xr(e){e.__sourceCode=`<template>\r
  <Breadcrumb>\r
    <BreadcrumbItem :to="{path: '/'}">\u9996\u9875</BreadcrumbItem>\r
    <BreadcrumbItem ><a href="">\u6D3B\u52A8\u7BA1\u7406</a></BreadcrumbItem>\r
    <BreadcrumbItem >\u6D3B\u52A8\u5217\u8868</BreadcrumbItem>\r
    <BreadcrumbItem >\u6D3B\u52A8\u8BE6\u60C5</BreadcrumbItem>\r
  </Breadcrumb>\r
</template>\r
\r
<script lang="ts">\r
import Breadcrumb from '../../../lib/Breadcrumb.vue';\r
import BreadcrumbItem from '../../../lib/BreadcrumbItem.vue';\r
export default {\r
  name: 'Breadcrumb1.demo',\r
  components:{Breadcrumb,BreadcrumbItem}\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u57FA\u672C\u4F7F\u7528 "}const P2=h("\u9996\u9875"),L2=p("a",{href:""},"\u6D3B\u52A8\u7BA1\u7406",-1),O2=h("\u6D3B\u52A8\u5217\u8868"),G2=h("\u6D3B\u52A8\u8BE6\u60C5");function N2(e,n,r,t,u,s){const o=_("BreadcrumbItem"),a=_("Breadcrumb");return d(),w(a,null,{default:c(()=>[l(o,{to:{path:"/"}},{default:c(()=>[P2]),_:1}),l(o,null,{default:c(()=>[L2]),_:1}),l(o,null,{default:c(()=>[O2]),_:1}),l(o,null,{default:c(()=>[G2]),_:1})]),_:1})}typeof xr=="function"&&xr($l);const z2=v($l,[["render",N2]]),Fl={name:"Breadcrumb1.demo",components:{Breadcrumb:At,BreadcrumbItem:xt}};function qr(e){e.__sourceCode=`<template>\r
  <Breadcrumb separatorCustom="ArrowRight">\r
    <BreadcrumbItem :to="{path: '/'}">\u9996\u9875</BreadcrumbItem>\r
    <BreadcrumbItem ><a href="">\u6D3B\u52A8\u7BA1\u7406</a></BreadcrumbItem>\r
    <BreadcrumbItem >\u6D3B\u52A8\u5217\u8868</BreadcrumbItem>\r
    <BreadcrumbItem >\u6D3B\u52A8\u8BE6\u60C5</BreadcrumbItem>\r
  </Breadcrumb>\r
</template>\r
\r
<script lang="ts">\r
import Breadcrumb from '../../../lib/Breadcrumb.vue';\r
import BreadcrumbItem from '../../../lib/BreadcrumbItem.vue';\r
export default {\r
  name: 'Breadcrumb1.demo',\r
  components:{Breadcrumb,BreadcrumbItem}\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u95F4\u9694\u7B26 "}const H2=h("\u9996\u9875"),j2=p("a",{href:""},"\u6D3B\u52A8\u7BA1\u7406",-1),U2=h("\u6D3B\u52A8\u5217\u8868"),W2=h("\u6D3B\u52A8\u8BE6\u60C5");function Q2(e,n,r,t,u,s){const o=_("BreadcrumbItem"),a=_("Breadcrumb");return d(),w(a,{separatorCustom:"ArrowRight"},{default:c(()=>[l(o,{to:{path:"/"}},{default:c(()=>[H2]),_:1}),l(o,null,{default:c(()=>[j2]),_:1}),l(o,null,{default:c(()=>[U2]),_:1}),l(o,null,{default:c(()=>[W2]),_:1})]),_:1})}typeof qr=="function"&&qr(Fl);const K2=v(Fl,[["render",Q2]]),Z2={name:"BreadcrumbDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Breadcrumb1Demo:z2,Breadcrumb2Demo:K2}}},Y2=p("h1",null,"breadcrumb \u793A\u4F8B",-1);function X2(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[Y2,l(o,{component:t.Breadcrumb1Demo},null,8,["component"]),l(o,{component:t.Breadcrumb2Demo},null,8,["component"])],64)}const J2=v(Z2,[["render",X2]]),eE=N({name:"ImgPlaceholder"}),nE={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},tE=p("path",{d:"M64 896V128h896v768H64z m64-128l192-192 116.352 116.352L640 448l256 307.2V192H128v576z m224-480a96 96 0 1 1-0.064 192.064A96 96 0 0 1 352 288z"},null,-1),oE=[tE];function rE(e,n,r,t,u,s){return d(),f("svg",nE,oE)}const uE=v(eE,[["render",rE]]),aE=N({name:"MqSkeletonItem",components:{imagePlaceholder:uE},props:{variant:{type:String,default:"text"}}});function lE(e,n,r,t,u,s){const o=_("imagePlaceholder");return d(),f("div",{class:j(["mmq-skeleton-item",`mmq-skeleton-${e.variant}`])},[e.variant==="image"?(d(),w(o,{key:0})):G("",!0)],2)}const Mn=v(aE,[["render",lE],["__scopeId","data-v-1ee366e5"]]);function sE(e,n=0){if(n===0)return e;const r=A(!1);let t;const u=()=>{t&&clearTimeout(t),t=setTimeout(()=>{r.value=e.value},n)};return Q(u),vt(()=>e.value,s=>{s?u():r.value=s}),r}const iE=N({name:"MqSkeleton",components:{"mmq-skeleton-item":Mn},props:{animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}},setup(e){const n=M(()=>e.loading);return{uiLoading:sE(n,e.throttle)}}});function cE(e,n,r,t,u,s){const o=_("mmq-skeleton-item");return d(),f("div",null,[h(L(e.uiLoading)+" ",1),e.uiLoading?(d(),f("div",yu({key:0,class:["mmq-skeleton",e.animated?"is-animated":""]},e.$attrs),[(d(!0),f(k,null,J(e.count,a=>(d(),f(k,{key:a},[e.loading?W(e.$slots,"template",{key:a},()=>[l(o,{class:"is-first",variant:"p"}),(d(!0),f(k,null,J(e.rows,i=>(d(),w(o,{key:i,class:j({"mmq-skeleton-paragraph":!0,"is-last":i===e.rows&&e.rows>1}),variant:"p"},null,8,["class"]))),128))],!0):G("",!0)],64))),128))],16)):W(e.$slots,"default",{key:1},void 0,!0)])}const Qe=v(iE,[["render",cE],["__scopeId","data-v-d28e2b5d"]]),kl={name:"Skeleton1.demo",components:{skeleton:Qe}};function wr(e){e.__sourceCode=`<template>\r
  <skeleton></skeleton>\r
</template>\r
\r
<script lang="ts">\r
import skeleton from '../../../lib/Skeleton.vue'\r
export default {\r
  name: 'Skeleton1.demo',\r
  components: {skeleton}\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u57FA\u672C\u4F7F\u7528 "}function dE(e,n,r,t,u,s){const o=_("skeleton");return d(),w(o)}typeof wr=="function"&&wr(kl);const pE=v(kl,[["render",dE]]),Bl={name:"Skeleton2.demo",components:{skeleton:Qe}};function Ir(e){e.__sourceCode=`<template>\r
  <skeleton :rows="5"></skeleton>\r
</template>\r
\r
<script lang="ts">\r
import skeleton from '../../../lib/Skeleton.vue'\r
export default {\r
name: "Skeleton2.demo",\r
  components: {\r
  skeleton\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u66F4\u591A\u53C2\u6570 "}function mE(e,n,r,t,u,s){const o=_("skeleton");return d(),w(o,{rows:5})}typeof Ir=="function"&&Ir(Bl);const fE=v(Bl,[["render",mE]]),Dl={name:"Skeleton2.demo",components:{skeleton:Qe}};function Tr(e){e.__sourceCode=`<template>\r
  <skeleton :rows="5" animated></skeleton>\r
</template>\r
\r
<script lang="ts">\r
import skeleton from '../../../lib/Skeleton.vue'\r
export default {\r
name: "Skeleton2.demo",\r
  components: {\r
  skeleton\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u52A8\u753B\u6548\u679C "}function _E(e,n,r,t,u,s){const o=_("skeleton");return d(),w(o,{rows:5,animated:""})}typeof Tr=="function"&&Tr(Dl);const hE=v(Dl,[["render",_E]]),Al={name:"Skeleton2.demo",components:{skeleton:Qe,skeletonItem:Mn}};function Mr(e){e.__sourceCode=`<template>\r
  <skeleton style="width:240px">\r
    <template #template>\r
      <skeletonItem variant="image" style="width: 240px; height: 240px">\r
      </skeletonItem>\r
      <div style="padding: 14px">\r
        <skeletonItem variant="p" style="width: 50%"></skeletonItem>\r
        <div style="display: flex;align-items: center;justify-content: space-between">\r
          <skeletonItem variant="text" style="margin-right: 16px"></skeletonItem>\r
          <skeletonItem variant="text" style="width: 30%"></skeletonItem>\r
        </div>\r
      </div>\r
    </template>\r
  </skeleton>\r
</template>\r
\r
<script lang="ts">\r
import skeleton from '../../../lib/Skeleton.vue';\r
import skeletonItem from '../../../lib/SkeletonItem.vue';\r
\r
export default {\r
  name: 'Skeleton2.demo',\r
  components: {\r
    skeleton, skeletonItem\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u683C\u5F0F "}const gE={style:{padding:"14px"}},vE={style:{display:"flex","align-items":"center","justify-content":"space-between"}};function EE(e,n,r,t,u,s){const o=_("skeletonItem"),a=_("skeleton");return d(),w(a,{style:{width:"240px"}},{template:c(()=>[l(o,{variant:"image",style:{width:"240px",height:"240px"}}),p("div",gE,[l(o,{variant:"p",style:{width:"50%"}}),p("div",vE,[l(o,{variant:"text",style:{"margin-right":"16px"}}),l(o,{variant:"text",style:{width:"30%"}})])])]),_:1})}typeof Mr=="function"&&Mr(Al);const bE=v(Al,[["render",EE]]),xl={name:"Skeleton2.demo",components:{skeleton:Qe,skeletonItem:Mn}};function Sr(e){e.__sourceCode=`<template>\r
  <skeleton style="width:240px" animated>\r
    <template #template>\r
      <skeletonItem variant="image" style="width: 240px; height: 240px">\r
      </skeletonItem>\r
      <div style="padding: 14px">\r
        <skeletonItem variant="p" style="width: 50%"></skeletonItem>\r
        <div style="display: flex;align-items: center;justify-content: space-between">\r
          <skeletonItem variant="text" style="margin-right: 16px"></skeletonItem>\r
          <skeletonItem variant="text" style="width: 30%"></skeletonItem>\r
        </div>\r
      </div>\r
    </template>\r
  </skeleton>\r
</template>\r
\r
<script lang="ts">\r
import skeleton from '../../../lib/Skeleton.vue';\r
import skeletonItem from '../../../lib/SkeletonItem.vue';\r
\r
export default {\r
  name: 'Skeleton2.demo',\r
  components: {\r
    skeleton, skeletonItem\r
  },\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49loading "}const yE={style:{padding:"14px"}},CE={style:{display:"flex","align-items":"center","justify-content":"space-between"}};function $E(e,n,r,t,u,s){const o=_("skeletonItem"),a=_("skeleton");return d(),w(a,{style:{width:"240px"},animated:""},{template:c(()=>[l(o,{variant:"image",style:{width:"240px",height:"240px"}}),p("div",yE,[l(o,{variant:"p",style:{width:"50%"}}),p("div",CE,[l(o,{variant:"text",style:{"margin-right":"16px"}}),l(o,{variant:"text",style:{width:"30%"}})])])]),_:1})}typeof Sr=="function"&&Sr(xl);const FE=v(xl,[["render",$E]]),kE=N({name:"MqSwitch",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:value"],setup(e,n){return{toggle:()=>{n.emit("update:value",!e.value)}}}});const BE=e=>(ge("data-v-c639eab1"),e=e(),ve(),e),DE=["disabled"],AE=BE(()=>p("span",{class:"mmq-span"},null,-1)),xE=[AE];function qE(e,n,r,t,u,s){return d(),f("button",{class:j(["mmq-switch",{"mmq-checked":e.value}]),disabled:e.disabled,onClick:n[0]||(n[0]=(...o)=>e.toggle&&e.toggle(...o))},xE,10,DE)}const wE=v(kE,[["render",qE],["__scopeId","data-v-c639eab1"]]),ql={name:"Skeleton2.demo",components:{skeleton:Qe,skeletonItem:Mn,Card:Kn,Switch:wE},setup(){return{loading:A(!1)}}};function Vr(e){e.__sourceCode=`<template>\r
  <div style="margin-bottom: 20px;display: flex;flex-direction: column">\r
    <label style="margin-right: 16px">\u5207\u6362Loading</label>\r
    <Switch v-model:value="loading"></Switch>\r
  </div>\r
  <skeleton style="width:240px" :throttle="500" :loading="loading"  animated>\r
    <template #template>\r
      <skeletonItem variant="image" style="width: 240px; height: 240px">\r
      </skeletonItem>\r
      <div style="padding: 14px">\r
        <skeletonItem variant="h3" style="width: 50%"></skeletonItem>\r
        <div style="display: flex;align-items: center;justify-content: space-between">\r
          <skeletonItem variant="text" style="margin-right: 16px"></skeletonItem>\r
          <skeletonItem variant="text" style="width: 30%"></skeletonItem>\r
        </div>\r
      </div>\r
    </template>\r
    <template #default>\r
      <div>\r
        <img\r
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"\r
          class="image"\r
        />\r
        <div style="padding: 14px;">\r
          <span>\u597D\u5403\u7684\u6C49\u5821</span>\r
        </div>\r
      </div>\r
    </template>\r
  </skeleton>\r
</template>\r
\r
<script lang="ts">\r
import skeleton from '../../../lib/Skeleton.vue';\r
import skeletonItem from '../../../lib/SkeletonItem.vue';\r
import Switch from '../../../lib/Switch.vue';\r
import Card from '../../../lib/Card.vue';\r
import {ref} from 'vue';\r
\r
export default {\r
  name: 'Skeleton2.demo',\r
  components: {\r
    skeleton, skeletonItem,Card,Switch\r
  },\r
  setup(){\r
    const loading = ref(false)\r
    return {\r
      loading\r
    }\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u9632\u6B62\u6E32\u67D3\u6296\u52A8 "}const IE={style:{"margin-bottom":"20px",display:"flex","flex-direction":"column"}},TE=p("label",{style:{"margin-right":"16px"}},"\u5207\u6362Loading",-1),ME={style:{padding:"14px"}},SE={style:{display:"flex","align-items":"center","justify-content":"space-between"}},VE=p("div",null,[p("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",class:"image"}),p("div",{style:{padding:"14px"}},[p("span",null,"\u597D\u5403\u7684\u6C49\u5821")])],-1);function RE(e,n,r,t,u,s){const o=_("Switch"),a=_("skeletonItem"),i=_("skeleton");return d(),f(k,null,[p("div",IE,[TE,l(o,{value:t.loading,"onUpdate:value":n[0]||(n[0]=g=>t.loading=g)},null,8,["value"])]),l(i,{style:{width:"240px"},throttle:500,loading:t.loading,animated:""},{template:c(()=>[l(a,{variant:"image",style:{width:"240px",height:"240px"}}),p("div",ME,[l(a,{variant:"h3",style:{width:"50%"}}),p("div",SE,[l(a,{variant:"text",style:{"margin-right":"16px"}}),l(a,{variant:"text",style:{width:"30%"}})])])]),default:c(()=>[VE]),_:1},8,["loading"])],64)}typeof Vr=="function"&&Vr(ql);const PE=v(ql,[["render",RE]]),LE={name:"Skeleton",components:{Demo:ne},setup(){return Q(()=>{te()}),{Skeleton1Demo:pE,Skeleton2Demo:fE,Skeleton3Demo:hE,Skeleton4Demo:bE,Skeleton5Demo:FE,Skeleton6Demo:PE}}},OE=p("h1",null,"\u4F7F\u7528\u793A\u4F8B",-1);function GE(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[OE,l(o,{component:t.Skeleton1Demo},null,8,["component"]),l(o,{component:t.Skeleton2Demo},null,8,["component"]),l(o,{component:t.Skeleton3Demo},null,8,["component"]),l(o,{component:t.Skeleton4Demo},null,8,["component"]),l(o,{component:t.Skeleton5Demo},null,8,["component"]),l(o,{component:t.Skeleton6Demo},null,8,["component"])],64)}const NE=v(LE,[["render",GE]]),Rr={success:"SuccessFilled",warning:"WarningFilled",error:"CircleCloseFilled",info:"InfoFilled"},zE=N({name:"MqAlert",components:{MqIcon:ln},props:{title:{type:String,required:!0},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:{type:Boolean},center:Boolean,effect:{type:String,default:"light"}},emits:["close"],setup(e,{emit:n,slots:r}){const t=A(!0),u=M(()=>`mmq-alert--${e.type}`),s=M(()=>Rr[e.type]||Rr.info),o=M(()=>e.closeText===""?"close":null),a=M(()=>e.description||r.default?"is-big":""),i=M(()=>e.description||r.default?"is-bold":"");return{visible:t,typeClass:u,iconName:s,isBigIcon:a,isBoldTitle:i,close:m=>{t.value=!1,n("close",m)},closeName:o}}});const HE={class:"mmq-alert__content"},jE={class:"content-wrapper"},UE={key:1,class:"mmq-alert__description"};function WE(e,n,r,t,u,s){const o=_("MqIcon"),a=_("Close");return d(),w(rn,{name:"mmq-alert-fade"},{default:c(()=>[Te(p("div",{class:j(["mmq-alert",[e.typeClass,e.center?"is-center":"","is-"+e.effect]]),role:"alert"},[e.showIcon?(d(),w(o,{key:0,class:j(["mmq-alert__icon",e.isBigIcon])},{default:c(()=>[(d(),w(ke(e.iconName)))]),_:1},8,["class"])):G("",!0),p("div",HE,[p("div",jE,[e.title||e.$slots.title?(d(),f("span",{key:0,class:j(["mmq-alert__title",[e.isBoldTitle]])},[W(e.$slots,"title",{},()=>[h(L(e.title),1)],!0)],2)):G("",!0),e.$slots.default||e.description?(d(),f("div",UE,[W(e.$slots,"default",{},()=>[h(L(e.description),1)],!0)])):G("",!0)]),e.closable&&!e.closeText?(d(),w(o,{key:0,class:"mmq-alert__closebtn",name:e.closeName,onClick:e.close},{default:c(()=>[l(a)]),_:1},8,["name","onClick"])):G("",!0),e.closeText!==""?(d(),f("span",{key:1,class:"is-customed",onClick:n[0]||(n[0]=(...i)=>e.close&&e.close(...i))},L(e.closeText),1)):G("",!0)])],2),[[Ue,e.visible]])]),_:3})}const ze=v(zE,[["render",WE],["__scopeId","data-v-89b76365"]]),wl={name:"Alert1.demo",components:{Alert:ze}};function Pr(e){e.__sourceCode=`<template>\r
  <Alert title="\u6210\u529F\u63D0\u793A\u7684\u6587\u6848" type="success"></Alert>\r
  <Alert title="\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848" type="info"> </Alert>\r
  <Alert title="\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848" type="warning"> </Alert>\r
  <Alert title="\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848" type="error"> </Alert>\r
</template>\r
\r
<script lang="ts">\r
import Alert from '../../../lib/Alert.vue';\r
export default {\r
  name: 'Alert1.demo',\r
  components: {\r
    Alert\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u57FA\u672C\u4F7F\u7528 "}function QE(e,n,r,t,u,s){const o=_("Alert");return d(),f(k,null,[l(o,{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",type:"success"}),l(o,{title:"\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848",type:"info"}),l(o,{title:"\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848",type:"warning"}),l(o,{title:"\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848",type:"error"})],64)}typeof Pr=="function"&&Pr(wl);const KE=v(wl,[["render",QE]]),Il={name:"Alert1.demo",components:{Alert:ze}};function Lr(e){e.__sourceCode=`<template>\r
  <Alert title="\u6210\u529F\u63D0\u793A\u7684\u6587\u6848" effect="dark" type="success"></Alert>\r
  <Alert title="\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848" effect="dark" type="info"> </Alert>\r
  <Alert title="\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848" effect="dark" type="warning"> </Alert>\r
  <Alert title="\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848" effect="dark" type="error"> </Alert>\r
</template>\r
\r
<script lang="ts">\r
import Alert from '../../../lib/Alert.vue';\r
export default {\r
  name: 'Alert1.demo',\r
  components: {\r
    Alert\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u4E3B\u9898 "}function ZE(e,n,r,t,u,s){const o=_("Alert");return d(),f(k,null,[l(o,{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",effect:"dark",type:"success"}),l(o,{title:"\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848",effect:"dark",type:"info"}),l(o,{title:"\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848",effect:"dark",type:"warning"}),l(o,{title:"\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848",effect:"dark",type:"error"})],64)}typeof Lr=="function"&&Lr(Il);const YE=v(Il,[["render",ZE]]),Tl={name:"Alert1.demo",components:{Alert:ze},setup(){return{hello:()=>{alert("\u4F60\u597D\u554A")}}}};function Or(e){e.__sourceCode=`<template>\r
  <Alert title="\u4E0D\u53EF\u5173\u95ED\u7684alert" :closable="false" type="success"></Alert>\r
  <Alert title="\u81EA\u5B9A\u4E49close-text" closeText="\u77E5\u9053\u4E86" type="info"> </Alert>\r
  <Alert title="\u8BBE\u7F6E\u4E86\u56DE\u8C03\u7684alert" closable @click="hello" type="warning"> </Alert>\r
</template>\r
\r
<script lang="ts">\r
import Alert from '../../../lib/Alert.vue';\r
export default {\r
  name: 'Alert1.demo',\r
  components: {\r
    Alert\r
  },setup(){\r
    const hello =()=>{\r
      alert('\u4F60\u597D\u554A')\r
    }\r
    return{\r
      hello\r
    }\r
  },\r
\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE "}function XE(e,n,r,t,u,s){const o=_("Alert");return d(),f(k,null,[l(o,{title:"\u4E0D\u53EF\u5173\u95ED\u7684alert",closable:!1,type:"success"}),l(o,{title:"\u81EA\u5B9A\u4E49close-text",closeText:"\u77E5\u9053\u4E86",type:"info"}),l(o,{title:"\u8BBE\u7F6E\u4E86\u56DE\u8C03\u7684alert",closable:"",onClick:t.hello,type:"warning"},null,8,["onClick"])],64)}typeof Or=="function"&&Or(Tl);const JE=v(Tl,[["render",XE]]),Ml={name:"Alert1.demo",components:{Alert:ze},setup(){return{hello:()=>{alert("\u4F60\u597D\u554A")}}}};function Gr(e){e.__sourceCode=`<template>\r
  <Alert title="\u6210\u529F\u63D0\u793A\u7684\u6587\u6848" showIcon type="success"></Alert>\r
  <Alert title="\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848" showIcon type="info"> </Alert>\r
  <Alert title="\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848" showIcon type="warning"> </Alert>\r
  <Alert title="\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848" showIcon type="error"> </Alert>\r
</template>\r
\r
<script lang="ts">\r
import Alert from '../../../lib/Alert.vue';\r
export default {\r
  name: 'Alert1.demo',\r
  components: {\r
    Alert\r
  },setup(){\r
    const hello =()=>{\r
      alert('\u4F60\u597D\u554A')\r
    }\r
    return{\r
      hello\r
    }\r
  },\r
\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E26\u6709Icon "}function e7(e,n,r,t,u,s){const o=_("Alert");return d(),f(k,null,[l(o,{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",showIcon:"",type:"success"}),l(o,{title:"\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848",showIcon:"",type:"info"}),l(o,{title:"\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848",showIcon:"",type:"warning"}),l(o,{title:"\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848",showIcon:"",type:"error"})],64)}typeof Gr=="function"&&Gr(Ml);const n7=v(Ml,[["render",e7]]),Sl={name:"Alert1.demo",components:{Alert:ze},setup(){return{hello:()=>{alert("\u4F60\u597D\u554A")}}}};function Nr(e){e.__sourceCode=`<template>\r
  <Alert title="\u6210\u529F\u63D0\u793A\u7684\u6587\u6848" center showIcon type="success"></Alert>\r
  <Alert title="\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848" center showIcon type="info"> </Alert>\r
  <Alert title="\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848" center showIcon type="warning"> </Alert>\r
  <Alert title="\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848" center showIcon type="error"> </Alert>\r
</template>\r
\r
<script lang="ts">\r
import Alert from '../../../lib/Alert.vue';\r
export default {\r
  name: 'Alert1.demo',\r
  components: {\r
    Alert\r
  },setup(){\r
    const hello =()=>{\r
      alert('\u4F60\u597D\u554A')\r
    }\r
    return{\r
      hello\r
    }\r
  },\r
\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u6587\u5B57\u5C45\u4E2D "}function t7(e,n,r,t,u,s){const o=_("Alert");return d(),f(k,null,[l(o,{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",center:"",showIcon:"",type:"success"}),l(o,{title:"\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848",center:"",showIcon:"",type:"info"}),l(o,{title:"\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848",center:"",showIcon:"",type:"warning"}),l(o,{title:"\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848",center:"",showIcon:"",type:"error"})],64)}typeof Nr=="function"&&Nr(Sl);const o7=v(Sl,[["render",t7]]),Vl={name:"Alert1.demo",components:{Alert:ze}};function zr(e){e.__sourceCode=`<template>\r
  <Alert title="\u6210\u529F\u63D0\u793A\u7684\u6587\u6848" description="\u8FD9\u662F\u4E00\u53E5\u7ED5\u53E3\u4EE4\uFF1A\u9ED1\u7070\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u7070\u9ED1\u5316\u80A5\u6325\u53D1\uFF1B\u7070\u9ED1\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u9ED1\u7070\u5316\u80A5\u53D1\u6325\u3002 \u9ED1\u7070\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u7070\u9ED1\u5316\u80A5\u9ED1\u7070\u6325\u53D1\u5316\u4E3A\u7070\u2026\u2026"  type="success"></Alert>\r
</template>\r
\r
<script lang="ts">\r
import Alert from '../../../lib/Alert.vue';\r
export default {\r
  name: 'Alert1.demo',\r
  components: {\r
    Alert\r
  },\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E26\u6709\u8F85\u52A9\u6027\u63CF\u8FF0 "}function r7(e,n,r,t,u,s){const o=_("Alert");return d(),w(o,{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",description:"\u8FD9\u662F\u4E00\u53E5\u7ED5\u53E3\u4EE4\uFF1A\u9ED1\u7070\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u7070\u9ED1\u5316\u80A5\u6325\u53D1\uFF1B\u7070\u9ED1\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u9ED1\u7070\u5316\u80A5\u53D1\u6325\u3002 \u9ED1\u7070\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u7070\u9ED1\u5316\u80A5\u9ED1\u7070\u6325\u53D1\u5316\u4E3A\u7070\u2026\u2026",type:"success"})}typeof zr=="function"&&zr(Vl);const u7=v(Vl,[["render",r7]]),Rl={name:"Alert1.demo",components:{Alert:ze}};function Hr(e){e.__sourceCode=`<template>\r
  <Alert\r
      title="\u6210\u529F\u63D0\u793A\u7684\u6587\u6848"\r
      type="success"\r
      description="\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E"\r
      show-icon\r
  >\r
  </Alert>\r
  <Alert\r
      title="\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848"\r
      type="info"\r
      description="\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E"\r
      show-icon\r
  >\r
  </Alert>\r
  <Alert\r
      title="\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848"\r
      type="warning"\r
      description="\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E"\r
      show-icon\r
  >\r
  </Alert>\r
  <Alert\r
      title="\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848"\r
      type="error"\r
      description="\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E"\r
      show-icon\r
  >\r
  </Alert>\r
</template>\r
\r
<script lang="ts">\r
import Alert from '../../../lib/Alert.vue';\r
\r
export default {\r
  name: 'Alert1.demo',\r
  components: {\r
    Alert\r
  },\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E26\u6709\u8F85\u52A9\u6027\u63CF\u8FF0\u548C\u56FE\u6807 "}function a7(e,n,r,t,u,s){const o=_("Alert");return d(),f(k,null,[l(o,{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",type:"success",description:"\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E","show-icon":""}),l(o,{title:"\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848",type:"info",description:"\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E","show-icon":""}),l(o,{title:"\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848",type:"warning",description:"\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E","show-icon":""}),l(o,{title:"\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848",type:"error",description:"\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E\u6587\u5B57\u8BF4\u660E","show-icon":""})],64)}typeof Hr=="function"&&Hr(Rl);const l7=v(Rl,[["render",a7]]),s7={name:"Alert",components:{Demo:ne},setup(){return Q(()=>{te()}),{Alert1Demo:KE,Alert2Demo:YE,Alert3Demo:JE,Alert4Demo:n7,Alert5Demo:o7,Alert6Demo:u7,Alert7Demo:l7}}},i7=p("h1",null,"Alert \u7EC4\u4EF6\u793A\u4F8B",-1);function c7(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[i7,l(o,{component:t.Alert1Demo},null,8,["component"]),l(o,{component:t.Alert2Demo},null,8,["component"]),l(o,{component:t.Alert3Demo},null,8,["component"]),l(o,{component:t.Alert4Demo},null,8,["component"]),l(o,{component:t.Alert5Demo},null,8,["component"]),l(o,{component:t.Alert6Demo},null,8,["component"]),l(o,{component:t.Alert7Demo},null,8,["component"])],64)}const d7=v(s7,[["render",c7]]);function He(){return He=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},He.apply(this,arguments)}function p7(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,Cn(e,n)}function mt(e){return mt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},mt(e)}function Cn(e,n){return Cn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,u){return t.__proto__=u,t},Cn(e,n)}function m7(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function On(e,n,r){return m7()?On=Reflect.construct.bind():On=function(u,s,o){var a=[null];a.push.apply(a,s);var i=Function.bind.apply(u,a),g=new i;return o&&Cn(g,o.prototype),g},On.apply(null,arguments)}function f7(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function ft(e){var n=typeof Map=="function"?new Map:void 0;return ft=function(t){if(t===null||!f7(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof n<"u"){if(n.has(t))return n.get(t);n.set(t,u)}function u(){return On(t,arguments,mt(this).constructor)}return u.prototype=Object.create(t.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),Cn(u,t)},ft(e)}var _7=/%[sdj%]/g,h7=function(){};typeof process<"u"&&process.env;function _t(e){if(!e||!e.length)return null;var n={};return e.forEach(function(r){var t=r.field;n[t]=n[t]||[],n[t].push(r)}),n}function be(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var u=0,s=r.length;if(typeof e=="function")return e.apply(null,r);if(typeof e=="string"){var o=e.replace(_7,function(a){if(a==="%%")return"%";if(u>=s)return a;switch(a){case"%s":return String(r[u++]);case"%d":return Number(r[u++]);case"%j":try{return JSON.stringify(r[u++])}catch{return"[Circular]"}break;default:return a}});return o}return e}function g7(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function me(e,n){return!!(e==null||n==="array"&&Array.isArray(e)&&!e.length||g7(n)&&typeof e=="string"&&!e)}function v7(e,n,r){var t=[],u=0,s=e.length;function o(a){t.push.apply(t,a||[]),u++,u===s&&r(t)}e.forEach(function(a){n(a,o)})}function jr(e,n,r){var t=0,u=e.length;function s(o){if(o&&o.length){r(o);return}var a=t;t=t+1,a<u?n(e[a],s):r([])}s([])}function E7(e){var n=[];return Object.keys(e).forEach(function(r){n.push.apply(n,e[r]||[])}),n}var Ur=function(e){p7(n,e);function n(r,t){var u;return u=e.call(this,"Async Validation Error")||this,u.errors=r,u.fields=t,u}return n}(ft(Error));function b7(e,n,r,t,u){if(n.first){var s=new Promise(function(y,$){var I=function(E){return t(E),E.length?$(new Ur(E,_t(E))):y(u)},q=E7(e);jr(q,r,I)});return s.catch(function(y){return y}),s}var o=n.firstFields===!0?Object.keys(e):n.firstFields||[],a=Object.keys(e),i=a.length,g=0,m=[],b=new Promise(function(y,$){var I=function(C){if(m.push.apply(m,C),g++,g===i)return t(m),m.length?$(new Ur(m,_t(m))):y(u)};a.length||(t(m),y(u)),a.forEach(function(q){var C=e[q];o.indexOf(q)!==-1?jr(C,r,I):v7(C,r,I)})});return b.catch(function(y){return y}),b}function y7(e){return!!(e&&e.message!==void 0)}function C7(e,n){for(var r=e,t=0;t<n.length;t++){if(r==null)return r;r=r[n[t]]}return r}function Wr(e,n){return function(r){var t;return e.fullFields?t=C7(n,e.fullFields):t=n[r.field||e.fullField],y7(r)?(r.field=r.field||e.fullField,r.fieldValue=t,r):{message:typeof r=="function"?r():r,fieldValue:t,field:r.field||e.fullField}}}function Qr(e,n){if(n){for(var r in n)if(n.hasOwnProperty(r)){var t=n[r];typeof t=="object"&&typeof e[r]=="object"?e[r]=He({},e[r],t):e[r]=t}}return e}var Pl=function(n,r,t,u,s,o){n.required&&(!t.hasOwnProperty(n.field)||me(r,o||n.type))&&u.push(be(s.messages.required,n.fullField))},$7=function(n,r,t,u,s){(/^\s+$/.test(r)||r==="")&&u.push(be(s.messages.whitespace,n.fullField))},Ln,F7=function(){if(Ln)return Ln;var e="[a-fA-F\\d:]",n=function(x){return x&&x.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",t="[a-fA-F\\d]{1,4}",u=(`
(?:
(?:`+t+":){7}(?:"+t+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+t+":){6}(?:"+r+"|:"+t+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+t+":){5}(?::"+r+"|(?::"+t+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+t+":){4}(?:(?::"+t+"){0,1}:"+r+"|(?::"+t+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+t+":){3}(?:(?::"+t+"){0,2}:"+r+"|(?::"+t+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+t+":){2}(?:(?::"+t+"){0,3}:"+r+"|(?::"+t+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+t+":){1}(?:(?::"+t+"){0,4}:"+r+"|(?::"+t+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+t+"){0,5}:"+r+"|(?::"+t+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+r+"$)|(?:^"+u+"$)"),o=new RegExp("^"+r+"$"),a=new RegExp("^"+u+"$"),i=function(x){return x&&x.exact?s:new RegExp("(?:"+n(x)+r+n(x)+")|(?:"+n(x)+u+n(x)+")","g")};i.v4=function(F){return F&&F.exact?o:new RegExp(""+n(F)+r+n(F),"g")},i.v6=function(F){return F&&F.exact?a:new RegExp(""+n(F)+u+n(F),"g")};var g="(?:(?:[a-z]+:)?//)",m="(?:\\S+(?::\\S*)?@)?",b=i.v4().source,y=i.v6().source,$="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",I="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",q="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",C="(?::\\d{2,5})?",E='(?:[/?#][^\\s"]*)?',D="(?:"+g+"|www\\.)"+m+"(?:localhost|"+b+"|"+y+"|"+$+I+q+")"+C+E;return Ln=new RegExp("(?:^"+D+"$)","i"),Ln},Kr={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},_n={integer:function(n){return _n.number(n)&&parseInt(n,10)===n},float:function(n){return _n.number(n)&&!_n.integer(n)},array:function(n){return Array.isArray(n)},regexp:function(n){if(n instanceof RegExp)return!0;try{return!!new RegExp(n)}catch{return!1}},date:function(n){return typeof n.getTime=="function"&&typeof n.getMonth=="function"&&typeof n.getYear=="function"&&!isNaN(n.getTime())},number:function(n){return isNaN(n)?!1:typeof n=="number"},object:function(n){return typeof n=="object"&&!_n.array(n)},method:function(n){return typeof n=="function"},email:function(n){return typeof n=="string"&&n.length<=320&&!!n.match(Kr.email)},url:function(n){return typeof n=="string"&&n.length<=2048&&!!n.match(F7())},hex:function(n){return typeof n=="string"&&!!n.match(Kr.hex)}},k7=function(n,r,t,u,s){if(n.required&&r===void 0){Pl(n,r,t,u,s);return}var o=["integer","float","array","regexp","object","method","email","number","date","url","hex"],a=n.type;o.indexOf(a)>-1?_n[a](r)||u.push(be(s.messages.types[a],n.fullField,n.type)):a&&typeof r!==n.type&&u.push(be(s.messages.types[a],n.fullField,n.type))},B7=function(n,r,t,u,s){var o=typeof n.len=="number",a=typeof n.min=="number",i=typeof n.max=="number",g=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,m=r,b=null,y=typeof r=="number",$=typeof r=="string",I=Array.isArray(r);if(y?b="number":$?b="string":I&&(b="array"),!b)return!1;I&&(m=r.length),$&&(m=r.replace(g,"_").length),o?m!==n.len&&u.push(be(s.messages[b].len,n.fullField,n.len)):a&&!i&&m<n.min?u.push(be(s.messages[b].min,n.fullField,n.min)):i&&!a&&m>n.max?u.push(be(s.messages[b].max,n.fullField,n.max)):a&&i&&(m<n.min||m>n.max)&&u.push(be(s.messages[b].range,n.fullField,n.min,n.max))},Xe="enum",D7=function(n,r,t,u,s){n[Xe]=Array.isArray(n[Xe])?n[Xe]:[],n[Xe].indexOf(r)===-1&&u.push(be(s.messages[Xe],n.fullField,n[Xe].join(", ")))},A7=function(n,r,t,u,s){if(n.pattern){if(n.pattern instanceof RegExp)n.pattern.lastIndex=0,n.pattern.test(r)||u.push(be(s.messages.pattern.mismatch,n.fullField,r,n.pattern));else if(typeof n.pattern=="string"){var o=new RegExp(n.pattern);o.test(r)||u.push(be(s.messages.pattern.mismatch,n.fullField,r,n.pattern))}}},X={required:Pl,whitespace:$7,type:k7,range:B7,enum:D7,pattern:A7},x7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(me(r,"string")&&!n.required)return t();X.required(n,r,u,o,s,"string"),me(r,"string")||(X.type(n,r,u,o,s),X.range(n,r,u,o,s),X.pattern(n,r,u,o,s),n.whitespace===!0&&X.whitespace(n,r,u,o,s))}t(o)},q7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(me(r)&&!n.required)return t();X.required(n,r,u,o,s),r!==void 0&&X.type(n,r,u,o,s)}t(o)},w7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(r===""&&(r=void 0),me(r)&&!n.required)return t();X.required(n,r,u,o,s),r!==void 0&&(X.type(n,r,u,o,s),X.range(n,r,u,o,s))}t(o)},I7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(me(r)&&!n.required)return t();X.required(n,r,u,o,s),r!==void 0&&X.type(n,r,u,o,s)}t(o)},T7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(me(r)&&!n.required)return t();X.required(n,r,u,o,s),me(r)||X.type(n,r,u,o,s)}t(o)},M7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(me(r)&&!n.required)return t();X.required(n,r,u,o,s),r!==void 0&&(X.type(n,r,u,o,s),X.range(n,r,u,o,s))}t(o)},S7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(me(r)&&!n.required)return t();X.required(n,r,u,o,s),r!==void 0&&(X.type(n,r,u,o,s),X.range(n,r,u,o,s))}t(o)},V7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(r==null&&!n.required)return t();X.required(n,r,u,o,s,"array"),r!=null&&(X.type(n,r,u,o,s),X.range(n,r,u,o,s))}t(o)},R7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(me(r)&&!n.required)return t();X.required(n,r,u,o,s),r!==void 0&&X.type(n,r,u,o,s)}t(o)},P7="enum",L7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(me(r)&&!n.required)return t();X.required(n,r,u,o,s),r!==void 0&&X[P7](n,r,u,o,s)}t(o)},O7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(me(r,"string")&&!n.required)return t();X.required(n,r,u,o,s),me(r,"string")||X.pattern(n,r,u,o,s)}t(o)},G7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(me(r,"date")&&!n.required)return t();if(X.required(n,r,u,o,s),!me(r,"date")){var i;r instanceof Date?i=r:i=new Date(r),X.type(n,i,u,o,s),i&&X.range(n,i.getTime(),u,o,s)}}t(o)},N7=function(n,r,t,u,s){var o=[],a=Array.isArray(r)?"array":typeof r;X.required(n,r,u,o,s,a),t(o)},lt=function(n,r,t,u,s){var o=n.type,a=[],i=n.required||!n.required&&u.hasOwnProperty(n.field);if(i){if(me(r,o)&&!n.required)return t();X.required(n,r,u,a,s,o),me(r,o)||X.type(n,r,u,a,s)}t(a)},z7=function(n,r,t,u,s){var o=[],a=n.required||!n.required&&u.hasOwnProperty(n.field);if(a){if(me(r)&&!n.required)return t();X.required(n,r,u,o,s)}t(o)},En={string:x7,method:q7,number:w7,boolean:I7,regexp:T7,integer:M7,float:S7,array:V7,object:R7,enum:L7,pattern:O7,date:G7,url:lt,hex:lt,email:lt,required:N7,any:z7};function ht(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var n=JSON.parse(JSON.stringify(this));return n.clone=this.clone,n}}}var gt=ht(),Sn=function(){function e(r){this.rules=null,this._messages=gt,this.define(r)}var n=e.prototype;return n.define=function(t){var u=this;if(!t)throw new Error("Cannot configure a schema with no rules");if(typeof t!="object"||Array.isArray(t))throw new Error("Rules must be an object");this.rules={},Object.keys(t).forEach(function(s){var o=t[s];u.rules[s]=Array.isArray(o)?o:[o]})},n.messages=function(t){return t&&(this._messages=Qr(ht(),t)),this._messages},n.validate=function(t,u,s){var o=this;u===void 0&&(u={}),s===void 0&&(s=function(){});var a=t,i=u,g=s;if(typeof i=="function"&&(g=i,i={}),!this.rules||Object.keys(this.rules).length===0)return g&&g(null,a),Promise.resolve(a);function m(q){var C=[],E={};function D(x){if(Array.isArray(x)){var R;C=(R=C).concat.apply(R,x)}else C.push(x)}for(var F=0;F<q.length;F++)D(q[F]);C.length?(E=_t(C),g(C,E)):g(null,a)}if(i.messages){var b=this.messages();b===gt&&(b=ht()),Qr(b,i.messages),i.messages=b}else i.messages=this.messages();var y={},$=i.keys||Object.keys(this.rules);$.forEach(function(q){var C=o.rules[q],E=a[q];C.forEach(function(D){var F=D;typeof F.transform=="function"&&(a===t&&(a=He({},a)),E=a[q]=F.transform(E)),typeof F=="function"?F={validator:F}:F=He({},F),F.validator=o.getValidationMethod(F),F.validator&&(F.field=q,F.fullField=F.fullField||q,F.type=o.getType(F),y[q]=y[q]||[],y[q].push({rule:F,value:E,source:a,field:q}))})});var I={};return b7(y,i,function(q,C){var E=q.rule,D=(E.type==="object"||E.type==="array")&&(typeof E.fields=="object"||typeof E.defaultField=="object");D=D&&(E.required||!E.required&&q.value),E.field=q.field;function F(O,V){return He({},V,{fullField:E.fullField+"."+O,fullFields:E.fullFields?[].concat(E.fullFields,[O]):[O]})}function x(O){O===void 0&&(O=[]);var V=Array.isArray(O)?O:[O];!i.suppressWarning&&V.length&&e.warning("async-validator:",V),V.length&&E.message!==void 0&&(V=[].concat(E.message));var oe=V.map(Wr(E,a));if(i.first&&oe.length)return I[E.field]=1,C(oe);if(!D)C(oe);else{if(E.required&&!q.value)return E.message!==void 0?oe=[].concat(E.message).map(Wr(E,a)):i.error&&(oe=[i.error(E,be(i.messages.required,E.field))]),C(oe);var ae={};E.defaultField&&Object.keys(q.value).map(function(ce){ae[ce]=E.defaultField}),ae=He({},ae,q.rule.fields);var he={};Object.keys(ae).forEach(function(ce){var fe=ae[ce],we=Array.isArray(fe)?fe:[fe];he[ce]=we.map(F.bind(null,ce))});var qe=new e(he);qe.messages(i.messages),q.rule.options&&(q.rule.options.messages=i.messages,q.rule.options.error=i.error),qe.validate(q.value,q.rule.options||i,function(ce){var fe=[];oe&&oe.length&&fe.push.apply(fe,oe),ce&&ce.length&&fe.push.apply(fe,ce),C(fe.length?fe:null)})}}var R;if(E.asyncValidator)R=E.asyncValidator(E,q.value,x,q.source,i);else if(E.validator){try{R=E.validator(E,q.value,x,q.source,i)}catch(O){console.error==null||console.error(O),i.suppressValidatorError||setTimeout(function(){throw O},0),x(O.message)}R===!0?x():R===!1?x(typeof E.message=="function"?E.message(E.fullField||E.field):E.message||(E.fullField||E.field)+" fails"):R instanceof Array?x(R):R instanceof Error&&x(R.message)}R&&R.then&&R.then(function(){return x()},function(O){return x(O)})},function(q){m(q)},a)},n.getType=function(t){if(t.type===void 0&&t.pattern instanceof RegExp&&(t.type="pattern"),typeof t.validator!="function"&&t.type&&!En.hasOwnProperty(t.type))throw new Error(be("Unknown rule type %s",t.type));return t.type||"string"},n.getValidationMethod=function(t){if(typeof t.validator=="function")return t.validator;var u=Object.keys(t),s=u.indexOf("message");return s!==-1&&u.splice(s,1),u.length===1&&u[0]==="required"?En.required:En[this.getType(t)]||void 0},e}();Sn.register=function(n,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");En[n]=r};Sn.warning=h7;Sn.messages=gt;Sn.validators=En;const en=Ft(),H7=N({name:"MqForm",props:{model:{type:Object,required:!0},rules:{type:Object,default:void 0}},setup(e,n){const r=A([]),t=A({}),u=A(),s=pt(e.model,!0),o=()=>{t.value=[],en.emit("formError",t.value);for(const m in e.model)e.model[m]=s[m]},a=M(()=>{const m={};return r.value.forEach(b=>{const y=b.prop;if(e.rules){if(!Array.isArray(e.rules[y])){console.warn(`prop \u4E3A ${y} \u7684 FormItem \u6821\u9A8C\u89C4\u5219\u4E0D\u5B58\u5728\u6216\u8005\u5176\u503C\u4E0D\u662F\u6570\u7EC4`);return}m[y]=e.rules[y]}}),m}),i=M(()=>r.value.reduce((m,{prop:b})=>(m[b]=e.model[b],m),{})),g=m=>{new Sn(a.value).validate(i.value,y=>{let $={};y&&y.length?y.forEach(q=>{q.field&&q.message&&($[q.field]=q.message)}):$={},t.value=$,en.emit("formError",t.value);const I=[];r.value.forEach(q=>{$[q.prop]&&I.push($[q.prop])}),m&&m(I)})};return Ie("formRules",a),en.on("form.addField",m=>{r.value.push(m)}),en.on("form.removeField",m=>{m&&(r.value=r.value.filter(b=>b.prop!==m.prop))}),{fields:r,formError:t,validate:g,MqFormRef:u,resetFields:o}}}),j7={ref:"MqFormRef",class:"mmq-form"};function U7(e,n,r,t,u,s){return d(),f("form",j7,[W(e.$slots,"default")],512)}const Ll=v(H7,[["render",U7]]),W7=N({name:"FormItem",props:{label:{type:String,default:""},prop:{type:String,default:""}},setup(e,n){Q(()=>{e.prop&&s("form.addField",{prop:e.prop}),en.on("formError",o=>{t.value=o[e.prop]})});const r=M(()=>{let o=!1;const a=Fe("formRules").value;for(const i in a[e.prop])a[e.prop][i].required&&(o=!0);return o});let t=A();const u=M(()=>e.prop&&t.value||""),s=(o,a)=>{en.emit(o,a)};return Hn(()=>{e.prop&&s("form.removeField",{prop:e.prop})}),{fieldError:u,isRequired:r}}});const Q7={class:"MqFormItem"},K7={class:"MqFormItemContent"},Z7={key:0,class:"MqFormItemError"};function Y7(e,n,r,t,u,s){return d(),f("div",Q7,[e.label?(d(),f("label",{key:0,class:j({isRequired:e.isRequired})},L(e.label),3)):G("",!0),p("div",K7,[W(e.$slots,"default",{},void 0,!0),l(rn,{name:"fade"},{default:c(()=>[e.fieldError?(d(),f("div",Z7,L(e.fieldError),1)):G("",!0)]),_:1})])])}const Ol=v(W7,[["render",Y7],["__scopeId","data-v-3745e27d"]]),X7=N({name:"MqBackTop",props:{visibleHeight:{type:Number,default:100},right:{type:Number,default:40},bottom:{type:Number,default:40},target:{type:[String]}},setup(e,n){const r=y=>Math.pow(y,3),t=y=>y<.5?r(y*2)/2:1-r((1-y)*2)/2;let u=A(!1),s=A(),o=A();const a=M(()=>({right:`${e.right}px`,bottom:`${e.bottom}px`}));Q(()=>{i(),o.value.addEventListener("scroll",Wf(g,200))});const i=()=>{if(o.value=document,s.value=document.documentElement,e.target){if(s)s.value=document.querySelector(e.target);else throw new Error("target\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5");o.value=s.value}},g=()=>{const y=s.value.scrollTop;console.log(y),u.value=y>=e.visibleHeight},m=y=>{b(),n.emit("click",y)},b=()=>{const y=s.value,$=Date.now(),I=y.scrollTop,q=window.requestAnimationFrame||(E=>setTimeout(E,16)),C=()=>{const E=(Date.now()-$)/500;E<1?(s.value.scrollTop=I*(1-t(E)),q(C)):s.value.scrollTop=0};q(C)};return ys(()=>{o.value.removeEventListener("scroll",g)}),{visible:u,handleClick:m,positionStyle:a}}});const J7=h(" \u2191\u2191\u2191 ");function eb(e,n,r,t,u,s){return d(),w(rn,{name:"fade"},{default:c(()=>[Te(p("div",{onClick:n[0]||(n[0]=bn((...o)=>e.handleClick&&e.handleClick(...o),["stop"])),style:ie(e.positionStyle),class:"mmq-backtop"},[W(e.$slots,"default",{},()=>[J7],!0)],4),[[Ue,e.visible]])]),_:3})}const Gl=v(X7,[["render",eb],["__scopeId","data-v-87f6381a"]]),nb=N({name:"MqSelectOption",props:{label:{type:String,default:""},value:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(e){const n=$n();return{handleOptionsClick:()=>{e.disabled||Nl.emit("onChange",{value:e.value,label:e.label,uid:n.parent.parent.parent.uid})}}}});function tb(e,n,r,t,u,s){return d(),f("div",{class:j(["mq-options-item",e.disabled?"disabled-item":""]),onClick:n[0]||(n[0]=(...o)=>e.handleOptionsClick&&e.handleOptionsClick(...o))},[W(e.$slots,"default",{},()=>[p("span",null,L(e.label),1)],!0)],2)}const xe=v(nb,[["render",tb],["__scopeId","data-v-0ebd7628"]]),Nl=Ft(),ob=N({name:"MqSelect",components:{MqSelectOption:xe},props:{placeholder:{type:String,default:"\u8BF7\u8F93\u5165"},modelValue:{type:[String,Array,Number,Boolean],default:""},clearable:{type:Boolean,default:!1},size:{type:String,default:"normal"},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(e,n){const r=A(!1),t=A(!1);let u=A("");const s=A(),o=A([]),a=A([]),i=A([]),g=A([]),m=A(!1),b=n.slots.default()[0].children;Ie("selectContext",e);const y=M(()=>e.clearable&&e.modelValue&&r),$=()=>{t.value=!1},I=()=>{g.value=b.map(F=>{const x=F.props.value,R=F.props.label;return{value:x,label:R}})},q=F=>{m.value=!0,i.value=g.value.filter(x=>x.label.includes(F))};je(()=>{e.modelValue||(u.value="")}),Q(()=>{const F=$n();Nl.on("onChange",x=>{const{uid:R}=x;F.uid===R&&C(x)}),document.addEventListener("click",x=>{const R=x.target;s.value&&(s.value.contains(R)||$())},!1),e.filterable&&I()});const C=F=>{if(!e.multiple)t.value=!1,u.value=F.label,n.emit("onChange",{label:F.label,value:F.value}),n.emit("update:modelValue",F.value);else{const x=o.value.findIndex(R=>R===F.label);x>=0?(a.value.splice(x,1),o.value.splice(x,1)):(a.value.push(F.value),o.value.push(F.label)),u.value=o.value.join(", "),n.emit("onChange",{label:o.value,value:a.value}),n.emit("update:modelValue",u.value)}m.value=!1};return{showClearIcon:y,showOptions:t,handleInputTextChange:F=>{const x=F.target;n.emit("update:modelValue",x.value),n.emit("onChange",u),q(x.value)},handleClearInputText:()=>{n.emit("update:modelValue",""),u.value="",r.value=!1,t.value=!1,n.emit("onChange","")},currentLabel:u,selectRef:s,filterResultList:i,isSearchIn:m,filterDataList:g}}});const rb={ref:"selectRef",class:"mmq-select"},ub={class:"mmq-select-text-wrap"},ab=["readonly","disabled","value","placeholder"],lb={class:"mmq-select-icon-wrap"},sb={class:"mmq-select-options-slots"},ib={key:2,class:"select-empty"},cb={key:3,class:"select-loading"};function db(e,n,r,t,u,s){const o=_("MqIcon"),a=_("CircleClose"),i=_("MqSelectOption");return d(),f("div",rb,[p("div",ub,[p("input",{readonly:!e.filterable,disabled:e.disabled,class:j(["mmq-select-input",e.size,e.disabled?"disabled":""]),type:"text",value:e.currentLabel,onInput:n[0]||(n[0]=(...g)=>e.handleInputTextChange&&e.handleInputTextChange(...g)),placeholder:e.placeholder,onClick:n[1]||(n[1]=bn(g=>e.showOptions=!e.showOptions,["stop"]))},null,42,ab),p("div",lb,[l(o,null,{default:c(()=>[(d(),w(ke(e.showOptions?"ArrowDown":"ArrowRight")))]),_:1}),e.showClearIcon?(d(),w(o,{key:0,onClick:bn(e.handleClearInputText,["stop"])},{default:c(()=>[l(a)]),_:1},8,["onClick"])):G("",!0)])]),l(rn,{name:"mmq-select-transition"},{default:c(()=>[Te(p("div",sb,[e.filterResultList.length&&e.isSearchIn&&e.modelValue.length>0?(d(!0),f(k,{key:0},J(e.filterResultList,g=>(d(),w(i,{value:g.value,key:g.value,label:g.label},null,8,["value","label"]))),128)):G("",!0),e.modelValue.length===0||!e.isSearchIn?W(e.$slots,"default",{key:1},void 0,!0):G("",!0),!e.loading&&e.filterable&&(!e.filterResultList.length&&e.isSearchIn&&e.modelValue.length>0||!e.filterDataList.length)?(d(),f("div",ib," \u6682\u65E0\u6570\u636E ")):G("",!0),e.loading?(d(),f("div",cb,"\u52A0\u8F7D\u4E2D...")):G("",!0)],512),[[Ue,e.showOptions]])]),_:3})],512)}const Me=v(ob,[["render",db],["__scopeId","data-v-ef32aa3a"]]);const pb=N({name:"MqPagination",components:{MqSelect:Me,MqSelectOption:xe},props:{total:{type:Number,default:80},position:{type:String,default:"center"},background:{type:Boolean,default:!1},pageSizes:{type:Array,default:()=>[]},layout:{type:String,default:""}},setup(e,n){const r=M(()=>{if(e.position==="left")return"flex-start";if(e.position==="right")return"flex-end";if(e.position==="center")return"center"}),t=M(()=>e.layout.includes("total")),u=M(()=>e.layout.includes("sizes")),s=M(()=>e.layout.includes("prev")),o=M(()=>e.layout.includes("next")),a=A(10),i=M(()=>Math.ceil(e.total/a.value)),g=A(n.attrs.page||1),m=M(()=>{const y=[];if(i.value<=5)for(let $=1;$<=i.value;$++)y.push($);else if(g.value<=2)for(let $=1;$<=5;$++)y.push($);else if(g.value===i.value)for(let $=i.value-4;$<=g.value;$++)y.push($);else if(g.value>=i.value-2)for(let $=g.value-2;$<=i.value;$++)y.push($);else for(let $=g.value-2;$<=g.value+2;$++)y.push($);return y});return{computedPosition:r,currentPage:g,pages:i,list:m,changePage:y=>{if(y===!1){if(g.value===1)return;g.value>1&&(g.value-=1),n.emit("prevClick",g.value)}else if(y===!0){if(g.value===i.value)return;g.value<i.value&&(g.value+=1),n.emit("nextClick",g.value)}else g.value=y;n.emit("changePage",g.value),n.emit("update:modelValue",g.value)},pageSize:a,showTotal:t,showSizes:u,showPrev:s,showNext:o}}}),mb={key:0},fb={key:4},_b=["onClick"],hb={key:5};function gb(e,n,r,t,u,s){const o=_("MqSelectOption"),a=_("MqSelect");return d(),f("div",{class:j(["mq-pagination",e.background?"background":""]),style:ie({"justify-content":e.computedPosition})},[e.showTotal?(d(),f("span",mb,"Total: "+L(e.total),1)):G("",!0),e.pageSizes.length>0&&e.showSizes?(d(),w(a,{key:1,modelValue:e.pageSize,"onUpdate:modelValue":n[0]||(n[0]=i=>e.pageSize=i),size:"normal"},{default:c(()=>[(d(!0),f(k,null,J(e.pageSizes,i=>(d(),w(o,{key:i,value:i,label:i},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])):G("",!0),e.showPrev?(d(),f("a",{key:2,onClick:n[1]||(n[1]=i=>e.changePage(!1)),href:"javascript:;",class:j({disabled:e.currentPage===1})},"\u4E0A\u4E00\u9875",2)):G("",!0),e.currentPage>3?(d(),f("a",{key:3,onClick:n[2]||(n[2]=i=>e.changePage(1)),href:"javascript:;",class:j({disabled:e.currentPage===1})},"1",2)):G("",!0),e.currentPage>3?(d(),f("span",fb,"...")):G("",!0),(d(!0),f(k,null,J(e.list,i=>(d(),f("a",{onClick:g=>e.changePage(i),href:"javascript:;",key:i,class:j({active:e.currentPage===i})},L(i),11,_b))),128)),e.currentPage<e.pages-3?(d(),f("span",hb,"...")):G("",!0),e.currentPage<e.pages-3?(d(),f("a",{key:6,onClick:n[3]||(n[3]=i=>e.changePage(e.pages)),href:"javascript:;",class:j({disabled:e.currentPage===e.pages})},L(e.pages),3)):G("",!0),e.showNext?(d(),f("a",{key:7,onClick:n[4]||(n[4]=i=>e.changePage(!0)),href:"javascript:;",class:j({disabled:e.currentPage===e.pages})},"\u4E0B\u4E00\u9875",2)):G("",!0)],6)}const et=v(pb,[["render",gb],["__scopeId","data-v-aef2930e"]]),vb=N({name:"MqTable",props:{dataSource:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},bordered:{type:Boolean,default:!1},height:{type:Number},maxHeight:{type:Number},rowClassName:{type:Function},size:{type:String,default:"normal"},showSummary:{type:Boolean,default:!1},sumText:{type:String,default:"\u5408\u8BA1"}},setup(e){const n=A(),r=A(),t=A(),u=A(),s=A(),o=A();let a=[],i=[],g=[],m=[];const b=A(pt(e.dataSource,!0)),y=RegExp(/sortDescending/),$=RegExp(/sortDescending/),I=RegExp(/sortAscending/),q=RegExp(/sortASelected/),C=A(),E=A({});vt(e.dataSource,P=>{b.value=pt(P)});const D=(P,z)=>{if(e.rowClassName)return e.rowClassName(P,z)},F=M(()=>e.size==="middle"?"mqTableMiddle":e.size==="small"?"mqTableSmall":"mqTableNormal"),x=(P,z)=>{R(),y.test(z.target.classList.value)?(C.value=0,z.target.classList.add("sortDSelected")):I.test(z.target.classList.value)&&(C.value=1,z.target.classList.add("sortASelected")),C.value?b.value.sort(P):b.value.sort(P).reverse()},R=()=>{const P=[];if(e.columns.forEach((z,K)=>{z.sort&&P.push(K)}),P.length){const z=[];for(let K=0;K<P.length;K++)z.push(...s.value[P[K]].children[0].childNodes[1].children);z.forEach(K=>{y.test(K.classList)&&$.test(K.classList)?K.classList.remove("sortDSelected"):I.test(K.classList)&&q.test(K.classList)&&K.classList.remove("sortASelected")})}},O=P=>{const z=P.target;r.value.scrollLeft=z.scrollLeft,t.value.scrollLeft=z.scrollLeft,a.length&&(n.value.clientHeight!==n.value.offsetHeight&&(r.value.scrollLeft===0?(a[a.length-1].classList.add("noShadow"),_e(i,"add","noShadow")):(a[a.length-1].classList.remove("noShadow"),_e(i,"remove","noShadow"))),g.length&&(z.scrollLeft===r.value.scrollWidth-r.value.clientWidth?(g[0].classList.add("noShadow"),_e(m,"add","noShadow")):(g[0].classList.remove("noShadow"),_e(m,"remove","noShadow"))))},V=(P,z)=>{let K=z==="td"?o:s,B=[];return K.value.forEach(S=>{Array.from(S.classList).forEach(T=>{B&&T===P&&B.push(S)})}),e.showSummary&&z==="td"&&(K=u,K.value.forEach(S=>{Array.from(S.classList).forEach(T=>{B&&T===P&&B.push(S)})})),B},oe=()=>{if(e.bordered)return"hasBorder"},ae=P=>{const z=[];return e.bordered&&z.push("hasBorder"),typeof P.fixed=="boolean"&&P.fixed||P.fixed==="left"?z.push("tableLiftFixed"):P.fixed==="right"&&z.push("tableRightFixed"),z},he=P=>{const z=[];return P.ellipsis&&z.push("hasEllipsis"),z.concat(ae(P))},qe=P=>{P.target.classList.add("hoverRow")},ce=P=>{P.target.classList.remove("hoverRow")},fe=P=>{const z={};return P.width&&(z.width=P.width+"px"),z},we=(P,z)=>{let K=[];for(let B=0;B<P.length/Ce().leftCount;B++)K.push([]);P.forEach((B,S)=>{let T=Math.floor(S/Ce().leftCount);K[T].push(B)});for(let B=0;B<K.length;B++)for(let S=1;S<K[B].length;S++)K[B][S].style.left=K[B][S-1].clientWidth+"px";for(let B=1;B<z.length;B++)z[B].style.left=z[B-1].clientWidth+"px"},Ke=()=>{we(i,a),we(m,g)},Ce=()=>{let P=0,z=0;return e.columns.forEach(K=>{K.fixed==="right"?z++:K.fixed&&K.fixed==="left"&&P++}),{leftCount:P,rightCount:z}},le=()=>{a=[],i=[],g=[],m=[],a.push(...V("tableLiftFixed","th")),i.push(...V("tableLiftFixed","td")),g.push(...V("tableRightFixed","th")),m.push(...V("tableRightFixed","td"))},_e=(P,z,K)=>{P.forEach(B=>{z==="add"?B.classList.add(K):B.classList.remove(K)})},$e=()=>{e.height&&(n.value.style.height=e.height+"px"),e.maxHeight&&(n.value.style.maxHeight=e.maxHeight+"px")},Se=()=>{const P=Array.from(s.value);P[P.length-1].style.transform=`translateX(${n.value.clientWidth-n.value.offsetWidth}px)`},de=()=>{if(e.showSummary){const P={sumText:e.sumText};b.value.forEach(z=>{for(const K in z)typeof z[K]=="number"?Uf(P[K])?P[K]=0:P[K]+=z[K]:P[K]="/"}),E.value=P,le()}};return Q(()=>{de(),$e(),le(),Ke(),Se(),bu(()=>{a[a.length-1]&&a[a.length-1].classList.add("noShadow"),_e(i,"add","noShadow")})}),{tableBodyRef:n,tableHeadRef:r,tableFooterRef:t,tableSummaryRef:u,handleScroll:O,bodyTdClass:he,headThStyle:fe,fixedStyle:ae,mouseEnterHandle:qe,mouseLeaveHandle:ce,tableThRef:s,tableTdRef:o,hasBordered:oe,sortHandler:x,realDataSource:b,computedRowClass:D,computedSizeClass:F,summaryData:E,computedSummary:de}}});const Eb={ref:"tableHeadRef",class:"mqTableHeader"},bb={key:0,class:"sortWrapper"},yb=["onClick"],Cb=["onClick"],$b={key:1,ref:"tableFooterRef",class:"mqTableSummary"};function Fb(e,n,r,t,u,s){return d(),f("div",{class:j(["mqTable",e.hasBordered])},[e.$slots.title?(d(),f("div",{key:0,class:j(["mqTableTitle",e.computedSizeClass])},[W(e.$slots,"title",{},void 0,!0)],2)):G("",!0),p("div",Eb,[p("table",null,[p("colgroup",null,[(d(!0),f(k,null,J(e.columns,(o,a)=>(d(),f("col",{style:ie(e.headThStyle(o)),key:a},null,4))),128))]),p("thead",null,[p("tr",null,[(d(!0),f(k,null,J(e.columns,o=>(d(),f("th",{ref_for:!0,ref:"tableThRef",class:j(e.fixedStyle(o)),style:ie(e.headThStyle(o)),key:o.key},[p("div",{class:j(["cell",e.computedSizeClass])},[W(e.$slots,"headerCell",{title:o.title,column:o},()=>[h(L(o.title)+" ",1),o.sort?(d(),f("span",bb,[p("i",{onClick:a=>e.sortHandler(o.sort,a),class:j(["sortAscending"])},null,8,yb),p("i",{onClick:a=>e.sortHandler(o.sort,a),class:j(["sortDescending"])},null,8,Cb)])):G("",!0)],!0)],2)],6))),128))])])])],512),p("div",{ref:"tableBodyRef",class:"mqTableBody",onScroll:n[2]||(n[2]=(...o)=>e.handleScroll&&e.handleScroll(...o))},[p("table",null,[p("colgroup",null,[(d(!0),f(k,null,J(e.columns,(o,a)=>(d(),f("col",{style:ie(e.headThStyle(o)),key:a},null,4))),128))]),p("tbody",null,[(d(!0),f(k,null,J(e.realDataSource,(o,a)=>(d(),f("tr",{class:j(e.computedRowClass(o,a)),onMouseleave:n[0]||(n[0]=(...i)=>e.mouseLeaveHandle&&e.mouseLeaveHandle(...i)),onMouseenter:n[1]||(n[1]=(...i)=>e.mouseEnterHandle&&e.mouseEnterHandle(...i)),key:o.key},[(d(!0),f(k,null,J(e.columns,i=>(d(),f("td",{ref_for:!0,ref:"tableTdRef",class:j([e.bodyTdClass(i),e.computedSizeClass]),key:o.key},[W(e.$slots,"bodyCell",{column:i,record:o,index:o.key},()=>[h(L(o[i.dataIndex]||o.sumText),1)],!0)],2))),128))],34))),128))])])],544),e.showSummary?(d(),f("div",$b,[p("table",null,[p("colgroup",null,[(d(!0),f(k,null,J(e.columns,(o,a)=>(d(),f("col",{style:ie(e.headThStyle(o)),key:a},null,4))),128))]),p("tbody",null,[p("tr",null,[(d(!0),f(k,null,J(e.columns,(o,a)=>(d(),f("td",{ref_for:!0,ref:"tableSummaryRef",class:j([e.bodyTdClass(o),e.computedSizeClass]),key:a},L(a===0?e.summaryData.sumText:e.summaryData[o.dataIndex]),3))),128))])])])],512)):G("",!0),e.$slots.footer?(d(),f("div",{key:2,class:j(["mqTableFooter",e.computedSizeClass])},[W(e.$slots,"footer",{},void 0,!0)],2)):G("",!0)],2)}const ye=v(vb,[["render",Fb],["__scopeId","data-v-3f6fb1d3"]]),kb=[nl,Zn,cn,Ua,kt,Yn,Mn,Qe,ba,$t,Be,sn,ln,An,xn,Ll,Ol,Tn,Fn,Ra,Xn,In,Dn,Kn,We,At,xt,Ja,el,Dt,ze,Gl,un,ee,ju,kn,an,Jn,wn,tl,Xa,et,Me,xe,ye,qn],Bb=function(e){kb.forEach(n=>{e.component(n.name,n)})},zl={name:"Form1.demo",components:{MqForm:Ll,MqCheckbox:We,MqCheckboxGroup:Dn,MqSwitch:un,MqFormItem:Ol,MqInput:Be,MqButton:ee,MqSelect:Me,MqSelectOption:xe},setup(){const e=U({tel:"",region:"",sex:!1,type:[]}),n=A(),r=A({tel:[{required:!0,message:"\u60A8\u7684\u624B\u673A\u53F7\u7801\u672A\u8F93\u5165"},{pattern:/^1[34578]\d{9}$/,message:"\u60A8\u7684\u624B\u673A\u53F7\u7801\u8F93\u5165\u9519\u8BEF"}],region:[{required:!0,message:"\u8BF7\u9009\u62E9\u533A\u57DF"}],type:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u7C7B\u578B"}]});return{formData:e,rules:r,formRef:n,handleClick:()=>{n.value.validate(s=>{console.log(s)})},handleReset:()=>{n.value.resetFields()}}}};function Zr(e){e.__sourceCode=`<template>\r
  <h5>\u6700\u57FA\u7840\u7684\u8868\u5355\u5305\u62EC\u5404\u79CD\u8F93\u5165\u8868\u5355\u9879\uFF0C\u6BD4\u5982input\u3001select\u3001radio\u3001checkbox\u7B49\u3002\r
\r
    \u5728\u6BCF\u4E00\u4E2A form \u7EC4\u4EF6\u4E2D\uFF0C\u4F60\u9700\u8981\u4E00\u4E2A form-item \u5B57\u6BB5\u4F5C\u4E3A\u8F93\u5165\u9879\u7684\u5BB9\u5668\uFF0C\u7528\u4E8E\u83B7\u53D6\u503C\u4E0E\u9A8C\u8BC1\u503C\u3002</h5>\r
  <MqForm :model="formData" :rules="rules" ref="formRef">\r
    <MqFormItem label="\u624B\u673A\u53F7" prop="tel">\r
      <MqInput type="tel" v-model:input-value="formData.tel"/>\r
    </MqFormItem>\r
    <MqFormItem label="\u533A\u57DF" prop="region">\r
      <MqSelect v-model="formData.region">\r
        <MqSelectOption label="one" value="shanghai"></MqSelectOption>\r
        <MqSelectOption label="two" value="beijing"></MqSelectOption>\r
      </MqSelect>\r
    </MqFormItem>\r
    <MqFormItem label="\u662F\u5426\u7537\u6027" prop="sex">\r
      <MqSwitch type="tel" close-text="\u5426" open-text="\u662F" v-model="formData.sex"/>\r
    </MqFormItem>\r
    <MqFormItem label="\u7C7B\u578B" prop="type">\r
      <MqCheckboxGroup v-model="formData.type">\r
        <MqCheckbox label="Online activities" />\r
        <MqCheckbox label="Promotion activities" />\r
        <MqCheckbox label="Offline activities" />\r
        <MqCheckbox label="Simple brand exposure" />\r
      </MqCheckboxGroup>\r
    </MqFormItem>\r
  </MqForm>\r
  <MqButton level="main" @click="handleClick">\u63D0\u4EA4</MqButton>\r
  <MqButton @click="handleReset">\u91CD\u7F6E</MqButton>\r
</template>\r
\r
<script lang="ts">\r
import MqForm from '../../../lib/Form.vue'\r
import MqFormItem from '../../../lib/FormItem.vue'\r
import MqInput from '../../../lib/Input.vue'\r
import {MqButton, MqSelect, MqSelectOption, MqSwitch, MqCheckbox, MqCheckboxGroup} from '../../../lib';\r
import {reactive, ref} from 'vue';\r
export default {\r
  name: 'Form1.demo',\r
  components: {MqForm, MqCheckbox, MqCheckboxGroup, MqSwitch, MqFormItem, MqInput, MqButton, MqSelect, MqSelectOption},\r
  setup() {\r
    const formData = reactive({tel: '', region: '', sex: false, type: []})\r
    const formRef= ref()\r
    const rules = ref({\r
      tel: [\r
        {required: true, message: '\u60A8\u7684\u624B\u673A\u53F7\u7801\u672A\u8F93\u5165'},\r
        {pattern: /^1[34578]\\d{9}$/, message: '\u60A8\u7684\u624B\u673A\u53F7\u7801\u8F93\u5165\u9519\u8BEF'}\r
        // { min: 3, max: 5, message: '\u957F\u5EA6\u53EA\u80FD\u4E3A3-5' }\r
      ],\r
      region: [\r
        {\r
          required: true, message: '\u8BF7\u9009\u62E9\u533A\u57DF'\r
        }\r
      ],\r
      type: [\r
        {\r
          type: 'array',\r
          required: true,\r
          message: '\u8BF7\u9009\u62E9\u7C7B\u578B'\r
        },\r
      ]\r
    })\r
    const handleClick = () => {\r
      formRef.value.validate((errs: any) => {\r
        console.log(errs)\r
      })\r
    }\r
    const handleReset = () => {\r
      formRef.value.resetFields()\r
    }\r
    return {\r
      formData, rules, formRef, handleClick, handleReset\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u57FA\u672C\u4F7F\u7528 "}const Db=p("h5",null,"\u6700\u57FA\u7840\u7684\u8868\u5355\u5305\u62EC\u5404\u79CD\u8F93\u5165\u8868\u5355\u9879\uFF0C\u6BD4\u5982input\u3001select\u3001radio\u3001checkbox\u7B49\u3002 \u5728\u6BCF\u4E00\u4E2A form \u7EC4\u4EF6\u4E2D\uFF0C\u4F60\u9700\u8981\u4E00\u4E2A form-item \u5B57\u6BB5\u4F5C\u4E3A\u8F93\u5165\u9879\u7684\u5BB9\u5668\uFF0C\u7528\u4E8E\u83B7\u53D6\u503C\u4E0E\u9A8C\u8BC1\u503C\u3002",-1),Ab=h("\u63D0\u4EA4"),xb=h("\u91CD\u7F6E");function qb(e,n,r,t,u,s){const o=_("MqInput"),a=_("MqFormItem"),i=_("MqSelectOption"),g=_("MqSelect"),m=_("MqSwitch"),b=_("MqCheckbox"),y=_("MqCheckboxGroup"),$=_("MqForm"),I=_("MqButton");return d(),f(k,null,[Db,l($,{model:t.formData,rules:t.rules,ref:"formRef"},{default:c(()=>[l(a,{label:"\u624B\u673A\u53F7",prop:"tel"},{default:c(()=>[l(o,{type:"tel","input-value":t.formData.tel,"onUpdate:input-value":n[0]||(n[0]=q=>t.formData.tel=q)},null,8,["input-value"])]),_:1}),l(a,{label:"\u533A\u57DF",prop:"region"},{default:c(()=>[l(g,{modelValue:t.formData.region,"onUpdate:modelValue":n[1]||(n[1]=q=>t.formData.region=q)},{default:c(()=>[l(i,{label:"one",value:"shanghai"}),l(i,{label:"two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),l(a,{label:"\u662F\u5426\u7537\u6027",prop:"sex"},{default:c(()=>[l(m,{type:"tel","close-text":"\u5426","open-text":"\u662F",modelValue:t.formData.sex,"onUpdate:modelValue":n[2]||(n[2]=q=>t.formData.sex=q)},null,8,["modelValue"])]),_:1}),l(a,{label:"\u7C7B\u578B",prop:"type"},{default:c(()=>[l(y,{modelValue:t.formData.type,"onUpdate:modelValue":n[3]||(n[3]=q=>t.formData.type=q)},{default:c(()=>[l(b,{label:"Online activities"}),l(b,{label:"Promotion activities"}),l(b,{label:"Offline activities"}),l(b,{label:"Simple brand exposure"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),l(I,{level:"main",onClick:t.handleClick},{default:c(()=>[Ab]),_:1},8,["onClick"]),l(I,{onClick:t.handleReset},{default:c(()=>[xb]),_:1},8,["onClick"])],64)}typeof Zr=="function"&&Zr(zl);const wb=v(zl,[["render",qb]]),Ib={name:"FormDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{Form1Demo:wb}}},Tb=p("h1",null,"Form\u7EC4\u4EF6\u793A\u4F8B",-1);function Mb(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[Tb,l(o,{component:t.Form1Demo},null,8,["component"])],64)}const Sb=v(Ib,[["render",Mb]]),Hl={name:"BackTop.demo",components:{BackTop:Gl}};function Yr(e){e.__sourceCode=`<template>
  <BackTop :bottom="100" :right="100">
    <template #default>
      <div
        style="
           {
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }
        "
      >
        UP
      </div>
    </template>
  </BackTop>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</template>

<script lang="ts">
import BackTop from "../../../lib/BackTop.vue";
export default {
  name: "BackTop.demo",
  components: { BackTop },
};
<\/script>

<style lang="scss" scoped>
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u4F7F\u7528 "}const Vb=p("div",{style:{"{\n            height":"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0, 0, 0, 0.12)","text-align":"center","line-height":"40px",color:"#1989fa"}}," UP ",-1),Rb=jn("<div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div>",48);function Pb(e,n,r,t,u,s){const o=_("BackTop");return d(),f(k,null,[l(o,{bottom:100,right:100},{default:c(()=>[Vb]),_:1}),Rb],64)}typeof Yr=="function"&&Yr(Hl);const Lb=v(Hl,[["render",Pb]]),Ob={name:"Alert",components:{Demo:ne},setup(){return Q(()=>{te()}),{BackTop1Demo:Lb}}},Gb=p("h1",null,"backTop \u7EC4\u4EF6\u793A\u4F8B",-1);function Nb(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[Gb,l(o,{component:t.BackTop1Demo},null,8,["component"])],64)}const zb=v(Ob,[["render",Nb]]),jl={name:"Pagination1.demo",components:{MqPagination:et},setup(){const e=U({page:1,pageSize:10}),n=A(1);return{changePage:t=>{e.page=t,console.log(e)},params:e,current:n}}};function Xr(e){e.__sourceCode=`<template>\r
  <MqPagination v-model="current" layout="prev, next" @changePage="changePage" :total="80" :page="1" position="center"></MqPagination>\r
  {{ current }}\r
</template>\r
\r
<script lang="ts">\r
import MqPagination from '../../../lib/MqPagination.vue'\r
import {reactive, ref} from 'vue';\r
export default {\r
  name: 'Pagination1.demo',\r
  components: {\r
    MqPagination\r
  },\r
  setup () {\r
    const params = reactive({\r
      page: 1,\r
      pageSize: 10\r
    })\r
    const current = ref(1)\r
    const changePage = (page: number) => {\r
      params.page = page\r
      console.log(params)\r
    }\r
    return { changePage, params, current }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u4F7F\u7528 "}function Hb(e,n,r,t,u,s){const o=_("MqPagination");return d(),f(k,null,[l(o,{modelValue:t.current,"onUpdate:modelValue":n[0]||(n[0]=a=>t.current=a),layout:"prev, next",onChangePage:t.changePage,total:80,page:1,position:"center"},null,8,["modelValue","onChangePage"]),h(" "+L(t.current),1)],64)}typeof Xr=="function"&&Xr(jl);const jb=v(jl,[["render",Hb]]),Ul={name:"Pagination2.demo",components:{MqPagination:et},setup(){const e=U({page:1,pageSize:10}),n=A(1);return{changePage:t=>{e.page=t,console.log(e)},params:e,current:n}}};function Jr(e){e.__sourceCode=`<template>\r
  <MqPagination background v-model="current" layout="prev, next" @changePage="changePage" :total="80" :page="1" position="center"></MqPagination>\r
  {{ current }}\r
</template>\r
\r
<script lang="ts">\r
import MqPagination from '../../../lib/MqPagination.vue'\r
import {reactive, ref} from 'vue';\r
export default {\r
  name: 'Pagination2.demo',\r
  components: {\r
    MqPagination\r
  },\r
  setup () {\r
    const params = reactive({\r
      page: 1,\r
      pageSize: 10\r
    })\r
    const current = ref(1)\r
    const changePage = (page: number) => {\r
      params.page = page\r
      console.log(params)\r
    }\r
    return { changePage, params, current }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E26\u6709\u80CC\u666F\u8272\u7684\u5206\u9875 "}function Ub(e,n,r,t,u,s){const o=_("MqPagination");return d(),f(k,null,[l(o,{background:"",modelValue:t.current,"onUpdate:modelValue":n[0]||(n[0]=a=>t.current=a),layout:"prev, next",onChangePage:t.changePage,total:80,page:1,position:"center"},null,8,["modelValue","onChangePage"]),h(" "+L(t.current),1)],64)}typeof Jr=="function"&&Jr(Ul);const Wb=v(Ul,[["render",Ub]]),Wl={name:"Pagination2.demo",components:{MqPagination:et},setup(){const e=U({page:1,pageSize:10}),n=A(1);return{changePage:t=>{e.page=t,console.log(e)},params:e,current:n}}};function eu(e){e.__sourceCode=`<template>\r
  <MqPagination background v-model="current" :page-sizes="[5, 10, 20, 40]" layout="prev, next, sizes, total" @changePage="changePage" :total="80" :page="1" position="center"></MqPagination>\r
  {{ current }}\r
</template>\r
\r
<script lang="ts">\r
import MqPagination from '../../../lib/MqPagination.vue'\r
import {reactive, ref} from 'vue';\r
export default {\r
  name: 'Pagination2.demo',\r
  components: {\r
    MqPagination\r
  },\r
  setup () {\r
    const params = reactive({\r
      page: 1,\r
      pageSize: 10\r
    })\r
    const current = ref(1)\r
    const changePage = (page: number) => {\r
      params.page = page\r
      console.log(params)\r
    }\r
    return { changePage, params, current }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u9644\u52A0\u529F\u80FD "}function Qb(e,n,r,t,u,s){const o=_("MqPagination");return d(),f(k,null,[l(o,{background:"",modelValue:t.current,"onUpdate:modelValue":n[0]||(n[0]=a=>t.current=a),"page-sizes":[5,10,20,40],layout:"prev, next, sizes, total",onChangePage:t.changePage,total:80,page:1,position:"center"},null,8,["modelValue","onChangePage"]),h(" "+L(t.current),1)],64)}typeof eu=="function"&&eu(Wl);const Kb=v(Wl,[["render",Qb]]),Zb={name:"PaginationDemo",components:{Demo:ne},setup(){Q(()=>{te()});const e=U([{key:"1",attr:"changePage",describe:"currentPage \u6539\u53D8\u65F6\u89E6\u53D1",params:"\u65B0\u5F53\u524D\u9875"},{key:"2",attr:"prevClick",describe:"\u7528\u6237\u70B9\u51FB\u4E0A\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u65F6\u89E6\u53D1",params:"\u65B0\u5F53\u524D\u9875"},{key:"3",attr:"nextClick",describe:"\u7528\u6237\u70B9\u51FB\u4E0B\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u65F6\u89E6\u53D1",params:"\u65B0\u5F53\u524D\u9875"}]),n=U([{title:"\u53C2\u6570",dataIndex:"attr",key:"attr"},{title:"\u8BF4\u660E",dataIndex:"describe",key:"describe"},{title:"\u53C2\u6570",dataIndex:"params",key:"params"}]);return{PaginationDemo1:jb,PaginationDemo2:Wb,PaginationDemo3:Kb,data:e,columns:n}}},Yb=p("h1",null,"Pagination \u793A\u4F8B",-1),Xb=p("h2",null,"\u4E8B\u4EF6",-1);function Jb(e,n,r,t,u,s){const o=_("Demo"),a=_("MqTable");return d(),f(k,null,[Yb,l(o,{component:t.PaginationDemo1},null,8,["component"]),l(o,{component:t.PaginationDemo2},null,8,["component"]),l(o,{component:t.PaginationDemo3},null,8,["component"]),l(a,{columns:t.columns,"data-source":t.data,bordered:""},{title:c(()=>[Xb]),_:1},8,["columns","data-source"])],64)}const ey=v(Zb,[["render",Jb]]),Ql={name:"Select1.demo",components:{MqSelect:Me,MqSelectOption:xe},setup(){const e=[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E",disabled:!0},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D",disabled:!0},{value:"\u9009\u98796",label:"\u6742\u9171\u9762"},{value:"\u9009\u98797",label:"123"},{value:"\u9009\u98798",label:"\u6742\u9171321\u9762"}],n=A("");return{options:e,currentFoot:n,handleChange:t=>{console.log(t)}}}};function nu(e){e.__sourceCode=`<template>\r
  <h5>\u9002\u7528\u5E7F\u6CDB\u7684\u57FA\u7840\u5355\u9009 v-model \u7684\u503C\u4E3A\u5F53\u524D\u88AB\u9009\u4E2D\u7684 mq-option \u7684 value \u5C5E\u6027\u503C</h5>\r
  <div style="display: flex;align-items: center">\r
    <MqSelect @onChange="handleChange" v-model="currentFoot" size="large">\r
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"\r
                      :disabled="item.disabled"></MqSelectOption>\r
    </MqSelect>\r
    <MqSelect @onChange="handleChange" v-model="currentFoot" size="normal">\r
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"\r
                      :disabled="item.disabled"></MqSelectOption>\r
    </MqSelect>\r
    <MqSelect @onChange="handleChange" v-model="currentFoot" size="small">\r
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"\r
                      :disabled="item.disabled"></MqSelectOption>\r
    </MqSelect>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import MqSelect from '../../../lib/MqSelect.vue';\r
import MqSelectOption from '../../../lib/MqSelectOption.vue';\r
import {ref} from 'vue';\r
\r
export default {\r
  name: 'Select1.demo',\r
  components: {MqSelect, MqSelectOption},\r
  setup() {\r
    const options = [\r
      {\r
        value: '\u9009\u98791',\r
        label: '\u9EC4\u91D1\u7CD5',\r
      },\r
      {\r
        value: '\u9009\u98792',\r
        label: '\u53CC\u76AE\u5976',\r
      },\r
\r
      {\r
        value: '\u9009\u98793',\r
        label: '\u86B5\u4ED4\u714E',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98794',\r
        label: '\u9F99\u987B\u9762',\r
      },\r
      {\r
        value: '\u9009\u98795',\r
        label: '\u5317\u4EAC\u70E4\u9E2D',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98796',\r
        label: '\u6742\u9171\u9762',\r
      },\r
      {\r
        value: '\u9009\u98797',\r
        label: '123',\r
      },\r
      {\r
        value: '\u9009\u98798',\r
        label: '\u6742\u9171321\u9762',\r
      }\r
    ];\r
    const currentFoot = ref('');\r
    const handleChange = (e: InputEvent) => {\r
      console.log(e);\r
    };\r
    return {\r
      options, currentFoot, handleChange\r
    };\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u57FA\u672C\u4F7F\u7528 "}const ny=p("h5",null,"\u9002\u7528\u5E7F\u6CDB\u7684\u57FA\u7840\u5355\u9009 v-model \u7684\u503C\u4E3A\u5F53\u524D\u88AB\u9009\u4E2D\u7684 mq-option \u7684 value \u5C5E\u6027\u503C",-1),ty={style:{display:"flex","align-items":"center"}};function oy(e,n,r,t,u,s){const o=_("MqSelectOption"),a=_("MqSelect");return d(),f(k,null,[ny,p("div",ty,[l(a,{onOnChange:t.handleChange,modelValue:t.currentFoot,"onUpdate:modelValue":n[0]||(n[0]=i=>t.currentFoot=i),size:"large"},{default:c(()=>[(d(!0),f(k,null,J(t.options,i=>(d(),w(o,{key:i.value,value:i.value,label:i.label,disabled:i.disabled},null,8,["value","label","disabled"]))),128))]),_:1},8,["onOnChange","modelValue"]),l(a,{onOnChange:t.handleChange,modelValue:t.currentFoot,"onUpdate:modelValue":n[1]||(n[1]=i=>t.currentFoot=i),size:"normal"},{default:c(()=>[(d(!0),f(k,null,J(t.options,i=>(d(),w(o,{key:i.value,value:i.value,label:i.label,disabled:i.disabled},null,8,["value","label","disabled"]))),128))]),_:1},8,["onOnChange","modelValue"]),l(a,{onOnChange:t.handleChange,modelValue:t.currentFoot,"onUpdate:modelValue":n[2]||(n[2]=i=>t.currentFoot=i),size:"small"},{default:c(()=>[(d(!0),f(k,null,J(t.options,i=>(d(),w(o,{key:i.value,value:i.value,label:i.label,disabled:i.disabled},null,8,["value","label","disabled"]))),128))]),_:1},8,["onOnChange","modelValue"])])],64)}typeof nu=="function"&&nu(Ql);const ry=v(Ql,[["render",oy]]),Kl={name:"Select1.demo",components:{MqSelect:Me,MqSelectOption:xe},setup(){const e=[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E",disabled:!0},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D",disabled:!0},{value:"\u9009\u98796",label:"\u6742\u9171\u9762"}],n=A("");return{options:e,currentFoot:n,handleChange:t=>{console.log(t)}}}};function tu(e){e.__sourceCode=`<template>\r
  <h5>\u7981\u7528\u6574\u4E2A\u9009\u62E9\u5668\u7EC4\u4EF6\r
\r
    \u4E3A mq-select \u8BBE\u7F6E disabled\u5C5E\u6027\uFF0C\u5219\u6574\u4E2A\u9009\u62E9\u5668\u4E0D\u53EF\u7528\u3002</h5>\r
  <div style="display: flex;align-items: center">\r
    <MqSelect disabled @onChange="handleChange" v-model="currentFoot" size="large">\r
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"\r
                      :disabled="item.disabled"></MqSelectOption>\r
    </MqSelect>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import MqSelect from '../../../lib/MqSelect.vue';\r
import MqSelectOption from '../../../lib/MqSelectOption.vue';\r
import {ref} from 'vue';\r
\r
export default {\r
  name: 'Select1.demo',\r
  components: {MqSelect, MqSelectOption},\r
  setup() {\r
    const options = [\r
      {\r
        value: '\u9009\u98791',\r
        label: '\u9EC4\u91D1\u7CD5',\r
      },\r
      {\r
        value: '\u9009\u98792',\r
        label: '\u53CC\u76AE\u5976',\r
      },\r
\r
      {\r
        value: '\u9009\u98793',\r
        label: '\u86B5\u4ED4\u714E',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98794',\r
        label: '\u9F99\u987B\u9762',\r
      },\r
      {\r
        value: '\u9009\u98795',\r
        label: '\u5317\u4EAC\u70E4\u9E2D',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98796',\r
        label: '\u6742\u9171\u9762',\r
      }\r
    ];\r
    const currentFoot = ref('');\r
    const handleChange = (e: InputEvent) => {\r
      console.log(e);\r
    };\r
    return {\r
      options, currentFoot, handleChange\r
    };\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u7981\u7528\u72B6\u6001 "}const uy=p("h5",null,"\u7981\u7528\u6574\u4E2A\u9009\u62E9\u5668\u7EC4\u4EF6 \u4E3A mq-select \u8BBE\u7F6E disabled\u5C5E\u6027\uFF0C\u5219\u6574\u4E2A\u9009\u62E9\u5668\u4E0D\u53EF\u7528\u3002",-1),ay={style:{display:"flex","align-items":"center"}};function ly(e,n,r,t,u,s){const o=_("MqSelectOption"),a=_("MqSelect");return d(),f(k,null,[uy,p("div",ay,[l(a,{disabled:"",onOnChange:t.handleChange,modelValue:t.currentFoot,"onUpdate:modelValue":n[0]||(n[0]=i=>t.currentFoot=i),size:"large"},{default:c(()=>[(d(!0),f(k,null,J(t.options,i=>(d(),w(o,{key:i.value,value:i.value,label:i.label,disabled:i.disabled},null,8,["value","label","disabled"]))),128))]),_:1},8,["onOnChange","modelValue"])])],64)}typeof tu=="function"&&tu(Kl);const sy=v(Kl,[["render",ly]]),Zl={name:"Select1.demo",components:{MqSelect:Me,MqSelectOption:xe},setup(){const e=[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E",disabled:!0},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D",disabled:!0},{value:"\u9009\u98796",label:"\u6742\u9171\u9762"}],n=A("");return{options:e,currentFoot:n,handleChange:t=>{console.log(t)}}}};function ou(e){e.__sourceCode=`<template>\r
  <h5>\u5305\u542B\u6E05\u7A7A\u6309\u94AE\uFF0C\u53EF\u5C06\u9009\u62E9\u5668\u6E05\u7A7A\u4E3A\u521D\u59CB\u72B6\u6001\r
\r
    \u4E3A mq-select \u8BBE\u7F6E clearable \u5C5E\u6027\uFF0C\u5219\u53EF\u5C06\u9009\u62E9\u5668\u6E05\u7A7A\u3002 \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Cclearable \u5C5E\u6027\u4EC5\u9002\u7528\u4E8E\u5355\u9009\u3002</h5>\r
  <div style="display: flex;align-items: center">\r
    <MqSelect clearable @onChange="handleChange" v-model="currentFoot" size="large">\r
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"\r
                      :disabled="item.disabled"></MqSelectOption>\r
    </MqSelect>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import MqSelect from '../../../lib/MqSelect.vue';\r
import MqSelectOption from '../../../lib/MqSelectOption.vue';\r
import {ref} from 'vue';\r
\r
export default {\r
  name: 'Select1.demo',\r
  components: {MqSelect, MqSelectOption},\r
  setup() {\r
    const options = [\r
      {\r
        value: '\u9009\u98791',\r
        label: '\u9EC4\u91D1\u7CD5',\r
      },\r
      {\r
        value: '\u9009\u98792',\r
        label: '\u53CC\u76AE\u5976',\r
      },\r
\r
      {\r
        value: '\u9009\u98793',\r
        label: '\u86B5\u4ED4\u714E',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98794',\r
        label: '\u9F99\u987B\u9762',\r
      },\r
      {\r
        value: '\u9009\u98795',\r
        label: '\u5317\u4EAC\u70E4\u9E2D',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98796',\r
        label: '\u6742\u9171\u9762',\r
      }\r
    ];\r
    const currentFoot = ref('');\r
    const handleChange = (e: InputEvent) => {\r
      console.log(e);\r
    };\r
    return {\r
      options, currentFoot, handleChange\r
    };\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u53EF\u6E05\u7A7A\u5355\u9009 "}const iy=p("h5",null,"\u5305\u542B\u6E05\u7A7A\u6309\u94AE\uFF0C\u53EF\u5C06\u9009\u62E9\u5668\u6E05\u7A7A\u4E3A\u521D\u59CB\u72B6\u6001 \u4E3A mq-select \u8BBE\u7F6E clearable \u5C5E\u6027\uFF0C\u5219\u53EF\u5C06\u9009\u62E9\u5668\u6E05\u7A7A\u3002 \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Cclearable \u5C5E\u6027\u4EC5\u9002\u7528\u4E8E\u5355\u9009\u3002",-1),cy={style:{display:"flex","align-items":"center"}};function dy(e,n,r,t,u,s){const o=_("MqSelectOption"),a=_("MqSelect");return d(),f(k,null,[iy,p("div",cy,[l(a,{clearable:"",onOnChange:t.handleChange,modelValue:t.currentFoot,"onUpdate:modelValue":n[0]||(n[0]=i=>t.currentFoot=i),size:"large"},{default:c(()=>[(d(!0),f(k,null,J(t.options,i=>(d(),w(o,{key:i.value,value:i.value,label:i.label,disabled:i.disabled},null,8,["value","label","disabled"]))),128))]),_:1},8,["onOnChange","modelValue"])])],64)}typeof ou=="function"&&ou(Zl);const py=v(Zl,[["render",dy]]),Yl={name:"Select1.demo",components:{MqSelect:Me,MqSelectOption:xe},setup(){const e=[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E",disabled:!0},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D",disabled:!0},{value:"\u9009\u98796",label:"\u6742\u9171\u9762"}],n=A([]);return{options:e,currentFoot:n,handleChange:t=>{console.log(t)}}}};function ru(e){e.__sourceCode=`<template>\r
  <h5>\u4E3A mq-select \u8BBE\u7F6E multiple \u5C5E\u6027\u5373\u53EF\u542F\u7528\u591A\u9009\uFF0C \u6B64\u65F6 v-model \u7684\u503C\u4E3A\u5F53\u524D\u9009\u4E2D\u503C\u6240\u7EC4\u6210\u7684\u6570\u7EC4\u3002</h5>\r
  <div style="display: flex;align-items: center">\r
    <MqSelect multiple @onChange="handleChange" v-model="currentFoot" size="large">\r
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"\r
                      :disabled="item.disabled"></MqSelectOption>\r
    </MqSelect>\r
    {{ currentFoot }}\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import MqSelect from '../../../lib/MqSelect.vue';\r
import MqSelectOption from '../../../lib/MqSelectOption.vue';\r
import {ref} from 'vue';\r
\r
export default {\r
  name: 'Select1.demo',\r
  components: {MqSelect, MqSelectOption},\r
  setup() {\r
    const options = [\r
      {\r
        value: '\u9009\u98791',\r
        label: '\u9EC4\u91D1\u7CD5',\r
      },\r
      {\r
        value: '\u9009\u98792',\r
        label: '\u53CC\u76AE\u5976',\r
      },\r
\r
      {\r
        value: '\u9009\u98793',\r
        label: '\u86B5\u4ED4\u714E',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98794',\r
        label: '\u9F99\u987B\u9762',\r
      },\r
      {\r
        value: '\u9009\u98795',\r
        label: '\u5317\u4EAC\u70E4\u9E2D',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98796',\r
        label: '\u6742\u9171\u9762',\r
      }\r
    ];\r
    const currentFoot = ref('' || []);\r
    const handleChange = (e: InputEvent) => {\r
      console.log(e);\r
    };\r
    return {\r
      options, currentFoot, handleChange\r
    };\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u57FA\u7840\u591A\u9009 "}const my=p("h5",null,"\u4E3A mq-select \u8BBE\u7F6E multiple \u5C5E\u6027\u5373\u53EF\u542F\u7528\u591A\u9009\uFF0C \u6B64\u65F6 v-model \u7684\u503C\u4E3A\u5F53\u524D\u9009\u4E2D\u503C\u6240\u7EC4\u6210\u7684\u6570\u7EC4\u3002",-1),fy={style:{display:"flex","align-items":"center"}};function _y(e,n,r,t,u,s){const o=_("MqSelectOption"),a=_("MqSelect");return d(),f(k,null,[my,p("div",fy,[l(a,{multiple:"",onOnChange:t.handleChange,modelValue:t.currentFoot,"onUpdate:modelValue":n[0]||(n[0]=i=>t.currentFoot=i),size:"large"},{default:c(()=>[(d(!0),f(k,null,J(t.options,i=>(d(),w(o,{key:i.value,value:i.value,label:i.label,disabled:i.disabled},null,8,["value","label","disabled"]))),128))]),_:1},8,["onOnChange","modelValue"]),h(" "+L(t.currentFoot),1)])],64)}typeof ru=="function"&&ru(Yl);const hy=v(Yl,[["render",_y]]),Xl={name:"Select1.demo",components:{MqSelect:Me,MqSelectOption:xe},setup(){const e=[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E",disabled:!0},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D",disabled:!0},{value:"\u9009\u98796",label:"\u6742\u9171\u9762"}],n=A([]);return{options:e,currentFoot:n,handleChange:t=>{}}}};function uu(e){e.__sourceCode=`<template>\r
  <h5>\u53EF\u4EE5\u5229\u7528\u7B5B\u9009\u529F\u80FD\u5FEB\u901F\u67E5\u627E\u9009\u9879\r
\r
    \u4E3A mq-select \u6DFB\u52A0 filterable \u5C5E\u6027\u5373\u53EF\u542F\u7528\u7B5B\u9009\u529F\u80FD\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CSelect \u4F1A\u627E\u51FA\u6240\u6709 label \u5C5E\u6027\u5305\u542B\u8F93\u5165\u503C\u7684\u9009\u9879\u3002</h5>\r
  <div style="display: flex;align-items: center">\r
    <MqSelect filterable @onChange="handleChange" v-model="currentFoot" size="large">\r
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"\r
                      :disabled="item.disabled"></MqSelectOption>\r
    </MqSelect>\r
    {{ currentFoot }}\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import MqSelect from '../../../lib/MqSelect.vue';\r
import MqSelectOption from '../../../lib/MqSelectOption.vue';\r
import {ref} from 'vue';\r
\r
export default {\r
  name: 'Select1.demo',\r
  components: {MqSelect, MqSelectOption},\r
  setup() {\r
    const options = [\r
      {\r
        value: '\u9009\u98791',\r
        label: '\u9EC4\u91D1\u7CD5',\r
      },\r
      {\r
        value: '\u9009\u98792',\r
        label: '\u53CC\u76AE\u5976',\r
      },\r
\r
      {\r
        value: '\u9009\u98793',\r
        label: '\u86B5\u4ED4\u714E',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98794',\r
        label: '\u9F99\u987B\u9762',\r
      },\r
      {\r
        value: '\u9009\u98795',\r
        label: '\u5317\u4EAC\u70E4\u9E2D',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98796',\r
        label: '\u6742\u9171\u9762',\r
      }\r
    ];\r
    const currentFoot = ref('' || []);\r
    const handleChange = (e: InputEvent) => {\r
    };\r
    return {\r
      options, currentFoot, handleChange\r
    };\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u7B5B\u9009\u9009\u9879 "}const gy=p("h5",null,"\u53EF\u4EE5\u5229\u7528\u7B5B\u9009\u529F\u80FD\u5FEB\u901F\u67E5\u627E\u9009\u9879 \u4E3A mq-select \u6DFB\u52A0 filterable \u5C5E\u6027\u5373\u53EF\u542F\u7528\u7B5B\u9009\u529F\u80FD\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CSelect \u4F1A\u627E\u51FA\u6240\u6709 label \u5C5E\u6027\u5305\u542B\u8F93\u5165\u503C\u7684\u9009\u9879\u3002",-1),vy={style:{display:"flex","align-items":"center"}};function Ey(e,n,r,t,u,s){const o=_("MqSelectOption"),a=_("MqSelect");return d(),f(k,null,[gy,p("div",vy,[l(a,{filterable:"",onOnChange:t.handleChange,modelValue:t.currentFoot,"onUpdate:modelValue":n[0]||(n[0]=i=>t.currentFoot=i),size:"large"},{default:c(()=>[(d(!0),f(k,null,J(t.options,i=>(d(),w(o,{key:i.value,value:i.value,label:i.label,disabled:i.disabled},null,8,["value","label","disabled"]))),128))]),_:1},8,["onOnChange","modelValue"]),h(" "+L(t.currentFoot),1)])],64)}typeof uu=="function"&&uu(Xl);const by=v(Xl,[["render",Ey]]),Jl={name:"Select1.demo",components:{MqSelect:Me,MqSelectOption:xe},setup(){const e=[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E",disabled:!0},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D",disabled:!0},{value:"\u9009\u98796",label:"\u6742\u9171\u9762"}],n=A([]);return{options:e,currentFoot:n,handleChange:t=>{console.log(t)}}}};function au(e){e.__sourceCode=`<template>\r
  <h5>\u5728 mq-option \u4E2D\uFF0C\u8BBE\u5B9A disabled \u503C\u4E3A true\uFF0C\u5373\u53EF\u7981\u7528\u8BE5\u9009\u9879</h5>\r
  <div style="display: flex;align-items: center">\r
    <MqSelect @onChange="handleChange" v-model="currentFoot" size="large">\r
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"\r
                      :disabled="item.disabled"></MqSelectOption>\r
    </MqSelect>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import MqSelect from '../../../lib/MqSelect.vue';\r
import MqSelectOption from '../../../lib/MqSelectOption.vue';\r
import {ref} from 'vue';\r
\r
export default {\r
  name: 'Select1.demo',\r
  components: {MqSelect, MqSelectOption},\r
  setup() {\r
    const options = [\r
      {\r
        value: '\u9009\u98791',\r
        label: '\u9EC4\u91D1\u7CD5',\r
      },\r
      {\r
        value: '\u9009\u98792',\r
        label: '\u53CC\u76AE\u5976',\r
      },\r
\r
      {\r
        value: '\u9009\u98793',\r
        label: '\u86B5\u4ED4\u714E',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98794',\r
        label: '\u9F99\u987B\u9762',\r
      },\r
      {\r
        value: '\u9009\u98795',\r
        label: '\u5317\u4EAC\u70E4\u9E2D',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98796',\r
        label: '\u6742\u9171\u9762',\r
      }\r
    ];\r
    const currentFoot = ref('' || []);\r
    const handleChange = (e: InputEvent) => {\r
      console.log(e);\r
    };\r
    return {\r
      options, currentFoot, handleChange\r
    };\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u6709\u7981\u7528\u9009\u9879 "}const yy=p("h5",null,"\u5728 mq-option \u4E2D\uFF0C\u8BBE\u5B9A disabled \u503C\u4E3A true\uFF0C\u5373\u53EF\u7981\u7528\u8BE5\u9009\u9879",-1),Cy={style:{display:"flex","align-items":"center"}};function $y(e,n,r,t,u,s){const o=_("MqSelectOption"),a=_("MqSelect");return d(),f(k,null,[yy,p("div",Cy,[l(a,{onOnChange:t.handleChange,modelValue:t.currentFoot,"onUpdate:modelValue":n[0]||(n[0]=i=>t.currentFoot=i),size:"large"},{default:c(()=>[(d(!0),f(k,null,J(t.options,i=>(d(),w(o,{key:i.value,value:i.value,label:i.label,disabled:i.disabled},null,8,["value","label","disabled"]))),128))]),_:1},8,["onOnChange","modelValue"])])],64)}typeof au=="function"&&au(Jl);const Fy=v(Jl,[["render",$y]]),es={name:"Select1.demo",components:{MqSelect:Me,MqSelectOption:xe},setup(){const e=[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E",disabled:!0},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D",disabled:!0},{value:"\u9009\u98796",label:"\u6742\u9171\u9762"}],n=A([]);return{options:e,currentFoot:n,handleChange:t=>{console.log(t)}}}};function lu(e){e.__sourceCode=`<template>\r
  <h5>\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5982\u4F55\u6765\u6E32\u67D3\u6BCF\u4E00\u4E2A\u9009\u9879\u3002\u5C06\u81EA\u5B9A\u4E49\u7684 HTML \u6A21\u677F\u63D2\u5165 MqSelectOption \u7684 slot \u4E2D\u5373\u53EF\u3002</h5>\r
  <div style="display: flex;align-items: center">\r
    <MqSelect @onChange="handleChange" v-model="currentFoot" size="large">\r
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"\r
                      :disabled="item.disabled">\r
        <span style="float: left">{{ item.label }}</span>\r
        <span\r
          style="\r
          float: right;\r
          font-size: 13px;\r
        "\r
        >{{ item.value }}</span\r
        >\r
      </MqSelectOption>\r
    </MqSelect>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import MqSelect from '../../../lib/MqSelect.vue';\r
import MqSelectOption from '../../../lib/MqSelectOption.vue';\r
import {ref} from 'vue';\r
\r
export default {\r
  name: 'Select1.demo',\r
  components: {MqSelect, MqSelectOption},\r
  setup() {\r
    const options = [\r
      {\r
        value: '\u9009\u98791',\r
        label: '\u9EC4\u91D1\u7CD5',\r
      },\r
      {\r
        value: '\u9009\u98792',\r
        label: '\u53CC\u76AE\u5976',\r
      },\r
\r
      {\r
        value: '\u9009\u98793',\r
        label: '\u86B5\u4ED4\u714E',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98794',\r
        label: '\u9F99\u987B\u9762',\r
      },\r
      {\r
        value: '\u9009\u98795',\r
        label: '\u5317\u4EAC\u70E4\u9E2D',\r
        disabled: true,\r
      },\r
      {\r
        value: '\u9009\u98796',\r
        label: '\u6742\u9171\u9762',\r
      }\r
    ];\r
    const currentFoot = ref('' || []);\r
    const handleChange = (e: InputEvent) => {\r
      console.log(e);\r
    };\r
    return {\r
      options, currentFoot, handleChange\r
    };\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u6A21\u677F "}const ky=p("h5",null,"\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5982\u4F55\u6765\u6E32\u67D3\u6BCF\u4E00\u4E2A\u9009\u9879\u3002\u5C06\u81EA\u5B9A\u4E49\u7684 HTML \u6A21\u677F\u63D2\u5165 MqSelectOption \u7684 slot \u4E2D\u5373\u53EF\u3002",-1),By={style:{display:"flex","align-items":"center"}},Dy={style:{float:"left"}},Ay={style:{float:"right","font-size":"13px"}};function xy(e,n,r,t,u,s){const o=_("MqSelectOption"),a=_("MqSelect");return d(),f(k,null,[ky,p("div",By,[l(a,{onOnChange:t.handleChange,modelValue:t.currentFoot,"onUpdate:modelValue":n[0]||(n[0]=i=>t.currentFoot=i),size:"large"},{default:c(()=>[(d(!0),f(k,null,J(t.options,i=>(d(),w(o,{key:i.value,value:i.value,label:i.label,disabled:i.disabled},{default:c(()=>[p("span",Dy,L(i.label),1),p("span",Ay,L(i.value),1)]),_:2},1032,["value","label","disabled"]))),128))]),_:1},8,["onOnChange","modelValue"])])],64)}typeof lu=="function"&&lu(es);const qy=v(es,[["render",xy]]),wy={name:"SelectDemo",components:{Demo:ne},setup(){return Q(()=>{te()}),{SelectDemo1:ry,SelectDemo7:Fy,SelectDemo3:sy,SelectDemo4:py,SelectDemo5:hy,SelectDemo6:by,SelectDemo2:qy}}};const Iy=e=>(ge("data-v-221a0723"),e=e(),ve(),e),Ty=Iy(()=>p("h1",null,"Select\u4F7F\u7528\u793A\u4F8B",-1)),My={class:"selectDemo"};function Sy(e,n,r,t,u,s){const o=_("Demo");return d(),f(k,null,[Ty,p("div",My,[l(o,{component:t.SelectDemo1},null,8,["component"]),l(o,{component:t.SelectDemo7},null,8,["component"]),l(o,{component:t.SelectDemo3},null,8,["component"]),l(o,{component:t.SelectDemo4},null,8,["component"]),l(o,{component:t.SelectDemo5},null,8,["component"]),l(o,{component:t.SelectDemo6},null,8,["component"]),l(o,{component:t.SelectDemo2},null,8,["component"])])],64)}const Vy=v(wy,[["render",Sy],["__scopeId","data-v-221a0723"]]),ns={name:"Table1.demo.vue",components:{MqTable:ye},setup(){const e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]),n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",width:200},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",ellipsis:"true"}]);return{data:e,columns:n}}};function su(e){e.__sourceCode=`<template>\r
  <h4>\u6307\u5B9A\u8868\u683C\u7684\u6570\u636E\u6E90 dataSource \u4E3A\u4E00\u4E2A\u6570\u7EC4\u3002</h4>\r
  <MqTable :columns="columns" :data-source="data"></MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {reactive} from 'vue';\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    const data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name'},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age', width: 200},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', ellipsis: 'true'}\r
    ])\r
    return{\r
      data, columns\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "}const Ry=p("h4",null,"\u6307\u5B9A\u8868\u683C\u7684\u6570\u636E\u6E90 dataSource \u4E3A\u4E00\u4E2A\u6570\u7EC4\u3002",-1);function Py(e,n,r,t,u,s){const o=_("MqTable");return d(),f(k,null,[Ry,l(o,{columns:t.columns,"data-source":t.data},null,8,["columns","data-source"])],64)}typeof su=="function"&&su(ns);const Ly=v(ns,[["render",Py]]),ts={name:"Table1.demo.vue",components:{MqTable:ye},setup(){const e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]),n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",width:200},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",ellipsis:"true"}]);return{data:e,columns:n}}};function iu(e){e.__sourceCode=`<template>\r
  <h4>\u5229\u7528 rowClassName \u81EA\u5B9A\u4E49\u5E26\u6591\u9A6C\u7EB9\u7684\u8868\u683C\u3002</h4>\r
  <MqTable class="mqTableStriped" :row-class-name="(record, index) => (index % 2 === 1? 'table-striped' : null)" :columns="columns" :data-source="data"></MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {reactive} from 'vue';\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    const data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name'},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age', width: 200},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', ellipsis: 'true'}\r
    ])\r
    return{\r
      data, columns\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.mqTableStriped :deep(.table-striped) td {\r
  background-color: #fafafa;\r
}\r
</style>`,e.__sourceCodeTitle=" \u5E26\u6591\u9A6C\u7EB9\u7684\u8868\u683C "}const Oy=e=>(ge("data-v-0a272062"),e=e(),ve(),e),Gy=Oy(()=>p("h4",null,"\u5229\u7528 rowClassName \u81EA\u5B9A\u4E49\u5E26\u6591\u9A6C\u7EB9\u7684\u8868\u683C\u3002",-1));function Ny(e,n,r,t,u,s){const o=_("MqTable");return d(),f(k,null,[Gy,l(o,{class:"mqTableStriped","row-class-name":(a,i)=>i%2===1?"table-striped":null,columns:t.columns,"data-source":t.data},null,8,["row-class-name","columns","data-source"])],64)}typeof iu=="function"&&iu(ts);const zy=v(ts,[["render",Ny],["__scopeId","data-v-0a272062"]]),os={name:"Table1.demo.vue",components:{MqTable:ye},setup(){const e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]),n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",width:200},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",ellipsis:"true"}]);return{data:e,columns:n}}};function cu(e){e.__sourceCode=`<template>\r
  <h4>\u4E24\u79CD\u7D27\u51D1\u578B\u7684\u5217\u8868\uFF0C\u5C0F\u578B\u5217\u8868\u53EA\u7528\u4E8E\u5BF9\u8BDD\u6846\u5185\u3002</h4>\r
\r
  <h5>Middle size table</h5>\r
  <MqTable size="middle" :columns="columns" :data-source="data"></MqTable>\r
  <h5>Small size table</h5>\r
  <MqTable size="small" :columns="columns" :data-source="data"></MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {reactive} from 'vue';\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    const data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name'},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age', width: 200},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', ellipsis: 'true'}\r
    ])\r
    return{\r
      data, columns\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u7D27\u51D1\u578B "}const Hy=p("h4",null,"\u4E24\u79CD\u7D27\u51D1\u578B\u7684\u5217\u8868\uFF0C\u5C0F\u578B\u5217\u8868\u53EA\u7528\u4E8E\u5BF9\u8BDD\u6846\u5185\u3002",-1),jy=p("h5",null,"Middle size table",-1),Uy=p("h5",null,"Small size table",-1);function Wy(e,n,r,t,u,s){const o=_("MqTable");return d(),f(k,null,[Hy,jy,l(o,{size:"middle",columns:t.columns,"data-source":t.data},null,8,["columns","data-source"]),Uy,l(o,{size:"small",columns:t.columns,"data-source":t.data},null,8,["columns","data-source"])],64)}typeof cu=="function"&&cu(os);const Qy=v(os,[["render",Wy]]),rs={name:"Table1.demo.vue",components:{MqTable:ye},setup(){const e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]),n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name",fixed:"left",width:100},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",width:1500},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",ellipsis:"true",width:300}]),r=M(()=>{let t=0;return e.forEach(({age:u})=>{t+=u}),{totalAge:t}});return{data:e,columns:n,totals:r}}};function du(e){e.__sourceCode=`<template>\r
  <h4>\u5C06 show-summary \u8BBE\u7F6E\u4E3Atrue\u5C31\u4F1A\u5728\u8868\u683C\u5C3E\u90E8\u5C55\u793A\u5408\u8BA1\u884C\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u4E8E\u5408\u8BA1\u884C\uFF0C\u7B2C\u4E00\u5217\u4E0D\u8FDB\u884C\u6570\u636E\u6C42\u5408\u64CD\u4F5C\uFF0C\u800C\u662F\u663E\u793A\u300C\u5408\u8BA1\u300D\u4E8C\u5B57\uFF08\u53EF\u901A\u8FC7sum-text\u914D\u7F6E\uFF09\uFF0C\u5176\u4F59\u5217\u4F1A\u5C06\u672C\u5217\u6240\u6709\u6570\u503C\u8FDB\u884C\u6C42\u5408\u64CD\u4F5C\uFF0C\u5E76\u663E\u793A\u51FA\u6765\u3002</h4>\r
  <MqTable show-summary :columns="columns" :data-source="data">\r
  </MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {computed, reactive} from 'vue';\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    const data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name', fixed: 'left', width: 100},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age', width: 1500},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', ellipsis: 'true', width: 300}\r
    ])\r
    const totals = computed(() => {\r
      let totalAge = 0;\r
\r
      data.forEach(({ age }) => {\r
        totalAge += age;\r
      });\r
      return { totalAge };\r
    })\r
    return{\r
      data, columns, totals\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u8868\u5C3E\u5408\u8BA1\u884C "}const Ky=p("h4",null,"\u5C06 show-summary \u8BBE\u7F6E\u4E3Atrue\u5C31\u4F1A\u5728\u8868\u683C\u5C3E\u90E8\u5C55\u793A\u5408\u8BA1\u884C\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u4E8E\u5408\u8BA1\u884C\uFF0C\u7B2C\u4E00\u5217\u4E0D\u8FDB\u884C\u6570\u636E\u6C42\u5408\u64CD\u4F5C\uFF0C\u800C\u662F\u663E\u793A\u300C\u5408\u8BA1\u300D\u4E8C\u5B57\uFF08\u53EF\u901A\u8FC7sum-text\u914D\u7F6E\uFF09\uFF0C\u5176\u4F59\u5217\u4F1A\u5C06\u672C\u5217\u6240\u6709\u6570\u503C\u8FDB\u884C\u6C42\u5408\u64CD\u4F5C\uFF0C\u5E76\u663E\u793A\u51FA\u6765\u3002",-1);function Zy(e,n,r,t,u,s){const o=_("MqTable");return d(),f(k,null,[Ky,l(o,{"show-summary":"",columns:t.columns,"data-source":t.data},null,8,["columns","data-source"])],64)}typeof du=="function"&&du(rs);const Yy=v(rs,[["render",Zy]]),us={name:"Table1.demo.vue",components:{MqTable:ye},setup(){const e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"5",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]),n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",ellipsis:!0}]);return{data:e,columns:n}}};function pu(e){e.__sourceCode=`<template>\r
  <h4>\u8BBE\u7F6E column.ellipsis \u53EF\u4EE5\u8BA9\u5355\u5143\u683C\u5185\u5BB9\u6839\u636E\u5BBD\u5EA6\u81EA\u52A8\u7701\u7565\u3002</h4>\r
  <MqTable :columns="columns" :data-source="data"></MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {reactive} from 'vue';\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    const data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '5', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name'},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age'},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', ellipsis: true}\r
    ])\r
    return{\r
      data, columns\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5355\u5143\u683C\u81EA\u52A8\u7701\u7565 "}const Xy=p("h4",null,"\u8BBE\u7F6E column.ellipsis \u53EF\u4EE5\u8BA9\u5355\u5143\u683C\u5185\u5BB9\u6839\u636E\u5BBD\u5EA6\u81EA\u52A8\u7701\u7565\u3002",-1);function Jy(e,n,r,t,u,s){const o=_("MqTable");return d(),f(k,null,[Xy,l(o,{columns:t.columns,"data-source":t.data},null,8,["columns","data-source"])],64)}typeof pu=="function"&&pu(us);const e8=v(us,[["render",Jy]]),as={name:"Table1.demo.vue",components:{MqTable:ye},setup(){const e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]),n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",ellipsis:"true"}]);return{data:e,columns:n}}};function mu(e){e.__sourceCode=`<template>\r
  <h4>\u6DFB\u52A0\u8868\u683C\u8FB9\u6846\u7EBF\uFF0C\u9875\u5934\u548C\u9875\u811A\u3002</h4>\r
  <MqTable :columns="columns" :data-source="data" bordered>\r
    <template #title>Header</template>\r
    <template #footer>Footer</template>\r
  </MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {reactive} from 'vue';\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    const data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',}\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name'},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age'},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', ellipsis: 'true'}\r
    ])\r
    return{\r
      data, columns\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u5E26\u8FB9\u6846 "}const n8=p("h4",null,"\u6DFB\u52A0\u8868\u683C\u8FB9\u6846\u7EBF\uFF0C\u9875\u5934\u548C\u9875\u811A\u3002",-1),t8=h("Header"),o8=h("Footer");function r8(e,n,r,t,u,s){const o=_("MqTable");return d(),f(k,null,[n8,l(o,{columns:t.columns,"data-source":t.data,bordered:""},{title:c(()=>[t8]),footer:c(()=>[o8]),_:1},8,["columns","data-source"])],64)}typeof mu=="function"&&mu(as);const u8=v(as,[["render",r8]]),ls={name:"Table1.demo.vue",components:{MqTable:ye},setup(){const e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"5",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"6",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"7",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"8",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]),n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",ellipsis:!0}]);return{data:e,columns:n}}};function fu(e){e.__sourceCode=`<template>\r
  <h4>\u7EB5\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u8868\u5934\u3002\r
\r
    \u53EA\u8981\u5728 table \u5143\u7D20\u4E2D\u5B9A\u4E49\u4E86 height \u5C5E\u6027\uFF0C\u5373\u53EF\u5B9E\u73B0\u56FA\u5B9A\u8868\u5934\u7684\u8868\u683C\uFF0C\u800C\u4E0D\u9700\u8981\u989D\u5916\u7684\u4EE3\u7801\u3002</h4>\r
  <MqTable :columns="columns" :height="200" :data-source="data"></MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {reactive} from 'vue';\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    const data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '5', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '6', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '7', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '8', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name'},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age'},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', ellipsis: true}\r
    ])\r
    return{\r
      data, columns\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u56FA\u5B9A\u8868\u5934 "}const a8=p("h4",null,"\u7EB5\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u8868\u5934\u3002 \u53EA\u8981\u5728 table \u5143\u7D20\u4E2D\u5B9A\u4E49\u4E86 height \u5C5E\u6027\uFF0C\u5373\u53EF\u5B9E\u73B0\u56FA\u5B9A\u8868\u5934\u7684\u8868\u683C\uFF0C\u800C\u4E0D\u9700\u8981\u989D\u5916\u7684\u4EE3\u7801\u3002",-1);function l8(e,n,r,t,u,s){const o=_("MqTable");return d(),f(k,null,[a8,l(o,{columns:t.columns,height:200,"data-source":t.data},null,8,["columns","data-source"])],64)}typeof fu=="function"&&fu(ls);const s8=v(ls,[["render",l8]]),ss={name:"Table1.demo.vue",components:{MqTable:ye},setup(){const e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]),n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name",width:400,fixed:"left"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",width:1500},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",width:1e3,fixed:"right"}]);return{data:e,columns:n}}};function _u(e){e.__sourceCode=`<template>\r
  <h4>\u6A2A\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u5217\u3002\r
\r
    \u56FA\u5B9A\u5217\u9700\u8981\u4F7F\u7528 fixed \u5C5E\u6027\uFF0C\u5B83\u63A5\u53D7 Boolean \u503C\u3002 \u5982\u679C\u4E3A true, \u5217\u5C06\u88AB\u5DE6\u4FA7\u56FA\u5B9A. \u5B83\u8FD8\u63A5\u53D7\u4F20\u5165\u5B57\u7B26\u4E32\uFF0Cleft \u6216 right\uFF0C\u8868\u793A\u5DE6\u8FB9\u56FA\u5B9A\u8FD8\u662F\u53F3\u8FB9\u56FA\u5B9A\u3002</h4>\r
  <MqTable :columns="columns" :data-source="data">\r
  </MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {reactive} from 'vue';\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    const data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',}\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name', width: 400, fixed: 'left'},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age', width: 1500},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', width: 1000, fixed: 'right'}\r
    ])\r
    return{\r
      data, columns\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u56FA\u5B9A\u5217 "}const i8=p("h4",null,"\u6A2A\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u5217\u3002 \u56FA\u5B9A\u5217\u9700\u8981\u4F7F\u7528 fixed \u5C5E\u6027\uFF0C\u5B83\u63A5\u53D7 Boolean \u503C\u3002 \u5982\u679C\u4E3A true, \u5217\u5C06\u88AB\u5DE6\u4FA7\u56FA\u5B9A. \u5B83\u8FD8\u63A5\u53D7\u4F20\u5165\u5B57\u7B26\u4E32\uFF0Cleft \u6216 right\uFF0C\u8868\u793A\u5DE6\u8FB9\u56FA\u5B9A\u8FD8\u662F\u53F3\u8FB9\u56FA\u5B9A\u3002",-1);function c8(e,n,r,t,u,s){const o=_("MqTable");return d(),f(k,null,[i8,l(o,{columns:t.columns,"data-source":t.data},null,8,["columns","data-source"])],64)}typeof _u=="function"&&_u(ss);const d8=v(ss,[["render",c8]]),is={name:"Table1.demo.vue",components:{MqTable:ye},setup(){let e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]);const n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",width:80},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",ellipsis:"true"},{title:"\u64CD\u4F5C",dataIndex:"action",key:"action"}]),r=s=>{const o=e.findIndex(a=>a.key===s);o>=0&&e.splice(o,1)};let t=A(e.length);return{data:e,columns:n,clickHandle:r,addHandle:()=>{t.value++;const s={key:`${t.value}`,name:"hahaha",age:32,address:`London, Park Lane no. ${t.value}`};e.push(s)}}}};function hu(e){e.__sourceCode=`<template>\r
  <h4>\u5BF9\u5355\u5143\u683C\u8FDB\u884C\u81EA\u5B9A\u4E49\u64CD\u4F5C</h4>\r
  <MqButton @click="addHandle">add</MqButton>\r
  <MqTable :columns="columns" :data-source="data">\r
    <template #bodyCell="{ column, text, record, index }">\r
      <template v-if="column.dataIndex === 'name'">\r
        <MqTag>{{ text }}</MqTag>\r
      </template>\r
      <template v-else-if="column.dataIndex === 'action'">\r
        <MqLink type="primary" :underline="false" theme="link" @click="clickHandle(index)">\u5220\u9664</MqLink>\r
      </template>\r
      <template v-else>\r
        {{ text }}\r
      </template>\r
    </template>\r
  </MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {reactive, ref} from 'vue';\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    let data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name'},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age', width: 80},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', ellipsis: 'true'},\r
      {title: '\u64CD\u4F5C', dataIndex: 'action', key: 'action'}\r
    ])\r
    const clickHandle = (index: string) => {\r
      const idx: number = data.findIndex(item => item.key === index)\r
      if (idx >= 0) data.splice(idx, 1)\r
    }\r
    let count = ref(data.length)\r
    const addHandle = () => {\r
      count.value++\r
      const newData = {\r
        key: \`\${count.value}\`,\r
        name: 'hahaha',\r
        age: 32,\r
        address: \`London, Park Lane no. \${count.value}\`\r
      }\r
      data.push(newData)\r
    }\r
    return{\r
      data, columns, clickHandle, addHandle\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u5355\u5143\u683C "}const p8=p("h4",null,"\u5BF9\u5355\u5143\u683C\u8FDB\u884C\u81EA\u5B9A\u4E49\u64CD\u4F5C",-1),m8=h("add"),f8=h("\u5220\u9664");function _8(e,n,r,t,u,s){const o=_("MqButton"),a=_("MqTag"),i=_("MqLink"),g=_("MqTable");return d(),f(k,null,[p8,l(o,{onClick:t.addHandle},{default:c(()=>[m8]),_:1},8,["onClick"]),l(g,{columns:t.columns,"data-source":t.data},{bodyCell:c(({column:m,text:b,record:y,index:$})=>[m.dataIndex==="name"?(d(),w(a,{key:0},{default:c(()=>[h(L(b),1)]),_:2},1024)):m.dataIndex==="action"?(d(),w(i,{key:1,type:"primary",underline:!1,theme:"link",onClick:I=>t.clickHandle($)},{default:c(()=>[f8]),_:2},1032,["onClick"])):(d(),f(k,{key:2},[h(L(b),1)],64))]),_:1},8,["columns","data-source"])],64)}typeof hu=="function"&&hu(is);const h8=v(is,[["render",_8]]),cs={name:"Table1.demo.vue",components:{MqTable:ye},setup(){let e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]);const n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",width:80},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",ellipsis:"true"},{title:"\u64CD\u4F5C",dataIndex:"action",key:"action"}]),r=s=>{const o=e.findIndex(a=>a.key===s);o>=0&&e.splice(o,1)};let t=A(e.length);return{data:e,columns:n,clickHandle:r,addHandle:()=>{t.value+=1;const s={key:`${t.value}`,name:"hahaha",age:32,address:`London, Park Lane no. ${t.value}`};e.push(s)}}}};function gu(e){e.__sourceCode=`<template>\r
  <h4>\u5F53\u6570\u636E\u91CF\u52A8\u6001\u53D8\u5316\u65F6\uFF0C\u53EF\u4EE5\u4E3A Table \u8BBE\u7F6E\u4E00\u4E2A\u6700\u5927\u9AD8\u5EA6\u3002\r
\r
    \u901A\u8FC7\u8BBE\u7F6E max-height \u5C5E\u6027\u6307\u5B9A\u6700\u5927\u9AD8\u5EA6\u3002 \u6B64\u65F6\u82E5\u8868\u683C\u6240\u9700\u7684\u9AD8\u5EA6\u5927\u4E8E\u6700\u5927\u9AD8\u5EA6\uFF0C\u5219\u4F1A\u663E\u793A\u4E00\u4E2A\u6EDA\u52A8\u6761\u3002</h4>\r
  <MqButton @click="addHandle">add</MqButton>\r
  <MqTable :max-height="300" :columns="columns" :data-source="data">\r
    <template #bodyCell="{ column, text, record, index }">\r
      <template v-if="column.dataIndex === 'name'">\r
        <MqTag>{{ text }}</MqTag>\r
      </template>\r
      <template v-else-if="column.dataIndex === 'action'">\r
        <MqLink type="primary" :underline="false" theme="link" @click="clickHandle(index)">\u5220\u9664</MqLink>\r
      </template>\r
      <template v-else>\r
        {{ text }}\r
      </template>\r
    </template>\r
  </MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {reactive, ref} from 'vue';\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    let data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name'},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age', width: 80},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', ellipsis: 'true'},\r
      {title: '\u64CD\u4F5C', dataIndex: 'action', key: 'action'}\r
    ])\r
    const clickHandle = (index: string) => {\r
      const idx: number = data.findIndex(item => item.key === index)\r
      if (idx >= 0) data.splice(idx, 1)\r
    }\r
    let count = ref(data.length)\r
    const addHandle = () => {\r
      count.value += 1\r
      const newData = {\r
        key: \`\${count.value}\`,\r
        name: 'hahaha',\r
        age: 32,\r
        address: \`London, Park Lane no. \${count.value}\`\r
      }\r
      data.push(newData)\r
    }\r
    return{\r
      data, columns, clickHandle, addHandle\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u6D41\u4F53\u9AD8\u5EA6 "}const g8=p("h4",null,"\u5F53\u6570\u636E\u91CF\u52A8\u6001\u53D8\u5316\u65F6\uFF0C\u53EF\u4EE5\u4E3A Table \u8BBE\u7F6E\u4E00\u4E2A\u6700\u5927\u9AD8\u5EA6\u3002 \u901A\u8FC7\u8BBE\u7F6E max-height \u5C5E\u6027\u6307\u5B9A\u6700\u5927\u9AD8\u5EA6\u3002 \u6B64\u65F6\u82E5\u8868\u683C\u6240\u9700\u7684\u9AD8\u5EA6\u5927\u4E8E\u6700\u5927\u9AD8\u5EA6\uFF0C\u5219\u4F1A\u663E\u793A\u4E00\u4E2A\u6EDA\u52A8\u6761\u3002",-1),v8=h("add"),E8=h("\u5220\u9664");function b8(e,n,r,t,u,s){const o=_("MqButton"),a=_("MqTag"),i=_("MqLink"),g=_("MqTable");return d(),f(k,null,[g8,l(o,{onClick:t.addHandle},{default:c(()=>[v8]),_:1},8,["onClick"]),l(g,{"max-height":300,columns:t.columns,"data-source":t.data},{bodyCell:c(({column:m,text:b,record:y,index:$})=>[m.dataIndex==="name"?(d(),w(a,{key:0},{default:c(()=>[h(L(b),1)]),_:2},1024)):m.dataIndex==="action"?(d(),w(i,{key:1,type:"primary",underline:!1,theme:"link",onClick:I=>t.clickHandle($)},{default:c(()=>[E8]),_:2},1032,["onClick"])):(d(),f(k,{key:2},[h(L(b),1)],64))]),_:1},8,["columns","data-source"])],64)}typeof gu=="function"&&gu(cs);const y8=v(cs,[["render",b8]]),ds={name:"Table1.demo.vue",components:{MqTable:ye},setup(){const e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:35,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:47,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]),n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",width:200,defaultSortOrder:"descend",sort:(r,t)=>r.age-t.age},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",ellipsis:"true",sort:(r,t)=>r.address.length-t.address.length}]);return{data:e,columns:n}}};function vu(e){e.__sourceCode=`<template>\r
  <h4>\u5BF9\u67D0\u4E00\u5217\u6570\u636E\u8FDB\u884C\u6392\u5E8F\uFF0C\u901A\u8FC7\u6307\u5B9A\u5217\u7684 sort \u51FD\u6570\u5373\u53EF\u542F\u52A8\u6392\u5E8F\u6309\u94AE\u3002<code>sort: function(rowA, rowB) { ... }</code>\uFF0C rowA\u3001rowB \u4E3A\u6BD4\u8F83\u7684\u4E24\u4E2A\u884C\u6570\u636E\u3002</h4>\r
  <MqTable :columns="columns" :data-source="data"></MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {reactive} from 'vue';\r
type TableDataType = {\r
  key: string;\r
  name: string;\r
  age: number;\r
  address: string;\r
};\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    const data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 35, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 47, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name'},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age', width: 200, defaultSortOrder: 'descend',sort: (a:TableDataType ,b: TableDataType) => a.age - b.age},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', ellipsis: 'true',sort: (a:TableDataType ,b: TableDataType) => a.address.length - b.address.length}\r
    ])\r
    return{\r
      data, columns\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u53EF\u6392\u5E8F "}const C8=p("h4",null,[h("\u5BF9\u67D0\u4E00\u5217\u6570\u636E\u8FDB\u884C\u6392\u5E8F\uFF0C\u901A\u8FC7\u6307\u5B9A\u5217\u7684 sort \u51FD\u6570\u5373\u53EF\u542F\u52A8\u6392\u5E8F\u6309\u94AE\u3002"),p("code",null,"sort: function(rowA, rowB) { ... }"),h("\uFF0C rowA\u3001rowB \u4E3A\u6BD4\u8F83\u7684\u4E24\u4E2A\u884C\u6570\u636E\u3002")],-1);function $8(e,n,r,t,u,s){const o=_("MqTable");return d(),f(k,null,[C8,l(o,{columns:t.columns,"data-source":t.data},null,8,["columns","data-source"])],64)}typeof vu=="function"&&vu(ds);const F8=v(ds,[["render",$8]]),ps={name:"Table1.demo.vue",components:{MqTable:ye},setup(){let e=U([{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}]);const n=U([{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",width:80},{title:"\u4F4F\u5740",dataIndex:"address",key:"address",ellipsis:"true"},{title:"\u64CD\u4F5C",dataIndex:"action",key:"action"}]);return{data:e,columns:n,clickHandle:t=>{const u=e.findIndex(s=>s.key===t);u>=0&&e.splice(u,1)}}}};function Eu(e){e.__sourceCode=`<template>\r
  <h4>\u5BF9\u8868\u5934\u8FDB\u884C\u81EA\u5B9A\u4E49\u64CD\u4F5C</h4>\r
  <MqTable :columns="columns" :data-source="data">\r
    <template #headerCell="{ title, column }">\r
      <template v-if="column.dataIndex === 'name'">\r
        {{ title }}\r
        <MqIcon>\r
          <UserFilled />\r
        </MqIcon>\r
      </template>\r
      <template v-else-if="column.dataIndex === 'action'">\r
        <MqInput />\r
      </template>\r
      <template v-else>\r
        {{ title }}\r
      </template>\r
    </template>\r
    <template #bodyCell="{ column, text, record, index }">\r
      <template v-if="column.dataIndex === 'name'">\r
        <MqTag>{{ text }}</MqTag>\r
      </template>\r
      <template v-else-if="column.dataIndex === 'action'">\r
        <MqLink type="primary" :underline="false" theme="link" @click="clickHandle(index)">\u5220\u9664</MqLink>\r
      </template>\r
      <template v-else>\r
        {{ text }}\r
      </template>\r
    </template>\r
  </MqTable>\r
</template>\r
\r
<script lang="ts">\r
import MqTable from '../../../lib/MqTable.vue';\r
import {reactive, ref} from 'vue';\r
export default {\r
  name: 'Table1.demo.vue',\r
  components: {\r
    MqTable\r
  },\r
  setup() {\r
    let data = reactive([\r
      {key: '1', name: '\u80E1\u5F66\u658C', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '2', name: '\u80E1\u5F66\u7956', age: 32, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '3', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
      {key: '4', name: '\u80E1\u5F66\u7956', age: 42, address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',},\r
    ])\r
    const columns = reactive([\r
      {title: '\u59D3\u540D', dataIndex: 'name', key: 'name'},\r
      {title: '\u5E74\u9F84', dataIndex: 'age', key: 'age', width: 80},\r
      {title: '\u4F4F\u5740', dataIndex: 'address', key: 'address', ellipsis: 'true'},\r
      {title: '\u64CD\u4F5C', dataIndex: 'action', key: 'action'}\r
    ])\r
    const clickHandle = (index: string) => {\r
      const idx: number = data.findIndex(item => item.key === index)\r
      if (idx >= 0) data.splice(idx, 1)\r
    }\r
    return{\r
      data, columns, clickHandle\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u8868\u5934 "}const k8=p("h4",null,"\u5BF9\u8868\u5934\u8FDB\u884C\u81EA\u5B9A\u4E49\u64CD\u4F5C",-1),B8=h("\u5220\u9664");function D8(e,n,r,t,u,s){const o=_("UserFilled"),a=_("MqIcon"),i=_("MqInput"),g=_("MqTag"),m=_("MqLink"),b=_("MqTable");return d(),f(k,null,[k8,l(b,{columns:t.columns,"data-source":t.data},{headerCell:c(({title:y,column:$})=>[$.dataIndex==="name"?(d(),f(k,{key:0},[h(L(y)+" ",1),l(a,null,{default:c(()=>[l(o)]),_:1})],64)):$.dataIndex==="action"?(d(),w(i,{key:1})):(d(),f(k,{key:2},[h(L(y),1)],64))]),bodyCell:c(({column:y,text:$,record:I,index:q})=>[y.dataIndex==="name"?(d(),w(g,{key:0},{default:c(()=>[h(L($),1)]),_:2},1024)):y.dataIndex==="action"?(d(),w(m,{key:1,type:"primary",underline:!1,theme:"link",onClick:C=>t.clickHandle(q)},{default:c(()=>[B8]),_:2},1032,["onClick"])):(d(),f(k,{key:2},[h(L($),1)],64))]),_:1},8,["columns","data-source"])],64)}typeof Eu=="function"&&Eu(ps);const A8=v(ps,[["render",D8]]),x8={name:"TableDemo",components:{Demo:ne},setup(){Q(()=>{te()});const e=U([{key:"1",attr:"bordered",describe:"\u662F\u5426\u5C55\u793A\u5916\u8FB9\u6846\u548C\u5217\u8FB9\u6846",type:"boolean",default:!1},{key:"2",attr:"columns",describe:"\u8868\u683C\u7684\u5217\u914D\u7F6E, \u5177\u4F53\u9879\u89C1\u4E0B\u8868",type:"array",default:"-"},{key:"3",attr:"dataSource",describe:"\u6570\u636E\u6570\u7EC4",type:"object[]",default:"-"},{key:"4",attr:"footer",describe:"\u8868\u683C\u5C3E\u90E8",type:'Function(currentPageData)|v-slot:footer="currentPageData"',default:"-"},{key:"5",attr:"header",describe:"\u8868\u683C\u5934\u90E8",type:'Function(currentPageData)|v-slot:header="currentPageData"',default:"-"},{key:"6",attr:"height",describe:"Table \u7684\u9AD8\u5EA6\uFF0C \u9ED8\u8BA4\u4E3A\u81EA\u52A8\u9AD8\u5EA6",type:"string",default:"-"},{key:"7",attr:"bodyCell",describe:"\u4E2A\u6027\u5316\u5355\u5143\u683C",type:'v-slot:bodyCell="{text, record, index, column}"',default:"-"},{key:"8",attr:"rowClassName",describe:"\u8868\u683C\u884C\u7684\u7C7B\u540D",type:'Function(record, index):string"',default:"-"},{key:"9",attr:"size",describe:"\u8868\u683C\u5927\u5C0F",type:'normal | middle | small"',default:"normal"},{key:"10",attr:"showSummary",describe:"\u662F\u5426\u5C55\u793A\u5408\u8BA1",type:"boolean",default:"false"},{key:"11",attr:"sumText",describe:"\u5408\u8BA1\u884C\u7684\u5C55\u793A\u6807\u9898",type:"string",default:"\u5408\u8BA1"}]),n=U([{title:"\u53C2\u6570",dataIndex:"attr",key:"attr"},{title:"\u8BF4\u660E",dataIndex:"describe",key:"describe"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",dataIndex:"default",key:"default"}]),r=U([{title:"\u53C2\u6570",dataIndex:"attr",key:"attr"},{title:"\u8BF4\u660E",dataIndex:"describe",key:"describe"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",dataIndex:"default",key:"default"}]),t=U([{key:"1",attr:"width",describe:"\u5217\u5BBD\u5EA6",type:"number",default:"-"},{key:"2",attr:"ellipsis",describe:"\u8D85\u8FC7\u5BBD\u5EA6\u5C06\u81EA\u52A8\u7701\u7565",type:"boolean",default:"false"},{key:"3",attr:"fixed",describe:"\u5217\u662F\u5426\u56FA\u5B9A\uFF0C\u53EF\u9009 true(\u7B49\u6548\u4E8E left) 'left' 'right'",type:"boolean|string",default:"false"},{key:"4",attr:"sort",describe:"\u6392\u5E8F\u51FD\u6570\uFF0C\u672C\u5730\u6392\u5E8F\u4F7F\u7528\u4E00\u4E2A\u51FD\u6570(\u53C2\u8003 Array.sort \u7684 compareFunction)",type:"Function",default:"-"}]);return{Table1Demo:Ly,Table2Demo:e8,Table3Demo:u8,Table4Demo:s8,Table5Demo:d8,Table6Demo:h8,Table7Demo:y8,Table8Demo:F8,Table9Demo:A8,Table10Demo:zy,Table11Demo:Qy,Table12Demo:Yy,data:e,columns:n,columns1:r,data1:t}}},q8=p("h1",null,"Table \u7EC4\u4EF6\u793A\u4F8B ",-1),w8=p("h2",null,"\u53C2\u6570",-1),I8=p("h2",null,"Column",-1);function T8(e,n,r,t,u,s){const o=_("Demo"),a=_("MqTable");return d(),f(k,null,[q8,l(o,{component:t.Table1Demo},null,8,["component"]),l(o,{component:t.Table3Demo},null,8,["component"]),l(o,{component:t.Table2Demo},null,8,["component"]),l(o,{component:t.Table4Demo},null,8,["component"]),l(o,{component:t.Table5Demo},null,8,["component"]),l(o,{component:t.Table6Demo},null,8,["component"]),l(o,{component:t.Table9Demo},null,8,["component"]),l(o,{component:t.Table7Demo},null,8,["component"]),l(o,{component:t.Table8Demo},null,8,["component"]),l(o,{component:t.Table10Demo},null,8,["component"]),l(o,{component:t.Table11Demo},null,8,["component"]),l(o,{component:t.Table12Demo},null,8,["component"]),l(a,{columns:t.columns,"data-source":t.data,bordered:""},{title:c(()=>[w8]),_:1},8,["columns","data-source"]),l(a,{style:{"margin-top":"20px"},columns:t.columns1,"data-source":t.data1,bordered:""},{title:c(()=>[I8]),_:1},8,["columns","data-source"])],64)}const M8=v(x8,[["render",T8]]),S8={props:{content:{type:String,required:!0}}},V8=["innerHTML"];function R8(e,n,r,t,u,s){return d(),f("article",{class:"markdown-body",innerHTML:r.content},null,8,V8)}const ms=v(S8,[["render",R8]]),P8=`<h1 id="\u4ECB\u7ECD">\u4ECB\u7ECD</h1>
<p>mmq-ui \u662F\u4E00\u6B3E\u57FA\u4E8E Vue 3 \u548C TypeScript \u7684 UI \u7EC4\u4EF6\u5E93\u3002</p>
<p>\u8FD9\u6B3E\u7EC4\u4EF6\u5E93\u5176\u5B9E\u662F\u6211\u4E3A\u4E86\u603B\u7ED3\u81EA\u5DF1\u76EE\u524D\u638C\u63E1\u7684\u6280\u672F\u6808\u800C\u5199\u7684\uFF0C\u80FD\u81EA\u5DF1\u5199\u5C31\u81EA\u5DF1\u5199\uFF0C\u5C3D\u91CF\u4E0D\u91C7\u7528\u7B2C\u4E09\u65B9\u5E93\uFF0C\u5305\u62EC\u4F60\u73B0\u5728\u770B\u5230\u7684\u8FD9\u4E2A\u5B98\u7F51\u3002</p>
<h2 id="\u6D4F\u89C8\u5668\u652F\u6301">\u6D4F\u89C8\u5668\u652F\u6301</h2>
<table>
<thead>
<tr>
<th><img src="https://camo.githubusercontent.com/6521b3b065ddba8c8378e7c1e4e2da7090548ce61384e99111dd17ca93d47c3b/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f617263686976652f696e7465726e65742d6578706c6f7265725f372d382f696e7465726e65742d6578706c6f7265725f372d385f34387834382e706e67" alt="IE"></th>
<th><img src="https://camo.githubusercontent.com/b9d103cc69d7a8dc55248c732a7aeb55c1f79e665c76bf523b431db262f0808d/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f656467652f656467655f34387834382e706e67" alt="Edge"></th>
<th><img src="https://camo.githubusercontent.com/1d440f4ffad2f6a8df0e532493cd225964bc8624cb0956171be0717dc4fbce64/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f6368726f6d652f6368726f6d655f34387834382e706e67" alt="Chrome"></th>
<th><img src="https://camo.githubusercontent.com/b2a1e5b90d591dfbf5dfa425c0d60d80aa3590d22ace3408cfb36d935808bb69/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f66697265666f782f66697265666f785f34387834382e706e67" alt="Firefox"></th>
<th><img src="https://camo.githubusercontent.com/8663fa4d6a0533eac6da67e2bbfaee3cc1ee6644454a88b21bf31f8196bb0d2f/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f6f706572612f6f706572615f34387834382e706e67" alt="Opera"></th>
<th><img src="https://camo.githubusercontent.com/8d37441ff74dfc50881abae7596a28677bba4617631eccf2143e9559906a81de/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f7361666172692f7361666172695f34387834382e706e67" alt="Safari"></th>
</tr>
</thead>
<tbody><tr>
<td>7+ \u2714</td>
<td>Latest \u2714</td>
<td>Latest \u2714</td>
<td>Latest \u2714</td>
<td>Latest \u2714</td>
<td>6+ \u2714</td>
</tr>
</tbody></table>
<h2 id="\u5B89\u88C5">\u5B89\u88C5</h2>
<pre><code>npm install mmq-ui
yarn install mmq-ui
pnpm install mmq-ui</code></pre>
<h2 id="\u5BFC\u5165\u4F7F\u7528">\u5BFC\u5165\u4F7F\u7528</h2>
<pre><code>import &#39;mmq-ui/dist/lib/mmqUI.css&#39;
import {MqButton, MqTag, MqDialog} from &#39;mmq-ui&#39;
&lt;template&gt;
&lt;div&gt;
&lt;Button&gt;\u6309\u94AE&lt;/Button&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Switch, Dialog} from &quot;mmq-ui&quot;
  export default {
  components: {Button}
}
&lt;/script&gt;</code></pre>
<h3 id="\u6309\u9700\u5BFC\u5165">\u6309\u9700\u5BFC\u5165</h3>
<p>\u8FD9\u6837\u6309\u9700\u5F15\u5165\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u4F7F\u4F53\u79EF\u8FBE\u5230\u6700\u5C0F</p>
<pre><code>import &#39;mmq-ui/dist/lib/mmqUI.css&#39;
import {MqButton, MqTag, MqDialog} from &#39;mmq-ui&#39;
&lt;template&gt;
&lt;div&gt;
&lt;Button&gt;\u6309\u94AE&lt;/Button&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Switch, Dialog} from &quot;mmq-ui&quot;
  export default {
  components: {Button}
}
&lt;/script&gt;</code></pre>
<h3 id="\u5B8C\u6574\u5BFC\u5165">\u5B8C\u6574\u5BFC\u5165</h3>
<p>\u5982\u679C\u4F60\u5BF9\u6253\u5305\u540E\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u662F\u5F88\u5728\u4E4E\uFF0C\u90A3\u4E48\u4F7F\u7528\u5B8C\u6574\u5BFC\u5165\u4F1A\u66F4\u65B9\u4FBF\u3002</p>
<pre><code>\u5728\u9879\u76EE\u7684main.ts\u4E2D
import &#39;mmq-ui/dist/lib/mmqUI.css&#39;
import mmqUI from &#39;./lib&#39;
const app = createApp(App);
app.use(mmqUI)</code></pre>
<p>\u7136\u540E\u5373\u53EF\u76F4\u63A5\u4F7F\u7528</p>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/install">\u5B89\u88C5</a></p>
`,L8=`<h1 id="\u5B89\u88C5">\u5B89\u88C5</h1>
<h2 id="\u7248\u672C">\u7248\u672C</h2>
<p>MMq-UI \u76EE\u524D\u8FD8\u5904\u4E8E\u5FEB\u901F\u5F00\u53D1\u8FED\u4EE3\u4E2D, \u76EE\u524D\u5DF2\u7ECF\u53D1\u5E03\u7B2C\u4E00\u4E2A\u5927\u7248\u672C1.0.0\u3002</p>
<h2 id="\u4F7F\u7528\u5305\u7BA1\u7406\u5DE5\u5177">\u4F7F\u7528\u5305\u7BA1\u7406\u5DE5\u5177</h2>
<p>\u6253\u5F00\u7EC8\u7AEF\u8FD0\u884C\u4E0B\u5217\u547D\u4EE4\uFF1A</p>
<pre><code># npm
$ npm install mmq-ui</code></pre>
<p>\u6216</p>
<pre><code># Yarn
$ yarn add mmq-ui</code></pre>
<pre><code># pnpm
$ pnpm install mmq-ui</code></pre>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/get-started">\u5F00\u59CB\u4F7F\u7528</a></p>
`,O8=`<h1 id="\u5F00\u59CB\u4F7F\u7528">\u5F00\u59CB\u4F7F\u7528</h1>
<p>\u8BF7\u5148<a href="#/doc/install">\u5B89\u88C5</a>\u672C\u7EC4\u4EF6\u5E93\u3002</p>
<p>\u7136\u540E\u5728\u4F60\u7684\u4EE3\u7801\u4E2D\u5199\u5165\u4E0B\u9762\u7684\u4EE3\u7801</p>
<pre><code>import {MqButton, MqTag, MqDialog} from &#39;mmq-ui&#39;</code></pre>
<p>\u5C31\u53EF\u4EE5\u4F7F\u7528\u63D0\u4F9B\u7684\u7EC4\u4EF6\u4E86\u3002</p>
<h2 id="vue-\u5355\u6587\u4EF6\u7EC4\u4EF6">Vue \u5355\u6587\u4EF6\u7EC4\u4EF6</h2>
<p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p>
<pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Button&gt;\u6309\u94AE&lt;/Button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import {Button, Tabs, Switch, Dialog} from &quot;mmq-ui&quot;
export default {
  components: {Button}
}
&lt;/script&gt;</code></pre>
`,G8=Os(),st=e=>Re(ms,{content:e,key:e}),fs=Fi({history:G8,routes:[{path:"/",component:Ui},{path:"/doc",component:zc,children:[{path:"",redirect:"/doc/intro"},{path:"intro",component:st(P8)},{path:"get-started",component:st(O8)},{path:"install",component:st(L8)},{path:"switch",component:$d},{path:"button",component:Cp},{path:"dialog",component:Qp},{path:"tabs",component:vm},{path:"card",component:Lm},{path:"icon",component:sf},{path:"input",component:jf},{path:"inputNumber",component:C5},{path:"loading",component:L5},{path:"message",component:n1},{path:"collapse",component:N1},{path:"spread",component:e6},{path:"radio",component:_6},{path:"checkbox",component:P6},{path:"dropdown",component:X6},{path:"tooltip",component:O_},{path:"swiper",component:ch},{path:"sticky",component:Ch},{path:"grid",component:i0},{path:"image",component:D0},{path:"container",component:pg},{path:"link",component:Hg},{path:"tag",component:Ev},{path:"badge",component:jv},{path:"empty",component:N3},{path:"result",component:q2},{path:"breadcrumb",component:J2},{path:"skeleton",component:NE},{path:"alert",component:d7},{path:"form",component:Sb},{path:"backTop",component:zb},{path:"pagination",component:ey},{path:"select",component:Vy},{path:"table",component:M8}]}]}),N8={name:"App",setup(){const e=document.documentElement.clientWidth,n=A(!(e<=500));Ie("menuVisible",n),fs.afterEach(()=>{e<=500&&(n.value=!1)})}};function z8(e,n,r,t,u,s){const o=_("router-view");return d(),w(o)}const H8=v(N8,[["render",z8]]);const Vn=Wn(H8);Vn.use(Bb);Vn.use(fs);Vn.mount("#app");for(const[e,n]of Object.entries(Gn))Vn.component(e,n);Vn.component("Markdown",ms);

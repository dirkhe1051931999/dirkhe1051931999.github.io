(()=>{"use strict";var e,t,r,a,o,n,i={},l={};function d(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=i,e=[],d.O=(t,r,a,o)=>{if(!r){var n=1/0;for(c=0;c<e.length;c++){for(var[r,a,o]=e[c],i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(d.O).every((e=>d.O[e](r[l])))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var i=2&a&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,d.d(o,n),o},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+"."+{135:"f1129c27492d8c5e",356:"dc0deb48c0706cf0",678:"b7372ee79c3bce7b",847:"8802d85f63aba502"}[e]+".js",d.miniCssF=e=>{},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="angular-admin-template:",d.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var i,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==o+r){i=f;break}}i||(l=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",o+r),i.src=d.tu(e)),a[e]=[t];var s=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var o=a[e];if(delete a[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),d.tt=()=>(void 0===n&&(n={createScriptURL:e=>e},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(n=trustedTypes.createPolicy("angular#bundler",n))),n),d.tu=e=>d.tt().createScriptURL(e),d.p="",(()=>{var e={666:0};d.f.j=(t,r)=>{var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(666!=t){var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=d.p+d.u(t),i=new Error;d.l(n,(r=>{if(d.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+t,t)}else e[t]=0},d.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[n,i,l]=r,u=0;if(n.some((t=>0!==e[t]))){for(a in i)d.o(i,a)&&(d.m[a]=i[a]);if(l)var c=l(d)}for(t&&t(r);u<n.length;u++)o=n[u],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(c)},r=self.webpackChunkangular_admin_template=self.webpackChunkangular_admin_template||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
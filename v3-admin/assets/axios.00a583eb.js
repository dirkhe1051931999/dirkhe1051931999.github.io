function ue(e,t){return function(){return e.apply(t,arguments)}}const{toString:Y}=Object.prototype,{getPrototypeOf:j}=Object,k=(e=>t=>{const n=Y.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),S=e=>(e=e.toLowerCase(),t=>k(t)===e),B=e=>t=>typeof t===e,{isArray:x}=Array,L=B("undefined");function fe(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const G=S("ArrayBuffer");function le(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&G(e.buffer),t}const de=B("string"),A=B("function"),Z=B("number"),v=e=>e!==null&&typeof e=="object",pe=e=>e===!0||e===!1,F=e=>{if(k(e)!=="object")return!1;const t=j(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},he=S("Date"),me=S("File"),Ee=S("Blob"),ye=S("FileList"),we=e=>v(e)&&A(e.pipe),be=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Y.call(e)===t||A(e.toString)&&e.toString()===t)},Se=S("URLSearchParams"),Oe=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,s;if(typeof e!="object"&&(e=[e]),x(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),i=a.length;let u;for(r=0;r<i;r++)u=a[r],t.call(null,e[u],u,e)}}function U(){const e={},t=(n,r)=>{F(e[r])&&F(n)?e[r]=U(e[r],n):F(n)?e[r]=U({},n):x(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&D(arguments[n],t);return e}const Re=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,a)=>{n&&A(s)?e[a]=ue(s,n):e[a]=s},{allOwnKeys:r}),e),ge=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ae=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Te=(e,t,n,r)=>{let s,a,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),a=s.length;a-- >0;)i=s[a],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&j(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ne=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},xe=e=>{if(!e)return null;if(x(e))return e;let t=e.length;if(!Z(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ce=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&j(Uint8Array)),Fe=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const a=s.value;t.call(e,a[0],a[1])}},Pe=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Be=S("HTMLFormElement"),De=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),J=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Le=S("RegExp"),ee=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,a)=>{t(s,a,e)!==!1&&(r[a]=s)}),Object.defineProperties(e,r)},Ue=e=>{ee(e,(t,n)=>{const r=e[n];if(!!A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},_e=(e,t)=>{const n={},r=s=>{s.forEach(a=>{n[a]=!0})};return x(e)?r(e):r(String(e).split(t)),n},je=()=>{},ke=(e,t)=>(e=+e,Number.isFinite(e)?e:t);var o={isArray:x,isArrayBuffer:G,isBuffer:fe,isFormData:be,isArrayBufferView:le,isString:de,isNumber:Z,isBoolean:pe,isObject:v,isPlainObject:F,isUndefined:L,isDate:he,isFile:me,isBlob:Ee,isRegExp:Le,isFunction:A,isStream:we,isURLSearchParams:Se,isTypedArray:Ce,isFileList:ye,forEach:D,merge:U,extend:Re,trim:Oe,stripBOM:ge,inherits:Ae,toFlatObject:Te,kindOf:k,kindOfTest:S,endsWith:Ne,toArray:xe,forEachEntry:Fe,matchAll:Pe,isHTMLForm:Be,hasOwnProperty:J,hasOwnProp:J,reduceDescriptors:ee,freezeMethods:Ue,toObjectSet:_e,toCamelCase:De,noop:je,toFiniteNumber:ke};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}o.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const te=h.prototype,ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ne[e]={value:e}});Object.defineProperties(h,ne);Object.defineProperty(te,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,a)=>{const i=Object.create(te);return o.toFlatObject(e,i,function(l){return l!==Error.prototype},u=>u!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,a&&Object.assign(i,a),i};var He=typeof self=="object"?self.FormData:window.FormData;function _(e){return o.isPlainObject(e)||o.isArray(e)}function re(e){return o.endsWith(e,"[]")?e.slice(0,-2):e}function I(e,t,n){return e?e.concat(t).map(function(s,a){return s=re(s),!n&&a?"["+s+"]":s}).join(n?".":""):t}function Me(e){return o.isArray(e)&&!e.some(_)}const ze=o.toFlatObject(o,{},null,function(t){return/^is[A-Z]/.test(t)});function Je(e){return e&&o.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function H(e,t,n){if(!o.isObject(e))throw new TypeError("target must be an object");t=t||new(He||FormData),n=o.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,O){return!o.isUndefined(O[p])});const r=n.metaTokens,s=n.visitor||d,a=n.dots,i=n.indexes,l=(n.Blob||typeof Blob!="undefined"&&Blob)&&Je(t);if(!o.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(o.isDate(f))return f.toISOString();if(!l&&o.isBlob(f))throw new h("Blob is not supported. Use a Buffer instead.");return o.isArrayBuffer(f)||o.isTypedArray(f)?l&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function d(f,p,O){let w=f;if(f&&!O&&typeof f=="object"){if(o.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(o.isArray(f)&&Me(f)||o.isFileList(f)||o.endsWith(p,"[]")&&(w=o.toArray(f)))return p=re(p),w.forEach(function(C,ce){!(o.isUndefined(C)||C===null)&&t.append(i===!0?I([p],ce,a):i===null?p:p+"[]",c(C))}),!1}return _(f)?!0:(t.append(I(O,p,a),c(f)),!1)}const E=[],y=Object.assign(ze,{defaultVisitor:d,convertValue:c,isVisitable:_});function m(f,p){if(!o.isUndefined(f)){if(E.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));E.push(f),o.forEach(f,function(w,g){(!(o.isUndefined(w)||w===null)&&s.call(t,w,o.isString(g)?g.trim():g,p,y))===!0&&m(w,p?p.concat(g):[g])}),E.pop()}}if(!o.isObject(e))throw new TypeError("data must be an object");return m(e),t}function V(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function M(e,t){this._pairs=[],e&&H(e,this,t)}const se=M.prototype;se.append=function(t,n){this._pairs.push([t,n])};se.toString=function(t){const n=t?function(r){return t.call(this,r,V)}:V;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ie(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(e,t,n){if(!t)return e;const r=n&&n.encode||Ie,s=n&&n.serialize;let a;if(s?a=s(t,n):a=o.isURLSearchParams(t)?t.toString():new M(t,n).toString(r),a){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}var ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$e=typeof URLSearchParams!="undefined"?URLSearchParams:M,qe=FormData;const Ke=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})();var b={isBrowser:!0,classes:{URLSearchParams:$e,FormData:qe,Blob},isStandardBrowserEnv:Ke,protocols:["http","https","file","blob","url","data"]};function We(e,t){return H(e,new b.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,a){return b.isNode&&o.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function Xe(e){return o.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Qe(e){const t={},n=Object.keys(e);let r;const s=n.length;let a;for(r=0;r<s;r++)a=n[r],t[a]=e[a];return t}function Ye(e){function t(n,r,s,a){let i=n[a++];const u=Number.isFinite(+i),l=a>=n.length;return i=!i&&o.isArray(s)?s.length:i,l?(o.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!o.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],a)&&o.isArray(s[i])&&(s[i]=Qe(s[i])),!u)}if(o.isFormData(e)&&o.isFunction(e.entries)){const n={};return o.forEachEntry(e,(r,s)=>{t(Xe(r),s,n,0)}),n}return null}function Ge(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var Ze=b.isStandardBrowserEnv?function(){return{write:function(n,r,s,a,i,u){const l=[];l.push(n+"="+encodeURIComponent(r)),o.isNumber(s)&&l.push("expires="+new Date(s).toGMTString()),o.isString(a)&&l.push("path="+a),o.isString(i)&&l.push("domain="+i),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function ve(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function et(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function tt(e,t){return e&&!ve(t)?et(e,t):t}var nt=b.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(a){let i=a;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=o.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function oe(e,t,n){h.call(this,e==null?"canceled":e,h.ERR_CANCELED,t,n),this.name="CanceledError"}o.inherits(oe,h,{__CANCEL__:!0});function rt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const st=o.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var it=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&st[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const $=Symbol("internals"),ae=Symbol("defaults");function N(e){return e&&String(e).trim().toLowerCase()}function P(e){return e===!1||e==null?e:o.isArray(e)?e.map(P):String(e)}function ot(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function q(e,t,n,r){if(o.isFunction(r))return r.call(this,t,n);if(!!o.isString(t)){if(o.isString(r))return t.indexOf(r)!==-1;if(o.isRegExp(r))return r.test(t)}}function at(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ct(e,t){const n=o.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,a,i){return this[r].call(this,t,s,a,i)},configurable:!0})})}function T(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}function R(e,t){e&&this.set(e),this[ae]=t||null}Object.assign(R.prototype,{set:function(e,t,n){const r=this;function s(a,i,u){const l=N(i);if(!l)throw new Error("header name must be a non-empty string");const c=T(r,l);c&&u!==!0&&(r[c]===!1||u===!1)||(r[c||i]=P(a))}return o.isPlainObject(e)?o.forEach(e,(a,i)=>{s(a,i,t)}):s(t,e,n),this},get:function(e,t){if(e=N(e),!e)return;const n=T(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return ot(r);if(o.isFunction(t))return t.call(this,r,n);if(o.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=N(e),e){const n=T(this,e);return!!(n&&(!t||q(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function s(a){if(a=N(a),a){const i=T(n,a);i&&(!t||q(n,n[i],i,t))&&(delete n[i],r=!0)}}return o.isArray(e)?e.forEach(s):s(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return o.forEach(this,(r,s)=>{const a=T(n,s);if(a){t[a]=P(r),delete t[s];return}const i=e?at(s):String(s).trim();i!==s&&delete t[s],t[i]=P(r),n[i]=!0}),this},toJSON:function(e){const t=Object.create(null);return o.forEach(Object.assign({},this[ae]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&o.isArray(n)?n.join(", "):n)}),t}});Object.assign(R,{from:function(e){return o.isString(e)?new this(it(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[$]=this[$]={accessors:{}}).accessors,r=this.prototype;function s(a){const i=N(a);n[i]||(ct(r,a),n[i]=!0)}return o.isArray(e)?e.forEach(s):s(e),this}});R.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);o.freezeMethods(R.prototype);o.freezeMethods(R);function ut(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,a=0,i;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),d=r[a];i||(i=c),n[s]=l,r[s]=c;let E=a,y=0;for(;E!==s;)y+=n[E++],E=E%e;if(s=(s+1)%e,s===a&&(a=(a+1)%e),c-i<t)return;const m=d&&c-d;return m?Math.round(y*1e3/m):void 0}}function K(e,t){let n=0;const r=ut(50,250);return s=>{const a=s.loaded,i=s.lengthComputable?s.total:void 0,u=a-n,l=r(u),c=a<=i;n=a;const d={loaded:a,total:i,progress:i?a/i:void 0,bytes:u,rate:l||void 0,estimated:l&&i&&c?(i-a)/l:void 0};d[t?"download":"upload"]=!0,e(d)}}function W(e){return new Promise(function(n,r){let s=e.data;const a=R.from(e.headers).normalize(),i=e.responseType;let u;function l(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}o.isFormData(s)&&b.isStandardBrowserEnv&&a.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(m+":"+f))}const d=tt(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ve(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function E(){if(!c)return;const m=R.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};Ge(function(w){n(w),l()},function(w){r(w),l()},p),c=null}if("onloadend"in c?c.onloadend=E:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(E)},c.onabort=function(){!c||(r(new h("Request aborted",h.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||ie;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new h(f,p.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,c)),c=null},b.isStandardBrowserEnv){const m=(e.withCredentials||nt(d))&&e.xsrfCookieName&&Ze.read(e.xsrfCookieName);m&&a.set(e.xsrfHeaderName,m)}s===void 0&&a.setContentType(null),"setRequestHeader"in c&&o.forEach(a.toJSON(),function(f,p){c.setRequestHeader(p,f)}),o.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",K(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",K(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=m=>{!c||(r(!m||m.type?new oe(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const y=rt(d);if(y&&b.protocols.indexOf(y)===-1){r(new h("Unsupported protocol "+y+":",h.ERR_BAD_REQUEST,e));return}c.send(s||null)})}const X={http:W,xhr:W};var Q={getAdapter:e=>{if(o.isString(e)){const t=X[e];if(!e)throw Error(o.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!o.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:X};const ft={"Content-Type":"application/x-www-form-urlencoded"};function lt(){let e;return typeof XMLHttpRequest!="undefined"?e=Q.getAdapter("xhr"):typeof process!="undefined"&&o.kindOf(process)==="process"&&(e=Q.getAdapter("http")),e}function dt(e,t,n){if(o.isString(e))try{return(t||JSON.parse)(e),o.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const z={transitional:ie,adapter:lt(),transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,a=o.isObject(t);if(a&&o.isHTMLForm(t)&&(t=new FormData(t)),o.isFormData(t))return s&&s?JSON.stringify(Ye(t)):t;if(o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t))return t;if(o.isArrayBufferView(t))return t.buffer;if(o.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return We(t,this.formSerializer).toString();if((u=o.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return H(u?{"files[]":t}:t,l&&new l,this.formSerializer)}}return a||s?(n.setContentType("application/json",!1),dt(t)):t}],transformResponse:[function(t){const n=this.transitional||z.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&o.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?h.from(u,h.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:b.classes.FormData,Blob:b.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],function(t){z.headers[t]={}});o.forEach(["post","put","patch"],function(t){z.headers[t]=o.merge(ft)});function pt(e){return!!(e&&e.__CANCEL__)}function ht(e,t){t=t||{};const n={};function r(c,d){return o.isPlainObject(c)&&o.isPlainObject(d)?o.merge(c,d):o.isPlainObject(d)?o.merge({},d):o.isArray(d)?d.slice():d}function s(c){if(o.isUndefined(t[c])){if(!o.isUndefined(e[c]))return r(void 0,e[c])}else return r(e[c],t[c])}function a(c){if(!o.isUndefined(t[c]))return r(void 0,t[c])}function i(c){if(o.isUndefined(t[c])){if(!o.isUndefined(e[c]))return r(void 0,e[c])}else return r(void 0,t[c])}function u(c){if(c in t)return r(e[c],t[c]);if(c in e)return r(void 0,e[c])}const l={url:a,method:a,data:a,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u};return o.forEach(Object.keys(e).concat(Object.keys(t)),function(d){const E=l[d]||s,y=E(d);o.isUndefined(y)&&E!==u||(n[d]=y)}),n}const mt="1.1.3";export{R as A,oe as C,mt as V,h as a,tt as b,Ve as c,z as d,ue as e,Ye as f,pt as i,ht as m,H as t,o as u};
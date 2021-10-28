/*!
 * design: redteamobile.com
 * hash: 0f139d21dc904defb57a
 * chunkhash: 69766d28b34fd7cf8693
 * name: md
 * _: 2021-10-28 14:35:25
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"8fd6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-splitter",{scopedSlots:e._u([{key:"before",fn:function(){return[r("q-input",{staticClass:"border p-10",attrs:{type:"textarea",borderless:"",autofocus:""},model:{value:e.mdString,callback:function(t){e.mdString=t},expression:"mdString"}})]},proxy:!0},{key:"after",fn:function(){return[r("div",{staticClass:"border p-10",domProps:{innerHTML:e._s(e.calac)}})]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)},s=[],a=r("9ab4"),o=r("60a3"),i=r("0e54"),l=r.n(i);let c=class extends o["c"]{constructor(){super(...arguments),this.splitterModel=50,this.mdString="# hello"}get calac(){return l()(this.mdString)}created(){l.a.setOptions({renderer:new l.a.Renderer,pedantic:!1,gfm:!0,breaks:!0,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1})}};c=Object(a["__decorate"])([Object(o["a"])({name:"Md"})],c);var d=c,p=d,u=r("2877"),f=r("8562"),m=r("27f9"),b=r("eebe"),x=r.n(b),g=Object(u["a"])(p,n,s,!1,null,"e91202c6",null);t["default"]=g.exports;x()(g,"components",{QSplitter:f["a"],QInput:m["a"]})}}]);
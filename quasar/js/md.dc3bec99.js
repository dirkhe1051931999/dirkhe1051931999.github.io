/*!
 * design: https://github.com/dirkhe1051931999 
 *  hash: 5e8b84759ed7ee2bb312
 * chunkhash: dc3bec99b925df590620
 * name: md
 * _: 2022/11/11 10:57:49
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"8fd6":function(e,t,r){"use strict";r.r(t);var s=r("9ab4"),n=r("60a3"),a=r("0e54"),o=r.n(a),i=(a=class extends n.c{constructor(){super(...arguments),this.splitterModel=50,this.mdString="# hello"}get calac(){return o()(this.mdString)}created(){o.a.setOptions({renderer:new o.a.Renderer,pedantic:!1,gfm:!0,breaks:!0,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1})}},s=Object(s.__decorate)([Object(n.a)({name:"Md"})],a),n=r("2877"),a=r("8562"),r("27f9")),l=r("eebe");r=r.n(l),l=Object(n.a)(s,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[t("q-splitter",{scopedSlots:e._u([{key:"before",fn:function(){return[t("q-input",{staticClass:"border p-10",attrs:{type:"textarea",borderless:"",autofocus:""},model:{value:e.mdString,callback:function(t){e.mdString=t},expression:"mdString"}})]},proxy:!0},{key:"after",fn:function(){return[t("div",{staticClass:"border p-10",domProps:{innerHTML:e._s(e.calac)}})]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)}),[],!1,null,"110b5a59",null);t.default=l.exports,r()(l,"components",{QSplitter:a.a,QInput:i.a})}}]);
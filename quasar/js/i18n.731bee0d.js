/*!
 * design: https://github.com/dirkhe1051931999 
 *  hash: 74d18adb06a298589752
 * chunkhash: 731bee0d0b1866b65e85
 * name: i18n
 * _: 2022/11/10 21:43:13
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"302e":function(e,t,n){var s={"./de":["215a",0],"./de.js":["215a",0],"./en-us":["1f91"],"./en-us.js":["1f91"]};function a(e){var t,a;return n.o(s,e)?(a=(t=s[e])[0],Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))):Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}a.keys=function(){return Object.keys(s)},a.id="302e",e.exports=a},"4c9b":function(e,t,n){"use strict";n.r(t);var s=n("9ab4"),a=n("a6d8"),o=n("60a3");const l=a.filter((e=>["de","en-us"].includes(e.isoName)));a=class extends o.c{constructor(){super(...arguments),this.lang=this.$q.lang.isoName,this.langOptions={}}onchange(e){n("302e")("./"+e).then((e=>{this.$q.lang.set(e.default)}))}created(){this.langOptions=l.map((e=>({label:e.nativeName,value:e.isoName})))}},Object(s.__decorate)([Object(o.d)("lang")],a.prototype,"onchange",null),a=Object(s.__decorate)([Object(o.a)({name:"Index"})],a),s=a,o=n("2877"),a=n("9c40");var c=n("ddd8"),i=n("eebe");i=n.n(i),o=Object(o.a)(s,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"row"},[t("q-btn",{staticClass:"m-r-20",attrs:{label:e.$t("messages.success")}}),t("q-btn",{attrs:{label:e.$t("messages.failed")}}),t("q-select",{staticStyle:{"min-width":"150px"},attrs:{options:e.langOptions,label:"Quasar Language",dense:"",borderless:"","emit-value":"","map-options":"","options-dense":""},model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}})],1)}),[],!1,null,"261feea2",null);t.default=o.exports,i()(o,"components",{QBtn:a.a,QSelect:c.a})}}]);
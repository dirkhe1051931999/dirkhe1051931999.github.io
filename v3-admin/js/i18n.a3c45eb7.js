"use strict";(globalThis["webpackChunkquasar_vue3_admin_template"]=globalThis["webpackChunkquasar_vue3_admin_template"]||[]).push([[580],{36263:(e,l,t)=>{t.r(l),t.d(l,{default:()=>y});var a=t(59835);const n={class:"row"};function o(e,l,t,o,s,c){const r=(0,a.up)("q-btn"),i=(0,a.up)("q-select");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(r,{label:e.$t("messages.success"),class:"q-mr-md",color:"primary"},null,8,["label"]),(0,a.Wm)(r,{label:e.$t("messages.failed"),color:"primary",class:"q-mr-md"},null,8,["label"]),(0,a.Wm)(i,{modelValue:e.locale,"onUpdate:modelValue":[l[0]||(l[0]=l=>e.locale=l),e.checkLang],options:e.localeOptions,label:"Quasar Language",dense:"",outlined:"","emit-value":"","map-options":"","options-dense":"",style:{"min-width":"150px"}},null,8,["modelValue","options","onUpdate:modelValue"])])}var s=t(97666),c=t(3580),r=t(6128),i=t(59857),u=function(e,l,t,a){var n,o=arguments.length,s=o<3?l:null===a?a=Object.getOwnPropertyDescriptor(l,t):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,l,t,a);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(s=(o<3?n(s):o>3?n(l,t,s):n(l,t))||s);return o>3&&s&&Object.defineProperty(l,t,s),s};s.filter((e=>["de","en-us"].includes(e.isoName)));let m=class extends i.Vue{constructor(){super(...arguments),this.localeOptions=[{value:"en-US",label:"English"},{value:"zh-CN",label:"中文"}],this.locale=""}mounted(){this.locale=this.$q.lang.isoName}checkLang(e){c.b.SET_LANGUAGE(e),this.$i18n.locale=e,r.dK=e}};m=u([(0,i.Component)({name:"myComponentI18n"})],m);const p=m;var d=t(11639),h=t(86075),b=t(31198),f=t(69984),g=t.n(f);const v=(0,d.Z)(p,[["render",o]]),y=v;g()(p,"components",{QBtn:h.Z,QSelect:b.Z})}}]);
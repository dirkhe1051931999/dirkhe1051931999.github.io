/*!
 * design: redteamobile.com
 * hash: 7e9a7a979f5b02c0d1eb
 * chunkhash: 01649ecb1306c4b92c95
 * name: notice
 * _: 2021-8-20 17:17:54
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"0bfa":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row no-wrap justify-around q-px-md q-pt-md"},[e("div",{directives:[{name:"mutation",rawName:"v-mutation",value:t.handler1,expression:"handler1"}],staticClass:"drop-target rounded-borders overflow-hidden",on:{dragenter:t.onDragEnter,dragleave:t.onDragLeave,dragover:t.onDragOver,drop:t.onDrop}},[e("div",{staticClass:"box navy",attrs:{id:"box1",draggable:"true"},on:{dragstart:t.onDragStart}}),e("div",{staticClass:"box red",attrs:{id:"box2",draggable:"true"},on:{dragstart:t.onDragStart}}),e("div",{staticClass:"box green",attrs:{id:"box3",draggable:"true"},on:{dragstart:t.onDragStart}}),e("div",{staticClass:"box orange",attrs:{id:"box4",draggable:"true"},on:{dragstart:t.onDragStart}}),e("div",{staticClass:"box navy",attrs:{id:"box5",draggable:"true"},on:{dragstart:t.onDragStart}}),e("div",{staticClass:"box red",attrs:{id:"box6",draggable:"true"},on:{dragstart:t.onDragStart}}),e("div",{staticClass:"box green",attrs:{id:"box7",draggable:"true"},on:{dragstart:t.onDragStart}}),e("div",{staticClass:"box orange",attrs:{id:"box8",draggable:"true"},on:{dragstart:t.onDragStart}})]),e("div",{directives:[{name:"mutation",rawName:"v-mutation",value:t.handler2,expression:"handler2"}],staticClass:"drop-target rounded-borders overflow-hidden",on:{dragenter:t.onDragEnter,dragleave:t.onDragLeave,dragover:t.onDragOver,drop:t.onDrop}})]),e("div",{staticClass:"row justify-around items-start"},[e("div",{staticClass:"col row justify-center q-pa-md"},[e("div",{staticClass:"text-subtitle1"},[t._v("Mutation Info")]),t._l(t.status1,(function(a){return e("div",{key:a},[t._v(t._s(a))])}))],2),e("div",{staticClass:"col row justify-center q-pa-md"},[e("div",{staticClass:"text-subtitle1"},[t._v("Mutation Info")]),t._l(t.status2,(function(a){return e("div",{key:a},[t._v(t._s(a))])}))],2)])])},r=[],s=e("9ab4"),n=e("60a3");let i=class extends n["c"]{constructor(){super(...arguments),this.status1=[],this.status2=[]}handler1(t){this.status1=[];for(const a in t){const e=t[a],o=`type: ${e.type}, nodes added: ${e.addedNodes.length>0?"true":"false"}, nodes removed: ${e.removedNodes.length>0?"true":"false"}, oldValue: ${e.oldValue}`;this.status1.push(o)}}handler2(t){this.status2=[];for(const a in t){const e=t[a],o=`type: ${e.type}, nodes added: ${e.addedNodes.length>0?"true":"false"}, nodes removed: ${e.removedNodes.length>0?"true":"false"}, oldValue: ${e.oldValue}`;this.status2.push(o)}}onDragEnter(t){!0!==t.target.draggable&&t.target.classList.add("drag-enter")}onDragLeave(t){t.target.classList.remove("drag-enter")}onDragOver(t){t.preventDefault()}onDragStart(t){t.dataTransfer.setData("text",t.target.id),t.dataTransfer.dropEffect="move"}onDrop(t){if(t.preventDefault(),!0===t.target.draggable)return;const a=t.dataTransfer.getData("text"),e=document.getElementById(a);e.parentNode!==t.target?(e.parentNode.removeChild(e),t.target.appendChild(e),t.target.classList.remove("drag-enter")):t.target.classList.remove("drag-enter")}};i=Object(s["__decorate"])([n["a"]],i);var c=i,l=c,d=(e("8397"),e("2877")),u=e("5690"),f=e("eebe"),p=e.n(f),m=Object(d["a"])(l,o,r,!1,null,"0c0e0fb9",null);a["default"]=m.exports;p()(m,"directives",{Mutation:u["a"]})},"266e":function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,".drop-target[data-v-0c0e0fb9]{height:400px;width:200px;min-width:200px;background-color:#dcdcdc}.drag-enter[data-v-0c0e0fb9]{outline-style:dashed}.box[data-v-0c0e0fb9]{width:100px;height:100px;float:left;cursor:pointer}@media only screen and (max-width:500px){.drop-target[data-v-0c0e0fb9]{height:200px;width:100px;min-width:100px;background-color:#dcdcdc}.drop-target .box[data-v-0c0e0fb9]{width:50px;height:50px}}.box[data-v-0c0e0fb9]:nth-child(3){clear:both}.navy[data-v-0c0e0fb9]{background-color:navy}.red[data-v-0c0e0fb9]{background-color:#b22222}.green[data-v-0c0e0fb9]{background-color:#006400}.orange[data-v-0c0e0fb9]{background-color:orange}",""]),t.exports=a},"3b7d":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.colors,(function(a,o){return e("q-chip",{key:o},[e("q-avatar",{style:"background-color:"+a,attrs:{"text-color":"white"}},[t._v(t._s(o))]),t._v("\n    "+t._s(a)+"\n  ")],1)})),1)},r=[],s=e("9ab4"),n=e("60a3");let i=class extends n["c"]{constructor(){super(...arguments),this.colors=["#323232","#5d5d5d","#d0e3fc","#f5f5f5","#0080ff","#03a6ff","#a3daff","#cf2a2a","#f1404b","#fd999a","#009d8d","#4ab7bd","#fec171","#30b08f","#889aa4","#fe5578"]}};i=Object(s["__decorate"])([n["a"]],i);var c=i,l=c,d=e("2877"),u=e("b047"),f=e("cb32"),p=e("eebe"),m=e.n(p),g=Object(d["a"])(l,o,r,!1,null,"48ab04b4",null);a["default"]=g.exports;m()(g,"components",{QChip:u["a"],QAvatar:f["a"]})},8397:function(t,a,e){"use strict";e("c298")},c298:function(t,a,e){var o=e("266e");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=e("499e").default;r("47a86fb8",o,!0,{sourceMap:!1})},ed9f:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w-full h-full relative"},[e("q-card",{staticClass:"l-h-2"},[e("q-card-section",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit")]),e("q-card-section",[t._v("\n      How to Start Coding in 2021 | Learn How To Code On Your Own. In this video, I am sharing with you some of the best resources out there to\n      start learning how to code. There are so many different paths you can take now to learn how to code and also become a Software Developer.\n    ")])],1),e("q-parallax",{attrs:{height:250,speed:.8},scopedSlots:t._u([{key:"media",fn:function(){return[e("img",{attrs:{src:"https://cdn.quasar.dev/img/parallax1.jpg"}})]},proxy:!0}])},[e("h1",{staticClass:"text-white"},[t._v("Docks")])]),e("q-video",{staticClass:"h-300 m-t-100 m-b-100",attrs:{src:"https://www.youtube.com/embed/fThGKOgSo5I?rel=0"}}),e("q-chat-message",{staticClass:"m-b-50",attrs:{name:"mayuko ",avatar:"https://yt3.ggpht.com/ytc/AAUvwnivjbUJ86-ZYW6puGnhv0Rey-osg2TL00CF-sEXXw=s48-c-k-c0x00ffffff-no-rj",text:["coming man!"],stamp:"10 minutes ago",sent:""}}),e("q-chat-message",{staticClass:"m-b-100",attrs:{name:"mayuko ",avatar:"https://yt3.ggpht.com/ytc/AAUvwnivjbUJ86-ZYW6puGnhv0Rey-osg2TL00CF-sEXXw=s48-c-k-c0x00ffffff-no-rj",sent:"",text:["my youtube home page is  <a class=link-type target=_blank href=https://www.youtube.com/channel/UCEDkO7wshcDZ7UZo17rPkzQ>https://www.youtube.com/channel/UCEDkO7wshcDZ7UZo17rPkzQ</a>"],stamp:"7 minutes ago"}}),e("q-chat-message",{staticClass:"m-b-100",attrs:{name:"老梁 ",avatar:"https://yt3.ggpht.com/ytc/AAUvwnhN0MMUQXUaqFJoHXyZN4PuGA4SvIHShPO0SidJ=s88-c-k-c0x00ffffff-no-rj",text:["uhhh~","nice to meet you!"],stamp:"5 minutes ago"}})],1)},r=[],s=e("9ab4"),n=e("60a3");let i=class extends n["c"]{};i=Object(s["__decorate"])([n["a"]],i);var c=i,l=c,d=e("2877"),u=e("f09f"),f=e("a370"),p=e("639d"),m=e("6ac0"),g=e("8169"),b=e("eebe"),h=e.n(b),v=Object(d["a"])(l,o,r,!1,null,"795c2607",null);a["default"]=v.exports;h()(v,"components",{QCard:u["a"],QCardSection:f["a"],QParallax:p["a"],QVideo:m["a"],QChatMessage:g["a"]})},f0d1:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-pa-md q-gutter-y-sm column items-center"},[e("div",{staticClass:"q-pa-md q-gutter-sm"},[e("q-banner",{staticClass:"bg-primary text-white",attrs:{dense:""},scopedSlots:t._u([{key:"action",fn:function(){return[e("q-btn",{attrs:{flat:"",color:"white",label:"Dismiss"}}),e("q-btn",{attrs:{flat:"",color:"white",label:"Update Credit Card"}})]},proxy:!0}])},[t._v("\n      Unfortunately, the credit card did not go through, please try again.\n      ")]),e("q-banner",{staticClass:"bg-grey-3",attrs:{dense:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"signal_wifi_off",color:"primary"}})]},proxy:!0},{key:"action",fn:function(){return[e("q-btn",{attrs:{flat:"",color:"primary",label:"Turn on Wifi"}})]},proxy:!0}])},[t._v("\n      You have lost connection to the internet. This app is offline.\n      ")]),e("q-banner",{staticClass:"text-white bg-red",attrs:{dense:"","inline-actions":""},scopedSlots:t._u([{key:"action",fn:function(){return[e("q-btn",{attrs:{flat:"",color:"white",label:"Turn ON Wifi"}})]},proxy:!0}])},[t._v("\n      You have lost connection to the internet. This app is offline.\n      ")])],1),e("q-btn",{attrs:{"no-caps":"",push:"",color:"white","text-color":"primary",label:"Grid BottomSheet"},on:{click:function(a){return t.show(!0)}}}),e("div",{staticClass:"q-pa-md q-gutter-sm"},[e("q-btn",{attrs:{push:"",color:"white","text-color":"primary",label:"Unread Mails"}},[e("q-badge",{attrs:{color:"orange",floating:""}},[t._v("22")])],1),e("q-btn",{staticClass:"q-ml-md",attrs:{dense:"",color:"purple",round:"",icon:"email"}},[e("q-badge",{attrs:{color:"red",floating:""}},[t._v("4")])],1)],1),e("div",{staticClass:"q-pa-md q-gutter-md",staticStyle:{"font-size":"36px"}},[e("q-icon",{staticClass:"text-brown cursor-pointer",attrs:{name:"settings_remote"}},[e("q-popup-proxy",{attrs:{"transition-show":"flip-up","transition-hide":"flip-down"}},[e("q-banner",{staticClass:"bg-brown text-white",scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"signal_wifi_off"}})]},proxy:!0}])},[t._v("\n          You have lost connection to the internet. This app is offline.\n        ")])],1)],1),e("q-icon",{staticClass:"text-purple cursor-pointer",attrs:{name:"perm_data_setting"}},[e("q-popup-proxy",{attrs:{offset:[10,10]}},[e("q-banner",{staticClass:"bg-purple text-white",scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"signal_wifi_off"}})]},proxy:!0}])},[t._v("\n          You have lost connection to the internet. This app is offline.\n        ")])],1)],1)],1),e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"q-gutter-sm"},[e("q-btn",{attrs:{color:"primary"}},[t._v("\n        Hover\n        "),e("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10]}},[t._v("Here I am!")])],1),e("q-btn",{attrs:{color:"primary"}},[t._v("\n        Over\n        "),e("q-tooltip",{attrs:{"content-class":"bg-red",offset:[10,10]}},[t._v("Here I am!")])],1),e("q-btn",{attrs:{color:"primary"}},[t._v("\n        These\n        "),e("q-tooltip",{attrs:{"content-class":"bg-purple","content-style":"font-size: 16px",offset:[10,10]}},[t._v("Here I am!")])],1),e("q-btn",{attrs:{color:"primary"}},[t._v("\n        Buttons\n        "),e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10]}},[t._v("Here I am!")])],1)],1)]),e("div",{staticClass:"q-pa-md q-gutter-sm"},[e("q-btn",{attrs:{label:"Alert",color:"primary"},on:{click:t.alert}}),e("q-btn",{attrs:{label:"Confirm",color:"primary"},on:{click:t.confirm}}),e("q-btn",{attrs:{label:"Prompt",color:"primary"},on:{click:t.prompt}})],1),e("div",[e("div",{staticClass:"row q-gutter-sm"},[e("q-btn",{attrs:{round:"",size:"sm",color:"secondary"},on:{click:function(a){return t.showNotif("top-left")}}},[e("q-icon",{staticClass:"rotate-45",attrs:{name:"arrow_back"}})],1),e("q-btn",{attrs:{round:"",size:"sm",color:"accent"},on:{click:function(a){return t.showNotif("top")}}},[e("q-icon",{attrs:{name:"arrow_upward"}})],1),e("q-btn",{attrs:{round:"",size:"sm",color:"secondary"},on:{click:function(a){return t.showNotif("top-right")}}},[e("q-icon",{staticClass:"rotate-45",attrs:{name:"arrow_upward"}})],1)],1)]),e("div",[e("div",{staticClass:"row q-gutter-sm"},[e("div",[e("q-btn",{attrs:{round:"",size:"sm",color:"accent"},on:{click:function(a){return t.showNotif("left")}}},[e("q-icon",{attrs:{name:"arrow_back"}})],1)],1),e("div",[e("q-btn",{attrs:{round:"",size:"sm",color:"accent"},on:{click:function(a){return t.showNotif("center")}}},[e("q-icon",{attrs:{name:"fullscreen_exit"}})],1)],1),e("div",[e("q-btn",{attrs:{round:"",size:"sm",color:"accent"},on:{click:function(a){return t.showNotif("right")}}},[e("q-icon",{attrs:{name:"arrow_forward"}})],1)],1)])]),e("div",[e("div",{staticClass:"row q-gutter-sm"},[e("div",[e("q-btn",{attrs:{round:"",size:"sm",color:"secondary"},on:{click:function(a){return t.showNotif("bottom-left")}}},[e("q-icon",{staticClass:"rotate-135",attrs:{name:"arrow_forward"}})],1)],1),e("div",[e("q-btn",{attrs:{round:"",size:"sm",color:"accent"},on:{click:function(a){return t.showNotif("bottom")}}},[e("q-icon",{attrs:{name:"arrow_downward"}})],1)],1),e("div",[e("q-btn",{attrs:{round:"",size:"sm",color:"secondary"},on:{click:function(a){return t.showNotif("bottom-right")}}},[e("q-icon",{staticClass:"rotate-45",attrs:{name:"arrow_forward"}})],1)],1)])])],1)},r=[],s=e("9ab4"),n=e("60a3");const i=[{color:"negative",message:"Woah! Danger! You are getting good at this!",icon:"report_problem"},{message:"You need to know about this!",icon:"warning"},{message:"Wow! Nice job!",icon:"thumb_up"},{color:"teal",message:"Quasar is cool! Right?",icon:"tag_faces"},{color:"purple",message:"Jim just pinged you",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{multiLine:!0,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quisquam non ad sit assumenda consequuntur esse inventore officia. Corrupti reiciendis impedit vel, fugit odit quisquam quae porro exercitationem eveniet quasi."}];let c=class extends n["c"]{showNotif(t){const{color:a,multiLine:e,icon:o,message:r,avatar:s}=i[Math.floor(10*Math.random())%i.length],n=(Math.random(),a?"white":void 0);this.$q.notify({color:a,textColor:"hello",icon:o,message:r,position:t,avatar:s,multiLine:e,actions:[{label:"Reply",color:n,handler:()=>{}},{label:"Dismiss",color:"yellow",handler:()=>{}}],timeout:5e3*Math.random()+3e3})}alert(){this.$q.dialog({title:"Alert",message:"Some message"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}confirm(){this.$q.dialog({title:"Confirm",message:"Would you like to turn on the wifi?",cancel:!0,persistent:!0}).onOk((()=>{})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}prompt(){this.$q.dialog({title:"Prompt",message:"What is your name?",prompt:{model:"",type:"text"},cancel:!0,persistent:!0}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}show(t){this.$q.bottomSheet({message:"Bottom Sheet message",grid:t,actions:[{label:"Drive",icon:"thumb_up"},{label:"Keep",icon:"touch_app"},{label:"Google Hangouts",icon:"settings_phone"},{label:"Calendar",icon:"pets"},{},{label:"Share",icon:"pan_tool"},{label:"Upload",icon:"fingerprint"},{},{label:"John",icon:"mail"}]}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}};c=Object(s["__decorate"])([n["a"]],c);var l=c,d=l,u=e("2877"),f=e("54e1"),p=e("9c40"),m=e("0016"),g=e("58a8"),b=e("7cbe"),h=e("05c0"),v=e("eebe"),w=e.n(v),q=Object(u["a"])(d,o,r,!1,null,"4458732f",null);a["default"]=q.exports;w()(q,"components",{QBanner:f["a"],QBtn:p["a"],QIcon:m["a"],QBadge:g["a"],QPopupProxy:b["a"],QTooltip:h["a"]})}}]);
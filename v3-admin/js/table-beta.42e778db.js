"use strict";(globalThis["webpackChunkquasar_vue3_admin_template"]=globalThis["webpackChunkquasar_vue3_admin_template"]||[]).push([[28],{80834:(e,a,l)=>{l.r(a),l.d(a,{default:()=>ne});var t=l(59835),i=l(86970),d=l(61957);const o={class:"query-form-and-action"},s={class:"query"},n={class:"action"},p={class:"thin-shadow q-pa-md"},r={class:"full-width justify-end row"},c={key:0},m={key:1,class:"text-left"},u={key:0},g={key:1},h=["onClick"],f={key:2},b=["onClick"],y=["onClick"],w={class:"in-table-link-button",style:{"min-width":"100px"}},k={class:"text-left"},U=(0,t._)("div",null,"this is expand detail , it maybe json string or other special text",-1),v={class:"row q-col-gutter-x-md"},P={class:"dialog-upload-form"},_=["accept"],x={class:"container"},q=(0,t._)("p",{class:"click"},"Click to upload",-1),C=(0,t._)("p",{class:"format"},"File type is: xlsx",-1),D={key:0,class:"fileName"},A={class:"upload-limit"},$={class:"link-type"};function I(e,a,l,I,L,S){const T=(0,t.up)("q-input"),W=(0,t.up)("q-select"),M=(0,t.up)("q-btn"),j=(0,t.up)("q-form"),E=(0,t.up)("q-checkbox"),Q=(0,t.up)("q-th"),F=(0,t.up)("q-tr"),H=(0,t.up)("q-td"),V=(0,t.up)("q-toggle"),z=(0,t.up)("q-icon"),O=(0,t.up)("q-item-section"),Z=(0,t.up)("q-item"),B=(0,t.up)("q-list"),N=(0,t.up)("q-popup-proxy"),R=(0,t.up)("q-inner-loading"),J=(0,t.up)("q-table"),X=(0,t.up)("MyPagination"),Y=(0,t.up)("MyFormSelect"),K=(0,t.up)("MyFormDateRange"),G=(0,t.up)("MyFormDateRangeWithTime"),ee=(0,t.up)("MyFormSlider"),ae=(0,t.up)("MyFormRadio"),le=(0,t.up)("MyTreeSelect"),te=(0,t.up)("el-popover"),ie=(0,t.up)("MyFormMultipleSelect"),de=(0,t.up)("MyFormInput"),oe=(0,t.up)("MyMaskInput"),se=(0,t.up)("MyDialog"),ne=(0,t.up)("q-item-label"),pe=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",o,[(0,t.Wm)(j,{ref:"queryFrom",class:"form"},{default:(0,t.w5)((()=>[(0,t._)("div",s,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.queryParams.input,((a,l)=>(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",{key:l,class:"query-item"},["text"===a.type?((0,t.wg)(),(0,t.j4)(T,{key:0,modelValue:e.queryParams.params[a.id],"onUpdate:modelValue":l=>e.queryParams.params[a.id]=l,modelModifiers:{trim:!0},type:a.inputType,class:(0,i.C_)([a.class]),label:a.placeholder,autocapitalize:"off",autocomplete:"new-password",autocorrect:"off",clearable:"",dense:"",outlined:"","dropdown-icon":"app:topbar-arrow-bottom","clear-icon":"app:clear",spellcheck:!1},null,8,["modelValue","onUpdate:modelValue","type","class","label"])):(0,t.kq)("",!0),"select"===a.type?((0,t.wg)(),(0,t.j4)(W,{key:1,class:(0,i.C_)([a.class]),modelValue:e.queryParams.params[a.id],"onUpdate:modelValue":l=>e.queryParams.params[a.id]=l,options:a.selectOption,label:a.placeholder,spellcheck:!1,autocapitalize:"off",autocomplete:"new-password",autocorrect:"off",clearable:"",dense:"","options-dense":"",outlined:"","emit-value":"","dropdown-icon":"app:topbar-arrow-bottom","clear-icon":"app:clear","map-options":""},null,8,["class","modelValue","onUpdate:modelValue","options","label"])):(0,t.kq)("",!0)])),[[d.F8,!a.collapse]]))),128)),(0,t._)("div",n,[(0,t.Wm)(M,{color:"primary",icon:"search",label:e.$t("action.search"),loading:e.queryParams.queryLoading,onClick:e.handleQuery,class:"q-mr-md",style:{height:"40px"}},null,8,["label","loading","onClick"]),(0,t.Wm)(M,{label:e.$t("action.reset"),outline:"",color:"primary",loading:e.queryParams.resetLoading,onClick:e.handleResetQuery,class:"q-mr-md",style:{height:"40px"}},null,8,["label","loading","onClick"]),(0,t.Wm)(M,{icon:e.queryParams.allExpand?"expand_less":"expand_more",label:e.queryParams.allExpand?"Collapse":"Expand",outline:"",color:"primary",flat:"",onClick:e.handleClickCollapse,style:{height:"40px"}},null,8,["icon","label","onClick"])])])])),_:1},512)]),(0,t._)("div",p,[(0,t.Wm)(J,{flat:"",bordered:"",columns:e.tableParams.column,rows:e.tableParams.data,loading:e.tableParams.loading,pagination:e.tableParams.pagination,"hide-pagination":"","no-data-label":e.$t("tip.noData"),class:"my-table","selected-rows-label":a=>`select ${a} ${e.$t("table.per")}`,selection:"multiple",selected:e.tableParams.selected,"onUpdate:selected":a[0]||(a[0]=a=>e.tableParams.selected=a),"row-key":"name"},{top:(0,t.w5)((()=>[(0,t._)("div",r,[(0,t.Wm)(M,{color:"primary",icon:"o_add",label:"Add",class:"q-mr-md",onClick:e.handleClickAdd},null,8,["onClick"]),(0,t.Wm)(M,{icon:"o_upload",label:"Upload",outline:"",color:"primary",onClick:e.handleClickUpload},null,8,["onClick"])])])),header:(0,t.w5)((a=>[(0,t.Wm)(F,{props:a},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{style:{"text-align":"left"}},{default:(0,t.w5)((()=>[(0,t.Wm)(E,{color:"primary",modelValue:a.selected,"onUpdate:modelValue":e=>a.selected=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(Q,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Uk)("Expand")])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.cols,(l=>((0,t.wg)(),(0,t.j4)(Q,{key:l.name,props:a,style:{"text-align":"left"}},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(-1!==l.label.indexOf("$")?e.$t(`table.${l.label.replace("$","")}`):l.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),"header-cell-action":(0,t.w5)((e=>[(0,t.Wm)(Q,{props:e},null,8,["props"])])),body:(0,t.w5)((a=>[(0,t.Wm)(F,{props:a},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{class:"text-left"},{default:(0,t.w5)((()=>[(0,t.Wm)(E,{color:"primary",modelValue:a.selected,"onUpdate:modelValue":e=>a.selected=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(H,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{modelValue:a.expand,"onUpdate:modelValue":e=>a.expand=e,"checked-icon":"add","unchecked-icon":"remove"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.cols,(l=>((0,t.wg)(),(0,t.j4)(H,{key:l.name,props:a,class:"text-left"},{default:(0,t.w5)((()=>[l.inSlot?((0,t.wg)(),(0,t.iD)("div",m,["id"===l.name?((0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("span",null,(0,i.zw)(e.tableParams.data.indexOf(a.row)+1),1)])):(0,t.kq)("",!0),"name"===l.name?((0,t.wg)(),(0,t.iD)("div",g,[(0,t._)("span",{class:"link-type",onClick:l=>e.handlerClickDetail(a.row)},(0,i.zw)(a.row.name),9,h)])):(0,t.kq)("",!0),"action"===l.name?((0,t.wg)(),(0,t.iD)("div",f,[(0,t._)("span",{class:"in-table-link-button q-mr-md",onClick:l=>e.handlerClickUpdate(a.row)},(0,i.zw)(e.$t("action.update")),9,b),(0,t._)("span",{class:"in-table-delete-button q-mr-md",onClick:l=>e.handlerClickDelete(a.row)},(0,i.zw)(e.$t("action.delete")),9,y),(0,t._)("span",w,[(0,t.Uk)((0,i.zw)(e.$t("action.more"))+" ",1),(0,t.Wm)(z,{name:"o_expand_more"}),(0,t.Wm)(N,{style:{"min-width":"100px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(Z,{clickable:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{class:"text-center"},{default:(0,t.w5)((()=>[(0,t.Uk)(" 123123 ")])),_:1})])),_:1})),[[pe]]),(0,t.wy)(((0,t.wg)(),(0,t.j4)(Z,{clickable:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{class:"text-center"},{default:(0,t.w5)((()=>[(0,t.Uk)(" 123123 ")])),_:1})])),_:1})),[[pe]]),(0,t.wy)(((0,t.wg)(),(0,t.j4)(Z,{clickable:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{class:"text-center"},{default:(0,t.w5)((()=>[(0,t.Uk)(" 123123 ")])),_:1})])),_:1})),[[pe]])])),_:1})])),_:1})])])):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("span",c,(0,i.zw)(l.value),1))])),_:2},1032,["props"])))),128))])),_:2},1032,["props"]),(0,t.wy)((0,t.Wm)(F,{props:a},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{colspan:"100%"},{default:(0,t.w5)((()=>[(0,t._)("div",k,"Name:"+(0,i.zw)(a.row.name),1),U])),_:2},1024)])),_:2},1032,["props"]),[[d.F8,a.expand]])])),loading:(0,t.w5)((()=>[(0,t.Wm)(R,{color:"primary",showing:""})])),_:1},8,["columns","rows","loading","pagination","no-data-label","selected-rows-label","selected"]),e.tableParams.pagination.rowsNumber>0?((0,t.wg)(),(0,t.j4)(X,{key:0,paginationParams:e.tableParams.pagination,onPagination:e.paginationInput},null,8,["paginationParams","onPagination"])):(0,t.kq)("",!0)]),(0,t.Wm)(se,{option:{id:e.dialogAddUpdateParams.id,dialogType:e.dialogAddUpdateParams.dialogType,clickLoading:e.dialogAddUpdateParams.clickLoading,getDataLoading:e.dialogAddUpdateParams.getDataLoading,visiable:e.dialogAddUpdateParams.visiable,title:e.dialogAddUpdateParams.title,params:e.dialogAddUpdateParams.params},onClose:e.dialogAddUpdateCloseEvent,onConfirm:e.dialogAddUpdateConfirmEvent,onBeforeHide:e.dialogAddUpdateBeforeHideEvent},{default:(0,t.w5)((()=>[(0,t._)("div",v,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.dialogAddUpdateParams.input,((a,l)=>((0,t.wg)(),(0,t.iD)("div",{key:l,class:"col-6"},["select"===a.type?((0,t.wg)(),(0,t.j4)(Y,{key:0,option:{inputId:`${e.dialogAddUpdateParams.id}-select-${a.model}`,rules:a.rules,classes:a.classes,model:e.dialogAddUpdateParams.params[a.model],label:a.label,inputSelectOption:a.inputSelectOption,userInput:!0},onInput:l=>e.dialogAddUpdateParams.params[a.model]=l},null,8,["option","onInput"])):(0,t.kq)("",!0),"date"===a.type?((0,t.wg)(),(0,t.j4)(K,{key:1,option:{rules:a.rules,classes:a.classes,model:e.dialogAddUpdateParams.params[a.model],dateRange:e.dialogAddUpdateParams.params[a.dateRange],label:a.label},onInput:l=>e.dialogAddUpdateParams.params[a.model]=l},null,8,["option","onInput"])):(0,t.kq)("",!0),"date-time"===a.type?((0,t.wg)(),(0,t.j4)(G,{key:2,ref_for:!0,ref:e.dialogAddUpdateParams.id+"-date-time-"+a.model,option:{rules:a.rules,classes:a.classes,startModel:e.dialogAddUpdateParams.params[a.startModel],endModel:e.dialogAddUpdateParams.params[a.endModel],model:e.dialogAddUpdateParams.params[a.model],label:a.label},onEndInput:l=>e.dialogAddUpdateParams.params[a.endModel]=l,onStartInput:l=>e.dialogAddUpdateParams.params[a.startModel]=l},null,8,["option","onEndInput","onStartInput"])):(0,t.kq)("",!0),"slider"===a.type?((0,t.wg)(),(0,t.j4)(ee,{key:3,option:{rules:a.rules,classes:a.classes,model:e.dialogAddUpdateParams.params[a.model],label:a.label,min:a.min,max:a.max,step:a.step},onInput:l=>e.dialogAddUpdateParams.params[a.model]=l},null,8,["option","onInput"])):(0,t.kq)("",!0),"radio"===a.type?((0,t.wg)(),(0,t.j4)(ae,{key:4,option:{inputId:`${e.dialogAddUpdateParams.id}-select-${a.model}`,rules:a.rules,classes:a.classes,model:e.dialogAddUpdateParams.params[a.model],label:a.label,inputSelectOption:a.inputSelectOption,disable:a.disable},onInput:l=>e.dialogAddUpdateParams.params[a.model]=l},null,8,["option","onInput"])):(0,t.kq)("",!0),"tree-select"===a.type?((0,t.wg)(),(0,t.j4)(le,{key:5,option:{inputId:`${e.dialogAddUpdateParams.id}-tree-select-${a.model}`,rules:a.rules,classes:a.classes,model:e.dialogAddUpdateParams.params[a.model],label:a.label,inputSelectOption:a.inputSelectOption,disable:a.disable},onInput:l=>e.dialogAddUpdateParams.params[a.model]=l},null,8,["option","onInput"])):(0,t.kq)("",!0),"multiple-select"===a.type?((0,t.wg)(),(0,t.j4)(ie,{key:6,option:{inputId:`${e.dialogAddUpdateParams.id}-multiple-select-${a.model}`,rules:a.rules,classes:a.classes,model:e.dialogAddUpdateParams.params[a.model],label:a.label,inputSelectOption:a.inputSelectOption,multiple:a.multiple,userInput:!0},onInput:l=>e.dialogAddUpdateParams.params[a.model]=l},{subTitle:(0,t.w5)((()=>[(0,t.Wm)(te,{placement:"top",title:"popover-title",width:320,"popper-style":"z-index:9999",trigger:"hover"},{reference:(0,t.w5)((()=>[(0,t.Wm)(z,{name:"o_info",class:"text-grey cursor-pointer"})])),default:(0,t.w5)((()=>[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(["test1","test2","test3"],((e,a)=>(0,t._)("p",{key:a},(0,i.zw)(a+1)+". "+(0,i.zw)(e),1))),64))])),_:2},1024)])),_:2},1032,["option","onInput"])):(0,t.kq)("",!0),"text"===a.type?((0,t.wg)(),(0,t.j4)(de,{key:7,option:{model:e.dialogAddUpdateParams.params[a.model],rules:a.rules,classes:a.classes,label:a.label},onInput:l=>e.dialogAddUpdateParams.params[a.model]=l},{subTitle:(0,t.w5)((()=>[(0,t.Wm)(te,{placement:"top",title:"popover-title",width:320,"popper-style":"z-index:9999",trigger:"hover"},{reference:(0,t.w5)((()=>[(0,t.Wm)(z,{name:"o_info",class:"text-grey cursor-pointer"})])),default:(0,t.w5)((()=>[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(["test1","test2","test3"],((e,a)=>(0,t._)("p",{key:a},(0,i.zw)(a+1)+". "+(0,i.zw)(e),1))),64))])),_:2},1024)])),_:2},1032,["option","onInput"])):(0,t.kq)("",!0),"mask-input"===a.type?((0,t.wg)(),(0,t.j4)(oe,{key:8,option:{model:e.dialogAddUpdateParams.params[a.model],rules:a.rules,classes:a.classes,label:a.label,mask:"####/####/####/####",hint:"####/####/####/####"},onInput:l=>e.dialogAddUpdateParams.params[a.model]=l},null,8,["option","onInput"])):(0,t.kq)("",!0)])))),128))])])),_:1},8,["option","onClose","onConfirm","onBeforeHide"]),(0,t.Wm)(se,{option:{id:e.dialogUpload.id,dialogType:"upload",clickLoading:e.dialogUpload.clickLoading,getDataLoading:e.dialogUpload.getDataLoading,visiable:e.dialogUpload.visiable,title:e.dialogUpload.title,params:e.dialogUpload.params},width:"30vw",onClose:e.dialogUploadCloseEvent,onConfirm:e.hanleClickUploadConfirm,onBeforeHide:e.dialogUploadBeforeHideEvent},{default:(0,t.w5)((()=>[(0,t._)("div",P,[(0,t._)("input",{type:"file",class:"hide",ref:e.dialogUpload.fileID,accept:e.dialogUpload.accept,draggable:!1,onChange:a[1]||(a[1]=(...a)=>e.uploadFileSuccess&&e.uploadFileSuccess(...a))},null,40,_),(0,t._)("div",x,[(0,t._)("div",{class:"center",onClick:a[2]||(a[2]=(...a)=>e.handleClickUploadFile&&e.handleClickUploadFile(...a))},[(0,t.Wm)(z,{name:"o_cloud_upload",class:"fs-50",color:"primary"}),q,C,e.dialogUpload.params.fileName?((0,t.wg)(),(0,t.iD)("p",D,(0,i.zw)(e.dialogUpload.params.fileName),1)):(0,t.kq)("",!0)])]),(0,t._)("div",A,[(0,t._)("span",$,(0,i.zw)(e.$t("action.download_template")),1),(0,t.Uk)(" Here's some text ")])])])),_:1},8,["option","onClose","onConfirm","onBeforeHide"]),(0,t.Wm)(se,{option:{id:e.dialogDetailParams.id,dialogType:"detail",clickLoading:e.dialogDetailParams.clickLoading,getDataLoading:e.dialogDetailParams.getDataLoading,visiable:e.dialogDetailParams.visiable,title:e.dialogDetailParams.title,params:e.dialogDetailParams.params,showConfirm:!1},onClose:e.dialogDetailCloseEvent,onBeforeHide:e.dialogDetailBeforeHideEvent},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{class:"row q-col-gutter-x-md"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.dialogDetailParams.params,((e,a)=>((0,t.wg)(),(0,t.j4)(Z,{key:a,clickable:!1,class:"col-6"},{default:(0,t.w5)((()=>[(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ne,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.label)+"：",1)])),_:2},1024),(0,t.Wm)(ne,{class:(0,i.C_)(e.class)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.value),1)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["option","onClose","onBeforeHide"])])}var L=l(24409),S=l(59857),T=l(48359),W=function(e,a,l,t){var i,d=arguments.length,o=d<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,l):t;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,a,l,t);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(d<3?i(o):d>3?i(a,l,o):i(a,l))||o);return d>3&&o&&Object.defineProperty(a,l,o),o},M=function(e,a,l,t){function i(e){return e instanceof l?e:new l((function(a){a(e)}))}return new(l||(l=Promise))((function(l,d){function o(e){try{n(t.next(e))}catch(a){d(a)}}function s(e){try{n(t["throw"](e))}catch(a){d(a)}}function n(e){e.done?l(e.value):i(e.value).then(o,s)}n((t=t.apply(e,a||[])).next())}))};const j={query:{a:"",b:"",c:""},dialog_add_update:{a:"",b:"",c:"",d:[],e:"",e_dateRange:{from:"",to:""},f:"",g:"",g_startModel:"",g_endModel:"",h:10,i:"true",j:""}};let E=class extends S.Vue{constructor(){super(...arguments),this.globals=(0,t.FN)().appContext.config.globalProperties,this.queryParams={id:"query",queryLoading:!1,resetLoading:!1,allExpand:!1,params:(0,L.cloneDeep)(j.query),input:[{placeholder:"Input1",type:"text",class:"",id:"a",collapse:!1,defaultCollapse:!1,inputType:"text"},{placeholder:"Input1",type:"text",class:"",id:"a",collapse:!1,defaultCollapse:!1,inputType:"text"},{placeholder:"Input1",type:"text",class:"",id:"a",collapse:!1,defaultCollapse:!1,inputType:"text"},{placeholder:"Input1",type:"text",class:"",id:"a",collapse:!1,defaultCollapse:!1,inputType:"text"},{placeholder:"Input11",type:"text",class:"",id:"a",collapse:!0,defaultCollapse:!0,inputType:"text"},{placeholder:"Input10",type:"text",class:"",id:"a",collapse:!0,defaultCollapse:!0,inputType:"text"},{placeholder:"Input1",type:"text",class:"",id:"a",collapse:!1,defaultCollapse:!1,inputType:"text"},{placeholder:"Input2",type:"select",class:"",collapse:!1,defaultCollapse:!1,selectOption:[{label:"option 1",value:"1"},{label:"option 2",value:"2"}],id:"b"},{placeholder:"Input3",type:"text",class:"",collapse:!1,defaultCollapse:!1,id:"c",inputType:"text"}]},this.tableParams={selected:[],loading:!1,data:[{name:"jen.he.female",sex:"female",c:"ccccccccccccccccc1",d:"ddddddddddddddddd1",e:"eeeeeeeeeeeeeeeee1",f:"fffffffffffffffff1",g:"ggggggggggggggggg1",h:"hhhhhhhhhhhhhhhhh1",i:"iiiiiiiiiiiiiiiii1"},{name:"jen.he.male",sex:"male",c:"ccccccccccccccccc2",d:"ddddddddddddddddd2",e:"eeeeeeeeeeeeeeeee2",f:"fffffffffffffffff2",g:"ggggggggggggggggg2",h:"hhhhhhhhhhhhhhhhh2",i:"iiiiiiiiiiiiiiiii2"}],pagination:{page:1,rowsPerPage:10,rowsNumber:2},column:[{name:"id",label:"ID",inSlot:!0},{name:"name",label:"Name",inSlot:!0},{name:"sex",label:"Sex",align:"left",field:e=>e.sex,format:e=>`${(0,T.JX)(e)}`},{name:"c",label:"Table4",align:"left",field:e=>e.c,format:e=>`${(0,T.JX)(e)}`},{name:"d",label:"Table5",align:"left",field:e=>e.d,format:e=>`${(0,T.JX)(e)}`},{name:"e",label:"Table6",align:"left",field:e=>e.e,format:e=>`${(0,T.JX)(e)}`},{name:"f",label:"Table7",align:"left",field:e=>e.f,format:e=>`${(0,T.JX)(e)}`},{name:"g",label:"Table8",align:"left",field:e=>e.g,format:e=>`${(0,T.JX)(e)}`},{name:"h",label:"Table9",align:"left",field:e=>e.h,format:e=>`${(0,T.JX)(e)}`},{name:"i",label:"Table10",align:"left",field:e=>e.i,format:e=>`${(0,T.JX)(e)}`},{name:"action",label:"$action",field:"action",align:"left",inSlot:!0}]},this.dialogAddUpdateParams={id:"dialog_add_update",dialogType:"add",clickLoading:!1,getDataLoading:!1,visiable:!1,title:"",params:(0,L.cloneDeep)(j.dialog_add_update),input:[{model:"a",type:"text",rules:[e=>e&&String(e).length>0||this.globals.$t("messages.required")],label:"Username"},{model:"b",type:"text",rules:[e=>e&&String(e).length>0||this.globals.$t("messages.required")],classes:"input-password",label:"New password"},{model:"c",type:"select",inputSelectOption:[{label:"option1",value:"1"},{label:"option2",value:"2"}],rules:[e=>e&&String(e).length>0||this.globals.$t("messages.required")],label:"select"},{model:"d",type:"multiple-select",multiple:!0,inputSelectOption:[{label:"option1",value:"1"},{label:"option2",value:"2"}],rules:[e=>e&&String(e).length>0||this.globals.$t("messages.required")],label:"Multipl Select"},{model:"e",dateRange:"e_dateRange",type:"date",rules:[e=>e&&String(e).length>0||this.globals.$t("messages.required")],label:"Date"},{model:"g",startModel:"g_startModel",endModel:"g_endModel",type:"date-time",rules:[e=>e&&String(e).length>0||this.globals.$t("messages.required")],label:"Date and time"},{model:"h",type:"slider",min:0,max:100,step:1,rules:[e=>e&&String(e).length>0||this.globals.$t("messages.required")],label:"slider"},{model:"i",type:"radio",rules:[e=>e&&String(e).length>0||this.globals.$t("messages.required")],inputSelectOption:[{label:"one",value:"true"},{label:"two",value:"false"}],label:"radio"},{model:"f",type:"mask-input",rules:[e=>e&&String(e).length>0||this.globals.$t("messages.required")],label:"Mask Input"},{model:"j",type:"tree-select",rules:[e=>e&&String(e).length>0||this.globals.$t("messages.required")],inputSelectOption:[{label:"Open...",value:1,children:[]},{label:"New",value:2,children:[]},{label:"Preferences",children:[{label:"Submenu Label 1",value:3,children:[]},{label:"Submenu Label 2",children:[{label:"3rd level Label 4",children:[],value:4},{label:"3rd level Label 5",children:[],value:5},{label:"3rd level Label 6",children:[],value:6}]},{label:"Submenu Label 3",children:[{label:"3rd level Label 7",children:[],value:7},{label:"3rd level Label 8",children:[],value:8},{label:"3rd level Label 9",children:[],value:9}]}]},{label:"Quit",value:10,children:[]}],label:"Tree select"}]},this.dialogUpload={id:"dialog-upload-file",fileID:"dialog_upload_file",clickLoading:!1,getDataLoading:!1,visiable:!1,title:"",accept:".xls",params:{file:"",fileName:""}},this.dialogDetailParams={id:"dialog-upload-file",getDataLoading:!1,clickLoading:!1,visiable:!1,title:"Detail",params:[{label:"Name",value:"",id:"name",class:""},{label:"Sex",value:"",id:"sex",class:""},{label:"C",value:"",id:"c",class:""},{label:"D",value:"",id:"d",class:""},{label:"E",value:"",id:"e",class:""},{label:"F",value:"",id:"f",class:""},{label:"g",value:"",id:"g",class:""},{label:"h",value:"",id:"h",class:""},{label:"I",value:"",id:"i",class:""}]}}paginationInput(e){this.tableParams.pagination=e,this.getData()}handleQuery(){return M(this,void 0,void 0,(function*(){this.queryParams.queryLoading=!0,this.tableParams.pagination.page=1,yield this.getData(),this.queryParams.queryLoading=!1}))}handleResetQuery(){return M(this,void 0,void 0,(function*(){this.queryParams.resetLoading=!0,this.queryParams.params=(0,L.cloneDeep)(j.query),this.tableParams.pagination.page=1,yield this.getData(),this.queryParams.resetLoading=!1}))}handleClickCollapse(){this.queryParams.allExpand=!this.queryParams.allExpand,this.queryParams.input.forEach((e=>{e.collapse=!this.queryParams.allExpand&&e.defaultCollapse}))}handleClickAdd(){this.dialogAddUpdateParams.visiable=!0,this.dialogAddUpdateParams.dialogType="add",this.dialogAddUpdateParams.title="Add"}handlerClickUpdate(e){this.dialogAddUpdateParams.visiable=!0,this.dialogAddUpdateParams.dialogType="update",this.dialogAddUpdateParams.title="Update"}handleClickUpload(){this.dialogUpload.visiable=!0,this.dialogUpload.title="Upload",this.$nextTick((()=>{this.$refs[this.dialogUpload.fileID].type="text",this.dialogUpload.params.fileName="",this.dialogUpload.params.file="",setTimeout((()=>{this.$refs[this.dialogUpload.fileID].type="file",this.$refs[this.dialogUpload.fileID].value=""}),100)}))}handleClickUploadFile(){this.$refs[this.dialogUpload.fileID].click()}uploadFileSuccess(){const e=this.$refs[this.dialogUpload.fileID].files;let a=Array.prototype.slice.call(e);a=a.slice(0,1),a.forEach((e=>{this.dialogUpload.params.fileName=e.name,this.dialogUpload.params.file=e}))}handlerClickDetail(e){const a=(e,a)=>{switch(a){case"name":return`${e[a]}-description`;default:return e[a]||"--"}},l=(e,a)=>{switch(a){case"sex":return"text-primary";default:return""}},t=(0,L.cloneDeep)(this.dialogDetailParams.params);for(let i of t)for(let t in e)i.id===t&&(i.value=a(e,t),i.class=l(e,t));this.dialogDetailParams.params=t,this.dialogDetailParams.visiable=!0}monitorDialogUploadHide(){this.dialogUpload.params.fileName="",this.dialogUpload.params.file=""}dialogAddUpdateCloseEvent(e){this.dialogAddUpdateParams.visiable=!1}dialogAddUpdateBeforeHideEvent(e){e.params&&(this.dialogAddUpdateParams.params=e.params)}dialogUploadCloseEvent(e){this.dialogUpload.visiable=!1}dialogUploadBeforeHideEvent(e){e.params&&(this.dialogUpload.params=e.params)}dialogDetailCloseEvent(e){this.dialogDetailParams.visiable=!1}dialogDetailBeforeHideEvent(e){e.params&&(this.dialogAddUpdateParams.params=e.params)}getData(){try{this.tableParams.loading=!0,this.tableParams.loading=!1}catch(e){this.tableParams.loading=!1}finally{return Promise.resolve()}}dialogAddUpdateConfirmEvent(){return M(this,void 0,void 0,(function*(){try{this.dialogAddUpdateParams.clickLoading=!0,console.log(this.dialogAddUpdateParams.params),this.dialogAddUpdateParams.clickLoading=!1,this.dialogAddUpdateParams.visiable=!1,this.$globalMessage.show({type:"success",content:this.$t("messages.success")}),this.getData()}catch(e){this.dialogAddUpdateParams.clickLoading=!1}}))}handlerClickDelete(e){return M(this,void 0,void 0,(function*(){try{const e=yield this.$globalConfirm.show({title:this.$t("messages.tishi"),color:"primary",content:this.$t("messages.areYouSure"),confirmButtonText:this.$t("action.yes")});e&&(this.$globalMessage.show({type:"success",content:this.$t("messages.success")}),this.getData())}catch(e){}}))}hanleClickUploadConfirm(){return M(this,void 0,void 0,(function*(){try{const e=new FormData;e.append("file",this.dialogUpload.params.file),this.dialogUpload.clickLoading=!0,this.$globalMessage.show({type:"success",content:this.$t("messages.success")}),this.dialogUpload.clickLoading=!1,this.dialogUpload.visiable=!1,this.getData()}catch(e){this.dialogUpload.clickLoading=!1}}))}};E=W([(0,S.Component)({name:"myComponentTableBeta"})],E);const Q=E;var F=l(11639),H=l(61398),V=l(60408),z=l(31198),O=l(86075),Z=l(56006),B=l(43150),N=l(897),R=l(98077),J=l(47177),X=l(48891),Y=l(51017),K=l(71087),G=l(41703),ee=l(75836),ae=l(77846),le=l(36733),te=l(60014),ie=l(38562),de=l(69984),oe=l.n(de);const se=(0,F.Z)(Q,[["render",I]]),ne=se;oe()(Q,"components",{QForm:H.Z,QInput:V.Z,QSelect:z.Z,QBtn:O.Z,QTable:Z.Z,QTr:B.Z,QTh:N.Z,QCheckbox:R.Z,QTd:J.Z,QToggle:X.Z,QIcon:Y.Z,QPopupProxy:K.Z,QList:G.Z,QItem:ee.Z,QItemSection:ae.Z,QInnerLoading:le.Z,QItemLabel:te.Z}),oe()(Q,"directives",{ClosePopup:ie.Z})}}]);
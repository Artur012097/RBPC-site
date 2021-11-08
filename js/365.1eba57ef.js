"use strict";(self["webpackChunkrbpc_shop"]=self["webpackChunkrbpc_shop"]||[]).push([[365],{6537:(e,t,l)=>{l.d(t,{Z:()=>h});var s=l(3673),a=l(2323);const o={class:"column q-pa-xs q-gutter-sm full-width card-item__wrapper",style:{width:"100%"}},n={class:"text-body2 ellipsis-2-lines font-medium product-name"},i={class:"text-caption text-grey line-height-15 product-number"},r={class:"row full-width",style:{}},d={class:"col"},c={class:"text-body2 font-medium line-height-15 product-price"},m={class:"text-caption text-grey-6 product-desc"},u={class:"col-auto product-quantity"};function p(e,t,l,p,f,w){const y=(0,s.up)("q-img"),_=(0,s.up)("QuantityInput"),g=(0,s.up)("q-card-section"),b=(0,s.up)("q-btn"),x=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartProducts,(l=>((0,s.wg)(),(0,s.j4)(x,{key:l.id,class:"col light-shadow-10 bg-white full-width overflow-hidden card-item__block",style:{}},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{horizontal:"",style:{width:"100%"},class:"full-width card-item__card"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{class:"col-auto flex flex-center q-pa-none product-image"},{default:(0,s.w5)((()=>[(0,s._)("div",{style:(0,a.j5)(`color: ${l.status_color};`),class:"absolute absolute-top-left q-px-xs product-status_mobile"}," ● "+(0,a.zw)(e.$t(`statusesNames.${l.status}`)),5),(0,s.Wm)(y,{class:"rounded-borders",src:l.image,width:"90px"},null,8,["src"]),(0,s.Wm)(_,{class:"product-quantity_mobile",quantity:l.quantity,"onUpdate:quantity":e=>l.quantity=e,quantityModifiers:{sync:!0}},null,8,["quantity","onUpdate:quantity"])])),_:2},1024),(0,s.Wm)(g,{class:"q-pa-xs col",style:{"w idth":"100%"}},{default:(0,s.w5)((()=>[(0,s._)("div",n,(0,a.zw)(l.name),1),(0,s._)("div",i,(0,a.zw)(e.$t("assemblyNumber"))+" : "+(0,a.zw)(l.assembly_number),1),(0,s._)("div",{class:"text-caption line-height-19 product-status",style:(0,a.j5)(`color: ${l.status_color};`)},(0,a.zw)(e.$t(`statusesNames.${l.status}`)),5),(0,s._)("div",r,[(0,s._)("div",d,[(0,s._)("div",c,(0,a.zw)(l.vat_price)+" ₪ ",1),(0,s._)("div",m,(0,a.zw)(e.$t("withoutVat"))+" : "+(0,a.zw)(l.price)+" ₪ ",1)]),(0,s._)("div",u,[(0,s.Wm)(_,{quantity:l.quantity,"onUpdate:quantity":e=>l.quantity=e,quantityModifiers:{sync:!0}},null,8,["quantity","onUpdate:quantity"])])])])),_:2},1024),(0,s.Wm)(b,{onClick:t[0]||(t[0]=t=>e.showConfirmDelete=!0),class:"absolute-top-right bg-white",color:"grey-4",flat:"",icon:"mdi-close",padding:"0",size:"xs",style:{"border-radius":"0"}})])),_:2},1024)])),_:2},1024)))),128))])}var f=l(6111);const w=(0,s.aZ)({components:{QuantityInput:f.Z},name:"CartMini",props:{cartProducts:{type:Array,default:function(){return[]}}}});var y=l(151),_=l(5589),g=l(4027),b=l(8240),x=l(7518),q=l.n(x);w.render=p;const h=w;q()(w,"components",{QCard:y.Z,QCardSection:_.Z,QImg:g.Z,QBtn:b.Z})},6111:(e,t,l)=>{l.d(t,{Z:()=>u});var s=l(3673);const a={class:"quantity-input"};function o(e,t,l,o,n,i){const r=(0,s.up)("q-btn"),d=(0,s.up)("q-separator"),c=(0,s.up)("q-input");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(c,{"model-value":e.quantity,onInput:t[2]||(t[2]=t=>e.$emit("update:quantity",t.target.value)),color:"grey-4",dense:"","input-class":"text-caption text-center q-pa-none q-ma-none",maxlength:"2",outlined:"",style:{"max-width":"90px",padding:"0",margin:"0"},"input-style":"padding: 0; margin: 0;",class:"text-caption bg-white dense-quantity"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(r,{onClick:t[0]||(t[0]=t=>e.$emit("update:quantity",e.quantity+1)),class:"q-ma-none text-caption",dense:"",flat:"",icon:"add",style:{height:"23px"}}),(0,s.Wm)(d,{color:"grey-4",vertical:""})])),append:(0,s.w5)((()=>[(0,s.Wm)(d,{color:"grey-4",vertical:""}),(0,s.Wm)(r,{onClick:t[1]||(t[1]=t=>e.$emit("update:quantity",e.quantity-1)),class:"q-ma-none text-caption",dense:"",flat:"",icon:"remove",style:{height:"23px"}})])),_:1},8,["model-value"])])}const n=(0,s.aZ)({name:"QuantityInput",props:{quantity:{type:Number,default:0}}});var i=l(4842),r=l(8240),d=l(5869),c=l(7518),m=l.n(c);n.render=o;const u=n;m()(n,"components",{QInput:i.Z,QBtn:r.Z,QSeparator:d.Z})},7365:(e,t,l)=>{l.r(t),l.d(t,{default:()=>nt});l(9377),l(246);var s=l(3673),a=l(2323),o=l(8880);const n={key:0,class:"col-xs-10 limited-width card-wrapper"},i={class:"row q-col-gutter-md q-mt-xs card-item"},r={class:"col-xs-9 q-pb-lg q-mb-xl card-item__wrapper"},d={class:"row justify-between"},c={class:"flex flex-center text-grey-6 text-body1"},m={class:"flex flex-center"},u={class:"q-px-none q-py-none column items-stretch q-gutter-sm justify-between"},p={class:"flex flex-center justify-between no-wrap"},f={class:"q-mb-xs ellipsis-2-lines text-body1 line-height-19 product-name"},w={class:"flex flex-center justify-between no-wrap"},y={class:"text-body2 text-grey row"},_={class:"col-auto product-assebmlyNumber"},g={class:"col ellipsis-2-lines q-px-xs product-number"},b={class:"row items-end"},x={class:"col"},q={class:"text-body1 font-medium line-height-19 product-price"},h={class:"text-subtitle2 font-medium text-grey-6 line-height-17 product-desc"},v={class:"col-auto text-start product-quantity"},W={class:"font-meduim content-stretch text-grey-7"},k={class:"text-grey-5"},z={class:"card-item__block"},V={class:"row justify-between"},C={class:"flex flex-center text-grey-6 text-body1"},U={key:2,class:"col-xs-10 limited-width"},$={class:"row justify-between q-col-gutter-md q-mt-xs"},T={class:"col-xs-7"},P={class:"q-ma-none q-pa-none text-grey-7 font-medium"},N=(0,s._)("span",{class:"text-negative"},"*",-1),Z=(0,s._)("span",{class:"text-negative"},"*",-1),D=(0,s._)("div",{class:"col-xs-12 q-pa-none q-ma-none"},null,-1),Q=(0,s._)("span",{class:"text-negative"},"*",-1),A=(0,s._)("span",{class:"text-negative"},"*",-1),I=(0,s._)("span",{class:"text-negative"},"*",-1),M=(0,s._)("span",{class:"text-negative"},"*",-1),j=(0,s._)("span",{class:"text-negative"},"*",-1),R=(0,s._)("span",{class:"text-negative"},"*",-1),B=(0,s._)("div",{class:"col-xs-12 q-pa-none q-ma-none"},null,-1),S=(0,s._)("span",{class:"text-negative"},"*",-1),E=(0,s._)("span",{class:"text-negative"},"*",-1),Y=(0,s._)("span",{class:"text-negative"},"*",-1),O=(0,s.Uk)(),X=(0,s._)("span",{class:"text-negative"},"*",-1),F=(0,s._)("div",{class:"col-xs-12 q-pa-none q-ma-none"},null,-1),G=(0,s._)("div",{class:"col-xs-6 col-sm-7 q-pa-none q-ma-none"},null,-1),H=(0,s._)("div",{class:"col-xs-5"},null,-1),K={class:"row justify-between q-col-gutter-md q-mt-xs"},L={class:"col-xs-6",style:{position:"sticky",top:"50px"}},J={class:"flex flex-center justify-between no-wrap"},ee={class:"text-h6 q-mt-sm q-mb-xs ellipsis-2-lines cursor-pointer"},te={class:"flex flex-center justify-between no-wrap"},le={class:"text-caption text-grey"},se={class:"col-xs-6"},ae={class:"q-mb-sm bg-grey-1 font-medium"},oe={class:"text-body2 text-grey-6"},ne={class:"text-h6 text-center line-height-24"},ie={class:"row q-col-gutter-md justify-center"},re={class:"col-6"},de={class:"col-6"},ce={class:"font-size-25 line-height-30 q-mb-md text-center full-width"},me={class:"font-size-15 line-height-17"},ue={key:0,class:"col-xs-10 limited-width card-price__item"},pe={class:"row justify-between q-col-gutter-x-md q-mt-xs"},fe={class:"col-3 offset-9 card-price__wrapper"},we={class:"text-grey-6 text-body1 q-mb-md card-price__payment"},ye={class:"justify-between no-wrap"},_e={class:"text-right"},ge={class:"font-size-25 font-medium line-height-30 card-price__price"},be={class:"font-size-15 text-grey-6 card-price__desc"},xe={class:"text-start q-mt-sm card-price__button"},qe={key:1,class:"col-xs-10 limited-width card-price__item"},he={class:"row justify-between q-col-gutter-x-md q-mt-xs"},ve={class:"col-5 offset-7 card-price__wrapper"},We={class:"text-grey-6 text-body1 line-height-19"},ke={class:"text-grey-6 q-mb-xs text-body1 line-height-19"},ze={class:"flex flex-center justify-between no-wrap line-height-19"},Ve={class:"font-size-25 font-medium q-my-xs"},Ce={class:"text-subtitle1 font-medium text-grey-6"};function Ue(e,t,l,Ue,$e,Te){const Pe=(0,s.up)("q-tooltip"),Ne=(0,s.up)("q-btn"),Ze=(0,s.up)("q-card-section"),De=(0,s.up)("q-img"),Qe=(0,s.up)("QuantityInput"),Ae=(0,s.up)("q-separator"),Ie=(0,s.up)("q-scroll-area"),Me=(0,s.up)("q-card"),je=(0,s.up)("CartMini"),Re=(0,s.up)("q-input"),Be=(0,s.up)("q-icon"),Se=(0,s.up)("q-select"),Ee=(0,s.up)("q-checkbox"),Ye=(0,s.up)("q-carousel-slide"),Oe=(0,s.up)("q-carousel-control"),Xe=(0,s.up)("q-carousel"),Fe=(0,s.up)("q-item-section"),Ge=(0,s.up)("q-item"),He=(0,s.up)("q-list"),Ke=(0,s.up)("q-dialog"),Le=(0,s.up)("q-card-actions"),Je=(0,s.up)("q-page-sticky"),et=(0,s.up)("q-page"),tt=(0,s.Q2)("close-popup"),lt=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.j4)(et,{class:"bg-grey-1 row justify-center card"},{default:(0,s.w5)((()=>["start"===e.cartMode?((0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",i,[(0,s._)("div",r,[(0,s.Wm)(Me,{flat:"",class:"q-pr-sm q-pl-md q-pb-sm card-item__block"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ze,{class:"q-py-none"},{default:(0,s.w5)((()=>[(0,s._)("div",d,[(0,s._)("div",c,(0,a.zw)(e.$t("customerCart")),1),(0,s._)("div",m,[(0,s.Wm)(Ne,{onClick:t[0]||(t[0]=t=>e.showConfirmDelete=!0),class:"q-pa-none",color:"grey-6",flat:"",icon:"mdi-cart-off"},{default:(0,s.w5)((()=>[(0,s.Wm)(Pe,{delay:1e3,offset:[10,10],anchor:"top middle",class:"bg-grey-3 text-black shadow-3",self:"bottom middle"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.$t("clearCart")),1)])),_:1})])),_:1})])])])),_:1}),"start"===e.cartMode?((0,s.wg)(),(0,s.j4)(Ze,{key:0,class:"q-pa-xs"},{default:(0,s.w5)((()=>[(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartProducts,(l=>((0,s.wg)(),(0,s.j4)(Me,{key:l.id,class:"light-shadow-10 bg-white full-width q-pa-xs card-item__card"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ze,{horizontal:""},{default:(0,s.w5)((()=>[(0,s.Wm)(Ze,{class:"col-auto flex flex-center q-pa-none product-image"},{default:(0,s.w5)((()=>[(0,s._)("div",{style:(0,a.j5)(`color: ${l.status_color};`),class:"absolute absolute-top-left q-px-xs product-status_mobile"}," ● "+(0,a.zw)(e.$t(`statusesNames.${l.status}`)),5),(0,s.Wm)(De,{class:"rounded-borders",src:l.image,width:"138px"},null,8,["src"]),(0,s.Wm)(Qe,{class:"product-quantity_mobile",quantity:l.quantity,"onUpdate:quantity":e=>l.quantity=e,quantityModifiers:{sync:!0}},null,8,["quantity","onUpdate:quantity"])])),_:2},1024),(0,s.Wm)(Ze,{class:"col q-pa-none",style:{"min-width":"170px"}},{default:(0,s.w5)((()=>[(0,s._)("div",p,[(0,s._)("span",f,(0,a.zw)(l.name),1),(0,s.Wm)(Ne,{onClick:t[1]||(t[1]=()=>{}),class:"flip-vertical q-px-none copy-btn",color:"grey-5",flat:"",icon:"mdi-content-copy",size:"sm"})]),(0,s._)("div",w,[(0,s._)("div",y,[(0,s._)("div",_,(0,a.zw)(e.$t("assemblyNumber"))+" : ",1),(0,s._)("div",g,(0,a.zw)(l.assembly_number),1)]),(0,s.Wm)(Ne,{onClick:t[2]||(t[2]=()=>{}),class:"flip-vertical q-px-none copy-btn",color:"grey-5",flat:"",icon:"mdi-content-copy",size:"sm"})]),(0,s._)("div",{class:"text-subtitle2 q-mt-sm product-status",style:(0,a.j5)(`color: ${l.status_color};`)},(0,a.zw)(e.$t(`statusesNames.${l.status}`)),5),(0,s._)("div",b,[(0,s._)("div",x,[(0,s._)("div",q,(0,a.zw)(l.vat_price)+" ₪ ",1),(0,s._)("div",h,(0,a.zw)(e.$t("withoutVat"))+" : "+(0,a.zw)(l.price)+" ₪ ",1)]),(0,s._)("div",v,[(0,s.Wm)(Qe,{quantity:l.quantity,"onUpdate:quantity":e=>l.quantity=e,quantityModifiers:{sync:!0}},null,8,["quantity","onUpdate:quantity"])])])])),_:2},1024),(0,s.Wm)(Ae,{vertical:"",class:"q-my-sm q-mx-sm"}),(0,s.Wm)(Ze,{class:"col q-pa-none product-specifications"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ie,{class:"q-pa-none",style:{height:"100%"}},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.characteristics,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"q-mb-xs line-height-17",key:e.id},[(0,s._)("div",W,(0,a.zw)(e.category),1),(0,s._)("div",k,(0,a.zw)(e.name),1)])))),128))])),_:2},1024),(0,s.Wm)(Ne,{onClick:t[3]||(t[3]=t=>e.showConfirmDelete=!0),class:"absolute-top-right bg-white",color:"grey-4",flat:"",icon:"mdi-close",padding:"0",size:"xs",style:{"border-radius":"0"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Pe,{delay:1e3,offset:[10,10],anchor:"top middle",class:"bg-grey-3 text-black shadow-3",self:"bottom middle"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.$t("remove")),1)])),_:1})])),_:1})])),_:2},1024)])),_:2},1024),(0,s.Wm)(Ne,{class:"q-pa-none product-remove_mobile",onClick:t[4]||(t[4]=t=>e.showConfirmDelete=!0),color:"grey-6",flat:"",icon:"mdi-cart-off"})])),_:2},1024)))),128))])])),_:1})):(0,s.kq)("",!0)])),_:1})])])])):(0,s.kq)("",!0),"continue-ordering"===e.cartMode?((0,s.wg)(),(0,s.j4)(Ze,{key:1,class:"q-pa-none q-px-xs card-ordering card-wrapper"},{default:(0,s.w5)((()=>[(0,s._)("div",z,[(0,s.Wm)(Ze,{class:"q-py-none"},{default:(0,s.w5)((()=>[(0,s._)("div",V,[(0,s._)("div",C,(0,a.zw)(e.$t("customerCart")),1)])])),_:1}),(0,s.Wm)(je,{cartProducts:e.cartProducts},null,8,["cartProducts"])])])),_:1})):(0,s.kq)("",!0),"continue-ordering"===e.cartMode?((0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("div",$,[(0,s._)("div",T,[(0,s.Wm)(Me,{class:"bg-white",flat:"",style:{overflow:"hidden"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Ze,{class:"q-py-xs"},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s._)("h6",P,(0,a.zw)(e.$t("clientInformation")),1)])])),_:1}),(0,s.Wm)(Ze,{class:"row q-col-gutter-sm q-py-xs dense-inputs"},{default:(0,s.w5)((()=>[(0,s.Wm)(Re,{rules:[e=>!!e||""],class:"col-xs-6 col-sm-3 font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:"",type:"tel",modelValue:e.form.mobilePhone,"onUpdate:modelValue":t[5]||(t[5]=t=>e.form.mobilePhone=t)},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.mobilePhone})},[(0,s.Uk)((0,a.zw)(e.$t("mobilePhone"))+" ",1),N],2)])),_:1},8,["rules","modelValue"]),(0,s.Wm)(Re,{rules:[e=>!!e||""],class:"col-xs-6 col-sm-5 font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:"",type:"email",modelValue:e.form.email,"onUpdate:modelValue":t[6]||(t[6]=t=>e.form.email=t)},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.email})},[(0,s.Uk)((0,a.zw)(e.$t("email"))+" ",1),Z],2)])),append:(0,s.w5)((()=>[(0,s.Wm)(Be,{name:"mdi-information-outline"},{default:(0,s.w5)((()=>[(0,s.Wm)(Pe,{delay:1e3,offset:[10,10],anchor:"bottom left",class:"bg-grey-3 text-black shadow-3","max-width":"230px",self:"bottom right"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.$t("preOrderAlert")),1)])),_:1})])),_:1})])),_:1},8,["rules","modelValue"]),D,(0,s.Wm)(Re,{rules:[e=>!!e||""],modelValue:e.form.name,"onUpdate:modelValue":t[7]||(t[7]=t=>e.form.name=t),class:"col-sm-3 font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.name})},[(0,s.Uk)((0,a.zw)(e.$t("name"))+" ",1),Q],2)])),_:1},8,["rules","modelValue"]),(0,s.Wm)(Re,{rules:[e=>!!e||""],modelValue:e.form.surname,"onUpdate:modelValue":t[8]||(t[8]=t=>e.form.surname=t),class:"col-sm-3 font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.surname})},[(0,s.Uk)((0,a.zw)(e.$t("surname"))+" ",1),A],2)])),_:1},8,["rules","modelValue"]),(0,s.Wm)(Re,{modelValue:e.form.companyName,"onUpdate:modelValue":t[9]||(t[9]=t=>e.form.companyName=t),class:"col-sm-3 font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.companyName})},(0,a.zw)(e.$t("companyName")),3)])),_:1},8,["modelValue"]),(0,s.Wm)(Re,{modelValue:e.form.passport,"onUpdate:modelValue":t[10]||(t[10]=t=>e.form.passport=t),class:"col-sm-3 font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.passport})},(0,a.zw)(e.$t("passport")),3)])),_:1},8,["modelValue"]),(0,s.Wm)(Re,{rules:[e=>!!e||""],modelValue:e.form.city,"onUpdate:modelValue":t[11]||(t[11]=t=>e.form.city=t),class:"col-sm-3 font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.city})},[(0,s.Uk)((0,a.zw)(e.$t("city"))+" ",1),I],2)])),_:1},8,["rules","modelValue"]),(0,s.Wm)(Re,{rules:[e=>!!e||""],modelValue:e.form.street,"onUpdate:modelValue":t[12]||(t[12]=t=>e.form.street=t),class:"col-sm-3 font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.street})},[(0,s.Uk)((0,a.zw)(e.$t("street"))+" ",1),M],2)])),_:1},8,["rules","modelValue"]),(0,s.Wm)(Re,{rules:[e=>!!e||""],modelValue:e.form.house,"onUpdate:modelValue":t[13]||(t[13]=t=>e.form.house=t),class:"col font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.house})},[(0,s.Uk)((0,a.zw)(e.$t("house"))+" ",1),j],2)])),_:1},8,["rules","modelValue"]),(0,s.Wm)(Re,{rules:[e=>!!e||""],modelValue:e.form.flat,"onUpdate:modelValue":t[14]||(t[14]=t=>e.form.flat=t),class:"col font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.flat})},[(0,s.Uk)((0,a.zw)(e.$t("flat"))+" ",1),R],2)])),_:1},8,["rules","modelValue"]),(0,s.Wm)(Re,{modelValue:e.form.floor,"onUpdate:modelValue":t[15]||(t[15]=t=>e.form.floor=t),class:"col font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.floor})},(0,a.zw)(e.$t("floor")),3)])),_:1},8,["modelValue"]),(0,s.Wm)(Re,{modelValue:e.form.postAddress,"onUpdate:modelValue":t[16]||(t[16]=t=>e.form.postAddress=t),class:"col font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.postAddress})},(0,a.zw)(e.$t("postAddress")),3)])),_:1},8,["modelValue"]),B,(0,s.Wm)(Se,{options:e.paymentTypeOptions,rules:[e=>!!e||""],class:"col-xs-6 font-medium text-body1 q-pb-none",dense:"","label-slot":"","menu-anchor":"bottom left","menu-self":"top left",outlined:"","popup-content-style":"transition-delay: 0.25s;",modelValue:e.form.paymentType,"onUpdate:modelValue":t[17]||(t[17]=t=>e.form.paymentType=t)},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)(["q-ma-none",{"text-right":e.form.paymentType}])},[(0,s.Uk)((0,a.zw)(e.$t("paymentType"))+" ",1),S],2)])),_:1},8,["options","rules","modelValue"]),(0,s.Wm)(Re,{modelValue:e.form.comment,"onUpdate:modelValue":t[18]||(t[18]=t=>e.form.comment=t),class:"col-xs-6 font-medium text-body1",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.comment})},(0,a.zw)(e.$t("comment")),3)])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(Ze,{class:"row q-pt-xl q-px-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ee,{rules:[e=>!!e||""],class:"col-xs-12 font-size-15",color:"grey",modelValue:e.form.agreeEmailBill,"onUpdate:modelValue":t[19]||(t[19]=t=>e.form.agreeEmailBill=t)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.$t("agreeEmailBill")),1)])),_:1},8,["rules","modelValue"]),(0,s.Wm)(Ee,{rules:[e=>!!e||""],class:"col-xs-12 font-size-15",color:"grey",modelValue:e.form.wantAnotherNameBill,"onUpdate:modelValue":t[20]||(t[20]=t=>e.form.wantAnotherNameBill=t)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.$t("wantAnotherNameBill")),1)])),_:1},8,["rules","modelValue"])])),_:1}),(0,s.Wm)(Ze,{class:"row q-py-none q-col-gutter-sm"},{default:(0,s.w5)((()=>[e.form.wantAnotherNameBill?((0,s.wg)(),(0,s.j4)(Re,{key:0,rules:[e=>!!e||""],class:"col-xs-6 col-sm-3 font-medium line-height-17 text-body1",color:"grey",dense:"","label-slot":"",outlined:"",modelValue:e.form.billCompanyName,"onUpdate:modelValue":t[21]||(t[21]=t=>e.form.billCompanyName=t)},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.billCompanyName})},[(0,s.Uk)((0,a.zw)(e.$t("billCompanyName"))+" ",1),E],2)])),_:1},8,["rules","modelValue"])):(0,s.kq)("",!0),e.form.wantAnotherNameBill?((0,s.wg)(),(0,s.j4)(Re,{key:1,rules:[e=>!!e||""],class:"col-xs-6 col-sm-3 font-medium line-height-17 text-body1",color:"grey",dense:"","label-slot":"",outlined:"",modelValue:e.form.billPassport,"onUpdate:modelValue":t[22]||(t[22]=t=>e.form.billPassport=t)},{label:(0,s.w5)((()=>[(0,s._)("div",{class:(0,a.C_)({"text-right":e.form.billPassport})},[(0,s.Uk)((0,a.zw)(e.$t("billPassport"))+" ",1),Y],2)])),_:1},8,["rules","modelValue"])):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(Ze,{class:"row q-col-gutter-sm q-pt-xl q-px-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ee,{rules:[e=>!!e||""],class:"font-size-15 line-height-17",color:"grey",modelValue:e.form.agreement,"onUpdate:modelValue":t[24]||(t[24]=t=>e.form.agreement=t)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.$t("confirmReadUnderstoodAgreed"))+" ",1),(0,s._)("a",{onClick:t[23]||(t[23]=(0,o.iM)((()=>{}),["stop"])),target:"_blank",href:"/terms-of-use"},(0,a.zw)(e.$t("usageAndPrivacyPolicy")),1),O,X])),_:1},8,["rules","modelValue"]),F,G,(0,s.Wm)(Ne,{label:e.$t("makePreOrder"),onClick:t[25]||(t[25]=t=>e.showInfoDialog=!0),class:"col-xs-6 col-sm-5 q-mx-none hover-black-bg q-mt-xs",flat:"","no-caps":"","no-wrap":"",outline:""},null,8,["label"])])),_:1})])),_:1})]),H])])):(0,s.kq)("",!0),(0,s.Wm)(Ke,{modelValue:e.productDialog,"onUpdate:modelValue":t[31]||(t[31]=t=>e.productDialog=t),persistent:"",style:{overflow:"hidden"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Me,{style:{overflow:"hidden",width:"80vw","max-width":"1100px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Ze,null,{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(Ne,{flat:"",square:"",dense:"",icon:"close"},null,512),[[tt]])])),_:1}),(0,s.Wm)(Ze,{style:{"max-height":"80vh"},class:"scroll"},{default:(0,s.w5)((()=>[(0,s._)("div",K,[(0,s._)("div",L,[(0,s.Wm)(Xe,{animated:"",height:"250px",infinite:"","navigation-position":"left",swipeable:"",thumbnails:"",modelValue:e.slideProduct,"onUpdate:modelValue":t[27]||(t[27]=t=>e.slideProduct=t),fullscreen:e.slideProductFullscreen,"onUpdate:fullscreen":t[28]||(t[28]=t=>e.slideProductFullscreen=t)},{control:(0,s.w5)((()=>[(0,s.Wm)(Oe,{position:"top-right",offset:[18,18]},{default:(0,s.w5)((()=>[(0,s.Wm)(Ne,{square:"",dense:"",color:"grey","text-color":"white",icon:e.slideProductFullscreen?"close_fullscreen":"open_in_full",onClick:t[26]||(t[26]=t=>e.slideProductFullscreen=!e.slideProductFullscreen)},null,8,["icon"])])),_:1})])),default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.product.images,(e=>((0,s.wg)(),(0,s.j4)(Ye,{"img-src":e.src,key:e.id,name:e.id,style:{"background-size":"contain","background-repeat":"no-repeat"}},null,8,["img-src","name"])))),128))])),_:1},8,["modelValue","fullscreen"]),(0,s.Wm)(Ae,{color:"grey-4"}),(0,s._)("div",J,[(0,s._)("span",ee,(0,a.zw)(e.product.name),1),(0,s.Wm)(Ne,{onClick:t[29]||(t[29]=()=>{}),class:"flip-vertical q-px-none",color:"grey-5",flat:"",icon:"mdi-content-copy",size:"sm"})]),(0,s._)("div",te,[(0,s._)("span",le,(0,a.zw)(e.assembly.assembly_number)+" : "+(0,a.zw)(e.$t("assemblyNumber")),1),(0,s.Wm)(Ne,{onClick:t[30]||(t[30]=()=>{}),class:"flip-vertical q-px-none",color:"grey-5",flat:"",icon:"mdi-content-copy",size:"sm"})])]),(0,s._)("div",se,[(0,s.Wm)(He,{class:"rounded-borders",dense:"",padding:"",separator:""},{default:(0,s.w5)((()=>[(0,s.Wm)(Ge,{class:"font-medium bg-grey-1"},{default:(0,s.w5)((()=>[(0,s.Wm)(Fe,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.$t("characteristics")),1)])),_:1}),(0,s.Wm)(Fe,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.$t("values")),1)])),_:1})])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.product.characteristics,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(Ge,{key:e.id,class:"text-grey-6",clickable:""},{default:(0,s.w5)((()=>[(0,s.Wm)(Fe,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.name),1)])),_:2},1024),(0,s.Wm)(Fe,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.value),1)])),_:2},1024)])),_:2},1536)),[[lt]]))),128))])),_:1}),(0,s._)("div",null,[(0,s._)("div",ae,(0,a.zw)(e.$t("description")),1),(0,s._)("div",oe,(0,a.zw)(e.product.description),1)])])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(Ke,{modelValue:e.showConfirmDelete,"onUpdate:modelValue":t[32]||(t[32]=t=>e.showConfirmDelete=t),persistent:""},{default:(0,s.w5)((()=>[(0,s.Wm)(Me,{class:"q-pa-md",style:{width:"320px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Ze,{class:"row items-center q-pa-xs"},{default:(0,s.w5)((()=>[(0,s._)("div",ne,(0,a.zw)(e.$t("confirmRemoveProduct")),1)])),_:1}),(0,s.Wm)(Ze,{class:"q-pa-xs q-pt-md"},{default:(0,s.w5)((()=>[(0,s._)("div",ie,[(0,s._)("div",re,[(0,s.wy)((0,s.Wm)(Ne,{"no-caps":"",outline:"",label:e.$t("yes"),class:"full-width"},null,8,["label"]),[[tt]])]),(0,s._)("div",de,[(0,s.wy)((0,s.Wm)(Ne,{"no-caps":"",outline:"",label:e.$t("no"),class:"full-width"},null,8,["label"]),[[tt]])])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(Ke,{modelValue:e.showInfoDialog,"onUpdate:modelValue":t[33]||(t[33]=t=>e.showInfoDialog=t),persistent:""},{default:(0,s.w5)((()=>[(0,s.Wm)(Me,{class:"q-pa-md",style:{width:"330px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Ze,{class:"row items-center full-width q-pa-xs q-pt-none"},{default:(0,s.w5)((()=>[(0,s._)("div",ce,(0,a.zw)(e.$t("thanksForOrdering")),1),(0,s._)("div",me,(0,a.zw)(e.$t("infoAboutSendingEmails",{email:"brpcsys@gmail.com"})),1)])),_:1}),(0,s.Wm)(Le,{align:"center",class:"q-pa-xs q-pt-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ne,{label:e.$t("backToHome"),"no-caps":"",outline:"",to:"/"},null,8,["label"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(Je,{offset:[18,18],class:"full-width no-pointer-events card-price",expand:"",position:"top-right"},{default:(0,s.w5)((()=>["start"===e.cartMode?((0,s.wg)(),(0,s.iD)("div",ue,[(0,s._)("div",pe,[(0,s._)("div",fe,[(0,s.Wm)(Me,{class:"bg-white all-pointer-events",flat:""},{default:(0,s.w5)((()=>[(0,s.Wm)(Ze,null,{default:(0,s.w5)((()=>[(0,s._)("div",we,(0,a.zw)(e.$t("totalPayment"))+" : ",1),(0,s._)("div",ye,[(0,s._)("div",_e,[(0,s._)("div",ge,(0,a.zw)(e.assembly.vat_price)+" ₪ ",1),(0,s._)("div",be,(0,a.zw)(e.$t("includeVat"))+" : "+(0,a.zw)(e.assembly.price)+" ₪ ",1)])]),(0,s._)("div",xe,[(0,s.Wm)(Ne,{label:e.$t("continueOrdering"),onClick:t[34]||(t[34]=t=>e.cartMode="continue-ordering"),class:"q-px-xl q-mx-none full-width hover-black-bg",flat:"","no-caps":"","no-wrap":"",outline:""},null,8,["label"])])])),_:1})])),_:1})])])])):(0,s.kq)("",!0),"continue-ordering"===e.cartMode?((0,s.wg)(),(0,s.iD)("div",qe,[(0,s._)("div",he,[(0,s._)("div",ve,[(0,s.Wm)(Me,{class:"bg-white all-pointer-events",flat:""},{default:(0,s.w5)((()=>[(0,s.Wm)(Ze,{class:"q-pb-xs q-pt-md"},{default:(0,s.w5)((()=>[(0,s._)("div",We,(0,a.zw)(e.$t("customerCart")),1)])),_:1}),(0,s.Wm)(Ae,{class:"q-mx-md q-mt-md"}),(0,s.Wm)(Ze,{class:"q-pt-sm"},{default:(0,s.w5)((()=>[(0,s._)("div",ke,(0,a.zw)(e.$t("totalPayment"))+" : ",1),(0,s._)("div",ze,[(0,s._)("div",null,[(0,s._)("div",Ve,(0,a.zw)(e.assembly.vat_price)+" ₪ ",1),(0,s._)("div",Ce,(0,a.zw)(e.$t("includeVat"))+" : "+(0,a.zw)(e.assembly.price)+" ₪ ",1)])])])),_:1})])),_:1})])])])):(0,s.kq)("",!0)])),_:1})])),_:1})}var $e=l(6537),Te=l(6111),Pe=l(7874);const Ne=(0,s.aZ)({computed:{},components:{CartMini:$e.Z,QuantityInput:Te.Z},data(){return{assembly:{assembly_number:"5878888886456",description:"С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и бога",id:3,image:"images/town2.png",images:[{id:1,src:"images/town2.png"},{id:2,src:"images/monitor.png"},{id:3,src:"images/town2.png"},{id:4,src:"images/town.png"},{id:5,src:"images/town2.png"}],name:"ssd2TbRX580_ssd2Tb_RX5 _ssd2Tbd2Tb_RX580_ss ssd2TbRX580_ssd2Tb_RX5 ssd2TbRX580_ss fdfdfdfdfdf",price:1151,status:"instock",status_color:"#72BA52",vat_price:1438.75,products:[{id:1,category:"קירור אוויר למעבד",name:"Zalman CNPS90"},{id:2,category:"אם למעבדי אינטל דור ",name:"GIGABYTE B365M H 91 8"},{id:3,category:"מעבד דור",name:"TEL G5400 TRAY PENTIUM 1151 8"},{id:4,category:"מארז וספק",name:"SOLID 1700 12CM 500W ATX"},{id:5,category:"צורב פנימי למחשב ניי",name:"LG DVD-RW BLACK"},{id:6,category:"דיסק קשיח פנימי",name:"WD 1TB Blue 7200rpm 64MB 3.5"},{id:7,category:"סק פנימי",name:"выпыSSD 240GB GSTFS31240 GNTD"},{id:8,category:"זכרון לניי •סק פנימי",name:"INNGSTON KVR26N19S6-4 4GB DDR4 2666"}],quantity:2},cartMode:"start",errors:{email:!1},form:{mobilePhone:null,email:null,name:null,surname:null,companyName:null,billCompanyName:null,billPassport:null,passport:null,city:null,street:null,house:null,flat:null,floor:null,postAddress:null,paymentType:null,comment:null,agreement:!1,agreeEmailBill:!1,wantAnotherNameBill:!1},paymentTypeOptions:[this.$t("paymentTypeOptions.creditCard"),this.$t("paymentTypeOptions.bankTransfer"),this.$t("paymentTypeOptions.cashUpTo12000"),this.$t("paymentTypeOptions.checkDeletedUntilWeReceiveMoney")],product:{description:"С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия.",id:3,image:"images/hdd.png",images:[{id:1,src:"images/hdd.png"},{id:2,src:"images/town2.png"},{id:3,src:"images/town2.png"}],name:"ssd2TbRX580_ssd2Tb_ RX580_ssd2Tb d2TbRX58 0_sX580_ssd2Tb",price:1151,status:"instock",status_color:"#72BA52",vat_price:1438.75,characteristics:[{id:1,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:2,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:3,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:4,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:5,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:6,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:7,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:8,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"}]},product1:{val:"2",quantity:2},product2:{val:"3",quantity:1},product3:{val:["1","2","3"],quantity:1},productDialog:!1,showConfirmDelete:!1,showInfoDialog:!1,slide:1,slideProduct:1,slideProductFullscreen:!1,socialNetworks:[{id:1,name:"telegram",icon:""},{id:2,name:"whatsapp",icon:""},{id:3,name:"viber",icon:""},{id:3,name:"facebook",icon:""},{id:3,name:"twitter",icon:""}]}},name:"PageCart",setup(){const e=(0,Pe.oR)();return{cartProducts:e.getters["cart/products"]}}});var Ze=l(4379),De=l(151),Qe=l(5589),Ae=l(8240),Ie=l(8870),Me=l(4027),je=l(5869),Re=l(7704),Be=l(4842),Se=l(4554),Ee=l(3017),Ye=l(6271),Oe=l(6778),Xe=l(1277),Fe=l(4593),Ge=l(7607),He=l(7011),Ke=l(3414),Le=l(2035),Je=l(9367),et=l(1007),tt=l(6115),lt=l(677),st=l(6489),at=l(7518),ot=l.n(at);Ne.render=Ue;const nt=Ne;ot()(Ne,"components",{QPage:Ze.Z,QCard:De.Z,QCardSection:Qe.Z,QBtn:Ae.Z,QTooltip:Ie.Z,QImg:Me.Z,QSeparator:je.Z,QScrollArea:Re.Z,QInput:Be.Z,QIcon:Se.Z,QSelect:Ee.Z,QCheckbox:Ye.Z,QDialog:Oe.Z,QCarousel:Xe.Z,QCarouselSlide:Fe.Z,QCarouselControl:Ge.Z,QList:He.Z,QItem:Ke.Z,QItemSection:Le.Z,QCardActions:Je.Z,QPageSticky:et.Z,QField:tt.Z}),ot()(Ne,"directives",{ClosePopup:lt.Z,Ripple:st.Z})}}]);
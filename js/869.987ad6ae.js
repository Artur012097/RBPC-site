"use strict";(self["webpackChunkrbpc_shop"]=self["webpackChunkrbpc_shop"]||[]).push([[869],{712:(e,t,l)=>{l.d(t,{Z:()=>q});var a=l(3673),s=l(2323);const o={class:"column q-pa-xs q-gutter-sm full-width card-item__wrapper",style:{width:"100%"}},n={class:"text-body2 ellipsis-2-lines font-medium product-name"},i={class:"text-caption text-grey line-height-15 product-number"},c={class:"row full-width",style:{}},r={class:"col"},d={class:"text-body2 font-medium line-height-15 product-price"},m={class:"text-caption text-grey-6 product-desc"},u={class:"col-auto product-quantity"};function p(e,t,l,p,_,f){const y=(0,a.up)("q-img"),w=(0,a.up)("QuantityInput"),g=(0,a.up)("q-card-section"),b=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cartProducts,(t=>((0,a.wg)(),(0,a.j4)(b,{key:t.id,class:"col light-shadow-10 bg-white full-width overflow-hidden card-item__block",style:{}},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{horizontal:"",style:{width:"100%"},class:"full-width card-item__card"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{class:"col-auto flex flex-center q-pa-none product-image"},{default:(0,a.w5)((()=>[(0,a._)("div",{style:(0,s.j5)(`color: ${t.status_color};`),class:"absolute absolute-top-left q-px-xs product-status_mobile"}," ● "+(0,s.zw)(e.$t(`statusesNames.${t.status}`)),5),(0,a.Wm)(y,{class:"rounded-borders",src:t.image,width:"90px"},null,8,["src"]),(0,a.Wm)(w,{class:"product-quantity_mobile",quantity:t.quantity,"onUpdate:quantity":e=>t.quantity=e,quantityModifiers:{sync:!0}},null,8,["quantity","onUpdate:quantity"])])),_:2},1024),(0,a.Wm)(g,{class:"q-pa-xs col",style:{"w idth":"100%"}},{default:(0,a.w5)((()=>[(0,a._)("div",n,(0,s.zw)(t.name),1),(0,a._)("div",i,(0,s.zw)(e.$t("assemblyNumber"))+" : "+(0,s.zw)(t.assembly_number),1),(0,a._)("div",{class:"text-caption line-height-19 product-status",style:(0,s.j5)(`color: ${t.status_color};`)},(0,s.zw)(e.$t(`statusesNames.${t.status}`)),5),(0,a._)("div",c,[(0,a._)("div",r,[(0,a._)("div",d,(0,s.zw)(t.vat_price)+" ₪ ",1),(0,a._)("div",m,(0,s.zw)(e.$t("withoutVat"))+" : "+(0,s.zw)(t.price)+" ₪ ",1)]),(0,a._)("div",u,[(0,a.Wm)(w,{quantity:t.quantity,"onUpdate:quantity":e=>t.quantity=e,quantityModifiers:{sync:!0}},null,8,["quantity","onUpdate:quantity"])])])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])}var _=l(6111);const f=(0,a.aZ)({components:{QuantityInput:_.Z},name:"CartMini",props:{cartProducts:{type:Array,default:function(){return[]}}}});var y=l(151),w=l(5589),g=l(4027),b=l(7518),x=l.n(b);f.render=p;const q=f;x()(f,"components",{QCard:y.Z,QCardSection:w.Z,QImg:g.Z})},6111:(e,t,l)=>{l.d(t,{Z:()=>u});var a=l(3673);const s={class:"quantity-input"};function o(e,t,l,o,n,i){const c=(0,a.up)("q-btn"),r=(0,a.up)("q-separator"),d=(0,a.up)("q-input");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(d,{"model-value":e.quantity,onInput:t[2]||(t[2]=t=>e.$emit("update:quantity",t.target.value)),color:"grey-4",dense:"","input-class":"text-caption text-center q-pa-none q-ma-none",maxlength:"2",outlined:"",style:{"max-width":"90px",padding:"0",margin:"0"},"input-style":"padding: 0; margin: 0;",class:"text-caption bg-white dense-quantity"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(c,{onClick:t[0]||(t[0]=t=>e.$emit("update:quantity",e.quantity+1)),class:"q-ma-none text-caption",dense:"",flat:"",icon:"add",style:{height:"23px"}}),(0,a.Wm)(r,{color:"grey-4",vertical:""})])),append:(0,a.w5)((()=>[(0,a.Wm)(r,{color:"grey-4",vertical:""}),(0,a.Wm)(c,{onClick:t[1]||(t[1]=t=>e.$emit("update:quantity",e.quantity-1)),class:"q-ma-none text-caption",dense:"",flat:"",icon:"remove",style:{height:"23px"}})])),_:1},8,["model-value"])])}const n=(0,a.aZ)({name:"QuantityInput",props:{quantity:{type:Number,default:0}}});var i=l(4842),c=l(8240),r=l(5869),d=l(7518),m=l.n(d);n.render=o;const u=n;m()(n,"components",{QInput:i.Z,QBtn:c.Z,QSeparator:r.Z})},1869:(e,t,l)=>{l.r(t),l.d(t,{default:()=>it});l(9377),l(246);var a=l(3673),s=l(2323),o=l(8880);const n={key:0,class:"col-xs-10 limited-width card-wrapper"},i={class:"row q-col-gutter-md q-mt-xs card-item"},c={class:"col-xs-9 q-pb-lg q-mb-xl card-item__wrapper"},r={class:"row justify-between"},d={class:"flex flex-center text-grey-6 text-body1 card-item__header-title"},m={class:"flex flex-center"},u={class:"q-px-none q-py-none column items-stretch q-gutter-sm justify-between card-item__block-wrapper"},p={class:"flex flex-center justify-between no-wrap"},_={class:"q-mb-xs ellipsis-2-lines text-body1 line-height-19 product-name"},f={class:"flex flex-center justify-between no-wrap product-assebmly"},y={class:"text-body2 text-grey row"},w={class:"col-auto product-assebmlyNumber"},g={class:"col ellipsis-2-lines q-px-xs product-number"},b={class:"row items-end"},x={class:"col"},q={class:"text-body1 font-medium line-height-19 product-price"},h={class:"text-subtitle2 font-medium text-grey-6 line-height-17 product-desc"},v={class:"col-auto text-start product-quantity"},k={class:"font-meduim content-stretch text-grey-7"},W={class:"text-grey-5"},z={class:"card-item__block"},V={class:"row justify-between"},$={class:"flex flex-center text-grey-6 text-body1"},C={key:2,class:"col-xs-10 limited-width card-continue"},U={class:"row justify-between q-col-gutter-md q-mt-xs card-continue__wrapper"},T={class:"col-xs-7 card-continue__item"},P={class:"q-ma-none q-pa-none text-grey-7 font-medium card-continue__title"},N=(0,a._)("span",{class:"text-negative"},"*",-1),Z=(0,a._)("span",{class:"text-negative"},"*",-1),D=(0,a._)("div",{class:"col-xs-12 q-pa-none q-ma-none"},null,-1),Q=(0,a._)("span",{class:"text-negative"},"*",-1),A=(0,a._)("span",{class:"text-negative"},"*",-1),I=(0,a._)("span",{class:"text-negative"},"*",-1),M=(0,a._)("span",{class:"text-negative"},"*",-1),j=(0,a._)("span",{class:"text-negative"},"*",-1),R=(0,a._)("span",{class:"text-negative"},"*",-1),B=(0,a._)("div",{class:"col-xs-12 q-pa-none q-ma-none"},null,-1),S=(0,a._)("span",{class:"text-negative"},"*",-1),E=(0,a._)("span",{class:"text-negative"},"*",-1),O=(0,a._)("span",{class:"text-negative"},"*",-1),Y=(0,a.Uk)(),X=(0,a._)("span",{class:"text-negative"},"*",-1),F=(0,a._)("div",{class:"col-xs-12 q-pa-none q-ma-none"},null,-1),G=(0,a._)("div",{class:"col-xs-6 col-sm-7 q-pa-none q-ma-none"},null,-1),H=(0,a._)("div",{class:"col-xs-5 card-continue__empty"},[(0,a.kq)(' <q-card\n            class="bg-white"\n            flat\n            style="overflow: hidden;"\n          >\n            <q-card-section class="q-py-xs">\n              <div>\n                <h6 class="q-ma-none q-pa-none text-grey-7"> {{ $t(\'customerCart\') }} </h6>\n              </div>\n            </q-card-section>\n            <q-card-section style="max-height: 45vh; overflow-x: hidden;" class="scroll">\n              <CartMini\n                :cartProducts="cartProducts"\n              />\n            </q-card-section>\n            <q-separator class="q-mx-md q-mt-md" />\n            <q-card-section>\n              <div class="text-grey-6 q-mb-xs">\n                {{ $t(\'totalPayment\') }} :\n              </div>\n              <div class="flex flex-center justify-between no-wrap">\n                <div>\n                  <div class="text-h6 font-medium">\n                    {{ assembly.vat_price }} ₪\n                  </div>\n                  <div class="text-subtitle1 font-medium text-grey-6">\n                    {{ $t(\'includeVat\') }} : {{ assembly.price }} ₪\n                  </div>\n                </div>\n              </div>\n            </q-card-section>\n          </q-card> ')],-1),K={class:"row justify-between q-col-gutter-md q-mt-xs"},L={class:"col-xs-6",style:{position:"sticky",top:"50px"}},J={class:"flex flex-center justify-between no-wrap"},ee={class:"text-h6 q-mt-sm q-mb-xs ellipsis-2-lines cursor-pointer"},te={class:"flex flex-center justify-between no-wrap"},le={class:"text-caption text-grey"},ae={class:"col-xs-6"},se={class:"q-mb-sm bg-grey-1 font-medium"},oe={class:"text-body2 text-grey-6"},ne={class:"text-h6 text-center line-height-24"},ie={class:"row q-col-gutter-md justify-center confirm-delete__buttons"},ce={class:"col-6"},re={class:"col-6"},de={class:"font-size-25 line-height-30 q-mb-md text-center full-width"},me={class:"font-size-15 line-height-17"},ue={key:0,class:"col-xs-10 limited-width card-price__item"},pe={class:"row justify-between q-col-gutter-x-md q-mt-xs"},_e={class:"col-3 offset-9 card-price__wrapper"},fe={class:"text-grey-6 text-body1 q-mb-md card-price__payment"},ye={class:"justify-between no-wrap"},we={class:"text-right"},ge={class:"font-size-25 font-medium line-height-30 card-price__price"},be={class:"font-size-15 text-grey-6 card-price__desc"},xe={class:"text-start q-mt-sm card-price__button"},qe={key:1,class:"col-xs-10 limited-width card-price__item"},he={class:"row justify-between q-col-gutter-x-md q-mt-xs"},ve={class:"col-5 offset-7 card-price__wrapper"},ke={class:"text-grey-6 text-body1 line-height-19 card-price__payment"},We={class:"text-grey-6 q-mb-xs text-body1 line-height-19 card-price__payment"},ze={class:"flex flex-center justify-between no-wrap line-height-19 card-price__price"},Ve={class:"font-size-25 font-medium q-my-xs card-price__price"},$e={class:"text-subtitle1 font-medium text-grey-6 card-price__desc"},Ce={class:"text-start q-mt-sm card-price__button"};function Ue(e,t,l,Ue,Te,Pe){const Ne=(0,a.up)("q-tooltip"),Ze=(0,a.up)("q-btn"),De=(0,a.up)("q-card-section"),Qe=(0,a.up)("q-img"),Ae=(0,a.up)("QuantityInput"),Ie=(0,a.up)("q-separator"),Me=(0,a.up)("q-scroll-area"),je=(0,a.up)("q-card"),Re=(0,a.up)("CartMini"),Be=(0,a.up)("q-input"),Se=(0,a.up)("q-icon"),Ee=(0,a.up)("q-select"),Oe=(0,a.up)("q-checkbox"),Ye=(0,a.up)("q-carousel-slide"),Xe=(0,a.up)("q-carousel-control"),Fe=(0,a.up)("q-carousel"),Ge=(0,a.up)("q-item-section"),He=(0,a.up)("q-item"),Ke=(0,a.up)("q-list"),Le=(0,a.up)("q-dialog"),Je=(0,a.up)("q-card-actions"),et=(0,a.up)("q-page-sticky"),tt=(0,a.up)("q-page"),lt=(0,a.Q2)("close-popup"),at=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(tt,{class:"bg-grey-1 row justify-center card"},{default:(0,a.w5)((()=>["start"===e.cartMode?((0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",i,[(0,a._)("div",c,[(0,a.Wm)(je,{flat:"",class:"q-pr-sm q-pl-md q-pb-sm card-item__block"},{default:(0,a.w5)((()=>[(0,a.Wm)(De,{class:"q-py-none card-item__block-header"},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a._)("div",d,(0,s.zw)(e.$t("customerCart")),1),(0,a._)("div",m,[(0,a.Wm)(Ze,{onClick:t[0]||(t[0]=t=>e.showConfirmDelete=!0),class:"q-pa-none",color:"grey-6",flat:"",icon:"mdi-cart-off"},{default:(0,a.w5)((()=>[(0,a.Wm)(Ne,{delay:1e3,offset:[10,10],anchor:"top middle",class:"bg-grey-3 text-black shadow-3",self:"bottom middle"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.$t("clearCart")),1)])),_:1})])),_:1})])])])),_:1}),"start"===e.cartMode?((0,a.wg)(),(0,a.j4)(De,{key:0,class:"q-pa-xs"},{default:(0,a.w5)((()=>[(0,a._)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cartProducts,(l=>((0,a.wg)(),(0,a.j4)(je,{key:l.id,class:"light-shadow-10 bg-white full-width q-pa-xs card-item__card"},{default:(0,a.w5)((()=>[(0,a.Wm)(De,{horizontal:""},{default:(0,a.w5)((()=>[(0,a.Wm)(De,{class:"col-auto flex flex-center q-pa-none product-image"},{default:(0,a.w5)((()=>[(0,a._)("div",{style:(0,s.j5)(`color: ${l.status_color};`),class:"absolute absolute-top-left q-px-xs product-status_mobile"}," ● "+(0,s.zw)(e.$t(`statusesNames.${l.status}`)),5),(0,a.Wm)(Qe,{class:"rounded-borders",src:l.image,width:"138px"},null,8,["src"]),(0,a.Wm)(Ae,{class:"product-quantity_mobile",quantity:l.quantity,"onUpdate:quantity":e=>l.quantity=e,quantityModifiers:{sync:!0}},null,8,["quantity","onUpdate:quantity"])])),_:2},1024),(0,a.Wm)(De,{class:"col q-pa-none",style:{"min-width":"170px"}},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a._)("span",_,(0,s.zw)(l.name),1),(0,a.Wm)(Ze,{onClick:t[1]||(t[1]=()=>{}),class:"flip-vertical q-px-none copy-btn",color:"grey-5",flat:"",icon:"mdi-content-copy",size:"sm"})]),(0,a._)("div",f,[(0,a._)("div",y,[(0,a._)("div",w,(0,s.zw)(e.$t("assemblyNumber"))+" : ",1),(0,a._)("div",g,(0,s.zw)(l.assembly_number),1)]),(0,a.Wm)(Ze,{onClick:t[2]||(t[2]=()=>{}),class:"flip-vertical q-px-none copy-btn",color:"grey-5",flat:"",icon:"mdi-content-copy",size:"sm"})]),(0,a._)("div",{class:"text-subtitle2 q-mt-sm product-status",style:(0,s.j5)(`color: ${l.status_color};`)},(0,s.zw)(e.$t(`statusesNames.${l.status}`)),5),(0,a._)("div",b,[(0,a._)("div",x,[(0,a._)("div",q,(0,s.zw)(l.vat_price)+" ₪ ",1),(0,a._)("div",h,(0,s.zw)(e.$t("withoutVat"))+" : "+(0,s.zw)(l.price)+" ₪ ",1)]),(0,a._)("div",v,[(0,a.Wm)(Ae,{quantity:l.quantity,"onUpdate:quantity":e=>l.quantity=e,quantityModifiers:{sync:!0}},null,8,["quantity","onUpdate:quantity"])])])])),_:2},1024),(0,a.Wm)(Ie,{vertical:"",class:"q-my-sm q-mx-sm"}),(0,a.Wm)(De,{class:"col q-pa-none product-specifications"},{default:(0,a.w5)((()=>[(0,a.Wm)(Me,{class:"q-pa-none",style:{height:"100%"}},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.characteristics,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"q-mb-xs line-height-17",key:e.id},[(0,a._)("div",k,(0,s.zw)(e.category),1),(0,a._)("div",W,(0,s.zw)(e.name),1)])))),128))])),_:2},1024),(0,a.Wm)(Ze,{onClick:t[3]||(t[3]=t=>e.showConfirmDelete=!0),class:"absolute-top-right bg-white",color:"grey-4",flat:"",icon:"mdi-close",padding:"0",size:"xs",style:{"border-radius":"0"}},{default:(0,a.w5)((()=>[(0,a.Wm)(Ne,{delay:1e3,offset:[10,10],anchor:"top middle",class:"bg-grey-3 text-black shadow-3",self:"bottom middle"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.$t("remove")),1)])),_:1})])),_:1})])),_:2},1024)])),_:2},1024),(0,a.Wm)(Ze,{class:"q-pa-none product-remove_mobile",onClick:t[4]||(t[4]=t=>e.showConfirmDelete=!0),color:"grey-6",flat:"",icon:"mdi-cart-off"})])),_:2},1024)))),128))])])),_:1})):(0,a.kq)("v-if",!0)])),_:1})])])])):(0,a.kq)("v-if",!0),"continue-ordering"===e.cartMode?((0,a.wg)(),(0,a.j4)(De,{key:1,class:"q-pa-none q-px-xs card-ordering card-wrapper"},{default:(0,a.w5)((()=>[(0,a._)("div",z,[(0,a.Wm)(De,{class:"q-py-none card-item__block-header card-item__header-title"},{default:(0,a.w5)((()=>[(0,a._)("div",V,[(0,a._)("div",$,(0,s.zw)(e.$t("customerCart")),1)])])),_:1}),(0,a.Wm)(Re,{cartProducts:e.cartProducts},null,8,["cartProducts"])])])),_:1})):(0,a.kq)("v-if",!0),"continue-ordering"===e.cartMode?((0,a.wg)(),(0,a.iD)("div",C,[(0,a._)("div",U,[(0,a._)("div",T,[(0,a.Wm)(je,{class:"bg-white",flat:"",style:{overflow:"hidden"}},{default:(0,a.w5)((()=>[(0,a.Wm)(De,{class:"q-py-xs"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("h6",P,(0,s.zw)(e.$t("clientInformation")),1),(0,a.kq)(" <div class=\"text-grey-5\">\n                  {{ $t('preOrderAlert') }}\n                </div> ")])])),_:1}),(0,a.Wm)(De,{class:"row q-col-gutter-sm q-py-xs dense-inputs card-continue__fields"},{default:(0,a.w5)((()=>[(0,a.Wm)(Be,{rules:[e=>!!e||""],class:"col-xs-6 col-sm-3 font-medium text-body1 card-continue__field card-continue__phone",color:"grey",dense:"","label-slot":"",outlined:"",type:"tel",modelValue:e.form.mobilePhone,"onUpdate:modelValue":t[5]||(t[5]=t=>e.form.mobilePhone=t)},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.mobilePhone})},[(0,a.Uk)((0,s.zw)(e.$t("mobilePhone"))+" ",1),N],2)])),_:1},8,["rules","modelValue"]),(0,a.Wm)(Be,{rules:[e=>!!e||""],class:"col-xs-6 col-sm-5 font-medium text-body1 card-continue__field card-continue__email",color:"grey",dense:"","label-slot":"",outlined:"",type:"email",modelValue:e.form.email,"onUpdate:modelValue":t[6]||(t[6]=t=>e.form.email=t)},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.email})},[(0,a.Uk)((0,s.zw)(e.$t("email"))+" ",1),Z],2)])),append:(0,a.w5)((()=>[(0,a.Wm)(Se,{name:"mdi-information-outline"},{default:(0,a.w5)((()=>[(0,a.Wm)(Ne,{delay:1e3,offset:[10,10],anchor:"bottom left",class:"bg-grey-3 text-black shadow-3","max-width":"230px",self:"bottom right"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.$t("preOrderAlert")),1)])),_:1})])),_:1})])),_:1},8,["rules","modelValue"]),D,(0,a.Wm)(Be,{rules:[e=>!!e||""],modelValue:e.form.name,"onUpdate:modelValue":t[7]||(t[7]=t=>e.form.name=t),class:"col-sm-3 font-medium text-body1 card-continue__field card-continue__name",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.name})},[(0,a.Uk)((0,s.zw)(e.$t("name"))+" ",1),Q],2)])),_:1},8,["rules","modelValue"]),(0,a.Wm)(Be,{rules:[e=>!!e||""],modelValue:e.form.surname,"onUpdate:modelValue":t[8]||(t[8]=t=>e.form.surname=t),class:"col-sm-3 font-medium text-body1 card-continue__field card-continue__surname",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.surname})},[(0,a.Uk)((0,s.zw)(e.$t("surname"))+" ",1),A],2)])),_:1},8,["rules","modelValue"]),(0,a.Wm)(Be,{modelValue:e.form.companyName,"onUpdate:modelValue":t[9]||(t[9]=t=>e.form.companyName=t),class:"col-sm-3 font-medium text-body1 card-continue__field card-continue__company",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.companyName})},(0,s.zw)(e.$t("companyName")),3)])),_:1},8,["modelValue"]),(0,a.Wm)(Be,{modelValue:e.form.passport,"onUpdate:modelValue":t[10]||(t[10]=t=>e.form.passport=t),class:"col-sm-3 font-medium text-body1 card-continue__field card-continue__passport",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.passport})},(0,s.zw)(e.$t("passport")),3)])),_:1},8,["modelValue"]),(0,a.Wm)(Be,{rules:[e=>!!e||""],modelValue:e.form.city,"onUpdate:modelValue":t[11]||(t[11]=t=>e.form.city=t),class:"col-sm-3 font-medium text-body1 card-continue__field card-continue__city",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.city})},[(0,a.Uk)((0,s.zw)(e.$t("city"))+" ",1),I],2)])),_:1},8,["rules","modelValue"]),(0,a.Wm)(Be,{rules:[e=>!!e||""],modelValue:e.form.street,"onUpdate:modelValue":t[12]||(t[12]=t=>e.form.street=t),class:"col-sm-3 font-medium text-body1 card-continue__field card-continue__street",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.street})},[(0,a.Uk)((0,s.zw)(e.$t("street"))+" ",1),M],2)])),_:1},8,["rules","modelValue"]),(0,a.Wm)(Be,{rules:[e=>!!e||""],modelValue:e.form.house,"onUpdate:modelValue":t[13]||(t[13]=t=>e.form.house=t),class:"col font-medium text-body1 card-continue__field card-continue__house",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.house})},[(0,a.Uk)((0,s.zw)(e.$t("house"))+" ",1),j],2)])),_:1},8,["rules","modelValue"]),(0,a.Wm)(Be,{rules:[e=>!!e||""],modelValue:e.form.flat,"onUpdate:modelValue":t[14]||(t[14]=t=>e.form.flat=t),class:"col font-medium text-body1 card-continue__field card-continue__flat",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.flat})},[(0,a.Uk)((0,s.zw)(e.$t("flat"))+" ",1),R],2)])),_:1},8,["rules","modelValue"]),(0,a.Wm)(Be,{modelValue:e.form.floor,"onUpdate:modelValue":t[15]||(t[15]=t=>e.form.floor=t),class:"col font-medium text-body1 card-continue__field card-continue__floor",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.floor})},(0,s.zw)(e.$t("floor")),3)])),_:1},8,["modelValue"]),(0,a.Wm)(Be,{modelValue:e.form.postAddress,"onUpdate:modelValue":t[16]||(t[16]=t=>e.form.postAddress=t),class:"col font-medium text-body1 card-continue__field card-continue__post",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.postAddress})},(0,s.zw)(e.$t("postAddress")),3)])),_:1},8,["modelValue"]),B,(0,a.Wm)(Ee,{options:e.paymentTypeOptions,rules:[e=>!!e||""],class:"col-xs-6 font-medium text-body1 q-pb-none card-continue__field card-continue__payment",dense:"","label-slot":"","menu-anchor":"bottom left","menu-self":"top left",outlined:"","popup-content-style":"transition-delay: 0.25s;",modelValue:e.form.paymentType,"onUpdate:modelValue":t[17]||(t[17]=t=>e.form.paymentType=t)},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)(["q-ma-none",{"text-right":e.form.paymentType}])},[(0,a.Uk)((0,s.zw)(e.$t("paymentType"))+" ",1),S],2)])),_:1},8,["options","rules","modelValue"]),(0,a.Wm)(Be,{modelValue:e.form.comment,"onUpdate:modelValue":t[18]||(t[18]=t=>e.form.comment=t),class:"col-xs-6 font-medium text-body1 card-continue__field card-continue__comment",color:"grey",dense:"","label-slot":"",outlined:""},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.comment})},(0,s.zw)(e.$t("comment")),3)])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(De,{class:"row q-pt-xl q-px-sm card-continue__top-checkboxes"},{default:(0,a.w5)((()=>[(0,a.Wm)(Oe,{rules:[e=>!!e||""],class:"col-xs-12 font-size-15",color:"grey",modelValue:e.form.agreeEmailBill,"onUpdate:modelValue":t[19]||(t[19]=t=>e.form.agreeEmailBill=t)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.$t("agreeEmailBill")),1)])),_:1},8,["rules","modelValue"]),(0,a.Wm)(Oe,{rules:[e=>!!e||""],class:"col-xs-12 font-size-15",color:"grey",modelValue:e.form.wantAnotherNameBill,"onUpdate:modelValue":t[20]||(t[20]=t=>e.form.wantAnotherNameBill=t)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.$t("wantAnotherNameBill")),1)])),_:1},8,["rules","modelValue"])])),_:1}),(0,a.Wm)(De,{class:"row q-py-none q-col-gutter-sm"},{default:(0,a.w5)((()=>[e.form.wantAnotherNameBill?((0,a.wg)(),(0,a.j4)(Be,{key:0,rules:[e=>!!e||""],class:"col-xs-6 col-sm-3 font-medium line-height-17 text-body1 card-continue__field card-continue__billCompany",color:"grey",dense:"","label-slot":"",outlined:"",modelValue:e.form.billCompanyName,"onUpdate:modelValue":t[21]||(t[21]=t=>e.form.billCompanyName=t)},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.billCompanyName})},[(0,a.Uk)((0,s.zw)(e.$t("billCompanyName"))+" ",1),E],2)])),_:1},8,["rules","modelValue"])):(0,a.kq)("v-if",!0),e.form.wantAnotherNameBill?((0,a.wg)(),(0,a.j4)(Be,{key:1,rules:[e=>!!e||""],class:"col-xs-6 col-sm-3 font-medium line-height-17 text-body1 card-continue__field card-continue__billPassport",color:"grey",dense:"","label-slot":"",outlined:"",modelValue:e.form.billPassport,"onUpdate:modelValue":t[22]||(t[22]=t=>e.form.billPassport=t)},{label:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)({"text-right":e.form.billPassport})},[(0,a.Uk)((0,s.zw)(e.$t("billPassport"))+" ",1),O],2)])),_:1},8,["rules","modelValue"])):(0,a.kq)("v-if",!0)])),_:1}),(0,a.Wm)(De,{class:"row q-col-gutter-sm q-pt-xl q-px-sm card-continue__bottom-checkboxes"},{default:(0,a.w5)((()=>[(0,a.Wm)(Oe,{rules:[e=>!!e||""],class:"font-size-15 line-height-17",color:"grey",modelValue:e.form.agreement,"onUpdate:modelValue":t[24]||(t[24]=t=>e.form.agreement=t)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.$t("confirmReadUnderstoodAgreed"))+" ",1),(0,a._)("a",{onClick:t[23]||(t[23]=(0,o.iM)((()=>{}),["stop"])),target:"_blank",href:"/terms-of-use"},(0,s.zw)(e.$t("usageAndPrivacyPolicy")),1),Y,X])),_:1},8,["rules","modelValue"]),F,G,(0,a.Wm)(Ze,{label:e.$t("makePreOrder"),onClick:t[25]||(t[25]=t=>e.showInfoDialog=!0),class:"col-xs-6 col-sm-5 q-mx-none hover-black-bg q-mt-xs order-button",flat:"","no-caps":"","no-wrap":"",outline:""},null,8,["label"])])),_:1})])),_:1})]),H])])):(0,a.kq)("v-if",!0),(0,a.kq)(' <div class="col-xs-10 limited-width" v-if="cartMode === \'make-preorder\'">\n      <div>\n        <q-card\n          class="bg-white q-mt-xl"\n          flat\n          style="overflow: hidden;"\n        >\n          <q-card-section class="q-py-xs">\n            <div>\n              <h6 class="q-ma-none q-pa-none text-grey-7 font-medium text-center">\n                {{ $t(\'dear\') }}\n                {{ \'XXX\' }},\n                {{ $t(\'thanksForOrdering\') }}\n              </h6>\n              <div class="row">\n                <div class="text-grey-5 col-xs-7">\n                  {{ \'Здесь прописывается какой-то текст, но его положат позже. заказ завершен. на вашу почту был выслан пароль и тдтд Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже.\' }}\n                </div>\n              </div>\n            </div>\n          </q-card-section>\n          <q-card-section class="row q-col-gutter-sm q-pt-xl justify-end">\n            <q-btn\n              :label="$t(\'backToHome\')"\n              class="q-px-xl q-mx-none hover-black-bg q-mt-xs"\n              flat\n              no-caps\n              no-wrap\n              outline\n              to="/"\n            ></q-btn>\n          </q-card-section>\n        </q-card>\n      </div>\n    </div> '),(0,a.Wm)(Le,{modelValue:e.productDialog,"onUpdate:modelValue":t[31]||(t[31]=t=>e.productDialog=t),persistent:"",style:{overflow:"hidden"}},{default:(0,a.w5)((()=>[(0,a.Wm)(je,{style:{overflow:"hidden",width:"80vw","max-width":"1100px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(De,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(Ze,{flat:"",square:"",dense:"",icon:"close"},null,512),[[lt]])])),_:1}),(0,a.Wm)(De,{style:{"max-height":"80vh"},class:"scroll"},{default:(0,a.w5)((()=>[(0,a._)("div",K,[(0,a._)("div",L,[(0,a.Wm)(Fe,{animated:"",height:"250px",infinite:"","navigation-position":"left",swipeable:"",thumbnails:"",modelValue:e.slideProduct,"onUpdate:modelValue":t[27]||(t[27]=t=>e.slideProduct=t),fullscreen:e.slideProductFullscreen,"onUpdate:fullscreen":t[28]||(t[28]=t=>e.slideProductFullscreen=t)},{control:(0,a.w5)((()=>[(0,a.Wm)(Xe,{position:"top-right",offset:[18,18]},{default:(0,a.w5)((()=>[(0,a.Wm)(Ze,{square:"",dense:"",color:"grey","text-color":"white",icon:e.slideProductFullscreen?"close_fullscreen":"open_in_full",onClick:t[26]||(t[26]=t=>e.slideProductFullscreen=!e.slideProductFullscreen)},null,8,["icon"])])),_:1})])),default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.product.images,(e=>((0,a.wg)(),(0,a.j4)(Ye,{"img-src":e.src,key:e.id,name:e.id,style:{"background-size":"contain","background-repeat":"no-repeat"}},null,8,["img-src","name"])))),128))])),_:1},8,["modelValue","fullscreen"]),(0,a.Wm)(Ie,{color:"grey-4"}),(0,a._)("div",J,[(0,a._)("span",ee,(0,s.zw)(e.product.name),1),(0,a.Wm)(Ze,{onClick:t[29]||(t[29]=()=>{}),class:"flip-vertical q-px-none",color:"grey-5",flat:"",icon:"mdi-content-copy",size:"sm"})]),(0,a._)("div",te,[(0,a._)("span",le,(0,s.zw)(e.assembly.assembly_number)+" : "+(0,s.zw)(e.$t("assemblyNumber")),1),(0,a.Wm)(Ze,{onClick:t[30]||(t[30]=()=>{}),class:"flip-vertical q-px-none",color:"grey-5",flat:"",icon:"mdi-content-copy",size:"sm"})])]),(0,a.kq)(' <q-separator color="grey-4" vertical /> '),(0,a._)("div",ae,[(0,a.Wm)(Ke,{class:"rounded-borders",dense:"",padding:"",separator:""},{default:(0,a.w5)((()=>[(0,a.Wm)(He,{class:"font-medium bg-grey-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(Ge,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.$t("characteristics")),1)])),_:1}),(0,a.Wm)(Ge,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.$t("values")),1)])),_:1})])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.product.characteristics,(e=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(He,{key:e.id,class:"text-grey-6",clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(Ge,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.name),1)])),_:2},1024),(0,a.Wm)(Ge,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.value),1)])),_:2},1024)])),_:2},1536)),[[at]]))),128))])),_:1}),(0,a._)("div",null,[(0,a._)("div",se,(0,s.zw)(e.$t("description")),1),(0,a._)("div",oe,(0,s.zw)(e.product.description),1)])])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Le,{modelValue:e.showConfirmDelete,"onUpdate:modelValue":t[32]||(t[32]=t=>e.showConfirmDelete=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(je,{class:"q-pa-md",style:{width:"320px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(De,{class:"row items-center q-pa-xs"},{default:(0,a.w5)((()=>[(0,a._)("div",ne,(0,s.zw)(e.$t("confirmRemoveProduct")),1)])),_:1}),(0,a.Wm)(De,{class:"q-pa-xs q-pt-md"},{default:(0,a.w5)((()=>[(0,a._)("div",ie,[(0,a._)("div",ce,[(0,a.wy)((0,a.Wm)(Ze,{"no-caps":"",outline:"",label:e.$t("yes"),class:"full-width"},null,8,["label"]),[[lt]])]),(0,a._)("div",re,[(0,a.wy)((0,a.Wm)(Ze,{"no-caps":"",outline:"",label:e.$t("no"),class:"full-width"},null,8,["label"]),[[lt]])])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Le,{modelValue:e.showInfoDialog,"onUpdate:modelValue":t[33]||(t[33]=t=>e.showInfoDialog=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(je,{class:"q-pa-md",style:{width:"330px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(De,{class:"row items-center full-width q-pa-xs q-pt-none"},{default:(0,a.w5)((()=>[(0,a._)("div",de,(0,s.zw)(e.$t("thanksForOrdering")),1),(0,a._)("div",me,(0,s.zw)(e.$t("infoAboutSendingEmails",{email:"brpcsys@gmail.com"})),1)])),_:1}),(0,a.Wm)(Je,{align:"center",class:"q-pa-xs q-pt-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(Ze,{label:e.$t("backToHome"),"no-caps":"",outline:"",to:"/"},null,8,["label"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(et,{offset:[18,18],class:"full-width no-pointer-events card-price",expand:"",position:"top-right"},{default:(0,a.w5)((()=>["start"===e.cartMode?((0,a.wg)(),(0,a.iD)("div",ue,[(0,a._)("div",pe,[(0,a._)("div",_e,[(0,a.Wm)(je,{class:"bg-white all-pointer-events",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(De,null,{default:(0,a.w5)((()=>[(0,a._)("div",fe,(0,s.zw)(e.$t("totalPayment"))+" : ",1),(0,a._)("div",ye,[(0,a._)("div",we,[(0,a._)("div",ge,(0,s.zw)(e.assembly.vat_price)+" ₪ ",1),(0,a._)("div",be,(0,s.zw)(e.$t("includeVat"))+" : "+(0,s.zw)(e.assembly.price)+" ₪ ",1)])]),(0,a._)("div",xe,[(0,a.Wm)(Ze,{label:e.$t("continueOrdering"),onClick:t[34]||(t[34]=t=>e.cartMode="continue-ordering"),class:"q-px-xl q-mx-none full-width hover-black-bg",flat:"","no-caps":"","no-wrap":"",outline:""},null,8,["label"])])])),_:1})])),_:1})])])])):(0,a.kq)("v-if",!0),"continue-ordering"===e.cartMode?((0,a.wg)(),(0,a.iD)("div",qe,[(0,a._)("div",he,[(0,a._)("div",ve,[(0,a.Wm)(je,{class:"bg-white all-pointer-events",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(De,{class:"q-pb-xs q-pt-md card-price__payment"},{default:(0,a.w5)((()=>[(0,a._)("div",ke,(0,s.zw)(e.$t("customerCart")),1)])),_:1}),(0,a.Wm)(Ie,{class:"q-mx-md q-mt-md"}),(0,a.Wm)(De,{class:"q-pt-sm"},{default:(0,a.w5)((()=>[(0,a._)("div",We,(0,s.zw)(e.$t("totalPayment"))+" : ",1),(0,a._)("div",ze,[(0,a._)("div",null,[(0,a._)("div",Ve,(0,s.zw)(e.assembly.vat_price)+" ₪ ",1),(0,a._)("div",$e,(0,s.zw)(e.$t("includeVat"))+" : "+(0,s.zw)(e.assembly.price)+" ₪ ",1)])]),(0,a._)("div",Ce,[(0,a.Wm)(Ze,{label:e.$t("makePreOrder"),onClick:t[35]||(t[35]=t=>e.showInfoDialog=!0),class:"q-px-xl q-mx-none full-width hover-black-bg",flat:"","no-caps":"","no-wrap":"",outline:""},null,8,["label"])])])),_:1})])),_:1})])])])):(0,a.kq)("v-if",!0)])),_:1})])),_:1})}var Te=l(712),Pe=l(6111),Ne=l(7874);const Ze=(0,a.aZ)({computed:{},components:{CartMini:Te.Z,QuantityInput:Pe.Z},data(){return{assembly:{assembly_number:"5878888886456",description:"С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и бога",id:3,image:"images/town2.png",images:[{id:1,src:"images/town2.png"},{id:2,src:"images/monitor.png"},{id:3,src:"images/town2.png"},{id:4,src:"images/town.png"},{id:5,src:"images/town2.png"}],name:"ssd2TbRX580_ssd2Tb_RX5 _ssd2Tbd2Tb_RX580_ss ssd2TbRX580_ssd2Tb_RX5 ssd2TbRX580_ss fdfdfdfdfdf",price:1151,status:"instock",status_color:"#72BA52",vat_price:1438.75,products:[{id:1,category:"קירור אוויר למעבד",name:"Zalman CNPS90"},{id:2,category:"אם למעבדי אינטל דור ",name:"GIGABYTE B365M H 91 8"},{id:3,category:"מעבד דור",name:"TEL G5400 TRAY PENTIUM 1151 8"},{id:4,category:"מארז וספק",name:"SOLID 1700 12CM 500W ATX"},{id:5,category:"צורב פנימי למחשב ניי",name:"LG DVD-RW BLACK"},{id:6,category:"דיסק קשיח פנימי",name:"WD 1TB Blue 7200rpm 64MB 3.5"},{id:7,category:"סק פנימי",name:"выпыSSD 240GB GSTFS31240 GNTD"},{id:8,category:"זכרון לניי •סק פנימי",name:"INNGSTON KVR26N19S6-4 4GB DDR4 2666"}],quantity:2},cartMode:"start",errors:{email:!1},form:{mobilePhone:null,email:null,name:null,surname:null,companyName:null,billCompanyName:null,billPassport:null,passport:null,city:null,street:null,house:null,flat:null,floor:null,postAddress:null,paymentType:null,comment:null,agreement:!1,agreeEmailBill:!1,wantAnotherNameBill:!1},paymentTypeOptions:[this.$t("paymentTypeOptions.creditCard"),this.$t("paymentTypeOptions.bankTransfer"),this.$t("paymentTypeOptions.cashUpTo12000"),this.$t("paymentTypeOptions.checkDeletedUntilWeReceiveMoney")],product:{description:"С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия.",id:3,image:"images/hdd.png",images:[{id:1,src:"images/hdd.png"},{id:2,src:"images/town2.png"},{id:3,src:"images/town2.png"}],name:"ssd2TbRX580_ssd2Tb_ RX580_ssd2Tb d2TbRX58 0_sX580_ssd2Tb",price:1151,status:"instock",status_color:"#72BA52",vat_price:1438.75,characteristics:[{id:1,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:2,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:3,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:4,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:5,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:6,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:7,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"},{id:8,name:"מארז מארז",value:"0 TRAY PENTIUM 1151 8 מעבד דור"}]},product1:{val:"2",quantity:2},product2:{val:"3",quantity:1},product3:{val:["1","2","3"],quantity:1},productDialog:!1,showConfirmDelete:!1,showInfoDialog:!1,slide:1,slideProduct:1,slideProductFullscreen:!1,socialNetworks:[{id:1,name:"telegram",icon:""},{id:2,name:"whatsapp",icon:""},{id:3,name:"viber",icon:""},{id:3,name:"facebook",icon:""},{id:3,name:"twitter",icon:""}]}},name:"PageCart",setup(){const e=(0,Ne.oR)();return{cartProducts:e.getters["cart/products"]}}});var De=l(4379),Qe=l(151),Ae=l(5589),Ie=l(8240),Me=l(8870),je=l(4027),Re=l(5869),Be=l(7704),Se=l(4842),Ee=l(4554),Oe=l(3017),Ye=l(6271),Xe=l(6778),Fe=l(1277),Ge=l(4593),He=l(7607),Ke=l(7011),Le=l(3414),Je=l(2035),et=l(9367),tt=l(1007),lt=l(6115),at=l(677),st=l(6489),ot=l(7518),nt=l.n(ot);Ze.render=Ue;const it=Ze;nt()(Ze,"components",{QPage:De.Z,QCard:Qe.Z,QCardSection:Ae.Z,QBtn:Ie.Z,QTooltip:Me.Z,QImg:je.Z,QSeparator:Re.Z,QScrollArea:Be.Z,QInput:Se.Z,QIcon:Ee.Z,QSelect:Oe.Z,QCheckbox:Ye.Z,QDialog:Xe.Z,QCarousel:Fe.Z,QCarouselSlide:Ge.Z,QCarouselControl:He.Z,QList:Ke.Z,QItem:Le.Z,QItemSection:Je.Z,QCardActions:et.Z,QPageSticky:tt.Z,QField:lt.Z}),nt()(Ze,"directives",{ClosePopup:at.Z,Ripple:st.Z})}}]);
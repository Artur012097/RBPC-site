(self["webpackChunkrbpc_shop"]=self["webpackChunkrbpc_shop"]||[]).push([[975],{6384:(t,e,a)=>{"use strict";a.d(e,{Z:()=>v});var s=a(3673),l=a(2323);const i={class:"column q-pa-xs q-gutter-sm full-width",style:{"wi dth":"100%"}},n={class:"text-body2 ellipsis-2-lines font-medium"},o={class:"text-caption text-grey line-height-15"},c={class:"row full-width",style:{}},r={class:"col"},u={class:"text-body2 font-medium line-height-15"},m={class:"text-caption text-grey-6"},d={class:"col-auto"};function p(t,e,a,p,w,g){const x=(0,s.up)("q-img"),h=(0,s.up)("q-card-section"),f=(0,s.up)("QuantityInput"),y=(0,s.up)("q-btn"),q=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",i,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.cartProducts,(a=>((0,s.wg)(),(0,s.j4)(q,{key:a.id,class:"col light-shadow-10 bg-white full-width overflow-hidden",style:{}},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{horizontal:"",style:{width:"100%"},class:"full-width"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{class:"col-auto flex flex-center q-pa-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(x,{class:"rounded-borders",src:a.image,width:"90px"},null,8,["src"])])),_:2},1024),(0,s.Wm)(h,{class:"q-pa-xs col",style:{"w idth":"100%"}},{default:(0,s.w5)((()=>[(0,s._)("div",n,(0,l.zw)(a.name),1),(0,s._)("div",o,(0,l.zw)(t.$t("assemblyNumber"))+" : "+(0,l.zw)(a.assembly_number),1),(0,s._)("div",{class:"text-caption line-height-19",style:(0,l.j5)(`color: ${a.status_color};`)},(0,l.zw)(t.$t(`statusesNames.${a.status}`)),5),(0,s._)("div",c,[(0,s._)("div",r,[(0,s._)("div",u,(0,l.zw)(a.vat_price)+" ₪ ",1),(0,s._)("div",m,(0,l.zw)(t.$t("withoutVat"))+" : "+(0,l.zw)(a.price)+" ₪ ",1)]),(0,s._)("div",d,[(0,s.Wm)(f,{quantity:a.quantity,"onUpdate:quantity":t=>a.quantity=t,quantityModifiers:{sync:!0}},null,8,["quantity","onUpdate:quantity"])])])])),_:2},1024),(0,s.Wm)(y,{onClick:e[0]||(e[0]=e=>t.showConfirmDelete=!0),class:"absolute-top-right bg-white",color:"grey-4",flat:"",icon:"mdi-close",padding:"0",size:"xs",style:{"border-radius":"0"}})])),_:2},1024)])),_:2},1024)))),128))])}var w=a(6111);const g=(0,s.aZ)({components:{QuantityInput:w.Z},name:"CartMini",props:{cartProducts:{type:Array,default:function(){return[]}}}});var x=a(151),h=a(5589),f=a(4027),y=a(8240),q=a(7518),W=a.n(q);g.render=p;const v=g;W()(g,"components",{QCard:x.Z,QCardSection:h.Z,QImg:f.Z,QBtn:y.Z})},6111:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(3673);const l={class:"quantity-input"};function i(t,e,a,i,n,o){const c=(0,s.up)("q-btn"),r=(0,s.up)("q-separator"),u=(0,s.up)("q-input");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(u,{"model-value":t.quantity,onInput:e[2]||(e[2]=e=>t.$emit("update:quantity",e.target.value)),color:"grey-4",dense:"","input-class":"text-caption text-center q-pa-none q-ma-none",maxlength:"2",outlined:"",style:{"max-width":"90px",padding:"0",margin:"0"},"input-style":"padding: 0; margin: 0;",class:"text-caption bg-white dense-quantity"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(c,{onClick:e[0]||(e[0]=e=>t.$emit("update:quantity",t.quantity+1)),class:"q-ma-none text-caption",dense:"",flat:"",icon:"add",style:{height:"23px"}}),(0,s.Wm)(r,{color:"grey-4",vertical:""})])),append:(0,s.w5)((()=>[(0,s.Wm)(r,{color:"grey-4",vertical:""}),(0,s.Wm)(c,{onClick:e[1]||(e[1]=e=>t.$emit("update:quantity",t.quantity-1)),class:"q-ma-none text-caption",dense:"",flat:"",icon:"remove",style:{height:"23px"}})])),_:1},8,["model-value"])])}const n=(0,s.aZ)({name:"QuantityInput",props:{quantity:{type:Number,default:0}}});var o=a(4842),c=a(8240),r=a(5869),u=a(7518),m=a.n(u);n.render=i;const d=n;m()(n,"components",{QInput:o.Z,QBtn:c.Z,QSeparator:r.Z})},3975:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>et});var s=a(3673),l=a(2323),i=a(117),n=a.n(i);const o={class:"q-mx-sm q-icons"},c={style:{"font-style":"normal"}},r={class:"text-grey-6 text-body1 line-height-19"},u={class:"flex flex-center justify-between no-wrap line-height-19"},m={class:"font-size-25 font-medium q-my-xs"},d={class:"text-subtitle1 font-medium text-grey-6"},p={class:"col-6 text-start"},w={class:"q-mx-sm"},g={style:{"font-style":"normal"}},x={class:"text-grey-6 text-body1 line-height-19"},h={class:"flex flex-center justify-between no-wrap line-height-19"},f={class:"font-size-25 font-medium q-my-xs"},y={class:"text-subtitle1 font-medium text-grey-6"},q={class:"col-6 text-start"},W=(0,s._)("div",{class:"footer__header"},[(0,s._)("h3",null," כל הזכויות שמורות © ר.ב. פיסי מחשבים ")],-1),v={class:"q-my-lg"},b={class:"q-my-lg"};function k(t,e,a,i,k,A){const z=(0,s.up)("q-img"),Z=(0,s.up)("q-route-tab"),B=(0,s.up)("q-tabs"),D=(0,s.up)("q-space"),Q=(0,s.up)("q-icon"),Y=(0,s.up)("q-badge"),U=(0,s.up)("q-item-section"),_=(0,s.up)("q-item"),C=(0,s.up)("q-list"),H=(0,s.up)("q-menu"),P=(0,s.up)("q-card-section"),j=(0,s.up)("CartMini"),S=(0,s.up)("q-scroll-area"),R=(0,s.up)("q-separator"),V=(0,s.up)("q-btn"),K=(0,s.up)("q-card"),M=(0,s.up)("q-toolbar"),X=(0,s.up)("q-header"),E=(0,s.up)("q-drawer"),L=(0,s.up)("router-view"),G=(0,s.up)("q-page-container"),I=(0,s.up)("q-footer"),J=(0,s.up)("q-layout"),N=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(J,{view:"HHH lpr fff"},{default:(0,s.w5)((()=>[(0,s.Wm)(X,{class:"flex flex-center",style:{background:"#333333","padding-bottom":"1px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(M,{class:"q-px-none text-grey-3 light-shadow",style:{"max-width":"1910px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(z,{class:"q-mx-md",src:n(),width:"50px"}),(0,s.Wm)(B,{align:"center",class:"q-mx-sm","indicator-color":"grey-3","no-caps":"",shrink:"",stretch:""},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"text-h5",exact:"",flat:"",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.$t("main")),1)])),_:1})])),_:1}),(0,s.Wm)(D),(0,s.Wm)(B,{align:"center","indicator-color":"grey-3","no-caps":"",shrink:"",dense:"",stretch:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.sections,(t=>((0,s.wg)(),(0,s.j4)(Z,{key:t.id,to:`/sections/${t.name}`,class:"text-white q-px-xl-none",flat:"",size:"xl",style:{"max-width":"82px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{name:`img:images/${t.name}.svg`,size:t.size},null,8,["name","size"])])),_:2},1032,["to"])))),128))])),_:1}),(0,s.Wm)(D),(0,s._)("div",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.mainActions,(e=>((0,s.wg)(),(0,s.j4)(V,{key:e.id,class:"q-px-0 q-mx-0",color:"grey-5",flat:"",size:"30",to:e.to,style:{"max-width":"44px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{name:e.icon,size:"27px"},{default:(0,s.w5)((()=>[e.badge&&t.cartProducts?((0,s.wg)(),(0,s.j4)(Y,{key:0,align:"bottom",color:"red",floating:"",rounded:""},{default:(0,s.w5)((()=>[(0,s._)("div",c,(0,l.zw)(t.cartProducts.length),1)])),_:1})):(0,s.kq)("",!0)])),_:2},1032,["name"]),e.languages?((0,s.wg)(),(0,s.j4)(H,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{style:{"min-width":"100px"}},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.languages,(t=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(_,{active:"he"==t.locale,key:t.id,clickable:""},{default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.name),1)])),_:2},1024)])),_:2},1032,["active"])),[[N]]))),128))])),_:2},1024)])),_:2},1024)):(0,s.kq)("",!0),e.cart?((0,s.wg)(),(0,s.j4)(H,{key:1,class:"overflow-hidden",style:{height:"100%","max-height":"480px !important"}},{default:(0,s.w5)((()=>[(0,s.Wm)(K,{class:"bg-white all-pointer-events full-height",flat:"",style:{width:"460px","max-width":"460px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{class:"q-pb-xs q-pt-md"},{default:(0,s.w5)((()=>[(0,s._)("div",r,(0,l.zw)(t.$t("customerCart")),1)])),_:1}),(0,s.Wm)(P,{class:"q-pa-none q-px-xs",style:{height:"calc(100% - 140px)"}},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{visible:"",class:"q-px-md q-py-xs full-width full-height",style:{width:"100%"}},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cartProducts:t.cartProducts},null,8,["cartProducts"]),(0,s.Wm)(j,{cartProducts:t.cartProducts},null,8,["cartProducts"])])),_:1})])),_:1}),(0,s.Wm)(R,{class:"q-mx-md q-my-sm"}),(0,s.Wm)(P,{class:"q-pt-sm"},{default:(0,s.w5)((()=>[(0,s._)("div",u,[(0,s._)("div",null,[(0,s._)("div",m,(0,l.zw)(t.cartVatAmount)+" ₪ ",1),(0,s._)("div",d,(0,l.zw)(t.$t("includeVat"))+" : "+(0,l.zw)(t.cartAmount)+" ₪ ",1)]),(0,s._)("div",p,[(0,s.Wm)(V,{label:t.$t("goToCart"),class:"","no-caps":"",outline:"",size:"lg",to:"/cart"},null,8,["label"])])])])),_:1})])),_:1})])),_:1})):(0,s.kq)("",!0)])),_:2},1032,["to"])))),128))])])),_:1})])),_:1}),(0,s.Wm)(E,{modelValue:t.rightDrawerOpen,"onUpdate:modelValue":e[0]||(e[0]=e=>t.rightDrawerOpen=e),class:"menu__mobile",side:"right",overlay:"",behavior:"mobile",breakpoint:400},{default:(0,s.w5)((()=>[(0,s.Wm)(z,{class:"q-mx-md",src:n(),width:"50px"}),(0,s.Wm)(B,{align:"center",class:"q-mx-sm","indicator-color":"grey-3","no-caps":"",shrink:"",stretch:""},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"text-h5",exact:"",flat:"",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.$t("main")),1)])),_:1})])),_:1}),(0,s.Wm)(D),(0,s.Wm)(B,{align:"center","indicator-color":"grey-3","no-caps":"",shrink:"",dense:"",stretch:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.sections,(t=>((0,s.wg)(),(0,s.j4)(Z,{key:t.id,to:`/sections/${t.name}`,class:"text-white q-px-xl-none",flat:"",size:"xl",style:{"max-width":"82px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{name:`img:images/${t.name}.svg`,size:t.size},null,8,["name","size"])])),_:2},1032,["to"])))),128))])),_:1}),(0,s.Wm)(D),(0,s._)("div",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.mainActions,(e=>((0,s.wg)(),(0,s.j4)(V,{key:e.id,class:"q-px-0 q-mx-0",color:"grey-5",flat:"",size:"30",to:e.to,style:{"max-width":"44px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{name:e.icon,size:"27px"},{default:(0,s.w5)((()=>[e.badge&&t.cartProducts?((0,s.wg)(),(0,s.j4)(Y,{key:0,align:"bottom",color:"red",floating:"",rounded:""},{default:(0,s.w5)((()=>[(0,s._)("div",g,(0,l.zw)(t.cartProducts.length),1)])),_:1})):(0,s.kq)("",!0)])),_:2},1032,["name"]),e.languages?((0,s.wg)(),(0,s.j4)(H,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{style:{"min-width":"100px"}},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.languages,(t=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(_,{active:"he"==t.locale,key:t.id,clickable:""},{default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.name),1)])),_:2},1024)])),_:2},1032,["active"])),[[N]]))),128))])),_:2},1024)])),_:2},1024)):(0,s.kq)("",!0),e.cart?((0,s.wg)(),(0,s.j4)(H,{key:1,class:"overflow-hidden",style:{height:"100%","max-height":"480px !important"}},{default:(0,s.w5)((()=>[(0,s.Wm)(K,{class:"bg-white all-pointer-events full-height",flat:"",style:{width:"460px","max-width":"460px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{class:"q-pb-xs q-pt-md"},{default:(0,s.w5)((()=>[(0,s._)("div",x,(0,l.zw)(t.$t("customerCart")),1)])),_:1}),(0,s.Wm)(P,{class:"q-pa-none q-px-xs",style:{height:"calc(100% - 140px)"}},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{visible:"",class:"q-px-md q-py-xs full-width full-height",style:{width:"100%"}},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cartProducts:t.cartProducts},null,8,["cartProducts"]),(0,s.Wm)(j,{cartProducts:t.cartProducts},null,8,["cartProducts"])])),_:1})])),_:1}),(0,s.Wm)(R,{class:"q-mx-md q-my-sm"}),(0,s.Wm)(P,{class:"q-pt-sm"},{default:(0,s.w5)((()=>[(0,s._)("div",h,[(0,s._)("div",null,[(0,s._)("div",f,(0,l.zw)(t.cartVatAmount)+" ₪ ",1),(0,s._)("div",y,(0,l.zw)(t.$t("includeVat"))+" : "+(0,l.zw)(t.cartAmount)+" ₪ ",1)]),(0,s._)("div",q,[(0,s.Wm)(V,{label:t.$t("goToCart"),class:"","no-caps":"",outline:"",size:"lg",to:"/cart"},null,8,["label"])])])])),_:1})])),_:1})])),_:1})):(0,s.kq)("",!0)])),_:2},1032,["to"])))),128))])])),_:1},8,["modelValue"]),(0,s.Wm)(V,{class:"menu__mobile-btn",dense:"",round:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"]),(0,s.Wm)(G,{style:{"overflow-x":"hidden"}},{default:(0,s.w5)((()=>[(0,s.Wm)(L,{class:"q-pb-lg"})])),_:1}),(0,s.Wm)(I,{class:"text-grey-6 light-shadow q-mt-xl flex flex-center footer",style:{background:"#333333",height:"45px"}},{default:(0,s.w5)((()=>[W,(0,s.Wm)(B,{"active-color":"grey",align:"justify",class:"text-grey-5 full-width","indicator-color":"white","no-caps":"",dense:"",style:{background:"#333333","max-width":"1910px",height:"46px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{to:"/copyright",class:"text-grey-7 no-pointer-events",style:{height:"45px"}},{default:(0,s.w5)((()=>[(0,s._)("h6",v,(0,l.zw)(t.$t("copyright")),1)])),_:1}),(0,s.Wm)(D),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.mainRoutes,(e=>((0,s.wg)(),(0,s.j4)(Z,{key:e.id,to:e.to,class:"footer-tab",style:{height:"45px"}},{default:(0,s.w5)((()=>[(0,s._)("h6",b,(0,l.zw)(t.$t(`mainRoutes.${e.name}`)),1)])),_:2},1032,["to"])))),128))])),_:1})])),_:1})])),_:1})}var A=a(7874),z=a(6384),Z=a(1959),B=a(8825);const D=(0,s.aZ)({name:"MainLayout",components:{CartMini:z.Z},setup(){const t=(0,A.oR)(),e=(0,Z.iH)(!1),a=(0,B.Z)();return a.platform.is.mobile,{mainActions:t.getters["main/mainActions"],mainRoutes:t.getters["main/mainRoutes"],sections:t.getters["main/sections"],cartProducts:t.getters["cart/products"],cartAmount:t.getters["cart/amount"],cartVatAmount:t.getters["cart/vatAmount"],rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}}});var Q=a(9214),Y=a(3812),U=a(9570),_=a(4027),C=a(7547),H=a(2770),P=a(2025),j=a(4554),S=a(8240),R=a(9721),V=a(811),K=a(7011),M=a(3414),X=a(2035),E=a(151),L=a(5589),G=a(7704),I=a(5869),J=a(2901),N=a(2652),T=a(1762),O=a(8408),F=a(677),$=a(7518),tt=a.n($);D.render=k;const et=D;tt()(D,"components",{QLayout:Q.Z,QHeader:Y.Z,QToolbar:U.Z,QImg:_.Z,QTabs:C.Z,QRouteTab:H.Z,QSpace:P.Z,QIcon:j.Z,QBtn:S.Z,QBadge:R.Z,QMenu:V.Z,QList:K.Z,QItem:M.Z,QItemSection:X.Z,QCard:E.Z,QCardSection:L.Z,QScrollArea:G.Z,QSeparator:I.Z,QDrawer:J.Z,QPageContainer:N.Z,QFooter:T.Z,QTab:O.Z}),tt()(D,"directives",{ClosePopup:F.Z})},117:t=>{t.exports="data:image/png;base64,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"}}]);
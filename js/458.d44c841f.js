(self["webpackChunkrbpc_shop"]=self["webpackChunkrbpc_shop"]||[]).push([[458],{38:(t,e,a)=>{"use strict";a.d(e,{Z:()=>W});var s=a(3673),n=a(2323);const l={class:"column q-pa-xs q-gutter-sm full-width card-item__wrapper",style:{width:"100%"}},o={class:"text-body2 ellipsis-2-lines font-medium product-name"},i={class:"text-caption text-grey line-height-15 product-number"},c={class:"row full-width",style:{}},r={class:"col"},u={class:"text-body2 font-medium line-height-15 product-price"},m={class:"text-caption text-grey-6 product-desc"},d={class:"col-auto product-quantity"};function p(t,e,a,p,g,w){const h=(0,s.up)("q-img"),y=(0,s.up)("QuantityInput"),q=(0,s.up)("q-card-section"),x=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.cartProducts,(e=>((0,s.wg)(),(0,s.j4)(x,{key:e.id,class:"col light-shadow-10 bg-white full-width overflow-hidden card-item__block",style:{}},{default:(0,s.w5)((()=>[(0,s.Wm)(q,{horizontal:"",style:{width:"100%"},class:"full-width card-item__card"},{default:(0,s.w5)((()=>[(0,s.Wm)(q,{class:"col-auto flex flex-center q-pa-none product-image"},{default:(0,s.w5)((()=>[(0,s._)("div",{style:(0,n.j5)(`color: ${e.status_color};`),class:"absolute absolute-top-left q-px-xs product-status_mobile"}," ● "+(0,n.zw)(t.$t(`statusesNames.${e.status}`)),5),(0,s.Wm)(h,{class:"rounded-borders",src:e.image,width:"90px"},null,8,["src"]),(0,s.Wm)(y,{class:"product-quantity_mobile",quantity:e.quantity,"onUpdate:quantity":t=>e.quantity=t,quantityModifiers:{sync:!0}},null,8,["quantity","onUpdate:quantity"])])),_:2},1024),(0,s.Wm)(q,{class:"q-pa-xs col",style:{"w idth":"100%"}},{default:(0,s.w5)((()=>[(0,s._)("div",o,(0,n.zw)(e.name),1),(0,s._)("div",i,(0,n.zw)(t.$t("assemblyNumber"))+" : "+(0,n.zw)(e.assembly_number),1),(0,s._)("div",{class:"text-caption line-height-19 product-status",style:(0,n.j5)(`color: ${e.status_color};`)},(0,n.zw)(t.$t(`statusesNames.${e.status}`)),5),(0,s._)("div",c,[(0,s._)("div",r,[(0,s._)("div",u,(0,n.zw)(e.vat_price)+" ₪ ",1),(0,s._)("div",m,(0,n.zw)(t.$t("withoutVat"))+" : "+(0,n.zw)(e.price)+" ₪ ",1)]),(0,s._)("div",d,[(0,s.Wm)(y,{quantity:e.quantity,"onUpdate:quantity":t=>e.quantity=t,quantityModifiers:{sync:!0}},null,8,["quantity","onUpdate:quantity"])])])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])}var g=a(6111);const w=(0,s.aZ)({components:{QuantityInput:g.Z},name:"CartMini",props:{cartProducts:{type:Array,default:function(){return[]}}}});var h=a(151),y=a(5589),q=a(4027),x=a(7518),f=a.n(x);w.render=p;const W=w;f()(w,"components",{QCard:h.Z,QCardSection:y.Z,QImg:q.Z})},6111:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(3673);const n={class:"quantity-input"};function l(t,e,a,l,o,i){const c=(0,s.up)("q-btn"),r=(0,s.up)("q-separator"),u=(0,s.up)("q-input");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(u,{"model-value":t.quantity,onInput:e[2]||(e[2]=e=>t.$emit("update:quantity",e.target.value)),color:"grey-4",dense:"","input-class":"text-caption text-center q-pa-none q-ma-none",maxlength:"2",outlined:"",style:{"max-width":"90px",padding:"0",margin:"0"},"input-style":"padding: 0; margin: 0;",class:"text-caption bg-white dense-quantity"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(c,{onClick:e[0]||(e[0]=e=>t.$emit("update:quantity",t.quantity+1)),class:"q-ma-none text-caption",dense:"",flat:"",icon:"add",style:{height:"23px"}}),(0,s.Wm)(r,{color:"grey-4",vertical:""})])),append:(0,s.w5)((()=>[(0,s.Wm)(r,{color:"grey-4",vertical:""}),(0,s.Wm)(c,{onClick:e[1]||(e[1]=e=>t.$emit("update:quantity",t.quantity-1)),class:"q-ma-none text-caption",dense:"",flat:"",icon:"remove",style:{height:"23px"}})])),_:1},8,["model-value"])])}const o=(0,s.aZ)({name:"QuantityInput",props:{quantity:{type:Number,default:0}}});var i=a(4842),c=a(8240),r=a(5869),u=a(7518),m=a.n(u);o.render=l;const d=o;m()(o,"components",{QInput:i.Z,QBtn:c.Z,QSeparator:r.Z})},5458:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>T});a(7280),a(71);var s=a(3673),n=a(2323),l=a(117),o=a.n(l);const i={class:"q-mx-sm q-icons"},c={style:{"font-style":"normal"}},r={class:"text-grey-6 text-body1 line-height-19"},u={class:"flex flex-center justify-between no-wrap line-height-19"},m={class:"font-size-25 font-medium q-my-xs"},d={class:"text-subtitle1 font-medium text-grey-6"},p={class:"col-6 text-start"},g={class:"q-my-lg"},w={class:"q-my-lg"},h=(0,s._)("div",{class:"footer__rules_mobile"},[(0,s._)("h3",null," כל הזכויות שמורות © ר.ב. פיסי מחשבים ")],-1);function y(t,e,a,l,y,q){const x=(0,s.up)("q-icon"),f=(0,s.up)("q-input"),W=(0,s.up)("q-img"),b=(0,s.up)("q-route-tab"),v=(0,s.up)("q-tabs"),k=(0,s.up)("q-space"),A=(0,s.up)("q-btn"),Z=(0,s.up)("q-badge"),_=(0,s.up)("q-item-section"),z=(0,s.up)("q-item"),B=(0,s.up)("q-list"),Q=(0,s.up)("q-menu"),D=(0,s.up)("q-card-section"),C=(0,s.up)("CartMini"),U=(0,s.up)("q-scroll-area"),Y=(0,s.up)("q-separator"),S=(0,s.up)("q-card"),H=(0,s.up)("q-toolbar"),V=(0,s.up)("q-header"),R=(0,s.up)("q-drawer"),j=(0,s.up)("router-view"),P=(0,s.up)("q-page-container"),M=(0,s.up)("q-footer"),I=(0,s.up)("q-layout"),X=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(I,{view:"HHH lpr fff"},{default:(0,s.w5)((()=>[(0,s.Wm)(V,{class:"flex flex-center homepage-header",style:{background:"#333333","padding-bottom":"1px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{class:"q-px-none text-grey-3 light-shadow",style:{"max-width":"1910px"}},{default:(0,s.w5)((()=>[t.openSearch?((0,s.wg)(),(0,s.j4)(f,{key:0,class:"homepage-header__search","bottom-slots":"",modelValue:t.search,"onUpdate:modelValue":e[1]||(e[1]=e=>t.search=e),label:"חיפוש",counter:"",dense:"dense"},{append:(0,s.w5)((()=>[(0,s.Wm)(x,{name:"close",onClick:e[0]||(e[0]=e=>t.search=""),class:"cursor-pointer"})])),prepend:(0,s.w5)((()=>[(0,s.Wm)(x,{name:"mdi-magnify"})])),_:1},8,["modelValue"])):(0,s.kq)("",!0),t.openSearch?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"homepage-header__search-outline",onClick:e[2]||(e[2]=(...e)=>t.closeInput&&t.closeInput(...e))})):(0,s.kq)("",!0),(0,s.Wm)(W,{class:"q-mx-md homepage-header__home",src:o(),width:"34px"}),(0,s.Wm)(v,{align:"center",class:"q-mx-sm homepage-header__home-link","indicator-color":"grey-3","no-caps":"",shrink:"",stretch:""},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{class:"text-h5",exact:"",flat:"",to:"/"},{default:(0,s.w5)((()=>[(0,s._)("span",null,(0,n.zw)(t.$t("main")),1)])),_:1})])),_:1}),(0,s.Wm)(k),(0,s.Wm)(v,{align:"center","indicator-color":"grey-3",class:"category-tabs","no-caps":"",shrink:"",dense:"",stretch:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.sections,(t=>((0,s.wg)(),(0,s.j4)(b,{key:t.id,to:`/sections/${t.name}`,class:"text-white q-px-xl-none",flat:"",size:"xl",style:{"max-width":"82px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(x,{name:`img:images/${t.name}.svg`,size:t.size},null,8,["name","size"])])),_:2},1032,["to"])))),128))])),_:1}),(0,s.Wm)(k),(0,s._)("div",i,[(0,s.Wm)(A,{class:"menu__mobile-btn",dense:"",flat:"",icon:"menu",onClick:t.toggleRightDrawer},null,8,["onClick"]),(0,s.Wm)(A,{class:"q-px-0 q-mx-0 homepage-header__mobile-logo",color:"grey-5",flat:"",size:"27",style:{"max-width":"44px"},to:"/"},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{src:o(),width:"27px"})])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.mainActions,(e=>((0,s.wg)(),(0,s.j4)(A,{key:e.id,class:(0,n.C_)(["q-px-0 q-mx-0",e.class]),color:"grey-5",flat:"",size:"30",to:e.to,style:{"max-width":"44px"},onClick:a=>t.openInput(e.name)},{default:(0,s.w5)((()=>[(0,s.Wm)(x,{name:e.icon,size:"27px"},{default:(0,s.w5)((()=>[e.badge&&t.cartProducts?((0,s.wg)(),(0,s.j4)(Z,{key:0,align:"bottom",color:"red",floating:"",rounded:""},{default:(0,s.w5)((()=>[(0,s._)("div",c,(0,n.zw)(t.cartProducts.length),1)])),_:1})):(0,s.kq)("",!0)])),_:2},1032,["name"]),e.languages?((0,s.wg)(),(0,s.j4)(Q,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{style:{"min-width":"100px"}},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.languages,(t=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(z,{active:"he"==t.locale,key:t.id,clickable:""},{default:(0,s.w5)((()=>[(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(t.name),1)])),_:2},1024)])),_:2},1032,["active"])),[[X]]))),128))])),_:2},1024)])),_:2},1024)):(0,s.kq)("",!0),e.cart?((0,s.wg)(),(0,s.j4)(Q,{key:1,class:"overflow-hidden",style:{height:"100%","max-height":"480px !important"}},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{class:"bg-white all-pointer-events full-height",flat:"",style:{width:"460px","max-width":"460px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(D,{class:"q-pb-xs q-pt-md"},{default:(0,s.w5)((()=>[(0,s._)("div",r,(0,n.zw)(t.$t("customerCart")),1)])),_:1}),(0,s.Wm)(D,{class:"q-pa-none q-px-xs",style:{height:"calc(100% - 140px)"}},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{visible:"",class:"q-px-md q-py-xs full-width full-height",style:{width:"100%"}},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{cartProducts:t.cartProducts},null,8,["cartProducts"]),(0,s.Wm)(C,{cartProducts:t.cartProducts},null,8,["cartProducts"])])),_:1})])),_:1}),(0,s.Wm)(Y,{class:"q-mx-md q-my-sm"}),(0,s.Wm)(D,{class:"q-pt-sm"},{default:(0,s.w5)((()=>[(0,s._)("div",u,[(0,s._)("div",null,[(0,s._)("div",m,(0,n.zw)(t.cartVatAmount)+" ₪ ",1),(0,s._)("div",d,(0,n.zw)(t.$t("includeVat"))+" : "+(0,n.zw)(t.cartAmount)+" ₪ ",1)]),(0,s._)("div",p,[(0,s.Wm)(A,{label:t.$t("goToCart"),class:"","no-caps":"",outline:"",size:"lg",to:"/cart"},null,8,["label"])])])])),_:1})])),_:1})])),_:1})):(0,s.kq)("",!0)])),_:2},1032,["class","to","onClick"])))),128))])])),_:1})])),_:1}),(0,s.Wm)(R,{modelValue:t.rightDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=e=>t.rightDrawerOpen=e),class:"menu__mobile",side:"right",overlay:"",behavior:"mobile",breakpoint:400},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{align:"center","indicator-color":"grey-3",class:"category-tabs menu__mobile-tabs","no-caps":"",shrink:"",dense:"",stretch:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.sections,(t=>((0,s.wg)(),(0,s.j4)(b,{key:t.id,to:`/sections/${t.name}`,class:"text-white q-px-xl-none  menu__mobile-tab",flat:"",size:"xl",style:{"max-width":"82px"}},{default:(0,s.w5)((()=>[(0,s._)("span",null,(0,n.zw)(t.title),1),(0,s.Wm)(x,{class:"icon-nonActive",name:`img:images/${t.name}-darkgrey.svg`,size:t.size},null,8,["name","size"]),(0,s.Wm)(x,{class:"icon-active",name:`img:images/${t.name}-active.svg`,size:t.size},null,8,["name","size"])])),_:2},1032,["to"])))),128))])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(P,null,{default:(0,s.w5)((()=>[(0,s.Wm)(j,{class:"q-pb-lg"})])),_:1}),(0,s.Wm)(M,{class:"text-grey-6 light-shadow q-mt-xl flex flex-center footer",style:{background:"#333333",height:"45px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{"active-color":"grey",align:"justify",class:"text-grey-5 full-width","indicator-color":"white","no-caps":"",dense:"",style:{background:"#333333","max-width":"1910px",height:"46px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{to:"/copyright",class:"text-grey-7 no-pointer-events footer__rules",style:{height:"45px"}},{default:(0,s.w5)((()=>[(0,s._)("h6",g,(0,n.zw)(t.$t("copyright")),1)])),_:1}),(0,s.Wm)(k),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.mainRoutes,(e=>((0,s.wg)(),(0,s.j4)(b,{key:e.id,to:e.to,class:"footer-tab",style:{height:"45px"}},{default:(0,s.w5)((()=>[(0,s._)("h6",w,(0,n.zw)(t.$t(`mainRoutes.${e.name}`)),1)])),_:2},1032,["to"])))),128))])),_:1}),h])),_:1})])),_:1})}var q=a(7874),x=a(38),f=a(1959),W=a(8825);const b=(0,s.aZ)({name:"MainLayout",components:{CartMini:x.Z},data(){return{search:"",openSearch:!1}},setup(){const t=(0,q.oR)(),e=(0,f.iH)(!1),a=(0,W.Z)();return a.platform.is.mobile,{mainActions:t.getters["main/mainActions"],mainRoutes:t.getters["main/mainRoutes"],sections:t.getters["main/sections"],cartProducts:t.getters["cart/products"],cartAmount:t.getters["cart/amount"],cartVatAmount:t.getters["cart/vatAmount"],rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value}}},methods:{openInput(t){"search"==t&&window.innerWidth<768&&(this.openSearch=!0,document.body.style.overflow="hidden")},closeInput(){this.openSearch=!1,document.body.style.overflow=""}}});var v=a(9214),k=a(3812),A=a(9570),Z=a(4842),_=a(4554),z=a(4027),B=a(7547),Q=a(2770),D=a(2025),C=a(8240),U=a(9721),Y=a(811),S=a(7011),H=a(3414),V=a(2035),R=a(151),j=a(5589),P=a(7704),M=a(5869),I=a(2901),X=a(2652),E=a(1762),K=a(8408),L=a(6115),G=a(677),N=a(7518),J=a.n(N);b.render=y;const T=b;J()(b,"components",{QLayout:v.Z,QHeader:k.Z,QToolbar:A.Z,QInput:Z.Z,QIcon:_.Z,QImg:z.Z,QTabs:B.Z,QRouteTab:Q.Z,QSpace:D.Z,QBtn:C.Z,QBadge:U.Z,QMenu:Y.Z,QList:S.Z,QItem:H.Z,QItemSection:V.Z,QCard:R.Z,QCardSection:j.Z,QScrollArea:P.Z,QSeparator:M.Z,QDrawer:I.Z,QPageContainer:X.Z,QFooter:E.Z,QTab:K.Z,QField:L.Z}),J()(b,"directives",{ClosePopup:G.Z})},117:t=>{t.exports="data:image/png;base64,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"}}]);
import{a as Y,az as _,j as v,k as e,aA as J,aB as Q,n as X,a0 as A,a4 as U,d as N,aC as Z,h as l,aD as ee,aE as oe,p as te,u as q,E as F,a1 as L,G as re,a2 as ne,q as le,U as ae,ah as ie,ai as d,al as c,am as p,an as se,ao as de,au as u,ay as G,ar as x,as as ce}from"./index-2sIqW00y.js";function W(n,o="default",g=[]){const{children:s}=n;if(s!==null&&typeof s=="object"&&!Array.isArray(s)){const a=s[o];if(typeof a=="function")return a()}return g}const pe={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"};function be(n){const{tableHeaderColor:o,textColor2:g,textColor1:s,cardColor:a,modalColor:i,popoverColor:b,dividerColor:h,borderRadius:w,fontWeightStrong:y,lineHeight:$,fontSizeSmall:r,fontSizeMedium:S,fontSizeLarge:C}=n;return Object.assign(Object.assign({},pe),{lineHeight:$,fontSizeSmall:r,fontSizeMedium:S,fontSizeLarge:C,titleTextColor:s,thColor:_(a,o),thColorModal:_(i,o),thColorPopover:_(b,o),thTextColor:s,thFontWeight:y,tdTextColor:g,tdColor:a,tdColorModal:i,tdColorPopover:b,borderColor:_(a,h),borderColorModal:_(i,h),borderColorPopover:_(b,h),borderRadius:w})}const ge={common:Y,self:be},he=v([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),X("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[v("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),A("left-label-placement",[e("descriptions-table-content",[v("> *",{verticalAlign:"top"})])]),A("left-label-align",[v("th",{textAlign:"left"})]),A("center-label-align",[v("th",{textAlign:"center"})]),A("right-label-align",[v("th",{textAlign:"right"})]),A("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[v("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[v("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[v("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[U("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),U("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),J(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Q(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),K="DESCRIPTION_ITEM_FLAG";function ue(n){return typeof n=="object"&&n&&!Array.isArray(n)?n.type&&n.type[K]:!1}const me=Object.assign(Object.assign({},q.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),fe=N({name:"Descriptions",props:me,slots:Object,setup(n){const{mergedClsPrefixRef:o,inlineThemeDisabled:g}=te(n),s=q("Descriptions","-descriptions",he,ge,n,o),a=F(()=>{const{size:b,bordered:h}=n,{common:{cubicBezierEaseInOut:w},self:{titleTextColor:y,thColor:$,thColorModal:r,thColorPopover:S,thTextColor:C,thFontWeight:O,tdTextColor:D,tdColor:V,tdColorModal:T,tdColorPopover:t,borderColor:R,borderColorModal:j,borderColorPopover:f,borderRadius:z,lineHeight:B,[L("fontSize",b)]:M,[L(h?"thPaddingBordered":"thPadding",b)]:P,[L(h?"tdPaddingBordered":"tdPadding",b)]:k}}=s.value;return{"--n-title-text-color":y,"--n-th-padding":P,"--n-td-padding":k,"--n-font-size":M,"--n-bezier":w,"--n-th-font-weight":O,"--n-line-height":B,"--n-th-text-color":C,"--n-td-text-color":D,"--n-th-color":$,"--n-th-color-modal":r,"--n-th-color-popover":S,"--n-td-color":V,"--n-td-color-modal":T,"--n-td-color-popover":t,"--n-border-radius":z,"--n-border-color":R,"--n-border-color-modal":j,"--n-border-color-popover":f}}),i=g?re("descriptions",F(()=>{let b="";const{size:h,bordered:w}=n;return w&&(b+="a"),b+=h[0],b}),a,n):void 0;return{mergedClsPrefix:o,cssVars:g?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender,compitableColumn:ne(n,["columns","column"]),inlineThemeDisabled:g}},render(){const n=this.$slots.default,o=n?Z(n()):[];o.length;const{contentClass:g,labelClass:s,compitableColumn:a,labelPlacement:i,labelAlign:b,size:h,bordered:w,title:y,cssVars:$,mergedClsPrefix:r,separator:S,onRender:C}=this;C==null||C();const O=o.filter(t=>ue(t)),D={span:0,row:[],secondRow:[],rows:[]},T=O.reduce((t,R,j)=>{const f=R.props||{},z=O.length-1===j,B=["label"in f?f.label:W(R,"label")],M=[W(R)],P=f.span||1,k=t.span;t.span+=P;const I=f.labelStyle||f["label-style"]||this.labelStyle,E=f.contentStyle||f["content-style"]||this.contentStyle;if(i==="left")w?t.row.push(l("th",{class:[`${r}-descriptions-table-header`,s],colspan:1,style:I},B),l("td",{class:[`${r}-descriptions-table-content`,g],colspan:z?(a-k)*2+1:P*2-1,style:E},M)):t.row.push(l("td",{class:`${r}-descriptions-table-content`,colspan:z?(a-k)*2:P*2},l("span",{class:[`${r}-descriptions-table-content__label`,s],style:I},[...B,S&&l("span",{class:`${r}-descriptions-separator`},S)]),l("span",{class:[`${r}-descriptions-table-content__content`,g],style:E},M)));else{const H=z?(a-k)*2:P*2;t.row.push(l("th",{class:[`${r}-descriptions-table-header`,s],colspan:H,style:I},B)),t.secondRow.push(l("td",{class:[`${r}-descriptions-table-content`,g],colspan:H,style:E},M))}return(t.span>=a||z)&&(t.span=0,t.row.length&&(t.rows.push(t.row),t.row=[]),i!=="left"&&t.secondRow.length&&(t.rows.push(t.secondRow),t.secondRow=[])),t},D).rows.map(t=>l("tr",{class:`${r}-descriptions-table-row`},t));return l("div",{style:$,class:[`${r}-descriptions`,this.themeClass,`${r}-descriptions--${i}-label-placement`,`${r}-descriptions--${b}-label-align`,`${r}-descriptions--${h}-size`,w&&`${r}-descriptions--bordered`]},y||this.$slots.header?l("div",{class:`${r}-descriptions-header`},y||oe(this,"header")):null,l("div",{class:`${r}-descriptions-table-wrapper`},l("table",{class:`${r}-descriptions-table`},l("tbody",null,i==="top"&&l("tr",{class:`${r}-descriptions-table-row`,style:{visibility:"collapse"}},ee(a*2,l("td",null))),T))))}}),ve={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},m=N({name:"DescriptionsItem",[K]:!0,props:ve,slots:Object,render(){return null}}),xe={class:"max-w-4xl mx-auto"},we={class:"text-xs break-all bg-gray-100 p-1 rounded"},ye=N({__name:"index",setup(n){const o=le({});return ae(()=>{o.value={userAgent:navigator.userAgent,language:navigator.language,platform:navigator.platform,screenSize:`${window.screen.width} x ${window.screen.height}`,windowSize:`${window.innerWidth} x ${window.innerHeight}`,pixelRatio:window.devicePixelRatio,colorDepth:window.screen.colorDepth+" bit",cores:navigator.hardwareConcurrency||"Unknown",memory:navigator.deviceMemory?`~${navigator.deviceMemory} GB`:"Unknown",online:navigator.onLine?"Online":"Offline",cookiesEnabled:navigator.cookieEnabled?"Yes":"No"}}),(g,s)=>(se(),ie("div",xe,[d(p(ce),{title:"设备信息"},{default:c(()=>[d(p(fe),{"label-placement":"left",bordered:"",column:1},{default:c(()=>[d(p(m),{label:"User Agent"},{default:c(()=>[de("code",we,u(o.value.userAgent),1)]),_:1}),d(p(m),{label:"屏幕分辨率"},{default:c(()=>[d(p(G),{type:"info"},{default:c(()=>[x(u(o.value.screenSize),1)]),_:1})]),_:1}),d(p(m),{label:"浏览器窗口大小"},{default:c(()=>[x(u(o.value.windowSize),1)]),_:1}),d(p(m),{label:"像素比 (DPR)"},{default:c(()=>[x(u(o.value.pixelRatio),1)]),_:1}),d(p(m),{label:"操作系统/平台"},{default:c(()=>[x(u(o.value.platform),1)]),_:1}),d(p(m),{label:"语言"},{default:c(()=>[x(u(o.value.language),1)]),_:1}),d(p(m),{label:"CPU 核心数 (逻辑)"},{default:c(()=>[x(u(o.value.cores),1)]),_:1}),d(p(m),{label:"内存 (估算)"},{default:c(()=>[x(u(o.value.memory),1)]),_:1}),d(p(m),{label:"色彩深度"},{default:c(()=>[x(u(o.value.colorDepth),1)]),_:1}),d(p(m),{label:"网络状态"},{default:c(()=>[d(p(G),{type:o.value.online==="Online"?"success":"error"},{default:c(()=>[x(u(o.value.online),1)]),_:1},8,["type"])]),_:1})]),_:1})]),_:1})]))}});export{ye as default};

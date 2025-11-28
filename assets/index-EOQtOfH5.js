import{a as N,k as Z,n as w,a4 as f,a0 as c,d as A,h as y,F as R,p as S,u as B,E as j,G as V,q as z,A as E,ah as I,ai as i,al as a,am as l,an as $,at as L,as as p,aj as P,ak as U,av as b,ao as g,au as h,a8 as x,ar as C,aw as T}from"./index-2sIqW00y.js";import{u as O}from"./use-message-Y5G2IDHz.js";function W(d){const{textColor1:s,dividerColor:u,fontWeightStrong:t}=d;return{textColor:s,color:u,fontWeight:t}}const F={common:N,self:W},G=Z("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[w("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[w("no-title",`
 display: flex;
 align-items: center;
 `)]),f("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),c("title-position-left",[f("line",[c("left",{width:"28px"})])]),c("title-position-right",[f("line",[c("right",{width:"28px"})])]),c("dashed",[f("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),c("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),f("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),w("dashed",[f("line",{backgroundColor:"var(--n-color)"})]),c("dashed",[f("line",{borderColor:"var(--n-color)"})]),c("vertical",{backgroundColor:"var(--n-color)"})]),M=Object.assign(Object.assign({},B.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),H=A({name:"Divider",props:M,setup(d){const{mergedClsPrefixRef:s,inlineThemeDisabled:u}=S(d),t=B("Divider","-divider",G,F,d,s),k=j(()=>{const{common:{cubicBezierEaseInOut:n},self:{color:_,textColor:m,fontWeight:o}}=t.value;return{"--n-bezier":n,"--n-color":_,"--n-text-color":m,"--n-font-weight":o}}),v=u?V("divider",void 0,k,d):void 0;return{mergedClsPrefix:s,cssVars:u?void 0:k,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var d;const{$slots:s,titlePlacement:u,vertical:t,dashed:k,cssVars:v,mergedClsPrefix:n}=this;return(d=this.onRender)===null||d===void 0||d.call(this),y("div",{role:"separator",class:[`${n}-divider`,this.themeClass,{[`${n}-divider--vertical`]:t,[`${n}-divider--no-title`]:!s.default,[`${n}-divider--dashed`]:k,[`${n}-divider--title-position-${u}`]:s.default&&u}],style:v},t?null:y("div",{class:`${n}-divider__line ${n}-divider__line--left`}),!t&&s.default?y(R,null,y("div",{class:`${n}-divider__title`},this.$slots),y("div",{class:`${n}-divider__line ${n}-divider__line--right`})):null)}}),K={class:"max-w-4xl mx-auto"},q={class:"font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all"},J={class:"font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all"},Q={class:"font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all"},X={class:"font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all"},Y={class:"font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all"},ee={class:"font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all text-xs"},te={class:"font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all"},oe=A({__name:"index",setup(d){const s=z("Hello World"),u=O(),t=z({upper:"",lower:"",camel:"",kebab:"",snake:"",base64:"",base64Decode:""}),k=o=>o.replace(/(?:^\w|[A-Z]|\b\w)/g,(e,r)=>r===0?e.toLowerCase():e.toUpperCase()).replace(/\s+/g,""),v=o=>{var e;return o&&((e=o.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))==null?void 0:e.map(r=>r.toLowerCase()).join("-"))||o},n=o=>{var e;return o&&((e=o.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))==null?void 0:e.map(r=>r.toLowerCase()).join("_"))||o};E(s,()=>{const o=s.value;if(!o){Object.keys(t.value).forEach(e=>t.value[e]="");return}t.value.upper=o.toUpperCase(),t.value.lower=o.toLowerCase(),t.value.camel=k(o),t.value.kebab=v(o),t.value.snake=n(o);try{t.value.base64=btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,function(r,D){return String.fromCharCode(parseInt(D,16))}))}catch{t.value.base64="Error"}try{t.value.base64Decode=decodeURIComponent(atob(o).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch{t.value.base64Decode=""}},{immediate:!0});const m=async o=>{if(o)try{await navigator.clipboard.writeText(o),u.success("已复制")}catch{u.error("复制失败")}};return(o,e)=>($(),I("div",K,[i(l(p),{title:"输入文本"},{default:a(()=>[i(l(L),{value:s.value,"onUpdate:value":e[0]||(e[0]=r=>s.value=r),type:"textarea",placeholder:"请输入需要转换的文本...",rows:3,clearable:""},null,8,["value"])]),_:1}),i(l(H)),i(l(T),{"x-gap":12,"y-gap":12,cols:"1 m:2"},{default:a(()=>[i(l(b),null,{default:a(()=>[i(l(p),{size:"small",title:"大写 (Upper Case)"},{"header-extra":a(()=>[i(l(x),{size:"tiny",onClick:e[1]||(e[1]=r=>m(t.value.upper))},{default:a(()=>[...e[8]||(e[8]=[C("复制",-1)])]),_:1})]),default:a(()=>[g("div",q,h(t.value.upper),1)]),_:1})]),_:1}),i(l(b),null,{default:a(()=>[i(l(p),{size:"small",title:"小写 (Lower Case)"},{"header-extra":a(()=>[i(l(x),{size:"tiny",onClick:e[2]||(e[2]=r=>m(t.value.lower))},{default:a(()=>[...e[9]||(e[9]=[C("复制",-1)])]),_:1})]),default:a(()=>[g("div",J,h(t.value.lower),1)]),_:1})]),_:1}),i(l(b),null,{default:a(()=>[i(l(p),{size:"small",title:"驼峰 (Camel Case)"},{"header-extra":a(()=>[i(l(x),{size:"tiny",onClick:e[3]||(e[3]=r=>m(t.value.camel))},{default:a(()=>[...e[10]||(e[10]=[C("复制",-1)])]),_:1})]),default:a(()=>[g("div",Q,h(t.value.camel),1)]),_:1})]),_:1}),i(l(b),null,{default:a(()=>[i(l(p),{size:"small",title:"短横线 (Kebab Case)"},{"header-extra":a(()=>[i(l(x),{size:"tiny",onClick:e[4]||(e[4]=r=>m(t.value.kebab))},{default:a(()=>[...e[11]||(e[11]=[C("复制",-1)])]),_:1})]),default:a(()=>[g("div",X,h(t.value.kebab),1)]),_:1})]),_:1}),i(l(b),null,{default:a(()=>[i(l(p),{size:"small",title:"下划线 (Snake Case)"},{"header-extra":a(()=>[i(l(x),{size:"tiny",onClick:e[5]||(e[5]=r=>m(t.value.snake))},{default:a(()=>[...e[12]||(e[12]=[C("复制",-1)])]),_:1})]),default:a(()=>[g("div",Y,h(t.value.snake),1)]),_:1})]),_:1}),i(l(b),null,{default:a(()=>[i(l(p),{size:"small",title:"Base64 编码"},{"header-extra":a(()=>[i(l(x),{size:"tiny",onClick:e[6]||(e[6]=r=>m(t.value.base64))},{default:a(()=>[...e[13]||(e[13]=[C("复制",-1)])]),_:1})]),default:a(()=>[g("div",ee,h(t.value.base64),1)]),_:1})]),_:1}),t.value.base64Decode?($(),P(l(b),{key:0},{default:a(()=>[i(l(p),{size:"small",title:"Base64 解码 (自动检测)"},{"header-extra":a(()=>[i(l(x),{size:"tiny",onClick:e[7]||(e[7]=r=>m(t.value.base64Decode))},{default:a(()=>[...e[14]||(e[14]=[C("复制",-1)])]),_:1})]),default:a(()=>[g("div",te,h(t.value.base64Decode),1)]),_:1})]),_:1})):U("",!0)]),_:1})]))}});export{oe as default};

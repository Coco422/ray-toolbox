import{q as O,E,ab as Ce,Q as ft,d as ue,D as gt,h as c,aF as yt,aG as bn,aH as mn,aI as lt,aJ as wn,U as Qe,aK as xn,aL as yn,x as Q,aM as We,aN as Ne,O as Sn,aO as it,A as Re,B as $t,c as pt,aP as Cn,aQ as Rn,a as bt,aR as Ie,aS as mt,N as Tn,T as _t,k as _,a4 as K,a0 as ae,j as ve,n as ht,m as Et,aT as St,aU as Fn,aV as On,S as zn,aW as Mn,p as Ze,ae as wt,u as we,aX as In,a1 as me,aY as Le,G as xt,aZ as De,ag as At,a_ as Pn,a$ as kn,e as Me,b0 as Bn,b1 as $n,ay as rt,b2 as Ct,F as _n,b3 as En,V as An,b4 as Nn,b5 as Ln,b6 as Dn,b7 as vt,w as Wn,v as Hn,b8 as Rt,y as Tt,a2 as Vn,b9 as jn,s as Kn,af as Un,H as Gn,ba as qn,bb as Jn,I as fe,i as Xn,aC as Yn,aE as Qn,bc as Zn,bd as eo,ah as to,ai as ie,ao as no,al as he,am as re,an as oo,a8 as qe,ar as Je,aq as at,as as lo,at as Ft}from"./index-2sIqW00y.js";import{u as io}from"./use-message-Y5G2IDHz.js";function Ot(e){return e&-e}class Nt{constructor(n,o){this.l=n,this.min=o;const i=new Array(n+1);for(let l=0;l<n+1;++l)i[l]=0;this.ft=i}add(n,o){if(o===0)return;const{l:i,ft:l}=this;for(n+=1;n<=i;)l[n]+=o,n+=Ot(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:i,l}=this;if(n>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let a=n*i;for(;n>0;)a+=o[n],n-=Ot(n);return a}getBound(n){let o=0,i=this.l;for(;i>o;){const l=Math.floor((o+i)/2),a=this.sum(l);if(a>n){i=l;continue}else if(a<n){if(o===l)return this.sum(o+1)<=n?o+1:l;o=l}else return l}return o}}let Xe;function ro(){return typeof document>"u"?!1:(Xe===void 0&&("matchMedia"in window?Xe=window.matchMedia("(pointer:coarse)").matches:Xe=!1),Xe)}let st;function zt(){return typeof document>"u"?1:(st===void 0&&(st="chrome"in window?window.devicePixelRatio:1),st)}const Lt="VVirtualListXScroll";function ao({columnsRef:e,renderColRef:n,renderItemWithColsRef:o}){const i=O(0),l=O(0),a=E(()=>{const p=e.value;if(p.length===0)return null;const h=new Nt(p.length,0);return p.forEach((y,T)=>{h.add(T,y.width)}),h}),f=Ce(()=>{const p=a.value;return p!==null?Math.max(p.getBound(l.value)-1,0):0}),r=p=>{const h=a.value;return h!==null?h.sum(p):0},b=Ce(()=>{const p=a.value;return p!==null?Math.min(p.getBound(l.value+i.value)+1,e.value.length-1):0});return ft(Lt,{startIndexRef:f,endIndexRef:b,columnsRef:e,renderColRef:n,renderItemWithColsRef:o,getLeft:r}),{listWidthRef:i,scrollLeftRef:l}}const Mt=ue({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:o,getLeft:i,renderColRef:l,renderItemWithColsRef:a}=gt(Lt);return{startIndex:e,endIndex:n,columns:o,renderCol:l,renderItemWithCols:a,getLeft:i}},render(){const{startIndex:e,endIndex:n,columns:o,renderCol:i,renderItemWithCols:l,getLeft:a,item:f}=this;if(l!=null)return l({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:o,item:f,getLeft:a});if(i!=null){const r=[];for(let b=e;b<=n;++b){const p=o[b];r.push(i({column:p,left:a(b),item:f}))}return r}return null}}),so=lt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[lt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[lt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),uo=ue({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=mn();so.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:wn,ssr:n}),Qe(()=>{const{defaultScrollIndex:d,defaultScrollKey:w}=e;d!=null?W({index:d}):w!=null&&W({key:w})});let o=!1,i=!1;xn(()=>{if(o=!1,!i){i=!0;return}W({top:C.value,left:f.value})}),yn(()=>{o=!0,i||(i=!0)});const l=Ce(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let d=0;return e.columns.forEach(w=>{d+=w.width}),d}),a=E(()=>{const d=new Map,{keyField:w}=e;return e.items.forEach((B,H)=>{d.set(B[w],H)}),d}),{scrollLeftRef:f,listWidthRef:r}=ao({columnsRef:Q(e,"columns"),renderColRef:Q(e,"renderCol"),renderItemWithColsRef:Q(e,"renderItemWithCols")}),b=O(null),p=O(void 0),h=new Map,y=E(()=>{const{items:d,itemSize:w,keyField:B}=e,H=new Nt(d.length,w);return d.forEach((G,V)=>{const j=G[B],L=h.get(j);L!==void 0&&H.add(V,L)}),H}),T=O(0),C=O(0),x=Ce(()=>Math.max(y.value.getBound(C.value-We(e.paddingTop))-1,0)),A=E(()=>{const{value:d}=p;if(d===void 0)return[];const{items:w,itemSize:B}=e,H=x.value,G=Math.min(H+Math.ceil(d/B+1),w.length-1),V=[];for(let j=H;j<=G;++j)V.push(w[j]);return V}),W=(d,w)=>{if(typeof d=="number"){k(d,w,"auto");return}const{left:B,top:H,index:G,key:V,position:j,behavior:L,debounce:J=!0}=d;if(B!==void 0||H!==void 0)k(B,H,L);else if(G!==void 0)z(G,L,J);else if(V!==void 0){const u=a.value.get(V);u!==void 0&&z(u,L,J)}else j==="bottom"?k(0,Number.MAX_SAFE_INTEGER,L):j==="top"&&k(0,0,L)};let F,S=null;function z(d,w,B){const{value:H}=y,G=H.sum(d)+We(e.paddingTop);if(!B)b.value.scrollTo({left:0,top:G,behavior:w});else{F=d,S!==null&&window.clearTimeout(S),S=window.setTimeout(()=>{F=void 0,S=null},16);const{scrollTop:V,offsetHeight:j}=b.value;if(G>V){const L=H.get(d);G+L<=V+j||b.value.scrollTo({left:0,top:G+L-j,behavior:w})}else b.value.scrollTo({left:0,top:G,behavior:w})}}function k(d,w,B){b.value.scrollTo({left:d,top:w,behavior:B})}function N(d,w){var B,H,G;if(o||e.ignoreItemResize||ne(w.target))return;const{value:V}=y,j=a.value.get(d),L=V.get(j),J=(G=(H=(B=w.borderBoxSize)===null||B===void 0?void 0:B[0])===null||H===void 0?void 0:H.blockSize)!==null&&G!==void 0?G:w.contentRect.height;if(J===L)return;J-e.itemSize===0?h.delete(d):h.set(d,J-e.itemSize);const g=J-L;if(g===0)return;V.add(j,g);const D=b.value;if(D!=null){if(F===void 0){const oe=V.sum(j);D.scrollTop>oe&&D.scrollBy(0,g)}else if(j<F)D.scrollBy(0,g);else if(j===F){const oe=V.sum(j);J+oe>D.scrollTop+D.offsetHeight&&D.scrollBy(0,g)}Z()}T.value++}const U=!ro();let Y=!1;function se(d){var w;(w=e.onScroll)===null||w===void 0||w.call(e,d),(!U||!Y)&&Z()}function de(d){var w;if((w=e.onWheel)===null||w===void 0||w.call(e,d),U){const B=b.value;if(B!=null){if(d.deltaX===0&&(B.scrollTop===0&&d.deltaY<=0||B.scrollTop+B.offsetHeight>=B.scrollHeight&&d.deltaY>=0))return;d.preventDefault(),B.scrollTop+=d.deltaY/zt(),B.scrollLeft+=d.deltaX/zt(),Z(),Y=!0,Sn(()=>{Y=!1})}}}function te(d){if(o||ne(d.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(d.contentRect.height===p.value)return}else if(d.contentRect.height===p.value&&d.contentRect.width===r.value)return;p.value=d.contentRect.height,r.value=d.contentRect.width;const{onResize:w}=e;w!==void 0&&w(d)}function Z(){const{value:d}=b;d!=null&&(C.value=d.scrollTop,f.value=d.scrollLeft)}function ne(d){let w=d;for(;w!==null;){if(w.style.display==="none")return!0;w=w.parentElement}return!1}return{listHeight:p,listStyle:{overflow:"auto"},keyToIndex:a,itemsStyle:E(()=>{const{itemResizable:d}=e,w=Ne(y.value.sum());return T.value,[e.itemsStyle,{boxSizing:"content-box",width:Ne(l.value),height:d?"":w,minHeight:d?w:"",paddingTop:Ne(e.paddingTop),paddingBottom:Ne(e.paddingBottom)}]}),visibleItemsStyle:E(()=>(T.value,{transform:`translateY(${Ne(y.value.sum(x.value))})`})),viewportItems:A,listElRef:b,itemsElRef:O(null),scrollTo:W,handleListResize:te,handleListScroll:se,handleListWheel:de,handleItemResize:N}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:i}=this;return c(yt,{onResize:this.handleListResize},{default:()=>{var l,a;return c("div",bn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?c("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[c(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:f,renderItemWithCols:r}=this;return this.viewportItems.map(b=>{const p=b[n],h=o.get(p),y=f!=null?c(Mt,{index:h,item:b}):void 0,T=r!=null?c(Mt,{index:h,item:b}):void 0,C=this.$slots.default({item:b,renderedCols:y,renderedItemWithCols:T,index:h})[0];return e?c(yt,{key:p,onResize:x=>this.handleItemResize(p,x)},{default:()=>C}):(C.key=p,C)})}})]):(a=(l=this.$slots).empty)===null||a===void 0?void 0:a.call(l)])}})}});function Dt(e,n){n&&(Qe(()=>{const{value:o}=e;o&&it.registerHandler(o,n)}),Re(e,(o,i)=>{i&&it.unregisterHandler(i)},{deep:!1}),$t(()=>{const{value:o}=e;o&&it.unregisterHandler(o)}))}function It(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function dt(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(i=>{i&&i(o)})}}const co=ue({name:"Checkmark",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c("g",{fill:"none"},c("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),fo=ue({props:{onFocus:Function,onBlur:Function},setup(e){return()=>c("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),ho={height:"calc(var(--n-option-height) * 7.6)",paddingTiny:"4px 0",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingTiny:"0 12px",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};function vo(e){const{borderRadius:n,popoverColor:o,textColor3:i,dividerColor:l,textColor2:a,primaryColorPressed:f,textColorDisabled:r,primaryColor:b,opacityDisabled:p,hoverColor:h,fontSizeTiny:y,fontSizeSmall:T,fontSizeMedium:C,fontSizeLarge:x,fontSizeHuge:A,heightTiny:W,heightSmall:F,heightMedium:S,heightLarge:z,heightHuge:k}=e;return Object.assign(Object.assign({},ho),{optionFontSizeTiny:y,optionFontSizeSmall:T,optionFontSizeMedium:C,optionFontSizeLarge:x,optionFontSizeHuge:A,optionHeightTiny:W,optionHeightSmall:F,optionHeightMedium:S,optionHeightLarge:z,optionHeightHuge:k,borderRadius:n,color:o,groupHeaderTextColor:i,actionDividerColor:l,optionTextColor:a,optionTextColorPressed:f,optionTextColorDisabled:r,optionTextColorActive:b,optionOpacityDisabled:p,optionCheckColor:b,optionColorPending:h,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:h,actionTextColor:a,loadingColor:b})}const Wt=pt({name:"InternalSelectMenu",common:bt,peers:{Scrollbar:Rn,Empty:Cn},self:vo}),Pt=ue({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:i}=gt(mt);return{labelField:o,nodeProps:i,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:i,tmNode:{rawNode:l}}=this,a=i==null?void 0:i(l),f=n?n(l,!1):Ie(l[this.labelField],l,!1),r=c("div",Object.assign({},a,{class:[`${e}-base-select-group-header`,a==null?void 0:a.class]}),f);return l.render?l.render({node:r,option:l}):o?o({node:r,option:l,selected:!1}):r}});function go(e,n){return c(_t,{name:"fade-in-scale-up-transition"},{default:()=>e?c(Tn,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>c(co)}):null})}const kt=ue({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:i,valueSetRef:l,renderLabelRef:a,renderOptionRef:f,labelFieldRef:r,valueFieldRef:b,showCheckmarkRef:p,nodePropsRef:h,handleOptionClick:y,handleOptionMouseEnter:T}=gt(mt),C=Ce(()=>{const{value:F}=o;return F?e.tmNode.key===F.key:!1});function x(F){const{tmNode:S}=e;S.disabled||y(F,S)}function A(F){const{tmNode:S}=e;S.disabled||T(F,S)}function W(F){const{tmNode:S}=e,{value:z}=C;S.disabled||z||T(F,S)}return{multiple:i,isGrouped:Ce(()=>{const{tmNode:F}=e,{parent:S}=F;return S&&S.rawNode.type==="group"}),showCheckmark:p,nodeProps:h,isPending:C,isSelected:Ce(()=>{const{value:F}=n,{value:S}=i;if(F===null)return!1;const z=e.tmNode.rawNode[b.value];if(S){const{value:k}=l;return k.has(z)}else return F===z}),labelField:r,renderLabel:a,renderOption:f,handleMouseMove:W,handleMouseEnter:A,handleClick:x}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:i,isGrouped:l,showCheckmark:a,nodeProps:f,renderOption:r,renderLabel:b,handleClick:p,handleMouseEnter:h,handleMouseMove:y}=this,T=go(o,e),C=b?[b(n,o),a&&T]:[Ie(n[this.labelField],n,o),a&&T],x=f==null?void 0:f(n),A=c("div",Object.assign({},x,{class:[`${e}-base-select-option`,n.class,x==null?void 0:x.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:a}],style:[(x==null?void 0:x.style)||"",n.style||""],onClick:dt([p,x==null?void 0:x.onClick]),onMouseenter:dt([h,x==null?void 0:x.onMouseenter]),onMousemove:dt([y,x==null?void 0:x.onMousemove])}),c("div",{class:`${e}-base-select-option__content`},C));return n.render?n.render({node:A,option:n,selected:o}):r?r({node:A,option:n,selected:o}):A}}),po=_("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[_("scrollbar",`
 max-height: var(--n-height);
 `),_("virtual-list",`
 max-height: var(--n-height);
 `),_("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[K("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),_("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),_("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),K("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),K("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),K("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),K("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),_("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),_("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ae("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ve("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ve("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ae("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ae("pending",[ve("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ae("selected",`
 color: var(--n-option-text-color-active);
 `,[ve("&::before",`
 background-color: var(--n-option-color-active);
 `),ae("pending",[ve("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ae("disabled",`
 cursor: not-allowed;
 `,[ht("selected",`
 color: var(--n-option-text-color-disabled);
 `),ae("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),K("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Et({enterScale:"0.5"})])])]),bo=ue({name:"InternalSelectMenu",props:Object.assign(Object.assign({},we.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=Ze(e),i=wt("InternalSelectMenu",o,n),l=we("InternalSelectMenu","-internal-select-menu",po,Wt,e,Q(e,"clsPrefix")),a=O(null),f=O(null),r=O(null),b=E(()=>e.treeMate.getFlattenedNodes()),p=E(()=>In(b.value)),h=O(null);function y(){const{treeMate:u}=e;let g=null;const{value:D}=e;D===null?g=u.getFirstAvailableNode():(e.multiple?g=u.getNode((D||[])[(D||[]).length-1]):g=u.getNode(D),(!g||g.disabled)&&(g=u.getFirstAvailableNode())),w(g||null)}function T(){const{value:u}=h;u&&!e.treeMate.getNode(u.key)&&(h.value=null)}let C;Re(()=>e.show,u=>{u?C=Re(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?y():T(),At(B)):T()},{immediate:!0}):C==null||C()},{immediate:!0}),$t(()=>{C==null||C()});const x=E(()=>We(l.value.self[me("optionHeight",e.size)])),A=E(()=>Le(l.value.self[me("padding",e.size)])),W=E(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),F=E(()=>{const u=b.value;return u&&u.length===0});function S(u){const{onToggle:g}=e;g&&g(u)}function z(u){const{onScroll:g}=e;g&&g(u)}function k(u){var g;(g=r.value)===null||g===void 0||g.sync(),z(u)}function N(){var u;(u=r.value)===null||u===void 0||u.sync()}function U(){const{value:u}=h;return u||null}function Y(u,g){g.disabled||w(g,!1)}function se(u,g){g.disabled||S(g)}function de(u){var g;De(u,"action")||(g=e.onKeyup)===null||g===void 0||g.call(e,u)}function te(u){var g;De(u,"action")||(g=e.onKeydown)===null||g===void 0||g.call(e,u)}function Z(u){var g;(g=e.onMousedown)===null||g===void 0||g.call(e,u),!e.focusable&&u.preventDefault()}function ne(){const{value:u}=h;u&&w(u.getNext({loop:!0}),!0)}function d(){const{value:u}=h;u&&w(u.getPrev({loop:!0}),!0)}function w(u,g=!1){h.value=u,g&&B()}function B(){var u,g;const D=h.value;if(!D)return;const oe=p.value(D.key);oe!==null&&(e.virtualScroll?(u=f.value)===null||u===void 0||u.scrollTo({index:oe}):(g=r.value)===null||g===void 0||g.scrollTo({index:oe,elSize:x.value}))}function H(u){var g,D;!((g=a.value)===null||g===void 0)&&g.contains(u.target)&&((D=e.onFocus)===null||D===void 0||D.call(e,u))}function G(u){var g,D;!((g=a.value)===null||g===void 0)&&g.contains(u.relatedTarget)||(D=e.onBlur)===null||D===void 0||D.call(e,u)}ft(mt,{handleOptionMouseEnter:Y,handleOptionClick:se,valueSetRef:W,pendingTmNodeRef:h,nodePropsRef:Q(e,"nodeProps"),showCheckmarkRef:Q(e,"showCheckmark"),multipleRef:Q(e,"multiple"),valueRef:Q(e,"value"),renderLabelRef:Q(e,"renderLabel"),renderOptionRef:Q(e,"renderOption"),labelFieldRef:Q(e,"labelField"),valueFieldRef:Q(e,"valueField")}),ft(Pn,a),Qe(()=>{const{value:u}=r;u&&u.sync()});const V=E(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:g},self:{height:D,borderRadius:oe,color:Te,groupHeaderTextColor:Fe,actionDividerColor:ge,optionTextColorPressed:le,optionTextColor:Oe,optionTextColorDisabled:pe,optionTextColorActive:Pe,optionOpacityDisabled:ke,optionCheckColor:Be,actionTextColor:$e,optionColorPending:xe,optionColorActive:ye,loadingColor:_e,loadingSize:Ee,optionColorActivePending:Ae,[me("optionFontSize",u)]:ze,[me("optionHeight",u)]:Se,[me("optionPadding",u)]:ee}}=l.value;return{"--n-height":D,"--n-action-divider-color":ge,"--n-action-text-color":$e,"--n-bezier":g,"--n-border-radius":oe,"--n-color":Te,"--n-option-font-size":ze,"--n-group-header-text-color":Fe,"--n-option-check-color":Be,"--n-option-color-pending":xe,"--n-option-color-active":ye,"--n-option-color-active-pending":Ae,"--n-option-height":Se,"--n-option-opacity-disabled":ke,"--n-option-text-color":Oe,"--n-option-text-color-active":Pe,"--n-option-text-color-disabled":pe,"--n-option-text-color-pressed":le,"--n-option-padding":ee,"--n-option-padding-left":Le(ee,"left"),"--n-option-padding-right":Le(ee,"right"),"--n-loading-color":_e,"--n-loading-size":Ee}}),{inlineThemeDisabled:j}=e,L=j?xt("internal-select-menu",E(()=>e.size[0]),V,e):void 0,J={selfRef:a,next:ne,prev:d,getPendingTmNode:U};return Dt(a,e.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:n,rtlEnabled:i,virtualListRef:f,scrollbarRef:r,itemSize:x,padding:A,flattenedNodes:b,empty:F,virtualListContainer(){const{value:u}=f;return u==null?void 0:u.listElRef},virtualListContent(){const{value:u}=f;return u==null?void 0:u.itemsElRef},doScroll:z,handleFocusin:H,handleFocusout:G,handleKeyUp:de,handleKeyDown:te,handleMouseDown:Z,handleVirtualListResize:N,handleVirtualListScroll:k,cssVars:j?void 0:V,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender},J)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:i,themeClass:l,onRender:a}=this;return a==null||a(),c("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,l,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},St(e.header,f=>f&&c("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},f)),this.loading?c("div",{class:`${o}-base-select-menu__loading`},c(Fn,{clsPrefix:o,strokeWidth:20})):this.empty?c("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},zn(e.empty,()=>[c(Mn,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):c(On,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?c(uo,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?c(Pt,{key:f.key,clsPrefix:o,tmNode:f}):f.ignored?null:c(kt,{clsPrefix:o,key:f.key,tmNode:f})}):c("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?c(Pt,{key:f.key,clsPrefix:o,tmNode:f}):c(kt,{clsPrefix:o,key:f.key,tmNode:f})))}),St(e.action,f=>f&&[c("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},f),c(fo,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),mo={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"};function wo(e){const{borderRadius:n,textColor2:o,textColorDisabled:i,inputColor:l,inputColorDisabled:a,primaryColor:f,primaryColorHover:r,warningColor:b,warningColorHover:p,errorColor:h,errorColorHover:y,borderColor:T,iconColor:C,iconColorDisabled:x,clearColor:A,clearColorHover:W,clearColorPressed:F,placeholderColor:S,placeholderColorDisabled:z,fontSizeTiny:k,fontSizeSmall:N,fontSizeMedium:U,fontSizeLarge:Y,heightTiny:se,heightSmall:de,heightMedium:te,heightLarge:Z,fontWeight:ne}=e;return Object.assign(Object.assign({},mo),{fontSizeTiny:k,fontSizeSmall:N,fontSizeMedium:U,fontSizeLarge:Y,heightTiny:se,heightSmall:de,heightMedium:te,heightLarge:Z,borderRadius:n,fontWeight:ne,textColor:o,textColorDisabled:i,placeholderColor:S,placeholderColorDisabled:z,color:l,colorDisabled:a,colorActive:l,border:`1px solid ${T}`,borderHover:`1px solid ${r}`,borderActive:`1px solid ${f}`,borderFocus:`1px solid ${r}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${Me(f,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${Me(f,{alpha:.2})}`,caretColor:f,arrowColor:C,arrowColorDisabled:x,loadingColor:f,borderWarning:`1px solid ${b}`,borderHoverWarning:`1px solid ${p}`,borderActiveWarning:`1px solid ${b}`,borderFocusWarning:`1px solid ${p}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${Me(b,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${Me(b,{alpha:.2})}`,colorActiveWarning:l,caretColorWarning:b,borderError:`1px solid ${h}`,borderHoverError:`1px solid ${y}`,borderActiveError:`1px solid ${h}`,borderFocusError:`1px solid ${y}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${Me(h,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${Me(h,{alpha:.2})}`,colorActiveError:l,caretColorError:h,clearColor:A,clearColorHover:W,clearColorPressed:F})}const Ht=pt({name:"InternalSelection",common:bt,peers:{Popover:kn},self:wo}),xo=ve([_("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[_("base-loading",`
 color: var(--n-loading-color);
 `),_("base-selection-tags","min-height: var(--n-height);"),K("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),K("state-border",`
 z-index: 1;
 border-color: #0000;
 `),_("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[K("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),_("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[K("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),_("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[K("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),_("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),_("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[_("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[K("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),K("render-label",`
 color: var(--n-text-color);
 `)]),ht("disabled",[ve("&:hover",[K("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ae("focus",[K("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ae("active",[K("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),_("base-selection-label","background-color: var(--n-color-active);"),_("base-selection-tags","background-color: var(--n-color-active);")])]),ae("disabled","cursor: not-allowed;",[K("arrow",`
 color: var(--n-arrow-color-disabled);
 `),_("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[_("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),K("render-label",`
 color: var(--n-text-color-disabled);
 `)]),_("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),_("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),_("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[K("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),K("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ae(`${e}-status`,[K("state-border",`border: var(--n-border-${e});`),ht("disabled",[ve("&:hover",[K("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ae("active",[K("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),_("base-selection-label",`background-color: var(--n-color-active-${e});`),_("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ae("focus",[K("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),_("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),_("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ve("&:last-child","padding-right: 0;"),_("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[K("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),yo=ue({name:"InternalSelection",props:Object.assign(Object.assign({},we.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=Ze(e),i=wt("InternalSelection",o,n),l=O(null),a=O(null),f=O(null),r=O(null),b=O(null),p=O(null),h=O(null),y=O(null),T=O(null),C=O(null),x=O(!1),A=O(!1),W=O(!1),F=we("InternalSelection","-internal-selection",xo,Ht,e,Q(e,"clsPrefix")),S=E(()=>e.clearable&&!e.disabled&&(W.value||e.active)),z=E(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ie(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),k=E(()=>{const s=e.selectedOption;if(s)return s[e.labelField]}),N=E(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function U(){var s;const{value:m}=l;if(m){const{value:q}=a;q&&(q.style.width=`${m.offsetWidth}px`,e.maxTagCount!=="responsive"&&((s=T.value)===null||s===void 0||s.sync({showAllItemsBeforeCalculate:!1})))}}function Y(){const{value:s}=C;s&&(s.style.display="none")}function se(){const{value:s}=C;s&&(s.style.display="inline-block")}Re(Q(e,"active"),s=>{s||Y()}),Re(Q(e,"pattern"),()=>{e.multiple&&At(U)});function de(s){const{onFocus:m}=e;m&&m(s)}function te(s){const{onBlur:m}=e;m&&m(s)}function Z(s){const{onDeleteOption:m}=e;m&&m(s)}function ne(s){const{onClear:m}=e;m&&m(s)}function d(s){const{onPatternInput:m}=e;m&&m(s)}function w(s){var m;(!s.relatedTarget||!(!((m=f.value)===null||m===void 0)&&m.contains(s.relatedTarget)))&&de(s)}function B(s){var m;!((m=f.value)===null||m===void 0)&&m.contains(s.relatedTarget)||te(s)}function H(s){ne(s)}function G(){W.value=!0}function V(){W.value=!1}function j(s){!e.active||!e.filterable||s.target!==a.value&&s.preventDefault()}function L(s){Z(s)}const J=O(!1);function u(s){if(s.key==="Backspace"&&!J.value&&!e.pattern.length){const{selectedOptions:m}=e;m!=null&&m.length&&L(m[m.length-1])}}let g=null;function D(s){const{value:m}=l;if(m){const q=s.target.value;m.textContent=q,U()}e.ignoreComposition&&J.value?g=s:d(s)}function oe(){J.value=!0}function Te(){J.value=!1,e.ignoreComposition&&d(g),g=null}function Fe(s){var m;A.value=!0,(m=e.onPatternFocus)===null||m===void 0||m.call(e,s)}function ge(s){var m;A.value=!1,(m=e.onPatternBlur)===null||m===void 0||m.call(e,s)}function le(){var s,m;if(e.filterable)A.value=!1,(s=p.value)===null||s===void 0||s.blur(),(m=a.value)===null||m===void 0||m.blur();else if(e.multiple){const{value:q}=r;q==null||q.blur()}else{const{value:q}=b;q==null||q.blur()}}function Oe(){var s,m,q;e.filterable?(A.value=!1,(s=p.value)===null||s===void 0||s.focus()):e.multiple?(m=r.value)===null||m===void 0||m.focus():(q=b.value)===null||q===void 0||q.focus()}function pe(){const{value:s}=a;s&&(se(),s.focus())}function Pe(){const{value:s}=a;s&&s.blur()}function ke(s){const{value:m}=h;m&&m.setTextContent(`+${s}`)}function Be(){const{value:s}=y;return s}function $e(){return a.value}let xe=null;function ye(){xe!==null&&window.clearTimeout(xe)}function _e(){e.active||(ye(),xe=window.setTimeout(()=>{N.value&&(x.value=!0)},100))}function Ee(){ye()}function Ae(s){s||(ye(),x.value=!1)}Re(N,s=>{s||(x.value=!1)}),Qe(()=>{An(()=>{const s=p.value;s&&(e.disabled?s.removeAttribute("tabindex"):s.tabIndex=A.value?-1:0)})}),Dt(f,e.onResize);const{inlineThemeDisabled:ze}=e,Se=E(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:m},self:{fontWeight:q,borderRadius:et,color:tt,placeholderColor:He,textColor:Ve,paddingSingle:je,paddingMultiple:nt,caretColor:ot,colorDisabled:Ke,textColorDisabled:be,placeholderColorDisabled:t,colorActive:v,boxShadowFocus:R,boxShadowActive:$,boxShadowHover:I,border:M,borderFocus:P,borderHover:X,borderActive:ce,arrowColor:jt,arrowColorDisabled:Kt,loadingColor:Ut,colorActiveWarning:Gt,boxShadowFocusWarning:qt,boxShadowActiveWarning:Jt,boxShadowHoverWarning:Xt,borderWarning:Yt,borderFocusWarning:Qt,borderHoverWarning:Zt,borderActiveWarning:en,colorActiveError:tn,boxShadowFocusError:nn,boxShadowActiveError:on,boxShadowHoverError:ln,borderError:rn,borderFocusError:an,borderHoverError:sn,borderActiveError:dn,clearColor:un,clearColorHover:cn,clearColorPressed:fn,clearSize:hn,arrowSize:vn,[me("height",s)]:gn,[me("fontSize",s)]:pn}}=F.value,Ue=Le(je),Ge=Le(nt);return{"--n-bezier":m,"--n-border":M,"--n-border-active":ce,"--n-border-focus":P,"--n-border-hover":X,"--n-border-radius":et,"--n-box-shadow-active":$,"--n-box-shadow-focus":R,"--n-box-shadow-hover":I,"--n-caret-color":ot,"--n-color":tt,"--n-color-active":v,"--n-color-disabled":Ke,"--n-font-size":pn,"--n-height":gn,"--n-padding-single-top":Ue.top,"--n-padding-multiple-top":Ge.top,"--n-padding-single-right":Ue.right,"--n-padding-multiple-right":Ge.right,"--n-padding-single-left":Ue.left,"--n-padding-multiple-left":Ge.left,"--n-padding-single-bottom":Ue.bottom,"--n-padding-multiple-bottom":Ge.bottom,"--n-placeholder-color":He,"--n-placeholder-color-disabled":t,"--n-text-color":Ve,"--n-text-color-disabled":be,"--n-arrow-color":jt,"--n-arrow-color-disabled":Kt,"--n-loading-color":Ut,"--n-color-active-warning":Gt,"--n-box-shadow-focus-warning":qt,"--n-box-shadow-active-warning":Jt,"--n-box-shadow-hover-warning":Xt,"--n-border-warning":Yt,"--n-border-focus-warning":Qt,"--n-border-hover-warning":Zt,"--n-border-active-warning":en,"--n-color-active-error":tn,"--n-box-shadow-focus-error":nn,"--n-box-shadow-active-error":on,"--n-box-shadow-hover-error":ln,"--n-border-error":rn,"--n-border-focus-error":an,"--n-border-hover-error":sn,"--n-border-active-error":dn,"--n-clear-size":hn,"--n-clear-color":un,"--n-clear-color-hover":cn,"--n-clear-color-pressed":fn,"--n-arrow-size":vn,"--n-font-weight":q}}),ee=ze?xt("internal-selection",E(()=>e.size[0]),Se,e):void 0;return{mergedTheme:F,mergedClearable:S,mergedClsPrefix:n,rtlEnabled:i,patternInputFocused:A,filterablePlaceholder:z,label:k,selected:N,showTagsPanel:x,isComposing:J,counterRef:h,counterWrapperRef:y,patternInputMirrorRef:l,patternInputRef:a,selfRef:f,multipleElRef:r,singleElRef:b,patternInputWrapperRef:p,overflowRef:T,inputTagElRef:C,handleMouseDown:j,handleFocusin:w,handleClear:H,handleMouseEnter:G,handleMouseLeave:V,handleDeleteOption:L,handlePatternKeyDown:u,handlePatternInputInput:D,handlePatternInputBlur:ge,handlePatternInputFocus:Fe,handleMouseEnterCounter:_e,handleMouseLeaveCounter:Ee,handleFocusout:B,handleCompositionEnd:Te,handleCompositionStart:oe,onPopoverUpdateShow:Ae,focus:Oe,focusInput:pe,blur:le,blurInput:Pe,updateCounter:ke,getCounter:Be,getTail:$e,renderLabel:e.renderLabel,cssVars:ze?void 0:Se,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender}},render(){const{status:e,multiple:n,size:o,disabled:i,filterable:l,maxTagCount:a,bordered:f,clsPrefix:r,ellipsisTagPopoverProps:b,onRender:p,renderTag:h,renderLabel:y}=this;p==null||p();const T=a==="responsive",C=typeof a=="number",x=T||C,A=c(Bn,null,{default:()=>c($n,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var F,S;return(S=(F=this.$slots).arrow)===null||S===void 0?void 0:S.call(F)}})});let W;if(n){const{labelField:F}=this,S=d=>c("div",{class:`${r}-base-selection-tag-wrapper`,key:d.value},h?h({option:d,handleClose:()=>{this.handleDeleteOption(d)}}):c(rt,{size:o,closable:!d.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(d)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>y?y(d,!0):Ie(d[F],d,!0)})),z=()=>(C?this.selectedOptions.slice(0,a):this.selectedOptions).map(S),k=l?c("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),c("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,N=T?()=>c("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},c(rt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let U;if(C){const d=this.selectedOptions.length-a;d>0&&(U=c("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},c(rt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${d}`})))}const Y=T?l?c(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:z,counter:N,tail:()=>k}):c(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:z,counter:N}):C&&U?z().concat(U):z(),se=x?()=>c("div",{class:`${r}-base-selection-popover`},T?z():this.selectedOptions.map(S)):void 0,de=x?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},b):null,Z=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?c("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},c("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,ne=l?c("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},Y,T?null:k,A):c("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:i?void 0:0},Y,A);W=c(_n,null,x?c(En,Object.assign({},de,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ne,default:se}):ne,Z)}else if(l){const F=this.pattern||this.isComposing,S=this.active?!F:!this.selected,z=this.active?!1:this.selected;W=c("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`,title:this.patternInputFocused?void 0:It(this.label)},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),z?c("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},c("div",{class:`${r}-base-selection-overlay__wrapper`},h?h({option:this.selectedOption,handleClose:()=>{}}):y?y(this.selectedOption,!0):Ie(this.label,this.selectedOption,!0))):null,S?c("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,A)}else W=c("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?c("div",{class:`${r}-base-selection-input`,title:It(this.label),key:"input"},c("div",{class:`${r}-base-selection-input__content`},h?h({option:this.selectedOption,handleClose:()=>{}}):y?y(this.selectedOption,!0):Ie(this.label,this.selectedOption,!0))):c("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),A);return c("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},W,f?c("div",{class:`${r}-base-selection__border`}):null,f?c("div",{class:`${r}-base-selection__state-border`}):null)}});function Ye(e){return e.type==="group"}function Vt(e){return e.type==="ignored"}function ut(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function So(e,n){return{getIsGroup:Ye,getIgnored:Vt,getKey(i){return Ye(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[n]}}}function Co(e,n,o,i){if(!n)return e;function l(a){if(!Array.isArray(a))return[];const f=[];for(const r of a)if(Ye(r)){const b=l(r[i]);b.length&&f.push(Object.assign({},r,{[i]:b}))}else{if(Vt(r))continue;n(o,r)&&f.push(r)}return f}return l(e)}function Ro(e,n,o){const i=new Map;return e.forEach(l=>{Ye(l)?l[o].forEach(a=>{i.set(a[n],a)}):i.set(l[n],l)}),i}function To(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const Fo=pt({name:"Select",common:bt,peers:{InternalSelection:Ht,InternalSelectMenu:Wt},self:To}),Oo=ve([_("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),_("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Et({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),zo=Object.assign(Object.assign({},we.props),{to:vt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Mo=ue({name:"Select",props:zo,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:i,inlineThemeDisabled:l}=Ze(e),a=we("Select","-select",Oo,Fo,e,n),f=O(e.defaultValue),r=Q(e,"value"),b=Tt(r,f),p=O(!1),h=O(""),y=Vn(e,["items","options"]),T=O([]),C=O([]),x=E(()=>C.value.concat(T.value).concat(y.value)),A=E(()=>{const{filter:t}=e;if(t)return t;const{labelField:v,valueField:R}=e;return($,I)=>{if(!I)return!1;const M=I[v];if(typeof M=="string")return ut($,M);const P=I[R];return typeof P=="string"?ut($,P):typeof P=="number"?ut($,String(P)):!1}}),W=E(()=>{if(e.remote)return y.value;{const{value:t}=x,{value:v}=h;return!v.length||!e.filterable?t:Co(t,A.value,v,e.childrenField)}}),F=E(()=>{const{valueField:t,childrenField:v}=e,R=So(t,v);return jn(W.value,R)}),S=E(()=>Ro(x.value,e.valueField,e.childrenField)),z=O(!1),k=Tt(Q(e,"show"),z),N=O(null),U=O(null),Y=O(null),{localeRef:se}=Kn("Select"),de=E(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:se.value.placeholder}),te=[],Z=O(new Map),ne=E(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:v,valueField:R}=e;return $=>({[v]:String($),[R]:$})}return t===!1?!1:v=>Object.assign(t(v),{value:v})});function d(t){const v=e.remote,{value:R}=Z,{value:$}=S,{value:I}=ne,M=[];return t.forEach(P=>{if($.has(P))M.push($.get(P));else if(v&&R.has(P))M.push(R.get(P));else if(I){const X=I(P);X&&M.push(X)}}),M}const w=E(()=>{if(e.multiple){const{value:t}=b;return Array.isArray(t)?d(t):[]}return null}),B=E(()=>{const{value:t}=b;return!e.multiple&&!Array.isArray(t)?t===null?null:d([t])[0]||null:null}),H=Un(e),{mergedSizeRef:G,mergedDisabledRef:V,mergedStatusRef:j}=H;function L(t,v){const{onChange:R,"onUpdate:value":$,onUpdateValue:I}=e,{nTriggerFormChange:M,nTriggerFormInput:P}=H;R&&fe(R,t,v),I&&fe(I,t,v),$&&fe($,t,v),f.value=t,M(),P()}function J(t){const{onBlur:v}=e,{nTriggerFormBlur:R}=H;v&&fe(v,t),R()}function u(){const{onClear:t}=e;t&&fe(t)}function g(t){const{onFocus:v,showOnFocus:R}=e,{nTriggerFormFocus:$}=H;v&&fe(v,t),$(),R&&ge()}function D(t){const{onSearch:v}=e;v&&fe(v,t)}function oe(t){const{onScroll:v}=e;v&&fe(v,t)}function Te(){var t;const{remote:v,multiple:R}=e;if(v){const{value:$}=Z;if(R){const{valueField:I}=e;(t=w.value)===null||t===void 0||t.forEach(M=>{$.set(M[I],M)})}else{const I=B.value;I&&$.set(I[e.valueField],I)}}}function Fe(t){const{onUpdateShow:v,"onUpdate:show":R}=e;v&&fe(v,t),R&&fe(R,t),z.value=t}function ge(){V.value||(Fe(!0),z.value=!0,e.filterable&&je())}function le(){Fe(!1)}function Oe(){h.value="",C.value=te}const pe=O(!1);function Pe(){e.filterable&&(pe.value=!0)}function ke(){e.filterable&&(pe.value=!1,k.value||Oe())}function Be(){V.value||(k.value?e.filterable?je():le():ge())}function $e(t){var v,R;!((R=(v=Y.value)===null||v===void 0?void 0:v.selfRef)===null||R===void 0)&&R.contains(t.relatedTarget)||(p.value=!1,J(t),le())}function xe(t){g(t),p.value=!0}function ye(){p.value=!0}function _e(t){var v;!((v=N.value)===null||v===void 0)&&v.$el.contains(t.relatedTarget)||(p.value=!1,J(t),le())}function Ee(){var t;(t=N.value)===null||t===void 0||t.focus(),le()}function Ae(t){var v;k.value&&(!((v=N.value)===null||v===void 0)&&v.$el.contains(qn(t))||le())}function ze(t){if(!Array.isArray(t))return[];if(ne.value)return Array.from(t);{const{remote:v}=e,{value:R}=S;if(v){const{value:$}=Z;return t.filter(I=>R.has(I)||$.has(I))}else return t.filter($=>R.has($))}}function Se(t){ee(t.rawNode)}function ee(t){if(V.value)return;const{tag:v,remote:R,clearFilterAfterSelect:$,valueField:I}=e;if(v&&!R){const{value:M}=C,P=M[0]||null;if(P){const X=T.value;X.length?X.push(P):T.value=[P],C.value=te}}if(R&&Z.value.set(t[I],t),e.multiple){const M=ze(b.value),P=M.findIndex(X=>X===t[I]);if(~P){if(M.splice(P,1),v&&!R){const X=s(t[I]);~X&&(T.value.splice(X,1),$&&(h.value=""))}}else M.push(t[I]),$&&(h.value="");L(M,d(M))}else{if(v&&!R){const M=s(t[I]);~M?T.value=[T.value[M]]:T.value=te}Ve(),le(),L(t[I],t)}}function s(t){return T.value.findIndex(R=>R[e.valueField]===t)}function m(t){k.value||ge();const{value:v}=t.target;h.value=v;const{tag:R,remote:$}=e;if(D(v),R&&!$){if(!v){C.value=te;return}const{onCreate:I}=e,M=I?I(v):{[e.labelField]:v,[e.valueField]:v},{valueField:P,labelField:X}=e;y.value.some(ce=>ce[P]===M[P]||ce[X]===M[X])||T.value.some(ce=>ce[P]===M[P]||ce[X]===M[X])?C.value=te:C.value=[M]}}function q(t){t.stopPropagation();const{multiple:v}=e;!v&&e.filterable&&le(),u(),v?L([],[]):L(null,null)}function et(t){!De(t,"action")&&!De(t,"empty")&&!De(t,"header")&&t.preventDefault()}function tt(t){oe(t)}function He(t){var v,R,$,I,M;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((v=N.value)===null||v===void 0)&&v.isComposing)){if(k.value){const P=(R=Y.value)===null||R===void 0?void 0:R.getPendingTmNode();P?Se(P):e.filterable||(le(),Ve())}else if(ge(),e.tag&&pe.value){const P=C.value[0];if(P){const X=P[e.valueField],{value:ce}=b;e.multiple&&Array.isArray(ce)&&ce.includes(X)||ee(P)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;k.value&&(($=Y.value)===null||$===void 0||$.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;k.value?(I=Y.value)===null||I===void 0||I.next():ge();break;case"Escape":k.value&&(Jn(t),le()),(M=N.value)===null||M===void 0||M.focus();break}}function Ve(){var t;(t=N.value)===null||t===void 0||t.focus()}function je(){var t;(t=N.value)===null||t===void 0||t.focusInput()}function nt(){var t;k.value&&((t=U.value)===null||t===void 0||t.syncPosition())}Te(),Re(Q(e,"options"),Te);const ot={focus:()=>{var t;(t=N.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=N.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=N.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=N.value)===null||t===void 0||t.blurInput()}},Ke=E(()=>{const{self:{menuBoxShadow:t}}=a.value;return{"--n-menu-box-shadow":t}}),be=l?xt("select",void 0,Ke,e):void 0;return Object.assign(Object.assign({},ot),{mergedStatus:j,mergedClsPrefix:n,mergedBordered:o,namespace:i,treeMate:F,isMounted:Gn(),triggerRef:N,menuRef:Y,pattern:h,uncontrolledShow:z,mergedShow:k,adjustedTo:vt(e),uncontrolledValue:f,mergedValue:b,followerRef:U,localizedPlaceholder:de,selectedOption:B,selectedOptions:w,mergedSize:G,mergedDisabled:V,focused:p,activeWithoutMenuOpen:pe,inlineThemeDisabled:l,onTriggerInputFocus:Pe,onTriggerInputBlur:ke,handleTriggerOrMenuResize:nt,handleMenuFocus:ye,handleMenuBlur:_e,handleMenuTabOut:Ee,handleTriggerClick:Be,handleToggle:Se,handleDeleteOption:ee,handlePatternInput:m,handleClear:q,handleTriggerBlur:$e,handleTriggerFocus:xe,handleKeydown:He,handleMenuAfterLeave:Oe,handleMenuClickOutside:Ae,handleMenuScroll:tt,handleMenuKeydown:He,handleMenuMousedown:et,mergedTheme:a,cssVars:l?void 0:Ke,themeClass:be==null?void 0:be.themeClass,onRender:be==null?void 0:be.onRender})},render(){return c("div",{class:`${this.mergedClsPrefix}-select`},c(Nn,null,{default:()=>[c(Ln,null,{default:()=>c(yo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),c(Dn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===vt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>c(_t,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Wn(c(bo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,l;return[(l=(i=this.$slots).empty)===null||l===void 0?void 0:l.call(i)]},header:()=>{var i,l;return[(l=(i=this.$slots).header)===null||l===void 0?void 0:l.call(i)]},action:()=>{var i,l;return[(l=(i=this.$slots).action)===null||l===void 0?void 0:l.call(i)]}}),this.displayDirective==="show"?[[Hn,this.mergedShow],[Rt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Rt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Io={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};function Po(){return Io}const ko={self:Po};let ct;function Bo(){if(!Xn)return!0;if(ct===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),ct=n}return ct}const $o=Object.assign(Object.assign({},we.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Bt=ue({name:"Space",props:$o,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=Ze(e),i=we("Space","-space",void 0,ko,e,n),l=wt("Space",o,n);return{useGap:Bo(),rtlEnabled:l,mergedClsPrefix:n,margin:E(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[me("gap",a)]:f}}=i.value,{row:r,col:b}=eo(f);return{horizontal:We(b),vertical:We(r)}})}},render(){const{vertical:e,reverse:n,align:o,inline:i,justify:l,itemClass:a,itemStyle:f,margin:r,wrap:b,mergedClsPrefix:p,rtlEnabled:h,useGap:y,wrapItem:T,internalUseGap:C}=this,x=Yn(Qn(this),!1);if(!x.length)return null;const A=`${r.horizontal}px`,W=`${r.horizontal/2}px`,F=`${r.vertical}px`,S=`${r.vertical/2}px`,z=x.length-1,k=l.startsWith("space-");return c("div",{role:"none",class:[`${p}-space`,h&&`${p}-space--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:e&&!n?"column":e&&n?"column-reverse":!e&&n?"row-reverse":"row",justifyContent:["start","end"].includes(l)?`flex-${l}`:l,flexWrap:!b||e?"nowrap":"wrap",marginTop:y||e?"":`-${S}`,marginBottom:y||e?"":`-${S}`,alignItems:o,gap:y?`${r.vertical}px ${r.horizontal}px`:""}},!T&&(y||C)?x:x.map((N,U)=>N.type===Zn?N:c("div",{role:"none",class:a,style:[f,{maxWidth:"100%"},y?"":e?{marginBottom:U!==z?F:""}:h?{marginLeft:k?l==="space-between"&&U===z?"":W:U!==z?A:"",marginRight:k?l==="space-between"&&U===0?"":W:"",paddingTop:S,paddingBottom:S}:{marginRight:k?l==="space-between"&&U===z?"":W:U!==z?A:"",marginLeft:k?l==="space-between"&&U===0?"":W:"",paddingTop:S,paddingBottom:S}]},N)))}}),_o={class:"h-full flex flex-col gap-4"},Eo={class:"flex-1 grid grid-cols-2 gap-4 min-h-[500px]"},Lo=ue({__name:"index",setup(e){const n=O(""),o=O(""),i=O(2),l=io(),a=()=>{try{if(!n.value.trim()){o.value="";return}const p=JSON.parse(n.value);o.value=JSON.stringify(p,null,i.value),l.success("格式化成功")}catch(p){l.error("JSON 格式错误: "+p.message)}},f=()=>{try{if(!n.value.trim())return;const p=JSON.parse(n.value);o.value=JSON.stringify(p),l.success("压缩成功")}catch(p){l.error("JSON 格式错误: "+p.message)}},r=async()=>{if(o.value)try{await navigator.clipboard.writeText(o.value),l.success("复制成功")}catch{l.error("复制失败")}},b=()=>{n.value="",o.value=""};return(p,h)=>(oo(),to("div",_o,[ie(re(lo),null,{default:he(()=>[ie(re(Bt),{align:"center",justify:"space-between"},{default:he(()=>[ie(re(Bt),null,{default:he(()=>[ie(re(Mo),{value:i.value,"onUpdate:value":h[0]||(h[0]=y=>i.value=y),options:[{label:"2 空格缩进",value:2},{label:"4 空格缩进",value:4},{label:"Tab 缩进",value:"	"}],class:"w-40",size:"small"},null,8,["value"]),ie(re(qe),{type:"primary",onClick:a,size:"small"},{icon:he(()=>[ie(re(at),{icon:"mdi:format-align-left"})]),default:he(()=>[h[3]||(h[3]=Je(" 格式化 ",-1))]),_:1}),ie(re(qe),{onClick:f,size:"small"},{icon:he(()=>[ie(re(at),{icon:"mdi:zip-box-outline"})]),default:he(()=>[h[4]||(h[4]=Je(" 压缩 ",-1))]),_:1}),ie(re(qe),{onClick:b,size:"small",type:"error",ghost:""},{default:he(()=>[...h[5]||(h[5]=[Je(" 清空 ",-1)])]),_:1})]),_:1}),ie(re(qe),{onClick:r,size:"small",type:"info",ghost:"",disabled:!o.value},{icon:he(()=>[ie(re(at),{icon:"mdi:content-copy"})]),default:he(()=>[h[6]||(h[6]=Je(" 复制结果 ",-1))]),_:1},8,["disabled"])]),_:1})]),_:1}),no("div",Eo,[ie(re(Ft),{value:n.value,"onUpdate:value":h[1]||(h[1]=y=>n.value=y),type:"textarea",placeholder:"在此粘贴 JSON...",class:"font-mono text-sm","input-props":{spellcheck:!1}},null,8,["value"]),ie(re(Ft),{value:o.value,"onUpdate:value":h[2]||(h[2]=y=>o.value=y),type:"textarea",placeholder:"结果...",readonly:"",class:"font-mono text-sm bg-gray-50","input-props":{spellcheck:!1}},null,8,["value"])])]))}});export{Lo as default};

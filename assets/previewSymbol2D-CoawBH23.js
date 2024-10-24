import{bp as b,aO as q,bU as E,eX as L}from"./index-C1aGfQcb.js";import{G as D}from"./colorUtils-BWiljOUv.js";import{c as V}from"./fontUtils-BVEStqBT.js";import{u as P,y as T,g as W,f as G}from"./utils-C2gvZghy.js";import{t as S,e as H,d as F,l as I}from"./symbolUtils-BmmDXP-E.js";import"./vec42-BHDxGccW.js";import"./vec4f64-o2zAXfmz.js";import"./jsonUtils-n3e_wlfQ.js";import"./parser-C4Qiz3JH.js";import"./utils-sqJe3zMg.js";import"./utils-D7agaEG-.js";import"./enums-CmIX1y88.js";import"./LRUCache-DbPTy7LA.js";import"./mat2df32-BR-p9z6z.js";import"./webStyleSymbolUtils-kO7zmqzd.js";import"./jsonUtils-BWWcP_yB.js";import"./defaults-Dbnhuv3C.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-CEgUrR2a.js";const R="picture-fill",X="picture-marker",J="simple-fill",K="simple-line",N="simple-marker",Q="text",Y="Aa",_=S.size,C=S.maxSize,$=S.maxOutlineSize,Z=S.lineWidth,A=225,ee=document.createElement("canvas");function U(a,e){const i=ee.getContext("2d"),n=[];e&&(e.weight&&n.push(e.weight),e.size&&n.push(e.size+"px"),e.family&&n.push(e.family)),i.font=n.join(" ");const{width:h,actualBoundingBoxLeft:r,actualBoundingBoxRight:p,actualBoundingBoxAscent:t,actualBoundingBoxDescent:u}=i.measureText(a);return{width:Math.ceil(Math.max(h,r+p)),height:Math.ceil(t+u),x:Math.floor(r),y:Math.floor((t-u)/2)}}function x(a){const e=a==null?void 0:a.size;return{width:e!=null&&typeof e=="object"&&"width"in e?b(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?b(e.height):null}}async function ae(a,e){const i=e.fill,n=a.color;if((i==null?void 0:i.type)==="pattern"&&n&&a.type!==R){const h=await G(i.src,n.toCss(!0));i.src=h,e.fill=i}}async function ne(a,e,i,n){var p,t,u;if(!("font"in a)||!a.font||e.shape.type!=="text")return;try{await V(a.font)}catch{}const{width:h,height:r}=x(n);if(!/[\uE600-\uE6FF]/.test(e.shape.text)){const{width:d,height:f,x:o,y:l}=U(e.shape.text,{weight:(p=e.font)==null?void 0:p.weight,size:(t=e.font)==null?void 0:t.size,family:(u=e.font)==null?void 0:u.family});i[0]=h??d,i[1]=r??f,e.shape.x=o,e.shape.y=l;let w="angle"in a?a.angle:null;if((n==null?void 0:n.rotation)!=null&&(w=(w??0)+n.rotation),w){const M=w*(Math.PI/180),c=Math.abs(Math.sin(M)),m=Math.abs(Math.cos(M));i[1]=i[0]*c+i[1]*m}}}function ie(a,e,i,n,h){var r;if(a.haloColor!=null&&a.haloSize!=null){h.masking??(h.masking=i.map(()=>[]));const p=b(a.haloSize);n[0]+=p,n[1]+=p,i.unshift([{...e,fill:null,stroke:{color:a.haloColor,width:2*p,join:"round",cap:"round"}}]),h.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*L,height:n[1]+2*L},fill:[255,255,255],stroke:null},{...e,fill:[0,0,0,0],stroke:null}])}a.backgroundColor==null&&a.borderLineColor==null||(n[0]+=2*L,n[1]+=2*L,i.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:a.backgroundColor,stroke:{color:a.borderLineColor,width:b(a.borderLineSize)}}]),(r=h.masking)==null||r.unshift([]))}function O(a,e){return a>e?"dark":"light"}function oe(a,e){var M;const i=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,n=i!=null?b(i):null,h=(e==null?void 0:e.maxSize)!=null?b(e.maxSize):null;let r="angle"in a?a.angle:null;(e==null?void 0:e.rotation)!=null&&(r=(r??0)+e.rotation);const p=P(a);let t=T(a);le(a,245)!=="dark"||e!=null&&e.ignoreWhiteSymbols||(t={width:.75,...t,color:"#bdc3c7"});const u={shape:null,fill:p,stroke:t,offset:[0,0]};t!=null&&t.width&&(t.width=Math.min(t.width,$));const d=(t==null?void 0:t.width)||0;let f=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),o=0,l=0,w=!1;switch(a.type){case N:{const c=a.style,{width:m,height:s}=x(e),v=m===s&&m!=null?m:n??Math.min(b(a.size),h||C);switch(o=v,l=v,c){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*v},f||(o+=d,l+=d);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[o,.5*l]},{command:"M",values:[.5*o,0]},{command:"L",values:[.5*o,l]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[.5*o,0]},{command:"L",values:[o,.5*l]},{command:"L",values:[.5*o,l]},{command:"Z",values:[]}]},f||(o+=d,l+=d);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[o,0]},{command:"L",values:[o,l]},{command:"L",values:[0,l]},{command:"Z",values:[]}]},f||(o+=d,l+=d),r&&(w=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*o,0]},{command:"L",values:[o,l]},{command:"L",values:[0,l]},{command:"Z",values:[]}]},f||(o+=d,l+=d),r&&(w=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[o,l]},{command:"M",values:[o,0]},{command:"L",values:[0,l]}]},r&&(w=!0);break;case"path":u.shape={type:"path",path:a.path||""},f||(o+=d,l+=d),r&&(w=!0),f=!0}break}case K:{const{width:c,height:m}=x(e),s=W(t).reduce((B,k)=>B+k,0),v=s&&Math.ceil(Z/s),y=m??n??d,g=c??(s*v||Z);t&&(t.width=y),o=g,l=y,f=!0,u.shape={type:"path",path:[{command:"M",values:[y/2,l/2]},{command:"L",values:[o-y/2,l/2]}]};break}case R:case J:{const c=typeof(e==null?void 0:e.symbolConfig)=="object"&&!!((M=e==null?void 0:e.symbolConfig)!=null&&M.isSquareFill),{width:m,height:s}=x(e);o=!c&&m!==s||m==null?n??_:m,l=!c&&m!==s||s==null?o:s,f||(o+=d,l+=d),f=!0,u.shape=c?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[o,0]},{command:"L",values:[o,l]},{command:"L",values:[0,l]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:H.fill[0];break}case X:{const c=Math.min(b(a.width),h||C),m=Math.min(b(a.height),h||C),{width:s,height:v}=x(e),y=s===v&&s!=null?s:n??Math.max(c,m),g=c/m;o=g<=1?Math.ceil(y*g):y,l=g<=1?y:Math.ceil(y/g),u.shape={type:"image",x:-Math.round(o/2),y:-Math.round(l/2),width:o,height:l,src:a.url||""},r&&(w=!0);break}case Q:{const c=a,m=(e==null?void 0:e.overrideText)||c.text||Y,s=c.font,{width:v,height:y}=x(e),g=y??n??Math.min(b(s.size),h||C),{width:B,height:k}=U(m,{weight:s.weight,size:g,family:s.family}),z=/[\uE600-\uE6FF]/.test(m);o=v??(z?g:B),l=z?g:k;let j=.5*(z?g:k);z&&(j+=5),u.shape={type:"text",text:m,x:c.xoffset||0,y:c.yoffset||j,align:"middle",alignBaseline:c.verticalAlignment,decoration:s&&s.decoration,rotated:c.rotated,kerning:c.kerning},u.font=s&&{size:g,style:s.style,decoration:s.decoration,weight:s.weight,family:s.family};break}}return{shapeDescriptor:u,size:[o,l],renderOptions:{node:e==null?void 0:e.node,scale:f,opacity:e==null?void 0:e.opacity,rotations:[r],useRotationSize:w,effectView:e==null?void 0:e.effectView,ariaLabel:e==null?void 0:e.ariaLabel}}}async function Le(a,e){var p;const{shapeDescriptor:i,size:n,renderOptions:h}=oe(a,e);if(!i.shape)throw new q("symbolPreview: renderPreviewHTML2D","symbol not supported.");await ae(a,i),await ne(a,i,n,e);const r=[[i]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&((p=e==null?void 0:e.symbolConfig)!=null&&p.applyColorModulation)){const t=.6*n[0];r.unshift([{...i,offset:[-t,0],fill:F(i.fill,-.3)}]),r.push([{...i,offset:[t,0],fill:F(i.fill,.3)}]),n[0]+=2*t,h.scale=!1}return a.type==="text"&&ie(a,i,r,n,h),I(r,n,h)}function le(a,e=A){const i=P(a),n=T(a),h=!i||"type"in i?null:new E(i),r=n!=null&&n.color?new E(n==null?void 0:n.color):null,p=h?O(D(h),e):null,t=r?O(D(r),e):null;return t?p?p===t?p:e>=A?"light":"dark":t:p}export{le as getContrastingBackgroundTheme,oe as getRenderSymbolParameters,Le as previewSymbol2D};

import{cr as C,bq as Me,jR as De,jS as Te,jT as we,F as T,G as S,K as Se,L as Fe,di as Ne,g6 as He,cw as Re,hn as Le,aF as xe,dJ as $e,hO as ee,jU as Ue,jV as ze,hw as Be,aD as Ge,aO as te}from"./index-C1aGfQcb.js";import"./projectBuffer-CZ7yaGuo.js";import{n as Pe}from"./projectVectorToVector-Dtcb6Asj.js";import{r as Ve,o as ie}from"./vec2-D9okOEat.js";import{r as A,a as We}from"./vec2f64-CCfZVA9N.js";import{m as H,r as se,O as k,A as P,n as ke}from"./Texture-D7jaxJ9P.js";import{e as B}from"./mat4f64-Dk4dwAN8.js";import{o as je,E as j,c as V,P as ne}from"./vec32-CmwgPQMd.js";import{n as qe,r as D}from"./vec4f64-o2zAXfmz.js";import{t as be}from"./glUtil-CFv2RXTA.js";import{H as Ae}from"./InterleavedLayout-Bb_2wUZe.js";import{t as Ye,r as Je,o as Xe,i as Ke}from"./HUDMaterial.glsl-l3I2wjlc.js";import{n as v}from"./NormalAttribute.glsl-DGUKFRgB.js";import{i as N,e as re}from"./IntersectorInterfaces-BgX4KEwK.js";import{Y as q}from"./Octree-_-EHFyX0.js";import{s as y}from"./Util-BK6CBhAA.js";import{e as _}from"./VertexAttribute-Cq4MnHjR.js";import{n as Qe,s as Ze,u as et}from"./mat3-Dg2BrR6m.js";import{e as tt}from"./mat3f64-q3fE-ZOt.js";import{i as ae,l as $,c as Ee,x as U,b as oe,T as it,u as st,h as nt,d as he}from"./BufferView-sBvw8vqP.js";import{g as rt,m as at}from"./plane-CM4t6fNH.js";import{E as ve}from"./BufferObject-C4qiEJeh.js";import{F as Ce}from"./enums-Dk3osxpS.js";import{T as ot,E as ht,U as lt}from"./sphere-DuEd_sPX.js";import{o as ct,G as dt,l as _t}from"./utils-OIoyRVPd.js";import"./boundedPlane-C18Ysvcq.js";import{N as ut}from"./DefaultMaterial-DLGx92FQ.js";import{g as ft,C as gt}from"./Scheduler-DS_v5N7L.js";import{E as mt,_ as pt}from"./Texture-CLoEFKJJ.js";function ui(t,e,i){return!!Pe(t,e,w,i.spatialReference)&&(i.x=w[0],i.y=w[1],i.z=w[2],!0)}const w=C();function Y(t,e,i){return t.canvas||(t.canvas=document.createElement("canvas")),t.canvas.width=e,t.canvas.height=i,t.canvas}function yt(t){const{size:e}=t.definition,i=t.fontString(e);let s=le.get(i);if(!s){const n=Y(Tt,0,0).getContext("2d");t.setFontProperties(n,e);const r=n.measureText(St);s=new It(r.actualBoundingBoxAscent,r.actualBoundingBoxDescent),le.set(i,s)}return s}const le=new Map;let It=class{get maxHeight(){return this.maxAscent+this.maxDescent}constructor(e,i){this.maxAscent=e,this.maxDescent=i}};const Tt={canvas:null},St=(()=>{let t="";for(let e=32;e<127;e++)t+=String.fromCharCode(e);return t})(),J=1;let gi=class{constructor(e,i,s,n){this.text=e,this._alignment=i,this._parameters=s,this._maxSize=n,this._textWidths=[],this._lineWidths=[],this._renderPixelRatio=null,this._metricsCached=null,this.key=`${e}--${this._parameters.key}-${this._alignment}`,this._lines=e.replaceAll(" "," ").split(/\r?\n/)}get displayWidth(){return Math.ceil(this._displayWidth+2*this._horizontalPadding)}get displayHeight(){let e=this._metrics.firstLineAscent;for(let i=0;i<this._lines.length-1;i++)e+=this._lineSpacing;return e+=this._metrics.lastLineDescent,Math.ceil(e+2*this._haloSize+2*this._verticalPadding)}get renderedWidth(){return this._toRoundedRenderUnit(this.displayWidth)}get renderedHeight(){return this._toRoundedRenderUnit(this.displayHeight)}get firstRenderedBaselinePosition(){return this._toRenderUnit(this._firstLineYOffset+this._metrics.firstLineAscent)}get _firstLineYOffset(){return this._verticalPadding+this._haloSize}get _metrics(){if(this._metricsCached==null){const e=Y(ce,F,F).getContext("2d"),i=this._parameters.definition.pixelRatio,s=this._fontSize*i;this._parameters.setFontProperties(e,s);let n=2*this._haloSize;const r=this._parameters.definition.font;r.style!=="italic"&&r.style!=="oblique"&&r.weight!=="bold"&&r.weight!=="bolder"||(n+=.3*e.measureText("A").width),this._textWidths.length=0,this._lineWidths.length=0;let a=0,h=0,o=0,l=0,d=0;this._lines.forEach((G,K)=>{const M=e.measureText(G),Q=M.width/i,Z=Q+n;this._textWidths.push(Q),this._lineWidths.push(Z),a=Math.max(a,Z),l=Math.max(l,M.actualBoundingBoxAscent/i),d=Math.max(d,M.actualBoundingBoxDescent/i),K===0&&(h=M.actualBoundingBoxAscent/i),K===this._lines.length-1&&(o=M.actualBoundingBoxDescent/i)});const c=yt(this._parameters),m=Math.max(l,c.maxAscent),g=Math.max(d,c.maxDescent),f=h,p=this._parameters.definition.font.decoration==="underline"?g:o,R=a;this._metricsCached=new Lt(f,p,m,g,R)}return this._metricsCached}get _lineSpacing(){return(this._midLineHeight+this._linePadding)*this._parameters.definition.lineSpacingFactor}get _midLineHeight(){return this._metrics.midLineHeight}get _linePadding(){return this._midLineHeight*Rt}get _midLineAscent(){return this._metrics.maxLineAscent}get _renderedFontSize(){return this._toRenderUnit(this._fontSize)}get _fontSize(){return this._parameters.definition.size}get _renderedHaloSize(){return this._toRenderUnit(this._haloSize)}get _haloSize(){return this._parameters.haloSize}get _horizontalPadding(){return this._hasBackground?this._parameters.definition.background.padding[0]:0}get _verticalPadding(){return Math.max(this._hasBackground?this._parameters.definition.background.padding[1]:0,J)}get _hasBackground(){return!!this._parameters.backgroundStyle}get renderPixelRatio(){if(this._renderPixelRatio==null){const e=this._parameters.definition.pixelRatio;this._renderPixelRatio=Math.min(e,Math.min(this._maxSize[0]/this.displayWidth,this._maxSize[1]/this.displayHeight))}return this._renderPixelRatio}_getLineXOffset(e){switch(this._alignment){case E.Left:return this._horizontalPadding;case E.Center:return(this.displayWidth-this._lineWidths[e])/2;case E.Right:return this.displayWidth-this._horizontalPadding-this._lineWidths[e]}}render(e,i,s){e.save();const n=i/=this.renderPixelRatio,r=s/=this.renderPixelRatio,a=this._haloSize,h=this._firstLineYOffset+this._metrics.firstLineAscent;i+=a,s+=h;const o=this._haloSize>0;o&&this._renderHalo(e,n,r,a,h),this._parameters.setFontProperties(e,this._renderedFontSize);for(let l=0;l<this._lines.length;++l){const d=this._lines[l],c=this._getLineXOffset(l);o&&(e.globalCompositeOperation="destination-out",e.fillStyle="rgb(0, 0, 0)",this._fillText(e,d,i+c,s),this._renderLineDecoration(e,i+c,s,this._textWidths[l])),e.globalCompositeOperation="source-over",e.fillStyle=this._parameters.textStyle,this._fillText(e,d,i+this._getLineXOffset(l),s),this._renderLineDecoration(e,i+c,s,this._textWidths[l]),s+=this._lineSpacing}if(H.TEXT_SHOW_BASELINE){e.strokeStyle=de,e.setLineDash([2,2]),e.lineWidth=1;let l=r+h;for(let d=0;d<this._lines.length;++d)this._drawLine(e,[n,l],[n+this.displayWidth,l]),l+=this._lineSpacing}if(H.TEXT_SHOW_BORDER&&(e.strokeStyle=de,e.setLineDash([]),e.lineWidth=1,this._drawBox(e,[n,r],[this.displayWidth,this.displayHeight])),this._hasBackground){const l=this._parameters.definition.background.borderRadius*this.renderPixelRatio;this._roundedRect(e,n,r,l),e.globalCompositeOperation="destination-over",e.fillStyle=this._parameters.backgroundStyle,e.fill()}e.restore()}_renderLineDecoration(e,i,s,n,r=!1){if(this._parameters.definition.font.decoration==="none"||n===0)return;const a=1,h=Math.max(this._parameters.definition.size/16,a);switch(this._parameters.definition.font.decoration){case"underline":s+=2*h;break;case"line-through":s-=.33*this._midLineAscent}const o=r?this._haloSize:0;e.strokeStyle=r?this._parameters.haloStyle:this._parameters.textStyle,e.lineWidth=this._toRenderUnit(h+2*o),e.beginPath(),e.moveTo(this._toRenderUnit(i-o),this._toRenderUnit(s)),e.lineTo(this._toRenderUnit(i+n+o),this._toRenderUnit(s)),e.stroke()}_roundedRect(e,i,s,n){i=this._toRenderUnit(i),s=this._toRenderUnit(s);const r=this.renderedWidth,a=this.renderedHeight;n!==0?(n=Me(n,0,Math.floor(a/2)),e.beginPath(),e.moveTo(i,s+n),e.arcTo(i,s,i+n,s,n),e.lineTo(i+r-n,s),e.arcTo(i+r,s,i+r,s+n,n),e.lineTo(i+r,s+a-n),e.arcTo(i+r,s+a,i+r-n,s+a,n),e.lineTo(i+n,s+a),e.arcTo(i,s+a,i,s+a-n,n),e.closePath()):e.rect(i,s,r,a)}_renderHalo(e,i,s,n,r){const a=this.renderedWidth,h=this.renderedHeight,o=Y(ce,Math.max(a,F),Math.max(h,F)),l=o.getContext("2d");l.clearRect(0,0,a,h),this._parameters.setFontProperties(l,this._renderedFontSize),l.fillStyle=this._parameters.haloStyle,l.strokeStyle=this._parameters.haloStyle;const d=this._renderedHaloSize<3;l.lineJoin=d?"miter":"round",d?this._renderHaloEmulated(l,n,r):this._renderHaloNative(l,n,r);let c=r;for(let m=0;m<this._lines.length;++m){const g=this._getLineXOffset(m);this._renderLineDecoration(l,n+g,c,this._textWidths[m],!0),c+=this._lineSpacing}e.globalAlpha=this._parameters.definition.halo.color[3],e.drawImage(o,0,0,a,h,this._toRenderUnit(i),this._toRenderUnit(s),a,h),e.globalAlpha=1}_renderHaloEmulated(e,i,s){for(let n=0;n<this._lines.length;++n){const r=this._lines[n],a=this._getLineXOffset(n);for(const[h,o]of Oe)this._fillText(e,r,i+a+this._haloSize*h,s+this._haloSize*o);s+=this._lineSpacing}}_renderHaloNative(e,i,s){const n=2*this._haloSize;for(let r=0;r<this._lines.length;++r){const a=this._lines[r],h=this._getLineXOffset(r),o=5,l=.1;for(let d=0;d<o;d++){const c=1-(o-1)*l+d*l;e.lineWidth=this._toRenderUnit(c*n),this._strokeText(e,a,i+h,s)}s+=this._lineSpacing}}get _displayWidth(){return this._metrics.displayWidth}_toRenderUnit(e){return e*this.renderPixelRatio}_toRoundedRenderUnit(e){return Math.round(e*this.renderPixelRatio)}_fillText(e,i,s,n){e.fillText(i,this._toRenderUnit(s),this._toRenderUnit(n))}_strokeText(e,i,s,n){e.strokeText(i,this._toRenderUnit(s),this._toRenderUnit(n))}_drawLine(e,i,s){e.beginPath(),e.moveTo(this._toRoundedRenderUnit(i[0])+.5,this._toRoundedRenderUnit(i[1])+.5),e.lineTo(this._toRoundedRenderUnit(s[0])+.5,this._toRoundedRenderUnit(s[1])+.5),e.stroke()}_drawBox(e,i,s){const n=this._toRenderUnit(i[0]),r=this._toRenderUnit(i[1]),a=this._toRenderUnit(s[0]),h=this._toRenderUnit(s[1]),o=Math.floor(n)+.5,l=Math.ceil(n+a)-.5,d=Math.floor(r)+.5,c=Math.ceil(r+h)-.5;e.beginPath(),e.moveTo(o,d),e.lineTo(l,d),e.lineTo(l,c),e.lineTo(o,c),e.lineTo(o,d),e.stroke()}};const Oe=[];for(let e=0;e<360;e+=360/16)Oe.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)]);var E;(function(t){t[t.Left=0]="Left",t[t.Center=1]="Center",t[t.Right=2]="Right"})(E||(E={}));const ce={canvas:null},Rt=.2,F=512,de="rgb(255, 0, 255, 0.5)";let Lt=class{get firstLineHeight(){return this.firstLineAscent+this.maxLineDescent}get midLineHeight(){return this.maxLineAscent+this.maxLineDescent}get lastLineHeight(){return this.maxLineAscent+this.lastLineDescent}constructor(e,i,s,n,r){this.firstLineAscent=e,this.lastLineDescent=i,this.maxLineAscent=s,this.maxLineDescent=n,this.displayWidth=r}};const yi=Object.freeze({left:0,center:.5,right:1}),Ii=Object.freeze({"bottom-left":A(0,0),bottom:A(.5,0),"bottom-right":A(1,0),left:A(0,.5),center:A(.5,.5),right:A(1,.5),"top-left":A(0,1),top:A(.5,1),"top-right":A(1,1)});function Ti(t){switch(t){case"left":return E.Left;case"right":return E.Right;default:return E.Center}}function Si(t,e){switch(e){case"bottom":return t==="left"?"bottom-left":t==="right"?"bottom-right":"bottom";case"center":return t;case"top":return t==="left"?"top-left":t==="right"?"top-right":"top"}}function Ri(t){return t==="middle"?"center":t}function Li(t,e){switch(t){case"top":return ie(e,0,J);case"bottom":return ie(e,0,-J);default:return Ve(e,We)}}class xt{constructor(e,i,s){this._elementSize=i,this._buffer=ve.createVertex(e,Ce.STATIC_DRAW),this.resize(s)}destroy(){this._buffer.dispose()}get elementSize(){return this._elementSize}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,i,s,n=0){const r=new Uint8Array(this.array,e*this.elementSize,(i-e)*this.elementSize);new Uint8Array(s.array,n*this.elementSize).set(r)}transferAll(){this._buffer.setData(this._array)}transferRange(e,i){const s=e*this._elementSize,n=i*this._elementSize;this._buffer.setSubData(new Uint8Array(this._array),s,s,n)}resize(e){const i=e*this._elementSize,s=new ArrayBuffer(i);this._array&&(e>=this._capacity?new Uint8Array(s).set(new Uint8Array(this._array)):new Uint8Array(s).set(new Uint8Array(this._array).subarray(0,e*this._elementSize))),this._array=s,this._buffer.setSize(i),this._capacity=e}}class bt{constructor(e){this.modelOriginHi=e.getField(_.INSTANCEMODELORIGINHI,ae),this.modelOriginLo=e.getField(_.INSTANCEMODELORIGINLO,ae),this.model=e.getField(_.INSTANCEMODEL,$),this.modelNormal=e.getField(_.INSTANCEMODELNORMAL,$),this.featureAttribute=e.getField(_.INSTANCEFEATUREATTRIBUTE,Ee),this.color=e.getField(_.INSTANCECOLOR,U),this.objectAndLayerIdColor=e.getField(_.INSTANCEOBJECTANDLAYERIDCOLOR,U)}}let At=class{constructor(e,i){this._rctx=e,this._instanceBufferLayout=i,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const e=this._headIndex,i=this._tailIndex;return e>=i?e-i:e+this._capacity-i}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){var e;return((e=this._buffer)==null?void 0:e.usedMemory)??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){y(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){y(this._updating,"not updating"),this.size<De*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){y(this._updating,"not updating"),this.isFull&&this._grow();const e=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=e,this._captureFirstIndex=!1),this._incrementHead(),y(this._headIndex!==this._tailIndex,"invalid pointers"),e}freeTail(){y(this._updating,"not updating"),y(this.size>0,"invalid size");const e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){const e=Math.max(z,Math.floor(this._capacity*Te));this._resize(e)}_shrink(){const e=Math.max(z,Math.floor(this._capacity*we));this._resize(e)}_resize(e){if(y(this._updating,"not updating"),e===this._capacity)return;const i=new xt(this._rctx,this._instanceBufferLayout.stride,e);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const s=this.size,n=this._compactInstances(i);y(n===s,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=n,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=i,this._view=new bt(this._instanceBufferLayout.createView(this._buffer.array))}_compactInstances(e){const i=this._headIndex,s=this._tailIndex;return s<i?(this._buffer.copyRange(s,i,e),i-s):s>i?(this._buffer.copyRange(s,this._capacity,e),i>0&&this._buffer.copyRange(0,i,e,this._capacity-s),i+(this._capacity-s)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,i){e<i?this._buffer.transferRange(e,i):e>i&&(i>0&&this._buffer.transferRange(0,i),this._buffer.transferRange(e,this._capacity))}};const z=64;var u;function Et(t){let e=Ae().mat4f64(_.LOCALTRANSFORM).mat4f64(_.GLOBALTRANSFORM).vec4f64(_.BOUNDINGSPHERE).vec3f64(_.MODELORIGIN).mat3f(_.INSTANCEMODEL).mat3f(_.INSTANCEMODELNORMAL).vec2f(_.MODELSCALEFACTORS);return t.includes(_.FEATUREATTRIBUTE)&&(e=e.vec4f(_.FEATUREATTRIBUTE)),t.includes(_.COLOR)&&(e=e.vec4u8(_.COLOR)),t.includes(_.OBJECTANDLAYERIDCOLOR)&&(e=e.vec4u8(_.OBJECTANDLAYERIDCOLOR)),e=e.u8(_.STATE).u8(_.LODLEVEL),e}(function(t){t[t.ALLOCATED=1]="ALLOCATED",t[t.DEFAULT_ACTIVE=2]="DEFAULT_ACTIVE",t[t.VISIBLE=4]="VISIBLE",t[t.HIGHLIGHT=8]="HIGHLIGHT",t[t.HIGHLIGHT_ACTIVE=16]="HIGHLIGHT_ACTIVE",t[t.REMOVE=32]="REMOVE",t[t.TRANSFORM_CHANGED=64]="TRANSFORM_CHANGED",t[t.ACTIVE=18]="ACTIVE"})(u||(u={}));class _e{constructor(e){this.localTransform=e.getField(_.LOCALTRANSFORM,oe),this.globalTransform=e.getField(_.GLOBALTRANSFORM,oe),this.modelOrigin=e.getField(_.MODELORIGIN,it),this.model=e.getField(_.INSTANCEMODEL,$),this.modelNormal=e.getField(_.INSTANCEMODELNORMAL,$),this.modelScaleFactors=e.getField(_.MODELSCALEFACTORS,st),this.boundingSphere=e.getField(_.BOUNDINGSPHERE,nt),this.featureAttribute=e.getField(_.FEATUREATTRIBUTE,Ee),this.color=e.getField(_.COLOR,U),this.objectAndLayerIdColor=e.getField(_.OBJECTANDLAYERIDCOLOR,U),this.state=e.getField(_.STATE,he),this.lodLevel=e.getField(_.LODLEVEL,he)}}let O=class extends Fe{constructor(t,e){super(t),this.events=new Ne,this._capacity=0,this._size=0,this._next=0,this._highlightGroupMap=new Map,this._highlightGroupMapPrev=new Map,this._layout=Et(e),this._capacity=z,this._buffer=this._layout.createBuffer(this._capacity),this._view=new _e(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const t=this._findSlot();return this._view.state.set(t,u.ALLOCATED),this._size++,this.events.emit("instances-changed"),t}removeInstance(t){const e=this._view.state;y(t>=0&&t<this._capacity&&!!(e.get(t)&u.ALLOCATED),"invalid instance handle"),this._getStateFlag(t,u.ACTIVE)?this._setStateFlags(t,u.REMOVE):this.freeInstance(t),this.events.emit("instances-changed")}freeInstance(t){const e=this._view.state;y(t>=0&&t<this._capacity&&!!(e.get(t)&u.ALLOCATED),"invalid instance handle"),e.set(t,0),this._size--}setLocalTransform(t,e,i=!0){this._view.localTransform.setMat(t,e),i&&this.updateModelTransform(t)}getLocalTransform(t,e){this._view.localTransform.getMat(t,e)}setGlobalTransform(t,e,i=!0){this._view.globalTransform.setMat(t,e),i&&this.updateModelTransform(t)}getGlobalTransform(t,e){this._view.globalTransform.getMat(t,e)}updateModelTransform(t){const e=this._view,i=I,s=L;e.localTransform.getMat(t,ue),e.globalTransform.getMat(t,W);const n=He(W,W,ue);je(i,n[12],n[13],n[14]),e.modelOrigin.setVec(t,i),Qe(s,n),e.model.setMat(t,s);const r=rt(I,n);r.sort(),e.modelScaleFactors.set(t,0,r[1]),e.modelScaleFactors.set(t,1,r[2]),Ze(s,s),et(s,s),e.modelNormal.setMat(t,s),this._setStateFlags(t,u.TRANSFORM_CHANGED),this.events.emit("instance-transform-changed",{index:t})}getModelTransform(t,e){const i=this._view;i.model.getMat(t,L),i.modelOrigin.getVec(t,I),e[0]=L[0],e[1]=L[1],e[2]=L[2],e[3]=0,e[4]=L[3],e[5]=L[4],e[6]=L[5],e[7]=0,e[8]=L[6],e[9]=L[7],e[10]=L[8],e[11]=0,e[12]=I[0],e[13]=I[1],e[14]=I[2],e[15]=1}applyShaderTransformation(t,e){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedModelTransform(t,e){return this.getModelTransform(t,e),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e),e}getCombinedLocalTransform(t,e){this._view.localTransform.getMat(t,e),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedMaxScaleFactor(t){let e=this._view.modelScaleFactors.get(t,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(I,this,t),e*=Math.max(I[0],I[1],I[2])),e}getCombinedMedianScaleFactor(t){let e=this._view.modelScaleFactors.get(t,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(I,this,t),e*=vt(I[0],I[1],I[2])),e}getModel(t,e){this._view.model.getMat(t,e)}setFeatureAttribute(t,e){this._view.featureAttribute.setVec(t,e)}getFeatureAttribute(t,e){this._view.featureAttribute.getVec(t,e)}setColor(t,e){this._view.color.setVec(t,e)}setObjectAndLayerIdColor(t,e){this._view.objectAndLayerIdColor.setVec(t,e)}setVisible(t,e){e!==this.getVisible(t)&&(this._setStateFlag(t,u.VISIBLE,e),this.events.emit("instance-visibility-changed",{index:t}))}getVisible(t){return this._getStateFlag(t,u.VISIBLE)}setHighlight(t,e,i){let s=this._highlightGroupMap.get(t);e?(s||(s=new Set,this._highlightGroupMap.set(t,s)),s.add(i)&&(this._setStateFlag(t,u.HIGHLIGHT,!0),this.events.emit("instance-highlight-changed"))):s!=null&&s.delete(i)&&(s.size===0&&(this._highlightGroupMap.delete(t),this._setStateFlag(t,u.HIGHLIGHT,!1)),this.events.emit("instance-highlight-changed"))}getHighlight(t){return this._getStateFlag(t,u.HIGHLIGHT)}foreachHighlightGroupPrev(t,e){var i;(i=this._highlightGroupMapPrev.get(t))==null||i.forEach(e),this._highlightGroupMapPrev.delete(t)}foreachHighlightGroup(t,e){const i=this._highlightGroupMap.get(t);i==null||i.forEach(e),i?this._highlightGroupMapPrev.set(t,new Set(i)):this._highlightGroupMapPrev.delete(t)}getState(t){return this._view.state.get(t)}getLodLevel(t){return this._view.lodLevel.get(t)}countFlags(t){let e=0;for(let i=0;i<this._capacity;++i)this.getState(i)&t&&++e;return e}_setStateFlags(t,e){const i=this._view.state;e=i.get(t)|e,i.set(t,e)}_clearStateFlags(t,e){const i=this._view.state;e=i.get(t)&~e,i.set(t,e)}_setStateFlag(t,e,i){i?this._setStateFlags(t,e):this._clearStateFlags(t,e)}_getStateFlag(t,e){return!!(this._view.state.get(t)&e)}_grow(){this._capacity=Math.max(z,Math.floor(this._capacity*Te)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new _e(this._buffer)}_findSlot(){const t=this._view.state;let e=this._next;for(;t.get(e)&u.ALLOCATED;)e=e+1===this._capacity?0:e+1;return this._next=e+1===this._capacity?0:e+1,e}};function vt(t,e,i){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),i))}T([S({constructOnly:!0})],O.prototype,"shaderTransformation",void 0),T([S()],O.prototype,"_size",void 0),T([S({readOnly:!0})],O.prototype,"size",null),O=T([Se("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],O);const I=C(),L=tt(),ue=B(),W=B();class Ct extends q{constructor(e,i){super(s=>ot(this._instanceData.view.boundingSphere.getVec(s,this._tmpSphere)),{maximumDepth:25}),this._instanceData=e,this._boundingSphere=i,this._tmpSphere=ht(),this._tmpMat4=B()}addInstance(e){const i=this._instanceData.view.boundingSphere,s=this._instanceData.getCombinedModelTransform(e,this._tmpMat4);j(lt(this._tmpSphere),this._boundingSphere.center,s),this._tmpSphere[3]=this._boundingSphere.radius*at(s),i.setVec(e,this._tmpSphere),this.add([e])}removeInstance(e){this.remove([e])}}class Ot{constructor(e,i){this._worldSpaceRadius=e,this._minScreenSpaceRadii=i}selectLevel(e,i,s){const n=s.computeScreenPixelSizeAt(e),r=this._worldSpaceRadius*i/n;let a=0;for(let h=1;h<this._minScreenSpaceRadii.length;++h)r>=this._minScreenSpaceRadii[h]&&(a=h);return a}}class Mt extends ct{constructor(e,i,s,n,r,a){super(e,i),this.layerUid=e,this.graphicUid=i,this.geometryId=s,this.triangleNr=n,this.baseBoundingSphere=r,this.numLodLevels=a}}function Dt(t,e,i,s=null){const n=t.createBufferWriter(),r=n.vertexBufferLayout,a=n.elementCount(e),h=r.createBuffer(a);return n.write(null,null,e,s,h,0),{material:t,vertexBufferLayout:r,buffer:h.buffer,elementCount:a,boundingInfo:i}}class wt{constructor(e,i){const s=e.renderContext.rctx,n=i.geometry;let r=null;r=n instanceof se?Dt(n.material,n.attributes,n.boundingInfo):n;const a=r.material;this._materials=e.materials,a.setParameters({instancedDoublePrecision:!0}),this.geometry=n,this.material=a,this.glMaterials=new Ye(a,this._materials),this.vertexBufferLayout=r.vertexBufferLayout,this.vbo=ve.createVertex(s,Ce.STATIC_DRAW,r.buffer),this.vao=new Je(s,k,new Map([["geometry",be(r.vertexBufferLayout)]]),new Map([["geometry",this.vbo]])),this.vertexCount=r.elementCount}destroy(){this.glMaterials.dispose(),this.vbo.dispose(),this.vao.dispose()}get boundingInfo(){return this.geometry.boundingInfo}get triangleCount(){return this.vertexCount/3}intersect(e,i,s,n,r,a,h,o){if(!(this.geometry instanceof se))return;const l=this.geometry.id;this.material.intersect(this.geometry,e.transform.transform,e,s,n,(d,c,m,g,f)=>{if(d>=0){if(i!=null&&!i(e.rayBegin,e.rayEnd,d))return;const p=new Mt(a.layerUid,a.graphicUid(r),l,m,h,o);if((e.results.min.drapedLayerOrder==null||f>=e.results.min.drapedLayerOrder)&&(e.results.min.dist==null||d<e.results.min.dist)&&e.results.min.set(N.LOD,p,d,c,e.transform.transform,f),e.options.store!==re.MIN&&(e.results.max.drapedLayerOrder==null||f>=e.results.max.drapedLayerOrder)&&(e.results.max.dist==null||d>e.results.max.dist)&&e.results.max.set(N.LOD,p,d,c,e.transform.transform,f),e.options.store===re.ALL){const R=dt(e.results.min.ray);R.set(N.LOD,p,d,c,e.transform.transform,f),e.results.all.push(R)}}})}}class X{static async create(e,i,s){const n=await Promise.allSettled(i.components.map(a=>e.controller.schedule(()=>new wt(e,a),s))),r=n.map(a=>a.status==="fulfilled"?a.value:null).filter(Re);if(Le(s)||r.length!==n.length){r.forEach(a=>a.destroy()),xe(s);for(const a of n)if(a.status==="rejected")throw a.reason}return new X(i.minScreenSpaceRadius,r)}constructor(e,i){this.minScreenSpaceRadius=e,this.components=i}destroy(){this.components.forEach(e=>e.destroy())}intersect(e,i,s,n,r,a,h){this.components.forEach(o=>o.intersect(e,i,s,n,r,a,this.boundingSphere,h))}get boundingBox(){if(this._boundingBox==null){const e=$e();this.components.forEach(i=>{i.boundingInfo!=null&&(ee(e,i.boundingInfo.bbMin),ee(e,i.boundingInfo.bbMax))}),this._boundingBox=e}return this._boundingBox}get boundingSphere(){if(this._boundingSphere==null){const e=this.boundingBox,i=C();Ue(e,i),this._boundingSphere={center:i,radius:.5*ze(e)}}return this._boundingSphere}get triangleCount(){return this.components.reduce((e,i)=>e+i.triangleCount,0)}}const Ft=t=>{const e=t.baseBoundingSphere.radius,i=t.levels.map(s=>s.minScreenSpaceRadius);return new Ot(e,i)};let x=class extends Xe{constructor(t,e){super(t),this.type=N.LOD,this.isGround=!1,this._levels=[],this._defaultRenderInstanceData=new Array,this._highlightRenderInstanceDataMap=new Map,this._instanceIndex=0,this._cycleStartIndex=0,this._slicePlane=!1,this._camera=new Ke,this._updateCyclesWithStaticCamera=-1,this._needFullCycle=!1,this.produces=new Map([[P.OPAQUE_MATERIAL,i=>this._produces(i)],[P.TRANSPARENT_MATERIAL,i=>!!this._hasTransparentLevels()&&this._produces(i)]]),this._instanceData=new O({shaderTransformation:t.shaderTransformation},t.optionalFields),this.addHandles(e.registerTask(ft.LOD_RENDERER,this))}initialize(){this._instanceBufferLayout=Ht(this.optionalFields),this._glInstanceBufferLayout=be(this._instanceBufferLayout,1),this.addHandles([this._instanceData.events.on("instances-changed",()=>this._requestUpdateCycle()),this._instanceData.events.on("instance-transform-changed",({index:t})=>{this._requestUpdateCycle(),this.metadata.notifyGraphicGeometryChanged(t)}),this._instanceData.events.on("instance-visibility-changed",({index:t})=>{this._requestUpdateCycle(!0),this.metadata.notifyGraphicVisibilityChanged(t)}),this._instanceData.events.on("instance-highlight-changed",()=>this._requestUpdateCycle(!0))])}get _allRenderInstanceData(){const t=[this._defaultRenderInstanceData];for(const e of this._highlightRenderInstanceDataMap)t.push(e[1]);return t}get _enableLevelSelection(){return this.symbol.levels.length>1}get levels(){return this._levels}get baseBoundingBox(){return this._levels[this._levels.length-1].boundingBox}get baseBoundingSphere(){return this._levels[this._levels.length-1].boundingSphere}get baseMaterial(){return this._levels[this._levels.length-1].components[0].material}get slicePlaneEnabled(){return this._slicePlane}set slicePlaneEnabled(t){this._slicePlane=t}get layerUid(){return this.metadata.layerUid}get instanceData(){return this._instanceData}get hasEmissions(){return this.baseMaterial.hasEmissions}get usedMemory(){return this._allRenderInstanceData.reduce((t,e)=>e.reduce((i,s)=>i+s.usedMemory,t),0)}get renderStats(){const t=this._instanceData.size,e=[];return this._levels.forEach((i,s)=>{const n=this._allRenderInstanceData[0][s].size+this._allRenderInstanceData[1][s].size,r=i.triangleCount;e.push({renderedInstances:n,renderedTriangles:n*r,trianglesPerInstance:r})}),{totalInstances:t,renderedInstances:e.reduce((i,s)=>i+s.renderedInstances,0),renderedTriangles:e.reduce((i,s)=>i+s.renderedTriangles,0),levels:e}}_createRenderInstanceDataArray(t=[]){const{rctx:e}=this._context.renderContext;return this.symbol.levels.map(i=>{t.push(new At(e,this._instanceBufferLayout))}),t}async initializeRenderContext(t,e){this._context=t,this._createRenderInstanceDataArray(this._defaultRenderInstanceData);const i=await Promise.allSettled(this.symbol.levels.map(n=>X.create(t,n,e))),s=i.map(n=>n.status==="fulfilled"?n.value:null).filter(Re);if(Le(e)||s.length!==i.length){s.forEach(n=>n.destroy()),xe(e);for(const n of i)if(n.status==="rejected")throw n.reason}this._levels=s,this._levelSelector=Ft(this)}uninitializeRenderContext(){this._invalidateOctree(),this._levels.forEach(t=>t.destroy()),this._defaultRenderInstanceData.forEach(t=>t.destroy()),this._highlightRenderInstanceDataMap.forEach(t=>t.forEach(e=>e.destroy()))}_hasTransparentLevels(){return this._levels.some(t=>t.components.some(e=>{const i=e.material.produces.get(P.TRANSPARENT_MATERIAL);return i==null?void 0:i(v.Color)}))}hasHighlights(){return Be(this._highlightRenderInstanceDataMap,t=>t.some(e=>e.size>0))}_produces(t){return t!==v.Highlight&&t!==v.ShadowHighlight||this.hasHighlights()}prepareRender(t){if(!H.LOD_INSTANCE_RENDERER_DISABLE_UPDATES){if(this._enableLevelSelection){const e=t.bind.contentCamera.equals(this._camera);this._camera.copyFrom(t.bind.contentCamera),e||this._requestUpdateCycle()}this._needFullCycle&&(this.runTask(gt),this._needFullCycle=!1)}}acquireTechniques(t){if(!this.baseMaterial.visible||!this.baseMaterial.isVisibleForOutput(t.output))return null;const e=this._getInstanceDatas(t);if(!e)return null;const i=new Array,s=this.levels;return e.forEach(n=>s.forEach(({components:r},a)=>r.forEach(h=>i.push(this._beginComponent(t,n[a],h))))),i}render(t,e){const i=this._getInstanceDatas(t);if(!i||e==null)return;let s=0;t.rctx.bindVAO();const n=this.levels;i.forEach(r=>n.forEach(({components:a},h)=>a.forEach(o=>this._renderComponent(t,e[s++],r[h],o,h))))}_getInstanceDatas(t){const{output:e,bind:i}=t,s=e===v.Highlight,n=!s&&e!==v.ShadowHighlight,r=e!==v.ShadowExcludeHighlight;if(n)return r?this._allRenderInstanceData:[this._defaultRenderInstanceData];if(r){if(s){const{highlightGroupName:h}=i;if(!h)return null;const o=this._highlightRenderInstanceDataMap.get(h);return o?[o]:null}const a=[];for(const h of this._highlightRenderInstanceDataMap)a.push(h[1]);return a}return null}intersect(t,e,i,s){if(!this.baseMaterial.visible||this._octree==null)return;const n=C();V(n,s,i);const r=a=>{this._instanceData.getCombinedModelTransform(a,me),t.transform.set(me),j(pe,i,t.transform.inverse),j(ye,s,t.transform.inverse);const h=this._instanceData.getState(a),o=this._instanceData.getLodLevel(a),l=this._levels.length;y(!!(h&u.ACTIVE),"invalid instance state"),y(o>=0&&o<l,"invaid lod level"),this._levels[o].intersect(t,e,pe,ye,a,this.metadata,l)};this.baseMaterial.parameters.verticalOffset?this._octree.forEach(r):this._octree.forEachAlongRay(i,n,r)}notifyShaderTransformationChanged(){this._invalidateOctree(),this._requestUpdateCycle()}get _octree(){var t;if(this._octreeCached==null){const e=this._instanceData,i=(t=e.view)==null?void 0:t.state;if(!i)return null;this._octreeCached=new Ct(e,this.baseBoundingSphere);for(let s=0;s<e.capacity;++s)i.get(s)&u.ACTIVE&&this._octreeCached.addInstance(s)}return this._octreeCached}_invalidateOctree(){this._octreeCached=Ge(this._octreeCached)}queryDepthRange(t){if(this._octree==null)return{near:1/0,far:-1/0};const e=t.viewForward,i=this._octree.findClosest(e,q.DepthOrder.FRONT_TO_BACK,t.frustum),s=this._octree.findClosest(e,q.DepthOrder.BACK_TO_FRONT,t.frustum);if(i==null||s==null)return{near:1/0,far:-1/0};const n=t.eye,r=this._instanceData.view;r.boundingSphere.getVec(i,b),V(b,b,n);const a=ne(b,e)-b[3];r.boundingSphere.getVec(s,b),V(b,b,n);const h=ne(b,e)+b[3];return{near:Math.max(t.near,a),far:Math.min(t.far,h)}}_requestUpdateCycle(t=!1){this._updateCyclesWithStaticCamera=-1,this._cycleStartIndex=this._instanceIndex,t&&(this._needFullCycle=!0,this._context.requestRender())}_startUpdateCycle(){this._updateCyclesWithStaticCamera++,this._allRenderInstanceData.forEach(t=>t.forEach(e=>e.startUpdateCycle()))}get running(){return this._instanceData.size>0&&this._updateCyclesWithStaticCamera<1}runTask(t){const{_enableLevelSelection:e,_camera:i,_levelSelector:s}=this;this._allRenderInstanceData.forEach(d=>d.forEach(c=>c.beginUpdate()));const n=this._instanceData,r=n.view;let a=n.size;const h=n.capacity;let o=this._instanceIndex;const l=Math.ceil(h/500);for(let d=0;d<a&&!t.done;++d){o===this._cycleStartIndex&&this._startUpdateCycle();const c=r.state.get(o);let m=0;if(!(c&u.ALLOCATED)){o=o+1===h?0:o+1,a++;continue}const g=r.lodLevel.get(o);if(c&u.DEFAULT_ACTIVE&&this._defaultRenderInstanceData[g].freeTail(),c&u.HIGHLIGHT_ACTIVE&&n.foreachHighlightGroupPrev(o,f=>{const p=this._highlightRenderInstanceDataMap.get(f);if(!p)throw new te("Internal error in lodRenderer");p[g].freeTail()}),c&u.REMOVE)n.freeInstance(o);else if(c&u.VISIBLE){let f=0;e&&(r.modelOrigin.getVec(o,ge),f=s.selectLevel(ge,n.getCombinedMedianScaleFactor(o),i)),m=c&~(u.ACTIVE|u.TRANSFORM_CHANGED),f>=0&&(c&u.HIGHLIGHT?(n.foreachHighlightGroup(o,p=>{let R=this._highlightRenderInstanceDataMap.get(p);if(R||(R=this._createRenderInstanceDataArray(),R.forEach(G=>G.beginUpdate()),this._highlightRenderInstanceDataMap.set(p,R)),f>=R.length)throw new te(`LodRenderer internal error - missing lodLevel ${f}`);fe(R[f],r,o)}),m|=u.HIGHLIGHT_ACTIVE):(fe(this._defaultRenderInstanceData[f],r,o),m|=u.DEFAULT_ACTIVE)),r.state.set(o,m),r.lodLevel.set(o,f)}else m=c&~(u.ACTIVE|u.TRANSFORM_CHANGED),r.state.set(o,m);if(this._octreeCached!=null){const f=!!(c&u.ACTIVE),p=!!(m&u.ACTIVE);!f&&p?this._octreeCached.addInstance(o):f&&!p?this._octreeCached.removeInstance(o):f&&p&&c&u.TRANSFORM_CHANGED&&(this._octreeCached.removeInstance(o),this._octreeCached.addInstance(o))}o=o+1===h?0:o+1,o%l==0&&t.madeProgress()}this._instanceIndex=o,this._allRenderInstanceData.forEach(d=>d.forEach(c=>c.endUpdate())),this._context.requestRender()}_beginComponent(t,e,i){if(e.size===0)return null;const s=i.glMaterials.load(t.rctx,t.bind.slot,t.output);return s==null?void 0:s.beginSlot(t.bind)}_renderComponent(t,e,i,s,n){if(!e)return;const{bind:r,rctx:a}=t;a.runAppleAmdDriverHelper();const h=a.bindTechnique(e,r,s.material.parameters,$t);a.bindVAO(s.vao),e.ensureAttributeLocations(s.vao),H.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL&&t.output===v.Color&&(h.setUniform4fv("externalColor",Ie[Math.min(n,Ie.length-1)]),h.setUniform1i("colorMixMode",ke.replace));const o=i.capacity,l=i.headIndex,d=i.tailIndex,c=i.firstIndex,m=this._glInstanceBufferLayout,g=(f,p)=>{mt(a,k,i.buffer,m,f),a.drawArraysInstanced(e.primitiveType,0,s.vertexCount,p-f),pt(a,k,i.buffer,m)};s.material.parameters.transparent&&c!=null?l>d?(y(c>=d&&c<=l,"invalid firstIndex"),g(c,l),g(d,c)):l<d&&(c<=l?(y(c>=0&&c<=l,"invalid firstIndex"),g(c,l),g(d,o),g(0,c)):(y(c>=d&&c<=o,"invalid firstIndex"),g(c,o),g(0,l),g(d,c))):l>d?g(d,l):l<d&&(g(0,l),g(d,o)),a.bindVAO(null)}};function fe(t,e,i){const s=t.allocateHead();Nt(e,i,t.view,s)}function Nt(t,e,i,s){_t(t.modelOrigin,e,i.modelOriginHi,i.modelOriginLo,s),i.model.copyFrom(s,t.model,e),i.modelNormal.copyFrom(s,t.modelNormal,e),t.color&&i.color&&i.color.copyFrom(s,t.color,e),t.objectAndLayerIdColor&&i.objectAndLayerIdColor&&i.objectAndLayerIdColor.copyFrom(s,t.objectAndLayerIdColor,e),t.featureAttribute&&i.featureAttribute&&i.featureAttribute.copyFrom(s,t.featureAttribute,e)}function Ht(t){let e=Ae().vec3f(_.INSTANCEMODELORIGINHI).vec3f(_.INSTANCEMODELORIGINLO).mat3f(_.INSTANCEMODEL).mat3f(_.INSTANCEMODELNORMAL);return t!=null&&t.includes("featureAttribute")&&(e=e.vec4f(_.INSTANCEFEATUREATTRIBUTE)),t!=null&&t.includes("color")&&(e=e.vec4u8(_.INSTANCECOLOR)),t!=null&&t.includes("objectAndLayerIdColor")&&(e=e.vec4u8(_.INSTANCEOBJECTANDLAYERIDCOLOR)),e}T([S({constructOnly:!0})],x.prototype,"symbol",void 0),T([S({constructOnly:!0})],x.prototype,"optionalFields",void 0),T([S({constructOnly:!0})],x.prototype,"metadata",void 0),T([S({constructOnly:!0})],x.prototype,"shaderTransformation",void 0),T([S()],x.prototype,"_instanceData",void 0),T([S()],x.prototype,"_cycleStartIndex",void 0),T([S({readOnly:!0})],x.prototype,"_enableLevelSelection",null),T([S()],x.prototype,"_updateCyclesWithStaticCamera",void 0),T([S({readOnly:!0})],x.prototype,"running",null),x=T([Se("esri.views.3d.webgl-engine.lib.lodRendering.LodRenderer")],x);const ge=C(),b=qe(),me=B(),pe=C(),ye=C(),Ie=[D(1,0,1,1),D(0,0,1,1),D(0,1,0,1),D(1,1,0,1),D(1,0,0,1)],$t=new ut;export{Y as a,yt as e,Ti as f,Li as h,yi as i,Si as m,x as q,gi as r,Ii as s,ui as t,Ri as u};
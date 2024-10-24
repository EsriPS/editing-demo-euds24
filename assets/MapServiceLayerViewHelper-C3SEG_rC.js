const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/visualVariableUtils-dx28E4EQ.js","assets/index-C1aGfQcb.js","assets/index-qkyhuh7d.css","assets/lengthUtils-CFwdZ3dz.js","assets/sizeVariableUtils-Cmcuvw-4.js"])))=>i.map(i=>d[i]);
import{c2 as K,f5 as X,cv as J,F as n,G as p,b7 as Y,b9 as ee,Z as Q,cu as z,b8 as te,K as _,ay as q,dd as re,b6 as B,W as ie,gJ as se,aR as oe,L as ae,fh as ne,c8 as le,aO as T,br as pe,cw as A,c9 as ue,bN as L,aE as ye,bH as ce,cx as he,b3 as de,aF as M,ic as fe,ct as me}from"./index-C1aGfQcb.js";import{H as ge}from"./languageUtils-DfhLIq1n.js";import{i as we,o as be}from"./scaleUtils-D2VbidBA.js";import{n as G}from"./floorFilterUtils-DZ5C6FQv.js";import{o as H}from"./drapedUtils-BnpEPkkO.js";import{R as ve}from"./normalizeUtils-Bg1OALXh.js";import{f as xe,s as $e,i as Fe}from"./utils-DGPHbhMN.js";import{n as Se}from"./sublayerUtils-C2scBnIk.js";import{p as Oe}from"./TimeExtent-DGiXUfis.js";import{s as U}from"./highlightUtils-Ch3EC-YF.js";import{n as Ee,p as je}from"./popupUtils-3iX6uIxV.js";function Re(t,e){const{dpi:i,gdbVersion:o,geometry:r,geometryPrecision:a,height:s,historicMoment:y,layerOption:c,mapExtent:l,maxAllowableOffset:u,returnFieldName:h,returnGeometry:m,returnUnformattedValues:x,returnZ:$,spatialReference:O,timeExtent:f,tolerance:S,width:w}=t.toJSON(),{dynamicLayers:g,layerDefs:b,layerIds:R}=Ie(t),I=(e==null?void 0:e.geometry)!=null?e.geometry:null,v={historicMoment:y,geometryPrecision:a,maxAllowableOffset:u,returnFieldName:h,returnGeometry:m,returnUnformattedValues:x,returnZ:$,tolerance:S},E=(I==null?void 0:I.toJSON())||r;v.imageDisplay=`${w},${s},${i}`,o&&(v.gdbVersion=o),E&&(delete E.spatialReference,v.geometry=JSON.stringify(E),v.geometryType=K(E));const V=O??(E==null?void 0:E.spatialReference)??(l==null?void 0:l.spatialReference);if(V&&(v.sr=X(V)),v.time=f?[f.start,f.end].join(","):null,l){const{xmin:k,ymin:Z,xmax:W,ymax:C}=l;v.mapExtent=`${k},${Z},${W},${C}`}return b&&(v.layerDefs=b),g&&!b&&(v.dynamicLayers=g),v.layers=c==="popup"?"visible":c,R&&!g&&(v.layers+=`:${R.join(",")}`),v}function Ie(t){var $,O;const{mapExtent:e,floors:i,width:o,sublayers:r,layerIds:a,layerOption:s,gdbVersion:y}=t,c=(O=($=r==null?void 0:r.find(f=>f.layer!=null))==null?void 0:$.layer)==null?void 0:O.serviceSublayers,l=s==="popup",u={},h=we({extent:e,width:o,spatialReference:e==null?void 0:e.spatialReference}),m=[],x=f=>{const S=h===0,w=f.minScale===0||h<=f.minScale,g=f.maxScale===0||h>=f.maxScale;if(f.visible&&(S||w&&g))if(f.sublayers)f.sublayers.forEach(x);else{if((a==null?void 0:a.includes(f.id))===!1||l&&(!f.popupTemplate||!f.popupEnabled))return;m.unshift(f)}};if(r==null||r.forEach(x),r&&!m.length)u.layerIds=[];else{const f=Se(m,c,y),S=m.map(w=>{const g=G(i,w);return w.toExportImageJSON(g)});if(f)u.dynamicLayers=JSON.stringify(S);else{if(r){let g=m.map(({id:b})=>b);a&&(g=g.filter(b=>a.includes(b))),u.layerIds=g}else a!=null&&a.length&&(u.layerIds=a);const w=Ne(i,m);if(w!=null&&w.length){const g={};for(const b of w)b.definitionExpression&&(g[b.id]=b.definitionExpression);Object.keys(g).length&&(u.layerDefs=JSON.stringify(g))}}}return u}function Ne(t,e){const i=!!(t!=null&&t.length),o=e.filter(r=>r.definitionExpression!=null||i&&r.floorInfo!=null);return o.length?o.map(r=>{const a=G(t,r),s=J(a,r.definitionExpression);return{id:r.id,definitionExpression:s??void 0}}):null}var P;let d=P=class extends q{static from(t){return re(P,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};n([p({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),n([p()],d.prototype,"floors",void 0),n([p({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),n([p({types:Y,json:{read:ee,write:!0}})],d.prototype,"geometry",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"height",void 0),n([p({type:Date})],d.prototype,"historicMoment",void 0),n([Q("historicMoment")],d.prototype,"writeHistoricMoment",null),n([p({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),n([p({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),n([p({type:z,json:{write:!0}})],d.prototype,"mapExtent",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),n([p({type:te,json:{write:!0}})],d.prototype,"spatialReference",void 0),n([p()],d.prototype,"sublayers",void 0),n([p({type:Oe,json:{write:!0}})],d.prototype,"timeExtent",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=P=n([_("esri.rest.support.IdentifyParameters")],d);const D=d;let F=class extends q{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return B.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:i,geometry:o}=t;i&&(e.attributes={...i}),o!=null&&(e.geometry=o.toJSON(),e.geometryType=se.toJSON(o.type))}};n([p({type:String,json:{write:!0}})],F.prototype,"displayFieldName",void 0),n([p({type:B})],F.prototype,"feature",void 0),n([ie("feature",["attributes","geometry"])],F.prototype,"readFeature",null),n([Q("feature")],F.prototype,"writeFeature",null),n([p({type:Number,json:{write:!0}})],F.prototype,"layerId",void 0),n([p({type:String,json:{write:!0}})],F.prototype,"layerName",void 0),F=n([_("esri.rest.support.IdentifyResult")],F);const Pe=F;async function _e(t,e,i){const o=(e=Ve(e)).geometry?[e.geometry]:[],r=xe(t);return r.path+="/identify",ve(o).then(a=>{const s=Re(e,{geometry:a==null?void 0:a[0]}),y=$e({...r.query,f:"json",...s}),c=Fe(y,i);return oe(r.path,c).then(Ge).then(l=>Te(l,e.sublayers))})}function Ge(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(i=>Pe.fromJSON(i)),e}function Ve(t){return t=D.from(t)}function Te(t,e){if(!(e!=null&&e.length))return t;const i=new Map;function o(r){i.set(r.id,r),r.sublayers&&r.sublayers.forEach(o)}e.forEach(o);for(const r of t.results)r.feature.sourceLayer=i.get(r.layerId);return t}let N=null;function Ke(t,e){return e.type==="tile"||e.type==="map-image"}let j=class extends ae{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=ne(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([le(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){var s,y;const{layerView:{layer:i,view:{scale:o}}}=this;if(!t)throw new T("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const r=Ae(i.sublayers,o,e);if(!r.length)return[];const a=await Me(i,r);if(!((((y=(s=i.capabilities)==null?void 0:s.operations)==null?void 0:y.supportsIdentify)??!0)&&i.version>=10.5)&&!a)throw new T("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return a?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!t||!e)return U;let i=ge(t)?[t]:pe.isCollection(t)?t.toArray():Array.isArray(t)?t:[];if(i=i==null?void 0:i.filter(A),((i==null?void 0:i.length)??0)===0)return U;for(const o of i){const{sourceLayer:r}=o;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(o.visible=!1)}return e.addMany(i),ue(()=>e.removeMany(i??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:i,highlightGraphicUpdated:o}=this;if(i&&o)for(const r of t){const a=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&a&&"getSymbolAsync"in a&&a.getSymbolAsync(r).then(async s=>{var l;s||(s=new L);let y=null;const c="visualVariables"in a?(l=a.visualVariables)==null?void 0:l.find(u=>u.type==="size"):void 0;c&&(N||(N=(await ye(async()=>{const{getSize:u}=await import("./visualVariableUtils-dx28E4EQ.js");return{getSize:u}},__vite__mapDeps([0,1,2,3,4]))).getSize),y=N(c,r,{view:e.type,scale:e.scale,shape:s.type==="simple-marker"?s.style:null})),y||(y="width"in s&&"height"in s&&s.width!=null&&s.height!=null?Math.max(s.width,s.height):"size"in s?s.size:16),i.includes(r)&&(r.symbol=new L({style:"square",size:y,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),o(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:i},highlightGraphics:o,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(o!=null&&o.length)||!e.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(t),s=new Map;for(const l of o)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>a){const u=l.sourceLayer;ce(s,u,()=>new Map).set(l.getObjectId(),l)}const y=Array.from(s,([l,u])=>{const h=l.createQuery();return h.objectIds=[...u.keys()],h.outFields=[l.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=a,h.outSpatialReference=i.spatialReference,l.queryFeatures(h)}),c=await Promise.all(y);if(!this.destroyed)for(const{features:l}of c)for(const u of l){const h=u.sourceLayer,m=s.get(h).get(u.getObjectId());m&&o.includes(m)&&(m.geometry=u.geometry,r(m,"geometry"),this._featuresResolutions.set(m,a))}}_getTargetResolution(t){const e=t*he(this.layerView.view.spatialReference),i=e/16;return i<=10?0:t/e*i}async _fetchPopupFeaturesUsingIdentify(t,e,i){const o=await this._createIdentifyParameters(t,e,i);if(o==null)return[];const{results:r}=await _e(this.layerView.layer.parsedUrl,o,i);return r.map(a=>a.feature)}async _createIdentifyParameters(t,e,i){const{floors:o,layer:r,timeExtent:a,view:{spatialReference:s,scale:y}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(i).catch(()=>{})));const c=Math.min(de("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,$)=>$.renderer?H({renderer:$.renderer,pointerType:i==null?void 0:i.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,c),u=be(y,s),h=Math.round(l.width/u),m=new z({xmin:l.center.x-u*h,ymin:l.center.y-u*h,xmax:l.center.x+u*h,ymax:l.center.y+u*h,spatialReference:l.spatialReference});return new D({floors:o,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:s,sublayers:r.sublayers,timeExtent:a,tolerance:c,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,i){const{layerView:{floors:o,timeExtent:r}}=this,a=e.map(async({sublayer:s,popupTemplate:y})=>{var b;if(await s.load(i).catch(()=>{}),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const c=s.createQuery(),l=H({renderer:s.renderer,pointerType:i==null?void 0:i.pointerType}),u=this.createFetchPopupFeaturesQueryGeometry(t,l),h=new Set,[m]=await Promise.all([Ee(s,y),(b=s.renderer)==null?void 0:b.collectRequiredFields(h,s.fieldsIndex)]);M(i),fe(h,s.fieldsIndex,m);const x=Array.from(h).sort();c.geometry=u,c.outFields=x,c.timeExtent=r;const $=G(o,s);c.where=J(c.where,$);const O=this._getTargetResolution(u.width/l),f=await Le(y);M(i);const S=s.geometryType==="point"||f&&f.arcadeUtils.hasGeometryOperations(y);S||(c.maxAllowableOffset=O);let{features:w}=await s.queryFeatures(c,i);const g=S?0:O;w=await He(s,w,i);for(const R of w)this._featuresResolutions.set(R,g);return w});return(await Promise.allSettled(a)).reduce((s,y)=>y.status==="fulfilled"?[...s,...y.value]:s,[]).filter(A)}};function Ae(t,e,i){const o=[];if(!t)return o;const r=a=>{const s=a.minScale===0||e<=a.minScale,y=a.maxScale===0||e>=a.maxScale;if(a.visible&&s&&y){if(a.sublayers)a.sublayers.forEach(r);else if(a.popupEnabled){const c=je(a,{...i,defaultPopupTemplateEnabled:!1});c!=null&&o.unshift({sublayer:a,popupTemplate:c})}}};return t.map(r),o}function Le(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(i=>i.type==="expression")?me():Promise.resolve()}async function Me(t,e){var i,o;if((o=(i=t.capabilities)==null?void 0:i.operations)!=null&&o.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function He(t,e,i){const o=t.renderer;return o&&"defaultSymbol"in o&&!o.defaultSymbol&&(e=o.valueExpression?await Promise.all(e.map(r=>o.getSymbolAsync(r,i).then(a=>a?r:null))).then(r=>r.filter(a=>a!=null)):e.filter(r=>o.getSymbol(r)!=null)),e}n([p({constructOnly:!0})],j.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),n([p({constructOnly:!0})],j.prototype,"layerView",void 0),n([p({constructOnly:!0})],j.prototype,"highlightGraphics",void 0),n([p({constructOnly:!0})],j.prototype,"highlightGraphicUpdated",void 0),n([p({constructOnly:!0})],j.prototype,"updatingHandles",void 0),j=n([_("esri.views.layers.support.MapServiceLayerViewHelper")],j);export{j as R,Ke as _};
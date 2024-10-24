import{b2 as C,F as i,G as s,K as I,bP as G,bO as B,bN as L,bQ as F,b8 as h,br as w,ba as N,dl as M,f9 as J,fa as R,fb as $,b6 as W,aO as z,aB as k,Q as A,b5 as T,W as c,Z as K,cu as V,fc as D}from"./index-C1aGfQcb.js";import{S as Q}from"./MultiOriginJSONSupport-Qqzd52Lf.js";import{V as S,J as q,_ as H,W as U,K as Z}from"./projection-BOBOhWzm.js";import{R as X}from"./normalizeUtils-Bg1OALXh.js";import Y from"./FeatureLayer-DGRhhm0K.js";import{h as ee}from"./GraphicsLayer-7fnK8PA0.js";import{f as te}from"./Layer-CneDw8eF.js";import{n as re}from"./objectIdUtils-4dd1rf9p.js";import{l as oe}from"./BlendLayer-CG9LFMxd.js";import{b as ie}from"./OperationalLayer-nNeN4Mrb.js";import{j as le}from"./PortalLayer-Bqf_dhsv.js";import{t as ae}from"./ScaleRangeLayer-66YiyNPI.js";import"./projectBuffer-CZ7yaGuo.js";import"./normalizeUtilsCommon-UUlRRPVA.js";import"./utils-DGPHbhMN.js";import"./utils-ByvCMLXh.js";import"./UniqueValueRenderer-CAZbf8NT.js";import"./RendererLegendOptions-CULirduz.js";import"./diffUtils-DMLidw0V.js";import"./colorRamps-D4VCsfmX.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-dx28E4EQ.js";import"./lengthUtils-CFwdZ3dz.js";import"./jsonUtils-BWWcP_yB.js";import"./defaults-Dbnhuv3C.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-CEgUrR2a.js";import"./jsonUtils-CWFaUb2E.js";import"./LRUCache-DbPTy7LA.js";import"./Version-DD-eRUXC.js";import"./FieldsIndex-BrdRr9E_.js";import"./UnknownTimeZone-DhxWDwo9.js";import"./OverrideHelper-D-UVQ00R.js";import"./colorUtils-BWiljOUv.js";import"./vec42-BHDxGccW.js";import"./vec4f64-o2zAXfmz.js";import"./utils-D7agaEG-.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-DbJV_fl5.js";import"./heatmapUtils-D0BPLm9w.js";import"./commonProperties-Drl05DKJ.js";import"./ElevationInfo-D7CBP7sd.js";import"./FeatureLayerBase-BNIuOgAL.js";import"./HeightModelInfo-kVs8dE0B.js";import"./arcgisLayerUrl-BkZy4Mr3.js";import"./featureLayerUtils-Dy99w2fj.js";import"./Query-LPs1Zyw4.js";import"./FullTextSearch-Cza0yp3f.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./LayerFloorInfo-DzoJncEV.js";import"./Relationship-CBhq9gYu.js";import"./serviceCapabilitiesUtils-B23--4px.js";import"./workers-CeelWDzo.js";import"./editsZScale-8GE3gysf.js";import"./queryZScale-D-ZT69l7.js";import"./FeatureSet-CeKoTEEO.js";import"./APIKeyMixin-BrvyKlIW.js";import"./ArcGISService-C1oUW8BT.js";import"./CustomParametersMixin-BhjpsNjD.js";import"./EditBusLayer-DCXZWvgn.js";import"./FeatureEffectLayer-gWJrS8gr.js";import"./FeatureEffect-B5YAe6Lk.js";import"./jsonUtils-n3e_wlfQ.js";import"./parser-C4Qiz3JH.js";import"./utils-sqJe3zMg.js";import"./FeatureReductionLayer-DuxcLofN.js";import"./FeatureReductionSelection-tRCh97wj.js";import"./labelingInfo-BV0df7F6.js";import"./labelUtils-C_ZaLudT.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-B8Gw_A9P.js";import"./OrderByInfo-k2G4k_zV.js";import"./RefreshableLayer-CwxQNwd3.js";import"./TemporalLayer-CR5q7V2k.js";import"./TimeInfo-CY1-cj-U.js";import"./FeatureTemplate-DJBXu3Te.js";import"./FeatureType-JHO2oVJp.js";import"./fieldProperties-CoDAhoou.js";import"./versionUtils-DBm9Te4x.js";import"./styleUtils-CFywnZa6.js";import"./popupUtils-BA1X4qoc.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";import"./GraphicsCollection-BlUFPpxh.js";import"./portalItemUtils-Cy9KvMYK.js";function b(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!E(e))}function E({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return v.find(o=>{var l,n,p;return r===o.geometryTypeJSON&&((p=(n=(l=t.drawingInfo)==null?void 0:l.renderer)==null?void 0:n.symbol)==null?void 0:p.type)===o.identifyingSymbol.type})}function _(){return new V({xmin:-180,ymin:-90,xmax:180,ymax:90})}const x=new C({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new C({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let m=class extends ee{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?e==null?S(_(),t).geometry:$(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=M();return this.graphics.forEach(o=>{const l=o.geometry!=null?S(o.geometry,t).geometry:null;l!=null&&J(e,l.type==="point"?l:l.extent,e)}),R(e,D)?null:e}get sublayers(){return this.graphics}};i([s({readOnly:!0})],m.prototype,"fullExtent",null),i([s({readOnly:!0})],m.prototype,"fullBounds",null),i([s({readOnly:!0})],m.prototype,"sublayers",null),i([s()],m.prototype,"layer",void 0),i([s()],m.prototype,"layerId",void 0),i([s({readOnly:!0})],m.prototype,"visibilityMode",void 0),m=i([I("esri.layers.MapNotesLayer.MapNotesSublayer")],m);const v=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new G().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new B().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new F().toJSON()}];let a=class extends oe(ae(ie(le(Q(te))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new w(v.map(e=>new m({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!b(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!b(e))return null;const o=e.layers.map(l=>{const n=new Y;return n.read(l,r),n});return new w({items:o})}readLegacyfeatureCollectionJSON(t,e){return b(e)?N(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=M();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:o})=>o!=null?J(e,o,e):e,e):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const l=S(o.layerDefinition.extent,t).geometry;l!=null&&J(e,l,e)}),R(e,D)?S(_(),t).geometry:$(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){if(b(e))return null;const o=[];let l=e.layers.reduce((n,p)=>Math.max(n,p.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:p,featureSet:y}=n,u=p.id??l++,d=E(n);if(d!=null){const f=new m({id:d.id,title:p.name,layerId:u,layer:this,graphics:y.features.map(({geometry:g,symbol:O,attributes:j,popupInfo:P})=>W.fromJSON({attributes:j,geometry:g,symbol:O,popupTemplate:P}))});o.push(f)}}return new w(o)}writeSublayers(t,e,r,o){var d;const{minScale:l,maxScale:n}=this;if(t==null)return;const p=t.some(f=>f.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&((d=o==null?void 0:o.messages)==null?void 0:d.push(new z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const y=[];let u=this.spatialReference.toJSON();e:for(const f of t)for(const g of f.graphics)if(g.geometry!=null){u=g.geometry.spatialReference.toJSON();break e}for(const f of v){const g=t.find(O=>f.id===O.id);this._writeMapNoteSublayer(y,g,f,l,n,u,o)}k("featureCollection.layers",y,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=N(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(this.sublayers==null)return;let t=null;const e=[];for(const o of this.sublayers)for(const l of o.graphics)if(l.geometry!=null){const n=l.geometry;t?A(n.spatialReference,t)||(q(n.spatialReference,t)||H()||await U(),l.geometry=Z(n,t)):t=n.spatialReference,e.push(l)}const r=await X(e.map(o=>o.geometry));e.forEach((o,l)=>o.geometry=r[l])}_findSublayer(t){var e;return this.sublayers==null?null:((e=this.sublayers)==null?void 0:e.find(r=>r.id===t))??null}_writeMapNoteSublayer(t,e,r,o,l,n,p){const y=[];if(e!=null){for(const u of e.graphics)this._writeMapNote(y,u,r.geometryType,p);this._normalizeObjectIds(y,x),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:l,objectIdField:"OBJECTID",fields:[x.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var u,d;if(e==null)return;const{geometry:l,symbol:n,popupTemplate:p}=e;if(l==null)return;if(l.type!==r)return void((u=o==null?void 0:o.messages)==null?void 0:u.push(new T("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(n==null)return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new T("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const y={attributes:{...e.attributes},geometry:l.toJSON(),symbol:n.toJSON()};p!=null&&(y.popupInfo=p.toJSON()),t.push(y)}_normalizeObjectIds(t,e){const r=e.name;let o=re(r,t)+1;const l=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:p}=n;(p[r]==null||l.has(p[r]))&&(p[r]=o++),l.add(p[r])}}};i([s({readOnly:!0})],a.prototype,"capabilities",void 0),i([c(["portal-item","web-map"],"capabilities",["layers"])],a.prototype,"readCapabilities",null),i([s({readOnly:!0})],a.prototype,"featureCollections",void 0),i([c(["web-map","portal-item"],"featureCollections",["layers"])],a.prototype,"readFeatureCollections",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],a.prototype,"featureCollectionJSON",void 0),i([c(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],a.prototype,"readLegacyfeatureCollectionJSON",null),i([s({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],a.prototype,"featureCollectionType",void 0),i([s({readOnly:!0})],a.prototype,"fullExtent",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],a.prototype,"legendEnabled",void 0),i([s({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"minScale",void 0),i([c(["web-map","portal-item"],"minScale",["layers"])],a.prototype,"readMinScale",null),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"maxScale",void 0),i([c(["web-map","portal-item"],"maxScale",["layers"])],a.prototype,"readMaxScale",null),i([s({readOnly:!0})],a.prototype,"multipointLayer",null),i([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),i([s({readOnly:!0})],a.prototype,"pointLayer",null),i([s({readOnly:!0})],a.prototype,"polygonLayer",null),i([s({readOnly:!0})],a.prototype,"polylineLayer",null),i([s({type:h})],a.prototype,"spatialReference",void 0),i([c(["web-map","portal-item"],"spatialReference",["layers"])],a.prototype,"readSpatialReference",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],a.prototype,"sublayers",void 0),i([c("web-map","sublayers",["layers"])],a.prototype,"readSublayers",null),i([K("web-map","sublayers")],a.prototype,"writeSublayers",null),i([s({readOnly:!0})],a.prototype,"textLayer",null),i([s()],a.prototype,"title",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),a=i([I("esri.layers.MapNotesLayer")],a);const Ft=a;export{Ft as default};

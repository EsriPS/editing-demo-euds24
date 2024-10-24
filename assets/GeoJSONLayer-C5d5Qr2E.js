const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingSupport-DtOMNCjA.js","assets/index-C1aGfQcb.js","assets/index-qkyhuh7d.css","assets/normalizeUtils-Bg1OALXh.js","assets/normalizeUtilsCommon-UUlRRPVA.js","assets/utils-DGPHbhMN.js","assets/utils-ByvCMLXh.js","assets/EditBusLayer-DCXZWvgn.js","assets/infoFor3D-C0hFfS1m.js"])))=>i.map(i=>d[i]);
import{F as r,G as i,K as F,fx as w,fh as $,cu as O,aO as y,dT as j,b3 as J,e4 as E,aA as f,b8 as I,aH as N,gG as g,ax as R,aT as v,aE as q,f7 as P,b2 as T,bc as k}from"./index-C1aGfQcb.js";import"./UniqueValueRenderer-CAZbf8NT.js";import{m as D,u as G}from"./jsonUtils-CWFaUb2E.js";import{S as Z}from"./MultiOriginJSONSupport-Qqzd52Lf.js";import{f as C}from"./Layer-CneDw8eF.js";import{p as Q}from"./workers-CeelWDzo.js";import{y as z}from"./clientSideDefaults-DxRAc8q_.js";import{d as L}from"./FeatureSet-CeKoTEEO.js";import{l as V}from"./BlendLayer-CG9LFMxd.js";import{e as A}from"./CustomParametersMixin-BhjpsNjD.js";import{c as B}from"./FeatureEffectLayer-gWJrS8gr.js";import{c as U}from"./FeatureReductionLayer-DuxcLofN.js";import{b as W}from"./OperationalLayer-nNeN4Mrb.js";import{p as M}from"./OrderedLayer-B8Gw_A9P.js";import{j as H}from"./PortalLayer-Bqf_dhsv.js";import{f as K}from"./RefreshableLayer-CwxQNwd3.js";import{t as X}from"./ScaleRangeLayer-66YiyNPI.js";import{l as Y}from"./TemporalLayer-CR5q7V2k.js";import{d as ee,g as te,l as re,y as ie,w as oe,s as se,t as ne,p as ae}from"./commonProperties-Drl05DKJ.js";import{p as le}from"./FeatureTemplate-DJBXu3Te.js";import{s as pe}from"./fieldProperties-CoDAhoou.js";import{C as ue,n as de}from"./labelingInfo-BV0df7F6.js";import{b as h}from"./Query-LPs1Zyw4.js";import{p as he}from"./popupUtils-BA1X4qoc.js";import"./RendererLegendOptions-CULirduz.js";import"./diffUtils-DMLidw0V.js";import"./colorRamps-D4VCsfmX.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-dx28E4EQ.js";import"./lengthUtils-CFwdZ3dz.js";import"./jsonUtils-BWWcP_yB.js";import"./defaults-Dbnhuv3C.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-CEgUrR2a.js";import"./LRUCache-DbPTy7LA.js";import"./Version-DD-eRUXC.js";import"./FieldsIndex-BrdRr9E_.js";import"./UnknownTimeZone-DhxWDwo9.js";import"./OverrideHelper-D-UVQ00R.js";import"./colorUtils-BWiljOUv.js";import"./vec42-BHDxGccW.js";import"./vec4f64-o2zAXfmz.js";import"./utils-D7agaEG-.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-DbJV_fl5.js";import"./heatmapUtils-D0BPLm9w.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";import"./jsonUtils-n3e_wlfQ.js";import"./parser-C4Qiz3JH.js";import"./utils-sqJe3zMg.js";import"./FeatureEffect-B5YAe6Lk.js";import"./FeatureReductionSelection-tRCh97wj.js";import"./featureLayerUtils-Dy99w2fj.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-k2G4k_zV.js";import"./portalItemUtils-Cy9KvMYK.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./TimeInfo-CY1-cj-U.js";import"./ElevationInfo-D7CBP7sd.js";import"./labelUtils-C_ZaLudT.js";import"./FullTextSearch-Cza0yp3f.js";let p=class extends w{constructor(){super(...arguments),this.type="geojson",this.refresh=$(async e=>{await this.load();const{extent:t,timeExtent:s}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(s=>L.fromJSON(s))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(s=>({count:s.count,extent:O.fromJSON(s.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new y("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,s=[],n=[],l=[];if(e.addFeatures)for(const a of e.addFeatures)s.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)l.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:s,updates:l,deletes:n}).then(({extent:a,timeExtent:u,featureEditResults:c})=>(this.sourceJSON.extent=a,u&&(this.sourceJSON.timeInfo.timeExtent=[u.start,u.end]),this._createEditsResult(c)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new y("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,s=this._geometryForSerialization(e);return s?{geometry:s.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?j.fromExtent(t.extent):t}async _startWorker(e){this._connection=await Q("GeoJSONSourceWorker",{strategy:J("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:s,hasZ:n,geometryType:l,objectIdField:a,url:u,timeInfo:c,customParameters:S}=this.layer,x=this.layer.originOf("spatialReference")==="defaults",_={url:u,customParameters:S,fields:t&&t.map(m=>m.toJSON()),geometryType:E.toJSON(l),hasZ:n,objectIdField:a,timeInfo:c?c.toJSON():null,spatialReference:x?null:s&&s.toJSON()},d=await this._connection.invoke("load",_,{signal:e});for(const m of d.warnings)f.getLogger(this.layer).warn("#load()",`${m.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:m});d.featureErrors.length&&f.getLogger(this.layer).warn("#load()",`Encountered ${d.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:d.featureErrors}),this.sourceJSON=d.layerDefinition,this.capabilities=z(this.sourceJSON.hasZ,!0)}};r([i()],p.prototype,"capabilities",void 0),r([i()],p.prototype,"type",void 0),r([i({constructOnly:!0})],p.prototype,"layer",void 0),r([i()],p.prototype,"sourceJSON",void 0),p=r([F("esri.layers.graphics.sources.GeoJSONSource")],p);const b=pe();let o=class extends M(A(U(B(V(Y(X(K(W(H(Z(C))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new p({layer:this}),this.spatialReference=I.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(N).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),R(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?v(this.url):null}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=v(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:s}=await q(()=>import("./editingSupport-DtOMNCjA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));await this.load();const n=await s(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return he(this,e)}createQuery(){var l;const e=new h,t=(l=this.capabilities)==null?void 0:l.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:n}=this;return e.timeExtent=s!=null&&n!=null?n.offset(-s.value,s.unit):n||null,e}getFieldDomain(e,t){var s;return(s=this.getField(e))==null?void 0:s.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(h.from(e)||this.createQuery(),t)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(h.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(h.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(h.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i(P("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Boolean})],o.prototype,"editingEnabled",void 0),r([i(ee)],o.prototype,"elevationInfo",void 0),r([i({type:[T],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),r([i(b.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({type:O,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:E.read}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean})],o.prototype,"hasZ",void 0),r([i(te)],o.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i(re)],o.prototype,"labelsVisible",void 0),r([i({type:[ue],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:de},write:!0}})],o.prototype,"labelingInfo",void 0),r([i(ie)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i(oe)],o.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),r([i(b.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(se)],o.prototype,"popupEnabled",void 0),r([i({type:k,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:D,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:G}}}})],o.prototype,"renderer",null),r([i(ne)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({type:I})],o.prototype,"spatialReference",void 0),r([i({type:[le]})],o.prototype,"templates",void 0),r([i()],o.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([i(ae)],o.prototype,"url",null),o=r([F("esri.layers.GeoJSONLayer")],o);const St=o;export{St as default};

import{F as r,G as i,K as j,fx as L,cK as R,b8 as C,gJ as N,aO as F,gG as I,ax as J,b2 as z,cu as H,e4 as O,bc as U}from"./index-C1aGfQcb.js";import"./UniqueValueRenderer-CAZbf8NT.js";import{m as V,u as Z}from"./jsonUtils-CWFaUb2E.js";import{S as K}from"./MultiOriginJSONSupport-Qqzd52Lf.js";import{f as k}from"./Layer-CneDw8eF.js";import{R as W,x as $,C as D,P as X,O as Y,N as ee,q as te,v as re,k as oe}from"./ogcFeatureUtils-O-0VNSm3.js";import{s as ie}from"./capabilities-Y9lFlGVh.js";import{d as se}from"./FeatureSet-CeKoTEEO.js";import{i as pe}from"./APIKeyMixin-BrvyKlIW.js";import{l as ne}from"./BlendLayer-CG9LFMxd.js";import{e as ae}from"./CustomParametersMixin-BhjpsNjD.js";import{c as le}from"./FeatureEffectLayer-gWJrS8gr.js";import{c as ue}from"./FeatureReductionLayer-DuxcLofN.js";import{b as de}from"./OperationalLayer-nNeN4Mrb.js";import{p as ce}from"./OrderedLayer-B8Gw_A9P.js";import{j as me}from"./PortalLayer-Bqf_dhsv.js";import{f as ye}from"./RefreshableLayer-CwxQNwd3.js";import{t as fe}from"./ScaleRangeLayer-66YiyNPI.js";import{l as he}from"./TemporalLayer-CR5q7V2k.js";import{d as ge,l as ve,y as Se,s as Ce,t as be,p as we}from"./commonProperties-Drl05DKJ.js";import{n as xe}from"./FeatureType-JHO2oVJp.js";import{s as Re}from"./fieldProperties-CoDAhoou.js";import{C as Fe,n as Ie}from"./labelingInfo-BV0df7F6.js";import{b as T}from"./Query-LPs1Zyw4.js";import{p as Oe}from"./popupUtils-BA1X4qoc.js";import"./RendererLegendOptions-CULirduz.js";import"./diffUtils-DMLidw0V.js";import"./colorRamps-D4VCsfmX.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-dx28E4EQ.js";import"./lengthUtils-CFwdZ3dz.js";import"./jsonUtils-BWWcP_yB.js";import"./defaults-Dbnhuv3C.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-CEgUrR2a.js";import"./LRUCache-DbPTy7LA.js";import"./Version-DD-eRUXC.js";import"./FieldsIndex-BrdRr9E_.js";import"./UnknownTimeZone-DhxWDwo9.js";import"./OverrideHelper-D-UVQ00R.js";import"./colorUtils-BWiljOUv.js";import"./vec42-BHDxGccW.js";import"./vec4f64-o2zAXfmz.js";import"./utils-D7agaEG-.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-DbJV_fl5.js";import"./heatmapUtils-D0BPLm9w.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./featureConversionUtils-C-Uqf9Q4.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./geojson-BjlHV6ge.js";import"./date-DLgTylpo.js";import"./clientSideDefaults-DxRAc8q_.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./sourceUtils--LAB1GeK.js";import"./jsonUtils-n3e_wlfQ.js";import"./parser-C4Qiz3JH.js";import"./utils-sqJe3zMg.js";import"./FeatureEffect-B5YAe6Lk.js";import"./FeatureReductionSelection-tRCh97wj.js";import"./featureLayerUtils-Dy99w2fj.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-k2G4k_zV.js";import"./portalItemUtils-Cy9KvMYK.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./TimeInfo-CY1-cj-U.js";import"./ElevationInfo-D7CBP7sd.js";import"./FeatureTemplate-DJBXu3Te.js";import"./labelUtils-C_ZaLudT.js";import"./FullTextSearch-Cza0yp3f.js";let d=class extends L{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:s,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(s=>se.fromJSON(s))}queryFeaturesJSON(e,t={}){const s=this.getSource();return this.load(t).then(()=>W(s,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${R(t)}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:ie,editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var s,p,n,l,a;const t=(s=e==null?void 0:e.components)==null?void 0:s.parameters;return((n=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??$,s=D(t);return s==null?C.WGS84:new C({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",p=e.crs??[$],n=p.includes(s)?p.filter(a=>a!==s).concat(t.crs??[]):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const s=t!=null?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:y,hasZ:f,objectIdField:P,timeInfo:h,url:q}=e,_={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:N.toJSON(y),hasZ:f??!1,objectIdField:P,timeInfo:h==null?void 0:h.toJSON()},c={apiKey:p,customParameters:l,signal:s},g=await X(q,c),[b,w]=await Promise.all([Y(g,c),ee(g,c)]);if(!this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new F("ogc-feature-layer:no-geojson-support","Server does not support geojson");const m=w.collections.find(({id:u})=>u===n);if(!m)throw new F("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const E=this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await te(g,c):null,x=await re(m,_,c),B=this._getMaxRecordCount(E),G=this._getCapabilities(x.hasZ,B),A=this._getStorageSpatialReference(m).toJSON(),Q=this._getSupportedSpatialReferences(m,w),M=new RegExp(`^${R(oe)}`,"i"),v={};for(const u of Q){const S=D(u);S!=null&&(v[S]||(v[S]=u.replace(M,"")))}this.featureDefinition={capabilities:G,collection:m,layerDefinition:x,spatialReference:A,supportedCrs:v}}};r([i()],d.prototype,"featureDefinition",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"type",void 0),d=r([j("esri.layers.graphics.sources.OGCFeatureSource")],d);const $e=Re();let o=class extends pe(ae(ue(le(ne(ce(he(fe(de(me(ye(K(k)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Oe(this,e)}createQuery(){return new T}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let s,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(y=>{var f;return y.id==l&&(s=(f=y.domains)==null?void 0:f[e],(s==null?void 0:s.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(T.from(e)||this.createQuery(),t)).then(s=>{var p;return(p=s==null?void 0:s.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),s})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),I(this.renderer,this.fieldsIndex),J(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([i({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([i(ge)],o.prototype,"elevationInfo",void 0),r([i({type:[z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([i($e.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({readOnly:!0,type:H,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([i({type:O.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:O.read}}}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i({type:[Fe],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ie},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([i(ve)],o.prototype,"labelsVisible",void 0),r([i(Se)],o.prototype,"legendEnabled",void 0),r([i({type:Number})],o.prototype,"maxRecordCount",void 0),r([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(Ce)],o.prototype,"popupEnabled",void 0),r([i({type:U,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:V,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:Z,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([i(be)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({readOnly:!0,type:C,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[xe]})],o.prototype,"types",void 0),r([i(we)],o.prototype,"url",void 0),o=r([j("esri.layers.OGCFeatureLayer")],o);const Kt=o;export{Kt as default};
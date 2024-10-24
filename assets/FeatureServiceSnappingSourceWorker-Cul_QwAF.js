import{dk as q,dC as C,fK as H,gm as I,i1 as O,F as l,G as u,K as A,L as k,i2 as R,i3 as Z,i4 as b,cP as W,c5 as L,c7 as K,aH as x,aA as P,cu as X,i5 as Y,fb as tt,hl as et,i6 as D,i7 as it,i8 as M,i9 as J,di as st,cf as rt,aF as _,b8 as E,M as N,O as nt,b9 as ot}from"./index-C1aGfQcb.js";import{h as V}from"./UpdatingHandles-DOPUoIlu.js";import{m as at}from"./FeatureStore-B0gqZoOR.js";import{V as lt}from"./QueryEngine-C9ivs0Pi.js";import{z as S}from"./TileInfo-C4AYiz3R.js";import{b as T}from"./Query-LPs1Zyw4.js";import{h as ut}from"./ElevationInfo-D7CBP7sd.js";import{i as U,r as z,n as j}from"./symbologySnappingCandidates-B-Ntl7JM.js";import{i as ht,c as ct,g as dt}from"./featureConversionUtils-C-Uqf9Q4.js";import{g as pt}from"./arcgisLayerUrl-BkZy4Mr3.js";import{a as ft}from"./pbfQueryUtils-zIR8yi_m.js";import{x as _t,f as gt,c as mt,S as yt}from"./query-c3x-72Af.js";import{o as Ft}from"./BoundsStore-DO_rtT_2.js";import{t as Et}from"./TileKey-DZd6gJy7.js";import"./timeSupport-DZeNU3Q4.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./queryUtils-DfwPGxwH.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./normalizeUtils-Bg1OALXh.js";import"./normalizeUtilsCommon-UUlRRPVA.js";import"./utils-DGPHbhMN.js";import"./utils-ByvCMLXh.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-DrXZKbZy.js";import"./centroid-DdLmOD72.js";import"./OptimizedFeature-swgcyHeh.js";import"./LRUCache-DbPTy7LA.js";import"./WhereClause-dg9O4EEg.js";import"./TimeOnly-vNYE6bX9.js";import"./UnknownTimeZone-DhxWDwo9.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./quantizationUtils-DbJV_fl5.js";import"./utils-fVaXlGs2.js";import"./timeUtils-X0MXjtQ8.js";import"./heatmapUtils-D0BPLm9w.js";import"./vec42-BHDxGccW.js";import"./vec4f64-o2zAXfmz.js";import"./utils-D5wrSxig.js";import"./ClassBreaksDefinition-CpzZK_QT.js";import"./SnappingCandidate-O5eRSE6e.js";import"./FieldsIndex-BrdRr9E_.js";import"./Scheduler-DS_v5N7L.js";import"./signal-CRiDvIIF.js";import"./debugFlags-CfZYxH5Q.js";import"./FullTextSearch-Cza0yp3f.js";import"./TimeExtent-DGiXUfis.js";import"./lengthUtils-CFwdZ3dz.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./pbf-B3ECgi3E.js";import"./queryZScale-D-ZT69l7.js";import"./PooledRBush-D_zSRdWq.js";import"./quickselect-QQC62dOK.js";class Tt{constructor(t,i){this.data=t,this.resolution=i,this.state={type:a.CREATED},this.alive=!0}process(t){switch(this.state.type){case a.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_COUNT:break;case a.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_FEATURES:break;case a.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case a.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case a.CREATED:case a.FETCH_COUNT:return 0;case a.FETCHED_COUNT:return this.state.featureCount;case a.FETCH_FEATURES:return this.state.previous.featureCount;case a.FETCHED_FEATURES:return this.state.features.length;case a.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case a.CREATED:return"created";case a.FETCH_COUNT:return"fetch-count";case a.FETCHED_COUNT:return"fetched-count";case a.FETCH_FEATURES:return"fetch-features";case a.FETCHED_FEATURES:return"fetched-features";case a.DONE:return"done"}}_gotoFetchCount(t,i){return{type:a.FETCH_COUNT,previous:t,task:C(async s=>{const r=await H(i.fetchCount(this,s));this.state.type===a.FETCH_COUNT&&(this.state=Ct(this.state,r.ok?r.value:1/0))})}}_gotoFetchFeatures(t,i){return{type:a.FETCH_FEATURES,previous:t,task:C(async s=>{const r=await H(i.fetchFeatures(this,t.featureCount,s));this.state.type===a.FETCH_FEATURES&&(this.state=St(this.state,r.ok?r.value:[]))})}}_goToDone(t,i){return i.finish(this,t.features),{type:a.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:a.CREATED},t.type){case a.CREATED:case a.FETCHED_COUNT:case a.FETCHED_FEATURES:case a.DONE:break;case a.FETCH_COUNT:case a.FETCH_FEATURES:t.task.abort()}}intersects(t){return t==null||!this.data.extent||(I(t,$),O(this.data.extent,$))}}function Ct(e,t){return{type:a.FETCHED_COUNT,featureCount:t,previous:e}}function St(e,t){return{type:a.FETCHED_FEATURES,previous:e,features:t}}var a;(function(e){e[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE"})(a||(a={}));const $=q();let c=class extends k{get _minimumVerticesPerFeature(){var t;switch((t=this.store)==null?void 0:t.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const t=new Set;return this.objectIdField&&t.add(this.objectIdField),this.globalIdField&&t.add(this.globalIdField),t}set outFields(t){const i=this._get("outFields"),s=R(t,this._mandatoryOutFields);Z(s,i)||(this._set("outFields",s),b(s,i)||this.refresh())}get outFields(){return this._get("outFields")??this._mandatoryOutFields}set filter(t){const i=this._get("filter"),s=this._filterProperties(t);JSON.stringify(i)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(t){const i=this._get("customParameters");JSON.stringify(i)!==JSON.stringify(t)&&this._set("customParameters",t)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(t){const i=this._get("tileInfo");i!==t&&(t!=null&&i!=null&&JSON.stringify(t)===JSON.stringify(i)||(this._set("tileInfo",t),this.store.tileInfo=t))}set tileSize(t){this._get("tileSize")!==t&&this._set("tileSize",t)}get updating(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(t){super(t),this.suspended=!0,this._historicMoment=null,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new V}initialize(){this._initializeFetchExtent(),this._updatingHandles.add(()=>this._configuration,()=>this.refresh()),this._updatingHandles.add(()=>this.tilesOfInterest,(t,i)=>{W(t,i,({id:s},{id:r})=>s===r)||this._process()},L),this.addHandles(K(()=>!this.suspended,()=>this._process()))}destroy(){this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._process()}async handleEdits(t){if(t.historicMoment&&(this._historicMoment=t.historicMoment),!t.addedFeatures.length&&!t.updatedFeatures.length&&!t.deletedFeatures.length)return;for(const r of this._pendingTiles.values())r.reset();const i={...t,deletedFeatures:t.deletedFeatures.map(({objectId:r,globalId:n})=>r&&r!==-1?r:this._lookupObjectIdByGlobalId(n))},s=C(async r=>{try{await this.store.processEdits(i,(n,o)=>this._queryFeaturesById(n,o),r),this._processPendingTiles()}catch(n){x(n),P.getLogger(this).warn("Failed to apply edits",n)}});this.addHandles(s),await this._updatingHandles.addPromise(s.promise)}setHistoricMoment(t){var i;(t==null?void 0:t.getTime())!==((i=this._historicMoment)==null?void 0:i.getTime())&&(this._historicMoment=t,this.refresh())}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!pt(this.url))return;const t=C(async i=>{var s;try{const r=await _t(this.url,new T({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:i});this.store.extent=X.fromJSON((s=r.data)==null?void 0:s.extent)}catch(r){x(r),P.getLogger(this).warn("Failed to fetch data extent",r)}});this._updatingHandles.addPromise(t.promise.then(()=>this._process())),this.addHandles(t)}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(t=>t.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const t of this._pendingTiles.values())t.alive=!1}_createPendingTiles(){if(this.suspended)return;const t=this._collectMissingTilesInfo();if(this._setAvailability(t==null?1:t.coveredArea/t.fullArea),t!=null)for(const{data:i,resolution:s}of t.missingTiles){const r=this._pendingTiles.get(i.id);r?(r.resolution=s,r.alive=!0):this._createPendingTile(i,s)}}_collectMissingTilesInfo(){let t=null;for(let i=this.tilesOfInterest.length-1;i>=0;i--){const s=this.tilesOfInterest[i],r=this.store.process(s,(n,o)=>this._verifyTileComplexity(n,o),this.outFields);t==null?t=r:t.prepend(r)}return t}_deletePendingTiles(){for(const t of this._pendingTiles.values())t.alive||this._deletePendingTile(t)}_processPendingTiles(){const t={fetchCount:(i,s)=>this._fetchCount(i,s),fetchFeatures:(i,s,r)=>this._fetchFeatures(i,s,r),finish:(i,s)=>this._finishPendingTile(i,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(t))for(const i of this._pendingTiles.values())this._verifyTileComplexity(this.store.getFeatureCount(i.data),i.resolution)&&this._updatingHandles.addPromise(i.process(t))}_verifyTileComplexity(t,i){return this._verifyVertexComplexity(t)&&this._verifyFeatureDensity(t,i)}_verifyVertexComplexity(t){return t*this._minimumVerticesPerFeature<bt}_verifyFeatureDensity(t,i){if(this.tileInfo==null)return!1;const s=this.tileSize*i;return t*(wt/(s*s))<It}_ensureFetchAllCounts(t){let i=!0;for(const s of this._pendingTiles.values())s.state.type<a.FETCHED_COUNT&&this._updatingHandles.addPromise(s.process(t)),s.state.type<=a.FETCH_COUNT&&(i=!1);return i}_finishPendingTile(t,i){this.store.add(t.data,i),this._deletePendingTile(t),this._updateAvailability()}_updateAvailability(){const t=this._collectMissingTilesInfo();this._setAvailability(t==null?1:t.coveredArea/t.fullArea)}_setAvailability(t){this._set("availability",t)}_createPendingTile(t,i){const s=new Tt(t,i);return this._pendingTiles.set(t.id,s),s}_deletePendingTile(t){t.reset(),this._pendingTiles.delete(t.data.id)}async _fetchCount(t,i){return this.store.fetchCount(t.data,this.url,this._createCountQuery(t),{query:this.customParameters,timeout:v,signal:i})}async _fetchFeatures(t,i,s){let r=0;const n=[];let o=0,h=i;for(;;){const d=this._createFeaturesQuery(t),p=this._setPagingParameters(d,r,h),{features:f,exceededTransferLimit:G}=await this._queryFeatures(d,s);p&&(r+=d.num),o+=f.length;for(const Q of f)n.push(Q);if(h=i-o,!p||!G||h<=0)return n}}_filterProperties(t){return t==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:t.where||"1=1",timeExtent:t.timeExtent,gdbVersion:t.gdbVersion}}_lookupObjectIdByGlobalId(t){const i=this.globalIdField,s=this.objectIdField;if(i==null)throw new Error("Expected globalIdField to be defined");let r=null;if(this.store.featureStore.forEach(n=>{t===n.attributes[i]&&(r=n.objectId??n.attributes[s])}),r==null)throw new Error(`Expected to find a feature with globalId ${t}`);return r}_queryFeaturesById(t,i){const s=this._createFeaturesQuery();return s.objectIds=t,this._queryFeatures(s,i)}_queryFeatures(t,i){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(t,i):this._queryFeaturesJSON(t,i)}async _queryFeaturesPBF(t,i){const{sourceSpatialReference:s}=this,{data:r}=await gt(this.url,t,new ft({sourceSpatialReference:s}),{query:this._configuration.customParameters,timeout:v,signal:i});return ht(r)}async _queryFeaturesJSON(t,i){const{sourceSpatialReference:s}=this,{data:r}=await mt(this.url,t,s,{query:this._configuration.customParameters,timeout:v,signal:i});return ct(r,this.objectIdField)}_createCountQuery(t){const i=this._createBaseQuery(t);return this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0),i}_createFeaturesQuery(t=null){var n;const i=this._createBaseQuery(t),s=(t==null?void 0:t.data)!=null?this.store.getAttributesForTile((n=t==null?void 0:t.data)==null?void 0:n.id):null,r=R(Y(this.outFields,s??new Set),this._mandatoryOutFields);return i.outFields=Array.from(r),i.returnGeometry=!0,t!=null&&(this.capabilities.query.supportsResultType?i.resultType="tile":this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0)),i}_createBaseQuery(t){const i=new T({returnZ:this.hasZ,returnM:!1,historicMoment:this._historicMoment,geometry:this.tileInfo!=null&&t!=null?tt(t.data.extent,this.tileInfo.spatialReference):void 0}),s=this._configuration.filter;return s!=null&&(i.where=s.where,i.gdbVersion=s.gdbVersion,i.timeExtent=s.timeExtent),i.outSpatialReference=this.spatialReference,i}_setPagingParameters(t,i,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:r,supportsCacheHint:n,tileMaxRecordCount:o,maxRecordCount:h,supportsResultType:d}=this.capabilities.query,p=r?T.MAX_MAX_RECORD_COUNT_FACTOR:1,f=p*((d||n)&&o?o:h||vt);return t.start=i,r?(t.maxRecordCountFactor=Math.min(p,Math.ceil(s/f)),t.num=Math.min(s,t.maxRecordCountFactor*f)):t.num=Math.min(s,f),!0}};l([u({constructOnly:!0})],c.prototype,"url",void 0),l([u({constructOnly:!0})],c.prototype,"objectIdField",void 0),l([u({constructOnly:!0})],c.prototype,"globalIdField",void 0),l([u({constructOnly:!0})],c.prototype,"capabilities",void 0),l([u({constructOnly:!0})],c.prototype,"sourceSpatialReference",void 0),l([u({constructOnly:!0})],c.prototype,"spatialReference",void 0),l([u({constructOnly:!0})],c.prototype,"store",void 0),l([u({readOnly:!0})],c.prototype,"_minimumVerticesPerFeature",null),l([u()],c.prototype,"_mandatoryOutFields",null),l([u()],c.prototype,"outFields",null),l([u()],c.prototype,"suspended",void 0),l([u()],c.prototype,"_historicMoment",void 0),l([u()],c.prototype,"filter",null),l([u()],c.prototype,"customParameters",null),l([u({readOnly:!0})],c.prototype,"_configuration",null),l([u()],c.prototype,"tileInfo",null),l([u()],c.prototype,"tileSize",null),l([u()],c.prototype,"tilesOfInterest",void 0),l([u({readOnly:!0})],c.prototype,"updating",null),l([u({readOnly:!0})],c.prototype,"availability",void 0),l([u()],c.prototype,"hasZ",null),c=l([A("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],c);const vt=2e3,v=6e5,bt=1e6,wt=25,It=1;class Ot{constructor(){this._store=new Map,this._byteSize=0}set(t,i){this.delete(t),this._store.set(t,i),this._byteSize+=i.byteSize}delete(t){const i=this._store.get(t);return!!this._store.delete(t)&&(i!=null&&(this._byteSize-=i.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,i){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),i(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const i=this._store.get(t);i&&(this._store.delete(t),this._store.set(t,i))}}let m=class extends k{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*et.MEGABYTES,this._tileBounds=new Ft,this._tiles=new Ot,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=q()}add(e,t){var r;for(const n of t)this._referenceFeature(n.objectId);const i=this.featureStore.upsertMany(t),s=i.map(n=>new Set(Object.keys(n.attributes))).reduce((n,o)=>D(n,o),new Set(Object.keys(((r=i[0])==null?void 0:r.attributes)??[])));this._addTileStorage(e,new Set(i.map(n=>n.objectId)),Ht(i),s),this._tiles.applyByteSizeLimit(this.maximumByteSize,n=>this._removeTileStorage(n))}getAttributesForTile(e){var t;return e?(t=this._tiles.get(e))==null?void 0:t.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(e,t,i){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,i)}_addTileStorage(e,t,i,s){const r=e.id;this._tiles.set(r,new Pt(e,t,i,s)),this._tileBounds.set(r,e.extent),this._tileFeatureCounts.set(r,t.size)}_remove({id:e}){const t=this._tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const s of e.objectIds)this._unreferenceFeature(s)===y.REMOVED&&t.push(s);this.featureStore.removeManyById(t);const i=e.data.id;this._tiles.delete(i),this._tileBounds.delete(i)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const t of this._tiles.values()){for(const i of e)t.objectIds.delete(i);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this._refCounts.delete(t)}async _processEditsRefetch(e,t,i){if(!e.length)return;const s=(await t(e,i)).features,{hasZ:r,hasM:n}=this.featureStore;for(const o of s){const h=dt(this._tmpBoundingRect,o.geometry,r,n);h!=null&&this._tileBounds.forEachInBounds(h,d=>{const p=this._tiles.get(d);this.featureStore.add(o);const f=o.objectId;p.objectIds.has(f)||(p.objectIds.add(f),this._referenceFeature(f),this._tileFeatureCounts.set(p.data.id,p.objectIds.size))})}}process(e,t=()=>!0,i){if(this.tileInfo==null||!e.extent||this.extent!=null&&!O(I(this.extent,this._tmpBoundingRect),e.extent))return new w(e);const s=this.getAttributesForTile(e.id);if(b(i,s))return new w(e);const r=this._createTileTree(e,this.tileInfo);return this._simplify(r,t,null,0,1),this._collectMissingTiles(e,r,this.tileInfo,i)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:e})=>({data:e,featureCount:this._tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){return this._tileFeatureCounts.get(e.id)??0}async fetchCount(e,t,i,s){const r=this._tileFeatureCounts.get(e.id);if(r!=null)return r;const n=await yt(t,i,s);return this._tileFeatureCounts.set(e.id,n.data.count),n.data.count}_createTileTree(e,t){const i=new B(e.level,e.row,e.col);return t.updateTileInfo(i,S.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(e.extent,s=>{var n;const r=(n=this._tiles.get(s))==null?void 0:n.data;r&&At(e,r)&&this._populateChildren(i,r,t,this._tileFeatureCounts.get(r.id)||0)}),i}_populateChildren(e,t,i,s){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,o=t.col>>r,h=e.row<<1,d=o-(e.col<<1)+(n-h<<1),p=e.children[d];if(p!=null)this._populateChildren(p,t,i,s);else{const f=new B(e.level+1,n,o);i.updateTileInfo(f,S.ExtrapolateOptions.POWER_OF_TWO),e.children[d]=f,this._populateChildren(f,t,i,s)}}_simplify(e,t,i,s,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),i!=null&&(i.children[s]=null),n);const o=r/2,h=o*o;let d=0;for(let p=0;p<e.children.length;p++){const f=e.children[p];d+=f!=null?this._simplify(f,t,e,p,o):h}return d===0?this._mergeChildren(e):1-d/n<Mt&&(this._purge(e),i!=null&&(i.children[s]=null),d=n),d}_mergeChildren(e){const t=new Set;let i,s=0;this._forEachLeaf(e,r=>{const n=this._tiles.get(r.id);if(n){i=i?D(i,n.attributeKeys):new Set(n.attributeKeys),s+=n.byteSize;for(const o of n.objectIds)t.has(o)||(t.add(o),this._referenceFeature(o));this._remove(r)}}),this._addTileStorage(e,t,s,i??new Set),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this._tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const i of e.children)i!=null&&(i.isLeaf?t(i):this._forEachLeaf(i,t))}_purge(e){if(e!=null)if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const i=e.children[t];this._purge(i),e.children[t]=null}}_collectMissingTiles(e,t,i,s){const r=new Dt(i,e,this.extent);return this._collectMissingTilesRecurse(t,r,1,s),r.info}_collectMissingTilesRecurse(e,t,i,s){const r=this.getAttributesForTile(e.id),n=r&&!b(s,r);if(n&&t.addMissing(e.level,e.row,e.col,i),e.isLeaf)return;if(!e.hasChildren)return void(n||t.addMissing(e.level,e.row,e.col,i));const o=i/2;for(let h=0;h<e.children.length;h++){const d=e.children[h];d==null?t.addMissing(e.level+1,(e.row<<1)+((2&h)>>1),(e.col<<1)+(1&h),o):this._collectMissingTilesRecurse(d,t,o,s)}}_referenceFeature(e){const t=(this._refCounts.get(e)||0)+1;return this._refCounts.set(e,t),t===1?y.ADDED:y.UNCHANGED}_unreferenceFeature(e){const t=(this._refCounts.get(e)||0)-1;return t===0?(this._refCounts.delete(e),y.REMOVED):(t>0&&this._refCounts.set(e,t),y.UNCHANGED)}get test(){}};function At(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const i=e.level<t.level,s=i?e:t,r=i?t:e,n=1<<r.level-s.level;return Math.floor(r.row/n)===s.row&&Math.floor(r.col/n)===s.col}function Ht(e){return e.reduce((t,i)=>t+Rt(i),0)}function Rt(e){return 32+xt(e.geometry)+it(e.attributes)}function xt(e){if(e==null)return 0;const t=M(e.lengths,4);return 32+M(e.coords,8)+t}l([u({constructOnly:!0})],m.prototype,"featureStore",void 0),l([u()],m.prototype,"tileInfo",void 0),l([u()],m.prototype,"extent",void 0),l([u()],m.prototype,"maximumByteSize",void 0),m=l([A("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],m);let Pt=class{constructor(t,i,s,r){this.data=t,this.objectIds=i,this.byteSize=s,this.attributeKeys=r}};class B{constructor(t,i,s){this.level=t,this.row=i,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}}let w=class{constructor(t,i=[]){this.missingTiles=i,this.fullArea=0,this.coveredArea=0,this.fullArea=J(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}},Dt=class{constructor(t,i,s){this._tileInfo=t,this._extent=null,this.info=new w(i),s!=null&&(this._extent=I(s))}addMissing(t,i,s,r){const n=new Et(null,t,i,s);this._tileInfo.updateTileInfo(n,S.ExtrapolateOptions.POWER_OF_TWO),n.extent==null||this._extent!=null&&!O(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=J(n.extent))}};const Mt=.18751;var y;(function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"})(y||(y={}));let F=class extends st.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=rt(),this._elevationAligner=U(),this._elevationFilter=z(),this._symbologyCandidatesFetcher=j(),this._updatingHandles=new V,this._alignPointsInFeatures=async(e,t)=>{const i={query:e},s=await this.remoteClient.invoke("alignElevation",i,{signal:t});return _(t),s},this._getSymbologyCandidates=async(e,t)=>{const i={candidates:e,spatialReference:this._spatialReference.toJSON()},s=await this.remoteClient.invoke("getSymbologyCandidates",i,{signal:t});return _(t),s}}get updating(){return this._isInitializing||this._updatingHandles.updating||this._featureFetcher.updating}destroy(){var e,t,i;(e=this._featureFetcher)==null||e.destroy(),(t=this._queryEngine)==null||t.destroy(),(i=this._featureStore)==null||i.clear()}async setup(e){if(this.destroyed)return{result:{}};const{geometryType:t,objectIdField:i,timeInfo:s,fieldsIndex:r}=e.serviceInfo,{hasZ:n}=e,o=E.fromJSON(e.spatialReference);this._spatialReference=o,this._featureStore=new at({...e.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new lt({spatialReference:e.spatialReference,featureStore:this._featureStore,geometryType:t,fieldsIndex:r,hasZ:n,hasM:!1,objectIdField:i,timeInfo:s}),this._featureFetcher=new c({store:new m({featureStore:this._featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:o,sourceSpatialReference:E.fromJSON(e.serviceInfo.spatialReference),customParameters:e.configuration.customParameters});const h=e.configuration.viewType==="3d";return this._elevationAligner=U(h,{elevationInfo:e.elevationInfo!=null?ut.fromJSON(e.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=z(h),this.addHandles([N(()=>this._featureFetcher.availability,d=>this.emit("notify-availability",{availability:d}),L),N(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(e),g}async setSuspended(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),this._featureFetcher.suspended=e,g}async updateOutFields(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),this._featureFetcher.outFields=new Set(e??[]),g}async fetchCandidates(e,t){await this._whenSetup.promise,_(t);const i=Nt(e),s=t==null?void 0:t.signal,r=await this._queryEngine.executeQueryForSnapping(i,s);_(s);const n=await this._elevationAligner.alignCandidates(r.candidates,E.fromJSON(e.point.spatialReference)??E.WGS84,s);_(s);const o=await this._symbologyCandidatesFetcher.fetch(n,s);_(s);const h=o.length===0?n:n.concat(o);return{result:{candidates:this._elevationFilter.filter(i,h)}}}async updateTiles(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),this._featureFetcher.tileSize=e.tileSize,this._featureFetcher.tilesOfInterest=e.tiles,this._featureFetcher.tileInfo=e.tileInfo!=null?S.fromJSON(e.tileInfo):null,g}async refresh(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),this._featureFetcher.refresh(),g}async whenNotUpdating(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),await nt(()=>!this.updating,t),_(t),g}async getDebugInfo(e,t){return _(t),{result:this._featureFetcher.debugInfo}}async handleEdits(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),await this._updatingHandles.addPromise(this._featureFetcher.handleEdits(e)),_(t),g}async setHistoricMoment(e,t){return this._featureFetcher.setHistoricMoment(e.moment),g}async notifyElevationSourceChange(e,t){return this._elevationAligner.notifyElevationSourceChange(),g}async notifySymbologyChange(e,t){return this._symbologyCandidatesFetcher.notifySymbologyChange(),g}async setSymbologySnappingSupported(e){return this._symbologyCandidatesFetcher=j(e,this._getSymbologyCandidates),g}_updateFeatureFetcherConfiguration(e){this._featureFetcher.filter=e.filter!=null?T.fromJSON(e.filter):null,this._featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};l([u({readOnly:!0})],F.prototype,"updating",null),l([u()],F.prototype,"_isInitializing",void 0),F=l([A("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],F);const $e=F;function Nt(e){if(!e.filter)return{...e,query:{where:"1=1"}};const{distance:t,units:i,spatialRel:s,where:r,timeExtent:n,objectIds:o}=e.filter,h={geometry:e.filter.geometry?ot(e.filter.geometry):void 0,distance:t,units:i,spatialRel:s,timeExtent:n,objectIds:o,where:r??"1=1"};return{...e,query:h}}const g={result:{}};export{$e as default};

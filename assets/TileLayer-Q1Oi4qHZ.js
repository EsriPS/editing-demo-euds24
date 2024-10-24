import{aH as _,b8 as v,aT as S,aR as c,fd as T,f6 as b,aO as u,a_ as w,F as s,G as a,W as O,Z as $,J as R,K as W}from"./index-C1aGfQcb.js";import{S as U}from"./MultiOriginJSONSupport-Qqzd52Lf.js";import{f as P}from"./Layer-CneDw8eF.js";import{i as j}from"./APIKeyMixin-BrvyKlIW.js";import{p as L}from"./ArcGISCachedService-Bpdcdkr7.js";import{m as A,f as B,t as I}from"./SublayersOwner-BbARfUxi.js";import{l as M}from"./ArcGISService-C1oUW8BT.js";import{l as N}from"./BlendLayer-CG9LFMxd.js";import{e as C}from"./CustomParametersMixin-BhjpsNjD.js";import{b as k}from"./OperationalLayer-nNeN4Mrb.js";import{j as D}from"./PortalLayer-Bqf_dhsv.js";import{f as J}from"./RefreshableLayer-CwxQNwd3.js";import{t as G}from"./ScaleRangeLayer-66YiyNPI.js";import{d as q,g as V,p as E}from"./arcgisLayerUrl-BkZy4Mr3.js";import{p as K}from"./commonProperties-Drl05DKJ.js";import{o as y}from"./imageBitmapUtils-BhEpTGy7.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./TileInfo-C4AYiz3R.js";import"./TileKey-DZd6gJy7.js";import"./TileInfoTilemapCache-BKEkkmOG.js";import"./TilemapCache-C4A9NFHl.js";import"./LRUCache-DbPTy7LA.js";import"./Version-DD-eRUXC.js";import"./portalItemUtils-Cy9KvMYK.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./CollectionFlattener-COw367kg.js";import"./UniqueValueRenderer-CAZbf8NT.js";import"./RendererLegendOptions-CULirduz.js";import"./diffUtils-DMLidw0V.js";import"./colorRamps-D4VCsfmX.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-dx28E4EQ.js";import"./lengthUtils-CFwdZ3dz.js";import"./jsonUtils-BWWcP_yB.js";import"./defaults-Dbnhuv3C.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-CEgUrR2a.js";import"./jsonUtils-CWFaUb2E.js";import"./FieldsIndex-BrdRr9E_.js";import"./UnknownTimeZone-DhxWDwo9.js";import"./OverrideHelper-D-UVQ00R.js";import"./colorUtils-BWiljOUv.js";import"./vec42-BHDxGccW.js";import"./vec4f64-o2zAXfmz.js";import"./utils-D7agaEG-.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-DbJV_fl5.js";import"./heatmapUtils-D0BPLm9w.js";import"./QueryTask-CRk94ntj.js";import"./infoFor3D-C0hFfS1m.js";import"./utils-DGPHbhMN.js";import"./executeForIds-B2TI_zu9.js";import"./query-c3x-72Af.js";import"./normalizeUtils-Bg1OALXh.js";import"./normalizeUtilsCommon-UUlRRPVA.js";import"./utils-ByvCMLXh.js";import"./pbfQueryUtils-zIR8yi_m.js";import"./pbf-B3ECgi3E.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-D-ZT69l7.js";import"./Query-LPs1Zyw4.js";import"./FullTextSearch-Cza0yp3f.js";import"./executeQueryJSON-Dy35kTJJ.js";import"./FeatureSet-CeKoTEEO.js";import"./featureConversionUtils-C-Uqf9Q4.js";import"./featureLayerUtils-Dy99w2fj.js";import"./FeatureType-JHO2oVJp.js";import"./FeatureTemplate-DJBXu3Te.js";import"./labelingInfo-BV0df7F6.js";import"./labelUtils-C_ZaLudT.js";import"./LayerFloorInfo-DzoJncEV.js";import"./Relationship-CBhq9gYu.js";import"./serviceCapabilitiesUtils-B23--4px.js";import"./popupUtils-BA1X4qoc.js";import"./sublayerUtils-C2scBnIk.js";import"./jsonUtils-n3e_wlfQ.js";import"./parser-C4Qiz3JH.js";import"./utils-sqJe3zMg.js";import"./ElevationInfo-D7CBP7sd.js";var d;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=d=class extends N(G(A(L(B(k(D(M(U(J(j(C(P)))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){var t;return(e=e||((t=r.tileInfo)==null?void 0:t.spatialReference))&&v.fromJSON(e)}writeSublayers(e,r,t,o){if(!this.loaded||!e)return;const n=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),p=[],m={writeSublayerStructure:!1,...o};n.forEach(l=>{const h=l.write({},m);p.push(h)}),p.some(l=>Object.keys(l).length>1)&&(r.layers=p)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>S(r).path):null}fetchTile(e,r,t,o={}){const{signal:n}=o,p=this.getTileUrl(e,r,t),m={responseType:"image",signal:n,query:{...this.refreshParameters}};return c(p,m).then(l=>l.data)}async fetchImageBitmapTile(e,r,t,o={}){const{signal:n}=o;if(this.fetchTile!==d.prototype.fetchTile){const h=await this.fetchTile(e,r,t,o);return y(h,e,r,t,n)}const p=this.getTileUrl(e,r,t),m={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:l}=await c(p,m);return y(l,e,r,t,n)}getTileUrl(e,r,t){var m,l;const o=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,n=T({...(m=this.parsedUrl)==null?void 0:m.query,blankTile:!o&&null,...this.customParameters,token:this.apiKey}),p=this.tileServers;return`${p&&p.length?p[r%p.length]:(l=this.parsedUrl)==null?void 0:l.path}/tile/${e}/${r}/${t}${n?"?"+n:""}`}loadAll(){return b(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new u("tile-layer:undefined-url","layer's url is not defined");const o=q(this.parsedUrl.path);if(o!=null&&o.serverType==="ImageServer")throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");c(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!V(t))return this._fetchServerVersion(t,e).then(o=>{this.read({currentVersion:o})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!E(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return c(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(o=>{if(o.data&&o.data.currentVersion)return o.data.currentVersion;throw new u("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,o=f.length;t<o;t++)if(r=f[t],r.toLowerCase().includes(e))return w("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};s([a({readOnly:!0})],i.prototype,"attributionDataUrl",null),s([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),s([a({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),s([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),s([a({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([a({type:Boolean})],i.prototype,"resampling",void 0),s([a()],i.prototype,"sourceJSON",void 0),s([a({type:v})],i.prototype,"spatialReference",void 0),s([O("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([a({readOnly:!0})],i.prototype,"sublayers",void 0),s([$("sublayers",{layers:{type:[I]}})],i.prototype,"writeSublayers",null),s([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),s([a()],i.prototype,"tileServers",null),s([R("tileServers")],i.prototype,"castTileServers",null),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),s([a(K)],i.prototype,"url",void 0),i=d=s([W("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const Tr=i;export{Tr as default};

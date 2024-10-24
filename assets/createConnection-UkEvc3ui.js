const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FeatureLayer-DGRhhm0K.js","assets/index-C1aGfQcb.js","assets/index-qkyhuh7d.css","assets/UniqueValueRenderer-CAZbf8NT.js","assets/RendererLegendOptions-CULirduz.js","assets/diffUtils-DMLidw0V.js","assets/colorRamps-D4VCsfmX.js","assets/sizeVariableUtils-Cmcuvw-4.js","assets/visualVariableUtils-dx28E4EQ.js","assets/lengthUtils-CFwdZ3dz.js","assets/jsonUtils-BWWcP_yB.js","assets/defaults-Dbnhuv3C.js","assets/defaultsJSON-GKolV7NZ.js","assets/styleUtils-CEgUrR2a.js","assets/jsonUtils-CWFaUb2E.js","assets/LRUCache-DbPTy7LA.js","assets/Version-DD-eRUXC.js","assets/FieldsIndex-BrdRr9E_.js","assets/UnknownTimeZone-DhxWDwo9.js","assets/OverrideHelper-D-UVQ00R.js","assets/colorUtils-BWiljOUv.js","assets/vec42-BHDxGccW.js","assets/vec4f64-o2zAXfmz.js","assets/utils-D7agaEG-.js","assets/enums-CmIX1y88.js","assets/quantizationUtils-DbJV_fl5.js","assets/heatmapUtils-D0BPLm9w.js","assets/MultiOriginJSONSupport-Qqzd52Lf.js","assets/commonProperties-Drl05DKJ.js","assets/ElevationInfo-D7CBP7sd.js","assets/FeatureLayerBase-BNIuOgAL.js","assets/HeightModelInfo-kVs8dE0B.js","assets/arcgisLayerUrl-BkZy4Mr3.js","assets/featureLayerUtils-Dy99w2fj.js","assets/Query-LPs1Zyw4.js","assets/FullTextSearch-Cza0yp3f.js","assets/TimeExtent-DGiXUfis.js","assets/timeUtils-X0MXjtQ8.js","assets/LayerFloorInfo-DzoJncEV.js","assets/Relationship-CBhq9gYu.js","assets/serviceCapabilitiesUtils-B23--4px.js","assets/Layer-CneDw8eF.js","assets/workers-CeelWDzo.js","assets/editsZScale-8GE3gysf.js","assets/queryZScale-D-ZT69l7.js","assets/projection-BOBOhWzm.js","assets/projectBuffer-CZ7yaGuo.js","assets/FeatureSet-CeKoTEEO.js","assets/APIKeyMixin-BrvyKlIW.js","assets/ArcGISService-C1oUW8BT.js","assets/BlendLayer-CG9LFMxd.js","assets/jsonUtils-n3e_wlfQ.js","assets/parser-C4Qiz3JH.js","assets/utils-sqJe3zMg.js","assets/CustomParametersMixin-BhjpsNjD.js","assets/EditBusLayer-DCXZWvgn.js","assets/FeatureEffectLayer-gWJrS8gr.js","assets/FeatureEffect-B5YAe6Lk.js","assets/FeatureReductionLayer-DuxcLofN.js","assets/FeatureReductionSelection-tRCh97wj.js","assets/labelingInfo-BV0df7F6.js","assets/labelUtils-C_ZaLudT.js","assets/MD5-C9MwAd2G.js","assets/OperationalLayer-nNeN4Mrb.js","assets/OrderedLayer-B8Gw_A9P.js","assets/OrderByInfo-k2G4k_zV.js","assets/PortalLayer-Bqf_dhsv.js","assets/portalItemUtils-Cy9KvMYK.js","assets/RefreshableLayer-CwxQNwd3.js","assets/ScaleRangeLayer-66YiyNPI.js","assets/TemporalLayer-CR5q7V2k.js","assets/TimeInfo-CY1-cj-U.js","assets/FeatureTemplate-DJBXu3Te.js","assets/FeatureType-JHO2oVJp.js","assets/fieldProperties-CoDAhoou.js","assets/versionUtils-DBm9Te4x.js","assets/styleUtils-CFywnZa6.js","assets/popupUtils-BA1X4qoc.js","assets/AlphaCutoff-UcccL64p.js","assets/interfaces-CL2NbQte.js"])))=>i.map(i=>d[i]);
import{di as O,aO as c,F as d,G as p,K as S,dR as v,aA as a,fW as N,cf as F,aR as E,b9 as x,aE as P,b8 as $}from"./index-C1aGfQcb.js";import{o as C}from"./projection-BOBOhWzm.js";import{c as k}from"./query-c3x-72Af.js";import{b as W}from"./Query-LPs1Zyw4.js";import"./projectBuffer-CZ7yaGuo.js";import"./normalizeUtils-Bg1OALXh.js";import"./normalizeUtilsCommon-UUlRRPVA.js";import"./utils-DGPHbhMN.js";import"./utils-ByvCMLXh.js";import"./pbfQueryUtils-zIR8yi_m.js";import"./pbf-B3ECgi3E.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-D-ZT69l7.js";import"./FullTextSearch-Cza0yp3f.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";let w=class extends O.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new c("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};d([p({readOnly:!0})],w.prototype,"connectionError",null),w=d([S("esri.layers.support.StreamConnection")],w);const R=w;var g;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(g||(g={}));let f=class extends R{constructor(t){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:r,spatialReference:o,sourceSpatialReference:s}=t;this._config=t,this._featureZScaler=C(r,s,o),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),this._websocket!=null&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(this._websocket==null)return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}sendMessageToSocket(t){this._websocket!=null?this._websocket.send(JSON.stringify(t)):this._outstandingMessages.push(t)}sendMessageToClient(t){this._onMessage(t)}updateCustomParameters(t){this._config.customParameters=t,this._websocket!=null&&this._websocket.close()}async _tryCreateWebSocket(t=this._config.source.path,r=1e3,o=0){try{if(this.destroyed)return;const s=v(t,this._config.customParameters??{});this._websocket=await this._createWebSocket(s),this.notifyChange("connectionStatus")}catch(s){const n=r/1e3;return this._config.maxReconnectionAttempts&&o>=this._config.maxReconnectionAttempts?(a.getLogger(this).error(new c("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(a.getLogger(this).error(new c("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,s)),await N(r),this._tryCreateWebSocket(t,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),o+1))}}_setWebSocketJSONParseHandler(t){t.onmessage=r=>{try{const o=JSON.parse(r.data);this._onMessage(o)}catch(o){return void a.getLogger(this).error(new c("websocket-connection","Failed to parse message, invalid JSON",{error:o}))}}}_createWebSocket(t){return new Promise((r,o)=>{const s=new WebSocket(t);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=n=>this._onClose(n),s.onerror=n=>this._onError(n),this._setWebSocketJSONParseHandler(s),r(s)},s.onclose=n=>{s.onopen=s.onclose=null,o(n)}})}async _handshake(t=1e4){const r=this._websocket;if(r==null)return;const o=F(),s=r.onmessage,{filter:n,outFields:u,spatialReference:l}=this._config;return o.timeout(t),r.onmessage=h=>{var m;let i=null;try{i=JSON.parse(h.data)}catch{}i&&typeof i=="object"||(a.getLogger(this).error(new c("websocket-connection","Protocol violation. Handshake failed - malformed message",h.data)),o.reject(),this.destroy()),((m=i.spatialReference)==null?void 0:m.wkid)!==(l==null?void 0:l.wkid)&&(a.getLogger(this).error(new c("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,h.data)),o.reject(),this.destroy()),i.format!=="json"&&(a.getLogger(this).error(new c("websocket-connection","Protocol violation. Handshake failed - format is not set",h.data)),o.reject(),this.destroy()),n&&i.filter!==n&&a.getLogger(this).error(new c("websocket-connection","Tried to set filter, but server doesn't support it")),u&&i.outFields!==u&&a.getLogger(this).error(new c("websocket-connection","Tried to set outFields, but server doesn't support it")),r.onmessage=s;for(const _ of this._outstandingMessages)r.send(JSON.stringify(_));this._outstandingMessages=[],o.resolve()},r.send(JSON.stringify({filter:n,outFields:u,format:"json",spatialReference:{wkid:l.wkid}})),o.promise}_onMessage(t){if(this.onMessage(t),"type"in t)switch(t.type){case"features":case"featureResult":for(const r of t.features)this._featureZScaler!=null&&this._featureZScaler(r.geometry),this.onFeature(r)}}_onError(t){const r="Encountered an error over WebSocket connection";this._set("errorString",r),a.getLogger(this).error("websocket-connection",r)}_onClose(t){this._websocket=null,this.notifyChange("connectionStatus"),t.code!==1e3&&a.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${t.code}`),this.destroyed||this._open()}};d([p()],f.prototype,"connectionStatus",null),d([p()],f.prototype,"errorString",void 0),f=d([S("esri.layers.graphics.sources.connections.WebSocketConnection")],f);const M=1e4,T={maxQueryDepth:5,maxRecordCountFactor:3};let b=class extends f{constructor(e){super({...T,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||a.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),this._featureZScaler!=null&&this._featureZScaler(t.geometry)}catch(r){return void a.getLogger(this).error(new c("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=E(e.path,{query:t,responseType:"json"}),o=(await r).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:o,token:s}=r,n=this._inferWebSocketBaseUrl(o);return v(`${n}/subscribe`,{outSR:""+t.wkid,token:s})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return a.getLogger(this).error(new c("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(r==null||e==null&&t==null)return;const o=JSON.stringify({filter:this._serializeFilter(e,t)});let s=!1;const n=F(),u=()=>{s||(this.destroyed||this._websocket!==r||a.getLogger(this).error(new c("geoevent-connection","Server timed out when setting filter")),n.reject())},l=h=>{const i=JSON.parse(h.data);i.filter&&(i.error&&(a.getLogger(this).error(new c("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),this._setWebSocketJSONParseHandler(r),s=!0,n.resolve())};return r.onmessage=l,r.send(o),setTimeout(u,M),n.promise}_serializeFilter(e,t){const r={};if(e==null&&t==null)return r;if(e!=null&&e.geometry)try{const o=x(e.geometry);if(o.type!=="extent")throw new c(`Expected extent but found type ${o.type}`);r.geometry=JSON.stringify(o.shiftCentralMeridian())}catch(o){a.getLogger(this).error(new c("geoevent-connection","Encountered an error when setting connection geometryDefinition",o))}return e!=null&&e.where&&e.where!=="1 = 1"&&e.where!=="1=1"&&(r.where=e.where),t!=null&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],o=this._relatedFeatures.get(r);if(!o)return a.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:s,geometry:n}=o;for(const u in s)e.attributes[u]=s[u];return n&&(e.geometry=n),e.geometry||e.centroid||a.getLogger(this).error(new c("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),o=this._queryArchive(t);await r;const s=await o;if(!s)return;for(const n of s.features)this.onFeature(this._enrich(n))}catch(e){a.getLogger(this).error(new c("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){var _;const t=new(await P(async()=>{const{default:L}=await import("./FeatureLayer-DGRhhm0K.js");return{default:L}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79]))).default({url:e}),{capabilities:r}=await t.load(),o=r.query.supportsMaxRecordCountFactor,s=r.query.supportsPagination,n=r.query.supportsCentroid,u=this._config.maxRecordCountFactor,l=t.capabilities.query.maxRecordCount,h=o?l*u:l,i=new W;if(i.outFields=this._config.outFields??["*"],i.where=((_=this._config.filter)==null?void 0:_.where)??"1=1",i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=$.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),o&&(i.maxRecordCountFactor=u),s)return i.num=h,t.destroy(),this._queryPages(e,i);const m=await k(e,i,this._config.sourceSpatialReference);return t.destroy(),m.data}async _queryPages(e,t,r=[],o=0){t.start=t.num!=null?o*t.num:null;const{data:s}=await k(e,t,this._config.sourceSpatialReference);return s.exceededTransferLimit&&o<(this._config.maxQueryDepth??0)?(s.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,o+1)):(r.forEach(n=>s.features.push(n)),s)}_addRelatedFeatures(e){const t=new Map,r=e.features,o=this._serviceDefinition.relatedFeatures.joinField;for(const s of r){const n=s.attributes[o];t.set(n,s)}this._relatedFeatures=t}};b=d([S("esri.layers.graphics.sources.connections.GeoEventConnection")],b);const q=b;let y=class extends R{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:o}=e;this._featureZScaler=C(t,o,r)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)this._featureZScaler!=null&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};d([p()],y.prototype,"connectionStatus",void 0),d([p()],y.prototype,"errorString",void 0),y=d([S("esri.layers.support.ClientSideConnection")],y);function j(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t),e!=null&&(r.where=e),r}function se(e,t,r,o,s,n,u,l,h){const i={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:o,filter:j(s,n),maxReconnectionAttempts:u,maxReconnectionInterval:l,customParameters:h};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new f(i):new q(i):new y(i)}export{se as createConnection};
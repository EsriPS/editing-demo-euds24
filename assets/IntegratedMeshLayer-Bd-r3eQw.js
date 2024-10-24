import{F as i,G as a,dT as _,Z as I,K as u,ay as x,b5 as L,ba as b,f0 as N,br as R,aT as M,aR as A,c8 as J,f4 as j,aH as V,aO as d,aA as S,W as $,c5 as D}from"./index-C1aGfQcb.js";import{S as E}from"./MultiOriginJSONSupport-Qqzd52Lf.js";import{j as f}from"./persistable-yoZGtoc7.js";import{f as K}from"./Layer-CneDw8eF.js";import{i as P}from"./APIKeyMixin-BrvyKlIW.js";import{l as U}from"./ArcGISService-C1oUW8BT.js";import{e as C}from"./CustomParametersMixin-BhjpsNjD.js";import{b as G}from"./OperationalLayer-nNeN4Mrb.js";import{j as z}from"./PortalLayer-Bqf_dhsv.js";import{t as F}from"./ScaleRangeLayer-66YiyNPI.js";import{L as H,C as w}from"./SceneService-tbJ_TnSP.js";import{d as Z}from"./commonProperties-Drl05DKJ.js";import{p as k,a as q,y as W,m as B}from"./I3SLayerDefinitions-DWT2n1SP.js";import{J as Q,a as X}from"./projection-BOBOhWzm.js";import{$ as T,Z as Y,w as ee}from"./elevationInfoUtils-DQT3uSQq.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-D0H_LB-z.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./arcgisLayerUrl-BkZy4Mr3.js";import"./portalItemUtils-Cy9KvMYK.js";import"./saveAPIKeyUtils-BWiJCGqJ.js";import"./HeightModelInfo-kVs8dE0B.js";import"./jsonContext-DJAfzMqt.js";import"./resourceUtils-B3ZPv4ml.js";import"./resourceUtils-CZ2sBo5I.js";import"./saveUtils-DXB-y_0Z.js";import"./ElevationInfo-D7CBP7sd.js";import"./lengthUtils-CFwdZ3dz.js";import"./projectBuffer-CZ7yaGuo.js";var h;let n=h=class extends x{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){var l;if((l=r.layer)!=null&&l.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Q(e.spatialReference,r.layer.spatialReference))return void((r==null?void 0:r.messages)&&r.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const y=new _;X(e,y,r.layer.spatialReference),t[o]=y.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new h({geometry:b(this.geometry),type:this.type})}};i([a({type:_}),f()],n.prototype,"geometry",void 0),i([I(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([a({type:["clip","mask","replace"],nonNullable:!0}),f()],n.prototype,"type",void 0),n=h=i([u("esri.layers.support.SceneModification")],n);const c=n;var p;let m=p=class extends N(R.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const o=new p;for(const r of e)o.add(c.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:M(e),origin:"service"},l=await A(e,{responseType:"json",signal:o==null?void 0:o.signal}),y=t.toJSON(),g=[];for(const v of l.data)g.push(c.fromJSON({...v,geometry:{...v.geometry,spatialReference:y}},r));return new p({url:e,items:g})}};i([a({type:String})],m.prototype,"url",void 0),m=p=i([u("esri.layers.support.SceneModifications")],m);const O=m;let s=class extends H(U(G(z(F(E(C(P(K)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles(J(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,D))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:j(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){V(o)}if(await this._fetchService(t),this._modificationsSource!=null){const o=await O.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(w.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";T(S.getLogger(this),Y(t,"absolute-height",e)),T(S.getLogger(this),ee(t,e))}};i([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),i([a({type:["show","hide"]})],s.prototype,"listMode",void 0),i([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([a({type:k,readOnly:!0})],s.prototype,"nodePages",void 0),i([a({type:[q],readOnly:!0})],s.prototype,"materialDefinitions",void 0),i([a({type:[W],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),i([a({type:[B],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),i([a({type:O}),f({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),i([$(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),i([a(Z)],s.prototype,"elevationInfo",null),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=i([u("esri.layers.IntegratedMeshLayer")],s);const Je=s;export{Je as default};
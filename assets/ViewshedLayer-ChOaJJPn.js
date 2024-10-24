import{f0 as J,gW as G,F as t,G as r,cS as H,J as B,hB as b,hC as K,K as j,hD as U,br as A,er as W,M as L,gw as P,eq as X,cu as Z,da as E,bq as q,Z as k}from"./index-C1aGfQcb.js";import{c as I,b as Q}from"./featureReferenceUtils-wFdTcxUq.js";import{c as Y}from"./Analysis-C2qypFIS.js";import{X as ee}from"./projection-BOBOhWzm.js";import{S as te}from"./MultiOriginJSONSupport-Qqzd52Lf.js";import{f as ie}from"./Layer-CneDw8eF.js";import{b as re}from"./OperationalLayer-nNeN4Mrb.js";import"./vec32-CmwgPQMd.js";import"./sphere-DuEd_sPX.js";import"./vec42-BHDxGccW.js";import"./vec4f64-o2zAXfmz.js";import"./mat3-Dg2BrR6m.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-CM4t6fNH.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./vec2f64-CCfZVA9N.js";import"./IntersectorInterfaces-BgX4KEwK.js";import"./boundedPlane-C18Ysvcq.js";import"./lineSegment-C6H8qMyL.js";import"./projectBuffer-CZ7yaGuo.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./commonProperties-Drl05DKJ.js";import"./ElevationInfo-D7CBP7sd.js";import"./lengthUtils-CFwdZ3dz.js";let a=class extends J(U){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return G(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&I(this.feature,e.feature)}};t([r({type:H,json:{write:!0}})],a.prototype,"observer",void 0),t([r({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],a.prototype,"farDistance",void 0),t([r({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),B(i=>b.normalize(K(i),void 0,!0))],a.prototype,"heading",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"tilt",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],a.prototype,"horizontalFieldOfView",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"verticalFieldOfView",void 0),t([r(Q)],a.prototype,"feature",void 0),t([r({json:{read:!1}})],a.prototype,"isValid",null),a=t([j("esri.analysis.Viewshed")],a);const S=a,F=A.ofType(S);let p=class extends Y{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(L(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},P))}get viewsheds(){return this._get("viewsheds")||new F}set viewsheds(e){this._set("viewsheds",X(e,this.viewsheds,F))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const u=this.viewsheds.filter(s=>s.observer!=null),m=u.map(s=>s.observer).toArray(),o=ee(m,e);return o.pending!=null?{pending:o.pending,extent:null}:{pending:null,extent:o.geometries.map((s,d)=>{const V=u.at(d);return s!=null&&V!=null?this._computeViewshedExtent(this.viewsheds.at(d),s):null}).filter(s=>s!=null).reduce((s,d)=>se(s,d),null)}}_computeViewshedExtent(e,u){const{farDistance:m,heading:o,tilt:s,horizontalFieldOfView:d,verticalFieldOfView:V}=e,{spatialReference:v}=u,O=d/2,$=V/2,z=m/v.metersPerUnit,T=[b.normalize(o-O),o,b.normalize(o+O)],h=Z.fromPoint(u),g=f=>{const c=T.map(l=>b.normalize(l-f));if(c[0]>c[2]||d===360)return z;const y=c.map(l=>Math.abs(l>180?360-l:l)).reduce((l,x)=>l>x?x:l);return y>90?0:z*Math.cos(E(y))};h.xmax+=g(90),h.xmin-=g(-90),h.ymax+=g(0),h.ymin-=g(180);const w=u.z;if(w!=null){let f=w,c=w;const y=s-90,l=q(y+$,-90,90),x=q(y-$,-90,90),N=v!=null&&v.isGeographic?m:z;f+=N*R(l),c+=N*R(x);const C=M($)*N,_=R(y)*C*(1-M(O));s<90&&(f-=_),s>90&&(c-=_),h.zmax=Math.max(f,w),h.zmin=Math.min(c,w)}return h}clear(){this.viewsheds.removeAll()}};function se(i,e){return i==null?e:e==null?i:i.union(e)}function M(i){return Math.cos(E(i))}function R(i){return Math.sin(E(i))}t([r({type:["viewshed"]})],p.prototype,"type",void 0),t([r({cast:W,type:F,nonNullable:!0})],p.prototype,"viewsheds",null),t([r({readOnly:!0})],p.prototype,"spatialReference",null),t([r()],p.prototype,"_extent",void 0),t([r({readOnly:!0})],p.prototype,"extent",null),t([r({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([j("esri.analysis.ViewshedAnalysis")],p);const D=p;let n=class extends re(te(ie)){constructor(i){super(i),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new D,this.opacity=1}initialize(){this.addHandles(L(()=>this.source,(i,e)=>{e!=null&&e.parent===this&&(e.parent=null),i!=null&&(i.parent=this)},P))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(i){this.source===i&&(this.source=new D)}get analysis(){return this.source}set analysis(i){this.source=i}get viewsheds(){return this.source.viewsheds}set viewsheds(i){this.source.viewsheds=i}writeViewsheds(i,e,u,m){e.viewsheds=i.filter(o=>o.isValid()).map(o=>o.toJSON(m)).toJSON()}};t([r({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([r({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),t([r({nonNullable:!0})],n.prototype,"source",void 0),t([r({readOnly:!0})],n.prototype,"spatialReference",null),t([r({readOnly:!0})],n.prototype,"fullExtent",null),t([r({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([r({type:["show","hide"]})],n.prototype,"listMode",void 0),t([r({type:A.ofType(S),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),t([k("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=t([j("esri.layers.ViewshedLayer")],n);const Me=n;export{Me as default};

import{ca as a,F as t,G as n,K as p,aO as l}from"./index-C1aGfQcb.js";import{S as y}from"./MultiOriginJSONSupport-Qqzd52Lf.js";import{f as u}from"./Layer-CneDw8eF.js";import{j as m}from"./PortalLayer-Bqf_dhsv.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./portalItemUtils-Cy9KvMYK.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";let e=class extends m(y(u)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,o)=>{a(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let i="Unknown layer type";s&&(i+=" "+s),o(new l("layer:unknown-layer-type",i,{layerType:s}))})}))}read(r,o){super.read({resourceInfo:r},o)}write(r,o){return null}};t([n({readOnly:!0})],e.prototype,"resourceInfo",void 0),t([n({type:["show","hide"]})],e.prototype,"listMode",void 0),t([n({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=t([p("esri.layers.UnknownLayer")],e);const j=e;export{j as default};

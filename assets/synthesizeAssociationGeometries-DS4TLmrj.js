import{F as r,G as n,K as u,ay as y,aR as d}from"./index-C1aGfQcb.js";import{f as h,s as l,i as x}from"./utils-DGPHbhMN.js";import{d as G}from"./Association-9oLXcAwM.js";import"./NetworkElement-DcX2nInJ.js";let i=class extends y{constructor(e){super(e),this.maxGeometryCountExceeded=!1,this.associations=[]}};r([n({type:Boolean,json:{write:!0}})],i.prototype,"maxGeometryCountExceeded",void 0),r([n({type:[G],json:{write:!0}})],i.prototype,"associations",void 0),i=r([u("esri.rest.networks.support.AssociationGeometriesResult")],i);const $=i;async function g(e,t,o){const s=h(e),a={...t.toJSON(),f:"json"},c=l({...s.query,...a});o?o.method="post":o={method:"post"};const p=x(c,o),m=`${s.path}/synthesizeAssociationGeometries`;return d(m,p).then(f=>R(f,t.outSpatialReference))}function R(e,t){const{data:o}=e;if(t)for(const s of o.associations)s.geometry.spatialReference||(s.geometry.spatialReference=t.clone());return $.fromJSON(o)}export{g as synthesizeAssociationGeometries};
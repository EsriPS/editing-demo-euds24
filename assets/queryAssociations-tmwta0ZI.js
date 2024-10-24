import{F as a,G as l,K as y,ay as d,aR as f,gp as g,aA as v}from"./index-C1aGfQcb.js";import{i as $}from"./NetworkElement-DcX2nInJ.js";import{f as w,s as j,i as S}from"./utils-DGPHbhMN.js";import{d as A}from"./Association-9oLXcAwM.js";let r=class extends d{constructor(e){super(e),this.associations=[]}};a([l({type:[A],json:{write:!0}})],r.prototype,"associations",void 0),r=a([y("esri.rest.networks.support.QueryAssociationsResult")],r);const I=r;function J(s){const{returnDeletes:e,elements:n,gdbVersion:o,moment:i}=s.toJSON();return{returnDeletes:e,elements:JSON.stringify(n.map(t=>({globalId:t.globalId,networkSourceId:t.networkSourceId,terminalId:t.terminalId}))),types:JSON.stringify(s.types.map(t=>$.toJSON(t))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:o,moment:i}}async function q(s,e,n){const o=w(s),i={...J(e),f:"json"},t=j({...o.query,...i}),c=S(t,{...n,method:"post"}),p=`${o.path}/associations/query`,{data:u}=await f(p,c),m=I.fromJSON(u);return e.types.includes("connectivity")&&g(v.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),m}export{q as queryAssociations};

import{fe as u,ff as h,aR as p}from"./index-C1aGfQcb.js";import{t as d}from"./query-c3x-72Af.js";import{a as l}from"./AttachmentInfo-Cg9fIPGU.js";import"./normalizeUtils-Bg1OALXh.js";import"./normalizeUtilsCommon-UUlRRPVA.js";import"./utils-DGPHbhMN.js";import"./utils-ByvCMLXh.js";import"./pbfQueryUtils-zIR8yi_m.js";import"./pbf-B3ECgi3E.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-D-ZT69l7.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function J(n,t){const o={};for(const a of t){const{parentObjectId:e,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:i}=r,f=u(h(`${n.path}/${e}/attachments/${i}`)),m=l.fromJSON(r);m.set({url:f,parentObjectId:e,parentGlobalId:s}),o[e]?o[e].push(m):o[e]=[m]}}return o}function N(n,t,o){let a={query:d({...n.query,f:"json",...y(t)})};return o&&(a={...o,...a,query:{...o.query,...a.query}}),p(n.path+"/queryAttachments",a).then(e=>e.data.attachmentGroups)}async function Q(n,t,o){const{objectIds:a}=t,e=[];for(const s of a)e.push(p(n.path+"/"+s+"/attachments",o));return Promise.all(e).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{N as executeAttachmentQuery,Q as fetchAttachments,J as processAttachmentQueryResult};
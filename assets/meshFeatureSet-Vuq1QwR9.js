import{b8 as h,b6 as y,cu as S,bH as l,aA as g}from"./index-C1aGfQcb.js";import{$ as E}from"./Mesh-B5zdbXJx.js";import{i as N,a as M}from"./External-BqB6mKNo.js";import{s as D}from"./infoFor3D-C0hFfS1m.js";import{d as F}from"./FeatureSet-CeKoTEEO.js";import{n as T,i as b}from"./meshFeatureAttributes-CPkebRY9.js";import"./axisAngleDegrees-C6bqw-Uy.js";import"./quat-D8-cBF-l.js";import"./mat3f64-q3fE-ZOt.js";import"./quatf64-aQ5IuZRd.js";import"./vec32-CmwgPQMd.js";import"./vec42-BHDxGccW.js";import"./MeshComponent-BmZM73mz.js";import"./imageUtils-DpI9AOR9.js";import"./meshProperties-C4iW0Ukm.js";import"./MeshLocalVertexSpace-sgg6_SW2.js";import"./MeshTransform-CQofocAh.js";import"./mat4f64-Dk4dwAN8.js";import"./MeshVertexAttributes-QRxk1PRg.js";import"./meshVertexSpaceUtils-D5F-abOR.js";import"./triangulationUtils-ss0xSAA3.js";import"./earcut-Lltz9D9k.js";import"./Indices-NXfq_dEG.js";import"./plane-CM4t6fNH.js";import"./vec2f64-CCfZVA9N.js";import"./vec4f64-o2zAXfmz.js";import"./deduplicate-Dq2CF0iu.js";import"./projectPointToVector-ByIVLKML.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./vertexSpaceConversion-BLEc1NbH.js";import"./mat3-Dg2BrR6m.js";import"./spatialReferenceEllipsoidUtils-BEJMNM9o.js";import"./computeTranslationToOriginAndRotation-C2_ZYUki.js";import"./vec3-C734WYsa.js";import"./BufferView-sBvw8vqP.js";import"./vec2-D9okOEat.js";import"./vec4-qgGorNMJ.js";const w=()=>g.getLogger("esri.rest.support.meshFeatureSet");function ht(t,o,r){const e=r.features;r.features=[],delete r.geometryType;const s=F.fromJSON(r);if(s.geometryType="mesh",!r.assetMaps)return s;const n=O(o,r.assetMaps),a=t.sourceSpatialReference??h.WGS84,u=r.globalIdFieldName,{outFields:i}=t,f=i!=null&&i.length>0?I(i.includes("*")?null:new Set(i)):()=>({});for(const m of e){const p=L(m,u,a,o,n);s.features.push(new y({geometry:p,attributes:f(m)}))}return s}function I(t){return({attributes:o})=>{if(!o)return{};if(!t)return o;for(const r in o)t.has(r)||delete o[r];return o}}function L(t,o,r,e,s){const n=t.attributes[o],a=s.get(n);if(a==null||!t.geometry)return null;const u=T(t.attributes,r,e.transformFieldRoles),i=S.fromJSON(t.geometry);i.spatialReference=r;const f=b(t.attributes,e.transformFieldRoles),m=r.isGeographic?"local":"georeferenced",p=P(a);return p?E.createWithExternalSource(u,p,{extent:i,transform:f,vertexSpace:m}):E.createIncomplete(u,{extent:i,transform:f,vertexSpace:m})}var c;function O(t,o){const r=new Map;for(const e of o){const s=e.parentGlobalId;if(s==null)continue;const n=e.assetName,a=e.assetType,u=e.assetHash,i=e.assetURL,f=e.conversionStatus,m=e.seqNo,p=D(a,t.supportedFormats);if(!p){w().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${a}, but it does not list it as a supported type`);continue}const d=l(r,s,()=>({files:new Map}));l(d.files,n,()=>({name:n,type:a,mimeType:p,status:$(f),parts:[]})).parts[m]={hash:u,url:i}}return r}function P(t){const o=Array.from(t.files.values()),r=new Array;for(const e of o){if(e.status!==c.COMPLETED)return null;const s=new Array;for(const n of e.parts){if(!n)return null;s.push(new N(n.url,n.hash))}r.push(new M(e.name,e.mimeType,s))}return r}function $(t){switch(t){case"COMPLETED":case"SUBMITTED":return c.COMPLETED;case"INPROGRESS":return c.PENDING;default:return c.FAILED}}(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(c||(c={}));export{O as assetMapFromAssetMapsJSON,L as extractMesh,ht as meshFeatureSetFromJSON};

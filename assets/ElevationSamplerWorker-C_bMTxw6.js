import{b3 as f}from"./index-C1aGfQcb.js";import{h as p}from"./PooledRBush-D_zSRdWq.js";import{b as u}from"./MeshLocalVertexSpace-sgg6_SW2.js";import{B as l}from"./vertexSpaceConversion-BLEc1NbH.js";import"./quickselect-QQC62dOK.js";import"./mat3-Dg2BrR6m.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./vec32-CmwgPQMd.js";import"./spatialReferenceEllipsoidUtils-BEJMNM9o.js";import"./computeTranslationToOriginAndRotation-C2_ZYUki.js";import"./projectBuffer-CZ7yaGuo.js";import"./projectPointToVector-ByIVLKML.js";import"./projection-BOBOhWzm.js";import"./meshVertexSpaceUtils-D5F-abOR.js";import"./vec3-C734WYsa.js";import"./BufferView-sBvw8vqP.js";import"./vec2-D9okOEat.js";import"./vec42-BHDxGccW.js";import"./vec4-qgGorNMJ.js";class U{async createIndex(o,r){var e;const n=new Array;if(!((e=o.vertexAttributes)!=null&&e.position))return new p;const i=d(o),a=r!=null?await r.invoke("createIndexThread",i,{transferList:n}):this.createIndexThread(i).result;return m().fromJSON(a)}createIndexThread(o){const r=m();if(!o)return{result:r.toJSON()};const n=new Float64Array(o.position);return o.components?h(r,n,o.components.map(i=>new Uint32Array(i))):x(r,n)}}function x(t,o){const r=new Array(o.length/9);let n=0;for(let i=0;i<o.length;i+=9)r[n++]=c(o,i,i+3,i+6);return t.load(r),{result:t.toJSON()}}function h(t,o,r){let n=0;for(const e of r)n+=e.length/3;const i=new Array(n);let a=0;for(const e of r)for(let s=0;s<e.length;s+=3)i[a++]=c(o,3*e[s],3*e[s+1],3*e[s+2]);return t.load(i),{result:t.toJSON()}}function d(t){var e;const{vertexAttributes:{position:o},vertexSpace:r,spatialReference:n,transform:i}=t,a=(e=l({vertexAttributes:{position:o},vertexSpace:r,spatialReference:n,transform:i},u.absolute,{allowBufferReuse:!0}))==null?void 0:e.position;return a?!t.components||t.components.some(s=>!s.faces)?{position:a.buffer}:{position:a.buffer,components:t.components.map(s=>s.faces)}:null}function m(){return new p(9,f("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}function c(t,o,r,n){return{minX:Math.min(t[o],t[r],t[n]),maxX:Math.max(t[o],t[r],t[n]),minY:Math.min(t[o+1],t[r+1],t[n+1]),maxY:Math.max(t[o+1],t[r+1],t[n+1]),p0:[t[o],t[o+1],t[o+2]],p1:[t[r],t[r+1],t[r+2]],p2:[t[n],t[n+1],t[n+2]]}}export{U as default};
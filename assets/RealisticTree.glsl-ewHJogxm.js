import{hY as n}from"./index-C1aGfQcb.js";import{r as s}from"./Texture-D7jaxJ9P.js";import{e as m}from"./VertexAttribute-Cq4MnHjR.js";import"./vec32-CmwgPQMd.js";import"./interfaces-DDtDqZYj.js";import"./vec2-D9okOEat.js";import"./vec2f64-CCfZVA9N.js";import"./BindType-BmZEZMMh.js";import{f as u,a,d as p,J as f,R as g}from"./DefaultMaterial-DLGx92FQ.js";import"./vec42-BHDxGccW.js";import"./vec4f64-o2zAXfmz.js";import"./NormalAttribute.glsl-DGUKFRgB.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./mat3-Dg2BrR6m.js";import"./symbolColorUtils-BlCDN8di.js";import"./boundedPlane-C18Ysvcq.js";import"./sphere-DuEd_sPX.js";import"./ViewingMode-HRfKv6NR.js";import"./basicInterfaces-CZwQPxTp.js";class I{constructor(e,t=null){this.geometry=e,this.textures=t}get material(){return this.geometry.material}get numTriangles(){return this.geometry instanceof s?this.geometry.indexCount/3:this.geometry.elementCount/3}}function h(o){return o instanceof s?o.attributes.get(m.POSITION).indices.length:o.elementCount}class B{constructor(e,t,r){this.components=e,this.minScreenSpaceRadius=t,this.pivotOffset=r;const c=n(this.components.map(i=>i.geometry));this.numVertices=c.reduce((i,l)=>i+h(l),0)}}class J{constructor(e){this.levels=e,this.levels.sort((t,r)=>t.minScreenSpaceRadius===r.minScreenSpaceRadius?t.numVertices-r.numVertices:t.minScreenSpaceRadius-r.minScreenSpaceRadius)}}function N(o){const e=[];return o.levels.forEach(t=>t.components.forEach(r=>e.push(r.geometry.material))),n(e)}function Y(o){const e=new Array;return o.levels.forEach(t=>t.components.forEach(r=>{r.textures!=null&&e.push(...r.textures)})),n(e)}function k(o){const e=new Array;return o.levels.forEach(t=>t.components.forEach(r=>{r.geometry instanceof s&&e.push(r.geometry)})),n(e)}const q=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"})),F=Object.freeze(Object.defineProperty({__proto__:null,build:a,getRadius:p},Symbol.toStringTag,{value:"Module"})),G=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"})),H=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}));export{G as D,H as R,q as S,k as a,F as b,J as c,N as i,I as n,B as o,Y as u};

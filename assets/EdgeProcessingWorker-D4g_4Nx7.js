import{u as a}from"./workerHelper-vJy25KAM.js";import{f as u,u as c,p,E as l,d,m as f}from"./edgeProcessing-CO1tnVAc.js";import"./InterleavedLayout-Bb_2wUZe.js";import"./BufferView-sBvw8vqP.js";import"./vec2-D9okOEat.js";import"./index-C1aGfQcb.js";import"./vec32-CmwgPQMd.js";import"./vec42-BHDxGccW.js";import"./types-D0PSWh4d.js";import"./Util-BK6CBhAA.js";import"./vec2f64-CCfZVA9N.js";import"./vec4f64-o2zAXfmz.js";import"./deduplicate-Dq2CF0iu.js";import"./Indices-NXfq_dEG.js";import"./VertexAttribute-Cq4MnHjR.js";import"./glUtil-CFv2RXTA.js";import"./enums-Dk3osxpS.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Normals-C9jd-OeY.js";class F{async extract(t){const e=o(t),r=u(e),s=[e.data.buffer];return{result:m(r,s),transferList:s}}async extractComponentsEdgeLocations(t){const e=o(t),r=c(e.data,e.skipDeduplicate,e.indices,e.indicesLength),s=p(r,D),n=[];return{result:a(s.regular.instancesData,n),transferList:n}}async extractEdgeLocations(t){const e=o(t),r=c(e.data,e.skipDeduplicate,e.indices,e.indicesLength),s=p(r,L),n=[];return{result:a(s.regular.instancesData,n),transferList:n}}}function o(i){return{data:l.createView(i.dataBuffer),indices:i.indicesType==="Uint32Array"?new Uint32Array(i.indices):i.indicesType==="Uint16Array"?new Uint16Array(i.indices):i.indices,indicesLength:i.indicesLength,writerSettings:i.writerSettings,skipDeduplicate:i.skipDeduplicate}}function m(i,t){return t.push(i.regular.lodInfo.lengths.buffer),t.push(i.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(i.regular.instancesData,t),lodInfo:{lengths:i.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(i.silhouette.instancesData,t),lodInfo:{lengths:i.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:i.averageEdgeLength}}class g{allocate(t){return d.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,r){t.position0.setVec(e,r.position0),t.position1.setVec(e,r.position1)}}class h{allocate(t){return f.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,r){t.position0.setVec(e,r.position0),t.position1.setVec(e,r.position1),t.componentIndex.set(e,r.componentIndex)}}const L=new g,D=new h;export{F as default};
import{cP as g,aF as h,aR as b}from"./index-C1aGfQcb.js";import{c as N,p as A}from"./infoFor3D-C0hFfS1m.js";class m{constructor(e,s,t){this.assetName=e,this.assetMimeType=s,this.parts=t}equals(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&g(this.parts,e.parts,(s,t)=>s.equals(t))}isOnService(e){return this.parts.every(s=>s.isOnService(e))}makeHash(){let e="";for(const s of this.parts)e+=s.partHash;return e}async toBlob(e){const{parts:s}=this;if(s.length===1)return s[0].toBlob(e);const t=await Promise.all(s.map(a=>a.toBlob(e)));return h(e),new Blob(t)}}class B{constructor(e,s){this.partUrl=e,this.partHash=s}equals(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}isOnService(e){return this.partUrl.startsWith(`${e.path}/assets/`)}async toBlob(e){const{data:s}=await b(this.partUrl,{responseType:"blob"});return h(e),s}}function H(r){return v(r==null?void 0:r.source)}function u(r){return Array.isArray(r)?r.every(e=>e instanceof m):!1}const c=/^(model\/gltf\+json)|(model\/gltf-binary)$/,f=/\.(gltf|glb)/i;function v(r){return r?Array.isArray(r)?r.some(l):l(r):!1}function l(r){if(r instanceof File){const{type:e,name:s}=r;return c.test(e)||f.test(s)}return c.test(r.assetMimeType)||f.test(r.assetName)}function M(r,e){if(!r)return!1;const{source:s}=r;return $(s,e)}function q(r,e){if(r===e)return!0;const{source:s}=r,{source:t}=e;if(s===t)return!0;if(u(s)&&u(t)){if(s.length!==t.length)return!1;const a=(n,o)=>n.assetName<o.assetName?-1:n.assetName>o.assetName?1:0,i=[...s].sort(a),y=[...t].sort(a);for(let n=0;n<i.length;++n)if(!i[n].equals(y[n]))return!1;return!0}return!1}function $(r,e){if(Array.isArray(r)){const s=r;return s.length>0&&s.every(t=>p(t,e))}return p(r,e)}function p(r,e){return r instanceof m&&r.isOnService(e)}function O(r,e){return r instanceof File?N(r,e):A(r.assetMimeType,r.assetName,e)}function S(r){return Array.isArray(r)?r:[r]}function d(r){return!!r.original}export{d as A,S as N,m as a,O as b,q as h,B as i,M as m,H as o};

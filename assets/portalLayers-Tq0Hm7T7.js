import{aC as g,aO as T,dc as f}from"./index-C1aGfQcb.js";import{s as b}from"./associatedFeatureServiceUtils-BHFYEf6o.js";import{b as C,i as I,a as G}from"./fetchService-DODjWwEX.js";import{s as p}from"./portalItemUtils-Cy9KvMYK.js";class F{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(a,t){const r=this._serviceMetadatas.get(a);if(r)return r;const s=await C(a,t);return this._serviceMetadatas.set(a,s),s}async fetchItemData(a){const{id:t}=a;if(!t)return null;const{_itemDatas:r}=this;if(r.has(t))return r.get(t);const s=await a.fetchData();return r.set(t,s),s}async fetchCustomParameters(a,t){const r=await this.fetchItemData(a);return r&&typeof r=="object"&&(t?t(r):r.customParameters)||null}}function m(e){const a={id:e.id,name:e.name},t=I(e.type);return t!=="FeatureLayer"&&(a.layerType=t),a}async function D(e,a,t){var r,s,n;if((e==null?void 0:e.layers)==null||(e==null?void 0:e.tables)==null){const c=await t.fetchServiceMetadata(a,{customParameters:(r=y(e))==null?void 0:r.customParameters});(e=e||{}).layers=e.layers||((s=c==null?void 0:c.layers)==null?void 0:s.map(m)),e.tables=e.tables||((n=c==null?void 0:c.tables)==null?void 0:n.map(m))}return e}function y(e){if(!e)return null;const{layers:a,tables:t}=e;return a!=null&&a.length?a[0]:t!=null&&t.length?t[0]:null}function O(e,a){return a==null?null:[...e.layers||[],...e.tables||[]].find(t=>t.id===a)}function ue(e,a){return[...e.layers||[],...e.tables||[]].filter(({layerType:t})=>t?t===a:a==="ArcGISFeatureLayer")}function L(e){var a,t;return(((a=e==null?void 0:e.layers)==null?void 0:a.length)??0)+(((t=e==null?void 0:e.tables)==null?void 0:t.length)??0)}function ie(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function j(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function _(e,a,t){var n,c,l,i;if(!(e!=null&&e.url))return a??{};if(a??(a={}),!a.layers){const u=await t.fetchServiceMetadata(e.url);a.layers=(n=u.layers)==null?void 0:n.map(m)}const{serverUrl:r,portalItem:s}=await b(e.url,{sceneLayerItem:e,customParameters:(c=y(a))==null?void 0:c.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return a.tables=[],a;if(!a.tables&&s){const u=await s.fetchData();if(u!=null&&u.tables)a.tables=u.tables.map(m);else{const o=await t.fetchServiceMetadata(r,{customParameters:(l=y(u))==null?void 0:l.customParameters});a.tables=(i=o==null?void 0:o.tables)==null?void 0:i.map(m)}}if(a.tables)for(const u of a.tables)u.url=`${r}/${u.id}`;return a}async function $(e){let{portalItem:a}=e;!a||a instanceof g||(a=new g(a));const t=await K(a);return new t.constructor({portalItem:a,...t.properties})}async function K(e){await e.load();const a=new F;return V(await v(e,a))}async function v(e,a){switch(e.type){case"3DTiles Service":return E();case"CSV":return q();case"Feature Collection":return U(e);case"Feature Service":return J(e,a);case"Feed":return Z();case"GeoJson":return z();case"Group Layer":return ee();case"Image Service":return k(e,a);case"KML":return B();case"Knowledge Graph Layer":return H();case"Map Service":return W(e,a);case"Media Layer":return ae();case"Scene Service":return x(e,a);case"Stream Service":return A();case"Vector Tile Service":return R();case"WFS":return Q();case"WMS":return X();case"WMTS":return Y();default:throw new T("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function V(e){const a=e.className,t=G[a];return{constructor:await t(),properties:e.properties}}async function W(e,a){return await te(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function J(e,a){const t=await M(e,a);if(typeof t=="object"){const{sourceJSON:r,className:s}=t,n={sourceJSON:r};return t.id!=null&&(n.layerId=t.id),{className:s||"FeatureLayer",properties:n}}return{className:"GroupLayer"}}async function x(e,a){var r;const t=await M(e,a,async()=>{try{if(!e.url)return[];const{serverUrl:s}=await b(e.url,{sceneLayerItem:e}),n=await a.fetchServiceMetadata(s);return(n==null?void 0:n.tables)??[]}catch{return[]}});if(typeof t=="object"){const s={};let n;if(t.id!=null?(s.layerId=t.id,n=`${e.url}/layers/${t.id}`):n=e.url,(r=e.typeKeywords)==null?void 0:r.length){for(const l of Object.keys(f))if(e.typeKeywords.includes(l))return{className:f[l]}}const c=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,l=>{var i;return(i=y(l))==null?void 0:i.customParameters})});return{className:f[c==null?void 0:c.layerType]||"SceneLayer",properties:s}}if(t===!1){const s=await a.fetchServiceMetadata(e.url);if((s==null?void 0:s.layerType)==="Voxel")return{className:"VoxelLayer"}}return{className:"GroupLayer"}}async function U(e){await e.load();const a=p(e,"Map Notes"),t=p(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if(p(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return L(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function k(e,a){var o,w,S,h,N;await e.load();const t=((o=e.typeKeywords)==null?void 0:o.map(P=>P.toLowerCase()))??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),s=r==null?void 0:r.layerType;if(s==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(s==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const n=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),c=(w=n.cacheType)==null?void 0:w.toLowerCase(),l=(S=n.capabilities)==null?void 0:S.toLowerCase().includes("tilesonly"),i=((N=(h=n.tileInfo)==null?void 0:h.format)==null?void 0:N.toLowerCase())??"",u=c==null&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(i);return c==="map"||u||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function A(){return{className:"StreamLayer"}}function R(){return{className:"VectorTileLayer"}}function z(){return{className:"GeoJSONLayer"}}function E(){return{className:"IntegratedMesh3DTilesLayer"}}function q(){return{className:"CSVLayer"}}function B(){return{className:"KMLLayer"}}function H(){return{className:"KnowledgeGraphLayer"}}function Q(){return{className:"WFSLayer"}}function X(){return{className:"WMSLayer"}}function Y(){return{className:"WMTSLayer"}}function Z(){return{className:"StreamLayer"}}function ee(){return{className:"GroupLayer"}}function ae(){return{className:"MediaLayer"}}async function te(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}async function M(e,a,t){const{url:r,type:s}=e,n=s==="Feature Service";if(!r)return{};if(/\/\d+$/.test(r)){if(n){const i=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,u=>{var o;return(o=y(u))==null?void 0:o.customParameters})});return{id:i.id,className:I(i.type),sourceJSON:i}}return{}}await e.load();let c=await a.fetchItemData(e);if(n){const i=await D(c,r,a),u=d(i);if(typeof u=="object"){const o=O(i,u.id);u.className=j(o==null?void 0:o.layerType)}return u}if(s==="Scene Service"&&(c=await _(e,c,a)),L(c)>0)return d(c);const l=await a.fetchServiceMetadata(r);return t&&(l.tables=await t()),d(l)}function d(e){var a;return L(e)===1&&{id:(a=y(e))==null?void 0:a.id}}const oe=Object.freeze(Object.defineProperty({__proto__:null,fromItem:$,selectLayerClassPath:v},Symbol.toStringTag,{value:"Module"}));export{v as L,D as a,ie as c,F as e,j as i,ue as n,_ as o,oe as p,y as s,m as t,L as u};

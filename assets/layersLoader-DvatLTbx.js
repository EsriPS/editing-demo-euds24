import{aO as y,aM as T}from"./index-C1aGfQcb.js";import{d as L}from"./arcgisLayerUrl-BkZy4Mr3.js";import{b as v,a as F,t as M}from"./fetchService-DODjWwEX.js";import{s as d,a as P,o as G,u as w,t as f,c as $,n as x,i as D,e as h}from"./portalLayers-Tq0Hm7T7.js";import{populateGroupLayer as k}from"./layersCreator-CNJ7O2pS.js";import{e as I}from"./jsonContext-DJAfzMqt.js";import{s as C}from"./portalItemUtils-Cy9KvMYK.js";import{t as E}from"./styleUtils-CFywnZa6.js";import"./associatedFeatureServiceUtils-BHFYEf6o.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";async function ne(a,r){const t=a.instance.portalItem;if(t!=null&&t.id)return await t.load(r),O(a),a.validateItem&&a.validateItem(t),j(a,r)}function O(a){const r=a.instance.portalItem;if(!(r!=null&&r.type)||!a.supportedTypes.includes(r.type))throw new y("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r==null?void 0:r.type,expectedType:a.supportedTypes.join(", ")})}async function j(a,r){const t=a.instance,e=t.portalItem;if(!e)return;const{url:i,title:n}=e,l=I(e,"portal-item");if(t.type==="group")return A(t,l,a);i&&t.type!=="media"&&t.read({url:i},l);const o=new h,s=await b(a,o,r);return s&&t.read(s,l),t.resourceReferences={portalItem:e,paths:l.readResourcePaths??[]},t.type!=="subtype-group"&&t.read({title:n},l),E(t,l)}async function A(a,r,t){const e=a.portalItem;if(!a.sourceIsPortalItem)return;const{title:i,type:n}=e;if(n==="Group Layer"){if(!C(e,"Map"))throw new y("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return R(a)}return a.read({title:i},r),J(a,t)}async function R(a){const r=a.portalItem,t=await r.fetchData("json");if(!t)return;const e=I(r,"web-map");a.read(t,e),await k(a,t,{context:e}),a.resourceReferences={portalItem:r,paths:e.readResourcePaths??[]}}async function J(a,r){var u;let t;const{portalItem:e}=a;if(!e)return;const i=e.type,n=r.layerModuleTypeMap;switch(i){case"Feature Service":case"Feature Collection":t=n.FeatureLayer;break;case"Stream Service":t=n.StreamLayer;break;case"Scene Service":t=n.SceneLayer;break;default:throw new y("portal:unsupported-item-type-as-group",`The item type '${i}' is not supported as a 'IGroupLayer'`)}const l=new h;let[o,s]=await Promise.all([t(),b(r,l)]),c=()=>o;if(i==="Feature Service"){const g=(u=d(s))==null?void 0:u.customParameters;s=e.url?await P(s,e.url,l):{},c=await Q(s,n)||c;const S=await K(e.url,{customParameters:g,loadContext:l});return await p(a,c,s,S)}return i==="Scene Service"&&e.url&&(s=await G(e,s,l)),w(s)>0?await p(a,c,s):await N(a,c)}async function N(a,r){var i,n;const{portalItem:t}=a;if(!(t!=null&&t.url))return;const e=await v(t.url);e&&p(a,r,{layers:(i=e.layers)==null?void 0:i.map(f),tables:(n=e.tables)==null?void 0:n.map(f)})}async function p(a,r,t,e){var l;let i=t.layers||[];const n=t.tables||[];if(((l=a.portalItem)==null?void 0:l.type)==="Feature Collection"?(i.forEach((o,s)=>{var c;o.id=s,((c=o==null?void 0:o.layerDefinition)==null?void 0:c.type)==="Table"&&n.push(o)}),i=i.filter(o=>{var s;return((s=o==null?void 0:o.layerDefinition)==null?void 0:s.type)!=="Table"})):(i.reverse(),n.reverse()),i.forEach(o=>{const s=e==null?void 0:e(o);if(s||!e){const c=m(a,r(o),t,o,s);a.add(c)}}),n.length){const o=await F.FeatureLayer();n.forEach(s=>{const c=e==null?void 0:e(s);if(c||!e){const u=m(a,o,t,s,c);a.tables.add(u)}})}}function m(a,r,t,e,i){const n=a.portalItem,l={portalItem:n.clone(),layerId:e.id};e.url!=null&&(l.url=e.url);const o=new r(l);if("sourceJSON"in o&&(o.sourceJSON=i),o.type!=="subtype-group"&&o.type!=="catalog"&&(o.sublayerTitleMode="service-name"),n.type==="Feature Collection"){const s={origin:"portal-item",portal:n.portal||T.getDefault()};o.read(e,s);const c=t.showLegend;c!=null&&o.read({showLegend:c},s)}return o}async function b(a,r,t){if(a.supportsData===!1)return;const e=a.instance,i=e.portalItem;if(!i)return;let n=null;try{n=await i.fetchData("json",t)}catch{}if(B(e)){let l=null;const o=await q(i,n,r);if((n!=null&&n.layers||n!=null&&n.tables)&&o>0){if(e.layerId==null){const s=$(e.type),c=s?x(n,s)[0]:d(n);c&&(e.layerId=c.id)}l=z(n,e),(l==null?void 0:l.layerType)==="OrientedImageryLayer"&&e.type==="oriented-imagery"&&e.supportedSourceTypes.add("Feature Layer"),l&&n.showLegend!=null&&(l.showLegend=n.showLegend)}return o>1&&"sublayerTitleMode"in e&&e.sublayerTitleMode!=="service-name"&&(e.sublayerTitleMode="item-title-and-service-name"),l}return n}async function q(a,r,t){var n,l,o,s,c;if(r!=null&&r.layers&&(r!=null&&r.tables))return w(r);const e=L(a.url);if(!e)return 1;const i=await t.fetchServiceMetadata(e.url.path,{customParameters:(n=d(r))==null?void 0:n.customParameters}).catch(()=>null);return(((l=r==null?void 0:r.layers)==null?void 0:l.length)??((o=i==null?void 0:i.layers)==null?void 0:o.length)??0)+(((s=r==null?void 0:r.tables)==null?void 0:s.length)??((c=i==null?void 0:i.tables)==null?void 0:c.length)??0)}function z(a,r){var i,n;const{layerId:t}=r,e=((i=a.layers)==null?void 0:i.find(l=>l.id===t))||((n=a.tables)==null?void 0:n.find(l=>l.id===t));return e&&H(e,r)?e:null}function B(a){return a.type!=="stream"&&"layerId"in a}function H(a,r){const t="layerType"in a&&a.layerType,{type:e}=r;return!(e==="feature"&&t&&a.layerType!=="ArcGISFeatureLayer"||e==="catalog"&&!t||e==="oriented-imagery"&&!t||e==="subtype-group"&&!t)}async function K(a,r){const{layersJSON:t}=await M(a,r);if(!t)return null;const e=[...t.layers,...t.tables];return i=>e.find(n=>n.id===i.id)}async function Q(a,r){const{layers:t}=a;if(!(t!=null&&t.length))return;const e=new Set,i=[];for(const{layerType:o}of t){const s=o??"ArcGISFeatureLayer";if(e.has(s))continue;e.add(s);const c=r[D(s)];i.push(c())}const n=await Promise.all(i),l=new Map;return Array.from(e).forEach((o,s)=>{l.set(o,n[s])}),({layerType:o})=>{const s=o??"ArcGISFeatureLayer";return l.get(s)}}export{ne as load};

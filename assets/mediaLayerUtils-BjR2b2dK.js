import{$ as c,j as f}from"./utils-BI31Ke1l.js";import{o as y}from"./jsonContext-DJAfzMqt.js";import{l as d,a as v,f as x}from"./portalItemUtils-Cy9KvMYK.js";import{p as o}from"./resourceUtils-B3ZPv4ml.js";import"./index-C1aGfQcb.js";import"./saveAPIKeyUtils-BWiJCGqJ.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveUtils-DXB-y_0Z.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./resourceUtils-CZ2sBo5I.js";const s="Media Layer",E="media-layer-save",I="media-layer-save-as",i=["media-layer:unsupported-source"];function n(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return y(e,"portal-item",!0)}function p(e){return e.layerJSON}async function u(e,t){t.extent=e.fullExtent?await d(e.fullExtent):null}async function N(e,t){t.title||(t.title=e.title),await u(e,t),v(t,x.METADATA)}async function S(e,t){return c({layer:e,itemType:s,validateLayer:n,createJSONContext:r=>m(r),createItemData:p,errorNamePrefix:E,supplementalUnsupportedErrors:i,setItemProperties:u,saveResources:(r,a)=>o(e.resourceReferences,a)},t)}async function C(e,t,r){return f({layer:e,itemType:s,validateLayer:n,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:I,supplementalUnsupportedErrors:i,newItem:t,setItemProperties:N,saveResources:(a,l)=>o(e.resourceReferences,l)},r)}export{S as save,C as saveAs};
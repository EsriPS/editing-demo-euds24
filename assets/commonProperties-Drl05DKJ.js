import{fw as o,aX as y,cu as t,b8 as p}from"./index-C1aGfQcb.js";import{h as d}from"./ElevationInfo-D7CBP7sd.js";const r=(n=>n)(["operational-layers","basemap","ground"]),f={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:r}}},m={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(n,e)=>!e.disablePopup},write:{enabled:!0,writer(n,e,a){e[a]=!n}}}},g={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:r}}},b={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:y}}},u={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:r}}},v={value:null,type:d,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:r}}};function j(n){return{type:n,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const l={write:{enabled:!0,layerContainerTypes:r},read:!0},s={type:Number,json:{origins:{"web-document":l,"portal-item":{write:!0}}}},I={...s,json:{...s.json,origins:{"web-document":{...l,write:{enabled:!0,layerContainerTypes:r,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(n,e,a)=>{var i;return a&&a.origin!=="service"||!e.drawingInfo||e.drawingInfo.transparency===void 0?(i=e.layerDefinition)!=null&&i.drawingInfo&&e.layerDefinition.drawingInfo.transparency!==void 0?o(e.layerDefinition.drawingInfo.transparency):void 0:o(e.drawingInfo.transparency)}}}},D={type:t,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(n,e)=>{const a=t.fromJSON(n);return e.spatialReference!=null&&typeof e.spatialReference=="object"&&(a.spatialReference=p.fromJSON(e.spatialReference)),a}}}},read:!1}},C={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},N={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:r}}},name:"layerDefinition.minScale",write:!0}},S={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:r}}},name:"layerDefinition.maxScale",write:!0}},T={json:{write:{ignoreOrigin:!0,layerContainerTypes:r},origins:{"web-map":{read:!1,write:!1}}}};export{r as a,D as b,j as c,v as d,I as f,C as g,S as j,g as l,b as p,m as s,f as t,N as u,T as v,s as w,u as y};

import{F as l,G as s,W as x,Z as u,K as S,ay as P,a$ as C,gR as j,gS as I,gT as B,gU as N,ba as h,aO as O,aA as D}from"./index-C1aGfQcb.js";import{E as d,u as G,_ as M,x as V,f as F,g as R}from"./labelUtils-C_ZaLudT.js";import{a as z}from"./defaults-Dbnhuv3C.js";import{i as g}from"./jsonUtils-BWWcP_yB.js";var m;let p=m=class extends P{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?d(r.value):e}writeExpression(e,r,n){this.value!=null&&(e=d(this.value)),e!=null&&(r[n]=e)}clone(){return new m({expression:this.expression,title:this.title,value:this.value})}};l([s({type:String,json:{write:{writerEnsuresNonNull:!0}}})],p.prototype,"expression",void 0),l([x("expression",["expression","value"])],p.prototype,"readExpression",null),l([u("expression")],p.prototype,"writeExpression",null),l([s({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"title",void 0),l([s({json:{read:!1,write:!1}})],p.prototype,"value",void 0),p=m=l([S("esri.layers.support.LabelExpressionInfo")],p);const L=p;var f;const b=new C({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function w(e,r,n){return{enabled:!N(n==null?void 0:n.layer)}}function E(e){var r;return!e||e.origin!=="service"&&((r=e.layer)==null?void 0:r.type)!=="map-image"}function U(e){return(e==null?void 0:e.type)==="map-image"}function $(e){var r,n;return!!U(e)&&!!((n=(r=e.capabilities)==null?void 0:r.exportMap)!=null&&n.supportsArcadeExpressionForLabeling)}function J(e){return E(e)||$(e==null?void 0:e.layer)}let i=f=class extends P{static evaluateWhere(e,r){const n=(t,o,a)=>{switch(o){case"=":return t==a;case"<>":return t!=a;case">":return t>a;case">=":return t>=a;case"<":return t<a;case"<=":return t<=a}return!1};try{if(e==null)return!0;const t=e.split(" ");if(t.length===3)return n(r[t[0]],t[1],t[2]);if(t.length===7){const o=n(r[t[0]],t[1],t[2]),a=t[3],c=n(r[t[4]],t[5],t[6]);switch(a){case"AND":return o&&c;case"OR":return o||c}}return!1}catch{}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=z,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const n=r.labelExpressionInfo;if(!n||!n.value&&!n.expression)return e}writeLabelExpression(e,r,n){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=G(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const t=M(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}}e!=null&&(r[n]=e)}writeLabelExpressionInfo(e,r,n,t){if(e==null&&this.labelExpression!=null&&E(t))e=new L({expression:this.getLabelExpressionArcade()});else if(!e)return;const o=e.toJSON(t);o.expression&&(r[n]=o)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return V(this)}getLabelExpressionArcade(){return F(this)}getLabelExpressionSingleField(){return R(this)}hash(){return JSON.stringify(this)}clone(){return new f({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:h(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:h(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};l([s({type:String,json:{write:!0}})],i.prototype,"name",void 0),l([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:w}}}}})],i.prototype,"allowOverrun",void 0),l([s({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:w}}}}})],i.prototype,"deconflictionStrategy",void 0),l([s({type:String,json:{write:{overridePolicy(e,r,n){return this.labelExpressionInfo&&(n==null?void 0:n.origin)==="service"&&$(n.layer)?{enabled:!1}:{allowNull:!0}}}}})],i.prototype,"labelExpression",void 0),l([x("labelExpression")],i.prototype,"readLabelExpression",null),l([u("labelExpression")],i.prototype,"writeLabelExpression",null),l([s({type:L,json:{write:{overridePolicy:(e,r,n)=>J(n)?{allowNull:!0}:{enabled:!1}}}})],i.prototype,"labelExpressionInfo",void 0),l([u("labelExpressionInfo")],i.prototype,"writeLabelExpressionInfo",null),l([s({type:b.apiValues,json:{type:b.jsonValues,read:b.read,write:b.write}})],i.prototype,"labelPlacement",void 0),l([s({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],i.prototype,"labelPosition",void 0),l([s({type:Number})],i.prototype,"maxScale",void 0),l([u("maxScale")],i.prototype,"writeMaxScale",null),l([s({type:Number})],i.prototype,"minScale",void 0),l([u("minScale")],i.prototype,"writeMinScale",null),l([s({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:w}}}}})],i.prototype,"repeatLabel",void 0),l([s({type:Number,cast:j,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:w}}}}})],i.prototype,"repeatLabelDistance",void 0),l([s({types:I,json:{origins:{"web-scene":{types:B,write:g,default:null}},write:g,default:null}})],i.prototype,"symbol",void 0),l([s({type:Boolean,json:{write:!0}})],i.prototype,"useCodedValues",void 0),l([s({type:String,json:{write:!0}})],i.prototype,"where",void 0),i=f=l([S("esri.layers.support.LabelClass")],i);const W=i,y=()=>D.getLogger("esri.layers.support.labelingInfo"),k=/\[([^[\]]+)\]/gi;function Q(e,r,n){return e?e.map(t=>{var a;const o=new W;if(o.read(t,n),o.labelExpression){const c=r.fields||((a=r.layerDefinition)==null?void 0:a.fields)||this.fields;o.labelExpression=o.labelExpression.replaceAll(k,(v,A)=>`[${H(A,c)}]`)}return o}):null}function H(e,r){if(!r)return e;const n=e.toLowerCase();for(let t=0;t<r.length;t++){const o=r[t].name;if(o.toLowerCase()===n)return o}return e}const K={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryMultiPatch:["always-horizontal"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along","above-along","below-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};function X(e,r){const n=[];for(const t of e){const o=t.labelPlacement,a=K[r];if(!t.symbol)return y().warn("No ILabelClass symbol specified."),[];if(!a)return y().error(new O("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${r}' is not supported`)),[];if(a.includes(o))n.push(t);else{const c=a[0];o&&y().warn(`Found invalid label placement type ${o} for ${r}. Defaulting to ${c}`);const v=t.clone();v.labelPlacement=c,n.push(v)}}return n}export{W as C,X as a,Q as n};

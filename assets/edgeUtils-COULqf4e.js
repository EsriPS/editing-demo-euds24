import{bU as p,bp as l}from"./index-C1aGfQcb.js";import{r as i,u as f}from"./vec4f64-o2zAXfmz.js";import"./floatRGBA-BxT4aGRY.js";import"./symbolColorUtils-BlCDN8di.js";import"./interfaces-DDtDqZYj.js";import"./NormalAttribute.glsl-DGUKFRgB.js";import"./BindType-BmZEZMMh.js";import"./VertexAttribute-Cq4MnHjR.js";var e;(function(n){n[n.TRANSPARENT=0]="TRANSPARENT",n[n.OPAQUE=1]="OPAQUE"})(e||(e={}));function U(n){return n.type==="fill"}function T(n){return n.type==="extrude"}var s;(function(n){n[n.Uniform=0]="Uniform",n[n.Varying=1]="Varying",n[n.COUNT=2]="COUNT"})(s||(s={}));var r,a;(function(n){n[n.Solid=0]="Solid",n[n.Sketch=1]="Sketch",n[n.Mixed=2]="Mixed",n[n.COUNT=3]="COUNT"})(r||(r={})),function(n){n[n.REGULAR=0]="REGULAR",n[n.SILHOUETTE=1]="SILHOUETTE"}(a||(a={}));function b(n){return n&&n.enabled&&(T(n)||U(n))&&n.edges!=null}function d(n){return n&&n.enabled&&n.edges||null}function z(n,t){return m(d(n),t)}function m(n,t){if(n==null)return null;const c=n.color!=null?f(p.toUnitRGBA(n.color)):i(0,0,0,0),u=l(n.size),o=l(n.extensionLength);switch(n.type){case"solid":return h({color:c,size:u,extensionLength:o,...t});case"sketch":return E({color:c,size:u,extensionLength:o,...t});default:return}}function h(n){return{...S,...n,type:r.Solid}}function E(n){return{...x,...n,type:r.Sketch}}const S={color:i(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:e.OPAQUE,hasSlicePlane:!1},x={color:i(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:e.OPAQUE,hasSlicePlane:!1};export{e as A,z as a,b as c,h as g};
import{gX as y,gY as p,gZ as f,g_ as k,br as u,g$ as x,h0 as F,bo as g,bU as w,h1 as U,fP as d,h2 as L,aO as b,bO as P,bN as T,f2 as z,bP as E,bQ as V,h3 as W,h4 as O,gU as C,h5 as D}from"./index-C1aGfQcb.js";import{S as j,u as N,c as Q}from"./defaults-Dbnhuv3C.js";import{e as X,i as Y}from"./defaultsJSON-GKolV7NZ.js";const Z=y.fromSimpleMarkerSymbol(j),_=p.fromSimpleLineSymbol(N),q=f.fromSimpleFillSymbol(Q),A=new k({symbolLayers:new u([new x({material:{color:X},edges:new F({size:g(1),color:new w(Y)})})])}),B=new p({symbolLayers:new u([new U({material:{color:new w([0,0,0])},size:g(1)})])}),G=new f({symbolLayers:new u([new x({outline:{color:new w([0,0,0]),size:g(1)}})])});function oe(e){if(e==null)return null;switch(e.type){case"mesh":return A;case"point":case"multipoint":return Z;case"polyline":return _;case"polygon":case"extent":return q}return null}const M="#useCIMFallbackSymbology()",i={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function H(e,n=i){var a,S,$,h;if(!e)return{symbol:null};const{retainId:t=i.retainId,ignoreDrivers:o=i.ignoreDrivers,hasLabelingContext:r=i.hasLabelingContext,retainCIM:m=i.retainCIM,cimFallbackEnabled:l=i.cimFallbackEnabled}=n;let s=null;if(d(e)||e instanceof L)s=e.clone();else if(e.type==="cim"){const c=(S=(a=e.data)==null?void 0:a.symbol)==null?void 0:S.type;switch(c){case"CIMPointSymbol":s=m?e.clone():y.fromCIMSymbol(e);break;case"CIMLineSymbol":l&&(s=B.clone(),($=n==null?void 0:n.logWarning)==null||$.call(n,M,"Unsupported CIM line symbology converted to fallback 3D line symbology"));break;case"CIMPolygonSymbol":l&&(s=G.clone(),(h=n==null?void 0:n.logWarning)==null||h.call(n,M,"Unsupported CIM polygon symbology converted to fallback 3D polygon symbology"))}if(!s)return{error:new b("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${c||"unknown"}' is unsupported in 3D`,{symbol:e})}}else if(e instanceof P)s=p.fromSimpleLineSymbol(e);else if(e instanceof T)s=y.fromSimpleMarkerSymbol(e);else if(e instanceof z)s=y.fromPictureMarkerSymbol(e);else if(e instanceof E)s=n.geometryType&&n.geometryType==="mesh"?k.fromSimpleFillSymbol(e):f.fromSimpleFillSymbol(e);else{if(!(e instanceof V))return{error:new b("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})};s=r?W.fromTextSymbol(e):y.fromTextSymbol(e)}return t&&s&&s.type!=="cim"&&(s.id=e.id),o&&d(s)&&s.symbolLayers.forEach(c=>c.ignoreDrivers=!0),{symbol:s}}function ne(e,n,t,o){const r=v(e,{},{context:o,isLabelSymbol:!1});r!=null&&(n[t]=r)}function se(e,n,t,o){const r=v(e,{},{context:o,isLabelSymbol:!0});r!=null&&(n[t]=r)}function I(e){return e instanceof D||e instanceof L}function J(e){return e instanceof D&&(e.type==="polygon-3d"||e.type==="line-3d")}function v(e,n,t){var s;if(e==null)return null;const{context:o,isLabelSymbol:r}=t,m=o==null?void 0:o.origin,l=o==null?void 0:o.messages;if(m==="web-scene"&&!I(e)){const a=H(e,{retainCIM:!0,hasLabelingContext:r});return a.symbol!=null?a.symbol.write(n,o):(l==null||l.push(new b("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:o,error:a.error})),null)}return C(o==null?void 0:o.layer)&&J(e)?(l==null||l.push(new b("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported on layers of type '${(s=o==null?void 0:o.layer)==null?void 0:s.declaredClass}'.`,{symbol:e,context:o})),null):(m==="web-map"||m==="portal-item"&&!C(o==null?void 0:o.layer))&&I(e)?(l==null||l.push(new b("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:o})),null):e.write(n,o)}function le(e,n){return O(e,null,n)}export{oe as d,i as g,se as i,ne as l,le as p,H as u};

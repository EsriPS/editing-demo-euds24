import{cS as h,c1 as o,dd as l,b8 as s,b6 as u,c9 as M,eH as c,bo as y,bN as g,bO as C,cr as f}from"./index-C1aGfQcb.js";import{e as b,y as P}from"./vec2-D9okOEat.js";import{n as d}from"./vec2f64-CCfZVA9N.js";import{U as v,w as I}from"./enums-CmIX1y88.js";import{s as n,p as m}from"./Editor-BZKF0HZM.js";import{r as x}from"./automaticAreaMeasurementUtils-B8M9AKp8.js";class O extends x{constructor(e){super(),this._graphicsLayer=e,this._symbolPairingsByType=new Map}visualizeIntersectionPoint(e,r){return this._visualizeSnappingIndicator(new h({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:r.spatialReference}),this._getOrCreateSymbol("intersectionPoint",r.view.effectiveTheme.accentColor))}visualizePoint(e,r){return this._visualizeSnappingIndicator(new h({x:e.point[0],y:e.point[1],spatialReference:r.spatialReference}),this._getOrCreateSymbol("point",r.view.effectiveTheme.accentColor))}visualizeLine(e,r){return this._visualizeSnappingIndicator(new o({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:l(s,r.spatialReference)}),this._getOrCreateSymbol("line",r.view.effectiveTheme.accentColor))}visualizeParallelSign(e,r){return this._visualizeSnappingIndicator(new o({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:l(s,r.spatialReference)}),this._getOrCreateSymbol("parallelSign",r.view.effectiveTheme.accentColor))}visualizeRightAngleQuad(e,r){const t=d(),i=d(),p=f();b(t,n(e.centerVertex),n(e.previousVertex)),b(i,n(e.nextVertex),n(e.previousVertex)),P(p,t,i);const S=`rightAngleQuad${p[2]<0?45:225}`;return this._visualizeSnappingIndicator(new o({paths:[[[...e.previousVertex],[...e.centerVertex],[...e.nextVertex]]],spatialReference:l(s,r.spatialReference)}),this._getOrCreateSymbol(S,r.view.effectiveTheme.accentColor))}_visualizeSnappingIndicator(e,r){const t=new u({geometry:e,symbol:r});return this._graphicsLayer.add(t),M(()=>{this._graphicsLayer.remove(t)})}_getOrCreateSymbol(e,r){var i;const t=this._symbolPairingsByType;return((i=t.get(e))==null?void 0:i.color)!==r&&t.set(e,{color:r,symbol:w(e,r)}),t.get(e).symbol}}function w(a,e){const r=[...e.toRgb(),255*e.a];switch(a){case"point":return new g({outline:{width:.5,color:[0,0,0,1]},size:10,color:e});case"intersectionPoint":return new g({outline:new C({width:1.5,color:e}),size:15,color:[0,0,0,0]});case"line":return new c({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:v.Butt,joinStyle:I.Round,miterLimit:10,width:y(m.lineHintWidthTarget),color:r}]}}});case"parallelSign":return new c({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:r}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:r}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}});case"rightAngleQuad45":case"rightAngleQuad225":{const t=a==="rightAngleQuad45"?45:225;return new c({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:y(m.rightAngleHintSize),rotation:t,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:y(m.rightAngleHintOutlineSize),color:r},{type:"CIMSolidFill",enable:!0,color:[...e.toRgb(),255*e.a*.4]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}})}}}export{O as d};
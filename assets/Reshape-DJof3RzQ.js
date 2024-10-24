import{F as l,G as m,K as A,eK as I,gh as B,M as V,gw as N,c5 as L,go as X,cS as w,bN as G,di as Y,br as S,fq as q,c7 as J,P as Q,aD as E,hu as W,c1 as tt,R as T,gj as O,b6 as k,hv as et,dC as it,eI as b,aA as ot,aO as st}from"./index-C1aGfQcb.js";import{h as rt}from"./GraphicsLayer-7fnK8PA0.js";import{l as nt}from"./ViewingMode-HRfKv6NR.js";import{d as pt}from"./SnappingVisualizer2D-Bz9mNgwk.js";import{i as at}from"./drawUtils-BqwzBuVL.js";import ht from"./GraphicMover-BXAg2mBy.js";import{D as P,B as ct,A as lt,F as mt}from"./Editor-BZKF0HZM.js";import{r as dt,K as vt,c as U,m as yt,R as _t,H as ut,k as gt,G as ft}from"./SketchTooltipInfo-DuJVRn9_.js";import{i as xt,p as Gt}from"./SelectedVertexTooltipInfo-ePpFunqV.js";import{i as bt}from"./TranslateTooltipInfo-CA9YaD4t.js";import{u as z,P as Vt,E as wt,e as Mt}from"./automaticAreaMeasurementUtils-B8M9AKp8.js";import{h as St}from"./settings-CUbKJ-2d.js";import{_ as Et}from"./screenUtils-CLE_gLy7.js";import"./GraphicsCollection-BlUFPpxh.js";import"./Layer-CneDw8eF.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./BlendLayer-CG9LFMxd.js";import"./jsonUtils-n3e_wlfQ.js";import"./parser-C4Qiz3JH.js";import"./utils-sqJe3zMg.js";import"./ScaleRangeLayer-66YiyNPI.js";import"./ElevationInfo-D7CBP7sd.js";import"./lengthUtils-CFwdZ3dz.js";import"./vec2-D9okOEat.js";import"./vec2f64-CCfZVA9N.js";import"./enums-CmIX1y88.js";import"./GraphicManipulator-BMTkDhtD.js";import"./vec32-CmwgPQMd.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./projectPointToVector-ByIVLKML.js";import"./elevationInfoUtils-DQT3uSQq.js";import"./defaults-Dbnhuv3C.js";import"./defaultsJSON-GKolV7NZ.js";import"./drapedUtils-BnpEPkkO.js";import"./projectVectorToVector-Dtcb6Asj.js";import"./Spinner-CEWOvPN4.js";import"./AttachmentInfo-Cg9fIPGU.js";import"./legacyIcon-CEIp6Pa9.js";import"./UpdatingHandles-DOPUoIlu.js";import"./FeatureLayerBase-BNIuOgAL.js";import"./commonProperties-Drl05DKJ.js";import"./HeightModelInfo-kVs8dE0B.js";import"./arcgisLayerUrl-BkZy4Mr3.js";import"./featureLayerUtils-Dy99w2fj.js";import"./Query-LPs1Zyw4.js";import"./FullTextSearch-Cza0yp3f.js";import"./jsonUtils-CWFaUb2E.js";import"./UniqueValueRenderer-CAZbf8NT.js";import"./RendererLegendOptions-CULirduz.js";import"./diffUtils-DMLidw0V.js";import"./colorRamps-D4VCsfmX.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-dx28E4EQ.js";import"./jsonUtils-BWWcP_yB.js";import"./styleUtils-CEgUrR2a.js";import"./LRUCache-DbPTy7LA.js";import"./Version-DD-eRUXC.js";import"./FieldsIndex-BrdRr9E_.js";import"./UnknownTimeZone-DhxWDwo9.js";import"./OverrideHelper-D-UVQ00R.js";import"./colorUtils-BWiljOUv.js";import"./vec42-BHDxGccW.js";import"./vec4f64-o2zAXfmz.js";import"./utils-D7agaEG-.js";import"./quantizationUtils-DbJV_fl5.js";import"./heatmapUtils-D0BPLm9w.js";import"./LayerFloorInfo-DzoJncEV.js";import"./Relationship-CBhq9gYu.js";import"./serviceCapabilitiesUtils-B23--4px.js";import"./arcade-DfpF5wFh.js";import"./TimeOnly-vNYE6bX9.js";import"./ImmutableArray-BPVd6ESQ.js";import"./FeatureLayer-DGRhhm0K.js";import"./MultiOriginJSONSupport-Qqzd52Lf.js";import"./workers-CeelWDzo.js";import"./editsZScale-8GE3gysf.js";import"./queryZScale-D-ZT69l7.js";import"./FeatureSet-CeKoTEEO.js";import"./APIKeyMixin-BrvyKlIW.js";import"./ArcGISService-C1oUW8BT.js";import"./CustomParametersMixin-BhjpsNjD.js";import"./EditBusLayer-DCXZWvgn.js";import"./FeatureEffectLayer-gWJrS8gr.js";import"./FeatureEffect-B5YAe6Lk.js";import"./FeatureReductionLayer-DuxcLofN.js";import"./FeatureReductionSelection-tRCh97wj.js";import"./labelingInfo-BV0df7F6.js";import"./labelUtils-C_ZaLudT.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-nNeN4Mrb.js";import"./OrderedLayer-B8Gw_A9P.js";import"./OrderByInfo-k2G4k_zV.js";import"./PortalLayer-Bqf_dhsv.js";import"./portalItemUtils-Cy9KvMYK.js";import"./RefreshableLayer-CwxQNwd3.js";import"./TemporalLayer-CR5q7V2k.js";import"./TimeInfo-CY1-cj-U.js";import"./FeatureTemplate-DJBXu3Te.js";import"./FeatureType-JHO2oVJp.js";import"./fieldProperties-CoDAhoou.js";import"./versionUtils-DBm9Te4x.js";import"./styleUtils-CFywnZa6.js";import"./popupUtils-BA1X4qoc.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";import"./symbolUtils-BmmDXP-E.js";import"./utils-C2gvZghy.js";import"./mat2df32-BR-p9z6z.js";import"./webStyleSymbolUtils-kO7zmqzd.js";import"./utils-CS8i_70G.js";import"./plane-CM4t6fNH.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./sphere-DuEd_sPX.js";import"./mat3-Dg2BrR6m.js";import"./infoFor3D-C0hFfS1m.js";import"./utils-BQBvadb7.js";import"./widget-3rB5q3_K.js";import"./uploadAssetErrors-Cy9k5t87.js";import"./signal-CRiDvIIF.js";import"./spatialReferenceEllipsoidUtils-BEJMNM9o.js";import"./geodesicLengthMeasurementUtils-DHp52l__.js";import"./MeshTransform-CQofocAh.js";import"./quat-D8-cBF-l.js";import"./axisAngleDegrees-C6bqw-Uy.js";import"./meshVertexSpaceUtils-D5F-abOR.js";import"./MeshLocalVertexSpace-sgg6_SW2.js";import"./themeUtils-C3zvZbsE.js";import"./a11yUtils-Tsw26pQ5.js";import"./memoize-DsJmrG76.js";import"./PointSnappingHint-DLpaNTCp.js";import"./earcut-Lltz9D9k.js";import"./triangle-CPy2PSEx.js";import"./lineSegment-C6H8qMyL.js";let x=class extends dt{constructor(t){super(t),this.type="translate-vertex",this.distance=I,this.elevation=null,this.area=null,this.totalLength=null}clear(){this.distance=I,this.elevation=null,this.area=null,this.totalLength=null}};l([m()],x.prototype,"type",void 0),l([m()],x.prototype,"distance",void 0),l([m()],x.prototype,"elevation",void 0),l([m()],x.prototype,"area",void 0),l([m()],x.prototype,"totalLength",void 0),x=l([A("esri.views.interactive.tooltip.infos.TranslateVertexTooltipInfo")],x);function It(t){const e={sketchOptions:t,viewType:"2d"};return{movePoint:new xt(e),selectedVertex:new Gt(e),translateGraphic:new bt(e),translateVertices:new x(e)}}function kt(t,e){function i(){const r=e(),n=r.sketchOptions.tooltips.effectiveEnabled?r.activeTooltipInfo:null;return{...r,activeTooltipInfo:n}}let o=!1;function s(r){o||(o=!0,r(),o=!1)}return B([V(()=>{var n,p;const r=i();return{context:r,geometry:(n=r.graphic)==null?void 0:n.geometry,vertexGeometry:(p=r.selectedVertex)==null?void 0:p.geometry}},({context:r})=>{s(()=>{Tt(r),t.info=r.activeTooltipInfo})},N),V(()=>{const r=i(),{activeTooltipInfo:n}=r;if(n&&"key"in n)return{context:r,key:n.key}},(r,n)=>{r&&n&&r.key!==n.key&&s(()=>C(r.context))},L),vt(t,{onBeforePaste:()=>{o=!0},onAfterPaste:()=>{C(i()),o=!1}})])}function Tt(t){const e=t.activeTooltipInfo;if(e){switch(e==null?void 0:e.type){case"move-point":return Ot(e,t);case"selected-vertex":return Ct(e,t)}e.sketchOptions=t.sketchOptions}}function Ot(t,{graphic:e}){D(t,e,e==null?void 0:e.geometry)}function Ct(t,{graphic:e,selectedVertex:i}){D(t,e,i==null?void 0:i.geometry);const o=e==null?void 0:e.geometry;switch(o==null?void 0:o.type){case"polygon":t.geometryType="polygon",t.totalLength.visible=!1,t.area.actual=z(o);break;case"polyline":t.geometryType="polyline",t.totalLength.actual=U(o),t.area.visible=!1}}function D(t,e,i){var o;e&&(i==null?void 0:i.type)==="point"&&(t.setLocationFromPoint(i),t.elevation.actual=_t(i),t.elevation.visible=!!((o=e.geometry)!=null&&o.hasZ),t.elevation.readOnly=!1,t.elevation.showAsZ=!0)}function C(t){function e(r,n){const p=n==null?void 0:n.geometry;if(!p||p.type!=="point")return;const{dx:a,dy:c,dz:h}=ut(r,p);if(a===0&&c===0&&h===0)return;const{x:d,y:_,z:u,m:g,spatialReference:f}=p,M=new w({x:d+a,y:_+c,z:u!=null?u+h:void 0,m:g,spatialReference:f});t.updateGeometry(n,M,p,a,c)}const{activeTooltipInfo:i,graphic:o,selectedVertex:s}=t;switch(i==null?void 0:i.type){case"move-point":return e(i,o);case"selected-vertex":return e(i,s)}}function Ht(t,e,i){t.clear(),F(t,e,i)}function $t(t,e,i,o){t.clear(),(i==null?void 0:i.type)==="polygon"?t.area=z(i):(i==null?void 0:i.type)==="polyline"&&(t.totalLength=U(i)),F(t,e,o)}function F(t,e,i){if(!i)return;const{x:o,y:s}=i.origin,r=e.toMap(i),n=e.toMap(X(o,s)),p=yt(n,r);t.distance=p??I}class Rt{constructor(e,i,o){this.graphic=e,this.mover=i,this.selected=o,this.type="reshape-start"}}class At{constructor(e,i,o){this.graphic=e,this.mover=i,this.selected=o,this.type="reshape"}}class Lt{constructor(e,i,o){this.graphic=e,this.mover=i,this.selected=o,this.type="reshape-stop"}}class Pt{constructor(e,i,o){this.mover=e,this.dx=i,this.dy=o,this.type="move-start"}}class Ut{constructor(e,i,o){this.mover=e,this.dx=i,this.dy=o,this.type="move"}}class zt{constructor(e,i,o){this.mover=e,this.dx=i,this.dy=o,this.type="move-stop"}}class Dt{constructor(e){this.added=e,this.type="vertex-select"}}class Ft{constructor(e){this.removed=e,this.type="vertex-deselect"}}class Zt{constructor(e,i,o,s){this.added=e,this.graphic=i,this.oldGraphic=o,this.vertices=s,this.type="vertex-add"}}class Kt{constructor(e,i,o,s){this.removed=e,this.graphic=i,this.oldGraphic=o,this.vertices=s,this.type="vertex-remove"}}const y=St.reshapeGraphics,jt={vertices:{default:new G({style:"circle",size:y.vertex.size,color:y.vertex.color,outline:{color:y.vertex.outlineColor,width:1}}),hover:new G({style:"circle",size:y.vertex.hoverSize,color:y.vertex.hoverColor,outline:{color:y.vertex.hoverOutlineColor,width:1}}),selected:new G({style:"circle",size:y.selected.size,color:y.selected.color,outline:{color:y.selected.outlineColor,width:1}})},midpoints:{default:new G({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}}),hover:new G({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}})}};let v=class extends Y.EventedAccessor{constructor(t){super(t),this._updateHandlesOnExternalGeometryChange=null,this._activeOperationInfo=null,this._editGeometryOperations=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingContext=null,this._snappingGraphicsLayer=null,this._hoverGraphic=null,this._snappingTask=null,this._stagedVertex=null,this.tooltip=null,this.activeTooltipInfo=null,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new S,this.midpointSymbol=new G({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=new S,this.snappingManager=null,this.symbols=jt,this.sketchOptions=new P,this.type="reshape",this.vertexGraphics=new S,this.view=null}initialize(){const t=this.view;this._highlightHelper=new ct({view:t}),this._setup(),this._updateHandlesOnExternalGeometryChange=q(()=>{var e;return(e=this.graphic)==null?void 0:e.geometry},e=>{if(!e)return;const i=new Set(this.selectedVertices.map(c=>{var h;return(h=c.attributes)==null?void 0:h.pointIndex}));this._highlightHelper.removeAll(),this._setUpHighlights(),this._setupGraphics(),this._clearSelection(),this.vertexGraphics.filter(c=>i.has(c.attributes.pointIndex)).forEach(c=>this._addToSelection(c));const{enableMovement:o,_mover:s,graphic:r,midpointGraphics:n,vertexGraphics:p}=this,a=p.concat(n).items;o&&a.push(r),s==null||s.set("graphics",a)},L),this.tooltip=gt(()=>({view:t,options:this.sketchOptions.tooltips})),this.tooltipInfos=It(this.sketchOptions),this.addHandles([J(()=>t==null?void 0:t.ready,()=>{const{layer:e,view:i}=this;lt(i,e),this.addHandles(i.on("key-down",o=>this._keyDownHandler(o),Et.TOOL))},{once:!0,initial:!0}),V(()=>this.graphic,()=>this.refresh()),V(()=>this.layer,(e,i)=>{i&&(this._clearSelection(),this._resetGraphics(i)),this.refresh()}),V(()=>this.enableMidpoints,()=>this.refresh()),kt(this.tooltip,()=>this._tooltipsContext),V(()=>this.view.effectiveTheme.accentColor,()=>this._updateSymbolsForTheme(),Q),this._updateHandlesOnExternalGeometryChange]),this._updateTooltip()}destroy(){var t;this._reset(),(t=this._mover)==null||t.destroy(),this._mover=null,this.tooltip=E(this.tooltip)}get _coordinateHelper(){var t,e,i;return((t=this._editGeometryOperations)==null?void 0:t.data.coordinateHelper)??Vt(!!((e=this.graphic.geometry)!=null&&e.hasZ),!!((i=this.graphic.geometry)!=null&&i.hasM),this.view.spatialReference)}get _selectedVertex(){return this.selectedVertices.length===1?this.selectedVertices.at(0):void 0}get _tooltipsContext(){return{sketchOptions:this.sketchOptions,activeTooltipInfo:this.activeTooltipInfo,graphic:this.graphic,selectedVertex:this._selectedVertex,updateGeometry:(t,e,i,o,s)=>{this._setUpGeometryHelper();const r=t===this.graphic;if(r?this._emitMoveStartEvent(0,0):this._emitReshapeStartEvent(t),this._syncGeometryAfterVertexMove(t,e,o,s,!0),r){const{view:p}=this,a=p.toScreen(i),c=p.toScreen(e),h=((c==null?void 0:c.x)??0)-((a==null?void 0:a.x)??0),d=((c==null?void 0:c.y)??0)-((a==null?void 0:a.y)??0);this._emitMoveEvent(h,d),this._emitMoveStopEvent(h,d)}else this._emitReshapeEvent(t),this._emitReshapeStopEvent(t);this._editGeometryOperations=E(this._editGeometryOperations)}}}set highlightsEnabled(t){var e;(e=this._highlightHelper)==null||e.removeAll(),this._set("highlightsEnabled",t),this._setUpHighlights()}get state(){const t=this.view.ready,e=!(!this.graphic||!this.layer);return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){const e=[];return this.graphic&&e.push(this.graphic),e.concat(this.vertexGraphics.items,this.midpointGraphics.items),e.length>0&&e.includes(t)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){const{selectedVertices:t}=this;t.length&&this._removeVertices(t)}_setup(){const{graphic:t,layer:e}=this;if(!e||(t==null?void 0:t.geometry)==null)return;const i=t.geometry;i.type!=="mesh"&&i.type!=="extent"?(i.type==="polygon"&&W(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){var t;this.highlightsEnabled&&this.graphic&&((t=this._highlightHelper)==null||t.add(this.graphic))}_setUpGeometryHelper(){const t=this.graphic.geometry;if(t==null||t.type==="mesh"||t.type==="extent")return void this._logGeometryTypeError();const e=t.type==="multipoint"?new tt({paths:[t.points],spatialReference:t.spatialReference}):t;this._editGeometryOperations=wt.fromGeometry(e,nt.Local)}_saveSnappingContextForHandle(t,e){var o;this._snappingGraphicsLayer=new rt({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer);const i=this._editGeometryOperations;T(i),this._snappingContext=new Mt({editGeometryOperations:i,elevationInfo:{mode:"on-the-ground",offset:0},pointer:((o=e.viewEvent)==null?void 0:o.pointerType)||"mouse",excludeFeature:this.graphic,feature:this.graphic,visualizer:new pt(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(t)})}_reset(){var t;this._clearSelection(),(t=this._highlightHelper)==null||t.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){var t;this.snappingManager!=null&&this.snappingManager.doneSnapping(),this._snappingGraphicsLayer!=null&&((t=this.view)!=null&&t.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=E(this._editGeometryOperations),this._snappingTask=O(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(t){this._removeMidpointGraphics(t),this._removeVertexGraphics(t),this.selectedVertices.removeAll(),this._updateTooltip()}_removeMidpointGraphics(t){const e=t||this.layer;e&&e.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach(i=>i.destroy()),this.midpointGraphics.removeAll()}_removeVertexGraphics(t){const e=t||this.layer;e&&e.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach(i=>i.destroy()),this.vertexGraphics.removeAll()}_setupGraphics(){const t=this.graphic.geometry;if(t!=null&&(t.type==="polyline"||t.type==="polygon")){const e=H(t);this.enableMidpoints&&this._setUpMidpointGraphics(e),this.enableVertices&&this._setUpVertexGraphics(e)}}_setUpMidpointGraphics(t){this._removeMidpointGraphics();const e=this._createMidpointGraphics(t);this.midpointGraphics.addMany(e),this.layer.addMany(e)}_setUpVertexGraphics(t){this._removeVertexGraphics();const e=this._createVertexGraphics(t);this.vertexGraphics.addMany(e),this._storeRelatedVertexIndices(),this.layer.addMany(e)}_createVertexGraphics(t){const{_graphicAttributes:e,symbols:i}=this,o=[];return t==null||t.forEach((s,r)=>{s.forEach((n,p)=>{var a;o.push(new k({geometry:this._coordinateHelper.arrayToPoint(n),symbol:(a=i==null?void 0:i.vertices)==null?void 0:a.default,attributes:{...e,pathIndex:r,pointIndex:p}}))})}),o}_createMidpointGraphics(t){var s;const{_graphicAttributes:e,symbols:i}=this,o=[];for(let r=0;r<t.length;r++){const n=t[r];for(let p=0;p<n.length;p++){const a=(p+1)%n.length;if(((s=this.graphic.geometry)==null?void 0:s.type)==="polyline"&&a===0)continue;const c=n[p],h=n[a],d=this._getMidpoint(c,h);o.push(new k({geometry:d,symbol:i.midpoints.default,attributes:{...e,pathIndex:r,pointIndexStart:p,pointIndexEnd:a}}))}}return o}_updateSymbolsForTheme(){var e;const t=this.view.effectiveTheme.accentColor;this.symbols={vertices:{...this.symbols.vertices,default:this.symbols.vertices.default.clone().set("color",t),hover:(e=this.symbols.vertices.hover)==null?void 0:e.clone().set("color",t)},midpoints:{...this.symbols.midpoints}};for(const i of this.vertexGraphics)this._isSelected(i)?i.symbol=this.symbols.vertices.selected:this._hoverGraphic===i?i.symbol=this.symbols.vertices.hover:i.symbol=this.symbols.vertices.default}_storeRelatedVertexIndices(){const t=this.vertexGraphics.items;if(!t)return;const e=t.map(({geometry:i})=>({x:i.x,y:i.y}));for(let i=0;i<e.length;i++){const o=[];for(let s=0;s<e.length;s++){if(i===s)continue;const r=e[i],n=e[s];r.x===n.x&&r.y===n.y&&o.push(s)}t[i].attributes.relatedGraphicIndices=o}}_setupMover(){const{enableMovement:t,graphic:e,midpointGraphics:i,vertexGraphics:o,view:s}=this,r=o.concat(i).items;t&&r.push(e),this._mover=new ht({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:r,view:s,callbacks:{onGraphicClick:n=>this._onGraphicClickCallback(n),onGraphicMoveStart:n=>this._onGraphicMoveStartCallback(n),onGraphicMove:n=>this._onGraphicMoveCallback(n),onGraphicMoveStop:n=>this._onGraphicMoveStopCallback(n),onGraphicPointerOver:n=>this._onGraphicPointerOverCallback(n),onGraphicPointerOut:n=>this._onGraphicPointerOutCallback(n)}})}_onGraphicClickCallback(t){var i,o;t.viewEvent.stopPropagation();const e=t.graphic;if(e===this.graphic)this.clearSelection(),this.emit("graphic-click",t),(o=(i=this.callbacks).onGraphicClick)==null||o.call(i,t);else if(this._isMidpoint(e)){if(t.viewEvent.button===2)return;const s=this.graphic.clone(),r=this._createVertexFromMidpoint(e);this.refresh(),this._emitVertexAddEvent([e],s,r)}else this._isVertex(e)&&(t.viewEvent.stopPropagation(),t.viewEvent.button===2?this._removeVertices(e):(t.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(e)?this._removeFromSelection(e,!0):this._addToSelection(e)))}_setUpOperation(t){const{graphic:e,dx:i,dy:o}=t,s=e===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(e,t),this._activeOperationInfo={target:this.graphic,mover:e,operationType:s?"move":"reshape",totalDx:i,totalDy:o}}_onGraphicMoveStartCallback(t){const{dx:e,dy:i,graphic:o}=t;if(o===this.graphic){const{geometry:s}=o;return this._setUpOperation(t),this._emitMoveStartEvent(e,i),void(s!=null&&s.type==="point"&&this._onHandleMove(o,e,i,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)}))}if(!this.selectedVertices.includes(o)){if(this._clearSelection(),this._isMidpoint(o)){const s=this.graphic.clone(),r=this._createVertexFromMidpoint(o);this._emitVertexAddEvent([o],s,r)}this._addToSelection(o)}this._setUpOperation(t),this._emitReshapeStartEvent(o),this._onHandleMove(o,e,i,t,()=>{this._updateTooltip(o,t.viewEvent),this._emitReshapeEvent(o)})}_onGraphicMoveCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:o,graphic:s}=t;e.totalDx+=i,e.totalDy+=o;const{operationType:r}=e,{geometry:n}=s;if(n!=null){if(r!=="move")this._onHandleMove(s,i,o,t,()=>{this._updateTooltip(s,t.viewEvent),this._emitReshapeEvent(s)});else if(n.type==="point")this._onHandleMove(s,i,o,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,o)});else if(n.type==="polyline"||n.type==="polygon"){const p=H(n);this._updateVertexGraphicLocations(p),this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,o)}}}_onGraphicMoveStopCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:o,graphic:s}=t,{operationType:r}=e;e.totalDx+=i,e.totalDy+=o,this._onHandleMove(s,i,o,t,()=>r==="move"?this._emitMoveStopEvent():this._emitReshapeStopEvent(s)),this._isMidpoint(s)?this.refresh():(this._updateTooltip(this._isVertex(s)?s:null),this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(t){const{_coordinateHelper:e}=this;for(const i of this.vertexGraphics){const{pathIndex:o,pointIndex:s}=i.attributes;i.geometry=e.arrayToPoint(t[o][s])}this._updateMidpointGraphicLocations(t)}_updateMidpointGraphicLocations(t){for(const e of this.midpointGraphics){const{pathIndex:i,pointIndexStart:o,pointIndexEnd:s}=e.attributes,r=t[i];e.geometry=this._getMidpoint(r[o],r[s])}}_getMidpoint(t,e){const{_coordinateHelper:i}=this,o=i.arrayToVector(t),s=i.arrayToVector(e),r=i.toXYZ(o),n=i.toXYZ(s),[p,a,c]=et(r,n),h=i.hasM()?0:void 0;return new w({x:p,y:a,z:c,m:h,spatialReference:i.spatialReference})}_getVertexFromEditGeometry(t){const[e,i]=$(t);return T(this._editGeometryOperations),this._editGeometryOperations.data.components[e].vertices[i]}_onHandleMove(t,e,i,o,s){O(this._snappingTask);const r=this._snappingContext;if(!r)return;const n=t.geometry,p=o.type==="graphic-move-stop";if(this.snappingManager!=null&&this.selectedVertices.length<2&&!p){const a=this.snappingManager;this._stagedVertex=a.update({point:n,context:r}),this._syncGeometryAfterVertexMove(t,new w(this._stagedVertex),e,i,p),s(),this._snappingTask=it(async c=>{const h=await a.snap({point:n,context:r,signal:c});h.valid&&(this._stagedVertex=h.apply(),this._syncGeometryAfterVertexMove(t,new w(this._stagedVertex),e,i,p),s())})}else{const a=this._stagedVertex!=null?new w(this._stagedVertex):n;this._syncGeometryAfterVertexMove(t,a,e,i,p),s()}}_syncGeometryAfterVertexMove(t,e,i,o,s=!1){var n,p;const r=(n=this._editGeometryOperations)==null?void 0:n.data.geometry;if(r)if(r.type==="point")t.geometry=e;else if(r.type==="mesh")t.geometry=r.centerAt(e);else{const{_coordinateHelper:a}=this,[c,h]=$(t);let d=b(r);const _=d[c].length-1,u=a.pointToArray(e);d[c][h]=u,r.type==="polygon"&&(h===0?d[c][_]=u:h===_&&(d[c][0]=u)),this._isVertex(t)&&(d=this._moveRelatedCoordinates(d,t,u),d=this._moveSelectedHandleCoordinates(d,t,i,o,r.type==="polygon"),this._updateMidpointGraphicLocations(d)),this._updateGraphicGeometry(r.clone());const g=a.pointToVector(e),f=this._getVertexFromEditGeometry(t),M=a.getZ(g),Z=g[0]-f.pos[0],K=g[1]-f.pos[1],j=M!=null?M-f.pos[2]:0;(p=this._editGeometryOperations)==null||p.moveVertices([f],Z,K,j),s&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(t),e):t.geometry=e)}}_moveRelatedCoordinates(t,e,i){const{relatedGraphicIndices:o}=e.attributes;for(const s of o){const r=this.vertexGraphics.at(s),{pathIndex:n,pointIndex:p}=r.attributes;t[n][p]=i,r.geometry=e.geometry}return t}_moveSelectedHandleCoordinates(t,e,i,o,s){for(const r of this.selectedVertices)if(r!==e){const{pathIndex:n,pointIndex:p,relatedGraphicIndices:a}=r.attributes,c=at(r.geometry,i,o,this.view),h=b(c),d=t[n].length-1;t[n][p]=h,r.geometry=c,s&&(p===0?t[n][d]=h:p===d&&(t[n][0]=h));for(const _ of a){const u=this.vertexGraphics.at(_),{pathIndex:g,pointIndex:f}=u.attributes;t[g][f]=h,u.geometry=c}}return t}_onGraphicPointerOverCallback(t){const e=t.graphic;this._hoverGraphic=e;const i=this._isVertex(e);i&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.hover),this._updateTooltip(i?e:null),this._updateHoverCursor(e)}_onGraphicPointerOutCallback(t){const e=t.graphic;this._hoverGraphic=null,this._isVertex(e)&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(t){const{_graphicAttributes:e,graphic:i}=this,o=i.geometry;if(o==null||o.type!=="polygon"&&o.type!=="polyline")return[];const s=o.clone(),r=[],{pathIndex:n,pointIndexStart:p,pointIndexEnd:a}=t.attributes,c=b(t.geometry),h=a===0?p+1:a,d=b(s);return d[n].splice(h,0,c),t.attributes={...e,pathIndex:n,pointIndex:h,relatedGraphicIndices:[]},r.push({coordinates:d[n][h],componentIndex:n,vertexIndex:h}),this._updateGraphicGeometry(s),r}_addToSelection(t){const e=R(t);for(const i of e)i.symbol=this.symbols.vertices.selected,this.selectedVertices.add(i),this._updateTooltip(i);this._emitSelectEvent(e)}_removeFromSelection(t,e){const{vertices:i}=this.symbols,o=e?i.hover:i.default;this.selectedVertices.remove(t),t.symbol=o,this._emitDeselectEvent([t]),this._updateTooltip()}_clearSelection(){const t=this.selectedVertices.toArray();if(t.length>0){for(const e of t)e.set("symbol",this.symbols.vertices.default);this.selectedVertices.removeAll(),this._emitDeselectEvent(t),this._updateTooltip()}}_keyDownHandler(t){this._activeOperationInfo==null&&ft(t,this.tooltip)||mt.delete.includes(t.key)&&!t.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(t){const e=this.graphic.geometry;if(e==null||e.type!=="polygon"&&e.type!=="polyline"||e.type==="polygon"&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;const i=this.graphic.clone(),o=e.clone();let s=b(o);const r=[],n=R(t);for(const p of n){const{x:a,y:c}=p.geometry;for(let h=0;h<s.length;h++){const d=s[h];for(let _=0;_<d.length;_++){const[u,g]=d[_];a===u&&c===g&&(r.push({coordinates:s[h][_],componentIndex:h,vertexIndex:_}),s[h].splice(Number(_),1))}}}if(o.type==="polygon")s=s.filter(p=>{if(p.length<2)return!1;const[a,c]=p[0],[h,d]=p[p.length-1];return(p.length!==2||a!==h||c!==d)&&(a===h&&c===d||p.push(p[0]),!0)}),o.rings=s;else{for(const p of s)p.length===1&&s.splice(s.indexOf(p),1);o.paths=s}this._updateGraphicGeometry(o),this.refresh(),this._emitVertexRemoveEvent(n,i,r)}_isVertex(t){return this.vertexGraphics.includes(t)}_isSelected(t){return this._isVertex(t)&&this.selectedVertices.includes(t)}_isMidpoint(t){return this.midpointGraphics.includes(t)}_updateHoverCursor(t){this.view.cursor=this._isMidpoint(t)?"copy":"move"}_updateTooltip(t,e){let i=null;const{graphic:o,view:s,tooltipInfos:r}=this,n=o==null?void 0:o.geometry;(n==null?void 0:n.type)==="point"?i=r.movePoint:this._selectedVertex?i=r.selectedVertex:t===this.graphic?(i=r.translateGraphic,Ht(i,s,e)):t&&this.selectedVertices.length>1&&(i=r.translateVertices,$t(i,s,n,e)),this.activeTooltipInfo=i}_updateGraphicGeometry(t){var e,i;(e=this._updateHandlesOnExternalGeometryChange)==null||e.pause(),this.graphic.geometry=t,(i=this._updateHandlesOnExternalGeometryChange)==null||i.resume()}_emitMoveStartEvent(t,e){var o,s;const i=new Pt(this.graphic,t,e);this.emit("move-start",i),(s=(o=this.callbacks).onMoveStart)==null||s.call(o,i)}_emitMoveEvent(t,e){var o,s;const i=new Ut(this.graphic,t,e);this.emit("move",i),(s=(o=this.callbacks).onMove)==null||s.call(o,i)}_emitMoveStopEvent(t,e){var o,s;if(t==null||e==null){const r=this._activeOperationInfo;if(!r)return;t=r.totalDx,e=r.totalDy}const i=new zt(this.graphic,t,e);this.emit("move-stop",i),(s=(o=this.callbacks).onMoveStop)==null||s.call(o,i)}_emitReshapeStartEvent(t){var i,o;const e=new Rt(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape-start",e),(o=(i=this.callbacks).onReshapeStart)==null||o.call(i,e)}_emitReshapeEvent(t){var i,o;const e=new At(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape",e),(o=(i=this.callbacks).onReshape)==null||o.call(i,e)}_emitReshapeStopEvent(t){var i,o;const e=new Lt(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape-stop",e),(o=(i=this.callbacks).onReshapeStop)==null||o.call(i,e)}_emitSelectEvent(t){var i,o;const e=new Dt(t);this.emit("select",e),(o=(i=this.callbacks).onVertexSelect)==null||o.call(i,e)}_emitDeselectEvent(t){var i,o;const e=new Ft(t);this.emit("deselect",e),(o=(i=this.callbacks).onVertexDeselect)==null||o.call(i,e)}_emitVertexAddEvent(t,e,i){var s,r;const o=new Zt(t,this.graphic,e,i);this.emit("vertex-add",o),(r=(s=this.callbacks).onVertexAdd)==null||r.call(s,o)}_emitVertexRemoveEvent(t,e,i){var s,r;const o=new Kt(t,this.graphic,e,i);this.emit("vertex-remove",o),(r=(s=this.callbacks).onVertexRemove)==null||r.call(s,o)}_logGeometryTypeError(){ot.getLogger(this).error(new st("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};function H(t){const e=b(t.clone());if(t.type==="polygon")for(const i of e){const o=i[i.length-1];i[0][0]===o[0]&&i[0][1]===o[1]&&i.length>2&&i.pop()}return e}function $({attributes:t}){return[(t==null?void 0:t.pathIndex)||0,(t==null?void 0:t.pointIndex)||0]}function R(t){return t instanceof k?[t]:[...t]}l([m()],v.prototype,"_activeOperationInfo",void 0),l([m()],v.prototype,"_coordinateHelper",null),l([m()],v.prototype,"_editGeometryOperations",void 0),l([m()],v.prototype,"tooltip",void 0),l([m()],v.prototype,"tooltipInfos",void 0),l([m()],v.prototype,"activeTooltipInfo",void 0),l([m()],v.prototype,"_selectedVertex",null),l([m()],v.prototype,"_tooltipsContext",null),l([m()],v.prototype,"callbacks",void 0),l([m()],v.prototype,"enableMidpoints",void 0),l([m()],v.prototype,"enableMovement",void 0),l([m()],v.prototype,"enableVertices",void 0),l([m()],v.prototype,"graphic",void 0),l([m({value:!0})],v.prototype,"highlightsEnabled",null),l([m()],v.prototype,"layer",void 0),l([m({readOnly:!0})],v.prototype,"midpointGraphics",void 0),l([m()],v.prototype,"midpointSymbol",void 0),l([m({readOnly:!0})],v.prototype,"selectedVertices",void 0),l([m()],v.prototype,"snappingManager",void 0),l([m({readOnly:!0})],v.prototype,"state",null),l([m()],v.prototype,"symbols",void 0),l([m({type:P})],v.prototype,"sketchOptions",void 0),l([m({readOnly:!0})],v.prototype,"type",void 0),l([m({readOnly:!0})],v.prototype,"vertexGraphics",void 0),l([m()],v.prototype,"view",void 0),v=l([A("esri.views.draw.support.Reshape")],v);const bo=v;export{bo as default};

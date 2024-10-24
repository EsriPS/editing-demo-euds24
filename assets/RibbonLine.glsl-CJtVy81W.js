import{g5 as Me,cr as x,ct as Wt,aF as Vt,aA as bt,g6 as Xe,cV as We,m4 as Bt,di as kt,dm as Qe,gn as Ht,aD as Gt,F as g,aE as Jt,bq as Pe,nd as ne,gc as Yt}from"./index-C1aGfQcb.js";import{e as ye,o as Zt}from"./mat4f64-Dk4dwAN8.js";import{C as qt}from"./computeTranslationToOriginAndRotation-C2_ZYUki.js";import{n as Ve}from"./projectBuffer-CZ7yaGuo.js";import{t as Et,n as Xt,r as Qt,f as Kt}from"./utils-OIoyRVPd.js";import{e as h,E as ei}from"./VertexAttribute-Cq4MnHjR.js";import{n as ti,e as ii}from"./ElevationInfo-D7CBP7sd.js";import{u as ri}from"./hydratedFeatures-ByIq7uy-.js";import{I as ni,E as H,p as He,o as G,u as Re,H as ai,s as q,c as ce,P as Ke,g as Ie,r as si}from"./vec32-CmwgPQMd.js";import{s as oi,n as li,N as ci,r as di}from"./vec4f64-o2zAXfmz.js";import{t as pi}from"./orientedBoundingBox-DCXdMZSx.js";import{r as Ot,k as Ge,aW as hi,aX as ui,ap as S,ar as yt,K as At,aq as Rt,o as M,_ as ge,aY as et,F as fi,f as mi,w as Je,j as vi,e as Ae,R as gi,a0 as Si,I as _i,a as Ti,v as bi,N as Ei,aa as Oi,P as yi,ab as Ai,a5 as Ri,U as xi,V as Ci,ag as tt,ah as Di,ai as Li,aj as Pi,ak as Ii,al as it,am as rt,an as $i,aZ as wi,a_ as nt,a$ as Ni,b0 as Ui,b1 as zi,b2 as Fi,A as k,as as ji,af as re,ay as Be,aG as Mi,aH as Wi,p as Vi}from"./Texture-D7jaxJ9P.js";import{U as at,E as Bi}from"./sphere-DuEd_sPX.js";import{m as ki,M as Ce,p as Se,V,O as st}from"./plane-CM4t6fNH.js";import{t as Hi}from"./basicInterfaces-CZwQPxTp.js";import{s as Gi,m as Ji}from"./Util-BK6CBhAA.js";import{Y as Yi,j as _e}from"./Octree-_-EHFyX0.js";import{r as Zi}from"./vec2-D9okOEat.js";import{v as xt,M as qi,b as $e,B as Xi}from"./lineSegment-C6H8qMyL.js";import{H as Qi}from"./InterleavedLayout-Bb_2wUZe.js";import{n as J,i as Ki,e as er,C as tr,f as ot,h as ir}from"./NormalAttribute.glsl-DGUKFRgB.js";import{o as de}from"./AlphaCutoff-UcccL64p.js";import{E as lt,f as Te}from"./enums-Dk3osxpS.js";import{B as be,g as we,c as ct}from"./renderState-QDOxIGNB.js";import"./BindType-BmZEZMMh.js";import{o as p}from"./interfaces-DDtDqZYj.js";import"./floatRGBA-BxT4aGRY.js";import"./Texture-CLoEFKJJ.js";import{s as rr}from"./vec42-BHDxGccW.js";import"./vec2f64-CCfZVA9N.js";class Dn{constructor(e,i=null,r=0){this.array=e,this.spatialReference=i,this.offset=r}}function Ct(t){return"array"in t}function Ee(t,e,i="ground"){if(Et(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,i);if(Ct(e)){let r=e.offset;return t.getElevation(e.array[r++],e.array[r++],e.array[r]||0,e.spatialReference??t.spatialReference,i)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,i)}function Ln(t,e,i,r,n,a,l,o,s,c,d){const m=pr[d.mode];let v,f,y=0;if(Ve(t,e,i,r,s.spatialReference,n,o))return m!=null&&m.requiresAlignment(d)?(y=m.applyElevationAlignmentBuffer(r,n,a,l,o,s,c,d),v=a,f=l):(v=r,f=n),Ve(v,s.spatialReference,f,a,c.spatialReference,l,o)?y:void 0}function Dt(t,e,i,r,n){const a=(Et(t)?t.z:Ct(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const l=Ee(e,t,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=l,void(n.z=l)}case"relative-to-ground":{const l=Ee(e,t,"ground")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"relative-to-scene":{const l=Ee(e,t,"scene")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"absolute-height":{const l=i.geometryZWithOffset(a,r),o=Ee(e,t,"ground")??0;return n.verticalDistanceToGround=l-o,n.sampledElevation=o,void(n.z=l)}default:return void(n.z=0)}}function Pn(t,e,i,r){return Dt(t,e,i,r,ae),ae.z}function In(t,e,i){return e==="on-the-ground"&&i==="on-the-ground"?t.staysOnTheGround:e===i||e!=="on-the-ground"&&i!=="on-the-ground"?e==null||i==null?t.definedChanged:ke.UPDATE:t.onTheGroundChanged}function $n(t){return t==="relative-to-ground"||t==="relative-to-scene"}function wn(t){return t!=="absolute-height"}function Nn(t,e,i,r,n){Dt(e,i,n,r,ae),nr(t,ae.verticalDistanceToGround);const a=ae.sampledElevation,l=Me(hr,t.transformation);return Oe[0]=e.x,Oe[1]=e.y,Oe[2]=ae.z,qt(e.spatialReference,Oe,l,r.spatialReference)?t.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function nr(t,e){for(let i=0;i<t.geometries.length;++i){const r=t.geometries[i].getMutableAttribute(h.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==e&&(r.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[i],h.CENTEROFFSETANDDISTANCE))}}function ar(t,e,i,r,n,a){let l=0;const o=a.spatialReference;e*=3,r*=3;for(let s=0;s<n;++s){const c=t[e],d=t[e+1],m=t[e+2],v=a.getElevation(c,d,m,o,"ground")??0;l+=v,i[r]=c,i[r+1]=d,i[r+2]=v,e+=3,r+=3}return l/n}function sr(t,e,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,m=a.spatialReference;e*=3,r*=3;for(let v=0;v<n;++v){const f=t[e],y=t[e+1],E=t[e+2],A=a.getElevation(f,y,E,m,"ground")??0;s+=A,i[r]=f,i[r+1]=y,i[r+2]=d==null?E+A+c:A+c,e+=3,r+=3}return s/n}function or(t,e,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,m=a.spatialReference;e*=3,r*=3;for(let v=0;v<n;++v){const f=t[e],y=t[e+1],E=t[e+2],A=a.getElevation(f,y,E,m,"scene")??0;s+=A,i[r]=f,i[r+1]=y,i[r+2]=d==null?E+A+c:A+c,e+=3,r+=3}return s/n}function lr(t){const e=t.meterUnitOffset,i=t.featureExpressionInfoContext;return e!==0||i!=null}function cr(t,e,i,r,n,a,l,o){const s=o.calculateOffsetRenderUnits(l),c=o.featureExpressionInfoContext;e*=3,r*=3;for(let d=0;d<n;++d){const m=t[e],v=t[e+1],f=t[e+2];i[r]=m,i[r+1]=v,i[r+2]=c==null?f+s:s,e+=3,r+=3}return 0}class dr{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var ke;(function(t){t[t.NONE=0]="NONE",t[t.UPDATE=1]="UPDATE",t[t.RECREATE=2]="RECREATE"})(ke||(ke={}));const pr={"absolute-height":{applyElevationAlignmentBuffer:cr,requiresAlignment:lr},"on-the-ground":{applyElevationAlignmentBuffer:ar,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:sr,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:or,requiresAlignment:()=>!0}},hr=ye(),ae=new dr,Oe=x(),ur=()=>bt.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function fr(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function Un(t,e,i,r){const n=t==null?void 0:t.expression;if(typeof n!="string")return null;const a=Sr(n);if(a!=null)return{cachedResult:a};const l=await Wt();Vt(i);const o=l.arcadeUtils,s=o.createSyntaxTree(n);return o.dependsOnView(s)?(r!=null&&r.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:o.createFunction(s),context:o.createExecContext(null,{sr:e}),modules:l}}}function mr(t,e,i){return t.arcadeUtils.createFeature(e.attributes,e.geometry,i)}function vr(t,e){if(t!=null&&!Lt(t)){if(!e||!t.arcade)return void ur().errorOncePerTick("Arcade support required but not provided");const i=e;i._geometry&&(i._geometry=ri(i._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function gr(t){if(t!=null){if(Lt(t))return t.cachedResult;const e=t.arcade;let i=e==null?void 0:e.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof i!="number"&&(t.cachedResult=0,i=0),i}return 0}function zn(t,e=!1){let i=t==null?void 0:t.featureExpressionInfo;const r=i==null?void 0:i.expression;return e||r==="0"||(i=null),i??null}const Fn={cachedResult:0};function Lt(t){return t.cachedResult!=null}function Sr(t){return t==="0"?0:null}let jn=class Pt{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=ti(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,i){const r=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?r:e+r}calculateOffsetRenderUnits(e){let i=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return r!=null&&(i+=gr(r)*this._metersPerElevationInfoUnit),i/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=ii(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,i,r){if(e==null)return void(this._featureExpressionInfoContext=null);const n=e==null?void 0:e.arcade;n&&i!=null&&r!=null?(this._featureExpressionInfoContext=fr(e),vr(this._featureExpressionInfoContext,mr(n.modules,i,r))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const i=new Pt;return e!=null&&i.setFromElevationInfo(e),i}},_r=class extends Ot{get geometries(){return this._geometries}get transformation(){return this._transformation??Zt}set transformation(e){this._transformation=Me(this._transformation??ye(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Me(this._shaderTransformation??ye(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=Ge.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new It),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){Gi(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const i=this._geometries.splice(e,1)[0];i&&(this._emit("geometryRemoved",{object:this,geometry:i}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,i,r=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:i,sync:r}),ei(i)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const i of this._geometries)i.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new hi;for(const i of this._geometries)i.occludees=Xt(i.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const i of this._geometries)i.occludees=Qt(i.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const i=new ui(e);for(const r of this._geometries)r.addHighlight(i);return this._emit("highlightChanged",this),i}removeHighlight(e){for(const i of this._geometries)i.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===Hi.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,i){return Xe(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=ye()){return Xe(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new dt,this._validateBoundingVolume(this._bvWorldSpace,pe.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new dt,this._validateBoundingVolume(this._bvObjectSpace,pe.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,i){const r=i===pe.ObjectSpace;for(const n of this._geometries){const a=n.boundingInfo;a&&Tr(a,e,r?n.transformation:this.getCombinedShaderTransformation(n))}ni(at(e.bounds),e.min,e.max,.5);for(const n of this._geometries){const a=n.boundingInfo;if(a==null)continue;const l=r?n.transformation:this.getCombinedShaderTransformation(n),o=ki(l);H(pt,a.center,l);const s=He(pt,at(e.bounds)),c=a.radius*o;e.bounds[3]=Math.max(e.bounds[3],s+c)}}_invalidateBoundingVolume(){var i;const e=(i=this._bvWorldSpace)==null?void 0:i.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,i){this._parentLayer&&this._parentLayer.events.emit(e,i)}get test(){}};class It{constructor(){this.min=We(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=We(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class dt extends It{constructor(){super(...arguments),this.bounds=Bi()}}function Tr(t,e,i){const r=t.bbMin,n=t.bbMax;if(Bt(i)){const a=G(br,i[12],i[13],i[14]);Re(U,r,a),Re(j,n,a);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],U[l]),e.max[l]=Math.max(e.max[l],j[l])}else if(H(U,r,i),ai(r,n))for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],U[a]),e.max[a]=Math.max(e.max[a],U[a]);else{H(j,n,i);for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],U[a],j[a]),e.max[a]=Math.max(e.max[a],U[a],j[a]);for(let a=0;a<3;++a){q(U,r),q(j,n),U[a]=n[a],j[a]=r[a],H(U,U,i),H(j,j,i);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],U[l],j[l]),e.max[l]=Math.max(e.max[l],U[l],j[l])}}}const br=x(),U=x(),j=x(),pt=x();var pe;(function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"})(pe||(pe={}));const Er=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];var xe;(function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"})(xe||(xe={}));let Or=class extends Ot{constructor(e,i,r=""){super(),this.stage=e,this.apiLayerUid=r,this.type=Ge.Layer,this.events=new kt,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Qe,this._handles=new Ht,this._objects=new Qe,this._pickable=!0,this.visible=(i==null?void 0:i.visible)??!0,this._pickable=(i==null?void 0:i.pickable)??!0,this.updatePolicy=(i==null?void 0:i.updatePolicy)??xe.ASYNC,this._disableOctree=(i==null?void 0:i.disableOctree)??!1,e.add(this);for(const n of Er)this._handles.add(this.events.on(n,a=>e.handleEvent(n,a)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const i of e)i.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const i=new Array;if(this._objects.removeUnorderedMany(e,e.length,i),i.length!==0){for(const r of i)r.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:i}),this._octree!=null){for(let r=0;r<i.length;)this._objectsAdded.removeUnordered(i[r])?(i[r]=i[i.length-1],i.length-=1):++r;this._octree.remove(i)}}}sync(){this.updatePolicy!==xe.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,i){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,i)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new Yi(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Gt(this._octree),this._objectsAdded.clear()}};var ht,ut,ft;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})(ht||(ht={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(ut||(ut={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(ft||(ft={}));let yr=class{constructor(e,i){this.vec3=e,this.id=i}};function mt(t,e,i,r){return new yr(We(t,e,i),r)}var ee,he;(function(t){t[t.Draped=0]="Draped",t[t.Screen=1]="Screen",t[t.World=2]="World",t[t.COUNT=3]="COUNT"})(ee||(ee={})),function(t){t[t.Center=0]="Center",t[t.Tip=1]="Tip",t[t.COUNT=2]="COUNT"}(he||(he={}));class w extends yt{constructor(){super(...arguments),this.space=ee.Screen,this.anchor=he.Center,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=At.None,this.emissionSource=Rt.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===ee.Draped}}g([S({count:ee.COUNT})],w.prototype,"space",void 0),g([S({count:he.COUNT})],w.prototype,"anchor",void 0),g([S()],w.prototype,"occluder",void 0),g([S()],w.prototype,"hasSlicePlane",void 0),g([S()],w.prototype,"writeDepth",void 0),g([S()],w.prototype,"hideOnShortSegments",void 0),g([S()],w.prototype,"hasCap",void 0),g([S()],w.prototype,"hasTip",void 0),g([S()],w.prototype,"vvSize",void 0),g([S()],w.prototype,"vvColor",void 0),g([S()],w.prototype,"vvOpacity",void 0),g([S()],w.prototype,"hasOccludees",void 0),g([S()],w.prototype,"terrainDepthTest",void 0),g([S()],w.prototype,"cullAboveTerrain",void 0);const vt=8;function Ar(t,e){const i=t.vertex;i.uniforms.add(new M("intrinsicWidth",r=>r.width)),e.vvSize?(t.attributes.add(h.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new ge("vvSizeMinSize",r=>r.vvSize.minSize),new ge("vvSizeMaxSize",r=>r.vvSize.maxSize),new ge("vvSizeOffset",r=>r.vvSize.offset),new ge("vvSizeFactor",r=>r.vvSize.factor)),i.code.add(p`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add(h.SIZE,"float"),i.code.add(p`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(t.attributes.add(h.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new et("vvOpacityValues",r=>r.vvOpacity.values,vt),new et("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,vt)),i.code.add(p`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(p`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(t.include(fi,e),t.attributes.add(h.COLORFEATUREATTRIBUTE,"float"),i.code.add(p`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(t.attributes.add(h.COLOR,"vec4"),i.code.add(p`vec4 getColor(){
return applyOpacity(color);
}`))}function $t(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function Rr(t){if(t==null)return 1;const e=$t(t);return Math.floor(e.reduce((i,r)=>i+r))}function xr(t){return $t(t).reduce((e,i)=>Math.max(e,i))}function Cr(t){return t==null?oi:t.length===4?t:rr(Dr,t[0],t[1],t[2],1)}const Dr=li();function Lr(t,e){e.stippleEnabled?Pr(t,e):Ir(t)}function Pr(t,e){const i=!(e.draped&&e.stipplePreferContinuous),{vertex:r,fragment:n}=t;n.include(Kt),e.draped||(mi(r,e),r.uniforms.add(new M("worldToScreenPerDistanceRatio",(a,l)=>1/l.camera.perScreenPixelRatio)),r.code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),r.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${wr};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(p`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(p`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),Je(r),r.code.add(p`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),n.uniforms.add(new vi("stipplePatternTexture",a=>a.stippleTexture),new M("stipplePatternSDFNormalizer",a=>$r(a.stipplePattern)),new M("stipplePatternPixelSizeInv",a=>1/wt(a))),n.code.add(p`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),e.stippleOffColorEnabled?(n.uniforms.add(new Ae("stippleOffColor",a=>Cr(a.stippleOffColor))),n.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):n.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function Ir(t){t.fragment.code.add(p`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function $r(t){return t?(Math.floor(.5*(xr(t)-1))+.5)/t.pixelRatio:1}function wt(t){const e=t.stipplePattern;return e?Rr(t.stipplePattern)/e.pixelRatio:1}const wr=p.float(.4),Nt=64,Nr=Nt/2,Ur=Nr/5,zr=Nt/Ur,Bn=.25;function Fr(t,e){const i=t.vertex;Je(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",zr).code.add(p`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===ee.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new M("perRenderPixelRatio",(r,n)=>n.camera.perRenderPixelRatio)),i.code.add(p`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var te;(function(t){t[t.BUTT=0]="BUTT",t[t.SQUARE=1]="SQUARE",t[t.ROUND=2]="ROUND",t[t.COUNT=3]="COUNT"})(te||(te={}));class O extends yt{constructor(){super(...arguments),this.capType=te.BUTT,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=At.None,this.emissionSource=Rt.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}}g([S({count:te.COUNT})],O.prototype,"capType",void 0),g([S()],O.prototype,"hasSlicePlane",void 0),g([S()],O.prototype,"hasPolygonOffset",void 0),g([S()],O.prototype,"writeDepth",void 0),g([S()],O.prototype,"draped",void 0),g([S()],O.prototype,"stippleEnabled",void 0),g([S()],O.prototype,"stippleOffColorEnabled",void 0),g([S()],O.prototype,"stipplePreferContinuous",void 0),g([S()],O.prototype,"roundJoins",void 0),g([S()],O.prototype,"applyMarkerOffset",void 0),g([S()],O.prototype,"vvSize",void 0),g([S()],O.prototype,"vvColor",void 0),g([S()],O.prototype,"vvOpacity",void 0),g([S()],O.prototype,"falloffEnabled",void 0),g([S()],O.prototype,"innerColorEnabled",void 0),g([S()],O.prototype,"hasOccludees",void 0),g([S()],O.prototype,"occluder",void 0),g([S()],O.prototype,"terrainDepthTest",void 0),g([S()],O.prototype,"cullAboveTerrain",void 0),g([S()],O.prototype,"wireframe",void 0),g([S()],O.prototype,"discardInvisibleFragments",void 0),g([S()],O.prototype,"objectAndLayerIdColorInstanced",void 0);const ue=1;function Ut(t){const e=new gi,{attributes:i,varyings:r,vertex:n,fragment:a}=e,{applyMarkerOffset:l,draped:o,output:s,capType:c,stippleEnabled:d,falloffEnabled:m,roundJoins:v,wireframe:f,innerColorEnabled:y}=t;e.include(Si),e.include(Ar,t),e.include(Lr,t),e.include(_i,t);const E=l&&!o;E&&(n.uniforms.add(new M("markerScale",T=>T.markerScale)),e.include(Fr,{space:ee.World})),Ti(n,t),n.uniforms.add(new bi("inverseProjectionMatrix",(T,u)=>u.camera.inverseProjectionMatrix),new Ei("nearFar",(T,u)=>u.camera.nearFar),new M("miterLimit",T=>T.join!=="miter"?0:T.miterLimit),new Ae("viewport",(T,u)=>u.camera.fullViewport)),n.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(h.POSITION,"vec3"),i.add(h.PREVPOSITION,"vec3"),i.add(h.NEXTPOSITION,"vec3"),i.add(h.SUBDIVISIONFACTOR,"float"),i.add(h.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");const A=t.terrainDepthTest&&s===J.Color;A&&r.add("depth","float");const F=d;F&&r.add("vLineSizeInv","float");const b=c===te.ROUND,$=d&&b,_=m||$;_&&r.add("vLineDistanceNorm","float"),b&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),n.code.add(p`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),n.code.add(p`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),n.code.add(p`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${A?"depth = pos.z;":""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),Je(n),n.constants.add("aaWidth","float",d?0:1).main.add(p`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${F?p`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),E&&n.main.add(p`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),n.main.add(p`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(d||b)&&n.main.add(p`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${b?p`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),n.main.add(p`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),v?n.main.add(p`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${d?p`min(1.0, subdivisionFactor * ${p.float((ue+2)/(ue+1))})`:p`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):n.main.add(p`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const D=c!==te.BUTT;return n.main.add(p`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${D?p`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),n.main.add(p`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${_?p`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),b&&n.main.add(p`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),d&&(o?n.uniforms.add(new M("worldToScreenRatio",(T,u)=>1/u.screenToPCSRatio)):n.main.add(p`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),n.main.add(p`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),o?n.main.add(p`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):n.main.add(p`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),n.uniforms.add(new M("stipplePatternPixelSize",T=>wt(T))),n.main.add(p`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),n.main.add(p`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${f&&!o?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),A&&e.include(Oi,t),e.include(yi,t),e.include(Ai,t),a.include(Ri),a.main.add(p`
    discardBySlice(vpos);
    ${A?"terrainDepthTest(depth);":""}
  `),f?a.main.add(p`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(b&&a.main.add(p`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${p.float(de)}) {
          discard;
        }
      `),$?a.main.add(p`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${p.float(de)}, stippleCoverage);
      `):a.main.add(p`float stippleAlpha = getStippleAlpha();`),s!==J.ObjectAndLayerIdColor&&a.main.add(p`discardByStippleAlpha(stippleAlpha, ${p.float(de)});`),a.uniforms.add(new Ae("intrinsicColor",T=>T.color)),a.main.add(p`vec4 color = intrinsicColor * vColor;`),y&&(a.uniforms.add(new Ae("innerColor",T=>T.innerColor??T.color),new M("innerWidth",(T,u)=>T.innerWidth*u.camera.pixelRatio)),a.main.add(p`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),a.main.add(p`vec4 finalColor = blendStipple(color, stippleAlpha);`),m&&(a.uniforms.add(new M("falloff",T=>T.falloff)),a.main.add(p`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),d||a.main.add(p`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),a.main.add(p`outputColorHighlightOID(finalColor, vpos);`),e}const jr=Object.freeze(Object.defineProperty({__proto__:null,build:Ut,ribbonlineNumRoundJoinSubdivisions:ue},Symbol.toStringTag,{value:"Module"}));class Mr extends xi{constructor(e,i,r){super(e,i,new Ci(jr,()=>Jt(()=>Promise.resolve().then(()=>Xr),void 0)),r,zt),this.primitiveType=i.wireframe?lt.LINES:lt.TRIANGLE_STRIP}_makePipelineState(e,i){const{oitPass:r,output:n,hasOccludees:a,hasPolygonOffset:l}=e,o=r===tt.NONE,s=r===tt.FrontFace;return be({blending:e.output===J.Color?Di(r):null,depthTest:{func:Li(r)},depthWrite:Pi(e),drawBuffers:n===J.Depth?{buffers:[Te.NONE]}:Ii(r,n),colorWrite:we,stencilWrite:a?it:null,stencilTest:a?i?rt:$i:null,polygonOffset:o||s?l?gt:null:wi})}initializePipeline(e){if(e.occluder){const i=e.hasPolygonOffset?gt:null;this._occluderPipelineTransparent=be({blending:ct,polygonOffset:i,depthTest:nt,depthWrite:null,colorWrite:we,stencilWrite:null,stencilTest:Ni,drawBuffers:e.output===J.Depth?{buffers:[Te.NONE]}:null}),this._occluderPipelineOpaque=be({blending:ct,polygonOffset:i,depthTest:nt,depthWrite:null,colorWrite:we,stencilWrite:Ui,stencilTest:zi,drawBuffers:e.output===J.Depth?{buffers:[Te.NONE]}:null}),this._occluderPipelineMaskWrite=be({blending:null,polygonOffset:i,depthTest:Fi,depthWrite:null,colorWrite:null,stencilWrite:it,stencilTest:rt,drawBuffers:e.output===J.Depth?{buffers:[Te.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,i){if(e)return this._occludeePipeline;switch(i){case k.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case k.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const gt={factor:0,units:-4},zt=new Map([[h.POSITION,0],[h.PREVPOSITION,1],[h.NEXTPOSITION,2],[h.SUBDIVISIONFACTOR,3],[h.UV0,4],[h.COLOR,5],[h.COLORFEATUREATTRIBUTE,5],[h.SIZE,6],[h.SIZEFEATUREATTRIBUTE,6],[h.OPACITYFEATUREATTRIBUTE,7],[h.OBJECTANDLAYERIDCOLOR,8]]);var N;(function(t){t[t.LEFT_JOIN_START=-2]="LEFT_JOIN_START",t[t.LEFT_JOIN_END=-1]="LEFT_JOIN_END",t[t.LEFT_CAP_START=-4]="LEFT_CAP_START",t[t.LEFT_CAP_END=-5]="LEFT_CAP_END",t[t.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",t[t.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",t[t.RIGHT_CAP_START=4]="RIGHT_CAP_START",t[t.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(N||(N={}));class Wr extends ji{constructor(e){super(e,Br),this._configuration=new O,this.vertexAttributeLocations=zt,this.produces=new Map([[k.OPAQUE_MATERIAL,i=>Ki(i)||er(i)&&this.parameters.renderOccluded===re.OccludeAndTransparentStencil],[k.OPAQUE_MATERIAL_WITHOUT_NORMALS,i=>tr(i)],[k.OCCLUDER_MATERIAL,i=>ot(i)&&this.parameters.renderOccluded===re.OccludeAndTransparentStencil],[k.TRANSPARENT_OCCLUDER_MATERIAL,i=>ot(i)&&this.parameters.renderOccluded===re.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL,i=>i===J.Color&&this.parameters.writeDepth&&this.parameters.renderOccluded!==re.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>i===J.Color&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==re.OccludeAndTransparentStencil],[k.DRAPED_MATERIAL,i=>ir(i)]])}getConfiguration(e,i){this._configuration.output=e,this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===k.DRAPED_MATERIAL;const r=this.parameters.stipplePattern!=null&&e!==J.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Hr(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===re.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){var e;return this.parameters.color[3]>=de||this.parameters.stipplePattern!=null&&(((e=this.parameters.stippleOffColor)==null?void 0:e[3])??0)>de}intersectDraped(e,i,r,n,a,l){if(!r.options.selectionMode)return;const o=e.attributes.get(h.POSITION).data,s=e.attributes.get(h.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const E=e.attributes.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Pe(this.parameters.vvSize.offset[0]+E*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s&&(c*=s.data[0]);const d=n[0],m=n[1],v=(c/2+4)*e.screenToWorldRatio;let f=Number.MAX_VALUE,y=0;for(let E=0;E<o.length-5;E+=3){const A=o[E],F=o[E+1],b=d-A,$=m-F,_=o[E+3]-A,D=o[E+4]-F,T=Pe((_*b+D*$)/(_*_+D*D),0,1),u=_*T-b,ie=D*T-$,L=u*u+ie*ie;L<f&&(f=L,y=E/3)}f<v*v&&a(l.dist,l.normal,y,!1)}intersect(e,i,r,n,a,l){if(!r.options.selectionMode||!e.visible)return;if(!Ji(i))return void bt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const o=e.attributes,s=o.get(h.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const b=o.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Pe(this.parameters.vvSize.offset[0]+b*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o.has(h.SIZE)&&(c*=o.get(h.SIZE).data[0]);const d=r.camera,m=Gr;Zi(m,r.point);const v=c*d.pixelRatio/2+4*d.pixelRatio;G(le[0],m[0]-v,m[1]+v,0),G(le[1],m[0]+v,m[1]+v,0),G(le[2],m[0]+v,m[1]-v,0),G(le[3],m[0]-v,m[1]-v,0);for(let b=0;b<4;b++)if(!d.unprojectFromRenderScreen(le[b],Z[b]))return;Se(d.eye,Z[0],Z[1],Ue),Se(d.eye,Z[1],Z[2],ze),Se(d.eye,Z[2],Z[3],Fe),Se(d.eye,Z[3],Z[0],je);let f=Number.MAX_VALUE,y=0;const E=Ft(this.parameters,o)?s.length-2:s.length-5;for(let b=0;b<E;b+=3){P[0]=s[b]+i[12],P[1]=s[b+1]+i[13],P[2]=s[b+2]+i[14];const $=(b+3)%s.length;if(I[0]=s[$]+i[12],I[1]=s[$+1]+i[13],I[2]=s[$+2]+i[14],V(Ue,P)<0&&V(Ue,I)<0||V(ze,P)<0&&V(ze,I)<0||V(Fe,P)<0&&V(Fe,I)<0||V(je,P)<0&&V(je,I)<0)continue;if(d.projectToRenderScreen(P,Q),d.projectToRenderScreen(I,K),Q[2]<0&&K[2]>0){ce(B,P,I);const D=d.frustum,T=-V(D[_e.NEAR],P)/Ke(B,st(D[_e.NEAR]));Ie(B,B,T),Re(P,P,B),d.projectToRenderScreen(P,Q)}else if(Q[2]>0&&K[2]<0){ce(B,I,P);const D=d.frustum,T=-V(D[_e.NEAR],I)/Ke(B,st(D[_e.NEAR]));Ie(B,B,T),Re(I,I,B),d.projectToRenderScreen(I,K)}else if(Q[2]<0&&K[2]<0)continue;Q[2]=0,K[2]=0;const _=qi($e(Q,K,Tt),m);_<f&&(f=_,q(St,P),q(_t,I),y=b/3)}const A=r.rayBegin,F=r.rayEnd;if(f<v*v){let b=Number.MAX_VALUE;if(Xi($e(St,_t,Tt),$e(A,F,Jr),X)){ce(X,X,A);const $=si(X);Ie(X,X,1/$),b=$/He(A,F)}l(b,X,y,!1)}}get _layout(){const e=Qi().vec3f(h.POSITION).vec3f(h.PREVPOSITION).vec3f(h.NEXTPOSITION).f32(h.SUBDIVISIONFACTOR).vec2f(h.UV0);return this.parameters.vvSize?e.f32(h.SIZEFEATUREATTRIBUTE):e.f32(h.SIZE),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4f(h.COLOR),this.parameters.vvOpacity&&e.f32(h.OPACITYFEATUREATTRIBUTE),Be()&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new kr(this._layout,this.parameters)}createGLMaterial(e){return new Vr(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}}class Vr extends Mi{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.acquireTechnique(Mr,e)}}class Br extends Wi{constructor(){super(...arguments),this.width=0,this.color=ci,this.join="miter",this.cap=te.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){var e;return this.color[3]<1||this.stipplePattern!=null&&(((e=this.stippleOffColor)==null?void 0:e[3])??0)<1}}class kr{constructor(e,i){this.vertexBufferLayout=e,this._parameters=i,this.numJoinSubdivisions=0;const r=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=ue+r}}_isClosed(e){return Ft(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const r=e.get(h.POSITION).indices.length/2+1,n=this._isClosed(e);let a=n?2:2*2;return a+=((n?r:r-1)-(n?0:1))*(2*this.numJoinSubdivisions+4),a+=2,this._parameters.wireframe&&(a=2+4*(a-2)),a}write(e,i,r,n,a,l){var Ye,Ze,qe;const o=Yr,s=Zr,c=qr,d=r.get(h.POSITION),m=d.indices,v=d.data.length/3,f=(Ye=r.get(h.DISTANCETOSTART))==null?void 0:Ye.data;m&&m.length!==2*(v-1)&&console.warn("RibbonLineMaterial does not support indices");const y=((Ze=r.get(h.SIZEFEATUREATTRIBUTE))==null?void 0:Ze.data[0])??((qe=r.get(h.SIZE))==null?void 0:qe.data[0])??1;let E=[1,1,1,1],A=0;const F=this.vertexBufferLayout.fields.has(h.COLORFEATUREATTRIBUTE);F?A=r.get(h.COLORFEATUREATTRIBUTE).data[0]:r.has(h.COLOR)&&(E=r.get(h.COLOR).data);const b=this.vertexBufferLayout.fields.has(h.OPACITYFEATUREATTRIBUTE),$=b?r.get(h.OPACITYFEATUREATTRIBUTE).data[0]:0,_=new Float32Array(a.buffer),D=Be()?new Uint8Array(a.buffer):null,T=this.vertexBufferLayout.stride/4;let u=l*T;const ie=u;let L=0;const De=f?(R,W,Y)=>L=f[Y]:(R,W,Y)=>L+=He(R,W),z=(R,W,Y,oe,me,jt,Mt)=>{if(_[u++]=W[0],_[u++]=W[1],_[u++]=W[2],_[u++]=R[0],_[u++]=R[1],_[u++]=R[2],_[u++]=Y[0],_[u++]=Y[1],_[u++]=Y[2],_[u++]=oe,_[u++]=Mt,_[u++]=me,_[u++]=y,F)_[u++]=A;else{const ve=Math.min(4*jt,E.length-4);_[u++]=E[ve],_[u++]=E[ve+1],_[u++]=E[ve+2],_[u++]=E[ve+3]}b&&(_[u++]=$),Be()&&(n&&(D[4*u]=n[0],D[4*u+1]=n[1],D[4*u+2]=n[2],D[4*u+3]=n[3]),u++)};u+=T,G(s,d.data[0],d.data[1],d.data[2]),e&&H(s,s,e);const fe=this._isClosed(r);if(fe){const R=d.data.length-3;G(o,d.data[R],d.data[R+1],d.data[R+2]),e&&H(o,o,e)}else G(c,d.data[3],d.data[4],d.data[5]),e&&H(c,c,e),z(s,s,c,1,N.LEFT_CAP_START,0,0),z(s,s,c,1,N.RIGHT_CAP_START,0,0),q(o,s),q(s,c);const Le=fe?0:1,se=fe?v:v-1;for(let R=Le;R<se;R++){const W=(R+1)%v*3;G(c,d.data[W],d.data[W+1],d.data[W+2]),e&&H(c,c,e),De(o,s,R),z(o,s,c,0,N.LEFT_JOIN_END,R,L),z(o,s,c,0,N.RIGHT_JOIN_END,R,L);const Y=this.numJoinSubdivisions;for(let oe=0;oe<Y;++oe){const me=(oe+1)/(Y+1);z(o,s,c,me,N.LEFT_JOIN_END,R,L),z(o,s,c,me,N.RIGHT_JOIN_END,R,L)}z(o,s,c,1,N.LEFT_JOIN_START,R,L),z(o,s,c,1,N.RIGHT_JOIN_START,R,L),q(o,s),q(s,c)}fe?(G(c,d.data[3],d.data[4],d.data[5]),e&&H(c,c,e),L=De(o,s,se),z(o,s,c,0,N.LEFT_JOIN_END,Le,L),z(o,s,c,0,N.RIGHT_JOIN_END,Le,L)):(L=De(o,s,se),z(o,s,s,0,N.LEFT_CAP_END,se,L),z(o,s,s,0,N.RIGHT_CAP_END,se,L)),Ne(_,ie+T,_,ie,T),u=Ne(_,u-T,_,u,T),this._parameters.wireframe&&this._addWireframeVertices(a,ie,u,T)}_addWireframeVertices(e,i,r,n){const a=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),l=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT,r-i);let o=0;const s=c=>o=Ne(l,c,a,o,n);for(let c=0;c<l.length-1;c+=2*n)s(c),s(c+2*n),s(c+1*n),s(c+2*n),s(c+1*n),s(c+3*n)}}function Ne(t,e,i,r,n){for(let a=0;a<n;a++)i[r++]=t[e++];return r}function Ft(t,e){return t.isClosed?e.get(h.POSITION).indices.length>2:!1}function Hr(t){return t.anchor===he.Tip&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const P=x(),I=x(),B=x(),X=x(),Gr=x(),Q=ne(),K=ne(),St=x(),_t=x(),Tt=xt(),Jr=xt(),Yr=x(),Zr=x(),qr=x(),le=[ne(),ne(),ne(),ne()],Z=[x(),x(),x(),x()],Ue=Ce(),ze=Ce(),Fe=Ce(),je=Ce();class kn{constructor(e){this._originSR=e,this._rootOriginId="root/"+Yt(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const i=this._origins.get(this._rootOriginId);if(i==null){const d=mt(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const r=this._gridSize,n=Math.round(e[0]/r),a=Math.round(e[1]/r),l=Math.round(e[2]/r),o=`${n}/${a}/${l}`;let s=this._origins.get(o);const c=.5*r;if(ce(C,e,i.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),C[0]<c&&C[1]<c&&C[2]<c){if(s){const d=Math.max(...C);if(ce(C,e,s.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),Math.max(...C)<d)return s}return i}return s||(s=mt(n*r,a*r,l*r,o),this._origins.set(o,s)),s}_drawOriginBox(e,i=di(1,1,0,1)){const r=window.view,n=r._stage,a=i.toString();if(!this._objects.has(a)){this._material=new Wr({width:2,color:i}),n.add(this._material);const f=new Or(n,{pickable:!1}),y=new _r({castShadow:!1});n.add(y),f.add(y),this._objects.set(a,y)}const l=this._objects.get(a),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=o.length,c=new Array(3*s),d=new Array,m=.5*this._gridSize;for(let f=0;f<s;f++)c[3*f]=e[0]+(1&o[f]?m:-m),c[3*f+1]=e[1]+(2&o[f]?m:-m),c[3*f+2]=e[2]+(4&o[f]?m:-m),f>0&&d.push(f-1,f);Ve(c,this._originSR,0,c,r.renderSpatialReference,0,s);const v=new Vi(this._material,[[h.POSITION,new pi(c,d,3,!0)]],null,Ge.Line);n.add(v),l.addGeometry(v)}get test(){}}const C=x(),Xr=Object.freeze(Object.defineProperty({__proto__:null,build:Ut,ribbonlineNumRoundJoinSubdivisions:ue},Symbol.toStringTag,{value:"Module"}));export{_r as A,w as B,xe as C,te as D,nr as E,Pn as F,Ee as G,dr as R,Wr as W,kn as _,ft as a,ut as b,Dt as c,ke as d,ht as e,Fn as f,$n as g,zn as h,Un as i,Or as j,wn as k,vr as l,In as m,ee as n,jn as o,Nn as p,Ar as q,Dn as r,mr as s,mt as t,Ln as u,Fr as v,he as w,Nt as x,Nr as y,Bn as z};

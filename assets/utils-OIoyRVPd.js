import{cW as Pe,cr as I,d9 as Qe,g5 as Ne,cU as Ke,hh as et,jJ as tt,jK as st,iu as nt,dk as rt,jL as ot,jM as it,jN as at,cx as lt,jO as ct,jP as ht,jQ as ut,gD as ft,cV as dt}from"./index-C1aGfQcb.js";import{e as Fe,o as He}from"./mat4f64-Dk4dwAN8.js";import{u as C,E as Me,g as L,r as pt,s as G,A as _,c as j,_ as k,o as pe,P as Be}from"./vec32-CmwgPQMd.js";import{z as mt,s as gt}from"./vec42-BHDxGccW.js";import{n as Ot,t as yt,N as wt}from"./vec4f64-o2zAXfmz.js";import{b as J,S as vt,v as be,k as xt}from"./sphere-DuEd_sPX.js";import{l as _e}from"./ViewingMode-HRfKv6NR.js";import{s as At,e as Ce,i as oe}from"./IntersectorInterfaces-BgX4KEwK.js";import"./boundedPlane-C18Ysvcq.js";import{b as $t,d as Ee,s as Pt,a as Mt,f as bt,e as ke,o as ce,c as St,g as Tt,w as It,h as Rt,i as Nt,j as _t,t as D,p as U,k as Xe,l as ze}from"./Texture-D7jaxJ9P.js";import{o as z}from"./interfaces-DDtDqZYj.js";import{e as A}from"./VertexAttribute-Cq4MnHjR.js";import{$ as Ct}from"./projection-BOBOhWzm.js";import{u as Et}from"./meshVertexSpaceUtils-D5F-abOR.js";import{e as Ie}from"./projectVectorToVector-Dtcb6Asj.js";import{o as zt,x as Lt}from"./hydratedFeatures-ByIq7uy-.js";import{r as R,n as V,t as Le}from"./vec3f32-nZdmKIgz.js";import{A as qe,l as Vt}from"./Indices-NXfq_dEG.js";import{M as Dt,l as Ut,x as jt}from"./plane-CM4t6fNH.js";import{t as b}from"./orientedBoundingBox-DCXdMZSx.js";import{s as re}from"./Util-BK6CBhAA.js";import{t as Gt}from"./doublePrecisionUtils-B0owpBza.js";let Ft=class{constructor(e,n,t){this.object=e,this.geometryId=n,this.triangleNr=t}},Ht=class extends Ft{constructor(e,n,t,r){super(e,n,t),this.center=r!=null?Pe(r):null}};class Bt{constructor(e){this.layerUid=e}}let Ls=class extends Bt{constructor(e,n){super(e),this.graphicUid=n}};function kt(s){return(s==null?void 0:s.dist)!=null}const Ve=1e-5;let Xt=class{constructor(e){this.options=new At,this._results=new qt,this.transform=new $t,this.tolerance=Ve,this.verticalOffset=null,this._ray=J(),this._rayEnd=I(),this._rayBeginTransformed=I(),this._rayEndTransformed=I(),this.viewingMode=e??_e.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(e,n,t){this.resetWithRay(vt(e,n,this._ray),t)}resetWithRay(e,n){this.camera=n,e!==this._ray&&be(e,this._ray),this.options.verticalOffset!==0?this.viewingMode===_e.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,C(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(e=null,n,t,r,h){var a;this.point=n,this.filterPredicate=r,this.tolerance=t??Ve;const o=Ee(this.verticalOffset);if(e&&e.length>0){const c=h?i=>{h(i)&&this.intersectObject(i)}:i=>{this.intersectObject(i)};for(const i of e){const l=(a=i.getSpatialQueryAccelerator)==null?void 0:a.call(i);l!=null?(o!=null?l.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,c,o):l.forEachAlongRay(this._ray.origin,this._ray.direction,c),this.options.selectionMode&&this.options.hud&&l.forEachDegenerateObject(c)):i.objects.forAll(p=>c(p))}}this.sortResults()}intersectObject(e){const n=e.geometries;if(!n)return;const t=e.effectiveTransformation,r=Ee(this.verticalOffset);for(const h of n){if(!h.visible)continue;const{material:o,id:a}=h;if(!o.visible)continue;this.transform.setAndInvalidateLazyTransforms(t,h.transformation),Me(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),Me(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const c=this.transform.transform;r!=null&&(r.objectTransform=this.transform),o.intersect(h,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,(i,l,p,v,x,$)=>{if(i>=0){if(this.filterPredicate!=null&&!this.filterPredicate(this._ray.origin,this._rayEnd,i))return;const f=v?this._results.hud:this._results,d=v?m=>{const g=new Ht(e,a,p,$);m.set(oe.HUD,g,i,l,He,x)}:m=>m.set(oe.OBJECT,{object:e,geometryId:a,triangleNr:p},i,l,c,x);if((f.min.drapedLayerOrder==null||x>=f.min.drapedLayerOrder)&&(f.min.dist==null||i<f.min.dist)&&d(f.min),this.options.store!==Ce.MIN&&(f.max.drapedLayerOrder==null||x<f.max.drapedLayerOrder)&&(f.max.dist==null||i>f.max.dist)&&d(f.max),this.options.store===Ce.ALL)if(v){const m=new Se(this._ray);d(m),this._results.hud.all.push(m)}else{const m=new K(this._ray);d(m),this._results.all.push(m)}}})}}sortResults(e=this._results.all){e.sort((n,t)=>n.dist!==t.dist?(n.dist??0)-(t.dist??0):n.drapedLayerOrder!==t.drapedLayerOrder?De(n.drapedLayerOrder,t.drapedLayerOrder):De(n.drapedLayerGraphicOrder,t.drapedLayerGraphicOrder))}};function De(s,e){return(e??-Number.MAX_VALUE)-(s??-Number.MAX_VALUE)}function Us(s){return new Xt(s)}let qt=class{constructor(){this.min=new K(J()),this.max=new K(J()),this.hud={min:new Se(J()),max:new Se(J()),all:new Array},this.ground=new K(J()),this.all=[]}init(e){this.min.init(e),this.max.init(e),this.ground.init(e),this.all.length=0,this.hud.min.init(e),this.hud.max.init(e),this.hud.all.length=0}},K=class{get ray(){return this._ray}get distanceInRenderSpace(){return this.dist!=null?(L(ae,this.ray.direction,this.dist),pt(ae)):null}getIntersectionPoint(e){return!!kt(this)&&(L(ae,this.ray.direction,this.dist),C(e,this.ray.origin,ae),!0)}getTransformedNormal(e){return G(ne,this.normal),ne[3]=0,mt(ne,ne,this.transformation),G(e,ne),_(e,e)}constructor(e){this.intersector=oe.OBJECT,this.normal=I(),this.transformation=Fe(),this._ray=J(),this.init(e)}init(e){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=oe.OBJECT,be(e,this._ray)}set(e,n,t,r,h,o,a){this.intersector=e,this.dist=t,G(this.normal,r??Qe),Ne(this.transformation,h??He),this.target=n,this.drapedLayerOrder=o,this.drapedLayerGraphicOrder=a}copy(e){be(e.ray,this._ray),this.intersector=e.intersector,this.dist=e.dist,this.target=e.target,this.drapedLayerOrder=e.drapedLayerOrder,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,G(this.normal,e.normal),Ne(this.transformation,e.transformation)}},Se=class extends K{constructor(){super(...arguments),this.intersector=oe.HUD}};function Hs(s){return new K(s)}const ae=I(),ne=Ot();function Bs(s){return s.type==="point"}const Jt=.5;function ks(s,e){s.include(Pt),s.attributes.add(A.POSITION,"vec3"),s.attributes.add(A.NORMAL,"vec3"),s.attributes.add(A.CENTEROFFSETANDDISTANCE,"vec4");const n=s.vertex;Mt(n,e),bt(n,e),n.uniforms.add(new ke("viewport",(t,r)=>r.camera.fullViewport),new ce("polygonOffset",t=>t.shaderPolygonOffset),new ce("cameraGroundRelative",(t,r)=>r.camera.aboveGround?1:-1)),e.hasVerticalOffset&&St(n),n.constants.add("smallOffsetAngle","float",.984807753012208),n.code.add(z`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),n.code.add(z`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?z.float(0):z`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||Tt(n),e.draped||(n.uniforms.add(new ce("perDistancePixelRatio",(t,r)=>Math.tan(r.camera.fovY/2)/(r.camera.fullViewport[2]/2))),n.code.add(z`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${z.float(Jt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&It(n),e.hasScreenSizePerspective&&Rt(n),n.code.add(z`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?z`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":z`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Wt(s){s.uniforms.add(new Nt("alignPixelEnabled",(e,n)=>n.alignPixelEnabled)),s.code.add(z`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),s.code.add(z`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var me;(function(s){s[s.Occluded=0]="Occluded",s[s.NotOccluded=1]="NotOccluded",s[s.Both=2]="Both",s[s.COUNT=3]="COUNT"})(me||(me={}));function Xs(s){s.vertex.uniforms.add(new ce("renderTransparentlyOccludedHUD",(e,n)=>n.hudRenderStyle===me.Occluded?1:n.hudRenderStyle===me.NotOccluded?0:.75),new ke("viewport",(e,n)=>n.camera.fullViewport),new _t("hudVisibilityTexture",(e,n)=>{var t;return(t=n.hudVisibility)==null?void 0:t.getTexture()})),s.vertex.include(Wt),s.vertex.code.add(z`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function qs(s){s.code.add(z`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Js(s,e){if(s.type==="point")return B(s,e,!1);if(zt(s))switch(s.type){case"extent":return B(s.center,e,!1);case"polygon":return B(s.centroid,e,!1);case"polyline":return B(Ue(s),e,!0);case"mesh":return B(Et(s.vertexSpace,s.spatialReference)??s.extent.center,e,!1);case"multipoint":return}else switch(s.type){case"extent":return B(Zt(s),e,!0);case"polygon":return B(Yt(s),e,!0);case"polyline":return B(Ue(s),e,!0);case"multipoint":return}}function Ue(s){const e=s.paths[0];if(!e||e.length===0)return null;const n=tt(e,st(e)/2);return Ie(n[0],n[1],n[2],s.spatialReference)}function Zt(s){return Ie(.5*(s.xmax+s.xmin),.5*(s.ymax+s.ymin),s.zmin!=null&&s.zmax!=null&&isFinite(s.zmin)&&isFinite(s.zmax)?.5*(s.zmax+s.zmin):void 0,s.spatialReference)}function Yt(s){const e=s.rings[0];if(!e||e.length===0)return null;const n=nt(s.rings,!!s.hasZ);return Ie(n[0],n[1],n[2],s.spatialReference)}function B(s,e,n){const t=n?s:Lt(s);return e&&s?Ct(s,t,e)?t:null:t}function Ws(s,e,n,t=0){if(s){e||(e=rt());const r=s;let h=.5*r.width*(n-1),o=.5*r.height*(n-1);return r.width<1e-7*r.height?h+=o/20:r.height<1e-7*r.width&&(o+=h/20),gt(e,r.xmin-h-t,r.ymin-o-t,r.xmax+h+t,r.ymax+o+t),e}return null}function Zs(s,e,n=null){const t=yt(wt);return s!=null&&(t[0]=s[0],t[1]=s[1],t[2]=s[2]),e!=null?t[3]=e:s!=null&&s.length>3&&(t[3]=s[3]),n&&(t[0]*=n,t[1]*=n,t[2]*=n,t[3]*=n),t}function Ys(s=et,e,n,t=1){const r=new Array(3);if(e==null||n==null)r[0]=1,r[1]=1,r[2]=1;else{let h,o=0;for(let a=2;a>=0;a--){const c=s[a];let i;const l=c!=null,p=a===0&&!h&&!l,v=n[a];c==="symbol-value"||p?i=v!==0?e[a]/v:1:l&&c!=="proportional"&&isFinite(c)&&(i=v!==0?c/v:1),i!=null&&(r[a]=i,h=i,o=Math.max(o,Math.abs(i)))}for(let a=2;a>=0;a--)r[a]==null?r[a]=h:r[a]===0&&(r[a]=.001*o)}for(let h=2;h>=0;h--)r[h]/=t;return Ke(r)}function Qt(s){return s.isPrimitive!=null}function Qs(s){return Kt(Qt(s)?[s.width,s.depth,s.height]:s)?null:"Symbol sizes may not be negative values"}function Kt(s){const e=n=>n==null||n>=0;return Array.isArray(s)?s.every(e):e(s)}function Ks(s,e,n,t=Fe()){return s&&ot(t,t,-s/180*Math.PI),e&&it(t,t,e/180*Math.PI),n&&at(t,t,n/180*Math.PI),t}function en(s,e,n){if(n.minDemResolution!=null)return n.minDemResolution;const t=lt(e),r=ct(s)*t,h=ht(s)*t,o=ut(s)*(e.isGeographic?1:t);return r===0&&h===0&&o===0?n.minDemResolutionForPoints:.01*Math.max(r,h,o)}var Te;(function(s){function e(o,a){const c=o[a],i=o[a+1],l=o[a+2];return Math.sqrt(c*c+i*i+l*l)}function n(o,a){const c=o[a],i=o[a+1],l=o[a+2],p=1/Math.sqrt(c*c+i*i+l*l);o[a]*=p,o[a+1]*=p,o[a+2]*=p}function t(o,a,c){o[a]*=c,o[a+1]*=c,o[a+2]*=c}function r(o,a,c,i,l,p=a){(l=l||o)[p]=o[a]+c[i],l[p+1]=o[a+1]+c[i+1],l[p+2]=o[a+2]+c[i+2]}function h(o,a,c,i,l,p=a){(l=l||o)[p]=o[a]-c[i],l[p+1]=o[a+1]-c[i+1],l[p+2]=o[a+2]-c[i+2]}s.length=e,s.normalize=n,s.scale=t,s.add=r,s.subtract=h})(Te||(Te={}));const W=Te,ve=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],es=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],ts=[0,0,1,0,1,1,0,1],ss=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Je=new Array(36);for(let s=0;s<6;s++)for(let e=0;e<6;e++)Je[6*s+e]=s;const q=new Array(36);for(let s=0;s<6;s++)q[6*s]=0,q[6*s+1]=1,q[6*s+2]=2,q[6*s+3]=2,q[6*s+4]=3,q[6*s+5]=0;function tn(s,e){Array.isArray(e)||(e=[e,e,e]);const n=new Array(24);for(let t=0;t<8;t++)n[3*t]=ve[t][0]*e[0],n[3*t+1]=ve[t][1]*e[1],n[3*t+2]=ve[t][2]*e[2];return new U(s,[[A.POSITION,new b(n,ss,3,!0)],[A.NORMAL,new b(es,Je,3)],[A.UV0,new b(ts,q,2)]])}const xe=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],ns=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],rs=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],os=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function sn(s,e){Array.isArray(e)||(e=[e,e,e]);const n=new Array(18);for(let t=0;t<6;t++)n[3*t]=xe[t][0]*e[0],n[3*t+1]=xe[t][1]*e[1],n[3*t+2]=xe[t][2]*e[2];return new U(s,[[A.POSITION,new b(n,rs,3,!0)],[A.NORMAL,new b(ns,os,3)]])}const he=R(-.5,0,-.5),ue=R(.5,0,-.5),fe=R(0,0,.5),de=R(0,.5,0),Z=V(),Y=V(),ee=V(),te=V(),se=V();j(Z,he,de),j(Y,he,ue),k(ee,Z,Y),_(ee,ee),j(Z,ue,de),j(Y,ue,fe),k(te,Z,Y),_(te,te),j(Z,fe,de),j(Y,fe,he),k(se,Z,Y),_(se,se);const Ae=[he,ue,fe,de],is=[0,-1,0,ee[0],ee[1],ee[2],te[0],te[1],te[2],se[0],se[1],se[2]],as=[0,1,2,3,1,0,3,2,1,3,0,2],ls=[0,0,0,1,1,1,2,2,2,3,3,3];function nn(s,e){Array.isArray(e)||(e=[e,e,e]);const n=new Array(12);for(let t=0;t<4;t++)n[3*t]=Ae[t][0]*e[0],n[3*t+1]=Ae[t][1]*e[1],n[3*t+2]=Ae[t][2]*e[2];return new U(s,[[A.POSITION,new b(n,as,3,!0)],[A.NORMAL,new b(is,ls,3)]])}function rn(s,e,n,t,r={uv:!0}){const h=-Math.PI,o=2*Math.PI,a=-Math.PI/2,c=Math.PI,i=Math.max(3,Math.floor(n)),l=Math.max(2,Math.floor(t)),p=(i+1)*(l+1),v=D(3*p),x=D(3*p),$=D(2*p),f=[];let d=0;for(let O=0;O<=l;O++){const T=[],u=O/l,P=a+u*c,M=Math.cos(P);for(let N=0;N<=i;N++){const F=N/i,y=h+F*o,E=Math.cos(y)*M,S=Math.sin(P),ie=-Math.sin(y)*M;v[3*d]=E*e,v[3*d+1]=S*e,v[3*d+2]=ie*e,x[3*d]=E,x[3*d+1]=S,x[3*d+2]=ie,$[2*d]=F,$[2*d+1]=u,T.push(d),++d}f.push(T)}const m=new Array;for(let O=0;O<l;O++)for(let T=0;T<i;T++){const u=f[O][T],P=f[O][T+1],M=f[O+1][T+1],N=f[O+1][T];O===0?(m.push(u),m.push(M),m.push(N)):O===l-1?(m.push(u),m.push(P),m.push(M)):(m.push(u),m.push(P),m.push(M),m.push(M),m.push(N),m.push(u))}const g=[[A.POSITION,new b(v,m,3,!0)],[A.NORMAL,new b(x,m,3,!0)]];return r.uv&&g.push([A.UV0,new b($,m,2,!0)]),r.offset&&(g[0][0]=A.OFFSET,g.push([A.POSITION,new b(Float64Array.from(r.offset),qe(m.length),3,!0)])),new U(s,g)}function on(s,e,n,t){const r=cs(e,n);return new U(s,r)}function cs(s,e,n){let t,r;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let c=0;c<t.length;c+=3)W.scale(t,c,s/W.length(t,c));let h={};function o(c,i){c>i&&([c,i]=[i,c]);const l=c.toString()+"."+i.toString();if(h[l])return h[l];let p=t.length;return t.length+=3,W.add(t,3*c,t,3*i,t,p),W.scale(t,p,s/W.length(t,p)),p/=3,h[l]=p,p}for(let c=0;c<e;c++){const i=r.length,l=new Array(4*i);for(let p=0;p<i;p+=3){const v=r[p],x=r[p+1],$=r[p+2],f=o(v,x),d=o(x,$),m=o($,v),g=4*p;l[g]=v,l[g+1]=f,l[g+2]=m,l[g+3]=x,l[g+4]=d,l[g+5]=f,l[g+6]=$,l[g+7]=m,l[g+8]=d,l[g+9]=f,l[g+10]=d,l[g+11]=m}r=l,h={}}const a=ze(t);for(let c=0;c<a.length;c+=3)W.normalize(a,c);return[[A.POSITION,new b(ze(t),r,3,!0)],[A.NORMAL,new b(a,r,3,!0)]]}function an(s,e,n,t,r,h,o,a,c,i=null){const l=n?Pe(n):I(),p=e?Pe(e):dt(0,0,1),v=t?[255*t[0],255*t[1],255*t[2],t.length>3?255*t[3]:255]:[255,255,255,255],x=h!=null&&h.length===2?h:[1,1],$=r!=null?[r]:[0],f=qe(1),d=[[A.POSITION,new b(l,f,3,!0)],[A.NORMAL,new b(p,f,3,!0)],[A.COLOR,new b(v,f,4,!0)],[A.SIZE,new b(x,f,2)],[A.ROTATION,new b($,f,1,!0)]];if(a&&d.push([A.UV0,new b(a,f,a.length)]),o!=null&&(o=[o[0],o[1],o[2],o[3]],d.push([A.CENTEROFFSETANDDISTANCE,new b(o,f,4)])),c){const m=[c[0],c[1],c[2],c[3]];d.push([A.FEATUREATTRIBUTE,new b(m,f,4)])}return new U(s,d,null,Xe.Point,i)}function hs(s,e,n,t,r=!0,h=!0){let o=0;const a=e,c=s;let i=R(0,o,0),l=R(0,o+c,0),p=R(0,-1,0),v=R(0,1,0);t&&(o=c,l=R(0,0,0),i=R(0,o,0),p=R(0,1,0),v=R(0,-1,0));const x=[l,i],$=[p,v],f=n+2,d=Math.sqrt(c*c+a*a);if(t)for(let u=n-1;u>=0;u--){const P=u*(2*Math.PI/n),M=R(Math.cos(P)*a,o,Math.sin(P)*a);x.push(M);const N=R(c*Math.cos(P)/d,-a/d,c*Math.sin(P)/d);$.push(N)}else for(let u=0;u<n;u++){const P=u*(2*Math.PI/n),M=R(Math.cos(P)*a,o,Math.sin(P)*a);x.push(M);const N=R(c*Math.cos(P)/d,a/d,c*Math.sin(P)/d);$.push(N)}const m=new Array,g=new Array;if(r){for(let u=3;u<x.length;u++)m.push(1),m.push(u-1),m.push(u),g.push(0),g.push(0),g.push(0);m.push(x.length-1),m.push(2),m.push(1),g.push(0),g.push(0),g.push(0)}if(h){for(let u=3;u<x.length;u++)m.push(u),m.push(u-1),m.push(0),g.push(u),g.push(u-1),g.push(1);m.push(0),m.push(2),m.push(x.length-1),g.push(1),g.push(2),g.push($.length-1)}const O=D(3*f);for(let u=0;u<f;u++)O[3*u]=x[u][0],O[3*u+1]=x[u][1],O[3*u+2]=x[u][2];const T=D(3*f);for(let u=0;u<f;u++)T[3*u]=$[u][0],T[3*u+1]=$[u][1],T[3*u+2]=$[u][2];return[[A.POSITION,new b(O,m,3,!0)],[A.NORMAL,new b(T,g,3,!0)]]}function ln(s,e,n,t,r,h=!0,o=!0){return new U(s,hs(e,n,t,r,h,o))}function cn(s,e,n,t,r,h,o){const a=r?Le(r):R(1,0,0),c=h?Le(h):R(0,0,0);o??(o=!0);const i=V();_(i,a);const l=V();L(l,i,Math.abs(e));const p=V();L(p,l,-.5),C(p,p,c);const v=R(0,1,0);Math.abs(1-Be(i,v))<.2&&pe(v,0,0,1);const x=V();k(x,i,v),_(x,x),k(v,x,i);const $=2*t+(o?2:0),f=t+(o?2:0),d=D(3*$),m=D(3*f),g=D(2*$),O=new Array(3*t*(o?4:2)),T=new Array(3*t*(o?4:2));o&&(d[3*($-2)]=p[0],d[3*($-2)+1]=p[1],d[3*($-2)+2]=p[2],g[2*($-2)]=0,g[2*($-2)+1]=0,d[3*($-1)]=d[3*($-2)]+l[0],d[3*($-1)+1]=d[3*($-2)+1]+l[1],d[3*($-1)+2]=d[3*($-2)+2]+l[2],g[2*($-1)]=1,g[2*($-1)+1]=1,m[3*(f-2)]=-i[0],m[3*(f-2)+1]=-i[1],m[3*(f-2)+2]=-i[2],m[3*(f-1)]=i[0],m[3*(f-1)+1]=i[1],m[3*(f-1)+2]=i[2]);const u=(y,E,S)=>{O[y]=E,T[y]=S};let P=0;const M=V(),N=V();for(let y=0;y<t;y++){const E=y*(2*Math.PI/t);L(M,v,Math.sin(E)),L(N,x,Math.cos(E)),C(M,M,N),m[3*y]=M[0],m[3*y+1]=M[1],m[3*y+2]=M[2],L(M,M,n),C(M,M,p),d[3*y]=M[0],d[3*y+1]=M[1],d[3*y+2]=M[2],g[2*y]=y/t,g[2*y+1]=0,d[3*(y+t)]=d[3*y]+l[0],d[3*(y+t)+1]=d[3*y+1]+l[1],d[3*(y+t)+2]=d[3*y+2]+l[2],g[2*(y+t)]=y/t,g[2*y+1]=1;const S=(y+1)%t;u(P++,y,y),u(P++,y+t,y),u(P++,S,S),u(P++,S,S),u(P++,y+t,y),u(P++,S+t,S)}if(o){for(let y=0;y<t;y++){const E=(y+1)%t;u(P++,$-2,f-2),u(P++,y,f-2),u(P++,E,f-2)}for(let y=0;y<t;y++){const E=(y+1)%t;u(P++,y+t,f-1),u(P++,$-1,f-1),u(P++,E+t,f-1)}}const F=[[A.POSITION,new b(d,O,3,!0)],[A.NORMAL,new b(m,T,3,!0)],[A.UV0,new b(g,O,2,!0)]];return new U(s,F)}function hn(s,e,n,t,r,h){t=t||10,r=r==null||r,re(e.length>1);const o=[[0,0,0]],a=[],c=[];for(let i=0;i<t;i++){a.push([0,-i-1,-(i+1)%t-1]);const l=i/t*2*Math.PI;c.push([Math.cos(l)*n,Math.sin(l)*n])}return us(s,c,e,o,a,r,h)}function us(s,e,n,t,r,h,o=R(0,0,0)){const a=e.length,c=D(n.length*a*3+(6*t.length||0)),i=D(n.length*a*3+(t?6:0)),l=new Array,p=new Array;let v=0,x=0;const $=I(),f=I(),d=I(),m=I(),g=I(),O=I(),T=I(),u=I(),P=I(),M=I(),N=I(),F=I(),y=I(),E=Dt();pe(P,0,1,0),j(f,n[1],n[0]),_(f,f),h?(C(u,n[0],o),_(d,u)):pe(d,0,0,1),je(f,d,P,P,g,d,Ge),G(m,d),G(F,g);for(let w=0;w<t.length;w++)L(O,g,t[w][0]),L(u,d,t[w][2]),C(O,O,u),C(O,O,n[0]),c[v++]=O[0],c[v++]=O[1],c[v++]=O[2];i[x++]=-f[0],i[x++]=-f[1],i[x++]=-f[2];for(let w=0;w<r.length;w++)l.push(r[w][0]>0?r[w][0]:-r[w][0]-1+t.length),l.push(r[w][1]>0?r[w][1]:-r[w][1]-1+t.length),l.push(r[w][2]>0?r[w][2]:-r[w][2]-1+t.length),p.push(0),p.push(0),p.push(0);let S=t.length;const ie=t.length-1;for(let w=0;w<n.length;w++){let Re=!1;w>0&&(G($,f),w<n.length-1?(j(f,n[w+1],n[w]),_(f,f)):Re=!0,C(M,$,f),_(M,M),C(N,n[w-1],m),Ut(n[w],M,E),jt(E,xt(N,$),u)?(j(u,u,n[w]),_(d,u),k(g,M,d),_(g,g)):je(M,m,F,P,g,d,Ge),G(m,d),G(F,g)),h&&(C(u,n[w],o),_(y,u));for(let H=0;H<a;H++)if(L(O,g,e[H][0]),L(u,d,e[H][1]),C(O,O,u),_(T,O),i[x++]=T[0],i[x++]=T[1],i[x++]=T[2],C(O,O,n[w]),c[v++]=O[0],c[v++]=O[1],c[v++]=O[2],!Re){const ye=(H+1)%a;l.push(S+H),l.push(S+a+H),l.push(S+ye),l.push(S+ye),l.push(S+a+H),l.push(S+a+ye);for(let we=0;we<6;we++){const Ye=l.length-6;p.push(l[Ye+we]-ie)}}S+=a}const We=n[n.length-1];for(let w=0;w<t.length;w++)L(O,g,t[w][0]),L(u,d,t[w][1]),C(O,O,u),C(O,O,We),c[v++]=O[0],c[v++]=O[1],c[v++]=O[2];const ge=x/3;i[x++]=f[0],i[x++]=f[1],i[x++]=f[2];const Oe=S-a;for(let w=0;w<r.length;w++)l.push(r[w][0]>=0?S+r[w][0]:-r[w][0]-1+Oe),l.push(r[w][2]>=0?S+r[w][2]:-r[w][2]-1+Oe),l.push(r[w][1]>=0?S+r[w][1]:-r[w][1]-1+Oe),p.push(ge),p.push(ge),p.push(ge);const Ze=[[A.POSITION,new b(c,l,3,!0)],[A.NORMAL,new b(i,p,3,!0)]];return new U(s,Ze)}function un(s,e,n,t){re(e.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),re(e[0].length===3,"createPolylineGeometry(): malformed vertex"),re(n==null||n.length===e.length,"createPolylineGeometry: need same number of points and normals"),re(n==null||n[0].length===3,"createPolylineGeometry(): malformed normal");const r=ft(3*e.length),h=new Array(2*(e.length-1));let o=0,a=0;for(let i=0;i<e.length;i++){for(let l=0;l<3;l++)r[o++]=e[i][l];i>0&&(h[a++]=i-1,h[a++]=i)}const c=[[A.POSITION,new b(r,h,3,!0)]];if(n){const i=D(3*n.length);let l=0;for(let p=0;p<e.length;p++)for(let v=0;v<3;v++)i[l++]=n[p][v];c.push([A.NORMAL,new b(i,h,3,!0)])}return t&&c.push([A.COLOR,new b(t,Vt(t.length/4),4)]),new U(s,c,null,Xe.Line)}function fn(s,e,n,t,r,h=0){const o=new Array(18),a=[[-n,h,r/2],[t,h,r/2],[0,e+h,r/2],[-n,h,-r/2],[t,h,-r/2],[0,e+h,-r/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let i=0;i<6;i++)o[3*i]=a[i][0],o[3*i+1]=a[i][1],o[3*i+2]=a[i][2];return new U(s,[[A.POSITION,new b(o,c,3,!0)]])}function dn(s,e){const n=s.getMutableAttribute(A.POSITION).data;for(let t=0;t<n.length;t+=3){const r=n[t],h=n[t+1],o=n[t+2];pe(Q,r,h,o),Me(Q,Q,e),n[t]=Q[0],n[t+1]=Q[1],n[t+2]=Q[2]}}function pn(s,e=s){const n=s.attributes,t=n.get(A.POSITION).data,r=n.get(A.NORMAL).data;if(r){const h=e.getMutableAttribute(A.NORMAL).data;for(let o=0;o<r.length;o+=3){const a=r[o+1];h[o+1]=-r[o+2],h[o+2]=a}}if(t){const h=e.getMutableAttribute(A.POSITION).data;for(let o=0;o<t.length;o+=3){const a=t[o+1];h[o+1]=-t[o+2],h[o+2]=a}}}function $e(s,e,n,t,r){return!(Math.abs(Be(e,s))>r)&&(k(n,s,e),_(n,n),k(t,n,s),_(t,t),!0)}function je(s,e,n,t,r,h,o){return $e(s,e,r,h,o)||$e(s,n,r,h,o)||$e(s,t,r,h,o)}const Ge=.99619469809,Q=I();function mn(s,e){return s==null&&(s=[]),s.push(e),s}function gn(s,e){if(s==null)return null;const n=s.filter(t=>t!==e);return n.length===0?null:n}function On(s,e,n,t,r){le[0]=s.get(e,0),le[1]=s.get(e,1),le[2]=s.get(e,2),Gt(le,X,3),n.set(r,0,X[0]),t.set(r,0,X[1]),n.set(r,1,X[2]),t.set(r,1,X[3]),n.set(r,2,X[4]),t.set(r,2,X[5])}const le=I(),X=new Float32Array(6);export{Zs as A,hn as B,tn as C,Ys as D,en as E,Hs as G,dn as O,Ws as S,Us as T,Qs as U,Kt as Z,me as a,Wt as b,hs as c,ks as d,Xs as e,qs as f,nn as g,cn as h,ln as i,Js as j,sn as k,On as l,pn as m,mn as n,Ls as o,Jt as p,an as q,gn as r,on as s,Bs as t,Ks as u,je as v,un as w,rn as x,us as y,fn as z};

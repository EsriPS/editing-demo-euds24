import{F as o,G as h,K as E,aD as F,aO as f,aF as M,aG as S,aA as C,M as R,cu as q}from"./index-C1aGfQcb.js";import{a as b}from"./BitmapContainer-rte_DrKS.js";import{j as U}from"./LayerView2D-_cD1rRgW.js";import{_ as V}from"./ExportStrategy-Jkk4mBXy.js";import{y as L}from"./LayerView-ClcY0vUI.js";import{i as W}from"./RefreshableLayerView-B0PsMbXg.js";import{a as A}from"./ExportWMSImageParameters-U0L2JAj0.js";import{i as H}from"./timeSupport-BVjefMvf.js";import"./WGLContainer-Bti4JDk_.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-BbDPE4Hv.js";import"./enums-CmIX1y88.js";import"./Texture-CLoEFKJJ.js";import"./enums-Dk3osxpS.js";import"./Program-B50gSpr4.js";import"./BufferObject-C4qiEJeh.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-CzGu5bI8.js";import"./ProgramTemplate-FAwkPdO7.js";import"./mat2df32-BR-p9z6z.js";import"./mat3-Dg2BrR6m.js";import"./MapView-DMINGQ-3.js";import"./ColorBackground-BzAAhJtv.js";import"./CollectionFlattener-COw367kg.js";import"./basemapUtils-SfV6Ch_Z.js";import"./utils-sqJe3zMg.js";import"./TablesMixin-CmFQDxpI.js";import"./Layer-CneDw8eF.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./workers-CeelWDzo.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./TileInfo-C4AYiz3R.js";import"./TileKey-DZd6gJy7.js";import"./UpdatingHandles-DOPUoIlu.js";import"./screenUtils-CLE_gLy7.js";import"./signal-CRiDvIIF.js";import"./GraphicsCollection-BlUFPpxh.js";import"./HeightModelInfo-kVs8dE0B.js";import"./Query-LPs1Zyw4.js";import"./FullTextSearch-Cza0yp3f.js";import"./IViewEvents-Bci6PjlS.js";import"./mat2df64-B7VPBnkO.js";import"./a11yUtils-Tsw26pQ5.js";import"./heightModelInfoUtils-BhzRw8-2.js";import"./arcgisLayerUrl-BkZy4Mr3.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-CCfZVA9N.js";import"./vec2-D9okOEat.js";import"./normalizeUtils-Bg1OALXh.js";import"./normalizeUtilsCommon-UUlRRPVA.js";import"./utils-DGPHbhMN.js";import"./utils-ByvCMLXh.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-DS_v5N7L.js";import"./debugFlags-CfZYxH5Q.js";import"./Tile-9ZT_yo0a.js";import"./TileKey-C3cOKqPf.js";import"./QueueProcessor-8zZK2k9z.js";import"./quickselect-QQC62dOK.js";import"./vec32-CmwgPQMd.js";import"./HighlightDefaults-D7TbvM-a.js";import"./imageUtils-DpI9AOR9.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./accessibleHandler-CubitGf2.js";import"./GoTo-H_qEVlhS.js";import"./ZoomViewModel-BtZMM985.js";import"./utils-CS8i_70G.js";import"./Version-DD-eRUXC.js";import"./vec3f32-nZdmKIgz.js";import"./Container-DukYN7bA.js";import"./EffectView-Di3KCO94.js";import"./parser-C4Qiz3JH.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-C-Uqf9Q4.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./utils-BQBvadb7.js";import"./Bitmap-Dit7l_zy.js";const O=r=>{let t=class extends r{initialize(){this.exportImageParameters=new A({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return H(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,p){const{layer:a}=this;if(!e)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:d}=a;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:m,width:s,height:n,x:c,y}=i;if(!(m&&s&&n))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:m,width:s,height:n});const g=await a.fetchFeatureInfo(m,s,n,c,y);return M(p),g}};return o([h()],t.prototype,"exportImageParameters",void 0),o([h({readOnly:!0})],t.prototype,"exportImageVersion",null),o([h()],t.prototype,"layer",void 0),o([h({readOnly:!0})],t.prototype,"timeExtent",null),t=o([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends O(W(U(L))){constructor(){super(...arguments),this.bitmapContainer=new b}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{S(t)||C.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new b,this.container.addChild(this.bitmapContainer),this.strategy=new V({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:p,y:a}=r,{spatialReference:d}=t;let i,m=0,s=0;if(e.children.some(g=>{const{width:w,height:v,resolution:I,x:l,y:x}=g,P=l+I*w,$=x-I*v;return p>=l&&p<=P&&a<=x&&a>=$&&(i=new q({xmin:l,ymin:$,xmax:P,ymax:x,spatialReference:d}),m=w,s=v,!0)}),!i)return null;const n=i.width/m,c=Math.round((p-i.xmin)/n),y=Math.round((i.ymax-a)/n);return{extent:i,width:m,height:s,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,p){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...p})}};o([h()],u.prototype,"strategy",void 0),o([h()],u.prototype,"updating",void 0),u=o([E("esri.views.2d.layers.WMSLayerView2D")],u);const xe=u;export{xe as default};

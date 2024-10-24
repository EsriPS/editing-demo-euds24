import{Q as p,aG as c,aA as y,F as u,G as w,K as g}from"./index-C1aGfQcb.js";import{r as I,n as f}from"./imageUtils-BIsSeL5v.js";import{j as S}from"./LayerView2D-_cD1rRgW.js";import{h as T,p as V,r as v}from"./Tile-9ZT_yo0a.js";import{e as d}from"./TileKey-C3cOKqPf.js";import{y as x}from"./LayerView-ClcY0vUI.js";import{i as M}from"./RefreshableLayerView-B0PsMbXg.js";import{g as q}from"./Scheduler-DS_v5N7L.js";import"./MapView-DMINGQ-3.js";import"./ColorBackground-BzAAhJtv.js";import"./CollectionFlattener-COw367kg.js";import"./basemapUtils-SfV6Ch_Z.js";import"./utils-sqJe3zMg.js";import"./TablesMixin-CmFQDxpI.js";import"./Layer-CneDw8eF.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./workers-CeelWDzo.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./TileInfo-C4AYiz3R.js";import"./TileKey-DZd6gJy7.js";import"./UpdatingHandles-DOPUoIlu.js";import"./screenUtils-CLE_gLy7.js";import"./signal-CRiDvIIF.js";import"./GraphicsCollection-BlUFPpxh.js";import"./HeightModelInfo-kVs8dE0B.js";import"./Query-LPs1Zyw4.js";import"./FullTextSearch-Cza0yp3f.js";import"./IViewEvents-Bci6PjlS.js";import"./mat2df64-B7VPBnkO.js";import"./a11yUtils-Tsw26pQ5.js";import"./heightModelInfoUtils-BhzRw8-2.js";import"./arcgisLayerUrl-BkZy4Mr3.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-CCfZVA9N.js";import"./vec2-D9okOEat.js";import"./mat2df32-BR-p9z6z.js";import"./normalizeUtils-Bg1OALXh.js";import"./normalizeUtilsCommon-UUlRRPVA.js";import"./utils-DGPHbhMN.js";import"./utils-ByvCMLXh.js";import"./mat3-Dg2BrR6m.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./vec32-CmwgPQMd.js";import"./definitions-C0Jy3zs7.js";import"./HighlightDefaults-D7TbvM-a.js";import"./enums-Dk3osxpS.js";import"./Texture-CLoEFKJJ.js";import"./imageUtils-DpI9AOR9.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./accessibleHandler-CubitGf2.js";import"./GoTo-H_qEVlhS.js";import"./ZoomViewModel-BtZMM985.js";import"./utils-CS8i_70G.js";import"./Version-DD-eRUXC.js";import"./Bitmap-Dit7l_zy.js";import"./Container-DukYN7bA.js";import"./EffectView-Di3KCO94.js";import"./parser-C4Qiz3JH.js";import"./WGLContainer-Bti4JDk_.js";import"./LabelMetric-BbDPE4Hv.js";import"./enums-CmIX1y88.js";import"./Program-B50gSpr4.js";import"./BufferObject-C4qiEJeh.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./VertexArrayObject-CzGu5bI8.js";import"./ProgramTemplate-FAwkPdO7.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-C-Uqf9Q4.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./TileContainer-ChXztKMJ.js";import"./utils-BQBvadb7.js";import"./QueueProcessor-8zZK2k9z.js";import"./quickselect-QQC62dOK.js";import"./debugFlags-CfZYxH5Q.js";const Q=[0,0];let s=class extends M(I(S(x))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){var r;const{activeLayer:t}=this.layer,{tileMatrixSet:e}=t;if(e&&p((r=e.tileInfo)==null?void 0:r.spatialReference,this.view.spatialReference))return e;const i=this._getTileMatrixSetBySpatialReference(t);return i&&i.id!==t.tileMatrixSetId?(t.tileMatrixSetId=i.id,i):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){var e;const t=(e=this.tileMatrixSet)==null?void 0:e.tileInfo;t&&(this._tileInfoView=new T(t),this._fetchQueue=new V({tileInfoView:this._tileInfoView,concurrency:16,process:(i,r)=>this.fetchTile(i,r),scheduler:this.scheduler,priority:q.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new v({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var i,r;return[(r=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:r.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var t,e;super.detach(),(t=this._tileStrategy)==null||t.destroy(),(e=this._fetchQueue)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return((e=this.layer.activeLayer.tileMatrixSets)==null?void 0:e.some(i=>{var r;return p((r=i.tileInfo)==null?void 0:r.spatialReference,t)}))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(Q,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:l=0}=e;if(!i)return this._fetchImage(t,r);const o=new d(0,0,0,0);let h;try{await i.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:r}),h=await this._fetchImage(o,r)}catch(a){if(c(a))throw a;if(l<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const n=new d(m),_=await this.fetchTile(n,{...e,resamplingLevel:l+1});return f(this._tileInfoView,_,n,t)}}throw a}return f(this._tileInfoView,h,o,t)}canResume(){const t=super.canResume();return t&&this.tileMatrixSet!==null}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){c(e)||y.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}_getTileMatrixSetBySpatialReference(t){var e;return(e=t.tileMatrixSets)==null?void 0:e.find(i=>{var r;return p((r=i.tileInfo)==null?void 0:r.spatialReference,this.view.spatialReference)})}};u([w({readOnly:!0})],s.prototype,"tileMatrixSet",null),s=u([g("esri.views.2d.layers.WMTSLayerView2D")],s);const oe=s;export{oe as default};

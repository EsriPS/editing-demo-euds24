import{F as o,G as m,K as $,br as S,fh as U,gh as _,c9 as x,fC as H,aA as I,cv as g}from"./index-C1aGfQcb.js";import{j as O}from"./LayerView2D-_cD1rRgW.js";import{y as A}from"./LayerView-ClcY0vUI.js";import"./utils-BQBvadb7.js";import"./Container-DukYN7bA.js";import"./MapView-DMINGQ-3.js";import"./ColorBackground-BzAAhJtv.js";import"./CollectionFlattener-COw367kg.js";import"./basemapUtils-SfV6Ch_Z.js";import"./utils-sqJe3zMg.js";import"./TablesMixin-CmFQDxpI.js";import"./Layer-CneDw8eF.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./workers-CeelWDzo.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./TileInfo-C4AYiz3R.js";import"./TileKey-DZd6gJy7.js";import"./UpdatingHandles-DOPUoIlu.js";import"./screenUtils-CLE_gLy7.js";import"./signal-CRiDvIIF.js";import"./GraphicsCollection-BlUFPpxh.js";import"./HeightModelInfo-kVs8dE0B.js";import"./Query-LPs1Zyw4.js";import"./FullTextSearch-Cza0yp3f.js";import"./IViewEvents-Bci6PjlS.js";import"./mat2df64-B7VPBnkO.js";import"./a11yUtils-Tsw26pQ5.js";import"./heightModelInfoUtils-BhzRw8-2.js";import"./arcgisLayerUrl-BkZy4Mr3.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-CCfZVA9N.js";import"./vec2-D9okOEat.js";import"./mat2df32-BR-p9z6z.js";import"./normalizeUtils-Bg1OALXh.js";import"./normalizeUtilsCommon-UUlRRPVA.js";import"./utils-DGPHbhMN.js";import"./utils-ByvCMLXh.js";import"./mat3-Dg2BrR6m.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-DS_v5N7L.js";import"./debugFlags-CfZYxH5Q.js";import"./Tile-9ZT_yo0a.js";import"./TileKey-C3cOKqPf.js";import"./QueueProcessor-8zZK2k9z.js";import"./quickselect-QQC62dOK.js";import"./vec32-CmwgPQMd.js";import"./definitions-C0Jy3zs7.js";import"./HighlightDefaults-D7TbvM-a.js";import"./enums-Dk3osxpS.js";import"./Texture-CLoEFKJJ.js";import"./imageUtils-DpI9AOR9.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./accessibleHandler-CubitGf2.js";import"./GoTo-H_qEVlhS.js";import"./ZoomViewModel-BtZMM985.js";import"./utils-CS8i_70G.js";import"./Version-DD-eRUXC.js";import"./EffectView-Di3KCO94.js";import"./parser-C4Qiz3JH.js";const y=Symbol(),T=d=>{let r=class extends d{constructor(){super(...arguments),this.layerViews=new S,this._debouncedUpdate=U(async()=>{const{layer:e,parent:t}=this,a=t==null?void 0:t.footprintLayerView;let s=[];const p=this._createQuery();if(p&&a){const{features:h}=await a.queryFeatures(p);this.suspended||(s=h.map(u=>e.acquireLayer(u)))}this.removeHandles(y),this.addHandles(s,y)})}get creatingLayerViews(){var e;return((e=this.view)==null?void 0:e.layerViewManager.isCreatingLayerViewsForLayer(this.layer))??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(e=>e.updating)}enableLayerUpdates(){return _([this._updatingHandles.addWhen(()=>{var e,t;return((t=(e=this.parent)==null?void 0:e.footprintLayerView)==null?void 0:t.dataUpdating)===!1},()=>this.updateLayers()),this._updatingHandles.add(()=>{var e,t,a,s,p;return[this.layer.maximumVisibleSublayers,(e=this.layer.parent)==null?void 0:e.orderBy,(a=(t=this.parent)==null?void 0:t.footprintLayerView)==null?void 0:a.filter,(p=(s=this.parent)==null?void 0:s.footprintLayerView)==null?void 0:p.timeExtent,this.suspended]},()=>this.updateLayers()),x(()=>this.removeHandles(y))])}updateLayers(){this.suspended?this.removeHandles(y):this._updatingHandles.addPromise(H(this._debouncedUpdate()).catch(e=>{I.getLogger(this).error(e)}))}_createQuery(){var V,v;const e=(V=this.parent)==null?void 0:V.footprintLayerView,t=(v=this.layer)==null?void 0:v.parent;if(!e||!t||t.destroyed)return null;const{layer:{maximumVisibleSublayers:a},view:{scale:s}}=this;if(!a)return null;const{itemTypeField:p,itemSourceField:h,itemNameField:u,minScaleField:c,maxScaleField:L,objectIdField:C,orderBy:w}=t,F=g(`${c} IS NULL OR ${s} <= ${c} OR ${c} = 0`,`${L} IS NULL OR ${s} >= ${L}`),n=w==null?void 0:w.find(l=>l.field&&!l.valueExpression),i=e.createQuery();if(i.returnGeometry=!1,i.num=a,i.outFields=[C,h,u],i.where=g(i.where,F),this.unsupportedItemTypes!=null){const l=`${p} NOT IN (${this.unsupportedItemTypes.map(b=>`'${b}'`)})`;i.where=g(i.where,l)}return n!=null&&n.field&&(i.orderByFields=[`${n.field} ${n.order==="descending"?"DESC":"ASC"}`],i.outFields.push(n.field)),i}};return o([m({readOnly:!0})],r.prototype,"creatingLayerViews",null),o([m()],r.prototype,"layer",void 0),o([m()],r.prototype,"layerViews",void 0),o([m({readOnly:!0})],r.prototype,"unsupportedItemTypes",void 0),o([m()],r.prototype,"parent",void 0),o([m({readOnly:!0})],r.prototype,"isUpdating",null),r=o([$("esri.views.layers.CatalogDynamicGroupLayerView")],r),r};let f=class extends T(O(A)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new S}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(d){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((d,r)=>this.container.addChildAt(d.container,r))}};f=o([$("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],f);const ke=f;export{ke as default};
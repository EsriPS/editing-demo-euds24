import{F as r,G as e,K as m,br as s}from"./index-C1aGfQcb.js";import{j as n}from"./LayerView2D-_cD1rRgW.js";import{y as l}from"./LayerView-ClcY0vUI.js";import"./utils-BQBvadb7.js";import"./Container-DukYN7bA.js";import"./MapView-DMINGQ-3.js";import"./ColorBackground-BzAAhJtv.js";import"./CollectionFlattener-COw367kg.js";import"./basemapUtils-SfV6Ch_Z.js";import"./utils-sqJe3zMg.js";import"./TablesMixin-CmFQDxpI.js";import"./Layer-CneDw8eF.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";import"./workers-CeelWDzo.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./TileInfo-C4AYiz3R.js";import"./TileKey-DZd6gJy7.js";import"./UpdatingHandles-DOPUoIlu.js";import"./screenUtils-CLE_gLy7.js";import"./signal-CRiDvIIF.js";import"./GraphicsCollection-BlUFPpxh.js";import"./HeightModelInfo-kVs8dE0B.js";import"./Query-LPs1Zyw4.js";import"./FullTextSearch-Cza0yp3f.js";import"./IViewEvents-Bci6PjlS.js";import"./mat2df64-B7VPBnkO.js";import"./a11yUtils-Tsw26pQ5.js";import"./heightModelInfoUtils-BhzRw8-2.js";import"./arcgisLayerUrl-BkZy4Mr3.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-CCfZVA9N.js";import"./vec2-D9okOEat.js";import"./mat2df32-BR-p9z6z.js";import"./normalizeUtils-Bg1OALXh.js";import"./normalizeUtilsCommon-UUlRRPVA.js";import"./utils-DGPHbhMN.js";import"./utils-ByvCMLXh.js";import"./mat3-Dg2BrR6m.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-DS_v5N7L.js";import"./debugFlags-CfZYxH5Q.js";import"./Tile-9ZT_yo0a.js";import"./TileKey-C3cOKqPf.js";import"./QueueProcessor-8zZK2k9z.js";import"./quickselect-QQC62dOK.js";import"./vec32-CmwgPQMd.js";import"./definitions-C0Jy3zs7.js";import"./HighlightDefaults-D7TbvM-a.js";import"./enums-Dk3osxpS.js";import"./Texture-CLoEFKJJ.js";import"./imageUtils-DpI9AOR9.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./accessibleHandler-CubitGf2.js";import"./GoTo-H_qEVlhS.js";import"./ZoomViewModel-BtZMM985.js";import"./utils-CS8i_70G.js";import"./Version-DD-eRUXC.js";import"./EffectView-Di3KCO94.js";import"./parser-C4Qiz3JH.js";const y=p=>{let t=class extends p{constructor(...i){super(...i),this.layerViews=new s}get dynamicGroupLayerView(){return this.layerViews.find(i=>{var o;return i.layer===((o=this.layer)==null?void 0:o.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(i=>{var o;return i.layer===((o=this.layer)==null?void 0:o.footprintLayer)})}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return r([e()],t.prototype,"layer",void 0),r([e()],t.prototype,"layerViews",void 0),r([e({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),r([e({readOnly:!0})],t.prototype,"footprintLayerView",null),t=r([m("esri.views.layers.CatalogLayerView")],t),t};let a=class extends y(n(l)){constructor(){super(...arguments),this.layerViews=new s}update(p){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((p,t)=>this.container.addChildAt(p.container,t))}};r([e()],a.prototype,"layerViews",void 0),a=r([m("esri.views.2d.layers.CatalogLayerView2D")],a);const Ct=a;export{Ct as default};
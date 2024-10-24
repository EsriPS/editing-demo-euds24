import{ei as o,ej as u,di as p,L as y,aA as h,aD as g,ek as d,F as i,G as s,K as v}from"./index-C1aGfQcb.js";import{h as c}from"./UpdatingHandles-DOPUoIlu.js";let t=class extends o(u(p.EventedMixin(y))){constructor(e){super(e),this._updatingHandles=new c,this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{var n;if(e.name!=="layerview:create-error"){const r=this.layer&&this.layer.id||"no id",l=((n=this.layer)==null?void 0:n.title)||"no title";h.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${l}', id: '${r}')`,e)}})}destroy(){this._updatingHandles=g(this._updatingHandles)}get fullOpacity(){var e,n;return(((e=this.layer)==null?void 0:e.opacity)??1)*(((n=this.parent)==null?void 0:n.fullOpacity)??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&((e=this.layer)==null?void 0:e.legendEnabled)===!0}get updating(){var e;return!(!((e=this._updatingHandles)!=null&&e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return((e=this.layer)==null?void 0:e.visible)===!0}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var r;const e=this.view.timeExtent,n=(r=this.layer)==null?void 0:r.visibilityTimeExtent;return!e||!n||!e.intersection(n).isEmpty}canResume(){var n,r,l;const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&((n=this.layer)==null?void 0:n.loaded)&&!((r=this.parent)!=null&&r.suspended)&&((l=this.view)==null?void 0:l.ready)&&d(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var l,a;const e=(l=this.parent)!=null&&l.suspended?this.parent.suspendInfo:{};(a=this.view)!=null&&a.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return d(r)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};i([s()],t.prototype,"view",void 0),i([s()],t.prototype,"fullOpacity",null),i([s()],t.prototype,"layer",void 0),i([s()],t.prototype,"parent",void 0),i([s({readOnly:!0})],t.prototype,"suspended",null),i([s({readOnly:!0})],t.prototype,"suspendInfo",null),i([s({readOnly:!0})],t.prototype,"legendEnabled",null),i([s({type:Boolean,readOnly:!0})],t.prototype,"updating",null),i([s({readOnly:!0})],t.prototype,"updatingProgress",null),i([s()],t.prototype,"updateSuspended",null),i([s()],t.prototype,"visible",null),i([s({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),i([s({readOnly:!0})],t.prototype,"visibleAtCurrentTimeExtent",null),t=i([v("esri.views.layers.LayerView")],t);const m=t;export{m as y};

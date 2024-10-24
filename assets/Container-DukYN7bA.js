import{e as o}from"./MapView-DMINGQ-3.js";import{a as c}from"./EffectView-Di3KCO94.js";import{di as u,cf as d,b3 as f}from"./index-C1aGfQcb.js";let p=class extends u{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(e){this._clips=e,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender())}get stage(){return this._stage}set stage(e){var s;if(this._stage===e)return;const t=this._stage;this._stage=e,e?(s=this._stage)!=null&&s.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t==null||t.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=d(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=d(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){var e,t;(e=this._fadeInResolver)==null||e.call(this),this._fadeInResolver=null,(t=this._fadeOutResolver)==null||t.call(this),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(e){this.updateTransitionProperties(e.deltaTime,e.state.scale),this.setTransform(e.state)}afterRender(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var e;(e=this.parent)==null||e.removeChild(this)}setTransform(e){}processRender(e){this.stage&&this.computedVisible&&this.doRender(e)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(e,t){const s=f("mapview-transitions-duration"),i=s?1/s:0;if(this.fadeTransitionEnabled&&i!==0){const r=this._fadeOutResolver||!this.visible?0:this.opacity,h=this.computedOpacity;if(h===r)this.computedVisible=this.visible;else{const n=e*i;this.computedOpacity=h>r?Math.max(r,h-n):Math.min(r,h+n),this.computedVisible=this.computedOpacity>0;const a=r===this.computedOpacity;this.inFadeTransition=!a,a||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(e){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}};class v extends p{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._effectView=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get children(){return this._children}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e)}get computedEffects(){var e;return((e=this._effectView)==null?void 0:e.effects)??null}get effect(){var e;return((e=this._effectView)==null?void 0:e.effect)??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new c),this._effectView.effect=e,this.requestRender())}get highlightGradient(){return this._highlightGradient}set highlightGradient(e){this._highlightGradient=e,this.requestRender()}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(e=>e.hasHighlight)}get hasLabels(){return this.children.some(e=>e.hasLabels)}get requiresDedicatedFBO(){return this.children.some(e=>"blendMode"in e&&e.blendMode&&e.blendMode!=="normal")}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}doRender(e){var i;const t=this.createRenderParams(e),{painter:s}=t;s.beforeRenderLayer(t,(i=this._clips)!=null&&i.length?255:0,this.computedOpacity),this.renderChildren(t),s.afterRenderLayer(t,this.computedOpacity)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e||this.contains(e))return e;this._needsSort=!0;const s=e.parent;return s&&s!==this&&s.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}beforeRender(e){super.beforeRender(e);for(const t of this.children)t.beforeRender(e)}afterRender(e){super.afterRender(e);for(const t of this.children)t.afterRender(e)}_createTransforms(){return{displayViewScreenMat3:o()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.processRender(e)}createRenderParams(e){return{...e,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||e.highlightGradient}}}export{v as a,p as s};

import{br as d,c4 as u,c5 as m,F as a,G as f,J as p,K as v,fh as g,fC as y,aA as I}from"./index-C1aGfQcb.js";import{a as b}from"./commonProperties-Drl05DKJ.js";const n=new d,o=new WeakMap;function w(r){$(r)&&n.push(new WeakRef(r))}function C(r){const e=n.find(s=>s.deref()===r);e&&n.remove(e)}function $(r){return r!=null&&typeof r=="object"&&"refreshInterval"in r&&"refresh"in r}function c(r,e){return Number.isFinite(r)&&Number.isFinite(e)?e<=0?r:c(e,r%e):0}let h=0,i=0;function D(){const r=Date.now();let e=!1;for(const s of n){const t=s.deref();t?t.refreshInterval&&r-(o.get(t)??0)+5>=6e4*t.refreshInterval&&(o.set(t,r),t.refresh(r)):e=!0}if(e)for(let s=n.length-1;s>=0;s--)n.at(s).deref()||n.removeAt(s)}u(()=>{const r=Date.now();let e=0;for(const s of n){const t=s.deref();t&&(e=c(Math.round(6e4*t.refreshInterval),e),t.refreshInterval?o.get(t)||o.set(t,r):o.delete(t))}if(e!==i){if(i=e,clearInterval(h),i===0)return void(h=0);h=setInterval(D,i)}},m);const l=.1,_=r=>{let e=class extends r{constructor(...s){super(...s),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=g(()=>this.hasDataChanged()),this.when().then(()=>{this.destroyed||w(this)},()=>{})}destroy(){C(this)}castRefreshInterval(s){return s>=l?s:s<=0?0:l}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(s=Date.now()){y(this._debounceHasDataChanged()).then(t=>{t&&this._set("refreshTimestamp",s),this.emit("refresh",{dataChanged:t})},t=>{I.getLogger(this).error(t),this.emit("refresh",{dataChanged:!1,error:t})})}async hasDataChanged(){return!0}get test(){}};return a([f({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:b}}}}})],e.prototype,"refreshInterval",void 0),a([p("refreshInterval")],e.prototype,"castRefreshInterval",null),a([f({readOnly:!0})],e.prototype,"refreshTimestamp",void 0),a([f({readOnly:!0})],e.prototype,"refreshParameters",null),e=a([v("esri.layers.mixins.RefreshableLayer")],e),e};export{_ as f};
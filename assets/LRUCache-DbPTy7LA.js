import{dm as d}from"./index-C1aGfQcb.js";const c=-3,f=c-1;var o;(function(_){_[_.ALL=0]="ALL",_[_.SOME=1]="SOME"})(o||(o={}));class g{get size(){return this._size}constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new d,this._users=new d}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,i){this._removeFuncs.push([e,i])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace(i=>i[0]!==e)}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,-1),this._checkSize()}getSize(e,i){const t=this._db.get(e.id+i);return(t==null?void 0:t.size)??0}put(e,i,t,r,h){i=e.id+i;const s=this._db.get(i);if(s&&(this._size-=s.size,e.size-=s.size,this._db.delete(i),s.entry!==t&&this._notifyRemove(i,s.entry,s.size,o.ALL)),r>this._maxSize)return void this._notifyRemove(i,t,r,o.ALL);if(t===void 0)return void console.warn("Refusing to cache undefined entry ");if(!r||r<0)return console.warn(`Refusing to cache entry with size ${r} for key ${i}`),void this._notifyRemove(i,t,0,o.ALL);const n=1+Math.max(h,f)-c;this._db.set(i,new S(t,r,n)),this._size+=r,e.size+=r,this._checkSize()}updateSize(e,i,t,r){i=e.id+i;const h=this._db.get(i);if(h&&h.entry===t){for(this._size-=h.size,e.size-=h.size;r>this._maxSize;){const s=this._notifyRemove(i,t,r,o.SOME);if(!(s!=null&&s>0))return void this._db.delete(i);r=s}h.size=r,this._size+=r,e.size+=r,this._checkSize()}}pop(e,i){i=e.id+i;const t=this._db.get(i);if(t)return this._size-=t.size,e.size-=t.size,this._db.delete(i),++this._hit,t.entry;++this._miss}get(e,i){i=e.id+i;const t=this._db.get(i);if(t!==void 0)return this._db.delete(i),t.lives=t.lifetime,this._db.set(i,t),++this._hit,t.entry;++this._miss}peek(e,i){const t=this._db.get(e.id+i);return t?++this._hit:++this._miss,t==null?void 0:t.entry}get performanceInfo(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},i={},t=new Array;this._db.forEach((s,n)=>{const a=s.lifetime;t[a]=(t[a]||0)+s.size,this._users.forAll(u=>{const{id:m,name:z}=u;if(n.startsWith(m)){const l=i[z]||0;i[z]=l+s.size}})});const r={};this._users.forAll(s=>{const n=s.name;if("hitRate"in s&&typeof s.hitRate=="number"&&!isNaN(s.hitRate)&&s.hitRate>0){const a=i[n]||0;i[n]=a,r[n]=Math.round(100*s.hitRate)+"%"}else r[n]="0%"});const h=Object.keys(i);h.sort((s,n)=>i[n]-i[s]),h.forEach(s=>e[s]=Math.round(i[s]/2**20)+"MB / "+r[s]);for(let s=t.length-1;s>=0;--s){const n=t[s];n&&(e["Priority "+(s+c-1)]=Math.round(n/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll(e=>e.resetHitRate())}clear(e){const i=e.id;this._db.forEach((t,r)=>{r.startsWith(i)&&(this._size-=t.size,this._db.delete(r),this._notifyRemove(r,t.entry,t.size,o.ALL))}),e.size=0}clearAll(){this._db.forEach((e,i)=>this._notifyRemove(i,e.entry,e.size,o.ALL)),this._users.forAll(e=>e.size=0),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,i,t,r){let h;return this._removeFuncs.some(s=>{if(e.startsWith(s[0])){const n=s[1](i,r,t);return typeof n=="number"&&(h=n),!0}return!1}),h}_checkSize(){this._users.forAll(e=>this._checkSizeLimits(e)),this._checkSizeLimits()}_checkSizeLimits(e){const i=e??this;if(i.maxSize<0||i.size<=i.maxSize)return;const t=e==null?void 0:e.id;let r=!0;for(;r;){r=!1;for(const[h,s]of this._db)if(s.lifetime===0&&(!t||h.startsWith(t))){if(this._purgeItem(h,s,e),i.size<=.9*i.maxSize)return;r||(r=this._db.has(h))}}for(const[h,s]of this._db)if((!t||h.startsWith(t))&&(this._purgeItem(h,s,e),i.size<=.9*i.maxSize))return}_purgeItem(e,i,t=this._users.find(r=>e.startsWith(r.id))){if(this._db.delete(e),i.lives<=1){this._size-=i.size,t&&(t.size-=i.size);const r=this._notifyRemove(e,i.entry,i.size,o.SOME);r!=null&&r>0&&(this._size+=r,t&&(t.size+=r),i.lives=i.lifetime,i.size=r,this._db.set(e,i))}else--i.lives,this._db.set(e,i)}}class S{constructor(e,i,t){this.entry=e,this.size=i,this.lifetime=t,this.lives=t}}class v{constructor(e,i){this._storage=new g,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),i&&this._storage.registerRemoveFunc("",i)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(e,i,t=1){this._storage.put(this,e,i,t,1)}pop(e){return this._storage.pop(this,e)}get(e){return this._storage.get(this,e)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}resetHitRate(){}}export{c as a,v as e};
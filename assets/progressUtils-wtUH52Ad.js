import{b3 as a,bH as m,c9 as u,gq as h,eh as l,gr as p}from"./index-C1aGfQcb.js";const P={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function T(r,s=t=>{},e){return new g(r,s,e)}class g{constructor(s,e=o=>{},t){if(this.onProgress=e,this.taskName=t,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof s=="number"){this._weights={};for(let o=0;o<s;o++){const i=o,n=1/s;this._weights[i]=n,this._progressMap.set(i,0)}}else this._weights=s;this.emitProgress()}emitProgress(){let s=0;for(const[e,t]of this._progressMap.entries())s+=t*this._weights[e];if(s===1&&a("enable-feature:esri-3dofl-upload-timings")){const e=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${e} sec`);for(const[t,o]of this._timingsMap){const i=Math.round(o.end-o.start)/1e3,n=Math.round(i/e*100);console.log(this.taskName??"Task",{stepKey:t,stepTime:i,relativeTime:n})}}this.onProgress(s)}setProgress(s,e){if(this._progressMap.set(s,e),a("enable-feature:esri-3dofl-upload-timings")){const t=performance.now();this._startTime??(this._startTime=t);const o=m(this._timingsMap,s,()=>({start:t,end:0}));e===1&&(o.end=t)}this.emitProgress()}simulate(s,e){return f(t=>this.setProgress(s,t),e)}makeOnProgress(s){return e=>this.setProgress(s,e)}}function f(r=e=>{},s=w){const e=performance.now();r(0);const t=setInterval(()=>{const o=performance.now()-e,i=1-Math.exp(-o/s);r(i)},_);return u(()=>{clearInterval(t),r(1)})}function v(r,s=d){return h(p(r*c/s))}function A(r,s=M){return h(p(r*c/s))}const d=10,M=10,c=8e-6,_=l(50),w=l(1e3);export{f as a,P as e,v as h,T as i,A as m};

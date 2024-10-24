import{bK as _,dB as j,aO as I,dC as R,aG as $,aA as P,aT as A,aR as L,bE as T,bD as G,Q,d4 as M,fX as J,b8 as Z,dz as U,db as Y}from"./index-C1aGfQcb.js";import{e as B,n as K}from"./date-DLgTylpo.js";import{O as z}from"./projection-BOBOhWzm.js";import{t as H}from"./json-Wa8cmqdu.js";import{e as W}from"./OptimizedFeature-swgcyHeh.js";import{s as X}from"./OptimizedGeometry-C9mSZhHi.js";import{m as ee}from"./FeatureStore-B0gqZoOR.js";import{x as te}from"./queryUtils-DfwPGxwH.js";import{V as ie}from"./QueryEngine-C9ivs0Pi.js";import{c as ne}from"./number-ByPuf2wa.js";import{a as re,u as oe}from"./clientSideDefaults-DxRAc8q_.js";import{Z as N}from"./FieldsIndex-BrdRr9E_.js";import"./projectBuffer-CZ7yaGuo.js";import"./featureConversionUtils-C-Uqf9Q4.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BoundsStore-DO_rtT_2.js";import"./PooledRBush-D_zSRdWq.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-DZeNU3Q4.js";import"./optimizedFeatureQueryEngineAdapter-DrXZKbZy.js";import"./centroid-DdLmOD72.js";import"./normalizeUtils-Bg1OALXh.js";import"./normalizeUtilsCommon-UUlRRPVA.js";import"./utils-DGPHbhMN.js";import"./utils-ByvCMLXh.js";import"./LRUCache-DbPTy7LA.js";import"./WhereClause-dg9O4EEg.js";import"./TimeOnly-vNYE6bX9.js";import"./UnknownTimeZone-DhxWDwo9.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./quantizationUtils-DbJV_fl5.js";import"./utils-fVaXlGs2.js";import"./timeUtils-X0MXjtQ8.js";import"./heatmapUtils-D0BPLm9w.js";import"./vec42-BHDxGccW.js";import"./vec4f64-o2zAXfmz.js";import"./utils-D5wrSxig.js";import"./ClassBreaksDefinition-CpzZK_QT.js";import"./SnappingCandidate-O5eRSE6e.js";import"./Scheduler-DS_v5N7L.js";import"./signal-CRiDvIIF.js";import"./debugFlags-CfZYxH5Q.js";import"./capabilities-Y9lFlGVh.js";import"./defaultsJSON-GKolV7NZ.js";function se(r,t,e){var s,a;t=(s=_(t))==null?void 0:s.toLowerCase(),e=(a=_(e))==null?void 0:a.toLowerCase();const i=r.map(u=>u.toLowerCase()),n=t?r[i.indexOf(t)]:null,o=e?r[i.indexOf(e)]:null;return{longitudeFieldName:n||r[i.indexOf(le.find(u=>i.includes(u)))],latitudeFieldName:o||r[i.indexOf(ae.find(u=>i.includes(u)))]}}const ae=["lat","lat83","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],le=["lon","lng","lng83","long","long83","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],E=/^\s*"([\S\s]*)"\s*$/,O=/""/g,S=`
`,ce=[","," ",";","|","	"];function*q(r,t,e){let i=0;for(;i<=r.length;){const n=r.indexOf(t,i),o=r.slice(i,n>-1?n:void 0);i+=o.length+t.length,e&&!o.trim()||(yield o)}}function C(r){const t=r.includes(`\r
`)?`\r
`:S;return q(r,t,!0)}function v(r,t){return q(r,t,!1)}function ue(r,t,e){r=r.trim(),t=t==null?void 0:t.trim();const i=[],n=Array.from(new Set([e==null?void 0:e.delimiter,...ce])).filter(s=>s!=null);for(const s of n){const a=w(r,s).length,u=w(t,s).length??a;a>1&&i.push({weight:Math.min(a,u),delimiter:s})}const o=i.sort(({weight:s},{weight:a})=>a-s).map(({delimiter:s})=>s);for(const s of o){const a=D(r,s).names,u=se(a,e==null?void 0:e.longitudeField,e==null?void 0:e.latitudeField);if(u.longitudeFieldName&&u.latitudeFieldName)return{delimiter:s,locationInfo:u}}return{delimiter:o[0],locationInfo:null}}function*k(r,t,e,i=()=>Object.create(null)){const n=C(r);n.next();let o="",s="",a=0,u=i(),d=0;e:for(const h of n){const f=v(h,e);for(const y of f)if(o+=s+y,s="",a+=V(y),a%2==0){if(a>0){const g=E.exec(o);if(!g){u=i(),d=0,o="",a=0;continue e}u[t[d]]=g[1].replaceAll(O,'"'),d++}else u[t[d]]=o,d++;o="",a=0}else s=e;a===0?(yield u,u=i(),d=0):s=S}}function D(r,t){const e=w(r,t).filter(n=>n!=null),i=e.map(n=>_(n));for(let n=i.length-1;n>=0;n--)i[n]||(i.splice(n,1),e.splice(n,1));return{names:i,aliases:e}}function w(r,t){if(!(r!=null&&r.length))return[];const e=[];let i="",n="",o=0;const s=v(r,t);for(const a of s)if(i+=n+a,n="",o+=V(a),o%2==0){if(o>0){const u=E.exec(i);u&&e.push(u[1].replaceAll(O,'"'))}else e.push(i);i="",o=0}else n=t;return e}function V(r){let t=0,e=0;for(e=r.indexOf('"',e);e>=0;)t++,e=r.indexOf('"',e+1);return t}function de(r,t,e,i,n){const o=[],s=k(r,e,t),a=[];for(const u of s){if(a.length===10)break;a.push(u)}for(let u=0;u<e.length;u++){const d=e[u],h=i[u];if(d===n.longitudeFieldName||d===n.latitudeFieldName)o.push({name:d,type:"esriFieldTypeDouble",alias:h});else{let f;switch(me(a.map(y=>y[d]))){case"integer":f="esriFieldTypeInteger";break;case"double":f="esriFieldTypeDouble";break;case"date":f="esriFieldTypeDate";break;default:f="esriFieldTypeString"}o.push({name:d,type:f,alias:h,length:j(f)})}}return o}function me(r){if(!r.length)return"string";const t=/[^+\-.,0-9]/;return r.map(e=>{if(e!==""){if(!t.test(e)){let i=x(e);if(!isNaN(i))return/[.,]/.test(e)||!Number.isInteger(i)||i>214783647||i<-214783648?"double":"integer";if(e.includes("E")&&(i=Number(e),!Number.isNaN(i)||e.includes(",")&&(e=e.replace(",","."),i=Number(e),!Number.isNaN(i))))return"double"}return B(e)?"date":"string"}}).reduce((e,i)=>e===void 0?i:i===void 0?e:e===i?i:e==="string"||i==="string"?"string":e==="double"||i==="double"?"double":void 0)}const x=function(){const r=ne(),t=new RegExp("^"+r.regexp+"$"),e=new RegExp("["+r.group+"\\s\\xa0]","g"),i=r.factor;return n=>{const o=t.exec(n);if(r.factor=i,!o)return NaN;let s=o[1];if(!o[1]){if(!o[2])return NaN;s=o[2],r.factor*=-1}return s=s.replace(e,"").replace(r.decimal,"."),+s*r.factor}}();function fe(r){return JSON.parse(JSON.stringify(r))}const pe=oe("esriGeometryPoint"),he=["csv"],ye=[0,0];class ge{constructor(t,e){this.x=t,this.y=e}}class ct{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){var u;this._loadOptions=t;const[i]=await Promise.all([this._fetch(e.signal),this._checkProjection((u=t==null?void 0:t.parsingOptions)==null?void 0:u.spatialReference)]),n=Fe(i,t);this._locationInfo=n.locationInfo,this._delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const o=await this._createFeatures(i);this._queryEngine.featureStore.addMany(o);const{fullExtent:s,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(n.layerDefinition.extent=s,a){const{start:d,end:h}=a;n.layerDefinition.timeInfo.timeExtent=[d,h]}return n}async applyEdits(){throw new I("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var n;this._loadOptions.customParameters=t,(n=this._snapshotTask)==null||n.abort(),this._snapshotTask=R(this._snapshotFeatures),this._snapshotTask.promise.then(o=>{this._queryEngine.featureStore.clear(),o&&this._queryEngine.featureStore.addMany(o)},o=>{this._queryEngine.featureStore.clear(),$(o)||P.getLogger("esri.layers.CSVLayer").error(new I("csv-layer:refresh","An error occurred during refresh",{error:o}))}),await this._waitSnapshotComplete();const{fullExtent:e,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:e,timeExtent:i}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:i}=this._loadOptions;if(!e)throw new I("csv-layer:invalid-source","url not defined");const n=A(e);return(await L(n.path,{query:{...n.query,...i},responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:i,extent:n,timeInfo:o}=t.layerDefinition,s=new ee({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new ie({fieldsIndex:N.fromLayerJSON({fields:i,dateFieldsTimeReference:{timeZoneIANA:T}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:o,objectIdField:e,spatialReference:n.spatialReference||{wkid:4326},featureStore:s})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:i}=this._locationInfo,{objectIdField:n,fieldsIndex:o,spatialReference:s}=this._queryEngine;let a=[];const u=[],d=o.fields.filter(l=>l.name!==n).map(l=>l.name);let h=0;const f={};for(const l of o.fields)if(l.type!=="esriFieldTypeOID"&&l.type!=="esriFieldTypeGlobalID"){const p=G(l);p!==void 0&&(f[l.name]=p)}const y=k(t,d,this._delimiter,re(f,n));for(const l of y){const p=this._parseCoordinateValue(l[e]),F=this._parseCoordinateValue(l[i]);if(F!=null&&p!=null&&!isNaN(p)&&!isNaN(F)){l[e]=p,l[i]=F;for(const c in l)if(c!==e&&c!==i)if(o.isDateField(c))l[c]=K(l[c]);else if(o.isNumericField(c)){const m=x(l[c]);isNaN(m)?l[c]=null:l[c]=m}else l[c]!=null&&(l[c]=fe(l[c]));l[n]=h,h++,a.push(new ge(F,p)),u.push(l)}}if(!Q({wkid:4326},s))if(M(s))for(const l of a)[l.x,l.y]=J(l.x,l.y,ye);else a=z(H,a,Z.WGS84,s,null,null);const g=[];for(let l=0;l<a.length;l++){const{x:p,y:F}=a[l],c=u[l];c[n]=l+1,g.push(new W(new X([],[p,F]),c,null,c[n]))}return g}_parseCoordinateValue(t){if(t==null||t==="")return null;let e=x(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await te(U,t)}catch{throw new I("csv-layer:projection-not-supported","Projection not supported")}}}function Fe(r,t){var l,p,F;const e=t.parsingOptions||{},i={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},n=i.layerDefinition={name:Y(t.url,he)||"csv",dateFieldsTimeReference:{timeZoneIANA:T},drawingInfo:pe,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:4326}}},o=C(r),s=(l=o.next().value)==null?void 0:l.trim(),a=(p=o.next().value)==null?void 0:p.trim();if(!s)throw new I("csv-layer:empty-csv","CSV is empty",{csv:r});const{delimiter:u,locationInfo:d}=ue(s,a,e);if(!u)throw new I("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:s,secondLine:a,parsingOptions:e});if(!d)throw new I("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:s,secondLine:a,parsingOptions:e});i.locationInfo=d,i.delimiter=u;const{names:h,aliases:f}=D(s,u),y=de(r,i.delimiter,h,f,i.locationInfo);if((F=e.fields)!=null&&F.length){const c=new N(e.fields);for(const m of y){const b=c.get(m.name);b&&Object.assign(m,b)}}if(!y.some(c=>c.type==="esriFieldTypeOID"&&(n.objectIdField=c.name,!0))){const c={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};n.objectIdField=c.name,y.unshift(c)}n.fields=y;const g=new N(n.fields);if(i.locationInfo&&(i.locationInfo.latitudeFieldName=g.get(i.locationInfo.latitudeFieldName).name,i.locationInfo.longitudeFieldName=g.get(i.locationInfo.longitudeFieldName).name),n.timeInfo){const c=n.timeInfo;if(c.startTimeField){const m=g.get(c.startTimeField);m?(c.startTimeField=m.name,m.type="esriFieldTypeDate"):c.startTimeField=null}if(c.endTimeField){const m=g.get(c.endTimeField);m?(c.endTimeField=m.name,m.type="esriFieldTypeDate"):c.endTimeField=null}if(c.trackIdField){const m=g.get(c.trackIdField);c.trackIdField=m?m.name:null}c.startTimeField||c.endTimeField||(n.timeInfo=null)}return i}export{ct as default};
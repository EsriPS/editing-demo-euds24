import{aG as ue,bU as b,bb as pe,cE as ye,aA as P,aR as W,ct as ce,aO as de,jC as he,ba as p,eH as me,gV as F,F as i,G as r,Z as X,K as $,J as fe,ay as C,jD as ge,bO as K,bP as be,T as L,f8 as ve,b0 as Q,gR as te,bN as ie,jE as we,cw as Se,fI as xe,b5 as $e}from"./index-C1aGfQcb.js";import{v as A,p as D,j as je,n as _e,c as Ie,b as Ee,d as Ve,m as Re,A as se,z as re}from"./UniqueValueRenderer-CAZbf8NT.js";import{e as De}from"./LRUCache-DbPTy7LA.js";import{r as Me}from"./Version-DD-eRUXC.js";import{Z as Ne}from"./FieldsIndex-BrdRr9E_.js";import{y as Pe}from"./OverrideHelper-D-UVQ00R.js";import{J as Te,R as Ce}from"./utils-D7agaEG-.js";import{a as qe,e as Oe,c as Fe}from"./heatmapUtils-D0BPLm9w.js";import{a as Le}from"./RendererLegendOptions-CULirduz.js";const Y="esri.renderers.support.DictionaryLoader",Ae={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};let oe=class{constructor(t,s,o){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new De(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=t,this.config=s,this.fieldMap=o}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,s){var E;let o;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{o=await this._dictionaryPromise}catch(d){if(ue(d))return this._dictionaryPromise=null,null}const c=(E=this._dictionaryVersion)==null?void 0:E.greaterEqual(4,0),a={};if(this.fieldMap)for(const d of this._symbolFields){const n=Te(this.fieldMap[d],this._fieldIndex);if(n){const l=t.attributes[n];a[d]=c?l:l!=null?""+t.attributes[n]:""}else a[d]=""}let u=null;try{u=o==null?void 0:o(a,s)}catch{return null}if(!u||typeof u!="string"||u==="invalid")return null;const v=u.split(";"),S=[],f=[];for(let d=0;d<v.length;d++){const n=v[d];if(n){if(n.includes("po:")){const l=n.slice(3).split("|");if(l.length===3){const I=l[0],j=l[1];let x=l[2];const H="countrylabel";if(I===H&&j==="TextString"){if(this.fieldMap!=null){let g=this.fieldMap[H];g==null&&(g=H,this.fieldMap[g]=g),t.attributes[g]=x}continue}if(j==="DashTemplate")x=x.split(" ").map(g=>Number(g));else if(j==="Color"){const g=new b(x).toRgba();x=[g[0],g[1],g[2],255*g[3]]}else x=Number(x);f.push({primitiveName:I,propertyName:j,value:x,defaultValue:null})}}else if(n.includes("|")){for(const l of n.split("|"))if(this._itemNames.has(l)){S.push(l);break}}else if(this._itemNames.has(n))S.push(n);else if(d===0){S.length=0;let l="Invalid_P";t.geometry!=null&&(pe(t.geometry)?l="Invalid_A":ye(t.geometry)&&(l="Invalid_L")),S.push(l);break}}}const M=t.geometry==null||!t.geometry.hasZ&&t.geometry.type==="point";return this._cimPartsToCIMSymbol(t,S,f,M,s)}async fetchResources(t){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void P.getLogger(Y).error("no valid URL!");const s=W(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:t!=null?t.signal:null}),[{data:o}]=await Promise.all([s,ce()]);if(!o)throw this._dictionaryPromise=null,new de("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:c,dictionary_version:a,expression:u,itemsNames:v}=o,S=u;let f=!1;a&&(this._dictionaryVersion=Me.parse(a),f=this._dictionaryVersion.greaterEqual(4,0)),this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set(v),this._symbolFields=c.symbol;const M={};if(this.config){const n=this.config;for(const l in n)M[l]=n[l]}if(c.configuration)for(const n of c.configuration)M.hasOwnProperty(n.name)||(M[n.name]=n.value);const E=[];if(t!=null&&t.fields&&this.fieldMap)for(const n in this.fieldMap){const l=this.fieldMap[n],I=t.fields.filter(j=>j.name.toLowerCase()===(l==null?void 0:l.toLowerCase()));I.length>0&&E.push({...I[0],type:f?I[0].type:"esriFieldTypeString"})}E.length>0&&(this._fieldIndex=new Ne(E));const d=he(S,t!=null?t.spatialReference:null,E,M).then(n=>{const l={scale:0};return(I,j)=>{if(n==null)return null;const x=n.repurposeFeature({geometry:null,attributes:I});return l.scale=j!=null?j.scale??void 0:void 0,n.evaluate({$feature:x,$view:l},n.services)}}).catch(n=>(P.getLogger(Y).error("Creating dictionary expression failed:",n),null));return this._dictionaryPromise=d,d}async _cimPartsToCIMSymbol(t,s,o,c,a){const u=new Array(s.length);for(let f=0;f<s.length;f++)u[f]=this._getSymbolPart(s[f],a);let v=await Promise.all(u);const S=this.fieldMap;if(S){v=p(v);for(const f of v)Pe.applyDictionaryTextOverrides(f,t,S,this._fieldIndex,Ce(f))}return new me({data:He(v,o,c)})}async _getSymbolPart(t,s){const o=this._symbolCache.get(t);if(o)return o;if(this._ongoingRequests.has(t))return this._ongoingRequests.get(t).then(u=>u.data);const c=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,t),a=W(c,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(t,a),a.finally(()=>this._ongoingRequests.delete(t));try{const u=await a;return this._symbolCache.put(t,u.data),u.data}catch(u){throw u}}};function He(e,t,s){if(!e||e.length===0)return null;const o={...e[0]};if(e.length>1){o.effects=null,o.symbolLayers=[];for(const c of e){const a=c;if(a.effects!=null)for(const u of a.symbolLayers)u.effects==null?u.effects=a.effects:u.effects.unshift(...a.effects);o.symbolLayers.unshift(...a.symbolLayers)}}return s&&(o.callout=Ae),{type:"CIMSymbolReference",symbol:o,primitiveOverrides:t}}var k;let w=k=class extends A(D){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new oe(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,s,o){o!=null&&o.origin||super.writeVisualVariables(e,t,s,o)}clone(){return new k({config:p(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:p(this.fieldMap),url:p(this.url),visualVariables:p(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await F(e,t,this.scaleExpression);for(const s in this.fieldMap){const o=this.fieldMap[s];t.has(o)&&e.add(o)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};i([r({type:oe})],w.prototype,"_loader",null),i([r({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],w.prototype,"config",void 0),i([r({type:Object,json:{write:!0}})],w.prototype,"fieldMap",void 0),i([r({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],w.prototype,"scaleExpression",void 0),i([X("scaleExpression")],w.prototype,"writeData",null),i([r({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],w.prototype,"scaleExpressionTitle",void 0),i([r({type:String,json:{write:!0}})],w.prototype,"url",void 0),i([X("visualVariables")],w.prototype,"writeVisualVariables",null),w=k=i([$("esri.renderers.DictionaryRenderer")],w);const ke=w;var z;let _=z=class extends C{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(P.getLogger(this).error(".field: field must be a string value"),null):ge(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){var e;return new z({color:(e=this.color)==null?void 0:e.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:b,json:{type:[Number],write:!0}})],_.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],_.prototype,"field",void 0),i([fe("field")],_.prototype,"castField",null),i([r({type:String,json:{write:!0}})],_.prototype,"label",void 0),i([r({type:String,json:{write:!0}})],_.prototype,"valueExpression",void 0),i([r({type:String,json:{write:!0}})],_.prototype,"valueExpressionTitle",void 0),_=z=i([$("esri.renderers.support.AttributeColorInfo")],_);const ne=_;var J;let q=J=class extends C{constructor(){super(...arguments),this.unit=null}clone(){return new J({unit:this.unit})}};i([r({type:String,json:{write:!0}})],q.prototype,"unit",void 0),q=J=i([$("esri.renderers.support.DotDensityLegendOptions")],q);const ze=q;var B;let h=B=class extends A(D){constructor(e){super(e),this.attributes=null,this.backgroundColor=new b([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new K,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new be({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){var e;return((e=this.attributes)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new B({attributes:p(this.attributes),backgroundColor:p(this.backgroundColor),dotBlendingEnabled:p(this.dotBlendingEnabled),dotShape:p(this.dotShape),dotSize:p(this.dotSize),dotValue:p(this.dotValue),legendOptions:p(this.legendOptions),outline:p(this.outline),referenceScale:p(this.referenceScale),seed:p(this.seed),visualVariables:p(this.visualVariables),authoringInfo:p(this.authoringInfo)})}getControllerHash(){var t;return`${(t=this.attributes)==null?void 0:t.map(s=>s.field||s.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const s of this.attributes??[])s.valueExpression&&await F(e,t,s.valueExpression),s.field&&e.add(s.field)}};i([r({type:[ne],json:{write:!0}})],h.prototype,"attributes",void 0),i([r({type:b,json:{write:!0}})],h.prototype,"backgroundColor",void 0),i([r({type:Boolean,json:{write:!0}})],h.prototype,"dotBlendingEnabled",void 0),i([r({type:String,json:{write:!1}})],h.prototype,"dotShape",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotSize",void 0),i([r({type:ze,json:{write:!0}})],h.prototype,"legendOptions",void 0),i([r({type:K,json:{default:null,write:!0}})],h.prototype,"outline",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotValue",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"referenceScale",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"seed",void 0),i([L({dotDensity:"dot-density"})],h.prototype,"type",void 0),h=B=i([$("esri.renderers.DotDensityRenderer")],h);const Je=h;var U;let T=U=class extends C{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new U({color:this.color&&this.color.clone(),ratio:this.ratio})}};i([r({type:b,json:{type:[ve],default:null,write:!0}})],T.prototype,"color",void 0),i([r({type:Number,json:{write:!0}})],T.prototype,"ratio",void 0),T=U=i([$("esri.renderers.support.HeatmapColorStop")],T);const O=T;let N=class extends Q(C){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};i([r({type:String,json:{write:!0}})],N.prototype,"minLabel",void 0),i([r({type:String,json:{write:!0}})],N.prototype,"maxLabel",void 0),i([r({type:String,json:{write:!0}})],N.prototype,"title",void 0),N=i([$("esri.renderers.support.HeatmapLegendOptions")],N);var Z;function ee(e){if(e!=null){const{maxDensity:t,minDensity:s,radius:o}=e;if(t!=null||s!=null||o!=null){const{blurRadius:c,maxPixelIntensity:a,minPixelIntensity:u,...v}=e;return v}}return e}let y=Z=class extends D{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new O({ratio:0,color:new b("rgba(255, 140, 0, 0)")}),new O({ratio:.75,color:new b("rgba(255, 140, 0, 1)")}),new O({ratio:.9,color:new b("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null}normalizeCtorArgs(e){return ee(e)}get blurRadius(){return qe(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,s=this.minPixelIntensity;this._set("radius",Oe(e)),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",s*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity)}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity)}get _pixelIntensityToDensity(){return 24/(Fe**2*this.blurRadius**4)}read(e,t){e=ee(e),super.read(e,t)}getSymbol(){return new ie}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const s=this.field,o=this.valueExpression;s&&typeof s=="string"&&we(e,t,s),o&&typeof o=="string"&&await F(e,t,o)}getAttributeHash(){return""}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new Z({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:p(this.colorStops),field:this.field,legendOptions:p(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:je,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],y.prototype,"authoringInfo",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"blurRadius",null),i([r({type:[O],json:{write:!0}})],y.prototype,"colorStops",void 0),i([r({type:String,json:{write:!0}})],y.prototype,"field",void 0),i([r({type:N,json:{write:!0}})],y.prototype,"legendOptions",void 0),i([r({type:Number,json:{write:!0}})],y.prototype,"maxDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"maxPixelIntensity",null),i([r({type:Number,json:{write:!0}})],y.prototype,"minDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"minPixelIntensity",null),i([r({type:Number,cast:te,json:{write:!0}})],y.prototype,"radius",void 0),i([r({type:Number,range:{min:0},json:{default:0,write:!0}})],y.prototype,"referenceScale",void 0),i([L({heatmap:"heatmap"})],y.prototype,"type",void 0),i([r({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],y.prototype,"valueExpression",void 0),i([r({type:String})],y.prototype,"valueExpressionTitle",void 0),i([r({readOnly:!0})],y.prototype,"_pixelIntensityToDensity",null),y=Z=i([$("esri.renderers.HeatmapRenderer")],y);const le=y;let R=class extends Q(C){constructor(){super(...arguments),this.color=new b([0,0,0,0]),this.label=null,this.threshold=0}};i([r({type:b,json:{write:!0}})],R.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],R.prototype,"label",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],R.prototype,"threshold",void 0),R=i([$("esri.renderers.support.OthersCategory")],R);const Be={base:Ie,key:"type",typeMap:{size:Ee,opacity:Ve}};let m=class extends A(Q(D)){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new b([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new R,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart",this.visualVariables=null}getSymbol(){var e;return new ie({size:this.size?this.size/2+(((e=this.outline)==null?void 0:e.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(Se)}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const s of this.attributes)s.valueExpression&&await F(e,t,s.valueExpression),s.field&&e.add(s.field)}};i([r({type:[ne],json:{write:!0}})],m.prototype,"attributes",void 0),i([r(_e)],m.prototype,"backgroundFillSymbol",void 0),i([r({type:b,json:{write:!0}})],m.prototype,"defaultColor",void 0),i([r({type:String,json:{write:!0}})],m.prototype,"defaultLabel",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],m.prototype,"holePercentage",void 0),i([r({type:R,json:{write:!0}})],m.prototype,"othersCategory",void 0),i([r({type:Le,json:{write:!0}})],m.prototype,"legendOptions",void 0),i([r({type:K,json:{default:null,write:!0}})],m.prototype,"outline",void 0),i([r({type:Number,cast:te,json:{write:!0}})],m.prototype,"size",void 0),i([L({pieChart:"pie-chart"})],m.prototype,"type",void 0),i([r({types:[Be]})],m.prototype,"visualVariables",void 0),m=i([$("esri.renderers.PieChartRenderer")],m);const Ue=m;var G;let V=G=class extends A(D){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(s=>s.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new G({description:this.description,label:this.label,symbol:p(this.symbol),visualVariables:p(this.visualVariables),authoringInfo:p(this.authoringInfo)})}};i([r({type:String,json:{write:!0}})],V.prototype,"description",void 0),i([r({type:String,json:{write:!0}})],V.prototype,"label",void 0),i([r(Re)],V.prototype,"symbol",void 0),i([L({simple:"simple"})],V.prototype,"type",void 0),V=G=i([$("esri.renderers.SimpleRenderer")],V);const ae=V,Ze={key:"type",base:D,typeMap:{heatmap:le,simple:ae,"unique-value":se,"class-breaks":re,"dot-density":Je,dictionary:ke,"pie-chart":Ue},errorContext:"renderer"},yt={key:"type",base:D,typeMap:{simple:ae,"unique-value":se,"class-breaks":re,heatmap:le},errorContext:"renderer",validate:Ge};function Ge(e){switch(e.type){case"simple":return Ke(e);case"unique-value":return Qe(e);case"class-breaks":return We(e);case"heatmap":return e}}function Ke(e){if(e.symbol)return e;P.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function Qe(e){const t=e.uniqueValueInfos,s=t==null?void 0:t.filter(({symbol:o,label:c},a)=>(o||P.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${a}] ${c}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.uniqueValueInfos=s),e}function We(e){const t=e.classBreakInfos,s=t==null?void 0:t.filter(({symbol:o,label:c},a)=>(o||P.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${a}] ${c}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.classBreakInfos=s),e}function ct(e,t){return Ye(e,null,t)}const Xe=xe({types:Ze});function Ye(e,t,s){return e?e&&(e.styleName||e.styleUrl)&&e.type!=="uniqueValue"?(s!=null&&s.messages&&s.messages.push(new $e("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:s})),null):Xe(e,t,s):null}export{O as l,Ze as m,Ye as o,ae as p,ct as t,yt as u};

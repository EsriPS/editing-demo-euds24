import{F as e,G as o,bU as p,f8 as c,Z as d,K as i,ay as n,bu as v,b0 as y,T as b}from"./index-C1aGfQcb.js";var l;let t=l=class extends n{constructor(r){super(r),this.color=null,this.label=null,this.value=null}writeValue(r,a,u){a[u]=r??0}clone(){return new l({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};e([o({type:p,json:{type:[c],write:!0}})],t.prototype,"color",void 0),e([o({type:String,json:{write:!0}})],t.prototype,"label",void 0),e([o({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],t.prototype,"value",void 0),e([d("value")],t.prototype,"writeValue",null),t=l=e([i("esri.renderers.visualVariables.support.ColorStop")],t);const w=t,h=v()({ascendingValues:"ascending-values",descendingValues:"descending-values"});let s=class extends y(n){constructor(r){super(r),this.title=null,this.order=null}};e([o({type:String,json:{write:!0}})],s.prototype,"title",void 0),e([b(h)],s.prototype,"order",void 0),s=e([i("esri.renderers.support.RendererLegendOptions")],s);const g=s;export{g as a,w as b};

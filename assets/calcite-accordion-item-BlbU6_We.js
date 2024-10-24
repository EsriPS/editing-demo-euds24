import{p as f,H as u,c as s,d as x,f as b,n as h,j as t,y,l as d,ah as k,t as S,k as E,eW as m,m as I,o as C}from"./index-C1aGfQcb.js";import{c as w,d as A}from"./conditionalSlot-DyGemPLG.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.1
 */const a={actionsStart:"actions-start",actionsEnd:"actions-end"},c={actionsEnd:"actions-end",actionsStart:"actions-start",content:"content",description:"description",expandIcon:"expand-icon",header:"header",headerContainer:"header-container",headerContent:"header-content",headerText:"header-text",heading:"heading",icon:"icon",iconEnd:"icon--end",iconStart:"icon--start"},r={section:"section",sectionToggle:"section-toggle"},T=`.icon-position--end,.icon-position--start{--calcite-internal-accordion-item-icon-rotation:calc(90deg * -1);--calcite-internal-accordion-item-active-icon-rotation:0deg;--calcite-internal-accordion-item-icon-rotation-rtl:90deg;--calcite-internal-accordion-item-active-icon-rotation-rtl:0deg}:host{position:relative;display:flex;flex-direction:column;text-decoration-line:none;color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-color-text-3)));background-color:var(--calcite-accordion-item-background-color);border-width:0}:host .header{background-color:var(--calcite-accordion-item-header-background-color)}.icon-position--start{--calcite-internal-accordion-item-flex-direction:row-reverse;--calcite-internal-accordion-item-icon-spacing-start:0;--calcite-internal-accordion-item-icon-spacing-end:var(--calcite-internal-accordion-icon-margin)}.icon-position--end{--calcite-internal-accordion-item-flex-direction:row;--calcite-internal-accordion-item-icon-spacing-start:var(--calcite-internal-accordion-icon-margin);--calcite-internal-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-internal-accordion-item-icon-rotation:0deg;--calcite-internal-accordion-item-active-icon-rotation:180deg;--calcite-internal-accordion-item-icon-rotation-rtl:0deg;--calcite-internal-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}.content,.header{border-block-end-width:var(--calcite-border-width-sm);border-block-end-style:solid;border-color:var(--calcite-accordion-item-border-color, var(--calcite-accordion-border-color, var(--calcite-color-border-2)))}.header-content,.content{padding:var(--calcite-accordion-item-content-space, var(--calcite-internal-accordion-item-padding, var(--calcite-internal-accordion-item-spacing-unit, 0.5rem 0.75rem)))}.header{display:flex;align-items:stretch}.header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.header-content{flex-grow:1;cursor:pointer;outline-color:transparent;flex-direction:var(--calcite-internal-accordion-item-flex-direction);color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color, inherit))}.header-content:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.header-content:focus,.header-content:hover,.header-content:active{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color-hover, var(--calcite-color-text-2)))}.header-content:focus .heading,.header-content:hover .heading,.header-content:active .heading{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color-pressed, var(--calcite-color-text-1)))}.header-container{inline-size:100%}.header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}.heading,.description{display:flex;inline-size:100%}.heading{font-weight:var(--calcite-font-weight-medium)}.actions-start,.actions-end{display:flex;align-items:center}.icon{display:flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-internal-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-internal-accordion-item-icon-spacing-end)}.icon--start{color:var(--calcite-accordion-item-start-icon-color, var(--calcite-accordion-item-icon-color, currentColor));margin-inline-end:var(--calcite-internal-accordion-icon-margin)}.icon--end{color:var(--calcite-accordion-item-end-icon-color, var(--calcite-accordion-item-icon-color, currentColor));margin-inline-end:var(--calcite-internal-accordion-icon-margin);margin-inline-start:var(--calcite-internal-accordion-icon-margin)}.expand-icon{color:var(--calcite-accordion-item-expand-icon-color, var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-color-text-3))));margin-inline-start:var(--calcite-internal-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-internal-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-internal-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-internal-accordion-item-icon-rotation-rtl))}.description{margin-block-start:0.25rem}.content{display:none;padding-block-start:0px;text-align:initial}:host(:not(:focus):not(:hover):not([expanded])) .heading{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2)))}:host([expanded]){color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-text-color-pressed, var(--calcite-color-text-1))))}:host([expanded]) .header{border-block-end-color:transparent}:host([expanded]) .expand-icon{color:var(--calcite-accordion-item-expand-icon-color, var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2)))));transform:rotate(var(--calcite-internal-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-internal-accordion-item-active-icon-rotation-rtl))}:host([expanded]) .description{color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2))))}:host([expanded]) .content{display:block}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}.header-content:hover .heading,.header-content:focus .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}`,P=T,p=f(class extends u{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionItemSelect=s(this,"calciteInternalAccordionItemSelect",6),this.calciteInternalAccordionItemClose=s(this,"calciteInternalAccordionItemClose",6),this.storeHeaderEl=e=>{this.headerEl=e},this.itemHeaderClickHandler=()=>this.emitRequestedItem(),this.expanded=!1,this.heading=void 0,this.description=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconPosition=void 0,this.iconType=void 0,this.accordionParent=void 0,this.scale=void 0}connectedCallback(){w(this)}componentWillLoad(){x(this)}componentDidLoad(){b(this)}disconnectedCallback(){A(this)}renderActionsStart(){const{el:e}=this;return h(e,a.actionsStart)?t("div",{class:c.actionsStart},t("slot",{name:a.actionsStart})):null}renderActionsEnd(){const{el:e}=this;return h(e,a.actionsEnd)?t("div",{class:c.actionsEnd},t("slot",{name:a.actionsEnd})):null}render(){const{iconFlipRtl:e}=this,i=y(this.el),n=this.iconStart?t("calcite-icon",{class:{[c.icon]:!0,[c.iconStart]:!0},flipRtl:e==="both"||e==="start",icon:this.iconStart,key:"icon-start",scale:d(this.scale)}):null,l=this.iconEnd?t("calcite-icon",{class:{[c.iconEnd]:!0,[c.icon]:!0},flipRtl:e==="both"||e==="end",icon:this.iconEnd,key:"icon-end",scale:d(this.scale)}):null,{description:o}=this;return t(E,{key:"73a74d61e41199c57868bd5375ba1b08f8e19dbc"},t("div",{key:"ce9e0a74ea1eb93b7e2f00e95e6a092dcf99726b",class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},t("div",{key:"18af6a636b01a816363edf73bd05a486ac0cc2b2",class:{[c.header]:!0,[k.rtl]:i==="rtl"}},this.renderActionsStart(),t("div",{key:"8a82a3acec9576d7e936714d1bee0bd2a1cc4ab1","aria-controls":r.section,"aria-expanded":S(this.expanded),class:c.headerContent,id:r.sectionToggle,onClick:this.itemHeaderClickHandler,ref:this.storeHeaderEl,role:"button",tabindex:"0"},t("div",{key:"b9b223e8e0b0f60d9f6f9c5a9bda1458def7ae01",class:c.headerContainer},n,t("div",{key:"ccdba89b98942b7163d09a0f78175c374aba5875",class:c.headerText},t("span",{key:"c91bcaf36ba60ac2a8ef06e3356a15d1f3a7e78f",class:c.heading},this.heading),o?t("span",{class:c.description},o):null),l),t("calcite-icon",{key:"aebf05069b1ceae376fb67074aad773c4f403c16",class:c.expandIcon,icon:this.iconType==="chevron"?"chevronDown":this.iconType==="caret"?"caretDown":this.expanded?"minus":"plus",scale:d(this.scale)})),this.renderActionsEnd()),t("section",{key:"7371b06f1ec99aab9351113663eda976540ae7b0","aria-labelledby":r.sectionToggle,class:c.content,id:r.section},t("slot",{key:"69b851d2989876bece534e499a039e55eaabb1ec"}))))}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.emitRequestedItem(),e.preventDefault();break}}updateActiveItemOnChange(e){const[i]=e.composedPath(),n=m(this.el,"calcite-accordion");i===n&&(this.determineActiveItem(n.selectionMode,e.detail.requestedAccordionItem),e.stopPropagation())}accordionItemSyncHandler(e){const[i]=e.composedPath(),n=this.el;if(n.parentElement===i)return;const o=m(n,"calcite-accordion");i===o&&(this.iconPosition=o.iconPosition,this.iconType=o.iconType,this.scale=o.scale,e.stopPropagation())}async setFocus(){await I(this),this.headerEl.focus()}determineActiveItem(e,i){switch(e){case"multiple":this.el===i&&(this.expanded=!this.expanded);break;case"single":this.expanded=this.el===i?!this.expanded:!1;break;case"single-persist":this.expanded=this.el===i;break}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}get el(){return this}static get style(){return P}},[1,"calcite-accordion-item",{expanded:[1540],heading:[1],description:[1],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconPosition:[1,"icon-position"],iconType:[1,"icon-type"],accordionParent:[16],scale:[1],setFocus:[64]},[[0,"keydown","keyDownHandler"],[16,"calciteInternalAccordionChange","updateActiveItemOnChange"],[4,"calciteInternalAccordionItemsSync","accordionItemSyncHandler"]]]);function g(){if(typeof customElements>"u")return;["calcite-accordion-item","calcite-icon"].forEach(e=>{switch(e){case"calcite-accordion-item":customElements.get(e)||customElements.define(e,p);break;case"calcite-icon":customElements.get(e)||C();break}})}g();const B=p,F=g;export{B as CalciteAccordionItem,F as defineCustomElement};
import{p as b,H as p,c,C as v,j as a,r as y,ew as d,_ as z,aa as L,ab as C,a as E,b as k,d as w,e as A,f as S,v as H,ad as O,ae as M,g as I,h as T,I as F,t as W,ag as j,s as h,ai as D,k as V,m as _,u as R,a4 as l,o as U}from"./index-C1aGfQcb.js";import{V as $}from"./Validation-GlGaxVIF.js";import{s as q}from"./input-De-TCHNF.js";import{d as B}from"./input-message-DUj9fRxn.js";import{t as G}from"./throttle-B9yWORl3.js";import"./debounce-DUf35w49.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.1
 */const i={assistiveText:"assistive-text",characterLimit:"character-limit",content:"content",container:"container",footer:"footer",resizeDisabled:"resize--disabled",resizeDisabledX:"resize--disabled-x",resizeDisabledY:"resize--disabled-y",characterOverLimit:"character--over-limit",readOnly:"readonly",textAreaInvalid:"text-area--invalid",footerSlotted:"footer--slotted",hide:"hide",footerEndSlotOnly:"footer--end-only",textArea:"text-area",textAreaOnly:"text-area--only"},f={validationMessage:"textAreaValidationMessage"},m={footerStart:"footer-start",footerEnd:"footer-end"},P=100,X=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%;--calcite-internal-text-area-border-color:var(--calcite-text-area-border-color, var(--calcite-color-border-input));--calcite-internal-text-area-footer-border-color:var(
    --calcite-text-area-footer-border-color,
    var(--calcite-internal-text-area-border-color)
  )}.text-area,.footer{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--1));background-color:var(--calcite-text-area-background-color, var(--calcite-color-foreground-1));padding-block:var(--calcite-spacing-sm);padding-inline:var(--calcite-spacing-md)}.text-area{position:relative;margin:0px;box-sizing:border-box;display:block;inline-size:100%;font-family:var(--calcite-font-family);--calcite-internal-text-area-border-block-end-color:var(--calcite-internal-text-area-border-color);border:var(--calcite-border-width-sm) solid var(--calcite-internal-text-area-border-color);border-block-end-color:var(--calcite-internal-text-area-border-block-end-color);color:var(--calcite-text-area-text-color, var(--calcite-color-text-1));font-family:var(--calcite-sans-family);max-block-size:var(--calcite-text-area-max-height);min-block-size:var(--calcite-text-area-min-height);max-inline-size:var(--calcite-text-area-max-width);min-inline-size:var(--calcite-text-area-min-width, 12rem)}.text-area::placeholder{font-weight:var(--calcite-font-weight-normal)}@media screen and (max-width: 480px){.text-area{resize:none}}.text-area:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.text-area.text-area--invalid{--calcite-internal-text-area-border-color:var(--calcite-color-status-danger)}.text-area.text-area--invalid:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.text-area.footer--slotted{min-inline-size:18rem}.text-area:not(.text-area--only,.text-area--invalid){--calcite-internal-text-area-border-block-end-color:var(
    --calcite-text-area-divider-color,
    var(--calcite-color-border-3)
  )}.footer{box-sizing:border-box;display:flex;align-items:center;border:var(--calcite-border-width-sm) solid var(--calcite-internal-text-area-footer-border-color);border-block-start:var(--calcite-border-width-none);min-block-size:2.25rem}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--1));font-weight:var(--calcite-font-weight-regular);color:var(--calcite-text-area-character-limit-text-color, var(--calcite-color-text-2));padding-inline-start:var(--calcite-spacing-md)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-status-danger)}.readonly{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.text-area.text-area--only{block-size:100%}:host([resize=none]) .text-area{resize:none}:host([resize=horizontal]) .text-area{resize:horizontal}:host([resize=vertical]) .text-area{resize:vertical}:host([scale=s]) .text-area,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:0.5rem;font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--2))}:host([scale=s]) .footer{min-block-size:1.75rem}:host([scale=s]) .text-area{padding-block:0.25rem;padding-inline:0.5rem}:host([scale=m]) .text-area{padding-block:0.5rem;padding-inline:0.75rem}:host([scale=m]) .footer{padding-block:0.5rem;padding-inline:0.75rem;min-block-size:2.25rem}:host([scale=l]) .text-area,:host([scale=l]) .footer{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size-0));padding-block:var(--calcite-spacing-md);padding-inline:var(--calcite-spacing-xl)}:host([scale=l]) .footer{min-block-size:2.75rem}:host([scale=l]) .text-area,:host([scale=l]) .footer,:host([scale=l]) .character-limit{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size-0));padding-inline-start:var(--calcite-spacing-xl)}:host([status=invalid]){--calcite-internal-text-area-border-color:var(--calcite-color-status-danger)}:host([status=invalid]) .text-area:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([disabled]) .text-area,:host([disabled]) .footer{opacity:var(--calcite-opacity-half)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,Y=X,g=b(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTextAreaInput=c(this,"calciteTextAreaInput",7),this.calciteTextAreaChange=c(this,"calciteTextAreaChange",7),this.guid=v(),this.handleInput=e=>{this.value=e.target.value,this.calciteTextAreaInput.emit()},this.handleChange=()=>{this.calciteTextAreaChange.emit()},this.contentSlotChangeHandler=()=>{this.value||this.el.childNodes.forEach(t=>{t.nodeName==="#text"&&(this.value=t.nodeValue.trim())})},this.renderCharacterLimit=()=>this.maxLength?(this.localizedCharacterLengthObj=this.getLocalizedCharacterLength(),a("span",{class:i.characterLimit},a("span",{class:{[i.characterOverLimit]:this.isCharacterLimitExceeded()}},this.localizedCharacterLengthObj.currentLength),"/",this.localizedCharacterLengthObj.maxLength)):null,this.resizeObserver=y("resize",async()=>{await d(this);const{textAreaHeight:e,textAreaWidth:t,elHeight:s,elWidth:r,footerHeight:o,footerWidth:n}=this.getHeightAndWidthOfElements();n>0&&n!==t&&(this.footerEl.style.width=`${t}px`),(r!==t||s!==e+(o||0))&&this.setHeightAndWidthToAuto()}),this.setTextAreaEl=e=>{this.textAreaEl=e,this.resizeObserver.observe(e)},this.setHeightAndWidthToAuto=G(()=>{(this.resize==="vertical"||this.resize==="both")&&(this.el.style.height="auto"),(this.resize==="horizontal"||this.resize==="both")&&(this.el.style.width="auto")},P,{leading:!1}),this.columns=void 0,this.disabled=!1,this.form=void 0,this.groupSeparator=!1,this.label=void 0,this.minLength=void 0,this.maxLength=void 0,this.messages=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.numberingSystem=void 0,this.placeholder=void 0,this.readOnly=!1,this.required=!1,this.resize="both",this.rows=void 0,this.scale="m",this.status="idle",this.value="",this.wrap="soft",this.messageOverrides=void 0,this.defaultMessages=void 0,this.endSlotHasElements=void 0,this.startSlotHasElements=void 0,this.effectiveLocale=""}handleGlobalAttributesChanged(){z(this)}onMessagesChange(){}connectedCallback(){L(this),C(this),E(this),k(this)}async componentWillLoad(){w(this),await A(this)}componentDidLoad(){S(this)}componentDidRender(){H(this),this.setTextAreaHeight()}disconnectedCallback(){var e;O(this),M(this),I(this),T(this),(e=this.resizeObserver)==null||e.disconnect()}render(){const e=this.startSlotHasElements||this.endSlotHasElements||!!this.maxLength;return a(V,{key:"87f925e13e3a1bef5b85af59a4e61433c3262929"},a(F,{key:"3431b47034859c62b0d0116b5ff47189cd46ea0b",disabled:this.disabled},a("textarea",{key:"78e60318dc05f03f0ec0f0738384b33a7e4ed546","aria-describedby":this.guid,"aria-errormessage":f.validationMessage,"aria-invalid":W(this.status==="invalid"||this.isCharacterLimitExceeded()),"aria-label":j(this),autofocus:this.el.autofocus,class:{[i.textArea]:!0,[i.readOnly]:this.readOnly,[i.textAreaInvalid]:this.isCharacterLimitExceeded(),[i.footerSlotted]:this.endSlotHasElements&&this.startSlotHasElements,[i.textAreaOnly]:!e},cols:this.columns,disabled:this.disabled,name:this.name,onChange:this.handleChange,onInput:this.handleInput,placeholder:this.placeholder,readOnly:this.readOnly,ref:this.setTextAreaEl,required:this.required,rows:this.rows,value:this.value,wrap:this.wrap}),a("span",{key:"54d603509f65611918b788280124499ecf2161cf",class:{[i.content]:!0}},a("slot",{key:"e1ffe00ed1eeb26899f372ea9d011da20bcddfeb",onSlotchange:this.contentSlotChangeHandler})),a("footer",{key:"bb52300f3ba3568e0e325c7e620cb6f5c53cba37",class:{[i.footer]:!0,[i.readOnly]:this.readOnly,[i.hide]:!e},ref:t=>this.footerEl=t},a("div",{key:"a5c5c250493dab203789dd27ce187c817006c5be",class:{[i.container]:!0,[i.footerEndSlotOnly]:!this.startSlotHasElements&&this.endSlotHasElements}},a("slot",{key:"a54c7b6ca529475fa59cf1849213cd0ec7bf8f9c",name:m.footerStart,onSlotchange:t=>this.startSlotHasElements=h(t)}),a("slot",{key:"e14af1362fd85e7461c42dd10dfd188d10f59ab0",name:m.footerEnd,onSlotchange:t=>this.endSlotHasElements=h(t)})),this.renderCharacterLimit()),a(D,{key:"b64b6dc288df7eadcf3eef9e17aa931732f4ad09",component:this}),this.isCharacterLimitExceeded()&&a("span",{key:"fb2017a6f21f4590934d9a1118e5dc5ee29e1dd5","aria-live":"polite",class:i.assistiveText,id:this.guid},this.replacePlaceHoldersInMessages()),this.validationMessage&&this.status==="invalid"?a($,{icon:this.validationIcon,id:f.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}async setFocus(){await _(this),this.textAreaEl.focus()}async selectText(){await d(this),this.textAreaEl.select()}effectiveLocaleChange(){R(this,this.effectiveLocale)}onLabelClick(){this.setFocus()}getLocalizedCharacterLength(){const e=this.value?this.value.length.toString():"0",t=this.maxLength.toString();return this.numberingSystem==="latn"?{currentLength:e,maxLength:t}:(l.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"never",useGrouping:this.groupSeparator},{currentLength:l.localize(e),maxLength:l.localize(t)})}syncHiddenFormInput(e){e.setCustomValidity(""),this.isCharacterLimitExceeded()&&e.setCustomValidity(this.replacePlaceHoldersInMessages()),q("textarea",this,e)}setTextAreaHeight(){const{textAreaHeight:e,elHeight:t,footerHeight:s}=this.getHeightAndWidthOfElements();s>0&&e+s!=t&&(this.textAreaEl.style.height=`${t-s}px`)}getHeightAndWidthOfElements(){const{height:e,width:t}=this.textAreaEl.getBoundingClientRect(),{height:s,width:r}=this.el.getBoundingClientRect(),{height:o,width:n}=this.footerEl.getBoundingClientRect();return{textAreaHeight:e,textAreaWidth:t,elHeight:s,elWidth:r,footerHeight:o,footerWidth:n}}replacePlaceHoldersInMessages(){return this.messages.tooLong.replace("{maxLength}",this.localizedCharacterLengthObj.maxLength).replace("{currentLength}",this.localizedCharacterLengthObj.currentLength)}isCharacterLimitExceeded(){var e;return((e=this.value)==null?void 0:e.length)>this.maxLength}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Y}},[1,"calcite-text-area",{columns:[514],disabled:[516],form:[513],groupSeparator:[516,"group-separator"],label:[1],minLength:[514,"min-length"],maxLength:[514,"max-length"],messages:[1040],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],numberingSystem:[1,"numbering-system"],placeholder:[1],readOnly:[516,"read-only"],required:[516],resize:[513],rows:[514],scale:[513],status:[513],value:[1025],wrap:[513],messageOverrides:[1040],defaultMessages:[32],endSlotHasElements:[32],startSlotHasElements:[32],effectiveLocale:[32],setFocus:[64],selectText:[64]},void 0,{autofocus:["handleGlobalAttributesChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function u(){if(typeof customElements>"u")return;["calcite-text-area","calcite-icon","calcite-input-message"].forEach(e=>{switch(e){case"calcite-text-area":customElements.get(e)||customElements.define(e,g);break;case"calcite-icon":customElements.get(e)||U();break;case"calcite-input-message":customElements.get(e)||B();break}})}u();const ae=g,ie=u;export{ae as CalciteTextArea,ie as defineCustomElement};

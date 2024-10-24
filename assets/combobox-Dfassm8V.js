import{p as W,H as G,c as m,r as k,C as q,a3 as _,ew as j,ex as g,ey as K,a2 as X,ez as J,m as Q,a as Y,b as Z,aa as N,ab as ee,d as te,e as ie,cC as se,f as le,v as ne,ad as oe,ae,g as ce,h as re,u as he,j as c,t as v,ag as de,l as w,I as pe,ai as ue,k as me,o as fe}from"./index-C1aGfQcb.js";import{c as be}from"./core-CoDzbbcw.js";import{f as ge,e as xe}from"./filter-Ig933xs6.js";import{e as Ie,f as Ce,c as x,r as ve,a as ye,F as H}from"./floating-ui-R-4Kk1Xn.js";import{o as D}from"./openCloseComponent-BuFuLtHA.js";import{V as we}from"./Validation-GlGaxVIF.js";import{i as f,h as A,C as h,a as Se,g as I,b as F,c as Ee,d as ke,e as O,I as T}from"./utils2-CMX6KhTm.js";import{d as He}from"./chip-C9cjUhni.js";import{d as De}from"./combobox-item-DuAZwYfM.js";import{d as Ae}from"./input-message-DUj9fRxn.js";import{d as M}from"./debounce-DUf35w49.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.1
 */const $={button:"x-button"},Fe=({disabled:b,key:e,label:t,scale:i})=>c("button",{"aria-label":t,class:$.button,disabled:b,key:e,tabIndex:-1,type:"button"},c("calcite-icon",{icon:"x",scale:w(i)})),Te=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]) .x-button{inline-size:1rem;block-size:1rem}:host([scale=m]) .x-button{inline-size:1.5rem;block-size:1.5rem}:host([scale=l]) .x-button{inline-size:2rem;block-size:2rem}.x-button{margin:0px;display:flex;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-width:2px;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-radius:50%;border-color:transparent;background-color:var(--calcite-color-foreground-2)}.x-button:active,.x-button:hover{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.x-button:active{border-style:solid;border-color:var(--calcite-color-brand)}.x-button calcite-icon{color:inherit}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1rem;--calcite-internal-combobox-input-margin-block:calc(0.25rem - 1px)}:host([scale=s]) .x-button{margin-inline:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:1rem;--calcite-internal-combobox-input-margin-block:calc(0.5rem - 1px)}:host([scale=m]) .x-button{margin-inline-end:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:1.5rem;--calcite-internal-combobox-input-margin-block:calc(0.625rem - 1px)}:host([scale=l]) .x-button{margin-inline-end:1rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.wrapper:hover .icon{color:var(--calcite-color-text-1)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([read-only]) .wrapper{background-color:var(--calcite-color-background)}:host([read-only]) .label{font-weight:var(--calcite-font-weight-medium)}:host([status=invalid]) .wrapper{border-color:var(--calcite-color-status-danger)}:host([status=invalid]:focus-within) .wrapper{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{position:relative;display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;gap:var(--calcite-combobox-item-spacing-unit-s);margin-inline-end:var(--calcite-combobox-item-spacing-unit-s)}.grid-input.selection-display-fit,.grid-input.selection-display-single{flex-wrap:nowrap;overflow:hidden}.input{flex-grow:1;appearance:none;overflow:hidden;text-overflow:ellipsis;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-color-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);inline-size:100%;margin-block-end:var(--calcite-combobox-item-spacing-unit-s);min-inline-size:4.8125rem}.input:focus{outline:2px solid transparent;outline-offset:2px}.input:placeholder-shown{text-overflow:ellipsis}.input--single{padding:0px;margin-block:var(--calcite-internal-combobox-input-margin-block)}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.placeholder-icon{color:var(--calcite-color-text-3)}.input-wrap{display:flex;flex-grow:1;align-items:center}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;cursor:pointer;align-items:center}.icon-end{flex:none}.icon-end .icon{color:var(--calcite-color-text-3)}.floating-ui-container{--calcite-floating-ui-z-index:var(--calcite-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}.floating-ui-container--active{visibility:visible}@media (forced-colors: active){.wrapper,.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width, 100%)}.list{margin:0px;display:block;padding:0px}.list--hide{block-size:0px;overflow:hidden}calcite-chip{--calcite-animation-timing:0}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);max-inline-size:100%}.chip--active{background-color:var(--calcite-color-foreground-3)}.chip--invisible{visibility:hidden;position:absolute}.item{display:block}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}::slotted(calcite-combobox-item-group:not(:first-child)){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}`,Me=Te,Pe=b=>b.tagName===O,P="combobox-item-",V="combobox-chip-",z="combobox-label-",y="combobox-listbox-",L="combobox-input-",Ve=W(class extends G{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteComboboxChange=m(this,"calciteComboboxChange",6),this.calciteComboboxFilterChange=m(this,"calciteComboboxFilterChange",6),this.calciteComboboxChipClose=m(this,"calciteComboboxChipClose",6),this.calciteComboboxBeforeClose=m(this,"calciteComboboxBeforeClose",6),this.calciteComboboxClose=m(this,"calciteComboboxClose",6),this.calciteComboboxBeforeOpen=m(this,"calciteComboboxBeforeOpen",6),this.calciteComboboxOpen=m(this,"calciteComboboxOpen",6),this.placement=Ie,this.internalValueChangeFlag=!1,this.textInput=null,this.mutationObserver=k("mutation",()=>this.updateItems()),this.resizeObserver=k("resize",()=>{this.setMaxScrollerHeight(),this.refreshSelectionDisplay()}),this.guid=q(),this.inputHeight=0,this.ignoreSelectedEventsFlag=!1,this.openTransitionProp="opacity",this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?Ce(t,e):null},this.getValue=()=>{const e=this.selectedItems.map(t=>{var i;return(i=t==null?void 0:t.value)==null?void 0:i.toString()});return e!=null&&e.length?e.length>1?e:e[0]:""},this.onLabelClick=()=>{this.setFocus()},this.keyDownHandler=e=>{if(this.readOnly)return;const{key:t}=e;switch(t){case"Tab":this.activeChipIndex=-1,this.activeItemIndex=-1,this.allowCustomValues&&this.filterText?(this.addCustomChip(this.filterText,!0),e.preventDefault()):this.open?(this.open=!1,e.preventDefault()):!this.allowCustomValues&&this.filterText&&(this.clearInputValue(),this.filterItems(""),this.updateActiveItemIndex(-1));break;case"ArrowLeft":(this.activeChipIndex!==-1||this.textInput.selectionStart===0)&&(this.previousChip(),e.preventDefault());break;case"ArrowRight":this.activeChipIndex!==-1&&(this.nextChip(),e.preventDefault());break;case"ArrowUp":this.filteredItems.length&&(e.preventDefault(),this.open&&this.shiftActiveItemIndex(-1),this.comboboxInViewport()||this.el.scrollIntoView());break;case"ArrowDown":this.filteredItems.length&&(e.preventDefault(),this.open?this.shiftActiveItemIndex(1):(this.open=!0,this.ensureRecentSelectedItemIsActive()),this.comboboxInViewport()||this.el.scrollIntoView());break;case" ":!this.textInput.value&&!e.defaultPrevented&&(this.open||(this.open=!0,this.shiftActiveItemIndex(1)),e.preventDefault());break;case"Home":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(0),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"End":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(this.filteredItems.length-1),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"Escape":!this.clearDisabled&&!this.open&&this.clearValue(),this.open=!1,e.preventDefault();break;case"Enter":if(this.open&&this.activeItemIndex>-1){const i=this.filteredItems[this.activeItemIndex];this.toggleSelection(i,!i.selected),e.preventDefault()}else this.activeChipIndex>-1?(this.removeActiveChip(),e.preventDefault()):this.allowCustomValues&&this.filterText?(this.addCustomChip(this.filterText,!0),e.preventDefault()):e.defaultPrevented||_(this)&&e.preventDefault();break;case"Delete":case"Backspace":{if(this.selectionDisplay==="single"||this.selectionDisplay==="fit"&&this.selectedHiddenChipsCount>0)return;this.activeChipIndex>-1?(e.preventDefault(),this.removeActiveChip()):!this.filterText&&this.isMulti()&&(e.preventDefault(),this.removeLastChip());break}}},this.setMaxScrollerHeight=async()=>{const{listContainerEl:e,open:t,referenceEl:i}=this;if(!e||!t)return;await this.reposition(!0);const s=this.getMaxScrollerHeight();e.style.maxHeight=s>0?`${s}px`:"",e.style.minWidth=`${i.clientWidth}px`,await this.reposition(!0)},this.calciteChipCloseHandler=e=>{this.open=!1;const t=this.items.find(i=>i===e);t&&this.toggleSelection(t,!1),this.calciteComboboxChipClose.emit()},this.clickHandler=e=>{if(this.readOnly)return;const t=e.composedPath();if(t.some(i=>i.tagName==="CALCITE-CHIP")){this.open=!1,e.preventDefault();return}if(t.some(i=>{var s;return(s=i.classList)==null?void 0:s.contains($.button)})){this.clearValue(),e.preventDefault();return}this.open=!this.open,this.ensureRecentSelectedItemIsActive()},this.refreshSelectionDisplay=async()=>{if(await j(this),f(this.selectionMode)||!this.textInput)return;const{allSelectedIndicatorChipEl:e,chipContainerEl:t,selectionDisplay:i,placeholder:s,selectedIndicatorChipEl:l,textInput:n}=this,o=parseInt(getComputedStyle(t).gap.replace("px","")),a=g(t),{fontSize:r,fontFamily:d}=getComputedStyle(n),u=(K(s,`${r} ${d}`)||parseInt(be))+o,C=g(e),S=g(l),B=Math.max(C,S);if(this.setCompactSelectionDisplay({chipContainerElGap:o,chipContainerElWidth:a,inputWidth:u,largestSelectedIndicatorChipWidth:B}),i==="fit"){const E=Array.from(this.el.shadowRoot.querySelectorAll("calcite-chip")).filter(U=>U.closable),R=Math.round(a-((this.selectedHiddenChipsCount>0?S:0)+o+u+o));this.refreshChipDisplay({availableHorizontalChipElSpace:R,chipContainerElGap:o,chipEls:E}),this.setVisibleAndHiddenChips(E)}},this.setFloatingEl=e=>{this.floatingEl=e,x(this,this.referenceEl,this.floatingEl)},this.setContainerEl=e=>{this.resizeObserver.observe(e),this.listContainerEl=e,this.transitionEl=e},this.setChipContainerEl=e=>{this.resizeObserver.observe(e),this.chipContainerEl=e},this.setReferenceEl=e=>{this.referenceEl=e,x(this,this.referenceEl,this.floatingEl)},this.setAllSelectedIndicatorChipEl=e=>{this.allSelectedIndicatorChipEl=e},this.setSelectedIndicatorChipEl=e=>{this.selectedIndicatorChipEl=e},this.inputHandler=e=>{const t=e.target.value;this.filterText=t},this.filterItems=(()=>{const e=(t,i)=>t&&i.some(({label:s,value:l})=>Pe(t)?s===t.label:l===t.value&&s===t.textLabel);return M((t,i=!1,s=!0)=>{const l=ge(this.data,t),n=this.getItemsAndGroups(),o=t==="";n.forEach(a=>{if(o){a.hidden=!1;return}const r=!e(a,l);a.hidden=r;const[d,p]=a.ancestors;(e(d,l)||e(p,l))&&(a.hidden=!1),r||a.ancestors.forEach(u=>u.hidden=!1)}),this.filterTextMatchPattern=this.filterText&&new RegExp(`(${xe(this.filterText)})`,"i"),this.filteredItems=this.getFilteredItems(),this.filteredItems.forEach(a=>{a.filterTextMatchPattern=this.filterTextMatchPattern}),i&&(this.open=this.filterText.trim().length>0&&this.filteredItems.length>0),s&&this.calciteComboboxFilterChange.emit()},X.filter)})(),this.internalComboboxChangeEvent=()=>{this.calciteComboboxChange.emit()},this.emitComboboxChange=M(this.internalComboboxChangeEvent,0),this.getSelectedItems=()=>{if(!this.isMulti()){const e=this.items.find(({selected:t})=>t);return e?[e]:[]}return this.items.filter(e=>e.selected&&(this.selectionMode!=="ancestors"||!A(e))).sort((e,t)=>{const i=this.selectedItems.indexOf(e),s=this.selectedItems.indexOf(t);return i>-1&&s>-1?i-s:s-i})},this.updateItems=()=>{this.items=this.getItems(),this.groupItems=this.getGroupItems(),this.data=this.getData(),this.selectedItems=this.getSelectedItems(),this.filteredItems=this.getFilteredItems(),this.needsIcon=this.getNeedsIcon(),this.items.forEach(e=>{e.selectionMode=this.selectionMode,e.scale=this.scale}),this.allowCustomValues||this.setMaxScrollerHeight(),this.groupItems.forEach((e,t,i)=>{t===0&&(e.afterEmptyGroup=!1);const s=i[t+1];s&&(s.afterEmptyGroup=e.children.length===0)})},this.scrollToActiveItem=()=>{const e=this.filteredItems[this.activeItemIndex];if(!e)return;const t=this.calculateScrollerHeight(e),{offsetHeight:i,scrollTop:s}=this.listContainerEl;i+s<e.offsetTop+t?this.listContainerEl.scrollTop=e.offsetTop-i+t:e.offsetTop<s&&(this.listContainerEl.scrollTop=e.offsetTop)},this.comboboxFocusHandler=()=>{var e;this.disabled||(e=this.textInput)==null||e.focus()},this.clearDisabled=!1,this.filterText="",this.selectionDisplay="all",this.open=!1,this.disabled=!1,this.form=void 0,this.label=void 0,this.placeholder=void 0,this.placeholderIcon=void 0,this.placeholderIconFlipRtl=!1,this.maxItems=0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.allowCustomValues=void 0,this.overlayPositioning="absolute",this.required=!1,this.selectionMode="multiple",this.scale="m",this.status="idle",this.value=null,this.flipPlacements=void 0,this.messages=void 0,this.messageOverrides=void 0,this.selectedItems=[],this.filteredItems=[],this.readOnly=!1,this.items=[],this.groupItems=[],this.needsIcon=void 0,this.activeItemIndex=-1,this.activeChipIndex=-1,this.activeDescendant="",this.compactSelectionDisplay=!1,this.selectedHiddenChipsCount=0,this.selectedVisibleChipsCount=0,this.effectiveLocale=void 0,this.defaultMessages=void 0}filterTextChange(e){this.updateActiveItemIndex(-1),this.filterItems(e,!0)}openHandler(){if(D(this),this.disabled){this.open=!1;return}this.setMaxScrollerHeight()}handleDisabledChange(e){e||(this.open=!1)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}handlePropsChange(){this.updateItems()}valueHandler(e){if(!this.internalValueChangeFlag){const t=this.getItems();Array.isArray(e)?t.forEach(i=>i.selected=e.includes(i.value)):e?t.forEach(i=>i.selected=e===i.value):t.forEach(i=>i.selected=!1),this.updateItems()}}onMessagesChange(){}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}selectedItemsHandler(){this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1}async documentClickHandler(e){this.disabled||e.composedPath().includes(this.el)||(await J(this.el),!this.allowCustomValues&&this.filterText&&(this.clearInputValue(),this.filterItems(""),this.updateActiveItemIndex(-1)),this.allowCustomValues&&this.filterText.trim().length&&this.addCustomChip(this.filterText),this.open=!1)}calciteComboboxItemChangeHandler(e){if(this.ignoreSelectedEventsFlag)return;const t=e.target,i=this.filteredItems.indexOf(t);this.updateActiveItemIndex(i),this.toggleSelection(t,t.selected)}calciteInternalComboboxItemChangeHandler(e){e.stopPropagation(),this.updateItems()}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:s,overlayPositioning:l,filteredFlipPlacements:n}=this;return ve(this,{floatingEl:t,referenceEl:i,overlayPositioning:l,placement:s,flipPlacements:n,type:"menu"},e)}async setFocus(){var e;await Q(this),(e=this.textInput)==null||e.focus(),this.activeChipIndex=-1,this.activeItemIndex=-1}connectedCallback(){var e;Y(this),Z(this),N(this),ee(this),this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1,(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0}),this.updateItems(),this.setFilteredPlacements(),this.open&&(this.openHandler(),D(this)),x(this,this.referenceEl,this.floatingEl)}async componentWillLoad(){te(this),this.updateItems(),await ie(this),this.filterItems(this.filterText,!1,!1)}componentDidLoad(){se(this,this.getValue()),x(this,this.referenceEl,this.floatingEl),le(this)}componentDidRender(){this.el.offsetHeight!==this.inputHeight&&(this.reposition(!0),this.inputHeight=this.el.offsetHeight),ne(this)}componentDidUpdate(){this.refreshSelectionDisplay()}disconnectedCallback(){var e,t;(e=this.mutationObserver)==null||e.disconnect(),(t=this.resizeObserver)==null||t.disconnect(),oe(this),ae(this),ye(this,this.referenceEl,this.floatingEl),ce(this),re(this)}effectiveLocaleChange(){he(this,this.effectiveLocale)}clearValue(){this.ignoreSelectedEventsFlag=!0,this.items.forEach(e=>e.selected=!1),this.ignoreSelectedEventsFlag=!1,this.selectedItems=[],this.emitComboboxChange(),this.open=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems(""),this.setFocus()}clearInputValue(){this.textInput.value="",this.filterText=""}comboboxInViewport(){const e=this.el.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.right<=(window.innerWidth||document.documentElement.clientWidth)&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)}onBeforeOpen(){this.scrollToActiveItem(),this.calciteComboboxBeforeOpen.emit()}onOpen(){this.calciteComboboxOpen.emit()}onBeforeClose(){this.calciteComboboxBeforeClose.emit()}onClose(){this.calciteComboboxClose.emit()}ensureRecentSelectedItemIsActive(){const{selectedItems:e}=this,t=e.length===0?0:this.items.indexOf(e[e.length-1]);this.updateActiveItemIndex(t)}hideChip(e){e.classList.add(h.chipInvisible)}showChip(e){e.classList.remove(h.chipInvisible)}refreshChipDisplay({chipEls:e,availableHorizontalChipElSpace:t,chipContainerElGap:i}){e.forEach(s=>{if(!s.selected)this.hideChip(s);else{const l=g(s);if(l&&l<t){t-=l+i,this.showChip(s);return}}this.hideChip(s)})}setCompactSelectionDisplay({chipContainerElGap:e,chipContainerElWidth:t,inputWidth:i,largestSelectedIndicatorChipWidth:s}){const l=Math.round(s+e+i);(!this.maxCompactBreakpoint||this.maxCompactBreakpoint<l)&&(this.maxCompactBreakpoint=l),this.compactSelectionDisplay=t<this.maxCompactBreakpoint}setVisibleAndHiddenChips(e){let t=0;e.forEach(s=>{s.selected&&!s.classList.contains(h.chipInvisible)&&t++}),t!==this.selectedVisibleChipsCount&&(this.selectedVisibleChipsCount=t);const i=this.getSelectedItems().length-t;i!==this.selectedHiddenChipsCount&&(this.selectedHiddenChipsCount=i)}getMaxScrollerHeight(){const e=this.getItemsAndGroups().filter(l=>!l.hidden),{maxItems:t}=this;let i=0,s=0;return e.length>t&&e.forEach(l=>{if(i<t){const n=this.calculateScrollerHeight(l);n>0&&(s+=n,i++)}}),s}calculateScrollerHeight(e){if(!e)return;const t=e.getBoundingClientRect().height,i=Array.from(e.querySelectorAll(Se)).reduce((s,l)=>s+l.getBoundingClientRect().height,0);return t-i}getItemsAndGroups(){return[...this.groupItems,...this.items]}toggleSelection(e,t){!e||this.selectionMode==="single-persist"&&e.selected&&e.value===this.value&&!t||(this.isMulti()?(e.selected=t,this.updateAncestors(e),this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.resetText(),this.filterItems("")):(this.ignoreSelectedEventsFlag=!0,this.items.forEach(i=>i.selected=i===e?t:!1),this.ignoreSelectedEventsFlag=!1,this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.textInput&&(this.textInput.value=I(e)),this.open=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems("")))}updateAncestors(e){if(this.selectionMode!=="ancestors")return;const t=F(e),i=Ee(e);e.selected?t.forEach(s=>{s.selected=!0}):(i.forEach(s=>s.selected=!1),[...t].forEach(s=>{A(s)||(s.selected=!1)}))}getFilteredItems(){return this.filterText===""?this.items:this.items.filter(e=>!e.hidden)}getData(){return this.items.map(e=>({description:e.description,filterDisabled:e.filterDisabled,label:e.textLabel,metadata:e.metadata,shortHeading:e.shortHeading,value:e.value}))}getNeedsIcon(){return f(this.selectionMode)&&this.items.some(e=>e.icon)}resetText(){this.textInput&&(this.textInput.value=""),this.filterText=""}getItems(){return Array.from(this.el.querySelectorAll(ke)).filter(t=>!t.disabled)}getGroupItems(){return Array.from(this.el.querySelectorAll(O))}addCustomChip(e,t){const i=this.items.find(s=>s.textLabel===e);if(i)this.toggleSelection(i,!0);else{this.isMulti()||this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1);const s=document.createElement("calcite-combobox-item");s.value=e,s.textLabel=e,s.selected=!0,this.el.prepend(s),this.resetText(),t&&this.setFocus(),this.updateItems(),this.filterItems(""),this.open=!0,this.emitComboboxChange()}}removeActiveChip(){this.toggleSelection(this.selectedItems[this.activeChipIndex],!1),this.setFocus()}removeLastChip(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1),this.setFocus()}previousChip(){const e=this.selectedItems.length-1,t=this.activeChipIndex;this.activeChipIndex=t===-1?e:Math.max(t-1,0),this.updateActiveItemIndex(-1),this.focusChip()}nextChip(){const e=this.selectedItems.length-1,t=this.activeChipIndex+1;t>e?(this.activeChipIndex=-1,this.setFocus()):(this.activeChipIndex=t,this.focusChip()),this.updateActiveItemIndex(-1)}focusChip(){var i;const e=(i=this.selectedItems[this.activeChipIndex])==null?void 0:i.guid,t=e?this.referenceEl.querySelector(`#${V}${e}`):null;t==null||t.setFocus()}shiftActiveItemIndex(e){const{length:t}=this.filteredItems,i=(this.activeItemIndex+t+e)%t;this.updateActiveItemIndex(i),this.scrollToActiveItem()}updateActiveItemIndex(e){this.activeItemIndex=e;let t=null;this.filteredItems.forEach((i,s)=>{s===e?(i.active=!0,t=`${P}${i.guid}`):i.active=!1}),this.activeDescendant=t,this.activeItemIndex>-1&&(this.activeChipIndex=-1)}isAllSelected(){return this.getItems().length===this.getSelectedItems().length}isMulti(){return!f(this.selectionMode)}renderChips(){const{activeChipIndex:e,readOnly:t,scale:i,selectionMode:s,messages:l}=this;return this.selectedItems.map((n,o)=>{const a={chip:!0,"chip--active":e===o},r=[...F(n)].reverse(),d=I(n),p=[...r,n].map(C=>I(C)),u=s!=="ancestors"?d:p.join(" / ");return c("calcite-chip",{appearance:t?"outline":"solid",class:a,closable:!t,"data-test-id":`chip-${o}`,icon:n.icon,iconFlipRtl:n.iconFlipRtl,id:n.guid?`${V}${n.guid}`:null,key:d,messageOverrides:{dismissLabel:l.removeTag},onCalciteChipClose:()=>this.calciteChipCloseHandler(n),onFocusin:()=>this.activeChipIndex=o,scale:i,selected:n.selected,tabindex:e===o?0:-1,title:u,value:n.value},u)})}renderAllSelectedIndicatorChip(){const{compactSelectionDisplay:e,scale:t,selectedVisibleChipsCount:i,setAllSelectedIndicatorChipEl:s}=this,l=this.messages.allSelected;return c("calcite-chip",{class:{chip:!0,[h.chipInvisible]:!(this.isAllSelected()&&!i&&!e)},ref:s,scale:t,title:l,value:""},l)}renderAllSelectedIndicatorChipCompact(){const{compactSelectionDisplay:e,scale:t,selectedVisibleChipsCount:i}=this,s=this.messages.all||"All";return c("calcite-chip",{class:{chip:!0,[h.chipInvisible]:!(this.isAllSelected()&&!i&&e)},scale:t,title:s,value:""},s)}renderSelectedIndicatorChip(){const{compactSelectionDisplay:e,selectionDisplay:t,getSelectedItems:i,scale:s,selectedHiddenChipsCount:l,selectedVisibleChipsCount:n,setSelectedIndicatorChipEl:o}=this;let a,r;if(e)a=!0;else if(t==="single"){const d=i().length;this.isAllSelected()?a=!0:d>0?a=!1:a=!0,r=`${d} ${this.messages.selected}`}else t==="fit"&&(a=!!(this.isAllSelected()&&n===0||l===0),r=n>0?`+${l}`:`${l} ${this.messages.selected}`);return c("calcite-chip",{class:{chip:!0,[h.chipInvisible]:a},ref:o,scale:s,title:r,value:""},r)}renderSelectedIndicatorChipCompact(){const{compactSelectionDisplay:e,selectionDisplay:t,getSelectedItems:i,scale:s,selectedHiddenChipsCount:l}=this;let n,o;if(e){const a=i().length;this.isAllSelected()?n=!0:t==="fit"?(n=!(l>0),o=`${l||0}`):t==="single"&&(n=!(a>0),o=`${a}`)}else n=!0;return c("calcite-chip",{class:{chip:!0,[h.chipInvisible]:n},scale:s,title:o,value:""},o)}get showingInlineIcon(){const{placeholderIcon:e,selectionMode:t,selectedItems:i,open:s}=this,l=i[0],n=l==null?void 0:l.icon,o=f(t);return!s&&l?!!n&&o:!!e&&(!l||o)}renderInput(){const{guid:e,disabled:t,placeholder:i,selectionMode:s,selectedItems:l,open:n}=this,o=f(s),a=l[0],r=!n&&o&&!!a&&!this.filterText;return c("span",{class:{"input-wrap":!0,"input-wrap--single":o}},r&&c("span",{class:{label:!0,"label--icon":!!(a!=null&&a.icon)},key:"label"},I(a)),c("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":`${y}${e}`,"aria-errormessage":T.validationMessage,"aria-expanded":v(n),"aria-haspopup":"listbox","aria-invalid":v(this.status==="invalid"),"aria-label":de(this),"aria-owns":`${y}${e}`,class:{[h.input]:!0,"input--single":!0,[h.inputHidden]:r,"input--icon":this.showingInlineIcon&&!!this.placeholderIcon},"data-test-id":"input",disabled:t,id:`${L}${e}`,key:"input",onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:i,readOnly:this.readOnly,ref:d=>this.textInput=d,role:"combobox",tabindex:this.activeChipIndex===-1?0:-1,type:"text",value:this.filterText}))}renderListBoxOptions(){return this.filteredItems.map(e=>c("li",{"aria-selected":v(e.selected),id:e.guid?`${P}${e.guid}`:null,role:"option",tabindex:"-1"},e.textLabel))}renderFloatingUIContainer(){const{setFloatingEl:e,setContainerEl:t,open:i}=this,s={[h.listContainer]:!0,[H.animation]:!0,[H.animationActive]:i};return c("div",{"aria-hidden":"true",class:{"floating-ui-container":!0,"floating-ui-container--active":i},ref:e},c("div",{class:s,ref:t},c("ul",{class:{list:!0,"list--hide":!i}},c("slot",null))))}renderSelectedOrPlaceholderIcon(){const{open:e,placeholderIcon:t,placeholderIconFlipRtl:i,selectedItems:s}=this,l=s[0],n=l==null?void 0:l.icon,o=t&&(e||!l);return this.showingInlineIcon&&c("span",{class:"icon-start",key:"selected-placeholder-icon"},c("calcite-icon",{class:{[h.selectedIcon]:!o,[h.placeholderIcon]:o},flipRtl:o?i:l.iconFlipRtl,icon:o?t:n,scale:w(this.scale)}))}renderChevronIcon(){const{open:e}=this;return c("span",{class:"icon-end",key:"chevron"},c("calcite-icon",{class:h.icon,icon:e?"chevron-up":"chevron-down",scale:w(this.scale)}))}render(){var p;const{selectionDisplay:e,guid:t,label:i,open:s,readOnly:l}=this,n=f(this.selectionMode),o=e==="all",a=e==="single",r=!n&&e==="fit",d=!this.clearDisabled&&((p=this.value)==null?void 0:p.length)>0;return c(me,{key:"f1671f542a84291771bcd4096557300397e67138",onClick:this.comboboxFocusHandler},c(pe,{key:"d176f33343ad19474922e3274f28deae9c0a4fd9",disabled:this.disabled},c("div",{key:"f93285d693a11fb8cec1ed8d1b93b2f66c7ab2dd","aria-live":"polite",class:{wrapper:!0,"wrapper--single":n||!this.selectedItems.length,"wrapper--active":s},onClick:this.clickHandler,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},this.renderSelectedOrPlaceholderIcon(),c("div",{class:{"grid-input":!0,[h.selectionDisplayFit]:r,[h.selectionDisplaySingle]:a},key:"grid",ref:this.setChipContainerEl},!n&&!a&&this.renderChips(),!n&&!o&&[this.renderSelectedIndicatorChip(),this.renderSelectedIndicatorChipCompact(),this.renderAllSelectedIndicatorChip(),this.renderAllSelectedIndicatorChipCompact()],c("label",{key:"a5cf9dddce6a299fb7a42721f6c5e02ae754ea6e",class:"screen-readers-only",htmlFor:`${L}${t}`,id:`${z}${t}`},i),this.renderInput()),!l&&d?c(Fe,{disabled:this.disabled,key:"close-button",label:this.messages.clear,scale:this.scale}):null,!l&&this.renderChevronIcon()),c("ul",{key:"6c0673c3b470c0a2a84b25cb8a90074db7548741","aria-labelledby":`${z}${t}`,"aria-multiselectable":"true",class:"screen-readers-only",id:`${y}${t}`,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderFloatingUIContainer(),c(ue,{key:"140469ee4ef16d89edb506b133b4316e8a9d7277",component:this}),this.validationMessage&&this.status==="invalid"?c(we,{icon:this.validationIcon,id:T.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{filterText:["filterTextChange"],open:["openHandler"],disabled:["handleDisabledChange"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],selectionMode:["handlePropsChange"],scale:["handlePropsChange"],value:["valueHandler"],messageOverrides:["onMessagesChange"],flipPlacements:["flipPlacementsHandler"],selectedItems:["selectedItemsHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Me}},[1,"calcite-combobox",{clearDisabled:[516,"clear-disabled"],filterText:[1537,"filter-text"],selectionDisplay:[513,"selection-display"],open:[1540],disabled:[516],form:[513],label:[1],placeholder:[1],placeholderIcon:[513,"placeholder-icon"],placeholderIconFlipRtl:[516,"placeholder-icon-flip-rtl"],maxItems:[514,"max-items"],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],allowCustomValues:[516,"allow-custom-values"],overlayPositioning:[513,"overlay-positioning"],required:[516],selectionMode:[513,"selection-mode"],scale:[513],status:[513],value:[1025],flipPlacements:[16],messages:[1040],messageOverrides:[1040],selectedItems:[1040],filteredItems:[1040],readOnly:[516,"read-only"],items:[32],groupItems:[32],needsIcon:[32],activeItemIndex:[32],activeChipIndex:[32],activeDescendant:[32],compactSelectionDisplay:[32],selectedHiddenChipsCount:[32],selectedVisibleChipsCount:[32],effectiveLocale:[32],defaultMessages:[32],reposition:[64],setFocus:[64]},[[4,"click","documentClickHandler"],[0,"calciteComboboxItemChange","calciteComboboxItemChangeHandler"],[0,"calciteInternalComboboxItemChange","calciteInternalComboboxItemChangeHandler"]],{filterText:["filterTextChange"],open:["openHandler"],disabled:["handleDisabledChange"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],selectionMode:["handlePropsChange"],scale:["handlePropsChange"],value:["valueHandler"],messageOverrides:["onMessagesChange"],flipPlacements:["flipPlacementsHandler"],selectedItems:["selectedItemsHandler"],effectiveLocale:["effectiveLocaleChange"]}]);function ze(){if(typeof customElements>"u")return;["calcite-combobox","calcite-chip","calcite-combobox-item","calcite-icon","calcite-input-message"].forEach(e=>{switch(e){case"calcite-combobox":customElements.get(e)||customElements.define(e,Ve);break;case"calcite-chip":customElements.get(e)||He();break;case"calcite-combobox-item":customElements.get(e)||De();break;case"calcite-icon":customElements.get(e)||fe();break;case"calcite-input-message":customElements.get(e)||Ae();break}})}ze();export{Ve as C,ze as d};

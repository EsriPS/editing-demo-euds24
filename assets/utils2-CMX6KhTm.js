import{eA as c,A as r}from"./index-C1aGfQcb.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.1
 */const a="CALCITE-COMBOBOX-ITEM",u="CALCITE-COMBOBOX-ITEM-GROUP",s=`${a}, ${u}`,m={input:"input",inputHidden:"input--hidden",chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container",icon:"icon",placeholderIcon:"placeholder-icon",selectedIcon:"selected-icon"},b={validationMessage:"comboboxValidationMessage"};function p(e){var o,i;const t=(o=e.parentElement)==null?void 0:o.closest(s),n=(i=t==null?void 0:t.parentElement)==null?void 0:i.closest(s);return[t,n].filter(l=>l)}function C(e){var t;return((t=e.ancestors)==null?void 0:t.filter(n=>n.nodeName==="CALCITE-COMBOBOX-ITEM"))||[]}function g(e){return c(e.querySelectorAll("calcite-combobox-item"))}function h(e){return c(e.querySelectorAll("calcite-combobox-item")).filter(n=>n.selected).length>0}function I(e){return r()?document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength:0}function f(e){return e.includes("single")}function O(e){return e.shortHeading||e.textLabel}export{m as C,b as I,s as a,C as b,g as c,a as d,u as e,p as f,O as g,h,f as i,I as j};

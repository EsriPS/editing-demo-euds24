import{d as a}from"./calcite-input-time-picker-B8wBVmEV.js";import"./index-C1aGfQcb.js";import"./focusTrapComponent-ftxFIElQ.js";import"./math-CkFPD3oi.js";import"./Validation-GlGaxVIF.js";import"./input-De-TCHNF.js";import"./action-DoqCRstk.js";import"./input-message-DUj9fRxn.js";import"./input-text-CPWGU601.js";import"./progress-BuA_2UWg.js";import"./popover-DdH8HGky.js";import"./floating-ui-R-4Kk1Xn.js";import"./debounce-DUf35w49.js";import"./openCloseComponent-BuFuLtHA.js";import"./Heading-l4oDCerj.js";import"./FloatingArrow-BWnzcOPl.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.1
 */function _(r){return r>1&&r<5&&~~(r/10)!==1}function t(r,e,s,n){var m=r+" ";switch(s){case"s":return e||n?"pár sekund":"pár sekundami";case"m":return e?"minuta":n?"minutu":"minutou";case"mm":return e||n?m+(_(r)?"minuty":"minut"):m+"minutami";case"h":return e?"hodina":n?"hodinu":"hodinou";case"hh":return e||n?m+(_(r)?"hodiny":"hodin"):m+"hodinami";case"d":return e||n?"den":"dnem";case"dd":return e||n?m+(_(r)?"dny":"dní"):m+"dny";case"M":return e||n?"měsíc":"měsícem";case"MM":return e||n?m+(_(r)?"měsíce":"měsíců"):m+"měsíci";case"y":return e||n?"rok":"rokem";case"yy":return e||n?m+(_(r)?"roky":"let"):m+"lety"}}var o={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t}};a.locale(o,null,!0);export{o as default};

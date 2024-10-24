const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-icon-B5wvyzgm.js","assets/index-C1aGfQcb.js","assets/index-qkyhuh7d.css"])))=>i.map(i=>d[i]);
import{cn as pe,co as C,br as j,F as a,G as n,J as oe,b6 as le,K as P,L as de,M as $,P as J,aO as _,fD as X,iG as ye,fr as Y,fs as he,c8 as Z,ft as be,aE as _e,fu as r,fv as u,iH as ee,iI as te,iJ as ge,iK as fe,iL as ie,iM as se,b0 as ve,ei as we,fC as x,fh as Q,iN as Ae,iO as Fe,fE as ae,iP as Ie,cw as Ce,di as Me,c7 as qe,fW as $e}from"./index-C1aGfQcb.js";import{a as ke}from"./AttachmentInfo-Cg9fIPGU.js";import{i as E}from"./legacyIcon-CEIp6Pa9.js";import{V as Pe}from"./projection-BOBOhWzm.js";class Se{constructor(t){this._observable=new pe,this._set=new Set(t)}get size(){return C(this._observable),this._set.size}add(t){const i=this._set.size;return this._set.add(t),this._set.size!==i&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(t){const i=this._set.delete(t);return i&&this._observable.notify(),i}entries(){return C(this._observable),this._set.entries()}forEach(t,i){C(this._observable),this._set.forEach((s,o)=>t.call(i,s,o,this),i)}has(t){return C(this._observable),this._set.has(t)}keys(){return C(this._observable),this._set.keys()}values(){return C(this._observable),this._set.values()}[Symbol.iterator](){return C(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}const ne={editing:!1,operations:{add:!0,update:!0,delete:!0}},ce=j.ofType(ke);let f=class extends de{constructor(e){super(e),this._getAttachmentsPromise=null,this._attachmentLayer=null,this.capabilities={...ne},this.activeAttachmentInfo=null,this.activeFileInfo=null,this.attachmentInfos=new ce,this.fileInfos=new j,this.graphic=null,this.mode="view",this.filesEnabled=!1,this.addHandles($(()=>this.graphic,()=>this._graphicChanged(),J))}destroy(){this._attachmentLayer=null,this.graphic=null}castCapabilities(e){return{...ne,...e}}get state(){return this._getAttachmentsPromise?"loading":this.graphic?"ready":"disabled"}get supportsResizeAttachments(){const{graphic:e}=this;if(!e)return!1;const t=e.layer||e.sourceLayer;return(t==null?void 0:t.loaded)&&"capabilities"in t&&t.capabilities&&"operations"in t.capabilities&&"supportsResizeAttachments"in t.capabilities.operations&&t.capabilities.operations.supportsResizeAttachments||!1}async getAttachments(){const{_attachmentLayer:e,attachmentInfos:t}=this;if(!e||typeof e.queryAttachments!="function")throw new _("invalid-layer","getAttachments(): A valid layer is required.");const i=this._getObjectId();if(typeof i!="number")throw new _("invalid-object-id","getAttachments(): Numeric object id is required");const s=new X({objectIds:[i],returnMetadata:!0}),o=[],d=e.queryAttachments(s).then(p=>p[i]||o).catch(()=>o);this._getAttachmentsPromise=d,this.notifyChange("state");const c=await d;return t.destroyAll(),c.length&&t.addMany(c),this._getAttachmentsPromise=null,this.notifyChange("state"),c}async addAttachment(e,t=this.graphic){var p;const{_attachmentLayer:i,attachmentInfos:s,capabilities:o}=this;if(!t)throw new _("invalid-graphic","addAttachment(): A valid graphic is required.",{graphic:t});if(!e)throw new _("invalid-attachment","addAttachment(): An attachment is required.",{attachment:e});if(!((p=o.operations)!=null&&p.add))throw new _("invalid-capabilities","addAttachment(): add capabilities are required.");if(!i||typeof i.addAttachment!="function")throw new _("invalid-layer","addAttachment(): A valid layer is required.");const d=i.addAttachment(t,e).then(b=>this._queryAttachment(b.objectId,t)),c=await d;return s.add(c),c}async deleteAttachment(e){var p;const{_attachmentLayer:t,attachmentInfos:i,graphic:s,capabilities:o}=this;if(!e)throw new _("invalid-attachment-info","deleteAttachment(): An attachmentInfo is required.",{attachmentInfo:e});if(!((p=o.operations)!=null&&p.delete))throw new _("invalid-capabilities","deleteAttachment(): delete capabilities are required.");if(!t||typeof t.deleteAttachments!="function")throw new _("invalid-layer","deleteAttachment(): A valid layer is required.");if(!s)throw new _("invalid-graphic","deleteAttachment(): A graphic is required.");const d=t.deleteAttachments(s,[e.id]).then(()=>e),c=await d;return i.remove(c),c.destroy(),c}async updateAttachment(e,t=this.activeAttachmentInfo){var y;const{_attachmentLayer:i,attachmentInfos:s,graphic:o,capabilities:d}=this;if(!e)throw new _("invalid-attachment","updateAttachment(): An attachment is required.",{attachment:e});if(!t)throw new _("invalid-attachment-info","updateAttachment(): An attachmentInfo is required.",{attachmentInfo:t});if(!((y=d.operations)!=null&&y.update))throw new _("invalid-capabilities","updateAttachment(): Update capabilities are required.");const c=s.indexOf(t);if(!i||typeof i.updateAttachment!="function")throw new _("invalid-layer","updateAttachment(): A valid layer is required.");if(!o)throw new _("invalid-graphic","updateAttachment(): A graphic is required.");const p=i.updateAttachment(o,t.id,e).then(v=>this._queryAttachment(v.objectId)),b=await p;return s.splice(c,1,b),b}async commitFiles(){return await Promise.all(this.fileInfos.items.map(e=>this.addAttachment(e.form))),this.fileInfos.removeAll(),this.getAttachments()}addFile(e,t){if(!e||!t)return null;const i={file:e,form:t};return this.fileInfos.add(i),i}updateFile(e,t,i=this.activeFileInfo){if(!e||!t||!i)return null;const s=this.fileInfos.indexOf(i);return s>-1&&this.fileInfos.splice(s,1,{file:e,form:t}),this.fileInfos.items[s]}deleteFile(e){const t=this.fileInfos.find(i=>i.file===e);return t?(this.fileInfos.remove(t),t):null}async _queryAttachment(e,t){const{_attachmentLayer:i}=this;if(!e||!(i!=null&&i.queryAttachments))throw new _("invalid-attachment-id","Could not query attachment.");const s=this._getObjectId(t);if(typeof s!="number")throw new _("invalid-object-id","getAttachments(): Numeric object id is required");const o=new X({objectIds:[s],attachmentsWhere:`AttachmentId=${e}`,returnMetadata:!0});return i.queryAttachments(o).then(d=>d[s][0])}_getObjectId(e=this.graphic){return(e==null?void 0:e.getObjectId())??null}_graphicChanged(){this.graphic&&(this._setAttachmentLayer(),this.getAttachments().catch(()=>{}))}_setAttachmentLayer(){const{graphic:e}=this,t=ye(e);this._attachmentLayer=t?t.type==="scene"&&t.associatedLayer!=null?t.associatedLayer:t:null}};a([n()],f.prototype,"capabilities",void 0),a([oe("capabilities")],f.prototype,"castCapabilities",null),a([n()],f.prototype,"activeAttachmentInfo",void 0),a([n()],f.prototype,"activeFileInfo",void 0),a([n({readOnly:!0,type:ce})],f.prototype,"attachmentInfos",void 0),a([n()],f.prototype,"fileInfos",void 0),a([n({type:le})],f.prototype,"graphic",void 0),a([n()],f.prototype,"mode",void 0),a([n({readOnly:!0})],f.prototype,"state",null),a([n()],f.prototype,"filesEnabled",void 0),a([n({readOnly:!0})],f.prototype,"supportsResizeAttachments",null),f=a([P("esri.widgets.Attachments.AttachmentsViewModel")],f);const ue=f,re={addButton:!0,addSubmitButton:!0,cancelAddButton:!0,cancelUpdateButton:!0,deleteButton:!0,errorMessage:!0,progressBar:!0,updateButton:!0},h="esri-attachments",l={base:h,loaderContainer:`${h}__loader-container`,loader:`${h}__loader`,fadeIn:`${h}--fade-in`,container:`${h}__container`,containerList:`${h}__container--list`,containerPreview:`${h}__container--preview`,actions:`${h}__actions`,deleteButton:`${h}__delete-button`,addAttachmentButton:`${h}__add-attachment-button`,errorMessage:`${h}__error-message`,items:`${h}__items`,item:`${h}__item`,itemButton:`${h}__item-button`,itemMask:`${h}__item-mask`,itemMaskIcon:`${h}__item-mask--icon`,itemImage:`${h}__image`,itemImageResizable:`${h}__image--resizable`,itemLabel:`${h}__label`,itemFilename:`${h}__filename`,itemChevronIcon:`${h}__item-chevron-icon`,itemLink:`${h}__item-link`,itemLinkOverlay:`${h}__item-link-overlay`,itemLinkOverlayIcon:`${h}__item-link-overlay-icon`,itemEditIcon:`${h}__item-edit-icon`,itemAddIcon:`${h}__item-add-icon`,itemAddButton:`${h}__item-add-button`,formNode:`${h}__form-node`,fileFieldset:`${h}__file-fieldset`,fileLabel:`${h}__file-label`,fileName:`${h}__file-name`,fileInput:`${h}__file-input`,metadata:`${h}__metadata`,metadataFieldset:`${h}__metadata-fieldset`,progressBar:`${h}__progress-bar`},H=window.CSS;let g=class extends he{constructor(e,t){super(e,t),this.displayType="auto",this.messages=null,this.messagesUnits=null,this.selectedFile=null,this.submitting=!1,this.viewModel=null,this.visibleElements={...re},this._supportsImageOrientation=H&&H.supports&&H.supports("image-orientation","from-image"),this._addAttachmentForm=null,this._updateAttachmentForm=null}normalizeCtorArgs(e){return e!=null&&e.viewModel||(e={viewModel:new ue,...e}),e}initialize(){this.addHandles([Z(()=>{var e;return(e=this.viewModel)==null?void 0:e.attachmentInfos},"change",()=>this.scheduleRender()),Z(()=>{var e;return(e=this.viewModel)==null?void 0:e.fileInfos},"change",()=>this.scheduleRender()),$(()=>{var e;return(e=this.viewModel)==null?void 0:e.mode},()=>this._modeChanged(),J)])}loadDependencies(){return be({icon:()=>_e(()=>import("./calcite-icon-B5wvyzgm.js"),__vite__mapDeps([0,1,2]))})}get capabilities(){return this.viewModel.capabilities}set capabilities(e){this.viewModel.capabilities=e}get effectiveDisplayType(){const{displayType:e}=this;return e&&e!=="auto"?e:this.viewModel.supportsResizeAttachments?"preview":"list"}get graphic(){return this.viewModel.graphic}set graphic(e){this.viewModel.graphic=e}get icon(){return"attachment"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}castVisibleElements(e){return{...re,...e}}addAttachment(){const{_addAttachmentForm:e,viewModel:t}=this;return this._set("submitting",!0),this._set("error",null),t.addAttachment(e).then(i=>(this._set("submitting",!1),this._set("error",null),t.mode="view",i)).catch(i=>{throw this._set("submitting",!1),this._set("error",new _("attachments:add-attachment",this.messages.addErrorMessage,i)),i})}deleteAttachment(e){const{viewModel:t}=this;return this._set("submitting",!0),this._set("error",null),t.deleteAttachment(e).then(i=>(this._set("submitting",!1),this._set("error",null),t.mode="view",i)).catch(i=>{throw this._set("submitting",!1),this._set("error",new _("attachments:delete-attachment",this.messages.deleteErrorMessage,i)),i})}updateAttachment(){const{viewModel:e}=this,{_updateAttachmentForm:t}=this;return this._set("submitting",!0),this._set("error",null),e.updateAttachment(t).then(i=>(this._set("submitting",!1),this._set("error",null),e.mode="view",i)).catch(i=>{throw this._set("submitting",!1),this._set("error",new _("attachments:update-attachment",this.messages.updateErrorMessage,i)),i})}addFile(){const e=this.viewModel.addFile(this.selectedFile,this._addAttachmentForm);return this.viewModel.mode="view",e}updateFile(){const{viewModel:e}=this,t=e.updateFile(this.selectedFile,this._updateAttachmentForm,e.activeFileInfo);return e.mode="view",t}deleteFile(e){var i;const t=this.viewModel.deleteFile(e||((i=this.viewModel.activeFileInfo)==null?void 0:i.file));return this.viewModel.mode="view",t}render(){const{submitting:e,viewModel:t}=this,{state:i}=t;return r("div",{class:this.classes(l.base,u.widget)},e?this._renderProgressBar():null,i==="loading"?this._renderLoading():this._renderAttachments(),this._renderErrorMessage())}_renderErrorMessage(){const{error:e,visibleElements:t}=this;return e&&t.errorMessage?r("div",{class:l.errorMessage,key:"error-message"},e.message):null}_renderAttachments(){const{activeFileInfo:e,mode:t,activeAttachmentInfo:i}=this.viewModel;return t==="add"?this._renderAddForm():t==="edit"?this._renderDetailsForm(i||e):this._renderAttachmentContainer()}_renderLoading(){return r("div",{class:l.loaderContainer,key:"loader"},r("div",{class:l.loader}))}_renderProgressBar(){return this.visibleElements.progressBar?r("div",{class:l.progressBar,key:"progress-bar"}):null}_renderAddForm(){const{submitting:e,selectedFile:t}=this,i=e||!t,s=this.visibleElements.cancelAddButton?r("button",{bind:this,class:this.classes(u.button,u.buttonTertiary,u.buttonSmall,u.buttonHalf,e&&u.buttonDisabled),disabled:e,onclick:this._cancelForm,type:"button"},this.messages.cancel):null,o=this.visibleElements.addSubmitButton?r("button",{class:this.classes(u.button,u.buttonSecondary,u.buttonSmall,u.buttonHalf,{[u.buttonDisabled]:i}),disabled:i,type:"submit"},this.messages.add):null,d=t?r("span",{class:l.fileName,key:"file-name"},t.name):null,c=r("form",{afterCreate:ee,afterRemoved:te,bind:this,"data-node-ref":"_addAttachmentForm",onsubmit:this._submitAddAttachment},r("fieldset",{class:l.fileFieldset},d,r("label",{class:this.classes(l.fileLabel,u.button,u.buttonSecondary)},t?this.messages.changeFile:this.messages.selectFile,r("input",{bind:this,class:l.fileInput,name:"attachment",onchange:this._handleFileInputChange,type:"file"}))),o,s);return r("div",{class:l.formNode,key:"add-form-container"},c)}_renderDetailsForm(e){var B,D,O;const{visibleElements:t,viewModel:i,selectedFile:s,submitting:o}=this,{capabilities:d}=i,c=o||!s;let p,b,y,v;s?(p=s.type,b=s.name,y=s.size):e&&"file"in e?(p=e.file.type,b=e.file.name,y=e.file.size):e&&"contentType"in e&&(p=e.contentType,b=e.name,y=e.size,v=e.url);const w=d.editing&&((B=d.operations)!=null&&B.delete)&&t.deleteButton?r("button",{bind:this,class:this.classes(u.button,u.buttonSmall,u.buttonTertiary,l.deleteButton,{[u.buttonDisabled]:o}),disabled:o,key:"delete-button",onclick:L=>this._submitDeleteAttachment(L,e),type:"button"},this.messages.delete):void 0,A=d.editing&&((D=d.operations)!=null&&D.update)&&t.updateButton?r("button",{class:this.classes(u.button,u.buttonSmall,u.buttonThird,{[u.buttonDisabled]:c}),disabled:c,key:"update-button",type:"submit"},this.messages.update):void 0,k=this.visibleElements.cancelUpdateButton?r("button",{bind:this,class:this.classes(u.button,u.buttonSmall,u.buttonTertiary,u.buttonThird,{[u.buttonDisabled]:o}),disabled:o,key:"cancel-button",onclick:this._cancelForm,type:"button"},this.messages.cancel):void 0,F=d.editing&&((O=d.operations)!=null&&O.update)?r("fieldset",{class:l.fileFieldset,key:"file"},r("span",{class:l.fileName,key:"file-name"},b),r("label",{class:this.classes(l.fileLabel,u.button,u.buttonSecondary)},this.messages.changeFile,r("input",{bind:this,class:l.fileInput,name:"attachment",onchange:this._handleFileInputChange,type:"file"}))):void 0,R=r("fieldset",{class:l.metadataFieldset,key:"size"},r("label",null,ge(this.messagesUnits,y??0))),T=r("fieldset",{class:l.metadataFieldset,key:"content-type"},r("label",null,p)),z=v!=null?r("a",{class:l.itemLink,href:v,rel:"noreferrer",target:"_blank"},this._renderImageMask(e,400),r("div",{class:l.itemLinkOverlay},r("span",{class:l.itemLinkOverlayIcon},r("calcite-icon",{icon:"launch"})))):this._renderImageMask(e,400),V=r("form",{afterCreate:ee,afterRemoved:te,bind:this,"data-node-ref":"_updateAttachmentForm",onsubmit:L=>this._submitUpdateAttachment(L,e)},r("div",{class:l.metadata},R,T),F,r("div",{class:l.actions},w,k,A));return r("div",{class:l.formNode,key:"edit-form-container"},z,V)}_renderImageMask(e,t){return e?"file"in e?this._renderGenericImageMask(e.file.name,e.file.type):this._renderImageMaskForAttachment(e,t):null}_renderGenericImageMask(e,t){const{supportsResizeAttachments:i}=this.viewModel,s=fe(t),o={[l.itemImageResizable]:i};return r("div",{class:this.classes(l.itemMaskIcon,l.itemMask),key:s},r("img",{alt:e,class:this.classes(o,l.itemImage),src:s,title:e}))}_renderImageMaskForAttachment(e,t){const{supportsResizeAttachments:i}=this.viewModel;if(!e)return null;const{contentType:s,name:o,url:d}=e;if(!i||!ie(s))return this._renderGenericImageMask(o,s);const c=this._getCSSTransform(e),p=c?{transform:c,"image-orientation":"none"}:{},b=`${d}${d!=null&&d.includes("?")?"&":"?"}w=${t}`,y={[l.itemImageResizable]:i};return r("div",{class:this.classes(l.itemMask),key:b},r("img",{alt:o,class:this.classes(y,l.itemImage),src:b,styles:p,title:o}))}_renderFile(e){const{file:t}=e;return r("li",{class:l.item,key:t},r("button",{"aria-label":this.messages.attachmentDetails,bind:this,class:l.itemButton,key:"details-button",onclick:()=>this._startEditFile(e),title:this.messages.attachmentDetails,type:"button"},this._renderImageMask(e),r("label",{class:l.itemLabel},r("span",{class:l.itemFilename},t.name||this.messages.noTitle),r("span",{"aria-hidden":"true",class:this.classes(l.itemChevronIcon,se(this.container)?E.left:E.right)}))))}_renderAttachmentInfo({attachmentInfo:e,displayType:t}){const{viewModel:i,effectiveDisplayType:s}=this,{capabilities:o,supportsResizeAttachments:d}=i,{contentType:c,name:p,url:b}=e,y=this._renderImageMask(e,t==="list"?48:400),v=o.editing?r("span",{"aria-hidden":"true",class:this.classes(l.itemChevronIcon,se(this.container)?E.left:E.right)}):null,w=[y,s==="preview"&&d&&ie(c)?null:r("label",{class:l.itemLabel},r("span",{class:l.itemFilename},p||this.messages.noTitle),v)],A=o.editing?r("button",{"aria-label":this.messages.attachmentDetails,bind:this,class:l.itemButton,"data-attachment-info-id":e.id,key:"details-button",onclick:()=>this._startEditAttachment(e),title:this.messages.attachmentDetails,type:"button"},w):r("a",{class:l.itemButton,href:b??void 0,key:"details-link",rel:"noreferrer",target:"_blank"},w);return r("li",{class:l.item,key:e},A)}_renderAttachmentContainer(){var k;const{effectiveDisplayType:e,viewModel:t,visibleElements:i}=this,{attachmentInfos:s,capabilities:o,fileInfos:d}=t,c=!!(s!=null&&s.length),p=!!(d!=null&&d.length),b={[l.containerList]:e!=="preview",[l.containerPreview]:e==="preview"},y=o.editing&&((k=o.operations)!=null&&k.add)&&i.addButton?r("button",{bind:this,class:this.classes(u.button,u.buttonTertiary,l.addAttachmentButton),onclick:()=>this._startAddAttachment(),type:"button"},r("span",{"aria-hidden":"true",class:this.classes(l.itemAddIcon,E.plus)}),this.messages.add):void 0,v=c?r("ul",{class:l.items,key:"attachments-list"},s.toArray().map(F=>this._renderAttachmentInfo({attachmentInfo:F,displayType:e}))):void 0,w=p?r("ul",{class:l.items,key:"file-list"},d.toArray().map(F=>this._renderFile(F))):void 0,A=p||c?void 0:r("div",{class:u.empty},this.messages.noAttachments);return r("div",{class:this.classes(l.container,b),key:"attachments-container"},v,w,A,y)}_modeChanged(){this._set("error",null),this._set("selectedFile",null)}_handleFileInputChange(e){var s;const t=e.target,i=(s=t.files)==null?void 0:s.item(0);this._set("selectedFile",i)}_submitDeleteAttachment(e,t){e.preventDefault(),t&&("file"in t?this.deleteFile(t.file):t&&this.deleteAttachment(t))}_submitAddAttachment(e){e.preventDefault(),this.viewModel.filesEnabled?this.addFile():this.addAttachment()}_submitUpdateAttachment(e,t){e.preventDefault(),t&&"file"in t?this.updateFile():this.updateAttachment()}_startEditAttachment(e){const{viewModel:t}=this;t.activeFileInfo=null,t.activeAttachmentInfo=e,t.mode="edit"}_startEditFile(e){const{viewModel:t}=this;t.activeAttachmentInfo=null,t.activeFileInfo=e,t.mode="edit"}_startAddAttachment(){this.viewModel.mode="add"}_cancelForm(e){e.preventDefault(),this.viewModel.mode="view"}_getCSSTransform(e){const{orientationInfo:t}=e;return!this._supportsImageOrientation&&t?[t.rotation?`rotate(${t.rotation}deg)`:"",t.mirrored?"scaleX(-1)":""].join(" "):""}};a([n()],g.prototype,"capabilities",null),a([n()],g.prototype,"displayType",void 0),a([n({readOnly:!0})],g.prototype,"effectiveDisplayType",null),a([n()],g.prototype,"graphic",null),a([n()],g.prototype,"icon",null),a([n()],g.prototype,"label",null),a([n(),Y("esri/widgets/Attachments/t9n/Attachments")],g.prototype,"messages",void 0),a([n(),Y("esri/core/t9n/Units")],g.prototype,"messagesUnits",void 0),a([n({readOnly:!0})],g.prototype,"selectedFile",void 0),a([n({readOnly:!0})],g.prototype,"submitting",void 0),a([n({readOnly:!0})],g.prototype,"error",void 0),a([n({type:ue})],g.prototype,"viewModel",void 0),a([n()],g.prototype,"visibleElements",void 0),a([oe("visibleElements")],g.prototype,"castVisibleElements",null),g=a([P("esri.widgets.Attachments")],g);const je=g,N=100;let m=class extends ve(we(de)){constructor(e){super(e),this._loaded=!1,this._queryAbortController=null,this._queryPageAbortController=null,this._queryFeatureCountAbortController=null,this.featuresPerPage=10,this.description=null,this.graphic=null,this.layer=null,this.map=null,this.orderByFields=null,this.featureCount=0,this.relationshipId=null,this.showAllEnabled=!1,this.title=null,this._cancelQuery=()=>{const{_queryAbortController:t}=this;t&&t.abort(),this._queryAbortController=null},this._cancelQueryFeatureCount=()=>{const{_queryFeatureCountAbortController:t}=this;t&&t.abort(),this._queryFeatureCountAbortController=null},this._cancelQueryPage=()=>{const{_queryPageAbortController:t}=this;t&&t.abort(),this._queryPageAbortController=null},this._queryController=async()=>{this._cancelQuery();const t=new AbortController;this._queryAbortController=t,await x(this._query()),this._queryAbortController===t&&(this._queryAbortController=null)},this._queryFeatureCountController=async()=>{this._loaded=!1,this._cancelQueryFeatureCount();const t=new AbortController;this._queryFeatureCountAbortController=t,await x(this._queryFeatureCount()),this._queryFeatureCountAbortController===t&&(this._queryFeatureCountAbortController=null),this._loaded=!0},this._queryPageController=async()=>{const t=new AbortController;this._queryPageAbortController=t,await x(this._queryPage()),this._queryPageAbortController===t&&(this._queryPageAbortController=null)},this._queryDebounced=Q(this._queryController,N),this._queryFeatureCountDebounced=Q(this._queryFeatureCountController,N),this._queryPageDebounced=Q(this._queryPageController,N),this._query=async()=>{const{_queryAbortController:t,relatedFeatures:i}=this;this.featureCount&&(this._destroyRelatedFeatureViewModels(),this.featurePage=1,i.destroyAll(),this.destroyed||i.addMany(this._sliceFeatures(await this._queryRelatedFeatures({signal:t==null?void 0:t.signal}))))},this.addHandles([$(()=>{var t;return[this.displayCount,this.graphic,this.layer,(t=this.layer)==null?void 0:t.loaded,this.map,this.orderByFields,this.relationshipId,this.featuresPerPage,this.showAllEnabled,this.canQuery,this.featureCount]},()=>this._queryDebounced(),J),$(()=>[this.featurePage,this.showAllEnabled],()=>this._queryPageDebounced()),$(()=>[this.layer,this.relationshipId,this.objectId,this.canQuery],()=>this._queryFeatureCountDebounced())])}destroy(){this._destroyRelatedFeatureViewModels(),this.relatedFeatures.destroyAll(),this._cancelQuery(),this._cancelQueryFeatureCount(),this._cancelQueryPage()}set featurePage(e){const{featuresPerPage:t,featureCount:i}=this,s=1,o=Math.ceil(i/t)||1;this._set("featurePage",Math.min(Math.max(e,s),o))}get featurePage(){return this._get("featurePage")}get orderByFieldsFixedCasing(){const{orderByFields:e,relatedLayer:t}=this;return e&&(t!=null&&t.loaded)?e.map(i=>{const s=i.clone();return s.field=Ae(i.field,t),s}):e??[]}get supportsCacheHint(){var e,t,i;return!!((i=(t=(e=this.layer)==null?void 0:e.capabilities)==null?void 0:t.queryRelated)!=null&&i.supportsCacheHint)}get canLoad(){return!!this.map&&this.relationshipId!=null&&typeof this.objectId=="number"}get canQuery(){var t,i;const e=(i=(t=this.layer)==null?void 0:t.capabilities)==null?void 0:i.queryRelated;return!!(this.relatedLayer&&this.relationship&&this.relationshipId!=null&&this.objectId!=null&&(e!=null&&e.supportsCount)&&(e!=null&&e.supportsPagination))}get itemDescriptionFieldName(){var e;return((e=this.orderByFieldsFixedCasing[0])==null?void 0:e.field)||null}set displayCount(e){this._set("displayCount",Math.min(Math.max(e,0),10))}get displayCount(){return this._get("displayCount")}get objectId(){var e,t;return(this.objectIdField&&((t=(e=this.graphic)==null?void 0:e.attributes)==null?void 0:t[this.objectIdField]))??null}get objectIdField(){var e;return((e=this.layer)==null?void 0:e.objectIdField)||null}get relatedFeatures(){return this._get("relatedFeatures")||new j}get relatedLayer(){const{layer:e,map:t,relationship:i}=this;return e!=null&&e.loaded&&t&&i?Fe(t,e,i)??null:null}get relationship(){var i;const{relationshipId:e,layer:t}=this;return e!=null?((i=t==null?void 0:t.relationships)==null?void 0:i.find(({id:s})=>s===e))??null:null}get relatedFeatureViewModels(){return this._get("relatedFeatureViewModels")||new j}get state(){const{_queryAbortController:e,_queryFeatureCountAbortController:t,_queryPageAbortController:i,canQuery:s,_loaded:o,canLoad:d}=this;return t||d&&!o?"loading":e||i?"querying":s?"ready":"disabled"}getRelatedFeatureByObjectId(e){return this.relatedFeatures.find(t=>t.getObjectId()===e)}refresh(){this._queryFeatureCountDebounced()}_destroyRelatedFeatureViewModels(){var e;(e=this.relatedFeatureViewModels)==null||e.destroyAll()}async _queryFeatureCount(){const{layer:e,relatedLayer:t,relationshipId:i,objectId:s,_queryFeatureCountAbortController:o,canQuery:d,supportsCacheHint:c}=this;if(await(e==null?void 0:e.load()),await(t==null?void 0:t.load()),!d||!e||!t||s==null)return void this._set("featureCount",0);const p=t.createQuery(),{historicMoment:b,gdbVersion:y}=e,v=new ae({cacheHint:c,gdbVersion:y,historicMoment:b,relationshipId:i,returnGeometry:!1,objectIds:[s],where:p.where??void 0}),w=await e.queryRelatedFeaturesCount(v,{signal:o==null?void 0:o.signal});this._set("featureCount",w[s]||0)}_sliceFeatures(e){const{showAllEnabled:t,displayCount:i}=this;return t?e:i?e.slice(0,i):[]}async _queryPage(){const{relatedFeatures:e,featurePage:t,showAllEnabled:i,_queryPageAbortController:s,featureCount:o}=this;!i||t<2||!o||e.addMany(await this._queryRelatedFeatures({signal:s==null?void 0:s.signal}))}async _queryRelatedFeatures(e){var W;const{orderByFieldsFixedCasing:t,showAllEnabled:i,featuresPerPage:s,displayCount:o,layer:d,relationshipId:c,featurePage:p,featureCount:b,relatedLayer:y,supportsCacheHint:v}=this,{canQuery:w,objectId:A}=this;if(!w||!d||!y||A==null)return[];const k=i?((p-1)*s+b)%b:0,F=i?s:o,R=y.objectIdField,T=[...t.map(I=>I.field),...Ie(y),R].filter(Ce),z=t.map(I=>`${I.field} ${I.order}`),V=y.createQuery(),{historicMoment:B,gdbVersion:D}=d,O=new ae({orderByFields:z,start:k,num:F,outFields:T,cacheHint:v,historicMoment:B,gdbVersion:D,relationshipId:c,returnGeometry:!1,objectIds:[A],where:V.where??void 0}),L=await d.queryRelatedFeatures(O,{signal:e==null?void 0:e.signal}),K=((W=L[A])==null?void 0:W.features)||[];return K.forEach(I=>{I.sourceLayer=y,I.layer=y}),K}};a([n()],m.prototype,"_loaded",void 0),a([n()],m.prototype,"_queryAbortController",void 0),a([n()],m.prototype,"_queryPageAbortController",void 0),a([n()],m.prototype,"_queryFeatureCountAbortController",void 0),a([n({value:1})],m.prototype,"featurePage",null),a([n()],m.prototype,"featuresPerPage",void 0),a([n({readOnly:!0})],m.prototype,"orderByFieldsFixedCasing",null),a([n({readOnly:!0})],m.prototype,"supportsCacheHint",null),a([n({readOnly:!0})],m.prototype,"canLoad",null),a([n({readOnly:!0})],m.prototype,"canQuery",null),a([n()],m.prototype,"description",void 0),a([n({readOnly:!0})],m.prototype,"itemDescriptionFieldName",null),a([n({value:3})],m.prototype,"displayCount",null),a([n({type:le})],m.prototype,"graphic",void 0),a([n()],m.prototype,"layer",void 0),a([n()],m.prototype,"map",void 0),a([n({readOnly:!0})],m.prototype,"objectId",null),a([n({readOnly:!0})],m.prototype,"objectIdField",null),a([n()],m.prototype,"orderByFields",void 0),a([n({readOnly:!0})],m.prototype,"relatedFeatures",null),a([n({readOnly:!0})],m.prototype,"relatedLayer",null),a([n({readOnly:!0})],m.prototype,"relationship",null),a([n()],m.prototype,"featureCount",void 0),a([n({readOnly:!0})],m.prototype,"relatedFeatureViewModels",null),a([n()],m.prototype,"relationshipId",void 0),a([n()],m.prototype,"showAllEnabled",void 0),a([n()],m.prototype,"state",null),a([n()],m.prototype,"title",void 0),m=a([P("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")],m);const Re=m;let M=class extends Me.EventedAccessor{constructor(t){super(t),this.location=null,this.screenLocationEnabled=!1,this.view=null,this.addHandles([qe(()=>{const i=this.screenLocationEnabled?this.view:null;return i?[i.size,i.type==="3d"?i.camera:i.viewpoint]:null},()=>this.notifyChange("screenLocation")),$(()=>this.screenLocation,(i,s)=>{i!=null&&s!=null&&this.emit("view-change")})])}destroy(){this.view=null}get screenLocation(){const{location:t,view:i,screenLocationEnabled:s}=this,o=i==null?void 0:i.spatialReference,d=o?Pe(t,o).geometry:null;return s&&d&&(i!=null&&i.ready)?i.toScreen(d):null}};a([n()],M.prototype,"location",void 0),a([n()],M.prototype,"screenLocation",null),a([n()],M.prototype,"screenLocationEnabled",void 0),a([n()],M.prototype,"view",void 0),M=a([P("esri.widgets.support.AnchorElementViewModel")],M);const Le=M;let S=class extends Le{constructor(e){super(e),this.visible=!1}};a([n()],S.prototype,"visible",void 0),S=a([P("esri.widgets.Spinner.SpinnerViewModel")],S);const me=S,U="esri-spinner",G={base:U,spinnerStart:`${U}--start`,spinnerFinish:`${U}--finish`};let q=class extends he{constructor(e,t){super(e,t),this._animationDelay=500,this._animationPromise=null,this.viewModel=new me}initialize(){this.addHandles($(()=>this.visible,e=>this._visibleChange(e)))}destroy(){this._animationPromise=null}get location(){return this.viewModel.location}set location(e){this.viewModel.location=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}show(e){const{location:t,promise:i}=e??{};t&&(this.viewModel.location=t),this.visible=!0;const s=()=>this.hide();i&&i.catch(()=>{}).then(s)}hide(){this.visible=!1}render(){const{visible:e}=this,{screenLocation:t}=this.viewModel,i=!!t,s=e&&i,o=!e&&i,d={[G.spinnerStart]:s,[G.spinnerFinish]:o},c=this._getPositionStyles();return r("div",{class:this.classes(G.base,d),styles:c})}_visibleChange(e){if(e)return void(this.viewModel.screenLocationEnabled=!0);const t=$e(this._animationDelay);this._animationPromise=t,t.catch(()=>{}).then(()=>{this._animationPromise===t&&(this.viewModel.screenLocationEnabled=!1,this._animationPromise=null)})}_getPositionStyles(){const{screenLocation:e,view:t}=this.viewModel;if(t==null||e==null)return{};const{padding:i}=t;return{left:e.x-i.left+"px",top:e.y-i.top+"px"}}};a([n()],q.prototype,"location",null),a([n()],q.prototype,"view",null),a([n({type:me})],q.prototype,"viewModel",void 0),a([n()],q.prototype,"visible",null),q=a([P("esri.widgets.Spinner")],q);const ze=q;export{Re as F,je as I,ze as h,Le as l,me as p,Se as s,ue as y};

import{F as e,G as t,K as p,ay as b,b0 as B,k7 as ce,J as X,W as d,Z as C,k8 as Ee,b1 as he,k9 as Fe,ka as Ie,ba as M,gV as Se,jE as Y,ic as me,kb as ee,kc as $e,kd as Oe,ke as te,kf as Te,kg as Me,f7 as H,kh as De,ki as Ue,cu as Ae,br as ie,b8 as se,aA as ke}from"./index-C1aGfQcb.js";import{d as Be,a as Ce,j as Ne,u as Re,p as Ge}from"./commonProperties-Drl05DKJ.js";import{v as Ve}from"./HeightModelInfo-kVs8dE0B.js";import{S as We,C as Qe}from"./arcgisLayerUrl-BkZy4Mr3.js";import{h as ze,N as He,H as V,C as Ze,R as qe,M as Pe}from"./featureLayerUtils-Dy99w2fj.js";import{p as Je}from"./LayerFloorInfo-DzoJncEV.js";import{p as Le}from"./Relationship-CBhq9gYu.js";import{i as _e}from"./serviceCapabilitiesUtils-B23--4px.js";var Z;let w=Z=class extends b{constructor(s){super(s),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new Z({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([t({type:String,json:{write:!0}})],w.prototype,"expression",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"name",void 0),e([t({type:["boolean","date","number","string"],json:{write:!0}})],w.prototype,"returnType",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"title",void 0),w=Z=e([p("esri.form.ExpressionInfo")],w);const Ke=w;let j=class extends b{constructor(s){super(s),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};e([t({type:String,json:{write:!0}})],j.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],j.prototype,"label",void 0),e([t()],j.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],j.prototype,"visibilityExpression",void 0),j=e([p("esri.form.elements.Element")],j);const E=j;let N=class extends B(b){constructor(i){super(i),this.type=null}};e([t()],N.prototype,"type",void 0),N=e([p("esri.form.elements.inputs.attachments.Input")],N);const x=N,R=["any","capture","upload"];let I=class extends x{constructor(i){super(i),this.type="audio",this.inputMethod="any",this.maxDuration=null}};e([t({type:["audio"],readOnly:!0,json:{write:!0}})],I.prototype,"type",void 0),e([t({type:R,json:{write:!0}})],I.prototype,"inputMethod",void 0),e([t({type:Number,json:{write:!0}})],I.prototype,"maxDuration",void 0),I=e([p("esri.form.elements.inputs.attachments.AudioInput")],I);const oe=I;let U=class extends x{constructor(i){super(i),this.type="document",this.maxFileSize=null}};e([t({type:["document"],readOnly:!0,json:{write:!0}})],U.prototype,"type",void 0),e([t({type:Number,json:{write:!0}})],U.prototype,"maxFileSize",void 0),U=e([p("esri.form.elements.inputs.attachments.DocumentInput")],U);const re=U;let S=class extends x{constructor(i){super(i),this.type="image",this.inputMethod="any",this.maxImageSize=null}};e([t({type:["image"],readOnly:!0,json:{write:!0}})],S.prototype,"type",void 0),e([t({type:R,json:{write:!0}})],S.prototype,"inputMethod",void 0),e([t({type:Number,json:{write:!0}})],S.prototype,"maxImageSize",void 0),S=e([p("esri.form.elements.inputs.attachments.ImageInput")],S);const ne=S;let A=class extends x{constructor(i){super(i),this.type="signature",this.inputMethod="any"}};e([t({type:["signature"],readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0),e([t({type:R,json:{write:!0}})],A.prototype,"inputMethod",void 0),A=e([p("esri.form.elements.inputs.attachments.SignatureInput")],A);const pe=A;let $=class extends x{constructor(i){super(i),this.type="video",this.inputMethod="any",this.maxDuration=null}};e([t({type:["video"],readOnly:!0,json:{write:!0}})],$.prototype,"type",void 0),e([t({type:R,json:{write:!0}})],$.prototype,"inputMethod",void 0),e([t({type:Number,json:{write:!0}})],$.prototype,"maxDuration",void 0),$=e([p("esri.form.elements.inputs.attachments.VideoInput")],$);const le=$;function ve(s){return{nestableTypes:{base:x,key:"type",typeMap:{audio:oe,document:re,image:ne,signature:pe,video:le}},allTypes:{base:x,key:"type",typeMap:{attachment:s,audio:oe,document:re,image:ne,signature:pe,video:le}}}}function Xe(s,i,r){return s?s.map(o=>ce(i.nestableTypes,o)):null}function Ye(s,i,r){if(!s)return null;const o=i.nestableTypes.typeMap;return s.filter(n=>o[n.type]).map(n=>o[n.type].fromJSON(n))}function et(s,i,r){if(!s)return null;const o=i.nestableTypes.typeMap;return s.filter(n=>o[n.type]).map(n=>n.toJSON())}let c=class extends x{constructor(i){super(i),this.type="attachment",this.attachmentAssociationType="exact",this.inputTypes=null}castInputs(i){return Xe(i,W)}readInputs(i,r){return Ye(r.inputTypes,W)}writeInputs(i,r){r.inputTypes=et(i,W)}};e([t({type:["attachment"],readOnly:!0,json:{write:!0}})],c.prototype,"type",void 0),e([t({type:["any","exact","exactOrNone"],json:{write:!0}})],c.prototype,"attachmentAssociationType",void 0),e([t({json:{write:{isRequired:!0}}})],c.prototype,"inputTypes",void 0),e([X("inputTypes")],c.prototype,"castInputs",null),e([d("inputTypes")],c.prototype,"readInputs",null),e([C("inputTypes")],c.prototype,"writeInputs",null),c=e([p("esri.form.elements.inputs.attachments.AttachmentInput")],c);const W=ve(c),tt=c;var q;const it=ve(tt);let a=q=class extends E{constructor(s){super(s),this.allowUserRename=!0,this.attachmentKeyword=null,this.displayFilename=!1,this.editableExpression=null,this.filenameExpression="{attachmentKeyword}_{now}",this.input=null,this.maxAttachmentCount=null,this.minAttachmentCount=null,this.type="attachment",this.useOriginalFilename=!0}clone(){var s;return new q({allowUserRename:this.allowUserRename,attachmentKeyword:this.attachmentKeyword,description:this.description,displayFilename:this.displayFilename,editableExpression:this.editableExpression,filenameExpression:this.filenameExpression,input:(s=this.input)==null?void 0:s.clone(),label:this.label,maxAttachmentCount:this.maxAttachmentCount,minAttachmentCount:this.minAttachmentCount,useOriginalFilename:this.useOriginalFilename,visibilityExpression:this.visibilityExpression})}};e([t({type:Boolean,json:{write:!0}})],a.prototype,"allowUserRename",void 0),e([t({type:String,json:{write:{isRequired:!0}}})],a.prototype,"attachmentKeyword",void 0),e([t({type:Boolean,json:{write:!0}})],a.prototype,"displayFilename",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"editableExpression",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"filenameExpression",void 0),e([t({types:it.allTypes,json:{read:{source:"inputType"},write:{target:"inputType",isRequired:!0}}})],a.prototype,"input",void 0),e([t({type:Number,json:{write:!0}})],a.prototype,"maxAttachmentCount",void 0),e([t({type:Number,json:{write:!0}})],a.prototype,"minAttachmentCount",void 0),e([t({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),e([t({type:Boolean,json:{write:!0}})],a.prototype,"useOriginalFilename",void 0),a=q=e([p("esri.form.elements.AttachmentElement")],a);const ae=a;var P;let u=P=class extends E{constructor(s){super(s),this.domain=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}get editable(){return this._get("editable")??!0}set editable(s){this._set("editable",s)}clone(){return new P({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};e([t({types:Ee,json:{read:{reader:he},write:!0}})],u.prototype,"domain",void 0),e([t({type:Boolean,json:{write:!0}})],u.prototype,"editable",null),e([t({type:String,json:{write:!0}})],u.prototype,"editableExpression",void 0),e([t({type:String,json:{write:!0}})],u.prototype,"fieldName",void 0),e([t({type:String,json:{write:!0}})],u.prototype,"hint",void 0),e([t({types:Fe,json:{read:{source:"inputType"},write:{target:"inputType"}}})],u.prototype,"input",void 0),e([t({type:String,json:{write:!0}})],u.prototype,"requiredExpression",void 0),e([t({type:String,json:{read:!1,write:!0}})],u.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),u=P=e([p("esri.form.elements.FieldElement")],u);const de=u;var J;let v=J=class extends E{constructor(s){super(s),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new J({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:M(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};e([t({type:Number,json:{write:!0}})],v.prototype,"displayCount",void 0),e([t({type:["list"],json:{write:!0}})],v.prototype,"displayType",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"editableExpression",void 0),e([t({type:[Ie],json:{write:!0}})],v.prototype,"orderByFields",void 0),e([t({type:Number,json:{write:!0}})],v.prototype,"relationshipId",void 0),e([t({type:["relationship"],json:{read:!1,write:!0}})],v.prototype,"type",void 0),v=J=e([p("esri.form.elements.RelationshipElement")],v);const ue=v;var L;let O=L=class extends E{constructor(s){super(s),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new L({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};e([t({type:String,json:{write:!0}})],O.prototype,"text",void 0),e([t({type:String,json:{write:!0}})],O.prototype,"textFormat",void 0),e([t({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],O.prototype,"type",void 0),O=L=e([p("esri.form.elements.TextElement")],O);const ye=O;function fe(s){return{typesWithGroup:{base:E,key:"type",typeMap:{attachment:ae,field:de,group:s,relationship:ue,text:ye}},typesWithoutGroup:{base:E,key:"type",typeMap:{attachment:ae,field:de,relationship:ue,text:ye}}}}function ge(s,i,r=!0){if(!s)return null;const o=r?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return s.filter(n=>o[n.type]).map(n=>o[n.type].fromJSON(n))}function xe(s,i,r=!0){if(!s)return null;const o=r?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return s.filter(n=>o[n.type]).map(n=>n.toJSON())}function be(s,i,r=!0){return s?s.map(o=>ce(r?i.typesWithGroup:i.typesWithoutGroup,o)):null}var _;let h=_=class extends E{constructor(s){super(s),this.elements=null,this.initialState="expanded",this.type="group"}castElements(s){return be(s,Q,!1)}readElements(s,i){return ge(i.formElements,Q,!1)}writeElements(s,i){i.formElements=xe(s,Q,!1)}clone(){return new _({description:this.description,elements:M(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};e([t({json:{write:!0}})],h.prototype,"elements",void 0),e([X("elements")],h.prototype,"castElements",null),e([d("elements",["formElements"])],h.prototype,"readElements",null),e([C("elements")],h.prototype,"writeElements",null),e([t({type:["collapsed","expanded"],json:{write:!0}})],h.prototype,"initialState",void 0),e([t({type:String,json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=_=e([p("esri.form.elements.GroupElement")],h);const Q=fe(h),st=h;var K;const z=fe(st);let y=K=class extends b{constructor(s){super(s),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(s){return be(s,z)}readElements(s,i){return ge(i.formElements,z)}writeElements(s,i){i.formElements=xe(s,z)}clone(){return new K({description:this.description,expressionInfos:M(this.expressionInfos),elements:M(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(s,i){const r=new Set,{description:o,elements:n,expressionInfos:l,title:D}=this;if(k(r,s,o),k(r,s,D),!n)return[];const F=ot(n,l).map(G=>Se(r,s,G));await Promise.all(F);for(const G of n)we(r,{fieldsIndex:s,relationships:i},G);return Array.from(r).sort()}};function we(s,i,r){var n;const{fieldsIndex:o}=i;if(!o||o.fields.length!==s.size)switch(k(s,o,r.label),k(s,o,r.description),r.type){case"field":Y(s,o,r.fieldName);break;case"group":r.elements.forEach(l=>we(s,i,l));break;case"relationship":if(i.relationships){const l=i.relationships.find(D=>D.id===r.relationshipId);l&&Y(s,o,l.keyField)}me(s,o,(n=r.orderByFields)==null?void 0:n.map(l=>l.field));break;case"text":k(s,o,r.text)}}function ot(s,i){if(!i||i.length===0)return[];const r=je(s),o=[];for(const n of i)r.has(n.name)&&o.push(n.expression);return o}function je(s){const i=new Set;for(const r of s)if(ee(i,r.visibilityExpression),!$e(r)){if(Oe(r))te(i,je(r.elements));else if(ee(i,r.editableExpression),Te(r)){const{requiredExpression:o,valueExpression:n}=r;te(i,[o,n])}}return i}function k(s,i,r){me(s,i,Me(r))}e([t({type:String,json:{write:!0}})],y.prototype,"description",void 0),e([t({json:{write:!0}})],y.prototype,"elements",void 0),e([X("elements")],y.prototype,"castElements",null),e([d("elements",["formElements"])],y.prototype,"readElements",null),e([C("elements")],y.prototype,"writeElements",null),e([t({type:[Ke],json:{write:!0}})],y.prototype,"expressionInfos",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],y.prototype,"preserveFieldValuesWhenHidden",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"title",void 0),y=K=e([p("esri.form.FormTemplate")],y);const Et=y;let f=class extends B(b){constructor(s){super(s),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};e([t()],f.prototype,"creatorField",void 0),e([t()],f.prototype,"creationDateField",void 0),e([t()],f.prototype,"editorField",void 0),e([t()],f.prototype,"editDateField",void 0),e([t()],f.prototype,"realm",void 0),e([t(H("dateFieldsTimeReference",!0))],f.prototype,"timeZone",void 0),f=e([p("esri.layers.support.EditFieldsInfo")],f);const rt=f;let m=class extends B(b){constructor(s){super(s)}};e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"name",void 0),e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"fields",void 0),e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"isAscending",void 0),e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"indexType",void 0),e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"isUnique",void 0),e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"description",void 0),m=e([p("esri.layers.support.FeatureIndex")],m);let T=class extends B(b){constructor(s){super(s),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([t({type:String,json:{read:{source:"shapeAreaFieldName"}}})],T.prototype,"shapeAreaField",void 0),e([t({type:String,json:{read:{source:"shapeLengthFieldName"}}})],T.prototype,"shapeLengthField",void 0),e([t({type:String,json:{read:s=>De.read(s)||Ue.read(s)}})],T.prototype,"units",void 0),T=e([p("esri.layers.support.GeometryFieldsInfo")],T);const nt=T;let g=class extends B(b){constructor(s){super(s),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(s){if(!s)return null;const i={};for(const r of Object.keys(s))i[r]=he(s[r]);return i}writeDomains(s,i){var o;if(!s)return;const r={};for(const n of Object.keys(s))s[n]&&(r[n]=(o=s[n])==null?void 0:o.toJSON());i.domains=r}};e([t({type:Number,json:{write:!0}})],g.prototype,"code",void 0),e([t({type:Object,json:{write:!0}})],g.prototype,"defaultValues",void 0),e([t({json:{write:!0}})],g.prototype,"domains",void 0),e([d("domains")],g.prototype,"readDomains",null),e([C("domains")],g.prototype,"writeDomains",null),e([t({type:String,json:{write:!0}})],g.prototype,"name",void 0),g=e([p("esri.layers.support.Subtype")],g);const pt=g,Ft=s=>{let i=class extends s{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(ie.ofType(m)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=se.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){var n;if(!this.url)return null;const{capabilities:r}=this;if(r){const{query:l,operations:D,editing:F}=r;if(!l.supportsQueryByOthers||!l.supportsQueryByAnonymous||D.supportsEditing&&!(F.supportsUpdateByOthers&&F.supportsUpdateByAnonymous&&F.supportsDeleteByOthers&&F.supportsDeleteByAnonymous))return"load"}if((n=this.serviceDefinitionExpression)!=null&&n.toLowerCase().includes("current_user"))return"load";if(this.userHasUpdateItemPrivileges){if(He(this))return"load";if(this.hasUpdateItemRestrictions)return r.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const o=this.editFieldsInfo;return(o!=null&&o.creatorField||o!=null&&o.editorField)&&(r!=null&&r.operations.supportsEditing)?"editing":null}readCapabilitiesFromService(r,o){return _e(o,this.url)}readEditingInfo(r,o){const{editingInfo:n}=o;return n?{lastEditDate:n.lastEditDate!=null?new Date(n.lastEditDate):null}:null}get effectiveCapabilities(){const r=this.capabilities;if(!r)return null;const o=M(r),{operations:n,editing:l}=o;return V(this)?(this.userHasUpdateItemPrivileges&&(n.supportsQuery=!0),o):this.userHasUpdateItemPrivileges?(n.supportsAdd=n.supportsDelete=n.supportsEditing=n.supportsQuery=n.supportsUpdate=l.supportsDeleteByOthers=l.supportsGeometryUpdate=l.supportsUpdateByOthers=!0,o):(this.userHasFullEditingPrivileges&&n.supportsEditing&&(n.supportsAdd=n.supportsDelete=n.supportsUpdate=l.supportsGeometryUpdate=!0),o)}readGlobalIdFieldFromService(r,o){return Ze(o)}get hasFullEditingRestrictions(){const r=this.capabilities;if(!r||V(this))return!1;const{operations:o,editing:n}=r;return o.supportsEditing&&!(o.supportsAdd&&o.supportsDelete&&o.supportsUpdate&&n.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const r=this.capabilities;if(!r)return!1;const{operations:o,editing:n}=r;return V(this)?!o.supportsQuery:!(o.supportsAdd&&o.supportsDelete&&o.supportsEditing&&o.supportsQuery&&o.supportsUpdate&&n.supportsDeleteByOthers&&n.supportsGeometryUpdate&&n.supportsUpdateByOthers)}readIsTableFromService(r,o){return o.type==="Table"}readMaxScale(r,o){return o.effectiveMaxScale||r||0}readMinScale(r,o){return o.effectiveMinScale||r||0}readObjectIdFieldFromService(r,o){return qe(o)}readServiceDefinitionExpression(r,o){return o.definitionQuery||o.definitionExpression}set url(r){if(r==null)return void this._set("url",r);const o=We({layer:this,url:r,nonStandardUrlAllowed:!0,logger:ke.getLogger(this)});this._set("url",o.url),o.layerId!=null&&this._set("layerId",o.layerId)}writeUrl(r,o,n,l){Qe(this,r,null,o,l)}readVersion(r,o){return Pe(o)}};return e([t({readOnly:!0})],i.prototype,"authenticationTriggerEvent",null),e([t({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],i.prototype,"copyright",void 0),e([t({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","isDataBranchVersioned","isDataVersioned","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],i.prototype,"capabilities",void 0),e([d("service","capabilities")],i.prototype,"readCapabilitiesFromService",null),e([t(H("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),e([t({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),e([t({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),e([t({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],i.prototype,"displayField",void 0),e([t({readOnly:!0,type:rt})],i.prototype,"editFieldsInfo",void 0),e([t({readOnly:!0})],i.prototype,"editingInfo",void 0),e([d("editingInfo")],i.prototype,"readEditingInfo",null),e([t({readOnly:!0})],i.prototype,"effectiveCapabilities",null),e([t((()=>{const r=M(Be),o=r.json.origins;return o["web-map"]={read:!1,write:!1},o["portal-item"]={read:!1,write:!1},r})())],i.prototype,"elevationInfo",void 0),e([t({type:Je,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:Ce}}}}})],i.prototype,"floorInfo",void 0),e([t({type:Ae,json:{origins:{service:{read:{source:"extent"}}}}})],i.prototype,"fullExtent",void 0),e([t()],i.prototype,"gdbVersion",void 0),e([t({readOnly:!0,type:nt,json:{read:{source:"geometryProperties"}}})],i.prototype,"geometryFieldsInfo",void 0),e([t({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:ze.read}}}})],i.prototype,"geometryType",void 0),e([t({type:String})],i.prototype,"globalIdField",void 0),e([d("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdFieldFromService",null),e([t({readOnly:!0})],i.prototype,"hasFullEditingRestrictions",null),e([t({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasM",void 0),e([t({readOnly:!0})],i.prototype,"hasUpdateItemRestrictions",null),e([t({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasZ",void 0),e([t({readOnly:!0,type:Ve})],i.prototype,"heightModelInfo",void 0),e([t({type:Date})],i.prototype,"historicMoment",void 0),e([t({type:ie.ofType(m),readOnly:!0})],i.prototype,"indexes",void 0),e([t({readOnly:!0})],i.prototype,"isTable",void 0),e([d("service","isTable",["type"])],i.prototype,"readIsTableFromService",null),e([t({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],i.prototype,"layerId",void 0),e([t(Ne)],i.prototype,"maxScale",void 0),e([d("service","maxScale",["maxScale","effectiveMaxScale"])],i.prototype,"readMaxScale",null),e([t(Re)],i.prototype,"minScale",void 0),e([d("service","minScale",["minScale","effectiveMinScale"])],i.prototype,"readMinScale",null),e([t({type:String})],i.prototype,"objectIdField",void 0),e([d("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdFieldFromService",null),e([t(H("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),e([t({type:[Le],readOnly:!0})],i.prototype,"relationships",void 0),e([t({type:Boolean})],i.prototype,"returnM",void 0),e([t({type:Boolean})],i.prototype,"returnZ",void 0),e([t({readOnly:!0,json:{write:!1}})],i.prototype,"serverGens",void 0),e([t({readOnly:!0})],i.prototype,"serviceDefinitionExpression",void 0),e([d("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],i.prototype,"readServiceDefinitionExpression",null),e([t({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"serviceItemId",void 0),e([t()],i.prototype,"sourceJSON",void 0),e([t({type:se,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],i.prototype,"spatialReference",void 0),e([t({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"subtypeField",void 0),e([t({type:[pt],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"subtypes",void 0),e([t({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],i.prototype,"trackIdField",void 0),e([t(Ge)],i.prototype,"url",null),e([C("url")],i.prototype,"writeUrl",null),e([t({json:{origins:{service:{read:!0}},read:!1}})],i.prototype,"version",void 0),e([d("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],i.prototype,"readVersion",null),i=e([p("esri.layers.mixins.FeatureLayerBase")],i),i};export{Ft as B,Et as V,pt as n};

// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Graphic ../../arcade/featureset/support/FeatureSetQueryInterceptor ../../core/Accessor ../../core/Handles ../../core/Identifiable ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/throttle ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../../popup/content/TextContent ./FeatureAttachments/FeatureAttachmentsViewModel ./FeatureContent/FeatureContentViewModel ./FeatureExpression/FeatureExpressionViewModel ./FeatureFields/FeatureFieldsViewModel ./FeatureMedia/FeatureMediaViewModel ./FeatureRelationship/FeatureRelationshipViewModel ./support/arcadeFeatureUtils ./support/featureUtils ./support/relatedFeatureUtils".split(" "),
function(u,m,G,H,k,I,J,K,y,C,w,L,p,W,M,N,O,P,D,Q,R,z,S,T,q,v){var x;const E={attachmentsContent:!0,chartAnimation:!0,customContent:!0,expressionContent:!0,fieldsContent:!0,mediaContent:!0,textContent:!0,relationshipContent:!0};k=x=function(F){function A(a){var b=F.call(this,a)||this;b._handles=new I;b._error=null;b._featureAbortController=null;b._graphicChangedThrottled=L.throttle(b._graphicChanged,1,u._assertThisInitialized(b));b._expressionAttributes=null;b._graphicExpressionAttributes=null;b.abilities=
{...E};b.content=null;b.contentViewModels=[];b.description=null;b.defaultPopupTemplateEnabled=!1;b.formattedAttributes=null;b.lastEditInfo=null;b.relatedInfos=new Map;b.title="";b.view=null;b._isAllowedContentType=c=>{const {abilities:d}=u._assertThisInitialized(b);return"attachments"===c.type&&d.attachmentsContent||"custom"===c.type&&d.customContent||"fields"===c.type&&d.fieldsContent||"media"===c.type&&d.mediaContent||"text"===c.type&&d.textContent||"expression"===c.type&&d.expressionContent||"relationship"===
c.type&&d.relationshipContent};b._handles.add(w.watch(()=>[b.graphic,b._effectivePopupTemplate,b.abilities],()=>b._graphicChangedThrottled(),w.initial));return b}u._inheritsLoose(A,F);var f=A.prototype;f.destroy=function(){this._clear();this._cancelFeatureQuery();this._error=null;this._handles.destroy();this.graphic=this._handles=null;this._destroyContentViewModels();this.relatedInfos.clear()};f.castAbilities=function(a){return{...E,...a}};f.setActiveMedia=function(a,b){a=this.contentViewModels[a];
a instanceof z&&a.setActiveMedia(b)};f.nextMedia=function(a){a=this.contentViewModels[a];a instanceof z&&a.next()};f.previousMedia=function(a){a=this.contentViewModels[a];a instanceof z&&a.previous()};f._clear=function(){this._set("title","");this._set("content",null);this._set("formattedAttributes",null)};f._graphicChanged=function(){var a=u._asyncToGenerator(function*(){this._cancelFeatureQuery();this._error=null;this._clear();const {graphic:b}=this;if(b){var c=new AbortController;this._featureAbortController=
c;try{yield this._queryFeature({signal:c.signal})}catch(d){C.isAbortError(d)||(this._error=d,K.getLogger(this.declaredClass).error("error","The popupTemplate could not be displayed for this feature.",{error:d,graphic:b,popupTemplate:this._effectivePopupTemplate}))}this._featureAbortController===c&&(this._featureAbortController=null)}});return function(){return a.apply(this,arguments)}}();f._cancelFeatureQuery=function(){const {_featureAbortController:a}=this;a&&a.abort();this._featureAbortController=
null};f._compileContentElement=function(a,b){if("attachments"===a.type)return this._compileAttachments(a,b);if("custom"===a.type)return this._compileCustom(a,b);if("fields"===a.type)return this._compileFields(a,b);if("media"===a.type)return this._compileMedia(a,b);if("text"===a.type)return this._compileText(a,b);if("expression"===a.type)return this._compileExpression(a,b);if("relationship"===a.type)return this._compileRelationship(a,b)};f._compileContent=function(a){this._destroyContentViewModels();
if(this.graphic)return Array.isArray(a)?a.filter(this._isAllowedContentType).map((b,c)=>this._compileContentElement(b,c)):"string"===typeof a?this._compileText(new O({text:a}),0).text:a};f._destroyContentViewModels=function(){this._handles?.remove("relationship-view-models");this._handles?.remove("content-view-models");this.contentViewModels.forEach(a=>a&&!a.destroyed&&a.destroy());this._set("contentViewModels",[])};f._matchesFeature=function(a,b){a=a?.graphic?.getObjectId();b=b?.getObjectId();return y.isSome(a)&&
y.isSome(b)&&a===b};f._setRelatedFeaturesViewModels=function({relatedFeatureViewModels:a,relatedFeatures:b,map:c}){b?.filter(Boolean).forEach(d=>{a.find(e=>this._matchesFeature(e,d))||a.add(new x({abilities:{relationshipContent:!1},map:c,graphic:d}))});a.forEach(d=>{b?.find(e=>this._matchesFeature(d,e))||a.remove(d)})};f._setExpressionContentVM=function(a,b){const {formattedAttributes:c}=this,{contentElement:d,contentElementViewModel:e}=a;a=d?.type;e&&a&&("fields"===a&&(this._createFieldsFormattedAttributes({contentElement:d,
contentElementIndex:b,formattedAttributes:c}),e.set(this._createFieldsVMParams(d,b))),"media"===a&&(this._createMediaFormattedAttributes({contentElement:d,contentElementIndex:b,formattedAttributes:c}),e.set(this._createMediaVMParams(d,b))),"text"===a&&e.set(this._createTextVMParams(d)))};f._compileRelationship=function(a,b){const {displayCount:c,orderByFields:d,relationshipId:e,title:g,description:l}=a,{_sourceLayer:h,graphic:r,map:t}=this,n=new S({displayCount:c,graphic:r,orderByFields:d,relationshipId:e,
layer:h,map:t,...this._compileTitleAndDesc({title:g,description:l})});this.contentViewModels[b]=n;this._handles.add(w.on(()=>n.relatedFeatures,"change",()=>this._setRelatedFeaturesViewModels(n)),"relationship-view-models");return a};f._compileExpression=function(a,b){const {expressionInfo:c}=a,{graphic:d,map:e,spatialReference:g,view:l}=this,h=new Q({expressionInfo:c,graphic:d,interceptor:x.interceptor,map:e,spatialReference:g,view:l});this.contentViewModels[b]=h;this._handles.add(w.watch(()=>h.contentElementViewModel,
()=>this._setExpressionContentVM(h,b),w.initial),"content-view-models");return a};f._compileAttachments=function(a,b){const {graphic:c}=this,{description:d,title:e}=a;this.contentViewModels[b]=new P({graphic:c,...this._compileTitleAndDesc({title:e,description:d})});return a};f._compileCustom=function(a,b){const {graphic:c}=this,{creator:d,destroyer:e}=a;this.contentViewModels[b]=new D({graphic:c,creator:d,destroyer:e});return a};f._compileTitleAndDesc=function({title:a,description:b}){const {_fieldInfoMap:c,
_sourceLayer:d,graphic:e,formattedAttributes:g,_expressionAttributes:l}=this,{attributes:h}=e,r=g.global;return{title:q.substituteFieldsInLinksAndAttributes({attributes:h,fieldInfoMap:c,globalAttributes:r,expressionAttributes:l,layer:d,text:a}),description:q.substituteFieldsInLinksAndAttributes({attributes:h,fieldInfoMap:c,globalAttributes:r,expressionAttributes:l,layer:d,text:b})}};f._createFieldsVMParams=function(a,b){const {_effectivePopupTemplate:c,formattedAttributes:d}=this,e={...d.global,...d.content[b]};
b=(a?.fieldInfos||c?.fieldInfos)?.filter(({fieldName:h})=>q.isExpressionField(h)||q.isRelatedField(h)||e.hasOwnProperty(h));const {description:g,title:l}=a;return{attributes:e,expressionInfos:c?.expressionInfos,fieldInfos:b,...this._compileTitleAndDesc({title:l,description:g})}};f._compileFields=function(a,b){const c=a.clone();a=new R(this._createFieldsVMParams(a,b));this.contentViewModels[b]=a;c.fieldInfos=a.formattedFieldInfos.slice(0);return c};f._createMediaVMParams=function(a,b){const {abilities:c,
graphic:d,_fieldInfoMap:e,formattedAttributes:g,_effectivePopupTemplate:l,relatedInfos:h,_sourceLayer:r,_expressionAttributes:t}=this,{attributes:n}=d,{description:B,mediaInfos:U,title:V}=a;return{abilities:{chartAnimation:c.chartAnimation},activeMediaInfoIndex:a.activeMediaInfoIndex||0,attributes:n,layer:r,fieldInfoMap:e,formattedAttributes:{...g.global,...g.content[b]},expressionAttributes:t,mediaInfos:U,popupTemplate:l,relatedInfos:h,...this._compileTitleAndDesc({title:V,description:B})}};f._compileMedia=
function(a,b){const c=a.clone();a=new z(this._createMediaVMParams(a,b));c.mediaInfos=a.formattedMediaInfos.slice(0);this.contentViewModels[b]=a;return c};f._createTextVMParams=function(a){const {graphic:b,_fieldInfoMap:c,_sourceLayer:d,_expressionAttributes:e}=this;if(a&&a.text){const {attributes:g}=b;a.text=q.substituteFieldsInLinksAndAttributes({attributes:g,fieldInfoMap:c,globalAttributes:this.formattedAttributes.global,expressionAttributes:e,layer:d,text:a.text})}return{graphic:b,creator:a.text}};
f._compileText=function(a,b){a=a.clone();this.contentViewModels[b]=new D(this._createTextVMParams(a));return a};f._compileLastEditInfo=function(){const {_effectivePopupTemplate:a,_sourceLayer:b,graphic:c}=this;if(a){var {lastEditInfoEnabled:d}=a,e=b?.editFieldsInfo;if(d&&e)return q.formatEditInfo(e,c.attributes)}};f._compileTitle=function(a){const {_fieldInfoMap:b,_sourceLayer:c,graphic:d,_expressionAttributes:e}=this,{attributes:g}=d;return q.substituteFieldsInLinksAndAttributes({attributes:g,fieldInfoMap:b,
globalAttributes:this.formattedAttributes.global,expressionAttributes:e,layer:c,text:a})};f._getTitle=function(){var a=u._asyncToGenerator(function*(){const {_effectivePopupTemplate:b,graphic:c}=this;return q.graphicCallback(b?.title,{graphic:c})});return function(){return a.apply(this,arguments)}}();f._getContent=function(){var a=u._asyncToGenerator(function*(){const {_effectivePopupTemplate:b,graphic:c}=this;return q.graphicCallback(b?.content,{graphic:c})});return function(){return a.apply(this,
arguments)}}();f._queryFeature=function(){var a=u._asyncToGenerator(function*(b){const {_featureAbortController:c,_sourceLayer:d,graphic:e,_effectivePopupTemplate:g,spatialReference:l,map:h,view:r}=this;if(c===this._featureAbortController&&e){yield q.queryUpdatedFeature({graphic:e,popupTemplate:g,layer:d,spatialReference:l},b);var {content:{value:t},title:{value:n}}=yield C.eachAlways({content:this._getContent(),title:this._getTitle()});({expressionAttributes:{value:b}}=yield C.eachAlways({checkForRelatedFeatures:this._checkForRelatedFeatures(b),
expressionAttributes:T.createCompiledExpressions({expressionInfos:g?.expressionInfos,spatialReference:l,graphic:e,map:h,interceptor:x.interceptor,view:r})}));c===this._featureAbortController&&e&&(this._expressionAttributes=b,this._graphicExpressionAttributes={...e.attributes,...b},this._set("formattedAttributes",this._createFormattedAttributes(t)),this._set("title",this._compileTitle(n)),this._set("lastEditInfo",this._compileLastEditInfo()||null),this._set("content",this._compileContent(t)||null))}});
return function(b){return a.apply(this,arguments)}}();f._createMediaFormattedAttributes=function({contentElement:a,contentElementIndex:b,formattedAttributes:c}){const {_effectivePopupTemplate:d,graphic:e,relatedInfos:g,_sourceLayer:l,_fieldInfoMap:h,_graphicExpressionAttributes:r}=this;c.content[b]=q.formatAttributes({fieldInfos:d?.fieldInfos,graphic:e,attributes:{...r,...a.attributes},layer:l,fieldInfoMap:h,relatedInfos:g})};f._createFieldsFormattedAttributes=function({contentElement:a,contentElementIndex:b,
formattedAttributes:c}){if(a.fieldInfos){const {graphic:d,relatedInfos:e,_sourceLayer:g,_fieldInfoMap:l,_graphicExpressionAttributes:h}=this;c.content[b]=q.formatAttributes({fieldInfos:a.fieldInfos,graphic:d,attributes:{...h,...a.attributes},layer:g,fieldInfoMap:l,relatedInfos:e})}};f._createFormattedAttributes=function(a){const {_effectivePopupTemplate:b,graphic:c,relatedInfos:d,_sourceLayer:e,_fieldInfoMap:g,_graphicExpressionAttributes:l}=this,h={global:q.formatAttributes({fieldInfos:b?.fieldInfos,
graphic:c,attributes:l,layer:e,fieldInfoMap:g,relatedInfos:d}),content:[]};Array.isArray(a)&&a.forEach((r,t)=>{"fields"===r.type&&this._createFieldsFormattedAttributes({contentElement:r,contentElementIndex:t,formattedAttributes:h});"media"===r.type&&this._createMediaFormattedAttributes({contentElement:r,contentElementIndex:t,formattedAttributes:h})});return h};f._checkForRelatedFeatures=function(a){const {graphic:b,_effectivePopupTemplate:c}=this;return this._queryRelatedInfos(b,q.getAllFieldInfos(c),
a)};f._queryRelatedInfos=function(){var a=u._asyncToGenerator(function*(b,c,d){const {relatedInfos:e,_sourceLayer:g}=this;e.clear();const l=y.isSome(g.associatedLayer)?yield g.associatedLayer.load(d):g;if(l){var h=c.filter(n=>n&&q.isRelatedField(n.fieldName));if(h&&h.length){c.forEach(n=>this._configureRelatedInfo(n,l));var r=yield v.queryLayerInfos({relatedInfos:e,layer:l},d);Object.keys(r).forEach(n=>{const B=e.get(n.toString());n=r[n]?.value;B&&n&&(B.layerInfo=n.data)});var t=yield v.queryRelatedFeatures({graphic:b,
relatedInfos:e,layer:l},d);Object.keys(t).forEach(n=>{v.setRelatedFeatures(t[n]?.value,e.get(n.toString()))})}}});return function(b,c,d){return a.apply(this,arguments)}}();f._configureRelatedInfo=function(a,b){const {relatedInfos:c}=this,d=v.getRelatedFieldInfo(a.fieldName);if(d){var {layerId:e,fieldName:g}=d;e&&(b=c.get(e.toString())||v.createRelatedInfo(e,b))&&(v.updateRelatedInfo({relatedInfo:b,fieldName:g,fieldInfo:a}),this.relatedInfos.set(e,b))}};u._createClass(A,[{key:"_effectivePopupTemplate",
get:function(){return y.isSome(this.graphic)?this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled):null}},{key:"_fieldInfoMap",get:function(){return q.createfieldInfoMap(q.getAllFieldInfos(this._effectivePopupTemplate),this._sourceLayer)}},{key:"_sourceLayer",get:function(){return q.getSourceLayer(this.graphic)}},{key:"state",get:function(){return this.graphic?this._error?"error":this.waitingForContent?"loading":"ready":"disabled"}},{key:"graphic",set:function(a){this._set("graphic",
a?a.clone():null)}},{key:"spatialReference",get:function(){return this.view?.spatialReference??null},set:function(a){this._override("spatialReference",a)}},{key:"map",get:function(){return this.view?.map||null},set:function(a){this._override("map",a)}},{key:"waitingForContent",get:function(){return!!this._featureAbortController}}]);return A}(J.IdentifiableMixin(k));k.interceptor=new H.FeatureSetQueryInterceptor(q.preLayerQueryCallback,q.preRequestCallback);m.__decorate([p.property()],k.prototype,
"_error",void 0);m.__decorate([p.property()],k.prototype,"_featureAbortController",void 0);m.__decorate([p.property({readOnly:!0})],k.prototype,"_effectivePopupTemplate",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"_fieldInfoMap",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"_sourceLayer",null);m.__decorate([p.property()],k.prototype,"abilities",void 0);m.__decorate([M.cast("abilities")],k.prototype,"castAbilities",null);m.__decorate([p.property({readOnly:!0})],k.prototype,
"content",void 0);m.__decorate([p.property({readOnly:!0})],k.prototype,"contentViewModels",void 0);m.__decorate([p.property()],k.prototype,"description",void 0);m.__decorate([p.property({type:Boolean})],k.prototype,"defaultPopupTemplateEnabled",void 0);m.__decorate([p.property({readOnly:!0})],k.prototype,"state",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"formattedAttributes",void 0);m.__decorate([p.property({type:G,value:null})],k.prototype,"graphic",null);m.__decorate([p.property({readOnly:!0})],
k.prototype,"lastEditInfo",void 0);m.__decorate([p.property({readOnly:!0})],k.prototype,"relatedInfos",void 0);m.__decorate([p.property()],k.prototype,"spatialReference",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"title",void 0);m.__decorate([p.property()],k.prototype,"map",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"waitingForContent",null);m.__decorate([p.property()],k.prototype,"view",void 0);return k=x=m.__decorate([N.subclass("esri.widgets.FeatureViewModel")],
k)});
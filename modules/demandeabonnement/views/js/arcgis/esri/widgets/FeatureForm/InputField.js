// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../intl ../../core/Accessor ../../core/HandleOwner ../../core/maybe ../../core/uid ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/has ../../layers/support/CodedValueDomain ../../layers/support/Domain ../../layers/support/InheritedDomain ../../layers/support/RangeDomain ../../layers/support/domainUtils ../../layers/support/fieldUtils ../../intl/substitute".split(" "),
function(x,c,b,F,G,h,H,d,L,M,I,N,J,O,P,Q,r,l,y){function z(m){return 1E7<=m||-1E7>=m}function A(m){return!!m&&"maxLength"in m}var n;(function(m){m.Text="text";m.Number="number";m.Date="date";m.Unsupported="unsupported"})(n||(n={}));var t;(t||(t={})).TOO_SHORT="length-validation-error::too-short";const B={type:"number"},C={type:"number",intlOptions:{notation:"scientific"}},D={type:"date",intlOptions:{day:"2-digit",month:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}};b=
function(m){function u(a){a=m.call(this,a)||this;a._storedValue=null;a.editableExpressionExecutor=null;a.id=H.generateUID().toString();a.requiredExpressionExecutor=null;a.valueExpressionExecutor=null;a.visibilityExpressionExecutor=null;a.feature=null;a.field=null;a.fieldElement=null;a.layer=null;a.error=null;a.group=null;a.messages=null;return a}x._inheritsLoose(u,m);var q=u.prototype;q._isDomainCompatible=function(a){const {field:e}=this;if("coded-value"===a?.type){const f=typeof a.codedValues[0].code;
if("string"===f&&l.isStringField(e)||"number"===f&&l.isNumericField(e))return!0}return"range"===a?.type&&l.isNumericField(e)||l.isDateField(e)?!0:!1};q._validate=function(){const {domain:a,field:e,initialFeature:f,minLength:g,required:p,type:w,valid:v,value:k}=this,E=p&&null===k,K=void 0!==v;return!E&&f.getAttribute(e.name)===k&&K?null:E?l.TypeValidationError.INVALID_TYPE:"text"===w&&-1<g&&"string"===typeof k&&k.length<g?t.TOO_SHORT:a?null!==k||p?r.validateDomainValue(a,k):null:l.validateFieldValue(e,
k)};q._isVisibleByDefault=function(){const a=this.field?.type;return"oid"!==a&&"global-id"!==a&&!this._isGeometryField()};q._isEditorField=function(){return l.getFeatureEditFields(this.layer).includes(this.name)};q._isGeometryField=function(){return l.getFeatureGeometryFields(this.layer).includes(this.name)};q._shouldUseValueExpression=function(){return this._layerFieldAllowsEdits&&!this._configAllowsEdits&&h.isSome(this.valueExpressionExecutor)};q._toErrorMessage=function(){const {domain:a,field:e,
messages:f,minLength:g,value:p,required:w,type:v}=this;var k=this.error;return w&&null===p?f.validationErrors.cannotBeNull:k===r.DomainValidationError.VALUE_OUT_OF_RANGE||k===l.NumericRangeValidationError.OUT_OF_RANGE?(k=r.getDomainRange(a)||l.getFieldRange(e),y.substitute(f.validationErrors.outsideRange,k,{format:{max:"date"===v?D:z(k.max)?C:B,min:"date"===v?D:z(k.min)?C:B}})):k===r.DomainValidationError.INVALID_CODED_VALUE?f.validationErrors.invalidCodedValue:k===l.TypeValidationError.INVALID_TYPE?
f.validationErrors.invalidType:k===t.TOO_SHORT?y.substitute(f.validationErrors.tooShort,{min:g}):null};x._createClass(u,[{key:"_configAllowsEdits",get:function(){const {fieldElement:a,layer:e,name:f}=this;return h.isSome(a)?a.editableExpression?this.evaluatedEditableExpression:!1!==a.editable:("subtype-group"!==e?.type?e?.popupTemplate?.fieldInfos?.find(({fieldName:g})=>g===f):null)?.isEditable??!0}},{key:"_layerFieldAllowsEdits",get:function(){const {field:a,layer:e}=this;return e?.capabilities.operations.supportsEditing&&
a?.editable}},{key:"isUsingValueExpression",get:function(){return this._shouldUseValueExpression()}},{key:"evaluatedEditableExpression",get:function(){const {editableExpressionExecutor:a}=this;return h.isSome(a)?!!a.lastEvaluatedValue:null}},{key:"evaluatedRequiredExpression",get:function(){const {requiredExpressionExecutor:a}=this;return h.isSome(a)?!!a.lastEvaluatedValue:null}},{key:"evaluatedVisibilityExpression",get:function(){const {visibilityExpressionExecutor:a}=this;return h.isSome(a)?!!a.lastEvaluatedValue:
null}},{key:"evaluatedValueExpression",get:function(){const {valueExpressionExecutor:a}=this;return h.isSome(a)?a.lastEvaluatedValue:null}},{key:"initialFeature",set:function(a){this._set("initialFeature",a);this.notifyChange("valid")}},{key:"description",get:function(){return h.unwrap(this.fieldElement)?.description}},{key:"domain",get:function(){var {layer:a}=this,e="typeIdField"in a?a.typeIdField:null,f=this.field?.domain;if(e===this.name&&!f)return e="subtype-group"===a.type?a.sublayers.map(({subtypeCode:g,
title:p})=>({id:g,name:p})):a.types.map(({id:g,name:p})=>({code:g,name:p})),new J({name:"__internal-type-based-coded-value-domain__",codedValues:e});({feature:a}=this);e=e&&this.layer.getFieldDomain(this.name,{feature:a})||f;f=h.get(this.fieldElement,"domain");return h.isSome(f)&&this._isDomainCompatible(f)?f:e}},{key:"editable",get:function(){return this._layerFieldAllowsEdits?this.evaluatedEditableExpression??this._configAllowsEdits:!1}},{key:"inputType",get:function(){return h.unwrap(this.fieldElement)?.input?.type}},
{key:"errorMessage",get:function(){return this._toErrorMessage()}},{key:"hint",get:function(){return h.unwrap(this.fieldElement)?.hint}},{key:"includeTime",get:function(){var {fieldElement:a}=this;a=h.isSome(a)&&"datetime-picker"===a.input?.type?a.input.includeTime:void 0;return void 0===a?!0:a}},{key:"label",get:function(){return h.isSome(this.fieldElement)&&this.fieldElement.label||this.field.alias||this.field.name}},{key:"maxLength",get:function(){if(this.type===n.Date)return-1;const {field:a,
fieldElement:e}=this,f=a?.length,g=h.isSome(e)&&A(e.input)?e.input.maxLength:NaN;return!isNaN(g)&&-1<=g&&(-1===f||g<=f)?g:f}},{key:"minLength",get:function(){if(this.type===n.Date)return-1;const {field:a,fieldElement:e}=this,f=a?.length,g=h.isSome(e)&&A(e.input)?e.input.minLength:NaN;return!isNaN(g)&&-1<=g&&(-1===f||g<=f)?g:-1}},{key:"name",get:function(){return this.field?.name}},{key:"required",get:function(){const {editable:a,evaluatedRequiredExpression:e,field:f,visible:g}=this;return a?!1===
f?.nullable?!0:g&&h.isSome(e)?e:!1:!1},set:function(a){this._overrideIfSome("required",a)}},{key:"submittable",get:function(){const {field:a,required:e,valid:f,value:g}=this;return e&&h.isNone(g)?!1:f?!0:this.initialFeature.getAttribute(a.name)===g}},{key:"type",get:function(){const {field:a}=this;return l.isNumericField(a)?n.Number:l.isStringField(a)?n.Text:l.isDateField(a)?n.Date:n.Unsupported}},{key:"updating",get:function(){const {editableExpressionExecutor:a,valueExpressionExecutor:e}=this;return h.isSome(e)&&
e.updating||h.isSome(a)&&a.updating}},{key:"valid",get:function(){const a=this.editable?this._validate():null;this._set("error",a);return null===a}},{key:"value",get:function(){if(this._shouldUseValueExpression()){const a=this.evaluatedValueExpression;if(this.type===n.Date){if(a instanceof Date)return a.getTime();if("number"!==typeof a)return parseInt(a,10)}return h.isSome(a)&&"object"===typeof a?a.toString():a}return this.get("_storedValue")},set:function(a){this.notifyChange("evaluatedVisibilityExpression");
this.set("_storedValue",a)}},{key:"visible",get:function(){return this._isEditorField()?!1:h.isSome(this.evaluatedVisibilityExpression)?this.evaluatedVisibilityExpression:h.isSome(this.fieldElement)?!0:this._isVisibleByDefault()}}]);return u}(G.HandleOwnerMixin(F));c.__decorate([d.property()],b.prototype,"_storedValue",void 0);c.__decorate([d.property()],b.prototype,"_configAllowsEdits",null);c.__decorate([d.property()],b.prototype,"_layerFieldAllowsEdits",null);c.__decorate([d.property()],b.prototype,
"editableExpressionExecutor",void 0);c.__decorate([d.property()],b.prototype,"requiredExpressionExecutor",void 0);c.__decorate([d.property()],b.prototype,"valueExpressionExecutor",void 0);c.__decorate([d.property()],b.prototype,"isUsingValueExpression",null);c.__decorate([d.property()],b.prototype,"visibilityExpressionExecutor",void 0);c.__decorate([d.property()],b.prototype,"evaluatedEditableExpression",null);c.__decorate([d.property()],b.prototype,"evaluatedRequiredExpression",null);c.__decorate([d.property()],
b.prototype,"evaluatedVisibilityExpression",null);c.__decorate([d.property()],b.prototype,"evaluatedValueExpression",null);c.__decorate([d.property()],b.prototype,"feature",void 0);c.__decorate([d.property()],b.prototype,"field",void 0);c.__decorate([d.property({constructOnly:!0})],b.prototype,"fieldElement",void 0);c.__decorate([d.property()],b.prototype,"initialFeature",null);c.__decorate([d.property()],b.prototype,"layer",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"description",
null);c.__decorate([d.property()],b.prototype,"domain",null);c.__decorate([d.property()],b.prototype,"editable",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"inputType",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"error",void 0);c.__decorate([d.property({dependsOn:["error","messages","value"]})],b.prototype,"errorMessage",null);c.__decorate([d.property()],b.prototype,"group",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"hint",null);c.__decorate([d.property()],
b.prototype,"includeTime",null);c.__decorate([d.property()],b.prototype,"label",null);c.__decorate([d.property()],b.prototype,"maxLength",null);c.__decorate([d.property()],b.prototype,"minLength",null);c.__decorate([d.property()],b.prototype,"messages",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"name",null);c.__decorate([d.property()],b.prototype,"required",null);c.__decorate([d.property()],b.prototype,"submittable",null);c.__decorate([d.property()],b.prototype,"type",null);c.__decorate([d.property()],
b.prototype,"updating",null);c.__decorate([d.property()],b.prototype,"valid",null);c.__decorate([d.property({value:null})],b.prototype,"value",null);c.__decorate([d.property()],b.prototype,"visible",null);return b=c.__decorate([I.subclass("esri.widgets.FeatureForm.InputField")],b)});
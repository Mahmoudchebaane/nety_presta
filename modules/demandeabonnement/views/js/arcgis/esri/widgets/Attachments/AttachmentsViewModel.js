// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Graphic ../../core/Accessor ../../core/Collection ../../core/Error ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../../rest/query/support/AttachmentInfo ../../rest/support/AttachmentQuery ../Feature/support/featureUtils".split(" "),function(n,k,z,f,t,h,A,u,l,G,B,C,D,v,E){const w=
{editing:!1,operations:{add:!0,update:!0,delete:!0}},x=t.ofType(D);f=function(y){function q(b){var a=y.call(this,b)||this;a._getAttachmentsPromise=null;a._attachmentLayer=null;a.abilities={...w};a.activeAttachmentInfo=null;a.activeFileInfo=null;a.attachmentInfos=new x;a.fileInfos=new t;a.graphic=null;a.mode="view";a.filesEnabled=!1;a.addHandles(u.watch(()=>a.graphic,()=>a._graphicChanged(),u.initial));return a}n._inheritsLoose(q,y);var g=q.prototype;g.destroy=function(){this.graphic=this._attachmentLayer=
null};g.castAbilities=function(b){return{...w,...b}};g.getAttachments=function(){var b=n._asyncToGenerator(function*(){const {_attachmentLayer:a,attachmentInfos:c}=this;if(!a||"function"!==typeof a.queryAttachments)throw new h("invalid-layer","getAttachments(): A valid layer is required.");const e=this._getObjectId();var d=new v({objectIds:[e],returnMetadata:!0});const m=[];this._getAttachmentsPromise=d=a.queryAttachments(d).then(p=>p[e]||m).catch(()=>m);this.notifyChange("state");d=yield d;c.removeAll();
d.length&&c.addMany(d);this._getAttachmentsPromise=null;this.notifyChange("state");return d});return function(){return b.apply(this,arguments)}}();g.addAttachment=function(){var b=n._asyncToGenerator(function*(a,c=this.graphic){const {_attachmentLayer:e,attachmentInfos:d,abilities:m}=this;if(!c)throw new h("invalid-graphic","addAttachment(): A valid graphic is required.",{graphic:c});if(!a)throw new h("invalid-attachment","addAttachment(): An attachment is required.",{attachment:a});if(!m.operations.add)throw new h("invalid-abilities",
"addAttachment(): add abilities are required.");if(!e||"function"!==typeof e.addAttachment)throw new h("invalid-layer","addAttachment(): A valid layer is required.");a=yield e.addAttachment(c,a).then(p=>this._queryAttachment(p.objectId,c));d.add(a);return a});return function(a){return b.apply(this,arguments)}}();g.deleteAttachment=function(){var b=n._asyncToGenerator(function*(a){const {_attachmentLayer:c,attachmentInfos:e,graphic:d,abilities:m}=this;if(!a)throw new h("invalid-attachment-info","deleteAttachment(): An attachmentInfo is required.",
{attachmentInfo:a});if(!m.operations.delete)throw new h("invalid-abilities","deleteAttachment(): delete abilities are required.");if(!c||"function"!==typeof c.deleteAttachments)throw new h("invalid-layer","deleteAttachment(): A valid layer is required.");const p=yield c.deleteAttachments(d,[a.id]).then(()=>a);e.remove(p);return p});return function(a){return b.apply(this,arguments)}}();g.updateAttachment=function(){var b=n._asyncToGenerator(function*(a,c=this.activeAttachmentInfo){const {_attachmentLayer:e,
attachmentInfos:d,graphic:m,abilities:p}=this;if(!a)throw new h("invalid-attachment","updateAttachment(): An attachment is required.",{attachment:a});if(!c)throw new h("invalid-attachment-info","updateAttachment(): An attachmentInfo is required.",{attachmentInfo:c});if(!p.operations.update)throw new h("invalid-abilities","updateAttachment(): Update abilities are required.");const F=d.findIndex(r=>r===c);if(!e||"function"!==typeof e.updateAttachment)throw new h("invalid-layer","updateAttachment(): A valid layer is required.");
a=yield e.updateAttachment(m,c.id,a).then(r=>this._queryAttachment(r.objectId));d.splice(F,1,a);return a});return function(a){return b.apply(this,arguments)}}();g.commitFiles=function(){var b=n._asyncToGenerator(function*(){yield Promise.all(this.fileInfos.items.map(a=>this.addAttachment(a.form)));this.fileInfos.removeAll();return this.getAttachments()});return function(){return b.apply(this,arguments)}}();g.addFile=function(b,a){if(!b||!a)return null;b={file:b,form:a};this.fileInfos.add(b);return b};
g.updateFile=function(b,a,c=this.activeFileInfo){if(!b||!a||!c)return null;const e=this.fileInfos.findIndex(d=>c===d);-1<e&&this.fileInfos.splice(e,1,{file:b,form:a});return this.fileInfos.items[e]};g.deleteFile=function(b){const a=this.fileInfos.find(c=>c.file===b);return this.fileInfos.remove(a)??null};g._queryAttachment=function(){var b=n._asyncToGenerator(function*(a,c){if(!a)throw new h("invalid-attachment-id","Could not query attachment.");const {_attachmentLayer:e}=this,d=this._getObjectId(c);
a=new v({objectIds:[d],attachmentsWhere:`AttachmentId=${a}`,returnMetadata:!0});return e.queryAttachments(a).then(m=>m[d][0])});return function(a,c){return b.apply(this,arguments)}}();g._getObjectId=function(b=this.graphic){return b?.getObjectId()??null};g._graphicChanged=function(){this.graphic&&(this._setAttachmentLayer(),this.getAttachments().catch(()=>{}))};g._setAttachmentLayer=function(){var {graphic:b}=this;this._attachmentLayer=(b=E.getSourceLayer(b))?"scene"===b.type&&A.isSome(b.associatedLayer)?
b.associatedLayer:b:null};n._createClass(q,[{key:"state",get:function(){return this._getAttachmentsPromise?"loading":this.graphic?"ready":"disabled"}},{key:"supportsResizeAttachments",get:function(){var {graphic:b}=this;if(!b)return!1;b=b.layer||b.sourceLayer;return b?.loaded&&"capabilities"in b&&"operations"in b.capabilities&&"supportsResizeAttachments"in b.capabilities.operations&&b.capabilities.operations.supportsResizeAttachments||!1}}]);return q}(f);k.__decorate([l.property()],f.prototype,"abilities",
void 0);k.__decorate([B.cast("abilities")],f.prototype,"castAbilities",null);k.__decorate([l.property()],f.prototype,"activeAttachmentInfo",void 0);k.__decorate([l.property()],f.prototype,"activeFileInfo",void 0);k.__decorate([l.property({readOnly:!0,type:x})],f.prototype,"attachmentInfos",void 0);k.__decorate([l.property()],f.prototype,"fileInfos",void 0);k.__decorate([l.property({type:z})],f.prototype,"graphic",void 0);k.__decorate([l.property()],f.prototype,"mode",void 0);k.__decorate([l.property({readOnly:!0})],
f.prototype,"state",null);k.__decorate([l.property()],f.prototype,"filesEnabled",void 0);k.__decorate([l.property({readOnly:!0})],f.prototype,"supportsResizeAttachments",null);return f=k.__decorate([C.subclass("esri.widgets.Attachments.AttachmentsViewModel")],f)});
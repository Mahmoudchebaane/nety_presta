// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Graphic ../../core/Collection ../../core/Error ../../core/lang ../../core/maybe ../../core/urlUtils ../../core/uuid ../../geometry/support/normalizeUtils ../mixins/EditBusLayer ../support/infoFor3D".split(" "),function(z,m,F,p,f,G,l,H,I,J,A,B){function q(){q=m._asyncToGenerator(function*(a,b,d,e={}){let c,h;const n={edits:d,result:new Promise((g,r)=>{c=g;h=r})};a.emit("apply-edits",n);try{const {results:g,edits:r}=yield K(a,b,d,e);b=L=>
L.filter(M=>!M.error).map(G.clone);const k={edits:r,addedFeatures:b(g.addFeatureResults),updatedFeatures:b(g.updateFeatureResults),deletedFeatures:b(g.deleteFeatureResults),addedAttachments:b(g.addAttachmentResults),updatedAttachments:b(g.updateAttachmentResults),deletedAttachments:b(g.deleteAttachmentResults)};g.editedFeatureResults?.length&&(k.editedFeatures=g.editedFeatureResults);if(k.addedFeatures.length||k.updatedFeatures.length||k.deletedFeatures.length||k.addedAttachments.length||k.updatedAttachments.length||
k.deletedAttachments.length)a.emit("edits",k),A.isEditBusLayer(a)&&A.editEventBus.emit("edits",{layer:a,event:k});c(k);return g}catch(g){throw h(g),g;}});return q.apply(this,arguments)}function K(a,b,d,e){return t.apply(this,arguments)}function t(){t=m._asyncToGenerator(function*(a,b,d,e){yield a.load();if(!b||null==b.applyEdits)throw new f(`${a.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:a});if(!a.editingEnabled)throw new f(`${a.type}-layer:editing-disabled`,
"Editing is disabled for layer",{layer:a});const {edits:c,options:h}=yield N(a,d,e);return c.addFeatures.length||c.updateFeatures.length||c.deleteFeatures.length||c.addAttachments.length||c.updateAttachments.length||c.deleteAttachments.length?{edits:c,results:yield b.applyEdits(c,h)}:{edits:c,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}});return t.apply(this,arguments)}function N(a,b,d){return u.apply(this,
arguments)}function u(){u=m._asyncToGenerator(function*(a,b,d){var e=b&&(b.addFeatures||b.updateFeatures||b.deleteFeatures),c=b&&(b.addAttachments||b.updateAttachments||b.deleteAttachments);const h=l.isSome(a.infoFor3D);if(!b||!e&&!c)throw new f(`${a.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!a.capabilities.data.isVersioned&&d&&d.gdbVersion)throw new f(`${a.type}-layer:invalid-parameter`,
"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!a.capabilities.editing.supportsRollbackOnFailure&&d&&d.rollbackOnFailureEnabled)throw new f(`${a.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!a.capabilities.editing.supportsGlobalId&&d&&d.globalIdUsed)throw new f(`${a.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");
if(!a.capabilities.editing.supportsGlobalId&&c)throw new f(`${a.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!d||!d.globalIdUsed)&&c)throw new f(`${a.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");e={...d};null!=e.rollbackOnFailureEnabled||a.capabilities.editing.supportsRollbackOnFailure||
(e.rollbackOnFailureEnabled=!0);if(!1===e.rollbackOnFailureEnabled&&"original-and-current-features"===e.returnServiceEditsOption)throw new f(`${a.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!a.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&e.returnServiceEditsInSourceSR)throw new f(`${a.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");
if(e.returnServiceEditsInSourceSR&&"original-and-current-features"!==e.returnServiceEditsOption)throw new f(`${a.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");c={...b};c.addFeatures=b&&p.isCollection(b.addFeatures)?b.addFeatures.toArray():c.addFeatures||[];c.updateFeatures=b&&p.isCollection(b.updateFeatures)?b.updateFeatures.toArray():c.updateFeatures||[];c.deleteFeatures=b&&p.isCollection(b.deleteFeatures)?
b.deleteFeatures.toArray():c.deleteFeatures||[];if(c.addFeatures.length&&!a.capabilities.operations.supportsAdd)throw new f(`${a.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(c.updateFeatures.length&&!a.capabilities.operations.supportsUpdate)throw new f(`${a.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(c.deleteFeatures.length&&!a.capabilities.operations.supportsDelete)throw new f(`${a.type}-layer:unsupported-operation`,"Layer does not support deleting features.");
c.addAttachments=c.addAttachments||[];c.updateAttachments=c.updateAttachments||[];c.deleteAttachments=c.deleteAttachments||[];c.addFeatures=c.addFeatures.map(C);c.updateFeatures=c.updateFeatures.map(C);c.addAssets=[];const n=d&&d.globalIdUsed||h;c.addFeatures.forEach(g=>{v(g,a,n)});c.updateFeatures.forEach(g=>{v(g,a,n);if("geometry"in g&&l.isSome(g.geometry)&&!a.capabilities.editing.supportsGeometryUpdate)throw new f(`${a.type}-layer:unsupported-operation`,"Layer does not support geometry updates.");
});c.deleteFeatures.forEach(g=>{v(g,a,n)});c.addAttachments.forEach(g=>D(g,a));c.updateAttachments.forEach(g=>D(g,a));h&&(yield O(c,a));return{edits:yield P(c),options:e}});return u.apply(this,arguments)}function v(a,b,d){if(d){if("attributes"in a&&!a.attributes[b.globalIdField])throw new f(`${b.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in a||a.globalId))throw new f(`${b.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true");
}if("geometry"in a&&l.isSome(a.geometry)){if(a.geometry.hasZ&&!1===b.capabilities.data.supportsZ)throw new f(`${b.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(a.geometry.hasM&&!1===b.capabilities.data.supportsM)throw new f(`${b.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.");}}function D(a,b){const {feature:d,attachment:e}=a;if(!d||"attributes"in d&&!d.attributes[b.globalIdField])throw new f(`${b.type}-layer:invalid-parameter`,
"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in d||d.globalId))throw new f(`${b.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!e.globalId)throw new f(`${b.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!e.data&&!e.uploadId)throw new f(`${b.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(e.data instanceof File&&e.data.name||e.name))throw new f(`${b.type}-layer:invalid-parameter`,
"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!b.capabilities.editing.supportsUploadWithItemId&&e.uploadId)throw new f(`${b.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"===typeof e.data&&(a=H.dataComponents(e.data))&&!a.isBase64)throw new f(`${b.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string");}function P(a){return w.apply(this,
arguments)}function w(){w=m._asyncToGenerator(function*(a){var b=a.addFeatures,d=a.updateFeatures,e=b.concat(d).map(c=>c.geometry);e=yield J.normalizeCentralMeridian(e);b=b.length;d=d.length;e.slice(0,b).forEach((c,h)=>a.addFeatures[h].geometry=c);e.slice(b,b+d).forEach((c,h)=>a.updateFeatures[h].geometry=c);return a});return w.apply(this,arguments)}function C(a){const b=new F;a.attributes||(a.attributes={});b.geometry=a.geometry;b.attributes=a.attributes;return b}function O(a,b){return x.apply(this,
arguments)}function x(){x=m._asyncToGenerator(function*(a,b){if(!l.isNone(b.infoFor3D)){var {infoFor3D:d}=b,e=!1;for(const c of d.editFormats)if(c===B.AssetType.GLTF_BINARY){e=!0;break}d=[];for(const c of a.addFeatures)d.push(E(c,a,b,e));for(const c of a.updateFeatures)d.push(E(c,a,b,e));a=yield Promise.allSettled(d);for(const c of a)if("rejected"===c.status)throw c.reason;}});return x.apply(this,arguments)}function E(a,b,d,e){return y.apply(this,arguments)}function y(){y=m._asyncToGenerator(function*(a,
b,d,e){if(!l.isNone(a.geometry)&&"mesh"===a.geometry.type){var c=a.geometry,h=d.globalIdField;if(!(l.isSome(d.parsedUrl)&&l.isSome(c.external)&&Array.isArray(c.external.source)&&1===c.external.source.length&&"source"in c.external.source[0]&&"string"==typeof c.external.source[0].source&&c.external.source[0].source.startsWith(d.parsedUrl.path))){if(!e)throw new f(`${d.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");
d=yield(yield c.toBinaryGLTF()).buffer();e=`{${I.generateUUID()}}`;c=`${e}.glb`;b.addAssets.push({featureGlobalId:a.getAttribute(h),assetMapGlobalId:e,assetName:c,flags:0,data:d.data,mimeType:d.type,assetType:B.AssetType.GLTF_BINARY,feature:a})}}});return y.apply(this,arguments)}z.applyEdits=function(a,b,d){return q.apply(this,arguments)};Object.defineProperties(z,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
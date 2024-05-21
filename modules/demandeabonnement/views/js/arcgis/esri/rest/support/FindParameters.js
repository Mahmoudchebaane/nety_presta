// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/SpatialReference".split(" "),function(g,c,a,h,d,n,k,l,m){a=function(e){function f(b){b=e.call(this,b)||this;b.contains=!0;b.dynamicLayerInfos=null;b.gdbVersion=null;b.geometryPrecision=null;b.layerDefinitions=null;b.layerIds=
null;b.maxAllowableOffset=null;b.outSpatialReference=null;b.returnGeometry=!1;b.searchFields=null;b.searchText=null;return b}g._inheritsLoose(f,e);return f}(h.JSONSupport);c.__decorate([d.property({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"contains",void 0);c.__decorate([d.property({type:[Object],json:{read:{source:"dynamicLayers"},write:{target:"dynamicLayers"}}})],a.prototype,"dynamicLayerInfos",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,
"gdbVersion",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"geometryPrecision",void 0);c.__decorate([d.property({type:[Object],json:{write:!0}})],a.prototype,"layerDefinitions",void 0);c.__decorate([d.property({type:[Number],json:{write:!0}})],a.prototype,"layerIds",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"maxAllowableOffset",void 0);c.__decorate([d.property({type:m,json:{read:{source:"outSR"},write:{target:"outSR"}}})],a.prototype,
"outSpatialReference",void 0);c.__decorate([d.property({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"returnGeometry",void 0);c.__decorate([d.property({type:[String],json:{write:!0}})],a.prototype,"searchFields",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"searchText",void 0);a=c.__decorate([l.subclass("esri.rest.support.FindParameters")],a);a.from=k.ensureType(a);return a});
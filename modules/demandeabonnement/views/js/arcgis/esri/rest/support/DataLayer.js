// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./networkEnums ../../geometry/support/jsonUtils".split(" "),function(k,c,l,a,m,d,q,r,e,n,f,p){a=function(g){function h(b){b=g.call(this,b)||this;b.doNotLocateOnRestrictedElements=
null;b.geometry=null;b.geometryType=null;b.name=null;b.spatialRelationship=null;b.type="layer";b.where=null;return b}k._inheritsLoose(h,g);return h}(a.ClonableMixin(m.JSONSupport));c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"doNotLocateOnRestrictedElements",void 0);c.__decorate([d.property({types:l.geometryTypes,json:{read:p.fromJSON,write:!0}})],a.prototype,"geometry",void 0);c.__decorate([e.enumeration(f.geometryTypeJsonMap)],a.prototype,"geometryType",void 0);c.__decorate([d.property({type:String,
json:{name:"layerName",write:!0}})],a.prototype,"name",void 0);c.__decorate([e.enumeration(f.spatialRelationshipJsonMap,{name:"spatialRel"})],a.prototype,"spatialRelationship",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"type",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);return a=c.__decorate([n.subclass("esri.rest.support.DataLayer")],a)});
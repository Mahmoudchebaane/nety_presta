// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/Point".split(" "),function(g,c,a,d,m,n,h,k,l){a=function(e){function f(b){b=e.call(this,b)||this;b.address=null;b.attributes=null;b.extent=null;b.location=null;b.score=null;return b}g._inheritsLoose(f,e);return f}(a.JSONSupport);
c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"address",void 0);c.__decorate([d.property({type:Object,json:{write:!0}})],a.prototype,"attributes",void 0);c.__decorate([d.property({type:k,json:{write:!0}})],a.prototype,"extent",void 0);c.__decorate([d.property({type:l,json:{write:!0}})],a.prototype,"location",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"score",void 0);return a=c.__decorate([h.subclass("esri.rest.support.AddressCandidate")],a)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../rest/support/fileFormat ../../rest/support/layoutTemplate".split(" "),function(g,c,a,d,m,n,h,k,l){a=function(e){function f(b){b=e.call(this,b)||this;b.description=null;b.format=null;b.label=null;b.layout=null;b.layoutOptions=null;return b}g._inheritsLoose(f,
e);return f}(a.JSONSupport);c.__decorate([d.property()],a.prototype,"description",void 0);c.__decorate([d.property({json:{read:k.fromJSON}})],a.prototype,"format",void 0);c.__decorate([d.property()],a.prototype,"label",void 0);c.__decorate([d.property({json:{read:l.fromJSON}})],a.prototype,"layout",void 0);c.__decorate([d.property()],a.prototype,"layoutOptions",void 0);return a=c.__decorate([h.subclass("esri.widgets.Print.CustomTemplate")],a)});
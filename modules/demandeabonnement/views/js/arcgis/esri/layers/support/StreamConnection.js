// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/Evented ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(c,d,f,a,g,l,m,h){a=function(e){function b(){return e.apply(this,arguments)||this}c._inheritsLoose(b,e);b.prototype.onFeature=function(k){this.emit("data-received",k)};c._createClass(b,[{key:"connectionError",get:function(){return this.errorString?
new f("stream-connection",this.errorString):null}}]);return b}(a.EventedAccessor);d.__decorate([g.property({readOnly:!0})],a.prototype,"connectionError",null);return a=d.__decorate([h.subclass("esri.layers.support.StreamConnection")],a)});
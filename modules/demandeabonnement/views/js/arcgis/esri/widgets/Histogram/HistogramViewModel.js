// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,b,h,d,m,n,l){b=function(k){function f(a){a=k.call(this,a)||this;a.average=null;a.bins=null;a.max=null;a.min=null;return a}g._inheritsLoose(f,k);g._createClass(f,[{key:"binRange",get:function(){const {bins:a}=this;return a&&
1<a.length?a[a.length-1].maxValue-a[0].minValue:0}},{key:"labelFormatFunction",set:function(a){this._set("labelFormatFunction",a)}},{key:"range",get:function(){const {max:a,min:e}=this;return h.isSome(a)&&h.isSome(e)?a-e:0}},{key:"state",get:function(){const {bins:a,range:e}=this;return 0<e&&a&&a.length?"ready":"disabled"}}]);return f}(b);c.__decorate([d.property()],b.prototype,"average",void 0);c.__decorate([d.property()],b.prototype,"bins",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,
"binRange",null);c.__decorate([d.property()],b.prototype,"labelFormatFunction",null);c.__decorate([d.property()],b.prototype,"max",void 0);c.__decorate([d.property()],b.prototype,"min",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"range",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);return b=c.__decorate([l.subclass("esri.widgets.Histogram.HistogramViewModel")],b)});
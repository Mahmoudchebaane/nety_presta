// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./ChartMediaInfoValueSeries".split(" "),function(h,c,a,k,d,n,l,m){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.fields=[];b.normalizeField=null;b.series=[];b.tooltipField=null;return b}h._inheritsLoose(f,g);f.prototype.clone=
function(){return new e({fields:k.clone(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})};return f}(a.JSONSupport);c.__decorate([d.property({type:[String],json:{write:!0}})],a.prototype,"fields",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"normalizeField",void 0);c.__decorate([d.property({type:[m],json:{read:!1}})],a.prototype,"series",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"tooltipField",void 0);
return a=e=c.__decorate([l.subclass("esri.popup.content.support.ChartMediaInfoValue")],a)});
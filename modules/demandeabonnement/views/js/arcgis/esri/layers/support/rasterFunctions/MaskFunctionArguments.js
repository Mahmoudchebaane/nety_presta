// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./BaseFunctionArguments ./pixelUtils".split(" "),function(h,b,d,a,n,k,l,m){var e;a=e=function(g){function f(){var c=g.apply(this,arguments)||this;c.includedRanges=null;c.noDataValues=null;c.noDataInterpretation=m.NoDataInterpretation.matchAny;return c}h._inheritsLoose(f,
g);f.prototype.clone=function(){return new e({includedRanges:this.includedRanges?.slice()??[],noDataValues:this.noDataValues?.slice()??[],noDataInterpretation:this.noDataInterpretation})};return f}(l);b.__decorate([d.property({json:{write:!0}})],a.prototype,"includedRanges",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"noDataValues",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"noDataInterpretation",void 0);return a=e=b.__decorate([k.subclass("esri.layers.support.rasterFunctions.MaskFunctionArguments")],
a)});
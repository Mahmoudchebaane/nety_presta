// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./bandIndexUtils ./BaseRasterFunction ./NDVIFunctionArguments".split(" "),function(m,d,n,e,c,w,p,q,r,t){c=function(k){function f(){var a=k.apply(this,arguments)||this;a.functionName="NDVI";a.functionArguments=null;a.rasterArgumentNames=["raster"];
return a}m._inheritsLoose(f,k);var l=f.prototype;l._bindSourceRasters=function(){const {scaled:a}=this.functionArguments;this.outputPixelType=this._getOutputPixelType(a?"u8":"f32");const b=this.sourceRasterInfos[0].clone();b.pixelType=this.outputPixelType;b.colormap=null;b.histograms=null;const [g,h,u,v]=a?[0,200,100,10]:[-1,1,0,.1];b.statistics=[{min:g,max:h,avg:u,stddev:v}];this.rasterInfo=b;return{success:!0}};l._processPixels=function(a){a=a.pixelBlocks?.[0];if(n.isNone(a))return null;const {visibleBandID:b,
infraredBandID:g,scaled:h}=this.functionArguments;return q.calculateNDVI(a,b,g,h)};return f}(r);d.__decorate([e.property({json:{write:!0,name:"rasterFunction"}})],c.prototype,"functionName",void 0);d.__decorate([e.property({type:t,json:{write:!0,name:"rasterFunctionArguments"}})],c.prototype,"functionArguments",void 0);d.__decorate([e.property()],c.prototype,"rasterArgumentNames",void 0);return c=d.__decorate([p.subclass("esri.layers.support.rasterFunctions.NDVIFunction")],c)});
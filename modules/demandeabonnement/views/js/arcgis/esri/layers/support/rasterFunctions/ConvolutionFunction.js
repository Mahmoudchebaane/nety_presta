// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./ConvolutionFunctionArguments ./convolutionUtils".split(" "),function(q,g,r,h,d,x,t,u,v,c){d=function(n){function k(){var a=n.apply(this,arguments)||this;a.functionName="Convolution";a.rasterArgumentNames=["raster"];return a}
q._inheritsLoose(k,n);var p=k.prototype;p._bindSourceRasters=function(){const {kernelType:a,rows:e,cols:l,kernel:m}=this.functionArguments;if(!c.convolutionKernels.has(a))return{success:!1,error:`convolution-function: the specified kernel type is not supported ${a}`};if(a!==c.ConvolutionKernel.None&&e*l!==m.length)return{success:!1,error:"convolution-function: the specified rows and cols do not match the length of the kernel"};var b=this.sourceRasterInfos[0];this.outputPixelType=this._getOutputPixelType(b.pixelType);
b=b.clone();b.pixelType=this.outputPixelType;const f=[c.ConvolutionKernel.None,c.ConvolutionKernel.Sharpen,c.ConvolutionKernel.Sharpen2,c.ConvolutionKernel.Sharpening3x3,c.ConvolutionKernel.Sharpening5x5];"u8"===this.outputPixelType||f.includes(a)||(b.statistics=null,b.histograms=null);this.rasterInfo=b;return{success:!0}};p._processPixels=function(a){a=a.pixelBlocks?.[0];if(r.isNone(a)||this.functionArguments.kernelType===c.ConvolutionKernel.None)return a;let {kernel:e,rows:l,cols:m}=this.functionArguments;
const b=e.reduce((f,w)=>f+w);0!==b&&1!==b&&(e=e.map(f=>f/b));return c.convolute(a,{kernel:e,rows:l,cols:m,outputPixelType:this.outputPixelType})};return k}(u);g.__decorate([h.property({json:{write:!0,name:"rasterFunction"}})],d.prototype,"functionName",void 0);g.__decorate([h.property({type:v,json:{write:!0,name:"rasterFunctionArguments"}})],d.prototype,"functionArguments",void 0);g.__decorate([h.property()],d.prototype,"rasterArgumentNames",void 0);return d=g.__decorate([t.subclass("esri.layers.support.rasterFunctions.ConvolutionFunction")],
d)});
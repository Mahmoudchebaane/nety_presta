// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./pixelUtils ./StretchFunctionArguments ./stretchUtils".split(" "),function(n,e,p,f,c,x,q,r,t,u,g){c=function(k){function h(){var a=k.apply(this,arguments)||this;a.functionName="Stretch";a.functionArguments=null;a.rasterArgumentNames=
["raster"];a.lookup=null;a.cutOffs=null;return a}n._inheritsLoose(h,k);var l=h.prototype;l._bindSourceRasters=function(){this.cutOffs=this.lookup=null;var a=this.sourceRasterInfos[0];const {pixelType:b}=a;var {functionArguments:d}=this;const {dynamicRangeAdjustment:m,gamma:v,useGamma:w}=d;!m&&["u8","u16","s8","s16"].includes(b)?(d=g.getStretchCutoff(d.toJSON(),{rasterInfo:a}),this.lookup=g.createStretchLUT({pixelType:b,...d,gamma:w?v:null})):m&&(this.cutOffs=g.getStretchCutoff(d.toJSON(),{rasterInfo:a}));
this.outputPixelType=this._getOutputPixelType(b);a=a.clone();a.pixelType=this.outputPixelType;a.statistics=null;a.histograms=null;"u8"===this.outputPixelType&&(a.keyProperties.DataType="processed");this.rasterInfo=a;return{success:!0}};l._processPixels=function(a){a=a.pixelBlocks?.[0];if(p.isNone(a))return a;var {lookup:b}=this;if(b)return t.lookupPixels(a,{...b,outputPixelType:this.rasterInfo.pixelType});({functionArguments:b}=this);const d=this.cutOffs||g.getStretchCutoff(b.toJSON(),{rasterInfo:this.sourceRasterInfos[0],
pixelBlock:a});return g.stretch(a,{...d,gamma:b.useGamma?b.gamma:null,outputPixelType:this.outputPixelType})};return h}(r);e.__decorate([f.property({json:{write:!0,name:"rasterFunction"}})],c.prototype,"functionName",void 0);e.__decorate([f.property({type:u,json:{write:!0,name:"rasterFunctionArguments"}})],c.prototype,"functionArguments",void 0);e.__decorate([f.property()],c.prototype,"rasterArgumentNames",void 0);e.__decorate([f.property({json:{write:!0}})],c.prototype,"lookup",void 0);e.__decorate([f.property({json:{write:!0}})],
c.prototype,"cutOffs",void 0);return c=e.__decorate([q.subclass("esri.layers.support.rasterFunctions.StretchFunction")],c)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/OrderIndependentTransparency ../lib/Program ../lib/RenderSlot ../lib/StencilUtils ../lib/TransparencyPassType ../lib/VertexAttribute ../../../../chunks/LineMarker.glsl ../../../webgl/renderState".split(" "),function(u,n,v,p,w,k,e,x,q,a,y,c,z,d){const r=new Map([[c.VertexAttribute.POSITION,0],[c.VertexAttribute.UV0,
2],[c.VertexAttribute.AUXPOS1,3],[c.VertexAttribute.NORMAL,4],[c.VertexAttribute.COLOR,5],[c.VertexAttribute.COLORFEATUREATTRIBUTE,5],[c.VertexAttribute.SIZE,6],[c.VertexAttribute.SIZEFEATUREATTRIBUTE,6],[c.VertexAttribute.OPACITYFEATUREATTRIBUTE,7]]);k=function(g){function f(){return g.apply(this,arguments)||this}v._inheritsLoose(f,g);var l=f.prototype;l.initializeProgram=function(b){return new x.Program(b.rctx,f.shader.get().build(this.configuration),r)};l._makePipelineState=function(b,m){const h=
this.configuration,t=b===y.TransparencyPassType.NONE;return d.makePipelineState({blending:h.output===p.ShaderOutput.Color||h.output===p.ShaderOutput.Alpha?t?e.blendingDefault:e.oitBlending(b):null,depthTest:{func:e.oitDepthTest(b)},depthWrite:t?h.writeDepth&&d.defaultDepthWriteParams:e.oitDepthWrite(b),colorWrite:d.defaultColorWriteParams,stencilWrite:h.hasOccludees?a.stencilWriteMaskOn:null,stencilTest:h.hasOccludees?m?a.stencilToolMaskBaseParams:a.stencilBaseAllZerosParams:null,polygonOffset:{factor:0,
units:-10}})};l.initializePipeline=function(){this.configuration.occluder&&(this._occluderPipelineTransparent=d.makePipelineState({blending:e.blendingDefault,depthTest:a.depthCompareAlways,depthWrite:null,colorWrite:d.defaultColorWriteParams,stencilWrite:null,stencilTest:a.stencilToolTransparentOccluderParams}),this._occluderPipelineOpaque=d.makePipelineState({blending:e.blendingDefault,depthTest:a.depthCompareAlways,depthWrite:null,colorWrite:d.defaultColorWriteParams,stencilWrite:a.stencilWriteMaskOff,
stencilTest:a.stencilToolMaskOccluderParams}),this._occluderPipelineMaskWrite=d.makePipelineState({blending:null,depthTest:a.depthCompareLess,depthWrite:null,colorWrite:null,stencilWrite:a.stencilWriteMaskOn,stencilTest:a.stencilToolMaskBaseParams}));this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0);return this._makePipelineState(this.configuration.transparencyPassType,!1)};l.getPipelineState=function(b,m){return m?this._occludeePipelineState:this.configuration.occluder?
b===q.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent:b===q.RenderSlot.OCCLUDER_MATERIAL?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:g.prototype.getPipelineState.call(this,b,m)};return f}(k.ShaderTechnique);k.shader=new w.ReloadableShaderModule(z.LineMarker,()=>new Promise((g,f)=>u(["./LineMarker.glsl"],g,f)));n.LineMarkerTechnique=k;n.vertexAttributeLocations=r;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
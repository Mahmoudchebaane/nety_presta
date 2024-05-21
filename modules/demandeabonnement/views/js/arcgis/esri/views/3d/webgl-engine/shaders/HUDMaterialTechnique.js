// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../ViewingMode ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../lib/TransparencyPassType ../../../../chunks/HUDMaterial.glsl ../../../webgl/context-util ../../../webgl/enums ../../../webgl/renderState".split(" "),function(r,m,n,t,e,u,f,v,w,x,p,y,z,d,g){f=function(h){function c(){return h.apply(this,
arguments)||this}n._inheritsLoose(c,h);var k=c.prototype;k.initializeConfiguration=function(b,a){a.hasWebGL2Context=b.rctx.type===z.ContextType.WEBGL2;a.spherical=b.viewingMode===t.ViewingMode.Global};k.initializeProgram=function(b){return new x.Program(b.rctx,c.shader.get().build(this.configuration),v.Default3D)};k._setPipelineState=function(b){const a=this.configuration,q=b===p.TransparencyPassType.NONE;var l=b===p.TransparencyPassType.FrontFace;const B=this.configuration.hasPolygonOffset&&A;l=
(q||l)&&a.output!==e.ShaderOutput.Highlight?(a.depthEnabled||a.occlusionPass)&&g.defaultDepthWriteParams:null;return g.makePipelineState({blending:a.output===e.ShaderOutput.Color||a.output===e.ShaderOutput.Alpha||a.output===e.ShaderOutput.Highlight?q?C:w.oitBlending(b):null,depthTest:{func:d.CompareFunction.LEQUAL},depthWrite:l,colorWrite:g.defaultColorWriteParams,polygonOffset:B})};k.initializePipeline=function(){return this._setPipelineState(this.configuration.transparencyPassType)};n._createClass(c,
[{key:"primitiveType",get:function(){return this.configuration.occlusionPass?d.PrimitiveType.POINTS:d.PrimitiveType.TRIANGLES}}]);return c}(f.ShaderTechnique);f.shader=new u.ReloadableShaderModule(y.HUDMaterial,()=>new Promise((h,c)=>r(["./HUDMaterial.glsl"],h,c)));const A={factor:0,units:-4},C=g.simpleBlendingParams(d.BlendFactor.ONE,d.BlendFactor.ONE_MINUS_SRC_ALPHA);m.HUDMaterialTechnique=f;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
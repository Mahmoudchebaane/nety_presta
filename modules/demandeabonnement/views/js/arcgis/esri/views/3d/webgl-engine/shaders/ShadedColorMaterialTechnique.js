// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/basicInterfaces ../lib/OrderIndependentTransparency ../lib/Program ../lib/TransparencyPassType ../lib/VertexAttribute ../materials/DefaultTechniqueConfiguration ../../../../chunks/ShadedColorMaterial.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),
function(z,k,v,c,l,b,m,d,w,n,A,p,r,B,C,t,q){m=function(f){function e(){return f.apply(this,arguments)||this}v._inheritsLoose(e,f);var a=e.prototype;a.initializeProgram=function(g){return new A.Program(g.rctx,e.shader.get().build(this.configuration),x)};a._setPipelineState=function(g){const h=this.configuration,u=g===p.TransparencyPassType.NONE,y=g===p.TransparencyPassType.FrontFace;return q.makePipelineState({blending:h.output!==l.ShaderOutput.Color&&h.output!==l.ShaderOutput.Alpha||!h.transparent?
null:u?n.blendingDefault:n.oitBlending(g),culling:q.cullingParams(h.cullFace),depthTest:{func:y?t.CompareFunction.LESS:h.shadingEnabled?t.CompareFunction.LEQUAL:t.CompareFunction.LESS},depthWrite:u?h.writeDepth&&q.defaultDepthWriteParams:n.oitDepthWrite(g),colorWrite:q.defaultColorWriteParams,polygonOffset:u||y?null:n.OITPolygonOffset})};a.initializePipeline=function(){return this._setPipelineState(this.configuration.transparencyPassType)};return e}(m.ShaderTechnique);m.shader=new b.ReloadableShaderModule(C.ShadedColorMaterialShader,
()=>new Promise((f,e)=>z(["./ShadedColorMaterial.glsl"],f,e)));b=function(f){function e(){var a=f.apply(this,arguments)||this;a.output=l.ShaderOutput.Color;a.cullFace=w.CullFaceOptions.None;a.transparencyPassType=p.TransparencyPassType.NONE;a.hasSlicePlane=!1;a.transparent=!1;a.writeDepth=!0;a.screenSizeEnabled=!0;a.shadingEnabled=!0;a.hasMultipassTerrain=!1;a.cullAboveGround=!1;return a}v._inheritsLoose(e,f);return e}(B.DefaultTechniqueConfiguration);c.__decorate([d.parameter({count:l.ShaderOutput.COUNT})],
b.prototype,"output",void 0);c.__decorate([d.parameter({count:w.CullFaceOptions.COUNT})],b.prototype,"cullFace",void 0);c.__decorate([d.parameter({count:p.TransparencyPassType.COUNT})],b.prototype,"transparencyPassType",void 0);c.__decorate([d.parameter()],b.prototype,"hasSlicePlane",void 0);c.__decorate([d.parameter()],b.prototype,"transparent",void 0);c.__decorate([d.parameter()],b.prototype,"writeDepth",void 0);c.__decorate([d.parameter()],b.prototype,"screenSizeEnabled",void 0);c.__decorate([d.parameter()],
b.prototype,"shadingEnabled",void 0);c.__decorate([d.parameter()],b.prototype,"hasMultipassTerrain",void 0);c.__decorate([d.parameter()],b.prototype,"cullAboveGround",void 0);const x=new Map([[r.VertexAttribute.POSITION,0],[r.VertexAttribute.NORMAL,1],[r.VertexAttribute.OFFSET,2]]);k.ShadedColorMaterialTechnique=m;k.ShadedColorMaterialTechniqueConfiguration=b;k.vertexAttributeLocations=x;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
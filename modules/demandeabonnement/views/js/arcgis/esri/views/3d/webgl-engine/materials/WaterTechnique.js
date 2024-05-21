// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../ViewingMode ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/shading/WaterDistortion.glsl ../core/shaderLibrary/util/DoublePrecision.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../lib/TransparencyPassType ./DefaultTechniqueConfiguration ../../../../chunks/WaterSurface.glsl ../../../webgl/context-util ../../../webgl/renderState".split(" "),
function(v,l,q,c,w,m,x,r,y,a,n,d,z,k,A,p,B,C,D,t){r=function(g){function e(){return g.apply(this,arguments)||this}q._inheritsLoose(e,g);return e}(r.WaterDistortionPassParameters);n=function(g){function e(){return g.apply(this,arguments)||this}q._inheritsLoose(e,g);var b=e.prototype;b.initializeConfiguration=function(f,h){h.hasWebGL2Context=f.rctx.type===D.ContextType.WEBGL2;h.spherical=f.viewingMode===w.ViewingMode.Global;h.doublePrecisionRequiresObfuscation=y.doublePrecisionRequiresObfuscation(f.rctx)};
b.initializeProgram=function(f){return new A.Program(f.rctx,e.shader.get().build(this.configuration),z.Default3D)};b._setPipelineState=function(f){const h=this.configuration,u=f===p.TransparencyPassType.NONE,E=f===p.TransparencyPassType.FrontFace;return t.makePipelineState({blending:h.output!==m.ShaderOutput.Normal&&h.output!==m.ShaderOutput.Highlight&&h.transparent?u?k.blendingDefault:k.oitBlending(f):null,depthTest:{func:k.oitDepthTest(f)},depthWrite:u?h.writeDepth&&t.defaultDepthWriteParams:k.oitDepthWrite(f),
colorWrite:t.defaultColorWriteParams,polygonOffset:u||E?null:k.getOITPolygonOffset(h.enableOffset)})};b.initializePipeline=function(){return this._setPipelineState(this.configuration.transparencyPassType)};return e}(n.ShaderTechnique);n.shader=new a.ReloadableShaderModule(C.WaterSurface,()=>new Promise((g,e)=>v(["../shaders/WaterSurface.glsl"],g,e)));a=function(g){function e(){var b=g.apply(this,arguments)||this;b.output=m.ShaderOutput.Color;b.transparencyPassType=p.TransparencyPassType.NONE;b.spherical=
!1;b.receiveShadows=!1;b.hasSlicePlane=!1;b.transparent=!1;b.enableOffset=!0;b.writeDepth=!1;b.hasScreenSpaceReflections=!1;b.doublePrecisionRequiresObfuscation=!1;b.hasCloudsReflections=!1;b.isDraped=!1;b.hasMultipassTerrain=!1;b.cullAboveGround=!1;return b}q._inheritsLoose(e,g);return e}(B.DefaultTechniqueConfiguration);c.__decorate([d.parameter({count:m.ShaderOutput.COUNT})],a.prototype,"output",void 0);c.__decorate([d.parameter({count:p.TransparencyPassType.COUNT})],a.prototype,"transparencyPassType",
void 0);c.__decorate([d.parameter()],a.prototype,"spherical",void 0);c.__decorate([d.parameter()],a.prototype,"receiveShadows",void 0);c.__decorate([d.parameter()],a.prototype,"hasSlicePlane",void 0);c.__decorate([d.parameter()],a.prototype,"transparent",void 0);c.__decorate([d.parameter()],a.prototype,"enableOffset",void 0);c.__decorate([d.parameter()],a.prototype,"writeDepth",void 0);c.__decorate([d.parameter()],a.prototype,"hasScreenSpaceReflections",void 0);c.__decorate([d.parameter()],a.prototype,
"doublePrecisionRequiresObfuscation",void 0);c.__decorate([d.parameter()],a.prototype,"hasCloudsReflections",void 0);c.__decorate([d.parameter()],a.prototype,"isDraped",void 0);c.__decorate([d.parameter()],a.prototype,"hasMultipassTerrain",void 0);c.__decorate([d.parameter()],a.prototype,"cullAboveGround",void 0);c.__decorate([d.parameter({constValue:x.PBRMode.Water})],a.prototype,"pbrMode",void 0);c.__decorate([d.parameter({constValue:!0})],a.prototype,"useCustomDTRExponentForWater",void 0);c.__decorate([d.parameter({constValue:!0})],
a.prototype,"highStepCount",void 0);c.__decorate([d.parameter({constValue:!1})],a.prototype,"useFillLights",void 0);l.WaterMaterialPassParameters=r;l.WaterTechnique=n;l.WaterTechniqueConfiguration=a;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
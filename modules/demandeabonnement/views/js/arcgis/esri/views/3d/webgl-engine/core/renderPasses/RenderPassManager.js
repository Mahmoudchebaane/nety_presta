// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/mat3 ../../../../../chunks/mat3f64 ../../../../../chunks/mat4 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ./AllRenderPasses ./RenderPass ../shaderLibrary/ShaderOutput ../util/TwoVectorPosition ../../lib/depthRange ../../lib/RenderSlot".split(" "),function(r,u,v,l,w,x,k,y,d,f,c,z,A,g){let B=function(){function m(a,b){this.rctx=a;this.shaderTechniqueRepository=b;this.canRender=
!0;this._materialPassParameters=new d.MaterialPassParameters;this._shadowPassParameters=new d.ShadowMapPassParameters;this._highlightPassParameters=new d.HighlightPassParameters;this._systems=new Set;this._passes={materialOpaque:new f.RenderPass(a,b),materialTransparent:new f.RenderPass(a,b,f.RenderPassSorting.BackToFront),materialIntegratedMesh:new f.RenderPass(a,b),shadowMap:new f.RenderPass(a,b),highlight:new f.RenderPass(a,b),highlightIntegratedMesh:new f.RenderPass(a,b),highlightShadowMap:new f.RenderPass(a,
b),defaultShadowMap:new f.RenderPass(a,b)}}var e=m.prototype;e.register=function(a){this._systems.add(a)};e.prepareRender=function(a){if(0!==this._systems.size){for(const b of Object.values(this._passes))b.prepareSubmit();this._systems.forEach(b=>b.submit(this._passes,a.bindParameters));for(const b of Object.values(this._passes))b.finishSubmit();this.shaderTechniqueRepository.frameUpdate()}};e.render=function(a){if(0!==this._systems.size)switch(this._configure(a),a.bindParameters.slot){case g.RenderSlot.OPAQUE_MATERIAL:switch(a.output){case c.ShaderOutput.Color:return this._materialPassParameters.subPass=
d.MaterialSubPass.Color,this._passes.materialOpaque.dispatch(this._materialPassParameters,a.bindParameters);case c.ShaderOutput.Depth:return this._materialPassParameters.subPass=d.MaterialSubPass.Depth,this._passes.materialOpaque.dispatch(this._materialPassParameters,a.bindParameters);case c.ShaderOutput.Normal:return this._materialPassParameters.subPass=d.MaterialSubPass.Normal,this._passes.materialOpaque.dispatch(this._materialPassParameters,a.bindParameters);case c.ShaderOutput.Highlight:return this._passes.highlight.dispatch(this._highlightPassParameters,
a.bindParameters);case c.ShaderOutput.Shadow:return this._passes.shadowMap.dispatch(this._shadowPassParameters,a.bindParameters);case c.ShaderOutput.ShadowHighlight:return this._passes.highlightShadowMap.dispatch(this._shadowPassParameters,a.bindParameters);case c.ShaderOutput.ShadowExludeHighlight:return this._passes.defaultShadowMap.dispatch(this._shadowPassParameters,a.bindParameters);case c.ShaderOutput.ObjectAndLayerIdColor:return this._materialPassParameters.subPass=d.MaterialSubPass.ObjectAndLayerIdColor,
this._passes.materialOpaque.dispatch(this._materialPassParameters,a.bindParameters)}break;case g.RenderSlot.TRANSPARENT_MATERIAL:switch(a.output){case c.ShaderOutput.Color:return this._materialPassParameters.subPass=d.MaterialSubPass.Color,this._passes.materialTransparent.dispatch(this._materialPassParameters,a.bindParameters);case c.ShaderOutput.Alpha:return this._materialPassParameters.subPass=d.MaterialSubPass.Alpha,this._passes.materialTransparent.dispatch(this._materialPassParameters,a.bindParameters);
case c.ShaderOutput.Depth:return this._materialPassParameters.subPass=d.MaterialSubPass.Depth,this._passes.materialTransparent.dispatch(this._materialPassParameters,a.bindParameters);case c.ShaderOutput.Normal:return this._materialPassParameters.subPass=d.MaterialSubPass.Normal,this._passes.materialTransparent.dispatch(this._materialPassParameters,a.bindParameters);case c.ShaderOutput.ObjectAndLayerIdColor:return this._materialPassParameters.subPass=d.MaterialSubPass.ObjectAndLayerIdColor,this._passes.materialTransparent.dispatch(this._materialPassParameters,
a.bindParameters)}break;case g.RenderSlot.INTEGRATED_MESH:switch(a.output){case c.ShaderOutput.Color:return this._materialPassParameters.subPass=d.MaterialSubPass.Color,this._passes.materialIntegratedMesh.dispatch(this._materialPassParameters,a.bindParameters);case c.ShaderOutput.Depth:return this._materialPassParameters.subPass=d.MaterialSubPass.Depth,this._passes.materialIntegratedMesh.dispatch(this._materialPassParameters,a.bindParameters);case c.ShaderOutput.Normal:return this._materialPassParameters.subPass=
d.MaterialSubPass.Normal,this._passes.materialIntegratedMesh.dispatch(this._materialPassParameters,a.bindParameters);case c.ShaderOutput.Highlight:return this._passes.highlightIntegratedMesh.dispatch(this._highlightPassParameters,a.bindParameters);case c.ShaderOutput.ObjectAndLayerIdColor:return this._materialPassParameters.subPass=d.MaterialSubPass.ObjectAndLayerIdColor,this._passes.materialIntegratedMesh.dispatch(this._materialPassParameters,a.bindParameters)}}};e.notifyDirty=function(){this._context.requestRender()};
e.slots=function(){return[g.RenderSlot.OPAQUE_MATERIAL,g.RenderSlot.TRANSPARENT_MATERIAL,g.RenderSlot.INTEGRATED_MESH]};e.initializeRenderContext=function(a){this._context=a};e.uninitializeRenderContext=function(){};e.queryDepthRange=function(a){const b={near:Infinity,far:-Infinity};this._systems.forEach(h=>{h=h.queryShadowCasterDepthRange(a);v.isSome(h)&&A.union(b,h,b)});return b};e._configure=function(a){this._updateParameters(a,a.output===c.ShaderOutput.Shadow||a.output===c.ShaderOutput.ShadowHighlight||
a.output===c.ShaderOutput.ShadowExludeHighlight?this._shadowPassParameters:a.output===c.ShaderOutput.Highlight?this._highlightPassParameters:this._materialPassParameters)};e._updateParameters=function(a,b){const h=a.bindParameters.camera,n=h.viewInverseTransposeMatrix;k.set(p,n[3],n[7],n[11]);q.set(p);k.copy(b.transformWorldFromViewTH,q.high);k.copy(b.transformWorldFromViewTL,q.low);k.copy(b.slicePlaneLocalOrigin,p);l.fromMat4(b.transformViewFromCameraRelativeRS,h.viewMatrix);x.copy(b.transformProjFromView,
h.projectionMatrix);b.identifier===d.RenderPassIdentifier.Material&&(this._materialPassParameters.transparent=a.bindParameters.slot===g.RenderSlot.TRANSPARENT_MATERIAL,this._materialPassParameters.integratedMesh=a.bindParameters.slot===g.RenderSlot.INTEGRATED_MESH,l.transpose(t,b.transformViewFromCameraRelativeRS),l.invert(b.transformNormalViewFromGlobal,t))};u._createClass(m,[{key:"needsHighlight",get:function(){return 0<this._passes.highlight.count||0<this._passes.highlightIntegratedMesh.count}},
{key:"needsTransparentPass",get:function(){return 0<this._passes.materialTransparent.count}}]);return m}();const p=y.create(),t=w.create(),q=new z.TwoVectorPosition;r.RenderPassManager=B;Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
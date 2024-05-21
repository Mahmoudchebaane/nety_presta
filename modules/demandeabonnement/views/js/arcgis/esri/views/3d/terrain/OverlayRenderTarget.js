// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/has ./interfaces ./OverlayFramebufferObject ../webgl-engine/core/shaderLibrary/ShaderOutput".split(" "),function(h,l,m,d,n,e){let c=function(g,f,a,b=!0){this.output=f;this.type=a;this.valid=!1;this.lastUsed=Infinity;this.fbo=new n.OverlayFramebufferObject(g,b)},p=function(){function g(a){this.renderTargets=[new c(a,e.ShaderOutput.Color,d.RenderTargetType.Color),new c(a,e.ShaderOutput.Color,d.RenderTargetType.ColorNoRasterImage),
new c(a,e.ShaderOutput.Highlight,d.RenderTargetType.Highlight,!1),new c(a,e.ShaderOutput.Normal,d.RenderTargetType.Water),new c(a,e.ShaderOutput.Color,d.RenderTargetType.Occluded)];m("enable-feature:objectAndLayerId-rendering")&&this.renderTargets.push(new c(a,e.ShaderOutput.ObjectAndLayerIdColor,d.RenderTargetType.ObjectAndLayerIdColor))}var f=g.prototype;f.getTarget=function(a){return this.renderTargets[a].fbo};f.dispose=function(){for(const a of this.renderTargets)a.fbo.dispose()};f.disposeRenderTargetMemory=
function(){for(const a of this.renderTargets)a.fbo.disposeRenderTargetMemory()};f.validateUsageForTarget=function(a,b,k){if(a)b.lastUsed=k;else if(1E3<k-b.lastUsed)b.fbo.disposeRenderTargetMemory(),b.lastUsed=Infinity;else if(Infinity>b.lastUsed)return!0;return!1};l._createClass(g,[{key:"gpuMemoryUsage",get:function(){return this.renderTargets.reduce((a,b)=>a+b.fbo.gpuMemoryUsage,0)}}]);return g}();h.OverlayRenderTarget=p;h.RenderTargetDescriptor=c;Object.defineProperties(h,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});
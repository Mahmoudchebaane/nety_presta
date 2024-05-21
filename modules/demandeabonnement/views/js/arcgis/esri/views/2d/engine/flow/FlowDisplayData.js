// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Logger"],function(e,f){return function(){function d(a,b,g,h){this.state={name:"created"};this.flowStyle=a;this.extent=b;this.size=g;this.pixelRatio=h}var c=d.prototype;c.load=function(){var a=e._asyncToGenerator(function*(){const b=new AbortController;this.state={name:"loading",abortController:b};this.state={name:"loaded",resources:yield this.flowStyle.load({extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},b.signal)}});
return function(){return a.apply(this,arguments)}}();c.attach=function(a){if("loaded"!==this.state.name)f.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");else{var b=this.state.resources;b.attach(a);this.state={name:"attached",resources:b}}};c.detach=function(){"loading"===this.state.name?(this.state.abortController.abort(),this.state={name:"detached"}):"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})};
c.update=function(a){if(!this.flowStyle.isCompatible(a.flowStyle)||!this.extent.equals(a.extent)||this.size[0]!==a.size[0]||this.size[1]!==a.size[1]||this.pixelRatio!==a.pixelRatio)return!1;this.flowStyle=a.flowStyle;return!0};return d}()});
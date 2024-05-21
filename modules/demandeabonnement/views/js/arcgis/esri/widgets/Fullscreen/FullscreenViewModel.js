// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(f,d,c,h,e,m,n,l){c=function(k){function g(a){a=k.call(this,a)||this;a._vendorInfo=null;a._fullscreenStyle="width: 100%; height: 100%;";a.view=null;a._errorHandler=a._errorHandler.bind(f._assertThisInitialized(a));a._stateHandler=
a._stateHandler.bind(f._assertThisInitialized(a));return a}f._inheritsLoose(g,k);var b=g.prototype;b.destroy=function(){this._removeFullscreenListeners();this.view=null};b.enter=function(){this._enterFullscreen()};b.exit=function(){this._exitFullscreen()};b.toggle=function(){this._isActive()?this._exitFullscreen():this._enterFullscreen()};b._isSupported=function(){this._removeFullscreenListeners();const a=this._getVendorInfo(this.element);this._addFullscreenListeners(a);this._vendorInfo=a;return!!a};
b._isActive=function(){return this._vendorInfo?!!document[this._vendorInfo.propertyName]:!1};b._stateHandler=function(){this.notifyChange("state");"active"===this.state?this._addStyle():this._removeStyle()};b._errorHandler=function(a){h.getLogger(this.declaredClass).error("fullscreen request failed",a)};b._getVendorInfo=function(a){if(a){if(a.requestFullscreen)return{enterName:"requestFullscreen",exitName:"exitFullscreen",errorEventName:"fullscreenerror",changeEventName:"fullscreenchange",propertyName:"fullscreen"};
if(a.webkitRequestFullScreen)return{enterName:"webkitRequestFullscreen",exitName:"webkitCancelFullScreen",errorEventName:"webkitfullscreenerror",changeEventName:"webkitfullscreenchange",propertyName:"webkitIsFullScreen"};if(a.mozRequestFullScreen)return{enterName:"mozRequestFullScreen",exitName:"mozCancelFullScreen",errorEventName:"mozfullscreenerror",changeEventName:"mozfullscreenchange",propertyName:"mozFullScreen"};if(a.msRequestFullscreen)return{enterName:"msRequestFullscreen",exitName:"msExitFullscreen",
errorEventName:"MSFullscreenError",changeEventName:"MSFullscreenChange",propertyName:"msFullscreenElement"}}};b._enterFullscreen=function(){if("feature-unsupported"===this.state)h.getLogger(this.declaredClass).warn("The fullscreen API is not supported in this browser.");else{var {element:a}=this;a&&(a[this._vendorInfo.enterName].call(a),this.notifyChange("state"))}};b._addStyle=function(){const {element:a}=this;a&&a.setAttribute("style",this._fullscreenStyle)};b._removeStyle=function(){const {element:a}=
this;a&&a.removeAttribute("style")};b._exitFullscreen=function(){if("feature-unsupported"!==this.state){var {element:a}=this;a&&(document[this._vendorInfo.exitName].call(document),this.notifyChange("state"))}};b._addFullscreenListeners=function(a){a&&(document.addEventListener(a.changeEventName,this._stateHandler),document.addEventListener(a.errorEventName,this._errorHandler))};b._removeFullscreenListeners=function(){const {_vendorInfo:a}=this;this._vendorInfo&&(document.removeEventListener(a.changeEventName,
this._stateHandler),document.removeEventListener(a.errorEventName,this._errorHandler))};f._createClass(g,[{key:"element",get:function(){return this.view?.container??null},set:function(a){this._override("element",a)}},{key:"state",get:function(){return this.element?this._isSupported()?this._isActive()?"active":"ready":"feature-unsupported":"disabled"}}]);return g}(c);d.__decorate([e.property()],c.prototype,"element",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"state",null);d.__decorate([e.property()],
c.prototype,"view",void 0);d.__decorate([e.property()],c.prototype,"enter",null);d.__decorate([e.property()],c.prototype,"exit",null);d.__decorate([e.property()],c.prototype,"toggle",null);return c=d.__decorate([l.subclass("esri.widgets.Fullscreen.FullscreenViewModel")],c)});
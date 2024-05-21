// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/accessorSupport/tracking/ObservableValue","../InputHandler"],function(e,f,h,d){d=function(g){function c(){var a=g.call(this,!0)||this;a._activeTouchPointerIds=new Set;a._multiTouchActive=new h.ObservableValue(!1);a._onPointerAdd=({data:b})=>{"touch"===b.pointerType&&(a._activeTouchPointerIds.add(b.native.pointerId),a._update())};a._onPointerRemove=({data:b})=>{"touch"===b.pointerType&&(a._activeTouchPointerIds.delete(b.native.pointerId),
a._update())};a.registerIncoming("pointer-down",a._onPointerAdd);a.registerIncoming("pointer-up",a._onPointerRemove);a.registerIncoming("pointer-capture-lost",a._onPointerRemove);a.registerIncoming("pointer-cancel",a._onPointerRemove);return a}f._inheritsLoose(c,g);c.prototype._update=function(){this._multiTouchActive.set(1<this._activeTouchPointerIds.size)};f._createClass(c,[{key:"multiTouchActive",get:function(){return this._multiTouchActive.get()}}]);return c}(d.InputHandler);e.MultiTouch=d;Object.defineProperties(e,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
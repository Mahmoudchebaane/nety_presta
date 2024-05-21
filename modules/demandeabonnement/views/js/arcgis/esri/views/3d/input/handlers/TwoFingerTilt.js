// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler"],function(f,k,l,g,d){d=function(h){function e(b,c=!1){var a=h.call(this,!0)||this;a._view=b;a._invert=c;a.registerIncoming("vertical-two-finger-drag",m=>a._handleTwoFinger(m));return a}k._inheritsLoose(e,h);e.prototype._handleTwoFinger=function(b){const c=l.createScreenPointArray(0,b.data.delta*(this._invert?-1:1));switch(b.data.action){case "begin":this._cameraController?.end();
this._cameraController=new g.RotateController({view:this._view,pivot:g.PivotPoint.CENTER});this._view.state.switchCameraController(this._cameraController);this._cameraController.begin(c);break;case "update":this._cameraController?.update(c);break;case "end":this._cameraController?.end(),this._cameraController=null}};return e}(d.InputHandler);f.TwoFingerTilt=d;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
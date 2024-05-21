// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/uuid ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../Widget ../css ../DurationMode ./Label ./LabeledColorPicker ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),function(n,c,t,f,p,m,z,A,u,v,q,g,w,x,B,y,d){function r({active:h,
label:e,...k}){return d.tsx("calcite-button",{alignment:"center",appearance:h?"solid":"outline",scale:"s",width:"half",...k},e)}c.DurationConfigurator=function(h){function e(b){var a=h.call(this,b)||this;a.colorPickerVisible=!0;a._modeSelectorId=`mode-selector-${p.generateUUID()}`;a._colorPickerId=`color-picker-${p.generateUUID()}`;a._onColorChange=l=>{a.options.color=l};a._setContinuous=()=>{a.options.mode=g.DurationMode.Continuous};a._setHourly=()=>{a.options.mode=g.DurationMode.Hourly};return a}
t._inheritsLoose(e,h);var k=e.prototype;k.loadDependencies=function(){return Promise.all([new Promise((b,a)=>n(["../../../chunks/calcite-button"],b,a)),new Promise((b,a)=>n(["../../../chunks/calcite-label"],b,a))])};k.render=function(){const b=this._messages.duration,{color:a,mode:l}=this.options;return d.tsx("div",{class:q.DURATION_CONFIGURATOR_CSS.base},d.tsx(w.Label,{for:this._modeSelectorId,label:b.modeLabel},d.tsx("div",{class:q.DURATION_CONFIGURATOR_CSS.radioGroup},d.tsx(r,{active:l===g.DurationMode.Continuous,
label:b.continuousLabel,onclick:this._setContinuous}),d.tsx(r,{active:l===g.DurationMode.Hourly,label:b.hourlyLabel,onclick:this._setHourly}))),this.colorPickerVisible&&d.tsx(x.LabeledColorPicker,{id:this._colorPickerId,label:b.colorLabel,value:a,onChange:this._onColorChange}))};return e}(v);f.__decorate([m.property()],c.DurationConfigurator.prototype,"options",void 0);f.__decorate([m.property()],c.DurationConfigurator.prototype,"colorPickerVisible",void 0);f.__decorate([m.property(),y.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],
c.DurationConfigurator.prototype,"_messages",void 0);c.DurationConfigurator=f.__decorate([u.subclass("esri.widgets.ShadowCast.components.DurationConfigurator")],c.DurationConfigurator);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./Input".split(" "),function(h,c,d,a,m,k,l){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.offValue=null;b.onValue=null;b.type="switch";return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({offValue:this.offValue,onValue:this.onValue})};
return f}(l);c.__decorate([d.property({type:[String,Number],json:{write:!0}})],a.prototype,"offValue",void 0);c.__decorate([d.property({type:[String,Number],json:{write:!0}})],a.prototype,"onValue",void 0);c.__decorate([d.property({type:["switch"],json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=e=c.__decorate([k.subclass("esri.form.elements.inputs.SwitchInput")],a)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Analysis ../core/arrayUtils ../core/Logger ../core/maybe ../core/unitUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../geometry/Polygon".split(" "),function(f,c,b,k,l,g,m,d,q,n,p){b=function(h){function e(a){a=h.call(this,a)||this;a.type="area-measurement";a.unit=null;return a}f._inheritsLoose(e,h);e.prototype.clear=function(){this.geometry=null};f._createClass(e,
[{key:"geometry",set:function(a){g.isNone(a)?this._set("geometry",null):(1<a.rings.length&&l.getLogger(this.declaredClass).warn("Measuring polygons with multiple rings is not supported."),this._set("geometry",a.clone()))}},{key:"requiredPropertiesForEditing",get:function(){if(g.isSome(this.geometry)&&1===this.geometry.rings.length){const a=this.geometry.rings[0];if(2>=a.length||!k.equals(a[0],a[a.length-1]))return[null]}return[this.geometry]}}]);return e}(b);c.__decorate([d.property({type:["area-measurement"]})],
b.prototype,"type",void 0);c.__decorate([d.property({value:null,type:p})],b.prototype,"geometry",null);c.__decorate([d.property({type:m.measurementAreaUnits,value:null})],b.prototype,"unit",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"requiredPropertiesForEditing",null);return b=c.__decorate([n.subclass("esri.analysis.AreaMeasurementAnalysis")],b)});
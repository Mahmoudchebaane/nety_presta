// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/HandleOwner ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(b,l,c,m,n,p,f,r,t,q){function g(d){return p.isNone(d)?null:JSON.stringify(d)}b.Edits=function(d){function h(a){a=d.call(this,a)||this;a._baselineAttributesJSON=null;a._baselineGeometryJSON=
null;a.feature=null;return a}l._inheritsLoose(h,d);var k=h.prototype;k.trackChanges=function(){this.feature&&(this._baselineAttributesJSON=g(this.feature.attributes),this._baselineGeometryJSON=g(this.feature.geometry),this.notifyChange("attributesModified"),this.notifyChange("geometryModified"))};k.updateAttributes=function(a){this.feature.attributes=a;this.notifyChange("attributesModified")};k.updateGeometry=function(a){this.feature.geometry=a;this.notifyChange("geometryModified")};l._createClass(h,
[{key:"attributesModified",get:function(){const {_baselineAttributesJSON:a,feature:e}=this;return!(!e||a===g(e.attributes))}},{key:"geometryModified",get:function(){const {_baselineGeometryJSON:a,feature:e}=this;return!(!e||a===g(e.geometry))}},{key:"modified",get:function(){return this.attributesModified||this.geometryModified}}]);return h}(n.HandleOwnerMixin(m));c.__decorate([f.property()],b.Edits.prototype,"attributesModified",null);c.__decorate([f.property()],b.Edits.prototype,"feature",void 0);
c.__decorate([f.property()],b.Edits.prototype,"geometryModified",null);c.__decorate([f.property()],b.Edits.prototype,"modified",null);b.Edits=c.__decorate([q.subclass("esri.widgets.Editor.Edits")],b.Edits);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
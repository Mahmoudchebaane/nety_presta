// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3f64 ../../../../../geometry/support/axisAngle ../../../camera/constraintUtils/InteractionType ./MomentumController ../../utils/navigationUtils".split(" "),function(b,f,c,e,r,t,k,g,l,m,n,p){b.RotationMomentumController=
function(h){function d(a){a=h.call(this,a)||this;a.interactionType=m.InteractionType.TUMBLE;return a}f._inheritsLoose(d,h);d.prototype.momentumStep=function(a,q){a=this.momentum.value(a);p.applyRotation(q,this.center,l.wrapAxisAngle(this.axis,a))};f._createClass(d,[{key:"center",set:function(a){this._set("center",g.clone(a))}},{key:"axis",set:function(a){this._set("axis",g.clone(a))}}]);return d}(n.MomentumController);c.__decorate([e.property({constructOnly:!0})],b.RotationMomentumController.prototype,
"momentum",void 0);c.__decorate([e.property({constructOnly:!0})],b.RotationMomentumController.prototype,"center",null);c.__decorate([e.property({constructOnly:!0})],b.RotationMomentumController.prototype,"axis",null);b.RotationMomentumController=c.__decorate([k.subclass("esri.views.3d.state.controllers.momentum.MomentumController")],b.RotationMomentumController);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
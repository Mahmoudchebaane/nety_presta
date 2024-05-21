// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./featureReferenceUtils ../core/Accessor ../core/Clonable ../core/JSONSupport ../core/maybe ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/persistable ../geometry/Point ../symbols/support/ElevationInfo".split(" "),function(l,c,f,b,m,n,g,d,t,u,p,h,q,r){b=function(k){function e(a){a=k.call(this,a)||this;a.position=
null;a.elevationInfo=null;a.feature=null;return a}l._inheritsLoose(e,k);e.prototype.equals=function(a){return g.equalsMaybe(this.position,a.position)&&g.equalsMaybe(this.elevationInfo,a.elevationInfo)&&f.featureReferenceEquals(this.feature,a.feature)};return e}(n.JSONSupportMixin(m.ClonableMixin(b)));c.__decorate([d.property({type:q}),h.persistable()],b.prototype,"position",void 0);c.__decorate([d.property({type:r}),h.persistable()],b.prototype,"elevationInfo",void 0);c.__decorate([d.property(f.featureReferenceProperty)],
b.prototype,"feature",void 0);return b=c.__decorate([p.subclass("esri.analysis.LineOfSightAnalysisObserver")],b)});
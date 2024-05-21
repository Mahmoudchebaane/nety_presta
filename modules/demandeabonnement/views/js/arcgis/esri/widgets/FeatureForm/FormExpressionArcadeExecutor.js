// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../arcade ../../core/Accessor ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/support/WatchUpdatingTracking ../../layers/support/fieldUtils".split(" "),function(a,k,c,p,t,u,d,z,A,v,w,x){const q=Symbol("FormExpressionArcadeExecutor");a.FormExpressionArcadeExecutor=function(g){function e(h){var b=
g.call(this,h)||this;b[y]=!0;b._lastEvaluatedValue=null;b._abortController=new AbortController;b._stale=!1;b._updatingTracking=new w.WatchUpdatingTracking;b._executeAsyncDebounced=u.debounce(function(){var m=k._asyncToGenerator(function*(l,r,n){l=yield b.executor.executeAsync(l,{...r,abortSignal:n});if(n.aborted)return b._lastEvaluatedValue;b._lastEvaluatedValue=l;b._stale=!1;return l});return function(l,r,n){return m.apply(this,arguments)}}());return b}k._inheritsLoose(e,g);var f=e.prototype;f.abort=
function(){this._abortController.abort()};f.execute=function(h,b){this._abortController=new AbortController;return this._lastEvaluatedValue=h=this.executor.execute(h,{...b,abortSignal:this._abortController.signal})};f.executeAsync=function(){var h=k._asyncToGenerator(function*(b,m){this._abortController=new AbortController;return this._updatingTracking.addPromise(this._executeAsyncDebounced(b,m??{},this._abortController.signal))});return function(b,m){return h.apply(this,arguments)}}();f.markStale=
function(){this._stale=!0};f.reset=function(){this.abort();this._lastEvaluatedValue=null;this._stale=!1};k._createClass(e,[{key:"isAsync",get:function(){return this.executor.isAsync}},{key:"fieldsUsed",get:function(){return this.executor.fieldsUsed}},{key:"syntaxTree",get:function(){return this.executor.syntaxTree}},{key:"updating",get:function(){return this._updatingTracking.updating}},{key:"stale",get:function(){return this._stale}},{key:"geometryUsed",get:function(){return this.executor.geometryUsed}},
{key:"variablesUsed",get:function(){return this.executor.variablesUsed}},{key:"lastEvaluatedValue",get:function(){return this._lastEvaluatedValue}}]);return e}(t);var y=q;c.__decorate([d.property()],a.FormExpressionArcadeExecutor.prototype,"_lastEvaluatedValue",void 0);c.__decorate([d.property()],a.FormExpressionArcadeExecutor.prototype,"_stale",void 0);c.__decorate([d.property()],a.FormExpressionArcadeExecutor.prototype,"_updatingTracking",void 0);c.__decorate([d.property({constructOnly:!0})],a.FormExpressionArcadeExecutor.prototype,
"executor",void 0);c.__decorate([d.property()],a.FormExpressionArcadeExecutor.prototype,"isAsync",null);c.__decorate([d.property()],a.FormExpressionArcadeExecutor.prototype,"fieldsUsed",null);c.__decorate([d.property()],a.FormExpressionArcadeExecutor.prototype,"syntaxTree",null);c.__decorate([d.property()],a.FormExpressionArcadeExecutor.prototype,"updating",null);c.__decorate([d.property()],a.FormExpressionArcadeExecutor.prototype,"stale",null);c.__decorate([d.property()],a.FormExpressionArcadeExecutor.prototype,
"geometryUsed",null);c.__decorate([d.property()],a.FormExpressionArcadeExecutor.prototype,"variablesUsed",null);c.__decorate([d.property()],a.FormExpressionArcadeExecutor.prototype,"lastEvaluatedValue",null);a.FormExpressionArcadeExecutor=c.__decorate([v.subclass("esri.widgets.FeatureForm.FormExpressionArcadeExecutor")],a.FormExpressionArcadeExecutor);c=function(){var g=k._asyncToGenerator(function*(e,f){const h=p.createArcadeProfile("form-calculation");e=yield p.createArcadeExecutor(e,h,{});f?.fieldsIndex&&
(e.fieldsUsed=x.fixFields(f.fieldsIndex,e.fieldsUsed));return new a.FormExpressionArcadeExecutor({executor:e})});return function(e,f){return g.apply(this,arguments)}}();a.createFormExpressionArcadeExecutor=c;a.isFormExpressionArcadeExecutor=g=>g&&"object"===typeof g&&g[q];Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
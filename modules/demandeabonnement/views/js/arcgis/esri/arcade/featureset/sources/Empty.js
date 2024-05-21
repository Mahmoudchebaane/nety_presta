// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../chunks/_rollupPluginBabelHelpers","../support/errorsupport","../support/FeatureSet","../support/IdSet","../support/shared"],function(c,e,l,g,h){return function(k){function f(a){var d=k.call(this,a)||this;d.declaredClass="esri.layers.featureset.sources.Empty";d._maxProcessing=1E3;d._wset=new g([],[],!1,null);d._parent=a.parentfeatureset;d._databaseType=h.FeatureServiceDatabaseType.Standardised;return d}c._inheritsLoose(f,k);var b=f.prototype;b._getSet=function(){var a=c._asyncToGenerator(function*(){return this._wset});
return function(){return a.apply(this,arguments)}}();b.optimisePagingFeatureQueries=function(){};b._isInFeatureSet=function(){return h.IdState.NotInFeatureSet};b._getFeature=function(){var a=c._asyncToGenerator(function*(){throw new e.FeatureSetError(e.FeatureSetErrorCodes.NeverReach);});return function(){return a.apply(this,arguments)}}();b.queryAttachments=function(){var a=c._asyncToGenerator(function*(){return[]});return function(){return a.apply(this,arguments)}}();b._getFeatures=function(){var a=
c._asyncToGenerator(function*(){return"success"});return function(){return a.apply(this,arguments)}}();b._featureFromCache=function(){return null};b._fetchAndRefineFeatures=function(){var a=c._asyncToGenerator(function*(){throw new e.FeatureSetError(e.FeatureSetErrorCodes.NeverReach);});return function(){return a.apply(this,arguments)}}();b._getFilteredSet=function(){var a=c._asyncToGenerator(function*(){return new g([],[],!1,null)});return function(){return a.apply(this,arguments)}}();b._stat=function(a,
d,p,q,r,m,n){return this._manualStat(a,d,m,n)};b._canDoAggregates=function(){var a=c._asyncToGenerator(function*(){return!1});return function(){return a.apply(this,arguments)}}();return f}(l)});
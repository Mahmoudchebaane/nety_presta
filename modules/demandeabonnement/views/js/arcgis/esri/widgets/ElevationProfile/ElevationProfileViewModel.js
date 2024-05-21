// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Graphic ../../core/Accessor ../../core/arrayUtils ../../core/byteSizeEstimations ../../core/Collection ../../core/collectionUtils ../../core/Handles ../../core/Logger ../../core/LRUCache ../../core/maybe ../../core/memoize ../../core/reactiveUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../layers/support/ElevationQueryTileCache ../../properties/defaultUnit ./ElevationProfileController ./ElevationProfileLineGround ./elevationProfileLineTypes ./ElevationProfileTool ./support/constants ./support/geometryUtils ./support/ProfileGenerationError ./support/profileUtils ./support/statisticsUtils".split(" "),
function(r,d,z,c,A,B,t,C,D,E,F,f,G,u,n,e,Q,H,I,J,K,L,M,N,k,v,m,O,w){c=function(x){function p(a){var b=x.call(this,a)||this;b.view=null;b.input=null;b._getEffectiveUnitsMemoized=G.memoize((h,q)=>({distance:h,elevation:q}));b.geodesicDistanceThreshold=1E5;b.hoveredChartPosition=null;b.uniformChartScaling=!1;b.defaultUnit=null;b.queue=null;b._currentTileCache=null;b.error=null;b._handles=new D;b._defaultProfileLineGround=new L;b._userUnitOptions=null;b._userUnit=null;a?.profiles||(b.profiles=new t([b._defaultProfileLineGround]));
return b}r._inheritsLoose(p,x);var l=p.prototype;l.initialize=function(){this._handles.add(u.watch(()=>this.view,a=>{f.isNone(a)?E.getLogger(this.declaredClass).warnOnce("no view. Widget will be disabled until a view is provided."):this.queue=O.createProfileQueue("3d"===a.type?a.resourceController?.scheduler:void 0)},u.syncAndInitial));this.tool=new N.ElevationProfileTool({viewModel:this});this._controller=new K.ElevationProfileController({viewModel:this})};l.destroy=function(){this._handles=f.destroyMaybe(this._handles);
this._defaultProfileLineGround=f.destroyMaybe(this._defaultProfileLineGround);this._controller=f.destroyMaybe(this._controller);this._currentTileCache=f.destroyMaybe(this._currentTileCache);this.tool=f.destroyMaybe(this.tool);this.queue=f.destroyMaybe(this.queue)};l.start=function(a){this.tool.interaction.start(a)};l.stop=function(){this.tool.interaction.stop()};l.cancel=function(){this.tool.interaction.cancel()};l.clear=function(){this.tool.interaction.clear()};l._findSelectableUnit=function(a,b){const h=
this.unitOptions;return f.isSome(a)&&h.includes(a)?a:b?this._findSelectableUnit(b):h[0]};l._filteredOrAllUnits=function(a){a=(f.isSome(a)?a:[]).filter(b=>n.measurementLengthUnits.includes(b));return 0===a.length?n.measurementLengthUnits.slice():a};r._createClass(p,[{key:"profiles",get:function(){return this._get("profiles")},set:function(a){const b=this._get("profiles");a=a??new t;this._set("profiles",C.referenceSetter(a,b))}},{key:"state",get:function(){const a=this.view;return f.isSome(a)&&a.ready?
this.tool.state:k.ElevationProfileState.Disabled}},{key:"progress",get:function(){let a=0,b=0;for(const h of this.visibleProfiles)a++,b+=h.progress;return 0<a?b/a:0}},{key:"unitOptions",get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(a){this._userUnitOptions=a;this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}},{key:"unit",get:function(){return this._userUnit?this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit):this._findSelectableUnit(this.defaultUnit)},
set:function(a){this._userUnit=a?this._findSelectableUnit(a,this._userUnit):null;this.notifyChange("unit")}},{key:"effectiveUnits",get:function(){var a=w.getBoundsInMeters(this.visibleProfiles.map(h=>h.result));const b=n.preferredLengthUnit(a.maxDistance,"meters",this.unit);a=n.preferredVerticalLengthUnit(a.maxElevation,"meters",this.unit);return this._getEffectiveUnitsMemoized(b,a)}},{key:"highlightEnabled",get:function(){return this.tool.highlightEnabled},set:function(a){this.tool.highlightEnabled=
a}},{key:"hasVertices",get:function(){const a=f.applySome(this.input,b=>b.geometry);return v.isPolyline(a)&&0<a.paths.reduce((b,h)=>b+h.length,0)}},{key:"hoveredPoints",get:function(){return!f.isNone(this.input)&&this.visible&&this.tool.editable?this.visibleProfiles.map(a=>{const b=a.hoveredPoint;return f.isSome(b)?{hoveredPoint:b,color:a.color}:null}).filter(f.isSome):[]}},{key:"statistics",get:function(){return w.mergeStatistics(this.visibleProfiles.map(a=>a.statistics))}},{key:"chartData",get:function(){if(f.isNone(this.input))return null;
const {effectiveUnits:a,progress:b,statistics:h,visibleProfiles:q,uniformChartScaling:P}=this,y=q.filter(g=>g.hasZ).map(g=>({id:g.id,type:g.type,title:g.title,color:g.color,samples:g.samples,progress:g.progress,chartFillEnabled:g.chartFillEnabled,chartStrokeWidth:g.chartStrokeWidth,chartStrokeOffsetY:g.chartStrokeOffsetY,viewVisualizationEnabled:g.viewVisualizationEnabled}));return 0===y.length?null:{lines:y,effectiveUnits:a,statistics:h,refined:1===b,dynamicElevationRange:q.some(g=>"view"===g.type),
uniformScaling:P}}},{key:"visibleProfiles",get:function(){return this.profiles.toArray().filter(a=>a.available&&a.visible)}},{key:"minDemResolutions",get:function(){const a=[];for(const {minDemResolution:b}of this.visibleProfiles)f.isSome(b)&&a.push(b);return a}},{key:"minDemResolution",get:function(){return A.min(this.minDemResolutions)}},{key:"errorState",get:function(){const a=f.applySome(this.input,b=>b.geometry);if(!v.isValidInputPath(a))return k.ElevationProfileErrorState.NoValidInput;if(f.isSome(this.error)){if(m.isProfileGenerationError(this.error))switch(this.error.cause){case m.ProfileGenerationErrorCause.TooComplex:return k.ElevationProfileErrorState.TooComplex;
case m.ProfileGenerationErrorCause.InvalidGeometry:return k.ElevationProfileErrorState.InvalidGeometry;case m.ProfileGenerationErrorCause.InvalidElevationInfo:return k.ElevationProfileErrorState.InvalidElevationInfo;case m.ProfileGenerationErrorCause.ElevationQueryError:return k.ElevationProfileErrorState.NoValidInput}return k.ElevationProfileErrorState.UnknownError}return 0===this.visibleProfiles.length?k.ElevationProfileErrorState.NoVisibleProfiles:f.isNone(this.chartData)&&1===this.progress?k.ElevationProfileErrorState.RefinedButNoChartData:
k.ElevationProfileErrorState.None}},{key:"tileCache",get:function(){this._currentTileCache=f.destroyMaybe(this._currentTileCache);var a=this.view;if(f.isSome(a)&&"3d"===a?.type&&(a=a.basemapTerrain?.elevationQueryCache,f.isSome(a)))return a;f.isNone(this._currentTileCache)&&(this._currentTileCache=new I.ElevationQueryTileCache(new F(20*B.ByteSizeUnit.MEGABYTES)));return this._currentTileCache}},{key:"visible",get:function(){return this.tool.visible},set:function(a){this.tool.visible=a}},{key:"inputIsSketched",
get:function(){return this.tool.interaction.isSketchedGraphic(this.input)}},{key:"elevationProvider",get:function(){const a=this.view;return f.isSome(a)&&"3d"===a.type?a.elevationProvider:null}}]);return p}(c);d.__decorate([e.property()],c.prototype,"view",void 0);d.__decorate([e.property({type:z})],c.prototype,"input",void 0);d.__decorate([e.property({type:M.ElevationProfileLineCollection,nonNullable:!0})],c.prototype,"profiles",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"state",
null);d.__decorate([e.property({readOnly:!0})],c.prototype,"progress",null);d.__decorate([e.property()],c.prototype,"unitOptions",null);d.__decorate([e.property()],c.prototype,"unit",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"effectiveUnits",null);d.__decorate([e.property({type:Number})],c.prototype,"geodesicDistanceThreshold",void 0);d.__decorate([e.property()],c.prototype,"hoveredChartPosition",void 0);d.__decorate([e.property()],c.prototype,"uniformChartScaling",void 0);d.__decorate([e.property()],
c.prototype,"highlightEnabled",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"hoveredPoints",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"statistics",null);d.__decorate([e.property()],c.prototype,"chartData",null);d.__decorate([e.property()],c.prototype,"visibleProfiles",null);d.__decorate([e.property()],c.prototype,"minDemResolutions",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"minDemResolution",null);d.__decorate([e.property({readOnly:!0})],c.prototype,
"errorState",null);d.__decorate([e.property(J.defaultUnitPropertyMetadata)],c.prototype,"defaultUnit",void 0);d.__decorate([e.property()],c.prototype,"queue",void 0);d.__decorate([e.property()],c.prototype,"tileCache",null);d.__decorate([e.property()],c.prototype,"tool",void 0);d.__decorate([e.property()],c.prototype,"visible",null);d.__decorate([e.property()],c.prototype,"error",void 0);d.__decorate([e.property()],c.prototype,"inputIsSketched",null);d.__decorate([e.property()],c.prototype,"elevationProvider",
null);d.__decorate([e.property()],c.prototype,"_defaultProfileLineGround",void 0);d.__decorate([e.property()],c.prototype,"_userUnitOptions",void 0);d.__decorate([e.property()],c.prototype,"_controller",void 0);d.__decorate([e.property()],c.prototype,"_userUnit",void 0);return c=d.__decorate([H.subclass("esri.widgets.ElevationProfile.ElevationProfileViewModel")],c)});
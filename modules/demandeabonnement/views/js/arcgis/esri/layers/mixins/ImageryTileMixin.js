// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../rasterRenderers ../../request ../../core/Error ../../core/Logger ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/support/spatialReferenceUtils ../support/arcgisLayerUrl ../support/commonProperties ../support/DimensionalDefinition ../support/MultidimensionalSubset ../support/RasterFunction ../support/RasterJobHandler ../support/TileInfo ../support/rasterDatasets/FunctionRaster ../support/rasterDatasets/multidimensionalUtils ../support/rasterFunctions/rasterFunctionHelper ../support/rasterFunctions/vectorFieldUtils ../../renderers/support/rasterRendererHelper ../../renderers/support/RasterSymbolizer ../../views/2d/engine/flow/dataUtils ../../geometry/SpatialReference".split(" "),
function(z,q,l,W,D,E,F,G,h,m,X,Y,H,I,J,K,L,M,N,O,P,Q,t,R,S,u,T,U,V){const A=G.getLogger("esri.layers.mixins.ImageryTileMixin");z.ImageryTileMixin=g=>{function v(w){if(!w.raster||!w.rasterInfo)throw new F("imagery-tile","no raster");}g=function(w){function x(){var a=w.apply(this,arguments)||this;a._rasterJobHandler={instance:null,refCount:0,connectionPromise:null};a.bandIds=null;a.copyright=null;a.interpolation="nearest";a.multidimensionalDefinition=null;a.multidimensionalSubset=null;a.raster=null;
a.rasterFunction=null;a.sourceJSON=null;a.symbolizer=null;return a}q._inheritsLoose(x,w);var k=x.prototype;k.convertVectorFieldData=function(){var a=q._asyncToGenerator(function*(b,c){if(h.isNone(b)||!this.rasterInfo)return null;const d=this._rasterJobHandler.instance,e=this.rasterInfo.dataType;return d?d.convertVectorFieldData({pixelBlock:b,dataType:e},c):S.convertVectorFieldData(b,e)});return function(b,c){return a.apply(this,arguments)}}();k.createFlowMesh=function(){var a=q._asyncToGenerator(function*(b,
c){const d=this._rasterJobHandler.instance;return d?d.createFlowMesh(b,c):U.createFlowMesh(b.meshType,b.simulationSettings,b.flowData,h.isSome(c.signal)?c.signal:(new AbortController).signal)});return function(b,c){return a.apply(this,arguments)}}();k.normalizeRasterFetchOptions=function(a){var {multidimensionalInfo:b}=this.rasterInfo??{};if(h.isNone(b))return a;let c=a.multidimensionalDefinition||this.multidimensionalDefinition;if(h.isNone(c)||!c.length)c=t.getDefaultMultidimensionalDefinition(this.raster.rasterInfo,
{multidimensionalSubset:this.multidimensionalSubset});var d=a.timeExtent||this.timeExtent;if(h.isSome(c)&&h.isSome(d)&&(h.isSome(d.start)||h.isSome(d.end))){c=c.map(f=>f.clone());var e=b.variables.find(({name:f})=>f===c[0].variableName)?.dimensions?.find(({name:f})=>"StdTime"===f);b=c.find(({dimensionName:f})=>"StdTime"===f);if(!e||!b)return{...a,multidimensionalDefinition:null};const {start:y,end:B}=d;d=h.isNone(y)?null:y.getTime();const C=h.isNone(B)?null:B.getTime(),n=d??C,p=C??d;if(h.isSome(e.values))e=
e.values.filter(f=>{if(Array.isArray(f)){if(n===p)return f[0]<=n&&f[1]>=n;const r=f[0]>=n&&f[1]<=p||f[0]<n&&f[1]>p;return f[0]<=n&&f[1]>n||f[0]<p&&f[1]>=p||r}return n===p?f===n:f>=n&&f<=p}),e.length?(e=e.sort((f,r)=>n===p?(f[0]??f)-(r[0]??r):Math.abs((f[1]??f)-p)-Math.abs((r[1]??r)-p))[0],b.values=[e]):c=null;else if(e.hasRegularIntervals&&e.extent){const [f,r]=e.extent;n>r||p<f?c=null:b.values=n===p?[n]:[Math.max(f,n),Math.min(r,p)]}}return h.isSome(c)&&t.hasExcludedVariableOrDimension(c,this.multidimensionalSubset)?
{...a,multidimensionalDefinition:null}:{...a,multidimensionalDefinition:c}};k.updateRenderer=function(){var a=q._asyncToGenerator(function*(){const {loaded:b,symbolizer:c}=this;if(b&&c&&JSON.stringify(this._cachedRendererJson)!==JSON.stringify(this.renderer)){var d=this._rasterJobHandler.instance;d&&(c.rendererJSON=u.normalizeRendererJSON(this.renderer.toJSON()),c.bind(),yield d.updateSymbolizer(c),this._cachedRendererJson=this.renderer.toJSON())}});return function(){return a.apply(this,arguments)}}();
k.applyRenderer=function(){var a=q._asyncToGenerator(function*(b,c){var d=b&&b.pixelBlock;if(!(h.isSome(d)&&d.pixels&&0<d.pixels.length))return null;yield this.updateRenderer();d=this._rasterJobHandler.instance;const e=this.bandIds??[];return d?yield d.symbolize({...b,simpleStretchParams:c,bandIds:e}):this.symbolizer.symbolize({...b,simpleStretchParams:c,bandIds:e})});return function(b,c){return a.apply(this,arguments)}}();k.getTileUrl=function(a,b,c){return"RasterTileServer"===this.raster?.datasetFormat?
`${this.url}/tile/${a}/${b}/${c}`:""};k.getCompatibleTileInfo=function(a,b,c=!1){if(!this.loaded||h.isNone(b))return null;if(c&&a.equals(this.spatialReference))return this.tileInfo;c=I.getInfo(a);return P.create({size:256,spatialReference:a,origin:c?{x:c.origin[0],y:c.origin[1]}:{x:b.xmin,y:b.ymax}})};k.getCompatibleFullExtent=function(a){return this.loaded?this._compatibleFullExtent&&this._compatibleFullExtent.spatialReference.equals(a)?this._compatibleFullExtent:this._compatibleFullExtent=this.raster.computeExtent(a):
null};k.fetchTile=function(){var a=q._asyncToGenerator(function*(b,c,d,e={}){v(this);if(e.requestAsImageElement)return b=this.getTileUrl(b,c,d),E(b,{responseType:"image",query:{...this.refreshParameters,...this.raster.ioConfig.customFetchParameters},signal:e.signal}).then(y=>y.data);if(h.isSome(this.rasterInfo.multidimensionalInfo)&&(e=this.normalizeRasterFetchOptions(e),h.isNone(e.multidimensionalDefinition)))return{extent:this.raster.getTileExtentFromTileInfo(b,c,d,e.tileInfo||this.rasterInfo.storageInfo.tileInfo),
pixelBlock:null};yield this._initJobHandler();yield this._updateRasterFunction();"raster-shaded-relief"===this.renderer.type&&(e={...e,buffer:{cols:1,rows:1}});return this.raster.fetchTile(b,c,d,e)});return function(b,c,d){return a.apply(this,arguments)}}();k.fetchPixels=function(){var a=q._asyncToGenerator(function*(b,c,d,e={}){if(h.isSome(this.rasterInfo.multidimensionalInfo)&&(e=this.normalizeRasterFetchOptions(e),h.isNone(e.multidimensionalDefinition)))return{extent:b,pixelBlock:null};yield this._initJobHandler();
yield this._updateRasterFunction();return this.raster.fetchPixels(b,c,d,e)});return function(b,c,d){return a.apply(this,arguments)}}();k.identify=function(){var a=q._asyncToGenerator(function*(b,c={}){v(this);return!h.isSome(this.rasterInfo.multidimensionalInfo)||this.rasterInfo.hasMultidimensionalTranspose&&(t.isMultiSliceOrRangeDefinition(c.multidimensionalDefinition)||c.transposedVariableName||c.timeExtent)||(c=this.normalizeRasterFetchOptions(c),!h.isNone(c.multidimensionalDefinition))?this.raster.identify(b,
c):{location:b,value:null}});return function(b){return a.apply(this,arguments)}}();k.increaseRasterJobHandlerUsage=function(){this._rasterJobHandler.refCount++};k.decreaseRasterJobHandlerUsage=function(){this._rasterJobHandler.refCount--;0>=this._rasterJobHandler.refCount&&this._shutdownJobHandler()};k.hasStandardTime=function(){const a=this.rasterInfo?.multidimensionalInfo;if(h.isNone(a)||"standard-time"!==this.rasterInfo?.dataType)return!1;const b=this.multidimensionalDefinition,c=b?.[0]?.variableName;
return a.variables.some(d=>d.name===c&&(!b?.[0].dimensionName||d.dimensions.some(e=>"StdTime"===e.name)))};k.getStandardTimeValue=function(a){return(new Date(864E5*(a-25569))).toString()};k.getMultidimensionalSubsetVariables=function(a){return t.getSubsetVariablesFromMdInfo(this.multidimensionalSubset,a??this.rasterInfo.multidimensionalInfo)};k._configDefaultSettings=function(){this._configDefaultInterpolation();this.multidimensionalDefinition||(this.multidimensionalDefinition=t.getDefaultMultidimensionalDefinition(this.raster.rasterInfo,
{multidimensionalSubset:this.multidimensionalSubset}));this._configDefaultRenderer()};k._initJobHandler=function(){if(null!=this._rasterJobHandler.connectionPromise)return this._rasterJobHandler.connectionPromise;const a=new O;this._rasterJobHandler.connectionPromise=a.initialize().then(()=>{v(this);this._rasterJobHandler.instance=a;this.raster.rasterJobHandler=a;this.renderer&&this.updateRenderer();"Function"===this.raster.datasetFormat&&this.raster.syncJobHandler()}).catch(()=>{});return this._rasterJobHandler.connectionPromise};
k._shutdownJobHandler=function(){this._rasterJobHandler.instance&&this._rasterJobHandler.instance.destroy();this._rasterJobHandler.instance=null;this._rasterJobHandler.connectionPromise=null;this._rasterJobHandler.refCount=0;this._cachedRendererJson=null;this.raster&&(this.raster.rasterJobHandler=null)};k._configDefaultInterpolation=function(){if(null==this.interpolation){v(this);const a=u.getDefaultInterpolation(this.rasterInfo,this.raster.tileType,this.sourceJSON?.defaultResamplingMethod);this._set("interpolation",
a)}};k._configDefaultRenderer=function(){v(this);var a=this.raster.rasterInfo;this.bandIds||(this.bandIds=u.getDefaultBandCombination(a));if(!this.renderer){const b=u.createDefaultRenderer(a,{bandIds:this.bandIds,variableName:h.isSome(this.multidimensionalDefinition)?this.multidimensionalDefinition[0]?.variableName:null});"WCSServer"===this.raster.datasetFormat&&"raster-stretch"===b.type&&(1E24<(a.statistics?.[0].max??0)||-1E24>(a.statistics?.[0].min??0))&&(b.dynamicRangeAdjustment=!0,b.statistics=
null,"none"===b.stretchType&&(b.stretchType="min-max"));this.renderer=b}this.symbolizer?(this.symbolizer.rendererJSON=u.normalizeRendererJSON(this.renderer.toJSON()),this.symbolizer.rasterInfo=a):this.symbolizer=new T({rendererJSON:this.renderer.toJSON(),rasterInfo:a});a=this.symbolizer.bind();a.success||A.warn("imagery-tile-mixin",a.error||"The given renderer is not supported by the layer.")};k._updateRasterFunction=function(){var a=q._asyncToGenerator(function*(){if("imagery-tile"===this.type&&
JSON.stringify(this.rasterFunction)!==JSON.stringify(this._cachedRasterFunctionJson)){var b=this.raster;"Function"===b?.datasetFormat&&(b=b.rasterFunction.getPrimaryRasters().rasters[0]);var {rasterFunction:c}=this;c?(b=R.create(c.toJSON(),{raster:b}),b=new Q({rasterFunction:b}),b.rasterJobHandler=this._rasterJobHandler.instance,yield b.open(),this._cachedRasterFunctionJson=this.rasterFunction?.toJSON(),this.raster=b):this.raster=b}});return function(){return a.apply(this,arguments)}}();q._createClass(x,
[{key:"fullExtent",get:function(){return this.rasterInfo?.extent}},{key:"rasterInfo",get:function(){return this.raster?.rasterInfo}},{key:"spatialReference",get:function(){return this.rasterInfo?.spatialReference??V.WGS84}},{key:"tileInfo",get:function(){return this.rasterInfo?.storageInfo.tileInfo}},{key:"url",set:function(a){this._set("url",J.sanitizeUrl(a,A))}},{key:"renderer",set:function(a){this._set("renderer",a);this.updateRenderer()}}]);return x}(g);l.__decorate([m.property()],g.prototype,
"_cachedRendererJson",void 0);l.__decorate([m.property()],g.prototype,"_cachedRasterFunctionJson",void 0);l.__decorate([m.property()],g.prototype,"_compatibleFullExtent",void 0);l.__decorate([m.property()],g.prototype,"_rasterJobHandler",void 0);l.__decorate([m.property()],g.prototype,"bandIds",void 0);l.__decorate([m.property({json:{origins:{service:{read:{source:"copyrightText"}}}}})],g.prototype,"copyright",void 0);l.__decorate([m.property({json:{read:!1}})],g.prototype,"fullExtent",null);l.__decorate([m.property()],
g.prototype,"interpolation",void 0);l.__decorate([m.property()],g.prototype,"ioConfig",void 0);l.__decorate([m.property({type:[L]})],g.prototype,"multidimensionalDefinition",void 0);l.__decorate([m.property({type:M,json:{write:!0}})],g.prototype,"multidimensionalSubset",void 0);l.__decorate([m.property()],g.prototype,"raster",void 0);l.__decorate([m.property({type:N})],g.prototype,"rasterFunction",void 0);l.__decorate([m.property()],g.prototype,"rasterInfo",null);l.__decorate([m.property()],g.prototype,
"sourceJSON",void 0);l.__decorate([m.property({json:{read:!1}})],g.prototype,"spatialReference",null);l.__decorate([m.property({json:{read:!1}})],g.prototype,"tileInfo",null);l.__decorate([m.property(K.url)],g.prototype,"url",null);l.__decorate([m.property({types:D.rasterRendererTypes})],g.prototype,"renderer",null);l.__decorate([m.property()],g.prototype,"symbolizer",void 0);return g=l.__decorate([H.subclass("esri.layers.ImageryTileMixin")],g)};Object.defineProperties(z,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
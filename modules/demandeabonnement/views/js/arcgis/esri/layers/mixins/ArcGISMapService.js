// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../request ../../core/promiseUtils ../../core/urlUtils ../../core/Version ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/SpatialReference ../support/commonProperties".split(" "),function(q,m,e,x,y,z,A,g,I,J,r,B,C,D,t){q.ArcGISMapService=
c=>{c=function(u){function n(){var b=u.apply(this,arguments)||this;b.capabilities=void 0;b.copyright=null;b.fullExtent=null;b.legendEnabled=!0;b.spatialReference=null;b.version=void 0;b._allLayersAndTablesPromise=null;b._allLayersAndTablesMap=null;return b}m._inheritsLoose(n,u);var h=n.prototype;h.readCapabilities=function(b,a){var d=a.capabilities&&a.capabilities.split(",").map(E=>E.toLowerCase().trim());if(!d)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,
supportsTileMap:!1},exportMap:null,exportTiles:null};var f=this.type;b=d.includes("data");const k=d.includes("query"),v=d.includes("map"),w=!!a.exportTilesAllowed;d=d.includes("tilemap");const p="tile"!==f&&!!a.supportsDynamicLayers,F="tile"!==f&&(!a.tileInfo||p),G="tile"!==f&&(!a.tileInfo||p);f="tile"!==f;var l=a.cimVersion&&A.Version.parse(a.cimVersion);const H=l?.since(1,4)??!1;l=l?.since(2,0)??!1;return{operations:{supportsExportMap:v,supportsExportTiles:w,supportsIdentify:k,supportsQuery:b,supportsTileMap:d},
exportMap:v?{supportsArcadeExpressionForLabeling:H,supportsSublayersChanges:f,supportsDynamicLayers:p,supportsSublayerVisibility:F,supportsSublayerDefinitionExpression:G,supportsCIMSymbols:l}:null,exportTiles:w?{maxExportTilesCount:+a.maxExportTilesCount}:null}};h.readVersion=function(b,a){(b=a.currentVersion)||(b=a.hasOwnProperty("capabilities")||a.hasOwnProperty("tables")?10:a.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3);return b};h.fetchSublayerInfo=function(){var b=m._asyncToGenerator(function*(a,
d){yield this.fetchAllLayersAndTables(d);return this._allLayersAndTablesMap?.get(a)});return function(a,d){return b.apply(this,arguments)}}();h.fetchAllLayersAndTables=function(){var b=m._asyncToGenerator(function*(a){yield this.load(a);this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=x(z.urlToObject(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(f=>{this._allLayersAndTablesMap=new Map;for(const k of f.data.layers)this._allLayersAndTablesMap.set(k.id,
k);return{result:f.data}},f=>({error:f})));const d=yield this._allLayersAndTablesPromise;y.throwIfAborted(a);if("result"in d)return d.result;throw d.error;});return function(a){return b.apply(this,arguments)}}();return n}(c);e.__decorate([g.property({readOnly:!0})],c.prototype,"capabilities",void 0);e.__decorate([r.reader("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],c.prototype,"readCapabilities",null);e.__decorate([g.property({json:{read:{source:"copyrightText"}}})],
c.prototype,"copyright",void 0);e.__decorate([g.property({type:C})],c.prototype,"fullExtent",void 0);e.__decorate([g.property(t.id)],c.prototype,"id",void 0);e.__decorate([g.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],c.prototype,"legendEnabled",void 0);e.__decorate([g.property(t.popupEnabled)],c.prototype,"popupEnabled",void 0);e.__decorate([g.property({type:D})],c.prototype,"spatialReference",void 0);e.__decorate([g.property({readOnly:!0})],
c.prototype,"version",void 0);e.__decorate([r.reader("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],c.prototype,"readVersion",null);return c=e.__decorate([B.subclass("esri.layers.mixins.ArcGISMapService")],c)};Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
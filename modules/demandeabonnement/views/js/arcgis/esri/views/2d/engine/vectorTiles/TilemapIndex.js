// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../request","../../../../core/promiseUtils","../../tiling/TileKey"],function(g,k,l,m){return function(){function h(b){this.url=b}var f=h.prototype;f.fetchTileIndex=function(){var b=g._asyncToGenerator(function*(){this._tileIndexPromise||(this._tileIndexPromise=k(this.url).then(a=>a.data.index));return this._tileIndexPromise});return function(){return b.apply(this,arguments)}}();f.dataKey=function(){var b=g._asyncToGenerator(function*(a,
c){const d=yield this.fetchTileIndex();l.throwIfAborted(c);return this._getIndexedDataKey(d,a)});return function(a,c){return b.apply(this,arguments)}}();f._getIndexedDataKey=function(b,a){const c=[a];if(0>a.level||0>a.row||0>a.col||0<a.row>>a.level||0<a.col>>a.level)return null;for(;0!==a.level;)a=new m(a.level-1,a.row>>1,a.col>>1,a.world),c.push(a);a=c.pop();let d,e;if(1===b)return a;for(;c.length;)if(d=c.pop(),e=(d.col&1)+((d.row&1)<<1),b){if(0===b[e]){a=null;break}if(1===b[e]){a=d;break}a=d;b=
b[e]}return a};return h}()});
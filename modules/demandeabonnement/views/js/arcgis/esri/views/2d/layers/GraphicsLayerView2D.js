// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),function(f,h,l,m,n,e,w,p,q,r,t,u){const v={remove(){},pause(){},resume(){}};e=function(k){function g(){var a=k.apply(this,
arguments)||this;a._highlightIds=new Map;return a}f._inheritsLoose(g,k);var c=g.prototype;c.attach=function(){this.graphicsView=new t({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new r(this.view.featuresTilingScheme)});this._updateHighlight();this.container.addChild(this.graphicsView.container);this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")};c.detach=function(){this.container.removeAllChildren();
this.graphicsView.destroy();this.graphicsView=null;this.handles.remove("graphicslayerview2d")};c.hitTest=function(){var a=f._asyncToGenerator(function*(b){return this.graphicsView?this.graphicsView.hitTest(b).map(d=>({type:"graphic",graphic:d,mapPoint:b,layer:this.layer})):null});return function(b){return a.apply(this,arguments)}}();c.fetchPopupFeatures=function(){var a=f._asyncToGenerator(function*(b){if(this.graphicsView)return this.graphicsView.hitTest(b).filter(d=>!!d.popupTemplate)});return function(b){return a.apply(this,
arguments)}}();c.queryGraphics=function(){return Promise.resolve(this.graphicsView.graphics)};c.update=function(a){this.graphicsView.processUpdate(a)};c.moveStart=function(){};c.viewChange=function(){this.graphicsView.viewChange()};c.moveEnd=function(){};c.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating};c.highlight=function(a){let b;"number"===typeof a?b=[a]:a instanceof l?b=[a.uid]:Array.isArray(a)&&0<a.length?b="number"===typeof a[0]?a:a.map(d=>d&&d.uid):m.isCollection(a)&&
0<a.length&&(b=a.map(d=>d&&d.uid).toArray());b=b?.filter(d=>null!=d);if(!b.length)return v;this._addHighlight(b);return{remove:()=>this._removeHighlight(b)}};c._addHighlight=function(a){for(const b of a)this._highlightIds.has(b)?(a=this._highlightIds.get(b),this._highlightIds.set(b,a+1)):this._highlightIds.set(b,1);this._updateHighlight()};c._removeHighlight=function(a){for(const b of a)this._highlightIds.has(b)&&(a=this._highlightIds.get(b)-1,0===a?this._highlightIds.delete(b):this._highlightIds.set(b,
a));this._updateHighlight()};c._updateHighlight=function(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))};return g}(q.LayerView2DMixin(u));h.__decorate([n.property()],e.prototype,"graphicsView",void 0);return e=h.__decorate([p.subclass("esri.views.2d.layers.GraphicsLayerView2D")],e)});
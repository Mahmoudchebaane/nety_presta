// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/Error ../../../core/has ../../../core/accessorSupport/decorators/subclass ./DynamicLayerView3D ../../layers/ImageryLayerView".split(" "),function(f,n,l,p,q,h,v,w,x,y,r,t,u){h=function(m){function k(){var d=m.apply(this,arguments)||this;d.type="imagery-3d";
d.redrawDebounced=p.debounce(function(){var a=f._asyncToGenerator(function*(c){d.redraw((b,g)=>d._redrawImage(b,g),c)});return function(c){return a.apply(this,arguments)}}(),2E3);return d}f._inheritsLoose(k,m);var e=k.prototype;e.initialize=function(){this.handles.add([q.when(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this.updatingHandles.addPromise(this.redrawDebounced()))]);this.updatingHandles.add(()=>this.layer?.exportImageServiceParameters?.version,
()=>{this.updatingHandles.addPromise(this.refreshDebounced())});this.updatingHandles.add(()=>this.layer?.renderer,()=>{this.updatingHandles.addPromise(this.refreshDebounced())});this.updatingHandles.add(()=>this.timeExtent,()=>this.updatingHandles.addPromise(this.refreshDebounced()))};e._initializeMaximumDataResolution=function(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null};e.getFetchOptions=function(){return{timeExtent:this.timeExtent}};e.processResult=
function(){var d=f._asyncToGenerator(function*(a,c,b){c.imageOrCanvasElement?a.image=c.imageOrCanvasElement:(a.image=document.createElement("canvas"),a.pixelData=c.pixelData,yield this._redrawImage(a,b))});return function(a,c,b){return d.apply(this,arguments)}}();e._redrawImage=function(){var d=f._asyncToGenerator(function*(a,c){if(!(a.image instanceof HTMLCanvasElement)||l.isNone(a.pixelData))throw Error();var b=a.image;const g=b.getContext("2d");a=yield this.layer.applyRenderer(a.pixelData,{signal:c});
a=this.layer.applyFilter(a).pixelBlock;if(l.isNone(a))throw Error();b.width=a.width;b.height=a.height;b=g.createImageData(a.width,a.height);b.data.set(a.getAsRGBA());g.putImageData(b,0,0)});return function(a,c){return d.apply(this,arguments)}}();return k}(u(t));return h=n.__decorate([r.subclass("esri.views.3d.layers.ImageryLayerView3D")],h)});
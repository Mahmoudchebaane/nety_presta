// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Color ../../../core/Accessor ../../../core/Handles ../../../core/maybe ../../../core/reactiveUtils ../../../core/throttle ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec4f64 ../../../geometry/Polyline ../../../views/3d/interactive/visualElements/OutlineVisualElement ./constants".split(" "),
function(h,u,m,v,w,x,l,q,y,r,F,G,z,A,B,C,D){h.ProfileLines3D=function(t){function n(a){a=t.call(this,a)||this;a._chartData=null;a._visualElements=[];a._handles=new x;return a}u._inheritsLoose(n,t);var f=n.prototype;f.initialize=function(){const a=y.throttle(c=>{this._update(c)},100);this._handles.add([q.watch(()=>({spatialReference:this.view.spatialReference,chartData:this._chartData}),a,q.syncAndInitial),a])};f.destroy=function(){this._handles.destroy();this._destroyVisualElements()};f.remove=function(){this._destroyVisualElements()};
f.update=function(a){this._chartData=a};f._update=function(a){var {chartData:c}=a;if(l.isNone(c))return this.remove();if(c.refined){var e=this._visualElements;c=c.lines.filter(k=>k.viewVisualizationEnabled);for(var g=c.length;e.length>g;)e.pop().destroy();for(var b=D.getConfig().profileLinesStyle3D;e.length<g;){var d=new C.OutlineVisualElement({view:this.view,elevationInfo:{mode:"absolute-height",offset:0},innerWidth:b.width-b.outlineSize,width:b.width,falloff:b.falloff,color:b.outlineColor,renderOccluded:b.renderOccluded});
e.push(d)}a=a.spatialReference;for(b=0;b<g;++b){d=e[b];const k=c[g-1-b];d.geometry=this._createLineGeometry(k,a);d.innerColor=A.fromArray(v.toUnitRGBA(k.color))}}};f._createLineGeometry=function(a,c){a=l.unwrapOr(a.samples,[]);const e=a.length-1,g=[];let b=[];for(let d=0;d<=e;d++){const {x:k,y:E,z:p}=a[d];l.isSome(p)&&b.push([k,E,p]);(d===e||l.isNone(p))&&b.length&&(g.push(b),b=[])}return new B({paths:g,hasZ:!0,spatialReference:c})};f._destroyVisualElements=function(){this._visualElements.forEach(a=>
a.destroy());this._visualElements.length=0};return n}(w);m.__decorate([r.property()],h.ProfileLines3D.prototype,"view",void 0);m.__decorate([r.property()],h.ProfileLines3D.prototype,"_chartData",void 0);h.ProfileLines3D=m.__decorate([z.subclass("esri.widgets.ElevationProfile.support.ProfileLines3D")],h.ProfileLines3D);Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
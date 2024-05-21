// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/support/mediaUtils":function(){define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Polygon ../../geometry/projection ../../geometry/support/aaBoundingRect ../../geometry/support/normalizeUtilsSync".split(" "),function(k,m,a,n,A,D,h,c,x,u,K,
v,y){k.MediaElementView=function(p){function H(B){return p.call(this,B)||this}m._inheritsLoose(H,p);m._createClass(H,[{key:"bounds",get:function(){const B=this.coords;return A.isNone(B)||A.isNone(B.extent)?null:v.fromExtent(B.extent)}},{key:"coords",get:function(){const B=A.unwrap(this.element.georeference)?.coords;return K.projectOrLoad(B,this.spatialReference).geometry}},{key:"normalizedCoords",get:function(){return u.fromJSON(y.normalizeCentralMeridianSync(this.coords))}},{key:"normalizedBounds",
get:function(){const B=A.isSome(this.normalizedCoords)?this.normalizedCoords.extent:null;return A.isSome(B)?v.fromExtent(B):null}}]);return H}(n);a.__decorate([D.property()],k.MediaElementView.prototype,"spatialReference",void 0);a.__decorate([D.property()],k.MediaElementView.prototype,"element",void 0);a.__decorate([D.property()],k.MediaElementView.prototype,"bounds",null);a.__decorate([D.property()],k.MediaElementView.prototype,"coords",null);a.__decorate([D.property()],k.MediaElementView.prototype,
"normalizedCoords",null);a.__decorate([D.property()],k.MediaElementView.prototype,"normalizedBounds",null);k.MediaElementView=a.__decorate([x.subclass("esri.layers.support.media.MediaElementView")],k.MediaElementView);Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"esri/views/2d/engine/webgl/Overlay":function(){define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Error ../../../../core/events ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/perspectiveUtils ../../../../core/reactiveUtils ../../../../chunks/mat3f64 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../DisplayObject ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/Texture ../../../webgl/VertexArrayObject ../../../webgl/capabilities/isWebGL2Context".split(" "),
function(k,m,a,n,A,D,h,c,x,u,K,v,y,p,H,B,d){const q=x.create();return function(J){function G(b){var f=J.call(this)||this;f.elementView=b;f.isWrapAround=!1;f.perspectiveTransform=K.create();f._vertices=new Float32Array(20);f._handles=[];f._handles.push(c.watch(()=>f.elementView.element.opacity,g=>f.opacity=g,c.initial),c.watch(()=>[f.elementView.coords],()=>{f.requestRender()},c.initial),c.when(()=>f.elementView.element.loaded,()=>{const g=f.elementView.element;f.ready();"video"===g.type&&D.isSome(g.content)&&
f._handles.push(a.on(g.content,"play",()=>f.requestRender()))},c.initial));b.element.load().catch(g=>{n.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new m("element-load-error","Element cannot be displayed",{element:b,error:g}))});return f}k._inheritsLoose(G,J);var l=G.prototype;l.destroy=function(){this._handles.forEach(b=>b.remove());this.texture?.dispose();this.texture=null};l.beforeRender=function(b){const {context:f}=b,g=this.elementView.element.content;if(D.isSome(g)){var C=g instanceof
HTMLImageElement;const r=g instanceof HTMLVideoElement,E=C?g.naturalWidth:r?g.videoWidth:g.width;C=C?g.naturalHeight:r?g.videoHeight:g.height;this._updatePerspectiveTransform(E,C);this.texture?r&&!g.paused&&(this.texture.setData(g),this.requestRender(),(d(f.gl)||A.isPowerOfTwo(E)&&A.isPowerOfTwo(C))&&this.texture.generateMipmap()):(this.texture=new H.Texture(f,{pixelFormat:p.PixelFormat.RGBA,dataType:p.PixelType.UNSIGNED_BYTE,samplingMode:p.TextureSamplingMode.LINEAR,wrapMode:p.TextureWrapMode.CLAMP_TO_EDGE,
width:E,height:C,preMultiplyAlpha:!0},g),(d(f.gl)||A.isPowerOfTwo(E)&&A.isPowerOfTwo(C))&&this.texture.generateMipmap(),r&&!g.paused&&this.requestRender())}J.prototype.beforeRender.call(this,b)};l._createTransforms=function(){return null};l.updateDrawCoords=function(b,f){var g=this.elementView.coords;if(!D.isNone(g)){var [C,r,E,L]=g.rings[0];g=this._vertices;var {x:F,y:z}=b;(b=0!==f)?g.set([r[0]-F,r[1]-z,C[0]-F,C[1]-z,E[0]-F,E[1]-z,L[0]-F,L[1]-z,L[0]-F,L[1]-z,r[0]+f-F,r[1]-z,r[0]+f-F,r[1]-z,C[0]+
f-F,C[1]-z,E[0]+f-F,E[1]-z,L[0]+f-F,L[1]-z]):g.set([r[0]-F,r[1]-z,C[0]-F,C[1]-z,E[0]-F,E[1]-z,L[0]-F,L[1]-z]);this.isWrapAround=b}};l.getVAO=function(b,f,g){if(D.isNone(this.elementView.coords))return null;var C=this._vertices;this._vao?this._geometryVbo.setData(C):(this._geometryVbo=y.BufferObject.createVertex(b,p.Usage.DYNAMIC_DRAW,C),C=y.BufferObject.createVertex(b,p.Usage.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1])),this._vao=new B.VertexArrayObject(b,g,f,{geometry:this._geometryVbo,
tex:C}));return this._vao};l._updatePerspectiveTransform=function(b,f){const g=this._vertices;h.getProjectiveTransform(q,[0,0,b,0,0,f,b,f],[g[0],g[1],g[4],g[5],g[2],g[3],g[6],g[7]]);u.set(this.perspectiveTransform,q[6]/q[8]*b,q[7]/q[8]*f)};k._createClass(G,[{key:"dvsMat3",get:function(){return this.parent.dvsMat3}}]);return G}(v.DisplayObject)})},"esri/core/perspectiveUtils":function(){define("exports ../chunks/mat3 ../chunks/mat3f64 ../chunks/vec2 ../chunks/vec3 ../chunks/vec3f64".split(" "),function(k,
m,a,n,A,D){function h(v,y,p,H,B,d,q,J,G){m.set(v,y,H,d,p,B,q,1,1,1);A.set(c,J,G,1);m.adjoint(x,v);const [l,b,f]=A.transformMat3(c,c,m.transpose(x,x));m.set(x,l,0,0,0,b,0,0,0,f);return m.multiply(v,x,v)}const c=D.create(),x=a.create(),u=a.create(),K=a.create();k.getProjectiveTransform=function(v,y,p){h(u,y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7]);h(K,p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7]);return m.multiply(v,m.adjoint(u,u),K)};k.transformProjective=function(v,y,p){A.set(c,y[0],y[1],1);A.transformMat3(c,
c,m.transpose(x,p));return 0===c[2]?n.set(v,c[0],c[1]):n.set(v,c[0]/c[2],c[1]/c[2])};Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"esri/chunks/mat3f64":function(){define(["exports"],function(k){function m(){return[1,0,0,0,1,0,0,0,1]}function a(h){return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8]]}function n(h,c,x,u,K,v,y,p,H){return[h,c,x,u,K,v,y,p,H]}function A(h,c){return new Float64Array(h,c,9)}const D=Object.freeze(Object.defineProperty({__proto__:null,
create:m,clone:a,fromValues:n,createView:A},Symbol.toStringTag,{value:"Module"}));k.clone=a;k.create=m;k.createView=A;k.fromValues=n;k.mat3f64=D})},"esri/views/2d/engine/webgl/OverlayContainer":function(){define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/screenUtils ../../../../chunks/mat3 ../../../../chunks/mat3f32 ../../../../chunks/vec2f32 ../../../../chunks/vec3f32 ../../../../geometry/support/normalizeUtils ../../../../geometry/support/spatialReferenceUtils ../../viewpointUtils ../brushes ./enums ./WGLContainer".split(" "),
function(k,m,a,n,A,D,h,c,x,u,K,v,y){return function(p){function H(){var d=p.apply(this,arguments)||this;d._localOrigin=a.createScreenPoint(0,0);d._viewStateId=-1;d._dvsMat3=A.create();d.requiresDedicatedFBO=!1;return d}k._inheritsLoose(H,p);var B=H.prototype;B.beforeRender=function(d){this._updateMatrices(d);this._updateOverlays(d,this.children);for(const q of this.children)q.beforeRender(d)};B.prepareRenderPasses=function(d){const q=d.registerRenderPass({name:"overlay",brushes:[K.brushes.overlay],
target:()=>this.children,drawPhase:v.WGLDrawPhase.MAP});return[...p.prototype.prepareRenderPasses.call(this,d),q]};B._updateMatrices=function(d){var {state:q}=d;const {id:J,size:G,pixelRatio:l,resolution:b,rotation:f,viewpoint:g,displayMat3:C}=q;if(this._viewStateId!==J){d=Math.PI/180*f;var r=l*G[0],E=l*G[1],{x:L,y:F}=g.targetGeometry;q=c.normalizeMapX(L,q.spatialReference);this._localOrigin.x=q;this._localOrigin.y=F;q=b*r;var z=b*E,w=n.identity(this._dvsMat3);n.multiply(w,w,C);n.translate(w,w,D.fromValues(r/
2,E/2));n.scale(w,w,h.fromValues(r/q,-E/z,1));n.rotate(w,w,-d);this._viewStateId=J}};B._updateOverlays=function(d,q){const {state:J}=d,{rotation:G,spatialReference:l,worldScreenWidth:b,size:f,viewpoint:g}=J;d=this._localOrigin;let C=0;if(l.isWrappable){var r=180/Math.PI*G,E=Math.round(f[0]*Math.abs(Math.cos(r))+f[1]*Math.abs(Math.sin(r)));const [F,z]=x.getInfo(l).valid;r=u.getWorldWidth(l);const {x:w,y:e}=g.targetGeometry,t=[0,0];J.toScreen(t,[w,e]);const I=[0,0];E=E>b?.5*b:.5*E;var L=Math.floor((w+
.5*r)/r);const M=F+L*r;L=z+L*r;const N=[t[0]+E,0];J.toMap(I,N);I[0]>L&&(C=r);N[0]=t[0]-E;J.toMap(I,N);I[0]<M&&(C=-r);for(const O of q){q=O.elementView.bounds;if(m.isNone(q))continue;const [P,,Q]=q;P<F&&Q>F?O.updateDrawCoords(d,r):Q>z&&P<z?O.updateDrawCoords(d,-r):O.updateDrawCoords(d,C)}}else for(r of q)r.updateDrawCoords(d,C)};k._createClass(H,[{key:"dvsMat3",get:function(){return this._dvsMat3}}]);return H}(y)})},"esri/views/2d/layers/LayerView2D":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/collectionUtils ../../../core/Error ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../engine/Container ../../layers/support/ClipRect ../../layers/support/Geometry ../../layers/support/Path".split(" "),
function(k,m,a,n,A,D,h,c,x,u,K,v,y,p,H){const B=n.ofType({key:"type",base:null,typeMap:{rect:y,path:H,geometry:p}});k.LayerView2DMixin=d=>{d=function(q){function J(){var l=q.apply(this,arguments)||this;l.attached=!1;l.clips=new B;l.lastUpdateId=-1;l.moving=!1;l.updateRequested=!1;l.visibleAtCurrentScale=!1;return l}m._inheritsLoose(J,q);var G=J.prototype;G.initialize=function(){const l=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&l&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new D("layerview:spatial-reference-incompatible",
"The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new v.Container),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([h.watch(()=>this.suspended,b=>{this.container&&(this.container.visible=!b);this.view&&!b&&this.updateRequested&&this.view.requestUpdate()},h.syncAndInitial),h.watch(()=>this.layer?.opacity??1,b=>{this.container&&(this.container.opacity=
b)},h.syncAndInitial),h.watch(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",b=>{this.container&&(this.container.blendMode=b)},h.syncAndInitial),h.watch(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,b=>{this.container&&(this.container.effect=b)},h.syncAndInitial),h.on(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},h.syncAndInitial),h.watch(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?
this.layer.effectiveScaleRange:null}),({scale:b})=>{b=b&&this.isVisibleAtScale(b);b!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",b)},h.syncAndInitial)]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(b=>{b===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))};G.destroy=function(){this.processDetach();this.updateRequested=!1};G.processAttach=function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&
(this.attach(),this.attached=!0,this.requestUpdate())};G.processDetach=function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)};G.isVisibleAtScale=function(l){const b=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!b)return!0;const {minScale:f,maxScale:g}=b;return(0===f||l<=f)&&(0===g||l>=g)};G.requestUpdate=function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())};G.processUpdate=
function(l){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",l),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(l)))};G.hitTest=function(l,b){return Promise.resolve(null)};G.supportsSpatialReference=function(l){return!0};G.canResume=function(){return this.spatialReferenceSupported?q.prototype.canResume.call(this)?this.visibleAtCurrentScale:!1:!1};G.getSuspendInfo=function(){const l=q.prototype.getSuspendInfo.call(this),b=!this.spatialReferenceSupported,
f=this.visibleAtCurrentScale;b&&(l.spatialReferenceNotSupported=b);f&&(l.outsideScaleRange=f);return l};m._createClass(J,[{key:"spatialReferenceSupported",get:function(){const l=this.view?.spatialReference;return null==l||this.supportsSpatialReference(l)}},{key:"updating",get:function(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}}]);return J}(d);a.__decorate([c.property()],d.prototype,"attached",
void 0);a.__decorate([c.property({type:B,set(q){q=A.referenceSetter(q,this._get("clips"),B);this._set("clips",q)}})],d.prototype,"clips",void 0);a.__decorate([c.property()],d.prototype,"container",void 0);a.__decorate([c.property()],d.prototype,"moving",void 0);a.__decorate([c.property({readOnly:!0})],d.prototype,"spatialReferenceSupported",null);a.__decorate([c.property({readOnly:!0})],d.prototype,"updateParameters",void 0);a.__decorate([c.property()],d.prototype,"updateRequested",void 0);a.__decorate([c.property()],
d.prototype,"updating",null);a.__decorate([c.property()],d.prototype,"view",void 0);a.__decorate([c.property({readOnly:!0})],d.prototype,"visibleAtCurrentScale",void 0);return d=a.__decorate([K.subclass("esri.views.2d.layers.LayerView2D")],d)};Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"esri/views/layers/support/ClipRect":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./ClipArea".split(" "),
function(k,m,a,n,A,D,h){var c;n=c=function(x){function u(v){v=x.call(this,v)||this;v.type="rect";v.left=null;v.right=null;v.top=null;v.bottom=null;return v}k._inheritsLoose(u,x);var K=u.prototype;K.clone=function(){return new c({left:this.left,right:this.right,top:this.top,bottom:this.bottom})};K.commitVersionProperties=function(){this.commitProperty("left");this.commitProperty("right");this.commitProperty("top");this.commitProperty("bottom")};return u}(h);m.__decorate([a.property({type:[Number,String],
json:{write:!0}})],n.prototype,"left",void 0);m.__decorate([a.property({type:[Number,String],json:{write:!0}})],n.prototype,"right",void 0);m.__decorate([a.property({type:[Number,String],json:{write:!0}})],n.prototype,"top",void 0);m.__decorate([a.property({type:[Number,String],json:{write:!0}})],n.prototype,"bottom",void 0);return n=c=m.__decorate([D.subclass("esri.views.layers.support.ClipRect")],n)})},"esri/views/layers/support/ClipArea":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),
function(k,m,a,n,A,D,h){a=function(c){function x(){return c.apply(this,arguments)||this}k._inheritsLoose(x,c);k._createClass(x,[{key:"version",get:function(){this.commitVersionProperties();return(this._get("version")||0)+1}}]);return x}(a.JSONSupport);m.__decorate([n.property({readOnly:!0})],a.prototype,"version",null);return a=m.__decorate([h.subclass("esri.views.layers.support.ClipArea")],a)})},"esri/views/layers/support/Geometry":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/Geometry ../../../geometry/support/jsonUtils ./ClipArea ../../../geometry/Extent ../../../geometry/Polygon".split(" "),
function(k,m,a,n,A,D,h,c,x,u,K,v){var y;a={base:c,key:"type",typeMap:{extent:K,polygon:v}};u=y=function(p){function H(d){d=p.call(this,d)||this;d.type="geometry";d.geometry=null;return d}k._inheritsLoose(H,p);var B=H.prototype;B.clone=function(){return new y({geometry:this.geometry?.clone()??null})};B.commitVersionProperties=function(){this.commitProperty("geometry")};return H}(u);m.__decorate([n.property({types:a,json:{read:x.fromJSON,write:!0}})],u.prototype,"geometry",void 0);return u=y=m.__decorate([h.subclass("esri.views.layers.support.Geometry")],
u)})},"esri/views/layers/support/Path":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./ClipArea".split(" "),function(k,m,a,n,A,D,h){n=function(c){function x(u){u=c.call(this,u)||this;u.type="path";u.path=[];return u}k._inheritsLoose(x,c);x.prototype.commitVersionProperties=function(){this.commitProperty("path")};
return x}(h);m.__decorate([a.property({type:[[[Number]]],json:{write:!0}})],n.prototype,"path",void 0);return n=m.__decorate([D.subclass("esri.views.layers.support.Path")],n)})},"*noref":1}});
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Collection ../../../core/Logger ../../../core/MapUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/aaBoundingRect ../../../geometry/support/contains ../../../layers/support/mediaUtils ../tiling/PagedTileQueue ../tiling/TileInfoView ../tiling/TileKey ../tiling/TileQueue ../tiling/TileStrategy ../engine/webgl/Overlay ../engine/webgl/OverlayContainer ./LayerView2D ../../layers/LayerView ../../../geometry/Extent".split(" "),function(k,
m,a,n,A,D,h,c,x,u,K,v,y,p,H,B,d,q,J,G,l,b,f,g,C,r){a=function(F){function z(){var e=F.apply(this,arguments)||this;e._overlayContainer=null;e._fetchQueue=null;e._tileStrategy=null;e._elementReferences=new Map;e.layer=null;e.elements=new n;return e}k._inheritsLoose(z,F);var w=z.prototype;w.attach=function(){this.handles.add(x.on(()=>this.layer.source,"refresh",()=>{for(const e of this._tileStrategy.tiles)this._updateTile(e);this.requestUpdate()}));this._overlayContainer=new f;this.container.addChild(this._overlayContainer);
this._fetchQueue=new G({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)});this._tileStrategy=new l({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme});this.requestUpdate()};w.detach=function(){this.handles.removeAll();this.elements.removeAll();this._tileStrategy.destroy();this._fetchQueue.destroy();this._overlayContainer.removeAllChildren();this.container.removeAllChildren();
this._elementReferences.clear()};w.supportsSpatialReference=function(e){return!0};w.moveStart=function(){this.requestUpdate()};w.viewChange=function(){this.requestUpdate()};w.moveEnd=function(){this.requestUpdate()};w.update=function(e){this._tileStrategy.update(e)};w.hitTest=function(){var e=k._asyncToGenerator(function*(t,I){I=[];var M=t.normalize();M=[M.x,M.y];for(const {projectedElement:{normalizedCoords:N,element:O}}of this._elementReferences.values())h.isSome(N)&&H.ringsContainsCoords(N.rings,
M)&&I.push({type:"media",element:O,layer:this.layer,mapPoint:t});return I.reverse()});return function(t,I){return e.apply(this,arguments)}}();w.canResume=function(){return null!=this.layer.source&&F.prototype.canResume.call(this)};w.doRefresh=function(){var e=k._asyncToGenerator(function*(){});return function(){return e.apply(this,arguments)}}();w._acquireTile=function(e){e=new L(e.clone());this._updateTile(e);return e};w._updateTile=function(e){this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then(t=>
{const [I,M]=e.setElements(t);this._acquireElements(e,I);this._releaseElements(e,M);this.requestUpdate()},t=>{c.isAbortError(t)||A.getLogger(this.declaredClass).error(t)}))};w._releaseTile=function(e){this._fetchQueue.abort(e.key.id);e.elements&&this._releaseElements(e,e.elements);this.requestUpdate()};w._queryElements=function(){var e=k._asyncToGenerator(function*(t,I){const M=this.layer.source;if(h.isNone(M))return[];this.view.featuresTilingScheme.getTileBounds(E,t,!0);t=new r({xmin:E[0],ymin:E[1],
xmax:E[2],ymax:E[3],spatialReference:this.view.spatialReference});return M.queryElements(t,I)});return function(t,I){return e.apply(this,arguments)}}();w._acquireElements=function(e,t){const I=this.view.spatialReference;if(!h.isNone(this.layer.source))for(const M of t)D.getOrCreateMapValue(this._elementReferences,M.uid,()=>{const N=new B.MediaElementView({element:M,spatialReference:I}),O=new b(N);this._overlayContainer.addChild(O);this.elements.add(M);return{tiles:new Set,projectedElement:N,overlay:O}}).tiles.add(e)};
w._releaseElements=function(e,t){for(const I of t)t=this._elementReferences.get(I.uid),t.tiles.delete(e),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(I.uid),this.elements.remove(I))};return z}(g.LayerView2DMixin(C));m.__decorate([u.property()],a.prototype,"_fetchQueue",void 0);m.__decorate([u.property()],a.prototype,"layer",void 0);m.__decorate([u.property({readOnly:!0})],a.prototype,"elements",void 0);
a=m.__decorate([y.subclass("esri.views.2d.layers.MediaLayerView2D")],a);const E=p.create();let L=function(){function F(z){this.key=z;this.elements=null;this.isReady=!1;this.visible=!0}F.prototype.setElements=function(z){const w=[],e=new Set(this.elements);this.elements=z;for(const t of z)e.has(t)?e.delete(t):w.push(t);this.isReady=!0;return[w,Array.from(e)]};return F}();return a});
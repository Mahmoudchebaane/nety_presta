// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../support/elevationInfoUtils ../../../../../symbols/support/ElevationInfo ../../SegmentLabels3D ../../SnappingVisualizer3D ../settings ../../visualElements/ExtendedLineVisualElement ../../visualElements/OutlineVisualElement ../../visualElements/VerticesVisualElement ../../../layers/graphics/elevationAlignmentUtils ../../../layers/graphics/ElevationContext ../../../layers/graphics/GraphicState ../../../webgl-engine/lib/Material ../../../../draw/DrawGraphicTool ../../../../draw/DrawOperation ../../../../draw/drawSurfaces".split(" "),
function(d,z,h,k,c,t,l,N,O,A,B,C,n,D,E,F,e,G,H,u,I,J,K,L,v,M,w){d.DrawGraphicTool3D=function(x){function p(a){a=x.call(this,a)||this;a._activeVertexVisualElement=null;a._createGraphicState=null;a._outlineVisualElement=null;a._verticesVisualElement=null;a._verticalLineVisualElement=null;a.geometryType=null;a.type="draw-3d";return a}z._inheritsLoose(p,x);var f=p.prototype;f.initialize=function(){const {mode:a,offset:b}=this.elevationInfo;this.internalGraphicsLayer.elevationInfo=new D({mode:a,offset:b})};
f.normalizeCtorArgs=function(a){return a.elevationInfo?a:{...a,elevationInfo:n.getEffectiveElevationInfo(a.hasZ??!0)}};f.initializeGraphic=function(a){const b=this._createGraphicState=new K.GraphicState({graphic:a});return k.handlesGroup([this.view.maskOccludee(a),this.view.trackGraphicState(b),t.watch(()=>({element:this._outlineVisualElement,isDraped:b.isDraped}),({element:m,isDraped:q})=>{c.applySome(m,r=>r.isDraped=q)},t.initial)])};f.makeDrawOperation=function(){const {geometryType:a}=this,b=
"circle"!==a&&"rectangle"!==a;return new M.DrawOperation({view:this.view,manipulators:this.manipulators,geometryType:v.geometryTypeToDrawOperationGeometryType(a),drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:new w.SceneDrawSurface(this.view,this.elevationInfo,[this.internalGraphicsLayer]),elevationDrawSurface:new w.ElevationDrawSurface(this.elevationInfo,this.defaultZ,this.view,this.internalGraphicsLayer),hasM:!1,elevationInfo:this.elevationInfo,
snappingManager:this.snappingManager,snappingVisualizer:new F.SnappingVisualizer3D,segmentLabels:b?new E.SegmentLabels3D:null,labelOptions:this.labelOptions,tooltipOptions:this.tooltipOptions,isDraped:c.isSome(this._createGraphicState)?this._createGraphicState.isDraped:"on-the-ground"===n.getEffectiveElevationMode(this.hasZ,this.elevationInfo)})};f.onActiveVertexChanged=function(a){const {view:b}=this;if(c.isSome(this._activeVertexVisualElement))return this._activeVertexVisualElement.vertices=[a],
this._updateVerticalLineVisualElement(a),null;this._activeVertexVisualElement=new u.VerticesVisualElement({view:b,spatialReference:b.spatialReference,vertices:[a],elevationInfo:this.internalGraphicsLayer.elevationInfo,renderOccluded:e.settings.reshapeManipulators.vertex.renderOccluded,attached:!1});this._activeVertexVisualElement.color=e.settings.colorToVec4(e.settings.reshapeManipulators.selected.color);this._activeVertexVisualElement.attached=!0;this._verticalLineVisualElement=new G.ExtendedLineVisualElement({view:b,
extensionType:e.settings.visualElements.zVerticalLine.extensionType,innerWidth:1,attached:!1,writeDepthEnabled:!1,renderOccluded:L.RenderOccludedFlag.OccludeAndTransparent});e.settings.visualElements.zVerticalLine.apply(this._verticalLineVisualElement);return k.makeHandle(()=>{this._activeVertexVisualElement=c.destroyMaybe(this._activeVertexVisualElement);this._verticalLineVisualElement=c.destroyMaybe(this._verticalLineVisualElement)})};f._updateVerticalLineVisualElement=function(a){const b=this._verticalLineVisualElement;
if(!c.isNone(b)){var {renderCoordsHelper:m,spatialReference:q,elevationProvider:r}=this.view;B.set(g,a[0],a[1],a[2]);y.setFromElevationInfo(this.elevationInfo);g[2]=I.evaluateElevationAlignmentAtPoint(g,r,y,m);m.toRenderCoords(g,q,g)?(b.setStartEndFromWorldDownAtLocation(g),b.attached=!0):b.attached=!1}};f.onOutlineChanged=function(a){if(c.isSome(this._outlineVisualElement))return this._outlineVisualElement.geometry=a,null;const b=this.internalGraphicsLayer.elevationInfo;this._outlineVisualElement=
new H.OutlineVisualElement({view:this.view,geometry:a,elevationInfo:b,isDraped:c.isSome(this._createGraphicState)?this._createGraphicState.isDraped:"on-the-ground"===n.getEffectiveElevationMode(this.hasZ,b),attached:!1});e.settings.visualElements.lineGraphics.outline.apply(this._outlineVisualElement);e.settings.visualElements.lineGraphics.shadowStyle.apply(this._outlineVisualElement);this._outlineVisualElement.attached=!0;this._outlineVisualElement.laserlineEnabled=!0;return k.makeHandle(()=>{this._outlineVisualElement=
c.destroyMaybe(this._outlineVisualElement)})};f.onRegularVerticesChanged=function(a){if(c.isSome(this._verticesVisualElement))return this._verticesVisualElement.vertices=a,null;this._verticesVisualElement=new u.VerticesVisualElement({view:this.view,spatialReference:this.view.spatialReference,vertices:a,elevationInfo:this.internalGraphicsLayer.elevationInfo,renderOccluded:e.settings.reshapeManipulators.vertex.renderOccluded,attached:!1});this._verticesVisualElement.attached=!0;return k.makeHandle(()=>
{this._verticesVisualElement=c.destroyMaybe(this._verticesVisualElement)})};return p}(v.DrawGraphicTool);h.__decorate([l.property({constructOnly:!0})],d.DrawGraphicTool3D.prototype,"elevationInfo",void 0);h.__decorate([l.property({constructOnly:!0})],d.DrawGraphicTool3D.prototype,"geometryType",void 0);h.__decorate([l.property()],d.DrawGraphicTool3D.prototype,"type",void 0);h.__decorate([l.property({constructOnly:!0})],d.DrawGraphicTool3D.prototype,"view",void 0);d.DrawGraphicTool3D=h.__decorate([A.subclass("esri.views.3d.interactive.editingTools.draw.DrawGraphicTool3D")],
d.DrawGraphicTool3D);const y=new J.ElevationContext,g=C.create();Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
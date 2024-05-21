// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Evented ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/quantityUtils ../../../../../core/reactiveUtils ../../../../../core/screenUtils ../../../../../core/unitUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/mat4 ../../../../../chunks/vec2 ../../../../../chunks/vec2f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/aaBoundingRect ../../../../../chunks/boundedPlane ../../../../../geometry/support/plane ../../../../../geometry/support/ray ../../../../../geometry/support/vectorStacks ../../../../../support/elevationInfoUtils ../../../analysis/Slice/sliceToolUtils ../../../analysis/Slice/images/Factory ../../Manipulator3D ../../manipulatorUtils ../dragEventPipeline3D ../ManipulatorType ../manipulatorUtils ../visualElementUtils ../manipulations/MoveManipulation ../manipulations/MoveXYGraphicManipulation ./PreserveAspectRatio ../../visualElements/OutlineVisualElement ../../../layers/graphics/elevationAlignmentUtils ../../../layers/graphics/ElevationContext ../../../layers/graphics/GraphicState ../../../support/geometryUtils/ray ../../../../interactive/dragEventPipeline ../../../../interactive/InteractiveToolBase ../../../../interactive/editGeometry/EditGeometryOperations ../../../../interactive/editGeometry/interfaces ../../../../interactive/editGeometry/operations/UpdateVertices ../../../../interactive/editGeometry/support/editPlaneUtils ../../../../interactive/sketch/SketchTooltipOptions ../../../../interactive/tooltip/ExtentTooltipInfos ../../../../interactive/tooltip/Tooltip ../../../../interactive/tooltip/TranslateTooltipInfos ../../../../support/automaticLengthMeasurementUtils ../../../../support/euclideanLengthMeasurementUtils".split(" "),
function(k,Q,p,W,X,Y,Z,h,aa,y,ba,L,q,ya,za,ca,da,u,M,l,N,ea,v,F,fa,w,ha,m,ia,ja,G,O,r,ka,la,H,ma,na,oa,pa,qa,ra,sa,E,ta,ua,C,R,t,S,T,va,U,wa,xa){k.ExtentTransformTool=function(V){function I(a){a=V.call(this,a)||this;a.enableZ=!0;a.enableRotation=!0;a.enableScaling=!0;a.tooltipOptions=new S;a._preserveAspectRatio=new na.PreserveAspectRatio;a.grabbing=!1;a.inputState=null;a.type="transform-3d";a._handles=new X;a._moveZManipulator=null;a._resizeManipulators=null;a._rotateManipulator=null;a._attachmentOrigin=
null;a._outlineVisualElement=null;a._mapBounds=v.create();a._mapBoundsStart=v.create();a._zmax=0;a._sizeStart=null;a._displayBounds=v.create();a._displayBoundsStart=v.create();a._displayBoundsMarginStart=0;a._resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}];a._moveXYTooltipInfo=null;a._moveZTooltipInfo=null;a._rotateTooltipInfo=null;a._scaleTooltipInfo=null;a._startAngle=0;a._endAngle=
0;a._startScale=M.create();a._endScale=M.create();return a}Q._inheritsLoose(I,V);var f=I.prototype;f.initialize=function(){const {view:a,graphic:b,manipulators:d,_handles:c}=this,e=this._graphicState=new ra.GraphicState({graphic:b});this._editGeometryOperations=ua.EditGeometryOperations.fromGeometry(b.geometry,a.state.viewingMode);this._graphicMoveManipulation=new ma.MoveXYGraphicManipulation({tool:this,view:a,graphicState:e});this._moveZManipulator=m.createShiftManipulator(a,m.OffsetMode.CENTER_ON_CALLOUT);
this._moveZManipulator.state|=m.IsShiftEdgeOnScreenFlag;c.add([this._createMoveXYGraphicDragPipeline(),y.watch(()=>this.enableZ,()=>this._updateManipulatorAvailability(this._moveZManipulator,r.ManipulatorType.TRANSLATE_Z)),this._createMoveZDragPipeline()]);d.add(this._moveZManipulator);this._resizeManipulators=this._resizeHandles.map(n=>{const x=m.createResizeManipulator(a,n);c.add([y.watch(()=>this.enableScaling,()=>this._updateManipulatorAvailability(x,r.ManipulatorType.SCALE)),x.events.on("grab-changed",
D=>this._onResizeGrab(D)),this._createResizeDragPipeline(x,n)]);return x});d.addMany(this._resizeManipulators);this._rotateManipulatorTexture=ia.getRotateHeadingTexture(a.toolViewManager.textures);this._rotateManipulator=G.createRotateManipulator(a,{texture:this._rotateManipulatorTexture.texture});c.add([y.watch(()=>this.enableRotation,()=>this._updateManipulatorAvailability(this._rotateManipulator,r.ManipulatorType.ROTATE)),this._rotateManipulator.events.on("grab-changed",n=>{this._onRotateGrab(n)}),
this._createRotateDragPipeline(this._rotateManipulator)]);d.add(this._rotateManipulator);this._calculateMapBounds();this._updateDisplayBounds();const g=la.createVisualElements({view:a,graphic:b,forEachManipulator:n=>this._forEachManipulator(n),onManipulatorsChanged:()=>Y.makeHandle()});h.isSome(g)&&(this._outlineVisualElement=g.visualElement instanceof oa.OutlineVisualElement?g.visualElement:null);h.isSome(this._outlineVisualElement)&&c.add(this._outlineVisualElement.events.on("attachment-origin-changed",
()=>this._updateDisplayBounds()));c.add(g);c.add([e.on("changed",()=>this._onGeometryChanged()),y.watch(()=>e.displaying,()=>this._updateAllManipulatorAvailability()),y.watch(()=>e.isDraped,()=>this._graphicDrapedChanged(),y.initial),a.trackGraphicState(e)]);const z=a.pointsOfInterest;z&&c.add(y.watch(()=>z.centerOnSurfaceFrequent.location,()=>this._updateDisplayBounds()));this._forEachManipulator(n=>{c.add(n.events.on("grab-changed",()=>{this.grabbing=n.grabbing;this._updateAllManipulatorAvailability()}))});
this._forEachManipulator((n,x)=>{c.add(n.events.on("immediate-click",D=>{x===r.ManipulatorType.TRANSLATE_XY&&this.emit("immediate-click",{...D,graphic:b});D.stopPropagation()}))});this._onGeometryChanged();this._updateAllManipulatorAvailability();this._initializeTooltip();this.finishToolCreation()};f.destroy=function(){this._displayBounds=this._mapBounds=null;this._rotateManipulatorTexture.release();this._handles.destroy();this._graphicMoveManipulation.destroy();this._editGeometryOperations.destroy();
this._tooltip.destroy();this._set("view",null);this._set("graphic",null)};f._initializeTooltip=function(){const {_handles:a,view:b}=this,d=this._tooltip=new va.Tooltip({view:b}),c=()=>{d.info=this._getUpdatedTooltipInfo()};a.add([this.on("graphic-translate-start",c),this.on("graphic-translate",c),this.on("graphic-translate-stop",()=>{this._moveZTooltipInfo=this._moveXYTooltipInfo=null;this._tooltip.clear()}),this.on("graphic-rotate-start",e=>{this._startAngle=e.angle;c()}),this.on("graphic-rotate",
e=>{this._endAngle=e.angle;c()}),this.on("graphic-rotate-stop",()=>{this._endAngle=this._startAngle=0;c()}),this.on("graphic-scale-start",e=>{u.set(this._startScale,e.xScale,e.yScale);u.set(this._endScale,e.xScale,e.yScale);c()}),this.on("graphic-scale",e=>{u.set(this._endScale,e.xScale,e.yScale);c()}),this.on("graphic-scale-stop",()=>{u.set(this._startScale,0,0);u.set(this._endScale,0,0);c()})]);this._forEachManipulator(e=>{a.add([e.events.on("focus-changed",c),e.events.on("grab-changed",c),e.events.on("drag",
g=>{"cancel"===g.action?this._tooltip.clear():c()})])})};f._getUpdatedTooltipInfo=function(){return this.tooltipOptions.enabled?this._graphicMoveManipulation.grabbing||this._graphicMoveManipulation.dragging?this._computeMoveXYTooltipInfo():this._moveZManipulator.focused?this._computeMoveZTooltipInfo():this._rotateManipulator.focused?this._computeRotateTooltipInfo():this._resizeManipulators.some(a=>a.focused)?this._computeScaleTooltipInfo():null:null};f._computeMoveXYTooltipInfo=function(){return this._moveXYTooltipInfo=
h.unwrapOr(this._moveXYTooltipInfo,()=>new U.TranslateGraphicTooltipInfo({tooltipOptions:this.tooltipOptions}))};f._computeMoveZTooltipInfo=function(){const a=this._moveZTooltipInfo=h.unwrapOr(this._moveZTooltipInfo,()=>new U.TranslateGraphicZTooltipInfo({tooltipOptions:this.tooltipOptions}));var b=this._moveUnit;if(this._moveZManipulator.dragging){b=xa.verticalSignedDistance(this._mapBoundsStart.origin,this._mapBounds.origin,this.view.spatialReference);if(h.isNone(b))return null;a.distance=b}else a.distance=
aa.createLength(0,b);return a};f._computeRotateTooltipInfo=function(){const a=this._rotateTooltipInfo=h.unwrapOr(this._rotateTooltipInfo,()=>new T.ExtentRotateTooltipInfo({tooltipOptions:this.tooltipOptions}));a.angle=this._startAngle-this._endAngle;return a};f._computeScaleTooltipInfo=function(){var a=this.graphic.geometry;if(h.isNone(a))return null;const b=this._scaleTooltipInfo=h.unwrapOr(this._scaleTooltipInfo,()=>new T.ExtentScaleTooltipInfo({tooltipOptions:this.tooltipOptions}));a=t.mapPlaneAutoHorizontalSizeByElevationMode(this._mapBounds,
this._zmax,a.spatialReference,this._graphicState.isDraped);if(h.isNone(a))return null;b.xSize=a[0];b.ySize=a[1];h.isSome(this._sizeStart)&&this._resizeManipulators.some(d=>d.dragging)?(b.xScale=a[0].value/this._sizeStart[0].value,b.yScale=a[1].value/this._sizeStart[1].value):(b.xScale=1,b.yScale=1);return b};f._graphicDrapedChanged=function(){this._handles.remove("draped-elevation-changes");this._updateDisplayBounds();this._graphicState.isDraped&&this._handles.add(this.view.elevationProvider.on("elevation-change",
a=>{h.isSome(this._attachmentOrigin)&&ea.containsXY(a.extent,this._attachmentOrigin.x,this._attachmentOrigin.y)&&this._updateDisplayBounds()}),"draped-elevation-changes")};f._updateAllManipulatorAvailability=function(){this._forEachManipulator((a,b)=>this._updateManipulatorAvailability(a,b))};f._updateManipulatorAvailability=function(a,b){const d=this.grabbing&&!a.grabbing;a.interactive=!d;if(a instanceof ja.Manipulator3D){const c=this._graphicState.displaying,e=this.enableZ&&ka.canMoveZ(this.graphic);
switch(b){case r.ManipulatorType.ROTATE:a.available=c&&this.enableRotation;break;case r.ManipulatorType.SCALE:a.available=c&&(this.enableScaling||this.enableRotation||e);a.interactive=!d&&this.enableScaling;a.state=this.enableScaling?m.resizeNormal:m.resizeOutlineOnly;break;case r.ManipulatorType.TRANSLATE_Z:a.available=c&&e;break;default:a.available=c}}};f._forEachManipulator=function(a){this._graphicMoveManipulation.forEachManipulator(a);this._resizeManipulators.forEach(b=>a(b,r.ManipulatorType.SCALE));
a(this._rotateManipulator,r.ManipulatorType.ROTATE);a(this._moveZManipulator,r.ManipulatorType.TRANSLATE_Z)};f.reset=function(){};f._onGeometryChanged=function(){this._updateDisplayBounds()};f._calculateMapBounds=function(){const a=this.graphic.geometry,b=this._editGeometryOperations.data;var d=b.components[0].edges[0];d=u.subtract(w.sv2d.get(),d.leftVertex.pos,d.rightVertex.pos);u.normalize(d,d);var c=h.unwrapOr(G.getGraphicAttachmentOrigin(this.view,this.graphic),()=>a.extent.center);c=80*this.view.pixelSizeAt(c);
const e=this.view.spatialReference,g=a.spatialReference;e.equals(g)||(c*=L.getMetersPerUnitForSR(e)/L.getMetersPerUnitForSR(g));t.calculateOrientedBounds(d,b,c,this._mapBounds);this._updateZMax()};f._updateZMax=function(){var a=this._editGeometryOperations.data;if(a.geometry.hasZ){var b=a.coordinateHelper,d=Number.NEGATIVE_INFINITY;for(const c of a.components)for(const e of c.vertices)a=b.getZ(e.pos),d=Math.max(a,d);this._zmax=d}else this._zmax=0};f._updateDisplayBounds=function(){const a=this.graphic.geometry;
if(!h.isNone(a)){var b=h.isSome(this._outlineVisualElement)&&!this._graphicState.isDraped&&h.isSome(this._outlineVisualElement.attachmentOrigin)?this._outlineVisualElement.attachmentOrigin:G.getGraphicAttachmentOrigin(this.view,this.graphic);this._attachmentOrigin=h.unwrapOr(b,a.extent.center);b=h.isSome(b)?b.z:pa.evaluateElevationAlignmentAtPoint(this._mapBounds.origin,this.view.elevationProvider,qa.ElevationContext.fromElevationInfo(ha.getGraphicEffectiveElevationInfo(this.graphic)),this.view.renderCoordsHelper);
var d=v.copy(this._mapBounds);d.origin[2]=b;t.mapPlaneToRenderPlane(d,this.view.renderCoordsHelper,a.spatialReference,this._displayBoundsMargin,this._displayBounds);this._updateManipulators()}};f._createMoveXYGraphicDragPipeline=function(){return this._graphicMoveManipulation.createDragPipeline((a,b,d)=>this._applyGraphicMoveSteps(b,d,H.ManipulationType.XY))};f._createMoveZDragPipeline=function(){const a=this.view,b=this._editGeometryOperations.data.spatialReference;return E.createManipulatorDragEventPipeline(this._moveZManipulator,
(d,c,e)=>{d=N.clone(d.renderLocation);c=c.next(O.screenToZConstrained(a,d,b)).next(E.addScreenDelta());this._applyGraphicMoveSteps(c,e,H.ManipulationType.Z)})};f._applyGraphicMoveSteps=function(a,b,d){a=a.next(c=>{"start"===c.action&&(this.inputState={type:"move"},this._updateOperationStartProperties(),this.emit("graphic-translate-start",{graphic:this.graphic,dxScreen:c.screenDeltaX,dyScreen:c.screenDeltaY}));return c}).next(E.addMapDelta()).next(this._moveDragUpdateGeometry()).next(c=>{const e={graphic:this.graphic,
dxScreen:c.screenDeltaX,dyScreen:c.screenDeltaY};switch(c.action){case "start":case "update":(c.mapEnd.x-c.mapStart.x||c.mapEnd.y-c.mapStart.y||c.mapEnd.z-c.mapStart.z)&&this.emit("graphic-translate",e);break;case "end":this.inputState=null,this.emit("graphic-translate-stop",e)}return c}).next(c=>this._updateMoveTooltip(c,d));b.next(()=>{h.isSome(this.inputState)&&this.emit("graphic-translate-stop",{graphic:this.graphic,dxScreen:0,dyScreen:0});this._cancel()});return a};f._updateOperationStartProperties=
function(){v.copy(this._displayBounds,this._displayBoundsStart);v.copy(this._mapBounds,this._mapBoundsStart);h.isNone(this.graphic.geometry)?this._sizeStart=null:this._sizeStart=t.mapPlaneAutoHorizontalSizeByElevationMode(this._mapBoundsStart,this._zmax,this.graphic.geometry.spatialReference,this._graphicState.isDraped)};f._moveDragUpdateGeometry=function(){return a=>{if(h.isNone(this.inputState)||"move"!==this.inputState.type)return a;var b=[];for(const d of this._editGeometryOperations.data.components)b.push(...d.vertices);
b=this._editGeometryOperations.moveVertices(b,a.mapDeltaX,a.mapDeltaY,a.mapDeltaZ,"start"===a.action?C.AccumulationBehaviour.NEW_STEP:C.AccumulationBehaviour.ACCUMULATE_STEPS);t.apply(b,this._mapBounds);this.graphic.geometry=this._editGeometryOperations.data.geometry;return a}};f._updateMoveTooltip=function(a,b){if(b===H.ManipulationType.XY||b===H.ManipulationType.XY_AXIS)b=wa.autoHorizontalDistanceByElevationModeBetweenPoints(a.mapStart,a.mapEnd,this._graphicState.isDraped?"on-the-ground":"absolute-height"),
h.isSome(b)&&h.isSome(this._moveXYTooltipInfo)&&(this._moveXYTooltipInfo.distance=b);return a};f._onResizeGrab=function(a){"start"===a.action&&(a=this._calculatePickRay(a.screenPoint),F.intersectRay(this._displayBounds.plane,a,w.sv3d.get())&&(this._updateOperationStartProperties(),this._displayBoundsMarginStart=this._displayBoundsMargin,this.inputState={type:"resize"}))};f._createResizeDragPipeline=function(a,b){return E.createManipulatorDragEventPipeline(a,(d,c,e)=>{h.isNone(this.inputState)||(c.next(g=>
{"start"===g.action&&this.emit("graphic-scale-start",{graphic:this.graphic,xScale:1,yScale:1});return g}).next(O.screenToRenderPlane(this.view,this._displayBoundsStart.plane)).next(g=>({...g,handle:b})).next(this._resizeDragRenderPlaneToFactors()).next(this._preserveAspectRatio.createDragEventPipelineStep(),this._preserveAspectRatio.next).next(this._resizeDragUpdateGeometry()).next(g=>{const z={graphic:this.graphic,xScale:g.factor1,yScale:g.factor2};switch(g.action){case "start":case "update":this.emit("graphic-scale",
z);break;case "end":this.inputState=null,this.emit("graphic-scale-stop",z)}return g}),e.next(()=>{h.isSome(this.inputState)&&this.emit("graphic-scale-stop",{graphic:this.graphic,xScale:1,yScale:1});this._cancel()}))})};f._resizeDragRenderPlaneToFactors=function(){return a=>{const b=this._displayBoundsStart,d=a.handle.direction,c=this._displayBoundsMargin,e=this._displayBoundsMarginStart;var g=l.copy(w.sv3d.get(),b.origin);l.scaleAndAdd(g,g,b.basis1,-d[0]);l.scaleAndAdd(g,g,b.basis2,-d[1]);const z=
l.subtract(w.sv3d.get(),a.renderEnd,g),n=l.subtract(w.sv3d.get(),a.renderStart,g),x=m.isDiagonalResizeHandle(a.handle);g=m.calculateDiagonalResizeHandleScale(b);const D=m.calculateDiagonalResizeHandleScale(this._displayBounds)/g;g=(A,P)=>{if(0===A)return 1;let B=l.length(P),J=.5*A*l.dot(P,z)/B;const K=0>J?-1:1;x&&(A=B-.5*A*l.dot(P,n)/B,J+=A*K*D);A=B<1.5*e?1:1E-6;B=Math.max(B-e,1E-6);0<K&&(J-=c);return K*Math.max(J/B*K,A)};return{...a,factor1:g(d[0],b.basis1),factor2:g(d[1],b.basis2)}}};f._resizeDragUpdateGeometry=
function(){return a=>{var b=l.copy(N.create(),this._mapBoundsStart.origin);l.scaleAndAdd(b,b,this._mapBoundsStart.basis1,-a.handle.direction[0]);l.scaleAndAdd(b,b,this._mapBoundsStart.basis2,-a.handle.direction[1]);const d=u.set(M.create(),this._mapBoundsStart.basis1[0],this._mapBoundsStart.basis1[1]);u.normalize(d,d);const c=[];for(const e of this._editGeometryOperations.data.components)c.push(...e.vertices);b=this._editGeometryOperations.scaleVertices(c,b,d,a.factor1,a.factor2,"start"===a.action?
C.AccumulationBehaviour.NEW_STEP:C.AccumulationBehaviour.ACCUMULATE_STEPS,R.AccumulationType.REPLACE);v.copy(this._mapBoundsStart,this._mapBounds);t.apply(b,this._mapBounds);this.graphic.geometry=this._editGeometryOperations.data.geometry;return a}};f._onRotateGrab=function(a){if("start"===a.action){var b=m.createRotatePlane(this._displayBounds,this.view.renderCoordsHelper,m.RotationAxis.HEADING,F.create());a=this._calculatePickRay(a.screenPoint);F.intersectRay(b,a,w.sv3d.get())&&(this._updateOperationStartProperties(),
this.inputState={type:"rotate",rotatePlane:b})}};f._createRotateDragPipeline=function(a){return E.createManipulatorDragEventPipeline(a,(b,d,c)=>{b=this.inputState;h.isNone(b)||(d.next(e=>{"start"===e.action&&this.emit("graphic-rotate-start",{graphic:this.graphic,angle:0});return e}).next(O.screenToRenderPlane(this.view,b.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(b)).next(this._rotateDragUpdateGeometry()).next(e=>{const g={graphic:this.graphic,angle:Z.rad2deg(e.rotateAngle)};switch(e.action){case "start":case "update":this.emit("graphic-rotate",
g);break;case "end":this.inputState=null,this.emit("graphic-rotate-stop",g)}return e}),c.next(()=>{h.isSome(this.inputState)&&this.emit("graphic-rotate-stop",{graphic:this.graphic,angle:0});this._cancel()}))})};f._rotateDragRenderPlaneToRotate=function(a){return b=>{const d=F.normal(a.rotatePlane),c=G.calculateInputRotationTransform(b.renderStart,b.renderEnd,this._displayBounds.origin,d);return{...b,rotateAxis:d,rotateAngle:c}}};f._rotateDragUpdateGeometry=function(){return a=>{var b=l.copy(N.create(),
this._mapBoundsStart.origin);const d=[];for(const c of this._editGeometryOperations.data.components)d.push(...c.vertices);b=this._editGeometryOperations.rotateVertices(d,b,a.rotateAngle,"start"===a.action?C.AccumulationBehaviour.NEW_STEP:C.AccumulationBehaviour.ACCUMULATE_STEPS,R.AccumulationType.REPLACE);v.copy(this._mapBoundsStart,this._mapBounds);t.apply(b,this._mapBounds);this.graphic.geometry=this._editGeometryOperations.data.geometry;return a}};f._calculatePickRay=function(a){const b=fa.create();
a=ba.screenPointObjectToArray(a);sa.fromScreen(this.view.state.camera,a,b);l.normalize(b.direction,b.direction);return b};f._updateManipulators=function(){if(this.visible){var a=m.calculateBoundedPlaneTranslateRotate(this._displayBounds,w.sm4d.get());m.updateRotateHeadingHandle(this._rotateManipulator,a,this._displayBounds,this.view.renderCoordsHelper);this._updateZMoveHandle(this._moveZManipulator,a);this._resizeManipulators.forEach((b,d)=>{m.updateResizeHandle(b,this._resizeHandles[d],a,this._displayBounds)})}};
f._updateZMoveHandle=function(a,b){var d=this._displayBounds;d=l.subtract(w.sv3d.get(),d.origin,d.basis1);const c=w.sm4d.get();da.rotateZ(c,b,2*Math.PI/2);c[12]=0;c[13]=0;c[14]=0;a.modelTransform=c;a.renderLocation=d};f._cancel=function(){const a=this._editGeometryOperations.lastOperation;h.isNone(a)||(this._editGeometryOperations.undo(),this.graphic.geometry=this._editGeometryOperations.data.geometry,t.unapply(a,this._mapBounds),this._updateDisplayBounds(),this.inputState=null)};f.undo=function(){if(h.isSome(this.inputState))this.view.activeTool=
null;else if(this.canUndo){const a=this._editGeometryOperations.undo();this.graphic.geometry=this._editGeometryOperations.data.geometry;t.unapply(h.unwrap(a),this._mapBounds);this._updateDisplayBounds()}};f.redo=function(){if(this.canRedo){const a=this._editGeometryOperations.redo();this.graphic.geometry=this._editGeometryOperations.data.geometry;t.apply(h.unwrap(a),this._mapBounds);this._updateDisplayBounds()}};Q._createClass(I,[{key:"preserveAspectRatio",get:function(){return this._preserveAspectRatio.enabled},
set:function(a){this._preserveAspectRatio.enabled=a;this._set("preserveAspectRatio",a)}},{key:"_moveUnit",get:function(){return h.unwrapOr(L.lengthUnitFromSpatialReference(this.view.spatialReference),"meters")}},{key:"_displayBoundsMargin",get:function(){const a=this.view.pointsOfInterest;return 10*this.view.pixelSizeAt(a?a.centerOnSurfaceFrequent.location:this._editGeometryOperations.data.geometry.extent.center)}},{key:"canUndo",get:function(){return this._editGeometryOperations.canUndo}},{key:"canRedo",
get:function(){return this._editGeometryOperations.canRedo}},{key:"test",get:function(){return{resizeManipulators:this._resizeManipulators,rotateManipulator:this._rotateManipulator,moveZManipulator:this._moveZManipulator,tooltip:this._tooltip}}}]);return I}(W.EventedMixin(ta.InteractiveToolBase));p.__decorate([q.property({constructOnly:!0,nonNullable:!0})],k.ExtentTransformTool.prototype,"view",void 0);p.__decorate([q.property({constructOnly:!0,nonNullable:!0})],k.ExtentTransformTool.prototype,"graphic",
void 0);p.__decorate([q.property({constructOnly:!0,nonNullable:!0})],k.ExtentTransformTool.prototype,"enableZ",void 0);p.__decorate([q.property()],k.ExtentTransformTool.prototype,"enableRotation",void 0);p.__decorate([q.property()],k.ExtentTransformTool.prototype,"enableScaling",void 0);p.__decorate([q.property({constructOnly:!0,type:S})],k.ExtentTransformTool.prototype,"tooltipOptions",void 0);p.__decorate([q.property()],k.ExtentTransformTool.prototype,"preserveAspectRatio",null);p.__decorate([q.property()],
k.ExtentTransformTool.prototype,"grabbing",void 0);p.__decorate([q.property()],k.ExtentTransformTool.prototype,"inputState",void 0);p.__decorate([q.property({readOnly:!0})],k.ExtentTransformTool.prototype,"type",void 0);p.__decorate([q.property()],k.ExtentTransformTool.prototype,"_moveUnit",null);k.ExtentTransformTool=p.__decorate([ca.subclass("esri.views.3d.interactive.editingTools.graphicTransform3D.ExtentTransformTool")],k.ExtentTransformTool);k.EPSILON=1E-6;Object.defineProperties(k,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});
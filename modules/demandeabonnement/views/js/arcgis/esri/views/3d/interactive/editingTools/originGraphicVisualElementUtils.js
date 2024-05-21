// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/handleUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../support/elevationInfoUtils ./GrabbingState ./ManipulatorState ./settings ../visualElements/ExtendedLineVisualElement ../visualElements/LaserlineVisualElement ../visualElements/PointVisualElement ../../layers/graphics/elevationAlignmentUtils ../../layers/graphics/ElevationContext ../../layers/graphics/GraphicState ../../webgl-engine/lib/Material".split(" "),
function(A,p,H,t,v,I,J,w,x,K,B,C,L,l,M,D,N,O,P,Q,R){function S(a,d,e,f){const {view:b,graphic:h}=a,m=new M.ExtendedLineVisualElement({view:b,extensionType:l.settings.visualElements.zVerticalLine.extensionType,innerWidth:1,attached:!1,writeDepthEnabled:!1,renderOccluded:R.RenderOccludedFlag.OccludeAndTransparent});l.settings.visualElements.zVerticalLine.apply(m);const n=new D.LaserlineVisualElement({view:b,intersectsLineInfinite:!0,attached:!1});l.settings.visualElements.pointGraphics.shadowStyle.apply(n);
var g=H.deg2rad(l.settings.visualElements.heightPlaneAngleCutoff);const q=new D.LaserlineVisualElement({view:b,attached:!1,angleCutoff:g});l.settings.visualElements.heightPlane.apply(q);g=B.getGraphicEffectiveElevationInfo(a.graphic);const T=P.ElevationContext.fromElevationInfo(g),U="on-the-ground"===g.mode||!g.offset&&"absolute-height"!==g.mode,y=new L.ManipulatorState;let E=1,F=1;const u=()=>{y.update(a);var c=z(h),r=U&&(d.isDraped||t.isNone(c)||!c.hasZ);let G=!0;if(!r&&t.isSome(c)){const V=O.evaluateElevationAlignmentAtPoint(c,
b.elevationProvider,T,b.renderCoordsHelper);I.set(k,c.x,c.y,V);w.projectVectorToVector(k,c.spatialReference,k,b.renderCoordsHelper.spatialReference);m.setStartEndFromWorldDownAtLocation(k);n.intersectsWorldUpAtLocation=k}else G=!1;c=y.grabbingState&C.GrabbingState.Z?l.settings.visualElements.laserlineAlphaMultiplier:1;c!==E&&(E=c,l.settings.visualElements.heightPlane.apply(q,c));c=x.empty(W);!r&&d.displaying&&f.calculateMapBounds(c)&&w.projectVectorToVector(x.getMin(c,k),b.spatialReference,k,b.renderCoordsHelper.spatialReference)?
(q.heightManifoldTarget=k,q.attached=!0):q.attached=!1;c=y.grabbingState&C.GrabbingState.XY?l.settings.visualElements.laserlineAlphaMultiplier:1;c!==F&&(F=c,l.settings.visualElements.pointGraphics.shadowStyle.apply(n,c));r=G&&d.displaying&&!r;n.attached=r;m.attached=r};e.push(v.watch(()=>[d.displaying,d.isDraped],u),d.on("changed",u));a.forEachManipulator(c=>{e.push(c.events.on("grab-changed",u))});e.push(p.destroyHandle(n));e.push(p.destroyHandle(m));e.push(p.destroyHandle(q));u()}function X(a,d,
e){const {view:f,graphic:b}=a,h=new N.PointVisualElement({view:f,geometry:z(b),elevationInfo:B.getGraphicEffectiveElevationInfo(b),attached:!1});Y(a,h,d,e);e.push(p.destroyHandle(h));return h}function z(a){a=a.geometry;return t.isNone(a)?null:"point"===a.type?a:"mesh"===a.type?a.anchor.clone():null}function Y(a,d,e,f){Z(a,d,e,f);l.settings.visualElements.pointGraphics.outline.apply(d);f.push(v.watch(()=>e.displaying,()=>d.attached=e.displaying,v.initial))}function Z(a,d,e,f){const {view:b,graphic:h}=
a;let m=null;const n=g=>{t.isSome(m)&&(m.remove(),m=null);e.isDraped&&t.isSome(g)&&(m=aa(b,g,()=>{d.geometry=g}))};a=()=>{const g=z(h);n(g);d.geometry=g};f.push(e.on("changed",a),p.refHandle(()=>m));a()}function aa(a,d,e){w.projectPointToVector(d,k,a.elevationProvider.spatialReference);const f=k[0],b=k[1];return a.elevationProvider.on("elevation-change",h=>{K.containsXY(h.extent,f,b)&&e()})}const k=J.create(),W=x.create();A.createVisualElements=function(a){const {view:d,graphic:e}=a,f=new Q.GraphicState({graphic:e}),
b=[],h=X(a,f,b);S(a,f,b,h);b.push(d.trackGraphicState(f));return{visualElement:h,remove(){p.handlesGroup(b).remove()}}};Object.defineProperties(A,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
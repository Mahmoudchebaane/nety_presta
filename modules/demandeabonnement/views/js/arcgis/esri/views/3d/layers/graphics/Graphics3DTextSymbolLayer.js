// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Error ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/screenUtils ../../../../chunks/vec2f64 ../../../../symbols/callouts/calloutUtils ./ElevationAligners ./elevationAlignmentUtils ./ElevationContext ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./graphicUtils ./placementUtils ./pointUtils ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/TextRenderParameters ../../webgl-engine/lib/TextTextureFactory ../../webgl-engine/materials/HUDMaterial".split(" "),
function(A,w,G,d,H,I,B,C,J,x,K,L,y,M,r,u,N,O,P,D){function E(k,m,f){k&&k.forEach(a=>{const b=m(a);d.isSome(b)&&f(b,a.graphic)})}function Q(k,m){if("baseline"===m.verticalPlacement)return m=r.horizontalPlacementToAnchorX[m.horizontalPlacement],k=d.isSome(k)?k.baselineAnchorY:0,B.fromValues(m,k);k=r.anchorFromPlacements(m.horizontalPlacement,m.verticalPlacement);return r.namedAnchorToHUDMaterialAnchorPos[k]}const R=[0,0,1];y=function(k){function m(a,b,g,c){a=k.call(this,a,b,g,c)||this;a._elevationOptions=
{supportsOffsetAdjustment:!0,supportsOnTheGround:!1};a.ensureDrapedStatus(!1);return a}w._inheritsLoose(m,k);var f=m.prototype;f.doLoad=function(){var a=w._asyncToGenerator(function*(){if(!this._drivenProperties.size){const b=M.validateSymbolLayerSize(this.symbolLayer.size);if(b)throw new G("graphics3dtextsymbollayer:invalid-size",b);}yield this._createTextRenderParameters()});return function(){return a.apply(this,arguments)}}();f._createTextRenderParameters=function(){var a=w._asyncToGenerator(function*(){this._textRenderParameters=
yield O.TextRenderParameters.fromSymbol(this.symbolLayer,this._context.graphicsCoreOwner.view.state.pixelRatio)});return function(){return a.apply(this,arguments)}}();f.destroy=function(){k.prototype.destroy.call(this)};f.createGraphics3DGraphic=function(a){a=a.graphic;const b=u.placePointOnGeometry(a.geometry);if(d.isNone(b))return this.logger.warn(`unsupported geometry type for text symbol: ${a.geometry.type}`),null;const g=this.symbolLayer.text;if(d.isNone(g)||""===g)return null;var c=C.hasCalloutSupport(this.symbol)&&
this.symbol.hasVisibleVerticalOffset()?this.symbol.verticalOffset:null;if(d.isSome(c)&&!C.textSymbolLayerSupportsVerticalOffset(this.symbolLayer))return this.logger.errorOncePerTick("Callouts and vertical offset on text symbols are currently only supported with 'center' "+`horizontal alignment (not with '${this.symbolLayer.horizontalAlignment}' alignment)`),null;c={...S,verticalOffset:c,horizontalPlacement:this.symbolLayer.horizontalAlignment,verticalPlacement:r.verticalPlacementFromAlignment(this.symbolLayer.verticalAlignment)};
return this._createAs3DShape(a,b,g,c)};f.createLabel=function(a,b,g,c){a=a.graphic;const l=u.placePointOnGeometry(a.geometry);if(d.isNone(l))return this.logger.warn(`unsupported geometry type for label: ${a.geometry.type}`),null;const h=b.text;return!h||/^\s+$/.test(h)?null:this._createAs3DShape(a,l,h,b,g,c)};f.setGraphicElevationContext=function(a,b,g=0){a=k.prototype.setGraphicElevationContext.call(this,a,b);a.addOffsetRenderUnits(g);return a};f.layerOpacityChanged=function(){this.logger.warn("layer opacity change not yet implemented in Graphics3DTextSymbolLayer");
return!1};f.layerElevationInfoChanged=function(a,b){E(a,b,(g,c)=>{this.updateGraphicElevationContext(c,g)});return x.SymbolUpdateType.UPDATE};f.slicePlaneEnabledChanged=function(a,b){E(a,b,g=>{for(const c of g.stageObject.geometryRecords)c.material.setParameters({hasSlicePlane:this._context.slicePlaneEnabled})});return!0};f.physicalBasedRenderingChanged=function(){return!0};f.pixelRatioChanged=function(){return!1};f.updateGraphicElevationContext=function(a,b){this.setGraphicElevationContext(a,b.elevationContext,
b.metadata.elevationOffset);b.needsElevationUpdates=x.needsElevationUpdates2D(b.elevationContext.mode)||"absolute-height"===b.elevationContext.mode};f._defaultElevationInfoNoZ=function(){return T};f._createAs3DShape=function(a,b,g,c,l,h){const v=this.setGraphicElevationContext(a,new K.ElevationContext,c.elevationOffset);var p="polyline"===d.get(a.geometry,"type"),t=a.uid;let q=null;a=null;if(d.isNone(h)){var e=r.textRenderAlignmentFromHorizontalPlacement(c.horizontalPlacement);q=new P(g,e,this._textRenderParameters);
let n=null;if(d.isSome(this._context.sharedResources.textures)){a=this._context.sharedResources.textures.fromData(q.key,()=>d.unwrap(q).create(),()=>{d.isSome(n)&&n.release()});e=this._context.stage.renderView.textureRepository.acquire(a.texture.id);if(d.isNone(e)||H.isPromiseLike(e))return a.release(),null;n=e}}e=Q(q,c);e={occlusionTest:!0,screenOffset:c.screenOffset,anchorPosition:e,polygonOffset:!0,color:[1,1,1,1],centerOffsetUnits:c.centerOffsetUnits,debugDrawLabelBorder:c.debugDrawLabelBorder,
drawInSecondSlot:!0};d.isSome(a)&&(e.textureId=a.texture.id);d.isSome(h)&&(e.textureId=h.id);if(d.isSome(c.verticalOffset)){const {screenLength:n,minWorldLength:z,maxWorldLength:F}=c.verticalOffset;e.verticalOffset={screenLength:I.pt2px(n),minWorldLength:z||0,maxWorldLength:d.isSome(F)?F:Infinity}}if(this._context.screenSizePerspectiveEnabled){const {screenSizePerspectiveSettings:n,screenSizePerspectiveSettingsLabels:z}=this._context.sharedResources;e.screenSizePerspective=z.overridePadding(this._textRenderParameters.haloSize+
this._textRenderParameters.definition.background.padding[0]);e.screenSizePerspectiveAlignment=n}p&&(e.shaderPolygonOffset=1E-4);e.hasSlicePlane=this._context.slicePlaneEnabled;d.isSome(l)?(p=JSON.stringify(e),h=l.get(p),d.isNone(h)&&(h=new D.HUDMaterial(e),l.add(p,h))):h=new D.HUDMaterial(e);h=[h];p=c.translation;e=d.isSome(q)?[q.displayWidth,q.displayHeight]:[0,0];p=[N.createPointGeometry(R,p,null,e,c.centerOffset,[0,0],null)];t=u.createStageObjectForHUD(this._context,b,p,h,v,this._context.layer.uid,
t);if(null===t)return null;l=new L.Graphics3DObject3DGraphicLayer(this,t.object,p,d.isNone(l)?h:null,a,J.perObjectElevationAligner,v);l.alignedSampledElevation=t.sampledElevation;l.needsElevationUpdates=x.needsElevationUpdates2D(v.mode)||"absolute-height"===v.mode;const {displayWidth:U,displayHeight:V}=d.isSome(q)?q:c;l.getScreenSize=(n=B.create())=>{n[0]=U;n[1]=V;return n};l.metadata={labelText:g,elevationOffset:c.elevationOffset};u.extendPointGraphicElevationContext(l,b,this._context.elevationProvider);
return l};return m}(y.Graphics3DSymbolLayer);const T={mode:"relative-to-ground",offset:0},S={text:null,translation:[0,0,0],elevationOffset:0,centerOffset:[0,0,0,1],screenOffset:[0,0],horizontalPlacement:"center",verticalPlacement:"center",verticalOffset:null,centerOffsetUnits:null,debugDrawLabelBorder:!1,displayWidth:0,displayHeight:0};A.Graphics3DTextSymbolLayer=y;Object.defineProperties(A,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../Color ../../../../symbols ../../../../core/asyncUtils ../../../../core/Error ../../../../core/has ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/screenUtils ../../../../core/urlUtils ../../../../chunks/mat4f64 ../../../../chunks/vec2f64 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f64 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../support/arcadeOnDemand ../../../../symbols/support/IconSymbol3DLayerResource ../../../../symbols/support/utils ../../../2d/arcade/callExpressionWithFeature ./constants ./ElevationAligners ./elevationAlignmentUtils ./ElevationContext ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./graphicUtils ./interfaces ./placementUtils ./pointUtils ../support/FastSymbolUpdates ../../support/engineContent/sdfPrimitives ../../terrain/OverlayRenderer ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/Texture ../../webgl-engine/materials/HUDMaterial ../../../../symbols/CIMSymbol".split(" "),
function(P,J,y,Q,v,R,B,S,l,C,w,K,T,D,u,U,L,V,W,X,Y,Z,aa,ba,ca,r,da,ea,fa,x,ha,E,F,G,z,H,ia,ja,M,ka,la,N,ma){function I(q){return l.isNone(q)?!1:"cross"===q||"x"===q}const na=T.create(),O=u.fromValues(0,0,1);v=H.DEFAULT_TEX_SIZE;const t=H.DEFAULT_SYMBOL_SIZE_RATIO,oa=[t/2,t/2,1-t/2,1-t/2];v=[v*t,v*t];x=function(q){function A(a,c,b,d){a=q.call(this,a,c,b,d)||this;a._cimLayers=null;a._cimSymbolMaterials=new Map;a._cimSymbolTextures=new Map;a._cimMaterialParametersInfo=null;a._cimRequiredFields=null;
a._cimScaleFactorOrFunction=null;a._size=null;a._symbolTextureRatio=1;a._outlineSize=0;a._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!0};return a}y._inheritsLoose(A,q);var f=A.prototype;f.getCachedSize=function(){return{size:this._getIconSize()}};f.doLoad=function(){var a=y._asyncToGenerator(function*(c){this._validateOrThrow();const b=this._prepareMaterialParameters();var d=this._getPrimitive();if(l.isSome(d))this._prepareResourcesPrimitive(b,d);else{d=Z.getIconHref(this.symbol,
this.symbolLayer);const e=K.dataComponents(d);e&&"application/json"===e.mediaType?yield this._prepareResourcesCIM(b,JSON.parse(e.data),c):yield this._prepareResourcesHref(b,d,c)}});return function(c){return a.apply(this,arguments)}}();f._validateOrThrow=function(){if(!this._drivenProperties.size){var a=ha.validateSymbolLayerSize(this._getIconSize());if(a)throw new B("graphics3diconsymbollayer:invalid-size",a);}};f._getIconSize=function(){var a=this.symbolLayer;a=Math.round(null!=a.size?w.pt2px(a.size):
16);return this._drivenProperties.size?Math.max(a,64):a};f._generateTextureCIM=function(a){const c=this._getGraphicHash(a);let b=""===c?null:this._cimSymbolTextures.get(c);b||(a=this._context.sharedResources.cimSymbolRasterizer.rasterizeCIMSymbol3D(this._cimLayers,a,"esriGeometryPoint",{scaleFactor:this._cimScaleFactorOrFunction},null,null),this._cimMaterialParametersInfo.anchorPosition=this._getAnchorPos("relative",a.anchorPosition),b=new la.Texture(a.imageData,{width:a.imageData.width,height:a.imageData.height,
powerOfTwoResizeMode:ja.PowerOfTwoResizeMode.PAD}),this._cimSymbolTextures.set(c,b),this._context.stage.add(b));return b};f._computeSize=function(a,c){a=a.width/a.height;return 1<a?[c,Math.round(c/a)]:[Math.round(c*a),c]};f._prepareMaterialParameters=function(){const a={anchorPosition:this._getAnchorPos(this.symbolLayer.anchor,this.symbolLayer.anchorPosition)},c=this.symbol;if(c&&"point-3d"===c.type&&c.hasVisibleVerticalOffset()){const {screenLength:b,minWorldLength:d,maxWorldLength:e}=c.verticalOffset;
a.verticalOffset={screenLength:w.pt2px(b),minWorldLength:d||0,maxWorldLength:l.isSome(e)?e:Infinity}}this._context.screenSizePerspectiveEnabled&&(a.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings);a.occlusionTest=!0;a.hasSlicePlane=this._context.slicePlaneEnabled;return a};f._prepareResourcesPrimitive=function(a,c){var b=this._getOutlineSize();if(I(c)&&0===b)throw Error("Nothing to render");this._outlineSize=b;a.color=this._getFillColor();a.outlineColor=this._getOutlineColor();
a.outlineSize=this._outlineSize;l.isSome(this._context.sharedResources.textures)&&(b=this._context.sharedResources.textures.fromData(`${c}-icon`,()=>H.createTexture(c)),this._texture=b.texture,this._releaseTexture=b,a.textureId=this._texture.id);a.textureIsSignedDistanceField=!0;a.distanceFieldBoundingBox=oa;b=this._getIconSize();this._size=[b,b];this._symbolTextureRatio=1/t;this._createMaterialAndAddToStage(a,this._context.stage)};f._prepareResourcesHref=function(){var a=y._asyncToGenerator(function*(c,
b,d){if(!S("esri-canvas-svg-support")&&K.isSVG(b))throw new B("graphics3diconsymbollayer:unsupported-image-format","IconSymbol3DLayer failed to load (SVG symbols are not supported in IE11)");this._outlineSize=this._getOutlineSize();c.color=this._getFillColor();c.outlineColor=this._getOutlineColor();c.outlineSize=this._outlineSize;c.textureIsSignedDistanceField=!1;const e=this._getIconSize(),g=e*this._context.graphicsCoreOwner.view.state.pixelRatio;if(l.isSome(this._context.sharedResources.textures)){d=
yield R.result(this._context.sharedResources.textures.fromUrl(b,g,{signal:d}));if(!1===d.ok)throw C.throwIfAbortError(d.error),new B("graphics3diconsymbollayer:request-failed",`Failed to load (Request for icon resource failed: ${b})`);this._releaseTexture=d.value;b=d.value.texture;this._size=this._computeSize(b.params,e);c.textureId=b.id}this._createMaterialAndAddToStage(c,this._context.stage)});return function(c,b,d){return a.apply(this,arguments)}}();f._prepareResourcesCIM=function(){var a=y._asyncToGenerator(function*(c,
b,d){b=new ma({data:b});if(!this._context.sharedResources.cimSymbolRasterizer){var e=(yield new Promise((n,k)=>P(["../../../../symbols/cim/CIMSymbolRasterizer"],n,k))).CIMSymbolRasterizer;C.throwIfAborted(d);this._context.sharedResources.cimSymbolRasterizer||(this._context.sharedResources.cimSymbolRasterizer=new e(this._context.renderCoordsHelper.spatialReference,!0))}e=this._context.layer.fields?this._context.layer.fields.map(n=>n.toJSON()):null;this._cimLayers=yield this._context.sharedResources.cimSymbolRasterizer.analyzeCIMSymbol(b,
e,this._context.renderer&&"dictionary"===this._context.renderer.type?this._context.renderer.fieldMap:null,"esriGeometryPoint",{signal:d});let g;if(this._context.renderer&&"dictionary"===this._context.renderer.type&&this._context.renderer.scaleExpression)if(b=this._context.renderer,isNaN(b.scaleExpression)){const n=yield X.createRendererExpression(b.scaleExpression,this._context.layer.spatialReference,e);g=(k,p,pa)=>{k=aa(n,k,{$view:pa},"esriGeometryPoint",p);return null!==k?k:1}}else var h=Number(b.scaleExpression);
this._cimScaleFactorOrFunction=h||g||1;h=this._context.renderer?yield this._context.renderer.getRequiredFields(this._context.layer.fieldsIndex):[];C.throwIfAborted(d);const m=this._context.layer.fieldsIndex;this._cimRequiredFields=h.map(n=>m.get(n).name);this._cimMaterialParametersInfo=c;this._cimMaterialParametersInfo.color=this._getFillColor();this._cimMaterialParametersInfo.outlineColor=[0,0,0,0];this._cimMaterialParametersInfo.outlineSize=0;this._cimMaterialParametersInfo.textureIsSignedDistanceField=
!1});return function(c,b,d){return a.apply(this,arguments)}}();f._getPrimitive=function(){return this.symbolLayer.resource&&this.symbolLayer.resource.href?null:this.symbolLayer.resource&&this.symbolLayer.resource.primitive||Y.defaultPrimitive};f._getOutlineSize=function(){var a=0;a=this.symbolLayer;if(l.isSome(a.outline)&&null!=a.outline.size)return Math.max(w.pt2px(a.outline.size),0);a=this._getPrimitive();a=I(a)?1.5:0;return Math.max(a,0)};f._getOutlineColor=function(){const a=this._getLayerOpacity(),
c=l.get(this.symbolLayer,"outline","color");if(l.isSome(c)){const b=Q.toUnitRGB(c);return[b[0],b[1],b[2],c.a*a]}return[0,0,0,0]};f._getFillColor=function(){if(I(this._getPrimitive()))return ba.TRANSPARENT_UNIT;const a=l.isNone(this._getPrimitive()),c=l.get(this.symbolLayer,"material","color");return this._getCombinedOpacityAndColor(c,{hasIntrinsicColor:a})};f._getAnchorPos=function(a,c){return"relative"===a?D.fromValues((c.x||0)+.5,-(c.y||0)+.5):a in F.namedAnchorToHUDMaterialAnchorPos?F.namedAnchorToHUDMaterialAnchorPos[a]:
F.namedAnchorToHUDMaterialAnchorPos.center};f._createMaterialAndAddToStage=function(a,c){this._fastUpdates=this._cimLayers?{enabled:!1}:z.initFastSymbolUpdatesState(this._context.renderer,this._fastVisualVariableConvertOptions());this._fastUpdates.enabled&&Object.assign(a,this._fastUpdates.materialParameters);if(this._cimLayers){let b=l.isSome(a.textureId)?this._cimSymbolMaterials.get(a.textureId):null;b||(b=new N.HUDMaterial(a),this._cimSymbolMaterials.set(l.unwrapOr(a.textureId,0),b),c.add(b));
return b}this._material=new N.HUDMaterial(a);c.add(this._material);return this._material};f._setDrapingDependentMaterialParameters=function(){this.draped&&(this._forEachMaterial(a=>{a.setParameters({verticalOffset:null,screenSizePerspective:null,occlusionTest:!1,hasSlicePlane:!1,shaderPolygonOffset:0,isDraped:this.draped})}),this.layerOpacityChanged())};f.destroy=function(){q.prototype.destroy.call(this);this._forEachMaterial(a=>this._context.stage.remove(a));this._material=null;this._cimSymbolMaterials.clear();
this._cimSymbolTextures.forEach(a=>this._context.stage.remove(a));this._cimSymbolTextures.clear();this._releaseTexture=l.releaseMaybe(this._releaseTexture)};f._getScaleFactor=function(a,c){if(this._drivenProperties.size&&a.size){for(let b=0;3>b;b++){const d=a.size[b];d&&"symbol-value"!==d&&"proportional"!==d&&(a.size[b]=w.pt2px(d))}if("symbol-value"===a.size[0])return 1;if(isFinite(+a.size[0]))return+a.size[0]/c;if(isFinite(+a.size[2]))return+a.size[2]/c}return 1};f.createGraphics3DGraphic=function(a){const c=
a.graphic;if(!this._validateGeometry(c.geometry))return null;let b;if(this._cimLayers){if(!this._cimLayers.length)return null;var d=this._generateTextureCIM(c);b=this._createMaterialAndAddToStage({textureId:d.id,...this._cimMaterialParametersInfo},this._context.stage);var e=[d.params.width,d.params.height]}else e=this._size,b=l.unwrap(this._material);d=G.placePointOnGeometry(c.geometry);if(l.isNone(d))return this.logger.warn(`unsupported geometry type for icon symbol: ${c.geometry.type}`),null;var g=
a.renderingInfo;const h=this._getVertexOpacityAndColor(g);let m=1;this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size||(m=this._getScaleFactor(g,e[0]>e[1]?e[0]:e[1]));m*=this._symbolTextureRatio;e=[e[0]*m,e[1]*m];g=this.setGraphicElevationContext(c,new da.ElevationContext);this.ensureDrapedStatus("on-the-ground"===g.mode)&&this._setDrapingDependentMaterialParameters();return this.draped?this._createAsOverlay(c,d,b,h,e,a.layer.uid):this._createAs3DShape(c,d,b,h,e,g,c.uid)};f.layerOpacityChanged=
function(){const a=this._getFillColor(),c=this._getOutlineColor();this._forEachMaterial(b=>{b.setParameters({color:a});b.setParameters({outlineColor:c})})};f.layerElevationInfoChanged=function(a,c,b){const d=this._elevationContext.mode;b=r.elevationModeChangeUpdateType(A.elevationModeChangeTypes,b,d);if(b!==r.SymbolUpdateType.UPDATE)return b;const e=r.needsElevationUpdates2D(d)||"absolute-height"===d;return this.updateGraphics3DGraphicElevationInfo(a,c,()=>e)};f.slicePlaneEnabledChanged=function(){this.draped||
this._forEachMaterial(a=>{a.setParameters({hasSlicePlane:this._context.slicePlaneEnabled})});return!0};f.physicalBasedRenderingChanged=function(){return!0};f.pixelRatioChanged=function(){return this._getPrimitive()?!0:!1};f.applyRendererDiff=function(a,c){for(const b in a.diff)switch(b){case "visualVariables":if(z.updateFastSymbolUpdatesState(this._fastUpdates,c,this._fastVisualVariableConvertOptions()))l.isSome(this._material)&&this._material.setParameters(this._fastUpdates.materialParameters);else return E.ApplyRendererDiffResult.Recreate_Symbol;
break;default:return E.ApplyRendererDiffResult.Recreate_Symbol}return E.ApplyRendererDiffResult.Fast_Update};f._defaultElevationInfoNoZ=function(){return qa};f._createAs3DShape=function(a,c,b,d,e,g,h){const m=this.getFastUpdateAttrValues(a);a=m?p=>z.evaluateModelTransform(this._fastUpdates.materialParameters,m,p):null;const n=this._context.stage.renderView._getObjectAndLayerIdColor({graphicUid:h,layerUid:this._context.layer.uid});d=[M.createPointGeometry(O,null,d,e,ra,null,m,n)];h=G.createStageObjectForHUD(this._context,
c,d,[b],g,this._context.layer.uid,h,a);if(null===h)return null;const k=new fa.Graphics3DObject3DGraphicLayer(this,h.object,d,null,null,ca.perObjectElevationAligner,g);k.alignedSampledElevation=h.sampledElevation;k.needsElevationUpdates=r.needsElevationUpdates2D(g.mode)||"absolute-height"===g.mode;k.getScreenSize=this._createScreenSizeGetter(e,a);k.calculateRelativeScreenBounds=p=>b.calculateRelativeScreenBounds(k.getScreenSize(),1,p);G.extendPointGraphicElevationContext(k,c,this._context.elevationProvider);
return k};f._createAsOverlay=function(a,c,b,d,e,g){b.renderPriority=this._renderPriority;const h=L.create();V.projectPointToVector(c,h,this._context.overlaySR);h[2]=ia.DRAPED_Z;c=this._context.clippingExtent;if(l.isSome(c)&&!W.containsPoint(c,h))return null;const m=this.getFastUpdateAttrValues(a);c=m?p=>z.evaluateModelTransform(this._fastUpdates.materialParameters,m,p):null;const n=this._context.stage.renderView._getObjectAndLayerIdColor({graphicUid:a.uid,layerUid:this._context.layer.uid});d=M.createPointGeometry(O,
h,d,e,null,null,m,n);a=new ka.RenderGeometry(d,b,{layerUid:g,graphicUid:a.uid,calculateShaderTransformation:c});h[3]=0;U.copy(a.boundingSphere,h);const k=new ea(this,[a],null,this._context.drapeSourceRenderer);k.getScreenSize=this._createScreenSizeGetter(e,c);k.calculateRelativeScreenBounds=p=>b.calculateRelativeScreenBounds(k.getScreenSize(),1,p);return k};f._createScreenSizeGetter=function(a,c){const b=this._outlineSize+2;if(this._fastUpdates.enabled){const g=a[0]/this._symbolTextureRatio,h=a[1]/
this._symbolTextureRatio;return(m=D.create())=>{const n=c(na);m[0]=n[0]*g+b;m[1]=n[5]*h+b;return m}}const d=a[0]/this._symbolTextureRatio+b,e=a[1]/this._symbolTextureRatio+b;return(g=D.create())=>{g[0]=d;g[1]=e;return g}};f._fastVisualVariableConvertOptions=function(){var a=this._size[0]>this._size[1]?this._size[0]:this._size[1];const c=u.fromValues(a,a,a),b=w.px2pt(1);a*=b;a=u.fromValues(a,a,a);return{modelSize:c,symbolSize:a,unitInMeters:b,transformation:{anchor:u.ZEROS,scale:u.ONES,rotation:u.ZEROS}}};
f._getGraphicHash=function(a){let c="";for(const b of this._cimRequiredFields)c+=b+a.attributes[b];return c};f._forEachMaterial=function(a){l.isSome(this._material)&&a(this._material);this._cimSymbolMaterials.forEach(a)};f.test=function(){return{...q.prototype.test.call(this),material:this._material}};return A}(x.Graphics3DSymbolLayer);x.PRIMITIVE_SIZE=v;x.elevationModeChangeTypes={definedChanged:r.SymbolUpdateType.UPDATE,staysOnTheGround:r.SymbolUpdateType.NONE,onTheGroundChanged:r.SymbolUpdateType.RECREATE};
const qa={mode:"relative-to-ground",offset:0},ra=L.fromValues(0,0,0,1);J.Graphics3DIconSymbolLayer=x;Object.defineProperties(J,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
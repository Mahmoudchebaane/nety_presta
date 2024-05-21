// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Error ../../../core/Handles ../../../core/Logger ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/spatialReferenceUtils ./LayerView3D ../../layers/LayerView ../../webgl/context-util".split(" "),function(r,q,m,w,t,c,h,u,n,
C,x,y,z,A,B){var g;(function(k){k[k.API=1]="API";k[k.VerboseAPI=2]="VerboseAPI";k[k.Error=3]="Error"})(g||(g={}));n=function(k){function p(){var a=k.apply(this,arguments)||this;a._usedMemory=0;a._futureMemory=0;a.type="voxel-3d";a._wasmLayerId=-1;a._handles=new w;a._dbgFlags=new Set;return a}r._inheritsLoose(p,k);var f=p.prototype;f.initialize=function(){this._dbgFlags.add(g.Error);if("local"!==this.view.viewingMode)throw new m("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",
{});if(this.view._stage.renderView.renderingContext.type!==B.ContextType.WEBGL2)throw new m("voxel:unsupported-context","Voxel layers are supported in WebGL2 rendering contexts only.",{});if(!this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat?.textureFloat)throw new m("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});if(!y.equals(this.layer.spatialReference,this.view.spatialReference))throw new m("layerview:spatial-reference-incompatible",
"The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});var a=this.layer.currentVariableId,b=this.layer.getVolume(a);a=this.layer.getVariable(a);if(c.isSome(b)&&c.isSome(a)){var e=b.dimensions[0];const l=b.dimensions[1],d=b.zDimension;if(1<d){b=e.size*l.size*b.dimensions[d].size;e=1;switch(a.renderingFormat.type){case "Int16":case "UInt16":e=2;break;case "Int32":case "UInt32":case "Float32":e=4}this._futureMemory=e*b}}a=this.view.addVoxelLayerViewToWasm(this).then(l=>
{this._wasmLayerId=l;this._suspendedHandle=h.watch(()=>this.suspended,d=>{const v=this.view.voxelWasm;c.isSome(v)&&v.setEnabled(this,!d)},h.initial);this._handles.add([h.watch(()=>this.layer.renderMode,d=>this._pushRenderModeToWasm(d)),h.watch(()=>this.layer.currentVariableId,d=>this._pushCurrentVariableIdToWasm(d)),h.watch(()=>this.layer.getSections(),d=>this._pushSectionsToWasm(d)),h.watch(()=>this.layer.getVariableStyles(),d=>this._pushVariableStylesToWasm(d)),h.watch(()=>this.layer.getVolumeStyles(),
d=>this._pushVolumeStylesToWasm(d)),h.watch(()=>this.layer.enableDynamicSections,d=>this._pushEnableDynamicSectionsToWasm(d)),h.watch(()=>this.layer.enableIsosurfaces,d=>this._pushEnableIsosurfacesToWasm(d)),h.watch(()=>this.layer.enableSections,d=>this._pushEnableSectionsToWasm(d)),h.watch(()=>this.layer.enableSlices,d=>this._pushEnableSlicesToWasm(d))])}).catch(l=>{this.view.removeVoxelLayerViewFromWasm(this);this._wasmLayerId=-1;if(-1===l)throw new m("voxel:addLayer-failure","The voxel layer description was invalid.",
{});if(-2===l)throw new m("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{});});this.addResolvingPromise(a)};f.destroy=function(){this.view.removeVoxelLayerViewFromWasm(this);this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null);this._handles=c.destroyMaybe(this._handles)};f.isUpdating=function(){const a=this.view.voxelWasm;return 0>this._wasmLayerId||!c.isSome(a)?!1:a.isUpdating(this._wasmLayerId)};f.updatingFlagChanged=function(){this.notifyChange("updating")};
f.getUsedMemory=function(){return this._usedMemory};f.getUnloadedMemory=function(){return this._futureMemory};f.ignoresMemoryFactor=function(){return!0};f.setUsedMemory=function(a){this._usedMemory=a;this._futureMemory=0};f.captureFrustum=function(){const a=this.view.voxelWasm;c.isSome(a)&&a.captureFrustum()};f.toggleFullVolumeExtentDraw=function(){const a=this.view.voxelWasm;c.isSome(a)&&a.toggleFullVolumeExtentDraw(this)};f.getLayerTimes=function(){let a=[];const b=this.view.voxelWasm;c.isSome(b)&&
(a=b.getLayerTimes(this));return a};f.getCurrentLayerTimeIndex=function(){let a=0;const b=this.view.voxelWasm;c.isSome(b)&&(a=b.getCurrentLayerTimeIndex(this));return a};f._pushRenderModeToWasm=function(a){const b=this.view.voxelWasm;this._dbg(g.VerboseAPI,`VoxelLayerView3D._pushRenderModeToWasm() called, ${c.isSome(b)?"have WASM":"don't have WASM!!!"}`);c.isSome(b)&&b.setRenderMode(this,a)||this._dbg(g.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")};f._pushSectionsToWasm=function(a){const b=
this.view.voxelWasm;this._dbg(g.VerboseAPI,`VoxelLayerView3D._pushSectionsToWasm() called, ${c.isSome(b)?"have WASM":"don't have WASM!!!"}`);c.isSome(b)&&b.setStaticSections(this,a)||this._dbg(g.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")};f._pushCurrentVariableIdToWasm=function(a){const b=this.view.voxelWasm;this._dbg(g.VerboseAPI,`VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, ${c.isSome(b)?"have WASM":"don't have WASM!!!"}`);c.isSome(b)&&b.setCurrentVariable(this,a)||this._dbg(g.Error,
"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")};f._pushVariableStylesToWasm=function(a){const b=this.view.voxelWasm;this._dbg(g.VerboseAPI,`VoxelLayerView3D._pushVariableStylesToWasm() called, ${c.isSome(b)?"have WASM":"don't have WASM!!!"}`);let e=!1;c.isSome(b)&&((e=b.setVariableStyles(this,a))||this._dbg(g.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!"))};f._accountForEnableSlices=function(a,b){b=c.isSome(b)?b:this.layer.enableSlices;for(let e=0;e<a.length;++e){const l=
a[e];for(const d of l.slices)d.enabled=d.enabled&&b}};f._pushVolumeStylesToWasm=function(a){const b=this.view.voxelWasm;this._dbg(g.VerboseAPI,`VoxelLayerView3D._pushVolumeStylesToWasm() called, ${c.isSome(b)?"have WASM":"don't have WASM!!!"}`);let e=!1;c.isSome(b)&&(this._accountForEnableSlices(a,null),(e=b.setVolumeStyles(this,a))||this._dbg(g.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))};f._pushEnableDynamicSectionsToWasm=function(a){const b=this.view.voxelWasm;this._dbg(g.VerboseAPI,
`VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, ${c.isSome(b)?"have WASM":"don't have WASM!!!"}`);let e=!1;c.isSome(b)&&((e=b.setEnableDynamicSections(this,a))||this._dbg(g.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!"))};f._pushEnableSlicesToWasm=function(a){const b=this.view.voxelWasm;this._dbg(g.VerboseAPI,`VoxelLayerView3D._pushEnableSlicesToWasm() called, ${c.isSome(b)?"have WASM":"don't have WASM!!!"}`);var e=!1;c.isSome(b)&&(e=this.layer.getVolumeStyles(),
this._accountForEnableSlices(e,a),(e=b.setVolumeStyles(this,e))||this._dbg(g.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!"))};f._pushEnableIsosurfacesToWasm=function(a){const b=this.view.voxelWasm;this._dbg(g.VerboseAPI,`VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, ${c.isSome(b)?"have WASM":"don't have WASM!!!"}`);let e=!1;c.isSome(b)&&((e=b.setEnableIsosurfaces(this,a))||this._dbg(g.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!"))};f._pushEnableSectionsToWasm=
function(a){const b=this.view.voxelWasm;this._dbg(g.VerboseAPI,`VoxelLayerView3D._pushEnableSectionsToWasm() called, ${c.isSome(b)?"have WASM":"don't have WASM!!!"}`);let e=!1;c.isSome(b)&&((e=b.setEnableSections(this,a))||this._dbg(g.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!"))};f._dbg=function(a,b){this._dbgFlags.has(a)&&(a===g.Error?t.getLogger(this.declaredClass).error(b):t.getLogger(this.declaredClass).warn(b))};r._createClass(p,[{key:"baseUrl",get:function(){return this.layer.parsedUrl?.path??
""}},{key:"wasmLayerId",get:function(){return this._wasmLayerId}},{key:"performanceInfo",get:function(){return{nodes:0,displayedNumberOfFeatures:0,maximumNumberOfFeatures:0,totalNumberOfFeatures:0,core:null}}}]);return p}(z.LayerView3D(A));q.__decorate([u.property()],n.prototype,"layer",void 0);q.__decorate([u.property()],n.prototype,"baseUrl",null);return n=q.__decorate([x.subclass("esri.views.3d.layers.VoxelLayerView3D")],n)});
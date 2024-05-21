// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ./enums ./decluttering/util ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/VertexArrayObject".split(" "),function(t,v,g,x,A,m,n,u){let w=function(){function l(f,c){this.layerUIDs=[];this.isDestroyed=!1;this._data=f;this.memoryUsed=f.byteLength;let a=1;f=new Uint32Array(f);this.layerUIDs=[];const b=f[a++];for(let d=0;d<b;d++)this.layerUIDs[d]=f[a++];this.bufferDataOffset=a;c&&(this.layer=c.getStyleLayerByUID(this.layerUIDs[0]))}
var k=l.prototype;k.destroy=function(){this.isDestroyed||(this.doDestroy(),this.isDestroyed=!0)};k.prepareForRendering=function(f){g.isNone(this._data)||(this.doPrepareForRendering(f,this._data,this.bufferDataOffset),this._data=null)};v._createClass(l,[{key:"isPreparedForRendering",get:function(){return g.isNone(this._data)}},{key:"offset",get:function(){return this.bufferDataOffset}}]);return l}(),B=function(l){function k(c,a){a=l.call(this,c,a)||this;a.type=x.BucketType.LINE;a.lineIndexStart=0;
a.lineIndexCount=0;c=new Uint32Array(c);let b=a.bufferDataOffset;a.lineIndexStart=c[b++];a.lineIndexCount=c[b++];const d=c[b++];if(0<d){const e=new Map;for(let h=0;h<d;h++){const q=c[b++],p=c[b++],r=c[b++];e.set(q,[p,r])}a.patternMap=e}a.bufferDataOffset=b;return a}v._inheritsLoose(k,l);var f=k.prototype;f.hasData=function(){return 0<this.lineIndexCount};f.triangleCount=function(){return this.lineIndexCount/3};f.doDestroy=function(){g.isSome(this.lineVertexArrayObject)&&this.lineVertexArrayObject.dispose();
g.isSome(this.lineVertexBuffer)&&this.lineVertexBuffer.dispose();g.isSome(this.lineIndexBuffer)&&this.lineIndexBuffer.dispose();this.lineIndexBuffer=this.lineVertexBuffer=this.lineVertexArrayObject=null;this.memoryUsed=0};f.doPrepareForRendering=function(c,a,b){a=new Uint32Array(a);var d=new Int32Array(a.buffer);const e=a[b++];this.lineVertexBuffer=m.BufferObject.createVertex(c,n.Usage.STATIC_DRAW,new Int32Array(d.buffer,4*b,e));b+=e;d=a[b++];this.lineIndexBuffer=m.BufferObject.createIndex(c,n.Usage.STATIC_DRAW,
new Uint32Array(a.buffer,4*b,d));b+=d;b=this.layer.lineMaterial;this.lineVertexArrayObject=new u.VertexArrayObject(c,b.getAttributeLocations(),b.getLayoutInfo(),{geometry:this.lineVertexBuffer},this.lineIndexBuffer)};return k}(w),C=function(l){function k(c,a){a=l.call(this,c,a)||this;a.type=x.BucketType.FILL;a.fillIndexStart=0;a.fillIndexCount=0;a.outlineIndexStart=0;a.outlineIndexCount=0;c=new Uint32Array(c);let b=a.bufferDataOffset;a.fillIndexStart=c[b++];a.fillIndexCount=c[b++];a.outlineIndexStart=
c[b++];a.outlineIndexCount=c[b++];const d=c[b++];if(0<d){const e=new Map;for(let h=0;h<d;h++){const q=c[b++],p=c[b++],r=c[b++];e.set(q,[p,r])}a.patternMap=e}a.bufferDataOffset=b;return a}v._inheritsLoose(k,l);var f=k.prototype;f.hasData=function(){return 0<this.fillIndexCount||0<this.outlineIndexCount};f.triangleCount=function(){return(this.fillIndexCount+this.outlineIndexCount)/3};f.doDestroy=function(){g.isSome(this.fillVertexArrayObject)&&this.fillVertexArrayObject.dispose();g.isSome(this.fillVertexBuffer)&&
this.fillVertexBuffer.dispose();g.isSome(this.fillIndexBuffer)&&this.fillIndexBuffer.dispose();this.fillIndexBuffer=this.fillVertexBuffer=this.fillVertexArrayObject=null;g.isSome(this.outlineVertexArrayObject)&&this.outlineVertexArrayObject.dispose();g.isSome(this.outlineVertexBuffer)&&this.outlineVertexBuffer.dispose();g.isSome(this.outlineIndexBuffer)&&this.outlineIndexBuffer.dispose();this.outlineIndexBuffer=this.outlineVertexBuffer=this.outlineVertexArrayObject=null;this.memoryUsed=0};f.doPrepareForRendering=
function(c,a,b){a=new Uint32Array(a);var d=new Int32Array(a.buffer),e=a[b++];this.fillVertexBuffer=m.BufferObject.createVertex(c,n.Usage.STATIC_DRAW,new Int32Array(d.buffer,4*b,e));b+=e;e=a[b++];this.fillIndexBuffer=m.BufferObject.createIndex(c,n.Usage.STATIC_DRAW,new Uint32Array(a.buffer,4*b,e));b+=e;e=a[b++];this.outlineVertexBuffer=m.BufferObject.createVertex(c,n.Usage.STATIC_DRAW,new Int32Array(d.buffer,4*b,e));b+=e;d=a[b++];this.outlineIndexBuffer=m.BufferObject.createIndex(c,n.Usage.STATIC_DRAW,
new Uint32Array(a.buffer,4*b,d));b+=d;a=this.layer;b=a.fillMaterial;a=a.outlineMaterial;this.fillVertexArrayObject=new u.VertexArrayObject(c,b.getAttributeLocations(),b.getLayoutInfo(),{geometry:this.fillVertexBuffer},this.fillIndexBuffer);this.outlineVertexArrayObject=new u.VertexArrayObject(c,a.getAttributeLocations(),a.getLayoutInfo(),{geometry:this.outlineVertexBuffer},this.outlineIndexBuffer)};return k}(w),D=function(l){function k(c,a,b){a=l.call(this,c,a)||this;a.type=x.BucketType.SYMBOL;a.iconPerPageElementsMap=
new Map;a.glyphPerPageElementsMap=new Map;a.symbolInstances=[];a.isIconSDF=!1;a.opacityChanged=!1;a.lastOpacityUpdate=0;a.symbols=[];const d=new Uint32Array(c),e=new Int32Array(c);c=new Float32Array(c);let h=a.bufferDataOffset;a.isIconSDF=!!d[h++];var q=d[h++];for(var p=0;p<q;p++){var r=d[h++],y=d[h++],z=d[h++];a.iconPerPageElementsMap.set(r,[y,z])}q=d[h++];for(p=0;p<q;p++)r=d[h++],y=d[h++],z=d[h++],a.glyphPerPageElementsMap.set(r,[y,z]);q=d[h++];p=d[h++];a.iconOpacity=new Int32Array(q);a.textOpacity=
new Int32Array(p);h=A.deserializeSymbols(d,e,c,h,a.symbols,b);a.bufferDataOffset=h;return a}v._inheritsLoose(k,l);var f=k.prototype;f.hasData=function(){return 0<this.iconPerPageElementsMap.size||0<this.glyphPerPageElementsMap.size};f.triangleCount=function(){let c=0;for(const [,a]of this.iconPerPageElementsMap)c+=a[1];for(const [,a]of this.glyphPerPageElementsMap)c+=a[1];return c/3};f.doDestroy=function(){g.isSome(this.iconVertexArrayObject)&&this.iconVertexArrayObject.dispose();g.isSome(this.iconVertexBuffer)&&
this.iconVertexBuffer.dispose();g.isSome(this.iconOpacityBuffer)&&this.iconOpacityBuffer.dispose();g.isSome(this.iconIndexBuffer)&&this.iconIndexBuffer.dispose();this.iconIndexBuffer=this.iconOpacityBuffer=this.iconVertexBuffer=this.iconVertexArrayObject=null;g.isSome(this.textVertexArrayObject)&&this.textVertexArrayObject.dispose();g.isSome(this.textVertexBuffer)&&this.textVertexBuffer.dispose();g.isSome(this.textOpacityBuffer)&&this.textOpacityBuffer.dispose();g.isSome(this.textIndexBuffer)&&this.textIndexBuffer.dispose();
this.textIndexBuffer=this.textOpacityBuffer=this.textVertexBuffer=this.textVertexArrayObject=null;this.memoryUsed=0};f.updateOpacityInfo=function(){if(this.opacityChanged){this.opacityChanged=!1;var c=g.unwrap(this.iconOpacity),a=g.unwrap(this.iconOpacityBuffer);0<c.length&&c.byteLength===a.size&&a.setSubData(c,0,0,c.length);c=g.unwrap(this.textOpacity);a=g.unwrap(this.textOpacityBuffer);0<c.length&&c.byteLength===a.size&&a.setSubData(c,0,0,c.length)}};f.doPrepareForRendering=function(c,a,b){a=new Uint32Array(a);
var d=new Int32Array(a.buffer),e=a[b++];this.iconVertexBuffer=m.BufferObject.createVertex(c,n.Usage.STATIC_DRAW,new Int32Array(d.buffer,4*b,e));b+=e;e=a[b++];this.iconIndexBuffer=m.BufferObject.createIndex(c,n.Usage.STATIC_DRAW,new Uint32Array(a.buffer,4*b,e));b+=e;e=a[b++];this.textVertexBuffer=m.BufferObject.createVertex(c,n.Usage.STATIC_DRAW,new Int32Array(d.buffer,4*b,e));b+=e;d=a[b++];this.textIndexBuffer=m.BufferObject.createIndex(c,n.Usage.STATIC_DRAW,new Uint32Array(a.buffer,4*b,d));b+=d;
this.iconOpacityBuffer=m.BufferObject.createVertex(c,n.Usage.STATIC_DRAW,g.unwrap(this.iconOpacity).buffer);this.textOpacityBuffer=m.BufferObject.createVertex(c,n.Usage.STATIC_DRAW,g.unwrap(this.textOpacity).buffer);a=this.layer;b=a.iconMaterial;a=a.textMaterial;this.iconVertexArrayObject=new u.VertexArrayObject(c,b.getAttributeLocations(),b.getLayoutInfo(),{geometry:this.iconVertexBuffer,opacity:this.iconOpacityBuffer},this.iconIndexBuffer);this.textVertexArrayObject=new u.VertexArrayObject(c,a.getAttributeLocations(),
a.getLayoutInfo(),{geometry:this.textVertexBuffer,opacity:this.textOpacityBuffer},this.textIndexBuffer)};return k}(w),E=function(l){function k(c,a){a=l.call(this,c,a)||this;a.type=x.BucketType.CIRCLE;a.circleIndexStart=0;a.circleIndexCount=0;c=new Uint32Array(c);let b=a.bufferDataOffset;a.circleIndexStart=c[b++];a.circleIndexCount=c[b++];a.bufferDataOffset=b;return a}v._inheritsLoose(k,l);var f=k.prototype;f.hasData=function(){return 0<this.circleIndexCount};f.triangleCount=function(){return this.circleIndexCount/
3};f.doDestroy=function(){g.isSome(this.circleVertexArrayObject)&&this.circleVertexArrayObject.dispose();g.isSome(this.circleVertexBuffer)&&this.circleVertexBuffer.dispose();g.isSome(this.circleIndexBuffer)&&this.circleIndexBuffer.dispose();this.circleIndexBuffer=this.circleVertexBuffer=this.circleVertexArrayObject=null;this.memoryUsed=0};f.doPrepareForRendering=function(c,a,b){a=new Uint32Array(a);var d=new Int32Array(a.buffer);const e=a[b++];this.circleVertexBuffer=m.BufferObject.createVertex(c,
n.Usage.STATIC_DRAW,new Int32Array(d.buffer,4*b,e));b+=e;d=a[b++];this.circleIndexBuffer=m.BufferObject.createIndex(c,n.Usage.STATIC_DRAW,new Uint32Array(a.buffer,4*b,d));b+=d;b=this.layer.circleMaterial;this.circleVertexArrayObject=new u.VertexArrayObject(c,b.getAttributeLocations(),b.getLayoutInfo(),{geometry:this.circleVertexBuffer},this.circleIndexBuffer)};return k}(w);t.CircleRenderBucket=E;t.FillRenderBucket=C;t.LineRenderBucket=B;t.RenderBucketBase=w;t.SymbolRenderBucket=D;Object.defineProperties(t,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
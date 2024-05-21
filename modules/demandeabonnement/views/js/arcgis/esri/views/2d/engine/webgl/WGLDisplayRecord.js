// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","./MeshData","./Utils"],function(r,q,p){return function(){function k(a,b,d,c=0,e=0){this.id=a;this.geometryType=b;this.materialKey=d;this.minZoom=c;this.maxZoom=e;this.meshData=null;this.indexCount=this.indexFrom=this.vertexCount=this.vertexFrom=this.zOrder=this.symbolLevel=0}var l=k.prototype;l.clone=function(){return this.copy()};l.copy=function(){const a=new k(this.id,this.geometryType,this.materialKey);a.vertexFrom=this.vertexFrom;a.vertexCount=
this.vertexCount;a.indexFrom=this.indexFrom;a.indexCount=this.indexCount;a.zOrder=this.zOrder;a.symbolLevel=this.symbolLevel;a.meshData=this.meshData;a.minZoom=this.minZoom;a.maxZoom=this.maxZoom;return a};l.setMeshDataFromBuffers=function(a,b,d){const c=new q;for(const e in b){const f=b[e].stride,m=b[e].data,g=[],n=p.strideToPackingFactor(f);for(let h=0;h<f*a.vertexCount/n;++h)g[h]=m[h+f*a.vertexFrom/n];c.vertexData.set(e,g)}c.indexData.length=0;for(b=0;b<a.indexCount;++b)c.indexData[b]=d[b+a.indexFrom]-
a.vertexFrom;c.vertexCount=a.vertexCount;this.meshData=c};l.readMeshDataFromBuffers=function(a,b){this.meshData?this.meshData.clear():this.meshData=new q;for(const d in a){const c=a[d].stride,e=a[d].data,f=[],m=p.strideToPackingFactor(c);for(let g=0;g<c*this.vertexCount/m;++g)f[g]=e[g+c*this.vertexFrom/m];this.meshData.vertexData.set(d,f)}this.meshData.indexData.length=0;for(a=0;a<this.indexCount;++a)this.meshData.indexData[a]=b[a+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount};
l.writeMeshDataToBuffers=function(a,b,d,c){for(const e in b){const f=b[e].stride,m=this.meshData.vertexData.get(e),g=b[e].data,n=p.strideToPackingFactor(f);for(let h=0;h<f*this.meshData.vertexCount/n;++h)g[h+f*a/n]=m[h]}for(b=0;b<this.meshData.indexData.length;++b)c[b+d]=this.meshData.indexData[b]+a;this.vertexFrom=a;this.vertexCount=this.meshData.vertexCount;this.indexFrom=d;this.indexCount=this.meshData.indexData.length};k.writeAllMeshDataToBuffers=function(a,b,d){let c=0,e=0;for(const f of a)f.writeMeshDataToBuffers(c,
b,e,d),c+=f.vertexCount,e+=f.indexCount};l._computeSortKey=function(){this._sortKey=(this.symbolLevel&31)<<12|(this.zOrder&127)<<4|this.geometryType&7};l.serialize=function(a){a.push(this.geometryType);a.push(this.materialKey);a.push(this.vertexFrom);a.push(this.vertexCount);a.push(this.indexFrom);a.push(this.indexCount);a.push(this.minZoom);a.push(this.maxZoom);return a};k.deserialize=function(a,b){const d=a.readInt32(),c=a.readInt32();b=new k(b.id,d,c);b.vertexFrom=a.readInt32();b.vertexCount=a.readInt32();
b.indexFrom=a.readInt32();b.indexCount=a.readInt32();b.minZoom=a.readInt32();b.maxZoom=a.readInt32();return b};r._createClass(k,[{key:"sortKey",get:function(){void 0===this._sortKey&&this._computeSortKey();return this._sortKey}}]);return k}()});
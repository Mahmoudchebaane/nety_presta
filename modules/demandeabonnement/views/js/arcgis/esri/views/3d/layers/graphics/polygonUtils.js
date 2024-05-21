// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry ../../../../core/maybe ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/VertexAttribute ../../../../geometry/Extent ../../../../geometry/Polygon".split(" "),function(e,m,f,h,g,b,k,l){e.PolygonCreationDataBase=function(a,c,d){this.renderData=a;this.layerUid=c;this.graphicsUid=d;this.outGeometries=[];this.outMaterials=[];this.outTransforms=[]};e.createColorGeometry=function(a){const c=[[b.VertexAttribute.POSITION,a.indices]],
d=[[b.VertexAttribute.POSITION,{size:3,data:a.attributeData.position,exclusive:!0}]];f.isSome(a.attributeData.color)&&(d.push([b.VertexAttribute.COLOR,{size:4,data:a.attributeData.color,exclusive:!0}]),c.push([b.VertexAttribute.COLOR,Array(a.indices.length).fill(0)]));f.isSome(a.attributeData.uvMapSpace)&&(d.push([b.VertexAttribute.UVMAPSPACE,{size:4,data:a.attributeData.uvMapSpace,exclusive:!0}]),c.push([b.VertexAttribute.UVMAPSPACE,a.indices]));f.isSome(a.attributeData.boundingRect)&&(d.push([b.VertexAttribute.BOUNDINGRECT,
{size:9,data:a.attributeData.boundingRect,exclusive:!0}]),c.push([b.VertexAttribute.BOUNDINGRECT,a.indices]));f.isSome(a.attributeData.mapPosition)&&(d.push([b.VertexAttribute.MAPPOS,{size:3,data:a.attributeData.mapPosition,exclusive:!0}]),c.push([b.VertexAttribute.MAPPOS,a.indices]));return new g.Geometry(d,c,h.PrimitiveType.Triangle,a.attributeData.objectAndLayerIdColor)};e.createWaterGeometry=function(a){const c=[[b.VertexAttribute.POSITION,a.indices],[b.VertexAttribute.UV0,a.indices]],d=[[b.VertexAttribute.POSITION,
{size:3,data:a.attributeData.position,exclusive:!0}],[b.VertexAttribute.UV0,{size:2,data:a.attributeData.uv0,exclusive:!0}]];f.isSome(a.attributeData.mapPosition)&&(d.push([b.VertexAttribute.MAPPOS,{size:3,data:a.attributeData.mapPosition,exclusive:!0}]),c.push([b.VertexAttribute.MAPPOS,a.indices]));return new g.Geometry(d,c)};e.geometryAsPolygon=function(a){switch(a.type){case "extent":if(a instanceof k)return l.fromExtent(a);break;case "polygon":return a}return null};Object.defineProperties(e,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});
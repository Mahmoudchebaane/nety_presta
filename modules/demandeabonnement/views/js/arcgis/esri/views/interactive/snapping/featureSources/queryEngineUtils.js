// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","../candidates/DrapedEdgeSnappingCandidate","../candidates/EdgeSnappingCandidate","../candidates/VertexSnappingCandidate"],function(d,f,g,h,k){d.convertSnappingCandidate=function(a,b,c,e){switch(a.type){case "edge":return a.draped?new g.DrapedEdgeSnappingCandidate({coordinateHelper:b,edgeStart:b.pointToVector(a.start),edgeEnd:b.pointToVector(a.end),targetPoint:b.pointToVector(a.target),objectId:a.objectId,getGroundElevation:e,elevationInfo:c}):new h.EdgeSnappingCandidate({coordinateHelper:b,
edgeStart:b.pointToVector(a.start),edgeEnd:b.pointToVector(a.end),targetPoint:b.pointToVector(a.target),objectId:a.objectId,elevationInfo:c});case "vertex":return new k.VertexSnappingCandidate({coordinateHelper:b,targetPoint:b.pointToVector(a.target),objectId:a.objectId,elevationInfo:c})}};d.makeGetGroundElevation=function(a){return f.isSome(a)&&"3d"===a.type?(b,c,e)=>a.elevationProvider.getElevation(b,c,e,a.spatialReference,"ground"):()=>null};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/promiseUtils","../../../../support/arcadeOnDemand"],function(q,r,g,x,y){function p(){p=r._asyncToGenerator(function*(c,a,h){if(g.isNone(c)||0===a.candidates.length)return t;var k=c.graphics3DGraphicsByObjectID??c.graphics3DGraphics,d=[];const u=[],{renderer:l}=c,z=g.isSome(l)&&"arcadeRequired"in l&&l.arcadeRequired?y.loadArcade():null;var m=function(){var f=r._asyncToGenerator(function*(v,{graphic:e,
graphics3DSymbol:A}){const B=yield z;e=yield c.getRenderingInfoAsync(e,l,B,{signal:h});return g.isNone(e)?[]:A.queryForSnapping(v,C,e,h)});return function(v,e){return f.apply(this,arguments)}}();const {candidates:w,spatialReference:C}=a;for(a=0;a<w.length;++a){var n=w[a],{objectId:b}=n;b="number"===typeof b?k.get(b):void 0;if(g.isNone(b))continue;const {graphics3DSymbol:f}=b;f.symbologySnappingSupported&&(d.push(m(n,b)),u.push(a))}if(0===d.length)return t;k=yield Promise.all(d);x.throwIfAborted(h);
d=[];m=[];for(a=0;a<k.length;++a){n=k[a];b=u[a];for(const f of n)d.push(f),m.push(b)}return{candidates:d,sourceCandidateIndices:m}});return p.apply(this,arguments)}const t={candidates:[],sourceCandidateIndices:[]};q.queryForSymbologySnapping=function(c,a,h){return p.apply(this,arguments)};Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
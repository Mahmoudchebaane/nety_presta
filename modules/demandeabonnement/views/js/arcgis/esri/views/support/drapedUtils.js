// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../core/maybe ../../core/unitUtils ../../renderers/support/clickToleranceUtils ../../geometry/Extent".split(" "),function(h,r,k,l,p,m){function n(a,d,b,c=new m){let e;if("2d"===b.type)e=d*b.resolution;else if("3d"===b.type){var g=b.overlayPixelSizeInMapUnits(a),f=b.basemapSpatialReference;e=k.isSome(f)&&!f.equals(b.spatialReference)?l.getMetersPerUnitForSR(f)/l.getMetersPerUnitForSR(b.spatialReference):d*g}d=a.x-e;g=a.y-e;f=a.x+e;a=a.y+e;({spatialReference:b}=b);
c.xmin=Math.min(d,f);c.ymin=Math.min(g,a);c.xmax=Math.max(d,f);c.ymax=Math.max(g,a);c.spatialReference=b;return c}const q=new m;h.createQueryGeometry=n;h.intersectsDrapedGeometry=function(a,d,b){a=b.toMap(a);if(k.isNone(a))return!1;const c=p.calculateTolerance();return n(a,c,b,q).intersects(d)};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
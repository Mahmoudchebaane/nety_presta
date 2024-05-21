// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../Graphic ../../core/has ../../core/lang ../../core/maybe ../../core/typedArrayUtil ../../geometry/support/jsonUtils ./dehydratedFeatures ../../geometry/SpatialReference".split(" "),function(c,X,u,Y,l,v,e,w,x,y){function m(a){return"declaredClass"in a}function f(a){return"declaredClass"in a}function n(a){return"declaredClass"in a}function p(a){return v.isNone(a)?null:m(a)?a:w.fromJSON(z(a))}function z(a){const {wkid:b,wkt:g,latestWkid:h}=a.spatialReference,d={wkid:b,
wkt:g,latestWkid:h};switch(a.type){case "point":const {x:A,y:B,z:C,m:D}=a;return{x:A,y:B,z:C,m:D,spatialReference:d};case "polygon":const {rings:E,hasZ:F,hasM:G}=a;return{rings:q(E),hasZ:F,hasM:G,spatialReference:d};case "polyline":const {paths:H,hasZ:I,hasM:J}=a;return{paths:q(H),hasZ:I,hasM:J,spatialReference:d};case "extent":const {xmin:K,xmax:L,ymin:M,ymax:N,zmin:O,zmax:P,mmin:Q,mmax:R,hasZ:S,hasM:T}=a;return{xmin:K,xmax:L,ymin:M,ymax:N,zmin:O,zmax:P,mmin:Q,mmax:R,hasZ:S,hasM:T,spatialReference:d};
case "multipoint":const {points:k,hasZ:U,hasM:V}=a;return{points:r(k)?t(k):k,hasZ:U,hasM:V,spatialReference:d}}}function q(a){return W(a)?a.map(b=>t(b)):a}function t(a){return a.map(b=>e.toArray(b))}function W(a){for(const b of a)if(0!==b.length)return r(b);return!1}function r(a){return a.length&&(e.isFloat32Array(a[0])||e.isFloat64Array(a[0]))}c.clonePoint=function(a,b){if(!a)return null;if(f(a)){if(null==b)return a.clone();if(f(b))return b.copy(a)}null!=b?(b.x=a.x,b.y=a.y,b.spatialReference=a.spatialReference,
a.hasZ?(b.z=a.z,b.hasZ=a.hasZ):(b.z=null,b.hasZ=!1),a.hasM?(b.m=a.m,b.hasM=!0):(b.m=null,b.hasM=!1)):(b=x.makeDehydratedPoint(a.x,a.y,a.z,a.spatialReference),a.hasM&&(b.m=a.m,b.hasM=!0));return b};c.hydrateGeometry=p;c.hydrateGraphic=function(a,b){if(!a)return null;if(n(a))return a;b=new u({layer:b,sourceLayer:b});b.visible=a.visible;b.symbol=l.clone(a.symbol);b.attributes=l.clone(a.attributes);b.geometry=p(a.geometry);return b};c.hydratedSpatialReference=function(a){const {wkid:b,wkt:g,latestWkid:h}=
a;return y.fromJSON({wkid:b,wkt:g,latestWkid:h})};c.isHydratedGeometry=m;c.isHydratedGraphic=n;c.isHydratedPoint=f;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../request ../../../../core/arrayUtils ../../../../core/Error ../../../../core/has ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/typedArrayUtil ../../../../chunks/mat3 ../../../../chunks/mat3f64 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/quat ../../../../chunks/quatf32 ../../../../chunks/quatf64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/projectionEllipsoid ../../../../geometry/SpatialReference ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/spatialReferenceUtils ../../../../rest/support/Query ../../../ViewingMode ./I3SBinaryReader ./I3SProjectionUtil ../support/edgeUtils ../support/symbolColorUtils ../../support/orientedBoundingBox".split(" "),
function(k,W,ta,X,w,ua,u,va,Y,wa,xa,ya,Z,C,za,Aa,h,H,x,E,aa,A,ba,Ba,Ca,Da,Ea,ca,Q,I){function R(a){return a&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10)}function da(a,b){var c=b[0],d=b[1];b=b[3];const e=a[0]-c;c-=a[2];const f=a[1]-d;a=d-a[3];d=Math.max(e,c,0);const g=Math.max(f,a,0);d=d*d+g*g;return d>b*b?k.MbsIntersectResult.OUTSIDE:0<d?k.MbsIntersectResult.INTERSECTS_CENTER_OUTSIDE:-Math.max(e,c,f,a)>b?k.MbsIntersectResult.INSIDE:k.MbsIntersectResult.INTERSECTS_CENTER_INSIDE}function ea(a,
b,c){const d=[],e=c&&c.missingFields;c=c&&c.originalFields;for(const f of a){a=f.toLowerCase();let g=!1;for(const n of b)if(a===n.name.toLowerCase()){d.push(n.name);g=!0;c&&c.push(f);break}!g&&e&&e.push(f)}return d}function S(){S=W._asyncToGenerator(function*(a,b,c,d,e){if(0===b.length)return[];const f=a.attributeStorageInfo;if(u.isSome(a.associatedLayer))try{return yield Fa(a.associatedLayer,b,c,d)}catch(g){if(a.associatedLayer.loaded)throw g;}if(f){b=Ga(b,c,e);if(u.isNone(b))throw new w("scenelayer:features-not-loaded",
"Tried to query attributes for unloaded features");const g=a.parsedUrl.path;return(yield Promise.all(b.map(n=>fa(g,f,n.node.resources.attributes,n.indices,d).then(r=>{for(let p=0;p<n.graphics.length;p++){const t=n.graphics[p],J=r[p];if(t.attributes)for(const l in t.attributes)l in J||(J[l]=t.attributes[l]);t.attributes=J}return n.graphics})))).flat()}throw new w("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available");});return S.apply(this,arguments)}function Ga(a,
b,c){const d=new Map,e=[];c=c();for(const n of a){var f=n.attributes[b];for(var g=0;g<c.length;g++){a=c[g];const r=a.featureIds.indexOf(f);if(0<=r){f=d.get(a.node);f||(f={node:a.node,indices:[],graphics:[]},e.push(f),d.set(a.node,f));f.indices.push(r);for(f.graphics.push(n);0<g;g--)c[g]=c[g-1];c[0]=a;break}}}return e}function Fa(a,b,c,d){return T.apply(this,arguments)}function T(){T=W._asyncToGenerator(function*(a,b,c,d){b.sort((g,n)=>g.attributes[c]-n.attributes[c]);var e=b.map(g=>g.attributes[c]);
const f=[];d=ea(d,a.fields,{originalFields:f});a=yield ha(a,e,d);for(e=0;e<b.length;e++){const g=b[e],n=a[e],r={};if(g.attributes)for(const p in g.attributes)r[p]=g.attributes[p];for(let p=0;p<f.length;p++)r[f[p]]=n[d[p]];g.attributes=r}return b});return T.apply(this,arguments)}function ha(a,b,c){var d=a.capabilities.query.maxRecordCount;if(null!=d&&b.length>d)return d=X.splitIntoChunks(b,d),Promise.all(d.map(e=>ha(a,e,c))).then(e=>e.flat());d=new Ba({objectIds:b,outFields:c,orderByFields:[a.objectIdField]});
return a.queryFeatures(d).then(e=>{if(e&&e.features&&e.features.length===b.length)return e.features.map(f=>f.attributes);throw new w("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer");})}function fa(a,b,c,d,e){const f=[];for(const g of b)g&&e.includes(g.name)&&f.push({url:`${a}/nodes/${c}/attributes/${g.key}/0`,storageInfo:g});return va.eachAlways(f.map(g=>ta(g.url,{responseType:"array-buffer"}).then(n=>Da.readBinaryAttribute(g.storageInfo,n.data)))).then(g=>
{const n=[];for(const r of d){const p={};for(let t=0;t<g.length;t++)null!=g[t].value&&(p[f[t].storageInfo.name]=ia(g[t].value,r));n.push(p)}return n})}function ia(a,b){if(!a)return null;b=a[b];return Y.isInt16Array(a)?-32768===b?null:b:Y.isInt32Array(a)?b===Ha?null:b:b!==b?null:b}function ja(a){var b=a.store.indexCRS||a.store.geographicCRS;const c=void 0===b?a.store.indexWKT:void 0;if(c)if(a.spatialReference){if(c!==a.spatialReference.wkt)throw new w("layerview:store-spatial-reference-wkt-index-incompatible",
"The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{});}else throw new w("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});b=b?new aa(R(b)):a.spatialReference;return b.equals(a.spatialReference)?a.spatialReference:b}function ka(a){var b=a.store.vertexCRS||a.store.projectedCRS;const c=void 0===b?a.store.vertexWKT:void 0;if(c)if(a.spatialReference){if(c!==
a.spatialReference.wkt)throw new w("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{});}else throw new w("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});b=b?new aa(R(b)):a.spatialReference;return b.equals(a.spatialReference)?a.spatialReference:b}function L(a,b,c){if(!x.canProjectWithoutEngine(a,
b))throw new w("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===c&&!la(a,b))throw new w("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});}function la(a,b){return a.equals(b)||a.isWGS84&&b.isWebMercator||a.isWebMercator&&b.isWGS84}function ma(a,b,c){const d=ja(a);a=ka(a);L(d,b,c);L(a,b,c)}function na(a,
b,c,d,e=0){if(d===E.getSphericalPCPF(d))if(b.isGeographic){var f=E.getReferenceEllipsoid(b);d=1+Math.max(0,e)/(f.radius+a.center[2]);h.set(c.center,a.center[0],a.center[1],a.center[2]+e);x.projectBuffer(c.center,b,0,c.center,E.getSphericalPCPF(b),0,1);C.copy(c.quaternion,a.quaternion);C.conjugate(B,a.quaternion);h.set(m,0,0,1);h.transformQuat(m,m,B);h.set(m,a.halfSize[0]*Math.abs(m[0]),a.halfSize[1]*Math.abs(m[1]),a.halfSize[2]*Math.abs(m[2]));h.scale(m,m,f.inverseFlattening);h.add(c.halfSize,a.halfSize,
m);h.scale(c.halfSize,c.halfSize,d)}else{I.corners(a,U);h.set(c.center,a.center[0],a.center[1],a.center[2]+e);x.computeTranslationToOriginAndRotation(b,c.center,v,E.getSphericalPCPF(b));h.set(c.center,v[12],v[13],v[14]);d=2*Math.sqrt(1+v[0]+v[5]+v[10]);B[0]=(v[6]-v[9])/d;B[1]=(v[8]-v[2])/d;B[2]=(v[1]-v[4])/d;B[3]=.25*d;C.multiply(c.quaternion,B,a.quaternion);C.conjugate(B,c.quaternion);let g=d=a=0;for(f of U)f[2]+=e,x.projectBuffer(f,b,0,f,E.getSphericalPCPF(b),0,1),h.sub(m,f,c.center),h.transformQuat(m,
m,B),a=Math.max(a,Math.abs(m[0])),d=Math.max(d,Math.abs(m[1])),g=Math.max(g,Math.abs(m[2]));h.set(c.halfSize,a,d,g)}else b.isWGS84&&(d.isWebMercator||ba.isPlateCarree(d))?(h.copy(y,a.center),y[2]+=e,e=E.getSphericalPCPF(d),x.projectBuffer(y,b,0,y,e,0,1),oa(e,a,y,d,c)):b.isWebMercator&&ba.isPlateCarree(d)?(h.copy(y,a.center),y[2]+=e,oa(b,a,y,d,c)):a===c?(c.center[2]+=e,x.projectBuffer(c.center,b,0,c.center,d,0,1)):(h.set(c.center,a.center[0],a.center[1],a.center[2]+e),x.projectBuffer(c.center,b,0,
c.center,d,0,1),C.copy(c.quaternion,a.quaternion),h.copy(c.halfSize,a.halfSize))}function oa(a,b,c,d,e){const f=wa.fromQuat(Ia,b.quaternion);for(let n=0;8>n;++n){for(var g=0;3>g;++g)pa[g]=b.halfSize[g]*(0!==(n&1<<g)?-1:1);for(g=0;3>g;++g){let r=c[g];for(let p=0;3>p;++p)r+=pa[p]*f[3*p+g];M[3*n+g]=r}}x.projectBuffer(M,a,0,M,d,0,8);I.compute(Ja,e)}const K=A.create();k.MbsIntersectResult=void 0;(function(a){a[a.OUTSIDE=0]="OUTSIDE";a[a.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE";a[a.INTERSECTS_CENTER_INSIDE=
2]="INTERSECTS_CENTER_INSIDE";a[a.INSIDE=3]="INSIDE"})(k.MbsIntersectResult||(k.MbsIntersectResult={}));const Ha=-(2**31),Ka=ca.createSolidEdgeMaterial({color:[0,0,0,0],opacity:0});let qa=function(){this.material=this.edgeMaterial=null;this.castShadows=!0};const D=H.create(),F=H.create(),G=H.create(),N=Aa.create(),M=new Float64Array(24),Ja={data:M,size:3},pa=H.create(),y=H.create(),Ia=xa.create(),v=Z.create(),B=za.create(),U=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],V=A.create(),
O=A.create(),ra=I.create(),m=[0,0,0],sa={data:Array(72),size:3},P=Z.create();k.SymbolInfo=qa;k.addWraparound=function(a,b){return(a|0)+(b|0)|0};k.checkPointCloudLayerCompatibleWithView=function(a,b){L(a.spatialReference,b.spatialReference,b.viewingMode)};k.checkPointCloudLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null==a.geometryType||"points"!==a.geometryType||null!=a.topology&&"PerAttributeArray"!==a.topology||null!=
a.encoding&&""!==a.encoding&&"lepcc-xyz"!==a.encoding||null==a.vertexAttributes||null==a.vertexAttributes.position));if(b)throw new w("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{});};k.checkSceneLayerCompatibleWithView=function(a,b){ma(a,b.spatialReference,b.viewingMode)};k.checkSceneLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(b=a.store.defaultGeometrySchema,b=!!(null!=b.geometryType&&"triangles"!==
b.geometryType||null!=b.topology&&"PerAttributeArray"!==b.topology||null==b.vertexAttributes||null==b.vertexAttributes.position));if(b)throw new w("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:a.parsedUrl.path});};k.checkSpatialReference=L;k.checkSpatialReferences=ma;k.computeOffsetObb=function(a,b,c,d,e){C.copy(e.quaternion,a.quaternion);if(d===Ca.ViewingMode.Global){C.conjugate(N,a.quaternion);h.transformQuat(D,a.center,N);h.abs(F,D);h.min(G,
F,a.halfSize);h.sub(G,F,G);d=h.length(G);h.add(G,F,a.halfSize);const f=h.length(G);d<c?(h.copy(e.center,a.center),h.set(D,c,c,c),h.add(e.halfSize,a.halfSize,D)):(b=0<f?1+b/f:1,d=0<d?1+c/d:1,c=(d+b)/2,b=(d-b)/2,h.scale(e.halfSize,F,b),h.scaleAndAdd(e.halfSize,e.halfSize,a.halfSize,c),h.scale(e.center,F,c),h.scaleAndAdd(e.center,e.center,a.halfSize,b),h.sign(D,D),h.multiply(e.center,e.center,D),h.transformQuat(e.center,e.center,e.quaternion))}else d=h.set(D,0,0,1),h.scaleAndAdd(e.center,a.center,d,
(c+b)/2),C.conjugate(N,a.quaternion),h.transformQuat(d,d,N),h.abs(d,d),h.scaleAndAdd(e.halfSize,a.halfSize,d,(c-b)/2);return e};k.computeVisibilityObb=function(a,b,c,d,e,f){if(!f||0===f.length||u.isNone(b))return null;const g=Ea.computeGlobalTransformation(a.mbs,e,c,b);ya.invert(P,g);let n;const r=()=>{if(!n)if(n=U,A.empty(O),u.isSome(a.serviceObb)){na(a.serviceObb,c,ra,b,e);I.corners(ra,n);for(var l of n)h.transformMat4(l,l,P),A.expandPointInPlace(O,l)}else{var q=a.mbs;l=q[3];x.projectVectorToVector(q,
c,m,b);h.transformMat4(m,m,P);m[2]+=e;for(q=0;8>q;++q){const z=n[q];h.copy(z,[m[0]+(q&1?l:-l),m[1]+(q&2?l:-l),m[2]+(q&4?l:-l)]);A.expandPointInPlace(O,z)}}};let p=Infinity,t=-Infinity;const J=l=>{if("replace"===l.type&&(l=l.geometry,l.hasZ)){A.empty(V);var q=l.spatialReference||d;l=l.rings.reduce((z,La)=>La.reduce((Ma,Na)=>{x.projectVectorToVector(Na,q,m,b);h.transformMat4(m,m,P);A.expandPointInPlace(V,m);return Math.min(m[2],Ma)},z),Infinity);r();A.intersects(O,V)&&(p=Math.min(p,l),t=Math.max(t,
l))}};f.forEach(l=>J(l));if(Infinity===p)return null;f=(l,q,z)=>{h.transformMat4(m,z,g);l[q+0]=m[0];l[q+1]=m[1];l[q+2]=m[2];q+=24;z[2]=p;h.transformMat4(m,z,g);l[q+0]=m[0];l[q+1]=m[1];l[q+2]=m[2];q+=24;z[2]=t;h.transformMat4(m,z,g);l[q+0]=m[0];l[q+1]=m[1];l[q+2]=m[2]};for(let l=0;8>l;++l)f(sa.data,3*l,n[l]);return I.compute(sa)};k.containsDraco=function(a){if(ua("disable-feature:i3s-draco")||!a)return!1;for(const b of a)for(const c of b.geometryBuffers)if("draco"===c.compressedAttributes?.encoding)return!0;
return!1};k.extractWkid=R;k.filterInPlace=function(a,b,c){let d=0,e=0;for(let f=0;f<b.length&&d<a.length;f++)a[d]===b[f]&&(c(f)&&(a[e]=a[d],e++),d++);a.length=e};k.findFieldsCaseInsensitive=ea;k.findIntersectingNodes=function(a,b,c,d){c.traverse(b,e=>{if(da(a,e.mbs)===k.MbsIntersectResult.OUTSIDE)return!1;d(e);return!0})};k.getCacheKeySuffix=function(a,b){return u.isNone(b)?"@null":b===E.getSphericalPCPF(b)?"@ECEF":a.equals(b)?"":null!=b.wkid?"@"+b.wkid:null};k.getCachedAttributeValue=ia;k.getClipRect=
function(a,b){if(0===b.rotationScale[1]&&0===b.rotationScale[2]&&0===b.rotationScale[3]&&0===b.rotationScale[5]&&0===b.rotationScale[6]&&0===b.rotationScale[7])return K[0]=(a[0]-b.position[0])/b.rotationScale[0],K[1]=(a[1]-b.position[1])/b.rotationScale[4],K[2]=(a[2]-b.position[0])/b.rotationScale[0],K[3]=(a[3]-b.position[1])/b.rotationScale[4],K};k.getIndexCrs=ja;k.getSymbolInfo=function(a){const b=new qa;var c=!1;let d=!1;for(const f of a.symbolLayers.items)if("fill"===f.type&&f.enabled){var e=
f.material;a=f.edges;u.isSome(e)&&!c&&(c=e.color,e=Q.parseColorMixMode(e.colorMixMode),u.isSome(c)?b.material={color:[c.r/255,c.g/255,c.b/255],alpha:c.a,colorMixMode:e}:b.material={color:[1,1,1],alpha:1,colorMixMode:Q.ColorMixModeEnum.Multiply},b.castShadows=f.castShadows,c=!0);u.isSome(a)&&!d&&(b.edgeMaterial=ca.createMaterialFromEdges(a,{}),d=!0)}b.material||(b.material={color:[1,1,1],alpha:1,colorMixMode:Q.ColorMixModeEnum.Multiply});return b};k.getVertexCrs=ka;k.intersectBoundingRectWithMbs=da;
k.invalidateMbs=function(a){u.isSome(a)&&(a[3]=-1)};k.invalidateObb=function(a){u.isSome(a)&&(a.halfSize[0]=-1)};k.isSupportedLocalModeProjection=la;k.isValidMbs=function(a){return 0<=a[3]};k.isValidObb=function(a){return u.isSome(a)&&0<=a.halfSize[0]};k.objectIdFilter=function(a,b,c){let d=0,e=0;for(;d<c.length;)0<=X.binaryIndexOf(a,c[d])===b&&(c[e]=c[d],e++),d++;c.length=e};k.queryAttributesFromCachedAttributesId=fa;k.rendererNeedsTextures=function(a){if(null==a||"simple"!==a.type&&"class-breaks"!==
a.type&&"unique-value"!==a.type||("unique-value"===a.type||"class-breaks"===a.type)&&null==a.defaultSymbol)return!0;a=a.getSymbols();if(0===a.length)return!0;for(const b of a){if("mesh-3d"!==b.type||0===b.symbolLayers.length)return!0;for(const c of b.symbolLayers.items)if("fill"!==c.type||u.isNone(c.material)||u.isNone(c.material.color)||"replace"!==c.material.colorMixMode)return!0}return!1};k.transformObb=na;k.transparentEdgeMaterial=Ka;k.whenGraphicAttributes=function(a,b,c,d,e){return S.apply(this,
arguments)};Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
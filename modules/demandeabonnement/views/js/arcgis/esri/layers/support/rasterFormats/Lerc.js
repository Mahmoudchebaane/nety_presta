// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../assets"],function(R,F,S){function x(b,m,g){g.set(b.slice(m,m+g.length))}function T(b){const {_malloc:m,_free:g,_lerc_getBlobInfo:K,_lerc_getDataRanges:L,_lerc_decode_4D:I,asm:J}=b;let c;const y=Object.values(J).find(a=>a&&"buffer"in a&&a.buffer===b.HEAPU8.buffer),D=a=>{a=a.map(k=>(k>>3<<3)+16);var h=a.reduce((k,n)=>k+n),f=m(h);c=new Uint8Array(y.buffer);h=a[0];a[0]=f;for(f=1;f<a.length;f++){const k=a[f];a[f]=a[f-1]+h;h=k}return a};G.getBlobInfo=a=>{var h=new Uint8Array(48),
f=new Uint8Array(24);const [k,n,l]=D([a.length,h.length,f.length]);c.set(a,k);c.set(h,n);c.set(f,l);var d=K(k,a.length,n,l,12,3);if(d)throw g(k),`lerc-getBlobInfo: error code is ${d}`;c=new Uint8Array(y.buffer);x(c,n,h);x(c,l,f);h=new Uint32Array(h.buffer);var e=new Float64Array(f.buffer);const [r,t,,p,u,v,z,A,H,q,C]=h;f={version:r,depthCount:q,width:p,height:u,validPixelCount:z,bandCount:v,blobSize:A,maskCount:H,dataType:t,minValue:e[0],maxValue:e[1],maxZerror:e[2],statistics:[],bandCountWithNoData:C};
if(C)return f;if(1===q&&1===v)return g(k),f.statistics.push({minValue:e[0],maxValue:e[1]}),f;d=q*v*8;var w=new Uint8Array(d),E=new Uint8Array(d);h=k;var B=e=0;let M=!1;c.byteLength<k+2*d?(g(k),M=!0,[h,e,B]=D([a.length,d,d]),c.set(a,h)):[e,B]=D([d,d]);c.set(w,e);c.set(E,B);if(d=L(h,a.length,q,v,e,B))throw g(h),M||g(e),`lerc-getDataRanges: error code is ${d}`;c=new Uint8Array(y.buffer);x(c,e,w);x(c,B,E);a=new Float64Array(w.buffer);d=new Float64Array(E.buffer);E=f.statistics;for(w=0;w<v;w++)if(1<q){B=
a.slice(w*q,(w+1)*q);const O=d.slice(w*q,(w+1)*q),U=Math.min.apply(null,B),V=Math.max.apply(null,O);E.push({minValue:U,maxValue:V,depthStats:{minValues:B,maxValues:O}})}else E.push({minValue:a[w],maxValue:d[w]});g(h);M||g(e);return f};G.decode=(a,h)=>{const {maskCount:f,depthCount:k,bandCount:n,width:l,height:d,dataType:e,bandCountWithNoData:r}=h;var t=P[e],p=l*d;h=new Uint8Array(p*n);t=new Uint8Array(p*k*n*t.size);p=new Uint8Array(n);var u=new Uint8Array(8*n);const [v,z,A,H,q]=D([a.length,h.length,
t.length,p.length,u.length]);c.set(a,v);c.set(h,z);c.set(t,A);c.set(p,H);c.set(u,q);if(a=I(v,a.length,f,z,k,l,d,n,e,A,H,q))throw g(v),`lerc-decode: error code is ${a}`;c=new Uint8Array(y.buffer);x(c,A,t);x(c,z,h);a=null;if(r){x(c,H,p);x(c,q,u);a=[];u=new Float64Array(u.buffer);for(let C=0;C<p.length;C++)a.push(p[C]?u[C]:null)}g(v);return{data:t,maskData:h,noDataValues:a}}}const P=[{pixelType:"S8",size:1,ctor:Int8Array,range:[-128,128]},{pixelType:"U8",size:1,ctor:Uint8Array,range:[0,255]},{pixelType:"S16",
size:2,ctor:Int16Array,range:[-32768,32767]},{pixelType:"U16",size:2,ctor:Uint16Array,range:[0,65536]},{pixelType:"S32",size:4,ctor:Int32Array,range:[-2147483648,2147483647]},{pixelType:"U32",size:4,ctor:Uint32Array,range:[0,4294967296]},{pixelType:"F32",size:4,ctor:Float32Array,range:[-3.4027999387901484E38,3.4027999387901484E38]},{pixelType:"F64",size:8,ctor:Float64Array,range:[-1.7976931348623157E308,1.7976931348623157E308]}];let N=null,Q=!1;const G={getBlobInfo:null,decode:null};F.decode=function(b,
m={}){var g=m.inputOffset??0;b=b instanceof Uint8Array?b.subarray(g):new Uint8Array(b,g);g=G.getBlobInfo(b);const {data:K,maskData:L}=G.decode(b,g),{width:I,height:J,bandCount:c,depthCount:y,dataType:D,maskCount:a,statistics:h}=g;var f=P[D],k=new f.ctor(K.buffer);b=[];g=[];const n=I*J;var l=n*y;for(var d=0;d<c;d++){var e=k.subarray(d*l,(d+1)*l);if(m.returnInterleaved)b.push(e);else{a:{var r=n,t=y;if(2>t)break a;const p=new f.ctor(r*t);for(let u=0,v=0;u<r;u++)for(let z=0,A=u;z<t;z++,A+=r)p[A]=e[v++];
e=p}b.push(e)}g.push(L.subarray(d*l,(d+1)*l))}k=0===a?null:1===a?g[0]:new Uint8Array(n);if(1<a)for(k.set(g[0]),l=1;l<g.length;l++)for(d=g[l],e=0;e<n;e++)k[e]&=d[e];({noDataValue:m}=m);l=null!=m&&f.range[0]<=m&&f.range[1]>=m;if(0<a&&l)for(l=0;l<c;l++)for(d=b[l],e=g[l]||k,r=0;r<n;r++)0===e[r]&&(d[r]=m);({pixelType:f}=f);return{width:I,height:J,bandCount:c,pixelType:f,depthCount:y,statistics:h,pixels:b,mask:k,bandMasks:a===c&&1<c?g:null}};F.getBlobInfo=function(b,m={}){b=b instanceof Uint8Array?b.subarray(m.inputOffset??
0):new Uint8Array(b,m.inputOffset??0);return G.getBlobInfo(b)};F.isLoaded=function(){return Q};F.load=function(){return N?N:N=(new Promise((b,m)=>R(["../../../chunks/lerc-wasm"],b,m))).then(b=>b.lercWasm).then(({default:b})=>b({locateFile:m=>S.getAssetUrl(`esri/layers/support/rasterFormats/${m}`)})).then(b=>{T(b);Q=!0})};Object.defineProperties(F,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
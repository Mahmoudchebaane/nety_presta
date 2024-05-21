// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ./SimpleBandStatistics".split(" "),function(A,p,B,m,C,v,q,r,D,E,y){var u;m=u=function(z){function w(a){a=z.call(this,a)||this;a.width=null;a.height=null;a.pixelType="f32";a.validPixelCount=null;a.mask=null;
a.maskIsAlpha=!1;a.statistics=null;return a}A._inheritsLoose(w,z);w.createEmptyBand=function(a,b){return new (u.getPixelArrayConstructor(a))(b)};w.getPixelArrayConstructor=function(a){let b;switch(a){case "u1":case "u2":case "u4":case "u8":b=Uint8Array;break;case "u16":b=Uint16Array;break;case "u32":b=Uint32Array;break;case "s8":b=Int8Array;break;case "s16":b=Int16Array;break;case "s32":b=Int32Array;break;case "f32":b=Float32Array;break;case "f64":b=Float64Array;break;case "c64":case "c128":case "unknown":b=
Float32Array}return b};var n=w.prototype;n.castPixelType=function(a){if(!a)return"f32";a=a.toLowerCase();["u1","u2","u4"].includes(a)?a="u8":"unknown u8 s8 u16 s16 u32 s32 f32 f64".split(" ").includes(a)||(a="f32");return a};n.getPlaneCount=function(){return this.pixels?.length};n.addData=function(a){if(!a.pixels||a.pixels.length!==this.width*this.height)throw new B("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");
this.pixels||(this.pixels=[]);this.statistics||(this.statistics=[]);this.pixels.push(a.pixels);this.statistics.push(a.statistics??new y.SimpleBandStatistics)};n.getAsRGBA=function(){const a=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case "s8":case "s16":case "u16":case "s32":case "u32":case "f32":case "f64":this._fillFromNon8Bit(a);break;default:this._fillFrom8Bit(a)}return new Uint8ClampedArray(a)};n.getAsRGBAFloat=function(){const a=new Float32Array(this.width*this.height*
4);this._fillFrom32Bit(a);return a};n.updateStatistics=function(){if(this.pixels){this.statistics=this.pixels.map(f=>this._calculateBandStatistics(f,this.mask));var a=this.mask,b=0;if(q.isSome(a))for(let f=0;f<a.length;f++)a[f]&&b++;else b=this.width*this.height;this.validPixelCount=b}};n.clamp=function(a){if(a&&"f64"!==a&&"f32"!==a&&this.pixels){switch(a){case "u8":var b=[0,255];break;case "u16":b=[0,65535];break;case "u32":b=[0,4294967295];break;case "s8":b=[-128,127];break;case "s16":b=[-32768,
32767];break;case "s32":b=[-2147483648,2147483647];break;default:b=[-3.4*1E39,3.4*1E39]}var [f,g]=b;b=this.pixels;var e=this.width*this.height,c=b.length,d=[];for(let h=0;h<c;h++){var l=u.createEmptyBand(a,e);var k=b[h];for(let x=0;x<e;x++){var t=k[x];l[x]=t>g?g:t<f?f:t}d.push(l)}this.pixels=d;this.pixelType=a}};n.extractBands=function(a){const {pixels:b,statistics:f}=this;if(q.isNone(a)||0===a.length||!b||0===b.length)return this;var g=b.length;const e=a.some(c=>c>=b.length);g=g===a.length&&!a.some((c,
d)=>c!==d);return e||g?this:new u({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:a.map(c=>b[c]),statistics:f&&a.map(c=>f[c])})};n.clone=function(){const a=new u({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});q.isSome(this.mask)&&(a.mask=this.mask instanceof Uint8Array?new Uint8Array(this.mask):this.mask.slice(0));
let b;const f=u.getPixelArrayConstructor(this.pixelType);if(this.pixels&&0<this.pixels.length){a.pixels=[];const g=!!this.pixels[0].slice;for(b=0;b<this.pixels.length;b++)a.pixels[b]=g?this.pixels[b].slice(0,this.pixels[b].length):new f(this.pixels[b])}if(this.statistics)for(a.statistics=[],b=0;b<this.statistics.length;b++)a.statistics[b]=C.clone(this.statistics[b]);return a};n._fillFrom8Bit=function(a){const {mask:b,maskIsAlpha:f,pixels:g}=this;if(a&&g&&g.length){var e,c;var d=e=c=g[0];3<=g.length?
(e=g[1],c=g[2]):2===g.length&&(e=g[1]);var l=new Uint32Array(a),k=this.width*this.height;if(d.length!==k)v.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");else if(q.isSome(b)&&b.length===k)if(f)for(a=0;a<k;a++)b[a]&&(l[a]=b[a]<<24|c[a]<<16|e[a]<<8|d[a]);else for(a=0;a<k;a++)b[a]&&(l[a]=-16777216|c[a]<<16|e[a]<<8|d[a]);else for(a=0;a<k;a++)l[a]=-16777216|c[a]<<16|e[a]<<8|d[a]}else v.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")};
n._fillFromNon8Bit=function(a){const {pixels:b,mask:f,statistics:g}=this;if(a&&b&&b.length){var e=this.pixelType,c=1,d=0;c=1;if(g&&0<g.length){for(var l of g)null!=l.minValue&&(d=Math.min(d,l.minValue)),null!=l.maxValue&&null!=l.minValue&&(c=Math.max(c,l.maxValue-l.minValue));c=255/c}else c=255,"s8"===e?(d=-128,c=127):"u16"===e?c=65535:"s16"===e?(d=-32768,c=32767):"u32"===e?c=4294967295:"s32"===e?(d=-2147483648,c=2147483647):"f32"===e?(d=-3.4*1E39,c=3.4*1E39):"f64"===e&&(d=-Number.MAX_VALUE,c=Number.MAX_VALUE),
c=255/(c-d);a=new Uint32Array(a);e=this.width*this.height;var k,t,h;l=k=t=b[0];if(l.length!==e)return v.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(2<=b.length)if(k=b[1],3<=b.length&&(t=b[2]),q.isSome(f)&&f.length===e)for(h=0;h<e;h++)f[h]&&(a[h]=-16777216|(t[h]-d)*c<<16|(k[h]-d)*c<<8|(l[h]-d)*c);else for(h=0;h<e;h++)a[h]=-16777216|(t[h]-d)*c<<16|(k[h]-d)*c<<8|(l[h]-d)*c;else if(q.isSome(f)&&f.length===e)for(h=0;h<e;h++)k=(l[h]-d)*c,
f[h]&&(a[h]=-16777216|k<<16|k<<8|k);else for(h=0;h<e;h++)k=(l[h]-d)*c,a[h]=-16777216|k<<16|k<<8|k}else v.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")};n._fillFrom32Bit=function(a){const {pixels:b,mask:f}=this;if(!a||!b||!b.length)return v.getLogger(this.declaredClass).error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let g,e,c,d;g=e=c=b[0];3<=b.length?(e=b[1],c=b[2]):2===b.length&&(e=b[1]);const l=
this.width*this.height;if(g.length!==l)return v.getLogger(this.declaredClass).error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let k=0;if(q.isSome(f)&&f.length===l)for(d=0;d<l;d++)a[k++]=g[d],a[k++]=e[d],a[k++]=c[d],a[k++]=f[d]&1;else for(d=0;d<l;d++)a[k++]=g[d],a[k++]=e[d],a[k++]=c[d],a[k++]=1};n._calculateBandStatistics=function(a,b){let f=Infinity,g=-Infinity;const e=a.length;let c,d=0;if(q.isSome(b))for(c=0;c<e;c++)b[c]&&(d=a[c],f=d<f?d:f,g=d>g?d:g);else for(c=
0;c<e;c++)d=a[c],f=d<f?d:f,g=d>g?d:g;return new y.SimpleBandStatistics(f,g)};return w}(m.JSONSupport);p.__decorate([r.property({json:{write:!0}})],m.prototype,"width",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"height",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"pixelType",void 0);p.__decorate([D.cast("pixelType")],m.prototype,"castPixelType",null);p.__decorate([r.property({json:{write:!0}})],m.prototype,"validPixelCount",void 0);p.__decorate([r.property({json:{write:!0}})],
m.prototype,"mask",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"maskIsAlpha",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"pixels",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"statistics",void 0);return m=u=p.__decorate([E.subclass("esri.layers.support.PixelBlock")],m)});
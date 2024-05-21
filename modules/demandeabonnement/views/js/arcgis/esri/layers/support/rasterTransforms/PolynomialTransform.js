// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/reader ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ./BaseRasterTransform ../../../geometry/Point ../../../geometry/Extent".split(" "),function(t,
n,m,q,C,D,y,u,z,v,A,w,B){function r(c,d,h){const {x:a,y:b}=d;if(2>h)return{x:c[0]+a*c[2]+b*c[4],y:c[1]+a*c[3]+b*c[5]};if(2===h){d=a*a;h=b*b;var e=a*b;return{x:c[0]+a*c[2]+b*c[4]+d*c[6]+e*c[8]+h*c[10],y:c[1]+a*c[3]+b*c[5]+d*c[7]+e*c[9]+h*c[11]}}d=a*a;h=b*b;e=a*b;const f=d*a,g=d*b,k=a*h,l=b*h;return{x:c[0]+a*c[2]+b*c[4]+d*c[6]+e*c[8]+h*c[10]+f*c[12]+g*c[14]+k*c[16]+l*c[18],y:c[1]+a*c[3]+b*c[5]+d*c[7]+e*c[9]+h*c[11]+f*c[13]+g*c[15]+k*c[17]+l*c[19]}}function x(c,d,h){const {xmin:a,ymin:b,xmax:e,ymax:f,
spatialReference:g}=d;d=[];if(2>h)d.push({x:a,y:f}),d.push({x:e,y:f}),d.push({x:a,y:b}),d.push({x:e,y:b});else{var k=10;for(var l=0;l<k;l++)d.push({x:a,y:b+(f-b)*l/(k-1)}),d.push({x:e,y:b+(f-b)*l/(k-1)});k=8;for(l=1;l<=k;l++)d.push({x:a+(e-a)*l/k,y:b}),d.push({x:a+(e-a)*l/k,y:f})}d=d.map(p=>r(c,p,h));k=d.map(p=>p.x);d=d.map(p=>p.y);return new B({xmin:Math.min.apply(null,k),xmax:Math.max.apply(null,k),ymin:Math.min.apply(null,d),ymax:Math.max.apply(null,d),spatialReference:g})}m=function(c){function d(){var a=
c.apply(this,arguments)||this;a.polynomialOrder=1;a.type="polynomial";return a}t._inheritsLoose(d,c);var h=d.prototype;h.readForwardCoefficients=function(a,b){const {coeffX:e,coeffY:f}=b;if(!e?.length||!f?.length||e.length!==f.length)return null;a=[];for(b=0;b<e.length;b++)a.push(e[b]),a.push(f[b]);return a};h.writeForwardCoefficients=function(a,b,e){e=[];const f=[];for(let g=0;g<a?.length;g++)0===g%2?e.push(a[g]):f.push(a[g]);b.coeffX=e;b.coeffY=f};h.readInverseCoefficients=function(a,b){const {inverseCoeffX:e,
inverseCoeffY:f}=b;if(!e?.length||!f?.length||e.length!==f.length)return null;a=[];for(b=0;b<e.length;b++)a.push(e[b]),a.push(f[b]);return a};h.writeInverseCoefficients=function(a,b,e){e=[];const f=[];for(let g=0;g<a?.length;g++)0===g%2?e.push(a[g]):f.push(a[g]);b.inverseCoeffX=e;b.inverseCoeffY=f};h.forwardTransform=function(a){if("point"===a.type){const b=r(this.forwardCoefficients,a,this.polynomialOrder);return new w({x:b.x,y:b.y,spatialReference:a.spatialReference})}return x(this.forwardCoefficients,
a,this.polynomialOrder)};h.inverseTransform=function(a){if("point"===a.type){const b=r(this.inverseCoefficients,a,this.polynomialOrder);return new w({x:b.x,y:b.y,spatialReference:a.spatialReference})}return x(this.inverseCoefficients,a,this.polynomialOrder)};t._createClass(d,[{key:"inverseCoefficients",get:function(){var a=this._get("inverseCoefficients"),b=this._get("forwardCoefficients");if(!a&&b&&2>this.polynomialOrder){const [e,f,g,k,l,p]=b;a=g*p-l*k;b=l*k-g*p;a=[(l*f-e*p)/a,(g*f-e*k)/b,p/a,k/
b,-l/a,-g/b]}return a},set:function(a){this._set("inverseCoefficients",a)}},{key:"affectsPixelSize",get:function(){return 0<this.polynomialOrder}}]);return d}(A);n.__decorate([q.property({json:{write:!0}})],m.prototype,"polynomialOrder",void 0);n.__decorate([q.property()],m.prototype,"forwardCoefficients",void 0);n.__decorate([u.reader("forwardCoefficients",["coeffX","coeffY"])],m.prototype,"readForwardCoefficients",null);n.__decorate([v.writer("forwardCoefficients")],m.prototype,"writeForwardCoefficients",
null);n.__decorate([q.property({json:{write:!0}})],m.prototype,"inverseCoefficients",null);n.__decorate([u.reader("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],m.prototype,"readInverseCoefficients",null);n.__decorate([v.writer("inverseCoefficients")],m.prototype,"writeInverseCoefficients",null);n.__decorate([q.property()],m.prototype,"affectsPixelSize",null);n.__decorate([y.enumeration({PolynomialXform:"polynomial"})],m.prototype,"type",void 0);return m=n.__decorate([z.subclass("esri.layers.support.rasterTransforms.PolynomialTransform")],
m)});
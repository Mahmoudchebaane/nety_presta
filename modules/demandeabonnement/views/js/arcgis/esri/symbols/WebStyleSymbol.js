// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Logger ../core/maybe ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../portal/Portal ../chunks/persistableUrlUtils ./Symbol ./support/Thumbnail".split(" "),function(v,p,d,w,m,x,f,c,E,y,z,t,u,A,B){function C(){return new Promise((h,g)=>v(["./support/webStyleSymbolUtils"],
h,g))}var q;c=q=function(h){function g(a){a=h.call(this,a)||this;a.styleName=null;a.portal=null;a.styleUrl=null;a.thumbnail=null;a.name=null;a.type="web-style";return a}p._inheritsLoose(g,h);var k=g.prototype;k.read=function(a,e){this.portal=e?e.portal:void 0;h.prototype.read.call(this,a,e)};k.clone=function(){return new q({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})};k.fetchSymbol=function(a){return this._fetchSymbol("webRef",a)};k.fetchCIMSymbol=function(a){return this._fetchSymbol("cimRef",
a)};k._fetchSymbol=function(){var a=p._asyncToGenerator(function*(e,b){const l=m.isSome(b)?b.cache:null,r=l?this._fetchCacheKey:null;if(m.isSome(l)){var n=r&&l.get(r);if(n)return n.clone()}n=yield C();x.throwIfAborted(b);b=n.resolveWebStyleSymbol(this,{portal:this.portal},e,b);b.catch(D=>{w.getLogger(this.declaredClass).error("#fetchSymbol()","Failed to create symbol from style",D)});b=yield b;if(!("webRef"===e&&"point-3d"===b.type||"cimRef"===e&&"cim"===b.type))return null;m.isSome(l)&&l.set(r,b.clone());
return b});return function(e,b){return a.apply(this,arguments)}}();p._createClass(g,[{key:"_fetchCacheKey",get:function(){const a=m.isSome(this.portal)?this.portal:t.getDefault();return`${this.styleName}:${this.styleUrl}:${this.name}:${a.user?a.user.username:null}:${a.url}`}}]);return g}(A);d.__decorate([f.property({json:{write:!1}})],c.prototype,"color",void 0);d.__decorate([f.property({type:String,json:{write:!0}})],c.prototype,"styleName",void 0);d.__decorate([f.property({type:t,json:{write:!1}})],
c.prototype,"portal",void 0);d.__decorate([f.property({type:String,json:{read:u.read,write:u.write}})],c.prototype,"styleUrl",void 0);d.__decorate([f.property({type:B.Thumbnail,json:{read:!1}})],c.prototype,"thumbnail",void 0);d.__decorate([f.property({type:String,json:{write:!0}})],c.prototype,"name",void 0);d.__decorate([y.enumeration({styleSymbolReference:"web-style"},{readOnly:!0})],c.prototype,"type",void 0);d.__decorate([f.property()],c.prototype,"_fetchCacheKey",null);return c=q=d.__decorate([z.subclass("esri.symbols.WebStyleSymbol")],
c)});
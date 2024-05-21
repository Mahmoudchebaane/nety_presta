// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/maybe ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Font ./Symbol3DLayer ./support/materialUtils ./support/Symbol3DHalo ./support/Symbol3DMaterial ./support/Symbol3DTextBackground ./support/textUtils".split(" "),function(p,c,h,e,d,b,y,z,A,q,B,C,r,t,
u,m){var k;b=k=function(v){function g(a){a=v.call(this,a)||this;a._userSize=void 0;a.halo=null;a.horizontalAlignment="center";a.lineHeight=1;a.material=null;a.background=null;a.text=null;a.type="text";a.verticalAlignment="baseline";return a}p._inheritsLoose(g,v);var w=g.prototype;w.writeFont=function(a,l,x,f){l.font=a.write({},{...f,textSymbol3D:!0});delete l.font.size};w.clone=function(){const a=new k({enabled:this.enabled,font:this.font&&h.clone(this.font),halo:this.halo&&h.clone(this.halo),horizontalAlignment:this.horizontalAlignment,
lineHeight:this.lineHeight,material:e.isSome(this.material)?this.material.clone():null,text:this.text,verticalAlignment:this.verticalAlignment,background:h.clone(this.background)});a._userSize=this._userSize;return a};g.fromTextSymbol=function(a){var l=k,x=e.isSome(a.font)?a.font.clone():new q;var f=a.haloColor;var n=a.haloSize;f=f&&null!=n&&0<n?new r.Symbol3DHalo({color:h.clone(f),size:n}):null;return new l({font:x,halo:f,horizontalAlignment:a.horizontalAlignment,lineHeight:a.lineHeight,material:a.color?
new t.Symbol3DMaterial({color:a.color.clone()}):null,text:a.text,verticalAlignment:a.verticalAlignment,background:a.backgroundColor?new u.Symbol3DTextBackground({color:a.backgroundColor.clone()}):null})};p._createClass(g,[{key:"font",get:function(){return this._get("font")||null},set:function(a){e.isSome(a)&&e.isSome(this._userSize)&&(a.size=this._userSize);this._set("font",a)}},{key:"size",get:function(){return e.isSome(this._userSize)?this._userSize:e.isSome(this.font)&&null!=this.font.size?this.font.size:
9},set:function(a){this._userSize=a;e.isSome(this.font)&&(this.font.size=this._userSize);this.notifyChange("size")}}]);return g}(B);c.__decorate([d.property({type:q,json:{write:!0}})],b.prototype,"font",null);c.__decorate([A.writer("font")],b.prototype,"writeFont",null);c.__decorate([d.property({type:r.Symbol3DHalo,json:{write:!0}})],b.prototype,"halo",void 0);c.__decorate([d.property({...m.horizontalAlignmentProperty,json:{default:"center",write:!0}})],b.prototype,"horizontalAlignment",void 0);c.__decorate([d.property({...m.lineHeightProperty,
json:{default:1,write:!0}})],b.prototype,"lineHeight",void 0);c.__decorate([d.property({type:t.Symbol3DMaterial,json:{write:!0}})],b.prototype,"material",void 0);c.__decorate([d.property({type:u.Symbol3DTextBackground,json:{write:!0}})],b.prototype,"background",void 0);c.__decorate([d.property(C.screenSizeProperty)],b.prototype,"size",null);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"text",void 0);c.__decorate([y.enumeration({Text:"text"},{readOnly:!0})],b.prototype,"type",
void 0);c.__decorate([d.property({...m.verticalAlignmentProperty,json:{default:"baseline",write:!0}})],b.prototype,"verticalAlignment",void 0);return b=k=c.__decorate([z.subclass("esri.symbols.TextSymbol3DLayer")],b)});
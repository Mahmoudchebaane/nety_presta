// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../color ../../definitions ../../number ../../materialKey/MaterialKey ./util ./WGLBaseLineTemplate ./WGLDynamicMeshTemplate ../../util/Result".split(" "),function(v,w,r,t,h,q,x,d,y,z,A){return function(u){function p(a,e,n){var b=u.call(this,a)||this;b._minMaxZoom=q.i1616to32(Math.round(e*h.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(n*h.MIN_MAX_ZOOM_PRECISION_FACTOR));b._cimLineLayer=
a;let c=0;d.isFunction(a.width)||(c=.5*r.pt2px(a.width));b._dynamicPropertyMap.set("_halfWidth",(k,g,l)=>d.isFunction(a.width)?.5*r.pt2px(a.width(k,g,l)):c);d.isFunction(a.cap)?b._dynamicPropertyMap.set("_capType",a.cap):b._capType=a.cap;d.isFunction(a.join)?b._dynamicPropertyMap.set("_joinType",a.join):b._joinType=a.join;const f=a.color;d.isFunction(f)?b._dynamicPropertyMap.set("_fillColor",(k,g,l)=>t.premultiplyAlphaRGBA(f(k,g,l))):b._fillColor=f&&t.premultiplyAlphaRGBA(f)||0;const m=a.miterLimit;
d.isFunction(m)?b._dynamicPropertyMap.set("_miterLimitCosine",(k,g,l)=>d.getLimitCosine(m(k,g,l))):b._miterLimitCosine=d.getLimitCosine(m);w.isSome(a.effects)&&(e=a.effects,d.isFunction(e)?b._dynamicPropertyMap.set("_effects",e):b._effects=e);b._scaleFactor=a.scaleFactor||1;b._isDashed=null!=a.dashTemplate;b.tessellationProperties._bitset=(a.colorLocked?h.BITSET_GENERIC_LOCK_COLOR:0)|(a.scaleDash?h.BITSET_LINE_SCALE_DASH:0)|(a.sampleAlphaOnly?h.BITSET_GENERIC_CONSIDER_ALPHA_ONLY:0);b._materialKey=
a.materialKey;b._initializeTessellator(!0);return b}v._inheritsLoose(p,u);p.fromCIMLine=function(a,e){const [n,b]=d.getMinMaxZoom(a.scaleInfo,e);return new p(a,n,b)};p.prototype.bindFeature=function(a,e,n){const b=a.readLegacyFeature();this._dynamicPropertyMap.forEach((f,m)=>{this[m]=f(b,e,n)});this._halfWidth*=this._scaleFactor;a=this._materialCache;var c=this._cimLineLayer.materialHash;c=c(b,e,n);c=a.get(c);a=null;c&&A.ok(c.spriteMosaicItem)&&(a=c.spriteMosaicItem);if(a){this._hasPattern=!0;const {rect:f,
width:m,height:k}=a;c=f.x+h.SPRITE_PADDING;const g=f.y+h.SPRITE_PADDING,l=c+m,B=g+k;this.tessellationProperties._tl=q.i1616to32(c,g);this.tessellationProperties._br=q.i1616to32(l,B)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._fillColor=this._fillColor;this.tessellationProperties._halfWidth=this._halfWidth;this.tessellationProperties.offset=0;this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;
c=x.LineMaterialKey.load(this._materialKey);a&&(c.sdf=a.sdf,c.pattern=!0,c.textureBinding=a.textureBinding);this._materialKey=c.data};return p}(y(z))});
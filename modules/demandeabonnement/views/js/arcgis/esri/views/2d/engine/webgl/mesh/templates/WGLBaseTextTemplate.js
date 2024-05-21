// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../layers/graphics/featureConversionUtils ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper ../../definitions ../../enums ../../number ../../materialKey/MaterialKey ./shapingUtils".split(" "),function(v,l,w,p,x,y,z,m,q,A){return B=>function(r){function n(...a){a=r.call(this,...a)||this;a._isCIM=!1;a._vertexBoundsScale=1;a.geometryType=z.WGLGeometryType.TEXT;
a._aux=m.i8888to32(0,0,a._referenceSize,a._bitset);return a}v._inheritsLoose(n,r);var k=n.prototype;k.bindTextInfo=function(a,d){this._shapingInfo=a&&a.length?l.applySome(a,c=>A.shapeGlyphs(c,d,{scale:this._scale,angle:this._angle,xOffset:this._xOffset,yOffset:this._yOffset,hAlign:this._xAlignD,vAlign:this._yAlignD,maxLineWidth:Math.max(32,Math.min(this._lineWidth,512)),lineHeight:y.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(this._lineHeight,4)),decoration:this._decoration,isCIM:this._isCIM})):
null};k._write=function(a,d,c,b){const e=d.getDisplayId();this._writeGeometry(a,d,e,c,b)};k._writeGeometry=function(a,d,c,b,e){const f=this._shapingInfo;if(!l.isNone(f)){if(l.isSome(this._textPlacement))return d=e??d.readLegacyGeometryForDisplay(),this._writePlacedText(a,c,d,f,b);b=e?p.deltaDecodeGeometry(p.convertFromGeometry(e),2):"esriGeometryPolygon"===d.geometryType?d.readCentroid():d.readGeometryForDisplay();if(!l.isNone(b)){if(b.isPoint){const [g,h]=b.coords;return!a.hasAggregates&&a.hasPixelBufferEnabled&&
(0>g||512<=g||0>h||512<=h)?void 0:this._writeGlyphs(a,c,{x:g,y:h},f)}b.forEachVertex((g,h)=>this._writeGlyphs(a,c,{x:g,y:h},f))}}};k._writePlacedText=function(a,d,c,b,e){var f=l.unwrap(this._textPlacement);if(c=x.CIMMarkerPlacementHelper.getPlacement(c,f,w.pt2px(1),e.geometryEngine))for(var g=c.next();null!=g;)e=-g.getAngle(),b.setRotation(e),f=g.tx,g=-g.ty,0>f||512<=f||0>g||512<=g||(this._writeGlyphs(a,d,{x:f,y:g},b),b.setRotation(-e)),g=c.next()};k._writeGlyphs=function(a,d,c,b){const e=q.MaterialKeyBase.load(this._materialKey),
f=m.i1616to32(Math.round(8*c.x),Math.round(8*c.y)),g=this._vertexBoundsScale,h=b.bounds,t=2*Math.max(h.width,h.height);for(const u of b.glyphs)e.textureBinding=u.textureBinding,a.recordStart(d,e.data,this.geometryType,!0),a.vertexBounds(c.x+h.x+this._xOffset,c.y+h.y-this._yOffset,t*g,t*g),this._writeVertices(a,d,f,u),a.recordEnd()};k._writeGlyph=function(a,d,c,b,e){var f=q.MaterialKeyBase.load(this._materialKey);const g=m.i1616to32(Math.round(8*c),Math.round(8*b));f.textureBinding=e.textureBinding;
a.recordStart(d,f.data,this.geometryType,!0);f=e.bounds;const h=this._vertexBoundsScale;a.vertexBounds(c+f.x*h,b+f.y*h,f.width*h,f.height*h);this._writeVertices(a,d,g,e);a.recordEnd()};k._writeVertices=function(a,d,c,b){const e=a.vertexCount();this._writeVertexCommon(a,d,c,b);a.vertexWrite(b.offsets.upperLeft);a.vertexWrite(b.texcoords.upperLeft);a.vertexEnd();this._writeVertexCommon(a,d,c,b);a.vertexWrite(b.offsets.upperRight);a.vertexWrite(b.texcoords.upperRight);a.vertexEnd();this._writeVertexCommon(a,
d,c,b);a.vertexWrite(b.offsets.lowerLeft);a.vertexWrite(b.texcoords.lowerLeft);a.vertexEnd();this._writeVertexCommon(a,d,c,b);a.vertexWrite(b.offsets.lowerRight);a.vertexWrite(b.texcoords.lowerRight);a.vertexEnd();a.indexWrite(e+0);a.indexWrite(e+1);a.indexWrite(e+2);a.indexWrite(e+1);a.indexWrite(e+3);a.indexWrite(e+2)};k._writeVertexCommon=function(a,d,c,b){b=this._color;const e=this._haloColor,f=m.i8888to32(0,0,this._referenceSize,this._bitset),g=m.i8888to32(0,0,this._size,this._haloSize);a.vertexWrite(c);
a.vertexWrite(d);a.vertexWrite(b);a.vertexWrite(e);a.vertexWrite(g);a.vertexWrite(f);a.vertexWrite(this._minMaxZoom)};return n}(B)});
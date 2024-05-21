// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ./enums ./VTLMaterial ../../../../webgl/enums ../../../../webgl/VertexElementDescriptor".split(" "),function(l,m,d,b,g,h){let k=function(f){function a(e){return f.call(this,e)||this}m._inheritsLoose(a,f);var c=a.prototype;c.geometryInfo=function(){return a.GEOMETRY_LAYOUT};c.opacityInfo=function(){return null};c.attributes=function(){return a.ATTRIBUTES};c.attributesInfo=function(){return a.ATTRIBUTES_INFO};return a}(b.VTLMaterial);k.ATTRIBUTES=
["fill-color","fill-opacity","fill-pattern"];k.GEOMETRY_LAYOUT=[new h.VertexElementDescriptor("a_pos",2,g.DataType.SHORT,0,4)];k.ATTRIBUTES_INFO={"fill-color":{name:"color",type:d.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:d.EncodingType.R8_UNSIGNED,precisionFactor:100},"fill-pattern":{name:"tlbr",type:d.EncodingType.R16G16B16A16_PATTERN,isOptional:!0}};b=function(f){function a(e,n){e=f.call(this,e)||this;e._usefillColor=n;return e}m._inheritsLoose(a,f);var c=a.prototype;c.geometryInfo=
function(){return a.GEOMETRY_LAYOUT};c.opacityInfo=function(){return null};c.attributes=function(){return this._usefillColor?a.ATTRIBUTES_FILL:a.ATTRIBUTES_OUTLINE};c.attributesInfo=function(){return this._usefillColor?a.ATTRIBUTES_INFO_FILL:a.ATTRIBUTES_INFO_OUTLINE};return a}(b.VTLMaterial);b.ATTRIBUTES_OUTLINE=["fill-outline-color","fill-opacity"];b.ATTRIBUTES_FILL=["fill-color","fill-opacity"];b.GEOMETRY_LAYOUT=[new h.VertexElementDescriptor("a_pos",2,g.DataType.SHORT,0,8),new h.VertexElementDescriptor("a_offset",
2,g.DataType.BYTE,4,8),new h.VertexElementDescriptor("a_xnormal",2,g.DataType.BYTE,6,8)];b.ATTRIBUTES_INFO_OUTLINE={"fill-outline-color":{name:"color",type:d.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:d.EncodingType.R8_UNSIGNED,precisionFactor:100}};b.ATTRIBUTES_INFO_FILL={"fill-color":{name:"color",type:d.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:d.EncodingType.R8_UNSIGNED,precisionFactor:100}};l.VTLFillMaterial=k;l.VTLOutlineMaterial=b;Object.defineProperties(l,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
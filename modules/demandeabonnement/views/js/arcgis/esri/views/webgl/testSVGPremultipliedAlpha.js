// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../2d/engine/webgl/DefaultVertexAttributeLayouts ./BufferObject ./enums ./FramebufferObject ./Texture ./VertexArrayObject".split(" "),function(g,n,p,q,b,r,t,u){function d(){d=n._asyncToGenerator(function*(a){const c=new Image;c.src="data:image/svg+xml,%3C%3Fxml version\x3d'1.0' encoding\x3d'UTF-8'%3F%3E%3Csvg width\x3d'5' height\x3d'5' version\x3d'1.1' viewBox\x3d'0 0 5 5' xmlns\x3d'http://www.w3.org/2000/svg'%3E%3Crect width\x3d'5' height\x3d'5' fill\x3d'%23f00' fill-opacity\x3d'.5'/%3E%3C/svg%3E%0A";
c.width=5;c.height=5;yield c.decode();if(!a.gl)return!0;const e=new r.FramebufferObject(a,{colorTarget:b.TargetType.TEXTURE,depthStencilTarget:b.DepthStencilTargetType.NONE},{target:b.TextureType.TEXTURE_2D,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE,pixelFormat:b.PixelFormat.RGBA,dataType:b.PixelType.UNSIGNED_BYTE,samplingMode:b.TextureSamplingMode.NEAREST,width:1,height:1}),h=q.BufferObject.createVertex(a,b.Usage.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),k=new u.VertexArrayObject(a,new Map([["a_pos",
0]]),p.Pos2us,{geometry:h}),f=a.programCache.acquire("\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv \x3d a_pos;\n    gl_Position \x3d vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor \x3d texture2D(u_texture, v_uv);\n  }\n  ",new Map([["a_pos",0]]));a.useProgram(f);const l=new t.Texture(a,{dataType:b.PixelType.UNSIGNED_BYTE,
pixelFormat:b.PixelFormat.RGBA,preMultiplyAlpha:!1,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:b.TextureSamplingMode.LINEAR},c);a.bindTexture(l,0);f.setUniform1i("u_texture",0);const v=a.getBoundFramebufferObject(),{x:w,y:x,width:y,height:z}=a.getViewport();a.bindFramebuffer(e);a.setViewport(0,0,1,1);a.setClearColor(0,0,0,0);a.setBlendingEnabled(!1);a.clearSafe(b.ClearBufferBit.COLOR_BUFFER_BIT);a.bindVAO(k);a.drawArrays(b.PrimitiveType.TRIANGLE_STRIP,0,4);const m=new Uint8Array(4);e.readPixels(0,
0,1,1,b.PixelFormat.RGBA,b.PixelType.UNSIGNED_BYTE,m);f.dispose();k.dispose(!1);h.dispose();e.dispose();l.dispose();a.setViewport(w,x,y,z);a.bindFramebuffer(v);c.src="";return 255===m[0]});return d.apply(this,arguments)}g.testSVGPremultipliedAlpha=function(a){return d.apply(this,arguments)};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
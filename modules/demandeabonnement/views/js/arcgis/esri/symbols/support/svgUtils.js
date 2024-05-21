// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../Color ../../core/has ../../core/maybe ../../chunks/mat2df32 ../../chunks/mat2d ../../widgets/support/widgetUtils ../../widgets/support/jsxFactory".split(" "),function(w,D,L,z,M,t,E,l){function A(a,c){a*=W/180;return Math.abs(c*Math.sin(a))+Math.abs(c*Math.cos(a))}function N(a){return a.map(c=>`${c.command} ${c.values.join(" ")}`).join(" ").trim()}function F(a,c,b,d){if(a){if("circle"===a.type)return l.tsx("circle",{fill:c,"fill-rule":"evenodd",stroke:b.color,"stroke-width":b.width,
"stroke-linecap":b.cap,"stroke-linejoin":b.join,"stroke-dasharray":b.dashArray,"stroke-dashoffset":b.dashOffset,"stroke-miterlimit":"4",cx:a.cx,cy:a.cy,r:a.r});if("ellipse"===a.type)return l.tsx("ellipse",{fill:c,"fill-rule":"evenodd",stroke:b.color,"stroke-width":b.width,"stroke-linecap":b.cap,"stroke-linejoin":b.join,"stroke-dasharray":b.dashArray,"stroke-miterlimit":"4",cx:a.cx,cy:a.cy,rx:a.rx,ry:a.ry});if("rect"===a.type)return l.tsx("rect",{fill:c,"fill-rule":"evenodd",stroke:b.color,"stroke-width":b.width,
"stroke-linecap":b.cap,"stroke-linejoin":b.join,"stroke-dasharray":b.dashArray,"stroke-miterlimit":"4",x:a.x,y:a.y,width:a.width,height:a.height});if("image"===a.type)return l.tsx("image",{href:a.src,x:a.x,y:a.y,width:a.width,height:a.height,preserveAspectRatio:"none"});if("path"===a.type)return a="string"!==typeof a.path?N(a.path):a.path,l.tsx("path",{fill:c,"fill-rule":"evenodd",stroke:b.color,"stroke-width":b.width,"stroke-linecap":b.cap,"stroke-linejoin":b.join,"stroke-dasharray":b.dashArray,
"stroke-miterlimit":"4",d:a});if("text"===a.type)return z.assertIsSome(d),l.tsx("text",{"dominant-baseline":d.dominantBaseline,fill:c,"fill-rule":"evenodd",stroke:b.color,"stroke-width":b.width,"stroke-linecap":b.cap,"stroke-linejoin":b.join,"stroke-dasharray":b.dashArray,"stroke-miterlimit":"4","text-anchor":d.align,"text-decoration":d.decoration,kerning:d.kerning,rotate:d.rotate,"text-rendering":X,"font-style":d.font.style,"font-variant":d.font.variant,"font-weight":d.font.weight,"font-size":d.font.size,
"font-family":d.font.family,x:a.x,y:a.y},a.text)}return null}function G(a){const c={fill:"none",pattern:null,linearGradient:null};if(a)if("type"in a&&"pattern"===a.type){var b=`patternId-${++Y}`;c.fill=`url(#${b})`;c.pattern={id:b,x:a.x,y:a.y,width:a.width,height:a.height,image:{x:0,y:0,width:a.width,height:a.height,href:a.src}}}else"type"in a&&"linear"===a.type?(b=`linearGradientId-${++Z}`,c.fill=`url(#${b})`,c.linearGradient={id:b,x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2,stops:a.colors.map(d=>({offset:d.offset,
color:d.color&&(new D(d.color)).toString()}))}):a&&(a=new D(a),c.fill=a.toString());return c}function H(a){const c={color:"none",width:1,cap:"butt",join:"4",dashArray:"none",dashOffset:"0"};if(a&&(null!=a.width&&(c.width=a.width),a.cap&&(c.cap=a.cap),a.join&&(c.join=a.join.toString()),a.color&&(c.color=(new D(a.color)).toString()),a.dashArray&&(c.dashArray=a.dashArray),a.dashArray&&(c.dashOffset=a.dashoffset),a.style)){let b=null;a.style in O&&(b=O[a.style]);if(Array.isArray(b)){b=b.slice(0);const d=
a.width??0;for(let g=0;g<b.length;++g)b[g]*=d;if("butt"!==a.cap){for(a=0;a<b.length;a+=2)b[a]-=d,1>b[a]&&(b[a]=1);for(a=1;a<b.length;a+=2)b[a]+=d}b=b.join(",")}c.dashArray=b}return c}function I(a,c){const b={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};if(a){const d=a.alignBaseline;b.align=a.align;b.dominantBaseline="baseline"===d?"auto":"top"===d?"text-top":"bottom"===d?"hanging":d;b.decoration=a.decoration;b.kerning=a.kerning?
"auto":"0";b.rotate=a.rotated?"90":"0";z.assertIsSome(c);b.font.style=c.style||"normal";b.font.variant=c.variant||"normal";b.font.weight=c.weight||"normal";b.font.size=c.size&&c.size.toString()||"10pt";b.font.family=c.family||"serif"}return b}function P(a){const {pattern:c,linearGradient:b}=a;return c?l.tsx("pattern",{id:c.id,patternUnits:"userSpaceOnUse",x:c.x,y:c.y,width:c.width,height:c.height},l.tsx("image",{x:c.image.x,y:c.image.y,width:c.image.width,height:c.image.height,href:c.image.href})):
b?(a=b.stops.map((d,g)=>l.tsx("stop",{key:`${g}-stop`,offset:d.offset,"stop-color":d.color})),l.tsx("linearGradient",{id:b.id,gradientUnits:"userSpaceOnUse",x1:b.x1,y1:b.y1,x2:b.x2,y2:b.y2},a)):null}function aa(a,c){if(!a)return null;const b=[];for(const d of a){const {shape:g,fill:f,stroke:k,font:p}=d;a=G(f);const h=H(k),r="text"===g.type?I(g,p):null;(a=F(g,a.fill,h,r))&&b.push(a)}return l.tsx("mask",{id:c,maskUnits:"userSpaceOnUse"},l.tsx("g",null,b))}function Q(a,c,b,d,g){t.scale(a,t.identity(a),
[c,b]);a[4]=a[4]*c-d*c+d;a[5]=a[5]*b-g*b+g;return a}function v(a,c){if(m&&"left"in m){null!=m.left&&m.left>a&&(m.left=a);if(null==m.right||m.right<a)m.right=a;if(null==m.top||m.top>c)m.top=c;if(null==m.bottom||m.bottom<c)m.bottom=c}else m={left:a,bottom:c,right:a,top:c}}function R(a){const c=a.args,b=c.length;switch(a.action){case "M":case "L":case "C":case "S":case "Q":case "T":for(a=0;a<b;a+=2)v(c[a],c[a+1]);e.x=c[b-2];e.y=c[b-1];break;case "H":for(a=0;a<b;++a)v(c[a],e.y);e.x=c[b-1];break;case "V":for(a=
0;a<b;++a)v(e.x,c[a]);e.y=c[b-1];break;case "m":a=0;"x"in e||(v(e.x=c[0],e.y=c[1]),a=2);for(;a<b;a+=2)v(e.x+=c[a],e.y+=c[a+1]);break;case "l":case "t":for(a=0;a<b;a+=2)v(e.x+=c[a],e.y+=c[a+1]);break;case "h":for(a=0;a<b;++a)v(e.x+=c[a],e.y);break;case "v":for(a=0;a<b;++a)v(e.x,e.y+=c[a]);break;case "c":for(a=0;a<b;a+=6)v(e.x+c[a],e.y+c[a+1]),v(e.x+c[a+2],e.y+c[a+3]),v(e.x+=c[a+4],e.y+=c[a+5]);break;case "s":case "q":for(a=0;a<b;a+=4)v(e.x+c[a],e.y+c[a+1]),v(e.x+=c[a+2],e.y+=c[a+3]);break;case "A":for(a=
0;a<b;a+=7)v(c[a+5],c[a+6]);e.x=c[b-2];e.y=c[b-1];break;case "a":for(a=0;a<b;a+=7)v(e.x+=c[a+5],e.y+=c[a+6])}}function S(a,c,b){const d=ba[a.toLowerCase()];"number"===typeof d&&(d?c.length>=d&&(a={action:a,args:c.slice(0,c.length-c.length%d)},b.push(a),R(a)):(a={action:a,args:[]},b.push(a),R(a)))}function T(a){const c={x:0,y:0,width:0,height:0};if("circle"===a.type)c.x=a.cx-a.r,c.y=a.cy-a.r,c.width=2*a.r,c.height=2*a.r;else if("ellipse"===a.type)c.x=a.cx-a.rx,c.y=a.cy-a.ry,c.width=2*a.rx,c.height=
2*a.ry;else if("image"===a.type||"rect"===a.type)c.x=a.x,c.y=a.y,c.width=a.width,c.height=a.height;else if("path"===a.type){var b=z.unwrapOrThrow;{const f=("string"!==typeof a.path?N(a.path):a.path).match(ca),k=[];m={};e={};if(f){a="";var d=[],g=f.length;for(let p=0;p<g;++p){const h=f[p],r=parseFloat(h);isNaN(r)?(a&&S(a,d,k),d=[],a=h):d.push(r)}S(a,d,k);a={x:0,y:0,width:0,height:0};m&&"left"in m&&(a.x=m.left,a.y=m.top,a.width=m.right-m.left,a.height=m.bottom-m.top)}else a=null}b=b.call(z,a);c.x=b.x;
c.y=b.y;c.width=b.width;c.height=b.height}return c}function U(a){const c={x:0,y:0,width:0,height:0};let b=null,d=Number.NEGATIVE_INFINITY,g=Number.NEGATIVE_INFINITY;for(const f of a)b?(b.x=Math.min(b.x,f.x),b.y=Math.min(b.y,f.y),d=Math.max(d,f.x+f.width),g=Math.max(g,f.y+f.height)):(b=c,b.x=f.x,b.y=f.y,d=f.x+f.width,g=f.y+f.height);b&&(b.width=d-b.x,b.height=g-b.y);return b}function V(a,c,b,d,g,f,k,p,h){var r=(k&&f?A(f,c):c)/2,x=(k&&f?A(f,b):b)/2;if(h){var q=h[0];h=h[1];r=(k&&f?A(f,q):q)/2;x=(k&&
f?A(f,h):h)/2}q=a.width+d;var n=a.height+d;h=M.create();k=M.create();var u=!1;if(g&&0!==q&&0!==n){g=c!==b?c/b:q/n;u=c>b?c:b;let y=1,B=1;isNaN(u)||(1<g?(y=u/q,B=u/g/n):(B=u/n,y=u*g/q));t.multiply(k,k,Q(h,y,B,r,x));u=!0}g=a.x+(q-d)/2;a=a.y+(n-d)/2;d=t.multiply;r-=g;x-=a;r=t.translate(h,t.identity(h),[r,x]);d.call(t,k,k,r);!u&&(q>c||n>b)&&(r=q/c>n/b,c=(r?c:b)/(r?q:n),t.multiply(k,k,Q(h,c,c,g,a)));f&&(c=t.multiply,b=f%360*Math.PI/180,t.rotate(h,t.identity(h),b),f=Math.cos(b),b=Math.sin(b),q=h[4],n=h[5],
h[4]=q*f-n*b+a*b-g*f+g,h[5]=n*f+q*b-g*b-a*f+a,c.call(t,k,k,h));p&&(f=t.multiply,c=p[0],p=p[1],p=t.translate(h,t.identity(h),[c,p]),f.call(t,k,k,p));return`matrix(${k[0]},${k[1]},${k[2]},${k[3]},${k[4]},${k[5]})`}function da(a,c,b){a=a?.effects.find(p=>"bloom"===p.type);if(!a)return null;const {strength:d,radius:g}=a;a=0<d?g:0;const f=(d+a)*c,k=4*d+1;return l.tsx("filter",{id:`bloom${b}`,x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},l.tsx("feMorphology",{operator:"dilate",
radius:(d+.5*a)*5**(c/100)*(.4+c/100),in:"SourceGraphic",result:"dilate"}),l.tsx("feGaussianBlur",{in:"dilate",stdDeviation:f/25,result:"blur"}),l.tsx("feGaussianBlur",{in:"blur",stdDeviation:f/50,result:"intensityBlur"}),l.tsx("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},l.tsx("feFuncR",{type:"linear",slope:k}),l.tsx("feFuncG",{type:"linear",slope:k}),l.tsx("feFuncB",{type:"linear",slope:k})),l.tsx("feMerge",null,l.tsx("feMergeNode",{in:"intensityBlur"}),l.tsx("feMergeNode",
{in:"intensityBrightness"}),l.tsx("feGaussianBlur",{stdDeviation:d/10})))}let Y=0,Z=0;E=L("android");const X=L("chrome")||E&&4<=E?"auto":"optimizeLegibility",ba={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},ca=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let m={},e={};const O={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},W=Math.PI;let ea=
1;w.computeBBox=U;w.generateFillAttributes=G;w.generateStrokeAttributes=H;w.generateTextAttributes=I;w.getBoundingBox=T;w.getTransformMatrix=V;w.renderDef=P;w.renderSVG=function(a,c,b,d={}){const g=[],f=[],k=++ea,p=da(d.effectView,c,k);var h=null;p&&(h=d.effectView?.effects.find(u=>"bloom"===u.type),h=(h.strength?h.strength+h.radius/2:0)/3,h=[Math.max(c+c*h,10),Math.max(b+b*h,10)]);for(let u=0;u<a.length;u++){var r=a[u];const y=[];var x=[],q=0,n=0;let B=0;for(const fa of r){const {shape:C,fill:ha,
stroke:J,font:ia,offset:K}=fa;d.ignoreStrokeWidth||(q+=J&&J.width||0);r=G(ha);const ja=H(J),ka="text"===C.type?I(C,ia):null;g.push(P(r));y.push(F(C,r.fill,ja,ka));x.push(T(C));K&&(n+=K[0],B+=K[1])}x=z.unwrapOrThrow(U(x));q=V(x,c,b,q,d.scale??!1,d.rotation,d.useRotationSize??!1,[n,B],h);n=null;d.masking&&(n=`mask-${u}`,g.push(aa(d.masking[u],n)),n=`url(#${n})`);f.push(n?l.tsx("g",{mask:n},l.tsx("g",{transform:q},y)):l.tsx("g",{transform:q},y))}d.useRotationSize&&d.rotation&&(c=A(d.rotation,c),b=A(d.rotation,
b));p&&(z.assertIsSome(h),c=h[0],b=h[1]);return l.tsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:c,height:b,style:"display: block;"},p,l.tsx("defs",null,g),p?l.tsx("g",{filter:`url(#bloom${k})`},f):f)};w.renderShape=F;Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
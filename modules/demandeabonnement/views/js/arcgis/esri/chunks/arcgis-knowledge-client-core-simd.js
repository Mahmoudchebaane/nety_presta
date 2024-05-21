// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers"],function(Gb,Fa){var aa={exports:{}};(function(ba,ca){ca=(()=>{var V="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;return function(E){function N(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Va)return Va.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|g:(e&7)<<18|f<<
12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function W(){var a=Ga.buffer;Ha=a;k.HEAP8=O=new Int8Array(a);k.HEAP16=R=new Int16Array(a);k.HEAP32=J=new Int32Array(a);k.HEAPU8=z=new Uint8Array(a);k.HEAPU16=da=new Uint16Array(a);k.HEAPU32=u=new Uint32Array(a);k.HEAPF32=Wa=new Float32Array(a);k.HEAPF64=Xa=new Float64Array(a);k.HEAP64=Ya=new BigInt64Array(a);k.HEAPU64=Za=new BigUint64Array(a)}function Hb(){var a=
k.preRun.shift();$a.unshift(a)}function ea(a){if(k.onAbort)k.onAbort(a);a="Aborted("+a+")";X(a);ab=!0;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");Ia(a);throw a;}function bb(){return P.startsWith("data:application/octet-stream;base64,")}function cb(){var a=P;try{if(a==P&&fa)return new Uint8Array(fa);throw"both async and sync fetching of the wasm failed";}catch(b){ea(b)}}function Ib(){return fa||"function"!=typeof fetch?Promise.resolve().then(function(){return cb()}):
fetch(P,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+P+"'";return a.arrayBuffer()}).catch(function(){return cb()})}function Ja(a){for(;0<a.length;)a.shift()(k)}function Jb(a){this.da=a-24;this.Oa=function(b){u[this.da+4>>2]=b};this.Fa=function(b){u[this.da+8>>2]=b};this.Ga=function(){J[this.da>>2]=0};this.Ca=function(){O[this.da+12>>0]=0};this.Ia=function(){O[this.da+13>>0]=0};this.za=function(b,c){this.Aa();this.Oa(b);this.Fa(c);this.Ga();this.Ca();
this.Ia()};this.Aa=function(){u[this.da+16>>2]=0}}function ra(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function ha(a){return this.fromWireType(J[a>>2])}function db(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ka(a,b){a=db(a);return function(){return b.apply(this,arguments)}}function La(a){var b=Error,c=Ka(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,
""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}function sa(a){throw new eb(a);}function C(a,b,c){function d(h){h=c(h);h.length!==a.length&&sa("Mismatched type converter count");for(var l=0;l<a.length;++l)F(a[l],h[l])}a.forEach(function(h){ta[h]=b});var e=Array(b.length),f=[],g=0;b.forEach((h,l)=>{S.hasOwnProperty(h)?e[l]=S[h]:(f.push(h),Y.hasOwnProperty(h)||(Y[h]=[]),
Y[h].push(()=>{e[l]=S[h];++g;g===f.length&&d(e)}))});0===f.length&&d(e)}function ia(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function v(a){for(var b="";z[a];)b+=fb[z[a++]];return b}function r(a){throw new Z(a);}function F(a,b,c={}){if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||r('type "'+d+'" must have a positive integer typeid pointer');if(S.hasOwnProperty(a)){if(c.Pa)return;
r("Cannot register type '"+d+"' twice")}S[a]=b;delete ta[a];Y.hasOwnProperty(a)&&(b=Y[a],delete Y[a],b.forEach(e=>e()))}function gb(a,b,c){switch(b){case 0:return c?function(d){return O[d]}:function(d){return z[d]};case 1:return c?function(d){return R[d>>1]}:function(d){return da[d>>1]};case 2:return c?function(d){return J[d>>2]}:function(d){return u[d>>2]};case 3:return c?function(d){return Ya[d>>3]}:function(d){return Za[d>>3]};default:throw new TypeError("Unknown integer type: "+a);}}function ja(a){switch(a){case 1:return 0;
case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}function Ma(a){r(a.ba.ea.ca.name+" instance already deleted")}function hb(){}function ib(a){--a.count.value;0===a.count.value&&(a.ga?a.ia.ka(a.ga):a.ea.ca.ka(a.da))}function jb(a,b,c){if(b===c)return a;if(void 0===c.ja)return null;a=jb(a,b,c.ja);return null===a?null:c.Ea(a)}function Na(){for(;ka.length;){var a=ka.pop();a.ba.oa=!1;a["delete"]()}}function Kb(a,b){for(void 0===b&&r("ptr should not be undefined");a.ja;)b=
a.qa(b),a=a.ja;return la[b]}function ua(a,b){b.ea&&b.da||sa("makeClassHandle requires ptr and ptrType");!!b.ia!==!!b.ga&&sa("Both smartPtrType and smartPtr must be specified");b.count={value:1};return ma(Object.create(a,{ba:{value:b}}))}function ma(a){if("undefined"===typeof FinalizationRegistry)return ma=b=>b,a;Oa=new FinalizationRegistry(b=>{ib(b.ba)});ma=b=>{var c=b.ba;c.ga&&Oa.register(b,{ba:c},b);return b};hb=b=>{Oa.unregister(b)};return ma(a)}function Q(){}function Pa(a,b,c){if(void 0===a[b].fa){var d=
a[b];a[b]=function(){a[b].fa.hasOwnProperty(arguments.length)||r("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].fa+")!");return a[b].fa[arguments.length].apply(this,arguments)};a[b].fa=[];a[b].fa[d.na]=d}}function Qa(a,b,c){k.hasOwnProperty(a)?((void 0===c||void 0!==k[a].fa&&void 0!==k[a].fa[c])&&r("Cannot register public name '"+a+"' twice"),Pa(k,a,a),k.hasOwnProperty(c)&&r("Cannot register multiple overloads of a function with the same number of arguments ("+
c+")!"),k[a].fa[c]=b):(k[a]=b,void 0!==c&&(k[a].Ya=c))}function Lb(a,b,c,d,e,f,g,h){this.name=a;this.constructor=b;this.la=c;this.ka=d;this.ja=e;this.Ja=f;this.qa=g;this.Ea=h;this.Sa=[]}function va(a,b,c){for(;b!==c;)b.qa||r("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.qa(a),b=b.ja;return a}function Mb(a,b){if(null===b)return this.ta&&r("null is not a valid "+this.name),0;b.ba||r('Cannot pass "'+ia(b)+'" as a '+this.name);b.ba.da||r("Cannot pass deleted object as a pointer of type "+
this.name);return va(b.ba.da,b.ba.ea.ca,this.ca)}function Nb(a,b){if(null===b){this.ta&&r("null is not a valid "+this.name);if(this.sa){var c=this.ua();null!==a&&a.push(this.ka,c);return c}return 0}b.ba||r('Cannot pass "'+ia(b)+'" as a '+this.name);b.ba.da||r("Cannot pass deleted object as a pointer of type "+this.name);!this.ra&&b.ba.ea.ra&&r("Cannot convert argument of type "+(b.ba.ia?b.ba.ia.name:b.ba.ea.name)+" to parameter type "+this.name);c=va(b.ba.da,b.ba.ea.ca,this.ca);if(this.sa)switch(void 0===
b.ba.ga&&r("Passing raw pointer to smart pointer is illegal"),this.Xa){case 0:b.ba.ia===this?c=b.ba.ga:r("Cannot convert argument of type "+(b.ba.ia?b.ba.ia.name:b.ba.ea.name)+" to parameter type "+this.name);break;case 1:c=b.ba.ga;break;case 2:if(b.ba.ia===this)c=b.ba.ga;else{var d=b.clone();c=this.Ta(c,G(function(){d["delete"]()}));null!==a&&a.push(this.ka,c)}break;default:r("Unsupporting sharing policy")}return c}function Ob(a,b){if(null===b)return this.ta&&r("null is not a valid "+this.name),
0;b.ba||r('Cannot pass "'+ia(b)+'" as a '+this.name);b.ba.da||r("Cannot pass deleted object as a pointer of type "+this.name);b.ba.ea.ra&&r("Cannot convert argument of type "+b.ba.ea.name+" to parameter type "+this.name);return va(b.ba.da,b.ba.ea.ca,this.ca)}function I(a,b,c,d,e,f,g,h,l,n,m){this.name=a;this.ca=b;this.ta=c;this.ra=d;this.sa=e;this.Ra=f;this.Xa=g;this.ya=h;this.ua=l;this.Ta=n;this.ka=m;e||void 0!==b.ja?this.toWireType=Nb:(this.toWireType=d?Mb:Ob,this.ha=null)}function kb(a,b,c){k.hasOwnProperty(a)||
sa("Replacing nonexistant public symbol");void 0!==k[a].fa&&void 0!==c?k[a].fa[c]=b:(k[a]=b,k[a].na=c)}function x(a,b){a=v(a);var c=wa[b];c||(b>=wa.length&&(wa.length=b+1),wa[b]=c=lb.get(b));"function"!=typeof c&&r("unknown function pointer with signature "+a+": "+b);return c}function mb(a){a=nb(a);var b=v(a);K(a);return b}function T(a,b){function c(f){e[f]||S[f]||(ta[f]?ta[f].forEach(c):(d.push(f),e[f]=!0))}var d=[],e={};b.forEach(c);throw new ob(a+": "+d.map(mb).join([", "]));}function xa(a,b,c,
d,e){var f=b.length;2>f&&r("argTypes array size mismatch! Must at least get return value and 'this' types!");var g=null!==b[1]&&null!==c,h=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].ha){h=!0;break}var l="void"!==b[0].name,n=f-2,m=Array(n),p=[],q=[];return function(){arguments.length!==n&&r("function "+a+" called with "+arguments.length+" arguments, expected "+n+" args!");q.length=0;p.length=g?2:1;p[0]=e;if(g){var w=b[1].toWireType(q,this);p[1]=w}for(var t=0;t<n;++t)m[t]=b[t+2].toWireType(q,
arguments[t]),p.push(m[t]);t=d.apply(null,p);if(h)ra(q);else for(var y=g?1:2;y<b.length;y++){var A=1===y?w:m[y-2];null!==b[y].ha&&b[y].ha(A)}return w=l?b[0].fromWireType(t):void 0}}function ya(a,b){for(var c=[],d=0;d<a;d++)c.push(u[b+4*d>>2]);return c}function pb(a,b,c){a instanceof Object||r(c+' with invalid "this": '+a);a instanceof b.ca.constructor||r(c+' incompatible with "this" of type '+a.constructor.name);a.ba.da||r("cannot call emscripten binding method "+c+" on deleted object");return va(a.ba.da,
a.ba.ea.ca,b.ca)}function Ra(a){4<a&&0===--D[a].va&&(D[a]=void 0,Sa.push(a))}function Pb(a,b,c){switch(b){case 0:return function(d){return this.fromWireType((c?O:z)[d])};case 1:return function(d){return this.fromWireType((c?R:da)[d>>1])};case 2:return function(d){return this.fromWireType((c?J:u)[d>>2])};default:throw new TypeError("Unknown integer type: "+a);}}function na(a,b){var c=S[a];void 0===c&&r(b+" has unknown type "+mb(a));return c}function Qb(a,b){switch(b){case 2:return function(c){return this.fromWireType(Wa[c>>
2])};case 3:return function(c){return this.fromWireType(Xa[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Rb(a,b){for(var c=a>>1,d=c+b/2;!(c>=d)&&da[c];)++c;c<<=1;if(32<c-a&&qb)return qb.decode(z.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var e=R[a+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c}function Sb(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)R[b>>1]=a.charCodeAt(e),b+=2;R[b>>1]=0;return b-
d}function Tb(a){return 2*a.length}function Ub(a,b){for(var c=0,d="";!(c>=b/4);){var e=J[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function Vb(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var f=a.charCodeAt(e);if(55296<=f&&57343>=f){var g=a.charCodeAt(++e);f=65536+((f&1023)<<10)|g&1023}J[b>>2]=f;b+=4;if(b+4>c)break}J[b>>2]=0;return b-d}function Wb(a){for(var b=
0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}function rb(a,b){for(var c=Array(a),d=0;d<a;++d)c[d]=na(u[b+4*d>>2],"parameter "+d);return c}function za(a){var b=Xb[a];return void 0===b?v(a):b}function sb(){function a(b){b.$$$embind_global$$$=b;var c="object"==typeof $$$embind_global$$$&&b.$$$embind_global$$$==b;c||delete b.$$$embind_global$$$;return c}if("object"==typeof globalThis)return globalThis;if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;
"object"==typeof Fa.commonjsGlobal&&a(Fa.commonjsGlobal)?$$$embind_global$$$=Fa.commonjsGlobal:"object"==typeof self&&a(self)&&($$$embind_global$$$=self);if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.");}function Yb(a){var b=Aa.length;Aa.push(a);return b}function Zb(a){var b=Array(a+1);return function(c,d,e){b[0]=c;for(var f=0;f<a;++f){var g=na(u[d+4*f>>2],"parameter "+f);b[f+1]=g.readValueFromPointer(e);e+=g.argPackAdvance}c=new (c.bind.apply(c,
b));return G(c)}}function tb(){if(!Ta){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ub||"./this.program"},b;for(b in Ua)void 0===Ua[b]?delete a[b]:a[b]=Ua[b];var c=[];for(b in a)c.push(b+"\x3d"+a[b]);Ta=c}return Ta}function vb(){function a(){if(!Ba&&(Ba=!0,k.calledRun=!0,!ab)){Ja(wb);xb(k);if(k.onRuntimeInitialized)k.onRuntimeInitialized();if(k.postRun)for("function"==
typeof k.postRun&&(k.postRun=[k.postRun]);k.postRun.length;){var b=k.postRun.shift();yb.unshift(b)}Ja(yb)}}if(!(0<U)){if(k.preRun)for("function"==typeof k.preRun&&(k.preRun=[k.preRun]);k.preRun.length;)Hb();Ja($a);0<U||(k.setStatus?(k.setStatus("Running..."),setTimeout(function(){setTimeout(function(){k.setStatus("")},1);a()},1)):a())}}E=E||{};var k;k||(k="undefined"!==typeof E?E:{});var xb,Ia;k.ready=new Promise(function(a,b){xb=a;Ia=b});var zb=Object.assign({},k),ub="./this.program",L="";"undefined"!=
typeof document&&document.currentScript&&(L=document.currentScript.src);V&&(L=V);0!==L.indexOf("blob:")?L=L.substr(0,L.replace(/[?#].*/,"").lastIndexOf("/")+1):L="";var $b=k.print||console.log.bind(console),X=k.printErr||console.warn.bind(console);Object.assign(k,zb);zb=null;k.thisProgram&&(ub=k.thisProgram);var fa;k.wasmBinary&&(fa=k.wasmBinary);k.noExitRuntime||!0;"object"!=typeof WebAssembly&&ea("no native wasm support detected");var Ga,ab=!1,Va="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):
void 0,Ha,O,z,R,da,J,u,Wa,Ya,Za,Xa,lb,$a=[],wb=[],yb=[],U=0,oa=null;var P="arcgis-knowledge-client-core-simd.wasm";if(!bb()){var Ab=P;P=k.locateFile?k.locateFile(Ab,L):L+Ab}var Ca={},Y={},S={},ta={},eb=void 0,fb=void 0,Z=void 0,Oa=!1,Bb={},ka=[],pa=void 0,la={},wa=[],ob=void 0,Sa=[],D=[{},{value:void 0},{value:null},{value:!0},{value:!1}],B=a=>{a||r("Cannot use deleted val. handle \x3d "+a);return D[a].value},G=a=>{switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;
default:var b=Sa.length?Sa.pop():D.length;D[b]={va:1,value:a};return b}},qb="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,Xb={},Aa=[],Cb=[],Db={},Ua={},Ta,ac=[null,[],[]];eb=k.InternalError=La("InternalError");for(var Eb=Array(256),Da=0;256>Da;++Da)Eb[Da]=String.fromCharCode(Da);fb=Eb;Z=k.BindingError=La("BindingError");Q.prototype.isAliasOf=function(a){if(!(this instanceof Q&&a instanceof Q))return!1;var b=this.ba.ea.ca,c=this.ba.da,d=a.ba.ea.ca;for(a=a.ba.da;b.ja;)c=b.qa(c),
b=b.ja;for(;d.ja;)a=d.qa(a),d=d.ja;return b===d&&c===a};Q.prototype.clone=function(){this.ba.da||Ma(this);if(this.ba.pa)return this.ba.count.value+=1,this;var a=ma,b=Object,c=b.create,d=Object.getPrototypeOf(this),e=this.ba;a=a(c.call(b,d,{ba:{value:{count:e.count,oa:e.oa,pa:e.pa,da:e.da,ea:e.ea,ga:e.ga,ia:e.ia}}}));a.ba.count.value+=1;a.ba.oa=!1;return a};Q.prototype["delete"]=function(){this.ba.da||Ma(this);this.ba.oa&&!this.ba.pa&&r("Object already scheduled for deletion");hb(this);ib(this.ba);
this.ba.pa||(this.ba.ga=void 0,this.ba.da=void 0)};Q.prototype.isDeleted=function(){return!this.ba.da};Q.prototype.deleteLater=function(){this.ba.da||Ma(this);this.ba.oa&&!this.ba.pa&&r("Object already scheduled for deletion");ka.push(this);1===ka.length&&pa&&pa(Na);this.ba.oa=!0;return this};k.getInheritedInstanceCount=function(){return Object.keys(la).length};k.getLiveInheritedInstances=function(){var a=[],b;for(b in la)la.hasOwnProperty(b)&&a.push(la[b]);return a};k.flushPendingDeletes=Na;k.setDelayFunction=
function(a){pa=a;ka.length&&pa&&pa(Na)};I.prototype.Ka=function(a){this.ya&&(a=this.ya(a));return a};I.prototype.wa=function(a){this.ka&&this.ka(a)};I.prototype.argPackAdvance=8;I.prototype.readValueFromPointer=ha;I.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};I.prototype.fromWireType=function(a){function b(){return this.sa?ua(this.ca.la,{ea:this.Ra,da:c,ia:this,ga:a}):ua(this.ca.la,{ea:this,da:a})}var c=this.Ka(a);if(!c)return this.wa(a),null;var d=Kb(this.ca,c);if(void 0!==d){if(0===
d.ba.count.value)return d.ba.da=c,d.ba.ga=a,d.clone();d=d.clone();this.wa(a);return d}d=this.ca.Ja(c);d=Bb[d];if(!d)return b.call(this);d=this.ra?d.Ba:d.pointerType;var e=jb(c,this.ca,d.ca);return null===e?b.call(this):this.sa?ua(d.ca.la,{ea:d,da:e,ia:this,ga:a}):ua(d.ca.la,{ea:d,da:e})};ob=k.UnboundTypeError=La("UnboundTypeError");k.count_emval_handles=function(){for(var a=0,b=5;b<D.length;++b)void 0!==D[b]&&++a;return a};k.get_first_emval=function(){for(var a=5;a<D.length;++a)if(void 0!==D[a])return D[a];
return null};var bc={j:function(a){return Ea(a+24)+24},i:function(a,b,c){(new Jb(a)).za(b,c);throw a;},t:function(a){var b=Ca[a];delete Ca[a];var c=b.ua,d=b.ka,e=b.xa,f=e.map(g=>g.Na).concat(e.map(g=>g.Va));C([a],f,g=>{var h={};e.forEach((l,n)=>{var m=g[n],p=l.La,q=l.Ma,w=g[n+e.length],t=l.Ua,y=l.Wa;h[l.Ha]={read:A=>m.fromWireType(p(q,A)),write:(A,M)=>{var H=[];t(y,A,w.toWireType(H,M));ra(H)}}});return[{name:b.name,fromWireType:function(l){var n={},m;for(m in h)n[m]=h[m].read(l);d(l);return n},toWireType:function(l,
n){for(var m in h)if(!(m in n))throw new TypeError('Missing field:  "'+m+'"');var p=c();for(m in h)h[m].write(p,n[m]);null!==l&&l.push(d,p);return p},argPackAdvance:8,readValueFromPointer:ha,ha:d}]})},B:function(a,b,c,d,e){b=v(b);c=ja(c);var f=-1!=b.indexOf("u");f&&(e=(1n<<64n)-1n);F(a,{name:b,fromWireType:function(g){return g},toWireType:function(g,h){if("bigint"!=typeof h&&"number"!=typeof h)throw new TypeError('Cannot convert "'+ia(h)+'" to '+this.name);if(h<d||h>e)throw new TypeError('Passing a number "'+
ia(h)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+e+"]!");return h},argPackAdvance:8,readValueFromPointer:gb(b,c,!f),ha:null})},Q:function(a,b,c,d,e){var f=ja(c);b=v(b);F(a,{name:b,fromWireType:function(g){return!!g},toWireType:function(g,h){return h?d:e},argPackAdvance:8,readValueFromPointer:function(g){if(1===c)var h=O;else if(2===c)h=R;else if(4===c)h=J;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[g>>
f])},ha:null})},f:function(a,b,c,d,e,f,g,h,l,n,m,p,q){m=v(m);f=x(e,f);h&&(h=x(g,h));n&&(n=x(l,n));q=x(p,q);var w=db(m);Qa(w,function(){T("Cannot construct "+m+" due to unbound types",[d])});C([a,b,c],d?[d]:[],function(t){t=t[0];if(d)var y=t.ca,A=y.la;else A=Q.prototype;t=Ka(w,function(){if(Object.getPrototypeOf(this)!==M)throw new Z("Use 'new' to construct "+m);if(void 0===H.ma)throw new Z(m+" has no accessible constructor");var Fb=H.ma[arguments.length];if(void 0===Fb)throw new Z("Tried to invoke ctor of "+
m+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(H.ma).toString()+") parameters instead!");return Fb.apply(this,arguments)});var M=Object.create(A,{constructor:{value:t}});t.prototype=M;var H=new Lb(m,t,M,q,y,f,h,n);y=new I(m,H,!0,!1,!1);A=new I(m+"*",H,!1,!1,!1);var qa=new I(m+" const*",H,!1,!0,!1);Bb[a]={pointerType:A,Ba:qa};kb(w,t);return[y,A,qa]})},F:function(a,b,c,d,e,f,g){var h=ya(c,d);b=v(b);f=x(e,f);C([],[a],function(l){function n(){T("Cannot call "+m+
" due to unbound types",h)}l=l[0];var m=l.name+"."+b;b.startsWith("@@")&&(b=Symbol[b.substring(2)]);var p=l.ca.constructor;void 0===p[b]?(n.na=c-1,p[b]=n):(Pa(p,b,m),p[b].fa[c-1]=n);C([],h,function(q){q=xa(m,[q[0],null].concat(q.slice(1)),null,f,g);void 0===p[b].fa?(q.na=c-1,p[b]=q):p[b].fa[c-1]=q;return[]});return[]})},p:function(a,b,c,d,e,f){0<b||ea();var g=ya(b,c);e=x(d,e);C([],[a],function(h){h=h[0];var l="constructor "+h.name;void 0===h.ca.ma&&(h.ca.ma=[]);if(void 0!==h.ca.ma[b-1])throw new Z("Cannot register multiple constructors with identical number of parameters ("+
(b-1)+") for class '"+h.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");h.ca.ma[b-1]=()=>{T("Cannot construct "+h.name+" due to unbound types",g)};C([],g,function(n){n.splice(1,0,null);h.ca.ma[b-1]=xa(l,n,null,e,f);return[]});return[]})},c:function(a,b,c,d,e,f,g,h){var l=ya(c,d);b=v(b);f=x(e,f);C([],[a],function(n){function m(){T("Cannot call "+p+" due to unbound types",l)}n=n[0];var p=n.name+"."+b;b.startsWith("@@")&&(b=Symbol[b.substring(2)]);
h&&n.ca.Sa.push(b);var q=n.ca.la,w=q[b];void 0===w||void 0===w.fa&&w.className!==n.name&&w.na===c-2?(m.na=c-2,m.className=n.name,q[b]=m):(Pa(q,b,p),q[b].fa[c-2]=m);C([],l,function(t){t=xa(p,t,n,f,g);void 0===q[b].fa?(t.na=c-2,q[b]=t):q[b].fa[c-2]=t;return[]});return[]})},b:function(a,b,c,d,e,f,g,h,l,n){b=v(b);e=x(d,e);C([],[a],function(m){m=m[0];var p=m.name+"."+b,q={get:function(){T("Cannot access "+p+" due to unbound types",[c,g])},enumerable:!0,configurable:!0};q.set=l?()=>{T("Cannot access "+
p+" due to unbound types",[c,g])}:()=>{r(p+" is a read-only property")};Object.defineProperty(m.ca.la,b,q);C([],l?[c,g]:[c],function(w){var t=w[0],y={get:function(){var M=pb(this,m,p+" getter");return t.fromWireType(e(f,M))},enumerable:!0};if(l){l=x(h,l);var A=w[1];y.set=function(M){var H=pb(this,m,p+" setter"),qa=[];l(n,H,A.toWireType(qa,M));ra(qa)}}Object.defineProperty(m.ca.la,b,y);return[]});return[]})},P:function(a,b){b=v(b);F(a,{name:b,fromWireType:function(c){var d=B(c);Ra(c);return d},toWireType:function(c,
d){return G(d)},argPackAdvance:8,readValueFromPointer:ha,ha:null})},s:function(a,b,c,d){function e(){}c=ja(c);b=v(b);e.values={};F(a,{name:b,constructor:e,fromWireType:function(f){return this.constructor.values[f]},toWireType:function(f,g){return g.value},argPackAdvance:8,readValueFromPointer:Pb(b,c,d),ha:null});Qa(b,e)},e:function(a,b,c){var d=na(a,"enum");b=v(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Ka(d.name+"_"+b,function(){})}});a.values[c]=
d;a[b]=d},A:function(a,b,c){c=ja(c);b=v(b);F(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){return e},argPackAdvance:8,readValueFromPointer:Qb(b,c),ha:null})},T:function(a,b,c,d,e,f){var g=ya(b,c);a=v(a);e=x(d,e);Qa(a,function(){T("Cannot call "+a+" due to unbound types",g)},b-1);C([],g,function(h){kb(a,xa(a,[h[0],null].concat(h.slice(1)),null,e,f),b-1);return[]})},q:function(a,b,c,d,e){b=v(b);-1===e&&(e=4294967295);e=ja(c);var f=h=>h;if(0===d){var g=32-8*c;f=h=>h<<g>>>g}c=
b.includes("unsigned")?function(h,l){return l>>>0}:function(h,l){return l};F(a,{name:b,fromWireType:f,toWireType:c,argPackAdvance:8,readValueFromPointer:gb(b,e,0!==d),ha:null})},l:function(a,b,c){function d(f){f>>=2;var g=u;return new e(Ha,g[f+1],g[f])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][b];c=v(c);F(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{Pa:!0})},k:function(a,b,c,d,e,f,g,h,l,n,
m,p){c=v(c);f=x(e,f);h=x(g,h);n=x(l,n);p=x(m,p);C([a],[b],function(q){q=q[0];return[new I(c,q.ca,!1,!1,!0,q,d,f,h,n,p)]})},C:function(a,b){b=v(b);var c="std::string"===b;F(a,{name:b,fromWireType:function(d){var e=u[d>>2],f=d+4;if(c)for(var g=f,h=0;h<=e;++h){var l=f+h;if(h==e||0==z[l]){g=g?N(z,g,l-g):"";if(void 0===n)var n=g;else n+=String.fromCharCode(0),n+=g;g=l+1}}else{n=Array(e);for(h=0;h<e;++h)n[h]=String.fromCharCode(z[f+h]);n=n.join("")}K(d);return n},toWireType:function(d,e){e instanceof ArrayBuffer&&
(e=new Uint8Array(e));var f,g="string"==typeof e;g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||r("Cannot pass non-string to std::string");var h;if(c&&g)for(f=h=0;f<e.length;++f){var l=e.charCodeAt(f);127>=l?h++:2047>=l?h+=2:55296<=l&&57343>=l?(h+=4,++f):h+=3}else h=e.length;f=h;h=Ea(4+f+1);l=h+4;u[h>>2]=f;if(c&&g){if(g=l,l=f+1,f=z,0<l){l=g+l-1;for(var n=0;n<e.length;++n){var m=e.charCodeAt(n);if(55296<=m&&57343>=m){var p=e.charCodeAt(++n);m=65536+((m&1023)<<10)|
p&1023}if(127>=m){if(g>=l)break;f[g++]=m}else{if(2047>=m){if(g+1>=l)break;f[g++]=192|m>>6}else{if(65535>=m){if(g+2>=l)break;f[g++]=224|m>>12}else{if(g+3>=l)break;f[g++]=240|m>>18;f[g++]=128|m>>12&63}f[g++]=128|m>>6&63}f[g++]=128|m&63}}f[g]=0}}else if(g)for(g=0;g<f;++g)n=e.charCodeAt(g),255<n&&(K(l),r("String has UTF-16 code units that do not fit in 8 bits")),z[l+g]=n;else for(g=0;g<f;++g)z[l+g]=e[g];null!==d&&d.push(K,h);return h},argPackAdvance:8,readValueFromPointer:ha,ha:function(d){K(d)}})},x:function(a,
b,c){c=v(c);if(2===b)var d=Rb,e=Sb,f=Tb,g=()=>da,h=1;else 4===b&&(d=Ub,e=Vb,f=Wb,g=()=>u,h=2);F(a,{name:c,fromWireType:function(l){for(var n=u[l>>2],m=g(),p,q=l+4,w=0;w<=n;++w){var t=l+4+w*b;if(w==n||0==m[t>>h])q=d(q,t-q),void 0===p?p=q:(p+=String.fromCharCode(0),p+=q),q=t+b}K(l);return p},toWireType:function(l,n){"string"!=typeof n&&r("Cannot pass non-string to C++ string type "+c);var m=f(n),p=Ea(4+m+b);u[p>>2]=m>>h;e(n,p+4,m+b);null!==l&&l.push(K,p);return p},argPackAdvance:8,readValueFromPointer:ha,
ha:function(l){K(l)}})},u:function(a,b,c,d,e,f){Ca[a]={name:v(b),ua:x(c,d),ka:x(e,f),xa:[]}},h:function(a,b,c,d,e,f,g,h,l,n){Ca[a].xa.push({Ha:v(b),Na:c,La:x(d,e),Ma:f,Va:g,Ua:x(h,l),Wa:n})},R:function(a,b){b=v(b);F(a,{Qa:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},n:function(a,b,c){a=B(a);b=na(b,"emval::as");var d=[],e=G(d);u[c>>2]=e;return b.toWireType(d,a)},U:function(a,b,c,d){a=B(a);c=rb(b,c);for(var e=Array(b),f=0;f<b;++f){var g=c[f];e[f]=g.readValueFromPointer(d);
d+=g.argPackAdvance}a=a.apply(void 0,e);return G(a)},S:function(a,b,c,d,e){a=Aa[a];b=B(b);c=za(c);var f=[];u[d>>2]=G(f);return a(b,c,f,e)},E:function(a,b,c,d){a=Aa[a];b=B(b);c=za(c);a(b,c,null,d)},a:Ra,v:function(a){if(0===a)return G(sb());a=za(a);return G(sb()[a])},y:function(a,b){var c=rb(a,b),d=c[0];b=d.name+"_$"+c.slice(1).map(function(g){return g.name}).join("_")+"$";var e=Cb[b];if(void 0!==e)return e;var f=Array(a-1);e=Yb((g,h,l,n)=>{for(var m=0,p=0;p<a-1;++p)f[p]=c[p+1].readValueFromPointer(n+
m),m+=c[p+1].argPackAdvance;g=g[h].apply(g,f);for(p=0;p<a-1;++p)c[p+1].Da&&c[p+1].Da(f[p]);if(!d.Qa)return d.toWireType(l,g)});return Cb[b]=e},r:function(a,b){a=B(a);b=B(b);return G(a[b])},g:function(a){4<a&&(D[a].va+=1)},H:function(a,b){a=B(a);b=B(b);return a instanceof b},N:function(a){a=B(a);return"number"==typeof a},D:function(a){a=B(a);return"string"==typeof a},G:function(a,b,c,d){a=B(a);var e=Db[b];e||(e=Zb(b),Db[b]=e);return e(a,c,d)},o:function(a){return G(za(a))},m:function(a){var b=B(a);
ra(b);Ra(a)},d:function(a,b){a=na(a,"_emval_take_value");a=a.readValueFromPointer(b);return G(a)},z:function(){ea("")},K:function(a,b,c){z.copyWithin(a,b,b+c)},w:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{Ga.grow(e-Ha.byteLength+65535>>>16);W();d=1;break a}catch(f){}d=void 0}if(d)return!0}return!1},I:function(a,b){var c=0;tb().forEach(function(d,
e){var f=b+c;e=u[a+4*e>>2]=f;for(f=0;f<d.length;++f)O[e++>>0]=d.charCodeAt(f);O[e>>0]=0;c+=d.length+1});return 0},J:function(a,b){var c=tb();u[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});u[b>>2]=d;return 0},O:function(){return 52},M:function(){return 70},L:function(a,b,c,d){for(var e=0,f=0;f<c;f++){var g=u[b>>2],h=u[b+4>>2];b+=8;for(var l=0;l<h;l++){var n=z[g+l],m=ac[a];0===n||10===n?((1===a?$b:X)(N(m,0)),m.length=0):m.push(n)}e+=h}u[d>>2]=e;return 0}};(function(){function a(e){k.asm=
e.exports;Ga=k.asm.V;W();lb=k.asm.$;wb.unshift(k.asm.W);U--;k.monitorRunDependencies&&k.monitorRunDependencies(U);0==U&&oa&&(e=oa,oa=null,e())}function b(e){a(e.instance)}function c(e){return Ib().then(function(f){return WebAssembly.instantiate(f,d)}).then(function(f){return f}).then(e,function(f){X("failed to asynchronously prepare wasm: "+f);ea(f)})}var d={a:bc};U++;k.monitorRunDependencies&&k.monitorRunDependencies(U);if(k.instantiateWasm)try{return k.instantiateWasm(d,a)}catch(e){return X("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){return fa||"function"!=typeof WebAssembly.instantiateStreaming||bb()||"function"!=typeof fetch?c(b):fetch(P,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(f){X("wasm streaming compile failed: "+f);X("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(Ia);return{}})();k.___wasm_call_ctors=function(){return(k.___wasm_call_ctors=k.asm.W).apply(null,arguments)};var Ea=k._malloc=function(){return(Ea=k._malloc=
k.asm.X).apply(null,arguments)},K=k._free=function(){return(K=k._free=k.asm.Y).apply(null,arguments)},nb=k.___getTypeName=function(){return(nb=k.___getTypeName=k.asm.Z).apply(null,arguments)};k.__embind_initialize_bindings=function(){return(k.__embind_initialize_bindings=k.asm._).apply(null,arguments)};k.___cxa_is_pointer_type=function(){return(k.___cxa_is_pointer_type=k.asm.aa).apply(null,arguments)};var Ba;oa=function b(){Ba||vb();Ba||(oa=b)};if(k.preInit)for("function"==typeof k.preInit&&(k.preInit=
[k.preInit]);0<k.preInit.length;)k.preInit.pop()();vb();return E.ready}})();ba.exports=ca})(aa);aa=function(ba,ca){for(var V=0;V<ca.length;V++){const E=ca[V];if("string"!==typeof E&&!Array.isArray(E))for(const N in E)if("default"!==N&&!(N in ba)){const W=Object.getOwnPropertyDescriptor(E,N);W&&Object.defineProperty(ba,N,W.get?W:{enumerable:!0,get:()=>E[N]})}}return Object.freeze(Object.defineProperty(ba,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:aa.exports},[aa.exports]);Gb.arcgisKnowledgeClientCoreSimd=
aa});
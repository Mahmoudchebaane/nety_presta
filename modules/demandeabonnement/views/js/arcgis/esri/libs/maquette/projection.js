// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../widgets/support/widgetUtils"],function(x,G){let H=[],z=(b,a)=>{let g={};Object.keys(b).forEach(c=>{g[c]=b[c]});a&&Object.keys(a).forEach(c=>{g[c]=a[c]});return g},A=(b,a)=>b.vnodeSelector!==a.vnodeSelector?!1:b.properties&&a.properties?b.properties.key!==a.properties.key?!1:b.properties.bind===a.properties.bind:!b.properties&&!a.properties,I=b=>{if("string"!==typeof b)throw Error("Style values must be strings");},B=(b,a,g,c)=>{let l=b[a];if(""!==l.vnodeSelector){var d=l.properties;
if(!(d&&(void 0===d.key?d.bind:d.key)))for(d=0;d<b.length;d++)if(d!==a&&A(b[d],l))throw Error(`${g.vnodeSelector} had a ${l.vnodeSelector} child ${"added"===c?c:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`);}},C=[],D=!1,J=b=>{(b.children||[]).forEach(J);b.properties&&b.properties.afterRemoved&&b.properties.afterRemoved.apply(b.properties.bind||b.properties,[b.domNode])},K=()=>{D=!1;C.forEach(J);C.length=0},L=b=>{C.push(b);D||(D=!0,"undefined"!==
typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(K,{timeout:16}):setTimeout(K,16))},M=b=>{let a=b.domNode;if(b.properties){let g=b.properties.exitAnimation;if(g){a.style.pointerEvents="none";g(a,()=>{a.parentNode&&(a.parentNode.removeChild(a),L(b))},b.properties);return}}a.parentNode&&(a.parentNode.removeChild(a),L(b))},P=(b,a,g)=>{if(a){var c=g.eventHandlerInterceptor,l=Object.keys(a),d=l.length;for(let h=0;h<d;h++){var f=l[h];let m=a[f];if("className"===f)throw Error('Property "className" is not supported, use "class".');
if("class"===f)E(b,m,!0);else if("classes"===f){f=Object.keys(m);var p=f.length;for(var n=0;n<p;n++){var q=f[n];m[q]&&b.classList.add(q)}}else if("styles"===f)for(f=Object.keys(m),p=f.length,n=0;n<p;n++){q=f[n];let r=m[q];r&&(I(r),g.styleApplyer(b,q,r))}else"key"!==f&&null!==m&&void 0!==m&&(p=typeof m,"function"===p?(0===f.lastIndexOf("on",0)&&(c&&(m=c(f,m,b,a)),"oninput"===f&&function(){let r=m;m=function(e){r.apply(this,[e]);e.target["oninput-value"]=e.target.value}}()),b[f]=m):"http://www.w3.org/2000/svg"===
g.namespace?"href"===f?b.setAttributeNS("http://www.w3.org/1999/xlink",f,m):b.setAttribute(f,m):"string"===p&&"value"!==f?"innerHTML"===f?b[f]=G.renderingSanitizer.sanitize(m):b.setAttribute(f,m):b[f]=m)}}},N=(b,a,g)=>{var c=a.children;if(c)for(let l of c)F(l,b,void 0,g);a.text&&(b.textContent=a.text);P(b,a.properties,g);a.properties&&a.properties.afterCreate&&a.properties.afterCreate.apply(a.properties.bind||a.properties,[b,g,a.vnodeSelector,a.properties,a.children])},F=(b,a,g,c)=>{let l;var d=0;
let f=b.vnodeSelector,p=a.ownerDocument;if(""===f)l=b.domNode=p.createTextNode(b.text),void 0!==g?a.insertBefore(l,g):a.appendChild(l);else{for(let q=0;q<=f.length;++q){var n=f.charAt(q);if(q===f.length||"."===n||"#"===n)n=f.charAt(d-1),d=f.slice(d,q),"."===n?l.classList.add(d):"#"===n?l.id=d:("svg"===d&&(c=z(c,{namespace:"http://www.w3.org/2000/svg"})),void 0!==c.namespace?l=b.domNode=p.createElementNS(c.namespace,d):(l=b.domNode=b.domNode||p.createElement(d),"input"===d&&b.properties&&void 0!==
b.properties.type&&l.setAttribute("type",b.properties.type)),void 0!==g?a.insertBefore(l,g):l.parentNode!==a&&a.appendChild(l)),d=q+1}N(l,b,c)}},y,E=(b,a,g)=>{a&&a.split(" ").forEach(c=>{c&&b.classList.toggle(c,g)})};y=(b,a,g)=>{let c=b.domNode;if(b===a)return!1;let l=!1;if(""===a.vnodeSelector){if(a.text!==b.text)return b=c.ownerDocument.createTextNode(a.text),c.parentNode.replaceChild(b,c),a.domNode=b,!0;a.domNode=c}else{0===a.vnodeSelector.lastIndexOf("svg",0)&&(g=z(g,{namespace:"http://www.w3.org/2000/svg"}));
b.text!==a.text&&(l=!0,void 0===a.text?c.removeChild(c.firstChild):c.textContent=a.text);a.domNode=c;var d=b.children;var f=a.children,p=g;if(d===f)d=!1;else{d=d||H;f=f||H;for(var n=d.length,q=f.length,h=0,m=0,r=!1;m<q;){var e=h<n?d[h]:void 0,k=f[m];if(void 0!==e&&A(e,k))r=y(e,k,p)||r,h++;else{b:{e=d;var t=k,u=h+1;if(""!==t.vnodeSelector)for(;u<e.length;u++)if(A(e[u],t)){e=u;break b}e=-1}if(0<=e){for(;h<e;h++)M(d[h]),B(d,h,a,"removed");r=y(d[e],k,p)||r;h=e+1}else F(k,c,h<n?d[h].domNode:void 0,p),
k.properties&&(e=k.properties.enterAnimation)&&e(k.domNode,k.properties),B(f,m,a,"added")}m++}if(n>h)for(;h<n;h++)M(d[h]),B(d,h,a,"removed");d=r}l=d||l;d=b.properties;f=a.properties;p=g;if(f){n=!1;q=Object.keys(f);m=q.length;for(r=0;r<m;r++)if(e=q[r],k=f[e],h=d[e],"class"===e)h!==k&&(E(c,h,!1),E(c,k,!0));else if("classes"===e){e=c.classList;t=Object.keys(k);u=t.length;for(var w=0;w<u;w++){var v=t[w];let O=!!k[v];O!==!!h[v]&&(n=!0,O?e.add(v):e.remove(v))}}else if("styles"===e)for(e=Object.keys(k),
t=e.length,u=0;u<t;u++)w=e[u],v=k[w],v!==h[w]&&(n=!0,v?(I(v),p.styleApplyer(c,w,v)):p.styleApplyer(c,w,""));else k||"string"!==typeof h||(k=""),"value"===e?(t=c[e],t!==k&&(c["oninput-value"]?t===c["oninput-value"]:k!==h)&&(c[e]=k,c["oninput-value"]=void 0),k!==h&&(n=!0)):k!==h&&(h=typeof k,"function"===h&&p.eventHandlerInterceptor||("http://www.w3.org/2000/svg"===p.namespace?"href"===e?c.setAttributeNS("http://www.w3.org/1999/xlink",e,k):c.setAttribute(e,k):"string"===h?"innerHTML"===e?c[e]=G.renderingSanitizer.sanitize(k):
"role"===e&&""===k?c.removeAttribute(e):c.setAttribute(e,k):c[e]!==k&&(c[e]=k),n=!0));d=n}else d=void 0;l=d||l;a.properties&&a.properties.afterUpdate&&a.properties.afterUpdate.apply(a.properties.bind||a.properties,[c,g,a.vnodeSelector,a.properties,a.children])}l&&a.properties&&a.properties.updateAnimation&&a.properties.updateAnimation(c,a.properties,b.properties);return!1};x.createDom=F;x.createProjection=(b,a)=>({getLastRender:()=>b,update:g=>{if(b.vnodeSelector!==g.vnodeSelector)throw Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");
let c=b;b=g;y(c,g,a)},domNode:b.domNode});x.extend=z;x.initPropertiesAndChildren=N;Object.defineProperties(x,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe","../../core/urlUtils","../../chunks/persistableUrlUtils"],function(d,h,f,r){function k(a){if(h.isNone(a))return null;a=f.urlToObject(a);a=a.path.match(n)||a.path.match(t);if(!a)return null;const [,b,c,e,g]=a;a=c.indexOf("/");return{title:l(-1!==a?c.slice(a+1):c),serverType:p[e.toLowerCase()],sublayer:null!=g&&""!==g?parseInt(g,10):null,url:{path:b}}}function q(a){return(a=f.urlToObject(a).path.match(u))?{serviceUrl:a[1],sublayerId:Number(a[2])}:null}function l(a){a=
a.replace(/\s*[/_]+\s*/g," ");return a[0].toUpperCase()+a.slice(1)}const p={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},m=Object.values(p),n=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${m.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),t=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${m.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),u=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;
d.cleanTitle=l;d.isAGOLUrl=function(a){if(!a)return!1;a=(new f.Url(f.makeAbsolute(a))).authority?.toLowerCase();return null!=a&&a.includes("arcgis.com")};d.isArcGISUrl=function(a){return!!n.test(a)};d.isHostedAgolService=function(a){if(!a)return!1;a=a.toLowerCase();const b=a.includes(".arcgis.com/");a=a.includes("//services")||a.includes("//tiles")||a.includes("//features");return b&&a};d.isHostedSecuredProxyService=function(a,b){return null!=b&&null!=a&&a.toLowerCase().includes(b.toLowerCase())};
d.isServerOrServicesAGOLUrl=function(a){if(!a)return!1;a=(new f.Url(f.makeAbsolute(a))).authority?.toLowerCase();return"server.arcgisonline.com"===a||"services.arcgisonline.com"===a};d.isWmsServer=function(a){if(!a)return!1;var b=a.toLowerCase();a=b.includes("/services/");const c=b.includes("/mapserver/wmsserver"),e=b.includes("/imageserver/wmsserver");b=b.includes("/wmsserver");return a&&(c||e||b)};d.parse=k;d.parseNonStandardSublayerUrl=q;d.sanitizeUrl=function(a,b){return a?f.removeTrailingSlash(f.removeQueryParameters(a,
b)):a};d.sanitizeUrlWithLayerId=function(a){let {url:b}=a;if(!b)return{url:b};b=f.removeQueryParameters(b,a.logger);const c=f.urlToObject(b),e=k(c.path);let g=void 0;h.isSome(e)?(null!=e.sublayer&&null==a.layer.layerId&&(g=e.sublayer),b=e.url.path):a.nonStandardUrlAllowed&&(a=q(c.path),h.isSome(a)&&(b=a.serviceUrl,g=a.sublayerId));return{url:f.removeTrailingSlash(b),layerId:g}};d.serverTypes=m;d.titleFromUrlAndName=function(a,b){const c=[];a&&(a=k(a),h.isSome(a)&&a.title&&c.push(a.title));b&&(b=l(b),
c.push(b));if(2===c.length){if(c[0].toLowerCase().includes(c[1].toLowerCase()))return c[0];if(c[1].toLowerCase().includes(c[0].toLowerCase()))return c[1]}return c.join(" - ")};d.writeUrlWithLayerId=function(a,b,c,e,g){r.write(b,e,"url",g);e.url&&null!=a.layerId&&(e.url=f.join(e.url,c,a.layerId.toString()))};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
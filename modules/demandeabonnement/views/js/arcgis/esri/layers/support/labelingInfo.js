// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","../../core/lang","../../core/Logger","./LabelClass"],function(f,p,q,r,t){const g=r.getLogger("esri.layers.support.labelingInfo"),u=/\[([^\[\]]+)\]/gi,v={esriGeometryPoint:"above-right above-center above-left center-center center-left center-right below-center below-left below-right".split(" "),esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};f.reader=function(d,e,a){return d?d.map(c=>{const b=new t;b.read(c,
a);if(b.labelExpression){const h=e.fields||e.layerDefinition&&e.layerDefinition.fields||this.fields;b.labelExpression=b.labelExpression.replace(u,(m,k)=>{a:if(h){m=k.toLowerCase();for(let l=0;l<h.length;l++){const n=h[l].name;if(n.toLowerCase()===m){k=n;break a}}}return`[${k}]`})}return b}):null};f.validateLabelingInfo=function(d,e){d=q.clone(d);return d.some(a=>{{const b=a.labelPlacement;var c=v[e];a.symbol?c?(c.includes(b)||(c=c[0],b&&g.warn(`Found invalid label placement type ${b} for ${e}. Defaulting to ${c}`),
a.labelPlacement=c),a=!1):(g.error(new p("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${e}' is not supported`)),a=!0):(g.warn("No ILabelClass symbol specified."),a=!0)}return a})?[]:d};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
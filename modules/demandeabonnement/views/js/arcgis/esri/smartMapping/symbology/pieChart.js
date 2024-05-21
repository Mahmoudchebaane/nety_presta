// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../Color ../renderers/support/utils ./size ./support/colors ./support/symbologyUtils".split(" "),function(c,d,u,m,v,f){function k(a){const b=f.getRawSchemes({basemap:a.basemap,basemapTheme:a.basemapTheme,geometryType:a.geometryType,theme:n.get("default")});if(b){var {schemesInfo:e,basemapId:l,basemapTheme:w}=b,p=e.common,q=a.numColors,r=m.getSchemes({basemap:a.basemap,geometryType:a.geometryType})?.primaryScheme;return{primaryScheme:t(e.primary,p,q,r),secondarySchemes:e.secondary.map(x=>
t(x,p,q,r)).filter(Boolean),basemapId:l,basemapTheme:w}}}function t(a,b,e,l){if(a=v[a])return b={name:a.name,tags:a.tags,colors:a[e]||u.createColors(a.stops,e),colorForOthersCategory:b.colorForOthersCategory,outline:b.outline,size:b.size,sizeScheme:l},y(b)}function y(a){return{name:a.name,tags:[...a.tags],colors:a.colors.map(b=>new d(b)),colorForOthersCategory:new d(a.colorForOthersCategory),outline:{color:new d(a.outline.color),width:a.outline.width},size:a.size,sizeScheme:a.sizeScheme}}var g={color:[153,
153,153,.25],width:"1px"};const h="vibrant-rainbow cat-dark predominant-v2 predominant-v5 predominance-race desert-blooms tropical-bliss under-the-sea ocean-bay cat-light predominant-v4 predominance-money predominant-v3 predominance-race-ethnic pastel-chalk predominance-rainbow predominance-sequence".split(" "),z={light:{primary:"predominant-v1",secondary:h,common:{outline:g,colorForOthersCategory:"#aaaaaa",size:"25px"}},dark:{primary:"predominant-v2",secondary:h.map(a=>"predominant-v2"===a?"predominant-v1":
a),common:{outline:{color:[26,26,26,.25],width:"1px"},colorForOthersCategory:"#aaaaaa",size:"25px"}}};g={light:{primary:"predominant-v1",secondary:h,common:{colorForOthersCategory:"#aaaaaa",outline:g,size:"25px"}},dark:{primary:"predominant-v2",secondary:h.map(a=>"predominant-v2"===a?"predominant-v1":a),common:{colorForOthersCategory:"#aaaaaa",outline:{color:[153,153,153,.25],width:"1px"},size:"25px"}}};const n=f.createThemes({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features using a pie chart of categories.",
schemes:{point:z,polygon:g}}}});c.cloneScheme=function(a){if(a)return a={...a},a.tags=[...a.tags],a.colors&&(a.colors=a.colors.map(b=>new d(b))),a.colorForOthersCategory&&(a.colorForOthersCategory=new d(a.colorForOthersCategory)),a.outline&&(a.outline={color:a.outline.color&&new d(a.outline.color),width:a.outline.width}),"sizeScheme"in a&&a.sizeScheme&&(a.sizeScheme=m.cloneScheme(a.sizeScheme)),a};c.getSchemeByName=function(a){return f.filterSchemesByName(a.name,k(a))};c.getSchemes=k;c.getSchemesByTag=
function(a){return f.filterSchemesByTag(a.includedTags,a.excludedTags,k(a))};c.getThemes=function(a){return f.getThemesforBasemap(n,a)};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
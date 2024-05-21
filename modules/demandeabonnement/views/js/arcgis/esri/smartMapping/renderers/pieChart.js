// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Color ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/PieChartRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../symbols ../../core/Error ../../core/maybe ../../core/screenUtils ../../intl/messages ../../layers/support/AggregateField ../../layers/support/ExpressionInfo ../../renderers/support/AttributeColorInfo ../heuristics/outline ../heuristics/sizeRange ./size ./support/utils ../statistics/predominantCategories ../statistics/support/utils ../support/binningUtils ../support/utils ../support/adapters/support/layerUtils ../symbology/pieChart ../../symbols/support/cimSymbolUtils ../../symbols/SimpleLineSymbol".split(" "),
function(G,w,q,qa,ra,sa,ta,P,ua,va,wa,xa,ya,l,z,T,Q,A,B,U,V,W,X,v,Y,Z,aa,ba,t,H,ca,da){function ea(a){return I.apply(this,arguments)}function I(){I=w._asyncToGenerator(function*(a){if(!(a&&a.layer&&a.view&&a.attributes?.length))throw new l("pie-chart-renderer:missing-parameters","'layer', 'view' and 'attributes' parameters are required");if(10<a.attributes.length)throw new l("pie-chart-renderer:invalid-parameters","PieChart renderer does not support more than 10 attributes");a.forBinning&&aa.verifyBinningParams(a,
"pie-chart-renderer");const b={...a};b.shape=b.shape||"pie";b.othersCategoryEnabled=null==b.othersCategoryEnabled?!0:b.othersCategoryEnabled;b.includeSizeVariable=a.includeSizeVariable||!1;var d=a.forBinning?t.binningCapableLayerTypes:J;a=t.createLayerAdapter(b.layer,d,a.forBinning);b.layer=a;if(!a)throw new l("pie-chart-renderer:invalid-parameters","'layer' must be one of these types: "+t.getLayerTypeLabels(d).join(", "));d=z.isSome(b.signal)?{signal:b.signal}:null;yield Promise.all([b.view.when(),
a.load(d)]);var c=a.geometryType;d="polygon"===c;c="point"===c||"multipoint"===c||d;b.outlineOptimizationEnabled=d?b.outlineOptimizationEnabled:!1;b.sizeOptimizationEnabled=c?b.sizeOptimizationEnabled:!1;if(!c)throw new l("pie-chart-renderer:not-supported","PieChart renderer is only supported for point and polygon layers");d=[];c=b.attributes;for(var h of c)c=yield ba.getFieldsList({field:h.field,valueExpression:h.valueExpression}),d.push(...c);if(h=v.verifyBasicFieldValidity(a,d.filter(Boolean),
"pie-chart-renderer:invalid-parameters"))throw h;return b});return I.apply(this,arguments)}function fa(a){return K.apply(this,arguments)}function K(){K=w._asyncToGenerator(function*(a){let b=a.pieChartScheme,d=null;var c=null;c=yield v.getBasemapInfo(a.basemap,a.view);d=z.isSome(c.basemapId)?c.basemapId:null;c=z.isSome(c.basemapTheme)?c.basemapTheme:null;if(b)return{scheme:H.cloneScheme(b),basemapId:d,basemapTheme:c};if(a=H.getSchemes({basemap:d,numColors:a.attributes.length,geometryType:a.layer.geometryType,
basemapTheme:c}))b=a.primaryScheme,d=a.basemapId,c=a.basemapTheme;return{scheme:b,basemapId:d,basemapTheme:c}});return K.apply(this,arguments)}function ha(a,b){return L.apply(this,arguments)}function L(){L=w._asyncToGenerator(function*(a,b){const {valueExpression:d,sqlExpression:c,sqlWhere:h}=Z.getSumOfAttributesExpr(a.attributes),f=yield Q.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");return X.createVisualVariables({layer:a.layer,basemap:a.basemap,valueExpression:d,sqlExpression:c,sqlWhere:h,
sizeScheme:b,sizeOptimizationEnabled:a.sizeOptimizationEnabled,legendOptions:{title:f.sumOfCategories},view:a.view,signal:a.signal})});return L.apply(this,arguments)}function M(){M=w._asyncToGenerator(function*(a){var b=yield ea(a);a=yield fa(b);const d=a?.scheme;if(!d)throw new l("pie-chart-renderer:insufficient-info","Unable to find pie-chart scheme");var c=b.layer;const {includeSizeVariable:h,sizeOptimizationEnabled:f,outlineOptimizationEnabled:n,view:r,signal:g}=b;var m=d.sizeScheme,k=b.attributes,
p=k.map(e=>e.field);const [u,x,y,C]=yield Promise.all([1<p.length?Y({layer:c,fields:p,view:r,signal:g}):null,h?ha(b,m):null,!h&&f?W({layer:c,view:r,signal:g}):null,n?V({layer:c,view:r,signal:g}):null]);p=u&&u.predominantCategoryInfos?{uniqueValueInfos:u.predominantCategoryInfos}:{uniqueValueInfos:p.map(e=>({value:e,count:0}))};const ia=v.createColors(d.colors,k.length);k=k.map((e,D)=>({field:e.field,valueExpression:e.valueExpression,label:e.label,valueExpressionTitle:e.valueExpressionTitle,color:ia[D]}));
c=c.geometryType;m="background"in m&&m.background;b=new P({attributes:k,othersCategory:{color:b.othersCategoryEnabled?d.colorForOthersCategory:null,threshold:.04},holePercentage:"donut"===b.shape?.45:0,backgroundFillSymbol:m?v.createSymbol(c,{type:"2d",color:m.color,outline:v.getSymbolOutlineFromScheme(m,c,C?.opacity)}):null,size:T.toPt(d.size),outline:new da(v.getSymbolOutlineFromScheme(d,"point",C?.opacity)),legendOptions:b.legendOptions});x&&(f||x.visualVariables.forEach(e=>{"number"===typeof e.minSize&&
"number"===typeof e.maxSize&&(e.minSize*=2.5,e.maxSize*=1.8)}),f&&"point"===c&&x.visualVariables.forEach(e=>{e?.minSize&&"object"===typeof e.minSize&&e.minSize?.stops.forEach(D=>{D.size*=1.8})}),b.authoringInfo=x.authoringInfo.clone(),b.visualVariables=x.visualVariables?.map(e=>e.clone()));C?.visualVariables?.length&&(m=C.visualVariables.map(e=>e.clone()),b.visualVariables?b.visualVariables.push(...m):b.visualVariables=m);y?.minSize&&("point"===c&&y.minSize.stops.forEach(e=>{e.size*=2.5}),"polygon"===
c&&y.minSize.stops.forEach(e=>{e.size*=1.8}),b.visualVariables?b.visualVariables.push(y.minSize):b.visualVariables=[y.minSize]);return{renderer:b,pieChartScheme:H.cloneScheme(d),size:x,basemapId:a.basemapId,basemapTheme:a.basemapTheme,statistics:p}});return M.apply(this,arguments)}function ja(a){return N.apply(this,arguments)}function N(){N=w._asyncToGenerator(function*(a){if(!a||!a.layer)throw new l("pie-chart-cluster-renderer:missing-parameters","'layer' parameter is required");const b={...a};b.shape=
b.shape||"pie";b.defaultSymbolEnabled??(b.defaultSymbolEnabled=!0);a=a.layer;if(!t.getLayerTypes(J).includes(a.type))throw new l("pie-chart-cluster-renderer:invalid-parameters","'layer' must be one of these types: "+t.getLayerTypeLabels(J).join(", "));const d=z.isSome(b.signal)?{signal:b.signal}:null;yield a.load(d);if("point"!==a.geometryType)throw new l("pie-chart-cluster-renderer:invalid-parameters","Cluster renderers are only supported for point layers");({renderer:a}=a);if(!a)throw new l("pie-chart-cluster-renderer:invalid-parameters",
"input layer does not have a renderer.");if(!ka.includes(a.type))throw new l("pie-chart-cluster-renderer:invalid-parameters",`Cannot create a pie chart renderer for clusters based on a ${a.type} renderer.`);if("valueExpression"in a&&a.valueExpression)throw new l("pie-chart-cluster-renderer:invalid-parameters","Cannot create a pie chart renderer for clusters from a layer whose renderer contains a valueExpression.");if("unique-value"===a.type){if(a.field2)throw new l("pie-chart-cluster-renderer:invalid-parameters",
"Cannot create a pie chart renderer for clusters from a UniqueValueRenderer using more than one field.");if(10<a.uniqueValueInfos.length)throw new l("pie-chart-cluster-renderer:invalid-parameters","PieChart cluster renderer cannot be created from a UniqueValueRenderer with more than 10 unique value infos.");}if("class-breaks"===a.type){if(2>a.classBreakInfos.length)throw new l("pie-chart-cluster-renderer:invalid-parameters","Cannot create a pie chart renderer for clusters from a layer renderer with a continuous color or size gradient.");
if(10<a.classBreakInfos.length)throw new l("pie-chart-cluster-renderer:invalid-parameters","PieChart cluster renderer can not be created from a ClassBreaksRenderer with more than 10 class break infos.");if("class-breaks-size"===a?.authoringInfo?.type)throw new l("pie-chart-cluster-renderer:invalid-parameters","PieChart cluster renderer can not be created from a ClassBreaksRenderer with breaks varied by size instead of color.");}return b});return N.apply(this,arguments)}function O(){O=w._asyncToGenerator(function*(a){a=
yield ja(a);const {layer:b,shape:d,defaultSymbolEnabled:c,legendOptions:h}=a;var {renderer:f}=b,n=(yield Q.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")).other;a=[];"unique-value"===f.type&&(a=la({renderer:f,defaultSymbolEnabled:c,defaultLabelBackup:n}));"class-breaks"===f.type&&(a=ma({renderer:f,defaultSymbolEnabled:c,defaultLabelBackup:n}));f=[];n=[];for(var r of a){const {field:g,color:m}=r;f.push(g);n.push(new U({color:m,field:g.name,label:g.alias}))}r=new P({attributes:n,legendOptions:h,
holePercentage:"donut"===d?.45:0,outline:null,size:18,othersCategory:null});return{fields:f,renderer:r}});return O.apply(this,arguments)}function la(a){const {renderer:b,defaultSymbolEnabled:d,defaultLabelBackup:c}=a,{field:h,uniqueValueInfos:f,defaultSymbol:n,defaultLabel:r}=b;var g=(a=n&&d)?9:10;const m=v.createColors(R,g);g=f.slice(0,g).map((k,p)=>{const u=k.label;p=m[p];return{field:new A({name:E(k.value?.toString()),alias:u,onStatisticExpression:new B({title:`Field definition - ${u}`,expression:`Number(Text($feature["${h}"]) == "${k.value+
""}")`,returnType:"number"}),statisticType:"sum"}),color:F(k.symbol,p)}});a&&(a=r||c,g.push({field:new A({name:E("cluster_default"),alias:a,onStatisticExpression:new B({title:`Field definition - ${a}`,expression:na(h,f),returnType:"number"}),statisticType:"sum"}),color:F(n,S)}));return g}function ma(a){const {renderer:b,defaultSymbolEnabled:d,defaultLabelBackup:c}=a,{field:h,classBreakInfos:f,defaultSymbol:n,defaultLabel:r}=b;var g=(a=n&&d)?9:10;const m=v.createColors(R,g);g=f.slice(0,g).map((k,p)=>
{const u=k.label||`${k.minValue} - ${k.maxValue}`;p=m[p];return{field:new A({name:E(u),alias:u,onStatisticExpression:new B({title:`Field definition - ${u}`,expression:`Number($feature["${h}"] >= ${k.minValue} && $feature["${h}"] < ${k.maxValue})`,returnType:"number"}),statisticType:"sum"}),color:F(k.symbol,p)}});a&&(a=r||c,g.push({field:new A({name:E("cluster_default"),alias:a,onStatisticExpression:new B({title:`Field definition - ${a}`,expression:oa(h,f),returnType:"number"}),statisticType:"sum"}),
color:F(n,S)}));return g}function E(a){return"SUM_"+(a+"").replace(/[^a-zA-Z0-9_]/g,"_")}function F(a,b){return"simple-marker"===a.type&&a.color?a.color.clone():"cim"===a.type&&(a=ca.getCIMSymbolColor(a))?a.clone():b?b.clone():pa.clone()}function na(a,b){return`Number(!(${b.map(d=>`(Text($feature["${a}"]) == "${d.value+""}")`).join(" || ")}))`}function oa(a,b){return`Number(!(${b.map(d=>`($feature["${a}"] >= ${d.minValue} && $feature["${a}"] < ${d.maxValue})`).join(" || ")}))`}const J=[t.LayerType.CSVLayer,
t.LayerType.FeatureLayer,t.LayerType.OGCFeatureLayer,t.LayerType.GeoJSONLayer,t.LayerType.WFSLayer],ka=["unique-value","class-breaks"],pa=new q("#aaaaaa"),S=new q("#5c5c5c"),R=[new q("#e60049"),new q("#0bb4ff"),new q("#50e991"),new q("#e6d800"),new q("#9b19f5"),new q("#ffa300"),new q("#dc0ab4"),new q("#b3d4ff"),new q("#00bfa0"),new q("#f0cccc")];G.createRenderer=function(a){return M.apply(this,arguments)};G.createRendererForClustering=function(a){return O.apply(this,arguments)};Object.defineProperties(G,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
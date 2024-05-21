// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../Histogram ../Slider ../Widget ./support/utils ../support/widgetUtils ../support/jsxFactory".split(" "),function(f,r,g,w,t,u,k,G,z,A,B,C,D,E,H,l){const x={interactiveTrack:!1};f.SmartMappingSliderBase=function(y){function v(a,
d){var b=y.call(this,a,d)||this;b.histogram=new B({layout:"vertical"});b.histogramConfig=null;b.slider=new C({syncedSegmentsEnabled:!0,thumbsConstrained:!1,layout:"vertical",visibleElements:{labels:!0,rangeLabels:!0},labelInputsEnabled:!0,rangeLabelInputsEnabled:!0});b.viewModel=null;b.visibleElements={...x};const e=b.slider;!a?.hasTimeData||a?.inputParseFunction||a?.inputFormatFunction||e.set({labelInputsEnabled:!1,rangeLabelInputsEnabled:!1});e.draggableSegmentsEnabled=!!a?.visibleElements?.interactiveTrack;
b.addHandles([e.on("max-change",c=>b.emit("max-change",c)),e.on("max-click",c=>b.emit("max-click",c)),e.on("min-change",c=>b.emit("min-change",c)),e.on("min-click",c=>b.emit("min-click",c)),e.on("segment-click",c=>b.emit("segment-click",c)),e.on("segment-drag",c=>b.emit("segment-drag",c)),e.on("thumb-change",c=>b.emit("thumb-change",c)),e.on("thumb-click",c=>b.emit("thumb-click",c)),e.on("thumb-drag",c=>b.emit("thumb-drag",c)),e.on("track-click",c=>b.emit("track-click",c)),u.watch(()=>[b.histogramConfig,
b.max,b.min,b.zoomOptions],()=>{const {histogram:c,histogramConfig:m,viewModel:{max:n,min:p}}=r._assertThisInitialized(b),q=b.getParamsFromHistogramConfig(m);c.set({...q,max:n,min:p})}),u.watch(()=>b.labelFormatFunction,()=>{const {histogram:c,labelFormatFunction:m}=r._assertThisInitialized(b);c.set({labelFormatFunction:m})}),u.watch(()=>b.hasTimeData,c=>{const {labelInputsEnabled:m,rangeLabelInputsEnabled:n}=b.slider;c=!c||b.inputFormatFunction&&b.inputParseFunction;e.set({labelInputsEnabled:m&&
c,rangeLabelInputsEnabled:n&&c})}),u.watch(()=>b.visibleElements?.interactiveTrack,c=>{e.draggableSegmentsEnabled=!!c})]);b._onMaxZoomCapPointerDown=b._onMaxZoomCapPointerDown.bind(r._assertThisInitialized(b));b._onMinZoomCapPointerDown=b._onMinZoomCapPointerDown.bind(r._assertThisInitialized(b));return b}r._inheritsLoose(v,y);var h=v.prototype;h.initialize=function(){const {histogramConfig:a={},viewModel:d}=this,{labelFormatFunction:b,max:e,min:c}=d,m=this.getParamsFromHistogramConfig(a);this.histogram.set({labelFormatFunction:b,
...m,max:e,min:c});this.slider.set({viewModel:d})};h.castVisibleElements=function(a){return{...x,...a}};h.renderContent=function(a,d,b){this.slider.extraNodes=[a,this.renderHistogram(b)];return l.tsx("div",{class:d},this.slider.render())};h.renderHistogram=function(a){return this.histogramConfig?l.tsx("div",{key:"histogram",class:a?a:null},this.histogram.render()):null};h.renderBackgroundFillDefinition=function(a){return l.tsx("pattern",{id:a,patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"15",height:"15"},
l.tsx("image",{x:"0",y:"0",width:"15",height:"15",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNjY2MiIC8+PHBhdGggZD0iTTAgMCBMOCAwIEw4IDggTDAgOCBaIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDgpIiAvPjxwYXRoIGQ9Ik0wIDAgTDggMCBMOCA4IEwwIDggWiIgZmlsbD0iI2NjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCw4KSIgLz48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMCkiIC8+PC9zdmc+"}))};
h.renderRampFillDefinition=function(a,d){return l.tsx("linearGradient",{id:a,x1:"0",x2:"0",y1:"0",y2:"1"},this.renderRampFillStops(d))};h.renderRampFillStops=function(a){return a.reverse().map((d,b)=>this.renderStop(d,b))};h.renderStop=function(a,d){const {color:b,offset:e,opacity:c}=this.getPropsForStop(a);return l.tsx("stop",{key:`${d}-stop`,offset:e,"stop-color":b,"stop-opacity":c})};h.renderZoomCaps=function(){return[this.renderMaxZoomCap(),this.renderMinZoomCap()]};h.renderMinZoomCap=function(){if(this.zoomOptions&&
!t.isNone(this.zoomOptions.min))return l.tsx("svg",{key:"bottom",class:this.classes("zoom-cap","zoom-cap--min"),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMinZoomCapPointerDown},l.tsx("polygon",{class:"zoom-cap--mask",key:"mask",fill:"#1B8617",points:"0 11.3846154 30 11.3846154 30 1 25 5.38461538 20 1 15 5.38461538 10 1 5 5.38461538 0 1"}),l.tsx("polygon",{class:"zoom-cap--underline",key:"underline",fill:"#69DCFF",points:"0 0 5 4.38461538 10 0 15 4.38461538 20 0 25 4.38461538 30 0 30 4.61538462 25 9 20 4.61538462 15 9 10 4.61538462 5 9 0 4.61538462"}),
l.tsx("polygon",{class:"zoom-cap--line",key:"line",fill:"#DA5656",points:"0 1 5 5.38461538 10 1 15 5.38461538 20 1 25 5.38461538 30 1 30 5.61538462 25 10 20 5.61538462 15 10 10 5.61538462 5 10 0 5.61538462"}))};h.renderMaxZoomCap=function(){if(this.zoomOptions&&!t.isNone(this.zoomOptions.max))return l.tsx("svg",{key:"top",class:this.classes("zoom-cap","zoom-cap--max"),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMaxZoomCapPointerDown},l.tsx("polygon",{class:"zoom-cap--mask",
key:"mask",points:"0 -1.81994377e-12 30 -1.81994377e-12 30 8.23076923 25 3.61538462 20 8.23076923 15 3.61538462 10 8.23076923 5 3.61538462 0 8.23076923"}),l.tsx("polygon",{class:"zoom-cap--underline",key:"underline",points:"0 5.61538462 5 1 10 5.61538462 15 1 20 5.61538462 25 1 30 5.61538462 30 10.2307692 25 5.61538462 20 10.2307692 15 5.61538462 10 10.2307692 5 5.61538462 0 10.2307692"}),l.tsx("polygon",{class:"zoom-cap--line",key:"line",points:"0 4.61538462 5 -1.87329639e-12 10 4.61538462 15 -1.87329639e-12 20 4.61538462 25 -1.87329639e-12 30 4.61538462 30 9.23076923 25 4.61538462 20 9.23076923 15 4.61538462 10 9.23076923 5 4.61538462 0 9.23076923"}))};
h.getPropsForStop=function(a){const {color:d,offset:b}=a;return{color:d instanceof w?d.toCss(!0):w.fromString(d).toCss(!0),offset:(100*b).toFixed(2)+"%",opacity:d instanceof w?d.toRgba()[3]:null}};h.getParamsFromHistogramConfig=function(a){if(!a)return null;const {average:d,barCreatedFunction:b,bins:e,dataLineCreatedFunction:c,dataLineUpdatedFunction:m}=a;return{average:d,barCreatedFunction:b,bins:e,dataLineCreatedFunction:c,dataLineUpdatedFunction:m,dataLines:this._getDataLines(a)}};h._onMaxZoomCapPointerDown=
function(){var {zoomOptions:a}=this;a&&t.isSome(a.max)&&({min:a}=a,this.zoomOptions=t.isSome(a)?{min:a}:null)};h._onMinZoomCapPointerDown=function(){var {zoomOptions:a}=this;a&&t.isSome(a.min)&&({max:a}=a,this.zoomOptions=t.isSome(a)?{max:a}:null)};h._getDataLines=function(a){const {average:d,standardDeviation:b,standardDeviationCount:e}=a,{max:c,min:m}=this.viewModel.getBounds();return[...this._getStandardDeviationDataLines(b,d,e||1),...(a.dataLines||[])].filter(({value:n})=>n<=c&&n>=m)};h._getStandardDeviationDataLines=
function(a,d,b){const {max:e,min:c}=this.viewModel,m=.06*(e-c);return E.getDeviationValues(a,d,b).filter(n=>Math.abs(d-n)>m).map((n,p,q)=>{const F=this.labelFormatFunction?this.labelFormatFunction(n):n;q=q.length/2;p=p>=q?p-q+1:q-p;return{value:n,label:`${n>d?"+":"-"}${1===p?"":p}\u03c3 ${F}`}})};r._createClass(v,[{key:"hasTimeData",get:function(){return this.viewModel?.hasTimeData??!1},set:function(a){this.viewModel&&(this.viewModel.hasTimeData=a)}},{key:"inputFormatFunction",get:function(){return this.viewModel?.inputFormatFunction},
set:function(a){this.viewModel&&(this.viewModel.inputFormatFunction=a)}},{key:"inputParseFunction",get:function(){return this.viewModel?.inputParseFunction},set:function(a){this.viewModel&&(this.viewModel.inputParseFunction=a)}},{key:"labelFormatFunction",get:function(){return this.viewModel?.labelFormatFunction},set:function(a){this.viewModel&&(this.viewModel.labelFormatFunction=a)}},{key:"max",get:function(){return this.viewModel?.getUnzoomedMax()??this._get("max")??null},set:function(a){this.viewModel?
this.viewModel.max=a:this._set("max",a)}},{key:"min",get:function(){return this.viewModel?.getUnzoomedMin()??this._get("min")??null},set:function(a){this.viewModel?this.viewModel.min=a:this._set("min",a)}},{key:"precision",get:function(){return this.viewModel?.precision??4},set:function(a){this.viewModel&&(this.viewModel.precision=a)}},{key:"state",get:function(){return this.viewModel?.state??"disabled"}},{key:"syncedSegmentsEnabled",get:function(){return this.slider?.syncedSegmentsEnabled},set:function(a){this.slider&&
(this.slider.syncedSegmentsEnabled=a)}},{key:"values",get:function(){return this.viewModel?.values??[]}},{key:"zoomOptions",get:function(){return this.viewModel?.zoomOptions},set:function(a){this.viewModel&&(this.viewModel.zoomOptions=a)}}]);return v}(D);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"hasTimeData",null);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"histogram",void 0);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"histogramConfig",
void 0);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"inputFormatFunction",null);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"inputParseFunction",null);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"labelFormatFunction",null);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"max",null);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"min",null);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"precision",
null);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"slider",void 0);g.__decorate([k.property({readOnly:!0})],f.SmartMappingSliderBase.prototype,"state",null);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"syncedSegmentsEnabled",null);g.__decorate([k.property({readOnly:!0})],f.SmartMappingSliderBase.prototype,"values",null);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"viewModel",void 0);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,
"visibleElements",void 0);g.__decorate([z.cast("visibleElements")],f.SmartMappingSliderBase.prototype,"castVisibleElements",null);g.__decorate([k.property()],f.SmartMappingSliderBase.prototype,"zoomOptions",null);f.SmartMappingSliderBase=g.__decorate([A.subclass("esri.widgets.smartMapping.SmartMappingSliderBase")],f.SmartMappingSliderBase);Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
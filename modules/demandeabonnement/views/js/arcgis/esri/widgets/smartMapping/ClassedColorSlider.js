// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../renderers/support/ClassBreakInfo ./SmartMappingSliderBase ./ClassedColorSlider/ClassedColorSliderViewModel ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),function(n,g,k,e,x,q,r,t,u,y,v,f){var m;e=m=function(p){function h(a,b){a=
p.call(this,a,b)||this;a._bgFillId=null;a._rampFillId=null;a.messages=null;a.viewModel=new u;a._bgFillId=`${a.id}-bg-fill`;a._rampFillId=`${a.id}-linear-gradient`;return a}n._inheritsLoose(h,p);h.fromRendererResult=function(a,b){({renderer:{classBreakInfos:a}}=a);a=a.map(c=>({min:c.minValue,max:c.maxValue,color:c.symbol.color}));return new m({breaks:a,histogramConfig:{bins:b?b.bins:[]}})};var l=h.prototype;l.updateClassBreakInfos=function(a){const b=this.breaks;if(b.length!==a.length)console.error(`Number of input breakInfos must match number of slider breaks: ${b.length}`);
else return a.map((c,d)=>{c=c.symbol;c.color=b[d].color;return new r({minValue:b[d].min,maxValue:b[d].max,symbol:c})})};l.updateFromRendererResult=function(a,b){({renderer:{classBreakInfos:a}}=a);a=a.map(c=>({min:c.minValue,max:c.maxValue,color:c.symbol.color}));this.set({breaks:a});b?.bins&&(this.histogramConfig.bins=b.bins)};l.render=function(){const {state:a,label:b,visibleElements:c}=this,d="disabled"===a,w=this.classes("esri-classed-color-slider","esri-widget","esri-widget--panel",{["esri-disabled"]:d,
["esri-classed-color-slider--interactive-track"]:c.interactiveTrack});return f.tsx("div",{"aria-label":b,class:w},d?null:this.renderContent(this.renderRamp(),"esri-classed-color-slider__slider-container","esri-classed-color-slider__histogram-container"))};l.renderRamp=function(){const {_bgFillId:a,_rampFillId:b,viewModel:c}=this,d=c.getStopInfo();return f.tsx("div",{class:"esri-classed-color-slider__ramp"},f.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},f.tsx("defs",null,this.renderRampFillDefinition(b,
d),this.renderBackgroundFillDefinition(a)),f.tsx("rect",{x:"0",y:"0",fill:`url(#${a})`,height:"100%",width:"100%"}),f.tsx("rect",{x:"0",y:"0",fill:`url(#${b})`,height:"100%",width:"100%"})))};n._createClass(h,[{key:"breaks",get:function(){return this.viewModel.breaks},set:function(a){this.viewModel.breaks=a}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}}]);return h}(t.SmartMappingSliderBase);g.__decorate([k.property()],e.prototype,
"breaks",null);g.__decorate([k.property()],e.prototype,"label",null);g.__decorate([k.property(),v.messageBundle("esri/widgets/smartMapping/ClassedColorSlider/t9n/ClassedColorSlider")],e.prototype,"messages",void 0);g.__decorate([k.property()],e.prototype,"viewModel",void 0);return e=m=g.__decorate([q.subclass("esri.widgets.smartMapping.ClassedColorSlider")],e)});
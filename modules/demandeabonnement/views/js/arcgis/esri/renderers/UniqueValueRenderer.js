// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../symbols ../core/Error ../core/lang ../core/Logger ../core/maybe ../core/object ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/diffUtils ../core/accessorSupport/ensureType ../layers/support/fieldUtils ../portal/Portal ./Renderer ./mixins/VisualVariablesMixin ./support/commonProperties ./support/LegendOptions ./support/UniqueValue ./support/UniqueValueClass ./support/UniqueValueGroup ./support/UniqueValueInfo ../support/arcadeOnDemand ../chunks/persistableUrlUtils ../symbols/support/styleUtils ../symbols/WebStyleSymbol".split(" "),
function(v,k,Q,R,u,h,r,S,E,m,T,U,K,V,L,W,M,D,F,X,Y,N,Z,aa,ba,G,x,O,P,ca,da){function ea(y){const {field1:n,field2:e,field3:a,fieldDelimiter:b,uniqueValueInfos:c,valueExpression:d}=y,f=!(!n||!e);return[{classes:(c??[]).map(g=>{const {symbol:l,label:q,value:p,description:z}=g,[A,w,B]=f?p?.toString()?.split(b||"")||[]:[p];g=[];(n||d)&&g.push(A);e&&g.push(w);a&&g.push(B);return{symbol:l,label:q,values:[g],description:z}})}]}var C;const t=h.getLogger("esri.renderers.UniqueValueRenderer"),fa=M.ensureType(x);
h=C=function(y){function n(a){a=y.call(this,a)||this;a._valueInfoMap={};a._isDefaultSymbolDerived=!1;a._isInfosSource=null;a.type="unique-value";a.backgroundFillSymbol=null;a.valueExpressionTitle=null;a.legendOptions=null;a.defaultLabel=null;a.portal=null;a.styleOrigin=null;a.diff={uniqueValueInfos(b,c){if(b||c){if(!b||!c)return{type:"complete",oldValue:b,newValue:c};var d=!1,f={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let g=0;g<c.length;g++){const l=b.find(q=>q.value===
c[g].value);l?W.diff(l,c[g])?(f.changed.push({type:"complete",oldValue:l,newValue:c[g]}),d=!0):f.unchanged.push({oldValue:l,newValue:c[g]}):(f.added.push(c[g]),d=!0)}for(let g=0;g<b.length;g++)c.find(l=>l.value===b[g].value)||(f.removed.push(b[g]),d=!0);return d?f:void 0}}};a._set("uniqueValueInfos",[]);a._set("uniqueValueGroups",[]);return a}v._inheritsLoose(n,y);var e=n.prototype;e.castField=function(a){return null==a||"function"===typeof a?a:M.ensureString(a)};e.writeField=function(a,b,c,d){"string"===
typeof a?b[c]=a:d&&d.messages?d.messages.push(new R("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):t.error(".field: cannot write field to JSON since it's not a string value")};e.readPortal=function(a,b,c){return c.portal||F.getDefault()};e.readStyleOrigin=function(a,b,c){if(b.styleName)return Object.freeze({styleName:b.styleName});if(b.styleUrl)return a=P.fromJSON(b.styleUrl,c),Object.freeze({styleUrl:a})};e.writeStyleOrigin=function(a,b,c,d){a.styleName?
b.styleName=a.styleName:a.styleUrl&&(b.styleUrl=P.toJSON(a.styleUrl,d))};e.addUniqueValueInfo=function(a,b){this.styleOrigin?t.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(a="object"===typeof a?fa(a):new x({value:a,symbol:Q.ensureType(b)}),this.uniqueValueInfos?.push(a),this._valueInfoMap[a.value]=a,this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos())};e.removeUniqueValueInfo=function(a){if(this.styleOrigin)t.error("#removeUniqueValueInfo()",
"Cannot modify unique value infos of a UniqueValueRenderer created from a web style");else{var b=this.uniqueValueInfos;if(b)for(let c=0;c<b.length;c++)if(b[c].value===a+""){delete this._valueInfoMap[a];b.splice(c,1);break}this._updateGroupsFromInfos();this._isInfosSource=!0;this._watchUniqueValueInfos()}};e.getUniqueValueInfo=function(){var a=v._asyncToGenerator(function*(b,c){let d=c;this.valueExpression&&(r.isNone(c)||r.isNone(c.arcade))&&(d={...d,arcade:yield O.loadArcade()});return this._getUniqueValueInfo(b,
d)});return function(b,c){return a.apply(this,arguments)}}();e.getSymbol=function(a,b){if(this.valueExpression&&(r.isNone(b)||r.isNone(b.arcade)))t.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");else return(a=this._getUniqueValueInfo(a,b))&&a.symbol||this.defaultSymbol};e.getSymbolAsync=function(){var a=v._asyncToGenerator(function*(b,c){if(this.valueExpression&&(r.isNone(c)||r.isNone(c.arcade))){const d=yield O.loadArcade(),{arcadeUtils:f}=d;f.hasGeometryOperations(this.valueExpression)&&
(yield f.enableGeometryOperations());c={...c,arcade:d}}return(b=this._getUniqueValueInfo(b,c))&&b.symbol||this.defaultSymbol});return function(b,c){return a.apply(this,arguments)}}();e.getSymbols=function(){const a=[];for(const b of this.uniqueValueInfos??[])b.symbol&&a.push(b.symbol);this.defaultSymbol&&a.push(this.defaultSymbol);return a};e.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((a,b)=>a+b.getAttributeHash(),"")};e.getMeshHash=function(){const a=JSON.stringify(this.backgroundFillSymbol),
b=JSON.stringify(this.defaultSymbol),c=this.uniqueValueInfos?.reduce((d,f)=>d+f.getMeshHash(),"");return`${a}.${b}.${c}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`};e.clone=function(){const a=new C({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:u.clone(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:u.clone(this.visualVariables),
legendOptions:u.clone(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:u.clone(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(a._isDefaultSymbolDerived=!0);a._set("portal",this.portal);const b=u.clone(this.uniqueValueInfos),c=u.clone(this.uniqueValueGroups);this.styleOrigin&&(a._set("styleOrigin",Object.freeze(u.clone(this.styleOrigin))),Object.freeze(b),Object.freeze(c));a._set("uniqueValueInfos",b);a._updateValueInfoMap();a._set("uniqueValueGroups",
c);a._isInfosSource=this._isInfosSource;a._watchUniqueValueInfosAndGroups();return a};e.collectRequiredFields=function(){var a=v._asyncToGenerator(function*(b,c){b=[this.collectVVRequiredFields(b,c),this.collectSymbolFields(b,c)];yield Promise.all(b)});return function(b,c){return a.apply(this,arguments)}}();e.collectSymbolFields=function(){var a=v._asyncToGenerator(function*(b,c){const d=[...this.getSymbols().map(f=>f.collectRequiredFields(b,c)),D.collectArcadeFieldNames(b,c,this.valueExpression)];
D.collectField(b,c,this.field);D.collectField(b,c,this.field2);D.collectField(b,c,this.field3);yield Promise.all(d)});return function(b,c){return a.apply(this,arguments)}}();e.populateFromStyle=function(){return ca.fetchStyle(this.styleOrigin,{portal:this.portal}).then(a=>{const b=[];this._valueInfoMap={};a&&a.data&&Array.isArray(a.data.items)&&a.data.items.forEach(c=>{var d=new da({styleUrl:a.styleUrl,styleName:a.styleName,portal:this.portal,name:c.name});this.defaultSymbol||c.name!==a.data.defaultItem||
(this.defaultSymbol=d,this._isDefaultSymbolDerived=!0);d=new x({value:c.name,symbol:d});b.push(d);this._valueInfoMap[c.name]=d});this._set("uniqueValueInfos",Object.freeze(b));this._updateGroupsFromInfos(!0);this._isInfosSource=null;this._watchUniqueValueInfos();!this.defaultSymbol&&this.uniqueValueInfos?.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0);return this})};e._updateFieldDelimiter=function(){this.field&&this.field2&&!this.fieldDelimiter&&this._set("fieldDelimiter",
",")};e._updateUniqueValues=function(){null!=this._isInfosSource&&(this._isInfosSource?this._updateGroupsFromInfos():this._updateInfosFromGroups())};e._updateValueInfoMap=function(){this._valueInfoMap={};const {uniqueValueInfos:a}=this;if(a)for(const b of a)this._valueInfoMap[b.value+""]=b};e._watchUniqueValueInfosAndGroups=function(){this._watchUniqueValueInfos();this._watchUniqueValueGroups()};e._watchUniqueValueInfos=function(){this.removeHandles("uvInfos-watcher");const {uniqueValueInfos:a}=this;
if(a){const b=[];for(const c of a)b.push(E.watch(()=>({symbol:c.symbol,value:c.value,label:c.label,description:c.description}),(d,f)=>{d!==f&&(this._updateGroupsFromInfos(),this._isInfosSource=!0)},{sync:!0}));this.addHandles(b,"uvInfos-watcher")}};e._watchUniqueValueGroups=function(){this.removeHandles("uvGroups-watcher");const {uniqueValueGroups:a}=this;if(a){const b=[];for(const c of a){b.push(E.watch(()=>({classes:c.classes}),(d,f)=>{d!==f&&(this._updateInfosFromGroups(),this._isInfosSource=!1)},
{sync:!0}));for(const d of c.classes)b.push(E.watch(()=>({symbol:d.symbol,values:d.values,label:d.label,description:d.description}),(f,g)=>{f!==g&&(this._updateInfosFromGroups(),this._isInfosSource=!1)},{sync:!0}))}this.addHandles(b,"uvGroups-watcher")}};e._updateInfosFromGroups=function(){if(this.uniqueValueGroups){var a=[],{field:b,field2:c,field3:d,fieldDelimiter:f,uniqueValueGroups:g,valueExpression:l}=this;if(b||l){var q=!(!b||!c);for(const z of g)for(const A of z.classes??[]){const {symbol:w,
label:B,values:H,description:I}=A;for(const J of H??[]){const {value:ha,value2:ia,value3:ja}=J;var p=[ha];c&&p.push(ia);d&&p.push(ja);p=q?p.join(f||""):p[0];a.push(new x({symbol:w,label:B,value:p,description:I}))}}}this._set("uniqueValueInfos",a)}else this._set("uniqueValueInfos",null);this._updateValueInfoMap();this._watchUniqueValueInfos()};e._updateGroupsFromInfos=function(a=!1){if(this.uniqueValueInfos){var {field:b,field2:c,valueExpression:d,fieldDelimiter:f,uniqueValueInfos:g}=this;if((b||d)&&
g.length){var l=!(!b||!c),q=g.map(p=>{const {symbol:z,label:A,value:w,description:B}=p,[H,I,J]=l?w?.toString()?.split(f||"")||[]:[w];return new ba({symbol:z,label:A,description:B,values:[new aa({value:H,value2:I,value3:J})]})});q=[new G({classes:q})];a&&Object.freeze(q);this._set("uniqueValueGroups",q)}else this._set("uniqueValueGroups",[])}else this._set("uniqueValueGroups",null);this._watchUniqueValueGroups()};e._getUniqueValueInfo=function(a,b){return this.valueExpression?this._getUnqiueValueInfoForExpression(a,
b):this._getUnqiueValueInfoForFields(a)};e._getUnqiueValueInfoForExpression=function(a,b){const {viewingMode:c,scale:d,spatialReference:f,arcade:g}=r.unwrapOr(b,{});var l=this._cache.compiledFunc;b=r.unwrap(g).arcadeUtils;l||(l=b.createSyntaxTree(this.valueExpression),l=b.createFunction(l),this._cache.compiledFunc=l);a=b.executeFunction(l,b.createExecContext(a,b.getViewInfo({viewingMode:c,scale:d,spatialReference:f})));return this._valueInfoMap[a+""]};e._getUnqiueValueInfoForFields=function(a){const b=
this.field,c=a.attributes;if("function"!==typeof b&&this.field2){a=this.field2;var d=this.field3;const f=[];b&&f.push(c[b]);a&&f.push(c[a]);d&&f.push(c[d]);d=f.join(this.fieldDelimiter||"")}else"function"===typeof b?d=b(a):b&&(d=c[b]);return this._valueInfoMap[d+""]};n.fromPortalStyle=function(a,b){const c=new C(b&&b.properties);c._set("styleOrigin",Object.freeze({styleName:a}));c._set("portal",b&&b.portal||F.getDefault());b=c.populateFromStyle();b.catch(d=>{t.error(`#fromPortalStyle('${a}'[, ...])`,
"Failed to create unique value renderer from style name",d)});return b};n.fromStyleUrl=function(a,b){b=new C(b&&b.properties);b._set("styleOrigin",Object.freeze({styleUrl:a}));b=b.populateFromStyle();b.catch(c=>{t.error(`#fromStyleUrl('${a}'[, ...])`,"Failed to create unique value renderer from style URL",c)});return b};v._createClass(n,[{key:"_cache",get:function(){return{compiledFunc:null}}},{key:"field",set:function(a){this._set("field",a);this._updateFieldDelimiter();this._updateUniqueValues()}},
{key:"field2",set:function(a){this._set("field2",a);this._updateFieldDelimiter();this._updateUniqueValues()}},{key:"field3",set:function(a){this._set("field3",a);this._updateUniqueValues()}},{key:"valueExpression",set:function(a){this._set("valueExpression",a);this._updateUniqueValues()}},{key:"defaultSymbol",set:function(a){this._isDefaultSymbolDerived=!1;this._set("defaultSymbol",a)}},{key:"fieldDelimiter",set:function(a){this._set("fieldDelimiter",a);this._updateUniqueValues()}},{key:"uniqueValueGroups",
set:function(a){this.styleOrigin?t.error("#uniqueValueGroups\x3d","Cannot modify unique value groups of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueGroups",a),this._updateInfosFromGroups(),this._isInfosSource=!1,this._watchUniqueValueGroups())}},{key:"uniqueValueInfos",set:function(a){this.styleOrigin?t.error("#uniqueValueInfos\x3d","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",a),this._updateValueInfoMap(),
this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos())}},{key:"arcadeRequired",get:function(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}}]);return n}(Y.VisualVariablesMixin(X));k.__decorate([m.property({readOnly:!0})],h.prototype,"_cache",null);k.__decorate([U.enumeration({uniqueValue:"unique-value"})],h.prototype,"type",void 0);k.__decorate([m.property(N.rendererBackgroundFillSymbolProperty)],h.prototype,"backgroundFillSymbol",void 0);k.__decorate([m.property({value:null,
json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],h.prototype,"field",null);k.__decorate([T.cast("field")],h.prototype,"castField",null);k.__decorate([L.writer("field")],h.prototype,"writeField",null);k.__decorate([m.property({type:String,value:null,json:{write:!0}})],h.prototype,"field2",null);k.__decorate([m.property({type:String,value:null,json:{write:!0}})],h.prototype,"field3",null);k.__decorate([m.property({type:String,value:null,json:{write:!0}})],h.prototype,"valueExpression",
null);k.__decorate([m.property({type:String,json:{write:!0}})],h.prototype,"valueExpressionTitle",void 0);k.__decorate([m.property({type:Z.LegendOptions,json:{write:!0}})],h.prototype,"legendOptions",void 0);k.__decorate([m.property({type:String,json:{write:!0}})],h.prototype,"defaultLabel",void 0);k.__decorate([m.property(S.deepMerge({...N.rendererSymbolProperty},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],
h.prototype,"defaultSymbol",null);k.__decorate([m.property({type:String,value:null,json:{write:!0}})],h.prototype,"fieldDelimiter",null);k.__decorate([m.property({type:F,readOnly:!0})],h.prototype,"portal",void 0);k.__decorate([K.reader("portal",["styleName"])],h.prototype,"readPortal",null);k.__decorate([m.property({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],h.prototype,"styleOrigin",void 0);k.__decorate([K.reader("styleOrigin",["styleName","styleUrl"])],h.prototype,
"readStyleOrigin",null);k.__decorate([L.writer("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],h.prototype,"writeStyleOrigin",null);k.__decorate([m.property({type:[G],json:{read:{source:["uniqueValueGroups","uniqueValueInfos"],reader:(y,n,e)=>(n.uniqueValueGroups||ea(n)).map(a=>G.fromJSON(a,e))},write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],h.prototype,"uniqueValueGroups",null);k.__decorate([m.property({type:[x],json:{read:!1,write:{overridePolicy(){return this.styleOrigin?
{enabled:!1}:{enabled:!0}}}}})],h.prototype,"uniqueValueInfos",null);return h=C=k.__decorate([V.subclass("esri.renderers.UniqueValueRenderer")],h)});
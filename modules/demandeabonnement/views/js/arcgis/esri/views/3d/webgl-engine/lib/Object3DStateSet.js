// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./basicInterfaces"],function(g,h){var e;(function(d){d[d.Object=0]="Object";d[d.RenderGeometry=1]="RenderGeometry";d[d.External=2]="External";d[d.COUNT=3]="COUNT"})(e||(e={}));let k=function(){function d(){this._items=[]}var f=d.prototype;f.addObject=function(a,b){this._items.push({type:e.Object,objectStateId:b,object:a})};f.addRenderGeometry=function(a,b,c){this._items.push({type:e.RenderGeometry,objectStateId:b,renderGeometry:a,owner:c})};f.addExternal=function(a,b){this._items.push({type:e.External,
objectStateId:b,remove:a})};f.remove=function(a){for(let b=this._items.length-1;0<=b;--b){const c=this._items[b];c.objectStateId===a&&(this._removeObjectStateItem(c),this._items.splice(b,1))}};f.removeObject=function(a){for(let b=this._items.length-1;0<=b;--b){const c=this._items[b];c.type===e.Object&&c.object===a&&(this._removeObjectStateItem(c),this._items.splice(b,1))}};f.removeRenderGeometry=function(a){for(let b=this._items.length-1;0<=b;--b){const c=this._items[b];c.type===e.RenderGeometry&&
c.renderGeometry===a&&(this._removeObjectStateItem(c),this._items.splice(b,1))}};f.removeAll=function(){this._items.forEach(a=>{this._removeObjectStateItem(a)});this._items=[]};f._removeObjectStateItem=function(a){switch(a.type){case e.Object:a.objectStateId.channel===h.Object3DState.Highlight?a.object.removeHighlight(a.objectStateId):a.objectStateId.channel===h.Object3DState.MaskOccludee&&a.object.removeOcclude(a.objectStateId);break;case e.RenderGeometry:a.owner.removeRenderGeometryObjectState(a.renderGeometry,
a.objectStateId);break;case e.External:a.remove(a.objectStateId)}};return d}();g.Object3DStateSet=k;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/collectionUtils ../../core/Handles ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./support/buildingLayerUtils ./support/LayerTreeNode ./support/layerUtils".split(" "),function(m,k,d,q,v,w,r,x,n,B,C,y,z,p,A){d=function(t){function l(a){a=
t.call(this,a)||this;a.root=new p.LayerTreeNode;a.state="disabled";a._handles=new w;a._loadLayers=A.createLoadLayersFunction();a.layers=new q;return a}m._inheritsLoose(l,t);var e=l.prototype;e.initialize=function(){this._handles.add(this.layers.on("change",()=>this._onLayersChange()));this._onLayersChange()};e.destroy=function(){this._set("state","disabled");this._handles.destroy();this.root.destroy()};e._updateLayerTree=function(){this.root.destroy();this._set("root",new p.LayerTreeNode({collapsed:!1}));
const a=new Map,b=1<this.layers.length?"modelName":"id";this.layers.forEach(c=>{const f=z.findFullModelSublayer(c);this._addNodesForSublayers(r.unwrapOr(f,c),this.root,a,b)});return this};e._addNodeForLayer=function(a,b,c,f){const h=String(a.get(f)).toLowerCase();if(!r.isNone(h)&&!a.isEmpty){var u=`${b.id}/${h}`,g=c.get(u);g||(g=new p.LayerTreeNode({id:h,level:b.level+1}),c.set(u,g));g.layers.push(a);b.children.push(g);this._addNodesForSublayers(a,g,c,f)}};e._addNodesForSublayers=function(a,b,c,f){("building-scene"===
a.type||"building-group"===a.type&&!a.isEmpty)&&a.sublayers.forEach(h=>this._addNodeForLayer(h,b,c,f))};e._onLayersChange=function(){var a=m._asyncToGenerator(function*(){this._set("state","loading");if(0!==this.layers.length)try{yield this._loadLayers(this.layers),this._updateLayerTree(),this._set("state","ready")}catch(b){x.isAbortError(b)||this._set("state","failed")}});return function(){return a.apply(this,arguments)}}();m._createClass(l,[{key:"layers",set:function(a){const b=this._get("layers");
this._set("layers",v.referenceSetter(a,b))}}]);return l}(d);k.__decorate([n.property({readOnly:!0})],d.prototype,"root",void 0);k.__decorate([n.property({type:q,nonNullable:!0})],d.prototype,"layers",null);k.__decorate([n.property({readOnly:!0,nonNullable:!0})],d.prototype,"state",void 0);return d=k.__decorate([y.subclass("esri.widgets.BuildingExplorer.BuildingDisciplineViewModel")],d)});
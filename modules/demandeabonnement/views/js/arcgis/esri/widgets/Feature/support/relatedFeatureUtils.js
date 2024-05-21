// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../request ../../../core/Error ../../../core/Logger ../../../core/promiseUtils ../../../layers/support/fieldUtils ../../../core/has ../../../layers/support/source/DataLayerSource ../../../rest/query/executeQueryJSON ../../../config ../../../kernel ../../../core/arrayUtils ../../../core/urlUtils ../../../core/unitUtils ../../../geometry/support/spatialReferenceUtils ../../../layers/graphics/featureConversionUtils ../../../geometry/Extent ../../../geometry/Geometry ../../../geometry/Multipoint ../../../geometry/Point ../../../geometry/Polygon ../../../geometry/Polyline ../../../geometry/support/normalizeUtils ../../../core/pbf ../../../rest/support/FeatureSet ../../../rest/support/Query ../../../rest/query/support/AttachmentInfo ../../../rest/support/AttachmentQuery ../../../geometry ../../../rest/support/RelationshipQuery ../../../rest/support/TopFeaturesQuery ../../../rest/support/StatisticDefinition ./featureUtils".split(" "),
function(g,y,z,t,A,k,B,N,O,m,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ba,ca,da,ea,n,fa,ha,ia,C,ja,D,E){function F(b,a){if(!a.relationships)return null;let c=null;({relationships:a}=a);a.some(e=>e.id===parseInt(b,10)?(c=e,!0):!1);return c}function u({originRelationship:b,relationships:a,layerId:c}){let e;a&&a.some(d=>{`${d.relatedTableId}`===c&&d.id===b.id&&(e=d);return!!e});return e}function G(b,a){a=a.toLowerCase();for(const c in b)if(c.toLowerCase()===a)return b[c];return null}function H(b,a,c,e){const d=new C;
d.outFields=["*"];d.relationshipId="number"===typeof a.id?a.id:parseInt(a.id,10);d.objectIds=[b.attributes[c.objectIdField]];return c.queryRelatedFeatures(d,e)}function I(b,a,c){let e=0;const d=[];for(;e<a.length;)d.push(`${b} IN (${a.slice(e,c+e)})`),e+=c;return d.join(" OR ")}function J(b,a,c,e){return p.apply(this,arguments)}function p(){p=y._asyncToGenerator(function*(b,a,c,e){var d=c.layerId.toString();const {layerInfo:f,relation:h,relatedFields:l,outStatistics:v,url:q,sourceSpatialReference:r}=
a;d=u({originRelationship:h,relationships:f.relationships,layerId:d});if(d.relationshipTableId&&d.keyFieldInRelationshipTable){c=(yield H(b,d,c,e))[b.attributes[c.objectIdField]];if(!c)return null;const L=c.features.map(K=>K.attributes[f.objectIdField]);if(0<v?.length&&f.supportsStatistics)return a=new n,a.where=I(f.objectIdField,L,1E3),a.outFields=l,a.outStatistics=v,a.sourceSpatialReference=r,a={features:Promise.resolve(c),statsFeatures:m.executeQueryJSON(q,a)},k.eachAlways(a)}return(d=d?.keyField)?
(c=B.isNumericField(M(f.fields,d)),b=G(b.attributes,h.keyField),d=c?`${d}=${b}`:`${d}='${b}'`,b=m.executeQueryJSON(q,new n({where:d,outFields:a.relatedFields,sourceSpatialReference:r}),e),a=a.outStatistics&&0<a.outStatistics.length&&f.supportsStatistics?m.executeQueryJSON(q,new n({where:d,outFields:a.relatedFields,outStatistics:a.outStatistics,sourceSpatialReference:r}),e):null,e={features:b},a&&(e.statsFeatures=a),k.eachAlways(e)):null});return p.apply(this,arguments)}function M(b,a){if(null!=b){a=
a.toLowerCase();for(const c of b)if(c&&c.name.toLowerCase()===a)return c}return null}const w=A.getLogger("esri.widgets.Feature.support.relatedFeatureUtils"),x=new Map;g.createRelatedInfo=function(b,a){if(b=F(b,a))return{url:`${a.url}/${b.relatedTableId}`,sourceSpatialReference:a.spatialReference,relation:b,relatedFields:[],outStatistics:[]}};g.getDestinationRelation=u;g.getRelatedFieldInfo=function(b){if(!E.isRelatedField(b))return null;const [a,c]=b.split("/").slice(1);return{layerId:a,fieldName:c}};
g.queryLayerInfos=function({relatedInfos:b,layer:a},c){const e={};b.forEach((d,f)=>{({relation:d}=d);if(!d)throw f=new t("relation-required","A relation is required on a layer to retrieve related records."),w.error(f),f;({relatedTableId:d}=d);if("number"!==typeof d)throw f=new t("A related table ID is required on a layer to retrieve related records."),w.error(f),f;d=`${a.url}/${d}`;const h=x.get(d),l=h?h:z(d,{query:{f:"json"},signal:c&&c.signal});h||x.set(d,l);e[f]=l});return k.eachAlways(e)};g.queryRelatedFeatures=
function({graphic:b,relatedInfos:a,layer:c},e){const d={};a.forEach((f,h)=>{f.layerInfo&&(d[h]=J(b,f,c,e))});return k.eachAlways(d)};g.setRelatedFeatures=function(b,a){if(a&&b){var {features:c,statsFeatures:e}=b;b=c&&c.value;a.relatedFeatures=b?b.features:[];b=e&&e.value;a.relatedStatsFeatures=b?b.features:[]}};g.updateRelatedInfo=function({relatedInfo:b,fieldName:a,fieldInfo:c}){b.relatedFields.push(a);c.statisticType&&(a=new D({statisticType:c.statisticType,onStatisticField:a,outStatisticFieldName:a}),
b.outStatistics.push(a))};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
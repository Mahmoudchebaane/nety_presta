// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","../../../../core/screenUtils"],function(f,l,g){function m(a){return"constant"===a.kind?a.value[0]:a.values[a.values.length-1]}function k(a){a=a.toRgba();return[a[0]/255,a[1]/255,a[2]/255,a[3]]}function n(a){if(!a.hasVisualVariables("size"))return{kind:"constant",value:[g.pt2px(a.trailWidth)]};const c=a.getVisualVariablesForType("size")[0];a=[];const b=[];if(c.stops){for(d of c.stops)a.push(d.value),b.push(g.pt2px(d.size));var d=c.stops.length}else a.push(c.minDataValue,
c.maxDataValue),b.push(g.pt2px(c.minSize),g.pt2px(c.maxSize)),d=2;return{kind:"ramp",stops:a,values:b,count:d}}function h(a,c,b,d){switch(c){case "int":a.setUniform1iv(b,d);break;case "float":a.setUniform1fv(b,d);break;case "vec2":a.setUniform2fv(b,d);break;case "vec3":a.setUniform3fv(b,d);break;case "vec4":a.setUniform4fv(b,d)}}function p(a,c){return a===c?!0:l.isSome(a)&&l.isSome(c)?a.equals(c):!1}f.areStreamlinesCompatible=function(a,c){var b=a.simulationSettings,d=c.simulationSettings;let e;e=
(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=b.collisions===d.collisions)&&b.density===d.density)&&b.interpolate===d.interpolate)&&b.lineCollisionWidth===d.lineCollisionWidth)&&b.lineSpacing===d.lineSpacing)&&b.maxTurnAngle===d.maxTurnAngle)&&b.minSpeedThreshold===d.minSpeedThreshold)&&b.segmentLength===d.segmentLength)&&b.smoothing===d.smoothing)&&b.velocityScale===d.velocityScale)&&b.verticesPerLine===d.verticesPerLine;return e&&p(a.timeExtent,c.timeExtent)?b=(b=(b=(b=(b=a.loadImagery===c.loadImagery)&&a.createFlowMesh===
c.createFlowMesh)&&a.color.kind===c.color.kind)&&a.opacity.kind===c.opacity.kind)&&a.size.kind===c.size.kind:!1};f.getColor=function(a){if(!a.hasVisualVariables("color"))return{kind:"constant",value:k(a.color)};a=a.getVisualVariablesForType("color")[0];const c=[],b=[];for(const d of a.stops)c.push(d.value),Array.prototype.push.apply(b,k(d.color));return{kind:"ramp",stops:c,values:b,count:a.stops.length}};f.getFlowSimulationSettings=function(a){var c=n(a);c=m(c);const b=Math.max(c/2,5),d=Math.round(g.pt2px(a.maxPathLength)/
b)+1,{density:e}=a;return{smoothing:g.pt2px(a.smoothing),interpolate:!0,velocityScale:"flow-from"===a.flowRepresentation?1:-1,verticesPerLine:d,minSpeedThreshold:.001,segmentLength:b,maxTurnAngle:1,collisions:!0,lineCollisionWidth:c,lineSpacing:10,density:e}};f.getForegroundColor=function(a){return{kind:"constant",value:[.1,.1,.1,1]}};f.getMax=m;f.getOpacity=function(a){if(!a.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};a=a.getVisualVariablesForType("opacity")[0];const c=[],b=[];
for(const d of a.stops)c.push(d.value),b.push(d.opacity);return{kind:"ramp",stops:c,values:b,count:a.stops.length}};f.getSize=n;f.setUniform=h;f.setUniforms=function(a,c,b,d){"constant"===d.kind?h(a,b,`u_${c}`,d.value):(h(a,"float",`u_${c}_stops`,d.stops),h(a,b,`u_${c}_values`,d.values),a.setUniform1i(`u_${c}_count`,d.count))};f.timeExtentsEqual=p;f.toRgba=k;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
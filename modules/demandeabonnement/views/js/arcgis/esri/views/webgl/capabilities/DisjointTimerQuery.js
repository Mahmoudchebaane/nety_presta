// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./isWebGL2Context"],function(d,g){let f=function(c,e,a,b,h,k,l,m,n){this.createQuery=c;this.deleteQuery=e;this.resultAvailable=a;this.getResult=b;this.disjoint=h;this.beginTimeElapsed=k;this.endTimeElapsed=l;this.createTimestamp=m;this.timestampBits=n};d.hasRunningElapsedTimer=!1;d.DisjointTimerQuery=f;d.createDisjointTimerQuery=function(c,e){if(e.disjointTimerQuery)return null;let a=c.getExtension("EXT_disjoint_timer_query_webgl2");return a&&g(c)?new f(()=>c.createQuery(),b=>{c.deleteQuery(b);
d.hasRunningElapsedTimer=!1},b=>c.getQueryParameter(b,c.QUERY_RESULT_AVAILABLE),b=>c.getQueryParameter(b,c.QUERY_RESULT),()=>c.getParameter(a.GPU_DISJOINT_EXT),b=>{d.hasRunningElapsedTimer||(d.hasRunningElapsedTimer=!0,c.beginQuery(a.TIME_ELAPSED_EXT,b))},()=>{c.endQuery(a.TIME_ELAPSED_EXT);d.hasRunningElapsedTimer=!1},b=>a.queryCounterEXT(b,a.TIMESTAMP_EXT),()=>c.getQuery(a.TIMESTAMP_EXT,a.QUERY_COUNTER_BITS_EXT)):(a=c.getExtension("EXT_disjoint_timer_query"))?new f(()=>a.createQueryEXT(),b=>{a.deleteQueryEXT(b);
d.hasRunningElapsedTimer=!1},b=>a.getQueryObjectEXT(b,a.QUERY_RESULT_AVAILABLE_EXT),b=>a.getQueryObjectEXT(b,a.QUERY_RESULT_EXT),()=>c.getParameter(a.GPU_DISJOINT_EXT),b=>{d.hasRunningElapsedTimer||(d.hasRunningElapsedTimer=!0,a.beginQueryEXT(a.TIME_ELAPSED_EXT,b))},()=>{a.endQueryEXT(a.TIME_ELAPSED_EXT);d.hasRunningElapsedTimer=!1},b=>a.queryCounterEXT(b,a.TIMESTAMP_EXT),()=>a.getQueryEXT(a.TIMESTAMP_EXT,a.QUERY_COUNTER_BITS_EXT)):null};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec3 ../../../../chunks/vec3f32 ../../../../chunks/vec3f64 ../../../../geometry/support/plane ../../../../geometry/support/ray ./basicInterfaces ./BufferVectorMath ./Geometry ./Indices ./Util ./VertexAttribute".split(" "),function(C,m,t,aa,Q,ba,R,S,E,ca,M,l){function W(a,c,b,d,e,h=t.fromValues(0,0,0)){var f=a.length;const g=new Float32Array(c.length*f*3+(6*b.length||0)),k=new Float32Array(c.length*f*3+(b?6:0)),n=[],q=[];let u=0;var p=0;const z=t.create(),r=t.create(),
x=t.create(),y=t.create(),B=t.create(),v=t.create(),D=t.create(),w=aa.create(),I=t.create(),G=t.create(),X=t.create(),T=t.create(),da=t.create(),Y=Q.create();m.set(I,0,1,0);m.subtract(r,c[1],c[0]);m.normalize(r,r);e?(m.add(w,c[0],h),m.normalize(x,w)):m.set(x,0,0,1);U(r,x,I,I,B,x,.99619469809);m.copy(y,x);m.copy(T,B);for(var A=0;A<b.length;A++)m.scale(v,B,b[A][0]),m.scale(w,x,b[A][2]),m.add(v,v,w),m.add(v,v,c[0]),g[u++]=v[0],g[u++]=v[1],g[u++]=v[2];k[p++]=-r[0];k[p++]=-r[1];k[p++]=-r[2];for(A=0;A<
d.length;A++)n.push(0<d[A][0]?d[A][0]:-d[A][0]-1+b.length),n.push(0<d[A][1]?d[A][1]:-d[A][1]-1+b.length),n.push(0<d[A][2]?d[A][2]:-d[A][2]-1+b.length),q.push(0),q.push(0),q.push(0);A=b.length;const ea=b.length-1;for(let F=0;F<c.length;F++){let Z=!1;0<F&&(m.copy(z,r),F<c.length-1?(m.subtract(r,c[F+1],c[F]),m.normalize(r,r)):Z=!0,m.add(G,z,r),m.normalize(G,G),m.add(X,c[F-1],y),Q.fromPositionAndNormal(c[F],G,Y),Q.intersectRay(Y,ba.wrap(X,z),w)?(m.subtract(w,w,c[F]),m.normalize(x,w),m.cross(B,G,x),m.normalize(B,
B)):U(G,y,T,I,B,x,.99619469809),m.copy(y,x),m.copy(T,B));e&&(m.add(w,c[F],h),m.normalize(da,w));for(let H=0;H<f;H++)if(m.scale(v,B,a[H][0]),m.scale(w,x,a[H][1]),m.add(v,v,w),m.normalize(D,v),k[p++]=D[0],k[p++]=D[1],k[p++]=D[2],m.add(v,v,c[F]),g[u++]=v[0],g[u++]=v[1],g[u++]=v[2],!Z){var J=(H+1)%f;n.push(A+H);n.push(A+f+H);n.push(A+J);n.push(A+J);n.push(A+f+H);n.push(A+f+J);for(J=0;6>J;J++)q.push(n[n.length-6+J]-ea)}A+=f}a=c[c.length-1];for(c=0;c<b.length;c++)m.scale(v,B,b[c][0]),m.scale(w,x,b[c][1]),
m.add(v,v,w),m.add(v,v,a),g[u++]=v[0],g[u++]=v[1],g[u++]=v[2];b=p/3;k[p++]=r[0];k[p++]=r[1];k[p++]=r[2];f=A-f;for(p=0;p<d.length;p++)n.push(0<=d[p][0]?A+d[p][0]:-d[p][0]-1+f),n.push(0<=d[p][2]?A+d[p][2]:-d[p][2]-1+f),n.push(0<=d[p][1]?A+d[p][1]:-d[p][1]-1+f),q.push(b),q.push(b),q.push(b);return new E.Geometry([[l.VertexAttribute.POSITION,{size:3,data:g,exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:k,exclusive:!0}]],[[l.VertexAttribute.POSITION,n],[l.VertexAttribute.NORMAL,q]])}function P(a,
c,b,d,e){if(Math.abs(m.dot(c,a))>e)return!1;m.cross(b,a,c);m.normalize(b,b);m.cross(d,b,a);m.normalize(d,d);return!0}function U(a,c,b,d,e,h,f){return P(a,c,e,h,f)||P(a,b,e,h,f)||P(a,d,e,h,f)}const K=S.Vec3Compact;var V;(function(a){const c=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],b=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],d=[0,0,1,0,1,1,0,1],e=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],h=Array(36);for(var f=
0;6>f;f++)for(let k=0;6>k;k++)h[6*f+k]=f;const g=Array(36);for(f=0;6>f;f++)g[6*f]=0,g[6*f+1]=1,g[6*f+2]=2,g[6*f+3]=2,g[6*f+4]=3,g[6*f+5]=0;a.createGeometry=function(k){Array.isArray(k)||(k=[k,k,k]);const n=Array(24);for(let q=0;8>q;q++)n[3*q]=c[q][0]*k[0],n[3*q+1]=c[q][1]*k[1],n[3*q+2]=c[q][2]*k[2];return new E.Geometry([[l.VertexAttribute.POSITION,{size:3,data:n,exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:b}],[l.VertexAttribute.UV0,{size:2,data:d}]],[[l.VertexAttribute.POSITION,e],[l.VertexAttribute.NORMAL,
h],[l.VertexAttribute.UV0,g]])}})(V||(V={}));var N;(function(a){const c=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],b=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],d=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],e=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];a.createGeometry=function(h){Array.isArray(h)||(h=[h,h,h]);const f=Array(18);for(let g=0;6>g;g++)f[3*g]=c[g][0]*h[0],f[3*g+1]=c[g][1]*h[1],f[3*g+2]=c[g][2]*h[2];return new E.Geometry([[l.VertexAttribute.POSITION,
{size:3,data:f,exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:b}]],[[l.VertexAttribute.POSITION,d],[l.VertexAttribute.NORMAL,e]])}})(N||(N={}));var O;(function(a){const c=t.fromValues(-.5,0,-.5),b=t.fromValues(.5,0,-.5),d=t.fromValues(0,0,.5),e=t.fromValues(0,.5,0),h=t.create(),f=t.create(),g=t.create(),k=t.create(),n=t.create();m.subtract(h,c,e);m.subtract(f,c,b);m.cross(g,h,f);m.normalize(g,g);m.subtract(h,b,e);m.subtract(f,b,d);m.cross(k,h,f);m.normalize(k,k);m.subtract(h,d,e);m.subtract(f,
d,c);m.cross(n,h,f);m.normalize(n,n);const q=[c,b,d,e],u=[0,-1,0,g[0],g[1],g[2],k[0],k[1],k[2],n[0],n[1],n[2]],p=[0,1,2,3,1,0,3,2,1,3,0,2],z=[0,0,0,1,1,1,2,2,2,3,3,3];a.createGeometry=function(r){Array.isArray(r)||(r=[r,r,r]);const x=Array(12);for(let y=0;4>y;y++)x[3*y]=q[y][0]*r[0],x[3*y+1]=q[y][1]*r[1],x[3*y+2]=q[y][2]*r[2];return new E.Geometry([[l.VertexAttribute.POSITION,{size:3,data:x,exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:u}]],[[l.VertexAttribute.POSITION,p],[l.VertexAttribute.NORMAL,
z]])}})(O||(O={}));S=V.createGeometry;N=N.createGeometry;O=O.createGeometry;const fa=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]],L=t.create();C.cgToGIS=function(a,c=a){var b=a.vertexAttributes;a=b.get(l.VertexAttribute.POSITION).data;if(b=b.get(l.VertexAttribute.NORMAL).data){var d=c.getMutableAttribute(l.VertexAttribute.NORMAL).data;for(var e=0;e<b.length;e+=3){const h=b[e+1];d[e+1]=-b[e+2];d[e+2]=h}}if(a)for(b=c.getMutableAttribute(l.VertexAttribute.POSITION).data,d=0;d<a.length;d+=3)e=a[d+1],b[d+1]=
-a[d+2],b[d+2]=e;return c};C.createBoxGeometry=S;C.createConeGeometry=function(a,c,b,d,e=!0,h=!0){let f=0;var g=t.fromValues(0,f,0),k=t.fromValues(0,f+a,0),n=t.fromValues(0,-1,0),q=t.fromValues(0,1,0);d&&(f=a,k=t.fromValues(0,0,0),g=t.fromValues(0,f,0),n=t.fromValues(0,1,0),q=t.fromValues(0,-1,0));g=[k,g];n=[n,q];q=b+2;k=Math.sqrt(a*a+c*c);if(d)for(d=b-1;0<=d;d--){var u=2*Math.PI/b*d,p=t.fromValues(Math.cos(u)*c,f,Math.sin(u)*c);g.push(p);u=t.fromValues(a*Math.cos(u)/k,-c/k,a*Math.sin(u)/k);n.push(u)}else for(d=
0;d<b;d++)u=2*Math.PI/b*d,p=t.fromValues(Math.cos(u)*c,f,Math.sin(u)*c),g.push(p),u=t.fromValues(a*Math.cos(u)/k,c/k,a*Math.sin(u)/k),n.push(u);a=[];c=[];if(e){for(e=3;e<g.length;e++)a.push(1),a.push(e-1),a.push(e),c.push(0),c.push(0),c.push(0);a.push(g.length-1);a.push(2);a.push(1);c.push(0);c.push(0);c.push(0)}if(h){for(h=3;h<g.length;h++)a.push(h),a.push(h-1),a.push(0),c.push(h),c.push(h-1),c.push(1);a.push(0);a.push(2);a.push(g.length-1);c.push(1);c.push(2);c.push(n.length-1)}h=new Float32Array(3*
q);for(e=0;e<q;e++)h[3*e]=g[e][0],h[3*e+1]=g[e][1],h[3*e+2]=g[e][2];g=new Float32Array(3*q);for(e=0;e<q;e++)g[3*e]=n[e][0],g[3*e+1]=n[e][1],g[3*e+2]=n[e][2];return new E.Geometry([[l.VertexAttribute.POSITION,{size:3,data:h,exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:g,exclusive:!0}]],[[l.VertexAttribute.POSITION,a],[l.VertexAttribute.NORMAL,c]])};C.createCylinderGeometry=function(a,c,b,d,e,h){d=d?t.clone(d):t.fromValues(1,0,0);e=e?t.clone(e):t.fromValues(0,0,0);h=null==h?!0:h;var f=t.create();
m.normalize(f,d);var g=t.create();m.scale(g,f,Math.abs(a));var k=t.create();m.scale(k,g,-.5);m.add(k,k,e);const n=t.fromValues(0,1,0);.2>Math.abs(1-m.dot(f,n))&&m.set(n,0,0,1);const q=t.create();m.cross(q,f,n);m.normalize(q,q);m.cross(n,q,f);a=2*b+(h?2:0);e=b+(h?2:0);d=new Float32Array(3*a);const u=new Float32Array(3*e),p=new Float32Array(2*a),z=Array(3*b*(h?4:2)),r=Array(3*b*(h?4:2));h&&(d[3*(a-2)]=k[0],d[3*(a-2)+1]=k[1],d[3*(a-2)+2]=k[2],p[2*(a-2)]=0,p[2*(a-2)+1]=0,d[3*(a-1)]=d[3*(a-2)]+g[0],d[3*
(a-1)+1]=d[3*(a-2)+1]+g[1],d[3*(a-1)+2]=d[3*(a-2)+2]+g[2],p[2*(a-1)]=1,p[2*(a-1)+1]=1,u[3*(e-2)]=-f[0],u[3*(e-2)+1]=-f[1],u[3*(e-2)+2]=-f[2],u[3*(e-1)]=f[0],u[3*(e-1)+1]=f[1],u[3*(e-1)+2]=f[2]);f=0;const x=t.create(),y=t.create();for(let w=0;w<b;w++){var B=2*Math.PI/b*w;m.scale(x,n,Math.sin(B));m.scale(y,q,Math.cos(B));m.add(x,x,y);u[3*w]=x[0];u[3*w+1]=x[1];u[3*w+2]=x[2];m.scale(x,x,c);m.add(x,x,k);d[3*w]=x[0];d[3*w+1]=x[1];d[3*w+2]=x[2];p[2*w]=w/b;p[2*w+1]=0;d[3*(w+b)]=d[3*w]+g[0];d[3*(w+b)+1]=d[3*
w+1]+g[1];d[3*(w+b)+2]=d[3*w+2]+g[2];p[2*(w+b)]=w/b;p[2*w+1]=1;B=(w+1)%b;var v=f++,D=w;z[v]=w;r[v]=D;v=f++;D=w;z[v]=w+b;r[v]=D;v=f++;D=B;z[v]=B;r[v]=D;v=f++;D=B;z[v]=B;r[v]=D;v=f++;D=w;z[v]=w+b;r[v]=D;v=f++;D=B;z[v]=B+b;r[v]=D}if(h){for(c=0;c<b;c++)h=(c+1)%b,g=f++,k=e-2,z[g]=a-2,r[g]=k,g=f++,k=e-2,z[g]=c,r[g]=k,g=f++,k=e-2,z[g]=h,r[g]=k;for(c=0;c<b;c++)h=(c+1)%b,g=f++,k=e-1,z[g]=c+b,r[g]=k,g=f++,k=e-1,z[g]=a-1,r[g]=k,g=f++,k=e-1,z[g]=h+b,r[g]=k}return new E.Geometry([[l.VertexAttribute.POSITION,{size:3,
data:d,exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:u,exclusive:!0}],[l.VertexAttribute.UV0,{size:2,data:p,exclusive:!0}]],[[l.VertexAttribute.POSITION,z],[l.VertexAttribute.NORMAL,r],[l.VertexAttribute.UV0,z]])};C.createDiamondGeometry=N;C.createExtrudedTriangle=function(a,c,b,d,e=0){const h=Array(18);a=[[-c,e,d/2],[b,e,d/2],[0,a+e,d/2],[-c,e,-d/2],[b,e,-d/2],[0,a+e,-d/2]];for(c=0;6>c;c++)h[3*c]=a[c][0],h[3*c+1]=a[c][1],h[3*c+2]=a[c][2];return new E.Geometry([[l.VertexAttribute.POSITION,
{size:3,data:h,exclusive:!0}]],[[l.VertexAttribute.POSITION,[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5]]])};C.createPathExtrusionGeometry=W;C.createPointArrayGeometry=function(a,c){const b=new Float32Array(3*a.length),d=new Float32Array(c?3*a.length:3),e=Array(a.length),h=Array(a.length).fill(0);for(let f=0;f<a.length;f++)b[3*f]=a[f][0],b[3*f+1]=a[f][1],b[3*f+2]=a[f][2],c&&(d[3*f]=c[f][0],d[3*f+1]=c[f][1],d[3*f+2]=c[f][2]),e[f]=f;c||(d[0]=0,d[1]=1,d[2]=0);return new E.Geometry([[l.VertexAttribute.POSITION,
{size:3,data:b,exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:d,exclusive:!0}],[l.VertexAttribute.UV0,{size:2,data:[0,0],exclusive:!0}]],[[l.VertexAttribute.POSITION,e],[l.VertexAttribute.NORMAL,c?e:h],[l.VertexAttribute.UV0,h]],R.PrimitiveType.Point)};C.createPointGeometry=function(a,c,b,d,e,h,f,g){c=c?[c[0],c[1],c[2]]:[0,0,0];a=a?[a[0],a[1],a[2]]:[0,0,1];h=h||[0,0];b=[[l.VertexAttribute.POSITION,{size:3,data:c,exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:a,exclusive:!0}],[l.VertexAttribute.UV0,
{size:h.length,data:h}],[l.VertexAttribute.COLOR,{size:4,data:b?[255*b[0],255*b[1],255*b[2],3<b.length?255*b[3]:255]:[255,255,255,255],exclusive:!0}],[l.VertexAttribute.SIZE,{size:2,data:null!=d&&2===d.length?d:[1,1]}]];null!=e&&(e=new Float32Array([e[0],e[1],e[2],e[3]]),b.push([l.VertexAttribute.AUXPOS1,{size:4,data:e}]));null!=f&&(f=new Float32Array([f[0],f[1],f[2],f[3]]),b.push([l.VertexAttribute.AUXPOS2,{size:4,data:f}]));return new E.Geometry(b,null,R.PrimitiveType.Point,g)};C.createPolySphereGeometry=
function(a,c,b){function d(g,k){g>k&&([g,k]=[k,g]);const n=g.toString()+"."+k.toString();if(f[n])return f[n];let q=e.length;e.length+=3;K.add(e,3*g,e,3*k,e,q);K.scale(e,q,a/K.length(e,q));q/=3;return f[n]=q}let e;b?(e=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],b=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1]):(b=a*(1+Math.sqrt(5))/2,e=[-a,b,0,a,b,0,-a,-b,0,a,-b,0,0,-a,b,0,a,b,0,-a,-b,0,a,-b,b,0,-a,b,0,a,-b,0,-a,-b,0,a],b=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,
3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]);for(var h=0;h<e.length;h+=3)K.scale(e,h,a/K.length(e,h));let f={};for(h=0;h<c;h++){const g=b.length,k=Array(4*g);for(let n=0;n<g;n+=3){const q=b[n],u=b[n+1],p=b[n+2],z=d(q,u),r=d(u,p),x=d(p,q),y=4*n;k[y]=q;k[y+1]=z;k[y+2]=x;k[y+3]=u;k[y+4]=r;k[y+5]=z;k[y+6]=p;k[y+7]=x;k[y+8]=r;k[y+9]=z;k[y+10]=r;k[y+11]=x}b=k;f={}}c=new Float32Array(e);for(h=0;h<c.length;h+=3)K.normalize(c,h);b=[[l.VertexAttribute.POSITION,b],[l.VertexAttribute.NORMAL,b]];
c=[[l.VertexAttribute.POSITION,{size:3,data:new Float32Array(e),exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:c,exclusive:!0}]];return new E.Geometry(c,b)};C.createPolylineGeometry=function(a,c,b){M.assert(1<a.length,"createPolylineGeometry(): polyline needs at least 2 points");M.assert(3===a[0].length,"createPolylineGeometry(): malformed vertex");M.assert(null==c||c.length===a.length,"createPolylineGeometry: need same number of points and normals");M.assert(null==c||3===c[0].length,"createPolylineGeometry(): malformed normal");
var d=new Float64Array(3*a.length);const e=Array(2*(a.length-1));var h=0,f=0;for(var g=0;g<a.length;g++){for(var k=0;3>k;k++)d[h++]=a[g][k];0<g&&(e[f++]=g-1,e[f++]=g)}h=[];f=[];h.push([l.VertexAttribute.POSITION,e]);f.push([l.VertexAttribute.POSITION,{size:3,data:d,exclusive:!0}]);if(c){d=new Float32Array(3*c.length);g=0;for(k=0;k<a.length;k++)for(let n=0;3>n;n++)d[g++]=c[k][n];h.push([l.VertexAttribute.NORMAL,e]);f.push([l.VertexAttribute.NORMAL,{size:3,data:d,exclusive:!0}])}b&&(f.push([l.VertexAttribute.COLOR,
{size:4,data:b}]),h.push([l.VertexAttribute.COLOR,ca.generateDefaultIndexArray(b.length/4)]));return new E.Geometry(f,h,R.PrimitiveType.Line)};C.createSphereGeometry=function(a,c,b,d={uv:!0}){var e=-Math.PI,h=2*Math.PI,f=-Math.PI/2,g=Math.PI;c=Math.max(3,Math.floor(c));const k=Math.max(2,Math.floor(b));var n=(c+1)*(k+1);b=new Float32Array(3*n);const q=new Float32Array(3*n);n=new Float32Array(2*n);const u=[];var p=0;for(var z=0;z<=k;z++){const x=[],y=z/k,B=f+y*g,v=Math.cos(B);for(let D=0;D<=c;D++){const w=
D/c;var r=e+w*h;const I=Math.cos(r)*v,G=Math.sin(B);r=-Math.sin(r)*v;b[3*p]=I*a;b[3*p+1]=G*a;b[3*p+2]=r*a;q[3*p]=I;q[3*p+1]=G;q[3*p+2]=r;n[2*p]=w;n[2*p+1]=y;x.push(p);++p}u.push(x)}a=[];for(e=0;e<k;e++)for(h=0;h<c;h++)f=u[e][h],g=u[e][h+1],p=u[e+1][h+1],z=u[e+1][h],0===e?(a.push(f),a.push(p),a.push(z)):e===k-1?(a.push(f),a.push(g),a.push(p)):(a.push(f),a.push(g),a.push(p),a.push(p),a.push(z),a.push(f));c=[[l.VertexAttribute.POSITION,a],[l.VertexAttribute.NORMAL,a]];b=[[l.VertexAttribute.POSITION,
{size:3,data:b,exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:q,exclusive:!0}]];d.uv&&(b.push([l.VertexAttribute.UV0,{size:2,data:n,exclusive:!0}]),c.push([l.VertexAttribute.UV0,a]));d.offset&&(c[0][0]=l.VertexAttribute.OFFSET,b[0][0]=l.VertexAttribute.OFFSET,c.push([l.VertexAttribute.POSITION,Array(a.length).fill(0)]),b.push([l.VertexAttribute.POSITION,{size:3,data:Float64Array.from(d.offset),exclusive:!0}]));return new E.Geometry(b,c)};C.createSquareGeometry=function(a=fa){const c=Array(12);
for(var b=0;4>b;b++)for(let d=0;3>d;d++)c[3*b+d]=a[b][d];a=[0,1,2,2,3,0];b=[0,0,0,0,0,0];return new E.Geometry([[l.VertexAttribute.POSITION,{size:3,data:c,exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:[0,0,1],exclusive:!0}],[l.VertexAttribute.UV0,{size:2,data:[0,0,1,0,1,1,0,1],exclusive:!0}],[l.VertexAttribute.COLOR,{size:4,data:[255,255,255,255],exclusive:!0}]],[[l.VertexAttribute.POSITION,a],[l.VertexAttribute.NORMAL,b],[l.VertexAttribute.UV0,a],[l.VertexAttribute.COLOR,b]])};C.createTetrahedronGeometry=
O;C.createTriangleGeometry=function(){return new E.Geometry([[l.VertexAttribute.POSITION,{size:3,data:[0,0,0,0,0,100,100,0,0],exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:[0,1,0],exclusive:!0}],[l.VertexAttribute.UV0,{size:2,data:[0,0],exclusive:!0}]],[[l.VertexAttribute.POSITION,[0,1,2]],[l.VertexAttribute.NORMAL,[0,0,0]],[l.VertexAttribute.UV0,[0,0,0]]])};C.createTubeGeometry=function(a,c,b,d,e){b=b||10;d=null!=d?d:!0;M.assert(1<a.length);const h=[],f=[];for(let g=0;g<b;g++){h.push([0,
-g-1,-((g+1)%b)-1]);const k=g/b*2*Math.PI;f.push([Math.cos(k)*c,Math.sin(k)*c])}return W(f,a,[[0,0,0]],h,d,e)};C.makeOrthoBasisDirUp=P;C.makeOrthoBasisDirUpFallback=U;C.transformInPlace=function(a,c){a=a.getMutableAttribute(l.VertexAttribute.POSITION).data;for(let b=0;b<a.length;b+=3)m.set(L,a[b],a[b+1],a[b+2]),m.transformMat4(L,L,c),a[b]=L[0],a[b+1]=L[1],a[b+2]=L[2]};C.updatePointGeometry=function(a,c,b,d,e,h,f,g){if(null!=a){const {data:k}=g.getMutableAttribute(l.VertexAttribute.NORMAL);k[0]=a[0];
k[1]=a[1];k[2]=a[2]}null!=c&&({data:a}=g.getMutableAttribute(l.VertexAttribute.POSITION),a[0]=c[0],a[1]=c[1],a[2]=c[2]);null!=b&&({data:c}=g.getMutableAttribute(l.VertexAttribute.COLOR),c[0]=b[0],c[1]=b[1],c[2]=b[2],c[3]=b[3]);null!=d&&({data:b}=g.getMutableAttribute(l.VertexAttribute.SIZE),b[0]=d[0],b[1]=d[1]);null!=e&&({data:d}=g.getMutableAttribute(l.VertexAttribute.AUXPOS1),d[0]=e[0],d[1]=e[1],d[2]=e[2],d[3]=e[3]);null!=h&&({data:e}=g.getMutableAttribute(l.VertexAttribute.UV0),e[0]=h[0],e[1]=
h[1]);null!=f&&({data:h}=g.getMutableAttribute(l.VertexAttribute.AUXPOS2),h[0]=f[0],h[1]=f[1],h[2]=f[2],h[3]=f[3])};Object.defineProperties(C,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
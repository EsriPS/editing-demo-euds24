import{eI as J,dk as j,eJ as w,d6 as F}from"./index-C1aGfQcb.js";function I(n,e,r,o){if(n.type==="point")return n.x+=e,n.y+=r,n.hasZ&&o!=null&&(n.z+=o),n;if(n.type==="multipoint"){const x=n.points;for(let a=0;a<x.length;a++)x[a]=A(x[a],e,r,o);return n}if(n.type==="extent")return n.xmin+=e,n.xmax+=e,n.ymin+=r,n.ymax+=r,n;const m=J(n),t=n.type==="polyline"?n.paths:n.rings;for(let x=0;x<m.length;x++){const a=m[x];for(let s=0;s<a.length;s++)a[s]=A(a[s],e,r,o)}return"paths"in n?n.paths=t:n.rings=t,n}function H(n,e,r,o,m){const t=n.clone(),x=o.resolution;if(t.type==="point"){if(m)I(t,e*x,-r*x);else{const a=o.state.transform,s=o.state.inverseTransform,l=a[0]*t.x+a[2]*t.y+a[4],y=a[1]*t.x+a[3]*t.y+a[5];t.x=s[0]*(l+e)+s[2]*(y+r)+s[4],t.y=s[1]*(l+e)+s[3]*(y+r)+s[5]}return t}if(t.type==="multipoint"){if(m)I(t,e*x,-r*x);else{const a=t.points,s=o.state.transform,l=o.state.inverseTransform;for(let y=0;y<a.length;y++){const c=a[y],p=s[0]*c[0]+s[2]*c[1]+s[4],M=s[1]*c[0]+s[3]*c[1]+s[5],f=l[0]*(p+e)+l[2]*(M+r)+l[4],u=l[1]*(p+e)+l[3]*(M+r)+l[5];a[y]=k(c,f,u,void 0)}}return t}if(t.type==="extent"){if(m)I(t,e*x,-r*x);else{const a=o.state.transform,s=o.state.inverseTransform,l=a[0]*t.xmin+a[2]*t.ymin+a[4],y=a[1]*t.xmin+a[3]*t.ymin+a[5],c=a[0]*t.xmax+a[2]*t.ymax+a[4],p=a[1]*t.xmax+a[3]*t.ymax+a[5];t.xmin=s[0]*(l+e)+s[2]*(y+r)+s[4],t.ymin=s[1]*(l+e)+s[3]*(y+r)+s[5],t.xmax=s[0]*(c+e)+s[2]*(p+r)+s[4],t.ymax=s[1]*(c+e)+s[3]*(p+r)+s[5]}return t}if(m)I(t,e*x,-r*x);else{const a=J(t),s=t.type==="polyline"?t.paths:t.rings,l=o.state.transform,y=o.state.inverseTransform;for(let c=0;c<a.length;c++){const p=a[c];for(let M=0;M<p.length;M++){const f=p[M],u=l[0]*f[0]+l[2]*f[1]+l[4],h=l[1]*f[0]+l[3]*f[1]+l[5],v=y[0]*(u+e)+y[2]*(h+r)+y[4],g=y[1]*(u+e)+y[3]*(h+r)+y[5];p[M]=k(f,v,g,void 0)}}"paths"in t?t.paths=s:t.rings=s}return t}function K(n,e,r,o){if(n.type==="point"){const{x:f,y:u}=n,h=o?o[0]:f,v=o?o[1]:u,g=n.clone(),d=(f-h)*e+h,i=(u-v)*r+v;return g.x=d,g.y=i,g}if(n.type==="multipoint"){const f=J(n),u=j(),[h,v,g,d]=w(u,[f]),i=o?o[0]:(h+g)/2,T=o?o[1]:(d+v)/2,q=n.clone(),Z=q.points;for(let z=0;z<Z.length;z++){const b=Z[z],[B,C]=b,D=(B-i)*e+i,E=(C-T)*r+T;Z[z]=k(b,D,E,void 0)}return q}if(n.type==="extent"){const{xmin:f,xmax:u,ymin:h,ymax:v}=n,g=o?o[0]:(f+u)/2,d=o?o[1]:(v+h)/2,i=n.clone();if(i.xmin=(f-g)*e+g,i.ymax=(v-d)*r+d,i.xmax=(u-g)*e+g,i.ymin=(h-d)*r+d,i.xmin>i.xmax){const T=i.xmin,q=i.xmax;i.xmin=q,i.xmax=T}if(i.ymin>i.ymax){const T=i.ymin,q=i.ymax;i.ymin=q,i.ymax=T}return i}const m=J(n),t=j(),[x,a,s,l]=w(t,m),y=o?o[0]:(x+s)/2,c=o?o[1]:(l+a)/2,p=n.clone(),M=p.type==="polyline"?p.paths:p.rings;for(let f=0;f<m.length;f++){const u=m[f];for(let h=0;h<u.length;h++){const v=u[h],[g,d]=v,i=(g-y)*e+y,T=(d-c)*r+c;M[f][h]=k(v,i,T,void 0)}}return"paths"in p?p.paths=M:p.rings=M,p}function L(n,e,r,o,m,t){const x=Math.sqrt((r-n)*(r-n)+(o-e)*(o-e));return Math.sqrt((m-n)*(m-n)+(t-e)*(t-e))/x}function N(n,e,r,o=!1){const m=Math.atan2(e.y-r.y,e.x-r.x)-Math.atan2(n.y-r.y,n.x-r.x),t=Math.atan2(Math.sin(m),Math.cos(m));return o?t:F(t)}function A(n,e,r,o){return k(n,n[0]+e,n[1]+r,n[2]!=null&&o!=null?n[2]+o:void 0)}function k(n,e,r,o){const m=[e,r];return n.length>2&&m.push(o??n[2]),n.length>3&&m.push(n[3]),m}export{L as a,H as i,N as m,K as s};

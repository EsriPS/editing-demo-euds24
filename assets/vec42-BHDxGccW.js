import{bR as v,bS as y}from"./index-C1aGfQcb.js";function _(r,o){return r[0]=o[0],r[1]=o[1],r[2]=o[2],r[3]=o[3],r}function S(r,o){return r[0]=o[0],r[1]=o[1],r[2]=o[2],r}function j(r,o,u,e,c){return r[0]=o,r[1]=u,r[2]=e,r[3]=c,r}function w(r,o,u){return r[0]=o[0]+u[0],r[1]=o[1]+u[1],r[2]=o[2]+u[2],r[3]=o[3]+u[3],r}function d(r,o,u){return r[0]=o[0]-u[0],r[1]=o[1]-u[1],r[2]=o[2]-u[2],r[3]=o[3]-u[3],r}function m(r,o,u){return r[0]=o[0]*u[0],r[1]=o[1]*u[1],r[2]=o[2]*u[2],r[3]=o[3]*u[3],r}function b(r,o,u){return r[0]=o[0]/u[0],r[1]=o[1]/u[1],r[2]=o[2]/u[2],r[3]=o[3]/u[3],r}function z(r,o){return r[0]=Math.ceil(o[0]),r[1]=Math.ceil(o[1]),r[2]=Math.ceil(o[2]),r[3]=Math.ceil(o[3]),r}function A(r,o){return r[0]=Math.floor(o[0]),r[1]=Math.floor(o[1]),r[2]=Math.floor(o[2]),r[3]=Math.floor(o[3]),r}function D(r,o,u){return r[0]=Math.min(o[0],u[0]),r[1]=Math.min(o[1],u[1]),r[2]=Math.min(o[2],u[2]),r[3]=Math.min(o[3],u[3]),r}function L(r,o,u){return r[0]=Math.max(o[0],u[0]),r[1]=Math.max(o[1],u[1]),r[2]=Math.max(o[2],u[2]),r[3]=Math.max(o[3],u[3]),r}function O(r,o){return r[0]=Math.round(o[0]),r[1]=Math.round(o[1]),r[2]=Math.round(o[2]),r[3]=Math.round(o[3]),r}function E(r,o,u){return r[0]=o[0]*u,r[1]=o[1]*u,r[2]=o[2]*u,r[3]=o[3]*u,r}function $(r,o,u,e){return r[0]=o[0]+u[0]*e,r[1]=o[1]+u[1]*e,r[2]=o[2]+u[2]*e,r[3]=o[3]+u[3]*e,r}function x(r,o){const u=o[0]-r[0],e=o[1]-r[1],c=o[2]-r[2],s=o[3]-r[3];return Math.sqrt(u*u+e*e+c*c+s*s)}function q(r,o){const u=o[0]-r[0],e=o[1]-r[1],c=o[2]-r[2],s=o[3]-r[3];return u*u+e*e+c*c+s*s}function p(r){const o=r[0],u=r[1],e=r[2],c=r[3];return Math.sqrt(o*o+u*u+e*e+c*c)}function g(r){const o=r[0],u=r[1],e=r[2],c=r[3];return o*o+u*u+e*e+c*c}function k(r,o){return r[0]=-o[0],r[1]=-o[1],r[2]=-o[2],r[3]=-o[3],r}function B(r,o){return r[0]=1/o[0],r[1]=1/o[1],r[2]=1/o[2],r[3]=1/o[3],r}function C(r,o){const u=o[0],e=o[1],c=o[2],s=o[3];let i=u*u+e*e+c*c+s*s;return i>0&&(i=1/Math.sqrt(i),r[0]=u*i,r[1]=e*i,r[2]=c*i,r[3]=s*i),r}function F(r,o){return r[0]*o[0]+r[1]*o[1]+r[2]*o[2]+r[3]*o[3]}function G(r,o,u,e){const c=o[0],s=o[1],i=o[2],n=o[3];return r[0]=c+e*(u[0]-c),r[1]=s+e*(u[1]-s),r[2]=i+e*(u[2]-i),r[3]=n+e*(u[3]-n),r}function P(r,o=1){const u=y;let e,c,s,i,n,h;do e=2*u()-1,c=2*u()-1,n=e*e+c*c;while(n>=1);do s=2*u()-1,i=2*u()-1,h=s*s+i*i;while(h>=1);const M=Math.sqrt((1-n)/h);return r[0]=o*e,r[1]=o*c,r[2]=o*s*M,r[3]=o*i*M,r}function Q(r,o,u){const e=o[0],c=o[1],s=o[2],i=o[3];return r[0]=u[0]*e+u[4]*c+u[8]*s+u[12]*i,r[1]=u[1]*e+u[5]*c+u[9]*s+u[13]*i,r[2]=u[2]*e+u[6]*c+u[10]*s+u[14]*i,r[3]=u[3]*e+u[7]*c+u[11]*s+u[15]*i,r}function R(r,o,u){const e=o[0],c=o[1],s=o[2],i=u[0],n=u[1],h=u[2],M=u[3],f=M*e+n*s-h*c,a=M*c+h*e-i*s,t=M*s+i*c-n*e,l=-i*e-n*c-h*s;return r[0]=f*M+l*-i+a*-h-t*-n,r[1]=a*M+l*-n+t*-i-f*-h,r[2]=t*M+l*-h+f*-n-a*-i,r[3]=o[3],r}function T(r){return"vec4("+r[0]+", "+r[1]+", "+r[2]+", "+r[3]+")"}function V(r,o){return r[0]===o[0]&&r[1]===o[1]&&r[2]===o[2]&&r[3]===o[3]}function H(r,o){const u=r[0],e=r[1],c=r[2],s=r[3],i=o[0],n=o[1],h=o[2],M=o[3],f=v();return Math.abs(u-i)<=f*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(e-n)<=f*Math.max(1,Math.abs(e),Math.abs(n))&&Math.abs(c-h)<=f*Math.max(1,Math.abs(c),Math.abs(h))&&Math.abs(s-M)<=f*Math.max(1,Math.abs(s),Math.abs(M))}const I=d,J=m,K=b,N=x,U=q,W=p,X=g;Object.freeze(Object.defineProperty({__proto__:null,add:w,ceil:z,copy:_,copyVec3:S,dist:N,distance:x,div:K,divide:b,dot:F,equals:H,exactEquals:V,floor:A,inverse:B,len:W,length:p,lerp:G,max:L,min:D,mul:J,multiply:m,negate:k,normalize:C,random:P,round:O,scale:E,scaleAndAdd:$,set:j,sqrDist:U,sqrLen:X,squaredDistance:q,squaredLength:g,str:T,sub:I,subtract:d,transformMat4:Q,transformQuat:R},Symbol.toStringTag,{value:"Module"}));export{V as E,H as L,G as _,_ as a,F as j,E as m,w as o,g as p,p as q,j as s,q as x,C as y,Q as z};

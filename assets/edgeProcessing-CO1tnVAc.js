import{e as me}from"./deduplicate-Dq2CF0iu.js";import{H as F}from"./InterleavedLayout-Bb_2wUZe.js";import{e as c}from"./VertexAttribute-Cq4MnHjR.js";import{t as Z}from"./glUtil-CFv2RXTA.js";import{cr as w,dm as ee,e5 as Ie,da as fe,ia as Oe}from"./index-C1aGfQcb.js";import{p as Se,o as k,s as oe,P as H,K as Ae,_ as pe,c as re,A as de,u as Ee}from"./vec32-CmwgPQMd.js";import{s as j}from"./Normals-C9jd-OeY.js";const we=F().vec3f(c.POSITION).u16(c.COMPONENTINDEX).freeze(),Te=F().vec2u8(c.SIDENESS).freeze();Z(Te);const G=F().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze(),J=F().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).vec2i16(c.NORMAL2COMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze();c.POSITION0,c.POSITION1,c.COMPONENTINDEX,c.VARIANTOFFSET,c.VARIANTSTROKE,c.VARIANTEXTENSION,c.NORMALCOMPRESSED,c.NORMAL2COMPRESSED,c.SIDENESS;class ve{constructor(){this.position0=w(),this.position1=w(),this.faceNormal0=w(),this.faceNormal1=w(),this.componentIndex=0,this.cosAngle=0}}const W=-1;function ye(e,n,s){const r=e.vertices.position,a=e.vertices.componentIndex,f=m.position0,g=m.position1,h=m.faceNormal0,S=m.faceNormal1,{edges:i,normals:p}=$e(e),I=i.length/4,A=n.allocate(I);let $=0;const b=I,T=s==null?void 0:s.allocate(b);let B=0,t=0,o=0;z.length=0;for(let d=0;d<I;++d){const y=4*d;r.getVec(i.data[y],f),r.getVec(i.data[y+1],g);const x=z.pushNew();x.index=4*d,x.length=Se(f,g)}z.sort((d,y)=>y.length-d.length);const u=new Array,l=new Array;z.forAll(({length:d,index:y})=>{const x=i.data[y],Ne=i.data[y+1],te=i.data[y+2],ne=i.data[y+3],se=ne===W;if(r.getVec(x,f),r.getVec(Ne,g),se){const E=3*te;k(h,p.data[E],p.data[E+1],p.data[E+2]),oe(S,h),m.componentIndex=a.get(x),m.cosAngle=H(h,S)}else{let E=3*te;if(k(h,p.data[E],p.data[E+1],p.data[E+2]),E=3*ne,k(S,p.data[E],p.data[E+1],p.data[E+2]),m.componentIndex=a.get(x),m.cosAngle=H(h,S),Me(m,De))return;m.cosAngle<-.9999&&oe(S,h)}t+=d,o++,se||Pe(m,Ce)?(n.write(A,$++,m),u.push(d)):Re(m,ge)&&(T&&s&&s.write(T,B++,m),l.push(d))});const O=new Float32Array(u.reverse()),v=new Float32Array(l.reverse()),P=T&&s?{instancesData:T.slice(0,B),lodInfo:{lengths:v}}:void 0;return{regular:{instancesData:A.slice(0,$),lodInfo:{lengths:O}},silhouette:P,averageEdgeLength:t/o}}function Pe(e,n){return e.cosAngle<n}function Me(e,n){return e.cosAngle>n}function Re(e,n){const s=Ie(e.cosAngle);return Ae(ie,e.position1,e.position0),s*(H(pe(xe,e.faceNormal0,e.faceNormal1),ie)>0?-1:1)>n}function $e(e){const n=e.faces.length/3,s=e.faces,r=e.neighbors,a=e.vertices.position;N.length=K.length=0;for(let f=0;f<n;f++){const g=3*f,h=r[g],S=r[g+1],i=r[g+2],p=s[g],I=s[g+1],A=s[g+2];a.getVec(p,V),a.getVec(I,_),a.getVec(A,X),re(_,_,V),re(X,X,V),pe(V,_,X),de(V,V),K.pushArray(V),(h===W||p<I)&&(N.push(p),N.push(I),N.push(f),N.push(h)),(S===W||I<A)&&(N.push(I),N.push(A),N.push(f),N.push(S)),(i===W||A<p)&&(N.push(A),N.push(p),N.push(f),N.push(i))}return{edges:N,normals:K}}class Ve{constructor(){this.index=0,this.length=0}}const z=new ee({allocator:e=>e||new Ve,deallocator:null}),N=new ee({deallocator:null}),K=new ee({deallocator:null}),m=new ve,xe=w(),ie=w(),V=w(),_=w(),X=w(),ge=fe(4),De=Math.cos(ge),Le=fe(35),Ce=Math.cos(Le);function ae(e,n,s){const r=n/3,a=new Uint32Array(s+1),f=new Uint32Array(s+1),g=(t,o)=>{t<o?a[t+1]++:f[o+1]++};for(let t=0;t<r;t++){const o=e[3*t],u=e[3*t+1],l=e[3*t+2];g(o,u),g(u,l),g(l,o)}let h=0,S=0;for(let t=0;t<s;t++){const o=a[t+1],u=f[t+1];a[t+1]=h,f[t+1]=S,h+=o,S+=u}const i=new Uint32Array(6*r),p=a[s],I=(t,o,u)=>{if(t<o){const l=a[t+1]++;i[2*l]=o,i[2*l+1]=u}else{const l=f[o+1]++;i[2*p+2*l]=t,i[2*p+2*l+1]=u}};for(let t=0;t<r;t++){const o=e[3*t],u=e[3*t+1],l=e[3*t+2];I(o,u,t),I(u,l,t),I(l,o,t)}const A=(t,o)=>{const u=2*t,l=o-t;for(let O=1;O<l;O++){const v=i[u+2*O],P=i[u+2*O+1];let d=O-1;for(;d>=0&&i[u+2*d]>v;d--)i[u+2*d+2]=i[u+2*d],i[u+2*d+3]=i[u+2*d+1];i[u+2*d+2]=v,i[u+2*d+3]=P}};for(let t=0;t<s;t++)A(a[t],a[t+1]),A(p+f[t],p+f[t+1]);const $=new Int32Array(3*r),b=(t,o)=>t===e[3*o]?0:t===e[3*o+1]?1:t===e[3*o+2]?2:-1,T=(t,o)=>{const u=b(t,o);$[3*o+u]=-1},B=(t,o,u,l)=>{const O=b(t,o);$[3*o+O]=l;const v=b(u,l);$[3*l+v]=o};for(let t=0;t<s;t++){let o=a[t];const u=a[t+1];let l=f[t];const O=f[t+1];for(;o<u&&l<O;){const v=i[2*o],P=i[2*p+2*l];v===P?(B(t,i[2*o+1],P,i[2*p+2*l+1]),o++,l++):v<P?(T(t,i[2*o+1]),o++):(T(P,i[2*p+2*l+1]),l++)}for(;o<u;)T(t,i[2*o+1]),o++;for(;l<O;)T(i[2*p+2*l],i[2*p+2*l+1]),l++}return $}const q=.7;let he=class{updateSettings(n){this.settings=n,this._edgeHashFunction=n.reducedPrecision?be:Fe}write(n,s,r){U.seed=this._edgeHashFunction(r);const a=U.getIntRange(0,255),f=U.getIntRange(0,this.settings.variants-1),g=U.getFloat(),h=255*(.5*Be(-(1-Math.min(g/q,1))+Math.max(0,g-q)/(1-q),1.2)+.5);n.position0.setVec(s,r.position0),n.position1.setVec(s,r.position1),n.componentIndex.set(s,r.componentIndex),n.variantOffset.set(s,a),n.variantStroke.set(s,f),n.variantExtension.set(s,h)}};const M=new Float32Array(6),R=new Uint32Array(M.buffer),C=new Uint32Array(1);function Fe(e){return M[0]=e.position0[0],M[1]=e.position0[1],M[2]=e.position0[2],M[3]=e.position1[0],M[4]=e.position1[1],M[5]=e.position1[2],C[0]=31*(31*(31*(31*(31*(166811+R[0])+R[1])+R[2])+R[3])+R[4])+R[5],C[0]}function be(e){const n=M;n[0]=D(e.position0[0]),n[1]=D(e.position0[1]),n[2]=D(e.position0[2]),n[3]=D(e.position1[0]),n[4]=D(e.position1[1]),n[5]=D(e.position1[2]),C[0]=5381;for(let s=0;s<R.length;s++)C[0]=31*C[0]+R[s];return C[0]}const ce=1e4;function D(e){return Math.round(e*ce)/ce}function Be(e,n){return Math.abs(e)**n*Math.sign(e)}class Q{constructor(){this._commonWriter=new he}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return G.createBuffer(n)}write(n,s,r){this._commonWriter.write(n,s,r),Ee(L,r.faceNormal0,r.faceNormal1),de(L,L);const{typedBuffer:a,typedBufferStride:f}=n.normalCompressed;j(a,s,L[0],L[1],L[2],f)}}Q.Layout=G,Q.glLayout=Z(G,1);class Y{constructor(){this._commonWriter=new he}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return J.createBuffer(n)}write(n,s,r){this._commonWriter.write(n,s,r);{const{typedBuffer:a,typedBufferStride:f}=n.normalCompressed;j(a,s,r.faceNormal0[0],r.faceNormal0[1],r.faceNormal0[2],f)}{const{typedBuffer:a,typedBufferStride:f}=n.normal2Compressed;j(a,s,r.faceNormal1[0],r.faceNormal1[1],r.faceNormal1[2],f)}}}Y.Layout=J,Y.glLayout=Z(J,1);const L=w(),U=new Oe;function Ge(e){const n=ze(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return le.updateSettings(e.writerSettings),ue.updateSettings(e.writerSettings),ye(n,le,ue)}function ze(e,n,s,r){if(n){const g=ae(s,r,e.count);return new _e(s,r,g,e)}const a=me(e.buffer,e.stride/4,{originalIndices:s,originalIndicesLength:r}),f=ae(a.indices,r,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,neighbors:f,vertices:we.createView(a.buffer)}}class _e{constructor(n,s,r,a){this.faces=n,this.facesLength=s,this.neighbors=r,this.vertices=a}}const le=new Q,ue=new Y,Je=F().vec3f(c.POSITION0).vec3f(c.POSITION1),Qe=F().vec3f(c.POSITION0).vec3f(c.POSITION1).u16(c.COMPONENTINDEX);export{we as E,Je as d,Ge as f,Qe as m,ye as p,ze as u};
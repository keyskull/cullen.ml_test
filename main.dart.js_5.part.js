self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D,E,F,G,H,J,K,L,M,N,O,P,Q,R,S,T,U,V={
aUv(d){var x,w,v
switch(d.x){case C.bi:x=d.c
w=x!=null?new X.eA(x.gtp(x)):C.fo
break
case C.z:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gtp(w)
w=new X.cv(x,v==null?C.v:v)}else if(w==null)w=C.mr
break
default:w=null}return new V.kj(d.a,d.f,d.b,d.e,w)},
arF(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=P.a0(x,w?s:e.a,f)
v=r?s:d.b
v=T.aSF(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=O.aLw(t,w?s:e.d,f)
r=r?s:d.e
r=Y.fR(r,w?s:e.e,f)
r.toString
return new V.kj(x,v,u,t,r)},
kj:function kj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4m:function a4m(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
aFL:function aFL(){},
aFM:function aFM(d,e,f){this.a=d
this.b=e
this.c=f}},W,X,Y,Z
a.setFunctionNamesIfNecessary([V])
A=c[0]
B=c[1]
C=c[2]
D=c[3]
E=c[4]
F=c[5]
G=c[6]
H=c[7]
J=c[8]
K=c[9]
L=c[10]
M=c[11]
N=c[12]
O=c[13]
P=c[14]
Q=c[15]
R=c[16]
S=c[17]
T=c[18]
U=c[19]
V=a.updateHolder(c[20],V)
W=c[21]
X=c[22]
Y=c[23]
Z=c[24]
V.kj.prototype={
C5(d,e){return this.e.f7(d,e)},
gfl(d){return this.e.gha()},
gB2(){return this.d!=null},
f_(d,e){if(d instanceof S.bd)return V.arF(V.aUv(d),this,e)
else if(d==null||d instanceof V.kj)return V.arF(y.b.a(d),this,e)
return this.M0(d,e)},
f0(d,e){if(d instanceof S.bd)return V.arF(this,V.aUv(d),e)
else if(d==null||d instanceof V.kj)return V.arF(this,y.b.a(d),e)
return this.M1(d,e)},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.ac(e)!==H.K(w))return!1
if(e instanceof V.kj)if(J.j(e.a,w.a))x=J.j(e.c,w.c)&&S.h3(e.d,w.d)&&e.e.k(0,w.e)
else x=!1
else x=!1
return x},
gv(d){var x=this
return P.ab(x.a,x.b,x.c,x.e,P.hv(x.d),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
IO(d,e,f){return this.e.f7(new P.L(0,0,0+d.a,0+d.b),f).w(0,e)},
A8(d){return new V.a4m(this,d)}}
V.a4m.prototype={
aiP(d,e){var x,w,v=this
if(d.k(0,v.c)&&e==v.d)return
if(v.r==null)x=v.b.a!=null||!1
else x=!1
if(x){x=H.aR()
v.r=x
w=v.b.a
if(w!=null)x.san(0,w)}x=v.b
w=x.d
if(w!=null){if(v.x==null){v.x=w.length
v.z=P.aC(new H.a6(w,new V.aFL(),H.X(w).i("a6<1,UU>")),!0,y.m)}v.y=P.aC(new H.a6(w,new V.aFM(v,d,e),H.X(w).i("a6<1,oU>")),!0,y.c)}if(v.r!=null||v.x!=null)v.e=x.e.f7(d,e)
if(x.c!=null)v.f=x.e.jx(d,e)
v.c=d
v.d=e},
ak0(d){var x,w,v,u=this
if(u.x!=null){x=0
while(!0){w=u.x
w.toString
if(!(x<w))break
w=u.y
w=(w==null?H.e(H.q("_shadowPaths")):w)[x]
v=u.z
d.ed(0,w,(v==null?H.e(H.q("_shadowPaints")):v)[x]);++x}}},
ai9(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.Q
if(x==null){x=w.a
x.toString
x=w.Q=v.V3(x)
v=x}else v=x
x=w.c
x.toString
v.Bq(d,x,w.f,e)},
n(d){var x=this.Q
if(x!=null)x.n(0)
this.LX(0)},
kg(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new P.L(v,u,v+w.a,u+w.b),s=f.d
x.aiP(t,s)
x.ak0(d)
w=x.r
if(w!=null){v=x.e
d.ed(0,v==null?H.e(H.q("_outerPath")):v,w)}x.ai9(d,f)
x.b.e.jk(d,t,s)}}
var z=a.updateTypes([])
V.aFL.prototype={
$1(d){return d.ko()},
$S:552}
V.aFM.prototype={
$1(d){return this.a.b.e.f7(this.b.ct(d.b).eL(d.d),this.c)},
$S:553};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(V.kj,Z.h8)
x(V.a4m,Z.nX)
w(H.ch,[V.aFL,V.aFM])})()
H.eM(b.typeUniverse,JSON.parse('{"kj":{"h8":[]},"a4m":{"nX":[]}}'))
var y={m:H.I("UU"),c:H.I("oU"),b:H.I("kj?")};(function constants(){C.mr=new F.cK(C.v,C.v,C.v,C.v)
C.eJ=new V.e7("MaterialState.selected")})()}
$__dart_deferred_initializers__["gWj0+uoXoptzCnbOwAc+74050no="] = $__dart_deferred_initializers__.current

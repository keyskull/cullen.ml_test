self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,B,T,A,E,V={
aYH:function(d){var x,w,v
switch(d.x){case C.bn:x=d.c
w=x!=null?new X.eN(x.gls(x)):C.fZ
break
case C.A:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gls(w)
w=new X.cD(x,v==null?C.v:v)}else if(w==null)w=C.nq
break
default:w=null}return new V.kI(d.a,d.f,d.b,d.e,w)},
auN:function(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=P.a3(x,w?s:e.a,f)
v=r?s:d.b
v=T.aWR(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=O.aPx(t,w?s:e.d,f)
r=r?s:d.e
r=Y.hE(r,w?s:e.e,f)
r.toString
return new V.kI(x,v,u,t,r)},
kI:function kI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a65:function a65(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
aJu:function aJu(){},
aJv:function aJv(d,e,f){this.a=d
this.b=e
this.c=f}},R,L,D,X,U,Y,F,K,N,Z,G,Q,O,S,M
a.setFunctionNamesIfNecessary([V])
C=c[0]
H=c[1]
J=c[2]
P=c[3]
W=c[4]
B=c[5]
T=c[6]
A=c[7]
E=c[8]
V=a.updateHolder(c[9],V)
R=c[10]
L=c[11]
D=c[12]
X=c[13]
U=c[14]
Y=c[15]
F=c[16]
K=c[17]
N=c[18]
Z=c[19]
G=c[20]
Q=c[21]
O=c[22]
S=c[23]
M=c[24]
V.kI.prototype={
D2:function(d,e){return this.e.f8(d,e)},
gfj:function(d){return this.e.ghc()},
gC2:function(){return this.d!=null},
eN:function(d,e){if(d instanceof S.bi)return V.auN(V.aYH(d),this,e)
else if(d==null||d instanceof V.kI)return V.auN(y.b.a(d),this,e)
return this.Nz(d,e)},
eO:function(d,e){if(d instanceof S.bi)return V.auN(this,V.aYH(d),e)
else if(d==null||d instanceof V.kI)return V.auN(this,y.b.a(d),e)
return this.NA(d,e)},
k:function(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.ad(e)!==H.L(w))return!1
if(e instanceof V.kI)if(J.j(e.a,w.a))x=J.j(e.c,w.c)&&S.iw(e.d,w.d)&&e.e.k(0,w.e)
else x=!1
else x=!1
return x},
gt:function(d){var x=this
return P.aa(x.a,x.b,x.c,x.e,P.fP(x.d),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
K8:function(d,e,f){return this.e.f8(new P.I(0,0,0+d.a,0+d.b),f).w(0,e)},
vQ:function(d){return new V.a65(this,d)}}
V.a65.prototype={
alZ:function(d,e){var x,w,v=this
if(d.k(0,v.c)&&e==v.d)return
if(v.r==null)x=v.b.a!=null||!1
else x=!1
if(x){x=H.az()
x=x?H.aT():new H.aM(new H.aO())
v.r=x
w=v.b.a
if(w!=null)x.sah(0,w)}x=v.b
w=x.d
if(w!=null){if(v.x==null){v.x=w.length
v.z=P.ay(new H.a1(w,new V.aJu(),H.X(w).i("a1<1,xs>")),!0,y.m)}v.y=P.ay(new H.a1(w,new V.aJv(v,d,e),H.X(w).i("a1<1,lE>")),!0,y.c)}if(v.r!=null||v.x!=null)v.e=x.e.f8(d,e)
if(x.c!=null)v.f=x.e.jD(d,e)
v.c=d
v.d=e},
anc:function(d){var x,w,v,u=this
if(u.x!=null){x=0
while(!0){w=u.x
w.toString
if(!(x<w))break
w=u.y
w=(w==null?H.d(H.m("_shadowPaths")):w)[x]
v=u.z
d.cH(0,w,(v==null?H.d(H.m("_shadowPaints")):v)[x]);++x}}},
alj:function(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.Q
if(x==null){x=w.a
x.toString
x=w.Q=v.Xr(x)
v=x}else v=x
x=w.c
x.toString
v.Cq(d,x,w.f,e)},
p:function(d){var x=this.Q
if(x!=null)x.p(0)
this.Nv(0)},
jo:function(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new P.I(v,u,v+w.a,u+w.b),s=f.d
x.alZ(t,s)
x.anc(d)
w=x.r
if(w!=null){v=x.e
d.cH(0,v==null?H.d(H.m("_outerPath")):v,w)}x.alj(d,f)
x.b.e.jp(d,t,s)}}
var z=a.updateTypes([])
V.aJu.prototype={
$1:function(d){return d.kE()},
$S:592}
V.aJv.prototype={
$1:function(d){return this.a.b.e.f8(this.b.cl(d.b).eB(d.d),this.c)},
$S:593};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(V.kI,Z.fU)
x(V.a65,Z.mJ)
w(H.cl,[V.aJu,V.aJv])})()
H.eZ(b.typeUniverse,JSON.parse('{"kI":{"fU":[]},"a65":{"mJ":[]}}'))
0
var y={m:H.J("xs"),c:H.J("lE"),b:H.J("kI?")};(function constants(){C.nq=new F.cS(C.v,C.v,C.v,C.v)
C.f6=new V.ey("MaterialState.selected")})()}
$__dart_deferred_initializers__["XMGjOrOM3OM2rdRZr9nL6eNGfGg="] = $__dart_deferred_initializers__.current
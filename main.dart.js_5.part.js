self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D,E,F,G,H,J,K,L,M,N,O,P,Q,R,S,T,U,V={
aYt(d){var x,w,v
switch(d.x){case C.bo:x=d.c
w=x!=null?new X.eQ(x.glL(x)):C.h8
break
case C.A:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.glL(w)
w=new X.cC(x,v==null?C.x:v)}else if(w==null)w=C.o1
break
default:w=null}return new V.kI(d.a,d.f,d.b,d.e,w)},
auX(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=P.a1(x,w?s:e.a,f)
v=r?s:d.b
v=T.aWB(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=O.aPd(t,w?s:e.d,f)
r=r?s:d.e
r=Y.ha(r,w?s:e.e,f)
r.toString
return new V.kI(x,v,u,t,r)},
kI:function kI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6G:function a6G(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
aJj:function aJj(){},
aJk:function aJk(d,e,f){this.a=d
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
V.kI.prototype={
DC(d,e){return this.e.fn(d,e)},
gfD(d){return this.e.ghr()},
gCx(){return this.d!=null},
ff(d,e){if(d instanceof S.bl)return V.auX(V.aYt(d),this,e)
else if(d==null||d instanceof V.kI)return V.auX(y.b.a(d),this,e)
return this.Ov(d,e)},
fg(d,e){if(d instanceof S.bl)return V.auX(this,V.aYt(d),e)
else if(d==null||d instanceof V.kI)return V.auX(this,y.b.a(d),e)
return this.Ow(d,e)},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.aa(e)!==H.L(w))return!1
if(e instanceof V.kI)if(J.k(e.a,w.a))x=J.k(e.c,w.c)&&S.ho(e.d,w.d)&&e.e.k(0,w.e)
else x=!1
else x=!1
return x},
gv(d){var x=this
return P.a6(x.a,x.b,x.c,x.e,P.hm(x.d),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
L3(d,e,f){return this.e.fn(new P.J(0,0,0+d.a,0+d.b),f).w(0,e)},
BB(d){return new V.a6G(this,d)}}
V.a6G.prototype={
an0(d,e){var x,w,v=this
if(d.k(0,v.c)&&e==v.d)return
if(v.r==null)x=v.b.a!=null||!1
else x=!1
if(x){x=H.aE()
x=x?H.aV():new H.aP(new H.aR())
v.r=x
w=v.b.a
if(w!=null)x.saf(0,w)}x=v.b
w=x.d
if(w!=null){if(v.x==null){v.x=w.length
v.z=P.aC(new H.a7(w,new V.aJj(),H.Y(w).i("a7<1,xK>")),!0,y.m)}v.y=P.aC(new H.a7(w,new V.aJk(v,d,e),H.Y(w).i("a7<1,lH>")),!0,y.c)}if(v.r!=null||v.x!=null)v.e=x.e.fn(d,e)
if(x.c!=null)v.f=x.e.jW(d,e)
v.c=d
v.d=e},
aoj(d){var x,w,v,u=this
if(u.x!=null){x=0
while(!0){w=u.x
w.toString
if(!(x<w))break
w=u.y
w=(w==null?H.f(H.p("_shadowPaths")):w)[x]
v=u.z
d.cN(0,w,(v==null?H.f(H.p("_shadowPaints")):v)[x]);++x}}},
ami(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.Q
if(x==null){x=w.a
x.toString
x=w.Q=v.Ya(x)
v=x}else v=x
x=w.c
x.toString
v.CY(d,x,w.f,e)},
p(d){var x=this.Q
if(x!=null)x.p(0)
this.Or(0)},
kI(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new P.J(v,u,v+w.a,u+w.b),s=f.d
x.an0(t,s)
x.aoj(d)
w=x.r
if(w!=null){v=x.e
d.cN(0,v==null?H.f(H.p("_outerPath")):v,w)}x.ami(d,f)
x.b.e.jI(d,t,s)}}
var z=a.updateTypes([])
V.aJj.prototype={
$1(d){return d.kR()},
$S:560}
V.aJk.prototype={
$1(d){return this.a.b.e.fn(this.b.cr(d.b).ev(d.d),this.c)},
$S:561};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(V.kI,Z.hs)
x(V.a6G,Z.ou)
w(H.cq,[V.aJj,V.aJk])})()
H.f3(b.typeUniverse,JSON.parse('{"kI":{"hs":[]},"a6G":{"ou":[]}}'))
var y={m:H.I("xK"),c:H.I("lH"),b:H.I("kI?")};(function constants(){C.o1=new F.cS(C.x,C.x,C.x,C.x)
C.fj=new V.eo("MaterialState.selected")})()}
$__dart_deferred_initializers__["rpTDcYJWqTreBx50H/ShfFhnpbY="] = $__dart_deferred_initializers__.current

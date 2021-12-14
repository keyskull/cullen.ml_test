self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={Tb:function Tb(d,e){this.a=d
this.b=e},Tc:function Tc(d,e){this.a=d
this.b=e},Es:function Es(d,e,f){this.a=d
this.b=e
this.c=f},kP:function kP(d,e,f){var _=this
_.e=0
_.bG$=d
_.ak$=e
_.a=f},QK:function QK(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.C=d
_.t=e
_.w=f
_.a1=g
_.aw=h
_.aU=i
_.aP=j
_.aL=k
_.bq=l
_.bU=!1
_.bC=m
_.bb$=n
_.L$=o
_.bD$=p
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=q
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},Yh:function Yh(){},Yi:function Yi(){},
aou(d,e,f,g,h){return new A.Ta(d,h,g,f,e,null)},
Ta:function Ta(d,e,f,g,h,i){var _=this
_.f=d
_.r=e
_.y=f
_.z=g
_.c=h
_.a=i}},C,B,D
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[26]
A.Tb.prototype={
j(d){return"WrapAlignment."+this.b}}
A.Tc.prototype={
j(d){return"WrapCrossAlignment."+this.b}}
A.Es.prototype={}
A.kP.prototype={}
A.QK.prototype={
sadn(d,e){if(this.C===e)return
this.C=e
this.X()},
sfZ(d){if(this.t===d)return
this.t=d
this.X()},
sTv(d,e){if(this.w===e)return
this.w=e
this.X()},
saiI(d){if(this.a1===d)return
this.a1=d
this.X()},
saiJ(d){if(this.aw===d)return
this.aw=d
this.X()},
sacK(d){if(this.aU===d)return
this.aU=d
this.X()},
e7(d){if(!(d.e instanceof A.kP))d.e=new A.kP(null,null,C.i)},
dQ(d){return this.C8(d)},
zx(d){switch(this.C.a){case 0:return d.a
case 1:return d.b}},
zw(d){switch(this.C.a){case 0:return d.b
case 1:return d.a}},
a2S(d,e){switch(this.C.a){case 0:return new B.n(d,e)
case 1:return new B.n(e,d)}},
a2D(d,e,f){var x=e-f
switch(this.aU.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
cg(d){return this.a0Q(d)},
a0Q(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.C.a){case 0:x=d.b
w=new B.an(0,x,0,1/0)
break
case 1:x=d.d
w=new B.an(0,1/0,0,x)
break
default:w=null
x=0}v=k.L$
for(u=B.u(k).i("aw.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.aFa(v,w)
n=k.zx(o)
m=k.zw(o)
if(p>0&&r+n+k.w>x){t=Math.max(t,r)
s+=q+k.aw
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.w;++p
l=v.e
l.toString
v=u.a(l).ak$}s+=q
t=Math.max(t,r)
switch(k.C.a){case 0:return d.by(new B.Q(t,s))
case 1:return d.by(new B.Q(s,t))}},
bW(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.z.prototype.ga5.call(b1))
b1.bU=!1
x=b1.L$
if(x==null){b1.rx=new B.Q(C.e.M(0,b2.a,b2.b),C.e.M(0,b2.c,b2.d))
return}switch(b1.C.a){case 0:w=b2.b
v=new B.an(0,w,0,1/0)
u=b1.aP===C.a8&&!0
t=b1.aL===C.jE&&!0
break
case 1:w=b2.d
v=new B.an(0,1/0,0,w)
u=b1.aL===C.jE&&!0
t=b1.aP===C.a8&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.w
r=b1.aw
q=B.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.cs(0,v,!0)
j=x.rx
j.toString
i=b1.zx(j)
j=x.rx
j.toString
h=b1.zw(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.Es(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.ak$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.Es(m,l,k))}g=q.length
switch(b1.C.a){case 0:j=b1.rx=b2.by(new B.Q(o,n))
f=j.a
e=j.b
break
case 1:j=b1.rx=b2.by(new B.Q(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.bU=f<o||e<n
d=Math.max(0,e-n)
switch(b1.a1.a){case 0:a0=0
a1=0
break
case 1:a0=d
a1=0
break
case 2:a0=d/2
a1=0
break
case 3:a1=g>1?d/(g-1):0
a0=0
break
case 4:a1=d/g
a0=a1/2
break
case 5:a1=d/(g+1)
a0=a1
break
default:a0=0
a1=0}a1+=r
a2=t?e-a0:a0
x=b1.L$
for(a3=0;a3<g;++a3){a4=q[a3]
l=a4.b
k=a4.c
a5=Math.max(0,f-a4.a)
switch(b1.t.a){case 0:a6=0
a7=0
break
case 1:a6=a5
a7=0
break
case 2:a6=a5/2
a7=0
break
case 3:a7=k>1?a5/(k-1):0
a6=0
break
case 4:a7=a5/k
a6=a7/2
break
case 5:a7=a5/(k+1)
a6=a7
break
default:a6=0
a7=0}a7+=s
a8=u?f-a6:a6
if(t)a2-=l
for(;x!=null;){j=x.e
j.toString
p.a(j)
if(j.e!==a3)break
a9=x.rx
a9.toString
i=b1.zx(a9)
a9=x.rx
a9.toString
b0=b1.a2D(t,l,b1.zw(a9))
if(u)a8-=i
j.a=b1.a2S(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.ak$}a2=t?a2-a1:a2+(l+a1)}},
cU(d,e){return this.vm(d,e)},
aT(d,e){var x,w=this,v=w.bU&&w.bq!==C.k,u=w.bC
if(v){v=B.b(w.fr,"_needsCompositing")
x=w.rx
u.saV(0,d.jQ(v,e,new B.C(0,0,0+x.a,0+x.b),w.gNL(),w.bq,u.a))}else{u.saV(0,null)
w.m1(d,e)}},
n(d){this.bC.saV(0,null)
this.kb(0)}}
A.Yh.prototype={
al(d){var x,w,v
this.dz(d)
x=this.L$
for(w=y.e;x!=null;){x.al(d)
v=x.e
v.toString
x=w.a(v).ak$}},
ad(d){var x,w,v
this.d1(0)
x=this.L$
for(w=y.e;x!=null;){x.ad(0)
v=x.e
v.toString
x=w.a(v).ak$}}}
A.Yi.prototype={}
A.Ta.prototype={
aR(d){var x=this,w=B.ed(d)
w=new A.QK(C.aw,x.f,x.r,D.B,x.y,x.z,w,C.dl,C.k,B.au(y.h),0,null,null,B.au(y.d))
w.gaC()
w.gaO()
w.fr=!1
w.I(0,null)
return w},
b2(d,e){var x,w=this
e.sadn(0,C.aw)
e.sfZ(w.f)
e.sTv(0,w.r)
e.saiI(D.B)
e.saiJ(w.y)
e.sacK(w.z)
x=B.ed(d)
if(e.aP!=x){e.aP=x
e.X()}if(e.aL!==C.dl){e.aL=C.dl
e.X()}if(C.k!==e.bq){e.bq=C.k
e.aD()
e.ay()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.qN,[A.Tb,A.Tc])
u(A.Es,B.v)
u(A.kP,B.rH)
u(A.Yh,B.E)
u(A.Yi,A.Yh)
u(A.QK,A.Yi)
u(A.Ta,B.eJ)
x(A.Yh,B.aw)
w(A.Yi,B.d8)})()
B.dK(b.typeUniverse,JSON.parse('{"kP":{"eF":[],"fm":["E"]},"QK":{"d8":["E","kP"],"E":[],"aw":["E","kP"],"z":[],"K":[],"at":[],"aw.1":"kP","d8.1":"kP","aw.0":"E"},"Ta":{"eJ":[],"ax":[],"i":[]}}'))
var y={a:B.B("an"),h:B.B("ld"),d:B.B("db"),l:B.B("p<Es>"),e:B.B("kP")};(function constants(){D.B=new A.Tb(0,"start")
D.a7o=new A.Tb(2,"center")
D.D6=new A.Tc(0,"start")
D.D7=new A.Tc(2,"center")})()}
$__dart_deferred_initializers__["Rskgvopf48HrCIbeVOAvRHCtHmI="] = $__dart_deferred_initializers__.current

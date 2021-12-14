self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aFD(d){var x=J.aj(d)
return new A.dm(x.h(d,"id"),x.h(d,"title"),x.h(d,"created_timestamp"))},
dm:function dm(d,e,f){this.a=d
this.b=e
this.c=f},
aES(d,e,f,g,h){return new A.ia(g,h,d,f,e,null)},
ia:function ia(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.z=h
_.a=i},
Hn:function Hn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.Q=g
_.ch=h
_.a=i},
mv:function mv(d,e){this.a=d
this.b=e},
ow:function ow(d,e){this.a=d
this.b=e},
pE:function pE(d,e){this.a=d
this.b=e},
wU:function wU(d,e,f,g,h,i,j,k){var _=this
_.r=d
_.z=e
_.Q=f
_.ch=g
_.c=h
_.d=i
_.e=j
_.a=k},
Tl:function Tl(d,e){var _=this
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.e=_.d=$
_.c7$=d
_.a=null
_.b=e
_.c=null},
aoH:function aoH(){},
aoI:function aoI(){},
aoJ:function aoJ(){},
aoK:function aoK(){},
aoL:function aoL(){},
aoM:function aoM(){},
aoN:function aoN(){},
aoO:function aoO(){},
aHr(){var x=new Float64Array(4)
x[3]=1
return new A.nl(x)},
nl:function nl(d){this.a=d},
aFw(d){var x,w=D.d.b1(d/1000)
if(Math.abs(w)<=864e13)x=!1
else x=!0
if(x)B.V(B.bd("DateTime is outside valid range: "+w,null))
B.fc(!1,"isUtc",y.y)
return new B.dO(w,!1)},
aTk(d,e,f){return new H.k2(e,f,null,d)}},B,C,D,E,F,G,J,H
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[20],A)
B=c[0]
C=c[42]
D=c[2]
E=c[27]
F=c[23]
G=c[46]
J=c[1]
H=c[24]
A.dm.prototype={
j_(){return B.aB(["id",this.a,"title",this.b,"created_timestamp",this.c,"brief",""],y.N,y.z)}}
A.ia.prototype={
G(d,e){var x,w,v,u,t,s,r=this,q=null
if(B.B1(e))x=new B.bD(C.JO,r.c,q)
else x=D.hi
w=B.B1(e)?C.JN:E.lb
v=B.B1(e)?new A.Hn(B.bm(D.b.K(r.f,0,1),q,q,q,q),C.ZS,new F.tP("",1),15,30,q):q
u=r.d
t=y.p
s=B.d5(B.a([B.bm("Author: "+r.f,q,B.aa(e).S.x,q,q),B.bm(u,q,B.aa(e).S.b,q,q)],t),D.aW,D.L,D.N)
return B.rv(B.ey(D.hP,B.a([x,B.Mk(w,!0,v,r.z,B.d5(B.a([new B.bD(G.l4,B.bm(u,q,B.aa(e).S.x,q,q),q),B.bm("\nDate: "+r.r,q,q,q,q)],t),D.aW,D.L,D.N),s,q)],t),D.au),q,E.eK,C.jh)}}
A.Hn.prototype={
ga6f(){var x=this.Q
return 2*x},
ga66(){var x=this.ch
return 2*x},
G(d,e){var x,w,v,u,t,s=this,r=null,q=B.aa(e),p=q.R.r.cl(r),o=s.d
switch(B.v6(o).a){case 0:p=p.cl(q.d)
break
case 1:p=p.cl(q.e)
break}x=s.ga6f()
w=s.ga66()
v=A.aTk(D.c9,s.f,r)
u=e.a_(y.l)
u=u.f.vf(1)
t=q.bf.cl(p.b)
t=B.iS(new B.ft(u,B.LG(B.mF(s.c,r,D.bp,!0,p,r,r,D.aD),t,r),r),r,r)
u=t
return new A.wU(u,new B.cf(o,v,r,r,r,r,D.kk),r,new B.an(x,w,x,w),D.aj,D.M,r,r)}}
A.mv.prototype={
dJ(d){return B.azn(this.a,this.b,d)}}
A.ow.prototype={
dJ(d){var x=B.rq(this.a,this.b,d)
x.toString
return x}}
A.pE.prototype={
dJ(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.el(new Float64Array(3)),a3=new B.el(new Float64Array(3)),a4=A.aHr(),a5=A.aHr(),a6=new B.el(new Float64Array(3)),a7=new B.el(new Float64Array(3))
this.a.NK(a2,a4,a6)
this.b.NK(a3,a5,a7)
x=1-a8
w=a2.j4(x).O(0,a3.j4(a8))
v=a4.j4(x).O(0,a5.j4(a8))
u=new Float64Array(4)
t=new A.nl(u)
t.bs(v)
t.r3(0)
s=a6.j4(x).O(0,a7.j4(a8))
x=new Float64Array(16)
v=new B.b3(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
v.bz(0,s)
return v}}
A.wU.prototype={
au(){return new A.Tl(null,D.o)}}
A.Tl.prototype={
kS(d){var x,w,v=this,u=null,t=v.dx
v.a.toString
x=y.K
v.dx=x.a(d.$3(t,u,new A.aoH()))
t=v.dy
v.a.toString
w=y.Z
v.dy=w.a(d.$3(t,u,new A.aoI()))
t=y.h
v.fr=t.a(d.$3(v.fr,v.a.z,new A.aoJ()))
v.fx=t.a(d.$3(v.fx,v.a.Q,new A.aoK()))
v.fy=y.E.a(d.$3(v.fy,v.a.ch,new A.aoL()))
t=v.go
v.a.toString
v.go=w.a(d.$3(t,u,new A.aoM()))
t=v.id
v.a.toString
v.id=y.e.a(d.$3(t,u,new A.aoN()))
t=v.k1
v.a.toString
v.k1=x.a(d.$3(t,u,new A.aoO()))},
G(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.geV(),n=q.dx
n=n==null?p:n.ab(0,o.gp(o))
x=q.dy
x=x==null?p:x.ab(0,o.gp(o))
w=q.fr
w=w==null?p:w.ab(0,o.gp(o))
v=q.fx
v=v==null?p:v.ab(0,o.gp(o))
u=q.fy
u=u==null?p:u.ab(0,o.gp(o))
t=q.go
t=t==null?p:t.ab(0,o.gp(o))
s=q.id
s=s==null?p:s.ab(0,o.gp(o))
r=q.k1
r=r==null?p:r.ab(0,o.gp(o))
return B.bB(n,q.a.r,D.k,p,u,w,v,p,t,x,s,r,p)}}
A.nl.prototype={
bs(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
SK(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
r3(d){var x,w,v=Math.sqrt(this.gmj())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gmj(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gl(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
j4(d){var x=new Float64Array(4),w=new A.nl(x)
w.bs(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
Z(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gajD(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
h=D.d.Z(g,a4)
x=D.d.Z(d,a1)
w=D.d.Z(e,a2)
v=D.d.Z(f,a3)
u=D.d.Z(g,a3)
t=D.d.Z(e,a1)
s=D.d.Z(f,a4)
r=D.d.Z(d,a2)
q=D.d.Z(g,a2)
p=D.d.Z(f,a1)
o=D.d.Z(d,a3)
n=D.d.Z(e,a4)
m=D.d.Z(g,a1)
l=D.d.Z(d,a4)
k=D.d.Z(e,a3)
j=D.d.Z(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.nl(i)},
O(d,e){var x,w=new Float64Array(4),v=new A.nl(w)
v.bs(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
ac(d,e){var x,w=new Float64Array(4),v=new A.nl(w)
v.bs(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
m(d,e,f){this.a[e]=f},
j(d){var x=this.a
return B.d(x[0])+", "+B.d(x[1])+", "+B.d(x[2])+" @ "+B.d(x[3])}}
var z=a.updateTypes(["mv(@)","ow(@)","pE(@)"])
A.aoH.prototype={
$1(d){return new A.mv(y.D.a(d),null)},
$S:z+0}
A.aoI.prototype={
$1(d){return new B.k5(y.W.a(d),null)},
$S:75}
A.aoJ.prototype={
$1(d){return new B.lf(y.S.a(d),null)},
$S:152}
A.aoK.prototype={
$1(d){return new B.lf(y.S.a(d),null)},
$S:152}
A.aoL.prototype={
$1(d){return new A.ow(y.k.a(d),null)},
$S:z+1}
A.aoM.prototype={
$1(d){return new B.k5(y.W.a(d),null)},
$S:75}
A.aoN.prototype={
$1(d){return new A.pE(y.w.a(d),null)},
$S:z+2}
A.aoO.prototype={
$1(d){return new A.mv(y.D.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.v,[A.dm,A.nl])
x(B.as,[A.ia,A.Hn])
x(B.aJ,[A.mv,A.ow,A.pE])
w(A.wU,B.yO)
w(A.Tl,B.mw)
x(B.c3,[A.aoH,A.aoI,A.aoJ,A.aoK,A.aoL,A.aoM,A.aoN,A.aoO])})()
B.dK(b.typeUniverse,JSON.parse('{"ia":{"as":[],"i":[]},"Hn":{"as":[],"i":[]},"mv":{"aJ":["fk?"],"aC":["fk?"],"aC.T":"fk?","aJ.T":"fk?"},"ow":{"aJ":["an"],"aC":["an"],"aC.T":"an","aJ.T":"an"},"pE":{"aJ":["b3"],"aC":["b3"],"aC.T":"b3","aJ.T":"b3"},"wU":{"T":[],"i":[]},"Tl":{"ae":["wU"]}}'))
var y=(function rtii(){var x=B.B
return{D:x("fk"),k:x("an"),S:x("fn"),W:x("cz"),p:x("p<i>"),w:x("b3"),l:x("ft"),N:x("f"),y:x("A"),z:x("@"),K:x("mv?"),E:x("ow?"),h:x("lf?"),Z:x("k5?"),e:x("pE?")}})();(function constants(){C.JN=new B.aG(115,5,5,5)
C.JO=new B.aG(15,0,0,0)
C.In=new B.x(4292998654)
C.Ib=new B.x(4289979900)
C.I0=new B.x(4286698746)
C.HR=new B.x(4283417591)
C.HH=new B.x(4280923894)
C.Hu=new B.x(4278430196)
C.Ht=new B.x(4278426597)
C.Hs=new B.x(4278356177)
C.Hr=new B.x(4278351805)
C.Hq=new B.x(4278278043)
C.Zb=new B.bt([50,C.In,100,C.Ib,200,C.I0,300,C.HR,400,C.HH,500,C.Hu,600,C.Ht,700,C.Hs,800,C.Hr,900,C.Hq],B.B("bt<m,x>"))
C.ZS=new B.im(C.Zb,4278430196)
C.hd=new B.c6(20,20)
C.DQ=new B.dl(C.hd,C.hd,C.hd,C.hd)
C.jh=new B.ce(C.DQ,D.p)})()}
$__dart_deferred_initializers__["qgf732ZVoRfYXvR7qd39k9WNeWU="] = $__dart_deferred_initializers__.current

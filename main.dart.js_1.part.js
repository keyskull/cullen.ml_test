self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b0b(d){return $.b0c.c5(0,d.a.b,new A.acY(d))},
uJ:function uJ(d,e,f,g){var _=this
_.e=null
_.f=d
_.b=e
_.c=f
_.a=g},
acY:function acY(d){this.a=d},
acZ:function acZ(d){this.a=d},
ad_:function ad_(){},
k9:function k9(d){this.a=d},
NS:function NS(d,e){this.a=d
this.b=e},
acq:function acq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acp:function acp(d,e){this.a=d
this.b=e},
acr:function acr(d,e,f){this.a=d
this.b=e
this.c=f}},B,C,D,E={acP:function acP(d,e){this.a=d
this.b=e}},F,G,H,J,K={
adg(){var x=0,w=P.S(y.M),v,u,t
var $async$adg=P.O(function(d,e){if(d===1)return P.P(e,w)
while(true)switch(x){case 0:u=$.hV
x=3
return P.a4((u==null?$.hV=$.tM():u).oT(null,null),$async$adg)
case 3:t=e
E.fu(t,$.lI())
v=new K.iV(t)
x=1
break
case 1:return P.Q(v,w)}})
return P.R($async$adg,w)}},L,M,N={add:function add(){}},O,P={
aJo(d,e){}},Q={
b1n(d){var x=new Q.r3(d,$.a5e())
x.a5n(d)
return x},
r3:function r3(d,e){this.e=null
this.b=d
this.a=e},
aj0:function aj0(d,e){this.a=d
this.b=e},
aj_:function aj_(d,e){this.a=d
this.b=e},
aj1:function aj1(d,e){this.a=d
this.b=e},
aiZ:function aiZ(d,e){this.a=d
this.b=e},
aj2:function aj2(d){this.a=d},
aj3:function aj3(){},
iD:function iD(d,e){this.a=d
this.$ti=e}},R,S,T,U,V,W,X={
b0d(){var x=new X.uK(F.cK(new Z.d0("FirebaseIntegration")))
x.a4E()
return x},
uK:function uK(d){this.a=d},
ad9:function ad9(d){this.a=d},
ad6:function ad6(d){this.a=d},
ad7:function ad7(){},
ad8:function ad8(){},
ad5:function ad5(){},
ad4:function ad4(){}},Y={vp:function vp(d,e){this.c=d
this.a=e}},Z
a.setFunctionNamesIfNecessary([A,E,K,N,P,Q,X,Y])
A=a.updateHolder(c[0],A)
B=c[1]
C=c[2]
D=c[3]
E=a.updateHolder(c[4],E)
F=c[5]
G=c[6]
H=c[7]
J=c[8]
K=a.updateHolder(c[9],K)
L=c[10]
M=c[11]
N=a.updateHolder(c[12],N)
O=c[13]
P=a.updateHolder(c[14],P)
Q=a.updateHolder(c[15],Q)
R=c[16]
S=c[17]
T=c[18]
U=c[19]
V=c[20]
W=c[21]
X=a.updateHolder(c[22],X)
Y=a.updateHolder(c[23],Y)
Z=c[24]
E.acP.prototype={
vA(d,e){return this.apt(0,e)},
apt(d,e){var x=0,w=P.S(y.H),v=this
var $async$vA=P.O(function(f,g){if(f===1)return P.P(g,w)
while(true)switch(x){case 0:if(C.c.n(C.X0,e))throw H.d(P.eG(e,"name","Event name is reserved and cannot be used"))
if(C.b.bL(e,"firebase_"))throw H.d(P.eG(e,"name",'Prefix "firebase_" is reserved and cannot be used.'))
x=2
return P.a4(v.a.At(0,e,null),$async$vA)
case 2:return P.Q(null,w)}})
return P.R($async$vA,w)},
wN(d,e){return this.ZA(0,e)},
ZA(d,e){var x=0,w=P.S(y.H),v=this
var $async$wN=P.O(function(f,g){if(f===1)return P.P(g,w)
while(true)switch(x){case 0:x=2
return P.a4(v.a.wO(0,"Flutter",e),$async$wN)
case 2:return P.Q(null,w)}})
return P.R($async$wN,w)}}
A.uJ.prototype={
afZ(d){var x=d.$ti.i("iA<ck.T,k9?>")
return P.b40(new P.iA(new A.acZ(this),d,x),null,new A.ad_(),x.i("ck.T"))},
j(d){return"FirebaseAuth(app: "+this.f.a.b+")"}}
A.k9.prototype={
j(d){var x="metadata",w=this.a,v=w.c
return C.acX.j(0)+"(displayName: "+H.e(v.h(0,"displayName"))+", email: "+H.e(v.h(0,"email"))+", emailVerified: "+H.e(v.h(0,"emailVerified"))+", isAnonymous: "+H.e(v.h(0,"isAnonymous"))+", metadata: "+new Y.atm(J.T(v.h(0,x),"creationTime"),J.T(v.h(0,x),"lastSignInTime")).j(0)+", phoneNumber: "+H.e(v.h(0,"phoneNumber"))+", photoURL: "+H.e(v.h(0,"photoURL"))+", providerData, "+H.e(w.gvZ(w))+", refreshToken: "+H.e(v.h(0,"refreshToken"))+", tenantId: "+H.e(v.h(0,"tenantId"))+", uid: "+v.h(0,"uid")+")"}}
Q.r3.prototype={
a5n(d){var x=null,w=d.a.b,v=y.N,u=y.P
C.By.eT("Auth#registerIdTokenListener",P.aL(["appName",w],v,v),!1,v).ba(0,new Q.aj0(this,d),u)
C.By.eT("Auth#registerAuthStateListener",P.aL(["appName",w],v,v),!1,v).ba(0,new Q.aj1(this,d),u)
v=y.X
$.aND.q(0,w,new P.iw(x,x,v))
$.aNE.q(0,w,new P.iw(x,x,v))
$.aH8.q(0,w,new P.iw(x,x,v))},
Ea(d,e){return this.abp(d,e)},
abp(d,e){var x=0,w=P.S(y.H),v,u,t,s
var $async$Ea=P.O(function(f,g){if(f===1)return P.P(g,w)
while(true)switch(x){case 0:s=$.aND.h(0,d)
s.toString
v=$.aH7.h(0,d)
v.toString
u=J.T(e,"user")
if(u==null){v.e=null
s.K(0,C.nM)}else{t=new Y.vp(J.a5w(u,y.N,y.z),$.IG())
v.e=t
s.K(0,new Q.iD(t,y.B))}return P.Q(null,w)}})
return P.R($async$Ea,w)},
Ee(d,e){return this.aca(d,e)},
aca(d,e){var x=0,w=P.S(y.H),v,u,t,s,r
var $async$Ee=P.O(function(f,g){if(f===1)return P.P(g,w)
while(true)switch(x){case 0:r=$.aNE.h(0,d)
r.toString
v=$.aH8.h(0,d)
v.toString
u=$.aH7.h(0,d)
u.toString
t=J.T(e,"user")
if(t==null){u.e=null
r.K(0,C.nM)
v.K(0,C.nM)}else{s=u.e=new Y.vp(J.a5w(t,y.N,y.z),$.IG())
u=y.B
r.K(0,new Q.iD(s,u))
v.K(0,new Q.iD(s,u))}return P.Q(null,w)}})
return P.R($async$Ee,w)},
Ug(d){return $.aH7.c5(0,d.a.b,new Q.aj2(d))},
KO(d,e){if(d!=null)this.e=new Y.vp(d,$.IG())
return this},
kj(){var $async$kj=P.O(function(d,e){switch(d){case 2:s=v
x=s.pop()
break
case 1:t=e
x=u}while(true)switch(x){case 0:x=3
v=[1]
return P.hF(P.aPB(r.e),$async$kj,w)
case 3:q=$.aH8.h(0,r.gG8(r).a.b)
q.toString
p=H.w(q).i("ix<1>")
x=4
v=[1]
return P.hF(P.FU(new P.iA(new Q.aj3(),new P.ix(q,p),p.i("iA<ck.T,dJ?>"))),$async$kj,w)
case 4:case 1:return P.hF(null,0,w)
case 2:return P.hF(t,1,w)}})
var x=0,w=P.aIQ($async$kj,y.W),v,u=2,t,s=[],r=this,q,p
return P.aIV(w)}}
Q.iD.prototype={}
Y.vp.prototype={}
N.add.prototype={
gar1(){var x,w=y.n.a($.aMJ.h(0,this.b))
if(w!=null&&J.T(w,this.c)!=null){x=J.T(w,this.c)
x.toString
return y.f.a(x)}x=y.z
return P.y(x,x)}}
X.uK.prototype={
Ae(d){var x=0,w=P.S(y.z),v=this
var $async$Ae=P.O(function(e,f){if(e===1)return P.P(f,w)
while(true)switch(x){case 0:if($.U==null)N.aI3()
$.U.toString
D.aP8(new X.ad9(v))
x=2
return P.a4(K.adg(),$async$Ae)
case 2:return P.Q(null,w)}})
return P.R($async$Ae,w)},
a4E(){this.Ae(0).B4(0,new X.ad5())}}
A.NS.prototype={
gn0(){var x=$.k1
return x.gxw()},
X9(){var x=this,w=new A.h0(x.a,x.b,null),v=H.aQ("controller")
v.b=new P.iw(new A.acq(x,v,w,null),new A.acr(x,w,null),y.m)
return J.aY4(v.be())},
gb4(d){return this.a}}
var z=a.updateTypes(["uJ()","k9?(dJ?)","~(f8<k9?>)","r3()","dJ?(iD<dJ>)","~(k9?)"])
A.acY.prototype={
$0(){var x=this.a
return new A.uJ(x,x.a.b,"plugins.flutter.io/firebase_auth",$.aTb())},
$S:z+0}
A.acZ.prototype={
$1(d){if(d==null)return null
E.fu(d,$.IG())
return new A.k9(d)},
$S:z+1}
A.ad_.prototype={
$1(d){return d.bf(0)},
$S:z+2}
Q.aj0.prototype={
$1(d){d.toString
new A.NS(d,C.b1).X9().p0(0,new Q.aj_(this.a,this.b))},
$S:184}
Q.aj_.prototype={
$1(d){this.a.Ee(this.b.a.b,d)},
$S:9}
Q.aj1.prototype={
$1(d){d.toString
new A.NS(d,C.b1).X9().p0(0,new Q.aiZ(this.a,this.b))},
$S:184}
Q.aiZ.prototype={
$1(d){this.a.Ea(this.b.a.b,d)},
$S:9}
Q.aj2.prototype={
$0(){return Q.b1n(this.a)},
$S:z+3}
Q.aj3.prototype={
$1(d){return d.a},
$S:z+4}
X.ad9.prototype={
$1(d){var x
this.a.a.aB(C.w,"RoutePathListeners run.",null,null)
x=$.aJN()
x.wN(0,d.c).ba(0,new X.ad6(d),y.H).n3(new X.ad7(),new X.ad8())
x.vA(0,"page_view")},
$S:160}
X.ad6.prototype={
$1(d){return P.aJo("firebaseAnalytics.setCurrentScreen(screenName: "+this.a.c+")","firebaseAnalytics.setCurrentScreen")},
$S:66}
X.ad7.prototype={
$1(d){D.aEP().$1(": "+H.e(d))},
$S:539}
X.ad8.prototype={
$1(d){return d instanceof F.rn},
$S:109}
X.ad5.prototype={
$1(d){var x,w,v,u,t,s="APP_CURRENT_USER"
$.aJN().vA(0,"app_open")
x=$.aTa()
w=x.e
if(w==null){w=x.f
v=x.gar1()
u=$.aGL
w=(u==null?$.aGL=new Q.r3(null,$.a5e()):u).Ug(w)
u=J.a2(v)
t=u.h(v,"APP_LANGUAGE_CODE")
w=x.e=w.KO(u.h(v,s)==null?null:P.vd(u.h(v,s),y.N,y.z),t)}x.afZ(w.kj()).p0(0,new X.ad4())},
$S:4}
X.ad4.prototype={
$1(d){if(d==null)P.aJo("User is currently signed out!","")
else P.aJo("User is signed in!","")},
$S:z+5}
A.acq.prototype={
$0(){var x=0,w=P.S(y.H),v=1,u,t=[],s=this,r,q,p,o,n,m
var $async$$0=P.O(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:o=s.a
n=o.a
o.gn0().t9(n,new A.acp(o,s.b))
v=3
x=6
return P.a4(s.c.eT("listen",s.d,!1,y.H),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
m=u
r=H.a_(m)
q=H.aM(m)
o=U.bK("while activating platform stream on channel "+n)
U.dM(new U.ca(r,q,"services library",o,null,!1))
x=5
break
case 2:x=1
break
case 5:return P.Q(null,w)
case 1:return P.P(u,w)}})
return P.R($async$$0,w)},
$S:41}
A.acp.prototype={
$1(d){return this.Yo(d)},
Yo(d){var x=0,w=P.S(y.P),v,u=[],t=this,s,r,q
var $async$$1=P.O(function(e,f){if(e===1)return P.P(f,w)
while(true)switch(x){case 0:if(d==null)J.aFC(t.b.be())
else try{J.fO(t.b.be(),t.a.b.H7(d))}catch(p){q=H.a_(p)
if(q instanceof F.rn){s=q
t.b.be().lK(s)}else throw p}v=null
x=1
break
case 1:return P.Q(v,w)}})
return P.R($async$$1,w)},
$S:540}
A.acr.prototype={
$0(){var x=0,w=P.S(y.H),v=1,u,t=[],s=this,r,q,p,o,n,m
var $async$$0=P.O(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:o=s.a
n=o.a
o.gn0().t9(n,null)
v=3
x=6
return P.a4(s.b.eT("cancel",s.c,!1,y.H),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
m=u
r=H.a_(m)
q=H.aM(m)
o=U.bK("while de-activating platform stream on channel "+n)
U.dM(new U.ca(r,q,"services library",o,null,!1))
x=5
break
case 2:x=1
break
case 5:return P.Q(null,w)
case 1:return P.P(u,w)}})
return P.R($async$$0,w)},
$S:41};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(P.z,[E.acP,A.k9,Q.iD,X.uK,A.NS])
w(N.add,E.SZ)
w(A.uJ,N.add)
x(H.f2,[A.acY,Q.aj2,A.acq,A.acr])
x(H.bJ,[A.acZ,A.ad_,Q.aj0,Q.aj_,Q.aj1,Q.aiZ,Q.aj3,X.ad9,X.ad6,X.ad7,X.ad8,X.ad5,X.ad4,A.acp])
w(Q.r3,L.O5)
w(Y.vp,B.dJ)})()
H.eb(b.typeUniverse,JSON.parse('{"vp":{"dJ":[]}}'))
var y=(function rtii(){var x=H.F
return{M:x("iV"),f:x("ay<@,@>"),P:x("av"),N:x("j"),X:x("iw<iD<dJ>>"),m:x("iw<@>"),B:x("iD<dJ>"),z:x("@"),n:x("ay<z?,z?>?"),W:x("dJ?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.X0=H.a(x(["ad_activeview","ad_click","ad_exposure","ad_impression","ad_query","adunit_exposure","app_clear_data","app_uninstall","app_update","error","first_open","first_visit","in_app_purchase","notification_dismiss","notification_foreground","notification_open","notification_receive","os_update","session_start","user_engagement"]),H.F("p<j>"))
C.By=new A.h0("plugins.flutter.io/firebase_auth",C.b1,null)
C.acX=H.am("k9")
C.nM=new Q.iD(null,y.B)})();(function staticFields(){$.b0c=P.y(y.N,H.F("uJ"))
$.aH7=P.y(y.N,H.F("r3"))
$.aND=P.y(y.N,H.F("io<iD<dJ>>"))
$.aNE=P.y(y.N,H.F("io<iD<dJ>>"))
$.aH8=P.y(y.N,H.F("io<iD<dJ>>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bbP","aTb",function(){return new P.z()})
x($,"bbN","aJN",function(){var w=$.aT7()
U.fL()
return new E.acP(w,null)})
x($,"bbM","aTa",function(){return A.b0b(K.b0f())})})()}
$__dart_deferred_initializers__["lXuoLcxl4rMPSjlTex0lLdULuA4="] = $__dart_deferred_initializers__.current

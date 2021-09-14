self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aPc(d){return $.aPd.bo(0,d.a.b,new A.a5H(d))},
rM:function rM(d,e,f,g){var _=this
_.e=null
_.f=d
_.b=e
_.c=f
_.a=g},
a5H:function a5H(d){this.a=d},
a5I:function a5I(d){this.a=d},
a5J:function a5J(){},
j4:function j4(d){this.a=d},
Ka:function Ka(d,e){this.a=d
this.b=e},
a59:function a59(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a58:function a58(d,e){this.a=d
this.b=e},
a5a:function a5a(d,e,f){this.a=d
this.b=e
this.c=f}},B,C,D,E={a5y:function a5y(d,e){this.a=d
this.b=e}},F,G,H,J,K={
a60(){var x=0,w=P.U(y.c),v,u,t
var $async$a60=P.P(function(d,e){if(d===1)return P.R(e,w)
while(true)switch(x){case 0:u=$.ha
x=3
return P.ac((u==null?$.ha=$.qR():u).mE(null,null),$async$a60)
case 3:t=e
E.eM(t,$.kw())
v=new K.hW(t)
x=1
break
case 1:return P.S(v,w)}})
return P.T($async$a60,w)}},L,M,N={a5X:function a5X(){}},O,P,Q={
aQk(d){var x=new Q.ph(d,$.a_G())
x.ZZ(d)
return x},
ph:function ph(d,e){this.e=null
this.b=d
this.a=e},
abh:function abh(d,e){this.a=d
this.b=e},
abg:function abg(d,e){this.a=d
this.b=e},
abi:function abi(d,e){this.a=d
this.b=e},
abf:function abf(d,e){this.a=d
this.b=e},
abj:function abj(d){this.a=d},
abk:function abk(){},
hK:function hK(d,e){this.a=d
this.$ti=e}},R,S,T,U,V,W,X={
aPe(){var x=new X.rN()
x.Zi()
return x},
rN:function rN(){},
a5T:function a5T(){},
a5Q:function a5Q(d){this.a=d},
a5R:function a5R(){},
a5S:function a5S(){},
a5P:function a5P(){},
a5O:function a5O(){}},Y={tp:function tp(d,e){this.c=d
this.a=e}},Z
a.setFunctionNamesIfNecessary([A,E,K,N,Q,X,Y])
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
P=c[14]
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
E.a5y.prototype={
rF(d,e){return this.ags(0,e)},
ags(d,e){var x=0,w=P.U(y.v),v=this
var $async$rF=P.P(function(f,g){if(f===1)return P.R(g,w)
while(true)switch(x){case 0:if(C.c.v(C.Sd,e))throw H.b(P.dA(e,"name","Event name is reserved and cannot be used"))
if(C.b.b0(e,"firebase_"))throw H.b(P.dA(e,"name",'Prefix "firebase_" is reserved and cannot be used.'))
x=2
return P.ac(v.a.x_(0,e,null),$async$rF)
case 2:return P.S(null,w)}})
return P.T($async$rF,w)},
jq(d,e,f){return this.TD(0,e,f)},
TD(d,e,f){var x=0,w=P.U(y.v),v=this
var $async$jq=P.P(function(g,h){if(g===1)return P.R(h,w)
while(true)switch(x){case 0:x=2
return P.ac(v.a.jq(0,e,f),$async$jq)
case 2:return P.S(null,w)}})
return P.T($async$jq,w)}}
A.rM.prototype={
a8_(d){var x=d.$ti.i("jd<bY.T,j4?>")
return P.aSS(new P.jd(new A.a5I(this),d,x),null,new A.a5J(),x.i("bY.T"))},
j(d){return"FirebaseAuth(app: "+this.f.a.b+")"}}
A.j4.prototype={
j(d){var x="metadata",w=this.a,v=w.c
return C.a6K.j(0)+"(displayName: "+H.c(v.h(0,"displayName"))+", email: "+H.c(v.h(0,"email"))+", emailVerified: "+H.c(v.h(0,"emailVerified"))+", isAnonymous: "+H.c(v.h(0,"isAnonymous"))+", metadata: "+new Y.akv(J.as(v.h(0,x),"creationTime"),J.as(v.h(0,x),"lastSignInTime")).j(0)+", phoneNumber: "+H.c(v.h(0,"phoneNumber"))+", photoURL: "+H.c(v.h(0,"photoURL"))+", providerData, "+H.c(w.gt5(w))+", refreshToken: "+H.c(v.h(0,"refreshToken"))+", tenantId: "+H.c(v.h(0,"tenantId"))+", uid: "+v.h(0,"uid")+")"}}
Q.ph.prototype={
ZZ(d){var x=null,w=d.a.b,v=y.w,u=y.F
C.zh.e0("Auth#registerIdTokenListener",P.aC(["appName",w],v,v),!1,v).aS(0,new Q.abh(this,d),u)
C.zh.e0("Auth#registerAuthStateListener",P.aC(["appName",w],v,v),!1,v).aS(0,new Q.abi(this,d),u)
v=y.t
$.aCP.p(0,w,new P.fr(x,x,v))
$.aCQ.p(0,w,new P.fr(x,x,v))
$.awT.p(0,w,new P.fr(x,x,v))},
Ai(d,e){return this.a3R(d,e)},
a3R(d,e){var x=0,w=P.U(y.v),v,u,t,s
var $async$Ai=P.P(function(f,g){if(f===1)return P.R(g,w)
while(true)switch(x){case 0:s=$.aCP.h(0,d)
s.toString
v=$.awS.h(0,d)
v.toString
u=J.as(e,"user")
if(u==null){v.e=null
s.G(0,C.lA)}else{t=new Y.tp(J.a_V(u,y.w,y.b),$.Fv())
v.e=t
s.G(0,new Q.hK(t,y.e))}return P.S(null,w)}})
return P.T($async$Ai,w)},
Aq(d,e){return this.a4s(d,e)},
a4s(d,e){var x=0,w=P.U(y.v),v,u,t,s,r
var $async$Aq=P.P(function(f,g){if(f===1)return P.R(g,w)
while(true)switch(x){case 0:r=$.aCQ.h(0,d)
r.toString
v=$.awT.h(0,d)
v.toString
u=$.awS.h(0,d)
u.toString
t=J.as(e,"user")
if(t==null){u.e=null
r.G(0,C.lA)
v.G(0,C.lA)}else{s=u.e=new Y.tp(J.a_V(t,y.w,y.b),$.Fv())
u=y.e
r.G(0,new Q.hK(s,u))
v.G(0,new Q.hK(s,u))}return P.S(null,w)}})
return P.T($async$Aq,w)},
OT(d){return $.awS.bo(0,d.a.b,new Q.abj(d))},
Ge(d,e){if(d!=null)this.e=new Y.tp(d,$.Fv())
return this},
iC(){var $async$iC=P.P(function(d,e){switch(d){case 2:s=v
x=s.pop()
break
case 1:t=e
x=u}while(true)switch(x){case 0:x=3
v=[1]
return P.fX(P.aED(r.e),$async$iC,w)
case 3:q=$.awT.h(0,r.gNS(r).a.b)
q.toString
p=H.t(q).i("fs<1>")
x=4
v=[1]
return P.fX(P.D3(new P.jd(new Q.abk(),new P.fs(q,p),p.i("jd<bY.T,d8?>"))),$async$iC,w)
case 4:case 1:return P.fX(null,0,w)
case 2:return P.fX(t,1,w)}})
var x=0,w=P.ayu($async$iC,y.k),v,u=2,t,s=[],r=this,q,p
return P.ayx(w)}}
Q.hK.prototype={}
Y.tp.prototype={}
N.a5X.prototype={
gahM(){var x=this.b
if($.a5Y.h(0,x)!=null&&J.as($.a5Y.h(0,x),this.c)!=null)return J.as($.a5Y.h(0,x),this.c)
x=y.b
return P.r(x,x)}}
X.rN.prototype={
wN(d){var x=0,w=P.U(y.b),v
var $async$wN=P.P(function(e,f){if(e===1)return P.R(f,w)
while(true)switch(x){case 0:if($.G==null)N.axO()
$.G.toString
v=new X.a5T()
$.aFY.p(0,C.f.j(v.gu(v)),v)
$.aJS().bq(C.ao,"Added RoutePathListeners: "+C.f.j(v.gu(v)),null,null)
x=2
return P.ac(K.a60(),$async$wN)
case 2:return P.S(null,w)}})
return P.T($async$wN,w)},
Zi(){this.wN(0).xw(0,new X.a5P())}}
A.Ka.prototype={
gl8(){var x=$.hu
return x.gul()},
RC(){var x=this,w=new A.ff(x.a,x.b,null),v=H.bh("controller")
v.b=new P.fr(new A.a59(x,v,w,null),new A.a5a(x,w,null),y.C)
return J.aMj(v.aU())},
gaH(d){return this.a}}
var z=a.updateTypes(["rM()","j4?(d8?)","~(ep<j4?>)","ph()","d8?(hK<d8>)","~(j4?)"])
A.a5H.prototype={
$0(){var x=this.a
return new A.rM(x,x.a.b,"plugins.flutter.io/firebase_auth",$.aHH())},
$S:z+0}
A.a5I.prototype={
$1(d){if(d==null)return null
E.eM(d,$.Fv())
return new A.j4(d)},
$S:z+1}
A.a5J.prototype={
$1(d){return d.aM(0)},
$S:z+2}
Q.abh.prototype={
$1(d){d.toString
new A.Ka(d,C.aW).RC().lB(0,new Q.abg(this.a,this.b))},
$S:88}
Q.abg.prototype={
$1(d){this.a.Aq(this.b.a.b,d)},
$S:14}
Q.abi.prototype={
$1(d){d.toString
new A.Ka(d,C.aW).RC().lB(0,new Q.abf(this.a,this.b))},
$S:88}
Q.abf.prototype={
$1(d){this.a.Ai(this.b.a.b,d)},
$S:14}
Q.abj.prototype={
$0(){return Q.aQk(this.a)},
$S:z+3}
Q.abk.prototype={
$1(d){return d.a},
$S:z+4}
X.a5T.prototype={
$1(d){var x=$.azm(),w=d.b
x.jq(0,H.fY(H.E(d.c.xX()).a,null),w).aS(0,new X.a5Q(d),y.v).mm(new X.a5R(),new X.a5S())
x.rF(0,"page_view")},
$S:501}
X.a5Q.prototype={
$1(d){return P.ayZ("firebaseAnalytics.setCurrentScreen(screenName: "+this.a.b+")","firebaseAnalytics.setCurrentScreen")},
$S:52}
X.a5R.prototype={
$1(d){D.auI().$1(": "+H.c(d))},
$S:502}
X.a5S.prototype={
$1(d){return d instanceof F.px},
$S:503}
X.a5P.prototype={
$1(d){var x,w,v,u,t,s="APP_CURRENT_USER"
$.azm().rF(0,"app_open")
x=$.aHG()
w=x.e
if(w==null){w=x.f
v=x.gahM()
u=$.awt
w=(u==null?$.awt=new Q.ph(null,$.a_G()):u).OT(w)
u=J.ak(v)
t=u.h(v,"APP_LANGUAGE_CODE")
w=x.e=w.Ge(u.h(v,s)==null?null:P.tc(u.h(v,s),y.w,y.b),t)}x.a8_(w.iC()).lB(0,new X.a5O())},
$S:3}
X.a5O.prototype={
$1(d){if(d==null)P.nX("User is currently signed out!")
else P.nX("User is signed in!")},
$S:z+5}
A.a59.prototype={
$0(){var x=0,w=P.U(y.v),v=1,u,t=[],s=this,r,q,p,o,n,m
var $async$$0=P.P(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:o=s.a
n=o.a
o.gl8().pq(n,new A.a58(o,s.b))
v=3
x=6
return P.ac(s.c.e0("listen",s.d,!1,y.v),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
m=u
r=H.X(m)
q=H.aB(m)
o=U.bB("while activating platform stream on channel "+n)
U.dp(new U.bL(r,q,"services library",o,null,!1))
x=5
break
case 2:x=1
break
case 5:return P.S(null,w)
case 1:return P.R(u,w)}})
return P.T($async$$0,w)},
$S:32}
A.a58.prototype={
$1(d){return this.SC(d)},
SC(d){var x=0,w=P.U(y.F),v,u=[],t=this,s,r,q
var $async$$1=P.P(function(e,f){if(e===1)return P.R(f,w)
while(true)switch(x){case 0:if(d==null)J.avj(t.b.aU())
else try{J.h3(t.b.aU(),t.a.b.CT(d))}catch(p){q=H.X(p)
if(q instanceof F.px){s=q
t.b.aU().o5(s)}else throw p}v=null
x=1
break
case 1:return P.S(v,w)}})
return P.T($async$$1,w)},
$S:504}
A.a5a.prototype={
$0(){var x=0,w=P.U(y.v),v=1,u,t=[],s=this,r,q,p,o,n,m
var $async$$0=P.P(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:o=s.a
n=o.a
o.gl8().pq(n,null)
v=3
x=6
return P.ac(s.b.e0("cancel",s.c,!1,y.v),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
m=u
r=H.X(m)
q=H.aB(m)
o=U.bB("while de-activating platform stream on channel "+n)
U.dp(new U.bL(r,q,"services library",o,null,!1))
x=5
break
case 2:x=1
break
case 5:return P.S(null,w)
case 1:return P.R(u,w)}})
return P.T($async$$0,w)},
$S:32};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(P.v,[E.a5y,A.j4,Q.hK,X.rN,A.Ka])
w(N.a5X,E.OM)
w(A.rM,N.a5X)
x(H.f3,[A.a5H,Q.abj,A.a59,A.a5a])
x(H.bZ,[A.a5I,A.a5J,Q.abh,Q.abg,Q.abi,Q.abf,Q.abk,X.a5T,X.a5Q,X.a5R,X.a5S,X.a5P,X.a5O,A.a58])
w(Q.ph,L.Kl)
w(Y.tp,B.d8)})()
H.em(b.typeUniverse,JSON.parse('{"tp":{"d8":[]}}'))
var y={c:H.D("hW"),F:H.D("am"),w:H.D("i"),t:H.D("fr<hK<d8>>"),C:H.D("fr<@>"),e:H.D("hK<d8>"),b:H.D("@"),k:H.D("d8?"),v:H.D("~")};(function constants(){var x=a.makeConstList
C.Sd=H.a(x(["ad_activeview","ad_click","ad_exposure","ad_impression","ad_query","adunit_exposure","app_clear_data","app_uninstall","app_update","error","first_open","first_visit","in_app_purchase","notification_dismiss","notification_foreground","notification_open","notification_receive","os_update","session_start","user_engagement"]),H.D("o<i>"))
C.zh=new A.ff("plugins.flutter.io/firebase_auth",C.aW,null)
C.a6K=H.ai("j4")
C.lA=new Q.hK(null,y.e)})();(function staticFields(){$.aPd=P.r(y.w,H.D("rM"))
$.awS=P.r(y.w,H.D("ph"))
$.aCP=P.r(y.w,H.D("hy<hK<d8>>"))
$.aCQ=P.r(y.w,H.D("hy<hK<d8>>"))
$.awT=P.r(y.w,H.D("hy<hK<d8>>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"aZp","aHH",function(){return new P.v()})
x($,"aZn","azm",function(){var w=$.aHD()
U.fZ()
return new E.a5y(w,null)})
x($,"aZm","aHG",function(){return A.aPc(K.aPg())})
x($,"b28","aJS",function(){return F.i0(Z.aBA("Router"))})})()}
$__dart_deferred_initializers__["w/8+TgL7PvkYnjCFKsChdLsTKsk="] = $__dart_deferred_initializers__.current

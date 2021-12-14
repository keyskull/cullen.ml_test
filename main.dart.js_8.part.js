self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b1t(d,e){var w,v=new B.a6($.X,x.f),u=new B.aK(v,x.D),t=$.aO6().$0()
C.ij.DL(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.bY(t,"progress",new A.ayy(e),!1,w)
B.bY(t,"error",new A.ayz(u,d),!1,w)
B.bY(t,"load",new A.ayA(t,u,d),!1,w)
t.send()
return v},
axD:function axD(){},
ayy:function ayy(d){this.a=d},
ayz:function ayz(d,e){this.a=d
this.b=e},
ayA:function ayA(d,e,f){this.a=d
this.b=e
this.c=f},
b1S(d,e){var w=B.aS()
if(w)return A.b1t(d.j(0),e)
else return A.aZi(new A.ayE(d,e),x.s)},
aZi(d,e){var w=new B.a6($.X,e.i("a6<0>")),v=d.$1(new A.awb(new B.ER(w,e.i("ER<0>")),e))
if(v!=null)throw B.c(B.cW(v))
return w},
ayE:function ayE(d,e){this.a=d
this.b=e},
awb:function awb(d,e){this.a=d
this.b=e},
tP:function tP(d,e){this.a=d
this.b=e},
aeE:function aeE(d){this.a=d},
ka:function ka(d,e){this.a=d
this.b=e},
VS:function VS(){}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[23],A)
B=c[0]
J=c[1]
C=c[2]
A.tP.prototype={
od(d){return new B.bf(this,x.B)},
qQ(d,e,f){var w=null,v=B.aI0(w,w,w,x.h)
return B.aAT(new B.ha(v,B.u(v).i("ha<1>")),this.a_v(e,f,v),e.a,w,e.b)},
a_v(d,e,f){return A.b1S(B.anh().V(d.a),new A.aeE(f))},
k(d,e){if(e==null)return!1
if(J.a_(e)!==B.D(this))return!1
return e instanceof A.tP&&e.a===this.a&&e.b===this.b},
gu(d){return B.Z(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.ka.prototype={}
A.VS.prototype={}
var z=a.updateTypes([])
A.axD.prototype={
$0(){return new XMLHttpRequest()},
$S:486}
A.ayy.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:55}
A.ayz.prototype={
$1(d){this.a.h2(new B.tj(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:55}
A.ayA.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.h2(new B.tj(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.cY(x.n.a(B.aC7(o.response)),0,null)
v=B.aFd(w,p.c)
p.b.cc(0,v)}catch(q){u=B.a4(q)
t=B.ay(q)
p.b.kF(u,t)}},
$S:55}
A.ayE.prototype={
$1(d){d.$1(new B.yI(this.a.j(0),this.b))
return null},
$S:487}
A.awb.prototype={
$1(d){var w=this.a
if(d==null)w.h2(new B.D3("operation failed"))
else w.cc(0,d)},
$S(){return this.b.i("~(0)")}}
A.aeE.prototype={
$2(d,e){this.a.F(0,new A.ka(d,e))},
$S:168};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.axD,B.eX)
u(B.c3,[A.ayy,A.ayz,A.ayA,A.ayE,A.awb])
v(A.tP,B.ef)
v(A.aeE,B.fS)
v(A.VS,B.v)
v(A.ka,A.VS)
w(A.VS,B.aq)})()
B.dK(b.typeUniverse,JSON.parse('{"tP":{"ef":["aAV"],"ef.T":"aAV"},"aAV":{"ef":["aAV"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.B("oy"),s:B.B("hk"),h:B.B("ka"),g:B.B("h5"),B:B.B("bf<tP>"),D:B.B("aK<hk>"),f:B.B("a6<hk>")};(function lazyInitializers(){var w=a.lazy
w($,"b6C","aO6",()=>new A.axD())})()}
$__dart_deferred_initializers__["0ogvzjmKOzqdsyBT9ckGfHuLEO0="] = $__dart_deferred_initializers__.current

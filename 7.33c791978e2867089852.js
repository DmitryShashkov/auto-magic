(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nvDW:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),a=u("AytR"),i=u("RCfQ"),s=function(){function l(l){this.document=l}return l.prototype.signIn=function(){var l=new URL("https://accounts.google.com/o/oauth2/v2/auth");l.searchParams.append("access_type","offline"),l.searchParams.append("scope",["https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile","openid"].join(" ")),l.searchParams.append("response_type","code"),l.searchParams.append("client_id",a.a),l.searchParams.append("redirect_uri",a.b+"/"+i.a.CompleteSignIn.ROOT),this.document.location.href=l.href},l}(),r=u("Ip0R"),c=e.kb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.yb(2,[(l()(),e.mb(0,0,null,null,2,"div",[["class","home"]],null,null,null,null,null)),(l()(),e.mb(1,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.signIn()&&e),e},null,null)),(l()(),e.xb(-1,null,["Sign In"])),(l()(),e.mb(3,0,null,null,1,"div",[["style","font-size: 48px; font-family: Matrix, sans-serif; font-weight: 400;"]],null,null,null,null,null)),(l()(),e.xb(-1,null,[" Example\n"])),(l()(),e.mb(5,0,null,null,1,"div",[["style","font-size: 48px; font-family: Matrix, sans-serif; font-weight: 600;"]],null,null,null,null,null)),(l()(),e.xb(-1,null,[" Example\n"])),(l()(),e.mb(7,0,null,null,1,"div",[["style","font-size: 48px; font-family: Beleren, sans-serif; font-weight: 600;"]],null,null,null,null,null)),(l()(),e.xb(-1,null,[" Example\n"])),(l()(),e.mb(9,0,null,null,1,"div",[["style","font-size: 48px; font-family: MagicMedieval, sans-serif;"]],null,null,null,null,null)),(l()(),e.xb(-1,null,[" Example\n"]))],null,null)}function f(l){return e.yb(0,[(l()(),e.mb(0,0,null,null,1,"am-home",[],null,null,null,p,c)),e.lb(1,49152,null,0,s,[r.c],null,null)],null,null)}var m=e.ib("am-home",s,f,{},{},[]),b=u("ZYCi");u.d(n,"HomeModuleNgFactory",function(){return h});var h=e.jb(t,[],function(l){return e.ub([e.vb(512,e.j,e.V,[[8,[o.a,m]],[3,e.j],e.w]),e.vb(4608,r.i,r.h,[e.t,[2,r.o]]),e.vb(1073742336,r.b,r.b,[]),e.vb(1073742336,b.l,b.l,[[2,b.q],[2,b.k]]),e.vb(1073742336,t,t,[]),e.vb(1024,b.i,function(){return[[{path:"",pathMatch:"full",component:s}]]},[])])})}}]);
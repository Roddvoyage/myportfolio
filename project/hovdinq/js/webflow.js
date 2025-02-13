
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(()=>{var he=(t,c)=>()=>(c||t((c={exports:{}}).exports,c),c.exports);var Ue=he(()=>{"use strict";window.tram=function(t){function c(e,r){var i=new ie.Bare;return i.init(e,r)}function d(e){return e.replace(/[A-Z]/g,function(r){return"-"+r.toLowerCase()})}function k(e){var r=parseInt(e.slice(1),16),i=r>>16&255,o=r>>8&255,u=255&r;return[i,o,u]}function D(e,r,i){return"#"+(1<<24|e<<16|r<<8|i).toString(16).slice(1)}function b(){}function q(e,r){$("Type warning: Expected: ["+e+"] Got: ["+typeof r+"] "+r)}function C(e,r,i){$("Units do not match ["+e+"]: "+r+", "+i)}function z(e,r,i){if(r!==void 0&&(i=r),e===void 0)return i;var o=i;return De.test(e)||!Re.test(e)?o=parseInt(e,10):Re.test(e)&&(o=1e3*parseFloat(e)),0>o&&(o=0),o===o?o:i}function $(e){Z.debug&&window&&window.console.warn(e)}function j(e){for(var r=-1,i=e?e.length:0,o=[];++r<i;){var u=e[r];u&&o.push(u)}return o}var W=function(e,r,i){function o(T){return typeof T=="object"}function u(T){return typeof T=="function"}function s(){}function x(T,Q){function l(){var ae=new S;return u(ae.init)&&ae.init.apply(ae,arguments),ae}function S(){}Q===i&&(Q=T,T=Object),l.Bare=S;var M,te=s[e]=T[e],be=S[e]=l[e]=new s;return be.constructor=l,l.mixin=function(ae){return S[e]=l[e]=x(l,ae)[e],l},l.open=function(ae){if(M={},u(ae)?M=ae.call(l,be,te,l,T):o(ae)&&(M=ae),o(M))for(var Fe in M)r.call(M,Fe)&&(be[Fe]=M[Fe]);return u(be.init)||(be.init=T),l},l.open(Q)}return x}("prototype",{}.hasOwnProperty),X={ease:["ease",function(e,r,i,o){var u=(e/=o)*e,s=u*e;return r+i*(-2.75*s*u+11*u*u+-15.5*s+8*u+.25*e)}],"ease-in":["ease-in",function(e,r,i,o){var u=(e/=o)*e,s=u*e;return r+i*(-1*s*u+3*u*u+-3*s+2*u)}],"ease-out":["ease-out",function(e,r,i,o){var u=(e/=o)*e,s=u*e;return r+i*(.3*s*u+-1.6*u*u+2.2*s+-1.8*u+1.9*e)}],"ease-in-out":["ease-in-out",function(e,r,i,o){var u=(e/=o)*e,s=u*e;return r+i*(2*s*u+-5*u*u+2*s+2*u)}],linear:["linear",function(e,r,i,o){return i*e/o+r}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(e,r,i,o){return i*(e/=o)*e+r}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(e,r,i,o){return-i*(e/=o)*(e-2)+r}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(e,r,i,o){return(e/=o/2)<1?i/2*e*e+r:-i/2*(--e*(e-2)-1)+r}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(e,r,i,o){return i*(e/=o)*e*e+r}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(e,r,i,o){return i*((e=e/o-1)*e*e+1)+r}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(e,r,i,o){return(e/=o/2)<1?i/2*e*e*e+r:i/2*((e-=2)*e*e+2)+r}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(e,r,i,o){return i*(e/=o)*e*e*e+r}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(e,r,i,o){return-i*((e=e/o-1)*e*e*e-1)+r}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(e,r,i,o){return(e/=o/2)<1?i/2*e*e*e*e+r:-i/2*((e-=2)*e*e*e-2)+r}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(e,r,i,o){return i*(e/=o)*e*e*e*e+r}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(e,r,i,o){return i*((e=e/o-1)*e*e*e*e+1)+r}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(e,r,i,o){return(e/=o/2)<1?i/2*e*e*e*e*e+r:i/2*((e-=2)*e*e*e*e+2)+r}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(e,r,i,o){return-i*Math.cos(e/o*(Math.PI/2))+i+r}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(e,r,i,o){return i*Math.sin(e/o*(Math.PI/2))+r}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(e,r,i,o){return-i/2*(Math.cos(Math.PI*e/o)-1)+r}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(e,r,i,o){return e===0?r:i*Math.pow(2,10*(e/o-1))+r}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(e,r,i,o){return e===o?r+i:i*(-Math.pow(2,-10*e/o)+1)+r}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(e,r,i,o){return e===0?r:e===o?r+i:(e/=o/2)<1?i/2*Math.pow(2,10*(e-1))+r:i/2*(-Math.pow(2,-10*--e)+2)+r}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(e,r,i,o){return-i*(Math.sqrt(1-(e/=o)*e)-1)+r}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(e,r,i,o){return i*Math.sqrt(1-(e=e/o-1)*e)+r}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(e,r,i,o){return(e/=o/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+r:i/2*(Math.sqrt(1-(e-=2)*e)+1)+r}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(e,r,i,o,u){return u===void 0&&(u=1.70158),i*(e/=o)*e*((u+1)*e-u)+r}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(e,r,i,o,u){return u===void 0&&(u=1.70158),i*((e=e/o-1)*e*((u+1)*e+u)+1)+r}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(e,r,i,o,u){return u===void 0&&(u=1.70158),(e/=o/2)<1?i/2*e*e*(((u*=1.525)+1)*e-u)+r:i/2*((e-=2)*e*(((u*=1.525)+1)*e+u)+2)+r}]},_={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},Y=document,K=window,N="bkwld-tram",I=/[\-\.0-9]/g,L=/[A-Z]/,p="number",H=/^(rgb|#)/,P=/(em|cm|mm|in|pt|pc|px)$/,B=/(em|cm|mm|in|pt|pc|px|%)$/,re=/(deg|rad|turn)$/,ue="unitless",de=/(all|none) 0s ease 0s/,Ae=/^(width|height)$/,ve=" ",g=Y.createElement("a"),a=["Webkit","Moz","O","ms"],f=["-webkit-","-moz-","-o-","-ms-"],w=function(e){if(e in g.style)return{dom:e,css:e};var r,i,o="",u=e.split("-");for(r=0;r<u.length;r++)o+=u[r].charAt(0).toUpperCase()+u[r].slice(1);for(r=0;r<a.length;r++)if(i=a[r]+o,i in g.style)return{dom:i,css:f[r]+e}},m=c.support={bind:Function.prototype.bind,transform:w("transform"),transition:w("transition"),backface:w("backface-visibility"),timing:w("transition-timing-function")};if(m.transition){var R=m.timing.dom;if(g.style[R]=X["ease-in-back"][0],!g.style[R])for(var O in _)X[O][0]=_[O]}var G=c.frame=function(){var e=K.requestAnimationFrame||K.webkitRequestAnimationFrame||K.mozRequestAnimationFrame||K.oRequestAnimationFrame||K.msRequestAnimationFrame;return e&&m.bind?e.bind(K):function(r){K.setTimeout(r,16)}}(),fe=c.now=function(){var e=K.performance,r=e&&(e.now||e.webkitNow||e.msNow||e.mozNow);return r&&m.bind?r.bind(e):Date.now||function(){return+new Date}}(),ye=W(function(e){function r(E,F){var ee=j((""+E).split(ve)),U=ee[0];F=F||{};var ce=v[U];if(!ce)return $("Unsupported property: "+U);if(!F.weak||!this.props[U]){var me=ce[0],le=this.props[U];return le||(le=this.props[U]=new me.Bare),le.init(this.$el,ee,ce,F),le}}function i(E,F,ee){if(E){var U=typeof E;if(F||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),U=="number"&&F)return this.timer=new ke({duration:E,context:this,complete:s}),void(this.active=!0);if(U=="string"&&F){switch(E){case"hide":l.call(this);break;case"stop":x.call(this);break;case"redraw":S.call(this);break;default:r.call(this,E,ee&&ee[1])}return s.call(this)}if(U=="function")return void E.call(this,this);if(U=="object"){var ce=0;be.call(this,E,function(ne,Mt){ne.span>ce&&(ce=ne.span),ne.stop(),ne.animate(Mt)},function(ne){"wait"in ne&&(ce=z(ne.wait,0))}),te.call(this),ce>0&&(this.timer=new ke({duration:ce,context:this}),this.active=!0,F&&(this.timer.complete=s));var me=this,le=!1,Ne={};G(function(){be.call(me,E,function(ne){ne.active&&(le=!0,Ne[ne.name]=ne.nextStyle)}),le&&me.$el.css(Ne)})}}}function o(E){E=z(E,0),this.active?this.queue.push({options:E}):(this.timer=new ke({duration:E,context:this,complete:s}),this.active=!0)}function u(E){return this.active?(this.queue.push({options:E,args:arguments}),void(this.timer.complete=s)):$("No active transition timer. Use start() or wait() before then().")}function s(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var E=this.queue.shift();i.call(this,E.options,!0,E.args)}}function x(E){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var F;typeof E=="string"?(F={},F[E]=1):F=typeof E=="object"&&E!=null?E:this.props,be.call(this,F,ae),te.call(this)}function T(E){x.call(this,E),be.call(this,E,Fe,qt)}function Q(E){typeof E!="string"&&(E="block"),this.el.style.display=E}function l(){x.call(this),this.el.style.display="none"}function S(){this.el.offsetHeight}function M(){x.call(this),t.removeData(this.el,N),this.$el=this.el=null}function te(){var E,F,ee=[];this.upstream&&ee.push(this.upstream);for(E in this.props)F=this.props[E],F.active&&ee.push(F.string);ee=ee.join(","),this.style!==ee&&(this.style=ee,this.el.style[m.transition.dom]=ee)}function be(E,F,ee){var U,ce,me,le,Ne=F!==ae,ne={};for(U in E)me=E[U],U in J?(ne.transform||(ne.transform={}),ne.transform[U]=me):(L.test(U)&&(U=d(U)),U in v?ne[U]=me:(le||(le={}),le[U]=me));for(U in ne){if(me=ne[U],ce=this.props[U],!ce){if(!Ne)continue;ce=r.call(this,U)}F.call(this,ce,me)}ee&&le&&ee.call(this,le)}function ae(E){E.stop()}function Fe(E,F){E.set(F)}function qt(E){this.$el.css(E)}function pe(E,F){e[E]=function(){return this.children?It.call(this,F,arguments):(this.el&&F.apply(this,arguments),this)}}function It(E,F){var ee,U=this.children.length;for(ee=0;U>ee;ee++)E.apply(this.children[ee],F);return this}e.init=function(E){if(this.$el=t(E),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,Z.keepInherited&&!Z.fallback){var F=h(this.el,"transition");F&&!de.test(F)&&(this.upstream=F)}m.backface&&Z.hideBackface&&n(this.el,m.backface.css,"hidden")},pe("add",r),pe("start",i),pe("wait",o),pe("then",u),pe("next",s),pe("stop",x),pe("set",T),pe("show",Q),pe("hide",l),pe("redraw",S),pe("destroy",M)}),ie=W(ye,function(e){function r(i,o){var u=t.data(i,N)||t.data(i,N,new ye.Bare);return u.el||u.init(i),o?u.start(o):u}e.init=function(i,o){var u=t(i);if(!u.length)return this;if(u.length===1)return r(u[0],o);var s=[];return u.each(function(x,T){s.push(r(T,o))}),this.children=s,this}}),A=W(function(e){function r(){var s=this.get();this.update("auto");var x=this.get();return this.update(s),x}function i(s,x,T){return x!==void 0&&(T=x),s in X?s:T}function o(s){var x=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(s);return(x?D(x[1],x[2],x[3]):s).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var u={duration:500,ease:"ease",delay:0};e.init=function(s,x,T,Q){this.$el=s,this.el=s[0];var l=x[0];T[2]&&(l=T[2]),y[l]&&(l=y[l]),this.name=l,this.type=T[1],this.duration=z(x[1],this.duration,u.duration),this.ease=i(x[2],this.ease,u.ease),this.delay=z(x[3],this.delay,u.delay),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=Ae.test(this.name),this.unit=Q.unit||this.unit||Z.defaultUnit,this.angle=Q.angle||this.angle||Z.defaultAngle,Z.fallback||Q.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+ve+this.duration+"ms"+(this.ease!="ease"?ve+X[this.ease][0]:"")+(this.delay?ve+this.delay+"ms":""))},e.set=function(s){s=this.convert(s,this.type),this.update(s),this.redraw()},e.transition=function(s){this.active=!0,s=this.convert(s,this.type),this.auto&&(this.el.style[this.name]=="auto"&&(this.update(this.get()),this.redraw()),s=="auto"&&(s=r.call(this))),this.nextStyle=s},e.fallback=function(s){var x=this.el.style[this.name]||this.convert(this.get(),this.type);s=this.convert(s,this.type),this.auto&&(x=="auto"&&(x=this.convert(this.get(),this.type)),s=="auto"&&(s=r.call(this))),this.tween=new Ce({from:x,to:s,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},e.get=function(){return h(this.el,this.name)},e.update=function(s){n(this.el,this.name,s)},e.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,n(this.el,this.name,this.get()));var s=this.tween;s&&s.context&&s.destroy()},e.convert=function(s,x){if(s=="auto"&&this.auto)return s;var T,Q=typeof s=="number",l=typeof s=="string";switch(x){case p:if(Q)return s;if(l&&s.replace(I,"")==="")return+s;T="number(unitless)";break;case H:if(l){if(s===""&&this.original)return this.original;if(x.test(s))return s.charAt(0)=="#"&&s.length==7?s:o(s)}T="hex or rgb string";break;case P:if(Q)return s+this.unit;if(l&&x.test(s))return s;T="number(px) or string(unit)";break;case B:if(Q)return s+this.unit;if(l&&x.test(s))return s;T="number(px) or string(unit or %)";break;case re:if(Q)return s+this.angle;if(l&&x.test(s))return s;T="number(deg) or string(angle)";break;case ue:if(Q||l&&B.test(s))return s;T="number(unitless) or string(unit or %)"}return q(T,s),s},e.redraw=function(){this.el.offsetHeight}}),oe=W(A,function(e,r){e.init=function(){r.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),H))}}),Te=W(A,function(e,r){e.init=function(){r.init.apply(this,arguments),this.animate=this.fallback},e.get=function(){return this.$el[this.name]()},e.update=function(i){this.$el[this.name](i)}}),qe=W(A,function(e,r){function i(o,u){var s,x,T,Q,l;for(s in o)Q=J[s],T=Q[0],x=Q[1]||s,l=this.convert(o[s],T),u.call(this,x,l,T)}e.init=function(){r.init.apply(this,arguments),this.current||(this.current={},J.perspective&&Z.perspective&&(this.current.perspective=Z.perspective,n(this.el,this.name,this.style(this.current)),this.redraw()))},e.set=function(o){i.call(this,o,function(u,s){this.current[u]=s}),n(this.el,this.name,this.style(this.current)),this.redraw()},e.transition=function(o){var u=this.values(o);this.tween=new Pe({current:this.current,values:u,duration:this.duration,delay:this.delay,ease:this.ease});var s,x={};for(s in this.current)x[s]=s in u?u[s]:this.current[s];this.active=!0,this.nextStyle=this.style(x)},e.fallback=function(o){var u=this.values(o);this.tween=new Pe({current:this.current,values:u,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},e.update=function(){n(this.el,this.name,this.style(this.current))},e.style=function(o){var u,s="";for(u in o)s+=u+"("+o[u]+") ";return s},e.values=function(o){var u,s={};return i.call(this,o,function(x,T,Q){s[x]=T,this.current[x]===void 0&&(u=0,~x.indexOf("scale")&&(u=1),this.current[x]=this.convert(u,Q))}),s}}),Ce=W(function(e){function r(l){T.push(l)===1&&G(i)}function i(){var l,S,M,te=T.length;if(te)for(G(i),S=fe(),l=te;l--;)M=T[l],M&&M.render(S)}function o(l){var S,M=t.inArray(l,T);M>=0&&(S=T.slice(M+1),T.length=M,S.length&&(T=T.concat(S)))}function u(l){return Math.round(l*Q)/Q}function s(l,S,M){return D(l[0]+M*(S[0]-l[0]),l[1]+M*(S[1]-l[1]),l[2]+M*(S[2]-l[2]))}var x={ease:X.ease[1],from:0,to:1};e.init=function(l){this.duration=l.duration||0,this.delay=l.delay||0;var S=l.ease||x.ease;X[S]&&(S=X[S][1]),typeof S!="function"&&(S=x.ease),this.ease=S,this.update=l.update||b,this.complete=l.complete||b,this.context=l.context||this,this.name=l.name;var M=l.from,te=l.to;M===void 0&&(M=x.from),te===void 0&&(te=x.to),this.unit=l.unit||"",typeof M=="number"&&typeof te=="number"?(this.begin=M,this.change=te-M):this.format(te,M),this.value=this.begin+this.unit,this.start=fe(),l.autoplay!==!1&&this.play()},e.play=function(){this.active||(this.start||(this.start=fe()),this.active=!0,r(this))},e.stop=function(){this.active&&(this.active=!1,o(this))},e.render=function(l){var S,M=l-this.start;if(this.delay){if(M<=this.delay)return;M-=this.delay}if(M<this.duration){var te=this.ease(M,0,1,this.duration);return S=this.startRGB?s(this.startRGB,this.endRGB,te):u(this.begin+te*this.change),this.value=S+this.unit,void this.update.call(this.context,this.value)}S=this.endHex||this.begin+this.change,this.value=S+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},e.format=function(l,S){if(S+="",l+="",l.charAt(0)=="#")return this.startRGB=k(S),this.endRGB=k(l),this.endHex=l,this.begin=0,void(this.change=1);if(!this.unit){var M=S.replace(I,""),te=l.replace(I,"");M!==te&&C("tween",S,l),this.unit=M}S=parseFloat(S),l=parseFloat(l),this.begin=this.value=S,this.change=l-S},e.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=b};var T=[],Q=1e3}),ke=W(Ce,function(e){e.init=function(r){this.duration=r.duration||0,this.complete=r.complete||b,this.context=r.context,this.play()},e.render=function(r){var i=r-this.start;i<this.duration||(this.complete.call(this.context),this.destroy())}}),Pe=W(Ce,function(e,r){e.init=function(i){this.context=i.context,this.update=i.update,this.tweens=[],this.current=i.current;var o,u;for(o in i.values)u=i.values[o],this.current[o]!==u&&this.tweens.push(new Ce({name:o,from:this.current[o],to:u,duration:i.duration,delay:i.delay,ease:i.ease,autoplay:!1}));this.play()},e.render=function(i){var o,u,s=this.tweens.length,x=!1;for(o=s;o--;)u=this.tweens[o],u.context&&(u.render(i),this.current[u.name]=u.value,x=!0);return x?void(this.update&&this.update.call(this.context)):this.destroy()},e.destroy=function(){if(r.destroy.call(this),this.tweens){var i,o=this.tweens.length;for(i=o;i--;)this.tweens[i].destroy();this.tweens=null,this.current=null}}}),Z=c.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!m.transition,agentTests:[]};c.fallback=function(e){if(!m.transition)return Z.fallback=!0;Z.agentTests.push("("+e+")");var r=new RegExp(Z.agentTests.join("|"),"i");Z.fallback=r.test(navigator.userAgent)},c.fallback("6.0.[2-5] Safari"),c.tween=function(e){return new Ce(e)},c.delay=function(e,r,i){return new ke({complete:r,duration:e,context:i})},t.fn.tram=function(e){return c.call(null,this,e)};var n=t.style,h=t.css,y={transform:m.transform&&m.transform.css},v={color:[oe,H],background:[oe,H,"background-color"],"outline-color":[oe,H],"border-color":[oe,H],"border-top-color":[oe,H],"border-right-color":[oe,H],"border-bottom-color":[oe,H],"border-left-color":[oe,H],"border-width":[A,P],"border-top-width":[A,P],"border-right-width":[A,P],"border-bottom-width":[A,P],"border-left-width":[A,P],"border-spacing":[A,P],"letter-spacing":[A,P],margin:[A,P],"margin-top":[A,P],"margin-right":[A,P],"margin-bottom":[A,P],"margin-left":[A,P],padding:[A,P],"padding-top":[A,P],"padding-right":[A,P],"padding-bottom":[A,P],"padding-left":[A,P],"outline-width":[A,P],opacity:[A,p],top:[A,B],right:[A,B],bottom:[A,B],left:[A,B],"font-size":[A,B],"text-indent":[A,B],"word-spacing":[A,B],width:[A,B],"min-width":[A,B],"max-width":[A,B],height:[A,B],"min-height":[A,B],"max-height":[A,B],"line-height":[A,ue],"scroll-top":[Te,p,"scrollTop"],"scroll-left":[Te,p,"scrollLeft"]},J={};m.transform&&(v.transform=[qe],J={x:[B,"translateX"],y:[B,"translateY"],rotate:[re],rotateX:[re],rotateY:[re],scale:[p],scaleX:[p],scaleY:[p],skew:[re],skewX:[re],skewY:[re]}),m.transform&&m.backface&&(J.z=[B,"translateZ"],J.rotateZ=[re],J.scaleZ=[p],J.perspective=[P]);var De=/ms/,Re=/s|\./;return t.tram=c}(window.jQuery)});var et=he((Jt,je)=>{"use strict";var zt=window.$,Pt=Ue()&&zt.tram;je.exports=function(){var t={};t.VERSION="1.6.0-Webflow";var c={},d=Array.prototype,k=Object.prototype,D=Function.prototype,b=d.push,q=d.slice,C=d.concat,z=k.toString,$=k.hasOwnProperty,j=d.forEach,W=d.map,X=d.reduce,_=d.reduceRight,Y=d.filter,K=d.every,N=d.some,I=d.indexOf,L=d.lastIndexOf,p=Array.isArray,H=Object.keys,P=D.bind,B=t.each=t.forEach=function(a,f,w){if(a==null)return a;if(j&&a.forEach===j)a.forEach(f,w);else if(a.length===+a.length){for(var m=0,R=a.length;m<R;m++)if(f.call(w,a[m],m,a)===c)return}else for(var O=t.keys(a),m=0,R=O.length;m<R;m++)if(f.call(w,a[O[m]],O[m],a)===c)return;return a};t.map=t.collect=function(a,f,w){var m=[];return a==null?m:W&&a.map===W?a.map(f,w):(B(a,function(R,O,G){m.push(f.call(w,R,O,G))}),m)},t.find=t.detect=function(a,f,w){var m;return re(a,function(R,O,G){if(f.call(w,R,O,G))return m=R,!0}),m},t.filter=t.select=function(a,f,w){var m=[];return a==null?m:Y&&a.filter===Y?a.filter(f,w):(B(a,function(R,O,G){f.call(w,R,O,G)&&m.push(R)}),m)};var re=t.some=t.any=function(a,f,w){f||(f=t.identity);var m=!1;return a==null?m:N&&a.some===N?a.some(f,w):(B(a,function(R,O,G){if(m||(m=f.call(w,R,O,G)))return c}),!!m)};t.contains=t.include=function(a,f){return a==null?!1:I&&a.indexOf===I?a.indexOf(f)!=-1:re(a,function(w){return w===f})},t.delay=function(a,f){var w=q.call(arguments,2);return setTimeout(function(){return a.apply(null,w)},f)},t.defer=function(a){return t.delay.apply(t,[a,1].concat(q.call(arguments,1)))},t.throttle=function(a){var f,w,m;return function(){f||(f=!0,w=arguments,m=this,Pt.frame(function(){f=!1,a.apply(m,w)}))}},t.debounce=function(a,f,w){var m,R,O,G,fe,ye=function(){var ie=t.now()-G;ie<f?m=setTimeout(ye,f-ie):(m=null,w||(fe=a.apply(O,R),O=R=null))};return function(){O=this,R=arguments,G=t.now();var ie=w&&!m;return m||(m=setTimeout(ye,f)),ie&&(fe=a.apply(O,R),O=R=null),fe}},t.defaults=function(a){if(!t.isObject(a))return a;for(var f=1,w=arguments.length;f<w;f++){var m=arguments[f];for(var R in m)a[R]===void 0&&(a[R]=m[R])}return a},t.keys=function(a){if(!t.isObject(a))return[];if(H)return H(a);var f=[];for(var w in a)t.has(a,w)&&f.push(w);return f},t.has=function(a,f){return $.call(a,f)},t.isObject=function(a){return a===Object(a)},t.now=Date.now||function(){return new Date().getTime()},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var ue=/(.)^/,de={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Ae=/\\|'|\r|\n|\u2028|\u2029/g,ve=function(a){return"\\"+de[a]},g=/^\s*(\w|\$)+\s*$/;return t.template=function(a,f,w){!f&&w&&(f=w),f=t.defaults({},f,t.templateSettings);var m=RegExp([(f.escape||ue).source,(f.interpolate||ue).source,(f.evaluate||ue).source].join("|")+"|$","g"),R=0,O="__p+='";a.replace(m,function(ie,A,oe,Te,qe){return O+=a.slice(R,qe).replace(Ae,ve),R=qe+ie.length,A?O+=`'+
((__t=(`+A+`))==null?'':_.escape(__t))+
'`:oe?O+=`'+
((__t=(`+oe+`))==null?'':__t)+
'`:Te&&(O+=`';
`+Te+`
__p+='`),ie}),O+=`';
`;var G=f.variable;if(G){if(!g.test(G))throw new Error("variable is not a bare identifier: "+G)}else O=`with(obj||{}){
`+O+`}
`,G="obj";O=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+O+`return __p;
`;var fe;try{fe=new Function(f.variable||"obj","_",O)}catch(ie){throw ie.source=O,ie}var ye=function(ie){return fe.call(this,ie,t)};return ye.source="function("+G+`){
`+O+"}",ye},t}()});var Le=he((jt,at)=>{"use strict";var V={},Ie={},Me=[],Ye=window.Webflow||[],_e=window.jQuery,we=_e(window),Dt=_e(document),xe=_e.isFunction,ge=V._=et(),nt=V.tram=Ue()&&_e.tram,He=!1,Ge=!1;nt.config.hideBackface=!1;nt.config.keepInherited=!0;V.define=function(t,c,d){Ie[t]&&it(Ie[t]);var k=Ie[t]=c(_e,ge,d)||{};return rt(k),k};V.require=function(t){return Ie[t]};function rt(t){V.env()&&(xe(t.design)&&we.on("__wf_design",t.design),xe(t.preview)&&we.on("__wf_preview",t.preview)),xe(t.destroy)&&we.on("__wf_destroy",t.destroy),t.ready&&xe(t.ready)&&Ft(t)}function Ft(t){if(He){t.ready();return}ge.contains(Me,t.ready)||Me.push(t.ready)}function it(t){xe(t.design)&&we.off("__wf_design",t.design),xe(t.preview)&&we.off("__wf_preview",t.preview),xe(t.destroy)&&we.off("__wf_destroy",t.destroy),t.ready&&xe(t.ready)&&Nt(t)}function Nt(t){Me=ge.filter(Me,function(c){return c!==t.ready})}V.push=function(t){if(He){xe(t)&&t();return}Ye.push(t)};V.env=function(t){var c=window.__wf_design,d=typeof c<"u";if(!t)return d;if(t==="design")return d&&c;if(t==="preview")return d&&!c;if(t==="slug")return d&&window.__wf_slug;if(t==="editor")return window.WebflowEditor;if(t==="test")return window.__wf_test;if(t==="frame")return window!==window.top};var We=navigator.userAgent.toLowerCase(),ot=V.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,Wt=V.env.chrome=/chrome/.test(We)&&/Google/.test(navigator.vendor)&&parseInt(We.match(/chrome\/(\d+)\./)[1],10),Ht=V.env.ios=/(ipod|iphone|ipad)/.test(We);V.env.safari=/safari/.test(We)&&!Wt&&!Ht;var Ve;ot&&Dt.on("touchstart mousedown",function(t){Ve=t.target});V.validClick=ot?function(t){return t===Ve||_e.contains(t,Ve)}:function(){return!0};var st="resize.webflow orientationchange.webflow load.webflow",Bt="scroll.webflow "+st;V.resize=Ze(we,st);V.scroll=Ze(we,Bt);V.redraw=Ze();function Ze(t,c){var d=[],k={};return k.up=ge.throttle(function(D){ge.each(d,function(b){b(D)})}),t&&c&&t.on(c,k.up),k.on=function(D){typeof D=="function"&&(ge.contains(d,D)||d.push(D))},k.off=function(D){if(!arguments.length){d=[];return}d=ge.filter(d,function(b){return b!==D})},k}V.location=function(t){window.location=t};V.env()&&(V.location=function(){});V.ready=function(){He=!0,Ge?$t():ge.each(Me,tt),ge.each(Ye,tt),V.resize.up()};function tt(t){xe(t)&&t()}function $t(){Ge=!1,ge.each(Ie,rt)}var Se;V.load=function(t){Se.then(t)};function ut(){Se&&(Se.reject(),we.off("load",Se.resolve)),Se=new _e.Deferred,we.on("load",Se.resolve)}V.destroy=function(t){t=t||{},Ge=!0,we.triggerHandler("__wf_destroy"),t.domready!=null&&(He=t.domready),ge.each(Ie,it),V.resize.off(),V.scroll.off(),V.redraw.off(),Me=[],Ye=[],Se.state()==="pending"&&ut()};_e(V.ready);ut();at.exports=window.Webflow=V});var lt=he((en,ft)=>{"use strict";var ct=Le();ct.define("brand",ft.exports=function(t){var c={},d=document,k=t("html"),D=t("body"),b=".w-webflow-badge",q=window.location,C=/PhantomJS/i.test(navigator.userAgent),z="fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",$;c.ready=function(){var _=k.attr("data-wf-status"),Y=k.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(Y)&&q.hostname!==Y&&(_=!0),_&&!C&&($=$||W(),X(),setTimeout(X,500),t(d).off(z,j).on(z,j))};function j(){var _=d.fullScreen||d.mozFullScreen||d.webkitIsFullScreen||d.msFullscreenElement||!!d.webkitFullscreenElement;t($).attr("style",_?"display: none !important;":"")}function W(){var _=t('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),Y=t("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt","").css({marginRight:"4px",width:"26px"}),K=t("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt","Made in Webflow");return _.append(Y,K),_[0]}function X(){var _=D.children(b),Y=_.length&&_.get(0)===$,K=ct.env("editor");if(Y){K&&_.remove();return}_.length&&_.remove(),K||D.append($)}return c})});var dt=he((tn,ht)=>{"use strict";var Xt=Le();Xt.define("focus-visible",ht.exports=function(){function t(d){var k=!0,D=!1,b=null,q={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function C(p){return!!(p&&p!==document&&p.nodeName!=="HTML"&&p.nodeName!=="BODY"&&"classList"in p&&"contains"in p.classList)}function z(p){var H=p.type,P=p.tagName;return!!(P==="INPUT"&&q[H]&&!p.readOnly||P==="TEXTAREA"&&!p.readOnly||p.isContentEditable)}function $(p){p.getAttribute("data-wf-focus-visible")||p.setAttribute("data-wf-focus-visible","true")}function j(p){p.getAttribute("data-wf-focus-visible")&&p.removeAttribute("data-wf-focus-visible")}function W(p){p.metaKey||p.altKey||p.ctrlKey||(C(d.activeElement)&&$(d.activeElement),k=!0)}function X(){k=!1}function _(p){C(p.target)&&(k||z(p.target))&&$(p.target)}function Y(p){C(p.target)&&p.target.hasAttribute("data-wf-focus-visible")&&(D=!0,window.clearTimeout(b),b=window.setTimeout(function(){D=!1},100),j(p.target))}function K(){document.visibilityState==="hidden"&&(D&&(k=!0),N())}function N(){document.addEventListener("mousemove",L),document.addEventListener("mousedown",L),document.addEventListener("mouseup",L),document.addEventListener("pointermove",L),document.addEventListener("pointerdown",L),document.addEventListener("pointerup",L),document.addEventListener("touchmove",L),document.addEventListener("touchstart",L),document.addEventListener("touchend",L)}function I(){document.removeEventListener("mousemove",L),document.removeEventListener("mousedown",L),document.removeEventListener("mouseup",L),document.removeEventListener("pointermove",L),document.removeEventListener("pointerdown",L),document.removeEventListener("pointerup",L),document.removeEventListener("touchmove",L),document.removeEventListener("touchstart",L),document.removeEventListener("touchend",L)}function L(p){p.target.nodeName&&p.target.nodeName.toLowerCase()==="html"||(k=!1,I())}document.addEventListener("keydown",W,!0),document.addEventListener("mousedown",X,!0),document.addEventListener("pointerdown",X,!0),document.addEventListener("touchstart",X,!0),document.addEventListener("visibilitychange",K,!0),N(),d.addEventListener("focus",_,!0),d.addEventListener("blur",Y,!0)}function c(){if(typeof document<"u")try{document.querySelector(":focus-visible")}catch{t(document)}}return{ready:c}})});var mt=he((nn,pt)=>{"use strict";var vt=Le();vt.define("focus",pt.exports=function(){var t=[],c=!1;function d(q){c&&(q.preventDefault(),q.stopPropagation(),q.stopImmediatePropagation(),t.unshift(q))}function k(q){var C=q.target,z=C.tagName;return/^a$/i.test(z)&&C.href!=null||/^(button|textarea)$/i.test(z)&&C.disabled!==!0||/^input$/i.test(z)&&/^(button|reset|submit|radio|checkbox)$/i.test(C.type)&&!C.disabled||!/^(button|input|textarea|select|a)$/i.test(z)&&!Number.isNaN(Number.parseFloat(C.tabIndex))||/^audio$/i.test(z)||/^video$/i.test(z)&&C.controls===!0}function D(q){k(q)&&(c=!0,setTimeout(()=>{for(c=!1,q.target.focus();t.length>0;){var C=t.pop();C.target.dispatchEvent(new MouseEvent(C.type,C))}},0))}function b(){typeof document<"u"&&document.body.hasAttribute("data-wf-focus-within")&&vt.env.safari&&(document.addEventListener("mousedown",D,!0),document.addEventListener("mouseup",d,!0),document.addEventListener("click",d,!0))}return{ready:b}})});var wt=he((rn,gt)=>{"use strict";var ze=Le();ze.define("links",gt.exports=function(t,c){var d={},k=t(window),D,b=ze.env(),q=window.location,C=document.createElement("a"),z="w--current",$=/index\.(html|php)$/,j=/\/$/,W,X;d.ready=d.design=d.preview=_;function _(){D=b&&ze.env("design"),X=ze.env("slug")||q.pathname||"",ze.scroll.off(K),W=[];for(var I=document.links,L=0;L<I.length;++L)Y(I[L]);W.length&&(ze.scroll.on(K),K())}function Y(I){if(!I.getAttribute("hreflang")){var L=D&&I.getAttribute("href-disabled")||I.getAttribute("href");if(C.href=L,!(L.indexOf(":")>=0)){var p=t(I);if(C.hash.length>1&&C.host+C.pathname===q.host+q.pathname){if(!/^#[a-zA-Z0-9\-\_]+$/.test(C.hash))return;var H=t(C.hash);H.length&&W.push({link:p,sec:H,active:!1});return}if(!(L==="#"||L==="")){var P=C.href===q.href||L===X||$.test(L)&&j.test(X);N(p,z,P)}}}}function K(){var I=k.scrollTop(),L=k.height();c.each(W,function(p){if(!p.link.attr("hreflang")){var H=p.link,P=p.sec,B=P.offset().top,re=P.outerHeight(),ue=L*.5,de=P.is(":visible")&&B+re-ue>=I&&B+ue<=I+L;p.active!==de&&(p.active=de,N(H,z,de))}})}function N(I,L,p){var H=I.hasClass(L);p&&H||!p&&!H||(p?I.addClass(L):I.removeClass(L))}return d})});var bt=he((on,yt)=>{"use strict";var Be=Le();Be.define("scroll",yt.exports=function(t){var c={WF_CLICK_EMPTY:"click.wf-empty-link",WF_CLICK_SCROLL:"click.wf-scroll"},d=window.location,k=Y()?null:window.history,D=t(window),b=t(document),q=t(document.body),C=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(g){window.setTimeout(g,15)},z=Be.env("editor")?".w-editor-body":"body",$="header, "+z+" > .header, "+z+" > .w-nav:not([data-no-scroll])",j='a[href="#"]',W='a[href*="#"]:not(.w-tab-link):not('+j+")",X='.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',_=document.createElement("style");_.appendChild(document.createTextNode(X));function Y(){try{return!!window.frameElement}catch{return!0}}var K=/^#[a-zA-Z0-9][\w:.-]*$/;function N(g){return K.test(g.hash)&&g.host+g.pathname===d.host+d.pathname}let I=typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)");function L(){return document.body.getAttribute("data-wf-scroll-motion")==="none"||I.matches}function p(g,a){var f;switch(a){case"add":f=g.attr("tabindex"),f?g.attr("data-wf-tabindex-swap",f):g.attr("tabindex","-1");break;case"remove":f=g.attr("data-wf-tabindex-swap"),f?(g.attr("tabindex",f),g.removeAttr("data-wf-tabindex-swap")):g.removeAttr("tabindex");break}g.toggleClass("wf-force-outline-none",a==="add")}function H(g){var a=g.currentTarget;if(!(Be.env("design")||window.$.mobile&&/(?:^|\s)ui-link(?:$|\s)/.test(a.className))){var f=N(a)?a.hash:"";if(f!==""){var w=t(f);w.length&&(g&&(g.preventDefault(),g.stopPropagation()),P(f,g),window.setTimeout(function(){B(w,function(){p(w,"add"),w.get(0).focus({preventScroll:!0}),p(w,"remove")})},g?0:300))}}}function P(g){if(d.hash!==g&&k&&k.pushState&&!(Be.env.chrome&&d.protocol==="file:")){var a=k.state&&k.state.hash;a!==g&&k.pushState({hash:g},"",g)}}function B(g,a){var f=D.scrollTop(),w=re(g);if(f!==w){var m=ue(g,f,w),R=Date.now(),O=function(){var G=Date.now()-R;window.scroll(0,de(f,w,G,m)),G<=m?C(O):typeof a=="function"&&a()};C(O)}}function re(g){var a=t($),f=a.css("position")==="fixed"?a.outerHeight():0,w=g.offset().top-f;if(g.data("scroll")==="mid"){var m=D.height()-f,R=g.outerHeight();R<m&&(w-=Math.round((m-R)/2))}return w}function ue(g,a,f){if(L())return 0;var w=1;return q.add(g).each(function(m,R){var O=parseFloat(R.getAttribute("data-scroll-time"));!isNaN(O)&&O>=0&&(w=O)}),(472.143*Math.log(Math.abs(a-f)+125)-2e3)*w}function de(g,a,f,w){return f>w?a:g+(a-g)*Ae(f/w)}function Ae(g){return g<.5?4*g*g*g:(g-1)*(2*g-2)*(2*g-2)+1}function ve(){var{WF_CLICK_EMPTY:g,WF_CLICK_SCROLL:a}=c;b.on(a,W,H),b.on(g,j,function(f){f.preventDefault()}),document.head.insertBefore(_,document.head.firstChild)}return{ready:ve}})});var Et=he((sn,xt)=>{"use strict";var Kt=Le();Kt.define("touch",xt.exports=function(t){var c={},d=window.getSelection;t.event.special.tap={bindType:"click",delegateType:"click"},c.init=function(b){return b=typeof b=="string"?t(b).get(0):b,b?new k(b):null};function k(b){var q=!1,C=!1,z=Math.min(Math.round(window.innerWidth*.04),40),$,j;b.addEventListener("touchstart",W,!1),b.addEventListener("touchmove",X,!1),b.addEventListener("touchend",_,!1),b.addEventListener("touchcancel",Y,!1),b.addEventListener("mousedown",W,!1),b.addEventListener("mousemove",X,!1),b.addEventListener("mouseup",_,!1),b.addEventListener("mouseout",Y,!1);function W(N){var I=N.touches;I&&I.length>1||(q=!0,I?(C=!0,$=I[0].clientX):$=N.clientX,j=$)}function X(N){if(q){if(C&&N.type==="mousemove"){N.preventDefault(),N.stopPropagation();return}var I=N.touches,L=I?I[0].clientX:N.clientX,p=L-j;j=L,Math.abs(p)>z&&d&&String(d())===""&&(D("swipe",N,{direction:p>0?"right":"left"}),Y())}}function _(N){if(q&&(q=!1,C&&N.type==="mouseup")){N.preventDefault(),N.stopPropagation(),C=!1;return}}function Y(){q=!1}function K(){b.removeEventListener("touchstart",W,!1),b.removeEventListener("touchmove",X,!1),b.removeEventListener("touchend",_,!1),b.removeEventListener("touchcancel",Y,!1),b.removeEventListener("mousedown",W,!1),b.removeEventListener("mousemove",X,!1),b.removeEventListener("mouseup",_,!1),b.removeEventListener("mouseout",Y,!1),b=null}this.destroy=K}function D(b,q,C){var z=t.Event(b,{originalEvent:q});t(q.target).trigger(z,C)}return c.instance=c.init(document),c})});var Lt=he((un,_t)=>{"use strict";var Qe=window.jQuery,Ee={},$e=[],kt=".w-ix",Xe={reset:function(t,c){c.__wf_intro=null},intro:function(t,c){c.__wf_intro||(c.__wf_intro=!0,Qe(c).triggerHandler(Ee.types.INTRO))},outro:function(t,c){c.__wf_intro&&(c.__wf_intro=null,Qe(c).triggerHandler(Ee.types.OUTRO))}};Ee.triggers={};Ee.types={INTRO:"w-ix-intro"+kt,OUTRO:"w-ix-outro"+kt};Ee.init=function(){for(var t=$e.length,c=0;c<t;c++){var d=$e[c];d[0](0,d[1])}$e=[],Qe.extend(Ee.triggers,Xe)};Ee.async=function(){for(var t in Xe){var c=Xe[t];Xe.hasOwnProperty(t)&&(Ee.triggers[t]=function(d,k){$e.push([c,k])})}};Ee.async();_t.exports=Ee});var Ct=he((an,Tt)=>{"use strict";var Je=Lt();function Ot(t,c){var d=document.createEvent("CustomEvent");d.initCustomEvent(c,!0,!0,null),t.dispatchEvent(d)}var Ut=window.jQuery,Ke={},At=".w-ix",Vt={reset:function(t,c){Je.triggers.reset(t,c)},intro:function(t,c){Je.triggers.intro(t,c),Ot(c,"COMPONENT_ACTIVE")},outro:function(t,c){Je.triggers.outro(t,c),Ot(c,"COMPONENT_INACTIVE")}};Ke.triggers={};Ke.types={INTRO:"w-ix-intro"+At,OUTRO:"w-ix-outro"+At};Ut.extend(Ke.triggers,Vt);Tt.exports=Ke});var St=he((cn,Rt)=>{"use strict";var Oe=Le(),Yt=Ct(),se={ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,ESCAPE:27,SPACE:32,ENTER:13,HOME:36,END:35};Oe.define("navbar",Rt.exports=function(t,c){var d={},k=t.tram,D=t(window),b=t(document),q=c.debounce,C,z,$,j,W=Oe.env(),X='<div class="w-nav-overlay" data-wf-ignore />',_=".w-nav",Y="w--open",K="w--nav-dropdown-open",N="w--nav-dropdown-toggle-open",I="w--nav-dropdown-list-open",L="w--nav-link-open",p=Yt.triggers,H=t();d.ready=d.design=d.preview=P,d.destroy=function(){H=t(),B(),z&&z.length&&z.each(Ae)};function P(){$=W&&Oe.env("design"),j=Oe.env("editor"),C=t(document.body),z=b.find(_),z.length&&(z.each(de),B(),re())}function B(){Oe.resize.off(ue)}function re(){Oe.resize.on(ue)}function ue(){z.each(A)}function de(n,h){var y=t(h),v=t.data(h,_);v||(v=t.data(h,_,{open:!1,el:y,config:{},selectedIdx:-1})),v.menu=y.find(".w-nav-menu"),v.links=v.menu.find(".w-nav-link"),v.dropdowns=v.menu.find(".w-dropdown"),v.dropdownToggle=v.menu.find(".w-dropdown-toggle"),v.dropdownList=v.menu.find(".w-dropdown-list"),v.button=y.find(".w-nav-button"),v.container=y.find(".w-container"),v.overlayContainerId="w-nav-overlay-"+n,v.outside=ye(v);var J=y.find(".w-nav-brand");J&&J.attr("href")==="/"&&J.attr("aria-label")==null&&J.attr("aria-label","home"),v.button.attr("style","-webkit-user-select: text;"),v.button.attr("aria-label")==null&&v.button.attr("aria-label","menu"),v.button.attr("role","button"),v.button.attr("tabindex","0"),v.button.attr("aria-controls",v.overlayContainerId),v.button.attr("aria-haspopup","menu"),v.button.attr("aria-expanded","false"),v.el.off(_),v.button.off(_),v.menu.off(_),a(v),$?(ve(v),v.el.on("setting"+_,f(v))):(g(v),v.button.on("click"+_,G(v)),v.menu.on("click"+_,"a",fe(v)),v.button.on("keydown"+_,w(v)),v.el.on("keydown"+_,m(v))),A(n,h)}function Ae(n,h){var y=t.data(h,_);y&&(ve(y),t.removeData(h,_))}function ve(n){n.overlay&&(Z(n,!0),n.overlay.remove(),n.overlay=null)}function g(n){n.overlay||(n.overlay=t(X).appendTo(n.el),n.overlay.attr("id",n.overlayContainerId),n.parent=n.menu.parent(),Z(n,!0))}function a(n){var h={},y=n.config||{},v=h.animation=n.el.attr("data-animation")||"default";h.animOver=/^over/.test(v),h.animDirect=/left$/.test(v)?-1:1,y.animation!==v&&n.open&&c.defer(O,n),h.easing=n.el.attr("data-easing")||"ease",h.easing2=n.el.attr("data-easing2")||"ease";var J=n.el.attr("data-duration");h.duration=J!=null?Number(J):400,h.docHeight=n.el.attr("data-doc-height"),n.config=h}function f(n){return function(h,y){y=y||{};var v=D.width();a(n),y.open===!0&&ke(n,!0),y.open===!1&&Z(n,!0),n.open&&c.defer(function(){v!==D.width()&&O(n)})}}function w(n){return function(h){switch(h.keyCode){case se.SPACE:case se.ENTER:return G(n)(),h.preventDefault(),h.stopPropagation();case se.ESCAPE:return Z(n),h.preventDefault(),h.stopPropagation();case se.ARROW_RIGHT:case se.ARROW_DOWN:case se.HOME:case se.END:return n.open?(h.keyCode===se.END?n.selectedIdx=n.links.length-1:n.selectedIdx=0,R(n),h.preventDefault(),h.stopPropagation()):(h.preventDefault(),h.stopPropagation())}}}function m(n){return function(h){if(n.open)switch(n.selectedIdx=n.links.index(document.activeElement),h.keyCode){case se.HOME:case se.END:return h.keyCode===se.END?n.selectedIdx=n.links.length-1:n.selectedIdx=0,R(n),h.preventDefault(),h.stopPropagation();case se.ESCAPE:return Z(n),n.button.focus(),h.preventDefault(),h.stopPropagation();case se.ARROW_LEFT:case se.ARROW_UP:return n.selectedIdx=Math.max(-1,n.selectedIdx-1),R(n),h.preventDefault(),h.stopPropagation();case se.ARROW_RIGHT:case se.ARROW_DOWN:return n.selectedIdx=Math.min(n.links.length-1,n.selectedIdx+1),R(n),h.preventDefault(),h.stopPropagation()}}}function R(n){if(n.links[n.selectedIdx]){var h=n.links[n.selectedIdx];h.focus(),fe(h)}}function O(n){n.open&&(Z(n,!0),ke(n,!0))}function G(n){return q(function(){n.open?Z(n):ke(n)})}function fe(n){return function(h){var y=t(this),v=y.attr("href");if(!Oe.validClick(h.currentTarget)){h.preventDefault();return}v&&v.indexOf("#")===0&&n.open&&Z(n)}}function ye(n){return n.outside&&b.off("click"+_,n.outside),function(h){var y=t(h.target);j&&y.closest(".w-editor-bem-EditorOverlay").length||ie(n,y)}}var ie=q(function(n,h){if(n.open){var y=h.closest(".w-nav-menu");n.menu.is(y)||Z(n)}});function A(n,h){var y=t.data(h,_),v=y.collapsed=y.button.css("display")!=="none";if(y.open&&!v&&!$&&Z(y,!0),y.container.length){var J=Te(y);y.links.each(J),y.dropdowns.each(J)}y.open&&Pe(y)}var oe="max-width";function Te(n){var h=n.container.css(oe);return h==="none"&&(h=""),function(y,v){v=t(v),v.css(oe,""),v.css(oe)==="none"&&v.css(oe,h)}}function qe(n,h){h.setAttribute("data-nav-menu-open","")}function Ce(n,h){h.removeAttribute("data-nav-menu-open")}function ke(n,h){if(n.open)return;n.open=!0,n.menu.each(qe),n.links.addClass(L),n.dropdowns.addClass(K),n.dropdownToggle.addClass(N),n.dropdownList.addClass(I),n.button.addClass(Y);var y=n.config,v=y.animation;(v==="none"||!k.support.transform||y.duration<=0)&&(h=!0);var J=Pe(n),De=n.menu.outerHeight(!0),Re=n.menu.outerWidth(!0),e=n.el.height(),r=n.el[0];if(A(0,r),p.intro(0,r),Oe.redraw.up(),$||b.on("click"+_,n.outside),h){u();return}var i="transform "+y.duration+"ms "+y.easing;if(n.overlay&&(H=n.menu.prev(),n.overlay.show().append(n.menu)),y.animOver){k(n.menu).add(i).set({x:y.animDirect*Re,height:J}).start({x:0}).then(u),n.overlay&&n.overlay.width(Re);return}var o=e+De;k(n.menu).add(i).set({y:-o}).start({y:0}).then(u);function u(){n.button.attr("aria-expanded","true")}}function Pe(n){var h=n.config,y=h.docHeight?b.height():C.height();return h.animOver?n.menu.height(y):n.el.css("position")!=="fixed"&&(y-=n.el.outerHeight(!0)),n.overlay&&n.overlay.height(y),y}function Z(n,h){if(!n.open)return;n.open=!1,n.button.removeClass(Y);var y=n.config;if((y.animation==="none"||!k.support.transform||y.duration<=0)&&(h=!0),p.outro(0,n.el[0]),b.off("click"+_,n.outside),h){k(n.menu).stop(),r();return}var v="transform "+y.duration+"ms "+y.easing2,J=n.menu.outerHeight(!0),De=n.menu.outerWidth(!0),Re=n.el.height();if(y.animOver){k(n.menu).add(v).start({x:De*y.animDirect}).then(r);return}var e=Re+J;k(n.menu).add(v).start({y:-e}).then(r);function r(){n.menu.height(""),k(n.menu).set({x:0,y:0}),n.menu.each(Ce),n.links.removeClass(L),n.dropdowns.removeClass(K),n.dropdownToggle.removeClass(N),n.dropdownList.removeClass(I),n.overlay&&n.overlay.children().length&&(H.length?n.menu.insertAfter(H):n.menu.prependTo(n.parent),n.overlay.attr("style","").hide()),n.el.triggerHandler("w-close"),n.button.attr("aria-expanded","false")}}return d})});lt();dt();mt();wt();bt();Et();St();})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */






const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show');
        }
    })
})



const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el));












const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
            entry.target.classList.remove('hidden2');
            observer2.unobserve(entry.target);
        } else {
            entry.target.classList.remove('hidden2');
        }
    })
})





const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el)=> observer2.observe(el));


const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
            entry.target.classList.remove('hidden3');
            observer3.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show3');
        }
    })
})



const hiddenElements3 = document.querySelectorAll(".hidden3");
hiddenElements3.forEach((el)=> observer3.observe(el));


const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show4');
            entry.target.classList.remove('hidden4');
            observer4.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show4');
        }
    })
})



const hiddenElements4 = document.querySelectorAll(".hidden4");
hiddenElements4.forEach((el)=> observer4.observe(el));




const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show5');
            entry.target.classList.remove('hidden5');
            observer5.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show5');
        }
    })
})



const hiddenElements5 = document.querySelectorAll(".hidden5");
hiddenElements5.forEach((el)=> observer5.observe(el));




const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show6');
            entry.target.classList.remove('hidden6');
            observer6.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show6');
        }
    })
})



const hiddenElements6 = document.querySelectorAll(".hidden6");
hiddenElements6.forEach((el)=> observer6.observe(el));





const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show7');
            entry.target.classList.remove('hidden7');
            observer7.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show7');
        }
    })
})



const hiddenElements7 = document.querySelectorAll(".hidden7");
hiddenElements7.forEach((el)=> observer7.observe(el));




let navoverlay=document.querySelector(".w-nav-overlay");
let navmenu=document.querySelector(".w-nav-menu");
let iconnavmenu=document.querySelector(".w-icon-nav-menu");
let navmenubutton=document.querySelector(".w-nav-button");
let navlink=document.querySelector(".nav-link");
let navlink2=document.querySelector(".nav-link-2");
let navlink3=document.querySelector(".nav-link-3");
let navlink4=document.querySelector(".nav-link-4");
let navlink5=document.querySelector(".nav-link-5");
let button=document.querySelector(".button-2");
let navbar=document.querySelector(".navbar");
let brand=document.querySelector(".image-2");
let container=document.querySelector(".container");

let originalStyles = {
  marginRight: navmenubutton.style.marginRight,
  padding: button.style.padding,
  maxWidth: button.style.maxWidth,
  brandDisplay: brand.style.display,
  navmenuJustifyContent: navmenu.style.justifyContent,
  navmenuFlexDirection: navmenu.style.flexDirection,
  navmenuHeight: navmenu.style.height,
  navmenuMarginRight: navmenu.style.marginRight,
  navbarBackground: navbar.style.background,
};

// Function to open the menu
function openMenu() {
  navmenu.classList.add("open");
  navmenu.style.backgroundColor = "#fff";
  iconnavmenu.style.backgroundColor = "#fff";
  navmenubutton.style.backgroundColor = "#fff";
  navmenubutton.style.marginRight = "0px";
  container.style.justifyContent="space-between";
  brand.style.display="none";
  navmenu.style.justifyContent="right";
  navmenu.style.flexDirection="row";
  navmenu.style.height = "auto";
  navmenu.style.marginRight = "0px";
  navbar.style.background="#fff";
  navlink.style.textAlign="right";
  navlink2.style.textAlign="right";
  navlink3.style.textAlign="right";
  navlink4.style.textAlign="right";
  navlink5.style.textAlign="right";
  navlink.style.marginRight = "40px";
  navlink2.style.marginRight = "40px";
  navlink3.style.marginRight = "40px";
  navlink4.style.marginRight = "40px";
  navlink5.style.marginRight = "40px";
  navlink.style.fontWeight = "700";
  navlink2.style.fontWeight = "700";
  navlink3.style.fontWeight = "700";
  navlink4.style.fontWeight = "700";
  navlink5.style.fontWeight = "700";
  navlink.style.opacity = "1";
  navlink2.style.opacity = "1";
  navlink3.style.opacity = "1";
  navlink4.style.opacity = "1";
  navlink5.style.opacity = "1";
  navlink.style.height = "20px";
  navlink2.style.height = "20px";
  navlink3.style.height = "20px";
  navlink4.style.height = "20px";
  navlink5.style.height = "20px";
  button.style.width="100%";
  button.style.color="#0b3944";
  button.style.background="transparent";
  button.style.boxShadow="none";
  button.style.padding="20px";
  button.style.paddingRight="40px";
  button.style.height="60px";
  button.style.maxWidth="728px";
  button.style.fontSize="12px";
  button.style.marginLeft="auto";
  button.style.justifyContent="right";
}

// Function to close the menu
function closeMenu() {

  iconnavmenu.style.backgroundColor = "transparent";
  navmenubutton.style.backgroundColor = "transparent";
  navmenu.style.justifyContent = originalStyles.navmenuJustifyContent;
  navmenu.style.flexDirection = originalStyles.navmenuFlexDirection;
  navmenu.style.height = originalStyles.navmenuHeight;
  navmenu.style.marginRight = originalStyles.navmenuMarginRight;

  setTimeout(() => {
      navmenubutton.style.marginRight = originalStyles.marginRight;
      navbar.style.borderBottom = "none";
      container.style.justifyContent = "space-between";
      navmenu.style.height = "0";
      navmenu.classList.remove("open");
      navmenu.style.backgroundColor = "transparent";
      navbar.style.background = originalStyles.navbarBackground;
      navbar.style.height = "60px";
      container.style.height = "60px";
      container.style.background = "transparent";
      navlink.style.textAlign = "center";
      navlink2.style.textAlign = "center";
      navlink3.style.textAlign = "center";
      navlink4.style.textAlign = "center";
      navlink5.style.textAlign = "center";
      navlink.style.height = "60px";
      navlink2.style.height = "60px";
      navlink3.style.height = "60px";
      navlink4.style.height = "60px";
      navlink5.style.height = "60px";
      navlink.style.fontWeight = "400";
      navlink2.style.fontWeight = "400";
      navlink3.style.fontWeight = "400";
      navlink4.style.fontWeight = "400";
      navlink5.style.fontWeight = "400";
      navlink.style.opacity = "0.8";
      navlink2.style.opacity = "0.8";
      navlink3.style.opacity = "0.8";
      navlink4.style.opacity = "0.8";
      navlink5.style.opacity = "0.8";
      navlink.style.paddingRight = "0px";
      navlink2.style.paddingRight = "0px";
      navlink3.style.paddingRight = "0px";
      navlink4.style.paddingRight = "0px";
      navlink5.style.paddingRight = "0px";
      navlink.style.marginRight = "0px";
      navlink2.style.marginRight = "0px";
      navlink3.style.marginRight = "0px";
      navlink4.style.marginRight = "0px";
      navlink5.style.marginRight= "0px";
      button.style.color="#fff";
      brand.style.display = originalStyles.brandDisplay;
  }, 200); // Adjust the duration to match the CSS transition time

  setTimeout(() => { 
    button.style.width="160px";
    button.style.background="#3bb2b0";
    button.style.padding="9px";
    button.style.paddingRight="15px";
    button.style.paddingLeft="15px";
    button.style.height="38px";
    button.style.maxWidth="160px";
    button.style.fontSize="10pt";
    button.style.margin="0px";
    button.style.justifyContent="center";
   }, 300); 
}

// Event listener for the menu button click
iconnavmenu.addEventListener("click", (e) => {
  if (navmenu.classList.contains("open")) {
      closeMenu();
  } else {
      openMenu();
  }
});

// Event listener for clicks outside the menu to close it
document.addEventListener("click", (e) => {
  if (!navmenu.contains(e.target) && !iconnavmenu.contains(e.target)) {
      closeMenu();
  }
});

// Event listener for window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) { // Adjust the width value to your desktop breakpoint
      closeMenu();
  }
});
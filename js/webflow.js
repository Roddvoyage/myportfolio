
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(()=>{var dt=(e,w)=>()=>(w||e((w={exports:{}}).exports,w),w.exports);var Ot=dt(()=>{"use strict";window.tram=function(e){function w(t,n){var i=new J.Bare;return i.init(t,n)}function h(t){return t.replace(/[A-Z]/g,function(n){return"-"+n.toLowerCase()})}function L(t){var n=parseInt(t.slice(1),16),i=n>>16&255,r=n>>8&255,s=255&n;return[i,r,s]}function M(t,n,i){return"#"+(1<<24|t<<16|n<<8|i).toString(16).slice(1)}function g(){}function S(t,n){H("Type warning: Expected: ["+t+"] Got: ["+typeof n+"] "+n)}function _(t,n,i){H("Units do not match ["+t+"]: "+n+", "+i)}function R(t,n,i){if(n!==void 0&&(i=n),t===void 0)return i;var r=i;return ve.test(t)||!Xt.test(t)?r=parseInt(t,10):Xt.test(t)&&(r=1e3*parseFloat(t)),0>r&&(r=0),r===r?r:i}function H(t){et.debug&&window&&window.console.warn(t)}function G(t){for(var n=-1,i=t?t.length:0,r=[];++n<i;){var s=t[n];s&&r.push(s)}return r}var P=function(t,n,i){function r(y){return typeof y=="object"}function s(y){return typeof y=="function"}function o(){}function p(y,X){function c(){var j=new k;return s(j.init)&&j.init.apply(j,arguments),j}function k(){}X===i&&(X=y,y=Object),c.Bare=k;var q,U=o[t]=y[t],ft=k[t]=c[t]=new o;return ft.constructor=c,c.mixin=function(j){return k[t]=c[t]=p(c,j)[t],c},c.open=function(j){if(q={},s(j)?q=j.call(c,ft,U,c,y):r(j)&&(q=j),r(q))for(var qt in q)n.call(q,qt)&&(ft[qt]=q[qt]);return s(ft.init)||(ft.init=y),c},c.open(X)}return p}("prototype",{}.hasOwnProperty),B={ease:["ease",function(t,n,i,r){var s=(t/=r)*t,o=s*t;return n+i*(-2.75*o*s+11*s*s+-15.5*o+8*s+.25*t)}],"ease-in":["ease-in",function(t,n,i,r){var s=(t/=r)*t,o=s*t;return n+i*(-1*o*s+3*s*s+-3*o+2*s)}],"ease-out":["ease-out",function(t,n,i,r){var s=(t/=r)*t,o=s*t;return n+i*(.3*o*s+-1.6*s*s+2.2*o+-1.8*s+1.9*t)}],"ease-in-out":["ease-in-out",function(t,n,i,r){var s=(t/=r)*t,o=s*t;return n+i*(2*o*s+-5*s*s+2*o+2*s)}],linear:["linear",function(t,n,i,r){return i*t/r+n}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,n,i,r){return i*(t/=r)*t+n}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,n,i,r){return-i*(t/=r)*(t-2)+n}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,n,i,r){return(t/=r/2)<1?i/2*t*t+n:-i/2*(--t*(t-2)-1)+n}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,n,i,r){return i*(t/=r)*t*t+n}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,n,i,r){return i*((t=t/r-1)*t*t+1)+n}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,n,i,r){return(t/=r/2)<1?i/2*t*t*t+n:i/2*((t-=2)*t*t+2)+n}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,n,i,r){return i*(t/=r)*t*t*t+n}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,n,i,r){return-i*((t=t/r-1)*t*t*t-1)+n}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,n,i,r){return(t/=r/2)<1?i/2*t*t*t*t+n:-i/2*((t-=2)*t*t*t-2)+n}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,n,i,r){return i*(t/=r)*t*t*t*t+n}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,n,i,r){return i*((t=t/r-1)*t*t*t*t+1)+n}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,n,i,r){return(t/=r/2)<1?i/2*t*t*t*t*t+n:i/2*((t-=2)*t*t*t*t+2)+n}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,n,i,r){return-i*Math.cos(t/r*(Math.PI/2))+i+n}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,n,i,r){return i*Math.sin(t/r*(Math.PI/2))+n}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,n,i,r){return-i/2*(Math.cos(Math.PI*t/r)-1)+n}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,n,i,r){return t===0?n:i*Math.pow(2,10*(t/r-1))+n}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,n,i,r){return t===r?n+i:i*(-Math.pow(2,-10*t/r)+1)+n}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,n,i,r){return t===0?n:t===r?n+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+n:i/2*(-Math.pow(2,-10*--t)+2)+n}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,n,i,r){return-i*(Math.sqrt(1-(t/=r)*t)-1)+n}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,n,i,r){return i*Math.sqrt(1-(t=t/r-1)*t)+n}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,n,i,r){return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+n:i/2*(Math.sqrt(1-(t-=2)*t)+1)+n}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,n,i,r,s){return s===void 0&&(s=1.70158),i*(t/=r)*t*((s+1)*t-s)+n}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,n,i,r,s){return s===void 0&&(s=1.70158),i*((t=t/r-1)*t*((s+1)*t+s)+1)+n}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,n,i,r,s){return s===void 0&&(s=1.70158),(t/=r/2)<1?i/2*t*t*(((s*=1.525)+1)*t-s)+n:i/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n}]},C={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},K=document,W=window,O="bkwld-tram",T=/[\-\.0-9]/g,b=/[A-Z]/,f="number",D=/^(rgb|#)/,z=/(em|cm|mm|in|pt|pc|px)$/,$=/(em|cm|mm|in|pt|pc|px|%)$/,Q=/(deg|rad|turn)$/,it="unitless",ht=/(all|none) 0s ease 0s/,_t=/^(width|height)$/,vt=" ",d=K.createElement("a"),u=["Webkit","Moz","O","ms"],a=["-webkit-","-moz-","-o-","-ms-"],v=function(t){if(t in d.style)return{dom:t,css:t};var n,i,r="",s=t.split("-");for(n=0;n<s.length;n++)r+=s[n].charAt(0).toUpperCase()+s[n].slice(1);for(n=0;n<u.length;n++)if(i=u[n]+r,i in d.style)return{dom:i,css:a[n]+t}},l=w.support={bind:Function.prototype.bind,transform:v("transform"),transition:v("transition"),backface:v("backface-visibility"),timing:v("transition-timing-function")};if(l.transition){var A=l.timing.dom;if(d.style[A]=B["ease-in-back"][0],!d.style[A])for(var E in C)B[E][0]=C[E]}var V=w.frame=function(){var t=W.requestAnimationFrame||W.webkitRequestAnimationFrame||W.mozRequestAnimationFrame||W.oRequestAnimationFrame||W.msRequestAnimationFrame;return t&&l.bind?t.bind(W):function(n){W.setTimeout(n,16)}}(),ct=w.now=function(){var t=W.performance,n=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return n&&l.bind?n.bind(t):Date.now||function(){return+new Date}}(),pt=P(function(t){function n(m,F){var Y=G((""+m).split(vt)),I=Y[0];F=F||{};var tt=Pt[I];if(!tt)return H("Unsupported property: "+I);if(!F.weak||!this.props[I]){var st=tt[0],nt=this.props[I];return nt||(nt=this.props[I]=new st.Bare),nt.init(this.$el,Y,tt,F),nt}}function i(m,F,Y){if(m){var I=typeof m;if(F||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),I=="number"&&F)return this.timer=new Tt({duration:m,context:this,complete:o}),void(this.active=!0);if(I=="string"&&F){switch(m){case"hide":c.call(this);break;case"stop":p.call(this);break;case"redraw":k.call(this);break;default:n.call(this,m,Y&&Y[1])}return o.call(this)}if(I=="function")return void m.call(this,this);if(I=="object"){var tt=0;ft.call(this,m,function(Z,we){Z.span>tt&&(tt=Z.span),Z.stop(),Z.animate(we)},function(Z){"wait"in Z&&(tt=R(Z.wait,0))}),U.call(this),tt>0&&(this.timer=new Tt({duration:tt,context:this}),this.active=!0,F&&(this.timer.complete=o));var st=this,nt=!1,zt={};V(function(){ft.call(st,m,function(Z){Z.active&&(nt=!0,zt[Z.name]=Z.nextStyle)}),nt&&st.$el.css(zt)})}}}function r(m){m=R(m,0),this.active?this.queue.push({options:m}):(this.timer=new Tt({duration:m,context:this,complete:o}),this.active=!0)}function s(m){return this.active?(this.queue.push({options:m,args:arguments}),void(this.timer.complete=o)):H("No active transition timer. Use start() or wait() before then().")}function o(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var m=this.queue.shift();i.call(this,m.options,!0,m.args)}}function p(m){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var F;typeof m=="string"?(F={},F[m]=1):F=typeof m=="object"&&m!=null?m:this.props,ft.call(this,F,j),U.call(this)}function y(m){p.call(this,m),ft.call(this,m,qt,pe)}function X(m){typeof m!="string"&&(m="block"),this.el.style.display=m}function c(){p.call(this),this.el.style.display="none"}function k(){this.el.offsetHeight}function q(){p.call(this),e.removeData(this.el,O),this.$el=this.el=null}function U(){var m,F,Y=[];this.upstream&&Y.push(this.upstream);for(m in this.props)F=this.props[m],F.active&&Y.push(F.string);Y=Y.join(","),this.style!==Y&&(this.style=Y,this.el.style[l.transition.dom]=Y)}function ft(m,F,Y){var I,tt,st,nt,zt=F!==j,Z={};for(I in m)st=m[I],I in mt?(Z.transform||(Z.transform={}),Z.transform[I]=st):(b.test(I)&&(I=h(I)),I in Pt?Z[I]=st:(nt||(nt={}),nt[I]=st));for(I in Z){if(st=Z[I],tt=this.props[I],!tt){if(!zt)continue;tt=n.call(this,I)}F.call(this,tt,st)}Y&&nt&&Y.call(this,nt)}function j(m){m.stop()}function qt(m,F){m.set(F)}function pe(m){this.$el.css(m)}function ot(m,F){t[m]=function(){return this.children?me.call(this,F,arguments):(this.el&&F.apply(this,arguments),this)}}function me(m,F){var Y,I=this.children.length;for(Y=0;I>Y;Y++)m.apply(this.children[Y],F);return this}t.init=function(m){if(this.$el=e(m),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,et.keepInherited&&!et.fallback){var F=Dt(this.el,"transition");F&&!ht.test(F)&&(this.upstream=F)}l.backface&&et.hideBackface&&yt(this.el,l.backface.css,"hidden")},ot("add",n),ot("start",i),ot("wait",r),ot("then",s),ot("next",o),ot("stop",p),ot("set",y),ot("show",X),ot("hide",c),ot("redraw",k),ot("destroy",q)}),J=P(pt,function(t){function n(i,r){var s=e.data(i,O)||e.data(i,O,new pt.Bare);return s.el||s.init(i),r?s.start(r):s}t.init=function(i,r){var s=e(i);if(!s.length)return this;if(s.length===1)return n(s[0],r);var o=[];return s.each(function(p,y){o.push(n(y,r))}),this.children=o,this}}),x=P(function(t){function n(){var o=this.get();this.update("auto");var p=this.get();return this.update(o),p}function i(o,p,y){return p!==void 0&&(y=p),o in B?o:y}function r(o){var p=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(o);return(p?M(p[1],p[2],p[3]):o).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var s={duration:500,ease:"ease",delay:0};t.init=function(o,p,y,X){this.$el=o,this.el=o[0];var c=p[0];y[2]&&(c=y[2]),Wt[c]&&(c=Wt[c]),this.name=c,this.type=y[1],this.duration=R(p[1],this.duration,s.duration),this.ease=i(p[2],this.ease,s.ease),this.delay=R(p[3],this.delay,s.delay),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=_t.test(this.name),this.unit=X.unit||this.unit||et.defaultUnit,this.angle=X.angle||this.angle||et.defaultAngle,et.fallback||X.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+vt+this.duration+"ms"+(this.ease!="ease"?vt+B[this.ease][0]:"")+(this.delay?vt+this.delay+"ms":""))},t.set=function(o){o=this.convert(o,this.type),this.update(o),this.redraw()},t.transition=function(o){this.active=!0,o=this.convert(o,this.type),this.auto&&(this.el.style[this.name]=="auto"&&(this.update(this.get()),this.redraw()),o=="auto"&&(o=n.call(this))),this.nextStyle=o},t.fallback=function(o){var p=this.el.style[this.name]||this.convert(this.get(),this.type);o=this.convert(o,this.type),this.auto&&(p=="auto"&&(p=this.convert(this.get(),this.type)),o=="auto"&&(o=n.call(this))),this.tween=new At({from:p,to:o,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return Dt(this.el,this.name)},t.update=function(o){yt(this.el,this.name,o)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,yt(this.el,this.name,this.get()));var o=this.tween;o&&o.context&&o.destroy()},t.convert=function(o,p){if(o=="auto"&&this.auto)return o;var y,X=typeof o=="number",c=typeof o=="string";switch(p){case f:if(X)return o;if(c&&o.replace(T,"")==="")return+o;y="number(unitless)";break;case D:if(c){if(o===""&&this.original)return this.original;if(p.test(o))return o.charAt(0)=="#"&&o.length==7?o:r(o)}y="hex or rgb string";break;case z:if(X)return o+this.unit;if(c&&p.test(o))return o;y="number(px) or string(unit)";break;case $:if(X)return o+this.unit;if(c&&p.test(o))return o;y="number(px) or string(unit or %)";break;case Q:if(X)return o+this.angle;if(c&&p.test(o))return o;y="number(deg) or string(angle)";break;case it:if(X||c&&$.test(o))return o;y="number(unitless) or string(unit or %)"}return S(y,o),o},t.redraw=function(){this.el.offsetHeight}}),rt=P(x,function(t,n){t.init=function(){n.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),D))}}),Lt=P(x,function(t,n){t.init=function(){n.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(i){this.$el[this.name](i)}}),St=P(x,function(t,n){function i(r,s){var o,p,y,X,c;for(o in r)X=mt[o],y=X[0],p=X[1]||o,c=this.convert(r[o],y),s.call(this,p,c,y)}t.init=function(){n.init.apply(this,arguments),this.current||(this.current={},mt.perspective&&et.perspective&&(this.current.perspective=et.perspective,yt(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(r){i.call(this,r,function(s,o){this.current[s]=o}),yt(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(r){var s=this.values(r);this.tween=new Bt({current:this.current,values:s,duration:this.duration,delay:this.delay,ease:this.ease});var o,p={};for(o in this.current)p[o]=o in s?s[o]:this.current[o];this.active=!0,this.nextStyle=this.style(p)},t.fallback=function(r){var s=this.values(r);this.tween=new Bt({current:this.current,values:s,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){yt(this.el,this.name,this.style(this.current))},t.style=function(r){var s,o="";for(s in r)o+=s+"("+r[s]+") ";return o},t.values=function(r){var s,o={};return i.call(this,r,function(p,y,X){o[p]=y,this.current[p]===void 0&&(s=0,~p.indexOf("scale")&&(s=1),this.current[p]=this.convert(s,X))}),o}}),At=P(function(t){function n(c){y.push(c)===1&&V(i)}function i(){var c,k,q,U=y.length;if(U)for(V(i),k=ct(),c=U;c--;)q=y[c],q&&q.render(k)}function r(c){var k,q=e.inArray(c,y);q>=0&&(k=y.slice(q+1),y.length=q,k.length&&(y=y.concat(k)))}function s(c){return Math.round(c*X)/X}function o(c,k,q){return M(c[0]+q*(k[0]-c[0]),c[1]+q*(k[1]-c[1]),c[2]+q*(k[2]-c[2]))}var p={ease:B.ease[1],from:0,to:1};t.init=function(c){this.duration=c.duration||0,this.delay=c.delay||0;var k=c.ease||p.ease;B[k]&&(k=B[k][1]),typeof k!="function"&&(k=p.ease),this.ease=k,this.update=c.update||g,this.complete=c.complete||g,this.context=c.context||this,this.name=c.name;var q=c.from,U=c.to;q===void 0&&(q=p.from),U===void 0&&(U=p.to),this.unit=c.unit||"",typeof q=="number"&&typeof U=="number"?(this.begin=q,this.change=U-q):this.format(U,q),this.value=this.begin+this.unit,this.start=ct(),c.autoplay!==!1&&this.play()},t.play=function(){this.active||(this.start||(this.start=ct()),this.active=!0,n(this))},t.stop=function(){this.active&&(this.active=!1,r(this))},t.render=function(c){var k,q=c-this.start;if(this.delay){if(q<=this.delay)return;q-=this.delay}if(q<this.duration){var U=this.ease(q,0,1,this.duration);return k=this.startRGB?o(this.startRGB,this.endRGB,U):s(this.begin+U*this.change),this.value=k+this.unit,void this.update.call(this.context,this.value)}k=this.endHex||this.begin+this.change,this.value=k+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},t.format=function(c,k){if(k+="",c+="",c.charAt(0)=="#")return this.startRGB=L(k),this.endRGB=L(c),this.endHex=c,this.begin=0,void(this.change=1);if(!this.unit){var q=k.replace(T,""),U=c.replace(T,"");q!==U&&_("tween",k,c),this.unit=q}k=parseFloat(k),c=parseFloat(c),this.begin=this.value=k,this.change=c-k},t.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=g};var y=[],X=1e3}),Tt=P(At,function(t){t.init=function(n){this.duration=n.duration||0,this.complete=n.complete||g,this.context=n.context,this.play()},t.render=function(n){var i=n-this.start;i<this.duration||(this.complete.call(this.context),this.destroy())}}),Bt=P(At,function(t,n){t.init=function(i){this.context=i.context,this.update=i.update,this.tweens=[],this.current=i.current;var r,s;for(r in i.values)s=i.values[r],this.current[r]!==s&&this.tweens.push(new At({name:r,from:this.current[r],to:s,duration:i.duration,delay:i.delay,ease:i.ease,autoplay:!1}));this.play()},t.render=function(i){var r,s,o=this.tweens.length,p=!1;for(r=o;r--;)s=this.tweens[r],s.context&&(s.render(i),this.current[s.name]=s.value,p=!0);return p?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(n.destroy.call(this),this.tweens){var i,r=this.tweens.length;for(i=r;i--;)this.tweens[i].destroy();this.tweens=null,this.current=null}}}),et=w.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!l.transition,agentTests:[]};w.fallback=function(t){if(!l.transition)return et.fallback=!0;et.agentTests.push("("+t+")");var n=new RegExp(et.agentTests.join("|"),"i");et.fallback=n.test(navigator.userAgent)},w.fallback("6.0.[2-5] Safari"),w.tween=function(t){return new At(t)},w.delay=function(t,n,i){return new Tt({complete:n,duration:t,context:i})},e.fn.tram=function(t){return w.call(null,this,t)};var yt=e.style,Dt=e.css,Wt={transform:l.transform&&l.transform.css},Pt={color:[rt,D],background:[rt,D,"background-color"],"outline-color":[rt,D],"border-color":[rt,D],"border-top-color":[rt,D],"border-right-color":[rt,D],"border-bottom-color":[rt,D],"border-left-color":[rt,D],"border-width":[x,z],"border-top-width":[x,z],"border-right-width":[x,z],"border-bottom-width":[x,z],"border-left-width":[x,z],"border-spacing":[x,z],"letter-spacing":[x,z],margin:[x,z],"margin-top":[x,z],"margin-right":[x,z],"margin-bottom":[x,z],"margin-left":[x,z],padding:[x,z],"padding-top":[x,z],"padding-right":[x,z],"padding-bottom":[x,z],"padding-left":[x,z],"outline-width":[x,z],opacity:[x,f],top:[x,$],right:[x,$],bottom:[x,$],left:[x,$],"font-size":[x,$],"text-indent":[x,$],"word-spacing":[x,$],width:[x,$],"min-width":[x,$],"max-width":[x,$],height:[x,$],"min-height":[x,$],"max-height":[x,$],"line-height":[x,it],"scroll-top":[Lt,f,"scrollTop"],"scroll-left":[Lt,f,"scrollLeft"]},mt={};l.transform&&(Pt.transform=[St],mt={x:[$,"translateX"],y:[$,"translateY"],rotate:[Q],rotateX:[Q],rotateY:[Q],scale:[f],scaleX:[f],scaleY:[f],skew:[Q],skewX:[Q],skewY:[Q]}),l.transform&&l.backface&&(mt.z=[$,"translateZ"],mt.rotateZ=[Q],mt.scaleZ=[f],mt.perspective=[z]);var ve=/ms/,Xt=/s|\./;return e.tram=w}(window.jQuery)});var Kt=dt((Me,Ht)=>{"use strict";var ge=window.$,be=Ot()&&ge.tram;Ht.exports=function(){var e={};e.VERSION="1.6.0-Webflow";var w={},h=Array.prototype,L=Object.prototype,M=Function.prototype,g=h.push,S=h.slice,_=h.concat,R=L.toString,H=L.hasOwnProperty,G=h.forEach,P=h.map,B=h.reduce,C=h.reduceRight,K=h.filter,W=h.every,O=h.some,T=h.indexOf,b=h.lastIndexOf,f=Array.isArray,D=Object.keys,z=M.bind,$=e.each=e.forEach=function(u,a,v){if(u==null)return u;if(G&&u.forEach===G)u.forEach(a,v);else if(u.length===+u.length){for(var l=0,A=u.length;l<A;l++)if(a.call(v,u[l],l,u)===w)return}else for(var E=e.keys(u),l=0,A=E.length;l<A;l++)if(a.call(v,u[E[l]],E[l],u)===w)return;return u};e.map=e.collect=function(u,a,v){var l=[];return u==null?l:P&&u.map===P?u.map(a,v):($(u,function(A,E,V){l.push(a.call(v,A,E,V))}),l)},e.find=e.detect=function(u,a,v){var l;return Q(u,function(A,E,V){if(a.call(v,A,E,V))return l=A,!0}),l},e.filter=e.select=function(u,a,v){var l=[];return u==null?l:K&&u.filter===K?u.filter(a,v):($(u,function(A,E,V){a.call(v,A,E,V)&&l.push(A)}),l)};var Q=e.some=e.any=function(u,a,v){a||(a=e.identity);var l=!1;return u==null?l:O&&u.some===O?u.some(a,v):($(u,function(A,E,V){if(l||(l=a.call(v,A,E,V)))return w}),!!l)};e.contains=e.include=function(u,a){return u==null?!1:T&&u.indexOf===T?u.indexOf(a)!=-1:Q(u,function(v){return v===a})},e.delay=function(u,a){var v=S.call(arguments,2);return setTimeout(function(){return u.apply(null,v)},a)},e.defer=function(u){return e.delay.apply(e,[u,1].concat(S.call(arguments,1)))},e.throttle=function(u){var a,v,l;return function(){a||(a=!0,v=arguments,l=this,be.frame(function(){a=!1,u.apply(l,v)}))}},e.debounce=function(u,a,v){var l,A,E,V,ct,pt=function(){var J=e.now()-V;J<a?l=setTimeout(pt,a-J):(l=null,v||(ct=u.apply(E,A),E=A=null))};return function(){E=this,A=arguments,V=e.now();var J=v&&!l;return l||(l=setTimeout(pt,a)),J&&(ct=u.apply(E,A),E=A=null),ct}},e.defaults=function(u){if(!e.isObject(u))return u;for(var a=1,v=arguments.length;a<v;a++){var l=arguments[a];for(var A in l)u[A]===void 0&&(u[A]=l[A])}return u},e.keys=function(u){if(!e.isObject(u))return[];if(D)return D(u);var a=[];for(var v in u)e.has(u,v)&&a.push(v);return a},e.has=function(u,a){return H.call(u,a)},e.isObject=function(u){return u===Object(u)},e.now=Date.now||function(){return new Date().getTime()},e.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var it=/(.)^/,ht={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},_t=/\\|'|\r|\n|\u2028|\u2029/g,vt=function(u){return"\\"+ht[u]},d=/^\s*(\w|\$)+\s*$/;return e.template=function(u,a,v){!a&&v&&(a=v),a=e.defaults({},a,e.templateSettings);var l=RegExp([(a.escape||it).source,(a.interpolate||it).source,(a.evaluate||it).source].join("|")+"|$","g"),A=0,E="__p+='";u.replace(l,function(J,x,rt,Lt,St){return E+=u.slice(A,St).replace(_t,vt),A=St+J.length,x?E+=`'+
  ((__t=(`+x+`))==null?'':_.escape(__t))+
  '`:rt?E+=`'+
  ((__t=(`+rt+`))==null?'':__t)+
  '`:Lt&&(E+=`';
  `+Lt+`
  __p+='`),J}),E+=`';
  `;var V=a.variable;if(V){if(!d.test(V))throw new Error("variable is not a bare identifier: "+V)}else E=`with(obj||{}){
  `+E+`}
  `,V="obj";E=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
  `+E+`return __p;
  `;var ct;try{ct=new Function(a.variable||"obj","_",E)}catch(J){throw J.source=E,J}var pt=function(J){return ct.call(this,J,e)};return pt.source="function("+V+`){
  `+E+"}",pt},e}()});var bt=dt((Ce,jt)=>{"use strict";var N={},Et={},xt=[],$t=window.Webflow||[],wt=window.jQuery,at=wt(window),ye=wt(document),lt=wt.isFunction,ut=N._=Kt(),Yt=N.tram=Ot()&&wt.tram,Mt=!1,It=!1;Yt.config.hideBackface=!1;Yt.config.keepInherited=!0;N.define=function(e,w,h){Et[e]&&Ut(Et[e]);var L=Et[e]=w(wt,ut,h)||{};return Gt(L),L};N.require=function(e){return Et[e]};function Gt(e){N.env()&&(lt(e.design)&&at.on("__wf_design",e.design),lt(e.preview)&&at.on("__wf_preview",e.preview)),lt(e.destroy)&&at.on("__wf_destroy",e.destroy),e.ready&&lt(e.ready)&&Ee(e)}function Ee(e){if(Mt){e.ready();return}ut.contains(xt,e.ready)||xt.push(e.ready)}function Ut(e){lt(e.design)&&at.off("__wf_design",e.design),lt(e.preview)&&at.off("__wf_preview",e.preview),lt(e.destroy)&&at.off("__wf_destroy",e.destroy),e.ready&&lt(e.ready)&&xe(e)}function xe(e){xt=ut.filter(xt,function(w){return w!==e.ready})}N.push=function(e){if(Mt){lt(e)&&e();return}$t.push(e)};N.env=function(e){var w=window.__wf_design,h=typeof w<"u";if(!e)return h;if(e==="design")return h&&w;if(e==="preview")return h&&!w;if(e==="slug")return h&&window.__wf_slug;if(e==="editor")return window.WebflowEditor;if(e==="test")return window.__wf_test;if(e==="frame")return window!==window.top};var Ft=navigator.userAgent.toLowerCase(),Zt=N.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,ke=N.env.chrome=/chrome/.test(Ft)&&/Google/.test(navigator.vendor)&&parseInt(Ft.match(/chrome\/(\d+)\./)[1],10),_e=N.env.ios=/(ipod|iphone|ipad)/.test(Ft);N.env.safari=/safari/.test(Ft)&&!ke&&!_e;var Rt;Zt&&ye.on("touchstart mousedown",function(e){Rt=e.target});N.validClick=Zt?function(e){return e===Rt||wt.contains(e,Rt)}:function(){return!0};var Qt="resize.webflow orientationchange.webflow load.webflow",Le="scroll.webflow "+Qt;N.resize=Nt(at,Qt);N.scroll=Nt(at,Le);N.redraw=Nt();function Nt(e,w){var h=[],L={};return L.up=ut.throttle(function(M){ut.each(h,function(g){g(M)})}),e&&w&&e.on(w,L.up),L.on=function(M){typeof M=="function"&&(ut.contains(h,M)||h.push(M))},L.off=function(M){if(!arguments.length){h=[];return}h=ut.filter(h,function(g){return g!==M})},L}N.location=function(e){window.location=e};N.env()&&(N.location=function(){});N.ready=function(){Mt=!0,It?Ae():ut.each(xt,Vt),ut.each($t,Vt),N.resize.up()};function Vt(e){lt(e)&&e()}function Ae(){It=!1,ut.each(Et,Gt)}var gt;N.load=function(e){gt.then(e)};function Jt(){gt&&(gt.reject(),at.off("load",gt.resolve)),gt=new wt.Deferred,at.on("load",gt.resolve)}N.destroy=function(e){e=e||{},It=!0,at.triggerHandler("__wf_destroy"),e.domready!=null&&(Mt=e.domready),ut.each(Et,Ut),N.resize.off(),N.scroll.off(),N.redraw.off(),xt=[],$t=[],gt.state()==="pending"&&Jt()};wt(N.ready);Jt();jt.exports=window.Webflow=N});var ne=dt((Pe,ee)=>{"use strict";var te=bt();te.define("brand",ee.exports=function(e){var w={},h=document,L=e("html"),M=e("body"),g=".w-webflow-badge",S=window.location,_=/PhantomJS/i.test(navigator.userAgent),R="fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",H;w.ready=function(){var C=L.attr("data-wf-status"),K=L.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(K)&&S.hostname!==K&&(C=!0),C&&!_&&(H=H||P(),B(),setTimeout(B,500),e(h).off(R,G).on(R,G))};function G(){var C=h.fullScreen||h.mozFullScreen||h.webkitIsFullScreen||h.msFullscreenElement||!!h.webkitFullscreenElement;e(H).attr("style",C?"display: none !important;":"")}function P(){var C=e('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),K=e("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt","").css({marginRight:"4px",width:"26px"}),W=e("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt","Made in Webflow");return C.append(K,W),C[0]}function B(){var C=M.children(g),K=C.length&&C.get(0)===H,W=te.env("editor");if(K){W&&C.remove();return}C.length&&C.remove(),W||M.append(H)}return w})});var re=dt((Oe,ie)=>{"use strict";var qe=bt();qe.define("focus-visible",ie.exports=function(){function e(h){var L=!0,M=!1,g=null,S={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function _(f){return!!(f&&f!==document&&f.nodeName!=="HTML"&&f.nodeName!=="BODY"&&"classList"in f&&"contains"in f.classList)}function R(f){var D=f.type,z=f.tagName;return!!(z==="INPUT"&&S[D]&&!f.readOnly||z==="TEXTAREA"&&!f.readOnly||f.isContentEditable)}function H(f){f.getAttribute("data-wf-focus-visible")||f.setAttribute("data-wf-focus-visible","true")}function G(f){f.getAttribute("data-wf-focus-visible")&&f.removeAttribute("data-wf-focus-visible")}function P(f){f.metaKey||f.altKey||f.ctrlKey||(_(h.activeElement)&&H(h.activeElement),L=!0)}function B(){L=!1}function C(f){_(f.target)&&(L||R(f.target))&&H(f.target)}function K(f){_(f.target)&&f.target.hasAttribute("data-wf-focus-visible")&&(M=!0,window.clearTimeout(g),g=window.setTimeout(function(){M=!1},100),G(f.target))}function W(){document.visibilityState==="hidden"&&(M&&(L=!0),O())}function O(){document.addEventListener("mousemove",b),document.addEventListener("mousedown",b),document.addEventListener("mouseup",b),document.addEventListener("pointermove",b),document.addEventListener("pointerdown",b),document.addEventListener("pointerup",b),document.addEventListener("touchmove",b),document.addEventListener("touchstart",b),document.addEventListener("touchend",b)}function T(){document.removeEventListener("mousemove",b),document.removeEventListener("mousedown",b),document.removeEventListener("mouseup",b),document.removeEventListener("pointermove",b),document.removeEventListener("pointerdown",b),document.removeEventListener("pointerup",b),document.removeEventListener("touchmove",b),document.removeEventListener("touchstart",b),document.removeEventListener("touchend",b)}function b(f){f.target.nodeName&&f.target.nodeName.toLowerCase()==="html"||(L=!1,T())}document.addEventListener("keydown",P,!0),document.addEventListener("mousedown",B,!0),document.addEventListener("pointerdown",B,!0),document.addEventListener("touchstart",B,!0),document.addEventListener("visibilitychange",W,!0),O(),h.addEventListener("focus",C,!0),h.addEventListener("blur",K,!0)}function w(){if(typeof document<"u")try{document.querySelector(":focus-visible")}catch{e(document)}}return{ready:w}})});var ue=dt((Re,se)=>{"use strict";var oe=bt();oe.define("focus",se.exports=function(){var e=[],w=!1;function h(S){w&&(S.preventDefault(),S.stopPropagation(),S.stopImmediatePropagation(),e.unshift(S))}function L(S){var _=S.target,R=_.tagName;return/^a$/i.test(R)&&_.href!=null||/^(button|textarea)$/i.test(R)&&_.disabled!==!0||/^input$/i.test(R)&&/^(button|reset|submit|radio|checkbox)$/i.test(_.type)&&!_.disabled||!/^(button|input|textarea|select|a)$/i.test(R)&&!Number.isNaN(Number.parseFloat(_.tabIndex))||/^audio$/i.test(R)||/^video$/i.test(R)&&_.controls===!0}function M(S){L(S)&&(w=!0,setTimeout(()=>{for(w=!1,S.target.focus();e.length>0;){var _=e.pop();_.target.dispatchEvent(new MouseEvent(_.type,_))}},0))}function g(){typeof document<"u"&&document.body.hasAttribute("data-wf-focus-within")&&oe.env.safari&&(document.addEventListener("mousedown",M,!0),document.addEventListener("mouseup",h,!0),document.addEventListener("click",h,!0))}return{ready:g}})});var ce=dt(($e,ae)=>{"use strict";var kt=bt();kt.define("links",ae.exports=function(e,w){var h={},L=e(window),M,g=kt.env(),S=window.location,_=document.createElement("a"),R="w--current",H=/index\.(html|php)$/,G=/\/$/,P,B;h.ready=h.design=h.preview=C;function C(){M=g&&kt.env("design"),B=kt.env("slug")||S.pathname||"",kt.scroll.off(W),P=[];for(var T=document.links,b=0;b<T.length;++b)K(T[b]);P.length&&(kt.scroll.on(W),W())}function K(T){if(!T.getAttribute("hreflang")){var b=M&&T.getAttribute("href-disabled")||T.getAttribute("href");if(_.href=b,!(b.indexOf(":")>=0)){var f=e(T);if(_.hash.length>1&&_.host+_.pathname===S.host+S.pathname){if(!/^#[a-zA-Z0-9\-\_]+$/.test(_.hash))return;var D=e(_.hash);D.length&&P.push({link:f,sec:D,active:!1});return}if(!(b==="#"||b==="")){var z=_.href===S.href||b===B||H.test(b)&&G.test(B);O(f,R,z)}}}}function W(){var T=L.scrollTop(),b=L.height();w.each(P,function(f){if(!f.link.attr("hreflang")){var D=f.link,z=f.sec,$=z.offset().top,Q=z.outerHeight(),it=b*.5,ht=z.is(":visible")&&$+Q-it>=T&&$+it<=T+b;f.active!==ht&&(f.active=ht,O(D,R,ht))}})}function O(T,b,f){var D=T.hasClass(b);f&&D||!f&&!D||(f?T.addClass(b):T.removeClass(b))}return h})});var le=dt((Ie,fe)=>{"use strict";var Ct=bt();Ct.define("scroll",fe.exports=function(e){var w={WF_CLICK_EMPTY:"click.wf-empty-link",WF_CLICK_SCROLL:"click.wf-scroll"},h=window.location,L=K()?null:window.history,M=e(window),g=e(document),S=e(document.body),_=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(d){window.setTimeout(d,15)},R=Ct.env("editor")?".w-editor-body":"body",H="header, "+R+" > .header, "+R+" > .w-nav:not([data-no-scroll])",G='a[href="#"]',P='a[href*="#"]:not(.w-tab-link):not('+G+")",B='.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',C=document.createElement("style");C.appendChild(document.createTextNode(B));function K(){try{return!!window.frameElement}catch{return!0}}var W=/^#[a-zA-Z0-9][\w:.-]*$/;function O(d){return W.test(d.hash)&&d.host+d.pathname===h.host+h.pathname}let T=typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)");function b(){return document.body.getAttribute("data-wf-scroll-motion")==="none"||T.matches}function f(d,u){var a;switch(u){case"add":a=d.attr("tabindex"),a?d.attr("data-wf-tabindex-swap",a):d.attr("tabindex","-1");break;case"remove":a=d.attr("data-wf-tabindex-swap"),a?(d.attr("tabindex",a),d.removeAttr("data-wf-tabindex-swap")):d.removeAttr("tabindex");break}d.toggleClass("wf-force-outline-none",u==="add")}function D(d){var u=d.currentTarget;if(!(Ct.env("design")||window.$.mobile&&/(?:^|\s)ui-link(?:$|\s)/.test(u.className))){var a=O(u)?u.hash:"";if(a!==""){var v=e(a);v.length&&(d&&(d.preventDefault(),d.stopPropagation()),z(a,d),window.setTimeout(function(){$(v,function(){f(v,"add"),v.get(0).focus({preventScroll:!0}),f(v,"remove")})},d?0:300))}}}function z(d){if(h.hash!==d&&L&&L.pushState&&!(Ct.env.chrome&&h.protocol==="file:")){var u=L.state&&L.state.hash;u!==d&&L.pushState({hash:d},"",d)}}function $(d,u){var a=M.scrollTop(),v=Q(d);if(a!==v){var l=it(d,a,v),A=Date.now(),E=function(){var V=Date.now()-A;window.scroll(0,ht(a,v,V,l)),V<=l?_(E):typeof u=="function"&&u()};_(E)}}function Q(d){var u=e(H),a=u.css("position")==="fixed"?u.outerHeight():0,v=d.offset().top-a;if(d.data("scroll")==="mid"){var l=M.height()-a,A=d.outerHeight();A<l&&(v-=Math.round((l-A)/2))}return v}function it(d,u,a){if(b())return 0;var v=1;return S.add(d).each(function(l,A){var E=parseFloat(A.getAttribute("data-scroll-time"));!isNaN(E)&&E>=0&&(v=E)}),(472.143*Math.log(Math.abs(u-a)+125)-2e3)*v}function ht(d,u,a,v){return a>v?u:d+(u-d)*_t(a/v)}function _t(d){return d<.5?4*d*d*d:(d-1)*(2*d-2)*(2*d-2)+1}function vt(){var{WF_CLICK_EMPTY:d,WF_CLICK_SCROLL:u}=w;g.on(u,P,D),g.on(d,G,function(a){a.preventDefault()}),document.head.insertBefore(C,document.head.firstChild)}return{ready:vt}})});var de=dt((Ne,he)=>{"use strict";var Se=bt();Se.define("touch",he.exports=function(e){var w={},h=window.getSelection;e.event.special.tap={bindType:"click",delegateType:"click"},w.init=function(g){return g=typeof g=="string"?e(g).get(0):g,g?new L(g):null};function L(g){var S=!1,_=!1,R=Math.min(Math.round(window.innerWidth*.04),40),H,G;g.addEventListener("touchstart",P,!1),g.addEventListener("touchmove",B,!1),g.addEventListener("touchend",C,!1),g.addEventListener("touchcancel",K,!1),g.addEventListener("mousedown",P,!1),g.addEventListener("mousemove",B,!1),g.addEventListener("mouseup",C,!1),g.addEventListener("mouseout",K,!1);function P(O){var T=O.touches;T&&T.length>1||(S=!0,T?(_=!0,H=T[0].clientX):H=O.clientX,G=H)}function B(O){if(S){if(_&&O.type==="mousemove"){O.preventDefault(),O.stopPropagation();return}var T=O.touches,b=T?T[0].clientX:O.clientX,f=b-G;G=b,Math.abs(f)>R&&h&&String(h())===""&&(M("swipe",O,{direction:f>0?"right":"left"}),K())}}function C(O){if(S&&(S=!1,_&&O.type==="mouseup")){O.preventDefault(),O.stopPropagation(),_=!1;return}}function K(){S=!1}function W(){g.removeEventListener("touchstart",P,!1),g.removeEventListener("touchmove",B,!1),g.removeEventListener("touchend",C,!1),g.removeEventListener("touchcancel",K,!1),g.removeEventListener("mousedown",P,!1),g.removeEventListener("mousemove",B,!1),g.removeEventListener("mouseup",C,!1),g.removeEventListener("mouseout",K,!1),g=null}this.destroy=W}function M(g,S,_){var R=e.Event(g,{originalEvent:S});e(S.target).trigger(R,_)}return w.instance=w.init(document),w})});ne();re();ue();ce();le();de();})();
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
  
  
  let image1=document.querySelector(".image");
  let image2=document.querySelector(".image-2");
  let image3=document.querySelector(".image-3");
  let image4=document.querySelector(".image-4");
  let image5=document.querySelector(".image-5");
  let image8=document.querySelector(".image-8");
  let image9=document.querySelector(".image-9");
  let image10=document.querySelector(".image-10");
  let image11=document.querySelector(".image-11");
  let image7=document.querySelector(".image-7");
  let bioImage26=document.querySelector(".bio-image-26");
  let divblock24=document.querySelector(".div-block-24");
  let divblock25=document.querySelector(".div-block-25");
  let divblock26=document.querySelector(".div-block-26");
  let divblock27=document.querySelector(".div-block-27");
  let divblock28=document.querySelector(".div-block-28");
  let divblock29=document.querySelector(".div-block-29");
  let capitulo=document.querySelector(".heading");
  let divblock13=document.querySelector(".div-block-13");
  let portefoliodivblock13=document.querySelector(".portefolio-div-block-13");
  let professiondivblock13=document.querySelector(".profession-div-block-13");
  let biodivblock13=document.querySelector(".bio-div-block-13");
  let skillsdivblock13=document.querySelector(".skills-div-block-13");
  let skillsdesignbutton=document.querySelector(".skills-design-button");
  let designskills1=document.querySelector(".skills-div-block-32-1");
  let designskills2=document.querySelector(".skills-div-block-32-2");
  let designskills3=document.querySelector(".skills-div-block-32-3");
  let designskills4=document.querySelector(".skills-div-block-32-4");
  let designskills5=document.querySelector(".skills-div-block-32-5");
  let designskills6=document.querySelector(".skills-div-block-32-6");
  let designskills7=document.querySelector(".skills-div-block-32-7");
  let skillsdivblockdesign=document.querySelector(".skills-div-block-14-design");
  let skillsdivblockdigitalmarketing=document.querySelector(".skills-div-block-14-digitalmarketing");
  let skillsdivblockecommerce=document.querySelector(".skills-div-block-14-ecommerce");
  let skillsdivblock31=document.querySelector(".skills-div-block-31");
  let firstproject=document.querySelector(".portefolio-div-block-55-a");
  let secondproject=document.querySelector(".portefolio-div-block-55-b");
  let thirdproject=document.querySelector(".portefolio-div-block-55-c");
  let projectImage=document.querySelector(".portefolio-div-block-44");
  let link = document.querySelector('.portefolio-div-block-44 a');
  let brandTitle=document.querySelector(".portefolio-a");
  let brandDescription=document.querySelector(".portefolio-b");
  let brandDate=document.querySelector(".portefolio-c");
  let icones=document.querySelector(".portefolio-div-block-46");
  let icon1=document.querySelector(".portefolio-div-block-47");
  let icon2=document.querySelector(".portefolio-div-block-48");
  let icon3=document.querySelector(".portefolio-div-block-49");
  let icon4=document.querySelector(".portefolio-div-block-50");
  let icon5=document.querySelector(".portefolio-div-block-51");
  let icon6=document.querySelector(".portefolio-div-block-52");
  let logo = document.querySelector('.logo');
  
  
  
  function resetMargin() {
      capitulo.classList.remove("transitioning");
      void capitulo.offsetWidth; // Trigger reflow to restart the transition
  }
  
  function image1selected(){
      image1.style.opacity="1";
      image2.style.opacity="0.2";
      image3.style.opacity="0.2";
      image4.style.opacity="0.2";
      image5.style.opacity="0.2";
      capitulo.innerHTML="bio";
      capitulo.classList.add("transitioning");
  
      setTimeout(resetMargin, 200); // Ensure this matches the transition duration
      bioImage26.style.opacity="100%";
      divblock13.style.display="none";
      portefoliodivblock13.style.display="none";
      professiondivblock13.style.display="none";
      biodivblock13.style.display="flex";
      skillsdivblock13.style.display="none";
  }
  function image1selectedb(){
    image8.style.opacity="1";
    image9.style.opacity="0.2";
    image10.style.opacity="0.2";
    image11.style.opacity="0.2";
    image7.style.opacity="0.2";
    capitulo.innerHTML="bio";
    capitulo.classList.add("transitioning");
  
    setTimeout(resetMargin, 200); // Ensure this matches the transition duration
  
    divblock13.style.display="none";
    portefoliodivblock13.style.display="none";
    professiondivblock13.style.display="none";
    biodivblock13.style.display="flex";
    skillsdivblock13.style.display="none";
  }

  function image2selected(){
      image2.style.opacity="1";
      image1.style.opacity="0.2";
      image3.style.opacity="0.2";
      image4.style.opacity="0.2";
      image5.style.opacity="0.2";
      capitulo.innerHTML="education";
      capitulo.classList.add("transitioning");
  
      setTimeout(resetMargin, 200); 
  
      divblock13.style.display="flex";
      portefoliodivblock13.style.display="none";
      professiondivblock13.style.display="none";
      biodivblock13.style.display="none";
      skillsdivblock13.style.display="none";
     
  }
  function image2selectedb(){
    image7.style.opacity="1";
    image8.style.opacity="0.2";
    image9.style.opacity="0.2";
    image10.style.opacity="0.2";
    image11.style.opacity="0.2";
    capitulo.innerHTML="education";
    capitulo.classList.add("transitioning");
  
    setTimeout(resetMargin, 200); 
  
    divblock13.style.display="flex";
    portefoliodivblock13.style.display="none";
    professiondivblock13.style.display="none";
    biodivblock13.style.display="none";
    skillsdivblock13.style.display="none";

  }
  function image3selected(){
      image3.style.opacity="1";
      image2.style.opacity="0.2";
      image1.style.opacity="0.2";
      image4.style.opacity="0.2";
      image5.style.opacity="0.2";
      capitulo.innerHTML="professional experience";
      capitulo.classList.add("transitioning");
  
      setTimeout(resetMargin, 200); 
  
      divblock13.style.display="none";
      portefoliodivblock13.style.display="none";
      professiondivblock13.style.display="flex";
      biodivblock13.style.display="none";
      skillsdivblock13.style.display="none";
  }
  function image3selectedb(){
    image7.style.opacity="0.2";
    image8.style.opacity="0.2";
    image9.style.opacity="1";
    image10.style.opacity="0.2";
    image11.style.opacity="0.2";
    capitulo.innerHTML="professional experience";
    capitulo.classList.add("transitioning");
  
    setTimeout(resetMargin, 200); 
  
    divblock13.style.display="none";
    portefoliodivblock13.style.display="none";
    professiondivblock13.style.display="flex";
    biodivblock13.style.display="none";
    skillsdivblock13.style.display="none";

  }
  function image4selected(){
      image4.style.opacity="1";
      image2.style.opacity="0.2";
      image3.style.opacity="0.2";
      image1.style.opacity="0.2";
      image5.style.opacity="0.2";
      capitulo.innerHTML="skills";
      capitulo.classList.add("transitioning");
  
      setTimeout(resetMargin, 200); 
      divblock13.style.display="none";
      portefoliodivblock13.style.display="none";
      professiondivblock13.style.display="none";
      biodivblock13.style.display="none";
      skillsdivblock13.style.display="flex";
      
  }



  function image4selectedb(){
    image7.style.opacity="0.2";
    image8.style.opacity="0.2";
    image9.style.opacity="0.2";
    image10.style.opacity="1";
    image11.style.opacity="0.2";
    capitulo.innerHTML="skills";
    capitulo.classList.add("transitioning");

    setTimeout(resetMargin, 200); 
    divblock13.style.display="none";
    portefoliodivblock13.style.display="none";
    professiondivblock13.style.display="none";
    biodivblock13.style.display="none";
    skillsdivblock13.style.display="flex";

    
}
  function image5selected(){
      image5.style.opacity="1";
      image2.style.opacity="0.2";
      image3.style.opacity="0.2";
      image4.style.opacity="0.2";
      image1.style.opacity="0.2";
      capitulo.innerHTML="portfolio";
          capitulo.classList.add("transitioning");
  
      setTimeout(resetMargin, 200);
  
      divblock13.style.display="none";
      portefoliodivblock13.style.display="flex";
      professiondivblock13.style.display="none";
      biodivblock13.style.display="none";
      skillsdivblock13.style.display="none";
  }
  
  function image5selectedb(){
    image7.style.opacity="0.2";
    image8.style.opacity="0.2";
    image9.style.opacity="0.2";
    image10.style.opacity="0.2";
    image11.style.opacity="1";
    capitulo.innerHTML="portfolio";
        capitulo.classList.add("transitioning");

    setTimeout(resetMargin, 200);

    divblock13.style.display="none";
    portefoliodivblock13.style.display="flex";
    professiondivblock13.style.display="none";
    biodivblock13.style.display="none";
    skillsdivblock13.style.display="none";

    
}

  
  function toggleSection(section) {
      const allSections = ['design', 'coding', 'ecommerce', 'digitalmarketing'];
      const sectionDiv = document.querySelector(`.skills-div-block-14-${section}`);
      const sectionButton = document.querySelector(`.skills-${section}-button`);
      const sectionSkills = document.querySelectorAll(`.skills-div-block-${section} > div`);
    
      if (sectionDiv.classList.contains('closed')) {
        // Close all other sections
        allSections.forEach(sec => {
          if (sec !== section) {
            const otherSectionDiv = document.querySelector(`.skills-div-block-14-${sec}`);
            const otherSectionButton = document.querySelector(`.skills-${sec}-button`);
            const otherSectionSkills = document.querySelectorAll(`.skills-div-block-${sec} > div`);
    
            otherSectionDiv.classList.add('closed');
            otherSectionButton.innerHTML = "+";
            otherSectionSkills.forEach(skill => skill.style.display = "none");
          }
        });
    
        // Open the selected section
        sectionDiv.classList.remove('closed');
        sectionButton.innerHTML = "-";
        sectionSkills.forEach(skill => skill.style.display = "flex");
      } else {
        // Close the selected section
        sectionDiv.classList.add('closed');
        sectionButton.innerHTML = "+";
        sectionSkills.forEach(skill => skill.style.display = "none");
      }
    }
    
    // Assign the toggleSection function to each button's onclick event
    document.querySelector('.skills-design-button').onclick = () => toggleSection('design');
    document.querySelector('.skills-coding-button').onclick = () => toggleSection('coding');
    document.querySelector('.skills-ecommerce-button').onclick = () => toggleSection('ecommerce');
    document.querySelector('.skills-digitalmarketing-button').onclick = () => toggleSection('digitalmarketing');
    
  
  
  
    function firstprojectdot(){
      firstproject.style.height="8px";
      firstproject.style.width="8px";
      firstproject.style.backgroundColor="rgba(255, 255, 255, 1)";
      secondproject.style.height="5px";
      secondproject.style.width="5px";
      secondproject.style.backgroundColor="rgba(255, 255, 255, 0.2)";
      thirdproject.style.height="5px";
      thirdproject.style.width="5px";
      thirdproject.style.backgroundColor="rgba(255, 255, 255, 0.2)";
      projectImage.style.background="linear-gradient(45deg, #0f0f0f, #3a3a3a)";
      link.setAttribute('href', 'https://www.aiconiclabs.com');
  
  
  
      setTimeout(() => {
          brandTitle.innerHTML="AICONIC LABS";
          brandDescription.innerHTML="ai model agency";
          logo.setAttribute('src', 'images/Frame 1.png');
          brandTitle.classList.remove("portefolio-a");
          void brandTitle.offsetWidth; // Trigger a DOM reflow to reset the animation
          brandTitle.classList.add("portefolio-a");
          brandDescription.classList.remove("portefolio-b");
          void brandDescription.offsetWidth; // Trigger a DOM reflow to reset the animation
          brandDescription.classList.add("portefolio-b");
          brandDate.classList.remove("portefolio-c");
          void brandDate.offsetWidth; // Trigger a DOM reflow to reset the animation
          brandDate.classList.add("portefolio-c");
      }, 650); // Delay of 500ms
  
  
      projectImage.classList.add('rotate');
      logo.classList.add('opacity');
      // Remove the class after the animation ends to reset it for the next click
      setTimeout(() => {
          projectImage.classList.remove('rotate');
          logo.classList.remove('opacity');
      }, 800); // 2000ms matches the duration of the CSS transition
  



    }
  
  
    
    function secondprojectdot(){
      firstproject.style.height="5px";
      firstproject.style.width="5px";
      firstproject.style.backgroundColor="rgba(255, 255, 255, 0.2)";
      secondproject.style.height="8px";
      secondproject.style.width="8px";
      secondproject.style.backgroundColor="rgba(255, 255, 255, 1)";
      thirdproject.style.height="5px";
      thirdproject.style.width="5px";
      thirdproject.style.backgroundColor="rgba(255, 255, 255, 0.2)";
      projectImage.style.background="#EBE43C";
      link.setAttribute('href', 'https://roddvoyage.github.io/myportfolio/project/hovdinq/index.html');
      /**/
  
      setTimeout(() => {
          brandTitle.innerHTML="HOVDING";
          brandDescription.innerHTML="intelligent safety helmet";
          logo.setAttribute('src', 'images/Frame 2.png');
          brandTitle.classList.remove("portefolio-a");
          void brandTitle.offsetWidth; // Trigger a DOM reflow to reset the animation
          brandTitle.classList.add("portefolio-a");
          brandDescription.classList.remove("portefolio-b");
          void brandDescription.offsetWidth; // Trigger a DOM reflow to reset the animation
          brandDescription.classList.add("portefolio-b");
          brandDate.classList.remove("portefolio-c");
          void brandDate.offsetWidth; // Trigger a DOM reflow to reset the animation
          brandDate.classList.add("portefolio-c");
      }, 650); // Delay of 500ms
  
  
  
      projectImage.classList.add('rotate');
      logo.classList.add('opacity');
      // Remove the class after the animation ends to reset it for the next click
      setTimeout(() => {
          projectImage.classList.remove('rotate');
          logo.classList.remove('opacity');
          
      }, 800); // 2000ms matches the duration of the CSS transition
  
  
      // Method 1: Using setAttribute
    }
  
    
    function thirdprojectdot(){
      firstproject.style.height="5px";
      firstproject.style.width="5px";
      firstproject.style.backgroundColor="rgba(255, 255, 255, 0.2)";
      secondproject.style.height="5px";
      secondproject.style.width="5px";
      secondproject.style.backgroundColor="rgba(255, 255, 255, 0.2)";
      thirdproject.style.height="8px";
      thirdproject.style.width="8px";
      thirdproject.style.backgroundColor="rgba(255, 255, 255, 1)";
      projectImage.classList.add('rotate');
      projectImage.style.background="black";
     link.setAttribute('href', 'https://roddvoyage.github.io/myportfolio/projects/solinca/index.html');
  
      setTimeout(() => {
          brandTitle.innerHTML = "SOLINCA";
          brandDescription.innerHTML = "commercial gym (re-branding)";
          logo.setAttribute('src', 'images/Frame 3.png');
          brandTitle.classList.remove("portefolio-a");
          void brandTitle.offsetWidth; // Trigger a DOM reflow to reset the animation
          brandTitle.classList.add("portefolio-a");
          brandDescription.classList.remove("portefolio-b");
          void brandDescription.offsetWidth; // Trigger a DOM reflow to reset the animation
          brandDescription.classList.add("portefolio-b");
          brandDate.classList.remove("portefolio-c");
          void brandDate.offsetWidth; // Trigger a DOM reflow to reset the animation
          brandDate.classList.add("portefolio-c");
      }, 650); // Delay of 500ms
  
  
      logo.classList.add('opacity');
      // Remove the class after the animation ends to reset it for the next click
      setTimeout(() => {
          projectImage.classList.remove('rotate');
          logo.classList.remove('opacity');
      }, 800); // 2000ms matches the duration of the CSS transition
    }

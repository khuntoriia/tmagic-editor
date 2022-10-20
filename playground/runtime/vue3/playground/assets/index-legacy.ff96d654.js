!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}System.register([],(function(e,n){"use strict";return{execute:function(){const r=function(t,e,n){return t()};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var i,o={exports:{}},s="object"==typeof Reflect?Reflect:null,a=s&&"function"==typeof s.apply?s.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};i=s&&"function"==typeof s.ownKeys?s.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var c=Number.isNaN||function(t){return t!=t};function u(){u.init.call(this)}o.exports=u,o.exports.once=function(t,e){return new Promise((function(n,r){function i(n){t.removeListener(e,o),r(n)}function o(){"function"==typeof t.removeListener&&t.removeListener("error",i),n([].slice.call(arguments))}b(t,e,o,{once:!0}),"error"!==e&&function(t,e,n){"function"==typeof t.on&&b(t,"error",e,n)}(t,i,{once:!0})}))},u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var f=10;function h(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function l(t){return void 0===t._maxListeners?u.defaultMaxListeners:t._maxListeners}function d(t,e,n,r){var i,o,s,a;if(h(n),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),s=o[e]),void 0===s)s=o[e]=n,++t._eventsCount;else if("function"==typeof s?s=o[e]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=l(t))>0&&s.length>i&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=t,c.type=e,c.count=s.length,a=c,console&&console.warn&&console.warn(a)}return t}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function v(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=p.bind(r);return i.listener=n,r.wrapFn=i,i}function g(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(i):y(i,i.length)}function m(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function y(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function b(t,e,n,r){if("function"==typeof t.on)r.once?t.once(e,n):t.on(e,n);else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function i(o){r.once&&t.removeEventListener(e,i),n(o)}))}}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return f},set:function(t){if("number"!=typeof t||t<0||c(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");f=t}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||c(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},u.prototype.getMaxListeners=function(){return l(this)},u.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var c=i[t];if(void 0===c)return!1;if("function"==typeof c)a(c,this,e);else{var u=c.length,f=y(c,u);for(n=0;n<u;++n)a(f[n],this,e)}return!0},u.prototype.addListener=function(t,e){return d(this,t,e,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(t,e){return d(this,t,e,!0)},u.prototype.once=function(t,e){return h(e),this.on(t,v(this,t,e)),this},u.prototype.prependOnceListener=function(t,e){return h(e),this.prependListener(t,v(this,t,e)),this},u.prototype.removeListener=function(t,e){var n,r,i,o,s;if(h(e),void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,s||e)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},u.prototype.listeners=function(t){return g(this,t,!0)},u.prototype.rawListeners=function(t){return g(this,t,!1)},u.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):m.call(t,e)},u.prototype.listenerCount=m,u.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]};const $="object"==typeof global&&global&&global.Object===Object&&global;var w="object"==typeof self&&self&&self.Object===Object&&self;const j=$||w||Function("return this")();const O=j.Symbol;var M=Object.prototype,S=M.hasOwnProperty,E=M.toString,_=O?O.toStringTag:void 0;var D=Object.prototype.toString;var x=O?O.toStringTag:void 0;function L(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":x&&x in Object(t)?function(t){var e=S.call(t,_),n=t[_];try{t[_]=void 0;var r=!0}catch(o){}var i=E.call(t);return r&&(e?t[_]=n:delete t[_]),i}(t):function(t){return D.call(t)}(t)}function C(t){return null!=t&&"object"==typeof t}const T=Array.isArray;function A(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function I(t){if(!A(t))return!1;var e=L(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}const k=j["__core-js_shared__"];var P,W=(P=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var N=Function.prototype.toString;function U(t){if(null!=t){try{return N.call(t)}catch(e){}try{return t+""}catch(e){}}return""}var V=/^\[object .+?Constructor\]$/,Y=Function.prototype,H=Object.prototype,B=Y.toString,F=H.hasOwnProperty,R=RegExp("^"+B.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function z(t){return!(!A(t)||(e=t,W&&W in e))&&(I(t)?R:V).test(U(t));var e}function q(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return z(n)?n:void 0}const Q=q(j,"WeakMap");function Z(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}var J=Object.prototype;function K(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function G(t){return C(t)&&"[object Arguments]"==L(t)}var X=Object.prototype,tt=X.hasOwnProperty,et=X.propertyIsEnumerable,nt=G(function(){return arguments}())?G:function(t){return C(t)&&tt.call(t,"callee")&&!et.call(t,"callee")};const rt=nt;var it="object"==typeof e&&e&&!e.nodeType&&e,ot=it&&"object"==typeof n&&n&&!n.nodeType&&n,st=ot&&ot.exports===it?j.Buffer:void 0;const at=(st?st.isBuffer:void 0)||function(){return!1};var ct={};ct["[object Float32Array]"]=ct["[object Float64Array]"]=ct["[object Int8Array]"]=ct["[object Int16Array]"]=ct["[object Int32Array]"]=ct["[object Uint8Array]"]=ct["[object Uint8ClampedArray]"]=ct["[object Uint16Array]"]=ct["[object Uint32Array]"]=!0,ct["[object Arguments]"]=ct["[object Array]"]=ct["[object ArrayBuffer]"]=ct["[object Boolean]"]=ct["[object DataView]"]=ct["[object Date]"]=ct["[object Error]"]=ct["[object Function]"]=ct["[object Map]"]=ct["[object Number]"]=ct["[object Object]"]=ct["[object RegExp]"]=ct["[object Set]"]=ct["[object String]"]=ct["[object WeakMap]"]=!1;var ut="object"==typeof e&&e&&!e.nodeType&&e,ft=ut&&"object"==typeof n&&n&&!n.nodeType&&n,ht=ft&&ft.exports===ut&&$.process,lt=function(){try{var t=ft&&ft.require&&ft.require("util").types;return t||ht&&ht.binding&&ht.binding("util")}catch(e){}}();var dt,pt=lt&&lt.isTypedArray;const vt=pt?(dt=pt,function(t){return dt(t)}):function(t){return C(t)&&Z(t.length)&&!!ct[L(t)]};var gt=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object);const mt=gt;var yt=Object.prototype.hasOwnProperty;const bt=q(j,"Map");const $t=q(j,"DataView");const wt=q(j,"Promise");const jt=q(j,"Set");var Ot="[object Map]",Mt="[object Promise]",St="[object Set]",Et="[object WeakMap]",_t="[object DataView]",Dt=U($t),xt=U(bt),Lt=U(wt),Ct=U(jt),Tt=U(Q),At=L;($t&&At(new $t(new ArrayBuffer(1)))!=_t||bt&&At(new bt)!=Ot||wt&&At(wt.resolve())!=Mt||jt&&At(new jt)!=St||Q&&At(new Q)!=Et)&&(At=function(t){var e=L(t),n="[object Object]"==e?t.constructor:void 0,r=n?U(n):"";if(r)switch(r){case Dt:return _t;case xt:return Ot;case Lt:return Mt;case Ct:return St;case Tt:return Et}return e});const It=At;var kt=Object.prototype.hasOwnProperty;function Pt(t){if(null==t)return!0;if(function(t){return null!=t&&Z(t.length)&&!I(t)}(t)&&(T(t)||"string"==typeof t||"function"==typeof t.splice||at(t)||vt(t)||rt(t)))return!t.length;var e=It(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(K(t))return!function(t){if(!K(t))return mt(t);var e=[];for(var n in Object(t))yt.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t).length;for(var n in t)if(kt.call(t,n))return!1;return!0}class Wt{constructor(e=globalThis.navigator.userAgent,n={}){t(this,"isIos",!1),t(this,"isIphone",!1),t(this,"isIpad",!1),t(this,"isAndroid",!1),t(this,"isAndroidPad",!1),t(this,"isMac",!1),t(this,"isWin",!1),t(this,"isMqq",!1),t(this,"isWechat",!1),t(this,"isWeb",!1),this.isIphone=e.indexOf("iPhone")>=0,this.isIpad=/(iPad).*OS\s([\d_]+)/.test(e),this.isIos=this.isIphone||this.isIpad,this.isAndroid=e.indexOf("Android")>=0,this.isAndroidPad=this.isAndroid&&e.indexOf("Mobile")<0,this.isMac=e.indexOf("Macintosh")>=0,this.isWin=e.indexOf("Windows")>=0,this.isMqq=/QQ\/([\d.]+)/.test(e),this.isWechat=e.indexOf("MicroMessenger")>=0&&e.indexOf("wxwork")<0,this.isWeb=!this.isIos&&!this.isAndroid&&!/(WebOS|BlackBerry)/.test(e),Object.entries(n).forEach((([t,e])=>{this[t]=e}))}}const Nt="magic:common:events:",Ut="magic:common:actions:",Vt="show",Yt="hide",Ht="scrollIntoView",Bt="scrollToTop",Ft=(t,e)=>{if(!t)return!1;if(!t.id)return Ft(t.parentElement,e);const n=e.page?.getNode(t.id);return n||!1},Rt=(t,e,n)=>{const r=Ft(n.target,t);var i;r&&t.emit((i=e).startsWith(Nt)?i:`magic:common:events:${i}`,r)};class zt{constructor(){t(this,"data",{})}set(t,e){this.data[t]=e}get(t){return this.data[t]}}class qt extends o.exports.EventEmitter{constructor(e){super(),t(this,"data",void 0),t(this,"style",void 0),t(this,"events",void 0),t(this,"instance",void 0),t(this,"page",void 0),t(this,"parent",void 0),t(this,"app",void 0),t(this,"store",new zt),this.page=e.page,this.parent=e.parent,this.app=e.app;const{events:n}=e.config;this.data=e.config,this.events=n,this.listenLifeSafe(),this.once("destroy",(()=>{this.instance=null,"function"==typeof this.data.destroy&&this.data.destroy(this),this.listenLifeSafe()}))}listenLifeSafe(){this.once("created",(async t=>{this.instance=t,await this.runCodeBlock("created")})),this.once("mounted",(async t=>{this.instance=t;const e=this.app.eventQueueMap[t.config.id]||[];for(let n=e.shift();n;n=e.shift())this.app.eventHandler(n.eventConfig,n.fromCpt,n.args);await this.runCodeBlock("mounted")}))}async runCodeBlock(t){if(Array.isArray(this.data[t])&&this.app.codeDsl&&!Pt(this.app?.codeDsl))for(const e of this.data[t])this.app.codeDsl[e]&&"function"==typeof this.app?.codeDsl[e]?.content&&await this.app.codeDsl[e].content(this)}}class Qt extends qt{constructor(e){super(e),t(this,"nodes",new Map),this.setNode(e.config.id,this),this.initNode(e.config,this)}initNode(t,e){const n=new qt({config:t,parent:e,page:this,app:this.app});this.setNode(t.id,n),t.items?.forEach((t=>{this.initNode(t,n)}))}getNode(t){return this.nodes.get(t)}setNode(t,e){this.nodes.set(t,e)}deleteNode(t){this.nodes.delete(t)}}class Zt extends o.exports.EventEmitter{constructor(e){if(super(),t(this,"env",void 0),t(this,"codeDsl",void 0),t(this,"pages",new Map),t(this,"page",void 0),t(this,"platform","mobile"),t(this,"jsEngine","browser"),t(this,"designWidth",375),t(this,"components",new Map),t(this,"eventQueueMap",{}),this.env=new Wt(e.ua),this.codeDsl=e.config?.codeBlocks,e.platform&&(this.platform=e.platform),e.jsEngine&&(this.jsEngine=e.jsEngine),e.designWidth&&(this.designWidth=e.designWidth),"mobile"===this.platform||"editor"===this.platform){const t=()=>{const{width:t}=document.documentElement.getBoundingClientRect(),e=t/(this.designWidth/100);document.documentElement.style.fontSize=`${e}px`};t(),document.body.style.fontSize="14px",globalThis.addEventListener("resize",t)}var n;e.transformStyle&&(this.transformStyle=e.transformStyle),e.config&&this.setConfig(e.config,e.curPage),n=this,window.document.body.addEventListener("click",(t=>{Rt(n,"click",t)})),window.document.body.addEventListener("click",(t=>{Rt(n,"click:capture",t)}),!0)}transformStyle(t){if(!t)return{};let e={};const n={};e="string"==typeof t?(t=>{if("string"!=typeof t)return t;const e={};return t.split(";").forEach((t=>{if(!t)return;const n=t.split(":");let r=n.shift(),i=n.join(":");r&&(r=r.replace(/^\s*/,"").replace(/\s*$/,""),i=i.replace(/^\s*/,"").replace(/\s*$/,""),r=r.split("-").map(((t,e)=>e>0?`${t[0].toUpperCase()}${t.substr(1)}`:t)).join(""),e[r]=i)})),e})(t):{...t};const r=["zIndex","opacity","fontWeight"];return Object.entries(e).forEach((([t,e])=>{if("backgroundImage"===t)e&&(n[t]=(t=>!t||/^url/.test(t)||/^linear-gradient/.test(t)?t:`url(${t})`)(e));else if("transform"===t&&"string"!=typeof e){const r=Object.entries(e).map((([t,e])=>e.trim()?("rotate"===t&&(t=>/^(-?\d+)(\.\d+)?$/.test(t))(e)&&(e=`${e}deg`),`${t}(${e})`):"")).join(" ");n[t]=r.trim()?r:"none"}else!r.includes(t)&&e&&/^[-]?[0-9]*[.]?[0-9]*$/.test(e)?n[t]=e/100+"rem":n[t]=e})),n}setConfig(t,e){this.codeDsl=t.codeBlocks,this.pages=new Map,t.items?.forEach((t=>{this.pages.set(t.id,new Qt({config:t,app:this}))})),this.setPage(e||this.page?.data?.id)}setPage(t){let e;t&&(e=this.pages.get(t)),e||(e=this.pages.get(this.pages.keys().next().value)),this.page=e,"magic"!==this.platform&&this.bindEvents()}registerComponent(t,e){this.components.set(t,e)}unregisterComponent(t){this.components.delete(t)}resolveComponent(t){return this.components.get(t)}bindEvents(){if(this.page){this.removeAllListeners();for(const[,t]of this.page.nodes)t.events?.forEach((e=>this.bindEvent(e,`${t.data.id}`)))}}bindEvent(t,e){const{name:n}=t;this.on(`${n}_${e}`,((e,...n)=>{this.eventHandler(t,e,n)}))}emit(t,e,...n){return e?.data?.id?super.emit(`${String(t)}_${e.data.id}`,e,...n):super.emit(t,e,...n)}eventHandler(t,e,n){if(!this.page)throw new Error("当前没有页面");const{method:r,to:i}=t,o=this.page.getNode(i);if(!o)throw`ID为${i}的组件不存在`;if((t=>t.startsWith(Ut))(r))return((t,e)=>{const{instance:n}=e;switch(t.replace(Ut,"")){case Vt:n.show();break;case Yt:n.hide();break;case Ht:n.$el.scrollIntoView({behavior:"smooth"});break;case Bt:window.scrollTo({top:0,behavior:"smooth"})}})(r,o);o.instance?"function"==typeof o.instance[r]&&o.instance[r](e,...n):this.addEventToMap({eventConfig:t,fromCpt:e,args:n})}destroy(){this.removeAllListeners(),this.pages.clear()}addEventToMap(t){this.eventQueueMap[t.eventConfig.to]?this.eventQueueMap[t.eventConfig.to].push(t):this.eventQueueMap[t.eventConfig.to]=[t]}}var Jt={exports:{}};!function(t,e){t.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",s="hour",a="day",c="week",u="month",f="quarter",h="year",l="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),o=n-i<0,s=e.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:a,D:l,h:s,m:o,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",$={};$[b]=g;var w=function(t){return t instanceof S},j=function t(e,n,r){var i;if(!e)return b;if("string"==typeof e){var o=e.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var a=e.name;$[a]=e,i=a}return!r&&i&&(b=i),i||!r&&b},O=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},M=y;M.l=j,M.i=w,M.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function g(t){this.$L=j(t.locale,null,!0),this.parse(t)}var m=g.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!(this.$d.toString()===d)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!M.u(e)||e,f=M.p(t),d=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},p=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,g=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case h:return r?d(1,0):d(31,11);case u:return r?d(1,g):d(0,g+1);case c:var b=this.$locale().weekStart||0,$=(v<b?v+7:v)-b;return d(r?m-$:m+(6-$),g);case a:case l:return p(y+"Hours",0);case s:return p(y+"Minutes",1);case o:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,c=M.p(t),f="set"+(this.$u?"UTC":""),d=(n={},n[a]=f+"Date",n[l]=f+"Date",n[u]=f+"Month",n[h]=f+"FullYear",n[s]=f+"Hours",n[o]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[c],p=c===a?this.$D+(e-this.$W):e;if(c===u||c===h){var v=this.clone().set(l,1);v.$d[d](p),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[M.p(t)]()},m.add=function(r,f){var l,d=this;r=Number(r);var p=M.p(f),v=function(t){var e=O(d);return M.w(e.date(e.date()+Math.round(t*r)),d)};if(p===u)return this.set(u,this.$M+r);if(p===h)return this.set(h,this.$y+r);if(p===a)return v(1);if(p===c)return v(7);var g=(l={},l[o]=e,l[s]=n,l[i]=t,l)[p]||1,m=this.$d.getTime()+r*g;return M.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),o=this.$H,s=this.$m,a=this.$M,c=n.weekdays,u=n.months,f=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},h=function(t){return M.s(o%12||12,t,"0")},l=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:f(n.monthsShort,a,u,3),MMMM:f(u,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,c,2),ddd:f(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:M.s(o,2,"0"),h:h(1),hh:h(2),a:l(o,s,!0),A:l(o,s,!1),m:String(s),mm:M.s(s,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,e){return e||p[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,l,d){var p,v=M.p(l),g=O(r),m=(g.utcOffset()-this.utcOffset())*e,y=this-g,b=M.m(this,g);return b=(p={},p[h]=b/12,p[u]=b,p[f]=b/3,p[c]=(y-m)/6048e5,p[a]=(y-m)/864e5,p[s]=y/n,p[o]=y/e,p[i]=y/t,p)[v]||y,d?b:M.a(b)},m.daysInMonth=function(){return this.endOf(u).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=j(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},g}(),E=S.prototype;return O.prototype=E,[["$ms",r],["$s",i],["$m",o],["$H",s],["$W",a],["$M",u],["$y",h],["$D",l]].forEach((function(t){E[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,S,O),t.$i=!0),O},O.locale=j,O.isDayjs=w,O.unix=function(t){return O(1e3*t)},O.en=$[b],O.Ls=$,O.p={},O}()}(Jt);const Kt=Jt.exports;var Gt={exports:{}};!function(t,e){var n,r,i;t.exports=(n="minute",r=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g,function(t,e,o){var s=e.prototype;o.utc=function(t){return new e({date:t,utc:!0,args:arguments})},s.utc=function(t){var e=o(this.toDate(),{locale:this.$L,utc:!0});return t?e.add(this.utcOffset(),n):e},s.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var a=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var c=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else c.call(this)};var u=s.utcOffset;s.utcOffset=function(t,e){var o=this.$utils().u;if(o(t))return this.$u?0:o(this.$offset)?u.call(this):this.$offset;if("string"==typeof t&&(t=function(t){void 0===t&&(t="");var e=t.match(r);if(!e)return null;var n=(""+e[0]).match(i)||["-",0,0],o=n[0],s=60*+n[1]+ +n[2];return 0===s?0:"+"===o?s:-s}(t),null===t))return this;var s=Math.abs(t)<=16?60*t:t,a=this;if(e)return a.$offset=s,a.$u=0===t,a;if(0!==t){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(s+c,n)).$offset=s,a.$x.$localOffset=c}else a=this.utc();return a};var f=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return f.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var h=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var l=s.diff;s.diff=function(t,e,n){if(t&&this.$u===t.$u)return l.call(this,t,e,n);var r=this.local(),i=o(t).local();return l.call(r,i,e,n)}})}(Gt);const Xt=Gt.exports;Kt.extend(Xt);e("t",((t="")=>t.replace(/\B([A-Z])/g,"-$1").toLowerCase()));const te=(t,e=[])=>{const n=[],r=function(t,e){if(!Array.isArray(e))return null;for(let i=0,o=e.length;i<o;i++){const o=e[i];if(n.push(o),`${o.id}`==`${t}`)return o;if(o.items){const e=r(t,o.items);if(e)return e}n.pop()}return null};return r(t,e),n},ee=Vue.defineComponent({setup(){const t=Vue.ref(),e=Vue.ref(),n=Vue.ref(),r=Vue.computed((()=>t.value?.items?.find((t=>t.id===e.value))||t.value?.items?.[0])),i=document.documentElement.getBoundingClientRect().width,o=new Zt({designWidth:i,config:t.value,platform:"editor"});return globalThis.appInstance=o,Vue.provide("app",o),Vue.watch(r,(async()=>{await Vue.nextTick();const t=document.querySelector(".magic-ui-page");t&&window.magic.onPageElUpdate(t)})),window.magic?.onRuntimeReady({getApp:()=>o,updateRootConfig(n){console.log("update config",n),t.value=n,o?.setConfig(n,e.value)},updatePageId(t){console.log("update page id",t),e.value=t,o?.setPage(t)},select(t){console.log("select config",t),n.value=t;const e=document.getElementById(`${t}`);return e||Vue.nextTick().then((()=>document.getElementById(`${t}`)))},add({config:e,parentId:r}){if(console.log("add config",e),!t.value)throw new Error("error");if(!n.value)throw new Error("error");if(!r)throw new Error("error");const i=te(r,[t.value]).pop();if(!i)throw new Error("未找到父节点");if(i.id!==n.value){const t=i.items?.findIndex((t=>t.id===n.value));i.items?.splice(t+1,0,e)}else i.items?.push(e)},update({config:e,parentId:n}){if(console.log("update config",e),!t.value)throw new Error("error");const r=te(e.id,[t.value]).pop();if(!n)throw new Error("error");const i=te(n,[t.value]).pop();if(!r)throw new Error("未找到目标节点");if(!i)throw new Error("未找到父节点");const o=i.items?.findIndex((t=>t.id===r.id));i.items.splice(o,1,Vue.reactive(e))},remove({id:e,parentId:n}){if(!t.value)throw new Error("error");const r=te(e,[t.value]).pop();if(!r)throw new Error("未找到目标元素");const i=te(n,[t.value]).pop();if(!i)throw new Error("未找到父元素");const o=i.items?.findIndex((t=>t.id===r.id));i.items.splice(o,1)}}),{pageConfig:r}}});const ne=e("_",((t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}))(ee,[["render",function(t,e,n,r,i,o){const s=Vue.resolveComponent("magic-ui-page");return t.pageConfig?(Vue.openBlock(),Vue.createBlock(s,{key:0,config:t.pageConfig},null,8,["config"])):Vue.createCommentVNode("v-if",!0)}],["__file","/home/runner/work/tmagic-editor/tmagic-editor/runtime/vue3/playground/App.vue"]]);Promise.all([r((()=>n.import("./comp-entry-legacy.00da3ab4.js"))),r((()=>n.import("./plugin-entry-legacy.7d9da6d6.js")))]).then((([t,e])=>{const n=Vue.createApp(ne);Object.entries(t.default).forEach((([t,e])=>{n.component(`magic-ui-${t}`,e)})),Object.values(e.default).forEach((t=>{n.use(t)})),n.mount("#app")}))}}}))}();
//# sourceMappingURL=index-legacy.ff96d654.js.map

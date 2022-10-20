System.register(["./index-legacy.ff96d654.js"],(function(t,e){"use strict";var n,o;return{setters:[t=>{n=t.t,o=t._}],execute:function(){const e=Vue.defineComponent({props:{config:{type:Object,default:()=>({})}},setup(t){const e=Vue.getCurrentInstance()?.proxy,o=Vue.inject("app");return Vue.provide("hoc",e),{tagName:Vue.computed((()=>`magic-ui-${n(t.config.type)}`)),style:Vue.computed((()=>o?.transformStyle(t.config.style))),display:()=>{const e=t.config?.display;return"function"==typeof e?e(o):!1!==e}}}}),r=o(e,[["render",function(t,e,n,o,r,i){return t.display()?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(t.tagName),{key:0,id:t.config.id,class:Vue.normalizeClass("magic-ui-component"+(t.config.className?` ${t.config.className}`:"")),style:Vue.normalizeStyle(t.style),config:t.config},null,8,["id","class","style","config"])):Vue.createCommentVNode("v-if",!0)}],["__file","/home/runner/work/tmagic-editor/tmagic-editor/packages/ui/src/Component.vue"]]),i=t=>{const e=Vue.inject("app"),n=e?.page?.getNode(t.config.id),o=Vue.getCurrentInstance()?.proxy;return n?.emit("created",o),Vue.onMounted((()=>{n?.emit("mounted",o)})),Vue.onUnmounted((()=>{n?.emit("destroy",o)})),e},s=Vue.defineComponent({components:{"magic-ui-component":r},props:{config:{type:Object,default:()=>({})}},setup(t){const e=i(t);return{style:Vue.computed((()=>e?.transformStyle(t.config.style||{}))),refresh(){window.location.reload()}}}}),c=["id"],a=o(s,[["render",function(t,e,n,o,r,i){const s=Vue.resolveComponent("magic-ui-component");return Vue.openBlock(),Vue.createElementBlock("div",{id:`${t.config.id||""}`,class:Vue.normalizeClass(`magic-ui-page magic-ui-container magic-layout-${t.config.layout}${t.config.className?` ${t.config.className}`:""}`),style:Vue.normalizeStyle(t.style)},[Vue.renderSlot(t.$slots,"default"),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.config.items,(t=>(Vue.openBlock(),Vue.createBlock(s,{key:t.id,config:t},null,8,["config"])))),128))],14,c)}],["__file","/home/runner/work/tmagic-editor/tmagic-editor/packages/ui/src/page/src/index.vue"]]),u=t=>({show:()=>{t.config.style.display="initial"},hide:()=>{t.config.style.display="none"}}),l=Vue.defineComponent({components:{"magic-ui-component":r},props:{config:{type:Object,default:()=>({})}},setup(t){const e=i(t);return{style:Vue.computed((()=>e?.transformStyle(t.config.style||{}))),display:()=>{const n=t.config?.display;return"function"==typeof n?n(e):!1!==n},...u(t)}}}),f=["id"],d=o(l,[["render",function(t,e,n,o,r,i){const s=Vue.resolveComponent("magic-ui-component");return t.display()?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,id:`${t.config.id||""}`,class:Vue.normalizeClass(`magic-ui-container magic-layout-${t.config.layout}${t.config.className?` ${t.config.className}`:""}`),style:Vue.normalizeStyle(t.style)},[Vue.renderSlot(t.$slots,"default"),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.config.items,(t=>(Vue.openBlock(),Vue.createBlock(s,{key:t.id,config:t},null,8,["config"])))),128))],14,f)):Vue.createCommentVNode("v-if",!0)}],["__file","/home/runner/work/tmagic-editor/tmagic-editor/packages/ui/src/container/src/Container.vue"]]),g=Vue.defineComponent({props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(t){i(t);const e=Vue.getCurrentInstance()?.proxy,n=Vue.reactive([]),o=Vue.computed((()=>["function"==typeof t.config.preAction?t.config.preAction:()=>!0,...n,"function"==typeof t.config.postAction?t.config.postAction:()=>!0]));return{pushAction:function(t){n.push(t)},clickHandler:async function(){for(const n of o.value)if("function"==typeof n&&!1===await n(e,{model:t.model}))break},textConfig:Vue.computed((()=>({type:"text",text:t.config?.text||"",disabledText:t.config?.disabledText||"",html:t.config?.html||""})))}}}),h=o(g,[["render",function(t,e,n,o,r,i){const s=Vue.resolveComponent("magic-ui-text");return Vue.openBlock(),Vue.createElementBlock("button",{class:"magic-ui-button",onClick:e[0]||(e[0]=(...e)=>t.clickHandler&&t.clickHandler(...e))},[Vue.renderSlot(t.$slots,"default",{},(()=>[Vue.createVNode(s,{config:t.textConfig},null,8,["config"])]))])}],["__file","/home/runner/work/tmagic-editor/tmagic-editor/packages/ui/src/button/src/index.vue"]]),p=Vue.defineComponent({props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})},vars:{type:Object,default:()=>({})}},setup(t){i(t);const e=Vue.getCurrentInstance()?.proxy,n=Vue.inject("hoc"),o=Vue.computed((()=>{let o=t.config?.text||"";const{vars:r}=t;if(n?.disabled&&t.config?.disabledText&&(o=t.config.disabledText),"function"==typeof o)return o.bind(e)(e,{model:t.model});if("[object Object]"===Object.prototype.toString.call(r)){let t=o;return Object.entries(r).forEach((([e,n])=>{t=t.replace(new RegExp(`{{${e}}}`,"g"),n)})),t}return o||""}));return{displayText:o}},render(){const t=this.config?.multiple?"magic-ui-text":"magic-ui-text magic-ui-text--single-line";return"function"==typeof this.$slots?.default?Vue.h("div",{class:t},[this.$slots?.default?.()||""]):Vue.h("div",{class:t,...this.displayText?{innerHTML:this.displayText}:{}})}}),m=o(p,[["__file","/home/runner/work/tmagic-editor/tmagic-editor/packages/ui/src/text/src/index.vue"]]),y=Vue.defineComponent({props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup:t=>(i(t),{clickHandler(){t.config.url&&(window.location.href=t.config.url)}})}),w=["src"],v=o(y,[["render",function(t,e,n,o,r,i){return Vue.openBlock(),Vue.createElementBlock("img",{class:"magic-ui-img",src:t.config.src,onClick:e[0]||(e[0]=(...e)=>t.clickHandler&&t.clickHandler(...e))},null,8,w)}],["__file","/home/runner/work/tmagic-editor/tmagic-editor/packages/ui/src/img/src/index.vue"]]);var E={},C={},B={};let A;const V=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];B.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},B.getSymbolTotalCodewords=function(t){return V[t]},B.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},B.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');A=t},B.isKanjiModeEnabled=function(){return void 0!==A},B.toSJIS=function(t){return A(t)};var b={};function N(){this.buffer=[],this.length=0}!function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(o){return n}}}(b),N.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var I=N;function T(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}T.prototype.set=function(t,e,n,o){const r=t*this.size+e;this.data[r]=n,o&&(this.reservedBit[r]=!0)},T.prototype.get=function(t,e){return this.data[t*this.size+e]},T.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},T.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var k=T,M={};!function(t){const e=B.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];const n=Math.floor(t/7)+2,o=e(t),r=145===o?26:2*Math.ceil((o-13)/(2*n-2)),i=[o-7];for(let e=1;e<n-1;e++)i[e]=i[e-1]-r;return i.push(6),i.reverse()},t.getPositions=function(e){const n=[],o=t.getRowColCoords(e),r=o.length;for(let t=0;t<r;t++)for(let e=0;e<r;e++)0===t&&0===e||0===t&&e===r-1||t===r-1&&0===e||n.push([o[t],o[e]]);return n}}(M);var x={};const P=B.getSymbolSize;x.getPositions=function(t){const e=P(t);return[[0,0],[e-7,0],[0,e-7]]};var R={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e=3,n=3,o=40,r=10;function i(e,n,o){switch(e){case t.Patterns.PATTERN000:return(n+o)%2==0;case t.Patterns.PATTERN001:return n%2==0;case t.Patterns.PATTERN010:return o%3==0;case t.Patterns.PATTERN011:return(n+o)%3==0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2==0;case t.Patterns.PATTERN101:return n*o%2+n*o%3==0;case t.Patterns.PATTERN110:return(n*o%2+n*o%3)%2==0;case t.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){const n=t.size;let o=0,r=0,i=0,s=null,c=null;for(let a=0;a<n;a++){r=i=0,s=c=null;for(let u=0;u<n;u++){let n=t.get(a,u);n===s?r++:(r>=5&&(o+=e+(r-5)),s=n,r=1),n=t.get(u,a),n===c?i++:(i>=5&&(o+=e+(i-5)),c=n,i=1)}r>=5&&(o+=e+(r-5)),i>=5&&(o+=e+(i-5))}return o},t.getPenaltyN2=function(t){const e=t.size;let o=0;for(let n=0;n<e-1;n++)for(let r=0;r<e-1;r++){const e=t.get(n,r)+t.get(n,r+1)+t.get(n+1,r)+t.get(n+1,r+1);4!==e&&0!==e||o++}return o*n},t.getPenaltyN3=function(t){const e=t.size;let n=0,r=0,i=0;for(let o=0;o<e;o++){r=i=0;for(let s=0;s<e;s++)r=r<<1&2047|t.get(o,s),s>=10&&(1488===r||93===r)&&n++,i=i<<1&2047|t.get(s,o),s>=10&&(1488===i||93===i)&&n++}return n*o},t.getPenaltyN4=function(t){let e=0;const n=t.data.length;for(let o=0;o<n;o++)e+=t.data[o];return Math.abs(Math.ceil(100*e/n/5)-10)*r},t.applyMask=function(t,e){const n=e.size;for(let o=0;o<n;o++)for(let r=0;r<n;r++)e.isReserved(r,o)||e.xor(r,o,i(t,r,o))},t.getBestMask=function(e,n){const o=Object.keys(t.Patterns).length;let r=0,i=1/0;for(let s=0;s<o;s++){n(s),t.applyMask(s,e);const o=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(s,e),o<i&&(i=o,r=s)}return r}}(R);var L={};const S=b,U=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],_=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];L.getBlocksCount=function(t,e){switch(e){case S.L:return U[4*(t-1)+0];case S.M:return U[4*(t-1)+1];case S.Q:return U[4*(t-1)+2];case S.H:return U[4*(t-1)+3];default:return}},L.getTotalCodewordsCount=function(t,e){switch(e){case S.L:return _[4*(t-1)+0];case S.M:return _[4*(t-1)+1];case S.Q:return _[4*(t-1)+2];case S.H:return _[4*(t-1)+3];default:return}};var j={},z={};const H=new Uint8Array(512),O=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)H[e]=t,O[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)H[e]=H[e-255]}(),z.log=function(t){if(t<1)throw new Error("log("+t+")");return O[t]},z.exp=function(t){return H[t]},z.mul=function(t,e){return 0===t||0===e?0:H[O[t]+O[e]]},function(t){const e=z;t.mul=function(t,n){const o=new Uint8Array(t.length+n.length-1);for(let r=0;r<t.length;r++)for(let i=0;i<n.length;i++)o[r+i]^=e.mul(t[r],n[i]);return o},t.mod=function(t,n){let o=new Uint8Array(t);for(;o.length-n.length>=0;){const t=o[0];for(let i=0;i<n.length;i++)o[i]^=e.mul(n[i],t);let r=0;for(;r<o.length&&0===o[r];)r++;o=o.slice(r)}return o},t.generateECPolynomial=function(n){let o=new Uint8Array([1]);for(let r=0;r<n;r++)o=t.mul(o,new Uint8Array([1,e.exp(r)]));return o}}(j);const F=j;function D(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}D.prototype.initialize=function(t){this.degree=t,this.genPoly=F.generateECPolynomial(this.degree)},D.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=F.mod(e,this.genPoly),o=this.degree-n.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(n,o),t}return n};var $=D,J={},K={},Y={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},q={};const Q="[0-9]+";let Z="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Z=Z.replace(/u/g,"\\u");const X="(?:(?![A-Z0-9 $%*+\\-./:]|"+Z+")(?:.|[\r\n]))+";q.KANJI=new RegExp(Z,"g"),q.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),q.BYTE=new RegExp(X,"g"),q.NUMERIC=new RegExp(Q,"g"),q.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const W=new RegExp("^"+Z+"$"),G=new RegExp("^[0-9]+$"),tt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");q.testKanji=function(t){return W.test(t)},q.testNumeric=function(t){return G.test(t)},q.testAlphanumeric=function(t){return tt.test(t)},function(t){const e=Y,n=q;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,n){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?t.ccBits[0]:n<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(o){return n}}}(K),function(t){const e=B,n=L,o=b,r=K,i=Y,s=e.getBCHDigit(7973);function c(t,e){return r.getCharCountIndicator(t,e)+4}function a(t,e){let n=0;return t.forEach((function(t){const o=c(t.mode,e);n+=o+t.getBitsLength()})),n}t.from=function(t,e){return i.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,o,s){if(!i.isValid(t))throw new Error("Invalid QR Code version");void 0===s&&(s=r.BYTE);const a=8*(e.getSymbolTotalCodewords(t)-n.getTotalCodewordsCount(t,o));if(s===r.MIXED)return a;const u=a-c(s,t);switch(s){case r.NUMERIC:return Math.floor(u/10*3);case r.ALPHANUMERIC:return Math.floor(u/11*2);case r.KANJI:return Math.floor(u/13);case r.BYTE:default:return Math.floor(u/8)}},t.getBestVersionForData=function(e,n){let i;const s=o.from(n,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,n){for(let o=1;o<=40;o++)if(a(e,o)<=t.getCapacity(o,n,r.MIXED))return o}(e,s);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,n,o){for(let r=1;r<=40;r++)if(n<=t.getCapacity(r,o,e))return r}(i.mode,i.getLength(),s)},t.getEncodedBits=function(t){if(!i.isValid(t)||t<7)throw new Error("Invalid QR Code version");let n=t<<12;for(;e.getBCHDigit(n)-s>=0;)n^=7973<<e.getBCHDigit(n)-s;return t<<12|n}}(J);var et={};const nt=B,ot=nt.getBCHDigit(1335);et.getEncodedBits=function(t,e){const n=t.bit<<3|e;let o=n<<10;for(;nt.getBCHDigit(o)-ot>=0;)o^=1335<<nt.getBCHDigit(o)-ot;return 21522^(n<<10|o)};var rt={};const it=K;function st(t){this.mode=it.NUMERIC,this.data=t.toString()}st.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},st.prototype.getLength=function(){return this.data.length},st.prototype.getBitsLength=function(){return st.getBitsLength(this.data.length)},st.prototype.write=function(t){let e,n,o;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),o=parseInt(n,10),t.put(o,10);const r=this.data.length-e;r>0&&(n=this.data.substr(e),o=parseInt(n,10),t.put(o,3*r+1))};var ct=st;const at=K,ut=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function lt(t){this.mode=at.ALPHANUMERIC,this.data=t}lt.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},lt.prototype.getLength=function(){return this.data.length},lt.prototype.getBitsLength=function(){return lt.getBitsLength(this.data.length)},lt.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*ut.indexOf(this.data[e]);n+=ut.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(ut.indexOf(this.data[e]),6)};var ft=lt;const dt=function(t){for(var e=[],n=t.length,o=0;o<n;o++){var r=t.charCodeAt(o);if(r>=55296&&r<=56319&&n>o+1){var i=t.charCodeAt(o+1);i>=56320&&i<=57343&&(r=1024*(r-55296)+i-56320+65536,o+=1)}r<128?e.push(r):r<2048?(e.push(r>>6|192),e.push(63&r|128)):r<55296||r>=57344&&r<65536?(e.push(r>>12|224),e.push(r>>6&63|128),e.push(63&r|128)):r>=65536&&r<=1114111?(e.push(r>>18|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(63&r|128)):e.push(239,191,189)}return new Uint8Array(e).buffer},gt=K;function ht(t){this.mode=gt.BYTE,this.data=new Uint8Array(dt(t))}ht.getBitsLength=function(t){return 8*t},ht.prototype.getLength=function(){return this.data.length},ht.prototype.getBitsLength=function(){return ht.getBitsLength(this.data.length)},ht.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var pt=ht;const mt=K,yt=B;function wt(t){this.mode=mt.KANJI,this.data=t}wt.getBitsLength=function(t){return 13*t},wt.prototype.getLength=function(){return this.data.length},wt.prototype.getBitsLength=function(){return wt.getBitsLength(this.data.length)},wt.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=yt.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}};var vt=wt,Et={exports:{}};!function(t){var e={single_source_shortest_paths:function(t,n,o){var r={},i={};i[n]=0;var s,c,a,u,l,f,d,g=e.PriorityQueue.make();for(g.push(n,0);!g.empty();)for(a in c=(s=g.pop()).value,u=s.cost,l=t[c]||{})l.hasOwnProperty(a)&&(f=u+l[a],d=i[a],(void 0===i[a]||d>f)&&(i[a]=f,g.push(a,f),r[a]=c));if(void 0!==o&&void 0===i[o]){var h=["Could not find a path from ",n," to ",o,"."].join("");throw new Error(h)}return r},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],o=e;o;)n.push(o),t[o],o=t[o];return n.reverse(),n},find_path:function(t,n,o){var r=e.single_source_shortest_paths(t,n,o);return e.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(t){var n,o=e.PriorityQueue,r={};for(n in t=t||{},o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=t.sorter||o.default_sorter,r},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e}(Et),function(t){const e=K,n=ct,o=ft,r=pt,i=vt,s=q,c=B,a=Et.exports;function u(t){return unescape(encodeURIComponent(t)).length}function l(t,e,n){const o=[];let r;for(;null!==(r=t.exec(n));)o.push({data:r[0],index:r.index,mode:e,length:r[0].length});return o}function f(t){const n=l(s.NUMERIC,e.NUMERIC,t),o=l(s.ALPHANUMERIC,e.ALPHANUMERIC,t);let r,i;return c.isKanjiModeEnabled()?(r=l(s.BYTE,e.BYTE,t),i=l(s.KANJI,e.KANJI,t)):(r=l(s.BYTE_KANJI,e.BYTE,t),i=[]),n.concat(o,r,i).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function d(t,s){switch(s){case e.NUMERIC:return n.getBitsLength(t);case e.ALPHANUMERIC:return o.getBitsLength(t);case e.KANJI:return i.getBitsLength(t);case e.BYTE:return r.getBitsLength(t)}}function g(t,s){let a;const u=e.getBestModeForData(t);if(a=e.from(s,u),a!==e.BYTE&&a.bit<u.bit)throw new Error('"'+t+'" cannot be encoded with mode '+e.toString(a)+".\n Suggested mode is: "+e.toString(u));switch(a!==e.KANJI||c.isKanjiModeEnabled()||(a=e.BYTE),a){case e.NUMERIC:return new n(t);case e.ALPHANUMERIC:return new o(t);case e.KANJI:return new i(t);case e.BYTE:return new r(t)}}t.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(g(e,null)):e.data&&t.push(g(e.data,e.mode)),t}),[])},t.fromString=function(n,o){const r=function(t){const n=[];for(let o=0;o<t.length;o++){const r=t[o];switch(r.mode){case e.NUMERIC:n.push([r,{data:r.data,mode:e.ALPHANUMERIC,length:r.length},{data:r.data,mode:e.BYTE,length:r.length}]);break;case e.ALPHANUMERIC:n.push([r,{data:r.data,mode:e.BYTE,length:r.length}]);break;case e.KANJI:n.push([r,{data:r.data,mode:e.BYTE,length:u(r.data)}]);break;case e.BYTE:n.push([{data:r.data,mode:e.BYTE,length:u(r.data)}])}}return n}(f(n,c.isKanjiModeEnabled())),i=function(t,n){const o={},r={start:{}};let i=["start"];for(let s=0;s<t.length;s++){const c=t[s],a=[];for(let t=0;t<c.length;t++){const u=c[t],l=""+s+t;a.push(l),o[l]={node:u,lastCount:0},r[l]={};for(let t=0;t<i.length;t++){const s=i[t];o[s]&&o[s].node.mode===u.mode?(r[s][l]=d(o[s].lastCount+u.length,u.mode)-d(o[s].lastCount,u.mode),o[s].lastCount+=u.length):(o[s]&&(o[s].lastCount=u.length),r[s][l]=d(u.length,u.mode)+4+e.getCharCountIndicator(u.mode,n))}}i=a}for(let e=0;e<i.length;e++)r[i[e]].end=0;return{map:r,table:o}}(r,o),s=a.find_path(i.map,"start","end"),l=[];for(let t=1;t<s.length-1;t++)l.push(i.table[s[t]].node);return t.fromArray(function(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(l))},t.rawSplit=function(e){return t.fromArray(f(e,c.isKanjiModeEnabled()))}}(rt);const Ct=B,Bt=b,At=I,Vt=k,bt=M,Nt=x,It=R,Tt=L,kt=$,Mt=J,xt=et,Pt=K,Rt=rt;function Lt(t,e,n){const o=t.size,r=xt.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=1==(r>>i&1),i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(o-15+i,8,s,!0),i<8?t.set(8,o-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(o-8,8,1,!0)}function St(t,e,n){const o=new At;n.forEach((function(e){o.put(e.mode.bit,4),o.put(e.getLength(),Pt.getCharCountIndicator(e.mode,t)),e.write(o)}));const r=8*(Ct.getSymbolTotalCodewords(t)-Tt.getTotalCodewordsCount(t,e));for(o.getLengthInBits()+4<=r&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);const i=(r-o.getLengthInBits())/8;for(let s=0;s<i;s++)o.put(s%2?17:236,8);return function(t,e,n){const o=Ct.getSymbolTotalCodewords(e),r=Tt.getTotalCodewordsCount(e,n),i=o-r,s=Tt.getBlocksCount(e,n),c=s-o%s,a=Math.floor(o/s),u=Math.floor(i/s),l=u+1,f=a-u,d=new kt(f);let g=0;const h=new Array(s),p=new Array(s);let m=0;const y=new Uint8Array(t.buffer);for(let B=0;B<s;B++){const t=B<c?u:l;h[B]=y.slice(g,g+t),p[B]=d.encode(h[B]),g+=t,m=Math.max(m,t)}const w=new Uint8Array(o);let v,E,C=0;for(v=0;v<m;v++)for(E=0;E<s;E++)v<h[E].length&&(w[C++]=h[E][v]);for(v=0;v<f;v++)for(E=0;E<s;E++)w[C++]=p[E][v];return w}(o,t,e)}function Ut(t,e,n,o){let r;if(Array.isArray(t))r=Rt.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let o=e;if(!o){const e=Rt.rawSplit(t);o=Mt.getBestVersionForData(e,n)}r=Rt.fromString(t,o||40)}}const i=Mt.getBestVersionForData(r,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<i)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+i+".\n")}else e=i;const s=St(e,n,r),c=Ct.getSymbolSize(e),a=new Vt(c);return function(t,e){const n=t.size,o=Nt.getPositions(e);for(let r=0;r<o.length;r++){const e=o[r][0],i=o[r][1];for(let o=-1;o<=7;o++)if(!(e+o<=-1||n<=e+o))for(let r=-1;r<=7;r++)i+r<=-1||n<=i+r||(o>=0&&o<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===o||6===o)||o>=2&&o<=4&&r>=2&&r<=4?t.set(e+o,i+r,!0,!0):t.set(e+o,i+r,!1,!0))}}(a,e),function(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2==0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}(a),function(t,e){const n=bt.getPositions(e);for(let o=0;o<n.length;o++){const e=n[o][0],r=n[o][1];for(let n=-2;n<=2;n++)for(let o=-2;o<=2;o++)-2===n||2===n||-2===o||2===o||0===n&&0===o?t.set(e+n,r+o,!0,!0):t.set(e+n,r+o,!1,!0)}}(a,e),Lt(a,n,0),e>=7&&function(t,e){const n=t.size,o=Mt.getEncodedBits(e);let r,i,s;for(let c=0;c<18;c++)r=Math.floor(c/3),i=c%3+n-8-3,s=1==(o>>c&1),t.set(r,i,s,!0),t.set(i,r,s,!0)}(a,e),function(t,e){const n=t.size;let o=-1,r=n-1,i=7,s=0;for(let c=n-1;c>0;c-=2)for(6===c&&c--;;){for(let n=0;n<2;n++)if(!t.isReserved(r,c-n)){let o=!1;s<e.length&&(o=1==(e[s]>>>i&1)),t.set(r,c-n,o),i--,-1===i&&(s++,i=7)}if(r+=o,r<0||n<=r){r-=o,o=-o;break}}}(a,s),isNaN(o)&&(o=It.getBestMask(a,Lt.bind(null,a,n))),It.applyMask(o,a),Lt(a,n,o),{modules:a,version:e,errorCorrectionLevel:n,maskPattern:o,segments:r}}C.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let n,o,r=Bt.M;return void 0!==e&&(r=Bt.from(e.errorCorrectionLevel,Bt.M),n=Mt.from(e.version),o=It.from(e.maskPattern),e.toSJISFunc&&Ct.setToSJISFunction(e.toSJISFunc)),Ut(t,n,r,o)};var _t={},jt={};!function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});const n=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,o=t.width&&t.width>=21?t.width:void 0,r=t.scale||4;return{width:o,scale:o?4:r,margin:n,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,n){const o=t.getScale(e,n);return Math.floor((e+2*n.margin)*o)},t.qrToImageData=function(e,n,o){const r=n.modules.size,i=n.modules.data,s=t.getScale(r,o),c=Math.floor((r+2*o.margin)*s),a=o.margin*s,u=[o.color.light,o.color.dark];for(let t=0;t<c;t++)for(let n=0;n<c;n++){let l=4*(t*c+n),f=o.color.light;t>=a&&n>=a&&t<c-a&&n<c-a&&(f=u[i[Math.floor((t-a)/s)*r+Math.floor((n-a)/s)]?1:0]),e[l++]=f.r,e[l++]=f.g,e[l++]=f.b,e[l]=f.a}}}(jt),function(t){const e=jt;t.render=function(t,n,o){let r=o,i=n;void 0!==r||n&&n.getContext||(r=n,n=void 0),n||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),r=e.getOptions(r);const s=e.getImageWidth(t.modules.size,r),c=i.getContext("2d"),a=c.createImageData(s,s);return e.qrToImageData(a.data,t,r),function(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}(c,i,s),c.putImageData(a,0,0),i},t.renderToDataURL=function(e,n,o){let r=o;void 0!==r||n&&n.getContext||(r=n,n=void 0),r||(r={});const i=t.render(e,n,r),s=r.type||"image/png",c=r.rendererOpts||{};return i.toDataURL(s,c.quality)}}(_t);var zt={};const Ht=jt;function Ot(t,e){const n=t.a/255,o=e+'="'+t.hex+'"';return n<1?o+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':o}function Ft(t,e,n){let o=t+e;return void 0!==n&&(o+=" "+n),o}zt.render=function(t,e,n){const o=Ht.getOptions(e),r=t.modules.size,i=t.modules.data,s=r+2*o.margin,c=o.color.light.a?"<path "+Ot(o.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",a="<path "+Ot(o.color.dark,"stroke")+' d="'+function(t,e,n){let o="",r=0,i=!1,s=0;for(let c=0;c<t.length;c++){const a=Math.floor(c%e),u=Math.floor(c/e);a||i||(i=!0),t[c]?(s++,c>0&&a>0&&t[c-1]||(o+=i?Ft("M",a+n,.5+u+n):Ft("m",r,0),r=0,i=!1),a+1<e&&t[c+1]||(o+=Ft("h",s),s=0)):r++}return o}(i,r,o.margin)+'"/>',u='viewBox="0 0 '+s+" "+s+'"',l='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+a+"</svg>\n";return"function"==typeof n&&n(null,l),l};const Dt=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},$t=C,Jt=_t,Kt=zt;function Yt(t,e,n,o,r){const i=[].slice.call(arguments,1),s=i.length,c="function"==typeof i[s-1];if(!c&&!Dt())throw new Error("Callback required as last argument");if(!c){if(s<1)throw new Error("Too few arguments provided");return 1===s?(n=e,e=o=void 0):2!==s||e.getContext||(o=n,n=e,e=void 0),new Promise((function(r,i){try{const i=$t.create(n,o);r(t(i,e,o))}catch(s){i(s)}}))}if(s<2)throw new Error("Too few arguments provided");2===s?(r=n,n=e,e=o=void 0):3===s&&(e.getContext&&void 0===r?(r=o,o=void 0):(r=o,o=n,n=e,e=void 0));try{const i=$t.create(n,o);r(null,t(i,e,o))}catch(a){r(a)}}E.create=$t.create,E.toCanvas=Yt.bind(null,Jt.render),E.toDataURL=Yt.bind(null,Jt.renderToDataURL),E.toString=Yt.bind(null,(function(t,e,n){return Kt.render(t,n)}));const qt=Vue.defineComponent({props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(t){i(t);const e=Vue.ref();return Vue.watch((()=>t.config.url),((t="")=>{E.toDataURL(t,((t,n)=>{t&&console.error(t),e.value=n}))}),{immediate:!0}),{imgUrl:e}}}),Qt=["src"],Zt=o(qt,[["render",function(t,e,n,o,r,i){return Vue.openBlock(),Vue.createElementBlock("img",{class:"magic-ui-qrcode",src:t.imgUrl},null,8,Qt)}],["__file","/home/runner/work/tmagic-editor/tmagic-editor/packages/ui/src/qrcode/src/index.vue"]]),Xt=Vue.defineComponent({props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(t){const e=Vue.ref(!1),n=i(t),o=n?.page?.getNode(t.config.id),r=()=>{e.value=!0,n&&n.emit("overlay:open",o)},s=()=>{e.value=!1,n&&n.emit("overlay:close",o)};return n?.on("editor:select",((e,n)=>{n.find((e=>e.id===t.config.id))?r():s()})),{visible:e,openOverlay:r,closeOverlay:s}}});t("default",{page:a,container:d,button:h,text:m,img:v,qrcode:Zt,overlay:o(Xt,[["render",function(t,e,n,o,r,i){const s=Vue.resolveComponent("magic-ui-container");return t.visible?(Vue.openBlock(),Vue.createBlock(s,{key:0,class:"magic-ui-overlay",config:{items:t.config.items}},{default:Vue.withCtx((()=>[Vue.renderSlot(t.$slots,"default")])),_:3},8,["config"])):Vue.createCommentVNode("v-if",!0)}],["__file","/home/runner/work/tmagic-editor/tmagic-editor/packages/ui/src/overlay/src/index.vue"]])})}}}));
//# sourceMappingURL=comp-entry-legacy.00da3ab4.js.map

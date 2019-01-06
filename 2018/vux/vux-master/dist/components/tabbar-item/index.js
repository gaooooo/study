/*!
 * Vux v0.1.3-rc9 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.vuxTabbarItem=n():t.vuxTabbarItem=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(73)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(51),o=e(15);t.exports=function(t){return r(o(t))}},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(6),o=e(12);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(8),o=e(30),i=e(24),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(c){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(22)("wks"),o=e(13),i=e(1).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(35),o=e(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(6).f,o=e(2),i=e(7)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(22)("keys"),o=e(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(14),i=e(18),u=e(26),c=e(6).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(7)},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(10),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1),o=e(14),i=e(48),u=e(5),c="prototype",f=function(t,n,e){var s,a,l,p=t&f.F,d=t&f.G,y=t&f.S,h=t&f.P,v=t&f.B,b=t&f.W,x=d?o:o[n]||(o[n]={}),m=x[c],g=d?r:y?r[n]:(r[n]||{})[c];d&&(e=n);for(s in e)a=!p&&g&&void 0!==g[s],a&&s in x||(l=a?g[s]:e[s],x[s]=d&&"function"!=typeof g[s]?e[s]:v&&a?i(l,r):b&&g[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((x.virtual||(x.virtual={}))[s]=l,t&f.R&&m&&!m[s]&&u(m,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,e){t.exports=!e(4)&&!e(9)(function(){return 7!=Object.defineProperty(e(28)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(18),o=e(29),i=e(36),u=e(5),c=e(2),f=e(17),s=e(53),a=e(20),l=e(60),p=e(7)("iterator"),d=!([].keys&&"next"in[].keys()),y="@@iterator",h="keys",v="values",b=function(){return this};t.exports=function(t,n,e,x,m,g,_){s(e,n,x);var w,O,S,j=function(t){if(!d&&t in k)return k[t];switch(t){case h:return function(){return new e(this,t)};case v:return function(){return new e(this,t)}}return function(){return new e(this,t)}},P=n+" Iterator",E=m==v,M=!1,k=t.prototype,I=k[p]||k[y]||m&&k[m],T=I||j(m),A=m?E?j("entries"):T:void 0,F="Array"==n?k.entries||I:I;if(F&&(S=l(F.call(new t)),S!==Object.prototype&&(a(S,P,!0),r||c(S,p)||u(S,p,b))),E&&I&&I.name!==v&&(M=!0,T=function(){return I.call(this)}),r&&!_||!d&&!M&&k[p]||u(k,p,T),f[n]=T,f[P]=b,m)if(w={values:E?T:j(v),keys:g?T:j(h),entries:A},_)for(O in w)O in k||i(k,O,w[O]);else o(o.P+o.F*(d||M),n,w);return w}},function(t,n,e){var r=e(8),o=e(57),i=e(16),u=e(21)("IE_PROTO"),c=function(){},f="prototype",s=function(){var t,n=e(28)("iframe"),r=i.length,o=">";for(n.style.display="none",e(50).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),s=t.F;r--;)delete s[f][i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(c[f]=r(t),e=new c,c[f]=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(35),o=e(16).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2),o=e(3),i=e(47)(!1),u=e(21)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){t.exports=e(5)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(39),o=e(38);n["default"]={mixins:[r.childMixin],props:{showDot:{type:Boolean,"default":!1},link:[String,Object]},events:{"on-item-click":function(){(0,o.go)(this.link,this.$router)}}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,n){if(!/^javas/.test(t)&&t){var e="object"===("undefined"==typeof t?"undefined":(0,c["default"])(t))||n&&"string"==typeof t&&!/http/.test(t);e?n.go(t):window.location.href=t}}function i(t,n){return!n||n._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,c["default"])(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(n,"__esModule",{value:!0});var u=e(42),c=r(u);n.go=o,n.getUrl=i},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={ready:function(){this.updateIndex()},methods:{updateIndex:function(){if(this.$children){this.number=this.$children.length;for(var t=this.$children,n=0;n<t.length;n++)t[n].index=n,t[n].selected&&(this.index=n)}}},props:{index:{type:Number,"default":0}},watch:{index:function(t,n){this.$children[n].selected=!1,this.$children[t].selected=!0}},data:function(){return{number:this.$children.length}}},r={props:{selected:{type:Boolean,"default":!1}},ready:function(){this.$parent.updateIndex()},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.updateIndex()})},methods:{onItemClick:function(){this.selected=!0,this.$parent.index=this.index,this.$emit("on-item-click")}},watch:{selected:function(t){t&&(this.$parent.index=this.index)}},data:function(){return{index:-1}}};n.parentMixin=e,n.childMixin=r},function(t,n,e){t.exports={"default":e(43),__esModule:!0}},function(t,n,e){t.exports={"default":e(44),__esModule:!0}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(41),i=r(o),u=e(40),c=r(u),f="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":typeof t};n["default"]="function"==typeof c["default"]&&"symbol"===f(i["default"])?function(t){return"undefined"==typeof t?"undefined":f(t)}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":"undefined"==typeof t?"undefined":f(t)}},function(t,n,e){e(68),e(66),e(69),e(70),t.exports=e(14).Symbol},function(t,n,e){e(67),e(71),t.exports=e(26).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(3),o=e(63),i=e(62);t.exports=function(t){return function(n,e,u){var c,f=r(n),s=o(f.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if(c=f[a++],c!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(45);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(11),o=e(34),i=e(19);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&n.push(u);return n}},function(t,n,e){t.exports=e(1).document&&document.documentElement},function(t,n,e){var r=e(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(32),o=e(12),i=e(20),u={};e(5)(u,e(7)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(11),o=e(3);t.exports=function(t,n){for(var e,i=o(t),u=r(i),c=u.length,f=0;c>f;)if(i[e=u[f++]]===n)return e}},function(t,n,e){var r=e(13)("meta"),o=e(10),i=e(2),u=e(6).f,c=0,f=Object.isExtensible||function(){return!0},s=!e(9)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";a(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;a(t)}return t[r].w},d=function(t){return s&&y.NEED&&f(t)&&!i(t,r)&&a(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,n,e){var r=e(6),o=e(8),i=e(11);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(19),o=e(12),i=e(3),u=e(24),c=e(2),f=e(30),s=Object.getOwnPropertyDescriptor;n.f=e(4)?s:function(t,n){if(t=i(t),n=u(n,!0),f)try{return s(t,n)}catch(e){}return c(t,n)?o(!r.f.call(t,n),t[n]):void 0}},function(t,n,e){var r=e(3),o=e(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(n){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,n,e){var r=e(2),o=e(64),i=e(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(23),o=e(15);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),s=c.length;return 0>f||f>=s?t?"":void 0:(i=c.charCodeAt(f),55296>i||i>56319||f+1===s||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,n,e){var r=e(23),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),0>t?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(15);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(46),o=e(54),i=e(17),u=e(3);t.exports=e(31)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){},function(t,n,e){"use strict";var r=e(61)(!0);e(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(1),o=e(2),i=e(4),u=e(29),c=e(36),f=e(56).KEY,s=e(9),a=e(22),l=e(20),p=e(13),d=e(7),y=e(26),h=e(25),v=e(55),b=e(49),x=e(52),m=e(8),g=e(3),_=e(24),w=e(12),O=e(32),S=e(59),j=e(58),P=e(6),E=e(11),M=j.f,k=P.f,I=S.f,T=r.Symbol,A=r.JSON,F=A&&A.stringify,N="prototype",$=d("_hidden"),C=d("toPrimitive"),D={}.propertyIsEnumerable,L=a("symbol-registry"),R=a("symbols"),W=a("op-symbols"),B=Object[N],J="function"==typeof T,G=r.QObject,K=!G||!G[N]||!G[N].findChild,z=i&&s(function(){return 7!=O(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=M(B,n);r&&delete B[n],k(t,n,e),r&&t!==B&&k(B,n,r)}:k,U=function(t){var n=R[t]=O(T[N]);return n._k=t,n},Y=J&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},Q=function(t,n,e){return t===B&&Q(W,n,e),m(t),n=_(n,!0),m(e),o(R,n)?(e.enumerable?(o(t,$)&&t[$][n]&&(t[$][n]=!1),e=O(e,{enumerable:w(0,!1)})):(o(t,$)||k(t,$,w(1,{})),t[$][n]=!0),z(t,n,e)):k(t,n,e)},q=function(t,n){m(t);for(var e,r=b(n=g(n)),o=0,i=r.length;i>o;)Q(t,e=r[o++],n[e]);return t},H=function(t,n){return void 0===n?O(t):q(O(t),n)},V=function(t){var n=D.call(this,t=_(t,!0));return this===B&&o(R,t)&&!o(W,t)?!1:n||!o(this,t)||!o(R,t)||o(this,$)&&this[$][t]?n:!0},X=function(t,n){if(t=g(t),n=_(n,!0),t!==B||!o(R,n)||o(W,n)){var e=M(t,n);return!e||!o(R,n)||o(t,$)&&t[$][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=I(g(t)),r=[],i=0;e.length>i;)o(R,n=e[i++])||n==$||n==f||r.push(n);return r},tt=function(t){for(var n,e=t===B,r=I(e?W:g(t)),i=[],u=0;r.length>u;)o(R,n=r[u++])&&(e?o(B,n):!0)&&i.push(R[n]);return i};J||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===B&&n.call(W,e),o(this,$)&&o(this[$],t)&&(this[$][t]=!1),z(this,t,w(1,e))};return i&&K&&z(B,t,{configurable:!0,set:n}),U(t)},c(T[N],"toString",function(){return this._k}),j.f=X,P.f=Q,e(33).f=S.f=Z,e(19).f=V,e(34).f=tt,i&&!e(18)&&c(B,"propertyIsEnumerable",V,!0),y.f=function(t){return U(d(t))}),u(u.G+u.W+u.F*!J,{Symbol:T});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)d(nt[et++]);for(var nt=E(d.store),et=0;nt.length>et;)h(nt[et++]);u(u.S+u.F*!J,"Symbol",{"for":function(t){return o(L,t+="")?L[t]:L[t]=T(t)},keyFor:function(t){if(Y(t))return v(L,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){K=!0},useSimple:function(){K=!1}}),u(u.S+u.F*!J,"Object",{create:H,defineProperty:Q,defineProperties:q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),A&&u(u.S+u.F*(!J||s(function(){var t=T();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!Y(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&x(n)||(n=function(t,n){return e&&(n=e.call(this,t,n)),Y(n)?void 0:n}),r[1]=n,F.apply(A,r)}}}),T[N][C]||e(5)(T[N],C,T[N].valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(25)("asyncIterator")},function(t,n,e){e(25)("observable")},function(t,n,e){e(65);for(var r=e(1),o=e(5),i=e(17),u=e(7)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;5>f;f++){var s=c[f],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,n){t.exports="<a href=javascript:; class=weui_tabbar_item :class=\"{'weui_bar_item_on': $parent.index === index}\" @click=onItemClick> <div class=weui_tabbar_icon :class=\"{'vux-reddot': showDot}\"> <slot name=icon></slot> </div> <p class=weui_tabbar_label> <slot name=label></slot> </p> </a>"},function(t,n,e){var r,o;r=e(37),o=e(72),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});
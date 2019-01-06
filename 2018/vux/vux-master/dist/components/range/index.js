/*!
 * Vux v0.1.3-rc9 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxRange=e():t.vuxRange=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(56)},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){"use strict";var n=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",r="addEventListener"!==n?"on":"";e.bind=function(t,e,i,o){return t[n](r+e,i,o||!1),i},e.unbind=function(t,e,n,o){return t[i](r+e,n,o||!1),n}},function(t,e,n){var i=n(5);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){"use strict";e.isNumber=function(t){return"number"==typeof t},e.of=function(t,n){return e.isNumber(t)&&e.isNumber(n)?t/100*n:void 0},e.from=function(t,n){return e.isNumber(t)&&e.isNumber(n)?t/n*100:void 0}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(5),r=n(2).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var i=n(4),r=n(41),o=n(51),s=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(48)("keys"),r=n(52);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(42),r=n(36);t.exports=function(t){return i(r(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(29);e["default"]={props:{decimal:Boolean,value:{"default":0,type:Number},min:{type:Number,"default":0},minHTML:String,maxHTML:String,max:{type:Number,"default":100},step:{type:Number,"default":0},disabled:Boolean,disabledOpacity:Number,rangeBarHeight:{type:Number,"default":1},rangeHandleHeight:{type:Number,"default":30}},ready:function(){var t={decimal:this.decimal,start:this.value,min:this.min,max:this.max,minHTML:this.minHTML,maxHTML:this.maxHTML,disable:this.disabled,disabledOpacity:this.disabledOpacity,initialBarWidth:getComputedStyle(this.$el.parentNode).width.replace("px","")-80};0!==this.step&&(t.step=this.step),this.range=new i(this.$el.querySelector(".vux-range-input"),t);var e=(this.rangeHandleHeight-this.rangeBarHeight)/2;this.$el.querySelector(".range-handle").style.top="-"+e+"px",this.$el.querySelector(".range-bar").style.height=this.rangeBarHeight+"px"},watch:{value:function(t){this.range.setStart(t)},"min + max":function(){var t=this.value;t<this.min&&(t=this.min),t>this.max&&(t=this.max),this.range.reInit({min:this.min,max:this.max,value:t}),this.value=t,this.range.setStart(this.value)}}}},function(t,e,n){"use strict";function i(t){var e=getComputedStyle(t,null).width;return"100%"===e||"auto"===e?0:parseInt(e,10)}function r(){a.apply(this,arguments),this.options.step&&this.step(i(this.slider)||this.options.initialBarWidth,i(this.handle)),this.setStart(this.options.start)}var o=n(27),s=n(18),u=n(6),a=n(28);t.exports=r,o(r,a),r.prototype.setStart=function(t){var e=null===t?this.options.min:t,n=u.from(e-this.options.min,this.options.max-this.options.min)||0,i=u.of(n,this.slider.offsetWidth-this.handle.offsetWidth),r=this.options.step?s.find(i,this.steps):i;this.setPosition(r),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},r.prototype.setPosition=function(t){this.handle.style.left=t+"px",this.slider.querySelector(".range-quantity").style.width=t+"px"},r.prototype.onmousedown=function(t){t.touches&&(t=t.touches[0]),this.startX=t.clientX,this.handleOffsetX=this.handle.offsetLeft,this.restrictHandleX=this.slider.offsetWidth-this.handle.offsetWidth,this.unselectable(this.slider,!0)},r.prototype.onmousemove=function(t){t.preventDefault(),t.touches&&(t=t.touches[0]);var e=this.handleOffsetX+t.clientX-this.startX,n=this.steps?s.find(e,this.steps):e;0>=e?this.setPosition(0):e>=this.restrictHandleX?this.setPosition(this.restrictHandleX):this.setPosition(n),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},r.prototype.onmouseup=function(t){this.unselectable(this.slider,!1)}},function(t,e,n){"use strict";function i(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var r=n(23),o=/\s+/,s=Object.prototype.toString;t.exports=function(t){return new i(t)},i.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array(),n=r(e,t);return~n||e.push(t),this.el.className=e.join(" "),this},i.prototype.remove=function(t){if("[object RegExp]"===s.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var e=this.array(),n=r(e,t);return~n&&e.splice(n,1),this.el.className=e.join(" "),this},i.prototype.removeMatching=function(t){for(var e=this.array(),n=0;n<e.length;n++)t.test(e[n])&&this.remove(e[n]);return this},i.prototype.toggle=function(t,e){return this.list?("undefined"!=typeof e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):("undefined"!=typeof e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},i.prototype.array=function(){var t=this.el.getAttribute("class")||"",e=t.replace(/^\s+|\s+$/g,""),n=e.split(o);return""===n[0]&&n.shift(),n},i.prototype.has=i.prototype.contains=function(t){return this.list?this.list.contains(t):!!~r(this.array(),t)}},function(t,e){"use strict";e.find=function(t,e){for(var n=null,i=null,r=e[0],o=0;o<e.length;o++)n=Math.abs(t-r),i=Math.abs(t-e[o]),n>i&&(r=e[o]);return r}},function(t,e,n){"use strict";function i(t,e,n){for(n=n||document.documentElement;t&&t!==n;){if(r(t,e))return t;t=t.parentNode}return r(t,e)?t:null}var r=n(24);t.exports=i},function(t,e,n){"use strict";var i=n(19),r=n(3);e.bind=function(t,e,n,o,s){return r.bind(t,n,function(n){var r=n.target||n.srcElement;n.delegateTarget=i(r,e,!0,t),n.delegateTarget&&o.call(t,n)},s)},e.unbind=function(t,e,n,i){r.unbind(t,e,n,i)}},function(t,e){"use strict";function n(t){return t?i(t):void 0}function i(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},!arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1===arguments.length)return delete this._callbacks["$"+t],this;for(var i,r=0;r<n.length;r++)if(i=n[r],i===e||i.fn===e){n.splice(r,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var i=0,r=n.length;r>i;++i)n[i].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){"use strict";function i(t,e){if(!(this instanceof i))return new i(t,e);if(!t)throw new Error("element required");if(!e)throw new Error("object required");this.el=t,this.obj=e,this._events={}}function r(t){var e=t.split(/ +/);return{name:e.shift(),selector:e.join(" ")}}var o=n(3),s=n(20);t.exports=i,i.prototype.sub=function(t,e,n){this._events[t]=this._events[t]||{},this._events[t][e]=n},i.prototype.bind=function(t,e){var n=r(t),i=this.el,u=this.obj,a=n.name;e=e||"on"+a;var c=[].slice.call(arguments,2),l=function(){var t=[].slice.call(arguments).concat(c);u[e].apply(u,t)};return n.selector?l=s.bind(i,n.selector,a,l):o.bind(i,a,l),this.sub(a,e,l),l},i.prototype.unbind=function(t,e){if(0===arguments.length)return this.unbindAll();if(1===arguments.length)return this.unbindAllOf(t);var n=this._events[t];if(n){var i=n[e];i&&o.unbind(this.el,t,i)}},i.prototype.unbindAll=function(){for(var t in this._events)this.unbindAllOf(t)},i.prototype.unbindAllOf=function(t){var e=this._events[t];if(e)for(var n in e)this.unbind(t,n)}},function(t,e){"use strict";t.exports=function(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e,n){"use strict";function i(t,e){if(!t||1!==t.nodeType)return!1;if(s)return s.call(t,e);for(var n=r.all(e,t.parentNode),i=0;i<n.length;++i)if(n[i]===t)return!0;return!1}var r=n(26),o=Element.prototype,s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;t.exports=i},function(t,e,n){"use strict";function i(t,e){this.obj=e||{},this.el=t}var r=n(21),o=n(3);t.exports=function(t,e){return new i(t,e)},r(i.prototype),i.prototype.bind=function(){function t(r){n.onmouseup&&n.onmouseup(r),o.unbind(document,"mousemove",e),o.unbind(document,"mouseup",t),i.emit("up",r)}function e(t){n.onmousemove&&n.onmousemove(t),i.emit("move",t)}var n=this.obj,i=this;return i.down=function(r){n.onmousedown&&n.onmousedown(r),o.bind(document,"mouseup",t),o.bind(document,"mousemove",e),i.emit("down",r)},o.bind(this.el,"mousedown",i.down),this},i.prototype.unbind=function(){o.unbind(this.el,"mousedown",this.down),this.down=null}},function(t,e){"use strict";function n(t,e){return e.querySelector(t)}e=t.exports=function(t,e){return e=e||document,n(t,e)},e.all=function(t,e){return e=e||document,e.querySelectorAll(t)},e.engine=function(t){if(!t.one)throw new Error(".one callback required");if(!t.all)throw new Error(".all callback required");return e.all=t.all,e}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(){var t=u.call(arguments);if(t.length)return"function"!=typeof t[0]?a.merge(t):void a.inherits.apply(null,t)}var o=n(30),s=i(o),u=Array.prototype.slice,a=t.exports=r;a.extend=function(t,e){var n=this,i=function(){return n.apply(this,arguments)};return a.merge([i,this]),a.inherits(i,this),t&&a.merge([i.prototype,t]),e&&a.merge([i,e]),i.extend=this.extend,i},a.inherits=function(t,e){t.super_=e,s["default"]?t.prototype=(0,s["default"])(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}):(t.prototype=new e,t.prototype.constructor=t)},a.merge=function(t){for(var e=2===t.length?t.shift():{},n=null,i=0,r=t.length;r>i;i++){n=t[i];for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])}return e}},function(t,e,n){"use strict";function i(t,e){return this instanceof i?(this.element=t,this.options=e||{},this.slider=this.create("span","range-bar"),this.hasAppend=!1,void(null!==this.element&&"text"===this.element.type&&this.init())):new i(t,e)}var r=n(25),o=n(22),s=n(17),u=n(6);t.exports=i,i.prototype.bindEvents=function(){this.handle=this.slider.querySelector(".range-handle"),this.touch=o(this.handle,this),this.touch.bind("touchstart","onmousedown"),this.touch.bind("touchmove","onmousemove"),this.touch.bind("touchend","onmouseup"),this.mouse=r(this.handle,this),this.mouse.bind()},i.prototype.hide=function(){this.element.style.display="none"},i.prototype.append=function(){if(!this.hasAppend){var t=this.generate();this.insertAfter(this.element,t)}this.hasAppend=!0},i.prototype.generate=function(){var t={handle:{type:"span",selector:"range-handle"},min:{type:"span",selector:"range-min"},max:{type:"span",selector:"range-max"},quantity:{type:"span",selector:"range-quantity"}};for(var e in t)if(t.hasOwnProperty(e)){var n=this.create(t[e].type,t[e].selector);this.slider.appendChild(n)}return this.slider},i.prototype.create=function(t,e){var n=document.createElement(t);return n.className=e,n},i.prototype.insertAfter=function(t,e){t.parentNode.insertBefore(e,t.nextSibling)},i.prototype.setRange=function(t,e){"number"!=typeof t||"number"!=typeof e||this.options.hideRange||(this.slider.querySelector(".range-min").innerHTML=this.options.minHTML||t,this.slider.querySelector(".range-max").innerHTML=this.options.maxHTML||e)},i.prototype.setValue=function(t,e){var n=u.from(parseFloat(t),e);if("0px"===t||0===e)i=this.options.min;else{var i=u.of(n,this.options.max-this.options.min)+this.options.min;i=this.options.decimal?Math.round(100*i)/100:Math.round(i),i>this.options.max&&(i=this.options.max)}var r=!1;r=this.element.value!==i,this.element.value=i,this.options.callback(),r&&this.changeEvent()},i.prototype.step=function(t,e){for(var n=t-e,i=u.from(this.checkStep(this.options.step),this.options.max-this.options.min),r=u.of(i,n),o=[],s=0;n>=s;s+=r)o.push(s);return this.steps=o,this.steps},i.prototype.checkValues=function(t){t<this.options.min&&(this.options.start=this.options.min),t>this.options.max&&(this.options.start=this.options.max),this.options.min>=this.options.max&&(this.options.min=this.options.max)},i.prototype.checkStep=function(t){return 0>t&&(t=Math.abs(t)),this.options.step=t,this.options.step},i.prototype.disable=function(t){(this.options.disable||t)&&(this.mouse.unbind(),this.touch.unbind()),this.options.disable&&(this.options.disableOpacity&&(this.slider.style.opacity=this.options.disableOpacity),s(this.slider).add("range-bar-disabled"))},i.prototype.unselectable=function(t,e){s(this.slider).has("unselectable")||e!==!0?s(this.slider).remove("unselectable"):s(this.slider).add("unselectable")},i.prototype.changeEvent=function(t){if("function"!=typeof Event&&document.fireEvent)this.element.fireEvent("onchange");else{var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),this.element.dispatchEvent(e)}},i.prototype.init=function(){this.hide(),this.append(),this.bindEvents(),this.checkValues(this.options.start),this.setRange(this.options.min,this.options.max),this.disable()},i.prototype.reInit=function(t){this.options.start=t.value,this.options.min=t.min,this.options.max=t.max,this.disable(!0),this.init()}},function(t,e,n){"use strict";var i=n(16),r={callback:function(){},decimal:!1,disable:!1,disableOpacity:null,hideRange:!1,min:0,max:100,start:null,step:null,vertical:!1};t.exports=function(t,e){e=e||{};for(var n in r)null==e[n]&&(e[n]=r[n]);return new i(t,e)}},function(t,e,n){t.exports={"default":n(31),__esModule:!0}},function(t,e,n){n(53);var i=n(7).Object;t.exports=function(t,e){return i.create(t,e)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(14),r=n(50),o=n(49);t.exports=function(t){return function(e,n,s){var u,a=i(e),c=r(a.length),l=o(s,c);if(t&&n!=n){for(;c>l;)if(u=a[l++],u!=u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var i=n(32);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var i=n(2),r=n(7),o=n(35),s=n(39),u="prototype",a=function(t,e,n){var c,l,h,p=t&a.F,f=t&a.G,d=t&a.S,m=t&a.P,v=t&a.B,y=t&a.W,b=f?r:r[e]||(r[e]={}),x=b[u],g=f?i:d?i[e]:(i[e]||{})[u];f&&(n=e);for(c in n)l=!p&&g&&void 0!==g[c],l&&c in b||(h=l?g[c]:n[c],b[c]=f&&"function"!=typeof g[c]?n[c]:v&&l?o(h,i):y&&g[c]==h?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[u]=t[u],e}(h):m&&"function"==typeof h?o(Function.call,h):h,m&&((b.virtual||(b.virtual={}))[c]=h,t&a.R&&x&&!x[c]&&s(x,c,h)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(11),r=n(47);t.exports=n(1)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=n(2).document&&document.documentElement},function(t,e,n){t.exports=!n(1)&&!n(10)(function(){return 7!=Object.defineProperty(n(8)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(34);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e,n){var i=n(4),r=n(44),o=n(9),s=n(12)("IE_PROTO"),u=function(){},a="prototype",c=function(){var t,e=n(8)("iframe"),i=o.length,r=">";for(e.style.display="none",n(40).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+r),t.close(),c=t.F;i--;)delete c[a][o[i]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[a]=i(t),n=new u,u[a]=null,n[s]=t):n=c(),void 0===e?n:r(n,e)}},function(t,e,n){var i=n(11),r=n(4),o=n(46);t.exports=n(1)?Object.defineProperties:function(t,e){r(t);for(var n,s=o(e),u=s.length,a=0;u>a;)i.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var i=n(38),r=n(14),o=n(33)(!1),s=n(12)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),a=0,c=[];for(n in u)n!=s&&i(u,n)&&c.push(n);for(;e.length>a;)i(u,n=e[a++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var i=n(45),r=n(9);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(2),r="__core-js_shared__",o=i[r]||(i[r]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var i=n(13),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),0>t?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(13),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(5);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){var i=n(37);i(i.S,"Object",{create:n(43)})},function(t,e){},function(t,e){t.exports="<div class=vux-range-input-box style=position:relative;margin-right:30px;margin-left:50px> <input class=vux-range-input v-model=value number> </div>"},function(t,e,n){var i,r;n(54),i=n(15),r=n(55),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});
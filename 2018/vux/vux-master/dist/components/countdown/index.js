/*!
 * Vux v0.1.3-rc9 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxCountdown=e():t.vuxCountdown=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(3)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{time:{type:Number,"default":60},start:{type:Boolean,"default":!0}},methods:{tick:function(){var t=this;this.interval=setInterval(function(){t.time>0?t.time--:(t.stop(),t.index++,t.$emit("on-finish",t.index))},1e3)},stop:function(){clearInterval(this.interval)}},watch:{start:function(t,e){t===!0&&e===!1&&this.time>0&&this.tick(),t===!1&&e===!0&&this.stop()}},ready:function(){this.start&&this.tick()},data:function(){return{interval:null,index:0}}}},function(t,e){t.exports="<span>{{time}}</span>"},function(t,e,o){var n,i;n=o(1),i=o(2),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});
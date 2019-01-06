/*!
 * Vux v0.1.3-rc9 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxStep=e():t.vuxStep=e()}(this,function(){return function(t){function e(o){if(s[o])return s[o].exports;var i=s[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){t.exports=s(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(10),n=o(i);e["default"]={props:{title:{type:String},description:{type:String},stepNumber:{type:Number},stepLast:{type:Boolean,"default":!1},icon:{type:String},status:{type:String},tailWidth:{type:Object}},computed:{iconName:function(){return this.icon||"check"}},components:{Icon:n["default"]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{current:Number,backgroundColor:{type:String,"default":"#fff"},gutter:{type:String,"default":"10px"}},ready:function(){this._mapPropsToChildComponent(),console.log(this.backgroundColor,this.current)},watch:{current:function(){this._mapPropsToChildComponent()}},methods:{_mapPropsToChildComponent:function(){var t=this,e=this.$children.length-1;this.$children.forEach(function(s,o){s.stepNumber=(o+1).toString(),s.stepLast=o===e,o===t.current?s.status="process":o<t.current?s.status="finish":s.status="wait"})}}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.StepItem=e.Step=void 0;var i=s(12),n=o(i),p=s(11),r=o(p);e.Step=n["default"],e.StepItem=r["default"]},function(t,e){},function(t,e){},function(t,e){t.exports="<i class={{className}}></i>"},function(t,e){t.exports="<div class=vux-step-item :class=\" { 'vux-step-item-with-tail' : !stepLast} \"> <div :class=\"'vux-step-item-tail ' + 'vux-step-item-tail-' + status\" v-show=!stepLast :style=\"{right: $parent.gutter}\"></div> <div :class=\"'vux-step-item-head ' + 'vux-step-item-head-' + status\"> <div class=vux-step-item-head-inner> <span v-if=\"!icon && status!='finish'\" class=vux-step-item-icon>{{stepNumber}}</span> <span v-else :class=\"'vux-step-item-icon ' + 'vux-step-item-' + iconName\"> <icon type=success_no_circle class=vux-step-item-checked></icon> </span> </div> </div> <div :class=\"'vux-step-item-main ' + 'vux-step-item-main-' + status\" :style=\"{backgroundColor: $parent.backgroundColor, paddingRight: stepLast ? 0 : $parent.gutter}\"> <span class=vux-step-item-title>{{title}}</span> <div class=vux-step-item-description>{{description}}</div> </div> </div>"},function(t,e){t.exports="<div class=vux-step> <slot></slot> </div>"},function(t,e,s){var o,i;s(5),o=s(1),i=s(7),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,s){var o,i;o=s(2),i=s(8),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,s){var o,i;s(6),o=s(3),i=s(9),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});
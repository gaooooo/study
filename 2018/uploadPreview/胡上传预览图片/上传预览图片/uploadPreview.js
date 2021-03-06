﻿/*
*名称:图片上传本地预览插件 v1.1
*作者:周祥
*时间:2013年11月26日
*介绍:基于JQUERY扩展,图片上传预览插件 目前兼容浏览器(IE 谷歌 火狐) 不支持safari
*插件网站:http://jquery.decadework.com , http://www.oschina.net/code/snippet_1049351_26784
*作者QQ：200592114
*参数说明: Img:图片ID;Width:预览宽度;Height:预览高度;ImgType:支持文件类型;Callback:选择文件显示图片后回调方法;
*使用方法: 
<div>
<img id="ImgPr" width="120" height="120" /></div>
<input type="file" id="up" />
把需要进行预览的IMG标签外 套一个DIV 然后给上传控件ID给予uploadPreview事件
$("#up").uploadPreview({ Img: "ImgPr", Width: 120, Height: 120, ImgType: ["gif", "jpeg", "jpg", "bmp", "png"], Callback: function () { }});
*/  
jQuery.fn.extend({
    uploadPreview: function (opts) { 
        var _self = this,
		_this = $(this);
        opts = jQuery.extend({ 
            Width: 100,
            Height: 100,
            ImgType: ["gif", "jpeg", "jpg", "png"],
            Callback: function () { },
            errorCallback:function(){}
        },
		opts || {});
        _self.getObjectURL = function (file) {
            var url = null;
            if (window.createObjectURL != undefined) {
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file);
            }
            return url
        };
        _this.change(function () {
            var filePathArr = new Array();
            var srcStr = "";
            var isSafari= false;
            if (this.value) {
                if (!RegExp("\.(" + opts.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
                 //   alert("选择文件错误,图片类型必须是" + opts.ImgType.join("，") + "中的一种");
                    this.value = "";
                    //opts.errorCallback("图片类型必须是" + opts.ImgType.join("，") + "中的一种");
                    opts.errorCallback("请选择" + opts.ImgType.join("，") + "类型图片");
                    
                    return false; 
                }
                $.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
                var browserName=navigator.userAgent.toLowerCase();  
                if ($.browser.msie) {
                    try { 
                        for (var i = 0; i < this.files.length; i++) {
                            filePathArr.push(_self.getObjectURL(this.files[i]));
                        }
                    } catch (e) { 
                        _self.select();
                        if (top != self) {
                            window.parent.document.body.focus();
                        } else {
                            _self.blur();
                        }
                        srcStr = document.selection.createRange().text; 
                        document.selection.empty(); 
                    }
                } 

                else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){  
                    
                   //弹框提示
                    filePathArr.push(this.value);
                    isSafari =true;
                }

                else { 
                    for (var i = 0; i < this.files.length; i++) {
                        filePathArr.push(_self.getObjectURL(this.files[i]));
                    }
                }
                opts.Callback(filePathArr, srcStr, _self, isSafari);
            }
        })
    }
});

function IEShow($obj, src) {
	
	 var objPreviewSizeFake = $obj[0]; 
	
	 $obj.css({
        'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image)',
		'visibility': 'hidden'
    });

	 objPreviewSizeFake.filters.item(     
     'DXImageTransform.Microsoft.AlphaImageLoader').src = src;     
 	
     
    $obj.parent().css({
        'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)',
		'width': objPreviewSizeFake.offsetWidth,
		'height': objPreviewSizeFake.offsetHeight
    });
	
    $obj.parent()[0].filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src;
            
}
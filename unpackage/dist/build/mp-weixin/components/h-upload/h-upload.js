(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/h-upload/h-upload"],{"00ae":function(e,i,t){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=t("fbca");function n(e){return c(e)||s(e)||r(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,i){if(e){if("string"===typeof e)return l(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,i):void 0}}function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return l(e)}function l(e,i){(null==i||i>e.length)&&(i=e.length);for(var t=0,o=new Array(i);t<i;t++)o[t]=e[t];return o}var u={props:{imgLimit:{type:Number,default:3},videoLimit:{type:Number,default:1}},data:function(){return{imgArr:[],videoArr:[]}},methods:{chooseImage:function(){(0,o.setIsNewStorage)("false");var i=this.imgArr.length||0,t=this.imgLimit-i,n=this;e.chooseImage({count:t,sizeType:["original","compressed"],success:function(i){console.log(JSON.stringify(i.tempFilePaths)),e.showLoading({title:"Loading...",mask:!0});for(var t=0;t<i.tempFilePaths.length;t++)e.uploadFile({url:"https://www.app8848.com/xlgc/interface/rest/file/upload/util/uploadFile.htm",header:{token:"281179305_eN2cdo2snJhvbJO2ZC3FzMUNLC2kloZWjJavbkak3cXOLC2abp6WbC3F3i3T3mZNbJ0ixc_T3maRZm92ZC3FzCwiloy8bJ5mlo2S3cXOLC2TbJdWbauWbpUixcEKx8f5z8_Kzs_JzM3T3mKhlm9NlpQixi3w3iwibpqRdUak3cX0zs_0zskOzMET3m5WnJSxnpKa3cXidGqMd8zKzcQO3iwijGhvbmUixi3iLC2wlpQixi3iLC2NZp6Tsm6SZt3F3YuajIQMys30zt3T3Y2vbGUixcQT3YyclG9vbE5hbpUixiLWmFrkRV7aSFoYV3TiLC2MZpyKjma0eqBhjIyIbI2k3cXizsQNzcQNx8_Oya9rt4ZHemyFsoWcyN3T3YyXbI20sm6SZt3F3YhTZJziLC20daqMZo22ZC3FzCwidp5WdC3F3m5KbGwiLC2KjJqNtpQixczKzcQT3YqMZo2xnpKa3cXidGqMd8zKzcQO3iwidIhKjJqNlpQixi20Zoy0zMUNy8EigQ"},filePath:i.tempFilePaths[t],name:"file",success:function(i){var t=JSON.parse(i.data);1==t.msgState?(n.imgArr.push(t.result),n.sendData()):e.showToast({title:"上传失败，请重新上传",duration:2e3})}});e.hideLoading()}})},preImage:function(i,t){var o=t.map((function(e){return e}));console.log(i,t),e.previewImage({current:i,urls:o,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮,第"+(e.index+1)+"张图片")},fail:function(e){console.log(e.errMsg)}}})},chooseVedio:function(){(0,o.setIsNewStorage)("false");var i=this;e.chooseVideo({count:this.VideoLimit,sizeType:["original","compressed"],success:function(t){e.showLoading({title:"Loading...",mask:!0}),e.uploadFile({url:"https://www.app8848.com/xlgc/interface/rest/file/upload/util/uploadFile.htm",header:{token:"281179305_eN2cdo2snJhvbJO2ZC3FzMUNLC2kloZWjJavbkak3cXOLC2abp6WbC3F3i3T3mZNbJ0ixc_T3maRZm92ZC3FzCwiloy8bJ5mlo2S3cXOLC2TbJdWbauWbpUixcEKx8f5z8_Kzs_JzM3T3mKhlm9NlpQixi3w3iwibpqRdUak3cX0zs_0zskOzMET3m5WnJSxnpKa3cXidGqMd8zKzcQO3iwijGhvbmUixi3iLC2wlpQixi3iLC2NZp6Tsm6SZt3F3YuajIQMys30zt3T3Y2vbGUixcQT3YyclG9vbE5hbpUixiLWmFrkRV7aSFoYV3TiLC2MZpyKjma0eqBhjIyIbI2k3cXizsQNzcQNx8_Oya9rt4ZHemyFsoWcyN3T3YyXbI20sm6SZt3F3YhTZJziLC20daqMZo22ZC3FzCwidp5WdC3F3m5KbGwiLC2KjJqNtpQixczKzcQT3YqMZo2xnpKa3cXidGqMd8zKzcQO3iwidIhKjJqNlpQixi20Zoy0zMUNy8EigQ"},filePath:t.tempFilePath,name:"file",success:function(t){var o=JSON.parse(t.data);console.log("datas+++++"),console.log(o),1==o.msgState?(i.videoArr.push(o.result),i.sendData()):e.showToast({title:"上传失败，请重新上传",duration:2e3}),e.hideLoading()}})}})},delImage:function(e){this.imgArr.splice(e,1),this.sendData()},delVideo:function(e){this.videoArr.splice(e,1),this.sendData()},cleanAll:function(){this.imgArr=[],this.videoArr=[]},sendData:function(){var e=[],i=[],t={img:"",video:""};e.push.apply(e,n(this.imgArr)),i.push.apply(i,n(this.videoArr)),t.img=e,t.video=i,this.$emit("upload",t)},screenchange:function(e){this.$emit("schange",e.detail.fullScreen)},fulls:function(){console.log("播放～！！！"),this.videoContext=e.createVideoContext("myVideo"),this.videoContext.requestFullScreen()}}};i.default=u}).call(this,t("543d")["default"])},"8d92":function(e,i,t){},"8e32":function(e,i,t){"use strict";t.r(i);var o=t("00ae"),n=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(i,e,(function(){return o[e]}))}(a);i["default"]=n.a},9244:function(e,i,t){"use strict";var o,n=function(){var e=this,i=e.$createElement;e._self._c},a=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return o}))},e4e1:function(e,i,t){"use strict";var o=t("8d92"),n=t.n(o);n.a},fb12:function(e,i,t){"use strict";t.r(i);var o=t("9244"),n=t("8e32");for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);t("e4e1");var r,s=t("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);i["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/h-upload/h-upload-create-component',
    {
        'components/h-upload/h-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("fb12"))
        })
    },
    [['components/h-upload/h-upload-create-component']]
]);

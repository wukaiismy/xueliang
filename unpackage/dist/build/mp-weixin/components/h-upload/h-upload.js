(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/h-upload/h-upload"],{"00ae":function(i,e,t){"use strict";(function(i){function t(i){return r(i)||a(i)||o(i)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(i,e){if(i){if("string"===typeof i)return s(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);return"Object"===t&&i.constructor&&(t=i.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(i,e):void 0}}function a(i){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(i))return Array.from(i)}function r(i){if(Array.isArray(i))return s(i)}function s(i,e){(null==e||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c={props:{imgLimit:{type:Number,default:3},videoLimit:{type:Number,default:1}},data:function(){return{imgArr:[],videoArr:[]}},methods:{chooseImage:function(){var e=this.imgArr.length||0,t=this.imgLimit-e,n=this;i.chooseImage({count:t,sizeType:["original","compressed"],success:function(e){console.log(JSON.stringify(e.tempFilePaths)),i.showLoading({title:"Loading...",mask:!0});for(var t=0;t<e.tempFilePaths.length;t++)i.uploadFile({url:"https://www.app8848.com/interface/rest/file/upload/util/uploadFile.htm",header:{token:"281179305_eN2cdo2snJhvbJO2ZC3FzMUNLC2kloZWjJavbkak3cXOLC2abp6WbC3F3i3T3mZNbJ0ixc_T3maRZm92ZC3FzCwiloy8bJ5mlo2S3cXOLC2TbJdWbauWbpUixcEKx8f5z8_Kzs_JzM3T3mKhlm9NlpQixi3w3iwibpqRdUak3cX0zs_0zskOzMET3m5WnJSxnpKa3cXidGqMd8zKzcQO3iwijGhvbmUixi3iLC2wlpQixi3iLC2NZp6Tsm6SZt3F3YuajIQMys30zt3T3Y2vbGUixcQT3YyclG9vbE5hbpUixiLWmFrkRV7aSFoYV3TiLC2MZpyKjma0eqBhjIyIbI2k3cXizsQNzcQNx8_Oya9rt4ZHemyFsoWcyN3T3YyXbI20sm6SZt3F3YhTZJziLC20daqMZo22ZC3FzCwidp5WdC3F3m5KbGwiLC2KjJqNtpQixczKzcQT3YqMZo2xnpKa3cXidGqMd8zKzcQO3iwidIhKjJqNlpQixi20Zoy0zMUNy8EigQ"},filePath:e.tempFilePaths[t],name:"file",success:function(e){var t=JSON.parse(e.data);1==t.msgState?(n.imgArr.push(t.result),n.sendData()):i.showToast({title:"上传失败，请重新上传",duration:2e3})}});i.hideLoading()}})},preImage:function(e,t){var n=t.map((function(i){return i}));console.log(e,t),i.previewImage({current:e,urls:n,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(i){console.log("选中了第"+(i.tapIndex+1)+"个按钮,第"+(i.index+1)+"张图片")},fail:function(i){console.log(i.errMsg)}}})},chooseVedio:function(){var e=this;i.chooseVideo({count:this.VideoLimit,sizeType:["original","compressed"],success:function(t){i.showLoading({title:"Loading...",mask:!0}),i.uploadFile({url:"https://www.app8848.com/interface/rest/file/upload/util/uploadFile.htm",header:{token:"281179305_eN2cdo2snJhvbJO2ZC3FzMUNLC2kloZWjJavbkak3cXOLC2abp6WbC3F3i3T3mZNbJ0ixc_T3maRZm92ZC3FzCwiloy8bJ5mlo2S3cXOLC2TbJdWbauWbpUixcEKx8f5z8_Kzs_JzM3T3mKhlm9NlpQixi3w3iwibpqRdUak3cX0zs_0zskOzMET3m5WnJSxnpKa3cXidGqMd8zKzcQO3iwijGhvbmUixi3iLC2wlpQixi3iLC2NZp6Tsm6SZt3F3YuajIQMys30zt3T3Y2vbGUixcQT3YyclG9vbE5hbpUixiLWmFrkRV7aSFoYV3TiLC2MZpyKjma0eqBhjIyIbI2k3cXizsQNzcQNx8_Oya9rt4ZHemyFsoWcyN3T3YyXbI20sm6SZt3F3YhTZJziLC20daqMZo22ZC3FzCwidp5WdC3F3m5KbGwiLC2KjJqNtpQixczKzcQT3YqMZo2xnpKa3cXidGqMd8zKzcQO3iwidIhKjJqNlpQixi20Zoy0zMUNy8EigQ"},filePath:t.tempFilePath,name:"file",success:function(t){var n=JSON.parse(t.data);console.log("datas+++++"),console.log(n),1==n.msgState?(e.videoArr.push(n.result),e.sendData()):i.showToast({title:"上传失败，请重新上传",duration:2e3}),i.hideLoading()}})}})},delImage:function(i){this.imgArr.splice(i,1),this.sendData()},delVideo:function(i){this.videoArr.splice(i,1),this.sendData()},cleanAll:function(){this.imgArr=[],this.videoArr=[]},sendData:function(){var i=[],e=[],n={img:"",video:""};i.push.apply(i,t(this.imgArr)),e.push.apply(e,t(this.videoArr)),n.img=i,n.video=e,this.$emit("upload",n)},screenchange:function(i){this.$emit("schange",i.detail.fullScreen)},fulls:function(){console.log("播放～！！！"),this.videoContext=i.createVideoContext("myVideo"),this.videoContext.requestFullScreen()}}};e.default=c}).call(this,t("543d")["default"])},"8d92":function(i,e,t){},"8e32":function(i,e,t){"use strict";t.r(e);var n=t("00ae"),o=t.n(n);for(var a in n)"default"!==a&&function(i){t.d(e,i,(function(){return n[i]}))}(a);e["default"]=o.a},dd14:function(i,e,t){"use strict";var n,o=function(){var i=this,e=i.$createElement;i._self._c},a=[];t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return n}))},e4e1:function(i,e,t){"use strict";var n=t("8d92"),o=t.n(n);o.a},fb12:function(i,e,t){"use strict";t.r(e);var n=t("dd14"),o=t("8e32");for(var a in o)"default"!==a&&function(i){t.d(e,i,(function(){return o[i]}))}(a);t("e4e1");var r,s=t("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/h-upload/h-upload-create-component',
    {
        'components/h-upload/h-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("fb12"))
        })
    },
    [['components/h-upload/h-upload-create-component']]
]);

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tabBar/Data"],{"02f0":function(t,n,e){"use strict";var o=e("112b"),i=e.n(o);i.a},"112b":function(t,n,e){},"38c8":function(t,n,e){"use strict";var o={"uni-nav-bar":function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"8265"))},"uni-icons":function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"8d28"))},"w-picker":function(){return e.e("components/w-picker/w-picker").then(e.bind(null,"8461"))}},i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))},5447:function(t,n,e){"use strict";e.r(n);var o=e("8fe7"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"8fe7":function(t,n,e){"use strict";(function(t){function o(t){return c(t)||s(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return r(t)}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){e.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(e("8265"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/h-upload/h-upload").then(function(){return resolve(e("fb12"))}.bind(null,e)).catch(e.oe)},h={components:{uniNavBar:u,hUpload:l},data:function(){return{type1:[],typeNum1:0,type2:[],typeNum2:0,type2Index:0,dates:"",upData:{type:"0",category:"0",time:"点击选择",address:"选择地点",longitude:"",latitude:"",content:"",imgList:"",videoSrc:""},imgList:[],videoList:[],typeList:[],childList:[],disabled:!0}},onReady:function(){this.getType(),this.dates=this.getNowFormatDate()},methods:{tosts:function(){this.type2.length<=1&&t.showToast({title:"请先选择类型",duration:2e3,icon:"none"})},getNowFormatDate:function(){var t=new Date,n="-",e=":",o=t.getMonth()+1,i=t.getDate();o>=1&&o<=9&&(o="0"+o),i>=0&&i<=9&&(i="0"+i);var a=t.getFullYear()+n+o+n+i+" "+t.getHours()+e+t.getMinutes()+e+t.getSeconds();return a},schange:function(t){console.log(111),console.log(t)},setAttachData:function(t){console.log(222),console.log(t),this.imgList=t.img,this.videoList=t.video,console.log(this.imgList)},updataJump:function(){var n=this;console.log("上报提交"),console.log(this.upData),this.upData.imgList=this.imgList,this.upData.videoSrc=this.videoList,console.log(this.upData),"0"!=this.upData.type?"0"!=this.upData.category?"点击选择"!=this.upData.time?"选择地点"!=this.upData.address?""!=this.upData.content?0!=this.upData.imgList.length||0!=this.upData.videoSrc.length?(t.showLoading({title:"loading"}),this.$http.post("/interface/rest/http/xlwb/xlgc-wb-xcx-grzx-wysb.htm",this.upData,{params:{}}).then((function(e){t.hideLoading(),console.log("上报结果++++++"),console.log(e),1==e.data.msgState?(n.cleanData(),t.showToast({title:e.data.msg,duration:2e3})):t.showToast({title:e.data.msg,duration:2e3,icon:"none"})})).catch((function(n){console.log(n),t.hideLoading()}))):t.showModal({content:"请上传图片/视频",showCancel:!1,confirmText:"确定"}):t.showModal({content:"请输入事件描述",showCancel:!1,confirmText:"确定"}):t.showModal({content:"请选择事发地点",showCancel:!1,confirmText:"确定"}):t.showModal({content:"请选择上报时间",showCancel:!1,confirmText:"确定"}):t.showModal({content:"请选择类别",showCancel:!1,confirmText:"确定"}):t.showModal({content:"请选择类型",showCancel:!1,confirmText:"确定"})},ontrueGetList:function(){this.dates=this.getNowFormatDate()},getType:function(){var n=this;this.$http.get("/interface/rest/http/condition/xltz-sjlxlb.htm",{params:{}}).then((function(e){if(1==e.data.msgState){var i=[{id:"0",name:"点击选择"}],a=e.data.result;n.typeList=[].concat(i,o(a)),n.type1=n.typeChange(n.typeList),n.type2=n.typeChange(i)}else t.showToast({title:e.data.msg,duration:2e3,icon:"none"})})).catch((function(t){console.log(t)}))},getType1:function(){var n=this;this.$http.get("/interface/rest/http/xlwb/xlgc-wb-xcx-sjlbxz.htm",{params:{}}).then((function(e){if(console.log("事件类别"),console.log(e),1==e.data.msgState){var i=[{id:"0",name:"点击选择"}],a=e.data.list,s=[].concat(i,o(a));n.type2=n.typeChange(s)}else t.showToast({title:e.data.msg,duration:2e3,icon:"none"})})).catch((function(t){console.log(t)}))},typeChange:function(t){var n=[];for(var e in t)n.push(t[e].name);return n},cleanData:function(){this.$refs.upload.cleanAll();var t={type:"0",category:"0",time:"点击选择",address:"选择地点",longitude:"",latitude:"",content:"",imgList:""};this.typeNum1=0,this.typeNum2=0,this.imgList=[],this.upData=t},sizeTypeChange:function(t){var n=parseInt(t.detail.value);this.typeNum1=n,this.upData.type=this.typeList[n].id;var e=this.typeList[n].child,i=[{id:"0",name:"点击选择"}];this.childList=[].concat(i,o(e)),this.type2=this.typeChange(this.childList),this.disabled=!1},sizeType2Change:function(t){var n=parseInt(t.detail.value);this.typeNum2=n,this.upData.category=this.childList[n].id},get_location:function(){var n=this;t.showLoading({title:"加载中",mask:!0}),t.getSetting({success:function(e){t.hideLoading(),e.authSetting["scope.userLocation"]?n.chooseLocation():t.authorize({scope:"scope.userLocation",success:function(){n.chooseLocation()},fail:function(){t.showToast({title:"无法获取地图权限",duration:2e3,icon:"none"})}})}})},chooseLocation:function(){var n=this;t.chooseLocation({success:function(t){console.log(t.name),console.log(t.address),console.log(t.longitude),console.log(t.latitude),n.upData.address=t.name,n.upData.longitude=t.longitude,n.upData.latitude=t.latitude}})},showPicker:function(){this.$refs.date1.show()},onConfirm:function(t,n){this.upData.time=t.result,console.log(t.result)},upLoadImg:function(){console.log("根据选择调用不同的api")}}};n.default=h}).call(this,e("543d")["default"])},d9a1:function(t,n,e){"use strict";e.r(n);var o=e("38c8"),i=e("5447");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("02f0");var s,c=e("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);n["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tabBar/Data-create-component',
    {
        'components/tabBar/Data-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d9a1"))
        })
    },
    [['components/tabBar/Data-create-component']]
]);

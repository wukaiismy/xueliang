(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/details"],{"0fb0":function(t,e,n){"use strict";var i={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"f9cd"))},"uni-steps":function(){return n.e("components/uni-steps/uni-steps").then(n.bind(null,"3a19"))},"uni-list":function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"616a"))},"uni-list-item":function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"21be"))},"uni-popup":function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"47a9"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.statusChange(t.detailData.status));t.$mp.data=Object.assign({},{$root:{m0:n}})},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"2e49":function(t,e,n){"use strict";n.r(e);var i=n("aa35"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"72e9":function(t,e,n){"use strict";(function(t){n("4fdd"),n("921b");i(n("66fd"));var e=i(n("bf3d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},aa35:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("4795"));o(n("76bc"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return l(t)||r(t)||c(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function l(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(t,e,n,i,o,a,s){try{var c=t[a](s),r=c.value}catch(l){return void n(l)}c.done?e(r):Promise.resolve(r).then(i,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){d(a,i,o,s,c,"next",t)}function c(t){d(a,i,o,s,c,"throw",t)}s(void 0)}))}}var f=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("f9cd"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/uni-steps/uni-steps").then(function(){return resolve(n("3a19"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/uni-list/uni-list").then(function(){return resolve(n("616a"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/uni-list-item/uni-list-item").then(function(){return resolve(n("21be"))}.bind(null,n)).catch(n.oe)},b=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("47a9"))}.bind(null,n)).catch(n.oe)},v={components:{uniNavBar:f,uniSteps:p,uniList:g,uniListItem:m,uniPopup:b},data:function(){return{id:"",showtip1:"center",detailData:{},imgList:[],active:1,type1:[],category:[],userFeedbackHidden:!0,feedbackContent:"",latitude:30.663429,longitude:104.072422,covers:[{latitude:30.663429,longitude:104.072422,iconPath:"../../static/location.png",width:50,height:50}],isfull:!1}},onLoad:function(t){var e=JSON.parse(t.data);this.id=e.id,console.log(this.id),this.getType(),this.getType1()},onReady:function(){this.loadNewsList()},methods:{clk:function(e){this.isfull||(console.log(e),this.videoContext=t.createVideoContext("'vi'+index1"),this.videoContext.requestFullScreen(),this.videoContext.play(),this.isfull=!this.isfull)},getType:function(){var e=this;this.$http.get("/interface/rest/http/xlwb/xlgc-wb-xcx-sjlxxz.htm",{params:{}}).then((function(n){console.log("事件类型"),console.log(n),1==n.data.msgState?e.type1=n.data.list:t.showLoading({title:"获取事件类型失败"})})).catch((function(t){console.log(t)}))},getType1:function(){var e=this;this.$http.get("/interface/rest/http/xlwb/xlgc-wb-xcx-sjlbxz.htm",{params:{}}).then((function(n){console.log("事件类别"),console.log(n),1==n.data.msgState?e.category=n.data.list:t.showLoading({title:"获取事件类别失败"})})).catch((function(t){console.log(t)}))},typeChange:function(){for(var t=0;t<this.type1.length;t++)this.type1[t].id==this.detailData.type&&(this.detailData.type=this.type1[t].name);return"无"},typeChange1:function(){for(var t=0;t<this.category.length;t++)this.category[t].id==this.detailData.category&&(this.detailData.category=this.category[t].name);return"无"},loadNewsList:function(){var e=this;return h(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.showLoading({title:"加载中..."}),e.$http.get("/interface/rest/http/xlwb/xlgc-wb-xcx-sjzx-sjxq.htm",{params:{id:e.id}}).then((function(n){if(t.hideLoading(),console.log(n),1==n.data.msgState){var i=n.data.list;console.log("list"),console.log(i),e.detailData=i[0],e.covers[0].latitude=i[0].latitude,e.covers[0].longitude=i[0].longitude,e.processingProcess(),e.typeChange1(),e.typeChange()}else t.showToast({title:"请求失败"})})).catch((function(e){console.log(e),t.hideLoading()}));case 2:case"end":return n.stop()}}),n)})))()},imgsrc:function(){if(this.detailData.imgsrc.length>0){var t=this.detailData.imgsrc.split(",");console.log(t),this.detailData.imgList=a(t)}},processingProcess:function(){var t=this.detailData.jd.split(",");console.log(t);for(var e=[],n=0;n<t.length;n++){var i=t[n].split("  ");console.log(i);var o={};o.title=i[0],o.desc=i[1],e.push(o)}console.log(e),e[2].desc.length>=e[3].desc.length&&e.splice(3,1),e[3].desc.length>=e[4].desc.length&&e.splice(4,1),console.log(e),this.detailData.processingProcess=e},statusChange:function(t){switch(t){case 0:return"待处理";case 1:return"待办";case 2:return"待办结";case 3:return"已办结";case 4:return"已办结";default:return"待处理"}},back:function(){t.navigateBack({delta:1})},callPhone:function(e){console.log(e),t.makePhoneCall({phoneNumber:e})},scroll:function(t){console.log(t.detail.scrollTop)},previewImage:function(e){var n=e.target.dataset.src;console.log("current"),console.log(n),t.previewImage({current:n,urls:this.detailData.imgsrc})},submitMsg:function(){var t=this;3!=this.detailData.status&&4!=this.detailData.status&&(console.log("確認完成"),this.$nextTick((function(){t.$refs.showtip.open()})))},alertMsg:function(){var t=this;console.log("我要反馈"),this.$nextTick((function(){t.$refs.showtip1.open()}))},submitFeedbackContent:function(){var e=this,n={feedback_content:this.feedbackContent,id:this.id};this.$refs.showtip1.close(),t.showLoading({title:"loading"}),this.$http.post("/interface/rest/http/xlwb/xlgc-wb-xcx-sjzx-wyfk.htm",n).then((function(n){t.hideLoading(),console.log(n.data),1==n.data.msgState&&(e.detailData.feedback_content=e.feedbackContent),t.showToast({title:n.data.msg,duration:2e3})})).catch((function(e){console.log(e),t.hideLoading()}))},submitOver:function(){var e=this;this.$refs.showtip.close(),this.$http.get("/interface/rest/http/xlwb/xlgc-wb-xcx-sjzx-clwc.htm",{params:{id:this.id}}).then((function(n){console.log(n),1==n.data.msgState?(t.showToast({title:n.data.msg,duration:2e3}),setTimeout((function(){e.back()}),1e3)):t.showLoading({title:"请求失败"})})).catch((function(t){console.log(t)}))},cancel:function(t){this.$refs.showtip.close(),this.$refs.showtip1.close()}}};e.default=v}).call(this,n("543d")["default"])},b948:function(t,e,n){"use strict";var i=n("c6d2"),o=n.n(i);o.a},bf3d:function(t,e,n){"use strict";n.r(e);var i=n("0fb0"),o=n("2e49");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("b948");var s,c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=r.exports},c6d2:function(t,e,n){}},[["72e9","common/runtime","common/vendor"]]]);
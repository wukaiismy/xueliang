(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/video-details/video-details"],{"5b33":function(t,e,n){"use strict";n.r(e);var o=n("7976"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},7976:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("212b"))}.bind(null,n)).catch(n.oe)},i={components:{uniPopup:o},data:function(){return{src:"rtmp://58.200.131.2:1935/livetv/hunantv",list:[],currentRate:1,rateShow:!1,detailData:{},title:"2019-12-12 13:24:30 星期三",adress:"美星镇-新街村",isMenu:!1,isshow:!1,isMenu1:!0,isIos:!0,feedbackContent:""}},onLoad:function(t){this.detailData=JSON.parse(t.data).item,console.log("this.detailData"),console.log(this.detailData),this.loadNewsList()},mounted:function(){t.showLoading({title:"loading"})},onReady:function(){this.videoContext=t.createLivePlayerContext("myVideo",this),this.videoContext.play()},methods:{fullscreenchange:function(t){console.log(t.detail.fullScreen)},statechange:function(e){console.log("live-player code:",e.detail.code),2002==e.detail.code&&t.hideLoading(),2003==e.detail.code&&this.videoContext.requestFullScreen({direction:90}),-2301==e.detail.code&&t.showToast({icon:"none",title:"网络断连，请重新退出连接！",duration:2e3}),t.hideLoading()},backup:function(){t.navigateBack({delta:1})},clk:function(){var t=this;t.isMenu=!t.isMenu},loadNewsList:function(){var e=this;console.log(this.detailData);var n={pageNo:1,pageCount:1e3};this.$http.get("/interface/rest/http/xlwb/xlgc-wb-xcx-yjqz-ssjksp-x.htm",{params:n}).then((function(n){1==n.data.msgState?(e.list=n.data.list,console.log(e.list)):t.showToast({icon:"none",title:"监控列表获取失败！",duration:2e3})})).catch((function(e){console.log(e),t.showToast({icon:"none",title:"监控列表获取失败！",duration:2e3})}))},videoErrorCallback:function(e){t.showModal({content:e.detail.errMsg,showCancel:!1})},sosPopup:function(){var t=this;console.log("我要反馈"),this.videoContext.exitFullScreen(),this.$nextTick((function(){t.$refs.showtip1.open(),t.isshow=!0,t.isMenu1=!0}))},cancel:function(t){this.$refs.showtip1.close(),this.videoContext.requestFullScreen({direction:90}),this.isshow=!1},submitHelp:function(){var e=this,n={note:this.feedbackContent,id:this.detailData.id};console.log("一键求助"),t.showLoading({title:"loading"}),this.$http.post("/interface/rest/http/xlwb/xlgc-wb-xcx-yjqz-x.htm",n).then((function(n){t.hideLoading(),console.log(n.data),n.data.msgState,t.showToast({title:n.data.msg,duration:2e3}),setTimeout((function(){e.cancel()}),1e3)})).catch((function(e){console.log(e),t.hideLoading()}))},choosed:function(){this.isMenu1=!1,"android"==t.getSystemInfoSync().platform&&(this.isIos=!1,this.videoContext.exitFullScreen())},closeedMenu:function(){this.isMenu1=!0},switchRate:function(t){var e=this,n=this;n.detailData=t,this.$nextTick((function(){e.src="rtmp://58.200.131.2:1935/livetv/hunantv"})),this.isMenu1=!0}}};e.default=i}).call(this,n("543d")["default"])},a2e9:function(t,e,n){"use strict";var o={"uni-popup":function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"212b"))}},i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},a473:function(t,e,n){"use strict";var o=n("b666"),i=n.n(o);i.a},b666:function(t,e,n){},c823:function(t,e,n){"use strict";(function(t){n("700f"),n("921b");o(n("66fd"));var e=o(n("efda"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},efda:function(t,e,n){"use strict";n.r(e);var o=n("a2e9"),i=n("5b33");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("a473");var s,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=u.exports}},[["c823","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0099":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("fbca"),i=s(t("2f89"));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(){Promise.all([t.e("common/vendor"),t.e("components/uni-icons/uni-icons")]).then(function(){return resolve(t("8d28"))}.bind(null,t)).catch(t.oe)},r={components:{uniIcons:a},data:function(){return{imageList:[],name:"",idCard:"",phone:"",array:["请选择","男","女"],sexIndex:0,workList:[],workIndex:0,userInfo:{avatar:"",username:"",idcard:"",sex:"0",phone:"",unit:"0"}}},onShow:function(){e.hideHomeButton()},onLoad:function(){this.workList=this.typeChange(i.default.subs1)},methods:{jumpRegster:function(){e.redirectTo({url:"../login/login"})},typeChange:function(e){var n=[];for(var t in e)console.log(e[t].type),n.push(e[t].type);return n},submitMsg:function(){if(console.log(this.userInfo),this.userInfo.avatar.length<1)e.showModal({content:"请上传头像!",showCancel:!1,confirmText:"确定"});else if(this.userInfo.username.length<1)e.showModal({content:"请输入姓名!",showCancel:!1,confirmText:"确定"});else if("0"!=this.userInfo.sex)if(this.userInfo.idcard.length<10)e.showModal({content:"请输入身份证号!",showCancel:!1,confirmText:"确定"});else if(this.userInfo.phone.length<5)e.showModal({content:"请输入电话号码!",showCancel:!1,confirmText:"确定"});else if("0"!=this.userInfo.unit){var n={avatar:this.userInfo.avatar,username:this.userInfo.username,idcard:this.userInfo.idcard,sex:this.userInfo.sex.toString(),phone:this.userInfo.phone,unit:this.userInfo.unit.toString()};console.log(n),e.showLoading({title:"loading"}),(0,o.setTokenStorage)("register"),this.$http.post("/interface/rest/http/xlwb/xlgc-wb-jdh-yhzc.htm",n).then((function(n){console.log(n),e.hideLoading(),1==n.data.msgState&&e.redirectTo({url:"../regres/regres"})})).catch((function(e){console.log(e)}))}else e.showModal({content:"请选择所在单位!",showCancel:!1,confirmText:"确定"});else e.showModal({content:"请选择性别!",showCancel:!1,confirmText:"确定"})},chooseImage:function(){var n=this;e.chooseImage({count:1,success:function(t){e.showLoading({title:"上传中...",mask:!0}),e.uploadFile({url:"https://app8848.com/interface/rest/file/upload/util/uploadFile.htm",header:{token:"311288512_eN2cdo2snJhQbJO2mC36zszJLC2kaomWjJlQbklk3cXOLC2lbpFWbC363i3T3ZmNbJ0ixcAT3ZlRmZ92mC36zCPiaoy8bJGZao2S3cXOLC2TbJdWbluWbpUixcE1x8vGzckPzc3Hy8vT3Z1haZ9Napvixi3iLC2SmpG1tpvixcE1yMUT3ZGWnJSxnp1l3cXiGnin6362GXCd3iPij5hQbZUixi3iLC2Papvixi3OzsEOzsEOzsEOzsEOzsEiLC2NmpFTsZFSmt363Rp3ZxixieaAYt3T3Y2Qb5UixcvT3Yyca59QbEGhbpUixiLlhb8Wg2slWKflraniLC2Mmpy1jZl0eVBhjIyIbI2k3cXix8nMysvPx8dfnkdHek1UtoWyeklH3iPijJhQjYuxnp1l3cXisFunpt3T3YuJVoyljklk3cXPLC21bZl03cXibYVTbC3T3YVMmo22mC36zszJx8kHLC21jJVNsZFSmt363ZOWdpOWjJkiLC2Ie4VMmo2WmC363ZOWdpOWjJkifv"},filePath:t.tempFilePaths[0],name:"file",success:function(t){var o=JSON.parse(t.data);1==o.msgState?n.userInfo.avatar=o.result:e.showToast({title:"上传失败，请重新上传",duration:2e3})}}),e.hideLoading()}})},workListChange:function(e){this.userInfo.unit=parseInt(e.detail.value)},sizeTypeChange:function(e){this.userInfo.sex=parseInt(e.detail.value)}}};n.default=r}).call(this,t("543d")["default"])},"0af7":function(e,n,t){"use strict";var o=t("8683"),i=t.n(o);i.a},"278c":function(e,n,t){"use strict";var o={"uni-icons":function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-icons/uni-icons")]).then(t.bind(null,"8d28"))}},i=function(){var e=this,n=e.$createElement;e._self._c},s=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return o}))},"37fe":function(e,n,t){"use strict";t.r(n);var o=t("0099"),i=t.n(o);for(var s in o)"default"!==s&&function(e){t.d(n,e,(function(){return o[e]}))}(s);n["default"]=i.a},"4aec":function(e,n,t){"use strict";t.r(n);var o=t("278c"),i=t("37fe");for(var s in i)"default"!==s&&function(e){t.d(n,e,(function(){return i[e]}))}(s);t("0af7");var a,r=t("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=c.exports},"7e61":function(e,n,t){"use strict";(function(e){t("700f"),t("921b");o(t("66fd"));var n=o(t("4aec"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},8683:function(e,n,t){}},[["7e61","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"24fc":function(t,e,a){"use strict";var s=a("ef44"),i=a.n(s);i.a},"9d61":function(t,e,a){"use strict";a.r(e);var s=a("ad37"),i=a.n(s);for(var r in s)"default"!==r&&function(t){a.d(e,t,function(){return s[t]})}(r);e["default"]=i.a},ad37:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=c(a("a34a")),i=c(a("784f")),r=c(a("65d7"));function c(t){return t&&t.__esModule?t:{default:t}}function n(t,e,a,s,i,r,c){try{var n=t[r](c),o=n.value}catch(l){return void a(l)}n.done?e(o):Promise.resolve(o).then(s,i)}function o(t){return function(){var e=this,a=arguments;return new Promise(function(s,i){var r=t.apply(e,a);function c(t){n(r,s,i,c,o,"next",t)}function o(t){n(r,s,i,c,o,"throw",t)}c(void 0)})}}var l=a("bec1"),u={data:function(){return{searching:"noSearch",searchVal:"",hotTags:[],historyTags:[],searchResult:[],popData:[{popularity:99,photo:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",scenicName:"玉舍国家森林公园",site:"贵州省贵阳市花溪区青岩镇",summary:"具有东方威尼斯之称，夜景十分的漂亮",scenicTags:["#宗教场所","#历史景观","#红色旅游","#自然景观"],scCount:27,voicePrice:8}],pageSize:30,pageNumber:1,rqStatus:"上拉加载更多"}},onLoad:function(){var e=o(s.default.mark(function e(){var a,i,r,c,n;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.isLogin();case 2:if(a=e.sent,a){e.next=8;break}return e.next=6,l.logining();case 6:i=e.sent,i||(r=getCurrentPages(),c=r[r.length-1].route.slice(r[r.length-1].route.lastIndexOf("/")+1),t.redirectTo({url:"../userInfoAuth/userInfoAuth?goBack="+c}));case 8:this.getSeach(),n=t.getStorageSync("search_list"),n&&(this.historyTags=n);case 11:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),onShow:function(){var t=o(s.default.mark(function t(){return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{clickTag:function(t){this.searchVal=t,this.search()},search:function(){var e=this,a=t.getStorageSync("search_list");if(a){for(var s=0;s<a.length;s++)if(a[s]==this.searchVal){a.splice(s,1);break}a.push(this.searchVal),a.reverse(),a.length>10&&(a.length=10),a.reverse(),t.setStorageSync("search_list",a),this.historyTags=a}else t.setStorageSync("search_list",[this.searchVal]),this.historyTags=[this.searchVal];this.searching="searching";var c={pageSize:this.pageSize,pageNumber:this.pageNumber,scenicName:this.searchVal};r.default.rq({url:i.default.search,data:c}).then(function(t){e.searching="search",200===t.code&&(t.data.recommend.forEach(function(t){t["scenicTags"]=t.tag?t.tag.split(","):[],t["popularityTotal"]=l.handleNumber(t["popularityTotal"])}),t.data.scenic.forEach(function(t){t["scenicTags"]=t.tag?t.tag.split(","):[],t["popularityTotal"]=l.handleNumber(t["popularityTotal"])}),e.searchResult=t.data.scenic,e.popData=t.data.recommend)})},getSeach:function(){var t=this;r.default.rq({url:i.default.searchList}).then(function(e){200===e.code?t.hotTags=e.data:t.hotTags=[]})},clearHistory:function(){t.removeStorageSync("search_list"),this.historyTags=[]},handleSearch:function(){""!==this.searchVal&&this.search()},getScDetail:function(e){t.navigateTo({url:"../scMapDetail/scMapDetail?id="+e.id})}},watch:{searchVal:function(t){""===t&&(this.searching="noSearch",this.popData=[],this.searchResult=[])}}};e.default=u}).call(this,a("649d")["default"])},d8f4:function(t,e,a){"use strict";a("ce60");var s=r(a("b0ce")),i=r(a("da16"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},da16:function(t,e,a){"use strict";a.r(e);var s=a("ffa5"),i=a("9d61");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("24fc");var c=a("2877"),n=Object(c["a"])(i["default"],s["a"],s["b"],!1,null,null,null);e["default"]=n.exports},ef44:function(t,e,a){},ffa5:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"search"},[a("image",{attrs:{src:"../../static/image/search.png"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],staticClass:"uni-input",attrs:{"confirm-type":"search",placeholder:"去你想去的地方",eventid:"68014704-0"},domProps:{value:t.searchVal},on:{confirm:t.handleSearch,input:function(e){e.target.composing||(t.searchVal=e.target.value)}}})]),"search"==t.searching?[a("view",[a("view",{directives:[{name:"show",rawName:"v-show",value:0===t.searchResult.length,expression:"searchResult.length === 0"}],staticClass:"no-find"},[a("image",{attrs:{src:"../../static/image/nosc.png"}}),a("text",[t._v("抱歉，没有您想找的景区")]),a("text",[t._v("你可以看看其他景区")])]),a("view",{directives:[{name:"show",rawName:"v-show",value:0!=t.searchResult.length,expression:"searchResult.length != 0"}],staticClass:"tip search-result"},t._l(t.searchResult,function(e,s){return a("view",{key:s,staticClass:"sc-list-item",attrs:{eventid:"68014704-1-"+s},on:{click:function(a){t.getScDetail(e)}}},[a("view",{staticClass:"sc-list-img"},[a("image",{attrs:{src:e.photo,mode:"aspectFill","lazy-load":""}}),a("view",{staticClass:"sc-list-name"},[a("text",[t._v(t._s(e.scenicName))])]),a("view",{staticClass:"info"},[e.voiceTotal?a("text",[t._v("讲解："+t._s(e.voiceTotal)+"个景点")]):t._e(),e.narratorPrice?a("text",[t._v(t._s(e.narratorPrice)+"元/份")]):t._e()])]),e.popularityTotal?a("view",{staticClass:"pop"},[a("image",{attrs:{src:"../../static/image/hot.png","lazy-load":""}}),a("view",{staticClass:"pop-text"},[a("text",[t._v("人气："+t._s(e.popularityTotal))])])]):t._e(),e.address?a("view",{staticClass:"sc-list-site"},[a("image",{attrs:{src:"../../static/image/posi.png"}}),a("text",[t._v(t._s(e.address)+"Asdas奥术大师大所大所大所大所大所大所大所")])]):t._e(),a("view",{staticClass:"sc-list-info"},[a("text",[t._v(t._s(e.summary))])]),a("view",{staticClass:"sc-list-tag"},t._l(e.scenicTags,function(e,s){return a("text",{key:s},[t._v(t._s(e))])}))])})),a("view",{directives:[{name:"show",rawName:"v-show",value:0!=t.popData.length,expression:"popData.length != 0"}],staticClass:"tip"},[t._m(0),t._l(t.popData,function(e,s){return a("view",{key:s,staticClass:"sc-list-item",attrs:{eventid:"68014704-2-"+s},on:{click:function(a){t.getScDetail(e)}}},[a("view",{staticClass:"sc-list-img"},[a("image",{attrs:{src:e.photo,mode:"aspectFill","lazy-load":""}}),a("view",{staticClass:"sc-list-name"},[a("text",[t._v(t._s(e.scenicName))])]),a("view",{staticClass:"info"},[e.voiceTotal?a("text",[t._v("讲解："+t._s(e.voiceTotal)+"个景点")]):t._e(),e.narratorPrice?a("text",[t._v(t._s(e.narratorPrice)+"元/份")]):t._e()])]),e.popularityTotal?a("view",{staticClass:"pop"},[a("image",{attrs:{src:"../../static/image/hot.png","lazy-load":""}}),a("view",{staticClass:"pop-text"},[a("text",[t._v("人气："+t._s(e.popularityTotal))])])]):t._e(),e.address?a("view",{staticClass:"sc-list-site"},[a("image",{attrs:{src:"../../static/image/posi.png"}}),a("text",[t._v(t._s(e.address)+"Asdas奥术大师大所大所大所大所大所大所大所")])]):t._e(),a("view",{staticClass:"sc-list-info"},[a("text",[t._v(t._s(e.summary))])]),a("view",{staticClass:"sc-list-tag"},t._l(e.scenicTags,function(e,s){return a("text",{key:s},[t._v(t._s(e))])}))])})],2)])]:t._e(),"noSearch"==t.searching?[a("view",[a("view",{directives:[{name:"show",rawName:"v-show",value:0!=t.hotTags.length,expression:"hotTags.length != 0"}],staticClass:"card"},[t._m(1),a("view",{staticClass:"sc-list-tag"},t._l(t.hotTags,function(e,s){return a("text",{key:e.id,attrs:{eventid:"68014704-3-"+s},on:{click:function(a){t.clickTag(e.keyWords)}}},[t._v(t._s(e.keyWords))])}))]),a("view",{directives:[{name:"show",rawName:"v-show",value:0!=t.historyTags.length,expression:"historyTags.length != 0"}],staticClass:"card"},[a("view",{staticClass:"card-header"},[a("text",[t._v("历史搜索")]),a("image",{staticClass:"card-header-del",attrs:{src:"../../static/image/del.png",eventid:"68014704-4"},on:{click:t.clearHistory}})]),a("view",{staticClass:"sc-list-tag"},t._l(t.historyTags,function(e,s){return a("text",{key:s,attrs:{eventid:"68014704-5-"+s},on:{click:function(a){t.clickTag(e)}}},[t._v(t._s(e))])}))])])]:t._e()],2)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"tip-header"},[a("image",{attrs:{src:"../../static/image/tj.png"}}),a("text",[t._v("为您推荐的景区")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"card-header"},[a("text",[t._v("热门搜索")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})}},[["d8f4","common/runtime","common/vendor"]]]);
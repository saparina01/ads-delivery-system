(function(){"use strict";var t={3925:function(t,e,s){var i=s(6848),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("UserHeader"),e("TopAds"),e("News")],1)},o=[],n=s(3510),r=function(){var t=this,e=t._self._c;return e("el-header",{staticClass:"user-header"},[e("div",{staticClass:"logo"},[t._v("新闻网站")]),e("div",{staticClass:"actions"},[e("el-button",{on:{click:t.handleLogin}},[t._v("登录")]),e("el-button",{attrs:{type:"primary"},on:{click:t.handleRegister}},[t._v("注册")]),e("el-button",{attrs:{type:"success"},on:{click:t.viewProfile}},[e("i",{staticClass:"el-icon-user"}),t._v(" 查看个人信息 ")])],1)])},l=[],c={methods:{handleLogin(){this.$message("登录功能未实现")},handleRegister(){this.$message("注册功能未实现")},viewProfile(){this.$message("查看个人信息功能未实现")}}},u=c,d=s(1656),h=(0,d.A)(u,r,l,!1,null,"58c49c84",null),m=h.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ad-container"},[e("div",{staticClass:"ad-carousel"},[e("el-carousel",{attrs:{height:"250px",autoplay:"",type:"card"}},t._l(t.ads,(function(s,i){return e("el-carousel-item",{key:i},[e("img",{staticClass:"ad-image",attrs:{src:s.image,alt:s.title},on:{click:function(e){return t.HandleCilckAd(s)}}})])})),1)],1),e("div",{staticClass:"ad-titles",on:{wheel:t.onWheel}},[e("el-scrollbar",{staticClass:"scroll-container"},[e("div",{staticClass:"titles-container"},t._l(t.ads,(function(s,i){return e("div",{key:i,staticClass:"ad-title",class:{focused:t.focusedIndex===i},on:{click:function(e){return t.HandleCilckAd(s)},mouseover:function(e){return t.setFocus(i)},mouseleave:t.removeFocus}},[t._v(" "+t._s(s.title)+" ")])})),0)])],1),e("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",[e("h3",[t._v(t._s(t.currentAd.title))]),e("el-image",{staticStyle:{width:"100%",height:"auto","margin-bottom":"10px"},attrs:{src:t.currentAd.image,alt:"news image"}}),e("p",[t._v(t._s(t.currentAd.summary))]),e("p",[e("a",{staticStyle:{color:"#409eff","text-decoration":"underline"},attrs:{href:t.currentAd.details,target:"_blank",rel:"noopener noreferrer"}},[t._v(" 查看详情 ")])])],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("关闭")])],1)])],1)},g=[],f=s(4373),y={data(){return{dialogVisible:!1,currentAd:{},focusedIndex:null,ads:[{adId:"1",title:"vivo X200 Pro 体验「镜头魔法」再升级人像焦段的惊艳瞬间",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F1019%2Ffe9c5f70p00slkyf8007fc000go00b4c.png&thumbnail=640y426&quality=100&type=jpg",summary:"",details:"https://www.163.com/v/video/VHDPRN49H.html"},{title:"外媒：大模型太烧钱，建议OpenAI在2025年IPO融资",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F1221%2Fbce5cfb6j00sot9pn002od200u000cvg00it0082.jpg&thumbnail=660x2147483647&quality=80&type=jpg",summary:"https://www.163.com/tech/article/JJMF1B1400097U7T.html",details:"12月18日消息，人工智能模型的运行离不开海量数据的支持，而运营这些模型的企业（如ChatGPT的开发者OpenAI）同样需要巨额资金支持。针对这家估值高达1570亿美元的初创企业持续的融资需求，一个合理的应对策略是在2025年推动首次公开募股（IPO）。"},{title:"2024（中国·北京）大型国际非遗传承展盛大开幕，共谱文化交流华章",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F1220%2F293fe7a9j00sosd0800qoc00376024tc.jpg&thumbnail=660x2147483647&quality=80&type=jpg",summary:"https://art.163.com/24/1220/17/JJSBNDU500997VCT.html",details:"在全球化进程加速推进、多元文化相互交融的时代背景下，“携手共同体，益起向未来｜向新而行，艺同出发——2024（中国·北京）大型国际非遗保护传承主题展”于2024年12月20日在北京展览馆隆重开幕。此次展览的展期将持续至12月22日，是积极响应二十大报告中关于文化传承重要指示的有力举措，在业务主管单及多部门的悉心指导与社会各界的大力支持下，由北京国际艺术博览会基金会携手中国关心下一代健康体育基金会联合主办，旨在为非遗文化搭建展示平台，践行文化传承使命，构建人类命运共同体的文化纽带。"},{title:"普京举行年度记者会",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F1219%2F2ad0c622j00soqirl003rc000u000f0c.jpg&thumbnail=457y256&quality=95&type=jpg",summary:"https://live.163.com/room/280414.html",details:"据塔斯社报道，普京在记者会上称，俄罗斯“榛树”导弹的射程可达5500公里。据俄新社等俄媒此前报道，普京11月21日在发表讲话时称，作为对乌克兰使用美国和英国所提供远程武器袭击俄领土的回应，俄武装力量当天对乌克兰境内一处生产导弹的工业区进行了打击，在此次行动中测试了一款新研制的名为“榛树”的导弹，未携带核弹头。他称，该导弹能以10马赫的速度攻击目标，“目前还没有什么手段能拦截这种导弹”。"},{title:"TCL小蓝翼C7新风空调震撼上市，以智慧健康开创AI空调发展新时代",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F1220%2F01301011j00sos0vm002nd0010300o2m.jpg&thumbnail=660x2147483647&quality=80&type=jpg",summary:"https://www.163.com/dy/article/JJRROA960519828Q.html",details:"12月19日，TCL小蓝翼C7新风空调新品发布会在杭州隆重举行。本次发布会以“智慧健康再进化”为主题，重磅发布了史上最强新风空调——TCL小蓝翼C7新风空调，围绕AI睡眠新风、AI净化新风，以卧室睡眠场景、客厅净化场景为核心，以小蓝翼智慧科技为引擎，从单品到场景，再到生态，发布会上联合中国家用电器研究院启动“SHE智慧健康绿色评价标准”，为消费者创造最适配智慧健康标准的空气解决方案。"},{title:"五年蝉联第一，茅台生态农业“求变与不变”",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F1221%2Fb9a6e6e2j00sots9701eod000u000k0p.jpg&thumbnail=660x2147483647&quality=80&type=jpg",summary:"https://www.163.com/dy/article/JJUA4C8M05199FKS.html",details:"12月18日，以“栉风沐雨，遇见美好；初心不变，悠蜜同行”为主题的茅台生态农业公司2025年度市场工作会在贵阳召开。会议上发布了2024年市场工作成果报告，并系统规划部署了2025年市场工作，同时还有14款悠蜜新品集中亮相。"}]}},mounted(){this.fetchAds()},methods:{async HandleCilckAd(t){this.currentAd=t,this.dialogVisible=!0,await this.logAdClick(t)},async logAdClick(t){try{const e=localStorage.getItem("user_id");if(!e)return void console.error("User ID not found in localStorage");const s=t.adId,i=await f.A.post("http://101.43.72.79:8081/api/ads/click",s,{headers:{"Content-Type":"text/plain"}});console.log("广告点击统计成功:",i.data)}catch(e){console.error("广告点击统计失败:",e)}},setFocus(t){this.focusedIndex=t},removeFocus(){this.focusedIndex=null},onWheel(t){const e=this.$refs.scrollContainer;t.deltaY>0?e.scrollTop+=20:e.scrollTop-=20},async fetchAds(){try{const t=localStorage.getItem("user_id");if(!t)return void console.error("User ID not found in localStorage");console.log("顶部广告请求时使用的userId："+t);const e=await f.A.get("http://101.43.72.79:8081/api/ads/recommend",{params:{userId:t,limit:6}});this.ads=e.data}catch(t){console.error("获取广告数据失败:",t)}}}},w=y,v=(0,d.A)(w,p,g,!1,null,"b44a2824",null),b=v.exports,F=function(){var t=this,e=t._self._c;return e("el-container",[e("el-aside",{attrs:{width:"200px"}},[e("SiderAds")],1),e("el-container",[e("el-header",[e("Routers",{on:{"category-selected":t.handleCategorySelected}})],1),e("el-main",[e("ShowNews",{attrs:{category:t.selectedCategory}})],1)],1)],1)},A=[],C=function(){var t=this,e=t._self._c;return e("el-menu",{staticClass:"router-menu",attrs:{"default-active":t.activeCategory,mode:"horizontal"},on:{select:t.handleSelect}},[e("el-menu-item",{attrs:{index:"1"}},[t._v("首页")]),e("el-menu-item",{attrs:{index:"2"}},[t._v("教育")]),e("el-menu-item",{attrs:{index:"3"}},[t._v("健康")]),e("el-menu-item",{attrs:{index:"4"}},[t._v("科技")]),e("el-menu-item",{attrs:{index:"5"}},[t._v("娱乐")]),e("el-menu-item",{attrs:{index:"6"}},[t._v("时尚")])],1)},_=[],k={data(){return{activeCategory:"1",categoryMap:{1:"首页",2:"教育",3:"健康",4:"科技",5:"娱乐",6:"时尚"}}},methods:{handleSelect(t){const e=this.categoryMap[t];this.activeCategory=t,this.$emit("category-selected",e)}}},x=k,I=(0,d.A)(x,C,_,!1,null,"5425df03",null),j=I.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sider-news"},[e("h3",{staticStyle:{"text-align":"center"}},[t._v("个性广告推荐")]),t._l(t.ads,(function(s,i){return e("div",{key:i,staticClass:"ad-item"},[e("img",{staticClass:"ad-image",attrs:{src:s.image,alt:t.广告图片}}),e("p",{staticClass:"ad-title",class:{focused:t.focusedIndex===i},on:{mouseover:function(e){return t.setFocus(i)},mouseleave:t.removeFocus,click:function(e){return t.HandleCilckAd(s)}}},[t._v(" "+t._s(s.title)+" ")])])})),e("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",[e("h3",[t._v(t._s(t.currentAd.title))]),e("el-image",{staticStyle:{width:"100%",height:"auto","margin-bottom":"10px"},attrs:{src:t.currentAd.image,alt:"news image"}}),e("p",[e("a",{staticStyle:{color:"#409eff","text-decoration":"underline"},attrs:{href:t.currentAd.details,target:"_blank",rel:"noopener noreferrer"}},[t._v(" 查看详情 ")])])],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("关闭")])],1)])],2)},T=[],O={data(){return{dialogVisible:!1,currentAd:{},focusedIndex:null,ads:[{title:"vivo X200 Pro 体验「镜头魔法」再升级人像焦段的惊艳瞬间",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F1019%2Ffe9c5f70p00slkyf8007fc000go00b4c.png&thumbnail=640y426&quality=100&type=jpg",summary:"",details:"https://www.163.com/v/video/VHDPRN49H.html"},{title:"外媒：大模型太烧钱，建议OpenAI在2025年IPO融资",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F1221%2Fbce5cfb6j00sot9pn002od200u000cvg00it0082.jpg&thumbnail=660x2147483647&quality=80&type=jpg",summary:"https://www.163.com/tech/article/JJMF1B1400097U7T.html",details:"12月18日消息，人工智能模型的运行离不开海量数据的支持，而运营这些模型的企业（如ChatGPT的开发者OpenAI）同样需要巨额资金支持。针对这家估值高达1570亿美元的初创企业持续的融资需求，一个合理的应对策略是在2025年推动首次公开募股（IPO）。"},{title:"2024（中国·北京）大型国际非遗传承展盛大开幕，共谱文化交流华章",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F1220%2F293fe7a9j00sosd0800qoc00376024tc.jpg&thumbnail=660x2147483647&quality=80&type=jpg",summary:"https://art.163.com/24/1220/17/JJSBNDU500997VCT.html",details:"在全球化进程加速推进、多元文化相互交融的时代背景下，“携手共同体，益起向未来｜向新而行，艺同出发——2024（中国·北京）大型国际非遗保护传承主题展”于2024年12月20日在北京展览馆隆重开幕。此次展览的展期将持续至12月22日，是积极响应二十大报告中关于文化传承重要指示的有力举措，在业务主管单及多部门的悉心指导与社会各界的大力支持下，由北京国际艺术博览会基金会携手中国关心下一代健康体育基金会联合主办，旨在为非遗文化搭建展示平台，践行文化传承使命，构建人类命运共同体的文化纽带。"},{title:"普京举行年度记者会",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F1219%2F2ad0c622j00soqirl003rc000u000f0c.jpg&thumbnail=457y256&quality=95&type=jpg",summary:"https://live.163.com/room/280414.html",details:"据塔斯社报道，普京在记者会上称，俄罗斯“榛树”导弹的射程可达5500公里。据俄新社等俄媒此前报道，普京11月21日在发表讲话时称，作为对乌克兰使用美国和英国所提供远程武器袭击俄领土的回应，俄武装力量当天对乌克兰境内一处生产导弹的工业区进行了打击，在此次行动中测试了一款新研制的名为“榛树”的导弹，未携带核弹头。他称，该导弹能以10马赫的速度攻击目标，“目前还没有什么手段能拦截这种导弹”。"},{title:"TCL小蓝翼C7新风空调震撼上市，以智慧健康开创AI空调发展新时代",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F1220%2F01301011j00sos0vm002nd0010300o2m.jpg&thumbnail=660x2147483647&quality=80&type=jpg",summary:"https://www.163.com/dy/article/JJRROA960519828Q.html",details:"12月19日，TCL小蓝翼C7新风空调新品发布会在杭州隆重举行。本次发布会以“智慧健康再进化”为主题，重磅发布了史上最强新风空调——TCL小蓝翼C7新风空调，围绕AI睡眠新风、AI净化新风，以卧室睡眠场景、客厅净化场景为核心，以小蓝翼智慧科技为引擎，从单品到场景，再到生态，发布会上联合中国家用电器研究院启动“SHE智慧健康绿色评价标准”，为消费者创造最适配智慧健康标准的空气解决方案。"},{title:"五年蝉联第一，茅台生态农业“求变与不变”",image:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F1221%2Fb9a6e6e2j00sots9701eod000u000k0p.jpg&thumbnail=660x2147483647&quality=80&type=jpg",summary:"https://www.163.com/dy/article/JJUA4C8M05199FKS.html",details:"12月18日，以“栉风沐雨，遇见美好；初心不变，悠蜜同行”为主题的茅台生态农业公司2025年度市场工作会在贵阳召开。会议上发布了2024年市场工作成果报告，并系统规划部署了2025年市场工作，同时还有14款悠蜜新品集中亮相。"}]}},mounted(){this.fetchAds()},methods:{setFocus(t){this.focusedIndex=t},removeFocus(){this.focusedIndex=null},async HandleCilckAd(t){this.currentAd=t,this.dialogVisible=!0,await this.logAdClick(t)},async logAdClick(t){try{const e=localStorage.getItem("user_id");if(!e)return void console.error("User ID not found in localStorage");const s=t.adId,i=await f.A.post("http://101.43.72.79:8081/api/ads/click",s,{headers:{"Content-Type":"text/plain"}});console.log("广告点击统计成功:",i.data)}catch(e){console.error("广告点击统计失败:",e)}},async fetchAds(){try{const t=localStorage.getItem("user_id");if(!t)return void console.error("User ID not found in localStorage");console.log("侧边广告请求时使用的userId："+t);const e=await f.A.get("http://101.43.72.79:8081/api/ads/recommend",{params:{userId:t,limit:3}});this.ads=e.data}catch(t){console.error("获取广告数据失败:",t)}}}},N=O,V=(0,d.A)(N,S,T,!1,null,"f0a6a404",null),q=V.exports,J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"show-news"},[e("div",{staticClass:"search-bar"},[e("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入新闻标题或标签关键字",clearable:""},model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}}),e("el-button",{staticStyle:{width:"20%"},attrs:{type:"primary"},on:{click:t.fetchNewsByKeyword}},[t._v("搜索")])],1),t._l(t.newsList,(function(s,i){return e("el-card",{key:i,staticClass:"news-card"},[e("div",{staticClass:"title-tag"},[e("h3",{staticClass:"ad-title",class:{focused:t.focusedIndex===i},on:{mouseover:function(e){return t.setFocus(i)},mouseleave:t.removeFocus,click:function(e){return t.showNewsDetails(s)}}},[t._v(" "+t._s(s.title)+" ")]),e("div",{staticClass:"tags-container"},t._l(s.tags,(function(s,i){return e("el-tag",{key:i,staticClass:"tag",attrs:{type:"info",effect:"light"}},[t._v(" "+t._s(s)+" ")])})),1)]),e("p",[t._v(t._s(s.summary))])])})),e("el-dialog",{attrs:{visible:t.dialogVisible,title:"新闻详情"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",[e("h3",[t._v(t._s(t.currentNews.title))]),e("el-image",{staticStyle:{width:"100%",height:"auto","margin-bottom":"10px"},attrs:{src:t.currentNews.image,alt:"news image"}}),e("p",[t._v(t._s(t.currentNews.details))])],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("关闭")])],1)])],2)},P=[],U={props:{category:{type:String,required:!0}},data(){return{focusedIndex:null,newsList:[],dialogVisible:!1,currentNews:{},searchKeyword:""}},watch:{category:{handler(t){this.fetchNews(t)},immediate:!0}},methods:{setFocus(t){this.focusedIndex=t},removeFocus(){this.focusedIndex=null},async fetchNews(t){try{const e="首页"===t?{limit:6}:{limit:6,category:t},s=await f.A.get("http://106.15.52.71:8088/api/news",{params:e});this.newsList=s.data}catch(e){console.error("获取新闻数据失败:",e),this.$message.error("无法加载新闻数据，请稍后重试！")}},showNewsDetails(t){this.currentNews=t,this.dialogVisible=!0,this.uploadBehavior(t.tags,"click")},async uploadBehavior(t,e){const s=localStorage.getItem("user_id")||"anonymous_user";console.log("上传用户行为时使用的userId："+s);const i=Array.isArray(t)?t.join(","):t;try{await f.A.post("http://101.43.72.79:8081/api/behavior/upload",{userId:s,tags:i,behaviorType:e})}catch(a){console.error("行为数据上传失败:",a)}},async fetchNewsByKeyword(){try{const t={keyword:this.searchKeyword,limit:5},e=await f.A.get("http://106.15.52.71:8088/api/news/search",{params:t});this.newsList=e.data}catch(t){console.error("搜索新闻数据失败:",t),this.$message.error("搜索失败，请稍后重试！")}}},mounted(){this.fetchNews(this.category)}},H=U,D=(0,d.A)(H,J,P,!1,null,"5a32c5a4",null),L=D.exports,R={components:{Routers:j,SiderAds:q,ShowNews:L},data(){return{selectedCategory:"首页"}},methods:{handleCategorySelected(t){this.selectedCategory=t}}},K=R,M=(0,d.A)(K,F,A,!1,null,null,null),B=M.exports,$={name:"App",components:{UserHeader:m,TopAds:b,News:B},mounted(){this.initializeUserId()},methods:{async initializeUserId(){let t=this.getCookie("user_id");if(!t){const e=await n.Ay.load(),s=await e.get();t=s.visitorId,this.setCookie("user_id",t,365)}localStorage.setItem("user_id",t),console.log("App.vue加载的User ID: ",t)},getCookie(t){let e=t+"=",s=document.cookie.split(";");for(let i=0;i<s.length;i++){let t=s[i].trim();if(0===t.indexOf(e))return t.substring(e.length,t.length)}return null},setCookie(t,e,s){let i=new Date;i.setTime(i.getTime()+24*s*60*60*1e3);let a="expires="+i.toUTCString();document.cookie=t+"="+e+";"+a+";path=/"}}},z=$,E=(0,d.A)(z,a,o,!1,null,null,null),G=E.exports,Q=s(9143),W=s.n(Q);i["default"].use(W()),i["default"].config.productionTip=!1,new i["default"]({render:t=>t(G)}).$mount("#app")}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=t,function(){s.amdO={}}(),function(){var t=[];s.O=function(e,i,a,o){if(!i){var n=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],o=t[u][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(r=!1,o<n&&(n=o));if(r){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,a,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,n=i[0],r=i[1],l=i[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(l)var u=l(s)}for(e&&e(i);c<n.length;c++)o=n[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(u)},i=self["webpackChunknewsweb"]=self["webpackChunknewsweb"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(3925)}));i=s.O(i)})();
//# sourceMappingURL=app.589e8c31.js.map
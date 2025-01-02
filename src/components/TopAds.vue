<template>
  <div class="ad-container">
    <!-- 左侧轮播图 -->
    <div class="ad-carousel">
      <el-carousel height="250px" autoplay type="card">
        <el-carousel-item v-for="(ad, index) in ads" :key="index">
          <img
            :src="ad.image"
            :alt="ad.title"
            class="ad-image"
            @click="HandleCilckAd(ad)"
          />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 右侧广告标题上下滚动 -->
    <div class="ad-titles" @wheel="onWheel">
      <el-scrollbar class="scroll-container">
        <div class="titles-container">
          <div
            v-for="(ad, index) in ads"
            class="ad-title"
            :key="index"
            :class="{ focused: focusedIndex === index }"
            @click="HandleCilckAd(ad)"
            @mouseover="setFocus(index)"
            @mouseleave="removeFocus"
          >
            {{ ad.title }}
          </div>
        </div>
      </el-scrollbar>
    </div>

    <!-- 弹窗展示广告详情 -->
    <el-dialog :visible.sync="dialogVisible">
      <div>
        <h3>{{ currentAd.title }}</h3>
        <el-image
          :src="currentAd.image"
          alt="news image"
          style="width: 100%; height: auto; margin-bottom: 10px"
        />
        <p>{{ currentAd.summary }}</p>
        <p>
          <a
            :href="currentAd.details"
            target="_blank"
            rel="noopener noreferrer"
            style="color: #409eff; text-decoration: underline"
          >
            查看详情
          </a>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialogVisible: false, // 控制弹窗的显示与隐藏
      currentAd: {}, // 当前选中的广告
      focusedIndex: null, // 当前聚焦的广告索引
      ads: [
        {
          adId: "1",
          title: "vivo X200 Pro 体验「镜头魔法」再升级人像焦段的惊艳瞬间",
          image:
            "https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F1019%2Ffe9c5f70p00slkyf8007fc000go00b4c.png&thumbnail=640y426&quality=100&type=jpg",
          summary: "",
          details: "https://www.163.com/v/video/VHDPRN49H.html",
        },
        {
          title: "外媒：大模型太烧钱，建议OpenAI在2025年IPO融资",
          image:
            "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F1221%2Fbce5cfb6j00sot9pn002od200u000cvg00it0082.jpg&thumbnail=660x2147483647&quality=80&type=jpg",
          summary: "https://www.163.com/tech/article/JJMF1B1400097U7T.html",
          details:
            "12月18日消息，人工智能模型的运行离不开海量数据的支持，而运营这些模型的企业（如ChatGPT的开发者OpenAI）同样需要巨额资金支持。针对这家估值高达1570亿美元的初创企业持续的融资需求，一个合理的应对策略是在2025年推动首次公开募股（IPO）。",
        },
        {
          title:
            "2024（中国·北京）大型国际非遗传承展盛大开幕，共谱文化交流华章",
          image:
            "https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F1220%2F293fe7a9j00sosd0800qoc00376024tc.jpg&thumbnail=660x2147483647&quality=80&type=jpg",
          summary: "https://art.163.com/24/1220/17/JJSBNDU500997VCT.html",
          details:
            "在全球化进程加速推进、多元文化相互交融的时代背景下，“携手共同体，益起向未来｜向新而行，艺同出发——2024（中国·北京）大型国际非遗保护传承主题展”于2024年12月20日在北京展览馆隆重开幕。此次展览的展期将持续至12月22日，是积极响应二十大报告中关于文化传承重要指示的有力举措，在业务主管单及多部门的悉心指导与社会各界的大力支持下，由北京国际艺术博览会基金会携手中国关心下一代健康体育基金会联合主办，旨在为非遗文化搭建展示平台，践行文化传承使命，构建人类命运共同体的文化纽带。",
        },
        {
          title: "普京举行年度记者会",
          image:
            "https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F1219%2F2ad0c622j00soqirl003rc000u000f0c.jpg&thumbnail=457y256&quality=95&type=jpg",
          summary: "https://live.163.com/room/280414.html",
          details:
            "据塔斯社报道，普京在记者会上称，俄罗斯“榛树”导弹的射程可达5500公里。据俄新社等俄媒此前报道，普京11月21日在发表讲话时称，作为对乌克兰使用美国和英国所提供远程武器袭击俄领土的回应，俄武装力量当天对乌克兰境内一处生产导弹的工业区进行了打击，在此次行动中测试了一款新研制的名为“榛树”的导弹，未携带核弹头。他称，该导弹能以10马赫的速度攻击目标，“目前还没有什么手段能拦截这种导弹”。",
        },
        {
          title: "TCL小蓝翼C7新风空调震撼上市，以智慧健康开创AI空调发展新时代",
          image:
            "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F1220%2F01301011j00sos0vm002nd0010300o2m.jpg&thumbnail=660x2147483647&quality=80&type=jpg",
          summary: "https://www.163.com/dy/article/JJRROA960519828Q.html",
          details:
            "12月19日，TCL小蓝翼C7新风空调新品发布会在杭州隆重举行。本次发布会以“智慧健康再进化”为主题，重磅发布了史上最强新风空调——TCL小蓝翼C7新风空调，围绕AI睡眠新风、AI净化新风，以卧室睡眠场景、客厅净化场景为核心，以小蓝翼智慧科技为引擎，从单品到场景，再到生态，发布会上联合中国家用电器研究院启动“SHE智慧健康绿色评价标准”，为消费者创造最适配智慧健康标准的空气解决方案。",
        },
        {
          title: "五年蝉联第一，茅台生态农业“求变与不变”",
          image:
            "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F1221%2Fb9a6e6e2j00sots9701eod000u000k0p.jpg&thumbnail=660x2147483647&quality=80&type=jpg",
          summary: "https://www.163.com/dy/article/JJUA4C8M05199FKS.html",
          details:
            "12月18日，以“栉风沐雨，遇见美好；初心不变，悠蜜同行”为主题的茅台生态农业公司2025年度市场工作会在贵阳召开。会议上发布了2024年市场工作成果报告，并系统规划部署了2025年市场工作，同时还有14款悠蜜新品集中亮相。",
        },
      ],
    };
  },

  mounted() {
    this.fetchAds();
  },

  methods: {
    async HandleCilckAd(ad) {
      // 设置当前广告的信息并显示弹窗
      this.currentAd = ad;
      this.dialogVisible = true;

      // 上传点击广告的行为
      await this.logAdClick(ad);
    },

    async logAdClick(ad) {
      try {
        const userId = localStorage.getItem("user_id");

        if (!userId) {
          console.error("User ID not found in localStorage");
          return;
        }

        const payload = ad.adId;
        //*****************************************************************
        const response = await axios.post(
          "http://172.20.10.2:8081/api/ads/click",
          payload, 
          {
            headers: {
              "Content-Type": "text/plain", // 设置请求头为纯文本
            },
          }
        );

        console.log("广告点击统计成功:", response.data);
      } catch (error) {
        console.error("广告点击统计失败:", error);
      }
    },
    setFocus(index) {
      // 设置聚焦广告的索引
      this.focusedIndex = index;
    },
    removeFocus() {
      // 移除聚焦
      this.focusedIndex = null;
    },
    onWheel(event) {
      // 通过鼠标滚轮上下滚动标题
      const scrollContainer = this.$refs.scrollContainer;
      if (event.deltaY > 0) {
        scrollContainer.scrollTop += 20; // 向下滚动
      } else {
        scrollContainer.scrollTop -= 20; // 向上滚动
      }
    },
    // 请求广告数据*******************************************************************
    async fetchAds() {
      try {
        const userId = localStorage.getItem("user_id");

        if (!userId) {
          console.error("User ID not found in localStorage");
          return;
        }

        console.log("顶部广告请求时使用的userId：" + userId);

        const response = await axios.get(
          "http://172.20.10.2:8081/api/ads/recommend",
          {
            params: {
              userId: userId,
              limit: 6,
            },
          }
        );

        this.ads = response.data;
      } catch (error) {
        console.error("获取广告数据失败:", error);
      }
    },
  },
};
</script>

<style scoped>
.ad-container {
  display: flex;
}

.ad-carousel {
  width: 70%;
}

.ad-titles {
  width: 30%;
  height: 250px;
  overflow: hidden;
  position: relative;
}

.ad-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.scroll-container {
  height: 100%;
  overflow-y: auto;
}

.titles-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
}

.ad-title {
  text-align: left;
  font-size: 15px;
  color: #333;
  transition: transform 0.3s, font-size 0.3s;
  margin-bottom: 10px;
  cursor: pointer; /* 使标题可点击 */
}

.ad-title.focused {
  font-size: 15px; /* 聚焦时字体变大 */
  transform: scale(1.1); /* 聚焦时放大 */
  color: #0077ee;
  text-decoration: underline;
}

@keyframes scroll-titles {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>


  
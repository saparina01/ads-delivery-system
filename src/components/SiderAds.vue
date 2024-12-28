<template>
  <div class="sider-news">
    <h3 style="text-align: center">个性广告推荐</h3>
    <div v-for="(ad, index) in ads" :key="index" class="ad-item">
      <img :src="ad.image" :alt="广告图片" class="ad-image" />
      <p
        class="ad-title"
        :class="{ focused: focusedIndex === index }"
        @mouseover="setFocus(index)"
        @mouseleave="removeFocus"
        @click="HandleCilckAd(ad)"
      >
        {{ ad.title }}
      </p>
    </div>

    <!-- 弹窗展示广告详情 -->
    <el-dialog :visible.sync="dialogVisible">
      <div>
        <h3>{{ currentAd.title }}</h3>
        <p>{{ currentAd.details }}</p>
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
        // {
        //   title: "vivo X200 Pro 体验「镜头魔法」再升级人像焦段的惊艳瞬间",
        //   image: "https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F1019%2Ffe9c5f70p00slkyf8007fc000go00b4c.png&thumbnail=640y426&quality=100&type=jpg",
        //   details: "点击此链接观看详细内容： [vivo X200 Pro 视频](https://www.163.com/v/video/VHDPRN49H.html)",
        // },
        // {
        //   title: "普京举行年度记者会",
        //   image: "https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F1219%2F2ad0c622j00soqirl003rc000u000f0c.jpg&thumbnail=457y256&quality=95&type=jpg",
        //   details: "普京在记者会上称，俄罗斯“榛树”导弹的射程可达5500公里... [详细内容链接](https://live.163.com/room/280414.html)",
        // },
        // {
        //   title: "TCL小蓝翼C7新风空调震撼上市，以智慧健康开创AI空调发展新时代",
        //   image: "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F1220%2F01301011j00sos0vm002nd0010300o2m.jpg&thumbnail=660x2147483647&quality=80&type=jpg",
        //   details: "TCL小蓝翼C7新风空调新品发布会在杭州隆重举行... [详细内容链接](https://www.163.com/dy/article/JJRROA960519828Q.html)",
        // },
        // {
        //   title: "五年蝉联第一，茅台生态农业“求变与不变”",
        //   image: "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F1221%2Fb9a6e6e2j00sots9701eod000u000k0p.jpg&thumbnail=660x2147483647&quality=80&type=jpg",
        //   details: "茅台生态农业公司2025年度市场工作会在贵阳召开... [详细内容链接](https://www.163.com/dy/article/JJUA4C8M05199FKS.html)",
        // },
      ],
    };
  },

  mounted() {
    this.fetchAds();
  },

  methods: {
    setFocus(index) {
      this.focusedIndex = index;
    },
    removeFocus() {
      this.focusedIndex = null;
    },

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

      const payload = {
        userId: userId,
        adId: ad.adId, 
        timestamp: new Date().toISOString(),
        userAction: "click",
      };

      const response = await axios.post("http://172.20.10.2:8088/api/ads/click", payload);
      
      console.log("广告点击统计成功:", response.data);
    } catch (error) {
      console.error("广告点击统计失败:", error);
    }
  },

    // 请求广告数据
    async fetchAds() {
      try {
        const userId = localStorage.getItem("user_id");

        if (!userId) {
          console.error("User ID not found in localStorage");
          return;
        }

        console.log("侧边广告请求时使用的userId：" + userId);

        const response = await axios.get("http://172.20.10.2:8088/api/ads/recommend", 
        // {
        //   params: {
        //     userId: userId,
        //     limit: 6,
        //   },
        // }
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
.sider-news {
  padding: 3px;
  background: #fff;
}

.ad-item {
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 0;
  overflow: hidden;
  background-color: #fafafa;
  padding: 0;
}

.ad-image {
  width: 100%;
  height: auto;
  display: block;
}

.ad-title {
  padding: 10px;
  font-size: 14px;
  text-align: left;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}

.ad-title.focused {
  color: #0077ee; /* 鼠标悬停时变蓝 */
}

.ad-title:hover {
  color: #0077ee; /* 鼠标悬停时变蓝 */
}
</style>

<template>
  <aside class="ad-aside">
    <!-- 这里是广告的垂直排列 -->
    <div v-for="(adItem, index) in ads" :key="adItem.adId" class="ad-item" @click="handleAdClick(adItem)">
      <div class="ad-content">
        <img :src="adItem.image" alt="广告图片" class="ad-image" />
        <div class="ad-title">{{ adItem.title }}</div>
      </div>
    </div>

    <!-- 弹窗显示广告详情 -->
    <el-dialog v-model="dialogVisible" title="广告详情" width="400px">
      <div v-if="currentAd">
        <img :src="currentAd.image" alt="广告图片" class="dialog-image" />
        <h3 class="dialog-title">{{ currentAd.title }}</h3>
        <!-- 使用 v-html 渲染广告详情 -->
        <p class="dialog-detail" v-html="currentAd.details"></p>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </div>
    </el-dialog>
  </aside>
</template>

<script>
import { ElDialog, ElButton } from 'element-plus';
import axios from 'axios';

export default {
  name: 'SideAdBar',
  components: {
    ElDialog,
    ElButton,
  },
  data() {
    return {
      ads: [], // 用于存储广告数据
      dialogVisible: false, // 控制弹窗的显示
      currentAd: null, // 存储当前点击的广告信息
    };
  },
  mounted() {
    this.fetchAds();
  },
  methods: {
    // 请求广告数据
    async fetchAds() {
      try {
        const userId = localStorage.getItem('userId');
        const limit = 2;
        const apiUrl = `http://101.43.72.79:8081/api/ads/recommend?userId=${userId}&limit=${limit}`;
        const response = await axios.get(apiUrl);

        if (response.data && Array.isArray(response.data)) {
          this.ads = response.data;
        }
      } catch (error) {
        console.error('获取广告数据失败:', error);
      }
    },

    // 点击广告时的操作
    async handleAdClick(adItem) {
      // 发送点击数据
      const requestData = adItem.adId;
      console.log(requestData);
      try {
  await axios.post('http://101.43.72.79:8081/api/ads/click', requestData, {
    headers: {
      'Content-Type': 'text/plain',  // 设置为纯文本
    }
  });
  console.log('广告点击数据已发送');
} catch (error) {
  console.error('广告点击数据发送失败:', error);
}
      // 设置当前广告并显示弹窗
      this.currentAd = adItem;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.ad-aside {
  width: 300px;
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 20px;
  height: 100%;
  box-sizing: border-box;
}

.ad-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.ad-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  text-align: center;
  word-wrap: break-word;
}

.ad-content {
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px; /* 为每个广告增加间隔 */
}

.dialog-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 8px;
}

.dialog-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.dialog-detail {
  font-size: 14px;
  color: #666;
}
</style>








  
  
  
  
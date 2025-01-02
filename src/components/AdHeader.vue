<template>
  <header class="ad-header" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="ad-container">
      <!-- 轮播广告区域 -->
      <el-carousel 
        v-model="currentIndex"
        height="200px"
        :interval="3000"
        indicator-position="outside"
        @change="handleSlideChange"
        class="carousel"
      >
        <el-carousel-item 
          v-for="(ad, index) in ads" 
          :key="ad.ad_id"
          @click="handleAdClick(ad)"
        >
          <div class="ad-slide">
            <img :src="ad.image" alt="广告图片" class="ad-image" />
            <span class="ad-text">{{ ad.title }}</span>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </header>

  <!-- 弹窗显示广告详情 -->
  <el-dialog v-model="dialogVisible" title="广告详情" width="600px">
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
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      ads: [], // 存储广告数据
      currentIndex: 0, // 当前轮播项索引
      backgroundImage: 'https://cdn.pinduoduo.com/upload/2020-12-14/7531b9a5-e242-4124-89df-254df0862ab5.jpg', // 背景图片
      dialogVisible: false, // 控制弹窗显示
      currentAd: {}, // 当前点击的广告信息
    };
  },
  mounted() {
    this.fetchAds(); // 组件挂载后请求广告数据
  },
  methods: {
    // 请求广告数据
    async fetchAds() {
      try {
        const userId = localStorage.getItem('userId'); // 从 localStorage 获取用户ID
        const limit = 3; // 设置广告数量限制
        const apiUrl = `http://101.43.72.79:8081/api/ads/recommend?userId=${userId}&limit=${limit}`;

        const response = await axios.get(apiUrl);
        if (response.data && Array.isArray(response.data)) {
          this.ads = response.data; // 保存广告数据
        }
      } catch (error) {
        console.error('获取广告数据失败:', error);
      }
    },

    // 处理广告点击事件，显示广告详情弹窗
    async handleAdClick(ad) {
      this.currentAd = ad; // 设置当前点击的广告信息
      this.dialogVisible = true; // 显示弹窗

      // 发送广告点击数据
      const requestData = ad.adId; // 使用广告ID
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
    },
  },
};
</script>

<style scoped>
.ad-header {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}

.ad-container {
  width: 50%;
  height: 200px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.carousel {
  width: 100%;
  height: 100%;
}

.ad-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.ad-image {
  max-width: 100%;
  max-height: 100%;
}

.ad-text {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* 弹窗图片样式 */
.dialog-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
}

.dialog-title {
  text-align: center;
  margin-top: 15px;
}

.dialog-detail {
  text-align: center;
  margin-top: 10px;
}

.el-dialog__footer {
  text-align: center;
}
</style>











  
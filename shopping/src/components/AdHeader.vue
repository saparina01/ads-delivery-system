<template>
  <header class="ad-header" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="ad-container">
      <!-- 使用 Element Plus 的轮播组件 -->
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
          @click.native="handleAdClick(ad.ad_id)"
        >
          <div class="ad-slide">
            <img :src="ad.image" alt="广告图片" class="ad-image" />
            <span class="ad-text">{{ ad.title }}</span> <!-- 显示广告标题 -->
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </header>
</template>

<script>
import axios from 'axios';
import ad3 from '@/assets/image/gouwu.jpg';
export default {
  data() {
    return {
      ads: [], // 用于存储广告数据
      currentIndex: 0, // 当前轮播项索引
      backgroundImage: ad3, // 固定背景图片
    };
  },
  mounted() {
    this.fetchAds(); // 组件挂载后请求广告数据
  },
  methods: {
    // 请求广告数据
    async fetchAds() {
      try {
        // 从 localStorage 获取用户 ID
        const userId = localStorage.getItem('userId');
        const limit = 1; // 设置需要的广告数量
        // 拼接 API 请求参数
        const apiUrl = `http://101.43.72.79:8088/api/ads/recommend?userId=${userId}&limit=${limit}`;

        // 请求广告数据
        const response = await axios.get(apiUrl);
        if (response.data && Array.isArray(response.data)) {
          this.ads = response.data; // 保存接口返回的广告数据
        }
      } catch (error) {
        console.error('获取广告数据失败:', error);
      }
    },

     // 处理广告点击事件
     async handleAdClick(adId) {
      // 获取当前时间
      const timestamp = new Date().toISOString();
      // 获取用户 ID
      const userId = localStorage.getItem('userId');
      // 设置行为类型为 "click"
      const userAction = 'click';

      // 请求的请求体数据
      const requestData = {
        userId: userId,
        adId: adId,
        timestamp: timestamp,
        userAction: userAction
      };

      try {
        // 发送 POST 请求到广告点击接口
        await axios.post('http://101.43.72.79:8088/api/ads/click', requestData);
        console.log('广告点击数据已发送');
        
        // 在这里可以执行广告点击后的操作，比如跳转到广告链接
        const ad = this.ads.find(ad => ad.ad_id === adId);
        if (ad && ad.link) {
          this.$router.push(ad.link); // 跳转到广告链接
        }
      } catch (error) {
        console.error('广告点击数据发送失败:', error);
      }
    }
  
  }
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
</style>





  
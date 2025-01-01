<template>
  <aside class="ad-aside">
    <el-carousel :interval="5000" arrow="always" indicator-position="outside">
      <!-- 每个 el-carousel-item 代表一个轮播项 -->
      <el-carousel-item v-for="(adItem, index) in ads" :key="adItem.ad_id">
        <div class="ad-content">
          <!-- 渲染广告图片 -->
          <img :src="adItem.image" alt="广告图片" class="ad-image" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </aside>
</template>

<script>
import { ElCarousel, ElCarouselItem } from 'element-plus';
import axios from 'axios';

export default {
  name: 'SideAdBar',
  components: {
    ElCarousel,
    ElCarouselItem,
  },
  data() {
    return {
      ads: [], // 用于存储从接口获取的广告数据
    };
  },
  mounted() {
    this.fetchAds(); // 组件挂载后请求广告数据
  },
  methods: {
    // 请求广告数据的函数
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
  },
};
</script>


<style scoped>
.ad-aside {
  width: 300px; /* 设置广告栏宽度 */
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 20px;
  height: 100%; /* 让广告栏的高度填满父容器 */
  box-sizing: border-box;
}

.ad-image {
  width: 100%; /* 图片宽度适应 */
  max-height: 300px; /* 控制图片最大高度 */
  object-fit: cover; /* 图片内容适配 */
  border-radius: 8px;
}

.ad-content {
  text-align: center;
}

.el-carousel {
  width: 100%;
  height: 100%; /* 自适应父容器的高度 */
}
</style>







  
  
  
  
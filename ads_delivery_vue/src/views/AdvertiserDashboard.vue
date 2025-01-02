<template>
  <div class="advertiser-dashboard">
    <!-- 菜单栏 -->
    <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" background-color="#3eaf7c" text-color="#fff" active-text-color="#ffd04b">
      <div class="logo-wrapper">
        <el-icon><Upload /></el-icon>
      </div>
      <el-menu-item index="1" @click="handleMenuClick('upload')" class="menu-item">
        <el-icon><Upload /></el-icon>
        上传广告
      </el-menu-item>
      <el-menu-item index="2" @click="handleMenuClick('list')" class="menu-item">
        <el-icon><View /></el-icon>
        广告列表
      </el-menu-item>
    </el-menu>

    <!-- 内容区域 -->
    <div class="content-area">
      <!-- 初始显示的欢迎信息 -->
      <div v-if="currentPage === ''" class="welcome-message">
        <h2>欢迎来到广告管理平台</h2>
        <p>选择左侧功能菜单来开始管理您的广告。</p>
        <!-- 添加图片 -->
        <img src="https://th.bing.com/th/id/R.6813e7a518c453491e27efbfa17693f2?rik=qkhaysmT5bqZMQ&riu=http%3a%2f%2fp0.itc.cn%2fq_70%2fimages03%2f20200722%2fb0a61087597842e4ae25b7ed781907ed.png&ehk=CYCzqfgjzHPVbT6h6X91y7CC3zjqC3IxA53ObQklAMw%3d&risl=&pid=ImgRaw&r=0" alt="广告表情包" style="width: 300px; height: auto; margin-top: 20px;" />
      </div>

      <!-- 上传广告 -->
      <div v-if="currentPage === 'upload'" class="content">
        <el-card class="ad-form-card" shadow="hover">
          <h3>上传广告</h3>
          <el-form :model="adForm" ref="adForm" label-width="120px">
            <el-form-item label="广告ID">
              <el-input v-model="adForm.adId" placeholder="输入广告ID" autocomplete="off" class="input-field" />
            </el-form-item>
            <el-form-item label="广告标题">
              <el-input v-model="adForm.title" placeholder="输入广告标题" autocomplete="off" class="input-field" />
            </el-form-item>
            <el-form-item label="广告图片">
              <el-input v-model="adForm.image" placeholder="输入广告图片URL" autocomplete="off" class="input-field" />
            </el-form-item>
            <el-form-item label="广告详情">
              <el-input type="textarea" v-model="adForm.details" placeholder="输入广告详情" class="input-field large-textarea" ref="detailsTextarea" autosize />
            </el-form-item>
            <el-form-item label="广告标签">
              <el-input v-model="adForm.tags" placeholder="输入广告标签，用逗号分隔" autocomplete="off" class="input-field" />
            </el-form-item>
            <el-button class="upload-button" type="primary" @click="uploadAd">上传广告</el-button>
          </el-form>
        </el-card>
      </div>

      <!-- 广告列表 -->
      <div v-if="currentPage === 'list'" class="content">
        <div class="table-wrapper">
          <el-table :data="adsList" border stripe style="width: 100%; margin-top: 20px;">
            <el-table-column prop="title" label="广告标题" align="center" :min-width="250" />
            <el-table-column prop="image" label="广告图片" align="center" :min-width="200">
              <template #default="{ row }">
                <img :src="row.image" alt="广告图片" style="width: 150px; height: auto;" />
              </template>
            </el-table-column>
            <el-table-column prop="tags" label="广告标签" align="center" :min-width="250" />
            <el-table-column prop="clickCount" label="点击数" align="center" :min-width="150" />
            <el-table-column label="操作" align="center" width="100">
              <template #default="{ row }">
                <el-button type="danger" size="small" @click="deleteAd(row.adId)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMenu, ElMenuItem, ElForm, ElFormItem, ElInput, ElButton, ElTable, ElTableColumn, ElIcon, ElCard } from 'element-plus';
import { Upload, View } from '@element-plus/icons-vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

export default {
  name: 'AdvertiserDashboard',
  components: {
    ElMenu,
    ElMenuItem,
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElTable,
    ElTableColumn,
    ElIcon,
    ElCard,
    Upload,
    View,
  },
  data() {
    return {
      activeMenu: '1',
      currentPage: '',
      adForm: {
        adId: '',
        title: '',
        image: '',
        details: '',
        tags: '',
      },
      adsList: [],
      userBehaviors: [],
      currentUsername: localStorage.getItem('username'),
    };
  },
  methods: {
    handleMenuClick(menu) {
      this.currentPage = menu;
      if (menu === 'list') {
        this.fetchAds();
      }
    },

    async uploadAd() {
      try {
        const adData = { ...this.adForm, belongUsername: this.currentUsername };
        const response = await axios.post('http://101.43.72.79:8081/api/ads/upload', adData);
        if (response.data.success) {
          this.$message.success('广告上传成功');
          this.adForm = { adId: '', title: '', image: '', details: '', tags: '' };
        } else {
          this.$message.error('广告上传失败');
        }
      } catch (error) {
        this.$message.error('广告上传失败，请稍后重试');
      }
    },

    async deleteAd(adId) {
      try {
        const response = await axios.delete(`http://101.43.72.79:8081/api/ads/delete/${adId}`);
        if (response.data.success) {
          this.$message.success('广告删除成功');
          // 立即从广告列表中移除已删除的广告
          this.adsList = this.adsList.filter(ad => ad.adId !== adId);
        } else {
          this.$message.error('广告删除失败');
        }
      } catch (error) {
        this.$message.error('删除广告失败，请稍后重试');
      }
    },

    async fetchAds() {
      try {
        const response = await axios.get(`http://101.43.72.79:8081/api/ads/listForUser?username=${this.currentUsername}`);
        this.adsList = response.data;
      } catch (error) {
        this.$message.error('获取广告列表失败');
      }
    },
  },
  mounted() {
    this.fetchAds(); // 初始加载广告列表
  },
};
</script>

<style scoped>
.advertiser-dashboard {
  display: flex;
  height: 100vh;
  background-color: #f4f7fc;
}

.el-menu-vertical-demo {
  width: 180px;
  border-right: 1px solid #ebeef5;
  background-color: #3eaf7c;
  text-align: left;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.menu-item {
  padding: 12px;
  color: #fff;
  font-size: 16px;
}

.menu-item:hover {
  background-color: #4caf50;
}

.content-area {
  margin-left: 20px;
  padding: 20px;
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.welcome-message {
  text-align: center;
  font-size: 18px;
  margin-top: 50px;
}

.el-button {
  margin-top: 20px;
  background-color: #4caf50;
  color: white;
}

.el-table {
  width: 100%;
}

.el-form {
  max-width: 600px;
  margin-top: 20px;
}

.table-wrapper {
  max-height: 700px;
  overflow-y: auto;
}

.el-table th {
  background-color: #f4f4f4;
  color: #333;
}

.el-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.el-card {
  max-width: 1500px; /* 增大卡片的最大宽度 */
  margin: 0 auto;
  padding: 30px;
  border-radius: 12px; /* 增加圆角 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 增加阴影效果 */
}

.el-card h3 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  color: #4caf50;
}

.upload-button {
  width: 100%;
  background-color: #278f2b;
  color: white;
  font-weight: bold;
  padding: 10px 0;
  border-radius: 8px;
  font-size: 16px;
}

.upload-button:hover {
  background-color: #398f41;
}

.input-field {
  padding: 12px;
  font-size: 16px;
}

.large-textarea {
  min-height: 200px; /* 设置文本框最小高度 */
}

.el-button:disabled {
  background-color: #c4c4c4;
  color: #ffffff;
}
</style>


<template>
  <div class="app">
    <!-- 顶部广告区域 -->
    <header class="ad-header">
      <ad-header />
    </header>

    <!-- 主体内容区域 -->
    <div class="content-container">
      <!-- 分类栏 -->
      <aside class="category-aside">
        <category-list @categorySelected="onCategorySelected" />
      </aside>

      <!-- 主内容区域 -->
      <main class="main-content">
        <!-- 商品搜索区域 -->
        <product-search @search="onSearch" />

        <!-- 商品展示区域 -->
        <div class="product-scroll-container">
          <product-list :category-name="categoryName" :search-query="searchQuery" />
        </div>
      </main>

      <!-- 广告轮播区域 -->
      <aside class="ad-aside">
        <side-ad-bar />
      </aside>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import AdHeader from './components/AdHeader.vue';
import CategoryList from './components/CategoryList.vue';
import ProductSearch from './components/ProductSearch.vue';
import ProductList from './components/ProductList.vue';
import SideAdBar from './components/SideAdBar.vue'; // 引入广告组件

export default {
  name: 'App',
  components: {
    AdHeader,
    CategoryList,
    ProductSearch,
    ProductList,
    SideAdBar, // 注册广告组件
  },
  data() {
    return {
      categoryName: '全部',
      searchQuery: '',
      userId: null,
    };
  },
  methods: {
    onCategorySelected(name) {
      this.categoryName = name;
    },
    onSearch(query) {
      this.searchQuery = query;
    },
    async generateUserId() {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      this.userId = result.visitorId;
      localStorage.setItem('userId', this.userId);
    },
  },
  mounted() {
    if (!localStorage.getItem('userId')) {
      this.generateUserId();
    } else {
      this.userId = localStorage.getItem('userId');
    }
    console.log(this.userId);
  },
};
</script>

<style scoped>
.app {
  font-family: 'Arial', sans-serif;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.content-container {
  display: flex;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  background-color: #f5f5f5;
  max-width: 2000px;
  width: 100%;
  height: calc(100vh - 200px);
  box-sizing: border-box;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.product-scroll-container {
  width: 100%;
  height: 600px;
  overflow-y: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}



@media (max-width: 1024px) {
  .content-container {
    flex-direction: column;
    padding: 10px;
  }

  .category-aside,
  .ad-aside {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>


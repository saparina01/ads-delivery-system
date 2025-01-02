<template>
    <div class="app-container">
      <el-container>
        <!-- 顶部广告轮播 -->
        <el-header class="header">
          <el-carousel :interval="5000" type="card" class="carousel">
            <el-carousel-item v-for="(item, index) in ads" :key="index">
              <img :src="item.imageUrl" alt="广告图片" class="carousel-image" />
            </el-carousel-item>
          </el-carousel>
        </el-header>
        <el-container>
          <!-- 左侧分类导航 -->
          <el-aside width="250px" class="aside">
            <el-menu>
              <el-menu-item v-for="category in categories" :key="category" @click="filterByCategory(category)">
                {{ category }}
              </el-menu-item>
            </el-menu>
          </el-aside>
          <!-- 主内容区域 -->
          <el-main class="main">
            <el-row :gutter="20">
              <el-col :span="6" v-for="product in filteredProducts" :key="product.id">
                <el-card class="product-card">
                  <img :src="product.imageUrl" alt="商品图片" class="product-image" />
                  <h3 class="product-title">{{ product.name }}</h3>
                  <p class="product-price">{{ product.price }} 元</p>
                  <div class="product-actions">
                    <el-button type="primary" size="mini" @click="viewProduct(product)">查看详情</el-button>
                    <el-button type="success" size="mini" @click="addToCart(product)">加入购物车</el-button>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        ads: [
          { imageUrl: 'https://via.placeholder.com/800x450?text=广告1' },
          { imageUrl: 'https://via.placeholder.com/800x450?text=广告2' },
        ],
        categories: ['电子产品', '服装', '食品'],
        products: [
          { id: 1, name: '手机', category: '电子产品', price: 2000, imageUrl: 'https://via.placeholder.com/200' },
          { id: 2, name: '电脑', category: '电子产品', price: 5000, imageUrl: 'https://via.placeholder.com/200' },
          { id: 3, name: 'T恤', category: '服装', price: 100, imageUrl: 'https://via.placeholder.com/200' },
        ],
        filteredProducts: [],
      };
    },
    methods: {
      filterByCategory(category) {
        this.filteredProducts = this.products.filter(product => product.category === category);
      },
      viewProduct(product) {
        alert(`查看商品：${product.name}`);
        this.sendBehavior('click', product);
      },
      addToCart(product) {
        alert(`已添加 ${product.name} 到购物车`);
        this.sendBehavior('add_to_cart', product);
      },
      sendBehavior(type, product) {
        const behavior = {
          type,
          productName: product.name,
          category: product.category,
          timestamp: new Date().toISOString(),
        };
  
        axios.post('https://ads-platform.example.com/track', behavior)
          .then(() => console.log('行为已发送：', behavior))
          .catch(error => console.error('行为发送失败：', error));
      },
    },
    mounted() {
      this.filteredProducts = this.products;
    },
  };
  </script>
  
  <style>
  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .header {
    background-color: #f5f5f5;
    margin-bottom: 20px;
  }
  
  .carousel {
    height: 300px;
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .aside {
    background-color: #f9f9f9;
    padding: 10px;
  }
  
  .main {
    padding: 10px;
  }
  
  .product-card {
    text-align: center;
    border-radius: 10px;
  }
  
  .product-image {
    width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
  }
  
  .product-title {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .product-price {
    color: #fa541c;
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  .product-actions {
    display: flex;
    justify-content: space-around;
  }
  </style>
  
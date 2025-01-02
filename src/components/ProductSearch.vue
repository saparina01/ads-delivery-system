<template>
    <div class="search-container">
      <el-input
        v-model="searchQuery"
        placeholder="请输入商品名称"
        @keyup.enter="searchProduct"
        prefix-icon="el-icon-search"
        clearable
      />
      <el-button @click="searchProduct" class="pink-button">
        <i class="fa fa-hand-o-right"></i> 搜索
      </el-button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      searchProduct() {
        if (this.searchQuery.trim()) {
          this.$emit('search', this.searchQuery);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .search-container {
    display: flex;
    align-items: center;
    gap: 10px; /* 输入框和按钮之间的间距 */
  }
  
  .el-input {
    flex-grow: 1; /* 输入框占据剩余空间 */
  }
  
  .el-button.pink-button {
    background-color: #0c0c0c; /* 粉红色背景 */
    color: white; /* 白色文字 */
    border-color: #111111; /* 粉红色边框 */
  }
  
  .el-button.pink-button:hover {
    background-color: #f039945f; /* 悬停时的颜色（深粉色） */
    border-color: #f039945f;
  }
  
  .el-button i {
    margin-right: 5px; /* 图标与文本之间的间距 */
  }
  </style>
  
  
  
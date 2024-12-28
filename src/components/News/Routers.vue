<template>
  <el-menu 
    :default-active="activeCategory" 
    @select="handleSelect" 
    class="router-menu" 
    mode="horizontal"
  >
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">教育</el-menu-item>
    <el-menu-item index="3">健康</el-menu-item>
    <el-menu-item index="4">科技</el-menu-item>
    <el-menu-item index="5">娱乐</el-menu-item>
    <el-menu-item index="6">时尚</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: "1", // 默认选中首页
      categoryMap: {
        "1": "首页",
        "2": "教育",
        "3": "健康",
        "4": "科技",
        "5": "娱乐",
        "6": "时尚"
      }
    };
  },
  methods: {
    handleSelect(index) {
      const selectedCategory = this.categoryMap[index]; // 获取对应的类别字符串
      this.activeCategory = index;
      this.$emit("category-selected", selectedCategory); // 将选中的类别字符串传递给父组件
    },
  },
};
</script>

<style scoped>
.router-menu {
  width: 100%;
  background: #f5f5f5;
  line-height: 60px;
  border-bottom: 1px solid #dcdfe6; 
}

.router-menu .el-menu-item {
  padding: 0 20px; 
  width: 16.5%;
  text-align: center;
  font-size: 15px; 
}
</style>

  
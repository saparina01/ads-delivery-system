<template>
  <el-container>
    <el-aside width="200px">
      <SiderAds />
    </el-aside>

    <el-container>
      <el-header>
        <Routers @category-selected="handleCategorySelected" />
      </el-header>
      <el-main>
        <ShowNews :category="selectedCategory" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Routers from "./Routers.vue";
import SiderAds from "../SiderAds.vue";
import ShowNews from "./ShowNews.vue";

export default {
  components: {
    Routers,
    SiderAds,
    ShowNews,
  },
  data() {
    return {
      selectedCategory: "首页", // 默认选中首页
    };
  },
  methods: {
    handleCategorySelected(category) {
      this.selectedCategory = category;
    },
  },
};
</script>
  
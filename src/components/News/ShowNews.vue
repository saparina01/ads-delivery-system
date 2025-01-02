<template>
  <div class="show-news">
    <!-- 搜索框 -->
    <div class="search-bar">
      <el-input
        v-model="searchKeyword"
        placeholder="请输入新闻标题或标签关键字"
        clearable
        style="width: 80%"
      />
      <el-button type="primary" @click="fetchNewsByKeyword" style="width: 20%"
        >搜索</el-button
      >
    </div>
    <!-- 新闻列表展示 -->
    <el-card v-for="(news, index) in newsList" :key="index" class="news-card">
      <div class="title-tag">
        <h3
          :class="{ focused: focusedIndex === index }"
          class="ad-title"
          @mouseover="setFocus(index)"
          @mouseleave="removeFocus"
          @click="showNewsDetails(news)"
        >
          {{ news.title }}
        </h3>
        <!-- 标签展示 -->
        <div class="tags-container">
          <el-tag
            v-for="(tag, tagIndex) in news.tags"
            :key="tagIndex"
            type="info"
            effect="light"
            class="tag"
          >
            {{ tag }}
          </el-tag>
        </div>
      </div>
      <p>{{ news.summary }}</p>
    </el-card>

    <!-- 弹窗展示新闻详情 -->
    <el-dialog :visible.sync="dialogVisible" title="新闻详情">
      <div>
        <h3>{{ currentNews.title }}</h3>
        <el-image
          :src="currentNews.image"
          alt="news image"
          style="width: 100%; height: auto; margin-bottom: 10px"
        />
        <p>{{ currentNews.details }}</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    category: {
      // 接收来自父组件的类别
      type: String,
      required: true,
    },
  },
  data() {
    return {
      focusedIndex: null, // 当前聚焦的广告索引
      newsList: [], // 新闻列表数据
      dialogVisible: false, // 控制弹窗显示与隐藏
      currentNews: {}, // 当前选中的新闻
      searchKeyword: "",
    };
  },

  watch: {
    // 监听类别变化
    category: {
      handler(newCategory) {
        this.fetchNews(newCategory);
      },
      immediate: true, // 组件创建时立即执行一次
    },
  },

  methods: {
    setFocus(index) {
      this.focusedIndex = index; // 鼠标悬停时设定聚焦
    },
    removeFocus() {
      this.focusedIndex = null; // 鼠标离开时取消聚焦
    },

    // 请求新闻数据
    async fetchNews(category) {
      try {
        const params =
          category === "首页" ? { limit: 6 } : { limit: 6, category };
        const response = await axios.get("http://106.15.52.71:8088/api/news", {
          params,
        });
        this.newsList = response.data;
      } catch (error) {
        console.error("获取新闻数据失败:", error);
        this.$message.error("无法加载新闻数据，请稍后重试！");
      }
    },

    // 展示新闻详情
    showNewsDetails(news) {
      this.currentNews = news;
      this.dialogVisible = true;
      this.uploadBehavior(news.tags, "click"); // 上传行为数据
    },

    // 上传行为数据***********************************************************************
    async uploadBehavior(tags, behaviorType) {
      // 从 localStorage 获取设备指纹（userId）
      const userId = localStorage.getItem("user_id") || "anonymous_user";
      console.log("上传用户行为时使用的userId：" + userId);

      // 将 tags 数组转换为逗号分隔的字符串
      const formattedTags = Array.isArray(tags) ? tags.join(",") : tags;

      try {
        await axios.post("http://172.20.10.2:8081/api/behavior/upload", {
          userId: userId,
          tags: formattedTags,
          behaviorType: behaviorType,
        });
      } catch (error) {
        console.error("行为数据上传失败:", error);
      }
    },

    // 基于关键词从后端搜索新闻
    async fetchNewsByKeyword() {
      try {
        const params = {
          keyword: this.searchKeyword, // 将搜索关键字传递给后端
          limit: 5,
        };
        const response = await axios.get(
          "http://106.15.52.71:8088/api/news/search",
          {
            params,
          }
        );
        this.newsList = response.data; // 更新新闻列表
      } catch (error) {
        console.error("搜索新闻数据失败:", error);
        this.$message.error("搜索失败，请稍后重试！");
      }
    },
  },
  mounted() {
    this.fetchNews(this.category); // 组件挂载时加载新闻数据
  },
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 20px;
}
.show-news {
  padding: 0;
}
.news-card {
  margin-bottom: 8px;
}
h3 {
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 10px;
}
.ad-title {
  font-size: 18px;
  cursor: pointer;
  margin-right: 20px; /* 设置标题和标签容器之间的间距 */
}
.ad-title.focused {
  color: #0077ee; /* 鼠标悬停时变蓝 */
}

.ad-title:hover {
  color: #0077ee; /* 鼠标悬停时变蓝 */
}
.title-tag {
  display: flex;
  align-items: center; /* 使标签和标题垂直居中对齐 */
}

.tags-container {
  display: flex;
  gap: 8px; /* 标签之间的间距 */
}

.tag {
  font-size: 15px; /* 设置字体大小 */
  border-radius: 5px; /* 设置圆角 */
}
</style>


  
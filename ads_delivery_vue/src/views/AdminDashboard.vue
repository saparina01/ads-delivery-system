<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="18">
          <el-menu mode="horizontal" :default-active="activeMenu" @select="handleMenuSelect">
            <el-menu-item index="ads">广告管理</el-menu-item>
            <el-menu-item index="behavior">用户行为</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <el-tabs v-model="activeTab">
        <!-- 广告管理 -->
        <el-tab-pane label="所有广告" name="ads">
          <el-table :data="adsList" stripe>
            <el-table-column prop="adId" label="广告ID"></el-table-column>
            <el-table-column prop="title" label="广告标题"></el-table-column>
            <el-table-column prop="image" label="广告图片">
              <template v-slot="scope">
                <el-image :src="scope.row.image" style="width: 100px; height: 100px;"></el-image>
              </template>
            </el-table-column>
            <el-table-column prop="tags" label="标签">
              <template v-slot="scope">
                {{ scope.row.tags.join(', ') }}
              </template>
            </el-table-column>
            <el-table-column prop="clickCount" label="点击量"></el-table-column>
            <el-table-column>
              <template v-slot="scope">
                <el-button type="danger" @click="deleteAd(scope.row.adId)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <!-- 用户行为管理 -->
        <el-tab-pane label="所有用户行为" name="behavior">
          <el-table :data="userBehaviorList" stripe>
            <el-table-column prop="userId" label="用户ID"></el-table-column>
            <el-table-column prop="tags" label="行为标签">
              <template v-slot="scope">
                {{ scope.row.tags.join(', ') }}
              </template>
            </el-table-column>
            <el-table-column prop="behaviorType" label="行为类型">
              <template v-slot="scope">
                <span>{{ getBehaviorTypeText(scope.row.behaviorType) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="behaviorWeight" label="行为权重"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import { ref, onMounted } from "vue";
import { ElTable, ElTableColumn, ElButton, ElContainer, ElHeader, ElMain, ElMenu, ElMenuItem, ElRow, ElCol, ElTabs, ElTabPane, ElImage } from "element-plus";
import axios from "axios";

export default {
  name: "AdminPage",
  setup() {
    const activeTab = ref("ads");
    const adsList = ref([]);
    const userBehaviorList = ref([]);

    onMounted(async () => {
      await fetchAds();
      await fetchUserBehavior();
    });

    // 获取广告列表
    const fetchAds = async () => {
      try {
        const response = await axios.get("/api/ads/listAll");
        adsList.value = response.data.map(ad => ({
          ...ad,
          tags: ad.tags ? ad.tags.split(',') : []
        }));
      } catch (error) {
        console.error("Failed to fetch ads:", error);
      }
    };

    // 获取用户行为列表
    const fetchUserBehavior = async () => {
      try {
        const response = await axios.get("/api/behavior/listAll");
        userBehaviorList.value = response.data.map(behavior => ({
          ...behavior,
          tags: behavior.tags ? behavior.tags.split(',') : []
        }));
      } catch (error) {
        console.error("Failed to fetch user behavior:", error);
      }
    };

    // 删除广告
    const deleteAd = async (adId) => {
      try {
        await axios.delete(`/api/ads/delete/${adId}`);
        await fetchAds();
      } catch (error) {
        console.error("Failed to delete ad:", error);
      }
    };

    // 转换行为类型的显示文字
    const getBehaviorTypeText = (behaviorType) => {
      return behaviorType;
    };

    return {
      activeTab,
      adsList,
      userBehaviorList,
      fetchAds,
      fetchUserBehavior,
      deleteAd,
      getBehaviorTypeText
    };
  }
};
</script>

<style scoped>
.el-header {
  background-color: #409eff;
  color: white;
}
</style>

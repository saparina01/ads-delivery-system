<template>
  <div class="category-container">
    <!-- 切换按钮 -->
    <el-button
      class="toggle-button"
      @click="toggleCollapse"
      type="primary"
      size="small"
      round
    >
      {{ isCollapsed ? '展开分类' : '收起分类' }}
    </el-button>

    <!-- 分类菜单 -->
    <el-menu
      default-active="全部"
      class="category-menu"
      @select="onCategorySelect"
      :collapse="isCollapsed"
      :collapse-transition="false"
      background-color="#f8e1f4"
      text-color="#333"
      active-text-color="#e91e63"
      unique-opened
    >
      <el-menu-item
        v-for="category in categories"
        :key="category.name"
        :index="category.name"
        class="menu-item"
      >
        <template #title>
          <i :class="category.icon" class="menu-icon"></i> {{ category.name }}
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false, // 控制菜单折叠
      categories: [
        { name: '全部', icon: 'el-icon-menu' },
        { name: '服装', icon: 'el-icon-t-shirt' },
        { name: '食品', icon: 'el-icon-orange' },
        { name: '美妆', icon: 'el-icon-magic-stick' },
        { name: '数码', icon: 'el-icon-monitor' },
        { name: '体育', icon: 'el-icon-football' },
      ],
    };
  },
  methods: {
    onCategorySelect(categoryName) {
      this.$emit('categorySelected', categoryName); // 发送分类名称
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.category-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 100%;
  background: linear-gradient(135deg, #f8e1f4, #f1c0d9);
  border-right: 1px solid #ddd;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px 10px;
  box-sizing: border-box;
}

.toggle-button {
  margin-bottom: 15px;
  background-color: #e91e63;
  color: white;
  border: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #f06292;
}

.category-menu {
  width: 100%;
  border: none;
}

.menu-item {
  border-radius: 4px;
  transition: all 0.3s ease;
  margin: 5px 0;
}

.menu-item:hover {
  background-color: #f8c8e6;
  color: #e91e63;
  transform: translateX(5px);
}

.menu-icon {
  margin-right: 10px;
  font-size: 20px;
  transition: transform 0.3s ease;
}

.menu-item:hover .menu-icon {
  transform: scale(1.1);
}
</style>


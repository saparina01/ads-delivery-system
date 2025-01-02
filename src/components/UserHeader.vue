<template>
  <el-header class="user-header">
    <div class="logo">新闻网站</div>
    <div class="actions">
      <el-button @click="handleLogin">登录</el-button>
      <el-button type="primary" @click="handleRegister">注册</el-button>
      <el-button type="success" @click="viewProfile">
        <i class="el-icon-user"></i> 查看个人信息
      </el-button>
    </div>
  </el-header>
</template>
  
  <script>
export default {
  methods: {
    handleLogin() {
      this.$message("登录功能未实现");
    },
    handleRegister() {
      this.$message("注册功能未实现");
    },
    viewProfile() {
      this.$message("查看个人信息功能未实现");
    },
  },
};
</script>
  
  <style scoped>
.user-header {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 确保子元素垂直居中 */
  padding: 0 20px;
  background: #066fd8;
  color: white;
}
.logo {
  font-size: 1.5em;
  line-height: 64px;
  font-weight: bold;
}
.actions .el-button {
  margin-left: 10px;
  background-color: #ffffff; /* 按钮背景颜色 */
  color: #409eff; /* 按钮文字颜色 */
  border: 1px solid #409eff; /* 按钮边框颜色 */
}
.actions .el-button:hover {
  background-color: #f0f8ff; /* 鼠标悬停时按钮背景颜色 */
}
</style>
  
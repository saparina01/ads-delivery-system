<template>

</template>

<script setup>
import { ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton, ElTabs, ElTabPane } from 'element-plus';

const activeTab = ref('login');  // 当前选中的 tab，默认为登录

// 登录表单数据
const loginForm = ref({
  username: '',
  password: ''
});

// 注册表单数据
const registerForm = ref({
  username: '',
  password: '',
  confirmPassword: ''
});

// 登录表单验证规则
const loginRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
};

// 注册表单验证规则
const registerRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    { validator: checkConfirmPassword, trigger: 'blur' }
  ]
};

// 检查确认密码是否一致
function checkConfirmPassword(rule, value, callback) {
  if (value !== registerForm.value.password) {
    callback(new Error('两次密码输入不一致'));
  } else {
    callback();
  }
}

// 登录处理
function handleLogin() {
  console.log('登录数据：', loginForm.value);
  // 在此处处理登录请求，调用 API 等
}

// 注册处理
function handleRegister() {
  console.log('注册数据：', registerForm.value);
  // 在此处处理注册请求，调用 API 等
}

// 切换到注册页
function switchToRegister() {
  activeTab.value = 'register';
}

// 切换到登录页
function switchToLogin() {
  activeTab.value = 'login';
}
</script>

<style scoped>
.login-register-container {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.el-tabs__header {
  margin-bottom: 20px;
}
</style>

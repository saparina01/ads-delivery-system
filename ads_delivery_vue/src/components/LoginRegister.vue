<template>
  <div class="login-register-container">
    <el-tabs v-model="activeTab" type="card">
      <!-- 登录Tab -->
      <el-tab-pane label="登录" name="login">
        <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" label-width="100px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin">登录</el-button>
            <el-button @click="switchToRegister">没有账号？注册</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <!-- 注册Tab -->
      <el-tab-pane label="注册" name="register">
        <el-form :model="registerForm" :rules="registerRules" ref="registerFormRef" label-width="100px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input type="password" v-model="registerForm.confirmPassword" placeholder="请确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleRegister">注册</el-button>
            <el-button @click="switchToLogin">已有账号？登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {ElMessage} from 'element-plus';
import {register, login} from '@/api/authApi';  // 引入 API

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
    {required: true, message: '请输入用户名', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'}
  ]
};

// 注册表单验证规则
const registerRules = {
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'}
  ],
  confirmPassword: [
    {required: true, message: '请确认密码', trigger: 'blur'},
    {validator: checkConfirmPassword, trigger: 'blur'}
  ]
};

// 确认密码验证
function checkConfirmPassword(rule, value, callback) {
  if (value !== registerForm.value.password) {
    callback(new Error('两次密码输入不一致'));
  } else {
    callback();
  }
}

// 登录处理
const handleLogin = async () => {
  try {
    const data = await login(loginForm.value);
    if(data==="用户不存在"||data==="密码错误")
      ElMessage.error(data);
    else ElMessage.success("欢迎"+data);
    // ElMessage.success(data.message);
    // 登录成功后的处理，比如跳转到主页
  } catch (error) {
    // if (error.response.status === 404) {
    //   // 用户名不存在，切换到注册页面
    //   ElMessage.error(error.response.data);
    //   switchToRegister();  // 切换到注册页面
    // } else if (error.response.status === 401) {
    //   // 密码错误
    //   ElMessage.error(error.response.data);
    // } else {
      // 其他错误
      ElMessage.error('登录失败，请稍后再试');
    // }
  }
};

const handleRegister = async () => {
  try {
    const data = await register(registerForm.value);
    if(data==="用户名已存在")
      ElMessage.error(data);
    else ElMessage.success(data.message);
    // 注册成功后跳转到登录页面
    switchToLogin();
  } catch (error) {
    // if (error.response.status === 400) {
    //   // 用户名已存在
    //   ElMessage.error(error.response.data);
    // } else {
      // 其他错误
      ElMessage.error('注册失败，请稍后再试');
    // }
  }
};


// 切换到注册页面
const switchToRegister = () => {
  activeTab.value = 'register';
};

// 切换到登录页面
const switchToLogin = () => {
  activeTab.value = 'login';
};

// 激活当前选中的 Tab
const activeTab = ref('login');
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

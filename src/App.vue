<template>
  <div id="app">
    <UserHeader />
    <TopAds />
    <News />
  </div>
</template>

<script>
import axios from "axios";
import FingerprintJS from '@fingerprintjs/fingerprintjs';  // 导入 FingerprintJS 库
import UserHeader from "./components/UserHeader.vue";
import TopAds from "./components/TopAds.vue";
import News from "./components/News/News.vue";

export default {
  name: "App",
  components: {
    UserHeader,
    TopAds,
    News,
  },
  mounted() {
    this.initializeUserId();  // 在组件挂载时初始化用户 ID
  },
  methods: {
    // 初始化 user_id
    async initializeUserId() {
      // 先从 cookies 获取 user_id
      let userId = this.getCookie('user_id');
      if (!userId) {
        // 如果没有 user_id，生成一个新的设备指纹
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        userId = result.visitorId;
        // 将 user_id 保存到 cookies
        this.setCookie('user_id', userId, 365);  // 设置过期时间为 365 天        
      }
      localStorage.setItem("user_id", userId);
      console.log("App.vue加载的User ID: ", userId);
    },
    
    // 获取 cookies 的方法
    getCookie(name) {
      let nameEq = name + "=";
      let ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEq) === 0) {
          return c.substring(nameEq.length, c.length);
        }
      }
      return null;
    },

    // 设置 cookies 的方法
    setCookie(name, value, days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      let expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    },
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>

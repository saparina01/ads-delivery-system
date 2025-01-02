import './style.css'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router';  // 引入路由配置
import axios from 'axios';

axios.defaults.baseURL = 'http://101.43.72.79:8081';
const app = createApp(App)
 // 这里是你后端的地址
app.config.globalProperties.$axios = axios;

app.use(ElementPlus)
app.use(router);  // 注册路由
app.mount('#app')


import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'font-awesome/css/font-awesome.min.css'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router'
import './assets/css/common.css'
createApp(App).use(ElementPlus).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router'
import './assets/css/common.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


axios.defaults.baseURL = '/api'   //配置BaseURL  数据所在服务器的前缀（即固定部分）

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')

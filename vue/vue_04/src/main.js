import { createApp } from 'vue'


import axios from 'axios'
import VueAxios from 'vue-axios'


import App from './App.vue'
import router from './router'


import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


import './assets/css/common.css'


//解决跨域的问题
axios.defaults.baseURL = '/api/'  //配置BaseRrl 数据所在服务器的前缀（即固定部分）


//设置axios的请求拦截器 给header头添加token信息用户获取数据
axios.interceptors.request.use(config => {
    // console.log(config)
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})


// createApp(App).use(ElementPlus).use(router).mount('#app')
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
app.use(VueAxios, axios);



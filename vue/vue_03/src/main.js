// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



import {createApp} from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import vueConfig from '../vue.config'



createApp.use(ElementUI)

createApp(App).use(router).mount("#app")

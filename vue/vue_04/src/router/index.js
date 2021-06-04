import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from "../components/Login.vue"
import Home from "../components/Home.vue"
import Welcome from "../components/Welcome.vue"
import Item from "../components/items/list.vue"//体检套餐管理
import Compose from "../components/compose/list.vue"//体检项管理
import Order from "../components/order/list.vue"//预约信息查询
import Stand from "../components/stand/list.vue"//标准指标管理
import Hospital_stand from "../components/hospital_stand/list.vue"//机构指标管理


const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/item', component: Item },//体检套餐管理
      { path: '/compose', component: Compose },//体检项管理
      { path: '/order', component: Order },//预约信息查询
      { path: '/stand', component: Stand },//标准指标管理
      { path: '/hospital_stand', component: Hospital_stand },//机构指标管理
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})




//路由守卫 beforeEach
// 放非法登录
// 为路由对象 ，添加baforeEach 导航守卫
router.beforeEach((to, from, next) => {
  // 判断访问的页面如果是登录页面则直接放行
  if (to.path == '/login') return next();
  // 不是登录页面 则取token 如果有token则放行  没有跳转到登录页面
  const token = window.sessionStorage.getItem('token')
  // 没有token 则强制跳转到登录页面
  if (!token) {
    return next('/login')
  }
  next()
})




export default router

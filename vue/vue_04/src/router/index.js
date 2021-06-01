import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

const routes = [
  { 
    path:'/',
    redirect:'/login'
  }, 
  {
    path: '/login',
    name: 'Login', 
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

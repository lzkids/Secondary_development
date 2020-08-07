// 导入路由
import VueRouter from 'vue-router'
// 导入vue
import Vue from 'vue'
import Login from '../views/Login/Login'
// 注册路由
Vue.use(VueRouter)
const routes = [
  {
    path: '/login', component: Login
  }
]

const router = new VueRouter({ routes })
export default router

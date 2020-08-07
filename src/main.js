import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入EelUi组件库及样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
// 注册
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

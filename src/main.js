import Vue from 'vue'
import App from './App.vue'
import router from './router'  //注入路由

import '@/assets/css/common.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

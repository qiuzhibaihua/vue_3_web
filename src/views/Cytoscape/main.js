import Vue from 'vue'
import App from './App.vue'
import router from '../../router'
import store from '../../store'

// 引入系统的_mix
import '../../_mix/index'

// 混入补充
import userMmix from  '../../_mix/user'
Vue.mixin(userMmix)


Vue.config.productionTip = false
// 开启检查
Vue.config.devTools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

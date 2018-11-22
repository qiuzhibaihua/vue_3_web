import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入系统的_mix
import '../../_mix/index'

// 引入基本设置_mix
import '../../_mix/main'

import userMmix from  '../../_mix/user'
Vue.mixin(userMmix)
// import '../../assets/js/px2rem750'
Vue.config.productionTip = false
// 开启检查
Vue.config.devTools = true

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

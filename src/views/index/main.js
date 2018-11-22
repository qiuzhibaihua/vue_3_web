import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入系统的_mix
import index from '../../_mix/index'
Vue.mixin(index)

// 引入基本设置_mix
import main from '../../_mix/main'
Vue.mixin(main)

// import '../../assets/js/px2rem750'
Vue.config.productionTip = false
// 开启检查
Vue.config.devTools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

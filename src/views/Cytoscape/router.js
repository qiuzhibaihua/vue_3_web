import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 定义路由返回
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './components/Home.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.console.log(router)
  next()
})
export default router

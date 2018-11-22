import Vue from 'vue'
import Router from 'vue-router'
// 监听路由返回
window.addEventListener("popstate", function() {
  alert("我监听到了浏览器的返回按钮事件啦")//根据自己的需求实现自己的功能
}, false)
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
    },
    {
      path: '/about',
      name: 'about',
      // 懒加载
      component: () => import('./components/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.console.log(router)
  
  next()
})
export default router

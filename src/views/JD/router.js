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
    },
    {
      path: '/about',
      name: 'about',
      // 懒加载
      component: () => import('./components/About.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      // 懒加载
      component: () => import('./components/Modal.vue')
    },
    {
      path: '/x_scroll',
      name: 'x_scroll',
      // 懒加载
      component: () => import('./components/x_scroll.vue')
    },
    {
      path: '/scroll',
      name: 'scroll',
      // 懒加载
      component: () => import('./components/scroll.vue')
    },{
      path: '/Loading',
      name: 'Loading',
      // 懒加载
      component: () => import('./components/Loading.vue')
    },{
      path: '/Swiper',
      name: 'Swiper',
      // 懒加载
      component: () => import('./components/Swiper.vue')
    },{
      path: '/BottomModal',
      name: 'BottomModal',
      // 懒加载
      component: () => import('./components/BottomModal.vue')
    }
    ,{
      path: '/Totop',
      name: 'Totop',
      // 懒加载
      component: () => import('./components/Totop.vue')
    },{
      path: '/waterfall',
      name: 'waterfall',
      // 懒加载
      component: () => import('./components/waterfall.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.console.log(router)
  next()
})
export default router

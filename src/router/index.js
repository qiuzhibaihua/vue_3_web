import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { getRouter } from "@/api/login";
import { addRouter } from "@/util/addRouter";
import { setToken, getToken, removeToken } from "@/util/auth";

//引入nprogress加载动画
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入
Vue.use(Router)
let vm = new Vue()
// 公共布局
import Layout from '../views/Cytoscape/layout/Layout'

export const StaticRouterMap = [
  
  {
    path: '/login',
    name:'登录',
    component: () => import('@/views/Cytoscape/login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    meta: { title: '主页', icon: 'example' },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Cytoscape/home/index')
      }
    ]
  },
  { path: '/404', component: () => import('@/views/Cytoscape/404'), hidden: true },
]
const router = new Router({
  // mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: StaticRouterMap 
})
// 白名单
const whiteList = ['/login']
var data = false
// 路由进入
router.beforeEach((to, from, next) => {
  document.title = to.name ? to.name:'工作台'
  // 进度条开始
  NProgress.start()
    if (getToken()) {
      // 判断cookice是否存在 不存在即为未登录
      if (to.path !== '/login') {
        if (data) {
          console.log('路由已经存在')
          // 获取了动态路由,就无需再次请求 直接放行
            next()
        } else {
          console.log('路由不存在')
          // data为false,一定没有获取动态路由,就跳转到获取动态路由的方法
          gotoRouter(to, next)
        }
      } else {
        vm.$message.info('您已经登录')
        // console.log(store.routerData)
        next('/')
      }
    } else {
      data = false
      if (whiteList.indexOf(to.path) !== -1) {
        console.log('[info]-----此路由在白名单内')
        // 免登陆白名单 直接进入
        next()
      } else {
        console.log('[info]-----此路由不在白名单内')
        next('/login')
      }
    }
  })
// 路由完成
router.afterEach(() => {
  NProgress.done()
})
function gotoRouter(to, next) {
  let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
  // 如果用户信息没有跳转到登录页(用户信息的在退出和关掉浏览器后就失效)
  if(!userInfo){
    // 删除token
    removeToken()
    // 跳转登录页
    next('/login')
  }else{
    // 根据用户名来获取路由信息(todo自定义)
    getRouter(userInfo.username) // 获取动态路由的方法
      .then(res => {
        window.console.log('解析后端动态路由', res.data.data.router)
        const asyncRouter = addRouter(res.data.data.router) // 进行递归解析
        // 一定不能写在静态路由里面,否则会出现,访问动态路由404的情况.所以在这列添加
        asyncRouter.push({ path: '*', redirect: '/404', hidden: true })
        return asyncRouter
      })
      .then(asyncRouter => {
        router.addRoutes(asyncRouter) // vue-router提供的addRouter方法进行路由拼接
        data = true // 记录路由获取状态
        store.dispatch('addRoutes', asyncRouter) // 存储到vuex
        next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
      })
      .catch(e => {
        removeToken()
      })
  }
}
export default router


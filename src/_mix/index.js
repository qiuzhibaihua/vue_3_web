import Vue from 'vue'
// 描述: 系统组件 懒加载和公共css
// 引入公共的css
// 引入rem js(以750px为标准)
import '../assets/css/reset.css'
// 引入animate.css
import 'animate.css'
// 引入font-awaresome
import 'font-awesome/css/font-awesome.css'
 // 引入手动左右切换组件
 import Hammer from 'hammerjs'
 Vue.prototype.$Hammer = Hammer 
// 引入util
import util from '../util/util'
Vue.prototype.$util = util 

// 图片懒加载(可修改默认图片)
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  lazyComponent: true,
  listenEvents: ['scroll'],
  loading: '//ojn8rdkav.qnssl.com/1461233716loading.jpg?imageslim',
  error: '//ojn8rdkav.qnssl.com/1461233716loading.jpg?imageslim',
})
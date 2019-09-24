import Vue from 'vue'
import moment from 'moment'
// 描述: 系统组件 懒加载和公共css
// 引入公共的css
// 引入rem js(以750px为标准)
import '../assets/css/reset.css'

// 引入animate.css
import 'animate.css'

// 引入font-awaresome
import 'font-awesome/css/font-awesome.css'

// 组件通信(bus)
import eventBus from '../components/bus/index'
Vue.use(eventBus)

// 页面缓存
import cache from "@c/_cache/index.js"
// sessionStorage缓存 如果不传值默认就是localStorage
Vue.prototype.$cache = new cache(sessionStorage)

// 全局引入util
import util from '../util/util'
Vue.prototype.$util = util 

// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
// 图片懒加载(可修改默认图片)
/**
 * 懒加载图片地址三种方式在线地址  asset(需要require)  static(引用的是绝对地址)
 */
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  lazyComponent: true,
  listenEvents: ['scroll'],
  loading: '//ojn8rdkav.qnssl.com/1461233716loading.jpg?imageslim',
  error: '//ojn8rdkav.qnssl.com/1461233716loading.jpg?imageslim',
})

// 过滤器
Vue.filter('reverseStr', function(value) {
  return value.split('').reverse().join('_')
});

//时间格式过滤器 
Vue.filter('dateFormat', (dateStr, pattern = 'YYYY-MM-DD') => {
  if (dateStr) {
    return moment(dateStr).format(pattern)
  } else {
    return dateStr
  }
})

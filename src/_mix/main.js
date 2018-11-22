import Vue from 'vue'
// 系统弹窗
import {Toast,Alert,Loading} from '../components/pop/index' // 系统消息 this.$pop.toast
Vue.prototype.$Toast = Toast
Vue.prototype.$Alert = Alert
Vue.prototype.$Loading = Loading

// dialog
import Dioalog from '../components/diaolog/index'
Vue.prototype.$Dioalog = Dioalog

// modal
import commonModal from '../components/commonModal/index'
Vue.use(commonModal)

// BottomModal
import BottomModal from '../components/bottom_modal/index'
console.log(BottomModal)
Vue.use(BottomModal)

// scroll
import scroll from '../components/scroll/index'
Vue.use(scroll)

// x-scroll(横向滚动)
import x_scroll from '../components/x_scroll/index'
Vue.use(x_scroll)

// 回到顶部
import Totop from '../components/Totop/index.js'
Vue.use(Totop)

// swiper
import swiper from '../components/swipe/index.js'
Vue.use(swiper)

// Switch
import comSwitch from '../components/switch/index.js'
Vue.use(comSwitch)

// waterfall
import waterfall from '../components/waterfall/index.js'
Vue.use(waterfall)

// 组件通信(bus)
import eventBus from '../components/bus/index'
Vue.use(eventBus)

// 页面缓存
import cache from "@c/_cache/index.js"
// sessionStorage缓存 如果不传值默认就是localStorage
Vue.prototype.$cache = new cache(sessionStorage)

// 底部tabbar
import commonTabbar from "@c/Bottom_Tabbar/index"
Vue.use(commonTabbar)

Vue.filter('reverseStr', function(value) {
    return value.split('').reverse().join('_')
});
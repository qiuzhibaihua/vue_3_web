
// import Vue from 'vue'
import toast from './toast'
import alert from './alert'
import loading from './loading'

// const plugin = {
//     install: (Vue)=>{
//         // 提示类型(可添加)
//         let pop = {toast, alert, loading}
//         // 将提示函数赋值给vue的
//         Vue.prototype.$pop = pop
//     }
// }
// Vue.use(plugin)
export const Toast = toast
export const Alert = alert
export const Loading = loading
import Vue from 'vue'
import Loading from './loading'

const Ctrl = Vue.extend(Loading)
let instance = new Ctrl().$mount()

export default instance

// 调用例子
// this.$Loading.open()
// setTimeout(()=>{
//   this.$Loading.close()
// },2000)
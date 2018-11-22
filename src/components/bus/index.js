export default {
    install(Vue) {
        Vue.prototype.$bus = new Vue()
    }
}
// 调用例子 $emit 创建 $on监听 $off销毁
// 第一个组件中
// this.$bus.$emit('todoSth', {'content':'hello'});
// 第二个组件中 ⚠️ 在组件销毁时清除
// this.$bus.$on('todoSth', (params) => {  //获取传递的参数并进行操作
//     window.console.log(params)
// })
// beforeDestroy () {
//     this.$bus.$off('todoSth');
// },
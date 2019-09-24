<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  created () {
    // 解决vuex数据刷新丢失数据
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
      console.log(1234)
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
</script>
<style lang="less">
#app {
  font-size: 0.3rem;
  text-align: center
}
</style>

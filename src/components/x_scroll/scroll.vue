<template>
  <ul ref="ulbox">
    <li v-for="(item,index) in list" :key="'listData'+index" @click="selectState">{{item}}</li>
  </ul>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      list:{
        type:Array,
        default:[]
      }
    },
    mounted() {
    },
    methods: {
      selectState:function(){
        console.log(this.$refs.ulbox)
        let lastLi = this.$refs.ulbox.querySelectorAll('li')[this.$refs.ulbox.querySelectorAll('li').length-1]
        // 总宽度 
        let allwidth = lastLi.offsetLeft + lastLi.clientWidth

        let domoffserleft = event.currentTarget.offsetLeft

        // 当前li 宽度
        let domoffserwidth = event.currentTarget.offset

        let defaultleft = (document.body.clientWidth)/2
        // 判断当前是否超出
        if(domoffserleft > defaultleft){
          console.log(domoffserleft - defaultleft)
          // this.$refs.ulbox.scrollLeft = (domoffserleft - defaultleft)
          this.$refs.ulbox.style.transform = `translateX(-${domoffserleft - defaultleft}px)`
        } else{
          this.$refs.ulbox.style.transform = 'translateX('+0+')'
        }
      }
    },
    watch: {

    }
  }
</script>
<style lang="less" scoped>
ul{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  transition: all .3s linear;
  margin-left:0;
  li{
    flex:0 0 auto;
    padding:0.1rem;
  }
}
</style>

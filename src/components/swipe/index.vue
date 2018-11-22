<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in 3" :key="item">
          <img src="https://ojn98tluc.qnssl.com/pic0gow_5b14a32c75960?imageMogr2/thumbnail/320x/strip/quality/75/format/jpg" alt="">
        </div>
      </div>
      <div v-if="paginationState" class="swiper-pagination"></div>
      <template v-if="navigationState">
        <div class="swiper-button-prev swiper-button-white"></div><!--左箭头-->
        <div class="swiper-button-next swiper-button-white"></div><!--右箭头-->
      </template>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";
  export default {
    data(){
      return{
        paginationState:this.pagination,
        navigationState:this.navigation
      }
    },
    props: {
      // 是否自动切换 切换时间 默认为0不转动
      autoplay:{
        type:String,
        default:0
      },
      // 是否轮循滚动
      loop:{
        type:Boolean,
        default:false
      },
      // 切换类别 切换类型(cube: 3D切换 coverflow: 3D flip:翻转 fade:消失,空就是左右切换)
      effect:{
        type:String,
        default:''
      },
      // 是否有分页导航
      pagination:{
        type:Boolean,
        default:false
      },
      // 是否有上下切页
      navigation:{
        type:Boolean,
        default:false
      }
    },
    methods:{
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: this.autoplay != 0?{elay: this.autoplay}:false,
        loop : this.loop,// 是否循环,
        effect : this.effect, // 切换类型(cube: 3D切换 coverflow: 3D flip:翻转 fade:消失,more就是左右切换)
        pagination: { //分页导航
          el: '.swiper-pagination',
        },
        // 上一页下一页按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      // 这个用来演示 真正使用时可忽略
      this.$bus.$on('toopenSwitch', (params) => {  //获取传递的参数并进行操作
          let autoplay = (params.controlState.autoplay?{elay: 1000}:false)
          console.log(autoplay)
          if(params.controlState.pagination){
            this.paginationState =true
          }else{
            this.paginationState =false
          }
          if(params.controlState.navigation){
            this.navigationState =true
          }else{
            this.navigationState =false
          }
          var mySwiper = ''
          var mySwiper = new Swiper('.swiper-container', {
            autoplay: autoplay,
            loop : params.controlState.loop,
            pagination:params.controlState.pagination ? {el: '.swiper-pagination',}:false,
            navigation:params.controlState.navigation ? {nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',}:false
          })
      })
    }
  }
</script>

<style lang="less">
.swiper-pagination-bullet-active{
  background: #ffffff;
}
</style>

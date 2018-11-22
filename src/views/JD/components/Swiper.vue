<template>
  <div class="swipe">
    <!-- 打开自动轮播 -->
    <div class="flex">
      <p>自动切换</p>
      <my-switch :value="controlState.autoplay" @changeSwitch="changeSwitch"></my-switch>
    </div>
    <!-- 循环切换 -->
    <div class="flex">
      <p>循环切换</p>
      <my-switch :value="controlState.loop" @changeSwitch="changeSwitch1"></my-switch>
    </div>
    <!-- 要分页 -->
    <div class="flex">
      <p>分页</p>
      <my-switch :value="controlState.pagination" @changeSwitch="changeSwitch2"></my-switch>
    </div>
    <!-- 上一页下一页 -->
    <div class="flex">
      <p>上一页下一页</p>
      <my-switch :value="controlState.navigation" @changeSwitch="changeSwitch3"></my-switch>
    </div>
    <my-swiper :autoplay="autoplay" :effect="effect" :pagination="pagination" :navigation="navigation" :loop="loop"></my-swiper>
  </div>
</template>

<script>

export default {
  name: 'Swipe',
  data(){
    return{
      // 选择autoplay
      controlState:{
        autoplay:false,
        loop:false,
        effect:'',
        pagination:false,
        navigation:false,
      },


      // autoplay 设置为0 默认不自动转
      autoplay:'0',
      effect:'',
      pagination:true,
      navigation:false,
      loop:false
    }
  },
  components: {
  },
  methods:{
    // 这些方法是用来测试 复用的时候不用写
    changeSwitch:function(value){
      console.log(value)
      this.controlState.autoplay = value
      this.$bus.$emit('toopenSwitch', {'controlState':this.controlState});
    },
    changeSwitch1:function(value){
      this.controlState.loop = value
      this.$bus.$emit('toopenSwitch', {'controlState':this.controlState});
    },
    changeSwitch2:function(value){
      this.controlState.pagination = value
      this.$bus.$emit('toopenSwitch', {'controlState':this.controlState});
    },
    changeSwitch3:function(value){
      console.log(value)
      this.controlState.navigation = value
      this.$bus.$emit('toopenSwitch', {'controlState':this.controlState});
    }
  },
  // 对DOM的变化做出反应
  updated(){
  },
  mounted(){

  },
}
</script>

<style lang="less" scoped>
.flex{
  display: flex;
  height: 1rem;
  width:100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  background: #ffffff;
  margin-bottom: 2px;
}
</style>



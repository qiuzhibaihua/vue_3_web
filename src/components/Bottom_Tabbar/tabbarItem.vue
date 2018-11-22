<template>
  <div class="tabbarItem" :class="userClass" @click="selectItem">
      <p class="img">
        <slot name="icon"></slot>
      </p>
      <p class="text" :class="[textactive?'active':'']">{{id}}</p>
  </div>
</template>

<script>
export default {
    name:'tabbarItem',
    data() {
      return {
      }
    },
    props:{
      userClass:{
        type:String
      },
      id:{
        type:String,
        default:'测试'
      },
      textactive:{
        type:Boolean,
        default:false
      }
    },
    mounted() {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      selectItem:function(){
        this.$bus.$emit('itemActive', this.id)
      }
    },

}
</script>

<style lang="less" scoped>
.tabbarItem{
  flex:1;
  padding: 0.1rem 0;
  .img{
    width: 0.4rem;
    height:0.4rem;
    margin:auto;
    margin-bottom: 0.1rem;
    img{
      width: 0.4rem;
      height:0.4rem;
    }
  }
  .text{
    font-size:0.24rem;
    &.active{
     color:#ff7800 
    }
  }
}
</style>


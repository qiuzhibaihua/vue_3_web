<template>
  <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <div class="Totop_box" v-if="showState" @click="toTop">
      <slot name="content" v-if="slotContent"></slot>
      <i class="fa fa-angle-double-up icon" v-else></i>
    </div>
  </transition>
</template>

<script>
  export default {
    data(){
      return{
        showState:false,
        // slot_content:false
      }
    },
    props: {
    },
    methods:{
      toTop:function(){
        this.$util.setScrollTop(0)
      }
    },
    computed:{
      slotContent:function(){
        return this.$slots.content ? true : false
      }
    },
    mounted(){
      window.addEventListener('scroll',()=>{
        let h = document.documentElement.clientHeight || document.body.clientHeight
        if(this.$util.getScrollTop() >= h){
          this.showState = true
        }else{
          this.showState = false
        }
      })
    }
  }
</script>

<style lang="less" scoped>
.Totop_box{
  position: fixed;
  bottom:1rem;
  right:10px;
  width:1rem;
  height:1rem;
  border-radius: 50%;
  background: #ffffff;
  .icon{
    line-height: 1rem;
    font-size: 0.5rem;
    color: #bbb6b6
  }
}
</style>

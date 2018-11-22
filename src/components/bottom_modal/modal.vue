<template>
  <transition>
    <div class="modal" :class="{active:modalactive}" @click="close(maskClose)" v-if="show">
      <div :class="[{active:active},curretntLocation]" @click.stop>
        <slot name="content"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
// import {getScrollTop,setScrollTop} from '@s/util/util'
export default {
  data() {
    return {
      currentScrolltop:0,
      active:false,
      show:false,
      modalactive:false
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    location:{
      type: String,
      default: 'bottom'
    },
    // 点击背景关闭弹窗
    maskClose: {
      type: Boolean,
      default: true
    }
  },
  computed:{
    curretntLocation: function () {
      return 'content'+this.location
    }
  },
  mounted() {
    console.log(this.location)
  },
  watch: {
    value: function(val) {
      if (val) {
        this.currentScrolltop = this.$util.getScrollTop()
        document.body.style.position = "fixed"
        document.body.style.width = "100%"
        document.body.style.top = "-"+this.currentScrolltop+'px'
        this.show = true
        setTimeout(()=>{
          this.active = true
          this.modalactive = true
        },100)
        // setScrollTop(currentScrolltop)
      }else{
        document.body.style.position = "relative"
          document.body.style.top = 0
          this.$util.setScrollTop(this.currentScrolltop)
          this.modalactive = false
          this.active = false
          setTimeout(()=>{
            this.show = false
          },300)
      }
    }
  },
  methods: {
    close: function(val) {
      if (val) {
      this.$emit("input", false);
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  top: 0;
  left: 0;
  transition: all .3s ease-in-out;
  &.active {
    background: rgba(0, 0, 0, .3);
  }
  .contentbottom {
    width: 100%;
    position: absolute;
    background: #ffffff;
    bottom:0;
    max-height: 7rem;
    overflow-y:scroll; 
    transform: translate3d(0,7rem,0);
    transition: all .3s ease-in-out;
    &.active{
      transform: translate3d(0,0,0);
    }
  }
  .contenttop {
    width: 100%;
    position: absolute;
    background: #ffffff;
    top:0;
    max-height: 7rem;
    overflow-y:scroll; 
    transform: translate3d(0,-7rem,0);
    transition: all .3s ease-in-out;
    &.active{
      transform: translate3d(0,0,0);
    }
  }
  .contentleft {
    height: 100%;
    position: absolute;
    background: #ffffff;
    left:0;
    max-width: 6rem;
    overflow-y:scroll; 
    transform: translate3d(-6rem,0,0);
    transition: all .3s ease-out;
    &.active{
      transform: translate3d(0,0,0);
    }
  }
  .contentright {
    height: 100%;
    position: absolute;
    background: #ffffff;
    right:0;
    max-width: 6rem;
    overflow-y:scroll; 
    transform: translate3d(6rem,0,0);
    transition: all .3s ease-out;
    &.active{
      transform: translate3d(0,0,0);
    }
  }
}
</style>


<template>
  <transition :enter-active-class=enterClass :leave-active-class=leaveClass>
    <div class="modal" :class="{'modal_center':center}" @click="close(maskClose)" v-if="value">
      <div class="content" @click.stop>
        <slot name="content"></slot>
        <div class="close_btn fa fa-remove" @click="close(true)" v-if="closeBtn"></div>
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
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    // 进入动画
    enterAtive: {
      type: String,
      default: "pulse"
    },
    // 离开动画
    leaveActive: {
      type: String,
      default: "fadeOut"
    },
    // 是否居中 默认居中
    center: {
      type: Boolean,
      default: true
    },
    // 点击背景关闭弹窗
    maskClose: {
      type: Boolean,
      default: false
    },
    // 是否显示关闭按钮
    closeBtn:{
      type: Boolean,
      default: false
    }
  },
  mounted() {},
  computed: {
    enterClass: function() {
      return "animated " + this.enterAtive;
    },
    leaveClass: function() {
      return "animated " + this.leaveActive;
    }
  },
  watch: {
    value: function(val) {
      if (val) {
        this.currentScrolltop = this.$util.getScrollTop()
        document.body.style.position = "fixed"
        document.body.style.width = "100%"
        document.body.style.top = "-"+this.currentScrolltop+'px'
        // setScrollTop(currentScrolltop)
      }else{
        document.body.style.position = "relative"
         document.body.style.top = 0
         this.$util.setScrollTop(this.currentScrolltop)
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
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  &.modal_center {
    display: flex;
    align-items: center;
    //  background: #ffffff;
  }
  .content {
    //  background: #ffffff;
    width: 100%;
    .close_btn {
      color: #ffffff;
      font-size: 0.5rem;
      margin-top: 0.2rem;
    }
  }
}
</style>


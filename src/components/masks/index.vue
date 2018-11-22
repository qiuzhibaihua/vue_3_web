<template>
  <transition name="Mask-scale" mode="out-in" >
    <section class="Mask" @click="closeOnClickMasks" :class="classes" :style="styles" v-if="value">
      <div class="MaskContent"  @click.stop="clickContent"><slot></slot></div>
    </section>
  </transition>
</template>

<script>
  import {getScrollEventTarget, getScrollTop} from './dom.js'
  export default {
    props: {
      value: '',
      position: {
        default: 'center'
      },
      background: '',
      closeByMasks: {
        default: true
      }
    },
    methods: {
      closeOnClickMasks() {
        this.onClickMasks()
        if(this.closeByMasks) {
          this.close()
        }
      },
      clickContent() {
        this.onClickMasks()
      },
      onClickMasks() {
        this.$emit('click')
      },
      close() {
        this.$emit('input', false)
      },
      appendToBody() {
        document.body.appendChild(this.$el)
      },
      removeByBody() {
        this.$el.parentNode.removeChild(this.$el)
      }
    },
    watch: {
      value(n) {
        if(n) {
          let view = getScrollEventTarget(this.$el)
          let scrollTop = getScrollTop(view)
          document.body.style.cssText = `position: fixed; width: 100%; top: -${scrollTop}px; `
        } else {
          document.body.removeAttribute('style')
        }
        // !n ? document.body.removeAttribute('style') : document.body.style.overflow = 'hidden'
      }
    },
    computed: {
      styles() {
        return {
          background: this.background ? this.background : `rgba(0,0,0,.5)`
        }
      },
      classes() {
        return {
          center: this.position == 'center',
          bottom: this.position == 'end',
        }
      }
    },
    mounted() {
      this.appendToBody()
    },
    beforeDestory() {
      alert('销毁')
      this.removeByBody()
    }
  }
</script>

<style lang="less" scoped>
  .Mask-scale-enter-active, .Mask-scale-leave-active{
    transition: all .25s;
  }
  .Mask-scale-enter, .Mask-scale-leave-to{
    transform: scale(1.2);
    opacity: 0;
  }
  .Mask {
    position: fixed;
    z-index: 900;
    top: 0;
    bottom: 0;
    width: 100%;
    .MaskContent { width: 100%; }

    &.center {
      display: flex;
      align-items: center;
    }
    &.bottom {
      display: flex;
      align-items: flex-end;
    }
  }
</style>
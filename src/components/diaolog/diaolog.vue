<template>
  <div v-show="show" class="diaologMask" :class="{noMsk: !backdrop}" @click="close">
    <transition name="diaologFade" mode="out-in">
      <div :class="'diaologContent '+ customClass" v-if="content" @click.stop="">
        <div class="close" @click="close" v-if="showClose">&times;</div>
        <h3 class="header">{{ title || '提示' }}</h3>
        <div class="content">
          <p v-html="message"></p>
          <template v-if="showInput">
            <input v-model="inputVal" :class="(inputError && inputError != '')?'inputError':''" :type="inputType" :placeholder="inputPlaceholder" v-if="inputType != 'textarea'" />
            <textarea v-model="inputVal" :class="(inputError && inputError != '')?'inputError':''" :placeholder="inputPlaceholder" v-else></textarea>
            <p class="diaologError" v-if="inputError && inputError != ''" v-html="inputError"></p>
          </template>
        </div>
        <div class="action">
          <button type="button" v-if="showCancel" @click="cancel" class="btn-cancel" v-html="cancelText || '取消'"></button>
          <button type="button" @click="ok" class="btn-ok" v-html="okText || '确定'"></button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="stylus" scoped>
.diaologFade-enter-active,
.diaologFade-leave-active
  transition all .4s $easeOutSine
.diaologFade-enter
.diaologFade-leave-to
  opacity 0
  transform scale(1.2)

.diaologMask
  position fixed
  left 0
  bottom 0
  right 0
  top 0
  width 100%
  height 100%
  background rgba(0,0,0,.6)
  display flex
  align-items center
  justify-content center
  z-index 20
  &.noMsk
    background transparent
  .diaologContent
    width 600pxr
    background #fff
    border-radius 10pxr
    border 1px solid #e0e0e0
    box-shadow 0 0 2px rgba(0, 0, 0, 0.4)
    position relative
    .close
      position absolute
      width 60pxr
      height 60pxr
      right - (@width / 2)
      top - (@height / 2)
      background rgba(0,0,0,.6)
      color #fff
      font-size @height * 0.9
      line-height @height
      border-radius 50%
      text-align center
      vertical-align middle
    .header
      display block
      margin 0
      font-size 32pxr
      color #333
      font-weight 500
      text-align center
      padding 15pxr 30pxr 0
      line-height 60pxr
    .content
      padding 30pxr
      color #666
      font-weight 400
      line-height 50pxr
      text-align center
      input
      textarea
        display block
        margin 10pxr 0
        width 100%
        padding 15pxr
        background rgba(0, 0, 0, 0.05)
        border: 1px solid #e0e0e0
        line-height 50pxr
        color #333
        border-radius 15pxr
        &.inputError
          border-color red
      .diaologError
        text-align left
        font-size 26pxr
        color red
    .action
      display flex
      border-radius 0 0 15pxr 15pxr
      border-top 1px solid #e0e0e0
      overflow hidden
      button
        display block
        flex 1
        background transparent
        border-left none
        border-bottom none
        border-top none
        border-right 1px solid #e0e0e0
        padding 0
        margin 0
        text-align center
        vertical-align middle
        font-size 28pxr
        line-height 82pxr
        color #777
      .btn-ok
        color #333
        font-weight 500
        border-right-color transparent
</style>
<script type="text/babel">
  export default {
    props: {
      title: String,
      message: String,
      okText: String,
      cancelText: String,
      customClass: String,
      showClose: Boolean,
      maskCancel: Boolean,
      showCancel: Boolean,
      backdrop: Boolean,
      showInput: Boolean,
      inputPlaceholder: String,
      inputType: String,
      inputVal: String,
      inputPattern: RegExp,
      inputErrorMsg: String,
      resolve: Function,
      reject: Function
    },
    data() {
      return {
        show: false,
        content: false,
        inputError: '',
      }
    },
    watch: {
      show(v) {
        window.document.body.style.overflow = v ? 'hidden' : 'auto'
        window.document.body.classList.toggle('diaologOpen')
        v ? window.document.body.appendChild(this.$el) : this.$el.parentNode.removeChild(this.$el)
      }
    },
    mounted() {
      this.open();
    },
    methods: {
      open() {
        let that = this
        that.show = true
        that.content = true
      },
      close() {
        let that = this
        that.content = false
        setTimeout(function(){
          that.show = false
          if(that.maskCancel){
            that.reject()
          }
        }, 400)
      },
      cancel() {
        let that = this
        that.content = false
        setTimeout(function(){
          that.show = false
          that.reject()
        }, 400)
      },
      ok(){
        let that = this
        if(that.showInput){
         let setInputError = function(err){
            that.inputError = err
            setTimeout(function(){
              that.inputError = ''
            }, 1500)
          }
          if(!that.inputVal || that.inputVal == '' || that.inputVal.toString().replace(/(^\s*)|(\s*$)/g, '') == ''){
            setInputError(that.inputPlaceholder || '请输入，不能为空')
          } else if(that.inputPattern && !that.inputPattern.test(that.inputVal)){
            setInputError(that.inputErrorMsg || '输入内容不正确')
          } else {
            that.content = false
            setTimeout(function(){
              that.show = false
              that.resolve(that.inputVal)
            }, 400)
          }
        } else {
          that.content = false;
          setTimeout(function(){
            that.show = false;
            that.resolve()
          }, 400)
        }
      }
    }
  }
</script>

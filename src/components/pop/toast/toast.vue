<template>
  <Masks v-model="flag" background="rgba(0,0,0,0)" :closeByMasks="closeByCover">
    <div class="popToastCenter">
      <span class="popToast" @click.stop v-html="content" :class="classes"></span>
    </div>
  </Masks>
</template>

<script>
import Masks from '@c/masks'
export default {
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        content: '',
        flag: false,
        closeByCover: false
      }
    },
    mounted() {
      document.body.appendChild(this.$el)
    },
    computed: {
      classes() {
        return [this.type]
      }
    },
    watch: {
      flag(n) {
        let re = n ? 'hidden' : 'auto'
        document.body.style.overflow = re
      }
    },
    methods: {
      open() {
        this.flag = true
      },
      close() {
        this.flag = false
        setTimeout(() => this.$destroy())
      },
      closeAtCover() {
        if(!this.closeByCover) return
        this.flag = false
      },
      onClickCloseCover() {
        this.closeByCover = true
      }
    },
    components: {
      Masks
    }
}
</script>

<style lang="less" scoped>
  .popToastCenter {text-align: center;}
  .popToast {
    display: inline-block;
    max-height: 80%;
    max-width: 80%;
    background: black;
    overflow: auto;
    padding: 1em 2em;
    border-radius: .4em;
    font-size: inherit;
    color: white;
    text-align: center;
    &.success {
      background: green;
    }

    &.error {
      background: red;
    }

    &.warning {
      background: #FCF1D2;
      color: #A3794D;
      border: .05em solid #F0E0C9;
    }

  }

</style>


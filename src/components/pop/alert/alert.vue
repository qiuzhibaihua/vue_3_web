<template>
    <Masks v-model="flag" :closeByMasks="false">
        <ul class="popAlert" @click.stop>
            <li class="title" v-if="title">{{title}}</li>
            <li class="html" v-html="content" :class="{notitle: !title}"></li>
            <!-- <li class="btnGroup" > -->
            <li class="btnGroup" :class="{reverse: reverseButton}">
            <!-- <span :class="{yes: !idx }" v-for="(b, idx) in option.btn" @click="btnTap(b, idx)">{{b}}</span> -->
                <span class="yes" @click="yes">确定</span>
                <span class="no" @click="no">取消</span>
            </li>
        </ul>
    </Masks>
</template>

<script>
import Masks from '@c/masks'
export default {
    props: {
      type: {
        type: String,
        default: '1234'
      }
    },
    data() {
      return {
        title: '',
        content: '',
        reverseButton: false,
        flag: false,
        closeByCover: false
      }
    },
    computed: {
      classes() {
        return [this.type]
      }
    },
    methods: {
      open() {
        this.flag = true
        return new Promise((resolve, reject) => {
          this.resolve = resolve
          this.reject = reject
        })
      },
      close() {
        this.flag = false
      },
      closeAtCover() {
        if(!this.closeByCover) return
        this.flag = false
      },
      onClickCloseCover() {
        this.closeByCover = true
      },
      yes() {
        this.resolve()
        this.close()
      },
      no() {
        this.reject()
        this.close()
      }
    },
    components: {
      Masks
    }
}
</script>

<style lang="less" scoped>
  .popAlert {
    margin: 0 auto;
    max-height: 80%;
    max-width: 80%;
    background: white;
    overflow: auto;
    border-radius: .4em;
    font-size: inherit;
    text-align: center;
    .title {
      color: gray;
      padding: 1em 0 0 0;
      font-size: 1.1em;
    }

    .html {
      text-align: center;
      font-size: 1.2em;
      padding: 1em;
      &.notitle {
        padding: 2em 1em;
      }

    }

    .btnGroup  {
      border-top: 1px solid #ddd;
      display: flex;
      align-items: center;
      &.reverse {
        flex-direction: row-reverse;
        span {
          border-left: 1px solid #ddd;
          border-right: none;
        }

      }

      span {
        flex: 1;
        line-height: 3.5;
        border-right: 1px solid #ddd;
        &:last-child { border: none;}
        &.yes {color: #E22018;}
      }
    }
  }
</style>


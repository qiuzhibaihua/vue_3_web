<template>
  <div v-if="flag" class="mask">
      <div class="popLoadingContent" v-if="type == 0">
        <Spin :reverse="true" />
        <p v-if="content">{{content}}</p>
      </div>
      <template v-else-if="type == 1">
        <div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </template>
  </div>
</template>

<script>
import Spin from './spin'
export default {
    data() {
      return {
        flag: false,
        closeByCover: false,
        content: '',
        type:0
      }
    },
    methods: {
      open(content = '正在加载中...',type) {
        this.flag = true
        this.content = content
        this.type = type
      },
      close() {
        this.flag = false
      },
    },
    components: {
      Spin
    },
    mounted(){
      document.body.appendChild(this.$el)
    },
    beforeDestory(){
      // this.$el.parentNode.removeChild(this.$el)
    }
}
</script>

<style lang="less" scoped>
.mask{
  position: fixed;
  width: 100%;
  height:100%;
  background: #ffffff;
  top:0;
  left:0;
  z-index: 999;
  .popLoadingContent {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin:auto;
    height:2rem;
    font-size: inherit;
    color: silver;
    text-align: center;
    font-size: 0.24rem;
  }
  .spinner {
    height: 1rem;
    text-align: center;
    font-size: 10px;
    position: absolute;
    top:50%;
    transform: translate(0,-50%);
    width: 100%;
  }
  
  .spinner > div {
    background-color: #ff3333;
    height: 100%;
    width: 6px;
    margin: 0 0.03rem;
    display: inline-block;
    
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }
  
  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  
  .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  
  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  
  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  
  @-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
    20% { -webkit-transform: scaleY(1.0) }
  }
  
  @keyframes stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
}
  

</style>


<template>
  <div class="loadmoreTip">
    <div v-if="!loaded">
      <p>加载中</p>
      <span v-if="type === '0'" class="loading-spin" :class="{reverse:reverse}"></span>
      <div class="spinner" v-else-if="type === '1'">
        <div class="spinner-container container1">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
        <div class="spinner-container container2">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
        <div class="spinner-container container3">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
      </div>
    </div>
    <p v-else>-没有数据了哦-</p>
  </div>
</template>

<script>
  export default {
    props: {
      loaded:{
        type:Boolean,
        default:false
      },
      reverse: {
        type: Boolean,
        default: false
      },
      // 加载类型
      type:{
        type:String,
        default:'0'
      }
    }
  }
</script>

<style lang="less" scoped>
  @keyframes loadingSpin {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  .loadmoreTip{
    width:100%;
    >div{
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 0.26rem;
      color:#bfbfbf;
      line-height: 0.6rem;
    }
    .loading-spin {
      margin-left: 0.1rem;
      display: inline-block;
      width: 0.6rem;
      height: 0.6rem;
      border: 0.03rem solid rgba(0,0,0,.3);
      border-top-color:  #ff3333;
      border-radius: 50%;
      animation: loadingSpin .5s linear infinite;
      // &.reverse {
      //   border: 0.03rem solid rgba(255,255,255,.3);
      //   border-top-color: #ff3333;
      // }
    }
  }
  .spinner {
    width: 0.4rem;
    height: 0.4rem;
    position: relative;
    margin-left: 0.2rem;
  }
  
  .container1 > div, .container2 > div, .container3 > div {
    width: 0.12rem;
    height: 0.12rem;
    background-color: #bfbfbf;
  
    border-radius: 100%;
    position: absolute;
    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
    animation: bouncedelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  
  .spinner .spinner-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .container2 {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }
  
  .container3 {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }
  
  .circle1 { top: 0; left: 0; }
  .circle2 { top: 0; right: 0; }
  .circle3 { right: 0; bottom: 0; }
  .circle4 { left: 0; bottom: 0; }
  
  .container2 .circle1 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  
  .container3 .circle1 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  
  .container1 .circle2 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  
  .container2 .circle2 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  
  .container3 .circle2 {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }
  
  .container1 .circle3 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
  
  .container2 .circle3 {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }
  
  .container3 .circle3 {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
  
  .container1 .circle4 {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
  
  .container2 .circle4 {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }
  
  .container3 .circle4 {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }
  
  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
  }
  
  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 40% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
</style>

<template>
  <div>
    <div class="weui-div" @click.stop="toggle">
    <span class="weui-switch" :class="{'weui-switch-on' : me_checked}" :style="[me_checked?checkColoeClass:'']" :value="value" >
    </span>
    <div v-if='!me_checked' class="weui-div-2" v-html="closetext"></div>
    <div v-if='me_checked' class="weui-div-1" v-html="opentext"></div>
  </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        me_checked: this.value,
        checkColoeClass:{
          'border-color':this.checkColor,
          'background-color':this.checkColor
        }
      }
    },
    props: {
      value: {
        type: Boolean,
        default: true
      },
      handle: {
        type: Boolean,
        default: true
      },
      closetext:{
        type: String,
        default: '关闭'
      },
      opentext:{
        type: String,
        default: '开启'
      },
      checkColor:{
        type: String,
        default: '#ff3333'
      }
    },
    watch: {
      value(){
        this.me_checked = this.value;
      }
    },
    methods:{
      toggle() {
        // 是否可点击
        if(this.handle === true){
          this.me_checked = !this.me_checked;
          // this.value = !this.value;
          this.$emit('input', !this.value)
        }

      }
    },
    mounted(){
      this.$nextTick(()=>{
        var style=document.createElement('style');
        style.innerHTML=`.weui-switch-on::before{border-color:${this.checkColor};background-color:${this.checkColor}}`;//添加样式内容的话也可以用上面提到过的`insertRule`,相对例子里的硬编码会更优雅点。
        document.head.appendChild(style);
      })
    }
  }
</script>

<style lang="less">
.weui-div{
    position:relative;
    font-weight: bold;
    cursor:pointer;
    width: 1.64rem;
    height: 0.64rem;
  }
  .weui-div-1{
    position:absolute;
    left:10px;
    top:0;
    width: 0.8rem;
    line-height:0.64rem;
    font-size:0.24rem;
    color:#ffffff;
  }
  .weui-div-2{
    position:absolute;
    right:11px;
    top:0;
    width: 0.8rem;
    line-height:0.64rem;
    font-size:0.24rem;
    color:#999999;
  }
  .weui-switch {
    display: block;
    position: relative;
    width: 1.64rem;
    height: 0.64rem;
    border: 1px solid #DFDFDF;
    outline: 0;
    border-radius: 0.32rem;
    box-sizing: border-box;
    background-color: #DFDFDF;
    transition: background-color 0.1s, border 0.1s;
    cursor: pointer;
  }
  .weui-switch:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 1.64rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    background-color: #E6E6E6;
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  }
  .weui-switch:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }
  .weui-switch-on {
    border-color: #ff3333;
    background-color: #ff3333;
  }
  .weui-switch-on::before {
    border-color: #ff3333;
    background-color: #ff3333;
  }
  .weui-switch-on::after {
    transform: translateX(1rem);
  }
</style>

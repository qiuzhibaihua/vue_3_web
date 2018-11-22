<template>
   <div>
     <modal v-model="show" :center="iscenter" :maskClose='maskClose' :closeBtn='closeBtn'>
       <div slot="content" class="content">
         demo
       </div>
     </modal>
     <button class="btn" @click="open">开启</button>
     <ul>
       <li>居中显示<my-switch value=false v-model="check1" checkColor="red"></my-switch></li>
       <li>点击空白处关闭弹窗<my-switch value=false v-model="check2" checkColor="red"></my-switch></li>
       <li>显示关闭按钮<my-switch value=false v-model="check3" checkColor="red"></my-switch></li>
     </ul>
     <p class="text">注:当弹窗显示时 底部是不允许滚动的</p>
   </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      show:false,
      iscenter:true,
      maskClose:false,
      closeBtn:false,
      check1:false,
      check2:false,
      check3:false
    }
  },
  components: {
  },
  methods:{
    open:function(){
      this.show = true
      this.iscenter = this.check1
      this.maskClose = this.check2
      this.closeBtn = this.check3
    }
  },
  mounted(){
  },
}
</script>

<style lang="less" scoped>
 .content{
   background: #ffffff;
   width: 80%;
   height:3rem;
   margin: auto;
 }
 ul{
   li{
     height:1rem;
     line-height:1rem;
     text-align: center;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding-left: 0.2rem;
     background: #FFFFFF;
     box-shadow: 1px 1px 1px 1px #b5b1b1;
   }
 }
 .btn{
   position: fixed;
   bottom: 2rem;
   right:0.2rem;
   width:0.8rem;
   height:0.8rem;
   border-radius: 50%;
   -webkit-tap-highlight-color: rgba(0,0,0,0);
   -webkit-tap-highlight-color: transparent;
  // 去除button点击的边框
   outline:none;
 }
 p.text{
   text-align: left;
   font-size:0.2rem;
   padding: 0.5rem 0.2rem;
 }
</style>



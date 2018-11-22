<template>
  <div class="BottomModal">
    <ul class="content">
       <li>顶端<my-switch  v-model="check1" checkColor="red"></my-switch></li>
       <li>左端<my-switch  v-model="check2" checkColor="red"></my-switch></li>
       <li>底端<my-switch  v-model="check3" checkColor="red"></my-switch></li>
       <li>右端<my-switch  v-model="check4" checkColor="red"></my-switch></li>
     </ul>
    <button class="btn" @click="open">测试</button>
    <bot-modal v-model="show" :location="locationstate">
      <div slot="content">
        <div style="height:8rem;width:4rem">测试文字</div>
      </div>
    </bot-modal>
  </div>
</template>

<script>

export default {
  name: 'BottomModal',
  data(){
    return{
      show:false,
      // 是否从头部
      locationstate:'bottom',
      check1:false,
      check2:false,
      check3:false,
      check4:false,
    }
  },
  watch:{
    check1:function(value){
      if(value){
        this.check2 = false
        this.check3 = false
        this.check4 = false
        this.locationstate = 'top'
        this.open()
      }
    },
    check2:function(value){
      if(value){
        this.check1 = false
        this.check3 = false
        this.check4 = false
        this.locationstate = 'left'
        this.open()
      }
    },
    check3:function(value){
      if(value){
        this.check1 = false
        this.check2 = false
        this.check4 = false
        this.locationstate = 'bottom'
        this.open()
      }
    },
    check4:function(value){
      if(value){
        this.check1 = false
        this.check2 = false
        this.check3 = false
        this.locationstate = 'right'
        this.open()
      }
    }
    
  },
  components: {
  },
  methods:{
    open:function(){
      this.show = true
    }
  },
  // 对DOM的变化做出反应
  updated(){
  },
  mounted(){

  },
}
</script>

<style lang="less" scoped>
.btn{
  position: fixed;
  bottom:2rem;
  right:20px;
  width: 1rem;
  height:1rem;
  border-radius: 50%;
  background: #eaeaea;
}
.btn1{
  position: fixed;
  bottom:4rem;
  right:20px;
  width: 1rem;
  height:1rem;
  border-radius: 50%;
  background: #eaeaea;
}
.content {
  li{
     height:1rem;
     line-height:1rem;
     text-align: center;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding:0 0.2rem;
     background: #FFFFFF;
     box-shadow: 1px 1px 1px 1px #b5b1b1;
  }
}
</style>



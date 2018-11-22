<template>
  <div class="loading">
    <li @click="loading1">
      <p>loading加载1</p>
    </li>
    <li @click="loading2">
      <p>loading加载2</p>
    </li>
  </div>
</template>

<script>

export default {
  name: 'Loading',
  data(){
    return{
    }
  },
  components: {
  },
  methods:{
    loading1:function(){
      this.$Loading.open('加载中','0')
    },
    loading2:function(){
      this.$Loading.open('加载中','1')
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
.loading{
  width: 100%;
  display: flex;
  li{
    width:50%;
    height:0;
    padding-bottom: 50%;
    background: #ffffff;
    list-style: none;
    position: relative;
    box-shadow:  0 3px 5px 0px #eaeaea;
    p{
      position: absolute;
      top:50%;
      transform: translate(0,-50%);
      text-align: center;
      width: 100%;
    }
  }
}
</style>



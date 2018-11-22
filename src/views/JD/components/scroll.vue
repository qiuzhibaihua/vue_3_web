<template>
  <scroll class="wrapper" :data="data" :pullup="pullup" @scrollToEnd='loadData' v-model="loading">
    <ul class="content">
      <li v-for="(item,index) in data" :key="index+'items'">{{item}}</li>
      <!-- 可自定义 type加载类型 -->
      <Spin :type='Spin_type' :loaded="loaded"></Spin>
    </ul>
  </scroll>
</template>

<script>
import Spin from '@c/spin/spin'
export default {
  name: "home",
  data() {
    return {
      // 初始数据
      data:[],
      newdata:[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8],
      // 是否下拉
      pullup:true,
      // 是否可以下拉加载
      loading:true,
      // 是否加载完成
      loaded:false,
      // 测试数据当前页
      testPage:0,
      // 加载动画类型(字符串)
      Spin_type:'1'
    };
  },
  components: {
    Spin
  },
  methods: {
    // 滚动加载函数
    loadData() {
      this.$nextTick(() => {
        this.loading = false
        setTimeout(()=>{
          this.data = this.data.concat(this.newdata)
          if(this.testPage >= 5){
            this.loaded = true
          }else{
            this.loading =true
            this.loaded = false
          }
        },200)
      })
    }
  },
  created(){
    this.loadData()
  },
  mounted() {
    this.$nextTick(() => {
      document.querySelector('.content').style.minHeight = window.screen.height + 'px'
    });
  }
};
</script>
<style lang="less" scoped>
.content {
  li{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 1px 1px 1px #eaeaea;
  }
}
</style>



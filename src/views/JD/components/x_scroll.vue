<template>
  <div class="x_scroll">
     <x-scroll :list="list"></x-scroll>
  </div>
</template>

<script>

export default {
  name: 'x_scroll',
  data(){
    return{
      list:['测试栏目1','测试栏目2','测试栏目3','测试栏目4','测试栏目5','测试栏目6','测试栏目7','测试栏目8','测试栏目9','测试栏目10','测试栏目11']
    }
  },
  components: {
  },
  methods:{
     
  },
  // 对DOM的变化做出反应
  updated(){
  },
  mounted(){

  },
}
</script>

<style lang="less" scoped>

</style>



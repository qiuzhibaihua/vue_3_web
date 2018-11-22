<template>
  <div class="Totop">
    请一直往下滚动
    <back-top>
      <!-- 可自定义添加content 如果没有content 就用默认内容 -->
      <!-- <div slot="content">121</div> -->
    </back-top>
  </div>
</template>

<script>

export default {
  name: 'Totop',
  data(){
    return{
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
.Totop{
  height:1800px;
}
</style>



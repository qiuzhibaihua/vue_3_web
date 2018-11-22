<template>
  <div class="waterfall">
    <my-waterfall :items="items"></my-waterfall>
  </div>
</template>

<script>

export default {
  name: 'waterfall',
  data(){
    return{
      items:[{"width":200,"height":300,"id":1}]
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



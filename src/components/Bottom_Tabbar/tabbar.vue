<template>
  <div class="Bottom_Tabbar" :class="userClass">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'bottomTabbar',
    data() {
      return {
      }
    },
    props:{
      userClass:{
        type:String
      },
      value:{
        type:String,
        default:''
      }
    },
    mounted() {
      let _this = this
      this.$bus.$on('itemActive', (params) => {
        window.console.log(params)
        _this.$emit('input',params)
      })
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    beforeDestroy(){
      this.$bus.$off('itemActive')
    }

}
</script>

<style lang="less" scoped>
.Bottom_Tabbar{
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom:0;
  left:0;
  background: #ffffff;
  box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
  li{
    flex:1;
  }
}
</style>


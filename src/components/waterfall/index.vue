<template>
  <div>
    waterfall
    <Waterfall :line-gap="200" :watch="items">
      <!-- each component is wrapped by a waterfall slot -->
      <Waterfall-slot
        v-for="(item, index) in items" width="50" height="2" :order="index" :key="item.id" class="line"
      >
      <p>12345</p>
        <!--
          your component
        -->
      </Waterfall-slot>
    </Waterfall>
  </div>
</template>

<script>
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
  export default {
    data(){
      return{
        
      }
    },
    components:{
      Waterfall,
      WaterfallSlot
    },
    props: {
      items:{
        type:Array,
        default:[]
      }
    },
    methods:{
    },
    computed:{
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
.line{
  width: 50%!important;
}
</style>

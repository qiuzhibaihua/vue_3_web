<template>
  <div class="home">
    <modal></modal>
    <img v-for="item in 10" :key="item" v-lazy="'//ojn98tluc.qnssl.com/pic0gow_5b14a32c75960?imageMogr2/thumbnail/320x/strip/quality/75/format/webp'" alt="Vue logo">
    <div @click="test">{{title}}</div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
      title:'home'
    }
  },
  components: {
    
  },
  methods:{
    test:()=>{
      window.location.href='https://www.baidu.com'
    }
  },
  mounted(){
    let currentcahche = this.$cache.get('HBQ_cahe')
    if(currentcahche){
      this.$Loading.open()
      this.$bus.$emit('todoSth', {'content':'hello'});
      setTimeout(()=>{
        this.$Loading.close()
      },2000)
      Object.assign(this.$data, currentcahche)
    }else{
      this.$cache.put('HBQ_cahe',this.$data)
    }
  }
}
</script>


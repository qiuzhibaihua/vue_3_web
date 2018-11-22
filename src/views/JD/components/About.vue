<template>
  <div class="about" :class="ul_state?'fixed':''">
    <ul>
      <li>
        <div class="content" :class="ul_state?'fixed':''" @click="fix">
          <img src="https://p3.suibianyuming.com.cn/pic0gow_5ae3d560c5022?imageMogr2/thumbnail/320x/strip/quality/75/format/webp" alt="">
          <p>第一个app</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'about',
  data(){
    return{
      ul_state:false
    }
  },
  components: {
  },
  methods:{
    // 测试koa接口
    fix:function(){
      this.ul_state = !this.ul_state
    }
  },
  // 对DOM的变化做出反应
  updated(){
  },
  mounted(){
    const app = document.querySelector('#app');
    const hammertime = new Hammer(app);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.on('swipeleft', function(ev) {
      console.log(ev)
    });
  },
}
</script>
<style lang="less" scoped>
.about{
  width:100%;
  overflow: scroll;
  &.fixed{
    position: fixed;
  }
}
ul{
  li{
    border: 1px solid #000;
    width:80%;
    height:0;
    padding-bottom:100%;
    margin: 0 auto;
    margin-bottom:1rem;
    border-radius: 0.2rem;
    // overflow: hidden;
    position: relative;
    .content{
      position:absolute;
      border-radius: 0.2rem;
      width: 100%;
      height:100%;
      img{
        border-radius: 0.2rem 0.2rem 0 0;
      }
      &.fixed{
        position: fixed;
        z-index: 2;
        top:0;
        left:0;
        p{
          height:1000px;
        }
      }
      img{
        width: 100%;;
      }
    }
  }
}
</style>


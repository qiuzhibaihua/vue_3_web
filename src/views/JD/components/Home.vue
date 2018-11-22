<template>
  <div class="home">
    <div class="topbar">
      <!-- <div v-for="item in 10" :key="item">{{item}}种类</div> -->
    </div>
    <div class="items">
      <router-link to="/modal">弹窗</router-link> 
      <router-link to="/BottomModal">actionsheet</router-link>
      <router-link to="/scroll">无线加载</router-link>
      <router-link to="/Totop">回到顶部</router-link>
      <router-link to="/x_scroll">横向滚动</router-link>
      <router-link to="/loading">Loading</router-link>
      <router-link to="/waterfall">移动端瀑布流</router-link>
      <router-link to="/Swiper" v-for="i in 100" :key="i+'lunbo'">轮播{{i}}</router-link>
    </div>
    <modal></modal>
    <bottom-tabbar userClass="demo1" v-model="select">
      <tabbar-item v-for="(item,index) in tabbarData" :key="'tabbar_item'+index" :id="item.name" :textactive="(select == item.name)?true:false">
        <img :src="[select == item.name ?item.activeimg:item.img]" alt="占位" slot="icon" >
      </tabbar-item>
    </bottom-tabbar>
  </div>
</template>

<script>
import {newuserHuichang} from '@s/api/JD/activity.js'
export default {
  name: 'home',
  data(){
    return{
      text:[{name:'234'}],
      // 底部选中状态
      select:'首页',
      // 底部数据
      tabbarData:[{name:'首页',img:'//p4.suibianyuming.com.cn/20180730/icon1_1.png?imageslim',activeimg:'//p4.suibianyuming.com.cn/20180730/icon1_2.png?imageslim'},
      {name:'搜索',img:'//p4.suibianyuming.com.cn/20180730/icon2_1.png?imageslim',activeimg:'//p4.suibianyuming.com.cn/20180730/icon2_2.png?imageslim'},
      {name:'购物车',img:'//p4.suibianyuming.com.cn/20180730/icon3_1.png?imageslim',activeimg:'//p4.suibianyuming.com.cn/20180730/icon3_2.png?imageslim'},
      {name:'我的',img:'//p4.suibianyuming.com.cn/20180730/icon4_1.png?imageslim',activeimg:'//p4.suibianyuming.com.cn/20180730/icon4_2.png?imageslim'}],
    }
  },
  components: {
  },
  methods:{
    test:()=>{
      window.location.href='https://www.baidu.com'
    },
    change:function(){
      this.text[0]= {name:'newdata'}
      // console.log(this.text)
    },
    // 测试koa接口
    koa_test:async function(){
      let res = await newuserHuichang({name:'robert'})
    }
  },
  // 对DOM的变化做出反应
  updated(){
    this.$nextTick(()=>{
      console.log('gengxinle')
    })
  },
  mounted(){
    // 获取缓存
    let currentcahche = this.$cache.get('HBQ_cahe')
    if(currentcahche){
      // 缓存存在就直接赋值给data
      Object.assign(this.$data, currentcahche)
    }else{
      // 执行函数初始化
      // this.$cache.put('HBQ_cahe',this.$data)
    }
    // // 监听滚动事件
    // document.addEventListener('touchmove', (event)=>{
    //   event.preventDefault()
    // });

    this.koa_test()
  },
}
</script>

<style lang="less" scoped>
  .demo1{
    background: #ffffff;
    position: fixed;
    z-index: 99;
  }
  .home{
    .topbar{
      position: fixed;
      z-index: 999;
      top:0;
      width:100%;
      left:0;
      right:0;
      height:0.8rem;
      line-height: 0.8rem;
      white-space: nowrap;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      div{
        display: table-cell;
        padding: 0 0.2rem;
        font-size: 0.23rem;
        background:rgba(255,255,255,0.5);
      }
    }
    .items{
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      margin-top: 0.8rem;
      a{
        padding: 0.3rem 0.1rem;
        background: #ffffff;
        width: 100%;
        margin-bottom: 1px;
        box-shadow: 0px 1px 1px 1px#eaeaea;
        text-align: left;
        list-style: none;
        color: #666;
        text-decoration: none;
      }
    }
  }
</style>



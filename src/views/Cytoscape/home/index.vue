<template>
  <div class="home">
    首页123
    <p class="text-ellipsis-twoline">与规划局水电费与黑胡椒按实际大法官u元素法规大概是费用应该是非为付员工就舒服</p>
    <!-- <img v-lazy="testimg" alt=""/> -->
    <p>{{listD}}</p>
    <p>{{listD.a}}</p>
    <input v-model="listD.b.b2" />
    <button @click="changeBT"></button>
  </div>
</template>

<script>
import Vue from "vue";
// import { getRouter } from "@/api/login";
import { setToken, getToken, removeToken } from "@/util/auth";
export default {
  name: "login",
  data() {
    return {
      listD:{
        a:[1,2,3],
        b:{
          b1:{},
          b2:123
        },
        c:'cc'
      },
      // listDT:{},
      testimg:'static/ds_1.jpeg',
      testData: [1, 1, 2, 3, 4, 55, 55, 89],
      testData1: [
        { id: 10, title: "dw10", parentId: 4 },
        { id: 2, title: "dw2", parentId: null },
        { id: 4, title: "dw4", parentId: 2 },
        { id: 12, title: "dw12", parentId: 2 },
        { id: 8, title: "dw8", parentId: 4 }
      ],
      title: "login"
    };
  },
  components: {},
  methods: {
    changeBT(){
      this.listD.a[1]=1111
      // this.listD.b.b2 = '1111111'
      console.log(this.listD.a)
    },
    // 数组去重测试
    arrayS() {
      let newArray = [];
      let obj = {};
      // for (let i = 0; i < this.testData.length; i++) {
      //   if (!obj[this.testData[i]]) {
      //     newArray.push(this.testData[i]);
      //     obj[this.testData[i]] = 1;
      //   } else {
      //   }
      // }
      // return newArray;
      let result = this.testData.reduce((prev,cur)=>{
        if(!prev.includes(cur)){
          return prev.concat(cur)
        }else{
          return prev
        }
      },[])
      console.log('----',result)
      return result
    },
    // 数据转树
    dataToTree() {
      this.testData1.sort((a, b) => {
        return a.parentId - b.parentId;
      });
      let newObj = {};
      for (let i = this.testData1.length - 1; i >= 0; i--) {
        var currentparentId = this.testData1[i].parentId;
        var currentid = this.testData1[i].id;
        // if(!newObj[currentparentId])
        console.log(currentparentId);
        if (newObj[currentparentId]) {
          newObj[currentparentId].push(this.testData1[i]);
        } else {
          newObj[currentparentId] = [];
          newObj[currentparentId].push(this.testData1[i]);
        }
        console.log(newObj);
        if (newObj[currentid]) {
          this.testData1[i].children = newObj[currentid];
          delete newObj[currentid];
        }
      }
      return this.testData1.filter(item => {
        return !item.parentId;
      });
    }
  },
  mounted() {
    console.log(this.arrayS());
    console.log(this.dataToTree());
  }
};
</script>
<style>
</style>



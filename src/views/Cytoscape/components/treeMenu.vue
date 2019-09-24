<template>
  <div  >
    <template v-for="(menu,index) in dataList">
      <el-submenu :index=menu.url v-if="menu.children" :key="index">
          <template slot="title">
              <!-- <i class="el-icon-plus"></i> -->
              {{menu.title}}</template>
          <tree-menu :dataList="menu.children"></tree-menu>
      </el-submenu>
      <el-menu-item v-else :index=menu.url :key="index">
          {{menu.name}}
      </el-menu-item>
    </template>
  </div>
</template>
<script>
import Vue from 'vue'
import { setToken, getToken, removeToken } from "@/util/auth";
export default {
  name: 'treeMenu',
  data(){
    return{
    }
  },
  components: {
  },
  methods:{
  },
  props:['dataList']

}
</script>
<style>
</style>



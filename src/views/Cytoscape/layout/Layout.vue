<template>
  <div>
    <el-container>
      <!-- 公共头部 -->
      <el-header>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
        <div style="float:right">
          <i class="fa fa-user" style="margin:0 10px;"></i>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{ user
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="loginOut">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside style="width:auto">
          
          <!-- 菜单栏 -->
          <el-menu theme="dark" class="el-menu-vertical-demo" :collapse="isCollapse">
            <template v-for="(item, index) in menuList">
              <el-submenu
                :index="item.url"
                :key="index"
                v-if="item.children"
              >
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span slot="title"> {{ item.title }}</span>
                </template>
                <tree-menu :dataList="item.children"></tree-menu>
              </el-submenu>
              <el-menu-item :index="item.url" :key="index" v-else>{{
                item.title
              }}</el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <!-- 底部路由 -->
        <el-main class="homePage">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入去除token
import { removeToken } from "@/util/auth";
// 引入获取用户菜单
import { getMenu } from "@/api/login.js";
// 引入treemenu(菜单递归)
import treeMenu from "@/views/Cytoscape/components/treeMenu.vue";
export default {
  name: "Layoutcontent",
  data() {
    return {
      // 菜单栏数据(需要转换成树结构)
      menuList: [],
      // 是否收缩
      isCollapse: false
    };
  },
  components: {
    // treemenu(菜单递归)
    treeMenu
  },
  mounted() {
    this.getAllMenu();
  },
  methods: {
    // 获取菜单列表
    async getAllMenu() {
      console.log(123);
      let result = await getMenu(this.user.username);
      console.log(result);
      this.menuList = result.data.data.router
    },
    handleCommand(data) {
      if (data === "loginOut") {
        this.loginOut();
      }
    },
    // 退出登录
    loginOut() {
      // 清除token
      removeToken();
      this.$router.push("/login");
    },
    // 扩展
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    // 收缩
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo{
  width:300px;
}
.homePage{
  background: #ccc;
}
</style>
<style lang="scss">
  .el-menu--collapse{
   width:64px!important;
  }
</style>



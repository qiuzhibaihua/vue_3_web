<template>
  <div class="box">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="loginForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-button @click="login">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import { getRouter } from "@/api/login";
import { addRouter } from "@/util/addRouter";
import { setToken, getToken, removeToken } from "@/util/auth";
import router from "@/router";
export default {
  data() {
    return {
      // 表单数据
      loginForm: {
        username: "",
        password: ""
      },
      // 登录表单验证规则
      rules: {
        username: [{ required: true, message: "用户名", trigger: "blur" }],
        password: [{ required: true, message: "密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      /**
       * 登录实例
       *  */
      // 验证通过
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          // vuex 塞入登录信息
          this.setUserInfo(this.loginForm)
          // 登录信息塞入sessionStorage中
          sessionStorage.setItem('userInfo',JSON.stringify(this.loginForm))
          // 设置token信息
          setToken("tokenDemo-123456");
          // 跳转到首页
          this.$router.push({ path: "/" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$light_gray: #eee;
.box{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height:100%;
  background: $bg;
  display: flex;
  align-items: center;
  justify-content: center;
  .loginForm{
  width:30%;
  margin: auto;
}
}

</style>
<style lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
.loginForm{
  .el-form-item__label{
    color: $light_gray;
  }
}
</style>

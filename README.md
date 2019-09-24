# vuecli_3_project
<!-- 项目剖析 -->
<!-- ui框架是element 包含vuex vue-router 动态路由 动态菜单 -->
<!-- 文件夹简介 -->
_mix: index.js 公用文件
      user.js:全局混入
 api: 接口文件(引用util里面的封装好的request方法)
 router: index.js(基础路由 beforeEach方法中设置了获取动态路由的方法)
         _import.js 配置动态路由components地址
 store: vuex已经包含导入(开放了getter action) 注意vuex 写成module模块化
 util: addRouter.js 动态路由数据转换方法
       auth.js  系统token操作
       request.js 封装好的axios
       util.js 常用的js方法(有待补充)

功能点
1: 动态路由 addRouter方法 后端路有参数参考static文件下的json文件  需要在router文件下的_import文件内配置路由   components
2: 动态菜单 详见layout.vue 树状数据转成树状菜单(组件递归)
3: 解决vuex 数据刷新消失 详细见App.vue 利用sessionStorage在页面刷新前将vuex数据保存 重新加载的时候再将数据存入vuex中
4: 图片懒加载 详细见_min index.js  运用 <img :lazy="uri"/>


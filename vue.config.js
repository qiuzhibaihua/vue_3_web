const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    pages: {
      index: {
        // 入口js的路径
        entry: './src/views/Cytoscape/main.js',
        // 页面模板路径
        template: `./src/views/Cytoscape/index.html`
      }
    },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@c', resolve('src/components'))
        config.resolve.alias
            .set('@s', resolve('src'))
    },
    lintOnSave: false,
    devServer: {
      host:'0.0.0.0',
      port: 3000, // 端口号
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      disableHostCheck:true, 
      // 配置多个代理
      proxy: {
        "/api": {
          target: "http://192.168.10.104:3002",
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    }  
  }
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  // 资源默认路径
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : './',
    pages: {
      index: {
        // 入口js的路径
        entry: './src/views/Cytoscape/main.js',
        // 页面模板路径
        template: `./src/views/Cytoscape/index.html`
      }
    },
    // 文件地址简写
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@c', resolve('src/components'))
        config.resolve.alias
            .set('@', resolve('src'))
    },
    // 关闭eslint
    lintOnSave: false,
    // 默认静态资源文件夹名称
    assetsDir: 'static',
    devServer: {
      host:'0.0.0.0',
      port: 4000, // 端口号
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      // contentBase: path.join(__dirname, 'dist'),
      disableHostCheck:true, 
      // eslint提示
      overlay: {
        warnings: false,
        errors: false
      },
      // 配置多个代理
      proxy: {
        "/api": {
          target: "http://192.168.31.219:10031",
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    }  
  }
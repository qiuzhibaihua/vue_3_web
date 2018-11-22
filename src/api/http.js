import axios from 'axios'
import qs from 'qs'

const isProd = process.env.NODE_ENV === 'production'

axios.defaults.timeout = 8000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// cookie跨域
// axios.defaults.withCredentials = true
// 本地配置测试用，如接口需要cookie跨域验证，即上面的参数打开时，本地接口代理会有问题
//const LOCAL_HOST = '/api'
// api服务器地址，特殊地址需要在api中添加对应域名
// const DEFAULT_API_HOST = '//api.0gowang.com'


// const API_HOST = DEFAULT_API_HOST.replace('0gowang.com', _domain)

// const API_HOST = '//x.api.0gow.com'
axios.defaults.baseURL = '/api/'
// axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? LOCAL_HOST : API_HOST

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  // params 默认添加参数
  let _isApp = false
  if (config.params) {
    if (config.params.appver || config.params.appver == '') {
      _isApp = true
    }
  }
  if (!_isApp && config.url.indexOf('.json') === -1) {
    config.params = config.params || {}
    if (window.jsObj && window.jsObj.isLiteApp && window.jsObj.isLiteApp() == 1) {
      config.params.req_channel = 'liteapp'
    } else {
      config.params.req_channel = 'wechat'
    }
  }
  return config
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error)
})

// code状态码200判断
axios.interceptors.response.use((res) => {
  // console.log(res.data)
  if (res.status !== 200) {
    return Promise.reject(res)
  }
  return res
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error)
})

export default axios

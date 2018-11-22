import axios from '../http.js'
let h = axios

export const newuserHuichang = d => h.post('/test', {params: d}).then(res => res.data); // koa测试接口
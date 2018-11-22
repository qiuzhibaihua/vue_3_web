/**
 * 缓存
 */

 class Cache {
  /**
   * [constructor description]
   * @param  {[type]} name [存储引擎]
   * @return {[type]}      [description]
   */
  constructor( engine, prefix = 'Namei_' ) {
    let styleBase = 'padding:.3em; color: white; background: '
    this.style = {
      warning: `${styleBase}#FF851B;`,
      danger: `${styleBase}#FF4136;`,
      info: `${styleBase}#0074D9;`,
      success: `${styleBase}#2ECC40;`
    }
    this.storage = engine || localStorage
    this.prefix = prefix
  }
  _getName(name) {
    return encodeURIComponent(this.prefix + name)
  }
  /**
   * [put 写入缓存]
   * @param  {[*]} data   [数据]
   * @param  {Number} expire [过期时间 s]
   */
  put(name = 'HBQ', data = '', expire = 0) {
    let t = (+new Date) + expire * 1000
    let cacheData = {data, expire, t}
    name = this._getName(name)
    try {
      let _expire = expire ? expire + 's' : ' [常驻]'
      window.console.log(`%c${name}%c写入缓存${_expire}`,this.style.info , this.style.warning)
      this.storage.setItem(name, JSON.stringify(cacheData))
      return cacheData
    } catch(e) {
      throw new Error(e)
    }
  }

  /**
   * [get 获取缓存]
   * @param  {[String]} name [缓存名称]
   */
  get(initName) {
    let name = this._getName(initName)
    let data = JSON.parse( this.storage.getItem(name) )
    if(!data) return this.del(initName)
    if(data.expire && data.t - (+new Date) < 0) { // 缓存过期
      data = null
    }
    // console.log('%c读取缓存%c' + name, this.style.success, this.style.info, data)
    window.console.log('%c读取缓存%c' + name, this.style.success, this.style.info)
    return data ? data.data : data
  }

  /**
   * [del 删除缓存]
   * @param  {[String]} name [缓存名称]
   */
  del(name) {
    name = this._getName(name)
    window.console.log('%c删除缓存%c' + name, this.style.danger, this.style.info)
    return this.storage.removeItem(name)
  }

  /**
   * [delAll 清除所有缓存数据：慎用]
   * @return {[type]} [description]
   */
  delAll() {
    window.console.log('%c清除全部缓存', this.style.danger)
    return this.storage.clear()
  }

  /**
   * [getAndPut description]
   * @param  {String} cacheName [description]
   * @param  {[type]} promises  [description]
   * @param  {Number} expire    [description]
   * E.g: S.getAndPut('xxxxxx', this.getData, 60 * 5)
   */
  getAndPut(cacheName = 'Namei_CacheName', promises, expire = 0) {
    return new Promise(async (resolve) => {
      let mainData = this.get(cacheName)
      if(!mainData) {
        // mainData = !Array.isArray(promises) ? await promises() : await Promise.all(promises) // 暂不支持 多个promise
        mainData = await promises()
        this.put(cacheName, mainData, expire)
      }
      resolve(mainData)
    })
  }
}
export default Cache

// 调用写法(注入缓存 读取缓存)
// this.$cache.put('HBQ_cahe',this.$data) 
// this.$cache.get('HBQ_cahe')

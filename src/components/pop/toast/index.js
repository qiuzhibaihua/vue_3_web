import Vue from 'vue'
import Toast from './toast'

// 利用vue extend(扩展实例构造器) 构建这个Toast实例
// toast默认3s
export default (content, duration = 3000, type = '') => {
    window.console.log('toast kaishi')
    if(!content) return
    // 接受传递的参数 并赋值给新建对象def
    let def = { content, time: duration, type }
    def = typeof content === 'string' ? {...def, content} : {...def, ...content}
    const Ctrl = Vue.extend(Toast)
    let instance = new Ctrl().$mount()
    instance.content = def.content
    instance.type = def.type
    instance.open()
    if(!def.time) {
        instance.onClickCloseCover()
        return
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            instance.close()
            resolve()
        }, def.time)
    })
}
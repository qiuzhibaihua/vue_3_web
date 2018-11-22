import Vue from 'vue'
import Alert from './alert'

export default (content, type = '') => {
    if(!content) return
    let def = { content, type, title: '', reverseButton: true, closeByCover: true }
    def = typeof content === 'string' ? {...def, content} : {...def, ...content}
    const Ctrl = Vue.extend(Alert)
    let instance = new Ctrl().$mount()
    // 赋值
    instance.content = def.content
    instance.type = def.type
    instance.title = def.title
    instance.reverseButton = def.reverseButton
    instance.closeByCover = def.closeByCover
    // 初始打开
    return instance.open()
}
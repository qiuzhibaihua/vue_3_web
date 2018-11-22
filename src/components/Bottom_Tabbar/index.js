
import Tabbar from './tabbar'
import TabbarItem from './tabbarItem'
window.console.log(Tabbar.name)
export default {
    install(Vue){
        Vue.component(Tabbar.name,Tabbar);
        Vue.component(TabbarItem.name,TabbarItem);
    }
};
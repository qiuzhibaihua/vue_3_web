
import modal from './modal'
export default {
    install(Vue) {
        Vue.component('modal', modal);
    }
};
/**
 * 通用弹窗
 * 参数v-model center maskClose 详情看modal.vue
 */
import Vue from 'vue'
import Diaolog from './diaolog'

export default (diaologParams) => {
    return new Promise((resolve, reject) => {
      const Ctrl = Vue.extend(Diaolog);
      let diaologData= {
        title: diaologParams.title || '',   // 标题
        message: diaologParams.message || '',   // 描述，支持输入html
        okText: diaologParams.okText || '',   // 确认按钮文字
        cancelText: diaologParams.cancelText || '',   // 取消按钮文字
        customClass: diaologParams.customClass || '',   // 可以自定义class名字
        backdrop: typeof(diaologParams.backdrop) != 'undefined' && !diaologParams.backdrop ? false : true,    // 是不是有背景遮罩
        maskCancel: diaologParams.maskCancel || false,  // 点击背景取消动作
        showCancel: diaologParams.showCancel || false,  // 是否显示取消按钮
        showClose: diaologParams.showClose || false,    // 是否显示右上角关闭按钮
        showInput: diaologParams.showInput || false,    // 显示输入框
        inputPlaceholder: diaologParams.inputPlaceholder || '',   // 输入框中的placeHolder文字
        inputErrorMsg: diaologParams.inputErrorMsg || '',   // 输入框中的消息提醒
        inputType: diaologParams.inputType || '',     // 输入框类型，一般未text或者textarea
        inputVal: diaologParams.inputVal || '',     // 输入框初始值
        resolve: resolve,
        reject: reject
      };
      if(diaologParams.inputPattern){
        diaologData.inputPattern = diaologParams.inputPattern;  // 输入框值的验证正则表达式
      }
      new Ctrl(
      {
        propsData: diaologData
      }).$mount()
    })
};
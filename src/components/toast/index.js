import Vue from 'vue';
import vueToastMessage from './Toast.vue';

let ToastTem = Vue.extend(vueToastMessage);
let instance; // 单例防止重复创建
let timer = null;

let toastMessage = (options) => {
  if (!instance) {
    instance = new ToastTem()
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
  }
  if (timer) {
    clearTimeout(timer)
    timer = null
    instance.show = false
    instance.message = ''
  }
  // 处理参数
  let times = 3000;
  if (typeof options === 'string') {
    instance.message = options
  } else if (typeof options === 'object') {
    let {message, time} = options
    instance.message = message
    times = time || times
  } else {
    return
  }
  instance.show = true
  timer = setTimeout(() => {
    instance.show = false
    clearTimeout(timer)
    timer = null
  }, times)
}
// 手动关闭Toast
toastMessage.close = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
    instance.show = false;
  }
}
// 将Toast挂载到Vue实例上
toastMessage.install = () => {
  Vue.prototype.$toast = toastMessage
}
export default toastMessage;

import Vue from 'vue'
import App from './App'
import router from './router'
import './permission';
import store from './store/index';
// 全局安装Toast组件
import Toast from './components/toast/index';

import '@/styles/index.scss';
import 'swiper/dist/css/swiper.css';
import { mockXHR } from '../mock'

// 全局安装swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

// 开发环境 使用测试数据
mockXHR()
// if (process.env.NODE_ENV === 'development') {
//   mockXHR()
// }

Vue.use(Toast);
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

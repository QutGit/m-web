import router from './router/index';
import store from '@/store/index';
router.beforeEach(async (to, from, next) => {
  console.log('before', to)
  if (to.path !== '/') {
    store.dispatch('common/getMenuType', 2);
  }
  next();
})
router.afterEach(async () => {
  console.log('after')
})

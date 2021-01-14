<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    // 使用watch 监听$router的变化
    $route(to, from) {
      // 根据路由meta属性中设置index值，判断路由是前进还是后推
      if (to.meta.index > 0) {
        if (to.meta.index < from.meta.index) {
          this.transitionName = 'slide-right';
        } else {
          this.transitionName = 'slide-left';
        }
      } else if (to.meta.index === 0 && from.meta.index > 0) {
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>

<style>
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    /* 开启性能优化 */
    will-change: transform;
    transition: all 250ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  body{
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>

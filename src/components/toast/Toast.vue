<template>
  <transition name="fade" :duration="500" mode="out-in">
    <div class="toast" v-show="show">{{message}}</div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  data: function() {
    return {
      message: '',
      show: false
    };
  }
};
</script>
<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: rgba($color: $black, $alpha: .8);
    padding: 10px;
    border-radius: 5px;
    color: $white;
  }
</style>

<template>
  <div class="views">
    <slot></slot>
    <footers />
  </div>
</template>

<script>
import footers from './Footers';
export default {
  components: {footers},
  name: 'views'
};
</script>
<style lang="scss" scoped>
  .views {
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <swiper-slide>
    <slot></slot>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'Slide',
  props: {
    width: {
      type: String,
      default: '100%'
    }
  },
  components: { swiperSlide }
}
</script>
<style scoped>
.swiper-slide {
  width: 60%;
  /* background: #eee; */
}
</style>

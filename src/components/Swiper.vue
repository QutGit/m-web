<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <slot></slot>
    <div class="swiper-pagination" slot="pagination"></div>
    <div v-if="buttonlr" class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
    <div v-if="buttonlr" class="swiper-button-next swiper-button-black" slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper } from 'vue-awesome-swiper';
import Slide from './Slide';
export default {
  name: 'Swiper',
  components: { swiper, Slide },
  props: {
    spaceBetween: {
      type: Number,
      default: 15
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 800
    },
    buttonlr: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Boolean,
      default: false
    },
    effect: {
      type: String
    },
    initialSlide: {
      type: Number,
      default: 0
    },
    callback: {},
    changeStart: {}
  },
  data () {
    let self = this;
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: this.spaceBetween || 15,
        notNextTick: true,
        // 循环
        loop: this.loop || false,
        // 设定初始化时slide的索引
        initialSlide: this.initialSlide || 0,
        // 自动播放
        autoplay: this.autoplay || false,
        // 设置轮播动画: fade, cube, coverflow, flip, slide
        effect: this.effect || 'fade',
        fadeEffect: {
          crossFade: true
        },
        translate: 100,
        // 滑动速度
        speed: 400,
        // 滑动方向
        direction: 'horizontal',
        // 小手掌抓取滑动
        grabCursor: false,
        // 滑动之后回调函数
        on: {
          transitionEnd: function() {
            // 切换结束时，告诉我现在是第几个slide
            let index = this.activeIndex;
            if (this.activeIndex >= 5) {
              index = Math.abs(this.activeIndex - 5);
            }
            self.changeSwiper(index);
          },
          transitionStart: function(e) {
            let index = this.activeIndex;
            self.touchEndSwiper(index);
          }
        },
        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperSlides: [ ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // this.swiper.slideTo(0, 0, false);
  },
  methods: {
    changeSwiper(idx) {
      this.callback(idx);
    },
    touchEndSwiper(e) {
      this.changeStart(e);
    }
  }
}
</script>
<style scoped>
.swiper-slide {
  min-height: 200px;
  width: 60%;
  background: #fff;
}
.swiper-container {
  padding-bottom: 70px;
}
.swiper-pagination{
  bottom: 0;
}
.swiper-pagination-bullet{
  width: 12px!important;
  height: 12px!important;
}
.swiper-pagination-bullet-active{
  width: 40px!important;
}

</style>

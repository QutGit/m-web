<template>
  <img ref="images" :src="mark" class="images" @load="onLoad($event)" @error="onError($event)" />
</template>

<script>
import getOffset from '../utils/offset';

export default {
  name: 'images',
  props: {
    src: {type: String, required: true},
    mark: {type: String, default: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='},
    width: {type: Number, default: 120},
    height: {type: Number, default: 80},
    lazy: {default: true}
  },
  data: function () {
    return {
      image: null,
      timer: null
    }
  },
  mounted () {
    this.image = this.$refs.images;
    if (this.lazy) {
      this.listener();
      this.handler();
    } else {
      this.image.src = this.src;
    }
  },
  destroyed () {
    if (this.lazy) {
      this.release();
    }
  },
  methods: {
    release () {
      clearTimeout(this.timer);
      window.removeEventListener('scroll', this.handler.bind(this));
    },
    listener() {
      this.release();
      window.addEventListener('scroll', this.handler.bind(this));
    },
    handler() {
      clearTimeout(this.timer);
      this.timer = setTimeout (()=> {
        if (!this.image) return;
        let img = this.image;
        // img.removeAttribute('src');
        let th = 100; // 阈值
        // 滚动条在Y轴上的滚动距离
        let pt = document.body.scrollTop || document.documentElement.scrollTop;
        // 可视区域高度
        let wh = document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight;
        // 图片top值
        let et = getOffset(img, document.body).top;
        // 高度在可视区域内
        if (et - pt - th < wh) {
          img.src = this.src;
          this.release();
        }
      }, 300)
    },
    onLoad () {
      if (!this.src || this.src === 'null') return;
      this.image.style.visibility = 'visible';
      let image = this.image;
      let w = image.naturalWidth;
      let h = image.naturalHeight;
      let { width, height } = this;
      let ratio = w / h;
      if (w > h) {
        height = width / ratio;
      } else if (w < h) {
        width = height * ratio;
      } else {
        height = width;
      }
      image.width = width;
      image.height = height;
    },
    onError (e) {
      e.onerror = null;
    }
  }
};
</script>
<style lang="scss" scoped>
  .images {
    display: block;
    object-fit:cover;
    width: 100%;
    height: 100%;
    position: relative;
    background: #f2f5f4;
    &::before,&::after{
      content: ' ';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #f2f5f4;
    }
  }
</style>

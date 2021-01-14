<template lang="html">
    <div class="container" ref="container" :class="{ transition: isTransition == true }" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" :style="{transform: 'translate3d(0,' + top + 'px, 0)'}">
      <header class="pull-refresh">
        <slot name="pull-refresh">
          <div class="down-tip" v-if="dropDownState==1">
            <img v-if="dropDownStateText.downImg" class="down-tip-img" :src="require('../assets/'+dropDownStateText.downImg)">
            <span class="down-tip-text">{{dropDownStateText.downTxt}}</span>
          </div>
          <div class="up-tip" v-if="dropDownState==2">
            <img v-if="dropDownStateText.upImg" class="up-tip-img" :src="require('../assets/'+dropDownStateText.upImg)">
            <span class="up-tip-text">{{dropDownStateText.upTxt}}</span>
          </div>
          <div class="refresh-tip" v-if="dropDownState==3">
            <img v-if="dropDownStateText.refreshImg" class="refresh-tip-img" :src="require('../assets/'+dropDownStateText.refreshImg)">
            <span class="refresh-tip-text">{{dropDownStateText.refreshTxt}}</span>
          </div>
        </slot>
      </header>
      <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    onRefresh: {
      type: Function,
      required: false
    }
  },
  data () {
    return {
      defaultOffset: 60, // 下拉指定高度以后执行刷新操作
      top: 0,
      scrollIsToTop: 0,
      startY: 0,
      isDropDown: false, // 是否下拉
      isRefreshing: false, // 是否正在刷新
      dropDownState: 1, // 显示1:下拉刷新, 2:松开刷新, 3:刷新中……
      isTransition: false,
      dropDownStateText: {
        downTxt: '下拉刷新',
        downImg: 'loading.png',
        upTxt: '松开刷新',
        upImg: 'loading.png',
        refreshTxt: '刷新中...',
        refreshImg: 'loading.gif'
      }
    }
  },
  created () {
    if (document.querySelector('.down-tip')) {
      // 获取不同手机的物理像素（dpr）,以便适配rem
      this.defaultOffset = document.querySelector('.down-tip').clientHeight || this.defaultOffset;
    }
  },
  methods: {
    touchStart (e) {
      // 记录开始触摸屏幕的位置
      this.startY = e.targetTouches[0].pageY;
      // 优化刷新动画结束后页面向上的过渡
      if (this.isTransition) {
        this.isTransition = false;
      }
    },
    touchMove (e) {
      // 获取滚动条滚动距离
      this.scrollIsToTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (e.targetTouches[0].pageY > this.startY) { // 判断是否下拉
        this.isDropDown = true
        // 判断当前滚动条位置以及是否正在刷新中
        if (this.scrollIsToTop === 0 && !this.isRefreshing) {
          // 拉动的距离
          let diff = e.targetTouches[0].pageY - this.startY - this.scrollIsToTop;
          // 实际拉动的高度
          this.top = Math.pow(diff, 0.8) + (this.dropDownState === 3 ? this.defaultOffset : 0)
          if (this.top >= this.defaultOffset) {
            this.dropDownState = 2
            e.preventDefault()
          } else {
            this.dropDownState = 1
            e.preventDefault()
          }
        }
      } else {
        this.isDropDown = false
        this.dropDownState = 1
      }
    },
    touchEnd (e) {
      if (this.isDropDown && !this.isRefreshing) {
        if (this.top >= this.defaultOffset) { // 显示正在刷新
          this.refresh()
          this.isRefreshing = true;
          this.isTransition = true;
        } else { // 取消刷新
          this.refreshDone();
        }
      }
    },
    refresh () {
      this.dropDownState = 3;
      this.top = this.defaultOffset;
      this.onRefresh(this.refreshDone);
    },
    refreshDone () {
      this.isRefreshing = false
      this.isDropDown = false
      this.dropDownState = 1
      this.isTransition = true;
      this.top = 0;
    }
  }
}
</script>

<style scoped>
  .transition{
    transition: .3s ease-out;
  }
  .container {
    width: 100%;
    height: 100%;
    margin-top: -100px;
    -webkit-overflow-scrolling: touch; /* ios5+ */
  }
  .pull-refresh {
    width: 100%;
    color: #999;
  }
  .container .down-tip, .up-tip, .refresh-tip {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  }
  .container .down-tip-img, .up-tip-img, .refresh-tip-img {
    width: 35px;
    height: 35px;
    margin-right: 5px;
  }
</style>

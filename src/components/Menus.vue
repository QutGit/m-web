<template>
  <div class="menus" :class="{'bg-white': muType === 2}">
    <img @click.stop="showMenu" v-if="(show === false || show === 'init') && muType === 2" src="../assets/menu-b.png" alt="菜单显示">
    <img @click.stop="showMenu" v-if="(show === false || show === 'init') && muType === 1" src="../assets/menu-w.png" alt="菜单显示">
    <img @click.stop="close" v-if="show === true" src="../assets/fock.png" alt="菜单关闭">
    <router-link to="/">
      <img class="logo" v-if="muType == 1" src="../assets/logo-w.png" alt="霖珑云科  --  关于我们 -- 科技赋能管理" />
      <img class="logo" v-if="muType == 2" src="../assets/logo.png" alt="霖珑云科  --  关于我们 -- 科技赋能管理" />
    </router-link>
    <div class="mask" v-show="show === true" @touchmove.prevent></div>
    <div class="wrap" :class="{'showNav': show === true, 'hideNav': show === false, 'hidden': show === 'init'}">
      <div class="content">
        <div class="products">
          <h1 class="text-black text-l">产品与服务</h1>
          <div class="item">
            <a href="https://m.xinshehui.linlongyun.com" class="text-m">薪社汇</a>
            <a href="https://m.lejiehuo.linlongyun.com" class="text-m">乐接活</a>
            <a href="https://www.weibangong.com/web-static/main/mobileIndex.html" class="text-m">微办公</a>
            <a href="https://m.bumuqianbao.linlongyun.com" class="text-m">不木钱包</a>
            <router-link to="/product" class="text-m" exact >产品与服务</router-link>
          </div>
        </div>
        <div class="products">
          <h1 class="text-black text-l">关于我们</h1>
          <div class="item">
            <a class="text-m" @click="skipTo(1)">公司简介</a>
            <a class="text-m" @click="skipTo(2)">霖珑价值观</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store/index';
export default {
  name: 'menus',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    menuType: {
      type: String,
      default: 'white'
    }
  },
  data: function() {
    return {
      message: '',
      show: 'init'
    };
  },
  computed: {
    ...mapGetters([
      'tabIdx',
      'muType'
    ])
  },
  mounted() {
    let t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t > 74) {
      store.dispatch('common/getMenuType', 2);
    }
    let self = this;
    window.addEventListener('scroll', e => {
      if (this.$route.path !== '/') return;
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      let muType = self.muType;
      if (t > 74) {
        if (muType === 2) return;
        store.dispatch('common/getMenuType', 2);
      } else {
        if (muType === 1) return;
        store.dispatch('common/getMenuType', 1);
      }
    }, true);
  },
  watch: {
    $route (to, from) {
      this.show = false;
      document.body.removeAttribute('class', 'unscroll');
    }
  },
  beforeDestroy() {
    document.body.removeAttribute('class', 'unscroll');
  },
  methods: {
    showMenu() {
      this.show = true;
      document.body.setAttribute('class', 'unscroll');
    },
    close() {
      this.show = false;
      document.body.removeAttribute('class', 'unscroll');
    },
    skipTo(idx) {
      store.dispatch('common/changeTabIdx', idx);
      document.body.removeAttribute('class', 'unscroll');
      this.show = false;
      if (this.$route.path.indexOf('/about') >= 0) {
        return;
      }
      this.$router.push({
        path: '/about'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  .menus {
    position: fixed;
    width: 100%;
    min-height: 92px;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
    >img{
      width: 40px;
      position: absolute;
      z-index: 111;
      top: 30px;
      right: 40px;
    }
    .logo{
      position: absolute;
      top: 18px;
      left: 40px;;
      // width: 276px;
      // height: 36px;
      width: 192px;
      // height: 60px;
      z-index: 1;
    }
    .mask{
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 100;
      background: rgba($color: $black, $alpha: .3);
      color: $white;
      button {
        color: $black;
      }
    }
    .wrap{
      position: absolute;
      top: -600px;
      z-index: 110;
      background: $white;
      width: 100%;
      color: $blue;
      height: 600px;
      .content {
        padding: 48px 40px;
        height: 100%;
        padding: 40px;
        .products{
          margin-bottom: 50px;
          h1{
            text-align: left;
            margin-bottom: 20px;
          }
          .item{
            text-align: left;
            a{
              margin: 0 14px;
              margin-top: 30px;
              text-align: center;
              line-height: 70px;
              display: inline-block;
              height:70px;
              padding: 0 32px;
              background:#fff;
              border-radius:35px;
              border:2px solid #DBDBDB;
              color: #666666;
              &:active{
                background: #1E88F5;
                color: $white!important;
                border: 1px solid #1E88F5;
              }
              &.active{
                background: #1E88F5;
                color: $white!important;
                border: 1px solid #1E88F5;
              }
            }
          }
        }
      }
    }
  }
  .bg-white{
    background: $white;
    box-shadow: 0 3px 5px 1px hsla(0,0%,39.2%,.1);
  }
  .showNav {
    animation: showNav .4s ease forwards;
  }
  .hideNav {
    animation: hideNav .4s ease forwards;
  }
  .hidden {
    display: none;
  }
  @keyframes showNav {
    from { top: -600px; }
    to { top: 0; }
  }
  @keyframes hideNav {
    from { top: 0; }
    to { top: -600px; }
  }
</style>

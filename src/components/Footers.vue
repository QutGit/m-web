<template>
  <div class="footers">
    <div class="logo">
      <img src="../assets/logo-w.png" alt="">
      <span class="text-white text-s">科技赋能管理</span>
    </div>
    <div class="contact">
      <a href="tel:0512-67903209">
        <img src="../assets/chat.png" alt="">
      </a>
      <div class="tel">
        <img src="../assets/tel.png" alt="">
        <a class="text-white text-s" href="tel:0512-67903209">0512-67903209</a>
      </div>
      <div class="email">
        <img src="../assets/email.png" alt="">
        <a class="text-white text-s" href="mailto:info@linlongyun.com">info@linlongyun.com</a>
      </div>
    </div>
    <div class="operate">
      <div class="product">
        <h1 class="text-white text-m">产品与服务</h1>
        <div class="p-item">
          <a class="text-white text-s" href="https://m.xinshehui.linlongyun.com">薪社汇</a>
          <a class="text-white text-s" href="https://m.lejiehuo.linlongyun.com">乐接活</a>
          <a class="text-white text-s" href="https://www.weibangong.com/web-static/main/mobileIndex.html">微办公</a>
          <a class="text-white text-s" href="https://m.bumuqianbao.linlongyun.com">不木钱包</a>
        </div>
      </div>
      <div class="about">
        <h1 class="text-white text-m">关于我们</h1>
        <div class="p-item">
          <!-- <router-link class="text-white text-s" to="/about">公司简介</router-link>
          <router-link class="text-white text-s" to="/about">霖珑价值观</router-link> -->
          <a class="text-white text-s" @click="skipTo(1)">公司简介</a>
          <a class="text-white text-s" @click="skipTo(2)">霖珑价值观</a>
        </div>
      </div>
    </div>
    <div class="address">
      <p class="text-s">集团总部：苏州市吴中区东方大道100号</p>
      <p class="text-s">研发中心：北京市海淀区学院路768号创业产业园b座5号门</p>
      <p class="text-s">运营中心：上海市普陀区新会路468号中环现代大厦9楼</p>
    </div>
    <div class="icp">
      <p class="text-white text-s">苏ICP备19029986号</p>
    </div>
  </div>
</template>

<script>
import store from '@/store/index';
export default {
  name: 'footers',
  methods: {
    skipTo(idx) {
      store.dispatch('common/changeTabIdx', idx);
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
  .footers {
    padding: 60px 40px 80px;
    width: 100%;
    // height: 100%;
    background: $dblue;
    .logo{
      text-align: left;
      img{
        // height: 30px;
        width: 192px;
      }
      span{
        margin-left: 20px;
        position: relative;
        bottom: 10px;
      }
    }
    .contact{
      display: flex;
      line-height: 52px;
      margin-top: 32px;
      padding-bottom: 46px;
      @include border(1px, rgba(255, 255, 255, .4), bottom);
      position: relative;
      a{
        >img{
          width: 172px;
          position: fixed;
          right: 22px;
          bottom: 12px;
          z-index: 9999;
        }
      }
      .tel{
        img{
          width: 20px;
          height: 20px;
          margin-right: 12px;
          vertical-align: middle;
        }
        a{
          vertical-align: middle;
        }
      }
      .email{
        margin-left: 60px;
        img{
          width: 20px;
          height: 16px;
          margin-right: 12px;
          vertical-align: middle;
        }
        a{
          vertical-align: middle;
        }
      }
    }
    .operate{
      margin-top: 46px;
      padding-bottom: 46px;
      @include border(1px, rgba(255, 255, 255, .4), bottom);
      .about{
        margin-top: 28px;
        h1{
          margin-bottom: 18px;
        }
        .p-item{
          a{
            margin-right: 18px;
          }
        }
      }
      .product{
        letter-spacing: 0.4;
        h1{
          margin-bottom: 18px;
        }
        .p-item{
          a{
            margin-right: 18px;
          }
        }
      }
    }
    .address{
      margin-top: 46px;
      p{
        color: rgba(255, 255, 255, .3);
      }
    }
    .icp{
      margin-top: 24px;
    }
  }
</style>

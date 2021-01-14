<template>
  <Views>
    <div class="product">
      <div class="menu">
        <Menus :visible="displayMenu" :menu-type="'blue'" />
      </div>
      <div class="cards">
        <div class="item">
          <h1>薪社汇</h1>
          <p class="text-black text-xl">打通社保薪税最后一公里</p>
          <div class="more">
            <a href="https://m.xinshehui.linlongyun.com/">了解更多</a>
            <img src="../../assets/right.png" alt="霖珑云科  --  产品与服务">
          </div>
          <div class="avader p-3">
            <img src="../../assets/product-3.png" alt="霖珑云科  --  产品与服务">
          </div>
        </div>
        <div class="item">
          <h1 class="text-black">乐接活</h1>
          <p class="text-black text-xl">灵活用工全场景服务平台</p>
          <div class="more">
            <a href="https://m.lejiehuo.linlongyun.com/">了解更多</a>
            <img src="../../assets/right.png" alt="霖珑云科  --  产品与服务">
          </div>
          <div class="avader p-1">
            <img src="../../assets/product-1.png" alt="霖珑云科  --  产品与服务">
          </div>
        </div>
        <div class="item">
          <h1>微办公</h1>
          <p class="text-black text-xl">智能一体化移动办公平台</p>
          <div class="more">
            <a href="https://www.weibangong.com/web-static/main/mobileIndex.html">了解更多</a>
            <img src="../../assets/right.png" alt="霖珑云科  --  产品与服务">
          </div>
          <div class="avader p-2">
            <img src="../../assets/product-2.png" alt="霖珑云科  --  产品与服务">
          </div>
        </div>
        <div class="item">
          <h1>不木钱包</h1>
          <p class="text-black text-xl">能发薪会查薪的智能发薪平台</p>
          <div class="more">
            <a href="https://m.bumuqianbao.linlongyun.com">了解更多</a>
            <img src="../../assets/right.png" alt="霖珑云科  --  产品与服务">
          </div>
          <div class="avader p-4">
            <img src="../../assets/product-4.png" alt="霖珑云科  --  产品与服务">
          </div>
        </div>
      </div>
    </div>
  </Views>
</template>
<script>
import Menus from '@/components/Menus';
import Views from '@/components/Views';
import store from '../../store/index';
export default {
  name: 'Product',
  components: { Views, Menus },
  data: function() {
    return {
      displayMenu: false
    }
  },
  mounted () {
    store.dispatch('common/getMenuType', 2);
  },
  methods: {
    // tab切换
    getTabIndex(item) {
      this.tabIndex = item.id;
    }
  }
}
</script>
<style lang="scss" scoped>
    .product{
      width: 100%;
      .menu{
        width: 100%;
        height: 92px;
        position: relative;
        text-align: center;
        @include border(1px, #ececec, bottom);
        img{
          width: 260px;
          position: absolute;
          left: 40px;
          top: 20px;
          z-index: 109;
        }
      }
      .cards{
        margin-top: 80px;
        .item{
          text-align: center;
          &:not(:first-child){
            margin-top: 80px;
          }
          h1{
            color: #333;
            font-weight: 400;
          }
          p{
            letter-spacing: 0.4px;
            margin-top: 8px;
            font-weight: 300;
            font-family:PingFangSC-Light,PingFangSC;
          }
          .more{
            margin-top: 40px;
            a{
              color: #1E88F5;
              vertical-align: middle;
            }
            >img{
              width: 14px;
              height: 14px;
              vertical-align: middle;
            }
          }
          .avader{
            width: 100%;
            box-shadow:0px 4px 8px 0px rgba(0,0,0,0.07);
            img{
              width: 100%;
            }
          }
          .p-1{
            padding: 60px 124px 100px 82px;
          }
          .p-2{
            padding: 40px 110px 32px 84px;
          }
          .p-3{
            padding: 60px 96px 80px 94px;
          }
          .p-4{
            padding: 40px 96px 120px 94px;
          }
        }
      }
    }
</style>

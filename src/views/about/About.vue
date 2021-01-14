<template>
  <Views>
    <div class="about">
      <div class="menu">
        <Menus :visible="displayMenu" :menu-type="'blue'" />
      </div>
      <div class="banner">
        <div class="text">
          <h1>科技赋能管理</h1>
        </div>
      </div>
      <div class="d-tabs">
        <Tabs :labels="labels" @getTabIndex = "getTabIndex"></Tabs>
      </div>
      <div class="media" v-if="tabIdx == 1"><Introduction /></div>
      <div class="business" v-if="tabIdx == 2"><Values /></div>
    </div>
  </Views>
</template>
<script>
import Menus from '@/components/Menus';
import Tabs from '@/components/Tabs';
import Values from './Values';
import Introduction from './Introduction';
import Views from '@/components/Views';
import { mapGetters } from 'vuex';
import store from '../../store/index';
export default {
  name: 'About',
  components: { Views, Menus, Tabs, Values, Introduction },
  data: function() {
    return {
      labels: [
        { id: 1, label: '公司简介' },
        { id: 2, label: '霖珑价值观' }
      ],
      tabIndex: 1,
      displayMenu: false
    }
  },
  mounted () {
    store.dispatch('common/getMenuType', 2);
  },
  computed: {
    ...mapGetters([
      'tabIdx'
    ])
  },
  methods: {
    // tab切换
    getTabIndex(item) {
      // this.tabIdx = item.id;

    }
  }
}
</script>
<style lang="scss" scoped>
    .about{
      width: 100%;
      margin-bottom: 120px;
      .menu{
        width: 100%;
        height: 92px;
        position: relative;
        text-align: center;
        img{
          width: 276px;
          position: absolute;
          left: 40px;
          top: 30px;
          z-index: 109;
        }
      }
      .banner{
        width: 100%;
        position: relative;
        height: 460px;
        // background:linear-gradient(180deg,rgba(79,157,248,1) 0%,rgba(30,130,240,1) 100%);
        background: url(https://static.weibangong.com/files/5d9178a3d736b9ea08a4530c-big) 0 0 no-repeat;
        background-size: contain;
        .text{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          h1{
            font-size:50px;
            font-weight:600;
            color:rgba(255,255,255,1);
            line-height:56px;
            letter-spacing:2px;
          }
          p{
            font-size:20px;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:28px;
            letter-spacing:1px;
            margin-top: 22px;
            font-family:"PingFangSC-Light";
          }
        }
        img{
          width: 100%;
          display: block;
        }
      }
    }
</style>

<template>
  <Views>
    <div class="example">
      <Refresh :on-refresh="onRefresh">
        <Menus :visible="displayMenu" />
        <Swiper>
          <Slide>I'm Slide 1</Slide>
          <Slide>I'm Slide 2</Slide>
          <Slide>I'm Slide 3</Slide>
          <Slide>I'm Slide 4</Slide>
        </Swiper>
        <ul>
          <li v-for="(item, index) in products" :key="index">{{item}}</li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
        <div class="avatar">
          <Images src="https://pbs.twimg.com/profile_images/2184272044/Photo_00003_200x200.jpg" />
          <Images src="https://pbs.twimg.com/profile_images/2184272044/Photo_00003_200x200.jpg" />
          <Images src="https://pbs.twimg.com/profile_images/2184272044/Photo_00003_200x200.jpg" :lazy="false" />
          <Images src="https://pbs.twimg.com/profile_images/2184272044/Photo_00003_200x200.jpg" :lazy="false" />
        </div>
        <button @click="showToast">显示Toast</button>
        <button @click="hideToast">隐藏Toast</button>
        <button @click="chgeToast" v-if="siteType == 1">修改Toast</button>
      </Refresh>
    </div>
  </Views>
</template>

<script>

import { mapGetters } from 'vuex';
import store from '../../store/index';
import Views from '@/components/Views';
import Images from '@/components/images';
import Refresh from '@/components/Refresh';
import Menus from '@/components/Menus';
import Swiper from '@/components/Swiper';
import Slide from '@/components/Slide';
import { getProducts, getUsers } from '@/utils/apis';

export default {
  name: 'example',
  components: { Views, Refresh, Images, Menus, Swiper, Slide },
  data: function() {
    return {
      products: [],
      displayMenu: false
    };
  },
  computed: {
    ...mapGetters([
      'siteType'
    ])
  },
  mounted () {
    this.getProducts();
    // this.getUsers();

    let products = [];
    for (let i = 0; i < 6; i++) {
      products.push(`入口起点指示webpack应该使用哪个模块${i}`);
    }
    this.products = products;
  },
  methods: {
    async getUsers () {
      let result = await getUsers();
      console.log(result)
    },
    async getProducts () {
      let res = await getProducts();
      console.log(res)
    },
    onRefresh(cb) {
      setTimeout(() => {
        this.$toast('刷新成功');
        cb()
      }, 2000)
    },
    showToast() {
      this.$toast('我是toast');
      this.$store.dispatch('common/changeSiteType', 2);
    },
    hideToast() {
      store.dispatch('common/changeSiteType', 1);
      this.$toast.close();
    },
    chgeToast() {
      this.$toast('我是toast1111');
    }
  }
};
</script>
<style lang="scss" scoped>
  .example {
    color: $blue;
    text-align: center;
    width: 100%;
    height: 100%;
    .menu{
      width: 100%;
      button{
        width: 100%;
        height: 50px;
      }
    }
    .avatar {
      width: 100%;
      img {
        width: 360px;
        height: 240px;
        display: inline-block;
      }
    }
    ul {
      li{
        line-height: 80px;
      }
    }
  }
</style>

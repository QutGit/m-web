<template>
  <Views>
    <div class="about">
      <Refresh :on-refresh="onRefresh">
        <ul>
          <li v-for="(item, index) in products" :key="index">{{item}}</li>
          <li><router-link to="/examples">跳转Example</router-link></li>
        </ul>
      </Refresh>
    </div>
  </Views>
</template>

<script>

import Views from '@/components/Views';
import Refresh from '@/components/Refresh';
import { getProducts, getUsers } from '@/utils/apis';

export default {
  name: 'about',
  components: { Views, Refresh },
  data: function() {
    return {
      products: []
    };
  },
  mounted () {
    // this.getProducts();
    // this.getUsers();
    let products = [];
    for (let i = 0; i < 15; i++) {
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
        cb()
      }, 2000)
    }
  }
};
</script>
<style lang="scss" scoped>
  .about {
    color: $red;
    text-align: center;
    width: 100%;
    height: 100%;
    ul {
      li{
        line-height: 80px;
      }
    }
  }
</style>

<template>
  <div class="wck-tabs">
    <div class="content">
      <div v-for="(item, index) in labels" :key="index" class="wck-tab text-m" :class="{'active': tabIdx == item.id}" @click="getTabIndex(item)">{{item.label}}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import store from '@/store/index';
export default {
  name: 'Tabs',
  props: [ 'labels', 'tabIndexData' ],
  data: function() {
    return {
      tabIndex: 1
    }
  },
  mounted() {
    this.tabIndex = this.tabIdx;
  },
  methods: {
    getTabIndex(item) {
      // this.tabIdx = item.id;
      store.dispatch('common/changeTabIdx', item.id);
      this.$emit('getTabIndex', item);
    }
  },
  computed: {
    ...mapGetters([
      'tabIdx'
    ])
  }
}
</script>
<style lang="scss" scoped>
    .wck-tabs{
      text-align: center;
      width: 100%;
      .content {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        background:rgba(30,136,245,.03);
        display: flex;
        justify-content: center;
        .wck-tab{
          float: left;
          padding: 16px 40px;
          position: relative;
          color: #666666;
          cursor: pointer;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          &:last-child::after{
            display: none;
          }
          &.active{
            background: #fff;
            font-weight:600;
            color: #1E82F0;
          }
          &::after{
            content: ' ';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 2px;
            height: 24px;
            background: #499AF4;
          }
        }
      }
    }
</style>

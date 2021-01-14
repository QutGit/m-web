<template>
  <Views>
    <div class="details">
      <div class="menu">
        <img class="logo" src="../../assets/logo.png" alt="霖珑云科  --  关于我们 -- 科技赋能管理" />
        <Menus :visible="displayMenu" :menu-type="'blue'" />
      </div>
      <div class="d-wrap">
        <div class="content" v-if="details">
          <div class="title">
            <h1>{{details.title}}</h1>
            <span>{{details.date}}</span>
            <p>关键词：{{details.keywords}}</p>
          </div>
          <div class="abstract">{{details.abstract}}</div>
          <div class="c-content" v-html="details.content">
          </div>
        </div>
        <div  v-if="!details">暂无内容</div>
      </div>
    </div>
  </Views>
</template>
<script>

import { getDynamicsDetails } from '../../utils/apis';
import Menus from '@/components/Menus';
import Views from '@/components/Views';
export default {
  name: 'Details',
  components: { Views, Menus },
  data: function() {
    return {
      details: {},
      displayMenu: true
    }
  },
  mounted() {
    let id = this.$route.params.id;
    console.log('**********************************************', id)
    this.getDetails({id});
  },
  methods: {
    async getDetails(params) {
      let result = await getDynamicsDetails(params);
      this.details = result.data.details;
    }
  }
}
</script>
<style lang="scss" >
    .details{
      width: 100%;
      background: $white;
      .menu{
        width: 100%;
        height: 92px;
        position: relative;
        text-align: center;
        .logo{
          width: 260px;
          position: absolute;
          left: 40px;
          top: 20px;
        }
      }
      .d-wrap{
        padding: 0 40px;
        padding-bottom: 128px;
        background: #fff;
        .content{
          padding-top: 60px;
          margin: 0 auto;
          .title{
            overflow: hidden;
            h1{
              font-size: 32px;
              font-weight: 400;
              color: #4A4A4A;
              line-height: 46px;
              margin-bottom: 16px;
            }
            span{
              font-size: 14px;
              color: #C7C7C7;
            }
            p{
              font-size: 14px;
              font-weight: 400;
              color: #333;
              line-height: 20px;
              margin-top: 16px;
              line-height: 44px;
            }
          }
          .abstract{
            font-size: 16px;
            font-weight: 400;
            color: #797979;
            margin-top: 74px;
          }
          .c-content{
            width: 100%;
            h2{
              font-size: 26px;
              font-weight: 400;
              color: #4A4A4A;
              margin: 50px 0 30px;
            }
            p{
              font-size:16px;
              font-weight:400;
              color:#797979;
              line-height:22px;
              margin-top: 20px;
              line-height: 44px;
            }
            .image{
              padding: 26px 0;
              text-align: center;
              img{
                margin-bottom: 20px;
                width: 100%;
              }
              span{
                font-size: 12px;
                color: #9B9B9B;
              }
            }
          }
        }
      }
    }
</style>

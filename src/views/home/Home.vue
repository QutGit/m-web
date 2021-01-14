<template>
  <Views>
    <!-- <div class="home"> -->
      <Menus :visible="displayMenu" />
      <div class="banner">
        <div class="banner-bg"></div>
        <div class="container">
          <div class="title text-white">
            <h1 class="text-28">人力薪税</h1>
            <h1 class="text-28">智能一站式服务提供商</h1>
          </div>
          <div class="desc">
            <p class="text-m text-white">合规降本增效</p>
            <p class="text-m text-white">专业成就未来</p>
          </div>
          <div class="arrow">
            <img src="https://www.weibangong.com/web-static/main/images/mobile/arrow-banner.png" alt="霖珑云科--向下箭头">
          </div>
        </div>
      </div>
      <div class="product">
        <div class="title">
          <Title bg-text="PRODUCT" title="产品与服务" remark="合规、降本、增效、省事" />
        </div>
        <div class="ptabs">
          <Swiper class="h-swiper" :spaceBetween="20" :callback="humanSwiper" :loop="true" :effect="'slide'" :changeStart="transitionStart">
            <Slide class="slide">
              <div class="human" @click="skipSite(1)">
                <div class="h-top">
                  <img src="https://static.weibangong.com/files/5d103628141fc22956bf37af-big" alt="霖珑云科">
                  <p class="text-white text-l">社保薪税服务</p>
                  <p class="text-white text-l">薪社汇</p>
                </div>
                <div class="h-bottom">
                  <div class="h-text">
                    <img src="../../assets/check-blue.png" alt="霖珑云科">
                    <p class="text-mark3">定制化社保薪税方案设计</p>
                  </div>
                  <div class="h-text">
                    <img src="../../assets/check-blue.png" alt="霖珑云科">
                    <p class="text-mark3">用工成本与风险一体管控</p>
                  </div>
                  <div class="h-text">
                    <img src="../../assets/check-blue.png" alt="霖珑云科">
                    <p class="text-mark3">在线智能算薪、发薪、结算、申 报综合服务</p>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide class="slide">
              <div class="human" @click="skipSite(2)">
                <div class="h-top h-top-yellow">
                  <img src="https://static.weibangong.com/files/5d103628141fc22956bf37b2-big" alt="霖珑云科">
                  <p class="text-white text-l">灵活用工平台</p>
                  <p class="text-white text-l">乐接活</p>
                </div>
                <div class="h-bottom">
                  <div class="h-text">
                    <img src="../../assets/check-yellow.png" alt="霖珑云科">
                    <p class="text-mark3">基于人才和组织关系重塑</p>
                  </div>
                  <div class="h-text">
                    <img src="../../assets/check-yellow.png" alt="霖珑云科">
                    <p class="text-mark3">资深专家提供定制方案</p>
                  </div>
                  <div class="h-text">
                    <img src="../../assets/check-yellow.png" alt="霖珑云科">
                    <p class="text-mark3">灵活用工全场景服务平台合规化操作</p>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide class="slide">
              <div class="human" @click="skipSite(3)">
                <div class="h-top">
                  <img src="https://static.weibangong.com/files/5d103628141fc22956bf37b1-big" alt="霖珑云科">
                  <p class="text-white text-l">劳动力管理</p>
                  <p class="text-white text-l">微办公</p>
                </div>
                <div class="h-bottom">
                  <div class="h-text">
                    <img src="../../assets/check-blue.png" alt="霖珑云科">
                    <p class="text-mark3">一体化协同办公平台</p>
                  </div>
                  <div class="h-text">
                    <img src="../../assets/check-blue.png" alt="霖珑云科">
                    <p class="text-mark3">劳动力全流程云管理</p>
                  </div>
                  <div class="h-text">
                    <img src="../../assets/check-blue.png" alt="霖珑云科">
                    <p class="text-mark3">切实提高员工满意度</p>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide class="slide">
              <div class="human" @click="skipSite(4)">
                <div class="h-top h-top-yellow">
                  <img src="https://static.weibangong.com/files/5d103628141fc22956bf37b0-big" alt="霖珑云科">
                  <p class="text-white text-l">薪金融</p>
                  <p class="text-white text-l">不木钱包</p>
                </div>
                <div class="h-bottom">
                  <div class="h-text">
                    <img src="../../assets/check-yellow.png" alt="霖珑云科">
                    <p class="text-mark3">自主研发的互联网 saas 智能薪酬工具</p>
                  </div>
                  <div class="h-text">
                    <img src="../../assets/check-yellow.png" alt="霖珑云科">
                    <p class="text-mark3">区别于传统发薪方式</p>
                  </div>
                  <div class="h-text">
                    <img src="../../assets/check-yellow.png" alt="霖珑云科">
                    <p class="text-mark3">银行合作、实名认证、资金管控、安全可靠</p>
                  </div>
                </div>
              </div>
            </Slide>
          </Swiper>
        </div>
      </div>
      <div class="advantage">
        <div class="title">
          <Title bg-text="ADVANTAGE" title="我们的优势" remark="科技赋能专业 服务创造价值" />
        </div>
        <div class="a-cards">
          <div class="a-item">
            <div class="avader">
              <img class="a-1" src="../../assets/advant-1.png" alt="霖珑云科">
              <div class="bulk"></div>
            </div>
            <div class="text">
              <h1 class="text-xxl text-gray">属地化交付</h1>
              <p class="text-m text-mark3">280+ 全国直营网点</p>
              <p class="text-m text-mark3">提供属地化代缴代办</p>
            </div>
          </div>
          <div class="a-item">
            <div class="avader">
              <img class="a-2" src="../../assets/advant-2.png" alt="霖珑云科">
              <div class="bulk"></div>
            </div>
            <div class="text">
              <h1 class="text-xxl text-gray">专业化方案</h1>
              <p class="text-m text-mark3">4 年人力薪税实践</p>
              <p class="text-m text-mark3">不断创新优化解决方案</p>
            </div>
          </div>
          <div class="a-item">
            <div class="avader">
              <img class="a-3" src="../../assets/advant-3.png" alt="霖珑云科">
              <div class="bulk"></div>
            </div>
            <div class="text">
              <h1 class="text-xxl text-gray">一体化咨询</h1>
              <p class="text-m text-mark3">从战略咨询到规划落地</p>
              <p class="text-m text-mark3">与客户商业模式、组织管理方式紧密结合</p>
            </div>
          </div>
        </div>
      </div>
      <div class="customer">
        <div class="title">
          <Title bg-text="CUSTOMER" title="他们眼中的霖珑" remark="创造价值 携手共赢" />
        </div>
        <div class="c-cards">
          <Swiper class="c-swiper" :spaceBetween="15" :callback="advSwiper" :loop="true" :effect="'slide'" :changeStart="transitionStart">
            <Slide class="slide">
              <div class="c-content">
                <div class="c-top">
                  <img class="c-dot-1" src="../../assets/dot-2.png" alt="霖珑云科">
                  <p class="text-mark3 text-m"> 微办公让企业对一线的远程管控更加方便，行程更加真实有效。实现数据存储完整性，降低信息外泄风险。搭建企业互动沟通平台，加强沟通与协作，提升工作效率，从而增强企业综合市场竞争力。</p>
                  <img class="c-dot-2" src="../../assets/dot-1.png" alt="霖珑云科">
                </div>
                <div class="c-bottom">
                  <div class="c-item">
                    <img src="../../assets/mengniu.png" alt="霖珑云科">
                    <h1 class="text-m text-black">内蒙古蒙牛乳业(集团)股份有限公司</h1>
                    <p class="text-s text-black">销售服务中心行政经理</p>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide class="slide">
              <div class="c-content">
                <div class="c-top">
                  <img class="c-dot-1" src="../../assets/dot-2.png" alt="霖珑云科">
                  <p class="text-mark3 text-m">使用不木钱包发薪以后，解决了我们发薪难的问题，很大程度上节约了时间成本和人力成本，不木钱包不愧是一款有温度的发薪工具呀！</p>
                  <img class="c-dot-2" src="../../assets/dot-1.png" alt="霖珑云科">
                </div>
                <div class="c-bottom">
                  <div class="c-item">
                    <img src="https://static.weibangong.com/files/5d11ea6a78b8946ae8fe1723-big" alt="霖珑云科">
                    <h1 class="text-m text-black">霞飞诺眼镜工业（苏州）有限公司</h1>
                    <p class="text-s text-black">中国区人事总监</p>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide class="slide">
              <div class="c-content">
                <div class="c-top">
                  <img class="c-dot-1" src="../../assets/dot-2.png" alt="霖珑云科">
                  <p class="text-mark3 text-m">微办公现在是我们必备的 APP，每天员工都在微办公进行沟通，处理工作事务，对于我们经常不在办公室的同事，极大地方便了我们的工作，告别了纸张时代。流程化、规范化、简单易用是我使用的最大感受，只需要手指轻轻一点，我就能轻松完成工作，不会错过重要信息，这是我们选择微办公的理由! </p>
                  <img class="c-dot-2" src="../../assets/dot-1.png" alt="霖珑云科">
                </div>
                <div class="c-bottom">
                  <div class="c-item">
                    <img src="../../assets/guang.png" alt="霖珑云科">
                    <h1 class="text-m text-black">广之旅海外咨询服务有限公司</h1>
                    <p class="text-s text-black">财务总监</p>
                  </div>
                </div>
              </div>
            </Slide>
          </Swiper>
        </div>
      </div>
      <div class="activities">
        <div class="title">
          <Title bg-text="ACTIVITIES" title="霖珑声音" remark="创造价值 携手共赢" />
        </div>
        <router-link :to="{path: '/details/' + item.id}" class="analyze" v-for="(item, index) in topList" :key="index">
          <div class="avader">
            <img :src="item.image" alt="霖珑云科">
          </div>
          <div class="text">
            <h1 class="text-l">{{item.title}}</h1>
            <p class="text-mark3 text-s line-clamp-two">{{item.message}}</p>
          </div>
        </router-link>
        <div class="a-tabs">
          <router-link :to="{path: '/details/' + item.id}" class="a-item" v-for="(item, index) in btmList" :key="index">
            <div class="avader">
              <img :src="item.image" alt="霖珑云科">
            </div>
            <div class="text">
              <p class="text-s line-clamp-two">{{item.title}}</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="cooperative">
        <div class="title">
          <Title bg-text="PARTNER" title="合作伙伴" remark=" " />
        </div>
        <div class="partener">
          <img src="../../assets/partner.png" alt="霖珑云科">
        </div>
      </div>
    <!-- </div> -->
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
import Title from '@/components/Title';
import { getDynamics } from '@/utils/apis';

export default {
  name: 'home',
  components: { Views, Refresh, Images, Menus, Swiper, Slide, Title },
  data: function() {
    return {
      products: [],
      topList: [],
      btmList: [],
      displayMenu: false
    };
  },
  computed: {
    ...mapGetters([
      'siteType',
      'tabIdx'
    ])
  },
  mounted () {
    store.dispatch('common/changeSiteType', 1);
    store.dispatch('common/getMenuType', 1);
    this.getDynamics();
  },
  methods: {
    async getDynamics () {
      let result = await getDynamics();
      let list = result.data.list;
      this.topList = list.slice(0, 1);
      this.btmList = list.slice(1);
    },
    humanSwiper (idx) {
      console.log(idx)
    },
    advSwiper (idx) {
      console.log(idx)
    },
    transitionStart(idx) {
      console.log(idx)
    },
    skipSite (idx) {
      if (idx === 1) { // 薪社汇
        location.href = 'https://m.xinshehui.linlongyun.com';
      } else if (idx === 2) { // 乐接活
        location.href = 'https://m.lejiehuo.linlongyun.com';
      } else if (idx === 3) { // 微办公
        location.href = 'https://www.weibangong.com/web-static/main/mobileIndex.html';
      } else { // 不木钱包
        location.href = 'https://m.bumuqianbao.linlongyun.com';
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  // .home {
    // text-align: center;
    // width: 100%;
    // height: 100%;
    // position: relative;
    .banner{
      overflow: hidden;
      margin: 0;
      width: 100%;
      height: 100%;
      // background:linear-gradient(180deg,rgba(2,87,174,1) 0%,rgba(63,188,251,0.64) .01%);
      position: relative;
      text-align: center;
      .banner-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background: url(https://static.weibangong.com/files/5d9ed32db68125c98a24fb66-big) center center no-repeat;
        // background-color: rgba(2,87,174,1);
        background-size: cover;
        z-index: -1;
      }
      .container{
        position: relative;
        height: inherit;
        margin: 0 auto;
        z-index: 1;
        color: #fff;
        overflow: hidden;
        padding: 0 90px;
        .img{
          height: 100vh;
        }
        .title{
          text-align: left;
          margin-top: 360px;
          h1{
            position: relative;
            letter-spacing:0.5px;
            &:last-child{
              &::after{
                content: ' ';
                position: absolute;
                bottom: -40px;
                left: 0;
                width: 80px;
                height: 10px;
                background:linear-gradient(202deg,rgba(251,210,73,1) 0%,rgba(245,166,35,1) 100%);
              }
            }
          }
        }
        .desc{
          position: absolute;
          padding: 0 90px;
          bottom: 180px;
          left: 0;
          right: 0;
          text-align: center;
          width: 100%;
          display: flex;
          p{
            flex: 1;
            font-family:PingFangSC-Light,PingFangSC;
            letter-spacing:7px;
          }
        }
        .arrow{
          position: absolute;
          width: 100%;
          height: 12px;
          left: 0;
          bottom: 100px;
          // bottom: 20%;
          transform-origin: 0;
          animation-name: arrowDown;
          animation-iteration-count: infinite;
          animation-duration: 1s;
          animation-direction: normal;
          animation-timing-function: linear;
          img{
            width: 102px;
          }
        }
      }
    }
    .product{
      padding: 62px 0 0;
      text-align: center;
      .ptabs{
        margin-top: 80px;
        padding-bottom: 80px;
        background: $white;
        .h-swiper{
          height: 750px;
        }
        .slide{
          width: 590px;
          background: $white;
          box-shadow:0px 12px 40px 0px rgba(13,37,62,0.05);
          border-radius:8px;
          border:2px solid rgba(238,238,238,1);
          .human{
            .h-top{
              width: 100%;
              background:linear-gradient(201deg,rgba(64,189,251,1) 0%,rgba(30,136,245,1) 100%);
              box-shadow:0px 4px 60px 0px rgba(30,136,245,0.2);
              border-radius:8px 8px 0px 0px;
              padding: 40px;
              img{
                width: 80px;
                margin-bottom: 20px;
              }
              p{
                font-weight: 600;
              }
            }
            .h-top-yellow{
              background:linear-gradient(187deg,rgba(251,210,73,1) 0%,rgba(245,166,35,1) 100%);
            }
            .h-bottom{
              background: $white;
              padding: 70px 64px 70px;
              .h-text{
                position: relative;
                &:not(:first-child){
                  margin-top: 20px;
                }
                img{
                  width: 60px;
                  position: absolute;
                  left: 0;
                  top: -6px;
                }
                p{
                  text-align: left;
                  margin-left: 70px;
                }
              }
            }
          }
        }
      }
    }
    .advantage{
      padding: 0 40px;
      background:rgba(30,136,245,.03);
      padding-bottom: 80px;
      padding-top: 40px;
      .title{
        margin-bottom: 80px;
      }
      .a-cards{
        .a-item{
          display: flex;
          height: 308px;
          align-items: center;
          padding: 56px 66px 56px 96px;
          position: relative;
          background: $white;
          box-shadow:0px 12px 20px 0px rgba(30,136,245,0.06);
          border-radius:12px;
          margin-top: 60px;
          .avader{
            .a-1{
              width: 96px;
              height: 100px;
            }
            .a-2{
              width: 90px;
              height: 100px;
            }
            .a-3{
              width: 102px;
              height: 100px;
            }
            >div{
              position: absolute;
              top: 48px;
              left: 0;
              width: 56px;
              height: 24px;
              background: $blue;
              border-radius:0px 8px 0px 0px;
            }
          }
          .text{
            margin-left: 90px;
            text-align: left;
            h1{
              margin-bottom: 20px;
            }
            p{
              margin-bottom: 10px;
            }
          }
        }
      }
    }
    .customer{
      padding: 40px 0;
      .c-cards{
        margin-top: 80px;
        .c-swiper{
          height: 850px;
        }
        .slide{
          width: 600px;
          background: $white;
          box-shadow:0px 12px 20px 0px rgba(30,136,245,0.08);
          border-radius:16px;
          border:2px solid rgba(230,230,230,1);
          .c-content{
            padding: 100px 60px 56px;
            width: 100%;
            height: 100%;
            position: relative;
            .c-top{
              position: relative;
              >img{
                width: 60px;
              }
              .c-dot-1{
                position: absolute;
                top: -70px;
                left: -30px;
              }
              p{
                line-height: 1.6;
                text-align: left;
                text-indent:2em;
                font-family:PingFangSC-Light,PingFangSC;
              }
              .c-dot-2{
                position: absolute;
                bottom: -70px;
                right: -30px;
              }
            }
            .c-bottom{
              margin-top: 90px;
              width: 100%;
              overflow: hidden;
              .c-item{
                position: absolute;
                left: 0;
                bottom: 56px;
                padding-left: 56px;
                text-align: left;
                width: 100%;
                img{
                  height: 48px;
                  margin-bottom: 18px;
                }
              }
            }
          }
        }
      }
    }
    .activities{
      padding: 0 40px;
      text-align: center;
      .analyze{
        display: block;
        margin-top: 100px;
        padding-bottom: 40px;
        @include border(1px, $mark-4);
        .avader{
          position: relative;
          &::after{
            content: " ";
            position: absolute;
            width:100px;
            height:24px;
            background-color: rgba(30,136,245,.9);
            top: 0;
            left: 0;
            border-radius:0px 0px 6px 0px;
          }
          img{
            // width: 100%;
            object-fit: cover;
            height: 366px;
            width: 100%;
          }
        }
        .text{
          margin-top: 28px;
          padding: 0 40px;
          text-align: left;
          h1{
            font-weight: 400;
            color: #000;
          }
          p{
            margin-top: 20px;
            text-align: left;
          }
        }
      }
      .a-tabs{
        display: block;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        .a-item{
          flex-basis: 316px;
          .avader{
            height: 156px;
            // width: 100%;
            img{
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .text{
            margin-top: 16px;
            p{
              text-align: left;
              color: #000;
            }
          }
        }
      }
    }
    .cooperative{
      margin-top: 80px;
      padding: 0 40px;
      // padding-bottom: 120px;
      margin-bottom: 120px;
      .partener{
        width: 100%;
        margin-top: 30px;
        img{
          width: 100%;
        }
      }
    }
  // }
  @keyframes arrowDown {
    0%,100% {
      opacity: .5;
      transform: translateY(0);
    }
    50% {
      opacity: 1;
      transform: translateY(10px);
    }
  }
</style>

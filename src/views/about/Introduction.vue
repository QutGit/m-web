<template>
  <div class="introduction">
    <div class="about">
      <div class="title">
        <Title bg-text="ABOUT US" title="关于霖珑云科" remark=" " />
      </div>
      <div class="content">
        <div class="text">
          <p class="text-mark3 text-m">霖珑云科是一家以技术与服务双驱动的人力薪税智能一站式服务供应商，依托覆盖全国的 200+ 直营服务网点及灵活高效的 HR SaaS 平台，为企业灵活用工、社保薪税、人事外包、综合福利提供线上线下全场景、一站式服务，帮助企业合规降本增效、防控用工风险、为人才与组织发展赋能。</p>
        </div>
        <div class="text yellow">
          <p class="text-mark3 text-m">目前霖珑云科已为阿里巴巴、百度、京东、途牛、饿了么、蒙牛、拉夏贝尔等 3000 余家头部企业、50000 余家中小企业提供优质的人力资源共享服务，年服务人次逾 300 万，年平台流水逾 100 亿元，并始终保持高速增长。</p>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="title">
        <Title bg-text="OUR TEAM" title="高管团队" remark=" " />
      </div>
      <div class="t-list">
        <div class="t-item">
          <img class="t-1" src="../../assets/bg-grace.png" alt="">
          <div class="avader">
            <img src="../../assets/grace.png" alt="">
          </div>
          <div class="text">
            <h1 class="text-gray text-xl">高萍</h1>
            <p class="text-black text-s">霖珑云科董事长</p>
            <p class="text-black text-s">长江商学院 EMBA</p>
            <p class="text-black text-s">行业投资人及并购专家</p>
            <p class="text-black text-s">专注人力资源服务十余年</p>
            <p class="text-black text-s">致力于推动中国人力资源管理从事务性向战略型转变</p>
          </div>
        </div>
        <div class="t-item">
          <img class="t-2" src="../../assets/bg-hzy.png" alt="">
          <div class="avader">
            <img src="../../assets/hzy.png" alt="">
          </div>
          <div class="text">
            <h1 class="text-gray text-xl">韩志勇</h1>
            <p class="text-black text-s">霖珑云科 CEO</p>
            <p class="text-black text-s">中欧国际工商学院 EMBA</p>
            <p class="text-black text-s">曾任前百分点集团 、联想亚信副总裁、联想集团首任战略管理总监</p>
            <p class="text-black text-s">企业级软件及 IT 服务近 20 年从业经验</p>
            <p class="text-black text-s">创业及投资领域涉及大数据、SaaS、数据库营销、商务社交等多个方向</p>
          </div>
        </div>
        <div class="t-item">
          <img class="t-3" src="../../assets/bg-zk.png" alt="">
          <div class="avader">
            <img src="../../assets/zk.png" alt="">
          </div>
          <div class="text">
            <h1 class="text-gray text-xl">赵珂</h1>
            <p class="text-black text-s">霖珑云科 COO</p>
            <p class="text-black text-s">原上海外服、蓝海集团高管从业近 20 年的人力资源实战专家</p>
            <p class="text-black text-s">具有前瞻性视角和丰富的行业经验</p>
            <p class="text-black text-s">精通薪酬福利、成本优化、劳动用工、社保福利等各领域</p>
          </div>
        </div>
        <!-- <div class="t-item">
          <img class="t-4" src="../../assets/bg-hz.png" alt="">
          <div class="avader">
            <img src="../../assets/hz.png" alt="">
          </div>
          <div class="text">
            <h1 class="text-gray text-xl">黄喆</h1>
            <p class="text-black text-s">霖珑云科 CTO</p>
            <p class="text-black text-s">负责集团产品与研发工作</p>
            <p class="text-black text-s">微办公、霖珑云等多个核心产品创始人</p>
            <p class="text-black text-s">曾担任去哪儿网用户体验总监、百度 CRM 系统/凤巢/ 商桥等产品工作</p>
            <p class="text-black text-s">对人力资源管理、客户管理、供应链管理、支付体系、用户服务体系均有深刻的理解</p>
          </div>
        </div> -->
      </div>
    </div>
    <div class="develop">
      <div class="title">
        <Title bg-text="DEVELOP" title="发展历程" remark=" " />
      </div>
      <div class="d-tabs">
        <div class="d-content">
          <img src="https://static.weibangong.com/files/5d8885e6c5620938fa66d9ea-big" alt="">
          <div class="around" ref="around">
            <div class="circle c-1" ref="c1" :class="{'hidden': displayItems(0)}"><div :class="{'current': currentIndex == 0}"></div></div>
            <div class="circle c-2" ref="c2" :class="{'hidden': displayItems(1)}"><div :class="{'current': currentIndex == 1}"></div></div>
            <div class="circle c-3" ref="c3" :class="{'hidden': displayItems(2)}"><div :class="{'current': currentIndex == 2}"></div></div>
            <div class="circle c-4" ref="c4" :class="{'hidden': displayItems(3)}"><div :class="{'current': currentIndex == 3}"></div></div>
            <div class="circle c-5" ref="c5" :class="{'hidden': displayItems(4)}"><div :class="{'current': currentIndex == 4}"></div></div>
          </div>
          <div class="laywer"></div>
          <Swiper class="h-swiper" ref="cSwiper" :spaceBetween="1" :callback="changeSwiper" :changeStart="changeStart" :loop="loop" :effect="'fade'">
            <Slide class="slide">
              <div class="inside" :class="{'visiable fadeInRight': preIndex == 0}">
                <h1 class="text-xxl">2019</h1>
                <p class="text-black text-s">计划建成 300+ 直营服务机构及网点</p>
                <p class="text-black text-s">董事长高萍女士被授予西交利物浦大学创新生态导师</p>
                <p class="text-black text-s">灵活用工全场景服务平台—乐接活正式上线</p>
              </div>
            </Slide>
            <Slide class="slide">
              <div class="inside animated" :class="{'visiable fadeInRight': preIndex == 1}">
                <h1 class="text-xxl">2018</h1>
                <p class="text-black text-s">建成覆200+城市、30+省市的直营服务网点</p>
                <p class="text-black text-s">企业自发薪功能上线、上线发薪流水即突破2000万</p>
                <p class="text-black text-s">微办公着力打造人力资源、项目管理等垂直化场景应用功能 不木、奇鱼强强联合</p>
              </div>
            </Slide>
            <Slide class="slide">
              <div class="inside animated" :class="{'visiable fadeInRight': preIndex == 2}">
                <h1 class="text-xxl">2017</h1>
                <p class="text-black text-s">建成覆盖19省、70+城市的直营服务网点</p>
                <p class="text-black text-s">招才进宝、全国HRO系统陆续上线</p>
                <p class="text-black text-s">微办公推出“人工智能+CRM”的客户管理解决方案</p>
              </div>
            </Slide>
            <Slide class="slide">
              <div class="inside animated" :class="{'visiable fadeInRight': preIndex == 3}">
                <h1 class="text-xxl">2016</h1>
                <p class="text-black text-s">建成覆盖35+城市的直营服务网点</p>
                <p class="text-black text-s">获汇思集团战略投资</p>
                <p class="text-black text-s">微办公、招才进宝功能完善升级</p>
              </div>
            </Slide>
            <Slide class="slide">
              <div class="inside animated" :class="{'visiable fadeInRight': preIndex == 4}">
                <h1 class="text-xxl">2015</h1>
                <p class="text-black text-s">不木科技成立，招财进宝1.0版上线</p>
                <p class="text-black text-s">奇鱼时代成立，微办公提出一体化协同办公理念</p>
              </div>
            </Slide>
          </Swiper>
        </div>
      </div>
    </div>
    <div class="branch">
      <div class="title">
        <Title bg-text=" BRANCH" title="服务网点" remark=" " />
      </div>
      <div class="text">
        <p class="text-black text-m">280+ 全国直营网点、1v1 专属顾问</p>
      </div>
      <div class="avader">
        <img src="../../assets/map.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex';
import Title from '@/components/Title';
import Swiper from '@/components/Swiper';
import Slide from '@/components/Slide';
export default {
  name: 'Tntroduction',
  components: { Title, Swiper, Slide },
  data: function() {
    return {
      currentIndex: 0,
      text: '当前索引：',
      preIndex: 0,
      direction: '',
      circles: [ 4, 0, 1 ],
      loop: false,
      isClass: false
    }
  },
  mounted() {
    this.$around = this.$refs.around;
  },
  methods: {
    // 划动swiper 动画结束时执行
    changeSwiper(idx) {
      this.preIndex = idx;
    },
    // touchEnd时执行
    changeStart(idx) {
      this.currentIndex = idx;
      this.circles = this.getArrs(idx);
      this.$around.style.transform = `rotate(${idx * -72}deg)`;
    },
    displayItems(idx) {
      return this.circles.indexOf(idx) < 0;
    },
    getArrs(index) {
      let arr = [];
      arr[1] = index;
      if (index === 0) {
        arr[0] = 4;
        arr[2] = index + 1;
      } else if (index === 4) {
        arr[0] = index - 1;
        arr[2] = 0;
      } else {
        arr[0] = index - 1;
        arr[2] = index + 1;
      }
      return arr;
    }
  }
}
</script>
<style lang="scss" scoped>
    .introduction{
      text-align: center;
      width: 100%;
      height: 100%;
      .about{
        .content{
          padding: 0 40px 80px;
          text-align: left;
          .text{
            position: relative;
            padding-left: 36px;
            &::after{
              content: ' ';
              width: 16px;
              height: 16px;
              border-radius: 50%;
              position: absolute;
              left: 0;
              top: 14px;
              background: #1E82F0;
            }
            &:last-child{
              margin-top: 40px;
              line-height: 40px;
              &::after{
                background: #FFA006;
              }
            }
          }
        }
      }
      .team{
        background:rgba(30,136,245,.03);
        overflow: hidden;
        padding-bottom: 80px;
        .title {
          margin-top: 60px;
        }
        .t-list{
          margin-top: 60px;
          padding: 0 40px;
          .t-item{
            background: $white;
            box-shadow:0px 11px 18px 0px rgba(30,136,245,0.06);
            border-radius:11px;
            display: flex;
            padding: 56px 30px 50px 48px;
            border-radius:12px;
            // height: 440px;
            position: relative;
            >img{
              position: absolute;
              bottom: 0;
              left: 0;
            }
            .t-1{
              width: 174px;
              height: 168px;
            }
            .t-2{
              width: 204px;
              height: 156px;
            }
            .t-3{
              width: 184px;
              height: 184px;
            }
            .t-4{
              width: 206px;
              height: 180px;
            }
            &:not(:first-child){
              margin-top: 60px;
            }
            .avader{
              width: 128px;
              height: 128px;
              position: relative;
              img{
                width: 128px;
              }
            }
            .text{
              margin-left: 46px;
              text-align: left;
              h1{
                position: relative;
                margin-bottom: 24px;
                margin-left: 12px;
                &::after{
                  content: ' ';
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  left: -12px;
                  width: 6px;
                  height: 26px;
                  background: #1E82F0;
                }
              }
              p{
                &:not(:first-child){
                  margin-top: 10px;
                }
              }
            }
          }
        }
      }
      .develop{
        padding-top: 40px;
        .d-tabs{
          margin-top: 40px;
          .d-content{
            background: url(https://static.weibangong.com/files/5d8dde76752660afcfc95d03-big) 0 -20px no-repeat;
            background-size: contain;
            background-color: $white;
            padding: 25px 40px;
            position: relative;
            overflow: hidden;
            >img{
              width: 678px;
              position: absolute;
              top: 20px;
              left: 50%;
              transform: translateX(-50%);
            }
            .laywer{
              width: 100%;
              height: 250px;
              background: #fff;
              position: absolute;
              bottom: 0;
              right: 0;
            }
            .around{
              width: 676px;
              height: 676px;
              border-radius: 50%;
              position: relative;
              right: 2px;
              transition: .4s all linear;
              margin-right: 10px;
              // border: 1px solid red;
              .current{
                transform: scale(2);
                transition: .4s transform linear;
                margin-left: -14px!important;
              }
              .scales{
                transform: scale(1);
                transition: .4s transform linear;
              }
              .hidden{
                opacity: 0;
                transition: .5s all linear;
              }
              .rotate{
                transition: 1s transform linear;
                transform: rotate(-90deg);
              }
              .circle{
                position: absolute;
                z-index: 79;
                left: 50%;
                width: 40px;
                height: 40px;
                margin-left: -10px;
                margin-top: -20px;
                display: flex;
                justify-content: center;
                align-items: center;
                >div{
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                }
              }
              .c-1{
                div{
                  background: #1E82F0;
                }
              }
              .c-2{
                transform-origin: 10px 358px;
                transform: rotate(72deg);
                div{
                  background: #FE8541;
                }
              }
              .c-3{
                transform: rotate(144deg);
                transform-origin: 10px 358px;
                div{
                  background: #1E82F0;
                }
              }
              .c-4{
                transform-origin: 10px 358px;
                transform: rotate(216deg);
                div{
                  background: #FE8541;
                }
              }
              .c-5{
                transform-origin: 10px 358px;
                transform: rotate(288deg);
                div{
                  background: #FE8541;
                }
              }
            }
            .h-swiper{
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              z-index: 80;
              .visiable{
                visibility: visible!important;
              }
              .slide{
                width: 100%;
                height: 480px;
                padding: 100px 38px 70px;
                margin-left: 6px;
                .inside{
                  padding: 0 120px;
                  visibility: hidden;
                  h1{
                    color: #1E82F0;
                    margin-bottom: 40px;
                  }
                  p{
                    &:not(:first-child){
                      margin-top: 24px;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .branch{
        margin-top: -130px;
        .avader{
          margin-top: 58px;
          img{
            width: 100%;
          }
        }
      }
      .animated {
        animation-duration: .4s;
        animation-fill-mode: both;
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(-10px, 10px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translate3d(10px, 10px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      .fadeInRight {
        animation-name: fadeInRight;
      }
      .fadeInUp {
        animation-name: fadeInUp;
      }
      @keyframes circle {
        0% {
        transform: rotate(360deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }
</style>

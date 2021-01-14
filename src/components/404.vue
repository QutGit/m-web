<template>
  <div class="notfound">
    <div class="content">
      <img src="https://static.weibangong.com/files/5da95eb0643273b5eccf89d5-big" alt="">
      <h1 class="text-m text-black">哎呀，页面丢失了，换个网页试试吧~</h1>
      <p class="text-s">Sorry，page not found！</p>
      <div class="link">
        <router-link to="/" replace class="text-m text-white">返回</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Notfound'
}
</script>
<style lang="scss" scoped>
    .notfound{
      padding-top: 188px;
      .content{
        text-align: center;
        img{
          width: 554px;
        }
        h1{
          font-weight: 500;
          margin-top: 28px;
        }
        p{
          color: #999999;
          margin-top: 12px;
          font-weight: 400;
          font-family: "PingFang SC";
        }
        .link{
          margin-top: 80px;
          a{
            display: inline-block;
            width:180px;
            line-height:60px;
            background:rgba(30,136,245,1);
            border-radius:8px;
            &:hover{
              text-decoration: none;
            }
          }
        }
      }
    }
</style>

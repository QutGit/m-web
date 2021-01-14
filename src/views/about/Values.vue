<template>
  <div class="values">
    <div class="title">
      <Title bg-text="VALUES" title="霖珑价值观" remark=" " />
    </div>
    <div class="content">
      <h1 class="text-black text-l">我们的愿景</h1>
      <p class="text-mark3 text-m">科技让劳动力更高效</p>
      <h1 class="text-black text-l">我们的使命</h1>
      <p class="text-mark3 text-m">让人才发挥价值、让组织激发活力</p>
      <h1 class="text-black text-l">我们的价值观</h1>
      <p class="text-mark3 text-m">客户至上：以客户需求为导向、以客户成功为目标，追求极致客户体验。 </p>
      <p class="text-mark3 text-m">合规至上：有原则、有底线，坚决保障客户权益，坚决合法、合理、合规。 </p>
      <p class="text-mark3 text-m">创新至上：全流程服务创新、管理创新、技术创新，创新思维驱动企业成长。 </p>
      <p class="text-mark3 text-m">人才至上：为有主人翁精神的、不断成长迭代的优秀人才提供良性机制和成功的土壤。</p>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex';
import Title from '@/components/Title';
export default {
  name: 'Values',
  components: { Title },
  data: function() {
    return {
      tabIndex: 1
    }
  }
}
</script>
<style lang="scss" scoped>
    .values{
      text-align: center;
      width: 100%;
      height: 100%;
      .content {
        padding: 0 40px;
        h1{
          margin-top: 50px;
          margin-bottom: 24px;
        }
        p{
          margin-bottom: 20px;
          line-height: 40px;
        }
      }
    }
</style>

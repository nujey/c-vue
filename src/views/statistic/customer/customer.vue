<template>
  <div class="customer">
    <div class="statistic-data">
      <div class="echarts-box">
        <line-customer @handleDayTab="handleDayTab"></line-customer>
      </div>
      <div class="total-data">
        <p class="total-data__all">
          <span>100</span>
          <span><i class="total-icon icon-one"></i>新增粉丝</span>
        </p>
        <p class="total-data__maxday">
          <span>1000</span>
          <span><i class="total-icon icon-two"></i>跑路粉丝</span>
        </p>
        <p class="total-data__midday">
          <span>1000</span>
          <span><i class="total-icon icon-three"></i>净增粉丝</span>
        </p>
      </div>
    </div>
    <div class="statistic-navigator">
      <p class="income" @click="hanldeIncomeDetail">
        <span>微信总粉丝</span>
        <span>100203920</span>
      </p>
    </div>
    <static-bottom></static-bottom>
  </div>
</template>
<script>
import LineCustomer from '../../../components/custoLine/index.vue'

export default {
  data() {
    return {
      // dayText: '7天'
    }
  },
  components: {
    LineCustomer
  },
  methods: {
    // 点击tab的时候
    handleDayTab(index) {
      // this.dayText = index === 0 ? '7天' : index === 1 ? '30天' : '90天'
    },
    // 跳转到收支明细
    hanldeIncomeDetail() {
      this.$router.replace({
        name: 'income-detail'
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.customer
  width 100%;
  height 100%;
  background #F5F5F5;
.statistic-data
  height 305px;
  width 100%;
  background -linear-gradient(top, #FF8B4D 40%, #FF5533);
  background -webkit-linear-gradient(top, #FF8B4D 40%, #FF5533);
  .echarts-box
    height 230px;
.statistic-navigator
  margin-top: 10px;
  color #333;
  font-size 16px;
  padding 0 13px;
  background #fff;
  .income
    display flex;
    justify-content space-between;
    align-items center;
    height 44px;
    border-top 1px solid #F5F5F5;
    &__price
      color #FF2C40;
    .icon-throw
      color #999;
</style>

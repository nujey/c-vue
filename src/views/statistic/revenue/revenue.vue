<template>
  <div class="revenue">
    <div class="statistic-data">
      <div class="echarts-box">
        <line-statis @handleDayTab="handleDayTab"></line-statis>
      </div>
      <div class="total-data">
        <p class="total-data__all">
          <span>¥100.00</span>
          <span>{{dayText}}收入</span>
        </p>
        <p class="total-data__maxday">
          <span>¥1000.00</span>
          <span>单日最高</span>
        </p>
        <p class="total-data__midday">
          <span>¥0.00</span>
          <span>日均</span>
        </p>
      </div>
    </div>
    <div class="statistic-navigator">
      <p class="income">
        <span>总收入</span>
        <span class="income__price">300000元</span>
      </p>
      <p class="income" @click="hanldeIncomeDetail">
        <span>收支明细</span>
        <span><i class="iconfont hs-icon-you icon-throw"></i></span>
      </p>
    </div>
    <static-bottom></static-bottom>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dayText: '7天'
    }
  },
  methods: {
    // 点击tab的时候
    handleDayTab(index) {
      this.dayText = index === 0 ? '7天' : index === 1 ? '30天' : '90天'
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
.revenue
  width 100%;
  height 100%;
  background #F5F5F5;
.statistic-data
  height 305px;
  width 100%;
  background -linear-gradient(top, #FF5E5B 40%, #FF403D);
  background -webkit-linear-gradient(top, #FF5E5B 40%, #FF403D);
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

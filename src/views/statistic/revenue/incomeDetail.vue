/**
 * 支出明细
 */
<template>
  <div class="income-detail">
    <div class="income-list" v-for="(item, index) in incomeList" :key="index">
      <p class="income-list__detail">
        <span>{{item.name}}</span>
        <span :class="item.type === '-' ? 'red-income' : 'green-income' ">{{item.type === '-' ? `-${item.num}` : `+${item.num}`}}</span>
      </p>
      <p class="income-list__detail">
        <span class="income-list__detail__time">{{item.time}}</span>
        <span>{{item.text}}</span>
      </p>
    </div>
  </div>
</template>
<script>
const incomeList = [{
  name: '订单结算',
  type: '-',
  num: '0.01',
  time: '17/02/28',
  text: '微信支付'
}, {
  name: '退款',
  type: '+',
  num: '10.01',
  time: '17/02/30',
  text: '微信支付'
}]
export default {
  data() {
    return {
      incomeList
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.income-detail
  width 100%;
  height 100%;
  background #f5f5f5;
  padding-top 10px;
  .income-list
    height 64px;
    font-size 13px;
    background #fff;
    color #333;
    border-bottom 1px solid #f5f5f5;
    display flex;
    flex-direction column;
    &__detail
      padding 5px 13px 0;
      box-sizing border-box;
      line-height 30px;
      display flex;
      justify-content space-between;
      align-items center;
      .income-list__detail__time
        color #999;
      .red-income
        color #FF2C40;
        font-size 16px;
      .green-income
        color #09BB07;
        font-size 16px;
</style>

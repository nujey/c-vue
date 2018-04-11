<template>
  <div class="format">
    <div class="format-topper">
      <img class="format-topper__image" src="../../../../assets/images/logo.png" alt="">
      <p>
        <span>请选择规则属性</span>
        <span class="format-topper__price">价格：699</span>
      </p>
      <i class="iconfont hs-icon-cha format-close" @click="handleCloseFormat"></i>
    </div>
    <div class="format-rules">
      <p class="format-rules__title">颜色</p>
      <p class="format-list">
        <span class="format-rules__list format-rules__active">经典黑</span>
        <span class="format-rules__list">经典黑</span>
        <span class="format-rules__list">经典黑</span>
        <span class="format-rules__list">经典黑</span>
        <span class="format-rules__list">经典黑</span>
        <span class="format-rules__list">经典黑</span>
        <span class="format-rules__list">经典黑</span>
        <span class="format-rules__list">经典黑</span>
      </p>
    </div>
    <div class="format-rules">
      <p class="format-rules__title">尺寸</p>
      <p class="format-list">
        <span class="format-rules__list format-rules__active">12cm</span>
        <span class="format-rules__list">13cm</span>
        <span class="format-rules__list">14cm</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleCloseFormat() {
      this.$emit('handleCloseFormat')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.format
  position absolute;
  bottom 0;
  left 0;
  right 0;
  // width 100%;
  // min-height 355px;
  background #fff;
  padding 22px 13px 20px 13px;
.format-topper
    color #333;
    display flex;
    position relative;
    margin-bottom 3px;
    &__image
      width 89px;
      height 89px;
      margin-right 9px;
    & > p
      font-size 14px;
      display flex;
      flex-direction column-reverse;
    .format-topper__price
      color #FF2C40
    .format-close
      position absolute;
      top 0;
      right 10px;
      font-size 20px;
.format-rules
  font-size 14px;
  &__title
    line-height 42px;
  .format-list
    .format-rules__list
      display inline-block;
      border 1px solid #999;
      padding 8px 12px;
      margin 0 10px 10px 0;
      border-radius 4px;
    .format-rules__active
      border 1px solid #3197FA;
      color #3197FA;
</style>

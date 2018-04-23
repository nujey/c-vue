<template>
  <div class="goods" id="goods" ref="goods">
    <!-- 顶部轮播 -->
    <div class="swiper-goods">
      <goods-swiper :listData="swiperList"></goods-swiper>
    </div>
    <div class="goods-detail">
      <p class="goods-detail__name">{{goodsData.title}}</p>
      <span class="goods-detail__price">¥{{goodsData.show_price}}</span>
      <div class="goods-detail__number">
        <span>运费：{{goodsData.default_feight}}</span>
        <span>销量：{{goodsData.sold_num}}</span>
        <span>剩余：{{goodsData.stock}}</span>
      </div>
    </div>
    <div class="goods-norms" @click="handleShowSpec">
      选择: &nbsp;<span>规格</span>
      <i class="iconfont hs-icon-you"></i>
    </div>
    <!-- 商品评价 -->
    <div class="goods-evaluate">
      <div class="goods-evaluate__all">全部评价({{goodsData.evaluate_num}})<span>查看评价<i class="iconfont hs-icon-you"></i></span></div>
      <goods-evaluate :evaluateList="evaluateList"></goods-evaluate>
    </div>
    <!-- 商品详情 -->
    <div class="goods-intro">
      <p class="goods-intro__title">
        <img src="../../../assets/images/goods-detail.png" alt="">
      </p>
      <img src="../../../assets/images/logo.png" alt="" class="goods-intro__image">
    </div>
    <!-- 规格弹窗 -->
    <div class="goods-spec" v-if="specStatus" @click.self="specStatus = false">
      <goods-format @handleCloseFormat="specStatus = false"></goods-format>
    </div>
    <div class="testScroll" ref="testdom" v-for="(item, index) in domlist" :key="index">
      <span @click="handleStatistic(index)">数据统计页面{{index}}</span>
    </div>
  </div>
</template>
<script>
import goodsSwiper from './components/goods-swiper'
import goodsFormat from './components/goods-format'
const domlist = [{
  item: 1
}, {
  item: 1
}, {
  item: 1
}, {
  item: 1
}, {
  item: 1
}, {
  item: 1
}, {
  item: 1
}, {
  item: 1
}, {
  item: 1
}, {
  item: 1
}, {
  item: 1
}, {
  item: 1
}, {
  item: 1
}]
export default {
  data() {
    return {
      title: '商品详情',
      // 商品规格弹窗 默认隐藏
      specStatus: false,
      // 商品详情数据
      goodsData: {},
      // 商品评价列表
      evaluateList: [],
      // 轮播图列表
      swiperList: [],
      domlist
    }
  },
  components: {
    goodsSwiper,
    goodsFormat
  },
  mounted() {
    // 接口请求的时候 都是按照封装起来的 类似于模版
    if (window.localStorage.getItem('pos')) {
      const pos = window.localStorage.getItem('pos')
      document.body.scrollTop = pos - 200
      document.documentElement.scrollTop = pos
    }
  },
  methods: {
    /**
     * 点击规格弹出规格弹窗
    */
    handleShowSpec(p) {
      this.specStatus = true
    },
    handleStatistic(index) {
      const dom = document.getElementById('goods')
      window.localStorage.setItem('pos', this.$refs.testdom[index].offsetTop)
      this.$router.push({
        name: 'flow'
      })
    },
    /**
     * 请求商品规格
    */
    handleQueryNorms() {
      // 1
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.goods
  background #f5f5f5;
  overflow scroll;
.swiper-goods
  width 100%;
  height 375px;
  // background #1d94fa;
  position relative;
.goods-detail
  width calc(100% - 26px);
  // height 137px;
  padding 0 12px;
  text-align left;
  font-size 17px;
  background #fff;
  overflow-x hidden;
  &__name
    line-height 26px;
    padding-top 20px;
  &__price
    line-height 1;
    color #FF2C40;
    font-weight 500;
    margin 10px 0 10px 0;
    display inline-block;
  &__number
    width 100%;
    display flex;
    justify-content space-between;
    line-height 32px;
    font-size 12px;
    color #666;
    position relative;
    &::before
      width 107%;
      height 1px;
      background  #DCDCDC;
      content '';
      position absolute;
      left -13px;
.goods-norms
  min-height 44px;
  margin 10px 0;
  padding 0 12px;
  background #fff;
  line-height 20px;
  color #333;
  font-size 15px;
  line-height 44px;
  position relative;
  & > i
    color #666;
    position absolute;
    right 12px;
.goods-evaluate
  background #fff;
  font-size 16px;
  padding 0 12px;
  margin-bottom 10px;
  &__all
    line-height 44px;
    border-bottom 1px solid #DCDCDC;
  span
    font-size 15px;
    color #666;
    float right;
.goods-intro
  background #fff;
  padding 0 12px;
  &__title
    line-height 58px;
    text-align center;
    & > img
      width 74px;
      vertical-align middle;
  &__image
    width 100%;
    vertical-align top;
    margin-bottom 20px;
.goods-spec
  position absolute;
  top 0;
  left 0;
  bottom 0;
  right 0;
  background rgba(0, 0, 0, .6);
  z-index 1000;
</style>

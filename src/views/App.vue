<template>
  <div id="app" class="clearfix">
    <span @click="handleDetail">商品详情页</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleStatistic() {
      this.$router.push({
        name: 'flow'
      })
    },
    handleDetail() {
      this.$router.push({
        name: 'goods-detail'
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    const pos = document.documentElement.scrollTop
    console.log(pos)
    next()
  }
}
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'PingFang-SC-Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
.testScroll {
  width 400px;
  height 50px;
  border 1px solid #f00;
  text-align center;
  line-height 30px;
  margin-top 20px;
}
</style>

<template>
  <div class="echarts-line">
    <div class="echarts-line__topper">
      <span v-for="(item, index) in dayTab" :key="index"
            :class="activeIndex === item.key ? 'tab-active' : ''"
            @click="handleTabDay(index)">{{item.text}}</span>
    </div>
    <div class="echarts-main" id="echart-line"></div>
  </div>
</template>
<script>
// 引入图标插件
import echarts from 'echarts'
import Option from './flowLine'
// import TimeDay from './time'

const dayTab = [{
  text: '7天',
  key: 0
}, {
  text: '30天',
  key: 1
}, {
  text: '90天',
  key: 2
}]
export default {
  data() {
    return {
      dayTab,
      // 当前点击的tab
      activeIndex: 0,
      seriesData: [10, 120, 301, 120, 300, 400, 30]
    }
  },
  mounted() {
    // let day = new TimeDay
    this.handleDrawLine(this.seriesData)
  },
  methods: {
    /**
     * 点击天数tab的时候
     * @param {Number} index 索引
    */
    handleTabDay(index) {
      this.activeIndex = index
      const data = [8 * (index + 1), 3 * (index + 4), 5 * (index + 9), 8 * (index + 8), 1 * (index + 5), 6 * (index + 3), 10 * (index + 1)]
      this.handleDrawLine(data)
      this.$emit('handleDayTab', index)
    },
    /**
     * 根据数据画图标
    */
    handleDrawLine(seriesData) {
      echarts.dispose(document.getElementById('echart-line'))
      let lineEcharts = echarts.init(document.getElementById('echart-line'))
      const tooltip = {
        trigger: 'axis',
        confine: true,
        textStyle: {
          fontSize: 12
        }
      }
      const series = [{
        name: '访客数',
        type: 'line',
        smooth: true,
        symbolSize: 3,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 3,
            borderColor: '#09BB07',
            color: '#fff'
          }
        },
        data: [200, 130, 85, 40, 100, 20, 90]
      }, {
        name: '浏览量',
        type: 'line',
        smooth: true,
        symbolSize: 3,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 3,
            borderColor: '#FF2C40',
            color: '#fff'
          }
        },
        data: [20, 330, 50, 140, 200, 30, 180]
      }]
      let options = Object.assign(Option, {tooltip}, {series})
      lineEcharts.setOption(options)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.echarts-line
  color #fff;
  width 100%;
  padding-top 11px;
  &__topper
    width 234px;
    height 30px;
    margin 0px auto 17px;
    display flex;
    justify-content space-between;
    align-items center;
    background rgba(255, 255, 255, .3)
    color rgba(255, 255, 255, .5)
    border-radius 30px;
    & >  span
      padding 2px 20px;
    & > .tab-active
      background rgba(255, 255, 255, 1)
      color #2CE0FF;
      opacity 1;
      border-radius 30px;
      position relative;
      &:after
        position absolute;
        box-sizing border-box;
        right 12px;
        top 15px;
        content '';
        width 3px;
        height 3px;
        border-radius 50%;
        background #2CE0FF;
      &:before
        position absolute;
        box-sizing border-box;
        left 12px;
        top 15px;
        content '';
        width 3px;
        height 3px;
        border-radius 50%;
        background #2CE0FF;
.echarts-main
  width 100%;
  height 175px;
</style>

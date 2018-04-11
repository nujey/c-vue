let Option = {
  grid: {
    top: 5,
    bottom: 25,
    left: 24,
    right: 24,
    containLabel: true
  },
  xAxis: [{
    position: 'bottom',
    offset: 10,
    boundaryGap: 0,
    axisLine: {
      onZero: false,
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#fff'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#fff'
      }
    },
    data: ['2月1号', '', '', '', '', '', '2月8号']
  }, {
    type: 'category',
    position: 'top',
    boundaryGap: false,
    axisLine: {
      onZero: false,
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      show: false
    }
  }],
  yAxis: [{
    type: 'value',
    boundaryGap: false,
    axisLine: {
      onZero: false,
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      show: false,
      length: 2
    },
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }
  }],
  color: ['#fff']
}
export default Option

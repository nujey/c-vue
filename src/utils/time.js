import moment from 'moment'

// 封装函数 传参是几天
function laterDay(number) {
  return moment().add('days', number).format('M日DD日')
}
class TimeDay {
  laterSenvenDay(n) {
    const arrayDay = []
    for (let i = 0; i < n; i++) {
      arrayDay.push(laterDay(i))
    }
    return arrayDay
  }
}

export default TimeDay

/**
 * 该包是根据moment.js来做的二次封装 用来返回想要的日期数组等 API后续更新
 * @author zhangfeng 【github nujey】
 * @version 0.0.1 
 */
import moment from 'moment'

/**
 * 返回往后几月几号的日期格式
 * @param {number} num 多少天后 是几月几号 比如当前时间是 1月1日 number = 1 返回 1月2日
 */
function laterDay(num) {
  return moment().add('days', num).format('M日DD日')
}
class TimeDay {
  /**
   * 返回n天内的连续数据 格式为几月几号
   * @param {number} n 返回n天之内的数组 比如当前时间是 1月1号  n = 2 那么返回就是 ['1月1号', '1月2号']
   */
  dayContinuesData(n) {
    const arrayDay = []
    for (let i = 0; i < n; i++) {
      arrayDay.push(laterDay(i))
    }
    return arrayDay
  }
  /**
   * 返回的数据是一个长度为2的时间段数组 比如1月1号～2月1号
   * @param {number} first 返回第一个时间
   * @param {number} last 返回第二个时间
   */
  dayBreakOffData(first, last) {
    const arrayDay = []
    arrayDay.push(laterDay(first), laterDay(last))
    return arrayDay
  }
}

export default TimeDay

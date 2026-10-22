const timesData = require('./timesData')
const { calcWorkingHours } = require('./AverageWorkingHours')

function run() {
  const result = calcWorkingHours(timesData)
  console.log('每日打卡时长：')
  result.daily.forEach((d) => {
    const leaveTip = d.leave ? `  (请假计入在岗: ${d.leave})` : ''
    console.log(`${d.day}  上班: ${d.start}  下班: ${d.end}  时长: ${d.hours}h${leaveTip}`)
  })
  console.log(`\n打卡天数：${result.workDays} 天`)
  console.log(`累计打卡时长：${result.totalHours}h`)
  console.log(`平均每日打卡时长：${result.averageHours}h`)
}

module.exports = {
  name: 'WorkingHours',
  description: '统计每日打卡时长（不扣除午休）',
  run,
}

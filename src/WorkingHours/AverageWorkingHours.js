

/**
 * 将时间字符串 "2026-07-01 08:44:00" 转为 Date 对象
 * @param {string} timeStr
 * @returns {Date}
 */
function parseTime(timeStr) {
  return new Date(timeStr.replace(/-/g, '/'))
}

/**
 * 计算单日打卡时长（小时，不扣除中午午休时间）
 * @param {object} dayData timesData 中单日数据
 * @returns {number|null} 时长（小时），无打卡记录返回 null
 */
function calcDayDuration(dayData) {
  if (dayData.subTitle !== '出勤') return null
  const task = dayData.schdultTask && dayData.schdultTask[0]
  if (!task || !task.records || !task.records[0]) return null

  const recordPair = task.records[0]
  const startRecord = recordPair[0]
  const endRecord = recordPair[1]
  if (!startRecord || !endRecord) return null

  const start = startRecord.timeDetail
  const end = endRecord.timeDetail
  if (!start || !end) return null

  const startDate = parseTime(start)
  const endDate = parseTime(end)
  const diffMs = endDate - startDate
  if (isNaN(diffMs) || diffMs < 0) return null

  return diffMs / (1000 * 60 * 60)
}

/**
 * 统计打卡时长
 * @param {Array} data timesData 数组
 * @returns {{ daily: Array, totalHours: number, averageHours: number, workDays: number }}
 */
function calcWorkingHours(data) {
  const daily = []
  let totalHours = 0
  let workDays = 0

  data.forEach((dayData) => {
    const hours = calcDayDuration(dayData)
    if (hours !== null) {
      daily.push({
        day: dayData.day,
        start: dayData.schdultTask[0].records[0][0].timeDetail,
        end: dayData.schdultTask[0].records[0][1].timeDetail,
        hours: Number(hours.toFixed(2)),
      })
      totalHours += hours
      workDays += 1
    }
  })

  return {
    daily,
    totalHours: Number(totalHours.toFixed(2)),
    averageHours: workDays ? Number((totalHours / workDays).toFixed(2)) : 0,
    workDays,
  }
}


module.exports = { calcWorkingHours, calcDayDuration }

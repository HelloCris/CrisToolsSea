


/**
 * 将时间字符串 "2026-07-01 08:44:00" 转为 Date 对象
 * @param {string} timeStr
 * @returns {Date}
 */
function parseTime(timeStr) {
  return new Date(timeStr.replace(/-/g, '/'))
}

/**
 * 将 Date 格式化为 "YYYY-MM-DD HH:mm:ss"
 * @param {Date} date
 * @returns {string}
 */
function formatTime(date) {
  const pad = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} `
    + `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

/**
 * 解析已通过的请假流程时间区间
 * workflow.subTitle 形如 "10-16 14:00 至 10-16 18:00"（不带年份）
 * @param {object} workflow 单日 workflow 项
 * @param {string} day 当日日期 "YYYY-MM-DD"，用于补全年份
 * @returns {{start: Date, end: Date, title: string, duration: string}|null}
 */
function parseLeaveInterval(workflow, day) {
  if (!workflow || workflow.type !== 'leave') return null
  if (workflow.applyStatus !== 'pass') return null
  // 已撤销的请假单不计入
  if (workflow.cancelRecordList && workflow.cancelRecordList.length > 0) return null

  const text = workflow.subTitle || ''
  const m = text.match(/(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})\s*至\s*(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})/)
  if (!m) return null

  const year = Number(day.slice(0, 4))
  const toDate = (mm, dd, hh, mi) => new Date(year, Number(mm) - 1, Number(dd), Number(hh), Number(mi))
  const start = toDate(m[1], m[2], m[3], m[4])
  const end = toDate(m[5], m[6], m[7], m[8])
  if (end <= start) {
    // 跨天（结束日期更早时按跨年处理，否则按跨天处理）
    if (end.getMonth() < start.getMonth()) {
      end.setFullYear(year + 1)
    } else {
      end.setDate(end.getDate() + 1)
    }
  }

  return { start, end, title: workflow.title || '请假', duration: workflow.duration || '' }
}

/**
 * 计算单日打卡时长（小时，不扣除中午午休时间）
 * 已通过的请假时间视同在岗，会向前后扩展有效打卡区间，
 * 例如 13:42 下班打卡、14:00-18:00 请假，则有效下班时间按 18:00 计算。
 * @param {object} dayData timesData 中单日数据
 * @returns {{start: Date, end: Date, hours: number, leaves: Array}|null}
 *  无打卡记录返回 null
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

  const clockStart = parseTime(start)
  const clockEnd = parseTime(end)
  const diffMs = clockEnd - clockStart
  if (isNaN(diffMs) || diffMs < 0) return null

  // 有效打卡区间：实际打卡区间 ∪ 当日已通过请假区间
  let effectiveStart = clockStart
  let effectiveEnd = clockEnd
  const leaves = []
  ;(dayData.workflow || []).forEach((workflow) => {
    const leave = parseLeaveInterval(workflow, dayData.day)
    if (!leave) return
    leaves.push(leave)
    if (leave.start < effectiveStart) effectiveStart = leave.start
    if (leave.end > effectiveEnd) effectiveEnd = leave.end
  })

  return {
    start: effectiveStart,
    end: effectiveEnd,
    hours: (effectiveEnd - effectiveStart) / (1000 * 60 * 60),
    leaves,
  }
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
    const day = calcDayDuration(dayData)
    if (day !== null) {
      daily.push({
        day: dayData.day,
        start: formatTime(day.start),
        end: formatTime(day.end),
        hours: Number(day.hours.toFixed(2)),
        leave: day.leaves.length
          ? day.leaves.map((l) => `${l.title}${l.duration ? ` ${l.duration}` : ''}`).join('，')
          : '',
      })
      totalHours += day.hours
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

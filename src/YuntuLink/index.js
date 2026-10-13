const token = require('./queryUser')
const queryYuntuID = require('./queryYuntuID')

const DETAIL_URL = 'https://yuntu.haier.net/#/InformationDetails'

async function run() {
  const res = await queryYuntuID(token)
  const records = (res.data && res.data.records) || []

  console.log(`共 ${records.length} 条：\n`)
  records.forEach((item) => {
    console.log(`${DETAIL_URL}?id=${item.id}`)
  })
}

module.exports = {
  name: 'YuntuLink',
  description: '查询云图资讯并输出每条详情链接',
  run,
}

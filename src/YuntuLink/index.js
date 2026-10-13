const { execSync } = require('child_process')
const token = require('./queryUser')
const queryYuntuID = require('./queryYuntuID')

const DETAIL_URL = 'https://yuntu.haier.net/#/InformationDetails'

function buildUrl(id) {
  return `${DETAIL_URL}?id=${id}&informationMdType=zxsd`
}

// 在默认浏览器中打开第 a 条到第 b 条（1-based，含端点）
function openRange(links, a, b) {
  const start = Math.max(1, a)
  const end = Math.min(links.length, b)
  if (start > end) {
    console.log(`范围无效：a=${a} b=${b}，有效区间 1~${links.length}`)
    return
  }
  console.log(`\n正在用默认浏览器打开第 ${start}~${end} 条（共 ${end - start + 1} 条）…`)
  for (let i = start - 1; i < end; i++) {
    execSync(`open "${links[i]}"`)
  }
}

async function run() {
  const res = await queryYuntuID(token)
  const records = (res.data && res.data.records) || []
  const links = records.map((item) => buildUrl(item.id))

  console.log(`共 ${links.length} 条：\n`)
  links.forEach((url, idx) => console.log(`${idx + 1}. ${url}`))

  // 支持通过命令行参数指定打开区间，例如：npm start yuntu-link 1 5
  const cliArgs = process.argv.slice(3)
  if (cliArgs.length >= 2) {
    const a = Number(cliArgs[0])
    const b = Number(cliArgs[1])
    if (Number.isInteger(a) && Number.isInteger(b)) {
      openRange(links, a, b)
    } else {
      console.log('参数无效，示例：npm start yuntu-link 1 5')
    }
  }
}

module.exports = {
  name: 'YuntuLink',
  description: '查询云图资讯并输出每条详情链接（可指定区间在浏览器打开）',
  run,
  openRange,
  buildUrl,
}

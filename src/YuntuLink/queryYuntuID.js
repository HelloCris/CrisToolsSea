// curl --location 'https://yuntu.haier.net/hyztapi/hyzt/hyztinformationinfo/selectInformationPage?current=1&size=500&userLoginCode=25073704' \
// --header 'Accept: application/json, text/plain, */*' \
// --header 'Accept-Language: zh-CN,zh;q=0.9' \
// --header 'Cache-Control: no-cache' \
// --header 'Connection: keep-alive' \
// --header 'Pragma: no-cache' \
// --header 'Sec-Fetch-Dest: empty' \
// --header 'Sec-Fetch-Mode: cors' \
// --header 'Sec-Fetch-Site: same-origin' \
// --header 'contentType: application/json;charset=UTF-8' \
// --header 'token: xxx'

const BASE_URL = 'https://yuntu.haier.net/hyztapi/hyzt/hyztinformationinfo/selectInformationPage'

/**
 * 查询云图信息分页数据
 * @param {string} token 鉴权 token（必传）
 * @param {object} [options]
 * @param {number} [options.current=1] 页码
 * @param {number} [options.size=500] 每页条数
 * @param {string} [options.userLoginCode='25073704'] 登录人工号
 * @returns {Promise<object>} 接口响应 JSON
 */
async function queryYuntuID(token, { current = 1, size = 500, userLoginCode = '25073704' } = {}) {
  if (!token) throw new Error('缺少 token 参数')

  const query = new URLSearchParams({ current, size, userLoginCode })
  const res = await fetch(`${BASE_URL}?${query}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      contentType: 'application/json;charset=UTF-8',
      token,
    },
  })

  if (!res.ok) throw new Error(`请求失败：${res.status} ${res.statusText}`)
  return res.json()
}

module.exports = queryYuntuID

// mock：node src/YuntuLink/queryYuntuID.js '<token>'
if (require.main === module) {
  const token = process.argv[2]
  if (!token) {
    console.log('用法: node src/YuntuLink/queryYuntuID.js <token>')
    process.exit(1)
  }

  queryYuntuID(token)
    .then((data) => console.log(JSON.stringify(data, null, 2)))
    .catch((err) => console.error('mock 请求失败:', err.message))
}

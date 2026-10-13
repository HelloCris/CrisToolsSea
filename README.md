# cris-tools-sea

一个基于 Node.js 的 CRIS 项目实用工具集，支持模块化扩展，带有一个 'haier' 主题。

## 快速开始

```bash
# 查看所有可用工具
npm start 

# 运行指定工具
npm start working-hours
npm start yuntu-link



# 安装依赖
npm install

# 开发模式
npm run dev
npm run dev working-hours
npm run dev yuntu-link
npm start yuntu-link 1 5

```




## 现有工具

| 命令 | 模块 | 说明 |
|------|------|------|
| `npm start working-hours` | WorkingHours | 统计每日打卡时长（不扣除午休） |
| `npm start yuntu-link` | YuntuLink | 查询云图资讯并输出每条详情链接（token 配置在 `src/YuntuLink/queryUser.js`，过期需手动替换） |
| `npm start yuntu-link 1 5` | YuntuLink | 同上，并将第 1~5 条链接在默认浏览器中打开 |

## 添加新工具

在 `src/` 下新建目录，创建 `index.js` 并导出标准接口：

```
src/
└── YourModule/
    └── index.js
```

`index.js` 必须导出以下结构：

```js
module.exports = {
  name: '模块名称',
  description: '模块描述',
  run() {
    // 你的逻辑
  },
}
```

完成后自动生效，`npm start` 即可看到新模块，`npm start your-module` 运行。

## 目录结构

```
cris-tools/
├── main.js              # 入口，自动加载 src/ 下所有模块
├── package.json
├── README.md
└── src/
    ├── WorkingHours/
    │   ├── index.js     # 模块入口（导出 run 方法）
    │   ├── AverageWorkingHours.js  # 打卡时长计算逻辑
    │   └── timesData.js # 打卡原始数据
    └── YuntuLink/
        ├── index.js       # 模块入口，输出链接并可指定区间在浏览器打开
        ├── queryYuntuID.js # 云图资讯分页查询接口封装
        ├── queryUser.js   # 鉴权 token 配置
        └── yuntuData.js   # 云图相关数据
```

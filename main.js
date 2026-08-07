const path = require('path')
const fs = require('fs')

const srcDir = path.join(__dirname, 'src')
const modules = {}

if (fs.existsSync(srcDir)) {
  const dirs = fs.readdirSync(srcDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())

  dirs.forEach((dir) => {
    const entry = path.join(srcDir, dir.name, 'index.js')
    if (fs.existsSync(entry)) {
      try {
        const mod = require(entry)
        const key = dir.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/[^a-z0-9-]/g, '-')
        modules[key] = {
          name: mod.name || dir.name,
          description: mod.description || '',
          run: mod.run || (() => {}),
        }
      } catch (e) {
        console.error(`加载模块 ${dir.name} 失败:`, e.message)
      }
    }
  })
}

const args = process.argv.slice(2)
const target = args[0]

if (target) {
  const mod = modules[target.toLowerCase()]
  if (mod) {
    mod.run()
  } else {
    console.log(`未找到模块: ${target}`)
    printHelp()
  }
} else {
  printHelp()
}

function printHelp() {
  console.log('\n可用工具列表：\n')
  Object.keys(modules).forEach((key) => {
    const mod = modules[key]
    console.log(`  npm start ${key}    ${mod.description}`)
  })
  if (!Object.keys(modules).length) {
    console.log('  （暂无可用工具，请在 src/ 下创建模块）')
  }
  console.log()
}

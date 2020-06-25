const path = require('path')
const fs = require('fs')

const mngPackPath = path.join(__dirname, '../', 'hostile-waters-mngpack')

/**
 * 过滤掉指定目录
 * @param {*} name
 */
function filterDirectory(name) {
  const directoryFilter = [/ObjectBin/]
  return directoryFilter.some(function (reg) {
    return reg.test(name)
  })
}

/**
 * 过滤掉指定文件
 * @param {*} name
 */
function filterFile(name) {
  const fileFilter = [/Values.txt$/, /.ars$/]
  return fileFilter.some(function (reg) {
    return reg.test(name)
  })
}

/**
 * 清理不必要的解包文件
 */
function clearFiles(mngpackPath) {
  const files = fs.readdirSync(mngpackPath)
  files.forEach(function (item, index) {
    const newPath = path.join(mngpackPath, item)
    let stat = fs.lstatSync(newPath)
    if (stat.isDirectory() && !filterDirectory(item)) {
      clearFiles(newPath)
    } else if (!stat.isDirectory()) {
      if (!filterFile(item)) {
        fs.unlinkSync(newPath)
      }
    }
  })
}

/**
 * 清理空文件夹
 */
function clearEmptyDirectory(mngpackPath) {
  const files = fs.readdirSync(mngpackPath)
  files.forEach(function (item, index) {
    const newPath = path.join(mngpackPath, item)
    let stat = fs.lstatSync(newPath)
    if (stat.isDirectory()) {
      let dir = fs.readdirSync(newPath)
      if (dir.length === 0) {
        fs.rmdirSync(newPath)
      } else {
        clearEmptyDirectory(newPath)
      }
    }
  })
}

clearFiles(mngPackPath)
clearEmptyDirectory(mngPackPath)
console.log('clear mng pack successful')

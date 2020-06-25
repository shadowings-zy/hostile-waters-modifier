const path = require('path')
const fs = require('fs')

/**
 * 交换模型文件
 * @param {*} source 原始模型（被替换的）
 * @param {*} target 目标模型（替换的）
 * @param {*} rootPath 源文件位置
 */
function objectBinModify(source, target, rootPath) {
  const targetObjectBinPath = path.join(__dirname, '../', 'hostile-waters-mngpack', 'ObjectBin', target) // 目标模型在mngpack中的位置
  const outputPath = path.join(rootPath, 'ObjectBin') // 修改后的模型要输出的位置

  if (!fs.existsSync(outputPath)) {
    // 新建模型文件夹
    fs.mkdirSync(outputPath)
  }

  // 把mngpack中的文件复制过去
  fs.copyFileSync(targetObjectBinPath, path.join(outputPath, target))

  // 修改文件名，将目标模型文件名换成原始模型文件名
  fs.renameSync(path.join(outputPath, target), path.join(rootPath, 'ObjectBin', source))
}

module.exports = {
  objectBinModify,
}

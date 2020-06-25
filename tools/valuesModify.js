const path = require('path')
const fs = require('fs')

/**
 * 生成更换关卡可用载具的代码
 * @param {*} data 关卡配置文件内容
 * @param {*} valuesObject 载具建造代码列表
 */
function generateValues(data, valuesObject) {
  const valuesCodeArr = data.split('\r\n')
  // 遍历valuesObject中的每一个属性
  for (const key in valuesObject) {
    const value = valuesObject[key];
    for (let a = 0; a < valuesCodeArr.length; a++) {
      if (valuesCodeArr[a].indexOf(`${key} = `) === 0 && valuesCodeArr[a].indexOf(';') === -1) {
        valuesCodeArr[a] = `${key} = ${value}`
      }
    }
  }

  return valuesCodeArr.join('\r\n')
}


/**
 * 修改values文件
 * @param {*} valuesObject values数组
 * @param {*} rootPath 源文件位置
 */
function valuesModify(valuesObject, rootPath) {
  const filename = 'Values.txt'
  const targetObjectBinPath = path.join(__dirname, '../', 'hostile-waters-mngpack', 'Config', filename) // values.txt在mngpack中的位置
  const outputPath = path.join(rootPath, 'Config') // 修改后的模型要输出的位置

  if (!fs.existsSync(outputPath)) {
    // 新建配置文件夹
    fs.mkdirSync(outputPath)
  }

  // 把mngpack中的文件复制过去
  fs.copyFileSync(targetObjectBinPath, path.join(outputPath, filename))

  // 修改文件内容
  const data = fs.readFileSync(path.join(outputPath, filename)).toString()
  const valuesData = generateValues(data, valuesObject)
  fs.writeFileSync(path.join(outputPath, filename), valuesData)
}

module.exports = {
  valuesModify,
}

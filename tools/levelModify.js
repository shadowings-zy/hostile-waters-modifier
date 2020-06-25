const path = require('path')
const fs = require('fs')

/**
 * 生成更换关卡可用载具的代码
 * @param {*} data 关卡配置文件内容
 * @param {*} unitCodeList 载具建造代码列表
 */
function generateBuilding(data, unitCodeList) {
  // 删去原有的Building代码
  const unitCodeArr = data.split('\r\n')
  for (let a = 0; a < unitCodeArr.length; a++) {
    if (unitCodeArr[a].includes('AIScript_MakeAvailableForBuilding')) {
      unitCodeArr.splice(a, 3, '*')
    }
  }

  // 根据unitCodeList新增代码
  const insertIndex = unitCodeArr.indexOf('*')
  if (insertIndex > -1) {
    const insertArr = []
    for (const item of unitCodeList) {
      insertArr.push(item)
    }
    unitCodeArr.splice(insertIndex, 0, insertArr.join('\r\n'))
  }

  return unitCodeArr.join('\r\n').replace(/\*\r\n/g, '')
}

/**
 * 更换关卡可用载具
 * @param {*} level 关卡
 * @param {*} unitCodeList 载具建造代码列表
 * @param {*} rootPath 游戏根目录
 */
function levelModify(level, unitCodeList, rootPath) {
  const levelPath = path.join(__dirname, '../', 'hostile-waters-mngpack', level) // 关卡配置文件夹在mngpack中的位置
  const outputPath = path.join(rootPath, level) // 修改后的配置文件夹要输出的位置
  const filename = `${level.toString().toLowerCase()}.ars` // 配置文件名

  if (!fs.existsSync(outputPath)) {
    // 新建关卡文件夹
    fs.mkdirSync(outputPath)
  }

  // 把mngpack中的文件复制过去
  fs.copyFileSync(path.join(levelPath, filename), path.join(outputPath, filename))

  // 修改文件内容
  const data = fs.readFileSync(path.join(outputPath, filename)).toString()
  const buildingData = generateBuilding(data, unitCodeList)
  fs.writeFileSync(path.join(outputPath, filename), buildingData)
}

module.exports = {
  levelModify,
}

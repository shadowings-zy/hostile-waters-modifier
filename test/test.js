/**
 * 测试用代码
 */
const { objectBinModify } = require('../tools/objectBinModify')
const { levelModify } = require('../tools/levelModify')
const { valuesModify } = require('../tools/valuesModify')
const unitBuildingCodeList = require('./unitBuildingCodeList')
const valuesObject = require('./valuesObject')

function testObjectBinModify() {
  const source = 'vulture item box_s01.bin_n'
  const target = 'behemoth item box_s01.bin_n'
  const rootPath = '/Users/zy/workspace-for-front-end/hostile-waters-electron-project/test/hostile-waters'
  objectBinModify(source, target, rootPath)
}

testObjectBinModify()

function testLevelModify() {
  const level = 'Level4'
  const unitList = [1, 5, 7, 12, 16, 23, 25, 29, 33, 34]
  const unitCodeList = []
  for (const item of unitList) {
    unitCodeList.push(unitBuildingCodeList[item])
  }
  const rootPath = '/Users/zy/workspace-for-front-end/hostile-waters-electron-project/test/hostile-waters'
  levelModify(level, unitCodeList, rootPath)
}

testLevelModify()

function testValuesModify() {
  valuesObject['ArmourDiminishingMarginalReturn'] = '0.3'
  valuesObject['SuperHoverSpeed'] = '80'

  const rootPath = '/Users/zy/workspace-for-front-end/hostile-waters-electron-project/test/hostile-waters'
  valuesModify(valuesObject, rootPath)
}

testValuesModify()

import values from './values'
import model from './model'
import unitSlot from './unitSlot'
import level from './level'
import about from './about'

export default {
  update: '新版本可用，点此下载',
  changeLanguage: 'English',
  title: '敌对水域修改器',
  rootPath: {
    select: '选择游戏根目录',
    placeholder: '游戏根目录路径',
    restore: '还原所有修改',
  },
  message: {
    success: '修改成功',
    clear: '清理修改文件成功',
    rootPathEmpty: '请选择游戏根目录',
    unknownValuesParam: '修改失败，输入的values.txt数据不合法',
    modelEmpty: '请选择模型',
    unitSlotEmpty: '请选择装备槽',
    levelEmpty: '请选择关卡',
  },
  values,
  model,
  unitSlot,
  level,
  about,
}

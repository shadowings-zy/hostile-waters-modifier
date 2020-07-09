import values from './values'
import model from './model'
import unitSlot from './unitSlot'
import level from './level'
import about from './about'

export default {
  update: 'new version available, click here to download',
  changeLanguage: '中文',
  title: 'Hostile Waters Modifier',
  rootPath: {
    select: 'select game root path',
    placeholder: 'game root path',
    restore: 'restore modification',
  },
  message: {
    success: 'Game modified successfully',
    clear: 'Clear modification successful',
    rootPathEmpty: 'Please select game root path first',
    unknownValuesParam: 'Invalid input data, please check',
    modelEmpty: 'Please select model first',
    unitSlotEmpty: 'Please select unit slot first',
    levelEmpty: 'Please select level first',
  },
  values,
  model,
  unitSlot,
  level,
  about,
}

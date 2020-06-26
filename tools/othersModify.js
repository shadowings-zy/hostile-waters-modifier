const path = require('path')
const fs = require('fs')

const deleteList = [
  'Config/Values.txt',
  'Level1',
  'Level2',
  'Level3',
  'Level4',
  'Level5',
  'Level6',
  'Level7',
  'Level10',
  'Level11',
  'Level12',
  'Level13',
  'Level14',
  'Level15',
  'Level16',
  'Level17',
  'Level19',
  'Level20',
  'Level21',
  'Level22',
  'Level23',
  'Level25',
  'ObjectBin',
]

/**
 * 删除游戏根目录下的文件
 * @param {*} rootPath 游戏根目录
 */
function deleteModifiedFile(rootPath) {
  for (const item of deleteList) {
    const deletePath = path.join(rootPath, item)
    if (fs.existsSync(deletePath)) {
      let stat = fs.lstatSync(deletePath)
      if (stat.isDirectory()) {
        deleteDirectory(deletePath)
      } else if (!stat.isDirectory()) {
        fs.unlinkSync(deletePath)
      }
    }
  }
}

/**
 * 删除某个文件夹
 * @param {*} dirPath 文件夹地址
 */
function deleteDirectory(dirPath) {
  if(fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
	files.forEach(function(file) {
	  const curPath = path.join(dirPath, file);
	  if (fs.statSync(curPath).isDirectory()) {
        deleteDirectory(curPath);
	  } else {
		fs.unlinkSync(curPath);
	  }
	});
	fs.rmdirSync(dirPath);
  }
}

module.exports = {
  deleteModifiedFile,
}

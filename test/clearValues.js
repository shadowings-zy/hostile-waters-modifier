const path = require('path')
const fs = require('fs')

const valuesPath = path.join(__dirname, '../', 'hostile-waters-mngpack', 'Config', 'Values.txt')
const outputPath = path.join(__dirname, 'Values.txt')

/**
 * 清理values中的注释
 */
function clearValues(valuesPath) {
  const data = fs.readFileSync(valuesPath).toString()
  const valuesCodeArr = data.split('\r\n')
  for (let a = 0; a < valuesCodeArr.length; a++) {
    if (valuesCodeArr[a].includes(';') || valuesCodeArr[a] === '' || valuesCodeArr[a] === ' ') {
      valuesCodeArr.splice(a, 1)
      a--
    }
  }
  fs.writeFileSync(outputPath, valuesCodeArr.join('\r\n'))
}

clearValues(valuesPath)
console.log('clear Values.txt successful')

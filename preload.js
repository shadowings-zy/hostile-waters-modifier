// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const electron = require('electron')
const { objectBinModify } = require('./tools/objectBinModify')
const { levelModify } = require('./tools/levelModify')
const { valuesModify } = require('./tools/valuesModify')

global.electron = electron
window.ipcRenderer = electron.ipcRenderer
window.remote = electron.remote
window.shell = electron.shell

window.objectBinModify = objectBinModify
window.levelModify = levelModify
window.valuesModify = valuesModify

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

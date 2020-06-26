function isNumber(str) {
  const value = str.replace(/\s/g, '')
  const regExp = /^\d+(\.\d+)?$/
  const regExpFloat = /^\d+(\.\d+)?f$/
  return regExp.test(value) || regExpFloat.test(value)
}

export { isNumber }

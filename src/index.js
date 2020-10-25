module.exports = function check(str, bracketsConfig) {
  let brackets = null;
  for (let i = 0; i < bracketsConfig.length; i++) {
      brackets = bracketsConfig[i].join('');
      if (str.includes(brackets)) {
        str = str.replace(brackets, '')
        return !Boolean(str)
      }
  }
}

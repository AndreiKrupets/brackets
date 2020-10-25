module.exports = function check(str, bracketsConfig) {
  let brackets = null;

  for (let i = 0; i < bracketsConfig.length;) {
      brackets = bracketsConfig[i].join('');
      if (str.includes(brackets)) {
        str = str.replace(brackets, '')
        i = 0;
  
      }
      else {
        i++;
      }
  }
  return !Boolean(str)
}

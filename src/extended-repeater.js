const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== 'string') str = String(str);
  if (typeof options.addition !== 'string') options.addition = String(options.addition);
  if (options === undefined) return str;
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.repeatTimes === undefined) options.repeatTimes = 0;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 0;
  let newStr = str;
  for( let i = 0; i < options.repeatTimes; i++) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        newStr = newStr + options.addition;
          if (j + 1 >= options.additionRepeatTimes) ;
          else newStr = newStr + options.additionSeparator;
      };
      if (options.repeatTimes === 1) return newStr;
      if (i + 1  !== options.repeatTimes) {
        newStr = newStr + options.separator + str;
      }
  }
  if (options.addition !== undefined && 
      options.repeatTimes === 0 && 
      options.additionRepeatTimes === 0) newStr = newStr + options.addition;
return newStr;
};
  
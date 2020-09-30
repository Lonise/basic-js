const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let totalDepth = 1;
      let ma = (element) => typeof element ==='object';
      if (!arr.some(ma)) {return totalDepth;}
      else {
        for ( let subDepth of arr) {
          if (typeof subDepth !== 'object') continue;
          else {
            let currentDepth = this.calculateDepth(subDepth);
              if (currentDepth + 1 > totalDepth) 
              totalDepth = currentDepth + 1;
          };
        }
      };
    return totalDepth;
  };
};
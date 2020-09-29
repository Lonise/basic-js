const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  const hanoi = {};
  hanoi.turns = Math.pow(2, disksNumber) - 1;
  hanoi.seconds =  Math.floor(hanoi.turns / turnsSpeed * 3600);
  return hanoi;
};

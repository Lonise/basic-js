const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 if (!Array.isArray(arr)) throw Error;
 let newArray = [];
 for (let value of arr) {
  newArray.push(value);
 };
 for ( let i = 0; i < newArray.length; i++) {
  switch (newArray[i]) {
     case "--discard-next":
       if (i === newArray.length-1) break;
       newArray.splice(i + 1 , 1);
     break;
     case "--discard-prev":
      if (i === 0) break;
      newArray.splice(i - 1, 1);
     break;
     case "--double-next":
      if (i === newArray.length-1) {
        newArray.splice(i, 1);
      break;
      };
       newArray[i] = newArray[i + 1];
     break;
     case "--double-prev":
      if (i === 0) {
        newArray.splice(i, 1);
      break;
      };
      newArray[i] = newArray[i - 1];
     break;
   };
 };
 for ( let i = 0; i < newArray.length; i++) { 
  if (
    newArray[i] === "--discard-next" || 
    newArray[i] === "--discard-prev" 
  ) {
    newArray.splice(i, 1);
    i = i - 1;
  };
 };
 return newArray;
};

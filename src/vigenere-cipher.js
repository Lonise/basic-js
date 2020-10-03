const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(value) {
    this.value = (value === false) ?  "reverse" : "straight";
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };
  encrypt(message, key) {
   if ( message === undefined ||
      key === undefined) throw new Error();
      let encryptMessage = "";
      let fullKey = key.toUpperCase().repeat(Math.ceil(message.length/key.length));
      let keyCorrector = 0;
      message = message.toUpperCase();
      for ( let i = 0; i < message.length; i++) { 
        if (this.alphabet.indexOf(message[i]) < 0) {
          encryptMessage += message[i];
          keyCorrector++
        }
        else {
          encryptMessage += this.alphabet.charAt (
              (
                this.alphabet.indexOf(message[i]) + 
                this.alphabet.indexOf(fullKey[i-keyCorrector])
              ) % this.alphabet.length
          );
        };
      };
      if ( this.value === "reverse") return encryptMessage.split("").reverse().join("");
      return encryptMessage;
  };

  decrypt(message, key) {
    if ( message === undefined ||
         key === undefined) throw new Error;
         let decryptMessage = "";
         let fullKey = key.toUpperCase().repeat(Math.ceil(message.length/key.length));
         let keyCorrector = 0;
         message = message.toUpperCase();
         for ( let i = 0; i < message.length; i++) { 
           if (this.alphabet.indexOf(message[i]) < 0) {
             decryptMessage += message[i];
             keyCorrector++
           }
           else {
             decryptMessage += this.alphabet.charAt (
                 (
                   this.alphabet.indexOf(message[i]) + 
                   this.alphabet.length -
                   this.alphabet.indexOf(fullKey[i-keyCorrector])
                 ) % this.alphabet.length
             );
           };
         };
         if ( this.value === "reverse") return decryptMessage.split("").reverse().join("");
         return decryptMessage;
};

}

module.exports = VigenereCipheringMachine;
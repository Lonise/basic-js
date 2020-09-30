const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) value = ('');
   this.chain.push(String(value));
   return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) ||  position < 1 ) {
      this.chain = [];
      throw new Error();
    }
    
    this.chain.splice(position-1, 1)
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain[0] = '( ' + String(this.chain[0]);
    this.chain[this.chain.length - 1] = String(this.chain[this.chain.length - 1]) + ' )';
    let simpleChain = this.chain.join(' )~~( ');
    this.chain = [];
    return simpleChain;
  }
};

module.exports = chainMaker;

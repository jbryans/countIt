'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const countIt = (str) => {
  console.log('BOOMS', str.length)
  let cleanString = str.toLowerCase().replace( /[^A-Za-z0-9]/g, '')
  console.log(cleanString)
  let sortObj = {}
  for (let index = 0; index < cleanString.length; index++) {
    if(!sortObj[cleanString[index]]) {
      sortObj[cleanString[index]] = 1
    } else {
      console.log('letter already exists inside object')
      sortObj[cleanString[index]]++
    }
  }
  console.log(sortObj)
}


const getPrompt = () =>  {
  rl.question('Enter your string to count the characters: ', (str) => {
    countIt(str);
    getPrompt();
  });
}

if (typeof describe === 'function') {
  describe('#countIt()', () => {
    it('should be of type function', () => {
      
      assert.equal(typeof countIt, "function");
    });
  });
} else {
  getPrompt();
}



// let newstr = str.replace( /[^A-Za-z0-9]/g, '')
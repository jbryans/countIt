'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




console.clear()
const countIt = (str) => {
  let cleanString = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
  console.log(cleanString)
  const counts = {};
  for (const i of cleanString) {
    if (counts[i]) {
      counts[i]++
    } else {
      counts[i] = 1
    }
  }
  return counts;
}

// const string = "I want to count the number of occurences of each char in this string";
// console.log(countChar(string))

// const obj = {
//   name: 1,
//   address: "San Marcos"
// }

// console.log(obj)

// obj.name = 'string'
// obj.address = 1
// obj.address++

const getPrompt = () =>  {
  rl.question('Enter your string to count the characters: ', (str) => {
    countIt(str);
    getPrompt();
  });
}

//take any string 

//remove whitespace/convert to lower case
//toLowerCase()/.trim()
//.split to show each letter in  an array indiividually
//the output shows the letters individually and how often they appear in the string


//**********************************
//**********************************




if (typeof describe === 'function') {
  describe('#countIt()', () => {
    it('should be of type function', () => {
      
      assert.equal(typeof countIt, "function");
    });
  });
} else {
  getPrompt();
}
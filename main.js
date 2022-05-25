'use strict';

const assert = require('assert');
const readline = require('readline');
const { isRegExp } = require('util/types');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




console.clear()
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
  return sortObj

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
  describe('Should take a string', ()=>{
    it('should accept a string', ()=>{
      
      assert.equal(typeof 'hello', 'string')
    })
    it('should do something with string', ()=>{
      
      assert.equal(typeof "", 'string')
    })
  })
  describe('Count it function breaks down the string', ()=>{
    it('Should return an object with letters as the key and the values as the amount the letter appears', ()=>{
      assert.equal(String(countIt('Hello')), String({ h: 1, e: 1, l: 2, o: 1}))
    })
  })
} else {
  getPrompt();
}




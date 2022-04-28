const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = [];
  str = String(n);
  
  for(let i = 0; i<str.length;i++){
  array.push(str.slice(0,i) + str.slice(i+1))
  }

  return Math.max(...array)
}


console.log(deleteDigit(152));

module.exports = {
  deleteDigit
};

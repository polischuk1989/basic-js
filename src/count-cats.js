
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  let counter = 0;
  let arr =  matrix.reduce(function(a,b){
        return a.concat(b);
    }); 
    for(let elem of arr){
        if(elem == '^^'){
            counter ++;
        }
    }
    return counter;



}

module.exports = {
  countCats
};

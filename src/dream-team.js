const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
if(Array.isArray(members)==false){
     return false
   }

  let arr=[];
  let result = ``;

 for (let elem of members){
   if( typeof elem == `string`){
     arr.push(elem[0])

   }
   
   
 }return result =  String(arr.sort().join(``));
}

module.exports = {
  createDreamTeam
};

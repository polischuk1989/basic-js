const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(sampleActivity !== `string`){
    return false
  }  
  if (Number.isNaN(result) || result > MODERN_ACTIVITY || result <= 0 ||  sampleActivity.length == 0)
  {return false}
  let result = Number(sampleActivity);
  let age = Math.ceil((MODERN_ACTIVITY/result)/(0.693/HALF_LIFE_PERIOD));
  return age;
}

module.exports = {
  dateSample
};

const {assertArraysEqual} = require('./assertArraysEqual')


const letterPositions = function (strWord) {
  const obj = {}

  //initialize obj with [char] keys - without spaces
  for (const char of strWord) {
    (char !== ' ') ? obj[char] = [] : false
  }

  for (i = 0; i < strWord.length; i++) {
    char = strWord[i]
    if (char !== ' ') {
      // console.log("i:", i, "obj:", obj[char])

      //with push do not re-assign simply push to the object[key]
      //obj[char] = obj[char].push(i);  // incorrect to re-assign

      obj[char].push(i);
    }
  }
  return obj;

}


module.exports = {letterPositions}
/*


// TEST CODE

const result1 = letterPosition('lighthouse in the house');

console.log(result1)

console.log('--------------')
assertArraysEqual(result1["l"], [0]);
assertArraysEqual(result1["i"], [1, 11]);
assertArraysEqual(result1["g"], [2]);
assertArraysEqual(result1["h"], [3, 5, 15, 18]);
assertArraysEqual(result1["t"], [4, 14]);
assertArraysEqual(result1["o"], [6, 19]);
assertArraysEqual(result1["u"], [7, 20]);
assertArraysEqual(result1["s"], [8, 21]);
assertArraysEqual(result1["e"], [9, 16, 22]);
assertArraysEqual(result1["n"], [12]);
*/
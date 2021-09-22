const { head } = require('./head');
const { tail } = require('./tail');
const { middle } = require('./middle');

const { assertEqual } = require('./assertEqual');
const { assertArraysEqual } = require('./assertArraysEqual')
const { assertObjectsEqual } = require('./assertObjectsEqual');

const { flattenArray } = require('./flattenArray')

const { findKey } = require('./findKey')
const { countLetters } = require('./countLetter');
const { letterPositions } = require('./letterPositions')

const { map } = require('./map');
const { findKeyByValue } = require('./findKeyByValue');

module.exports = {
  head,
  tail,
  middle,
  flattenArray,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  countLetters,
  letterPositions,
  map,
  findKey,
  findKeyByValue

};


/*

// TEST CODE


const words = ["ground", "control", "to", "major", "tom"];
const result2 = map(words, word => word[0]);
assertArraysEqual(result2, [ 'g', 'c', 't', 'm', 't' ])
console.log(result2)



const result1 = letterPositions('lighthouse in the house');
console.log(result1);
const expectedResult = {
  'l': [ 0 ],
  'i': [ 1, 11 ],
  'g': [ 2 ],
  'h': [ 3, 5, 15, 18 ],
  't': [ 4, 14 ],
  'o': [ 6, 19 ],
  'u': [ 7, 20 ],
  's': [ 8, 21 ],
  'e': [ 9, 16, 22 ],
  'n': [ 12 ]
}
assertObjectsEqual(result1,expectedResult)
*/
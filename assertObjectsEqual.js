const okEmoji = String.fromCodePoint(128516);
const failEmoji = String.fromCodePoint(129314);

const {eqObjects }= require('./eqObjects')


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  eqObjects(actual,expected) ?
     console.log(okEmoji + ` PASS: ${inspect(actual)}  === ${inspect(expected)}` ) :
     console.log(failEmoji + ` FAIL: ${inspect(actual)}  !== ${inspect(expected)}`);
}

module.exports = {assertObjectsEqual}

/*
// -------------- TEST CODE ------------------

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba) // => true
assertObjectsEqual(ab, abc); // => false



const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };



const cd1 = { c: "1", d: ["2", 3] };
const dc1 = { d: ["2", 3], c: "1" };

const cd3 = { c: "1", d: ["2", 3, 4] };

nestArr = ["2", '1', [1, 2, [3, 4, 5, 6]]];
nestArr2 = ["2", '1', [1, 2, [3, 4, 5, 6]]];


console.log('-------------eqObjects result---------------')
console.log('log:', eqObjects(cd, cd)); // => true
console.log('log:', eqObjects(cd, cd3)); // => false
console.log('log:', eqObjects(dc, cd3)); // => false
console.log('log:', eqObjects(cd1, dc1)); // => true
console.log('log:',eqObjects(cd1, cd3)); // => false


console.log('-------------assertObjectEqual--------------')

assertObjectsEqual(cd, cd) // => true
assertObjectsEqual(cd, cd3) // => false
assertObjectsEqual(dc, cd3); // => false
assertObjectsEqual(cd1, dc1) // => true
assertObjectsEqual(cd1, cd3) // => false

*/
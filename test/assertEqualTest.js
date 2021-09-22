


const { assertEqual } = require("../assertEqual");
const { head } = require("../head");
const { tail } = require("../tail");
const { eqArrays } = require("../eqArrays")
const { assertArraysEqual } = require("../assertArraysEqual")

const { middle } = require("../middle")



// TEST CODE
console.log('----------assertEqual----------')
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 5);
assertEqual(1, '1');


console.log('----------head----------')
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([], 10));



console.log('----------tail----------')

console.log(tail([1, 2, 3, 4, 5, 10]));
console.log(tail([10]));
console.log(tail([4, 5, 10]));
console.log(tail([1, 3]));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);


assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');



console.log('---eqArray-----');
assertEqual(eqArrays([1, 5], [1, 5]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false




console.log('--------asserArraysEqual----------');
assertArraysEqual([1, 5], [1]);
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false



console.log('-----middle--------------');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);
assertArraysEqual(middle(['a', 'b']), []);
assertArraysEqual(middle(['a', 'b', 1]), []);
assertArraysEqual(middle([1, 3, 4, 5]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

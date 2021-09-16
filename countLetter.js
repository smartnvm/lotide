const happyFace = String.fromCodePoint(128516);
const sickFace = String.fromCodePoint(129314);

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  (actual === expected) ?
    console.log(happyFace + ` Assertion Passed: ${actual} === ${expected}`) :
    console.log(sickFace + ` Assertion Failed! ${actual} !== ${expected}`);
};





const countLetters = function (strWord, letters) {
  const obj = {}

  //initialize obj with [char] keys - without spaces
  for (const char of strWord) {
    (char !== ' ') ? obj[char] = 0 : false

  }
  for (const char of strWord) {
    (char !== ' ') ? obj[char] = obj[char] + 1 : false
  }
  return obj;

}


const result1 = countLetters('lighthouse in the house');

console.log(result1)

// TEST CODE

console.log('--------------')
assertEqual(result1["l"],1);
assertEqual(result1["i"],2);
assertEqual(result1["g"],1);
assertEqual(result1["h"],4);
assertEqual(result1["t"],2);
assertEqual(result1["o"],2);
assertEqual(result1["u"],2);
assertEqual(result1["s"],2);
assertEqual(result1["e"],3);
assertEqual(result1["n"],1);
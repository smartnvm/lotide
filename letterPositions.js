const happyFace = String.fromCodePoint(128516);
const sickFace = String.fromCodePoint(129314);

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  (actual === expected) ?
    console.log(happyFace + ` Assertion Passed: ${actual} === ${expected}`) :
    console.log(sickFace + ` Assertion Failed! ${actual} !== ${expected}`);
};





const countLetters = function (strWord) {
  const obj = {}

  //initialize obj with [char] keys - without spaces
  for (const char of strWord) {
    (char !== ' ') ? obj[char] = [] : false
  }
  /*console.log('obj:',obj['i'].push('12')) 
  console.log('obj:',obj['i'].push('2')) 
  console.log('obj:',obj)
  return*/
  for (i = 0; i < strWord.length; i++) {
    char = strWord[i]
    if (char !== ' ') {
     // console.log("i:", i, "obj:", obj[char])
     
      //can't use obj[char] because it's an array
      //with push do not re-assign simply push to the object[key]
     
      //obj[char] = obj[char].push(i);  // incorrect to re-assign

     obj[char].push(i);

          
    }
  }
  return obj;

}


const result1 = countLetters('lighthouse in the house');

console.log(result1)
/*
// TEST CODE

console.log('--------------')
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);*/
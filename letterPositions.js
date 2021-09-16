
const happyFace = String.fromCodePoint(128516);
const sickFace = String.fromCodePoint(129314);

const eqArrays = function (arr1, arr2) {

  if (arr1.length !== arr2.length) {

    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }

  }


  return true;
};

const assertArraysEqual = function (arr1, arr2) {

  eqArrays(arr1, arr2) ? console.log(happyFace + ` PASS: Arrays are identical`) :
    console.log(sickFace + ` FAIL: Arrays are not equal`);
}



const letterPosition = function (strWord) {
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


const result1 = letterPosition('lighthouse in the house');

console.log(result1)

// TEST CODE


console.log('--------------')
assertArraysEqual(result1["l"], [ 0 ]);
assertArraysEqual(result1["i"], [ 1, 11 ]);
assertArraysEqual(result1["g"], [ 2 ]);
assertArraysEqual(result1["h"], [ 3, 5, 15, 18 ]);
assertArraysEqual(result1["t"], [ 4, 14 ]);
assertArraysEqual(result1["o"], [ 6, 19 ]);
assertArraysEqual(result1["u"], [ 7, 20 ]);
assertArraysEqual(result1["s"], [ 8, 21 ]);
assertArraysEqual(result1["e"], [ 9, 16, 22 ]);
assertArraysEqual(result1["n"], [12]);
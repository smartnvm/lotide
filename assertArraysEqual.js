
const happyFace = String.fromCodePoint(128516);
const sickFace = String.fromCodePoint(129314);

const assertArraysEqual = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    
    console.log(sickFace + ` FAIL: Arrays are not equal`);
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(sickFace + ` FAIL: Arrays are not equal`);
      //console.log(sickFace + ` FAIL: ${arr1} !== ${arr2}`);
      return false;
    }

  }

  console.log(happyFace + ` PASS: Arrays are identical`) ;

  return true;
};

assertArraysEqual([1, 5], [1, 5]);

console.log('--------');
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false


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


// 'middle function takes an array and return the middle element
const middle = function (arr) {
  midArr = [];
  arrLen = arr.length;
  if (arrLen > 2) {
    //console.log(arr);
    if (arrLen % 2 === 1) { // array with odd # of elements
      midArr.push(arr[(arrLen + 1) / 2 - 1])
    }
    else {
      midArr.push(arr[arrLen / 2] - 1);
      midArr.push(arr[(arrLen / 2)]);

    }

  }
  return midArr;
}

console.log('-----TEST CASES--------------');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);
assertArraysEqual(middle(['a', 'b']), []);
assertArraysEqual(middle(['a', 'b',1]), []);
assertArraysEqual(middle([1, 3, 4, 5]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]), []);


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

  (arrLen % 2 === 0) ? isEven = true : isEven = false;

  isEven ? midIndex = arrLen / 2 : midIndex = (arrLen - 1) / 2;

  //console.log(arr, arrLen, midIndex);
  if (arrLen <= 2) {
    //console.log(arr);
    return midArr;
  }

  if (!isEven) { // array with odd # of elements
    midArr.push(arr[midIndex]);
   // console.log(arr);
    return midArr;
  }

  //midArr.push(arr[midIndex - 1]);
  //midArr.push(arr[midIndex]);
  
  //slice([start], end)  end not included
  midArr = arr.slice(midIndex - 1, midIndex+1);
  //console.log(midArr);

  return midArr;
}

console.log('-----TEST CASES--------------');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);
assertArraysEqual(middle(['a', 'b']), []);
assertArraysEqual(middle(['a', 'b', 1]), []);
assertArraysEqual(middle([1, 3, 4, 5]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

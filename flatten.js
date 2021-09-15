
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
assertArraysEqual([1, 5], [1]);
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false


let flatArray = [];
const flatten = function (arr) {
//   console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    e = arr[i];
    //console.log('sub array length: ', e.length, '\t', e);

    (Array.isArray(e)) ?
      flatten(arr[i]) :
      flatArray.push(e);

  }

  return flatArray;

}

console.log('---- flatten --------');

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

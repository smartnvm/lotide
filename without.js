
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

const without = function (src, delItems) {

  let newArr = [];

  for (const srcElm of src) {
    for (const delElm of delItems) {
      push = true;
      if (srcElm === delElm) {
        push = false;
        break
      }

    }

    push ? newArr.push(srcElm) : false
  }
  return newArr;


}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) ;// => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])) ; // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

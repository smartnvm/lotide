
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



const words = ["ground", "control", "to", "major", "tom"];

// const results1 = words.map(word => word[0]);
// console.log(results1);

const map = function(list, callback) {
  // empty for now :)
  const result = []
  for (let word of list) {

    result.push(callback(word))

  }
return result;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])



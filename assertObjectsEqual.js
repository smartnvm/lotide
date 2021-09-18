
const happyFace = String.fromCodePoint(128516);
const sickFace = String.fromCodePoint(129314);

const assertEqual = function (actual, expected) {
  
  (actual === expected) ?
    console.log(happyFace + ` Assertion Passed: ${actual} === ${expected}`) :
    console.log(sickFace + ` Assertion Failed! ${actual} !== ${expected}`);
};


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


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  eqObjects(actual,expected) ?
     console.log(happyFace + ` PASS: ${inspect(actual)}  === ${inspect(expected)}` ) :
     console.log(sickFace + ` FAIL: ${inspect(actual)}  !== ${inspect(expected)}`);
}



const flatten = function (arr) {
  let resultArry = []
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    e = arr[i];
    //console.log('sub array length: ', e.length, '\t', e);
    if (Array.isArray(e)) {
      const tempArry = flatten(arr[i]);
      resultArry = [...resultArry, ...tempArry]
    } else {
      resultArry.push(e)
    }
  }
  //console.log(resultArry)
  return resultArry;
}


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //console.log(Object.keys(object1) , 'vs', Object.keys(object2))

  //console.log(object1)
  // console.log(object2)

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //console.log('🦊 keys not equal')
    return false
  }


  for (const key in object1) {
    //console.log('keys are equal')
    if (Array.isArray(object1[key])) {
      //console.log('found key with Array[] value', object1[key])
      if (!eqArrays(flatten(object1[key]), flatten(object2[key]))) {
        // console.log('🦊 🦄', object1[key], object2[key]);
        return false
      }
    } else {
      if ((object1[key] !== object2[key])) {
        // console.log('❌ not equal ', object1[key], object2[key])
        return false
      }
    }
  }

  //console.log('EQUAL Objects')
  return true

}


// -------------- TEST CODE ------------------

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba) // => true
assertObjectsEqual(ab, abc); // => false



const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };



const cd1 = { c: "1", d: ["2", 3] };
const dc1 = { d: ["2", 3], c: "1" };

const cd3 = { c: "1", d: ["2", 3, 4] };

nestArr = ["2", '1', [1, 2, [3, 4, 5, 6]]];
nestArr2 = ["2", '1', [1, 2, [3, 4, 5, 6]]];


console.log('-------------eqObjects result---------------')
console.log('log:', eqObjects(cd, cd)); // => true
console.log('log:', eqObjects(cd, cd3)); // => false
console.log('log:', eqObjects(dc, cd3)); // => false
console.log('log:', eqObjects(cd1, dc1)); // => true
console.log('log:',eqObjects(cd1, cd3)); // => false


console.log('-------------assertObjectEqual--------------')

assertObjectsEqual(cd, cd) // => true
assertObjectsEqual(cd, cd3) // => false
assertObjectsEqual(dc, cd3); // => false
assertObjectsEqual(cd1, dc1) // => true
assertObjectsEqual(cd1, cd3) // => false


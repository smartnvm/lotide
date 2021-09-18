
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

const assertArraysEqual = function (arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(happyFace + ` PASS: Arrays are identical`) :
    console.log(sickFace + ` FAIL: Arrays are not equal`);
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
      //console.log(object1[key])
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), true); // => false



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true); // => true
assertEqual(eqObjects(cd, cd2), true); // => false


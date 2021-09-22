const { assertEqual } = require('./assertEqual')
const {eqArrays} = require('./eqArrays')
const { flattenArray } = require('./flattenArray')


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //console.log(Object.keys(object1) , 'vs', Object.keys(object2))
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //console.log('🦊 keys not equal')
    return false
  }

  for (const key in object1) {
    //console.log('keys are equal')
    if (Array.isArray(object1[key])) {
      //console.log('found key with Array[] value', object1[key])
      //console.log(object1[key])
      if (!eqArrays(flattenArray(object1[key]), flattenArray(object2[key]))) {
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

module.exports = {eqObjects}


/*

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

*/
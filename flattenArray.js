
const { assertArraysEqual } = require("./assertArraysEqual");

const flattenArray = function (arr) {
  let resultArry = []
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    e = arr[i];
    //console.log('sub array length: ', e.length, '\t', e);
    if (Array.isArray(e)) {
      const tempArry = flattenArray(arr[i]);
      resultArry = [...resultArry, ...tempArry]
    } else {
      resultArry.push(e)
    }
  }
  //console.log(resultArry)
  return resultArry;
}


// TEST CODE
// console.log('---- flattenArray --------');
// assertArraysEqual(flattenArray([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = { flattenArray }
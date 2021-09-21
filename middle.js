
const { assertArraysEqual } = require("./assertArraysEqual")


// 'middle function takes an array and return the middle element
//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned


const middle = function (arr) {
  let midArr = [];
  
  if (arr === undefined ) {
    return 'Error'
  }
  
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
  midArr = arr.slice(midIndex - 1, midIndex + 1);
  //console.log(midArr);

  return midArr;
}

module.exports = { middle }
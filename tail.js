const { assertEqual } = require("./assertEqual");
const { head } = require("./head");

// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail


const tail = function (arr) {

  
  if (arr === undefined) {
    return undefined;
  }
  if (arr.length === 2) {
    return arr[1];
  } 
  if (arr.length > 2) {
    return arr.slice(1, arr.length - 1);
  }
  
  return []
}


const oldTail = function (arr) {
  //copy array
  let newArr = arr.filter((item, index) => {
    return index >= 0 && index < arr.length;
  });

  //Important: initialize the array!
  //without the line below, node throws error message
  newArr;


  //array.splice() modifies the array
  (newArr.length > 2) ?
    //if true
    newArr = newArr.splice(1, newArr.length - 1) :
    //if false
    (newArr.length === 2 ? newArr = newArr[1] : newArr = []);


  //console.log('original array: ', arr);
  return newArr;

};

module.exports = { tail };

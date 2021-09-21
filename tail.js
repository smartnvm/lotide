const { assertEqual } = require("./assertEqual");
const { head } = require("./head");

// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail


const tail = function (arr) {

  if (arr === undefined) {
    return 'Error'
  }
  arr.shift()
  return arr

}


module.exports = { tail };

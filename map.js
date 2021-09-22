
const {assertArraysEqual} = require('./assertArraysEqual' )


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


module.exports = {map}
/*
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])


*/
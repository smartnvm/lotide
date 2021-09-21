const { assertEqual } = require("./assertEqual");

//  array with only one element should still yield that one element as its head
//  empty array should yield undefined as its head

const head = function (arg) {
  let num = 0;

  (arg.length >= 1) ? num = arg[0] : num = undefined

  return num;
}

module.exports = { head };
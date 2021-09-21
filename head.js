const { assertEqual } = require("./assertEqual");


const head = function (arg) {
  let num = 0;
  
  (arg.length > 1) ? num = arg[0] : num = undefined

  return num;
}


module.exports = { head };
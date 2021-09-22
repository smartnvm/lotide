const { assertEqual } = require("./assertEqual");


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};



const findKeyByValue = function (obj, findKey) {

  for (const key in obj) {
    //console.log(key)
    if (obj[key] === findKey) {
      return key;
    }
  }
}

module.exports = {findKeyByValue}

/*
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sci");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/
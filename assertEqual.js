const okEmoji = String.fromCodePoint(128516);
const failEmoji = String.fromCodePoint(129314);

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  (actual === expected) ?
    console.log(okEmoji + ` Assertion Passed: ${actual} === ${expected}`) :
    console.log(failEmoji + ` Assertion Failed! ${actual} !== ${expected}`);
};


module.exports = { assertEqual };


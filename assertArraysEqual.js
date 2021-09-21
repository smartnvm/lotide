const { eqArrays } = require("./eqArrays");



const okEmoji = String.fromCodePoint(128516);
const failEmoji = String.fromCodePoint(129314);

const assertArraysEqual = function (arr1, arr2) {

  eqArrays(arr1, arr2) ? console.log(okEmoji + ` PASS: Arrays are identical`) :
    console.log(failEmoji + ` FAIL: Arrays are not equal`);
}


module.exports = { assertArraysEqual };



const happyFace = String.fromCodePoint(128516);
const sickFace = String.fromCodePoint(129314);

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(happyFace + ` Assertion Passed: ${actual} === ${expected}`) :
    console.log(sickFace + ` Assertion Failed! ${actual} !== ${expected}`);
};


const head = function(arg) {
  let num = 0;
  (arg.length > 1) ? num = arg[0] : num = arg;

  return num;
}


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 5);
assertEqual(1, '1');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([], 10));

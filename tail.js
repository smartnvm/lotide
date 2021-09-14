
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
};

const tail = function(arr) {
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


// TEST CODE

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 5);
assertEqual(1, '1');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([], 10));


console.log(tail([1, 2, 3, 4, 5, 10]));
console.log(tail([10]));
console.log(tail([4, 5, 10]));
console.log(tail([1, 3]));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);


assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');

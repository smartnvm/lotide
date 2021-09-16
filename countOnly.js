
const happyFace = String.fromCodePoint(128516);
const sickFace = String.fromCodePoint(129314);

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  (actual === expected) ?
    console.log(happyFace + ` Assertion Passed: ${actual} === ${expected}`) :
    console.log(sickFace + ` Assertion Failed! ${actual} !== ${expected}`);
};



const countOnly = function (allItems, itemsToCount) {
  const obj = {}

  //iterate over keys
  for (const key in itemsToCount) {

    //get [key] value
    count = itemsToCount[key];

    let i = 0
    for (const name of allItems) {
      if (count && (key === name)) {
        i++;
      }
    }
    // console.log(i, '\t', key, ': ', count)
    obj[key] = i;
  }
  //console.log('obj:', obj)
  return obj;
}



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
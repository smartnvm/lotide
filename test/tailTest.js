const assert = require('chai').assert;

const { tail } = require("../tail");

describe("#Tail", () => {
  it("0) returns 'Error' for undefined", () => {
    const inputTest = undefined;
    const result = 'Error';
    assert.deepEqual(tail(inputTest), result);
  });

  it("1) returns [ 2, 3, 4, 5 ]; for [1, 2, 3, 4, 5, 10]", () => {
    const inputTest = [1, 2, 3, 4, 5, 10];
    const result = [2, 3, 4, 5, 10];
    assert.deepEqual(tail(inputTest), result);
  });

  it("2) returns [] for [10]", () => {
    const inputTest = [10];
    const result = [];
    assert.deepEqual(tail(inputTest), result);
  });

  it("3) returns [3] for [1,3]", () => {
    const inputTest = [1, 3];
    const result = [3];
    assert.deepEqual(tail(inputTest), result);
  });

  it("4) returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const inputTest = ['Hello', 'Lighthouse', 'Labs'];
    const result = ['Lighthouse', 'Labs'];
    assert.deepEqual(tail(inputTest), result);
  });


});

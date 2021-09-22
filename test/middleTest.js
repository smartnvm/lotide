const assert = require('chai').assert;

const { middle } = require("../middle");



describe("#Middle", () => {
  it("0) returns 'Error' for undefined", () => {
    const inputTest = undefined;
    const result = 'Error';
    assert.deepEqual(middle(inputTest), result);
  });

  it("1) returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const inputTest = [1, 2, 3, 4, 5, 6];
    const result = [3, 4];
    assert.deepEqual(middle(inputTest), result);
  });

  it("2) returns ['b'] for ['a', 'b', 1]", () => {
    const inputTest = ['a', 'b', 1];
    const result = ['b'];
    assert.deepEqual(middle(inputTest), result);
  });


  it("3) returns [3, 4] for [1, 3, 4, 5]", () => {
    const inputTest = [1, 3, 4, 5];
    const result = [3, 4];
    assert.deepEqual(middle(inputTest), result);
  });

  it("4) returns [] for [1]", () => {
    const inputTest =[1];
    const result = [];
    assert.deepEqual(middle(inputTest), result);
  });

  it("5) returns [] for [1,2]", () => {
    const inputTest =[1];
    const result = [];
    assert.deepEqual(middle(inputTest), result);
  });

});

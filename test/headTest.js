const assert = require('chai').assert;

const { head } = require("../head");

describe("#head", () => {
  it("0) returns 'Error' for undefined", () => {
    assert.strictEqual(head(undefined), 'Error');
  });

  it("1) returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("2) returns undefined for 5", () => {
    assert.strictEqual(head(5), undefined);
  });

  it("3) returns Hello for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("4) returns undefined for []", () => {
    assert.strictEqual(head([], undefined));

  });

  it("5) returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);

  });

});

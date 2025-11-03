const {
  add,
  subtract,
  divide,
  multiply,
  getSquareRoot,
  getMaxValue,
} = require("./index");

/* -------------------------------------------------------------------------- */
/*                         1st Test Suite: Basic Math                         */
/* -------------------------------------------------------------------------- */
describe("Testing Basic math operations", () => {
  test("two numbers are added and a sum is returned", () => {
    expect(add(3, 7)).toBe(10);
  });

  test("two numbers are subtracted and a difference is returned", () => {
    expect(subtract(12, 6)).toBe(6);
  });

  test("two numbers are divided and a quotient is returned", () => {
    expect(divide(100, 50)).toBe(2);
  });

  test("two numbers are multipled and a product is returned", () => {
    expect(multiply(3, 9)).toBe(27);
  });
});

/* -------------------------------------------------------------------------- */
/*                        2nd Test Suite: Advanced Math                       */
/* -------------------------------------------------------------------------- */
describe("Testing Advance Math operations", () => {
  test("get the square root of a single number input", () => {
    expect(getSquareRoot(9)).toBe(3);
  });

  test("get the larger value between the two number inputs given", () => {
    expect(getMaxValue(99, 76)).toBe(99);
  });
});

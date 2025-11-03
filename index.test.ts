const { add, subtract, divide, multiply } = require("./index");

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

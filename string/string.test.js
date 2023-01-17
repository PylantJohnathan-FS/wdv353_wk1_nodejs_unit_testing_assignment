/*----example syntax----
const {
    uppercase,
    lowercase
} = require("./string")

describe("Testing the string module", ()=>{
    test("should uppercase a string input",()=>{
        expect(uppercase("bob")).toBe("BOB");
    });

    test("should lowercase a string input", () => {
        expect(lowercase("FULL Sail")).toBe("full sail");
    });
});
*/

const { 
    sum,
    difference,
    product,
    quotient,
    squareRoot,
    maxNum
} = require("./string");

describe("Testing the math module", () => {
  // testing addition
  test("Add two numbers together to find the sum", () => {
    expect(sum(2, 3)).toBe(5);
  });

  // testing subtraction
  test("Subtract one number from another to find the difference", () => {
    expect(difference(5, 4)).toBe(1);
  });

  // testing multiplication
  test("Multiply two numbers together to find the product", () => {
    expect(product(5, 6)).toBe(30);
  });

  // testing division
  test("Divide one number by another to find the quotient", () => {
    expect(quotient(10, 2)).toBe(5);
  });

  // testing square root
  test("Find the square root of a given number", () => {
    expect(squareRoot(9)).toBe(3);
  });

  // testing max
  test("Find the largest number from a given set of numbers", () => {
    expect(maxNum(1, 5, 3)).toBe(5);
  });
});
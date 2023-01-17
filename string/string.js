/*----example syntax----
//uppercase function to uppercase text
const uppercase = (str) => str.toUpperCase();

//lowercase function to lowercase text
const lowercase = (str) => str.toLowerCase()
*/

//math
const sum = (a, b) => {
    return a + b;
  };
  
  const difference = (c, d) => {
    return c - d;
  };
  
  const product = (e, f) => {
    return e * f;
  };
  
  const quotient = (g, h) => {
    return g / h;
  };
  
  const squareRoot = (x) => Math.sqrt(x);
  
  const maxNum = (j, k, l) => Math.max(j, k, l);
  
  module.exports = {
    sum,
    difference,
    product,
    quotient,
    squareRoot,
    maxNum
 };
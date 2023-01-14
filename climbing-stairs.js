/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, s = Math.sqrt(5)) {
  return (Math.pow((1 + s) / 2, n + 1) - Math.pow((1 - s) / 2, n + 1)) / s; // binet's formula
};

console.log(climbStairs(2));

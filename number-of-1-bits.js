/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n.toString(2).split("0").join("").length;
};

console.log(hammingWeight(11111111111111111111111111111101));

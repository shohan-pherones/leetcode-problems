/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const bin = n.toString(2).split("").reverse().join("");
  const bin32 = bin.padEnd(32, "0");

  return parseInt(bin32, 2);
};

console.log(reverseBits(00000010100101000001111010011100));

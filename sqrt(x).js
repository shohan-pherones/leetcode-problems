/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1,
    right = x,
    middle,
    ans;

  if (x == 0) return x;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    let square = middle * middle;

    if (x == square) {
      return middle;
    } else if (square < x) {
      ans = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return Math.floor(ans);
};

console.log(mySqrt(4));

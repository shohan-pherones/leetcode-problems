/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n < 10) {
    if (n === 1 || n === 7) {
      return true;
    }
    return false;
  }

  let total = 0;

  while (n > 0) {
    let sqaure = n % 10;
    total += sqaure ** 2;
    n -= sqaure;
    n /= 10;
  }

  if (total === 1) return true;

  return isHappy(total);
};

console.log(isHappy(2));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  let x = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[x]) x++;
  }

  return x === s.length;
};

console.log(isSubsequence("acx", "abcghx"));

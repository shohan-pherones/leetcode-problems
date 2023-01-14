/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let pathElements = path.split("/").filter((elem) => elem !== "");
  let stack = [];

  for (let i = 0; i < pathElements.length; i++) {
    if (pathElements[i] === ".") {
      continue;
    } else if (pathElements[i] === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(pathElements[i]);
    }
  }

  return "/" + stack.join("/");
};

console.log(simplifyPath("/../home/doc/dead/"));

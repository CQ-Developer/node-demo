const uniq = require("uniq");

const arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
const res = uniq(arr);
console.log(res);
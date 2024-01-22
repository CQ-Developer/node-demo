// 不能省略相对路径前缀
// const tiemo = require("me.js");

// JS文件可以省略后缀名
// 同名文件优先选择JS文件
const tiemo = require("./me");
tiemo();

// json文件可以神略后缀名
const user = require("./user");
console.log(user);

// 其他类型的文件作为JS文件处理
const test = require("./test.abc");
console.log(test);
// 引入模块
const fs = require("fs");

// 读取文件
const buf = fs.readFileSync("./data.txt");

// 输出数据
console.log(buf.toString());
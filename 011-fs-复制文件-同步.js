// 引入模块
const fs = require("fs");
const process = require("process");

// 读取数据
const data = fs.readFileSync("./data.txt");

// 写入数据
fs.writeFileSync("./data-copy.txt", data);

// 测试内存使用量
console.log(process.memoryUsage());
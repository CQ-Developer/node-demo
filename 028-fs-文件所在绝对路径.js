// 引入模块
const fs = require("fs");

// __dirname表示当前文件目录的绝对路径
fs.writeFileSync(`${__dirname}/data.txt`, "hello");
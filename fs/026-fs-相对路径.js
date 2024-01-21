// 引入模块
const fs = require("fs");

// 相对路径: 相对路径是参照命令行的所在目录
fs.writeFileSync("./data.txt", "hello");
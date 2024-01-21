// 引入模块
const { log } = require("console");
const fs = require("fs");

// 读取文件
fs.readFile("./data.txt", (err, data) => {
    if (err == null) {
        console.log(data.toString());
    } else {
        console.error("读取错误：", err);
    }
});
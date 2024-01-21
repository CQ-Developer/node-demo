// 引入模块
const fs = require("fs");

// 读取文件夹
fs.readdir("./", (err, data) => {
    if (err) {
        console.error("读取文件夹失败: ", err);
    } else {
        console.log("读取文件夹成功: ", data);
    }
});
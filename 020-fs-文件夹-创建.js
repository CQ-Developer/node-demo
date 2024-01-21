// 引入模块
const fs = require("fs");

// 创建文件夹
fs.mkdir("./html", err => {
    if (err) {
        console.error("创建文件夹失败: ", err);
    } else {
        console.log("创建文件夹成功");
    }
});
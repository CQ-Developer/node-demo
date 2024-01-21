// 导入模块
const fs = require("fs");

// 移动文件
fs.rename("./data-rename.txt", "./资料/data.txt", err => {
    if (err) {
        console.error("移动文件错误：", err);
    } else {
        console.log("移动文件完成");
    }
});
// 引入模块
const fs = require("fs");

// 当前API已经过期
fs.rmdir("./a", { recursive: true }, err => {
    if (err) {
        console.error("删除文件夹失败: ", err);
    } else {
        console.log("删除文件夹成功");
    }
});

// 删除文件夹
fs.rm("./a", { recursive: true }, err => {
    if (err) {
        console.error("删除文件夹失败: ", err);
    } else {
        console.log("删除文件夹成功");
    }
});
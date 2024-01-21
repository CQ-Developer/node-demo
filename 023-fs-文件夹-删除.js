// 引入模块
const fs = require("fs");

// 删除文件夹
fs.rmdir("./html", err => {
    if (err) {
        console.error("删除文件夹失败: ", err);
    } else {
        console.log("删除文件夹成功");
    }
});
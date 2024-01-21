// 引入模块
const fs = require("fs");

// 删除文件
fs.rm("./data.txt", err => {
    if (err) {
        console.error("删除文件失败:", err);
    } else {
        console.log("删除文件完成");
    }
});
// 导入模块
const fs = require("fs");

// 重命名文件
fs.rename("./data.txt", "./data-rename.txt", err => {
    if (err) {
        console.error("重命名失败：", err);
    } else {
        console.log("重命名完成");
    }
});

// 同步API
// fs.renameSync("oldPath", "newPath");
// 引入模块
const fs = require("fs");

// 查看资源状态
fs.stat("./00-hello.js", (err, stats) => {
    if (err) {
        console.error("查看资源失败: ", err);
    } else {
        console.log("查看资源成功: ", stats);
        if (stats.isFile()) {
            console.warn("当前资源是文件");
        }
        if (stats.isDirectory()) {
            console.warn("当前资源是文件夹");
        }
    }
});
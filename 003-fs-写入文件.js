// 引入模块
const fs = require("fs");

// 写入数据
fs.writeFile("./data.txt", "三人行，必有我师焉", err => {
    if (err == null) {
        console.log("写入成功");
    } else {
        console.error("写入失败：", err);
    }
});
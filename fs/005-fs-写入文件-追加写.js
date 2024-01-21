const fs = require("fs");

// 追加写入
fs.appendFile("./data.txt", "，择其善者而从之，其不善者而改之", err => {
    if (err == null) {
        console.log("追加写成功");
    } else {
        console.error("追加写失败：", err);
    }
});

// 追加写入
fs.writeFile("./data.txt", "\rlove love love", { flag: "a" }, err => {
    if (err == null) {
        console.log("追加写成功");
    } else {
        console.error("追加写失败：", err);
    }
});
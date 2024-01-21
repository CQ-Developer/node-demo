// 导入模块
const { log } = require("console");
const fs = require("fs");

// 创建输入流
const rs = fs.createReadStream("./data.txt");

// 创建输出流
const ws = fs.createWriteStream("./data-copy.txt");

// 绑定读取事件
rs.on("data", chunk => ws.write(chunk, err => {
    if (err) {
        console.error("写入错误：", err);
    } else {
        console.log("写入完成");
    }
}));

// 绑定错误事件
rs.on("error", err => console.error("读取错误：", err));

// 绑定结束事件
rs.on("close", () => {
    ws.close();
    console.log("读取完成");
});
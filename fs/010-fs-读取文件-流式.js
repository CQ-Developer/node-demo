// 引入模块
const fs = require("fs");

// 创建通道
const readStream = fs.createReadStream("./data.txt");

// 绑定读取事件
readStream.on("data", chunk => {
    console.log(chunk.length);
});

// 可选事件
readStream.on("error", err => console.error("读取错误：", err));

// 可选事件
readStream.on("end", () => console.log("读取结束"));
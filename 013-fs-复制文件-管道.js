// 引入模块
const fs = require("fs");

// 创建读取流
const rs = fs.createReadStream("./data.txt");

// 创建写入流
const ws = fs.createWriteStream("./data-pipe.txt");

// 管道
rs.pipe(ws);
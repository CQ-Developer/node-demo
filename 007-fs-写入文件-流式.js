// 引入模块
const fs = require("node:fs");

// 创建通道
const writeStream = fs.createWriteStream("./data.txt");

// 写入数据
writeStream.write("半亩方塘一鉴开\n");
writeStream.write("天光云影共徘徊\n");
writeStream.write("问渠哪得清如许\n");
writeStream.write("唯有源头活水来\n");

// 关闭通道
writeStream.close();
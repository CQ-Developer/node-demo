// 导入模块
const http = require("http");
const fs = require("fs");
const path = require("path");

// 创建服务
const server = http.createServer((req, res) => {
    fs.readFile(path.resolve(__dirname, "table.html"), (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end();
        }
        else {
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });
});

// 监听端口
server.listen(8080, () => console.log("server start..."));
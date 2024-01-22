// 导入模块
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

// 创建服务
const server = http.createServer((req, res) => {
    const rootPath = path.resolve(__dirname, "statics");
    const { pathname } = new URL(req.url, "http://127.0.0.1");
    fs.readFile(rootPath + pathname, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("请求失败");
        } else {
            res.end(data);
        }
    });
});

// 监听端口
server.listen(8080, () => console.log("server start..."));
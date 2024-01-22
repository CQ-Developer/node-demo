// 导入模块
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const MIME = {
    html: "text/html",
    js: "text/javascript",
    css: "text/css"
};

// 创建服务
const server = http.createServer((req, res) => {
    const rootPath = path.resolve(__dirname, "statics");
    const { pathname } = new URL(req.url, "http://127.0.0.1");
    const filePath = rootPath + pathname;
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("请求失败");
        } else {
            // 获取后缀名
            const extName = path.extname(filePath).substring(1);
            // 获取
            const mimeType = MIME[extName];
            if (mimeType) {
                res.setHeader("Content-Type", mimeType);
            } else {
                res.setHeader("Content-Type", "application/octet-stream");
            }
            res.end(data);
        }
    });
});

// 监听端口
server.listen(8080, () => console.log("server start..."));
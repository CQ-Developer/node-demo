// 导入模块
const http = require("http");
const fs = require("fs");

// 创建服务
const server = http.createServer((req, res) => {
    const { pathname } = new URL(req.url, "http://127.0.0.1:8080");
    const filename = __dirname + "/statics" + pathname;
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("请求失败");
        } else {
            res.end(data);
        }
    });
});

// 监听端口
server.listen(8080, () => console.log("server start..."));
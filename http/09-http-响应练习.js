// 导入模块
const http = require("http");
const fs = require("fs");
const path = require("path");

// 创建服务
const server = http.createServer((req, res) => {
    const { pathname } = new URL(req.url, "http://127.0.0.1:8080");
    console.log(pathname);
    if (pathname == "/") {
        res.setHeader("Content-type", "text/html");
        fs.readFile(path.resolve(__dirname, "table.html"), (err, data) => res.end(data));
    } else if (pathname == "/table.css") {
        res.setHeader("Content-type", "text/css");
        fs.readFile(path.resolve(__dirname, "table.css"), (err, data) => res.end(data));
    } else if (pathname == "/table.js") {
        res.setHeader("Content-type", "text/javascript");
        fs.readFile(path.resolve(__dirname, "table.js"), (err, data) => res.end(data));
    } else {
        res.statusCode = 404;
        res.end("<h1>Not Found</h1>");
    }
});

// 监听端口
server.listen(8080, () => console.log("server start..."));
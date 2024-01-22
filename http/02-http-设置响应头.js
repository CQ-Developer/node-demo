// 引入模块
const http = require("http");

// 启动Server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    res.end("你好");
});

// 监听端口号
server.listen(8080, () => console.log("server up..."));
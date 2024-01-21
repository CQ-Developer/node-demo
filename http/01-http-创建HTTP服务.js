// 引入模块
const { log } = require("console");
const http = require("http");

// 创建HTTP服务
const server = http.createServer((req, res) => {
    res.end("helllo from server");
});

// 监听端口
server.listen(8080, () => console.log("server start"));
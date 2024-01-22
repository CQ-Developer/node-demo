// 引入模块
const http = require("node:http");
const url = require("node:url");

// 启动Server
const server = http.createServer((req, res) => {
    // 解析路径和查询字符串
    const parsedUrl = url.parse(req.url, true);
    // 请求路径
    const path = parsedUrl.pathname;
    console.log("请求路径：", path);
    // 查询参数
    const wd = parsedUrl.query.wd;
    console.log("查询参数：", wd);
    // 响应
    res.end("hello");
});

// 监听端口号
server.listen(8080, () => console.log("server up..."));

// 测试命令
// curl http://127.0.0.1:8080/test?wd=abc
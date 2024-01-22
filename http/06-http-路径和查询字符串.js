// 引入模块
const http = require("node:http");

// 启动Server
const server = http.createServer((req, res) => {
    // 创建URL对象
    const url = new URL(req.url, "http://127.0.0.1:8080");
    // 请求路径
    const pathname = url.pathname;
    console.log("请求路径：", pathname);
    // 查询参数
    const wd = url.searchParams.get("wd");
    console.log("查询参数：", wd);
    // 响应
    res.end("hello");
});

// 监听端口号
server.listen(8080, () => console.log("server up..."));

// 测试命令
// curl http://127.0.0.1:8080/test?wd=abc
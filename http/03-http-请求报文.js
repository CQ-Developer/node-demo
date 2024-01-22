// 引入模块
const http = require("http");

// 启动Server
const server = http.createServer((req, res) => {
    // 请求方法
    const method = req.method;
    console.log("请求方法：", method);
    // 获取请求的url：只包含查询路径和查询字符串
    const url = req.url;
    console.log("请求的url：", url);
    // 获取请求的HTTP协议版本
    const version = req.httpVersion;
    console.log("请求的协议版本：", version);
    // 获取请求头
    const headers = req.headers;
    console.log("请求头：", headers);
    // 响应
    res.end("hello");
});

// 监听端口号
server.listen(8080, () => console.log("server up..."));

// 测试命令
// curl -v http://127.0.0.1:8080/test?username=chen&password=123
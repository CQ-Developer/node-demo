// 导入模块
const http = require("http");

// 创建服务
const server = http.createServer((req, res) => {
    // 设置响应码
    res.statusCode = 203;
    // 设置状态描述
    res.statusMessage = "hello";
    // 设置响应头
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Server", "Node.JS");
    // 设置多个同名响应头
    res.setHeader("X-My-Header", ["a", "b", "c"]);
    // 设置响应体
    // 如果使用write则只能存在一个end并且通常情况下不再写入内容
    res.write("hello");
    res.end();
});

// 监听端口
server.listen(8080, () => console.log("server start..."));

// 测试
// curl -v http://127.0.0.1:8080/test
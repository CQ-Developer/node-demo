// 引入模块
const http = require("http");

// 启动Server
const server = http.createServer((req, res) => {
    let body = "";
    // 绑定数据事件
    req.on("data", chunk => body += chunk);
    // 绑定数据结束事件
    req.on("end", () => console.log(body));
    // 响应
    res.end("hello");
});

// 监听端口号
server.listen(8080, () => console.log("server up..."));

// 测试命令
// curl -X POST -H "Content-Type:application/json" -d '{"username":"chen"}' http://127.0.0.1:8080/test
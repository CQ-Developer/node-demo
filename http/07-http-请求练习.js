// 导入模块
const http = require("http");

// 创建服务
const server = http.createServer((req, res) => {
    const { method } = req;
    const { pathname } = new URL(req.url, "http://127.0.0.1");
    if (method == "GET" && pathname == "/login") {
        res.end("登录页面");
    }
    else if (method == "POST" && pathname == "/reg") {
        res.end("注册页面");
    }
    else {
        res.end("not found");
    }
});

// 监听端口
server.listen(8080, () => console.log("server start..."));

// 测试
// curl http://127.0.0.1:8080/login
// curl -X POST http://127.0.0.1:8080/reg
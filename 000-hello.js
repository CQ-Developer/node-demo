console.log("hello node.js!");

// node.js的顶级对象
console.log(global);

// es2020 定义了顶级对象globalThis
console.log(global === globalThis);

// 文件所在目录的绝对路径
console.log(__dirname);

// 文件的绝对路径
console.log(__filename);
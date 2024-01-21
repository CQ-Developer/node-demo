// Buffer一旦创建长度不可变更
// Buffer的每个元素占用1个字节

// 1. alloc
const buf1 = Buffer.alloc(16);
console.log(buf1);

// 2. allocUnsafe
// 这种方式创建的Buffer可能包含旧的内存数据
// 这种方式创建方式性能更好，因为不需要初始化
const buf2 = Buffer.allocUnsafe(16);
console.log(buf2);

// 3. from
// 通过字符串创建Buffer
const buf3 = Buffer.from("hello");
console.log(buf3);
// 通过数组创建Buffer
const buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf4);
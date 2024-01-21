// Buffer与字符串转换
const buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf.toString());

// 读写
const buf1 = Buffer.from("hello");
console.log(buf1);
console.log(buf1[0]);
console.log(buf1[0].toString(2));
buf1[0] = 95;
console.log(buf1);
console.log(buf1.toString());

// 溢出
// 一个字节能表示的最大数值是255
const buf3 = Buffer.from("hello");
buf3[0] = 361; // 舍弃高位
console.log(buf3);

// 中文
// UTF8中一个中文占3个字节
const buf4 = Buffer.from("你好");
console.log(buf4);
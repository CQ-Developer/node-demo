function tiemo() {
    console.log("贴膜...");
}

function niejiao() {
    console.log("捏脚...");
}

// 方式一
// module.exports = { tiemo, niejiao };

// 方式二
// exports.tiemo = tiemo;
// exports.niejiao = niejiao;

// 可以暴露任意数据
// module.exports = "hello";

// 注意
// exports = module.exports = {};
console.log(exports === module.exports);
// 在文件名前加个0
const fs = require("fs");
const fileNames = fs.readdirSync("./");
fileNames.forEach(fileName => {
    const index = fileName.indexOf("-");
    const prefix = fileName.substring(0, index);
    const rest = fileName.substring(index + 1);
    const newFileName = `0${prefix}-${rest}`;
    fs.renameSync(`./${fileName}`, `./${newFileName}`);
});
const fs = require("fs");

const readline = require("readline");

let fReadName = "./oui.txt";
let fRead = fs.createReadStream(fReadName);

var objReadline = readline.createInterface({
  input: fRead,
  // 这是另一种复制方式，这样on('line')里就不必再调用fWrite.write(line)，当只是纯粹复制文件时推荐使用
  // 但文件末尾会多算一次index计数   sodino.com
  //  output: fWrite,
  //  terminal: true
});

let OuiArr = [];
objReadline.on("line", (line) => {
  let keyReg = /([0-9a-z/-][0-9a-z/-])-([0-9a-z/-][0-9a-z/-])-([0-9a-z/-][0-9a-z/-])/gi;
  let incReg = /\s\s/;

  let ouiKey = keyReg.exec(line);
  if (ouiKey !== null) {
    let ouiObj = new Object();
    ouiObj.key = ouiKey[0];
  }

  console.log(incReg.exec(line));
});

objReadline.on("close", () => {
  console.log("readline close...");
});

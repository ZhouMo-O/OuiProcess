const fs = require("fs");

const readline = require("readline");

let fReadName = "./oui.txt";
let fRead = fs.createReadStream(fReadName);

var objReadline = readline.createInterface({
  input: fRead,
});

let OuiArr = [];

objReadline.on("line", (line) => {
  let keyReg = /([0-9a-z/-][0-9a-z/-])-([0-9a-z/-][0-9a-z/-])-([0-9a-z/-][0-9a-z/-])/gi;
  let incReg = /\(hex\)\t\t[a-z\s,.]+/i;

  let ouiKey = keyReg.exec(line);
  let ouiInc = incReg.exec(line);

  if (ouiKey !== null && ouiInc !== null) {
    let ouiObj = new Object();
    ouiObj.key = ouiKey[0];
    ouiObj.inc = ouiInc[0].slice(7);
    OuiArr.push(ouiObj);
  }
});

objReadline.on("close", () => {
  console.log(OuiArr);
  console.log("readline close...");
});

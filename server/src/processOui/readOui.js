module.exports = (ouiFile, callback) => {
  const fs = require("fs");
  const readline = require("readline");
  let fReadName = "./oui.txt";
  let fRead = fs.createReadStream(ouiFile);

  var objReadline = readline.createInterface({
    input: fRead,
  });
  let OuiArr = []; //解析后的oui数组对象 {key：inc}

  objReadline.on("line", (line) => {
    let keyReg = /([0-9a-z/-][0-9a-z/-])-([0-9a-z/-][0-9a-z/-])-([0-9a-z/-][0-9a-z/-])/gi; //解析key
    let incReg = /\(hex\)\t\t[a-z\s,.]+/i; //解析inc

    let ouiKey = keyReg.exec(line); //匹配当前行中的key
    let ouiInc = incReg.exec(line); //匹配当前行的inc

    if (ouiKey !== null && ouiInc !== null) {
      //key和inc是同一行，如果缺了其中一个就不要往下走了
      let ouiObj = new Object(); //新建对象
      ouiObj.key = ouiKey[0]; //赋值key
      ouiObj.inc = ouiInc[0].slice(7); //因为是通过（hex）去匹配的。所以要切割(hex)和两个换行符
      OuiArr.push(ouiObj); //push到oui数组里去
    }
  });

  objReadline.on("close", (err) => {
    if (err) throw err;
    //因为是异步操作，所以需要在close事件触发之后才能确保完整的读取了数据。
    callback(OuiArr);
    return OuiArr;
    console.log("readline close...");
  });
};

const express = require("express");
const app = express();
const PORT = 4025;

require("./router/router")(app);
let db = require("./db/oui");
let oui = new db();
let ouiPath = "./src/processOui/oui.txt";
let readOui = require("./src/processOui/readOui")(ouiPath, (data) => {
  let create = oui.insert("(key,inc)", data);
});

app.listen(PORT, () => {
  console.log(`启动成功，port${PORT}`);
});

//updata oui 更新数据库
//输入 mac 返回制造厂商
//输入制造商 返回 mac

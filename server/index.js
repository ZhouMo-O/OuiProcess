const express = require("express");
const app = express();
const PORT = 4000;

require("./router/router")(app);

app.listen(PORT, () => {
  console.log(`启动成功，port${PORT}`);
});

//updata oui 更新数据库
//输入 mac 返回制造厂商
//输入制造商 返回 mac

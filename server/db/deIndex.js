const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./test.db", (err) => {
  if (err) {
    console.log(`数据库打开失败！${err}`);
  }
});

// let deleteSql = `drop table reg_host`;
// db.prepare(deleteSql).run();

let isExists = `select * from reg_host`;
let createRegHostTable = `create table reg_host(
    id INTEGER PRIMARY KEY   AUTOINCREMENT,
    ip text NOT NULL,
    mac text NOT NULL,
    company text NOT NULL,
    department text NOT NULL
)`;

// 判断表是否存在，没有就新建一个
let res = db.prepare(isExists, (err) => {
  if (err.message == "no such table: reg_host") {
    db.prepare(createRegHostTable).run();
  } else {
    console.log(`数据表已存在`);
  }
});

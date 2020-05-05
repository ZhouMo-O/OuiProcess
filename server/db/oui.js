// let deleteSql = `drop table reg_host`;
// db.prepare(deleteSql).run();
const db = require("./dbIndex")("./db/oui.db");
class oui {
  constructor() {
    this.db = db;
  }

  _createTable() {
    let isExists = `select * from oui`;
    let createRegHostTable = `create table oui(
            id INTEGER PRIMARY KEY   AUTOINCREMENT,
            key text NOT NULL,
            inc text NOT NULL
        )`;
    // 判断表是否存在，没有就新建一个
    this.db.prepare(isExists, (err) => {
      if (err) {
        db.prepare(createRegHostTable).run();
      } else {
        console.log(`数据表已存在`);
      }
    });
  }

  async insert(name, data) {
    this._createTable();
    // let res = await this.db
    //   .prepare(`insert into oui ${name} values (12,33)`)
    //   .run();
    // console.log(res);

    for (let i = 0; i < data.length; i++) {
      let key = data[i].key;
      let inc = data[i].inc;
      let insertSql = `insert into oui ${name} values ('${key}','${inc}')`;
      let into = await this.db.prepare(insertSql);
      console.log(into.run());
    }
  }
}

module.exports = oui;

// const db = require("./db/dbIndex")("./db/oui.db");

// let isExists = `select * from reg_host`;
// let createRegHostTable = `create table reg_host(
//     id INTEGER PRIMARY KEY   AUTOINCREMENT,
//     ip text NOT NULL,
//     mac text NOT NULL,
//     company text NOT NULL,
//     department text NOT NULL
// )`;

// // 判断表是否存在，没有就新建一个
// let res = db.prepare(isExists, (err) => {
//   if (err.message == "no such table: reg_host") {
//     db.prepare(createRegHostTable).run();
//   } else {
//     console.log(`数据表已存在`);
//   }
// });

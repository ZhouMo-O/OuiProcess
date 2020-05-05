module.exports = (dbpath) => {
  const sqlite3 = require("sqlite3").verbose();
  const db = new sqlite3.Database(dbpath, (err) => {
    if (err) {
      console.log(`数据库打开失败！${err}`);
    }
  });

  return db;
};
let connectToDatabase = async () => {
  const odbc = require("odbc");
  try {
    const connection = await odbc.connect("DSN=openMysql");

    // const del = await connection.query(`drop table reg_host`);//删除表
    // const res = await connection.query(`CREATE TABLE reg_host //创建表
    // (
    //   id int NOT NULL AUTO_INCREMENT,
    //   ip varchar(32) NOT NULL,
    //   company varchar(32) NOT NULL,
    //   department varchar(32) NOT NULL,
    //   primary key(id)
    // )`);
    // const res = await connection.query(
    //   "insert into reg_host (ip,company,department) value ('192.168.1.1','test','testDepartment')" //插入数据
    // );
    // const createDataBase = await connection.query("");
    const useDatabase = await connection.query("use infosafe");
    const query = await connection.query("select * from reg_host");
    console.log(query);
  } catch (error) {
    console.log(error);
  }
};

connectToDatabase();

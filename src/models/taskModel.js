var mysql = require('mysql');
var con = mysql.createConnection({
    // host: "mysql-svc",
    // user: "root",
    // password: "passfordb@2022"
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});
con.connect((err) => {
    if (err) {
        console.log('Database connection failed. ' + err.message)
    } else { 
        console.log("Connected to the database!")
    }
});

var sql = 'CREATE DATABASE IF NOT EXISTS todo_db';  
con.query(sql, (err, result)=>{
      if (err) throw err;
      console.log(result)
  })

// Create Table

var con = mysql.createConnection({
//   host: "mysql-svc",
//   user: "root",
//   password: "passfordb@2022",
//   database: "todo_db"
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB

});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
var sql ="CREATE TABLE IF NOT EXISTS Todo (task_id int NOT NULL AUTO_INCREMENT, task VARCHAR(255) NOT NULL, status VARCHAR(255), PRIMARY KEY (task_id))";
con.query(sql, (err, result)=>{
      if (err) throw err;
      console.log(result)
  })
});
// con.end();
module.exports = con;


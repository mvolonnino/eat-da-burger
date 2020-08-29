// connect to mySQL
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_KEY,
  database: "burgers_db",
});

// make the connection
connection.connect(function (err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("🔥connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;

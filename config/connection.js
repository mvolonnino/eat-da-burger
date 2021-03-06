// connect to mySQL
var mysql = require("mysql");

var connection;

// make connection the heroku jawsdb
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_KEY,
    database: "burgers_db",
  });
}

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

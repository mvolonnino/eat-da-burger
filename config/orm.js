// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  all: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.log("result: ", result);
      cb(result);
    });
  },
};

module.exports = orm;

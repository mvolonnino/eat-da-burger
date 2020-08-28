// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
};

module.exports = burger;

-- add information into burgers_db
USE burgers_db;

INSERT INTO burgers(name)
VALUES ("Cheeseburger"), ("Double Bacon Burger"), ("Big Mac");

INSERT INTO burgers(name, devour)
VALUES ("Whopper", true), ("JR Whopper", true), ("Dumpster Burger", true);
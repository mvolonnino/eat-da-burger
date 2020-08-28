-- Drop database if exists
DROP DATABASE IF EXISTS burgers_db;
-- Create burger_db
CREATE DATABASE burgers_db;

-- use database
USE burgers_db;

-- create table burgers with PK (id), name, and devour(boolean)
create table burgers(
  id int auto_increment primary key,
  name varchar(255) not null,
  devour boolean default false
);


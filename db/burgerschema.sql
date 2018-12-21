CREATE DATABASE burgers_dbs;
USE burgers_dbs;

CREATE TABLE burgers (

	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY (id)

);
INSERT INTO burgers (name, devoured) 
VALUES ("Cheeseburger", false),
("Big Mac", true),
("Whopper", false),
("McChicken", true);
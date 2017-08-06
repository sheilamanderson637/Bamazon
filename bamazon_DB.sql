DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_qty INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Yoga Mat", "Fitness", "25", "25");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Shake Weight", "Fitness", "20", "99");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Fitness Ball", "Fitness", "24", "10");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("5 LB Free Weights - Set/2", "Fitness", "16", "50");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Baby Doll", "Toys", "15", "16");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Malibu Barbie", "Toys", "12", "19");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Malibu Ken", "Toys", "12", "99");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Star Wars Lego Set", "Toys", "50", "8");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Checkers", "Games", "15", "29");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Sushi Go Party Set", "Games", "25", "23");




SELECT * FROM products;
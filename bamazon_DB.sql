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
VALUES ("Yoga Mat", "Fitness", "19.99", "25");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Shake Weight", "Fitness", "18.99", "99");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Fitness Ball", "Fitness", "25.99", "10");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("5 LB Free Weights - Set/2", "Fitness", "24.99", "50");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Baby Doll", "Toys", "16.99", "16");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Malibu Barbie", "Toys", "12.99", "19");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Malibu Ken", "Toys", "12.99", "99");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Star Wars Lego Set", "Toys", "49.99", "8");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Checkers", "Games", "15.99", "29");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Sushi Go Party Set", "Games", "24.99", "23");




SELECT * FROM products;
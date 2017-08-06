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
VALUES ("Shake Weight", "Fitness", "18.99", "99");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Shake Weight", "Fitness", "18.99", "99");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Shake Weight", "Fitness", "18.99", "99");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Shake Weight", "Fitness", "18.99", "99");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Shake Weight", "Fitness", "18.99", "99");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Shake Weight", "Fitness", "18.99", "99");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Shake Weight", "Fitness", "18.99", "99");

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Shake Weight", "Fitness", "18.99", "99");




SELECT * FROM products;
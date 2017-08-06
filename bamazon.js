var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');
var prompt = require('prompt');

// Establish connection
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon_DB'
});
// Show connection and ID
connection.connect(function(err) {
if (err) throw err;
console.log("connected as id " + connection.threadId);
start();
});

// // Logs all of the items in the database
// connection.query('SELECT * FROM products', function(err,res) {
// if (err) throw err;
// console.log(res);
// start();
//   })

// performs inital query of Products table from database
var start = function() {
    connection.query('SELECT * FROM products', function(err, res) {
        console.log(' ');
        console.log('**************************************************************************************');
        console.log(' ');
        console.log('                       BAMAZON PRODUCTS AVAILABLE FOR PURCHASE');
        console.log(' ');
        console.log('**************************************************************************************');
        // New Table instance to format returned sql data
            var table = new Table({
                head: ['Item ID #', 'Product Name', 'Department Name', 'Price', 'Quantity'],
                colWidths: [10, 40, 10, 10, 10]
            });
        for (var i=0; i < res.length; i++) {
            var productArray = [res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_qty];
            table.push(productArray);
        }
        console.log(table.toString());
        });
    };

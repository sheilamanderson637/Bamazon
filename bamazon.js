var mysql = require('mysql');
var inquirer = require('inquirer');
var table = require('cli-table');

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
console.log("connected as id" + connection.threadID);

// Logs all of the items in the database
connection.query('SELECT * FROM products', function(err,res) {
  if (err) throw err;
  console.log(res);
})

});

// Dependancies
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

// // Logs all of the items in the database ** used for intial testing **
// connection.query('SELECT * FROM products', function(err,res) {
// if (err) throw err;
// console.log(res);
// start();
//   })

// performs inital query of products table from database
var start = function(a) {
    connection.query('SELECT * FROM products', function(err, res) {
        console.log(' ');
        console.log('**************************************************************************************');
        console.log(' ');
        console.log('                       BAMAZON PRODUCTS AVAILABLE FOR PURCHASE');
        console.log(' ');
        console.log('**************************************************************************************');

// New Table to format returned sql data
            var table = new Table({
                head: ['Item ID #', 'Product Name', 'Department Name', 'Price', 'Quantity'],
                colWidths: [10, 40, 20, 10, 10]
            });
        for (var i=0; i < res.length; i++) {
            var productArray = [res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_qty];
            table.push(productArray);
        }
        console.log(table.toString());
        purchaseItem();
        });
    };

// Shopping prompt to purchase items
var purchaseItem = function() {
    inquirer.prompt([{
        name: "Item",
        type: "input",
        message: "Choose the ID of the Item you would like to buy",
        validate: function(value) {
            //validates answer
            if (isNaN(value) === false) {
                return true;
            } else {
                console.log("\nYou did not enter a number. Please enter the item number of the product you wish to purchase.\n");
                return false;
            }
        }
    }, {
      //Prompts the customer for the quantity
        name: "Qty",
        type: "input",
        message: "How many would you like to purchase?",
        validate: function(value) {
            //validates answer
            if (isNaN(value) === false) {
                return true;
            } else {
                console.log("\nPlease enter a valid Quantity\n");
                return false;
            }
        }
        }]).then(function(answer) {
            var ItemInt = parseInt(answer.Qty);

// Queries the database
                connection.query("SELECT * FROM products WHERE ?", [{id: answer.Item}], function(err, data) { 
                    if (err) throw err;

// Verify if there is enough inventory to fill the order
                    if (data[0].stock_qty < ItemInt) {
                       console.log("We're sorry, that Item is currently out of stock.\n");
                       console.log("Please choose another product.\n");
                       purchaseItem(); 
                    } else {

// If there is enough stock to fulfill the order, update the database
                        var updateQty = data[0].stock_qty - ItemInt;
                        var totalPrice = data[0].price * ItemInt;
                        connection.query('UPDATE products SET stock_qty = ? WHERE id = ?', [updateQty, answer.Item], function(err, results) {
                        if(err) {
                            throw err;
                        } else {

// Order confirmation messaging to customer
                        console.log('Your purchase was successfull!\n');
                        console.log('The total cost for your order is: $ ' + totalPrice);
                        console.log('Thank you for shopping at Bamazon! Please return soon.')
                        connection.end();
                        }
                      });
                    }
                });
        })
}
var mysql = require('mysql');

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
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});

// Function to add products
function createProduct() {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
        product_name: 'Shake Weight',
        department_name: 'Fitness',
        price: 19.99,
        stock_qty: 99
    },
  );

  // logs the actual query being run
  console.log(query.sql);
};

  

    

    
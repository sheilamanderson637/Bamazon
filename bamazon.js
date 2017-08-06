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
  console.log("connected as id " + connection.threadId);
});
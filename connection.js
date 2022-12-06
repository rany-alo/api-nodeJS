var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'rany',
  password : 'r1r2r3r4',
  database: "api-symfony"
});

connection.connect();

connection.query("SELECT * FROM user", function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
});

connection.end();
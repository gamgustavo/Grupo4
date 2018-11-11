var express = require('express')
var app = express()
var mysql      = require('mysql');






app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {

var connection = mysql.createConnection({
  host     : 'seminariords.cmm07rfgsbfs.us-east-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'Seminario1234',
  database : 'mydb'
});

connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();


  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})


var express = require('express')
var app = express()
var mysql      = require('mysql');



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mydb3.cuzllkjwjtyt.us-east-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'Seminario1234'
});



app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    
    connection.end();

  });

  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

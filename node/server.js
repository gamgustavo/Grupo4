// load the things we need
var express = require('express');
var app = express();
var AWS = require('aws-sdk');
var mysql = require('mysql');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/static', express.static('public'));
// use res.render to load up an ejs view file


const BUCKET_NAME = 'seminario';
const IAM_USER_KEY = 'AKIAITOICSVR35LBCLYA';
const IAM_USER_SECRET = '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';


function uploadToS3(file) {
  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME
  });
  s3bucket.createBucket(function () {
      var params = {
        Bucket: BUCKET_NAME,
        Key: file.name,
        Body: file.data
      };
      s3bucket.upload(params, function (err, data) {
        if (err) {
          console.log('error in callback');
          console.log(err);
        }
        console.log('success');
        console.log(data);
      });
  });
}


// index page 
app.get('/', function(req, res) {
	var connection = mysql.createConnection({
	host     : 'seminariords.cmm07rfgsbfs.us-east-2.rds.amazonaws.com',
	user     : 'admin',
	password : 'Seminario1234',
	database : 'mydb'
	});
	connection.connect();	
	connection.query('SELECT * from autos', function (error, results, fields) {

        if(error){
            throw error;
        } else {
			var data = JSON.stringify(results);
			res.render('pages/index',{data: data});
        }
	});	

	
});

app.get('/eliminar/:Id', function(req, res) {
  var id = req.params.Id;
	var connection = mysql.createConnection({
	host     : 'seminariords.cmm07rfgsbfs.us-east-2.rds.amazonaws.com',
	user     : 'admin',
	password : 'Seminario1234',
	database : 'mydb'
	});
	connection.connect();	
  var comando = 'delete from autos where id = ' + id.toString() + ';';
  console.log(comando);


	connection.query( comando , function (error, results, fields) {
        if(error){
            throw error;
        } else {
           res.redirect('/');
        }
	});	


});



// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

app.listen(8000);
console.log('8000 is the magic port');
var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./routes/index')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/', routes)

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://%s:%s', host, port)
})
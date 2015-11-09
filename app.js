var express = require('express');

var routes = require('./routes/index')
var app = express();


app.use('/', routes)

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://%s:%s', host, port)
})
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/', function (request, response) {
	debugger;
	response.json(
	{
		status:'good',
		data: request.body
	});
});

app.listen(3000);
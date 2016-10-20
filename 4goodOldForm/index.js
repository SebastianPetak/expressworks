var express = require('express');
var app = express();

var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}))
// allows us to access the keys and values of the form
// via req.body.

// write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and prints the value of str backwards
// "str" IS THE KEY FOR THE ITEM IN THE FORM WE ARE ACCESSING

// to handle Post request, use the post() method, same way as get()
app.post('/form', function(req,res) {
	var answer = req.body.str.split('').reverse().join('');
	res.end(answer);
}).listen(Number(process.argv[2]));

// middleware is a function invoked by Express.js before your own request handler
// Middleware provides a large variety of functionality such as logging, serving
// static files, and error handling

// to parse x-www-form-urlencoded request bodies, Express.js can use urlencoded() middleware from the body-parser module
// var body parser = require('body-parse')
// app.use(bodyparser.urlencoded({extended: false}))

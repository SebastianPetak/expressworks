var express = require('express');
var app = express();

var bodyParser = require('body-parser');


use(bodyParser.urlencoded({extended:false}))
// Extended set to tru (qs) or false (querystring) determines the parser module


// write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and prints the value of str backwards

req.body.str.split('').reverse().join('');

// to handle Post request, use the post() method, same way as get()
app.post('/path', function(req,res) {

})

// middleware is a function invoked by Express.js before your own request handler
// Middleware provides a large variety of functionality such as logging, serving
// static files, and error handling

// to parse x-www-form-urlencoded request bodies, Express.js can use urlencoded() middleware from the body-parser module
// var body parser = require('body-parse')
// app.use(bodyparser.urlencoded({extended: false}))

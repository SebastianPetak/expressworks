var express = require('express')
var app = express()
var fs = require('fs')

// SEE INDEX.JS, THIS IS MINIMAL TEST

app.get('/books', function(req, res) {
	var filename = process.argv[3];
	fs.readFile(filename, function(e, data) {
		book = JSON.parse(data);
		res.send(book);
	})
}).listen(process.argv[2] || 3000)

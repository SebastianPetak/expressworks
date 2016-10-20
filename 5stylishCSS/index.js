var express = require('express');
var app = express();
var port = process.argv[2];

app.use(require('stylus').middleware('public'));

app.use(express.static('public')).listen(port);

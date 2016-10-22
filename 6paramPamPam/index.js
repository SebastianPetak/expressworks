var express = require('express');
var app = express();
var crypto = require('crypto');

var http = require('http');

function createCrypt(id) {
    return crypto.createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');
}


app.put('/message/:id', function(req, res) {
    var id = req.params.id;
    res.send(createCrypt(id));
    console.log(createCrypt(id));
}).listen(process.argv[2]);

// app.param
// require('crypto') SHA-1 and hash

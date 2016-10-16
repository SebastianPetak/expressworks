var express = require('express');
var app = express();
var port = process.argv[2];
var file = process.argv[3];

// This is how you can call static middleware assuming your static folder is public and it's in the same folder as the main project file.
//app.use(express.static('public'))


// process.argv[3] is just a path. 
// we are listening for the url inside that path to serve
app.use(express.static(process.argv[3] || path.join(__dirname, 'public'))).listen(port);

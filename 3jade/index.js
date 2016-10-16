var express = require('express');
var app = express();
var path = require('path');


pathToJade = process.argv[3];

// To tell Express.js app what template engine to use, apply this line to the
// express.js configuration
app.set('view engine', 'jade')

//This is how you can specify the path to the template files in the folder templates
path.join(__dirname, 'templates');
//app.set('views', process.argv[3])//path.join(__dirname, 'templates'))

// the -_direname is the absoulte apth of this file and the path.join is used to produce
// cross-platform path (Win vs. Linux/Mac)


// instead of res.end(), res.render() function accepts a template
// name and data (called locals):
app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()})
}).listen(process.argv[2]);
// jade template engine
// /home page
// view should show current date with 
// new Date.toDateString() , we use 'toDateString() to return 
// the date in a human-readable format without the time

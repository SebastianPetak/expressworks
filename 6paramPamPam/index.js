var http = require('http');

var server = createServer(function(req, res) {
	req.param('id', function(req,res,next,id) {
		req.id = id
	})
})

// app.param
// require('crypto') SHA-1 and hash

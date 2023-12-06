// create web server
// run server: node comments.js
// open browser: http://localhost:3000/comments.html
// web server will return comments.html file
// web server will return comments.json file

var http = require('http');
var fs = require('fs');

// create web server
var server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url);
  // set content type
  res.writeHead(200, {'Content-Type': 'text/html'});
  // read file from file system
  var myReadStream = fs.createReadStream(__dirname + '/comments.html', 'utf8');
  // send response to browser
  myReadStream.pipe(res);
});

// listen to port
server.listen(3000, '
var http = require(‘http’),
fs = require(‘fs’),
io = require(‘socket.io’),
index;
fs.readFile(‘./chat.html’, function (err, data) {
 if (err) {
    throw err;
 }
 index = data;
});
var server = http.createServer(function(request, response) {
  response.writeHeader(200, {“Content-Type”: “text/html”});
  response.write(index);
  response.end();
}).listen(1223);

var socket = io.listen(server);

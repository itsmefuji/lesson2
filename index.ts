var http = require('http');

var hostname = '127.0.0.1';
var port:number = process.env.PORT || 1337;

http.createServer(function(req:http.ServerRequest, res:http.ServerResponse) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
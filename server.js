var http = require('http');
var hostname = '127.0.0.1';
var port = process.env.PORT || 1337;
//varport:number = process.env.PORT || 1337; 
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
//# sourceMappingURL=server.js.map
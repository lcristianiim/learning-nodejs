var fs = require('fs'),
    http = require('http'),
    port = process.argv[2],
    file = process.argv[3],
    server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        var rStream = fs.createReadStream(file);
        rStream.pipe(res);
    });

server.listen(port);
console.log('Server is listening on port' + port);


// var http = require('http');
// http.createServer(function (req, res) {
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.write('me');
//         res.end('Hello World\n');
//
// }).listen(8000);
//
// console.log('Server running at localhost:8000');

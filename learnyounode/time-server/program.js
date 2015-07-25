var net = require ('net'),
    port = process.argv[2],
    strftime = require ('strftime'),
    date = new Date();

var server = net.createServer(function (socket){
    socket.write(strftime(
        '%F' +
        ' ' +
        '%H:%M'
    ))
    socket.end()
})

server.listen(port);

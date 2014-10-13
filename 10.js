var net = require('net'),
    strftime = require('strftime');
var server = net.createServer(function (socket) {
    socket.end(strftime("%Y-%m-%d %H:%M", new Date()));
});
server.listen(process.argv[2]);

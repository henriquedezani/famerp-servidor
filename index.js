var http = require('http');
var express = require('express');
var socketIo = require('socket.io');
var app = express();

var server = http.createServer(app);

var io = socketIo(server);

var port = process.env.PORT || '3003';

server.listen(port, () => {
    console.log('Running server on port %s', port);
});

io.on('connect', (socket) => {
    console.log('Connected client on port %s.', port);

    socket.on('message', (m) => {
        // console.log('[server](message): %s', JSON.stringify(m));
        io.emit('message', m);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});
const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public' );
const PORT = process.env.PORT || 2900;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{

    console.log('New user connected.');

    socket.on('disconnect', ()=>{
        console.log('User disconnected')
    });

})

server.listen(PORT, ()=>{
    console.log (`Server started on port ${PORT}`);
});

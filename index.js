const express = require('express');
const app = express();
const port = process.env.PORT  ||3000;
const server = app.listen(port);
app.use(express.static('public'))
const socket = require('socket.io')
const io = socket(server);
io.sockets.on('connection', socket => {
    socket.on('mouse', data => {
        socket.broadcast.emit('mouse', data)
    })
})
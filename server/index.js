const express = require('express');
const app = express();

const http = require('http');
const { Server } = require('socket.io');

const cors = require('cors');
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

let connections = 0;

io.on('connection', (socket) => {
  connections++
  console.log(`User connected in ${socket.id}`);
  console.log(connections);
  socket.emit('receive_initial_deck', [...Array(10).keys()]);

  socket.on('send_deck', deck => {
    socket.broadcast.emit('receive_deck', deck);
  })
})

server.listen(3001, () => {
  console.log('Server is running...');
})
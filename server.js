const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);
const PORT = process.env.PORT || 3001;
const IP   = process.env.IP   || "localhost";

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('name', (msg) => {
    console.log('name: ' + msg);
    io.emit('greeting', 'Hi! ' + msg);
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

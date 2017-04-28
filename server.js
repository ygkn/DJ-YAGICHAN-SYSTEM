const express = require('express');
const app     = express();
const http    = require('http').Server(app);
const io      = require('socket.io')(http);
const path    = require('path');
const PORT    = process.env.PORT || 3001;
const IP      = process.env.IP   || "localhost";
const STATIC_DIR = path.resolve(__dirname, "client", "build");

app.use(express.static(STATIC_DIR));

app.get('/*', (req,res) => {
  res.sendFile(path.join(STATIC_DIR, 'index.html'))
})

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('name', (msg) => {
    console.log('name: ' + msg);
    io.emit('greeting', 'Hi! ' + msg);
  });
});

http.listen(PORT, () => {
  console.log(`listening on http://${IP}:${PORT}`);
});

const express = require("express");
const app     = express();
const http    = require("http").Server(app);
const PORT    = process.env.PORT || 3000;
const path    = require("path");
const io      = require('socket.io')(http);

app.set('view engine', 'pug');
app.use(express.static("public"));

app.get('/', (req, res) => 
  res.render('index'));

http.listen(PORT, process.env.IP, () => console.log(`listening on ${PORT}`))

io.on('connection', (socket) => {
  console.log('a user connected' + socket.id);
});
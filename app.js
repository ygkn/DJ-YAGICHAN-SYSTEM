const express = require("express");
const app     = express();
const http    = require("http").Server(app);
const PORT    = process.env.PORT || 3000;
const path    = require("path");
const io      = require('socket.io')(http);

const webpack = require("webpack");
const webpackconfing = require("./webpack.config.js");
const compiler = webpack(webpackconfing);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackconfing.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.set('view engine', 'pug');
app.use(express.static("public"));

app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, "src", "index.html")));

http.listen(PORT, process.env.IP, () => console.log(`listening on ${PORT}`))

io.on('connection', (socket) => {
  socket.emit("init", socket.id)
});
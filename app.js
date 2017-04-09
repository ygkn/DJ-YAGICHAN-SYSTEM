const express = require("express");
const http    = require("http").Server(app);
const PORT    = process.env.PORT || 3000;
const path    = require("path");
const app     = express();

app.set('view engine', 'pug');
app.use(express.static("public"));

app.get('/', (req, res) => 
  res.render('index'));

http.listen(PORT, () => console.log(`listening on ${PORT}`))

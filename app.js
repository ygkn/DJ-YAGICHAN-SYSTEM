const app  = require("express")();
const http = require("http").Server(app);
const PORT = process.env.PORT || 3000;
const path = require("path");

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "index.html")));

http.listen(PORT, () => console.log(`listening on ${PORT}`))

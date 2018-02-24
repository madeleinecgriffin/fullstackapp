//app and dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//routes
app.get("/", function (req, res) {
  //get something and send back to the user
  //home route
  //path is part of node - it makes an absolute path instead of local so it works on more than one computer
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/all", function (req, res) {
  res.send("some data");
});


//starts server to listen
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
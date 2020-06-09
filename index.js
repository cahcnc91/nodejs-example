var express = require('express');
var app = express();

// Request handling
app.get('/', function (req, res) {
  res.send("Hello world")
});


// server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app running');
});

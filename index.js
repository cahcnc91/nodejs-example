var express = require("express");
var app = express();
require('dotenv').config()

console.log(process.env.DB_PASS)

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER, 
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
})

// Request handling
app.get("/", function (req, res) {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  res.send('Hello world')
});

// server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

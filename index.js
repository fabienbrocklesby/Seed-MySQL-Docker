const express = require('express');
const mysql = require('mysql2');

const mysqlConfig = {
  host: "db",
  user: "fabien",
  password: "password",
  database: "mydb"
};

let con = null;

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/connect', function (req, res) {
  con =  mysql.createConnection(mysqlConfig);
  con.connect(function(err) {
    if (err) throw err;
    res.send('connected');
  });
});

app.listen(3000);
